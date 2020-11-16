import { Document, HookNextFunction } from 'mongoose';
import autoIncrementModelID from '../models/counter';

export default function autoincrement(
  this: Document,
  next: HookNextFunction,
) {
  if (!this.isNew) {
    return next();
  }

  autoIncrementModelID('activities', this, next);
}
