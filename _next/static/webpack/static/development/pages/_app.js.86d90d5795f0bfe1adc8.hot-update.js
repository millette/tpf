webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_ui_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @theme-ui/sidenav */ "./node_modules/@theme-ui/sidenav/dist/index.esm.js");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme.js */ "./theme.js");
/* harmony import */ var _components_cols_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cols.js */ "./components/cols.js");
/* harmony import */ var _components_links_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/links.mdx */ "./components/links.mdx");

var _jsxFileName = "/home/millette/tpf/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// npm


 // <Links pathname={"/page2"} components={{ wrapper: Pagination }} />
// self




/*
const wrapper = ({ children, ...props }) => (
  <Flex mx={3}>
    <Box>
      {children}
    </Box>
  </Flex>
)
*/

var mdComponents = {
  // wrapper,
  Button: theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"],
  a: function a(_ref) {
    var href = _ref.href,
        children = _ref.children;
    return href.indexOf("://") === -1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      as: "" + href,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Styled"].a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, children)) : __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Styled"].a, {
      target: "_blank",
      rel: "noopener noreferrer",
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("sup", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "\u29C9"), "\xA0", children);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    components: mdComponents,
    theme: _theme_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    mx: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: {
      minWidth: "12rem"
    },
    px: 3,
    mx: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_cols_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_theme_ui_sidenav__WEBPACK_IMPORTED_MODULE_4__["Sidenav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_links_mdx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    px: 3,
    mx: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=_app.js.86d90d5795f0bfe1adc8.hot-update.js.map