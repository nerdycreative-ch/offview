/*! maphilight 30-05-2021 */

!(function (t, i) {
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : i(t.jQuery);
})(this, function (d) {
  var l, c, f, p, u, g, m, e, v, w, y;
  if (
    ((c = !!document.createElement("canvas").getContext),
    (l = (function () {
      var t = document.createElement("div");
      t.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
      var i = t.firstChild;
      return (
        (i.style.behavior = "url(#default#VML)"), !i || "object" == typeof i.adj
      );
    })()),
    c || l)
  ) {
    if (c) {
      (e = function (t) {
        return Math.max(0, Math.min(parseInt(t, 16), 255));
      }),
        (v = function (t, i) {
          return (
            "rgba(" +
            e(t.substr(0, 2)) +
            "," +
            e(t.substr(2, 2)) +
            "," +
            e(t.substr(4, 2)) +
            "," +
            i +
            ")"
          );
        }),
        (f = function (t) {
          var i = d(
            '<canvas style="width:' +
              d(t).width() +
              "px;height:" +
              d(t).height() +
              'px;"></canvas>'
          ).get(0);
          return (
            i.getContext("2d").clearRect(0, 0, d(t).width(), d(t).height()), i
          );
        });
      function b(t, e, a, o, r) {
        if (((o = o || 0), (r = r || 0), t.beginPath(), "rect" == e))
          t.rect(a[0] + o, a[1] + r, a[2] - a[0], a[3] - a[1]);
        else if ("poly" == e)
          for (t.moveTo(a[0] + o, a[1] + r), i = 2; i < a.length; i += 2)
            t.lineTo(a[i] + o, a[i + 1] + r);
        else "circ" == e && t.arc(a[0] + o, a[1] + r, a[2], 0, 2 * Math.PI, !1);
        t.closePath();
      }
      (p = function (t, i, e, a, o) {
        var r = t.getContext("2d");
        if (a.shadow) {
          r.save(), "inside" == a.shadowPosition && (b(r, i, e), r.clip());
          var s = 100 * t.width,
            n = 100 * t.height;
          b(r, i, e, s, n),
            (r.shadowOffsetX = a.shadowX - s),
            (r.shadowOffsetY = a.shadowY - n),
            (r.shadowBlur = a.shadowRadius),
            (r.shadowColor = v(a.shadowColor, a.shadowOpacity));
          var h = a.shadowFrom;
          h || (h = "outside" == a.shadowPosition ? "fill" : "stroke"),
            "stroke" == h
              ? ((r.strokeStyle = "rgba(0,0,0,1)"), r.stroke())
              : "fill" == h && ((r.fillStyle = "rgba(0,0,0,1)"), r.fill()),
            r.restore(),
            "outside" == a.shadowPosition &&
              (r.save(),
              b(r, i, e),
              (r.globalCompositeOperation = "destination-out"),
              (r.fillStyle = "rgba(0,0,0,1);"),
              r.fill(),
              r.restore());
        }
        r.save(),
          b(r, i, e),
          a.fill && ((r.fillStyle = v(a.fillColor, a.fillOpacity)), r.fill()),
          a.stroke &&
            ((r.strokeStyle = v(a.strokeColor, a.strokeOpacity)),
            (r.lineWidth = a.strokeWidth),
            r.stroke()),
          r.restore(),
          a.fade && d(t).css("opacity", 0).animate({ opacity: 1 }, 100);
      }),
        (u = function (t) {
          t.getContext("2d").clearRect(0, 0, t.width, t.height);
        });
    } else
      (f = function (t) {
        return d(
          '<var style="zoom:1;overflow:hidden;display:block;width:' +
            t.width +
            "px;height:" +
            t.height +
            'px;"></var>'
        ).get(0);
      }),
        (p = function (t, i, e, a, o) {
          var r, s, n, h;
          for (var l in e) e[l] = parseInt(e[l], 10);
          (r =
            '<v:fill color="#' +
            a.fillColor +
            '" opacity="' +
            (a.fill ? a.fillOpacity : 0) +
            '" />'),
            (s = a.stroke
              ? 'strokeweight="' +
                a.strokeWidth +
                '" stroked="t" strokecolor="#' +
                a.strokeColor +
                '"'
              : 'stroked="f"'),
            (n = '<v:stroke opacity="' + a.strokeOpacity + '"/>'),
            "rect" == i
              ? (h = d(
                  '<v:rect name="' +
                    o +
                    '" filled="t" ' +
                    s +
                    ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' +
                    e[0] +
                    "px;top:" +
                    e[1] +
                    "px;width:" +
                    (e[2] - e[0]) +
                    "px;height:" +
                    (e[3] - e[1]) +
                    'px;"></v:rect>'
                ))
              : "poly" == i
              ? (h = d(
                  '<v:shape name="' +
                    o +
                    '" filled="t" ' +
                    s +
                    ' coordorigin="0,0" coordsize="' +
                    t.width +
                    "," +
                    t.height +
                    '" path="m ' +
                    e[0] +
                    "," +
                    e[1] +
                    " l " +
                    e.join(",") +
                    ' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:' +
                    t.width +
                    "px;height:" +
                    t.height +
                    'px;"></v:shape>'
                ))
              : "circ" == i &&
                (h = d(
                  '<v:oval name="' +
                    o +
                    '" filled="t" ' +
                    s +
                    ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' +
                    (e[0] - e[2]) +
                    "px;top:" +
                    (e[1] - e[2]) +
                    "px;width:" +
                    2 * e[2] +
                    "px;height:" +
                    2 * e[2] +
                    'px;"></v:oval>'
                )),
            (h.get(0).innerHTML = r + n),
            d(t).append(h);
        }),
        (u = function (t) {
          var i = d("<div>" + t.innerHTML + "</div>");
          i.children("[name=highlighted]").remove(), d(t).html(i.html());
        });
    (g = function (t) {
      var i,
        e,
        a = (t.getAttribute("shape") || "rect").toLowerCase().substr(0, 4);
      if ("defa" !== a) {
        for (
          e = (t.getAttribute("coords") || "").split(","), i = 0;
          i < e.length;
          i++
        )
          e[i] = parseFloat(e[i]);
        return [a, e];
      }
    }),
      (y = function (t, i) {
        var e = d(t);
        return d.extend(
          {},
          i,
          !!d.metadata && e.metadata(),
          e.data("maphilight")
        );
      }),
      (w = function (t) {
        return (
          !!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth)
        );
      });
    var t = !(m = {
      position: "absolute",
      left: 0,
      top: 0,
      padding: 0,
      border: 0,
    });
    (d.fn.maphilight = function (h) {
      return (
        (h = d.extend({}, d.fn.maphilight.defaults, h)),
        c ||
          t ||
          (d(window).ready(function () {
            document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
            var t = document.createStyleSheet();
            d.each(
              [
                "shape",
                "rect",
                "oval",
                "circ",
                "fill",
                "stroke",
                "imagedata",
                "group",
                "textbox",
              ],
              function () {
                t.addRule(
                  "v\\:" + this,
                  "behavior: url(#default#VML); antialias:true"
                );
              }
            );
          }),
          (t = !0)),
        this.each(function () {
          var e, t, r, s, n, a, i;
          if (((e = d(this)), !w(this)))
            return window.setTimeout(function () {
              e.maphilight(h);
            }, 200);
          if (
            ((r = d.extend(
              {},
              h,
              !!d.metadata && e.metadata(),
              e.data("maphilight")
            )),
            (i = e.get(0).getAttribute("usemap")) &&
              ((s = d('map[name="' + i.substr(1) + '"]')),
              e.is('img,input[type="image"]') && i && 0 < s.length))
          ) {
            if (e.hasClass("maphilighted")) {
              var o = e.parent();
              e.insertBefore(o), o.remove(), d(s).unbind(".maphilight");
            }
            this.src.replace(/[\n\r]/g, ""),
              (t = d("<div></div>").css({
                display: "block",
                background: 'url("' + this.src + '")',
                "background-size": "contain",
                "background-repeat": "no-repeat",
                position: "relative",
                padding: 0,
                width: this.width,
                height: this.height,
              })),
              r.wrapClass &&
                (!0 === r.wrapClass
                  ? t.addClass(d(this).attr("class"))
                  : t.addClass(r.wrapClass)),
              e.before(t).css("opacity", 1e-10).css(m).remove(),
              l && e.css("filter", "Alpha(opacity=0)"),
              t.append(e),
              (n = f(this)),
              d(n).css(m),
              (n.height = this.height),
              (n.width = this.width),
              d(s)
                .bind("alwaysOn.maphilight", function () {
                  a && u(a),
                    c || d(n).empty(),
                    d(s)
                      .find("area[coords]")
                      .each(function () {
                        var t, i;
                        if ((i = y(this, r)).alwaysOn) {
                          if (
                            (!a &&
                              c &&
                              ((a = f(e[0])),
                              d(a).css(m),
                              (a.width = e[0].width),
                              (a.height = e[0].height),
                              e.before(a)),
                            (i.fade = i.alwaysOnFade),
                            !(t = g(this)))
                          )
                            return;
                          p(c ? a : n, t[0], t[1], i, "");
                        }
                      });
                })
                .trigger("alwaysOn.maphilight")
                .bind("mouseover.maphilight focusin.maphilight", function (t) {
                  var i,
                    e,
                    a = t.target;
                  if (!(e = y(a, r)).neverOn && !e.alwaysOn) {
                    if (!(i = g(a))) return;
                    if ((p(n, i[0], i[1], e, "highlighted"), e.groupBy)) {
                      "string" == typeof e.groupBy && (e.groupBy = [e.groupBy]);
                      var o = d(this);
                      d.each(e.groupBy, function (t, i) {
                        var e;
                        e = /^[a-zA-Z][\-a-zA-Z]+$/.test(i)
                          ? s.find("area[" + i + '="' + o.attr(i) + '"]')
                          : s.find(i);
                        var a = this;
                        e.each(function () {
                          if (this != a) {
                            var t = y(this, r);
                            if (!t.neverOn && !t.alwaysOn) {
                              var i = g(this);
                              p(n, i[0], i[1], t, "highlighted");
                            }
                          }
                        });
                      });
                    }
                    c || d(n).append("<v:rect></v:rect>");
                  }
                })
                .bind("mouseout.maphilight focusout.maphilight", function (t) {
                  u(n);
                }),
              e.before(n),
              e.addClass("maphilighted");
          }
        })
      );
    }),
      (d.fn.maphilight.defaults = {
        fill: !0,
        fillColor: "000000",
        fillOpacity: 0.2,
        stroke: !0,
        strokeColor: "ff0000",
        strokeOpacity: 1,
        strokeWidth: 1,
        fade: !0,
        alwaysOn: !1,
        neverOn: !1,
        groupBy: !1,
        wrapClass: !0,
        shadow: !1,
        shadowX: 0,
        shadowY: 0,
        shadowRadius: 6,
        shadowColor: "000000",
        shadowOpacity: 0.8,
        shadowPosition: "outside",
        shadowFrom: !1,
      });
  } else
    d.fn.maphilight = function () {
      return this;
    };
});
