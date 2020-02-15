webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/pager.js":
/*!*****************************!*\
  !*** ./components/pager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pager_tu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pager-tu.js */ "./components/pager-tu.js");
/* harmony import */ var _portfolio_links_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-links.mdx */ "./components/portfolio-links.mdx");

var _jsxFileName = "/home/millette/tpf/components/pager.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */
// npm
// import { jsx, Styled } from 'theme-ui'
 // import { Pagination } from '@theme-ui/sidenav'

 // import Link from "next/link"
// import { Location } from '@reach/router'
// self




var wrapper = function wrapper(props) {
  console.log("PAGINATION", _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props));
  console.log("PAGINATION-pn", props.pathname);
  console.log("PAGINATION-chld", _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.children));
  console.log("PAGINATION-chld-props", _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.children.props));
  console.log("PAGINATION-comps", _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.components));
  return Object(_pager_tu_js__WEBPACK_IMPORTED_MODULE_4__["Pagination"])(props);
};

var components = {
  wrapper: wrapper
  /*
  a: ({ href, children }) => {
    console.log("HREF-PAGER", href)
    return href.indexOf("://") === -1 ? (
      <Link href={href} as={process.env.BACKEND_URL + href} passHref>
        <Styled.a>{children}</Styled.a>
      </Link>
    ) : (
      <Styled.a target="_blank" rel="noopener noreferrer" href={href}>
        <sup>⧉</sup>&nbsp;{children}
      </Styled.a>
    )
  }
  */

};
/*


      components={{
        wrapper: Pagination,
        a: ({ href, children }) =>
        href.indexOf("://") === -1 ? (
          <Link href={href} as={process.env.BACKEND_URL + href} passHref>
            <Styled.a>{children}</Styled.a>
          </Link>
        ) : (
          <Styled.a target="_blank" rel="noopener noreferrer" href={href}>
            <sup>⧉</sup>&nbsp;{children}
          </Styled.a>
        ),




      }}



*/

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_portfolio_links_mdx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pathname: router.pathname,
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  });
});

/***/ }),

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
/* harmony import */ var _components_footer_mdx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer.mdx */ "./components/footer.mdx");
/* harmony import */ var _components_pager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/pager.js */ "./components/pager.js");

var _jsxFileName = "/home/millette/tpf/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */
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
  Pager: _components_pager_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  Flex: theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"],
  Box: theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"],
  Button: theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"],
  a: function a(_ref) {
    var href = _ref.href,
        children = _ref.children;
    console.log("HREF-PAGER", href);
    return href.indexOf("://") === -1 ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      as: "" + href,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Styled"].a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, children)) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Styled"].a, {
      target: "_blank",
      rel: "noopener noreferrer",
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("sup", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\u29C9"), "\xA0", children);
  }
}; //  sx={{width:"100%"}}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    components: mdComponents,
    theme: _theme_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    mx: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: {
      minWidth: "15rem"
    },
    px: 3,
    mx: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_cols_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_theme_ui_sidenav__WEBPACK_IMPORTED_MODULE_4__["Sidenav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_links_mdx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    px: 3,
    mx: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_footer_mdx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=_app.js.2740b96106dd440cbf06.hot-update.js.map