/*! SKPlayer */ ! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("skPlayer", [], e) : "object" == typeof exports ? exports.skPlayer = e() : t.skPlayer = e()
}(this, function () {
    return function (t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 0)
    }([
        function (t, e, n) {
            "use strict";

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }
                return function (e, n, o) {
                    return n && t(e.prototype, n), o && t(e, o), e
                }
            }();
            console.log("%cSKPlayer 3.0.7", "color:#D94240"), n(1);
            var s = {
                    leftDistance: function (t) {
                        for (var e = t.offsetLeft, n = void 0; t.offsetParent;) t = t.offsetParent, e += t.offsetLeft;
                        return n = document.body.scrollLeft + document.documentElement.scrollLeft, e - n
                    }, timeFormat: function (t) {
                        var e = parseInt(t / 60),
                            n = parseInt(t % 60);
                        return (e < 10 ? "0" + e : e) + ":" + (n < 10 ? "0" + n : n)
                    }, percentFormat: function (t) {
                        return (100 * t).toFixed(2) + "%"
                    }, ajax: function (t) {
                        t.beforeSend && t.beforeSend();
                        var e = new XMLHttpRequest;
                        e.onreadystatechange = function () {
                            4 === e.readyState && (e.status >= 200 && e.status < 300 ? t.success && t.success(e.responseText) : t.fail && t.fail(e.status))
                        }, e.open("GET", t.url), e.send(null)
                    }
                },
                i = !1,
                a = "http://163.opdays.com/",
                l = function () {
                    function t(e) {
                        var n = this;
                        if (o(this, t), i) return console.error("SKPlayer只能存在一个实例！"), Object.create(null);
                        i = !0;
                        var r = {
                            element: document.getElementById("skPlayer"),
                            autoplay: !1,
                            mode: "listloop",
                            listshow: !0
                        };
                        for (var l in r) e.hasOwnProperty(l) || (e[l] = r[l]);
                        if (this.option = e, !(this.option.music && this.option.music.type && this.option.music.source)) return console.error("请正确配置对象！"), Object.create(null);
                        this.root = this.option.element, this.type = this.option.music.type, this.music = this.option.music.source, this.isMobile = /mobile/i.test(window.navigator.userAgent), this.toggle = this.toggle.bind(this), this.toggleList = this.toggleList.bind(this), this.toggleMute = this.toggleMute.bind(this), this.switchMode = this.switchMode.bind(this), "file" === this.type ? (this.root.innerHTML = this.template(), this.init(), this.bind()) : "cloud" === this.type && (this.root.innerHTML = '<p class="skPlayer-tip-loading">LOADING</p>', s.ajax({
                            url: a + "playlist?id=" + this.music,
                            beforeSend: function () {
                                console.log("SKPlayer正在努力的拉取歌单 ...")
                            }, success: function (t) {
                                console.log("歌单拉取成功！"), n.music = JSON.parse(t), n.root.innerHTML = n.template(), n.init(), n.bind()
                            }, fail: function (t) {
                                console.error("歌单拉取失败！ 错误码：" + t)
                            }
                        }))
                    }
                    return r(t, [{
                        key: "template",
                        value: function () {
                            var t = '\n            <audio class="skPlayer-source" src="' + ("file" === this.type ? this.music[0].src : "") + '" preload="auto"></audio>\n \ <p class="skPlayer-time">\n   <span class="skPlayer-cur">00:00</span><span class="skPlayer-total">00:00</span>\n  </p>\n   <div class="clr"></div>\n    <div class="skPlayer-control">\n     <div class="skPlayer-percent">\n         <img class="loadingimg" style="display:none;" src="/public/images/loading.gif"></img> <div class="img"></div>           <div class="skPlayer-line-loading"></div>\n                    <div class="skPlayer-line"></div>\n                </div>\n                         <div class="skPlayer-volume" style="' + (this.isMobile ? "display:none;" : "") + '">\n                    <i class="skPlayer-icon"></i>\n                    <div class="skPlayer-percent">\n                        <div class="skPlayer-line"></div>\n                    </div>\n                </div>\n                <div class="skPlayer-list-switch" style="display:none;">\n                    <i class="skPlayer-list-icon"></i>\n                </div>\n                <i class="' + ("singleloop" === this.option.mode ? "skPlayer-mode skPlayer-mode-loop" : "skPlayer-mode") + '"  style="display:none;"></i>\n            </div>\n     <div class="skPlayer-picture">\n                <img class="skPlayer-cover" src="' + this.music[0].cover + '" alt="" style="display:none;">\n                <a href="javascript:;" class="skPlayer-play-btn">\n                    <span class="skPlayer-left"></span>\n                    <span class="skPlayer-right"></span>\n                </a>\n     <img class="skPlayer-prev" src="/public/images/btn_prev.png"></img> <img class="skPlayer-next" src="/public/images/btn_next.png"></img>       </div>\n             <ul class="skPlayer-list" style="display:none;">\n        ';
                            for (var e in this.music) t += '\n                <li data-index="' + e + '">\n                    <i class="skPlayer-list-sign"></i>\n                    <span class="skPlayer-list-index">' + (parseInt(e) + 1) + '</span>\n                    <span class="skPlayer-list-name" title="' + this.music[e].name + '">' + this.music[e].name + '</span>\n                    <span class="skPlayer-list-author" title="' + this.music[e].author + '">' + this.music[e].author + "</span>\n                </li>\n            ";
                            return t += '\n            </ul><div class="clr"></div>\n        '
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            this.dom = {
                                cover: this.root.querySelector(".skPlayer-cover"),
                                playbutton: this.root.querySelector(".skPlayer-play-btn"),
                                name: this.root.querySelector(".skPlayer-name"),
                                author: this.root.querySelector(".skPlayer-author"),
                                timeline_total: this.root.querySelector(".skPlayer-percent"),
                                timeline_loaded: this.root.querySelector(".skPlayer-line-loading"),
                                timeline_played: this.root.querySelector(".skPlayer-percent .skPlayer-line"),
                			played_pos: this.root.querySelector(".skPlayer-percent .img"),
                                timetext_total: this.root.querySelector(".skPlayer-total"),
                			loading_img: this.root.querySelector(".loadingimg"),
                                timetext_played: this.root.querySelector(".skPlayer-cur"),
                                volumebutton: this.root.querySelector(".skPlayer-icon"),
                                volumeline_total: this.root.querySelector(".skPlayer-volume .skPlayer-percent"),
                                volumeline_value: this.root.querySelector(".skPlayer-volume .skPlayer-line"),
                                switchbutton: this.root.querySelector(".skPlayer-list-switch"),
                                modebutton: this.root.querySelector(".skPlayer-mode"),
                                musiclist: this.root.querySelector(".skPlayer-list"),
                                musicitem: this.root.querySelectorAll(".skPlayer-list li")
                            }, this.audio = this.root.querySelector(".skPlayer-source"), this.option.listshow && (this.root.className = "skPlayer-list-on"), "singleloop" === this.option.mode && (this.audio.loop = !0), this.dom.musicitem[0].className = "skPlayer-curMusic", "cloud" === this.type && s.ajax({
                                url: a + "song/detail?id=" + this.music[0].song_id,
                                beforeSend: function () {
                                    console.log("SKPlayer正在努力的拉取歌曲 ...")
                                }, success: function (e) {
                                    console.log("歌曲拉取成功！");
                                    var n = JSON.parse(e).url;
                                    t.audio.src = n
                                }, fail: function (t) {
                                    console.error("歌曲拉取失败！ 错误码：" + t)
                                }
                            })
                        }
                    }, {
                        key: "bind",
                        value: function () {
                            var t = this;
                            this.updateLine = function () {
                                var e = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.audio.duration : 0;
                                t.dom.timeline_loaded.style.width = s.percentFormat(e)
                            }, this.audio.addEventListener("durationchange", function (e) {
                                t.dom.timetext_total.innerHTML = s.timeFormat(t.audio.duration), t.updateLine()
                            }), this.audio.addEventListener("progress", function (e) {
                                t.updateLine()
                            }), this.audio.addEventListener("canplay", function (e) {
                                t.option.autoplay && !t.isMobile && t.play()
                            }), this.audio.addEventListener("timeupdate", function (e) {
                                var n = t.audio.currentTime / t.audio.duration;
                                t.dom.timeline_played.style.width = s.percentFormat(n), t.dom.timetext_played.innerHTML = s.timeFormat(t.audio.currentTime);
                			if (t.audio.currentTime>1) {
                				t.dom.loading_img.style.display='none';
                			}
                			if ((n*100).toFixed(2)<96) {
                				t.dom.played_pos.style.left= s.percentFormat(n)
                			}
                            }), this.audio.addEventListener("seeked", function (e) {
                                t.play()
                            }), this.audio.addEventListener("ended", function (e) {
                                t.next()
                            }), this.dom.playbutton.addEventListener("click", this.toggle), this.dom.switchbutton.addEventListener("click", this.toggleList), this.isMobile || this.dom.volumebutton.addEventListener("click", this.toggleMute), this.dom.modebutton.addEventListener("click", this.switchMode), this.dom.musiclist.addEventListener("click", function (e) {
                                var n = void 0,
                                    o = void 0,
                                    r = void 0;
                                if ("LI" === e.target.tagName.toUpperCase()) n = e.target;
                                else {
                                    if ("LI" !== e.target.parentElement.tagName.toUpperCase()) return;
                                    n = e.target.parentElement
                                }
                                o = parseInt(n.getAttribute("data-index")), r = parseInt(t.dom.musiclist.querySelector(".skPlayer-curMusic").getAttribute("data-index")), o === r ? t.play() : t.switchMusic(o + 1)
                            }), this.dom.timeline_total.addEventListener("click", function (e) {
                                var n = e || window.event,
                                    o = (n.clientX - s.leftDistance(t.dom.timeline_total)) / t.dom.timeline_total.clientWidth;
                                isNaN(t.audio.duration) || (t.dom.timeline_played.style.width = s.percentFormat(o), t.dom.played_pos.style.left = (o*100).toFixed(2)<96?s.percentFormat(o):"96%", t.dom.timetext_played.innerHTML = s.timeFormat(o * t.audio.duration), t.audio.currentTime = o * t.audio.duration)
                            }), this.isMobile || this.dom.volumeline_total.addEventListener("click", function (e) {
                                var n = e || window.event,
                                    o = (n.clientX - s.leftDistance(t.dom.volumeline_total)) / t.dom.volumeline_total.clientWidth;
                                t.dom.volumeline_value.style.width = s.percentFormat(o), t.audio.volume = o, t.audio.muted && t.toggleMute()
                            })
                        }
                    }, {
                        key: "prev",
                        value: function () {
                            var t = parseInt(this.dom.musiclist.querySelector(".skPlayer-curMusic").getAttribute("data-index"));
                            0 === t ? 1 === this.music.length ? this.play() : this.switchMusic(this.music.length - 1 + 1) : this.switchMusic(t - 1 + 1)
                        }
                    }, {
                        key: "next",
                        value: function () {
                            var t = parseInt(this.dom.musiclist.querySelector(".skPlayer-curMusic").getAttribute("data-index"));
                            t === this.music.length - 1 ? 1 === this.music.length ? this.play() : this.switchMusic(1) : this.switchMusic(t + 1 + 1)
                        }
                    }, {
                        key: "switchMusic",
                        value: function (t) {
                            var e = this;
                            return "number" != typeof t ? void console.error("请输入正确的歌曲序号！") : (t -= 1) < 0 || t >= this.music.length ? void console.error("请输入正确的歌曲序号！") : t == this.dom.musiclist.querySelector(".skPlayer-curMusic").getAttribute("data-index") ? void this.play() : (this.dom.musiclist.querySelector(".skPlayer-curMusic").classList.remove("skPlayer-curMusic"), this.dom.musicitem[t].classList.add("skPlayer-curMusic"), this.dom.name.innerHTML = this.music[t].name, this.dom.author.innerHTML = this.music[t].author, this.dom.cover.src = this.music[t].cover, void("file" === this.type ? (this.audio.src = this.music[t].src, this.play()) : "cloud" === this.type && s.ajax({
                                url: a + "song/detail?id=" + this.music[t].song_id,
                                beforeSend: function () {
                                    console.log("SKPlayer正在努力的拉取歌曲 ...")
                                }, success: function (t) {
                                    console.log("歌曲拉取成功！");
                                    var n = JSON.parse(t).url;
                                    e.audio.src = n, e.play()
                                }, fail: function (t) {
                                    console.error("歌曲拉取失败！ 错误码：" + t)
                                }
                            })))
                        }
                    }, {
                        key: "play",
                        value: function () {
                            this.audio.paused && (this.audio.play(), this.dom.playbutton.classList.add("skPlayer-pause"), this.dom.loading_img.style.display='', this.dom.cover.classList.add("skPlayer-pause"))
                        }
                    }, {
                        key: "pause",
                        value: function () {
                            this.audio.paused || (this.audio.pause(), this.dom.playbutton.classList.remove("skPlayer-pause"), this.dom.cover.classList.remove("skPlayer-pause"))
                        }
                    }, {
                        key: "toggle",
                        value: function () {
                            this.audio.paused ? this.play() : this.pause()
                        }
                    }, {
                        key: "toggleList",
                        value: function () {
                            this.root.classList.contains("skPlayer-list-on") ? this.root.classList.remove("skPlayer-list-on") : this.root.classList.add("skPlayer-list-on")
                        }
                    }, {
                        key: "toggleMute",
                        value: function () {
                            this.audio.muted ? (this.audio.muted = !1, this.dom.volumebutton.classList.remove("skPlayer-quiet"), this.dom.volumeline_value.style.width = s.percentFormat(this.audio.volume)) : (this.audio.muted = !0, this.dom.volumebutton.classList.add("skPlayer-quiet"), this.dom.volumeline_value.style.width = "0%")
                        }
                    }, {
                        key: "switchMode",
                        value: function () {
                            this.audio.loop ? (this.audio.loop = !1, this.dom.modebutton.classList.remove("skPlayer-mode-loop")) : (this.audio.loop = !0, this.dom.modebutton.classList.add("skPlayer-mode-loop"))
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            i = !1, this.audio.pause(), this.root.innerHTML = "";
                            for (var t in this) delete this[t];
                            console.log("该实例已销毁，可重新配置 ...")
                        }
                    }]), t
                }();
            t.exports = l
        },
        function (t, e, n) {
            var o = n(2);
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]);
            var r = {};
            r.transform = void 0;
            n(4)(o, r);
            o.locals && (t.exports = o.locals)
        },
        function (t, e, n) {
            e = t.exports = n(3)(void 0), e.push([t.i, "", ""])
        },
        function (t, e) {
            function n(t, e) {
                var n = t[1] || "",
                    r = t[3];
                if (!r) return n;
                if (e && "function" == typeof btoa) {
                    var s = o(r);
                    return [n].concat(r.sources.map(function (t) {
                        return "/*# sourceURL=" + r.sourceRoot + t + " */"
                    })).concat([s]).join("\n")
                }
                return [n].join("\n")
            }

            function o(t) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
            }
            t.exports = function (t) {
                var e = [];
                return e.toString = function () {
                    return this.map(function (e) {
                        var o = n(e, t);
                        return e[2] ? "@media " + e[2] + "{" + o + "}" : o
                    }).join("")
                }, e.i = function (t, n) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    for (var o = {}, r = 0; r < this.length; r++) {
                        var s = this[r][0];
                        "number" == typeof s && (o[s] = !0)
                    }
                    for (r = 0; r < t.length; r++) {
                        var i = t[r];
                        "number" == typeof i[0] && o[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i))
                    }
                }, e
            }
        },
        function (t, e, n) {
            function o(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = y[o.id];
                    if (r) {
                        r.refs++;
                        for (var s = 0; s < r.parts.length; s++) r.parts[s](o.parts[s]);
                        for (; s < o.parts.length; s++) r.parts.push(u(o.parts[s], e))
                    } else {
                        for (var i = [], s = 0; s < o.parts.length; s++) i.push(u(o.parts[s], e));
                        y[o.id] = {
                            id: o.id,
                            refs: 1,
                            parts: i
                        }
                    }
                }
            }

            function r(t, e) {
                for (var n = [], o = {}, r = 0; r < t.length; r++) {
                    var s = t[r],
                        i = e.base ? s[0] + e.base : s[0],
                        a = s[1],
                        l = s[2],
                        c = s[3],
                        u = {
                            css: a,
                            media: l,
                            sourceMap: c
                        };
                    o[i] ? o[i].parts.push(u) : n.push(o[i] = {
                        id: i,
                        parts: [u]
                    })
                }
                return n
            }

            function s(t, e) {
                var n = m(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var o = P[P.length - 1];
                if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), P.push(e);
                else {
                    if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(e)
                }
            }

            function i(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = P.indexOf(t);
                e >= 0 && P.splice(e, 1)
            }

            function a(t) {
                var e = document.createElement("style");
                return t.attrs.type = "text/css", c(e, t.attrs), s(t, e), e
            }

            function l(t) {
                var e = document.createElement("link");
                return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", c(e, t.attrs), s(t, e), e
            }

            function c(t, e) {
                Object.keys(e).forEach(function (n) {
                    t.setAttribute(n, e[n])
                })
            }

            function u(t, e) {
                var n, o, r, s;
                if (e.transform && t.css) {
                    if (!(s = e.transform(t.css))) return function () {};
                    t.css = s
                }
                if (e.singleton) {
                    var c = b++;
                    n = k || (k = a(e)), o = d.bind(null, n, c, !1), r = d.bind(null, n, c, !0)
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(e), o = h.bind(null, n, e), r = function () {
                    i(n), n.href && URL.revokeObjectURL(n.href)
                }) : (n = a(e), o = p.bind(null, n), r = function () {
                    i(n)
                });
                return o(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            o(t = e)
                        } else r()
                    }
            }

            function d(t, e, n, o) {
                var r = n ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = v(e, r);
                else {
                    var s = document.createTextNode(r),
                        i = t.childNodes;
                    i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(s, i[e]) : t.appendChild(s)
                }
            }

            function p(t, e) {
                var n = e.css,
                    o = e.media;
                if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }

            function h(t, e, n) {
                var o = n.css,
                    r = n.sourceMap,
                    s = void 0 === e.convertToAbsoluteUrls && r;
                (e.convertToAbsoluteUrls || s) && (o = g(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var i = new Blob([o], {
                        type: "text/css"
                    }),
                    a = t.href;
                t.href = URL.createObjectURL(i), a && URL.revokeObjectURL(a)
            }
            var y = {},
                f = function (t) {
                    var e;
                    return function () {
                        return void 0 === e && (e = t.apply(this, arguments)), e
                    }
                }(function () {
                    return window && document && document.all && !window.atob
                }),
                m = function (t) {
                    var e = {};
                    return function (n) {
                        return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
                    }
                }(function (t) {
                    return document.querySelector(t)
                }),
                k = null,
                b = 0,
                P = [],
                g = n(5);
            t.exports = function (t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = f()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = r(t, e);
                return o(n, e),
                    function (t) {
                        for (var s = [], i = 0; i < n.length; i++) {
                            var a = n[i],
                                l = y[a.id];
                            l.refs--, s.push(l)
                        }
                        if (t) {
                            o(r(t, e), e)
                        }
                        for (var i = 0; i < s.length; i++) {
                            var l = s[i];
                            if (0 === l.refs) {
                                for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                                delete y[l.id]
                            }
                        }
                    }
            };
            var v = function () {
                var t = [];
                return function (e, n) {
                    return t[e] = n, t.filter(Boolean).join("\n")
                }
            }()
        },
        function (t, e) {
            t.exports = function (t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host,
                    o = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                    var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
                        return e
                    }).replace(/^'(.*)'$/, function (t, e) {
                        return e
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
                    var s;
                    return s = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(s) + ")"
                })
            }
        }
    ])
});