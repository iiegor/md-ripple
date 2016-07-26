var unit = 'px';
var styles = `
  .ripple-container {
    position: relative;
    overflow: hidden;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    opacity: 0.2;
    transform: scale(0);
    animation: ripple 1s;
    background-color: currentColor;
    pointer-events: none;
  }

  @keyframes ripple {
    0% {
      opacity: 0.2;
      transform: scale(0);
    }

    100% {
      opacity: 0;
      transform: scale(2.5);
    }
  }`;

// append styles to the HEAD
var styleEl = document.createElement('STYLE');
styleEl.type = 'text/css';

if (styleEl.styleSheet) {
  styleEl.styleSheet.cssText = styles;
} else {
  styleEl.appendChild(document.createTextNode(styles));
}

document.getElementsByTagName('HEAD')[0].appendChild(styleEl);

// export ripple method
module.exports = function(evt) {
  var maxSize = Math.max(this.clientWidth, this.clientHeight);

  var ripple = document.createElement('div');
  ripple.style.width = maxSize + unit;
  ripple.style.height = maxSize + unit;

  if (evt && 0 < evt.screenX && 0 < evt.screenY) {
    // spawn ripple at click position
    var bound = evt.currentTarget.getBoundingClientRect();

    var x = evt.clientX - bound.left,
      y = evt.clientY - bound.top;

    ripple.style.left = x - maxSize / 2 + unit;
    ripple.style.top = y - maxSize / 2 + unit;
  } else {
    // unknown click position, spawn centered ripple
    ripple.style.left = (this.clientWidth / 2 - maxSize / 2) + unit;
    ripple.style.top = (this.clientHeight / 2 - maxSize / 2) + unit;
  }

  ripple.classList.add('ripple');

  // prepend ripple
  this.insertBefore(ripple, this.childNodes[0]);

  // remove ripple
  setTimeout(function() {
    this.removeChild(ripple);
  }.bind(this), 1000);
};