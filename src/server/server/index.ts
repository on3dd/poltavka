import {
  Server as HttpServer,
  IncomingMessage,
  ServerResponse,
} from 'http';
import { UrlWithParsedQuery } from 'url';

import next from 'next';
import NextServer, {
  ServerConstructor as NextServerConstructor,
} from 'next/dist/next-server/server/next-server';

import express, { Express, urlencoded } from 'express';
import 'express-async-errors';

import Ws from './ws';
import router from '../routes';
import errorHandler from '../middlewares/errorHandler';

type HandleFunc = (
  req: IncomingMessage,
  res: ServerResponse,
  parsedUrl?: UrlWithParsedQuery | undefined,
) => Promise<void>;

type ServerProps = NextServerConstructor;

export default class Server {
  private app: Express;
  private next: NextServer;
  private nextHandle: HandleFunc;
  private ws: Ws;
  private server!: HttpServer;
  private static instance: Server;

  private constructor(props: ServerProps) {
    this.next = next(props);

    this.nextHandle = this.next.getRequestHandler();

    this.app = express();

    this.app.use(
      urlencoded({
        extended: true,
      }),
    );

    this.app.use('/', router);

    this.app.all('*', (req, res) => {
      return this.nextHandle(req, res);
    });

    // Must be placed after the router
    this.app.use(errorHandler);

    this.ws = Ws.getInstance();
  }

  public async prepare() {
    return this.next.prepare();
  }

  public start(port: number) {
    return new Promise<void>((resolve) => {
      this.server = this.app.listen(port, () => {
        this.ws.start(this.server);

        resolve();
      });
    });
  }

  public close() {
    return new Promise<void>((resolve) => {
      this.server.close(() => {
        this.ws.close();

        resolve();
      });
    });
  }

  public static getInstance({
    dev = false,
    conf = {},
    dir = './',
  }: ServerProps): Server {
    if (!Server.instance) {
      Server.instance = new Server({ dev, conf, dir });
    }

    return Server.instance;
  }
}
