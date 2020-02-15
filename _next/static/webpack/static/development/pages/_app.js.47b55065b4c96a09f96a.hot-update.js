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
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["label", "children", "mdxType", "originalType", "parentName"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    sx: {
      fontSize: 1,
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, label), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    sx: {
      fontSize: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, children));
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
      lineNumber: 63
    },
    __self: this
  }), hasPagination && previous && Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(PaginationLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous.props, {
    label: "Previous:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    sx: {
      mx: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), hasPagination && next && Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(PaginationLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, next.props, {
    label: "Next:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
};

/***/ }),

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
  wrapper: wrapper,
  a: function a(_ref) {
    var href = _ref.href,
        children = _ref.children;
    console.log("HREF-PAGER", href);
    return href.indexOf("://") === -1 ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Link, {
      href: href,
      as: "" + href,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Styled.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, children)) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Styled.a, {
      target: "_blank",
      rel: "noopener noreferrer",
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("sup", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "\u29C9"), "\xA0", children);
  }
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
      lineNumber: 68
    },
    __self: this
  });
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=_app.js.47b55065b4c96a09f96a.hot-update.js.map