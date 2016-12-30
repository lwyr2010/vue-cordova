exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.jpush === 'undefined') {
      return cb(false)
    }

    // pass through the camera object
    Vue.cordova.camera = navigator.jpush

    return cb(true)

  }, false)
}
