'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fingerprintjs = require('fingerprintjs2');

var _fingerprintjs2 = _interopRequireDefault(_fingerprintjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var generateFingerPrint = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var fingerprint;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fingerprint = new Promise(function (resolve, reject) {
              try {
                new _fingerprintjs2.default().get(function (result) {
                  resolve(result);
                });
              } catch (e) {
                reject(e);
              }
            });
            return _context.abrupt('return', fingerprint);

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function generateFingerPrint() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = generateFingerPrint;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmF0ZUZpbmdlclByaW50LmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlRmluZ2VyUHJpbnQiLCJmaW5nZXJwcmludCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwicmVzdWx0IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUE7QUFBQSxxRUFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCQyx1QkFEb0IsR0FDTixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ25ELGtCQUFJO0FBQ0YsOENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxNQUFELEVBQVk7QUFDakNILDBCQUFRRyxNQUFSO0FBQ0QsaUJBRkQ7QUFHRCxlQUpELENBSUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1ZILHVCQUFPRyxDQUFQO0FBQ0Q7QUFDRixhQVJtQixDQURNO0FBQUEsNkNBVW5CTixXQVZtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztrQkFhZUQsbUIiLCJmaWxlIjoiZ2VuZXJhdGVGaW5nZXJQcmludC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaW5nZXJwcmludDIgZnJvbSAnZmluZ2VycHJpbnRqczInXG5cbmNvbnN0IGdlbmVyYXRlRmluZ2VyUHJpbnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZpbmdlcnByaW50ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBuZXcgRmluZ2VycHJpbnQyKCkuZ2V0KChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmluZ2VycHJpbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVGaW5nZXJQcmludFxuIl19