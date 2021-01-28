if (navigator.mediaDevices === undefined) {
  navigator["mediaDevices"] = {};
}
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices["getUserMedia"] = function(constraints) {
    // 首先，如果有getUserMedia的话，就获得它
    const getUserMedia =
      navigator.getUserMedia ||
      navigator.msGetUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
    if (!getUserMedia) {
      return Promise.reject(
        new Error("getUserMedia is not implemented in this browser")
      );
    }
    // 否则，为老的navigator.getUserMedia方法包裹一个Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  };
}
