'use strict';
function curry(fn) {
    var length = fn.length;
    var _args;
    var invoke = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _args = _args.concat(args);
        if (_args.length === length) {
            var val = fn.apply(void 0, _args);
            _args = [];
            return val;
        }
        return invoke;
    };
    return invoke;
}
//# sourceMappingURL=curry.js.map