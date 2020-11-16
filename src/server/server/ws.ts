import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';
import { logger } from '../shared/Logger';

export default class Ws {
  private server: Server;
  private static instance: Ws;

  private constructor() {
    this.server = new Server();

    this.server.on('connect', (socket: Socket) => {
      logger.info(`client connected, id: ${socket.id}`);

      socket.on('message', () => {
        logger.info(`got new message request, client id: ${socket.id}`);

        socket.emit('message', {
          id: Date.now(),
          title: 'fuck niggers from server',
          description: 'i really hate them',
        });
      });
    });
  }

  public start(server: HttpServer) {
    this.server.listen(server);
  }

  public close() {
    return new Promise<void>((resolve) => {
      this.server.close(() => {
        resolve();
      });
    });
  }

  public static getInstance(): Ws {
    if (!Ws.instance) {
      Ws.instance = new Ws();
    }

    return Ws.instance;
  }
}
