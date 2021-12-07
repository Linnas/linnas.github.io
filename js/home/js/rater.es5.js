'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clickEvents = function () {
    function clickEvents() {
        _classCallCheck(this, clickEvents);
    }

    _createClass(clickEvents, [{
        key: 'clickTabBox',


        // static judgeTitleBox(tabBox, ele) {
        //     let tab = tabBox.children
        //     let tabEvent = tab.forEach(function(r) {
        //         if (!r.classList.contains('none')) {
        //             r.classList.add('none')
        //             ele.classList.remove('none')
        //             return
        //         }
        //     })
        //     ele.classList.remove('none')
        // }

        value: function clickTabBox() {
            var tabBox = e('.tabBox'),
                titleCover = e('.titleCover'),
                titleBox = e('.titleBox'),
                title2 = e('.title2');
            tabBox.addEventListener('click', function (event) {
                var self = event.target,
                    name = self.dataset.name;

                if (self != event.currentTarget) {
                    if (!titleCover.classList.contains('none')) {
                        titleCover.classList.add('none');
                    }

                    clickEvents.judgeTabBox(tabBox, self);

                    if (name == '1') {
                        clickEvents.judgeTitleBox(titleBox, name);
                    } else if (name == '2') {
                        clickEvents.judgeTitleBox(titleBox, name);
                    } else if (name == '3') {
                        clickEvents.judgeTitleBox(titleBox, name);
                    } else if (name == '4') {
                        clickEvents.judgeTitleBox(titleBox, name);
                    } else if (name == '5') {
                        clickEvents.judgeTitleBox(titleBox, name);
                    } else if (name == '6') {
                        clickEvents.judgeTitleBox(titleBox, name);
                    }
                }
            });
        }
    }], [{
        key: 'judgeTabBox',
        value: function judgeTabBox(tabBox, ele) {
            var tab = tabBox.children;
            var tabEvent = Array.prototype.forEach.call(tab, function (r) {
                if (r.classList.contains('tab')) {
                    r.classList.remove('tab');
                }
                ele.classList.add('tab');
            });
            return tabEvent;
        }
    }, {
        key: 'judgeTitleBox',
        value: function judgeTitleBox(tabBox, ele) {
            var tab = tabBox.children;
            var tabEvent = Array.prototype.forEach.call(tab, function (r) {
                if (r.dataset.name == ele) {
                    r.classList.remove('none');
                } else {
                    if (!r.classList.contains('none')) {
                        r.classList.add('none');
                    }
                }
            });
            return tabEvent;
        }
    }]);

    return clickEvents;
}();

var _main = function _main() {
    var clickEvent = new clickEvents();
    clickEvent.clickTabBox();
    // clickEvents.clickExample()
    // clickEvent.clickSideslip()
    // clickEvent.clickItem()
};

_main();
