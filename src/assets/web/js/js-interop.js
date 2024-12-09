(function () {
  "use strict";

  window._updateSize = function (target, width, height) {
    let flutterTarget = document.querySelector('#' + target);
    flutterTarget.style.height = height + 'px';
  }

  window.recieveData = function (data) {
    console.log(data);
  }

  window._scroll = function (axis, difference) {
      let currentX = window.pageXOffset
      let currentY = window.pageYOffset
      if (axis == "horizontal") {
        window.scrollTo({
          top: currentY,
          left: currentX + difference,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: currentY + difference,
          left: currentX,
          behavior: "smooth",
        });
      }
    }

  window._initData = {
    'target': null,
    'page': null,
    'id': null,
    'overwriteNavigation': false,
    'isStandalone': false,
    'environment': null,
  };

  window._flutterCallback = function () {};
}());
