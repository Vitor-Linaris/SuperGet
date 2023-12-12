/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (() => {

eval("/*==================== SHOW MENU ====================*/\nvar showMenu = function showMenu(toggleId, navId) {\n  var toggle = document.getElementById(toggleId);\n  var nav = document.getElementById(navId);\n\n  // Validate that variables exist\n  if (toggle && nav) {\n    toggle.addEventListener(\"click\", function () {\n      // We add the show-menu class to the div tag with the nav__menu class\n      nav.classList.toggle(\"active-menu-mobile\");\n      toggle.classList.toggle(\"active-bx\");\n    });\n  }\n};\nshowMenu(\"bx\", \"menu-mobile\");\n\n//# sourceURL=webpack://superget/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/svg-inject.min.js":
/*!*****************************************!*\
  !*** ./src/assets/js/svg-inject.min.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n!function (o, l) {\n  var r,\n    a,\n    s = \"createElement\",\n    g = \"getElementsByTagName\",\n    b = \"length\",\n    E = \"style\",\n    d = \"title\",\n    y = \"undefined\",\n    k = \"setAttribute\",\n    w = \"getAttribute\",\n    x = null,\n    A = \"__svgInject\",\n    C = \"--inject-\",\n    S = new RegExp(C + \"\\\\d+\", \"g\"),\n    I = \"LOAD_FAIL\",\n    t = \"SVG_NOT_SUPPORTED\",\n    L = \"SVG_INVALID\",\n    v = [\"src\", \"alt\", \"onload\", \"onerror\"],\n    j = l[s](\"a\"),\n    G = (typeof SVGRect === \"undefined\" ? \"undefined\" : _typeof(SVGRect)) != y,\n    f = {\n      useCache: !0,\n      copyAttributes: !0,\n      makeIdsUnique: !0\n    },\n    N = {\n      clipPath: [\"clip-path\"],\n      \"color-profile\": x,\n      cursor: x,\n      filter: x,\n      linearGradient: [\"fill\", \"stroke\"],\n      marker: [\"marker\", \"marker-end\", \"marker-mid\", \"marker-start\"],\n      mask: x,\n      pattern: [\"fill\", \"stroke\"],\n      radialGradient: [\"fill\", \"stroke\"]\n    },\n    u = 1,\n    c = 2,\n    O = 1;\n  function T(e) {\n    return (r = r || new XMLSerializer()).serializeToString(e);\n  }\n  function P(e, r) {\n    var t,\n      n,\n      i,\n      o,\n      a = C + O++,\n      f = /url\\(\"?#([a-zA-Z][\\w:.-]*)\"?\\)/g,\n      u = e.querySelectorAll(\"[id]\"),\n      c = r ? [] : x,\n      l = {},\n      s = [],\n      d = !1;\n    if (u[b]) {\n      for (i = 0; i < u[b]; i++) (n = u[i].localName) in N && (l[n] = 1);\n      for (n in l) (N[n] || [n]).forEach(function (e) {\n        s.indexOf(e) < 0 && s.push(e);\n      });\n      s[b] && s.push(E);\n      var v,\n        p,\n        m,\n        h = e[g](\"*\"),\n        y = e;\n      for (i = -1; y != x;) {\n        if (y.localName == E) (m = (p = y.textContent) && p.replace(f, function (e, r) {\n          return c && (c[r] = 1), \"url(#\" + r + a + \")\";\n        })) !== p && (y.textContent = m);else if (y.hasAttributes()) {\n          for (o = 0; o < s[b]; o++) v = s[o], (m = (p = y[w](v)) && p.replace(f, function (e, r) {\n            return c && (c[r] = 1), \"url(#\" + r + a + \")\";\n          })) !== p && y[k](v, m);\n          [\"xlink:href\", \"href\"].forEach(function (e) {\n            var r = y[w](e);\n            /^\\s*#/.test(r) && (r = r.trim(), y[k](e, r + a), c && (c[r.substring(1)] = 1));\n          });\n        }\n        y = h[++i];\n      }\n      for (i = 0; i < u[b]; i++) t = u[i], c && !c[t.id] || (t.id += a, d = !0);\n    }\n    return d;\n  }\n  function V(e, r, t, n) {\n    if (r) {\n      r[k](\"data-inject-url\", t);\n      var i = e.parentNode;\n      if (i) {\n        n.copyAttributes && function c(e, r) {\n          for (var t, n, i, o = e.attributes, a = 0; a < o[b]; a++) if (n = (t = o[a]).name, -1 == v.indexOf(n)) if (i = t.value, n == d) {\n            var f,\n              u = r.firstElementChild;\n            u && u.localName.toLowerCase() == d ? f = u : (f = l[s + \"NS\"](\"http://www.w3.org/2000/svg\", d), r.insertBefore(f, u)), f.textContent = i;\n          } else r[k](n, i);\n        }(e, r);\n        var o = n.beforeInject,\n          a = o && o(e, r) || r;\n        i.replaceChild(a, e), e[A] = u, m(e);\n        var f = n.afterInject;\n        f && f(e, a);\n      }\n    } else D(e, n);\n  }\n  function p() {\n    for (var e = {}, r = arguments, t = 0; t < r[b]; t++) {\n      var n = r[t];\n      for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);\n    }\n    return e;\n  }\n  function _(e, r) {\n    if (r) {\n      var t;\n      try {\n        t = function i(e) {\n          return (a = a || new DOMParser()).parseFromString(e, \"text/xml\");\n        }(e);\n      } catch (o) {\n        return x;\n      }\n      return t[g](\"parsererror\")[b] ? x : t.documentElement;\n    }\n    var n = l.createElement(\"div\");\n    return n.innerHTML = e, n.firstElementChild;\n  }\n  function m(e) {\n    e.removeAttribute(\"onload\");\n  }\n  function n(e) {\n    console.error(\"SVGInject: \" + e);\n  }\n  function i(e, r, t) {\n    e[A] = c, t.onFail ? t.onFail(e, r) : n(r);\n  }\n  function D(e, r) {\n    m(e), i(e, L, r);\n  }\n  function F(e, r) {\n    m(e), i(e, t, r);\n  }\n  function M(e, r) {\n    i(e, I, r);\n  }\n  function q(e) {\n    e.onload = x, e.onerror = x;\n  }\n  function R(e) {\n    n(\"no img element\");\n  }\n  var e = function z(e, r) {\n    var t = p(f, r),\n      h = {};\n    function n(a, f) {\n      f = p(t, f);\n      var e = function e(r) {\n        var e = function e() {\n          var e = f.onAllFinish;\n          e && e(), r && r();\n        };\n        if (a && _typeof(a[b]) != y) {\n          var t = 0,\n            n = a[b];\n          if (0 == n) e();else for (var i = function i() {\n              ++t == n && e();\n            }, o = 0; o < n; o++) u(a[o], f, i);\n        } else u(a, f, e);\n      };\n      return (typeof Promise === \"undefined\" ? \"undefined\" : _typeof(Promise)) == y ? e() : new Promise(e);\n    }\n    function u(u, c, e) {\n      if (u) {\n        var r = u[A];\n        if (r) Array.isArray(r) ? r.push(e) : e();else {\n          if (q(u), !G) return F(u, c), void e();\n          var t = c.beforeLoad,\n            n = t && t(u) || u[w](\"src\");\n          if (!n) return \"\" === n && M(u, c), void e();\n          var i = [];\n          u[A] = i;\n          var l = function l() {\n              e(), i.forEach(function (e) {\n                e();\n              });\n            },\n            s = function f(e) {\n              return j.href = e, j.href;\n            }(n),\n            d = c.useCache,\n            v = c.makeIdsUnique,\n            p = function p(r) {\n              d && (h[s].forEach(function (e) {\n                e(r);\n              }), h[s] = r);\n            };\n          if (d) {\n            var o,\n              a = function a(e) {\n                if (e === I) M(u, c);else if (e === L) D(u, c);else {\n                  var r,\n                    t = e[0],\n                    n = e[1],\n                    i = e[2];\n                  v && (t === x ? (t = P(r = _(n, !1), !1), e[0] = t, e[2] = t && T(r)) : t && (n = function o(e) {\n                    return e.replace(S, C + O++);\n                  }(i))), r = r || _(n, !1), V(u, r, s, c);\n                }\n                l();\n              };\n            if (_typeof(o = h[s]) != y) return void (o.isCallbackQueue ? o.push(a) : a(o));\n            (o = []).isCallbackQueue = !0, h[s] = o;\n          }\n          !function m(e, r, t) {\n            if (e) {\n              var n = new XMLHttpRequest();\n              n.onreadystatechange = function () {\n                if (4 == n.readyState) {\n                  var e = n.status;\n                  200 == e ? r(n.responseXML, n.responseText.trim()) : 400 <= e ? t() : 0 == e && t();\n                }\n              }, n.open(\"GET\", e, !0), n.send();\n            }\n          }(s, function (e, r) {\n            var t = e instanceof Document ? e.documentElement : _(r, !0),\n              n = c.afterLoad;\n            if (n) {\n              var i = n(t, r) || t;\n              if (i) {\n                var o = \"string\" == typeof i;\n                r = o ? i : T(t), t = o ? _(i, !0) : i;\n              }\n            }\n            if (t instanceof SVGElement) {\n              var a = x;\n              if (v && (a = P(t, !1)), d) {\n                var f = a && T(t);\n                p([a, r, f]);\n              }\n              V(u, t, s, c);\n            } else D(u, c), p(L);\n            l();\n          }, function () {\n            M(u, c), p(I), l();\n          });\n        }\n      } else R();\n    }\n    return G && function i(e) {\n      var r = l[g](\"head\")[0];\n      if (r) {\n        var t = l[s](E);\n        t.type = \"text/css\", t.appendChild(l.createTextNode(e)), r.appendChild(t);\n      }\n    }('img[onload^=\"' + e + '(\"]{visibility:hidden;}'), n.setOptions = function (e) {\n      t = p(t, e);\n    }, n.create = z, n.err = function (e, r) {\n      e ? e[A] != c && (q(e), G ? (m(e), M(e, t)) : F(e, t), r && (m(e), e.src = r)) : R();\n    }, o[e] = n;\n  }(\"SVGInject\");\n  \"object\" == ( false ? 0 : _typeof(module)) && \"object\" == _typeof(module.exports) && (module.exports = e);\n}(window, document);\n\n//# sourceURL=webpack://superget/./src/assets/js/svg-inject.min.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/styles.scss */ \"./src/assets/scss/styles.scss\");\n/* harmony import */ var _assets_js_svg_inject_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/svg-inject.min */ \"./src/assets/js/svg-inject.min.js\");\n/* harmony import */ var _assets_js_svg_inject_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_svg_inject_min__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/app */ \"./src/assets/js/app.js\");\n/* harmony import */ var _assets_js_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/logo.png */ \"./src/assets/img/logo.png\");\n/* harmony import */ var _assets_img_login_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/login.svg */ \"./src/assets/img/login.svg\");\n/* harmony import */ var _assets_img_shop_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/shop.svg */ \"./src/assets/img/shop.svg\");\n\n\n\n\n\n\nvar imgLogoMobile = document.getElementById(\"imgLogoMobile\");\nimgLogoMobile.src = _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__;\nvar imgLogoDesktop = document.getElementById(\"imgLogoDesktop\");\nimgLogoDesktop.src = _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__;\nvar imgLoginDesktop = document.getElementById(\"imgLoginDesktop\");\nimgLoginDesktop.src = _assets_img_login_svg__WEBPACK_IMPORTED_MODULE_4__;\nvar imgShopDesktop = document.getElementById(\"imgShopDesktop\");\nimgShopDesktop.src = _assets_img_shop_svg__WEBPACK_IMPORTED_MODULE_5__;\n\n//# sourceURL=webpack://superget/./src/index.js?");

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://superget/./src/assets/scss/styles.scss?");

/***/ }),

/***/ "./src/assets/img/login.svg":
/*!**********************************!*\
  !*** ./src/assets/img/login.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/d37a92ada1a5890da444.svg\";\n\n//# sourceURL=webpack://superget/./src/assets/img/login.svg?");

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/7134c79f83faf292781f.png\";\n\n//# sourceURL=webpack://superget/./src/assets/img/logo.png?");

/***/ }),

/***/ "./src/assets/img/shop.svg":
/*!*********************************!*\
  !*** ./src/assets/img/shop.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/dba6717e36b468330533.svg\";\n\n//# sourceURL=webpack://superget/./src/assets/img/shop.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;