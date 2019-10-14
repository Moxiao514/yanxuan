function bufferMove(obj, json, fn) {
    var speed = 0;
    function getstyle(obj, attr) {
        if (window.getComputedStyle) {
            return getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bstop = true;
        for (var attr in json) {
            var currentvalue = null;
            if (attr === 'opacity') {
                currentvalue = Math.round(getstyle(obj, attr) * 100);
            } else {
                currentvalue = parseInt(getstyle(obj, attr));
            }
            speed = (json[attr] - currentvalue) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (currentvalue !== json[attr]) {
                if (attr === 'opacity') {
                    obj.style.opacity = (currentvalue + speed) / 100;
                    obj.style.filter = 'alpha(opacity=' + (currentvalue + speed) + ')';
                } else {
                    obj.style[attr] = currentvalue + speed + 'px';
                }
                bstop = false;
            }
        }
        if (bstop) {
            clearInterval(obj.timer);
            fn && typeof fn === 'function' && fn();
        }
    }, 1000 / 60);
}