webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/pager-tu.js":
/*!********************************!*\
  !*** ./components/pager-tu.js ***!
  \********************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/home/millette/tpf/components/pager-tu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

/** @jsx jsx */


 // import { jsx, css, ThemeProvider } from 'theme-ui'
// import { MDXProvider } from '@mdx-js/react'
// import React, { useState } from 'react'
// import { Global } from '@emotion/core'
// import merge from 'deepmerge'

var flattenLinks = function flattenLinks(children) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.toArray(children).reduce(function (acc, child) {
    if (child.props && child.props.mdxType === 'a') {
      return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(acc), [child]);
    }

    if (!child.props || !child.props.children) return acc;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.toArray([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(acc), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(flattenLinks(child.props.children))));
  }, []);
};

var removeSlash = function removeSlash(str) {
  return str.length > 1 ? str.replace(/\/$/, '') : str;
};

var PaginationLink = function PaginationLink(_ref) {
  var label = _ref.label,
      children = _ref.children,
      mdxType = _ref.mdxType,
      originalType = _ref.originalType,
      parentName = _ref.parentName,
      href = _ref.href,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["label", "children", "mdxType", "originalType", "parentName", "href"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: href,
    as: "" + href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    sx: {
      fontSize: 1,
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, label), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    sx: {
      fontSize: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, children)));
};

var Pagination = function Pagination(_ref2) {
  var _ref2$pathname = _ref2.pathname,
      pathname = _ref2$pathname === void 0 ? '' : _ref2$pathname,
      children = _ref2.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["pathname", "children"]);

  var links = flattenLinks(children);
  var index = links.findIndex(function (link) {
    return link.props.href === removeSlash(pathname);
  });
  var hasPagination = index > -1;
  var previous = links[index - 1];
  var next = links[index + 1];
  console.log("PREVIOUS", previous);
  console.log("NEXT", next);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    sx: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), hasPagination && previous && Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(PaginationLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous.props, {
    label: "Pr\xE9c\xE9dent:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    sx: {
      mx: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), hasPagination && next && Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(PaginationLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, next.props, {
    label: "Suivant:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })));
};

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
    // console.log("HREF-PAGER", href)
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
//# sourceMappingURL=_app.js.8976b662806ad7aad891.hot-update.js.map