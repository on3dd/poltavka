type AsyncResult = Promise<any>;

export default interface Controller {
  all?: () => AsyncResult;
  find?: (id: any) => AsyncResult;
  create?: (body: any) => AsyncResult;
  update?: (id: any, body: any) => AsyncResult;
  delete?: (id: any) => AsyncResult;
}
