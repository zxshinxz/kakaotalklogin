/*global cordova, module*/

module.exports = {
  login: function (methodName, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "KakaoLogin", "login", []);
  },
  logout: function (methodName, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "KakaoLogin", "logout", []);
  }
};
