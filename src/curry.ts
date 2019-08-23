'use strict';

function curry(fn: any): any {
  const length: number = fn.length;
  let _args: any[];
  const invoke = (...args) => {
    _args = _args.concat(args);
    if (_args.length === length) {
      const val: any = fn(..._args);
      _args = [];
      return val;
    }
    return invoke;
  }
  return invoke;
}