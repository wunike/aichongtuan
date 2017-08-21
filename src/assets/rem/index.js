;(function (doc, win, undefined) {
          var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
            recalc = function () {
              var clientWidth = docEl.clientWidth;
              if (clientWidth === undefined) return;
              docEl.style.fontSize = 100 * (clientWidth / 1080) + 'px';
            };
          if (doc.addEventListener === undefined) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false)
        })(document, window);