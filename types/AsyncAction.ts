import Action from './Action';

export default interface AsyncAction extends Action {
  err: string;
}
