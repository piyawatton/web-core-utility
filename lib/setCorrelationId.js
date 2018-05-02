'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blueimpMd = require('blueimp-md5');

var _blueimpMd2 = _interopRequireDefault(_blueimpMd);

var _generateFingerPrint = require('./generateFingerPrint');

var _generateFingerPrint2 = _interopRequireDefault(_generateFingerPrint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setCorrelationId = function setCorrelationId() {
  (0, _generateFingerPrint2.default)().then(function (uid) {
    localStorage.setItem('correlation-id', 'CID' + (0, _blueimpMd2.default)(uid));
  });
};

exports.default = setCorrelationId;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXRDb3JyZWxhdGlvbklkLmpzIl0sIm5hbWVzIjpbInNldENvcnJlbGF0aW9uSWQiLCJ0aGVuIiwidWlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3Qix1Q0FBc0JDLElBQXRCLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNsQ0MsaUJBQWFDLE9BQWIsQ0FBcUIsZ0JBQXJCLFVBQTZDLHlCQUFJRixHQUFKLENBQTdDO0FBQ0QsR0FGRDtBQUdELENBSkQ7O2tCQU1lRixnQiIsImZpbGUiOiJzZXRDb3JyZWxhdGlvbklkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1kNSBmcm9tICdibHVlaW1wLW1kNSdcbmltcG9ydCBnZW5lcmF0ZUZpbmdlclByaW50IGZyb20gJy4vZ2VuZXJhdGVGaW5nZXJQcmludCdcblxuY29uc3Qgc2V0Q29ycmVsYXRpb25JZCA9ICgpID0+IHtcbiAgZ2VuZXJhdGVGaW5nZXJQcmludCgpLnRoZW4oKHVpZCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3JyZWxhdGlvbi1pZCcsIGBDSUQke21kNSh1aWQpfWApXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldENvcnJlbGF0aW9uSWRcbiJdfQ==