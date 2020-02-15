webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/pager.js":
/*!*****************************!*\
  !*** ./components/pager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _theme_ui_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/sidenav */ "./node_modules/@theme-ui/sidenav/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _portfolio_links_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-links.mdx */ "./components/portfolio-links.mdx");
var _jsxFileName = "/home/millette/tpf/components/pager.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */
// npm



 // import { Location } from '@reach/router'
// self


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_portfolio_links_mdx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pathname: router.pathname,
    components: {
      wrapper: _theme_ui_sidenav__WEBPACK_IMPORTED_MODULE_2__["Pagination"],
      a: function a(_ref) {
        var href = _ref.href,
            children = _ref.children;
        return href.indexOf("://") === -1 ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: href,
          as: "" + href,
          passHref: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Styled"].a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, children)) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Styled"].a, {
          target: "_blank",
          rel: "noopener noreferrer",
          href: href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sup", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, "\u29C9"), "\xA0", children);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=_app.js.b6ed55d0f0413e128003.hot-update.js.map