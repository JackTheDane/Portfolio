(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./components/Nav/Nav.module.scss":
/*!****************************************!*\
  !*** ./components/Nav/Nav.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/postcss-loader/src??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Nav.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Nav/Nav.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function (element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/postcss-loader/src??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Nav.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Nav/Nav.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/postcss-loader/src??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Nav.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Nav/Nav.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Nav/Nav.tsx":
/*!********************************!*\
  !*** ./components/Nav/Nav.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.module.scss */ "./components/Nav/Nav.module.scss");
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowWidth */ "./hooks/useWindowWidth.ts");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "F:\\Projekter\\PortfolioSSG\\components\\Nav\\Nav.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // import LogoAndText from '../../images/mainLogo-white.png';
// import Logo from '../../images/mainLogoOnly-white.png';





var NavLink = function NavLink(_ref) {
  var href = _ref.href,
      exact = _ref.exact,
      linkAs = _ref.as,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      aTagProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["href", "exact", "as", "activeClassName", "className"]);

  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var linkProps = {
    href: href,
    as: linkAs
  };
  var aTagClassName = className || '';

  if (router && activeClassName && (!exact ? router.pathname.indexOf(linkAs || href) === 0 : router.pathname.replace(linkAs || href, '') === '')) {
    aTagClassName += ' ' + activeClassName;
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, linkProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, aTagProps, {
    className: aTagClassName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  })));
};

var menuItems = [{
  title: 'Om mig',
  url: '',
  icon: 'people',
  isExact: true
}, {
  title: 'Udvalgte Projekter',
  url: 'projects',
  icon: 'bookmark',
  isExact: false
}, {
  title: 'Kontakt',
  url: 'contact',
  icon: 'message',
  isExact: true
}];

var Nav = function Nav() {
  var windowWidth = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"])();
  var isInMobileView = windowWidth < 1200;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isMobileMenuOpen = _useState[0],
      setIsMobileMenuOpen = _useState[1];

  var navClass = '';
  var menuClass = '';

  if (isInMobileView && isMobileMenuOpen) {
    navClass = _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['nav--shown'];
    menuClass = _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['menu--shown'];
  }

  var closeMobileMenu = function closeMobileMenu() {
    return setIsMobileMenuOpen(false);
  };

  var toggleMobileMenu = function toggleMobileMenu() {
    return setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return __jsx("nav", {
    className: "".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.nav, " ").concat(navClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, !isInMobileView ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("a", {
    onClick: closeMobileMenu,
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['nav__logo'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/mainLogo-white.png",
    className: "img-fit-contain",
    alt: "MBP Media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }))) : __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['nav__mobileMenu'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['nav__logo--mobile'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/mainLogoOnly-white.png",
    className: "img-fit-contain",
    alt: "MBP Media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }))), __jsx("button", {
    onClick: toggleMobileMenu,
    className: "btn btn-lg btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "icon ".concat(isMobileMenuOpen ? 'icon-cross' : 'icon-menu', " mr-2"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), isMobileMenuOpen ? 'Close' : 'Menu')), __jsx("ul", {
    className: "".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['menu'], " ").concat(menuClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, menuItems.map(function (item, i) {
    return __jsx("span", {
      key: 'navItem_' + i,
      className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['menu__item-wrapper'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, __jsx(NavLink, {
      onClick: closeMobileMenu,
      exact: item.isExact,
      activeClassName: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['menu__item--selected'],
      href: "/".concat(item.url),
      className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['menu__item'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 19
      }
    }, item.icon && __jsx("i", {
      className: "icon icon-".concat(item.icon, " ").concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['menu__item-icon']),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 35
      }
    }), item.title)));
  })), __jsx("div", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mediaPlatforms,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener",
    href: "https://www.linkedin.com/in/martin-b%C3%B8je-petersen-74459173/",
    className: "btn btn-link ".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mediaPlatformsButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx("svg", {
    style: {
      marginTop: -2
    },
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, " ", __jsx("path", {
    d: "M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 78
    }
  }), " ", __jsx("path", {
    d: "M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 314
    }
  })), "LinkedIn"), __jsx("a", {
    target: "_blank",
    rel: "noopener",
    href: "https://github.com/JackTheDane",
    className: "btn btn-link ".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mediaPlatformsButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx("svg", {
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 63
    }
  })), "GitHub"), __jsx("a", {
    target: "_blank",
    rel: "noopener",
    href: "/documents/martin-boeje-petersen_cv.pdf",
    className: "btn btn-link ".concat(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mediaPlatformsButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon icon-people mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }), "CV")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./hooks/useWindowWidth.ts":
/*!*********************************!*\
  !*** ./hooks/useWindowWidth.ts ***!
  \*********************************/
/*! exports provided: useWindowWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowWidth", function() { return useWindowWidth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useWindowWidth = function useWindowWidth() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      windowWidth = _useState[0],
      setWindowWidth = _useState[1];

  var updateWindowWidth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (window) setWindowWidth(window.innerWidth);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (window) {
      window.addEventListener('resize', updateWindowWidth);
      updateWindowWidth();
    }

    ;
    return function () {
      if (window) window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);
  return windowWidth;
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Nav/Nav.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Nav/Nav.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Nav_mediaPlatforms__2q-Ke {\n  -webkit-animation: Nav_fadeInLeft__KCg4E 0.3s ease-out 0.5s both;\n          animation: Nav_fadeInLeft__KCg4E 0.3s ease-out 0.5s both;\n  max-width: 400px;\n  padding: 0 20px;\n  width: 100%;\n  margin-top: 5px;\n  flex-direction: row;\n  align-items: center;\n  margin-top: auto;\n  justify-content: space-around;\n  display: none;\n}\n\n.Nav_mediaPlatformsButton__1x5fM {\n  flex: 0 0;\n  text-align: left;\n  font-size: 1.2em;\n  margin-bottom: 25px;\n  font-weight: 300;\n  display: flex;\n  align-items: center;\n  color: #fff !important;\n  opacity: 0.5;\n}\n.Nav_mediaPlatformsButton__1x5fM:hover {\n  opacity: 1;\n}\n.Nav_mediaPlatformsButton__1x5fM svg {\n  height: 1em;\n  width: 1em;\n  margin-right: 5px;\n}\n.Nav_mediaPlatformsButton__1x5fM svg > path {\n  fill: #fff;\n  height: 1em;\n  width: 1em;\n}\n\n.Nav_nav__3624A {\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  max-height: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  overflow-y: auto;\n  position: fixed;\n  z-index: 1000;\n  background-color: #144777;\n  transition: max-height 0.15s ease;\n}\n.Nav_nav--shown__wq70D {\n  max-height: 100%;\n  transition: max-height 0.4s ease-in-out;\n}\n.Nav_nav--shown__wq70D .Nav_mediaPlatforms__2q-Ke {\n  display: flex;\n}\n.Nav_nav__3624A > * {\n  pointer-events: initial;\n}\n.Nav_nav__logo__2iRnc {\n  padding-top: 10px;\n  max-width: 140px;\n  max-height: 140px;\n}\n.Nav_nav__logo__2iRnc:hover {\n  opacity: 0.6;\n}\n.Nav_nav__logo__2iRnc, .Nav_nav__logo--mobile__cl86_ {\n  pointer-events: initial;\n  display: block;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n.Nav_nav__logo--mobile__cl86_ {\n  height: 100%;\n  padding: 10px 0;\n}\n.Nav_nav__logo--mobile__cl86_ > img {\n  max-height: 100%;\n}\n.Nav_nav__mobileMenu__3PGd7 {\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: 60px;\n  width: 100%;\n  max-width: 900px;\n  padding: 0 20px;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  pointer-events: initial;\n}\n\n.Nav_menu__ouc51 {\n  color: #fff;\n  list-style: none;\n  margin: 10px 0 30px 0;\n  width: 100%;\n  max-width: 400px;\n  padding: 0 20px;\n  pointer-events: initial;\n  flex-direction: column;\n  display: none;\n}\n.Nav_menu--shown__wZwbd {\n  display: flex;\n}\n.Nav_menu__subitem-list__3gDxt {\n  display: block;\n  overflow: hidden;\n  text-decoration: none !important;\n  pointer-events: none;\n  transition: max-height 0.4s 0.05s;\n  margin-top: 0;\n  margin-bottom: -10px;\n  list-style: none;\n}\n.Nav_menu__item__3WCAr {\n  display: inline-block;\n  font-size: 1.2rem;\n  margin-top: 15px;\n  width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none !important;\n}\n.Nav_menu__item__3WCAr, .Nav_menu__item__3WCAr > li {\n  transition: all 0.3s;\n}\n.Nav_menu__item__3WCAr > li {\n  padding: 6px 25px 6px 2px;\n  margin-right: 35px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  font-size: inherit;\n  color: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n}\n.Nav_menu__item__3WCAr:hover > li {\n  color: #fff;\n}\n.Nav_menu__item--selected__bWPUT {\n  opacity: 1 !important;\n  margin-right: 0;\n}\n.Nav_menu__item--selected__bWPUT > li {\n  padding-right: 60px;\n  margin-right: 0;\n  border-bottom-color: #fff;\n  color: #fff !important;\n}\n.Nav_menu__subitem__2uDcb {\n  color: #fff !important;\n  text-decoration: none !important;\n  display: block;\n  opacity: 0.5;\n  pointer-events: initial;\n}\n.Nav_menu__subitem__2uDcb:first-child {\n  margin-top: 20px;\n}\n.Nav_menu__subitem__2uDcb:hover, .Nav_menu__subitem--selected__19edH {\n  opacity: 1;\n}\n.Nav_menu__item-icon__bt3XF {\n  margin-right: 15px;\n  margin-left: 5px;\n  font-size: 0.8em;\n  color: #fff !important;\n}\n.Nav_menu__item-wrapper__3sNd_,\n.Nav_menu__item-wrapper__3sNd_ .Nav_menu__subitem-list__3gDxt {\n  -webkit-animation: Nav_fadeInLeft__KCg4E 0.3s ease-out 0.1s both;\n          animation: Nav_fadeInLeft__KCg4E 0.3s ease-out 0.1s both;\n}\n.Nav_menu__item-wrapper__3sNd_:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.Nav_menu__item-wrapper__3sNd_ .Nav_menu__subitem-list__3gDxt {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.Nav_menu__item-wrapper__3sNd_:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n@-webkit-keyframes Nav_fadeInLeft__KCg4E {\n  0% {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes Nav_fadeInLeft__KCg4E {\n  0% {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@media (min-width: 1200px) {\n  .Nav_nav__3624A {\n    padding: 20px 0px 0px;\n    position: relative;\n    flex: 0 1 600px;\n    background-color: rgba(0, 0, 0, 0);\n    max-height: 100%;\n  }\n\n  .Nav_mediaPlatforms__2q-Ke {\n    display: flex;\n  }\n\n  .Nav_menu__ouc51 {\n    display: flex;\n    margin: auto 0;\n    padding-bottom: 40px;\n  }\n  .Nav_menu__item-wrapper__3sNd_:first-child .Nav_menu__item__3WCAr,\n.Nav_menu__item-wrapper__3sNd_:first-child .Nav_menu__item__3WCAr li {\n    margin-top: 0;\n  }\n  .Nav_menu__item__3WCAr {\n    font-size: 1.35rem;\n    width: auto;\n  }\n}", "",{"version":3,"sources":["Nav.module.scss","../../styling/spectre/_variables.scss"],"names":[],"mappings":"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","file":"Nav.module.scss","sourcesContent":["@import 'styling/spectre/variables';\r\n\r\n.mediaPlatforms {\r\n  animation: fadeInLeft .3s ease-out .5s both;\r\n  max-width: 400px;\r\n  padding: 0 20px;\r\n  width: 100%;\r\n\r\n  margin-top: 5px;\r\n\r\n  flex-direction: row;\r\n  align-items: center;\r\n  margin-top: auto;\r\n\r\n  justify-content: space-around;\r\n\r\n  display: none;\r\n}\r\n\r\n.mediaPlatformsButton {\r\n  flex: 0 0;\r\n  text-align: left;\r\n  font-size: 1.2em;\r\n  margin-bottom: 25px;\r\n\r\n  font-weight: 300;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  color: $bg-color-light !important;\r\n  opacity: .5;\r\n\r\n  &:hover {\r\n    opacity: 1;\r\n  }\r\n\r\n  svg {\r\n    height: 1em;\r\n    width: 1em;\r\n    margin-right: 5px;\r\n\r\n    & > path {\r\n      fill: $bg-color-light;\r\n      height: 1em;\r\n      width: 1em;\r\n    }\r\n  }\r\n}\r\n\r\n.nav {\r\n  z-index: 100;\r\n  width: 100%;\r\n  height: 100%;\r\n  max-height: 60px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  overflow-y: auto;\r\n\r\n  position: fixed;\r\n  z-index: 1000;\r\n\r\n  background-color: $primary-color;\r\n  transition: max-height .15s ease;\r\n\r\n  &--shown {\r\n    max-height: 100%;\r\n    transition: max-height .4s ease-in-out;\r\n\r\n    .mediaPlatforms {\r\n      display: flex;\r\n    }\r\n  }\r\n\r\n  & > * {\r\n    pointer-events: initial;\r\n  }\r\n\r\n  &__logo {\r\n\r\n    padding-top: 10px;\r\n    max-width: 140px;\r\n    max-height: 140px;\r\n\r\n    &:hover {\r\n      opacity: .6;\r\n    }\r\n\r\n    &,\r\n    &--mobile {\r\n      pointer-events: initial;\r\n      display: block;\r\n      cursor: pointer;\r\n      opacity: 1;\r\n      transition: opacity .3s;\r\n    }\r\n\r\n    &--mobile {\r\n      height: 100%;\r\n      padding: 10px 0;\r\n\r\n      & > img {\r\n        max-height: 100%;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__mobileMenu {\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    height: 60px;\r\n    width: 100%;\r\n    max-width: 900px;\r\n    padding: 0 20px;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    pointer-events: initial;\r\n  }\r\n}\r\n\r\n.menu {\r\n  color: $bg-color-light;\r\n  list-style: none;\r\n  margin: 10px 0 30px 0;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  padding: 0 20px;\r\n  pointer-events: initial;\r\n  flex-direction: column;\r\n\r\n  display: none;\r\n\r\n  &--shown {\r\n    display: flex;\r\n  }\r\n\r\n  &__subitem-list {\r\n    display: block;\r\n    overflow: hidden;\r\n\r\n    text-decoration: none !important;\r\n    pointer-events: none;\r\n\r\n    transition: max-height .4s .05s;\r\n\r\n    margin-top: 0;\r\n    margin-bottom: -10px;\r\n\r\n    list-style: none;\r\n  }\r\n\r\n  &__item {\r\n    display: inline-block;\r\n\r\n    font-size: 1.2rem;\r\n    margin-top: 15px;\r\n    width: 100%;\r\n\r\n    cursor: pointer;\r\n    user-select: none;\r\n    text-decoration: none !important;\r\n\r\n\r\n    &,\r\n    & > li {\r\n      transition: all .3s;\r\n    }\r\n\r\n    & > li {\r\n      padding: 6px 25px 6px 2px;\r\n      margin-right: 35px;\r\n      border-bottom: 1px solid rgba($color: $bg-color-light, $alpha: .2);\r\n      font-size: inherit;\r\n      color: rgba($color: $bg-color-light, $alpha: .6);\r\n\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n\r\n    &:hover {\r\n      & > li {\r\n        color: $bg-color-light;\r\n      }\r\n    }\r\n\r\n    &--selected {\r\n      opacity: 1 !important;\r\n      margin-right: 0;\r\n\r\n      & > li {\r\n        padding-right: 60px;\r\n        margin-right: 0;\r\n        border-bottom-color: $bg-color-light;\r\n        color: $bg-color-light !important;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__subitem {\r\n    color: $bg-color-light !important;\r\n    text-decoration: none !important;\r\n    display: block;\r\n    opacity: .5;\r\n    pointer-events: initial;\r\n\r\n    &:first-child {\r\n      margin-top: 20px;\r\n    }\r\n\r\n    &:hover,\r\n    &--selected {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  &__item-icon {\r\n    margin-right: 15px;\r\n    margin-left: 5px;\r\n    font-size: .8em;\r\n    color: $bg-color-light !important;\r\n  }\r\n\r\n  &__item-wrapper {\r\n\r\n    &,\r\n    .menu__subitem-list {\r\n      animation: fadeInLeft .3s ease-out .1s both;\r\n    }\r\n\r\n    &:nth-child(2) {\r\n      animation-delay: .2s;\r\n    }\r\n\r\n    .menu__subitem-list {\r\n      animation-delay: .3s;\r\n    }\r\n\r\n    &:nth-child(3) {\r\n      animation-delay: .4s;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-10px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .nav {\r\n    padding: 20px 0px 0px;\r\n    position: relative;\r\n    flex: 0 1 600px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    max-height: 100%;\r\n  }\r\n\r\n  .mediaPlatforms {\r\n    display: flex;\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    margin: auto 0;\r\n    padding-bottom: 40px;\r\n\r\n    &__item-wrapper {\r\n\r\n      &:first-child {\r\n        .menu__item {\r\n          &,\r\n          li {\r\n            margin-top: 0;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    &__item {\r\n      font-size: 1.35rem;\r\n      width: auto;\r\n\r\n    }\r\n  }\r\n}\r\n","// Core variables\r\n$version: \"0.5.3\";\r\n\r\n// Core features\r\n$rtl: false !default;\r\n\r\n// Core colors\r\n// $primary-color: #144777 !default;\r\n$primary-color: #144777 !default;\r\n$primary-color-dark: darken($primary-color, 3%) !default;\r\n$primary-color-light: lighten($primary-color, 3%) !default;\r\n$secondary-color: lighten($primary-color, 37.5%) !default;\r\n$secondary-color-dark: darken($secondary-color, 3%) !default;\r\n$secondary-color-light: lighten($secondary-color, 3%) !default;\r\n\r\n// Gray colors\r\n$dark-color: #454d5d !default;\r\n$light-color: #fff !default;\r\n$gray-color: lighten($dark-color, 40%) !default;\r\n$gray-color-dark: darken($gray-color, 25%) !default;\r\n$gray-color-light: lighten($gray-color, 20%) !default;\r\n\r\n$border-color: lighten($dark-color, 60%) !default;\r\n$border-color-dark: darken($border-color, 10%) !default;\r\n$bg-color: lighten($dark-color, 66%) !default;\r\n$bg-color-dark: darken($bg-color, 3%) !default;\r\n$bg-color-light: $light-color !default;\r\n\r\n// Control colors\r\n$success-color: #32b643 !default;\r\n$warning-color: #ffb700 !default;\r\n$error-color: #e85600 !default;\r\n\r\n// Other colors\r\n$code-color: #d73e48 !default;\r\n$highlight-color: #ffe9b3 !default;\r\n$body-bg: $bg-color-light !default;\r\n$body-font-color: lighten($dark-color, 5%) !default;\r\n$link-color: $primary-color !default;\r\n$link-color-dark: darken($link-color, 10%) !default;\r\n$link-color-light: lighten($link-color, 10%) !default;\r\n\r\n// Fonts\r\n// Credit: https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/\r\n$base-font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto !default;\r\n$mono-font-family: \"SF Mono\", \"Segoe UI Mono\", \"Roboto Mono\", Menlo, Courier, monospace !default;\r\n$fallback-font-family: \"Helvetica Neue\", sans-serif !default;\r\n$cjk-zh-hans-font-family: $base-font-family, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", $fallback-font-family !default;\r\n$cjk-zh-hant-font-family: $base-font-family, \"PingFang TC\", \"Hiragino Sans CNS\", \"Microsoft JhengHei\", $fallback-font-family !default;\r\n$cjk-jp-font-family: $base-font-family, \"Hiragino Sans\", \"Hiragino Kaku Gothic Pro\", \"Yu Gothic\", YuGothic, Meiryo, $fallback-font-family !default;\r\n$cjk-ko-font-family: $base-font-family, \"Malgun Gothic\", $fallback-font-family !default;\r\n$body-font-family: $base-font-family, $fallback-font-family !default;\r\n\r\n// Unit sizes\r\n$unit-o: .05rem !default;\r\n$unit-h: .1rem !default;\r\n$unit-1: .2rem !default;\r\n$unit-2: .4rem !default;\r\n$unit-3: .6rem !default;\r\n$unit-4: .8rem !default;\r\n$unit-5: 1rem !default;\r\n$unit-6: 1.2rem !default;\r\n$unit-7: 1.4rem !default;\r\n$unit-8: 1.6rem !default;\r\n$unit-9: 1.8rem !default;\r\n$unit-10: 2rem !default;\r\n$unit-12: 2.4rem !default;\r\n$unit-16: 3.2rem !default;\r\n\r\n// Font sizes\r\n$html-font-size: 20px !default;\r\n$html-line-height: 1.5 !default;\r\n$font-size: .8rem !default;\r\n$font-size-sm: .7rem !default;\r\n$font-size-lg: .9rem !default;\r\n$line-height: 1.2rem !default;\r\n\r\n// Sizes\r\n$layout-spacing: $unit-2 !default;\r\n$layout-spacing-sm: $unit-1 !default;\r\n$layout-spacing-lg: $unit-4 !default;\r\n$border-radius: $unit-h !default;\r\n$border-width: $unit-o !default;\r\n$border-width-lg: $unit-h !default;\r\n$control-size: $unit-9 !default;\r\n$control-size-sm: $unit-7 !default;\r\n$control-size-lg: $unit-10 !default;\r\n$control-padding-x: $unit-2 !default;\r\n$control-padding-x-sm: $unit-2 * .75 !default;\r\n$control-padding-x-lg: $unit-2 * 1.5 !default;\r\n$control-padding-y: ($control-size - $line-height) / 2 - $border-width !default;\r\n$control-padding-y-sm: ($control-size-sm - $line-height) / 2 - $border-width !default;\r\n$control-padding-y-lg: ($control-size-lg - $line-height) / 2 - $border-width !default;\r\n$control-icon-size: .8rem !default;\r\n\r\n$control-width-xs: 180px !default;\r\n$control-width-sm: 320px !default;\r\n$control-width-md: 640px !default;\r\n$control-width-lg: 960px !default;\r\n$control-width-xl: 1280px !default;\r\n\r\n// Responsive breakpoints\r\n$size-xs: 480px !default;\r\n$size-sm: 600px !default;\r\n$size-md: 840px !default;\r\n$size-lg: 960px !default;\r\n$size-xl: 1280px !default;\r\n$size-2x: 1440px !default;\r\n\r\n$responsive-breakpoint: $size-xs !default;\r\n\r\n// Z-index\r\n$zindex-0: 1 !default;\r\n$zindex-1: 100 !default;\r\n$zindex-2: 200 !default;\r\n$zindex-3: 300 !default;\r\n$zindex-4: 400 !default;\r\n"]}]);
// Exports
exports.locals = {
	"mediaPlatforms": "Nav_mediaPlatforms__2q-Ke",
	"fadeInLeft": "Nav_fadeInLeft__KCg4E",
	"mediaPlatformsButton": "Nav_mediaPlatformsButton__1x5fM",
	"nav": "Nav_nav__3624A",
	"nav--shown": "Nav_nav--shown__wq70D",
	"nav__logo": "Nav_nav__logo__2iRnc",
	"nav__logo--mobile": "Nav_nav__logo--mobile__cl86_",
	"nav__mobileMenu": "Nav_nav__mobileMenu__3PGd7",
	"menu": "Nav_menu__ouc51",
	"menu--shown": "Nav_menu--shown__wZwbd",
	"menu__subitem-list": "Nav_menu__subitem-list__3gDxt",
	"menu__item": "Nav_menu__item__3WCAr",
	"menu__item--selected": "Nav_menu__item--selected__bWPUT",
	"menu__subitem": "Nav_menu__subitem__2uDcb",
	"menu__subitem--selected": "Nav_menu__subitem--selected__19edH",
	"menu__item-icon": "Nav_menu__item-icon__bt3XF",
	"menu__item-wrapper": "Nav_menu__item-wrapper__3sNd_"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/_app.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/_app.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._app_app__HocCe {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n  background-color: #144777;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-blend-mode: multiply;\n  position: relative;\n}\n._app_app__sidebar__1V2YK {\n  position: fixed;\n  z-index: 1000;\n  height: 100%;\n  width: 100%;\n  max-height: 60px;\n  background-color: #144777;\n}\n._app_app__content__2B5_O {\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  max-width: 900px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-animation: _app_fadeIn__3taDt 0.3s both;\n          animation: _app_fadeIn__3taDt 0.3s both;\n}\n\n@-webkit-keyframes _app_fadeIn__3taDt {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes _app_fadeIn__3taDt {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@media (max-width: 899px) {\n  ._app_app__HocCe {\n    background-image: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  ._app_app__sidebar__1V2YK {\n    flex: 0 1 560px;\n    overflow-x: hidden;\n    display: block;\n  }\n  ._app_app__content__2B5_O {\n    max-width: 1200px;\n  }\n}", "",{"version":3,"sources":["_app.module.scss","../styling/spectre/_variables.scss"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;EACA,yBCCc;EDAd,sBAAA;EACA,kCAAA;EACA,4BAAA;EAEA,+BAAA;EAEA,kBAAA;AAHF;AAKE;EAEE,eAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EAEA,yBChBY;ADWhB;AAQE;EACE,iBAAA;EACA,kBAAA;EACA,sBCbU;EDcV,kBAAA;EACA,gBAAA;EAEA,gBAAA;EAEA,WAAA;EACA,YAAA;EACA,kBAAA;EAEA,+CAAA;UAAA,uCAAA;AATJ;;AAaA;EACE;IACE,UAAA;EAVF;EAYA;IACE,UAAA;EAVF;AACF;;AAIA;EACE;IACE,UAAA;EAVF;EAYA;IACE,UAAA;EAVF;AACF;AAaA;EACE;IACE,iCAAA;EAXF;AACF;AAcA;EAGI;IACE,eAAA;IACA,kBAAA;IACA,cAAA;EAdJ;EAiBE;IACE,iBAAA;EAfJ;AACF","file":"_app.module.scss","sourcesContent":["@import 'styling/spectre/variables';\r\n\r\n.app {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  overflow: hidden;\r\n  background-color: $primary-color;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n\r\n  background-blend-mode: multiply;\r\n\r\n  position: relative;\r\n\r\n  &__sidebar {\r\n    // display: none;\r\n    position: fixed;\r\n    z-index: 1000;\r\n    height: 100%;\r\n    width: 100%;\r\n    max-height: 60px;\r\n\r\n    background-color: $primary-color;\r\n  }\r\n\r\n  &__content {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: $bg-color-light;\r\n    position: relative;\r\n    overflow: hidden;\r\n\r\n    max-width: 900px;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n\r\n    animation: fadeIn .3s both;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media (max-width: 899px) {\r\n  .app {\r\n    background-image: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .app {\r\n\r\n    &__sidebar {\r\n      flex: 0 1 560px;\r\n      overflow-x: hidden;\r\n      display: block;\r\n    }\r\n\r\n    &__content {\r\n      max-width: 1200px;\r\n    }\r\n  }\r\n}\r\n","// Core variables\r\n$version: \"0.5.3\";\r\n\r\n// Core features\r\n$rtl: false !default;\r\n\r\n// Core colors\r\n// $primary-color: #144777 !default;\r\n$primary-color: #144777 !default;\r\n$primary-color-dark: darken($primary-color, 3%) !default;\r\n$primary-color-light: lighten($primary-color, 3%) !default;\r\n$secondary-color: lighten($primary-color, 37.5%) !default;\r\n$secondary-color-dark: darken($secondary-color, 3%) !default;\r\n$secondary-color-light: lighten($secondary-color, 3%) !default;\r\n\r\n// Gray colors\r\n$dark-color: #454d5d !default;\r\n$light-color: #fff !default;\r\n$gray-color: lighten($dark-color, 40%) !default;\r\n$gray-color-dark: darken($gray-color, 25%) !default;\r\n$gray-color-light: lighten($gray-color, 20%) !default;\r\n\r\n$border-color: lighten($dark-color, 60%) !default;\r\n$border-color-dark: darken($border-color, 10%) !default;\r\n$bg-color: lighten($dark-color, 66%) !default;\r\n$bg-color-dark: darken($bg-color, 3%) !default;\r\n$bg-color-light: $light-color !default;\r\n\r\n// Control colors\r\n$success-color: #32b643 !default;\r\n$warning-color: #ffb700 !default;\r\n$error-color: #e85600 !default;\r\n\r\n// Other colors\r\n$code-color: #d73e48 !default;\r\n$highlight-color: #ffe9b3 !default;\r\n$body-bg: $bg-color-light !default;\r\n$body-font-color: lighten($dark-color, 5%) !default;\r\n$link-color: $primary-color !default;\r\n$link-color-dark: darken($link-color, 10%) !default;\r\n$link-color-light: lighten($link-color, 10%) !default;\r\n\r\n// Fonts\r\n// Credit: https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/\r\n$base-font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto !default;\r\n$mono-font-family: \"SF Mono\", \"Segoe UI Mono\", \"Roboto Mono\", Menlo, Courier, monospace !default;\r\n$fallback-font-family: \"Helvetica Neue\", sans-serif !default;\r\n$cjk-zh-hans-font-family: $base-font-family, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", $fallback-font-family !default;\r\n$cjk-zh-hant-font-family: $base-font-family, \"PingFang TC\", \"Hiragino Sans CNS\", \"Microsoft JhengHei\", $fallback-font-family !default;\r\n$cjk-jp-font-family: $base-font-family, \"Hiragino Sans\", \"Hiragino Kaku Gothic Pro\", \"Yu Gothic\", YuGothic, Meiryo, $fallback-font-family !default;\r\n$cjk-ko-font-family: $base-font-family, \"Malgun Gothic\", $fallback-font-family !default;\r\n$body-font-family: $base-font-family, $fallback-font-family !default;\r\n\r\n// Unit sizes\r\n$unit-o: .05rem !default;\r\n$unit-h: .1rem !default;\r\n$unit-1: .2rem !default;\r\n$unit-2: .4rem !default;\r\n$unit-3: .6rem !default;\r\n$unit-4: .8rem !default;\r\n$unit-5: 1rem !default;\r\n$unit-6: 1.2rem !default;\r\n$unit-7: 1.4rem !default;\r\n$unit-8: 1.6rem !default;\r\n$unit-9: 1.8rem !default;\r\n$unit-10: 2rem !default;\r\n$unit-12: 2.4rem !default;\r\n$unit-16: 3.2rem !default;\r\n\r\n// Font sizes\r\n$html-font-size: 20px !default;\r\n$html-line-height: 1.5 !default;\r\n$font-size: .8rem !default;\r\n$font-size-sm: .7rem !default;\r\n$font-size-lg: .9rem !default;\r\n$line-height: 1.2rem !default;\r\n\r\n// Sizes\r\n$layout-spacing: $unit-2 !default;\r\n$layout-spacing-sm: $unit-1 !default;\r\n$layout-spacing-lg: $unit-4 !default;\r\n$border-radius: $unit-h !default;\r\n$border-width: $unit-o !default;\r\n$border-width-lg: $unit-h !default;\r\n$control-size: $unit-9 !default;\r\n$control-size-sm: $unit-7 !default;\r\n$control-size-lg: $unit-10 !default;\r\n$control-padding-x: $unit-2 !default;\r\n$control-padding-x-sm: $unit-2 * .75 !default;\r\n$control-padding-x-lg: $unit-2 * 1.5 !default;\r\n$control-padding-y: ($control-size - $line-height) / 2 - $border-width !default;\r\n$control-padding-y-sm: ($control-size-sm - $line-height) / 2 - $border-width !default;\r\n$control-padding-y-lg: ($control-size-lg - $line-height) / 2 - $border-width !default;\r\n$control-icon-size: .8rem !default;\r\n\r\n$control-width-xs: 180px !default;\r\n$control-width-sm: 320px !default;\r\n$control-width-md: 640px !default;\r\n$control-width-lg: 960px !default;\r\n$control-width-xl: 1280px !default;\r\n\r\n// Responsive breakpoints\r\n$size-xs: 480px !default;\r\n$size-sm: 600px !default;\r\n$size-md: 840px !default;\r\n$size-lg: 960px !default;\r\n$size-xl: 1280px !default;\r\n$size-2x: 1440px !default;\r\n\r\n$responsive-breakpoint: $size-xs !default;\r\n\r\n// Z-index\r\n$zindex-0: 1 !default;\r\n$zindex-1: 100 !default;\r\n$zindex-2: 200 !default;\r\n$zindex-3: 300 !default;\r\n$zindex-4: 400 !default;\r\n"]}]);
// Exports
exports.locals = {
	"app": "_app_app__HocCe",
	"app__sidebar": "_app_app__sidebar__1V2YK",
	"app__content": "_app_app__content__2B5_O",
	"fadeIn": "_app_fadeIn__3taDt"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styling/global.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styling/global.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/*! Spectre.css v0.5.3 | MIT License | github.com/picturepan2/spectre */\n/* Manually forked from Normalize.css */\n/* normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8 (removed).\n */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers. (removed)\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * Modify default styling of address.\n */\naddress {\n  font-style: normal;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. (removed)\n */\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: \"SF Mono\", \"Segoe UI Mono\", \"Roboto Mono\", Menlo, Courier, monospace;\n  /* 1 (changed) */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-. (Removed)\n */\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n  font-weight: 400;\n  /* (added) */\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 (changed) */\n  font-size: inherit;\n  /* 1 (changed) */\n  line-height: inherit;\n  /* 1 (changed) */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule (removed).\n */\n/**\n * Change the border, margin, and padding in all browsers (opinionated) (changed).\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n  outline: none;\n}\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 20px;\n  line-height: 1.5;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  background: #fff;\n  color: #50596c;\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 0.8rem;\n  overflow-x: hidden;\n  text-rendering: optimizeLegibility;\n}\n\na {\n  color: #144777;\n  outline: none;\n  text-decoration: none;\n}\na:focus {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n}\na:focus, a:hover, a:active, a.active {\n  color: #0d2d4b;\n  text-decoration: underline;\n}\na:visited {\n  color: #1b61a3;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: inherit;\n  font-weight: 600;\n  line-height: 1.2;\n  margin-bottom: 0.5em;\n  margin-top: 0;\n}\n\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-weight: 600;\n}\n\nh1,\n.h1 {\n  font-size: 2rem;\n}\n\nh2,\n.h2 {\n  font-size: 1.6rem;\n}\n\nh3,\n.h3 {\n  font-size: 1.4rem;\n}\n\nh4,\n.h4 {\n  font-size: 1.2rem;\n}\n\nh5,\n.h5 {\n  font-size: 1rem;\n}\n\nh6,\n.h6 {\n  font-size: 0.8rem;\n}\n\np {\n  margin: 0 0 1.2rem;\n}\n\na,\nins,\nu {\n  -webkit-text-decoration-skip: ink edges;\n          text-decoration-skip: ink edges;\n}\n\nabbr[title] {\n  border-bottom: 0.05rem dotted;\n  cursor: help;\n  text-decoration: none;\n}\n\nkbd {\n  border-radius: 0.1rem;\n  line-height: 1.2;\n  padding: 0.1rem 0.2rem;\n  background: #454d5d;\n  color: #fff;\n  font-size: 0.7rem;\n}\n\nmark {\n  background: #ffe9b3;\n  color: #50596c;\n  border-radius: 0.1rem;\n  padding: 0.05rem;\n}\n\nblockquote {\n  border-left: 0.1rem solid #e7e9ed;\n  margin-left: 0;\n  padding: 0.4rem 0.8rem;\n}\nblockquote p:last-child {\n  margin-bottom: 0;\n}\n\nul,\nol {\n  margin: 0.8rem 0 0.8rem 0.8rem;\n  padding: 0;\n}\nul ul,\nul ol,\nol ul,\nol ol {\n  margin: 0.8rem 0 0.8rem 0.8rem;\n}\nul li,\nol li {\n  margin-top: 0.4rem;\n}\n\nul {\n  list-style: disc inside;\n}\nul ul {\n  list-style-type: circle;\n}\n\nol {\n  list-style: decimal inside;\n}\nol ol {\n  list-style-type: lower-alpha;\n}\n\ndl dt {\n  font-weight: bold;\n}\ndl dd {\n  margin: 0.4rem 0 0.8rem 0;\n}\n\n.table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  text-align: left;\n}\n.table.table-striped tbody tr:nth-of-type(odd) {\n  background: #f8f9fa;\n}\n.table tbody tr.active, .table.table-striped tbody tr.active {\n  background: #f0f1f4;\n}\n.table.table-hover tbody tr:hover {\n  background: #f0f1f4;\n}\n.table.table-scroll {\n  display: block;\n  overflow-x: auto;\n  padding-bottom: 0.75rem;\n  white-space: nowrap;\n}\n.table td,\n.table th {\n  border-bottom: 0.05rem solid #e7e9ed;\n  padding: 0.6rem 0.4rem;\n}\n.table th {\n  border-bottom-width: 0.1rem;\n}\n\n.btn {\n  transition: all 0.2s ease;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: #fff;\n  border: 0.05rem solid #144777;\n  border-radius: 0.1rem;\n  color: #144777;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 0.8rem;\n  height: 1.8rem;\n  line-height: 1.2rem;\n  outline: none;\n  padding: 0.25rem 0.4rem;\n  text-align: center;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.btn:focus {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n}\n.btn:focus, .btn:hover {\n  background: #65a7e5;\n  border-color: #123f6a;\n  text-decoration: none;\n}\n.btn:active, .btn.active {\n  background: #123f6a;\n  border-color: #0e3254;\n  color: #fff;\n  text-decoration: none;\n}\n.btn:active.loading::after, .btn.active.loading::after {\n  border-bottom-color: #fff;\n  border-left-color: #fff;\n}\n.btn[disabled], .btn:disabled, .btn.disabled {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.btn.btn-primary {\n  background: #144777;\n  border-color: #123f6a;\n  color: #fff;\n}\n.btn.btn-primary:focus, .btn.btn-primary:hover {\n  background: #103a61;\n  border-color: #0e3254;\n  color: #fff;\n}\n.btn.btn-primary:active, .btn.btn-primary.active {\n  background: #0f3558;\n  border-color: #0d2d4b;\n  color: #fff;\n}\n.btn.btn-primary.loading::after {\n  border-bottom-color: #fff;\n  border-left-color: #fff;\n}\n.btn.btn-success {\n  background: #32b643;\n  border-color: #2faa3f;\n  color: #fff;\n}\n.btn.btn-success:focus {\n  box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);\n}\n.btn.btn-success:focus, .btn.btn-success:hover {\n  background: #30ae40;\n  border-color: #2da23c;\n  color: #fff;\n}\n.btn.btn-success:active, .btn.btn-success.active {\n  background: #2a9a39;\n  border-color: #278e34;\n  color: #fff;\n}\n.btn.btn-success.loading::after {\n  border-bottom-color: #fff;\n  border-left-color: #fff;\n}\n.btn.btn-error {\n  background: #e85600;\n  border-color: #d95000;\n  color: #fff;\n}\n.btn.btn-error:focus {\n  box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);\n}\n.btn.btn-error:focus, .btn.btn-error:hover {\n  background: #de5200;\n  border-color: #cf4d00;\n  color: #fff;\n}\n.btn.btn-error:active, .btn.btn-error.active {\n  background: #c44900;\n  border-color: #b54300;\n  color: #fff;\n}\n.btn.btn-error.loading::after {\n  border-bottom-color: #fff;\n  border-left-color: #fff;\n}\n.btn.btn-link {\n  background: transparent;\n  border-color: transparent;\n  color: #144777;\n}\n.btn.btn-link:focus, .btn.btn-link:hover, .btn.btn-link:active, .btn.btn-link.active {\n  color: #0d2d4b;\n}\n.btn.btn-sm {\n  font-size: 0.7rem;\n  height: 1.4rem;\n  padding: 0.05rem 0.3rem;\n}\n.btn.btn-lg {\n  font-size: 0.9rem;\n  height: 2rem;\n  padding: 0.35rem 0.6rem;\n}\n.btn.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn.btn-action {\n  width: 1.8rem;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn.btn-action.btn-sm {\n  width: 1.4rem;\n}\n.btn.btn-action.btn-lg {\n  width: 2rem;\n}\n.btn.btn-clear {\n  background: transparent;\n  border: 0;\n  color: currentColor;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin-left: 0.2rem;\n  margin-right: -2px;\n  opacity: 1;\n  padding: 0;\n  text-decoration: none;\n  width: 0.8rem;\n}\n.btn.btn-clear:hover {\n  opacity: 0.95;\n}\n.btn.btn-clear::before {\n  content: \"✕\";\n}\n\n.btn-group {\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n.btn-group .btn {\n  flex: 1 0 auto;\n}\n.btn-group .btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n  margin-left: -0.05rem;\n}\n.btn-group .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  margin-left: -0.05rem;\n}\n.btn-group .btn:focus, .btn-group .btn:hover, .btn-group .btn:active, .btn-group .btn.active {\n  z-index: 1;\n}\n.btn-group.btn-group-block {\n  display: flex;\n}\n.btn-group.btn-group-block .btn {\n  flex: 1 0;\n}\n\n.form-group:not(:last-child) {\n  margin-bottom: 0.4rem;\n}\n\nfieldset {\n  margin-bottom: 0.8rem;\n}\n\nlegend {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin-bottom: 0.8rem;\n}\n\n.form-label {\n  display: block;\n  line-height: 1.2rem;\n  padding: 0.3rem 0;\n}\n.form-label.label-sm {\n  font-size: 0.7rem;\n  padding: 0.1rem 0;\n}\n.form-label.label-lg {\n  font-size: 0.9rem;\n  padding: 0.4rem 0;\n}\n\n.form-input {\n  transition: all 0.2s ease;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: #fff;\n  background-image: none;\n  border: 0.05rem solid #caced7;\n  border-radius: 0.1rem;\n  color: #50596c;\n  display: block;\n  font-size: 0.8rem;\n  height: 1.8rem;\n  line-height: 1.2rem;\n  max-width: 100%;\n  outline: none;\n  padding: 0.25rem 0.4rem;\n  position: relative;\n  width: 100%;\n}\n.form-input:focus {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n  border-color: #144777;\n}\n.form-input::-webkit-input-placeholder {\n  color: #acb3c2;\n}\n.form-input::-moz-placeholder {\n  color: #acb3c2;\n}\n.form-input:-ms-input-placeholder {\n  color: #acb3c2;\n}\n.form-input::-ms-input-placeholder {\n  color: #acb3c2;\n}\n.form-input::placeholder {\n  color: #acb3c2;\n}\n.form-input.input-sm {\n  font-size: 0.7rem;\n  height: 1.4rem;\n  padding: 0.05rem 0.3rem;\n}\n.form-input.input-lg {\n  font-size: 0.9rem;\n  height: 2rem;\n  padding: 0.35rem 0.6rem;\n}\n.form-input.input-inline {\n  display: inline-block;\n  vertical-align: middle;\n  width: auto;\n}\n.form-input[type=file] {\n  height: auto;\n}\n\ntextarea.form-input {\n  height: auto;\n}\n\n.form-input-hint {\n  color: #acb3c2;\n  font-size: 0.7rem;\n  margin-top: 0.2rem;\n}\n.has-success .form-input-hint, .is-success + .form-input-hint {\n  color: #32b643;\n}\n.has-error .form-input-hint, .is-error + .form-input-hint {\n  color: #e85600;\n}\n\n.form-select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 0.05rem solid #caced7;\n  border-radius: 0.1rem;\n  color: inherit;\n  font-size: 0.8rem;\n  height: 1.8rem;\n  line-height: 1.2rem;\n  outline: none;\n  padding: 0.25rem 0.4rem;\n  vertical-align: middle;\n  width: 100%;\n}\n.form-select[size], .form-select[multiple] {\n  height: auto;\n}\n.form-select[size] option, .form-select[multiple] option {\n  padding: 0.1rem 0.2rem;\n}\n.form-select:not([multiple]):not([size]) {\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E\") no-repeat right 0.35rem center/0.4rem 0.5rem;\n  padding-right: 1.2rem;\n}\n.form-select:focus {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n  border-color: #144777;\n}\n.form-select::-ms-expand {\n  display: none;\n}\n.form-select.select-sm {\n  font-size: 0.7rem;\n  height: 1.4rem;\n  padding: 0.05rem 1.1rem 0.05rem 0.3rem;\n}\n.form-select.select-lg {\n  font-size: 0.9rem;\n  height: 2rem;\n  padding: 0.35rem 1.4rem 0.35rem 0.6rem;\n}\n\n.has-icon-left,\n.has-icon-right {\n  position: relative;\n}\n.has-icon-left .form-icon,\n.has-icon-right .form-icon {\n  height: 0.8rem;\n  margin: 0 0.25rem;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0.8rem;\n  z-index: 2;\n}\n\n.has-icon-left .form-icon {\n  left: 0.05rem;\n}\n.has-icon-left .form-input {\n  padding-left: 1.3rem;\n}\n\n.has-icon-right .form-icon {\n  right: 0.05rem;\n}\n.has-icon-right .form-input {\n  padding-right: 1.3rem;\n}\n\n.form-checkbox,\n.form-radio,\n.form-switch {\n  display: block;\n  line-height: 1.2rem;\n  margin: 0.2rem 0;\n  min-height: 1.2rem;\n  padding: 0.1rem 0.4rem 0.1rem 1.2rem;\n  position: relative;\n}\n.form-checkbox input,\n.form-radio input,\n.form-switch input {\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n}\n.form-checkbox input:focus + .form-icon,\n.form-radio input:focus + .form-icon,\n.form-switch input:focus + .form-icon {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n  border-color: #144777;\n}\n.form-checkbox input:checked + .form-icon,\n.form-radio input:checked + .form-icon,\n.form-switch input:checked + .form-icon {\n  background: #144777;\n  border-color: #144777;\n}\n.form-checkbox .form-icon,\n.form-radio .form-icon,\n.form-switch .form-icon {\n  transition: all 0.2s ease;\n  border: 0.05rem solid #caced7;\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n}\n.form-checkbox.input-sm,\n.form-radio.input-sm,\n.form-switch.input-sm {\n  font-size: 0.7rem;\n  margin: 0;\n}\n.form-checkbox.input-lg,\n.form-radio.input-lg,\n.form-switch.input-lg {\n  font-size: 0.9rem;\n  margin: 0.3rem 0;\n}\n\n.form-checkbox .form-icon,\n.form-radio .form-icon {\n  background: #fff;\n  height: 0.8rem;\n  left: 0;\n  top: 0.3rem;\n  width: 0.8rem;\n}\n.form-checkbox input:active + .form-icon,\n.form-radio input:active + .form-icon {\n  background: #f0f1f4;\n}\n\n.form-checkbox .form-icon {\n  border-radius: 0.1rem;\n}\n.form-checkbox input:checked + .form-icon::before {\n  background-clip: padding-box;\n  border: 0.1rem solid #fff;\n  border-left-width: 0;\n  border-top-width: 0;\n  content: \"\";\n  height: 12px;\n  left: 50%;\n  margin-left: -4px;\n  margin-top: -8px;\n  position: absolute;\n  top: 50%;\n  transform: rotate(45deg);\n  width: 8px;\n}\n.form-checkbox input:indeterminate + .form-icon {\n  background: #144777;\n  border-color: #144777;\n}\n.form-checkbox input:indeterminate + .form-icon::before {\n  background: #fff;\n  content: \"\";\n  height: 2px;\n  left: 50%;\n  margin-left: -5px;\n  margin-top: -1px;\n  position: absolute;\n  top: 50%;\n  width: 10px;\n}\n\n.form-radio .form-icon {\n  border-radius: 50%;\n}\n.form-radio input:checked + .form-icon::before {\n  background: #fff;\n  border-radius: 50%;\n  content: \"\";\n  height: 4px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 4px;\n}\n\n.form-switch {\n  padding-left: 2rem;\n}\n.form-switch .form-icon {\n  background: #e7e9ed;\n  background-clip: padding-box;\n  border-radius: 0.45rem;\n  height: 0.9rem;\n  left: 0;\n  top: 0.25rem;\n  width: 1.6rem;\n}\n.form-switch .form-icon::before {\n  transition: all 0.2s ease;\n  background: #fff;\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 0.8rem;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 0.8rem;\n}\n.form-switch input:checked + .form-icon::before {\n  left: 14px;\n}\n.form-switch input:active + .form-icon::before {\n  background: #f8f9fa;\n}\n\n.input-group {\n  display: flex;\n}\n.input-group .input-group-addon {\n  background: #f8f9fa;\n  border: 0.05rem solid #caced7;\n  border-radius: 0.1rem;\n  line-height: 1.2rem;\n  padding: 0.25rem 0.4rem;\n  white-space: nowrap;\n}\n.input-group .input-group-addon.addon-sm {\n  font-size: 0.7rem;\n  padding: 0.05rem 0.3rem;\n}\n.input-group .input-group-addon.addon-lg {\n  font-size: 0.9rem;\n  padding: 0.35rem 0.6rem;\n}\n.input-group .form-input,\n.input-group .form-select {\n  flex: 1 1 auto;\n  width: 1%;\n}\n.input-group .input-group-btn {\n  z-index: 1;\n}\n.input-group .form-input:first-child:not(:last-child),\n.input-group .form-select:first-child:not(:last-child),\n.input-group .input-group-addon:first-child:not(:last-child),\n.input-group .input-group-btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.input-group .form-input:not(:first-child):not(:last-child),\n.input-group .form-select:not(:first-child):not(:last-child),\n.input-group .input-group-addon:not(:first-child):not(:last-child),\n.input-group .input-group-btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n  margin-left: -0.05rem;\n}\n.input-group .form-input:last-child:not(:first-child),\n.input-group .form-select:last-child:not(:first-child),\n.input-group .input-group-addon:last-child:not(:first-child),\n.input-group .input-group-btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  margin-left: -0.05rem;\n}\n.input-group .form-input:focus,\n.input-group .form-select:focus,\n.input-group .input-group-addon:focus,\n.input-group .input-group-btn:focus {\n  z-index: 2;\n}\n.input-group .form-select {\n  width: auto;\n}\n.input-group.input-inline {\n  display: inline-flex;\n}\n\n.has-success .form-input, .form-input.is-success,\n.has-success .form-select,\n.form-select.is-success {\n  border-color: #32b643;\n}\n.has-success .form-input:focus, .form-input.is-success:focus,\n.has-success .form-select:focus,\n.form-select.is-success:focus {\n  box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);\n}\n.has-error .form-input, .form-input.is-error,\n.has-error .form-select,\n.form-select.is-error {\n  border-color: #e85600;\n}\n.has-error .form-input:focus, .form-input.is-error:focus,\n.has-error .form-select:focus,\n.form-select.is-error:focus {\n  box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);\n}\n\n.has-error .form-checkbox .form-icon, .form-checkbox.is-error .form-icon,\n.has-error .form-radio .form-icon,\n.form-radio.is-error .form-icon,\n.has-error .form-switch .form-icon,\n.form-switch.is-error .form-icon {\n  border-color: #e85600;\n}\n.has-error .form-checkbox input:checked + .form-icon, .form-checkbox.is-error input:checked + .form-icon,\n.has-error .form-radio input:checked + .form-icon,\n.form-radio.is-error input:checked + .form-icon,\n.has-error .form-switch input:checked + .form-icon,\n.form-switch.is-error input:checked + .form-icon {\n  background: #e85600;\n  border-color: #e85600;\n}\n.has-error .form-checkbox input:focus + .form-icon, .form-checkbox.is-error input:focus + .form-icon,\n.has-error .form-radio input:focus + .form-icon,\n.form-radio.is-error input:focus + .form-icon,\n.has-error .form-switch input:focus + .form-icon,\n.form-switch.is-error input:focus + .form-icon {\n  box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);\n  border-color: #e85600;\n}\n\n.has-error .form-checkbox input:indeterminate + .form-icon, .form-checkbox.is-error input:indeterminate + .form-icon {\n  background: #e85600;\n  border-color: #e85600;\n}\n\n.form-input:not(:placeholder-shown):invalid {\n  border-color: #e85600;\n}\n.form-input:not(:placeholder-shown):invalid:focus {\n  box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);\n}\n.form-input:not(:placeholder-shown):invalid + .form-input-hint {\n  color: #e85600;\n}\n\n.form-input:disabled, .form-input.disabled,\n.form-select:disabled,\n.form-select.disabled {\n  background-color: #f0f1f4;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.form-input[readonly] {\n  background-color: #f8f9fa;\n}\n\ninput:disabled + .form-icon, input.disabled + .form-icon {\n  background: #f0f1f4;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.form-switch input:disabled + .form-icon::before, .form-switch input.disabled + .form-icon::before {\n  background: #fff;\n}\n\n.form-horizontal {\n  padding: 0.4rem 0;\n}\n.form-horizontal .form-group {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form-inline {\n  display: inline-block;\n}\n\n.label {\n  border-radius: 0.1rem;\n  line-height: 1.2;\n  padding: 0.1rem 0.2rem;\n  background: #f0f1f4;\n  color: #5b657a;\n  display: inline-block;\n}\n.label.label-rounded {\n  border-radius: 5rem;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n}\n.label.label-primary {\n  background: #144777;\n  color: #fff;\n}\n.label.label-secondary {\n  background: #65a7e5;\n  color: #144777;\n}\n.label.label-success {\n  background: #32b643;\n  color: #fff;\n}\n.label.label-warning {\n  background: #ffb700;\n  color: #fff;\n}\n.label.label-error {\n  background: #e85600;\n  color: #fff;\n}\n\ncode {\n  border-radius: 0.1rem;\n  line-height: 1.2;\n  padding: 0.1rem 0.2rem;\n  background: #fcf2f2;\n  color: #d73e48;\n  font-size: 85%;\n}\n\n.code {\n  border-radius: 0.1rem;\n  color: #50596c;\n  position: relative;\n}\n.code::before {\n  color: #acb3c2;\n  content: attr(data-lang);\n  font-size: 0.7rem;\n  position: absolute;\n  right: 0.4rem;\n  top: 0.1rem;\n}\n.code code {\n  background: #f8f9fa;\n  color: inherit;\n  display: block;\n  line-height: 1.5;\n  overflow-x: auto;\n  padding: 1rem;\n  width: 100%;\n}\n\n.img-responsive {\n  display: block;\n  height: auto;\n  max-width: 100%;\n}\n\n.img-fit-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.img-fit-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.video-responsive {\n  display: block;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  width: 100%;\n}\n.video-responsive::before {\n  content: \"\";\n  display: block;\n  padding-bottom: 56.25%;\n}\n.video-responsive iframe,\n.video-responsive object,\n.video-responsive embed {\n  border: 0;\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n}\n\nvideo.video-responsive {\n  height: auto;\n  max-width: 100%;\n}\nvideo.video-responsive::before {\n  content: none;\n}\n\n.video-responsive-4-3::before {\n  padding-bottom: 75%;\n}\n\n.video-responsive-1-1::before {\n  padding-bottom: 100%;\n}\n\n.figure {\n  margin: 0 0 0.4rem 0;\n}\n.figure .figure-caption {\n  color: #667189;\n  margin-top: 0.4rem;\n}\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  width: 100%;\n}\n.container.grid-xl {\n  max-width: 1296px;\n}\n.container.grid-lg {\n  max-width: 976px;\n}\n.container.grid-md {\n  max-width: 856px;\n}\n.container.grid-sm {\n  max-width: 616px;\n}\n.container.grid-xs {\n  max-width: 496px;\n}\n\n.show-xs,\n.show-sm,\n.show-md,\n.show-lg,\n.show-xl {\n  display: none !important;\n}\n\n.columns {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -0.4rem;\n  margin-right: -0.4rem;\n}\n.columns.col-gapless {\n  margin-left: 0;\n  margin-right: 0;\n}\n.columns.col-gapless > .column {\n  padding-left: 0;\n  padding-right: 0;\n}\n.columns.col-oneline {\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n\n.column {\n  flex: 1 1;\n  max-width: 100%;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n}\n.column.col-12, .column.col-11, .column.col-10, .column.col-9, .column.col-8, .column.col-7, .column.col-6, .column.col-5, .column.col-4, .column.col-3, .column.col-2, .column.col-1 {\n  flex: none;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n.col-11 {\n  width: 91.66666667%;\n}\n\n.col-10 {\n  width: 83.33333333%;\n}\n\n.col-9 {\n  width: 75%;\n}\n\n.col-8 {\n  width: 66.66666667%;\n}\n\n.col-7 {\n  width: 58.33333333%;\n}\n\n.col-6 {\n  width: 50%;\n}\n\n.col-5 {\n  width: 41.66666667%;\n}\n\n.col-4 {\n  width: 33.33333333%;\n}\n\n.col-3 {\n  width: 25%;\n}\n\n.col-2 {\n  width: 16.66666667%;\n}\n\n.col-1 {\n  width: 8.33333333%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  max-width: none;\n  width: auto;\n}\n\n.col-mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.col-ml-auto {\n  margin-left: auto;\n}\n\n.col-mr-auto {\n  margin-right: auto;\n}\n\n@media (max-width: 1280px) {\n  .col-xl-12,\n.col-xl-11,\n.col-xl-10,\n.col-xl-9,\n.col-xl-8,\n.col-xl-7,\n.col-xl-6,\n.col-xl-5,\n.col-xl-4,\n.col-xl-3,\n.col-xl-2,\n.col-xl-1 {\n    flex: none;\n  }\n\n  .col-xl-12 {\n    width: 100%;\n  }\n\n  .col-xl-11 {\n    width: 91.66666667%;\n  }\n\n  .col-xl-10 {\n    width: 83.33333333%;\n  }\n\n  .col-xl-9 {\n    width: 75%;\n  }\n\n  .col-xl-8 {\n    width: 66.66666667%;\n  }\n\n  .col-xl-7 {\n    width: 58.33333333%;\n  }\n\n  .col-xl-6 {\n    width: 50%;\n  }\n\n  .col-xl-5 {\n    width: 41.66666667%;\n  }\n\n  .col-xl-4 {\n    width: 33.33333333%;\n  }\n\n  .col-xl-3 {\n    width: 25%;\n  }\n\n  .col-xl-2 {\n    width: 16.66666667%;\n  }\n\n  .col-xl-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-xl {\n    display: none !important;\n  }\n\n  .show-xl {\n    display: block !important;\n  }\n}\n@media (max-width: 960px) {\n  .col-lg-12,\n.col-lg-11,\n.col-lg-10,\n.col-lg-9,\n.col-lg-8,\n.col-lg-7,\n.col-lg-6,\n.col-lg-5,\n.col-lg-4,\n.col-lg-3,\n.col-lg-2,\n.col-lg-1 {\n    flex: none;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-lg {\n    display: none !important;\n  }\n\n  .show-lg {\n    display: block !important;\n  }\n}\n@media (max-width: 840px) {\n  .col-md-12,\n.col-md-11,\n.col-md-10,\n.col-md-9,\n.col-md-8,\n.col-md-7,\n.col-md-6,\n.col-md-5,\n.col-md-4,\n.col-md-3,\n.col-md-2,\n.col-md-1 {\n    flex: none;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-md {\n    display: none !important;\n  }\n\n  .show-md {\n    display: block !important;\n  }\n}\n@media (max-width: 600px) {\n  .col-sm-12,\n.col-sm-11,\n.col-sm-10,\n.col-sm-9,\n.col-sm-8,\n.col-sm-7,\n.col-sm-6,\n.col-sm-5,\n.col-sm-4,\n.col-sm-3,\n.col-sm-2,\n.col-sm-1 {\n    flex: none;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-sm {\n    display: none !important;\n  }\n\n  .show-sm {\n    display: block !important;\n  }\n}\n@media (max-width: 480px) {\n  .col-xs-12,\n.col-xs-11,\n.col-xs-10,\n.col-xs-9,\n.col-xs-8,\n.col-xs-7,\n.col-xs-6,\n.col-xs-5,\n.col-xs-4,\n.col-xs-3,\n.col-xs-2,\n.col-xs-1 {\n    flex: none;\n  }\n\n  .col-xs-12 {\n    width: 100%;\n  }\n\n  .col-xs-11 {\n    width: 91.66666667%;\n  }\n\n  .col-xs-10 {\n    width: 83.33333333%;\n  }\n\n  .col-xs-9 {\n    width: 75%;\n  }\n\n  .col-xs-8 {\n    width: 66.66666667%;\n  }\n\n  .col-xs-7 {\n    width: 58.33333333%;\n  }\n\n  .col-xs-6 {\n    width: 50%;\n  }\n\n  .col-xs-5 {\n    width: 41.66666667%;\n  }\n\n  .col-xs-4 {\n    width: 33.33333333%;\n  }\n\n  .col-xs-3 {\n    width: 25%;\n  }\n\n  .col-xs-2 {\n    width: 16.66666667%;\n  }\n\n  .col-xs-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-xs {\n    display: none !important;\n  }\n\n  .show-xs {\n    display: block !important;\n  }\n}\n.avatar {\n  font-size: 0.8rem;\n  height: 1.6rem;\n  width: 1.6rem;\n  background: #144777;\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.85);\n  display: inline-block;\n  font-weight: 300;\n  line-height: 1.25;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n}\n.avatar.avatar-xs {\n  font-size: 0.4rem;\n  height: 0.8rem;\n  width: 0.8rem;\n}\n.avatar.avatar-sm {\n  font-size: 0.6rem;\n  height: 1.2rem;\n  width: 1.2rem;\n}\n.avatar.avatar-lg {\n  font-size: 1.2rem;\n  height: 2.4rem;\n  width: 2.4rem;\n}\n.avatar.avatar-xl {\n  font-size: 1.6rem;\n  height: 3.2rem;\n  width: 3.2rem;\n}\n.avatar img {\n  border-radius: 50%;\n  height: 100%;\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n.avatar .avatar-icon,\n.avatar .avatar-presence {\n  background: #fff;\n  bottom: 14.64%;\n  height: 50%;\n  padding: 0.1rem;\n  position: absolute;\n  right: 14.64%;\n  transform: translate(50%, 50%);\n  width: 50%;\n  z-index: 2;\n}\n.avatar .avatar-presence {\n  background: #acb3c2;\n  box-shadow: 0 0 0 0.1rem #fff;\n  border-radius: 50%;\n  height: 0.5em;\n  width: 0.5em;\n}\n.avatar .avatar-presence.online {\n  background: #32b643;\n}\n.avatar .avatar-presence.busy {\n  background: #e85600;\n}\n.avatar .avatar-presence.away {\n  background: #ffb700;\n}\n.avatar[data-initial]::before {\n  color: currentColor;\n  content: attr(data-normal);\n  content: attr(data-initial);\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.badge {\n  position: relative;\n  white-space: nowrap;\n}\n.badge[data-badge]::after, .badge:not([data-badge])::after {\n  background: #144777;\n  background-clip: padding-box;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 0 0.1rem #fff;\n  color: #fff;\n  content: attr(data-badge);\n  display: inline-block;\n  transform: translate(-0.05rem, -0.5rem);\n}\n.badge[data-badge]::after {\n  font-size: 0.7rem;\n  height: 0.9rem;\n  line-height: 1;\n  min-width: 0.9rem;\n  padding: 0.1rem 0.2rem;\n  text-align: center;\n  white-space: nowrap;\n}\n.badge:not([data-badge])::after, .badge[data-badge=\"\"]::after {\n  height: 6px;\n  min-width: 6px;\n  padding: 0;\n  width: 6px;\n}\n.badge.btn::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n.badge.avatar::after {\n  position: absolute;\n  top: 14.64%;\n  right: 14.64%;\n  transform: translate(50%, -50%);\n  z-index: 100;\n}\n\n.card {\n  background: #fff;\n  border: 0.05rem solid #e7e9ed;\n  border-radius: 0.1rem;\n  display: flex;\n  flex-direction: column;\n}\n.card .card-header,\n.card .card-body,\n.card .card-footer {\n  padding: 0.8rem;\n  padding-bottom: 0;\n}\n.card .card-header:last-child,\n.card .card-body:last-child,\n.card .card-footer:last-child {\n  padding-bottom: 0.8rem;\n}\n.card .card-body {\n  flex: 1 1 auto;\n}\n.card .card-image {\n  padding-top: 0.8rem;\n}\n.card .card-image:first-child {\n  padding-top: 0;\n}\n.card .card-image:first-child img {\n  border-top-left-radius: 0.1rem;\n  border-top-right-radius: 0.1rem;\n}\n.card .card-image:last-child img {\n  border-bottom-left-radius: 0.1rem;\n  border-bottom-right-radius: 0.1rem;\n}\n\n.chip {\n  align-items: center;\n  background: #f0f1f4;\n  border-radius: 5rem;\n  color: #667189;\n  display: inline-flex;\n  font-size: 90%;\n  height: 1.2rem;\n  line-height: 0.8rem;\n  margin: 0.1rem;\n  max-width: 100%;\n  padding: 0.2rem 0.4rem;\n  text-decoration: none;\n  vertical-align: middle;\n}\n.chip.active {\n  background: #144777;\n  color: #fff;\n}\n.chip .avatar {\n  margin-left: -0.4rem;\n  margin-right: 0.2rem;\n}\n.chip .btn-clear {\n  transform: scale(0.75);\n}\n\n/*! Spectre.css Icons v0.5.3 | MIT License | github.com/picturepan2/spectre */\n.icon {\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: inherit;\n  font-style: normal;\n  height: 1em;\n  position: relative;\n  text-indent: -9999px;\n  vertical-align: middle;\n  width: 1em;\n}\n.icon::before, .icon::after {\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.icon.icon-2x {\n  font-size: 1.6rem;\n}\n.icon.icon-3x {\n  font-size: 2.4rem;\n}\n.icon.icon-4x {\n  font-size: 3.2rem;\n}\n\n.accordion .icon,\n.btn .icon,\n.toast .icon,\n.menu .icon {\n  vertical-align: -10%;\n}\n\n.btn-lg .icon {\n  vertical-align: -15%;\n}\n\n.icon-arrow-down::before,\n.icon-arrow-left::before,\n.icon-arrow-right::before,\n.icon-arrow-up::before,\n.icon-downward::before,\n.icon-back::before,\n.icon-forward::before,\n.icon-upward::before {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-right: 0;\n  content: \"\";\n  height: 0.65em;\n  width: 0.65em;\n}\n\n.icon-arrow-down::before {\n  transform: translate(-50%, -75%) rotate(225deg);\n}\n\n.icon-arrow-left::before {\n  transform: translate(-25%, -50%) rotate(-45deg);\n}\n\n.icon-arrow-right::before {\n  transform: translate(-75%, -50%) rotate(135deg);\n}\n\n.icon-arrow-up::before {\n  transform: translate(-50%, -25%) rotate(45deg);\n}\n\n.icon-back::after,\n.icon-forward::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.1rem;\n  width: 0.8em;\n}\n\n.icon-downward::after,\n.icon-upward::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.8em;\n  width: 0.1rem;\n}\n\n.icon-back::after {\n  left: 55%;\n}\n.icon-back::before {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.icon-downward::after {\n  top: 45%;\n}\n.icon-downward::before {\n  transform: translate(-50%, -50%) rotate(-135deg);\n}\n\n.icon-forward::after {\n  left: 45%;\n}\n.icon-forward::before {\n  transform: translate(-50%, -50%) rotate(135deg);\n}\n\n.icon-upward::after {\n  top: 55%;\n}\n.icon-upward::before {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.icon-caret::before {\n  border-top: 0.3em solid currentColor;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent;\n  content: \"\";\n  height: 0;\n  transform: translate(-50%, -25%);\n  width: 0;\n}\n\n.icon-menu::before {\n  background: currentColor;\n  box-shadow: 0 -0.35em, 0 0.35em;\n  content: \"\";\n  height: 0.1rem;\n  width: 100%;\n}\n\n.icon-apps::before {\n  background: currentColor;\n  box-shadow: -0.35em -0.35em, -0.35em 0, -0.35em 0.35em, 0 -0.35em, 0 0.35em, 0.35em -0.35em, 0.35em 0, 0.35em 0.35em;\n  content: \"\";\n  height: 3px;\n  width: 3px;\n}\n\n.icon-resize-horiz::before, .icon-resize-horiz::after,\n.icon-resize-vert::before,\n.icon-resize-vert::after {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-right: 0;\n  content: \"\";\n  height: 0.45em;\n  width: 0.45em;\n}\n.icon-resize-horiz::before,\n.icon-resize-vert::before {\n  transform: translate(-50%, -90%) rotate(45deg);\n}\n.icon-resize-horiz::after,\n.icon-resize-vert::after {\n  transform: translate(-50%, -10%) rotate(225deg);\n}\n\n.icon-resize-horiz::before {\n  transform: translate(-90%, -50%) rotate(-45deg);\n}\n.icon-resize-horiz::after {\n  transform: translate(-10%, -50%) rotate(135deg);\n}\n\n.icon-more-horiz::before,\n.icon-more-vert::before {\n  background: currentColor;\n  box-shadow: -0.4em 0, 0.4em 0;\n  border-radius: 50%;\n  content: \"\";\n  height: 3px;\n  width: 3px;\n}\n\n.icon-more-vert::before {\n  box-shadow: 0 -0.4em, 0 0.4em;\n}\n\n.icon-plus::before,\n.icon-minus::before,\n.icon-cross::before {\n  background: currentColor;\n  content: \"\";\n  height: 0.1rem;\n  width: 100%;\n}\n\n.icon-plus::after,\n.icon-cross::after {\n  background: currentColor;\n  content: \"\";\n  height: 100%;\n  width: 0.1rem;\n}\n\n.icon-cross::before {\n  width: 100%;\n}\n.icon-cross::after {\n  height: 100%;\n}\n.icon-cross::before, .icon-cross::after {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.icon-check::before {\n  border: 0.1rem solid currentColor;\n  border-right: 0;\n  border-top: 0;\n  content: \"\";\n  height: 0.5em;\n  width: 0.9em;\n  transform: translate(-50%, -75%) rotate(-45deg);\n}\n\n.icon-stop {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n}\n.icon-stop::before {\n  background: currentColor;\n  content: \"\";\n  height: 0.1rem;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 1em;\n}\n\n.icon-shutdown {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.icon-shutdown::before {\n  background: currentColor;\n  content: \"\";\n  height: 0.5em;\n  top: 0.1em;\n  width: 0.1rem;\n}\n\n.icon-refresh::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  border-right-color: transparent;\n  content: \"\";\n  height: 1em;\n  width: 1em;\n}\n.icon-refresh::after {\n  border: 0.2em solid currentColor;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  content: \"\";\n  height: 0;\n  left: 80%;\n  top: 20%;\n  width: 0;\n}\n\n.icon-search::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  content: \"\";\n  height: 0.75em;\n  left: 5%;\n  top: 5%;\n  transform: translate(0, 0) rotate(45deg);\n  width: 0.75em;\n}\n.icon-search::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.1rem;\n  left: 80%;\n  top: 80%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 0.4em;\n}\n\n.icon-edit::before {\n  border: 0.1rem solid currentColor;\n  content: \"\";\n  height: 0.4em;\n  transform: translate(-40%, -60%) rotate(-45deg);\n  width: 0.85em;\n}\n.icon-edit::after {\n  border: 0.15em solid currentColor;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  content: \"\";\n  height: 0;\n  left: 5%;\n  top: 95%;\n  transform: translate(0, -100%);\n  width: 0;\n}\n\n.icon-delete::before {\n  border: 0.1rem solid currentColor;\n  border-bottom-left-radius: 0.1rem;\n  border-bottom-right-radius: 0.1rem;\n  border-top: 0;\n  content: \"\";\n  height: 0.75em;\n  top: 60%;\n  width: 0.75em;\n}\n.icon-delete::after {\n  background: currentColor;\n  box-shadow: -0.25em 0.2em, 0.25em 0.2em;\n  content: \"\";\n  height: 0.1rem;\n  top: 0.05rem;\n  width: 0.5em;\n}\n\n.icon-share {\n  border: 0.1rem solid currentColor;\n  border-radius: 0.1rem;\n  border-right: 0;\n  border-top: 0;\n}\n.icon-share::before {\n  border: 0.1rem solid currentColor;\n  border-left: 0;\n  border-top: 0;\n  content: \"\";\n  height: 0.4em;\n  left: 100%;\n  top: 0.25em;\n  transform: translate(-125%, -50%) rotate(-45deg);\n  width: 0.4em;\n}\n.icon-share::after {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-right: 0;\n  border-radius: 75% 0;\n  content: \"\";\n  height: 0.5em;\n  width: 0.6em;\n}\n\n.icon-flag::before {\n  background: currentColor;\n  content: \"\";\n  height: 1em;\n  left: 15%;\n  width: 0.1rem;\n}\n.icon-flag::after {\n  border: 0.1rem solid currentColor;\n  border-bottom-right-radius: 0.1rem;\n  border-left: 0;\n  border-top-right-radius: 0.1rem;\n  content: \"\";\n  height: 0.65em;\n  top: 35%;\n  left: 60%;\n  width: 0.8em;\n}\n\n.icon-bookmark::before {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-top-left-radius: 0.1rem;\n  border-top-right-radius: 0.1rem;\n  content: \"\";\n  height: 0.9em;\n  width: 0.8em;\n}\n.icon-bookmark::after {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-left: 0;\n  border-radius: 0.1rem;\n  content: \"\";\n  height: 0.5em;\n  transform: translate(-50%, 35%) rotate(-45deg) skew(15deg, 15deg);\n  width: 0.5em;\n}\n\n.icon-download,\n.icon-upload {\n  border-bottom: 0.1rem solid currentColor;\n}\n.icon-download::before,\n.icon-upload::before {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-right: 0;\n  content: \"\";\n  height: 0.5em;\n  width: 0.5em;\n  transform: translate(-50%, -60%) rotate(-135deg);\n}\n.icon-download::after,\n.icon-upload::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.6em;\n  top: 40%;\n  width: 0.1rem;\n}\n\n.icon-upload::before {\n  transform: translate(-50%, -60%) rotate(45deg);\n}\n.icon-upload::after {\n  top: 50%;\n}\n\n.icon-time {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n}\n.icon-time::before {\n  background: currentColor;\n  content: \"\";\n  height: 0.4em;\n  transform: translate(-50%, -75%);\n  width: 0.1rem;\n}\n.icon-time::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.3em;\n  transform: translate(-50%, -75%) rotate(90deg);\n  transform-origin: 50% 90%;\n  width: 0.1rem;\n}\n\n.icon-mail::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 0.1rem;\n  content: \"\";\n  height: 0.8em;\n  width: 1em;\n}\n.icon-mail::after {\n  border: 0.1rem solid currentColor;\n  border-right: 0;\n  border-top: 0;\n  content: \"\";\n  height: 0.5em;\n  transform: translate(-50%, -90%) rotate(-45deg) skew(10deg, 10deg);\n  width: 0.5em;\n}\n\n.icon-people::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  content: \"\";\n  height: 0.45em;\n  top: 25%;\n  width: 0.45em;\n}\n.icon-people::after {\n  border: 0.1rem solid currentColor;\n  border-radius: 50% 50% 0 0;\n  content: \"\";\n  height: 0.4em;\n  top: 75%;\n  width: 0.9em;\n}\n\n.icon-message {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-radius: 0.1rem;\n  border-right: 0;\n}\n.icon-message::before {\n  border: 0.1rem solid currentColor;\n  border-bottom-right-radius: 0.1rem;\n  border-left: 0;\n  border-top: 0;\n  content: \"\";\n  height: 0.8em;\n  left: 65%;\n  top: 40%;\n  width: 0.7em;\n}\n.icon-message::after {\n  background: currentColor;\n  border-radius: 0.1rem;\n  content: \"\";\n  height: 0.3em;\n  left: 10%;\n  top: 100%;\n  transform: translate(0, -90%) rotate(45deg);\n  width: 0.1rem;\n}\n\n.icon-photo {\n  border: 0.1rem solid currentColor;\n  border-radius: 0.1rem;\n}\n.icon-photo::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  content: \"\";\n  height: 0.25em;\n  left: 35%;\n  top: 35%;\n  width: 0.25em;\n}\n.icon-photo::after {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-left: 0;\n  content: \"\";\n  height: 0.5em;\n  left: 60%;\n  transform: translate(-50%, 25%) rotate(-45deg);\n  width: 0.5em;\n}\n\n.icon-link::before, .icon-link::after {\n  border: 0.1rem solid currentColor;\n  border-radius: 5em 0 0 5em;\n  border-right: 0;\n  content: \"\";\n  height: 0.5em;\n  width: 0.75em;\n}\n.icon-link::before {\n  transform: translate(-70%, -45%) rotate(-45deg);\n}\n.icon-link::after {\n  transform: translate(-30%, -55%) rotate(135deg);\n}\n\n.icon-location::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50% 50% 50% 0;\n  content: \"\";\n  height: 0.8em;\n  transform: translate(-50%, -60%) rotate(-45deg);\n  width: 0.8em;\n}\n.icon-location::after {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  content: \"\";\n  height: 0.2em;\n  transform: translate(-50%, -80%);\n  width: 0.2em;\n}\n\n.icon-emoji {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n}\n.icon-emoji::before {\n  border-radius: 50%;\n  box-shadow: -0.17em -0.15em, 0.17em -0.15em;\n  content: \"\";\n  height: 0.1em;\n  width: 0.1em;\n}\n.icon-emoji::after {\n  border: 0.1rem solid currentColor;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  border-right-color: transparent;\n  content: \"\";\n  height: 0.5em;\n  transform: translate(-50%, -40%) rotate(-135deg);\n  width: 0.5em;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-1.6rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-1.6rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.text-primary {\n  color: #144777;\n}\n\na.text-primary:focus, a.text-primary:hover {\n  color: #103a61;\n}\na.text-primary:visited {\n  color: #18548d;\n}\n\n.text-secondary {\n  color: #58a0e3;\n}\n\na.text-secondary:focus, a.text-secondary:hover {\n  color: #4293df;\n}\na.text-secondary:visited {\n  color: #6eace7;\n}\n\n.text-gray {\n  color: #acb3c2;\n}\n\na.text-gray:focus, a.text-gray:hover {\n  color: #9ea6b7;\n}\na.text-gray:visited {\n  color: #bbc1cd;\n}\n\n.text-light {\n  color: #fff;\n}\n\na.text-light:focus, a.text-light:hover {\n  color: #f2f2f2;\n}\na.text-light:visited {\n  color: white;\n}\n\n.text-dark {\n  color: #50596c;\n}\n\na.text-dark:focus, a.text-dark:hover {\n  color: #454d5d;\n}\na.text-dark:visited {\n  color: #5b657a;\n}\n\n.text-success {\n  color: #32b643;\n}\n\na.text-success:focus, a.text-success:hover {\n  color: #2da23c;\n}\na.text-success:visited {\n  color: #39c94b;\n}\n\n.text-warning {\n  color: #ffb700;\n}\n\na.text-warning:focus, a.text-warning:hover {\n  color: #e6a500;\n}\na.text-warning:visited {\n  color: #ffbe1a;\n}\n\n.text-error {\n  color: #e85600;\n}\n\na.text-error:focus, a.text-error:hover {\n  color: #cf4d00;\n}\na.text-error:visited {\n  color: #ff6003;\n}\n\n.bg-primary {\n  background: #144777;\n  color: #fff;\n}\n\n.bg-secondary {\n  background: #65a7e5;\n}\n\n.bg-dark {\n  background: #454d5d;\n  color: #fff;\n}\n\n.bg-gray {\n  background: #f8f9fa;\n}\n\n.bg-success {\n  background: #32b643;\n  color: #fff;\n}\n\n.bg-warning {\n  background: #ffb700;\n  color: #fff;\n}\n\n.bg-error {\n  background: #e85600;\n  color: #fff;\n}\n\n.c-hand {\n  cursor: pointer;\n}\n\n.c-move {\n  cursor: move;\n}\n\n.c-zoom-in {\n  cursor: zoom-in;\n}\n\n.c-zoom-out {\n  cursor: zoom-out;\n}\n\n.c-not-allowed {\n  cursor: not-allowed;\n}\n\n.c-auto {\n  cursor: auto;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-inline {\n  display: inline;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-inline-flex {\n  display: inline-flex;\n}\n\n.d-none,\n.d-hide {\n  display: none !important;\n}\n\n.d-visible {\n  visibility: visible;\n}\n\n.d-invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  background: transparent;\n  border: 0;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  text-shadow: none;\n}\n\n.text-assistive {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.divider,\n.divider-vert {\n  display: block;\n  position: relative;\n}\n.divider[data-content]::after,\n.divider-vert[data-content]::after {\n  background: #fff;\n  color: #acb3c2;\n  content: attr(data-content);\n  display: inline-block;\n  font-size: 0.7rem;\n  padding: 0 0.4rem;\n  transform: translateY(-0.65rem);\n}\n\n.divider {\n  border-top: 0.05rem solid #e7e9ed;\n  height: 0.05rem;\n  margin: 0.4rem 0;\n}\n.divider[data-content] {\n  margin: 0.8rem 0;\n}\n\n.divider-vert {\n  display: block;\n  padding: 0.8rem;\n}\n.divider-vert::before {\n  border-left: 0.05rem solid #e7e9ed;\n  bottom: 0.4rem;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 0.4rem;\n  transform: translateX(-50%);\n}\n.divider-vert[data-content]::after {\n  left: 50%;\n  padding: 0.2rem 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.loading {\n  color: transparent !important;\n  min-height: 0.8rem;\n  pointer-events: none;\n  position: relative;\n}\n.loading::after {\n  -webkit-animation: loading 500ms infinite linear;\n          animation: loading 500ms infinite linear;\n  border: 0.1rem solid #144777;\n  border-radius: 50%;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 0.8rem;\n  left: 50%;\n  margin-left: -0.4rem;\n  margin-top: -0.4rem;\n  position: absolute;\n  top: 50%;\n  width: 0.8rem;\n  z-index: 1;\n}\n.loading.loading-lg {\n  min-height: 2rem;\n}\n.loading.loading-lg::after {\n  height: 1.6rem;\n  margin-left: -0.8rem;\n  margin-top: -0.8rem;\n  width: 1.6rem;\n}\n\n.clearfix::after, .container::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.relative {\n  position: relative !important;\n}\n\n.absolute {\n  position: absolute !important;\n}\n\n.fixed {\n  position: fixed !important;\n}\n\n.centered {\n  display: block;\n  float: none;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.flex-centered {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-bottom: 0 !important;\n  margin-top: 0 !important;\n}\n\n.m-1 {\n  margin: 0.2rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.2rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.2rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.2rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.2rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.2rem !important;\n  margin-right: 0.2rem !important;\n}\n\n.my-1 {\n  margin-bottom: 0.2rem !important;\n  margin-top: 0.2rem !important;\n}\n\n.m-2 {\n  margin: 0.4rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.4rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.4rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.4rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.4rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.4rem !important;\n  margin-right: 0.4rem !important;\n}\n\n.my-2 {\n  margin-bottom: 0.4rem !important;\n  margin-top: 0.4rem !important;\n}\n\n.m-3 {\n  margin: 0.6rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 0.6rem !important;\n}\n\n.ml-3 {\n  margin-left: 0.6rem !important;\n}\n\n.mr-3 {\n  margin-right: 0.6rem !important;\n}\n\n.mt-3 {\n  margin-top: 0.6rem !important;\n}\n\n.mx-3 {\n  margin-left: 0.6rem !important;\n  margin-right: 0.6rem !important;\n}\n\n.my-3 {\n  margin-bottom: 0.6rem !important;\n  margin-top: 0.6rem !important;\n}\n\n.m-4 {\n  margin: 0.8rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 0.8rem !important;\n}\n\n.ml-4 {\n  margin-left: 0.8rem !important;\n}\n\n.mr-4 {\n  margin-right: 0.8rem !important;\n}\n\n.mt-4 {\n  margin-top: 0.8rem !important;\n}\n\n.mx-4 {\n  margin-left: 0.8rem !important;\n  margin-right: 0.8rem !important;\n}\n\n.my-4 {\n  margin-bottom: 0.8rem !important;\n  margin-top: 0.8rem !important;\n}\n\n.m-5 {\n  margin: 1rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-5 {\n  margin-left: 1rem !important;\n}\n\n.mr-5 {\n  margin-right: 1rem !important;\n}\n\n.mt-5 {\n  margin-top: 1rem !important;\n}\n\n.mx-5 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-5 {\n  margin-bottom: 1rem !important;\n  margin-top: 1rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important;\n}\n\n.p-1 {\n  padding: 0.2rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.2rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.2rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.2rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.2rem !important;\n}\n\n.px-1 {\n  padding-left: 0.2rem !important;\n  padding-right: 0.2rem !important;\n}\n\n.py-1 {\n  padding-bottom: 0.2rem !important;\n  padding-top: 0.2rem !important;\n}\n\n.p-2 {\n  padding: 0.4rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.4rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.4rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.4rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.4rem !important;\n}\n\n.px-2 {\n  padding-left: 0.4rem !important;\n  padding-right: 0.4rem !important;\n}\n\n.py-2 {\n  padding-bottom: 0.4rem !important;\n  padding-top: 0.4rem !important;\n}\n\n.p-3 {\n  padding: 0.6rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 0.6rem !important;\n}\n\n.pl-3 {\n  padding-left: 0.6rem !important;\n}\n\n.pr-3 {\n  padding-right: 0.6rem !important;\n}\n\n.pt-3 {\n  padding-top: 0.6rem !important;\n}\n\n.px-3 {\n  padding-left: 0.6rem !important;\n  padding-right: 0.6rem !important;\n}\n\n.py-3 {\n  padding-bottom: 0.6rem !important;\n  padding-top: 0.6rem !important;\n}\n\n.p-4 {\n  padding: 0.8rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 0.8rem !important;\n}\n\n.pl-4 {\n  padding-left: 0.8rem !important;\n}\n\n.pr-4 {\n  padding-right: 0.8rem !important;\n}\n\n.pt-4 {\n  padding-top: 0.8rem !important;\n}\n\n.px-4 {\n  padding-left: 0.8rem !important;\n  padding-right: 0.8rem !important;\n}\n\n.py-4 {\n  padding-bottom: 0.8rem !important;\n  padding-top: 0.8rem !important;\n}\n\n.p-5 {\n  padding: 1rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-5 {\n  padding-left: 1rem !important;\n}\n\n.pr-5 {\n  padding-right: 1rem !important;\n}\n\n.pt-5 {\n  padding-top: 1rem !important;\n}\n\n.px-5 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-5 {\n  padding-bottom: 1rem !important;\n  padding-top: 1rem !important;\n}\n\n.s-rounded {\n  border-radius: 0.1rem;\n}\n\n.s-circle {\n  border-radius: 50%;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-normal {\n  font-weight: normal;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.text-italic {\n  font-style: italic;\n}\n\n.text-large {\n  font-size: 1.2em;\n}\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-clip {\n  overflow: hidden;\n  text-overflow: clip;\n  white-space: nowrap;\n}\n\n.text-break {\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n\n/*! Spectre.css Experimentals v0.5.3 | MIT License | github.com/picturepan2/spectre */\nhtml, body, #__next {\n  height: 100%;\n}\n\n* {\n  font-size: 0.9rem;\n}\n\na:active, a:focus {\n  outline: none;\n  outline-style: none;\n  box-shadow: none;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.fw-light {\n  font-weight: 300;\n}\n.fw-medium {\n  font-weight: 400;\n}\n.fw-bold {\n  font-weight: 700;\n}\n\n.ml-a {\n  margin-left: auto !important;\n}\n\n.mr-a {\n  margin-right: auto !important;\n}\n\n.mt-a, .my-a {\n  margin-top: auto !important;\n}\n\n.mb-a, .my-a {\n  margin-bottom: auto !important;\n}\n\n.fade-appear .transition-elem, .fade-enter .transition-elem {\n  opacity: 0;\n  transform: translateZ(0) translateY(80px);\n}\n.fade-appear-active, .fade-enter-active {\n  z-index: 1;\n}\n.fade-appear-active .transition-elem, .fade-enter-active .transition-elem {\n  opacity: 1;\n  transform: translateZ(0) translateY(0px);\n  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n  /* easeOutQuart */\n}\n.fade-enter-active .transition-elem {\n  transition-duration: 700ms;\n}\n.fade-enter-active .transition-elem.delay-0 {\n  transition-delay: 430ms;\n}\n.fade-enter-active .transition-elem.delay-1 {\n  transition-delay: 510ms;\n}\n.fade-enter-active .transition-elem.delay-2 {\n  transition-delay: 590ms;\n}\n.fade-enter-active .transition-elem.delay-3 {\n  transition-delay: 670ms;\n}\n.fade-enter-active .transition-elem.delay-4 {\n  transition-delay: 750ms;\n}\n.fade-enter-active .transition-elem.delay-5 {\n  transition-delay: 830ms;\n}\n.fade-appear-active .transition-elem {\n  transition-duration: 1050ms;\n}\n.fade-appear-active .transition-elem.delay-0 {\n  transition-delay: 300ms;\n}\n.fade-appear-active .transition-elem.delay-1 {\n  transition-delay: 380ms;\n}\n.fade-appear-active .transition-elem.delay-2 {\n  transition-delay: 460ms;\n}\n.fade-appear-active .transition-elem.delay-3 {\n  transition-delay: 540ms;\n}\n.fade-appear-active .transition-elem.delay-4 {\n  transition-delay: 620ms;\n}\n.fade-appear-active .transition-elem.delay-5 {\n  transition-delay: 700ms;\n}\n.fade-exit .transition-elem {\n  opacity: 1;\n  transform: translateZ(0) translateY(0px);\n}\n.fade-exit-active .transition-elem {\n  opacity: 0;\n  transform: translateZ(0) translateY(-100px);\n  transition-duration: 350ms;\n  /* older webkit */\n  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n  /* easeInBack */\n}\n.fade-exit-active .transition-elem.delay-0 {\n  transition-delay: 0ms;\n}\n.fade-exit-active .transition-elem.delay-1 {\n  transition-delay: 80ms;\n}\n.fade-exit-active .transition-elem.delay-2 {\n  transition-delay: 160ms;\n}\n.fade-exit-active .transition-elem.delay-3 {\n  transition-delay: 160ms;\n}\n.fade-exit-active .transition-elem.delay-4 {\n  transition-delay: 160ms;\n}\n.fade-exit-active .transition-elem.delay-5 {\n  transition-delay: 160ms;\n}\n\n.transition-elem {\n  transition-property: transform, opacity;\n  transform: translateZ(0);\n}\n\n.btn-icon-right i {\n  margin-left: 5px;\n}\n\n.btn-icon-left i {\n  margin-right: 5px;\n}\n\n.content-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  padding: 90px 25px 30px;\n  overflow-y: scroll;\n}\n@media (min-width: 1200px) {\n  .content-page {\n    width: calc(100% + 17px);\n  }\n}\n\n@media (max-width: 599px) {\n  .padx-xs {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n@media (min-width: 600px) {\n  .content-page {\n    padding: 90px 45px 30px;\n  }\n}\n@media (min-width: 1200px) {\n  .content-page {\n    padding: 60px 100px;\n  }\n\n  .btn-icon-right i {\n    transition: margin-left 0.3s;\n  }\n  .btn-icon-right:hover i {\n    margin-left: 10px;\n  }\n\n  .btn-icon-left i {\n    transition: margin-right 0.3s;\n  }\n  .btn-icon-left:hover i {\n    margin-right: 10px;\n  }\n}", "",{"version":3,"sources":["global.scss","spectre/spectre.scss","spectre/_normalize.scss","spectre/_variables.scss","spectre/_base.scss","spectre/mixins/_shadow.scss","spectre/_typography.scss","spectre/mixins/_label.scss","spectre/_tables.scss","spectre/_buttons.scss","spectre/mixins/_transition.scss","spectre/mixins/_button.scss","spectre/_forms.scss","spectre/_labels.scss","spectre/_codes.scss","spectre/_media.scss","spectre/_layout.scss","spectre/_avatars.scss","spectre/mixins/_avatar.scss","spectre/_badges.scss","spectre/_cards.scss","spectre/_chips.scss","spectre/spectre-icons.scss","spectre/icons/_icons-core.scss","spectre/icons/_icons-navigation.scss","spectre/icons/_icons-action.scss","spectre/icons/_icons-object.scss","spectre/_animations.scss","spectre/mixins/_color.scss","spectre/utilities/_cursors.scss","spectre/utilities/_display.scss","spectre/utilities/_divider.scss","spectre/utilities/_loading.scss","spectre/mixins/_clearfix.scss","spectre/utilities/_position.scss","spectre/mixins/_position.scss","spectre/utilities/_shapes.scss","spectre/utilities/_text.scss","spectre/mixins/_text.scss","spectre/spectre-exp.scss"],"names":[],"mappings":"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4aF;;AIzaA;EACE,cDhBc;ECiBd,aAAA;EACA,qBAAA;AJ4aF;AI1aE;EC1BA,+CAAA;ALucF;AIzaE;EAIE,cDGc;ECFd,0BAAA;AJwaJ;AIraE;EACE,cDDe;AHwanB;;AM9cA;;;;;;EAME,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;ANidF;;AM/cA;;;;;;EAME,gBAAA;ANkdF;;AMhdA;;EAEE,eAAA;ANmdF;;AMjdA;;EAEE,iBAAA;ANodF;;AMldA;;EAEE,iBAAA;ANqdF;;AMndA;;EAEE,iBAAA;ANsdF;;AMpdA;;EAEE,eAAA;ANudF;;AMrdA;;EAEE,iBAAA;ANwdF;;AMpdA;EACE,kBAAA;ANudF;;AMndA;;;EAGE,uCAAA;UAAA,+BAAA;ANsdF;;AMndA;EACE,6BAAA;EACA,YAAA;EACA,qBAAA;ANsdF;;AMndA;EC/DE,qBJqDO;EIpDP,gBAAA;EACA,sBAAA;EAIA,mBJQW;EIPX,WJQY;EGmDZ,iBHKa;AHodf;;AMtdA;EC/DE,mBJ2BgB;EI1BhB,cJ4BgB;EGoChB,qBHlBO;EGmBP,gBAAA;AN0dF;;AMtdA;EACE,iCAAA;EACA,cAAA;EACA,sBAAA;ANydF;AMvdE;EACE,gBAAA;ANydJ;;AMpdA;;EAEE,8BAAA;EACA,UAAA;ANudF;AMrdE;;;;EAEE,8BAAA;ANydJ;AMtdE;;EACE,kBH3CK;AHogBT;;AMrdA;EACE,uBAAA;ANwdF;AMtdE;EACE,uBAAA;ANwdJ;;AMpdA;EACE,0BAAA;ANudF;AMrdE;EACE,4BAAA;ANudJ;;AMldE;EACE,iBAAA;ANqdJ;AMndE;EACE,yBAAA;ANqdJ;;AQjlBA;EACE,yBAAA;EACA,iBAAA;EACA,WAAA;EAIE,gBAAA;ARilBJ;AQ5kBM;EACE,mBLUG;AHokBX;AQrkBQ;EACE,mBLCM;AHskBhB;AQ9jBQ;EACE,mBLTM;AHykBhB;AQzjBE;EACE,cAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AR2jBJ;AQxjBE;;EAEE,oCAAA;EACA,sBAAA;AR0jBJ;AQxjBE;EACE,2BLCK;AHyjBT;;AS/mBA;ECCE,yBAAA;EDCA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBNaY;EMZZ,6BAAA;EACA,qBNiDO;EMhDP,cNCc;EMAd,eAAA;EACA,qBAAA;EACA,iBN8DU;EM7DV,cNqDO;EMpDP,mBN+DY;EM9DZ,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,sBAAA;EACA,mBAAA;ATknBF;ASjnBE;EJlBA,+CAAA;ALsoBF;ASjnBE;EAEE,mBNdc;EMed,qBNjBiB;EMkBjB,qBAAA;ATknBJ;AShnBE;EAEE,mBNtBiB;EMuBjB,qBAAA;EACA,WNhBU;EMiBV,qBAAA;ATinBJ;AS/mBM;EACE,yBNpBM;EMqBN,uBNrBM;AHsoBd;AS7mBE;EAGE,eAAA;EACA,YAAA;EACA,oBAAA;AT6mBJ;ASzmBE;EACE,mBN5CY;EM6CZ,qBN5CiB;EM6CjB,WNrCU;AHgpBd;AS1mBI;EAEE,mBAAA;EACA,qBAAA;EACA,WN1CQ;AHqpBd;ASzmBI;EAEE,mBAAA;EACA,qBAAA;EACA,WNhDQ;AH0pBd;ASvmBM;EACE,yBNpDM;EMqDN,uBNrDM;AH8pBd;ASnmBE;EE1EA,mBR2Bc;EQ1Bd,qBAAA;EACA,WRaY;AHmqBd;AW/qBE;ENHA,+CAAA;ALqrBF;AW/qBE;EAEE,mBAAA;EACA,qBAAA;EACA,WRKU;AH2qBd;AW9qBE;EAEE,mBAAA;EACA,qBAAA;EACA,WRDU;AHgrBd;AW5qBI;EACE,yBRLQ;EQMR,uBRNQ;AHorBd;ASrnBE;EE9EA,mBR6BY;EQ5BZ,qBAAA;EACA,WRaY;AHyrBd;AWrsBE;ENHA,8CAAA;AL2sBF;AWrsBE;EAEE,mBAAA;EACA,qBAAA;EACA,WRKU;AHisBd;AWpsBE;EAEE,mBAAA;EACA,qBAAA;EACA,WRDU;AHssBd;AWlsBI;EACE,yBRLQ;EQMR,uBRNQ;AH0sBd;AStoBE;EACE,uBAAA;EACA,yBAAA;EACA,cNhFY;AHwtBhB;ASvoBI;EAIE,cNtDY;AH4rBlB;ASjoBE;EACE,iBN1BW;EM2BX,cNtCK;EMuCL,uBAAA;ATmoBJ;AShoBE;EACE,iBN/BW;EMgCX,YNzCM;EM0CN,uBAAA;ATkoBJ;AS9nBE;EACE,cAAA;EACA,WAAA;ATgoBJ;AS5nBE;EACE,aNtDK;EMuDL,eAAA;EACA,gBAAA;AT8nBJ;AS5nBI;EACE,aN7DG;AH2rBT;AS3nBI;EACE,WN9DI;AH2rBV;ASxnBE;EACE,uBAAA;EACA,SAAA;EACA,mBAAA;EACA,cN7EK;EM8EL,mBN9EK;EM+EL,mBNlFK;EMmFL,kBAAA;EACA,UAAA;EACA,UAAA;EACA,qBAAA;EACA,aNpFK;AH8sBT;ASxnBI;EACE,aAAA;AT0nBN;ASvnBI;EACE,YAAA;ATynBN;;ASnnBA;EACE,oBAAA;EACA,eAAA;ATsnBF;ASpnBE;EACE,cAAA;ATsnBJ;ASrnBI;EACE,6BAAA;EACA,0BAAA;ATunBN;ASrnBI;EACE,gBAAA;EACA,qBAAA;ATunBN;ASrnBI;EACE,4BAAA;EACA,yBAAA;EACA,qBAAA;ATunBN;ASrnBI;EAIE,UNnEK;AHurBX;AShnBE;EACE,aAAA;ATknBJ;AShnBI;EACE,SAAA;ATknBN;;AY3yBE;EACE,qBTsDK;AHwvBT;;AY1yBA;EACE,qBTmDO;AH0vBT;;AY1yBA;EACE,iBT8Da;ES7Db,gBAAA;EACA,qBT6CO;AHgwBT;;AYzyBA;EACE,cAAA;EACA,mBTuDY;EStDZ,iBAAA;AZ4yBF;AY1yBE;EACE,iBTiDW;EShDX,iBAAA;AZ4yBJ;AYzyBE;EACE,iBT6CW;ES5CX,iBAAA;AZ2yBJ;;AYtyBA;EFjCE,yBAAA;EEmCA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBTrBY;ESsBZ,sBAAA;EACA,6BAAA;EACA,qBTcO;ESbP,cTLgB;ESMhB,cAAA;EACA,iBT4BU;ES3BV,cTmBO;ESlBP,mBT6BY;ES5BZ,eAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;AZyyBF;AYxyBE;EPlDA,+CAAA;EOoDE,qBT9CY;AHw1BhB;AYxyBE;EACE,cTvCS;AHi1Bb;AY3yBE;EACE,cTvCS;AHi1Bb;AY3yBE;EACE,cTvCS;AHi1Bb;AY3yBE;EACE,cTvCS;AHi1Bb;AY3yBE;EACE,cTvCS;AHi1Bb;AYtyBE;EACE,iBTWW;ESVX,cTDK;ESEL,uBAAA;AZwyBJ;AYryBE;EACE,iBTMW;ESLX,YTJM;ESKN,uBAAA;AZuyBJ;AYpyBE;EACE,qBAAA;EACA,sBAAA;EACA,WAAA;AZsyBJ;AYlyBE;EACE,YAAA;AZoyBJ;;AY/xBA;EACE,YAAA;AZkyBF;;AY9xBA;EACE,cT1EW;ES2EX,iBTpBa;ESqBb,kBTtCO;AHu0BT;AY/xBE;EAEE,cTrEY;AHq2BhB;AY7xBE;EAEE,cTxEU;AHs2Bd;;AYzxBA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,6BAAA;EACA,qBTxDO;ESyDP,cAAA;EACA,iBTzCU;ES0CV,cTlDO;ESmDP,mBTxCY;ESyCZ,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,WAAA;AZ4xBF;AY1xBE;EAEE,YAAA;AZ2xBJ;AYzxBI;EACE,sBAAA;AZ2xBN;AYxxBE;EACE,0PAAA;EACA,qBAAA;AZ0xBJ;AYxxBE;EPnIA,+CAAA;EOqIE,qBT/HY;AHy5BhB;AYxxBE;EACE,aAAA;AZ0xBJ;AYtxBE;EACE,iBTtEW;ESuEX,cTlFK;ESmFL,sCAAA;AZwxBJ;AYrxBE;EACE,iBT3EW;ES4EX,YTrFM;ESsFN,sCAAA;AZuxBJ;;AYlxBA;;EAEE,kBAAA;AZqxBF;AYnxBE;;EACE,cTpEgB;ESqEhB,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,aTzEgB;ES0EhB,UAAA;AZsxBJ;;AYjxBE;EACE,aTvHK;AH24BT;AYjxBE;EACE,oBAAA;AZmxBJ;;AY9wBE;EACE,cTjIK;AHk5BT;AY9wBE;EACE,qBAAA;AZgxBJ;;AY3wBA;;;EAGE,cAAA;EACA,mBTzHY;ES0HZ,gBAAA;EACA,kBAAA;EACA,oCAAA;EACA,kBAAA;AZ8wBF;AY5wBE;;;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;AZgxBJ;AY/wBI;;;EP/MF,+CAAA;EOiNI,qBT3MU;AH89BhB;AYjxBI;;;EACE,mBT9MU;ES+MV,qBT/MU;AHo+BhB;AYjxBE;;;EFzNA,yBAAA;EE2NE,6BAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;AZqxBJ;AYjxBE;;;EACE,iBT5JW;ES6JX,SAAA;AZqxBJ;AYlxBE;;;EACE,iBThKW;ESiKX,gBAAA;AZsxBJ;;AYhxBE;;EACE,gBTjOU;ESkOV,cTtJgB;ESuJhB,OAAA;EACA,WAAA;EACA,aTzJgB;AH66BpB;AYhxBI;;EACE,mBTlOU;AHq/BhB;;AY9wBE;EACE,qBT1MK;AH29BT;AY5wBM;EACE,4BAAA;EACA,yBAAA;EACA,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,wBAAA;EACA,UAAA;AZ8wBR;AY3wBI;EACE,mBT/QU;ESgRV,qBThRU;AH6hChB;AY5wBM;EACE,gBTzQM;ES0QN,WAAA;EACA,WAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;AZ8wBR;;AYxwBE;EACE,kBAAA;AZ2wBJ;AYtwBM;EACE,gBT9RM;ES+RN,kBAAA;EACA,WAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,QAAA;EACA,gCAAA;EACA,UAAA;AZwwBR;;AYjwBA;EACE,kBAAA;AZowBF;AYlwBE;EACE,mBT9Se;ES+Sf,4BAAA;EACA,sBAAA;EACA,cAAA;EACA,OAAA;EACA,YAAA;EACA,aTzQK;AH6gCT;AYnwBI;EFvUF,yBAAA;EEyUI,gBT1TQ;ES2TR,kBAAA;EACA,WAAA;EACA,cAAA;EACA,cTpRG;ESqRH,OAAA;EACA,kBAAA;EACA,MAAA;EACA,aTxRG;AH6hCT;AY/vBM;EACE,UAAA;AZiwBR;AY7vBM;EACE,mBTvUG;AHskCX;;AYxvBA;EACE,aAAA;AZ2vBF;AYzvBE;EACE,mBTlVO;ESmVP,6BAAA;EACA,qBTrTK;ESsTL,mBTlSU;ESmSV,uBAAA;EACA,mBAAA;AZ2vBJ;AYzvBI;EACE,iBTzSS;ES0ST,uBAAA;AZ2vBN;AYxvBI;EACE,iBT7SS;ES8ST,uBAAA;AZ0vBN;AYtvBE;;EAEE,cAAA;EACA,SAAA;AZwvBJ;AYrvBE;EACE,UTnRO;AH0gCX;AYhvBI;;;;EACE,6BAAA;EACA,0BAAA;AZqvBN;AYnvBI;;;;EACE,gBAAA;EACA,qBAAA;AZwvBN;AYtvBI;;;;EACE,4BAAA;EACA,yBAAA;EACA,qBAAA;AZ2vBN;AYzvBI;;;;EACE,UAAA;AZ8vBN;AY1vBE;EACE,WAAA;AZ4vBJ;AYzvBE;EACE,oBAAA;AZ2vBJ;;AYpvBE;;;EAEE,qBT7YY;AHqoChB;AYvvBI;;;EPzaF,+CAAA;ALqqCF;AYvvBE;;;EAEE,qBTnZU;AH6oCd;AYzvBI;;;EPjbF,8CAAA;AL+qCF;;AYnvBI;;;;;EACE,qBThaQ;AH0pCd;AYtvBM;;;;;EACE,mBTraM;ESsaN,qBTtaM;AHkqCd;AYzvBM;;;;;EPtcJ,8CAAA;EOwcM,qBT3aM;AH0qCd;;AYrvBM;EACE,mBTtbM;ESubN,qBTvbM;AH+qCd;;AY/uBI;EACE,qBTjcQ;AHmrCd;AYjvBM;EP/dJ,8CAAA;ALmtCF;AYhvBM;EACE,cTvcM;AHyrCd;;AYzuBE;;;EAEE,yBTxdY;ESydZ,mBAAA;EACA,YAAA;AZ6uBJ;;AYxuBE;EACE,yBTjeO;AH4sCX;;AYpuBI;EACE,mBTxeU;ESyeV,mBAAA;EACA,YAAA;AZuuBN;;AY9tBM;EACE,gBT5fM;AH6tCd;;AY1tBA;EACE,iBAAA;AZ6tBF;AY3tBE;EACE,aAAA;EACA,eAAA;AZ6tBJ;;AYxtBA;EACE,qBAAA;AZ2tBF;;AazvCA;ENCE,qBJqDO;EIpDP,gBAAA;EACA,sBAAA;EAIA,mBJiBc;EIhBd,cMNuB;EACvB,qBAAA;Ab+vCF;Aa5vCE;EACE,mBAAA;EACA,oBAAA;EACA,qBAAA;Ab8vCJ;Aa1vCE;ENNA,mBAAA;EACA,WJQY;AH2vCd;Aa1vCE;ENVA,mBJGgB;EIFhB,cJDc;AHwwChB;Aa1vCE;ENdA,mBJqBc;EIpBd,WJQY;AHmwCd;Aa1vCE;ENlBA,mBJsBc;EIrBd,WJQY;AHuwCd;Aa1vCE;ENtBA,mBJuBY;EItBZ,WJQY;AH2wCd;;Ac3xCA;EPCE,qBJqDO;EIpDP,gBAAA;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CE,uBAAA;E3B8lFF;E2B5lFA;IACE,yBAAA;E3B8lFF;AACF;;A2BpmFA;EACE;IACE,uBAAA;E3B8lFF;E2B5lFA;IACE,yBAAA;E3B8lFF;AACF;A2B3lFA;EACE;IACE,UAAA;IACA,8BAAA;E3B6lFF;E2B3lFA;IACE,UAAA;IACA,wBAAA;E3B6lFF;AACF;A2BrmFA;EACE;IACE,UAAA;IACA,8BAAA;E3B6lFF;E2B3lFA;IACE,UAAA;IACA,wBAAA;E3B6lFF;AACF;A4BlmFE;EACE,czBNY;AH0mFhB;;A4BhmFI;EAEE,cAAA;A5BkmFN;A4BhmFI;EACE,cAAA;A5BkmFN;;A4B5mFE;EACE,czBFmB;AHinFvB;;A4B3mFI;EAEE,cAAA;A5B6mFN;A4B3mFI;EACE,cAAA;A5B6mFN;;A4BvnFE;EACE,czBIS;AHsnFb;;A4BtnFI;EAEE,cAAA;A5BwnFN;A4BtnFI;EACE,cAAA;A5BwnFN;;A4BloFE;EACE,WzBGU;AHkoFd;;A4BjoFI;EAEE,cAAA;A5BmoFN;A4BjoFI;EACE,YAAA;A5BmoFN;;A4B7oFE;EACE,czBuBc;AHynFlB;;A4B5oFI;EAEE,cAAA;A5B8oFN;A4B5oFI;EACE,cAAA;A5B8oFN;;A4BxpFE;EACE,czBeY;AH4oFhB;;A4BvpFI;EAEE,cAAA;A5BypFN;A4BvpFI;EACE,cAAA;A5BypFN;;A4BnqFE;EACE,czBgBY;AHspFhB;;A4BlqFI;EAEE,cAAA;A5BoqFN;A4BlqFI;EACE,cAAA;A5BoqFN;;A4B9qFE;EACE,czBiBU;AHgqFd;;A4B7qFI;EAEE,cAAA;A5B+qFN;A4B7qFI;EACE,cAAA;A5B+qFN;;A4BpsFE;EACE,mBzBKY;EyBFV,WzBWQ;AH0rFd;;A4BzsFE;EACE,mBzBQc;AHosFlB;;A4B7sFE;EACE,mBzBaS;EyBVP,WzBWQ;AHmsFd;;A4BltFE;EACE,mBzBqBO;AHgsFX;;A4BttFE;EACE,mBzB0BY;EyBvBV,WzBWQ;AH4sFd;;A4B3tFE;EACE,mBzB2BY;EyBxBV,WzBWQ;AHitFd;;A4BhuFE;EACE,mBzB4BU;EyBzBR,WzBWQ;AHstFd;;A6Btu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","file":"global.scss","sourcesContent":["@charset \"UTF-8\";\n/*! Spectre.css v0.5.3 | MIT License | github.com/picturepan2/spectre */\n/* Manually forked from Normalize.css */\n/* normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8 (removed).\n */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers. (removed)\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * Modify default styling of address.\n */\naddress {\n  font-style: normal;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. (removed)\n */\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: \"SF Mono\", \"Segoe UI Mono\", \"Roboto Mono\", Menlo, Courier, monospace;\n  /* 1 (changed) */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-. (Removed)\n */\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n  font-weight: 400;\n  /* (added) */\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 (changed) */\n  font-size: inherit;\n  /* 1 (changed) */\n  line-height: inherit;\n  /* 1 (changed) */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule (removed).\n */\n/**\n * Change the border, margin, and padding in all browsers (opinionated) (changed).\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n  outline: none;\n}\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 20px;\n  line-height: 1.5;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  background: #fff;\n  color: #50596c;\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 0.8rem;\n  overflow-x: hidden;\n  text-rendering: optimizeLegibility;\n}\n\na {\n  color: #144777;\n  outline: none;\n  text-decoration: none;\n}\na:focus {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n}\na:focus, a:hover, a:active, a.active {\n  color: #0d2d4b;\n  text-decoration: underline;\n}\na:visited {\n  color: #1b61a3;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: inherit;\n  font-weight: 600;\n  line-height: 1.2;\n  margin-bottom: 0.5em;\n  margin-top: 0;\n}\n\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-weight: 600;\n}\n\nh1,\n.h1 {\n  font-size: 2rem;\n}\n\nh2,\n.h2 {\n  font-size: 1.6rem;\n}\n\nh3,\n.h3 {\n  font-size: 1.4rem;\n}\n\nh4,\n.h4 {\n  font-size: 1.2rem;\n}\n\nh5,\n.h5 {\n  font-size: 1rem;\n}\n\nh6,\n.h6 {\n  font-size: 0.8rem;\n}\n\np {\n  margin: 0 0 1.2rem;\n}\n\na,\nins,\nu {\n  text-decoration-skip: ink edges;\n}\n\nabbr[title] {\n  border-bottom: 0.05rem dotted;\n  cursor: help;\n  text-decoration: none;\n}\n\nkbd {\n  border-radius: 0.1rem;\n  line-height: 1.2;\n  padding: 0.1rem 0.2rem;\n  background: #454d5d;\n  color: #fff;\n  font-size: 0.7rem;\n}\n\nmark {\n  background: #ffe9b3;\n  color: #50596c;\n  border-radius: 0.1rem;\n  padding: 0.05rem;\n}\n\nblockquote {\n  border-left: 0.1rem solid #e7e9ed;\n  margin-left: 0;\n  padding: 0.4rem 0.8rem;\n}\nblockquote p:last-child {\n  margin-bottom: 0;\n}\n\nul,\nol {\n  margin: 0.8rem 0 0.8rem 0.8rem;\n  padding: 0;\n}\nul ul,\nul ol,\nol ul,\nol ol {\n  margin: 0.8rem 0 0.8rem 0.8rem;\n}\nul li,\nol li {\n  margin-top: 0.4rem;\n}\n\nul {\n  list-style: disc inside;\n}\nul ul {\n  list-style-type: circle;\n}\n\nol {\n  list-style: decimal inside;\n}\nol ol {\n  list-style-type: lower-alpha;\n}\n\ndl dt {\n  font-weight: bold;\n}\ndl dd {\n  margin: 0.4rem 0 0.8rem 0;\n}\n\n.table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  text-align: left;\n}\n.table.table-striped tbody tr:nth-of-type(odd) {\n  background: #f8f9fa;\n}\n.table tbody tr.active, .table.table-striped tbody tr.active {\n  background: #f0f1f4;\n}\n.table.table-hover tbody tr:hover {\n  background: #f0f1f4;\n}\n.table.table-scroll {\n  display: block;\n  overflow-x: auto;\n  padding-bottom: 0.75rem;\n  white-space: nowrap;\n}\n.table td,\n.table th {\n  border-bottom: 0.05rem solid #e7e9ed;\n  padding: 0.6rem 0.4rem;\n}\n.table th {\n  border-bottom-width: 0.1rem;\n}\n\n.btn {\n  transition: all 0.2s ease;\n  appearance: none;\n  background: #fff;\n  border: 0.05rem solid #144777;\n  border-radius: 0.1rem;\n  color: #144777;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 0.8rem;\n  height: 1.8rem;\n  line-height: 1.2rem;\n  outline: none;\n  padding: 0.25rem 0.4rem;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.btn:focus {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n}\n.btn:focus, .btn:hover {\n  background: #65a7e5;\n  border-color: #123f6a;\n  text-decoration: none;\n}\n.btn:active, .btn.active {\n  background: #123f6a;\n  border-color: #0e3254;\n  color: #fff;\n  text-decoration: none;\n}\n.btn:active.loading::after, .btn.active.loading::after {\n  border-bottom-color: #fff;\n  border-left-color: #fff;\n}\n.btn[disabled], .btn:disabled, .btn.disabled {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.btn.btn-primary {\n  background: #144777;\n  border-color: #123f6a;\n  color: #fff;\n}\n.btn.btn-primary:focus, .btn.btn-primary:hover {\n  background: #103a61;\n  border-color: #0e3254;\n  color: #fff;\n}\n.btn.btn-primary:active, .btn.btn-primary.active {\n  background: #0f3558;\n  border-color: #0d2d4b;\n  color: #fff;\n}\n.btn.btn-primary.loading::after {\n  border-bottom-color: #fff;\n  border-left-color: #fff;\n}\n.btn.btn-success {\n  background: #32b643;\n  border-color: #2faa3f;\n  color: #fff;\n}\n.btn.btn-success:focus {\n  box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);\n}\n.btn.btn-success:focus, .btn.btn-success:hover {\n  background: #30ae40;\n  border-color: #2da23c;\n  color: #fff;\n}\n.btn.btn-success:active, .btn.btn-success.active {\n  background: #2a9a39;\n  border-color: #278e34;\n  color: #fff;\n}\n.btn.btn-success.loading::after {\n  border-bottom-color: #fff;\n  border-left-color: #fff;\n}\n.btn.btn-error {\n  background: #e85600;\n  border-color: #d95000;\n  color: #fff;\n}\n.btn.btn-error:focus {\n  box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);\n}\n.btn.btn-error:focus, .btn.btn-error:hover {\n  background: #de5200;\n  border-color: #cf4d00;\n  color: #fff;\n}\n.btn.btn-error:active, .btn.btn-error.active {\n  background: #c44900;\n  border-color: #b54300;\n  color: #fff;\n}\n.btn.btn-error.loading::after {\n  border-bottom-color: #fff;\n  border-left-color: #fff;\n}\n.btn.btn-link {\n  background: transparent;\n  border-color: transparent;\n  color: #144777;\n}\n.btn.btn-link:focus, .btn.btn-link:hover, .btn.btn-link:active, .btn.btn-link.active {\n  color: #0d2d4b;\n}\n.btn.btn-sm {\n  font-size: 0.7rem;\n  height: 1.4rem;\n  padding: 0.05rem 0.3rem;\n}\n.btn.btn-lg {\n  font-size: 0.9rem;\n  height: 2rem;\n  padding: 0.35rem 0.6rem;\n}\n.btn.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn.btn-action {\n  width: 1.8rem;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn.btn-action.btn-sm {\n  width: 1.4rem;\n}\n.btn.btn-action.btn-lg {\n  width: 2rem;\n}\n.btn.btn-clear {\n  background: transparent;\n  border: 0;\n  color: currentColor;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin-left: 0.2rem;\n  margin-right: -2px;\n  opacity: 1;\n  padding: 0;\n  text-decoration: none;\n  width: 0.8rem;\n}\n.btn.btn-clear:hover {\n  opacity: 0.95;\n}\n.btn.btn-clear::before {\n  content: \"✕\";\n}\n\n.btn-group {\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n.btn-group .btn {\n  flex: 1 0 auto;\n}\n.btn-group .btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n  margin-left: -0.05rem;\n}\n.btn-group .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  margin-left: -0.05rem;\n}\n.btn-group .btn:focus, .btn-group .btn:hover, .btn-group .btn:active, .btn-group .btn.active {\n  z-index: 1;\n}\n.btn-group.btn-group-block {\n  display: flex;\n}\n.btn-group.btn-group-block .btn {\n  flex: 1 0 0;\n}\n\n.form-group:not(:last-child) {\n  margin-bottom: 0.4rem;\n}\n\nfieldset {\n  margin-bottom: 0.8rem;\n}\n\nlegend {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin-bottom: 0.8rem;\n}\n\n.form-label {\n  display: block;\n  line-height: 1.2rem;\n  padding: 0.3rem 0;\n}\n.form-label.label-sm {\n  font-size: 0.7rem;\n  padding: 0.1rem 0;\n}\n.form-label.label-lg {\n  font-size: 0.9rem;\n  padding: 0.4rem 0;\n}\n\n.form-input {\n  transition: all 0.2s ease;\n  appearance: none;\n  background: #fff;\n  background-image: none;\n  border: 0.05rem solid #caced7;\n  border-radius: 0.1rem;\n  color: #50596c;\n  display: block;\n  font-size: 0.8rem;\n  height: 1.8rem;\n  line-height: 1.2rem;\n  max-width: 100%;\n  outline: none;\n  padding: 0.25rem 0.4rem;\n  position: relative;\n  width: 100%;\n}\n.form-input:focus {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n  border-color: #144777;\n}\n.form-input::placeholder {\n  color: #acb3c2;\n}\n.form-input.input-sm {\n  font-size: 0.7rem;\n  height: 1.4rem;\n  padding: 0.05rem 0.3rem;\n}\n.form-input.input-lg {\n  font-size: 0.9rem;\n  height: 2rem;\n  padding: 0.35rem 0.6rem;\n}\n.form-input.input-inline {\n  display: inline-block;\n  vertical-align: middle;\n  width: auto;\n}\n.form-input[type=file] {\n  height: auto;\n}\n\ntextarea.form-input {\n  height: auto;\n}\n\n.form-input-hint {\n  color: #acb3c2;\n  font-size: 0.7rem;\n  margin-top: 0.2rem;\n}\n.has-success .form-input-hint, .is-success + .form-input-hint {\n  color: #32b643;\n}\n.has-error .form-input-hint, .is-error + .form-input-hint {\n  color: #e85600;\n}\n\n.form-select {\n  appearance: none;\n  border: 0.05rem solid #caced7;\n  border-radius: 0.1rem;\n  color: inherit;\n  font-size: 0.8rem;\n  height: 1.8rem;\n  line-height: 1.2rem;\n  outline: none;\n  padding: 0.25rem 0.4rem;\n  vertical-align: middle;\n  width: 100%;\n}\n.form-select[size], .form-select[multiple] {\n  height: auto;\n}\n.form-select[size] option, .form-select[multiple] option {\n  padding: 0.1rem 0.2rem;\n}\n.form-select:not([multiple]):not([size]) {\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E\") no-repeat right 0.35rem center/0.4rem 0.5rem;\n  padding-right: 1.2rem;\n}\n.form-select:focus {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n  border-color: #144777;\n}\n.form-select::-ms-expand {\n  display: none;\n}\n.form-select.select-sm {\n  font-size: 0.7rem;\n  height: 1.4rem;\n  padding: 0.05rem 1.1rem 0.05rem 0.3rem;\n}\n.form-select.select-lg {\n  font-size: 0.9rem;\n  height: 2rem;\n  padding: 0.35rem 1.4rem 0.35rem 0.6rem;\n}\n\n.has-icon-left,\n.has-icon-right {\n  position: relative;\n}\n.has-icon-left .form-icon,\n.has-icon-right .form-icon {\n  height: 0.8rem;\n  margin: 0 0.25rem;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0.8rem;\n  z-index: 2;\n}\n\n.has-icon-left .form-icon {\n  left: 0.05rem;\n}\n.has-icon-left .form-input {\n  padding-left: 1.3rem;\n}\n\n.has-icon-right .form-icon {\n  right: 0.05rem;\n}\n.has-icon-right .form-input {\n  padding-right: 1.3rem;\n}\n\n.form-checkbox,\n.form-radio,\n.form-switch {\n  display: block;\n  line-height: 1.2rem;\n  margin: 0.2rem 0;\n  min-height: 1.2rem;\n  padding: 0.1rem 0.4rem 0.1rem 1.2rem;\n  position: relative;\n}\n.form-checkbox input,\n.form-radio input,\n.form-switch input {\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n}\n.form-checkbox input:focus + .form-icon,\n.form-radio input:focus + .form-icon,\n.form-switch input:focus + .form-icon {\n  box-shadow: 0 0 0 0.1rem rgba(20, 71, 119, 0.2);\n  border-color: #144777;\n}\n.form-checkbox input:checked + .form-icon,\n.form-radio input:checked + .form-icon,\n.form-switch input:checked + .form-icon {\n  background: #144777;\n  border-color: #144777;\n}\n.form-checkbox .form-icon,\n.form-radio .form-icon,\n.form-switch .form-icon {\n  transition: all 0.2s ease;\n  border: 0.05rem solid #caced7;\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n}\n.form-checkbox.input-sm,\n.form-radio.input-sm,\n.form-switch.input-sm {\n  font-size: 0.7rem;\n  margin: 0;\n}\n.form-checkbox.input-lg,\n.form-radio.input-lg,\n.form-switch.input-lg {\n  font-size: 0.9rem;\n  margin: 0.3rem 0;\n}\n\n.form-checkbox .form-icon,\n.form-radio .form-icon {\n  background: #fff;\n  height: 0.8rem;\n  left: 0;\n  top: 0.3rem;\n  width: 0.8rem;\n}\n.form-checkbox input:active + .form-icon,\n.form-radio input:active + .form-icon {\n  background: #f0f1f4;\n}\n\n.form-checkbox .form-icon {\n  border-radius: 0.1rem;\n}\n.form-checkbox input:checked + .form-icon::before {\n  background-clip: padding-box;\n  border: 0.1rem solid #fff;\n  border-left-width: 0;\n  border-top-width: 0;\n  content: \"\";\n  height: 12px;\n  left: 50%;\n  margin-left: -4px;\n  margin-top: -8px;\n  position: absolute;\n  top: 50%;\n  transform: rotate(45deg);\n  width: 8px;\n}\n.form-checkbox input:indeterminate + .form-icon {\n  background: #144777;\n  border-color: #144777;\n}\n.form-checkbox input:indeterminate + .form-icon::before {\n  background: #fff;\n  content: \"\";\n  height: 2px;\n  left: 50%;\n  margin-left: -5px;\n  margin-top: -1px;\n  position: absolute;\n  top: 50%;\n  width: 10px;\n}\n\n.form-radio .form-icon {\n  border-radius: 50%;\n}\n.form-radio input:checked + .form-icon::before {\n  background: #fff;\n  border-radius: 50%;\n  content: \"\";\n  height: 4px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 4px;\n}\n\n.form-switch {\n  padding-left: 2rem;\n}\n.form-switch .form-icon {\n  background: #e7e9ed;\n  background-clip: padding-box;\n  border-radius: 0.45rem;\n  height: 0.9rem;\n  left: 0;\n  top: 0.25rem;\n  width: 1.6rem;\n}\n.form-switch .form-icon::before {\n  transition: all 0.2s ease;\n  background: #fff;\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 0.8rem;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 0.8rem;\n}\n.form-switch input:checked + .form-icon::before {\n  left: 14px;\n}\n.form-switch input:active + .form-icon::before {\n  background: #f8f9fa;\n}\n\n.input-group {\n  display: flex;\n}\n.input-group .input-group-addon {\n  background: #f8f9fa;\n  border: 0.05rem solid #caced7;\n  border-radius: 0.1rem;\n  line-height: 1.2rem;\n  padding: 0.25rem 0.4rem;\n  white-space: nowrap;\n}\n.input-group .input-group-addon.addon-sm {\n  font-size: 0.7rem;\n  padding: 0.05rem 0.3rem;\n}\n.input-group .input-group-addon.addon-lg {\n  font-size: 0.9rem;\n  padding: 0.35rem 0.6rem;\n}\n.input-group .form-input,\n.input-group .form-select {\n  flex: 1 1 auto;\n  width: 1%;\n}\n.input-group .input-group-btn {\n  z-index: 1;\n}\n.input-group .form-input:first-child:not(:last-child),\n.input-group .form-select:first-child:not(:last-child),\n.input-group .input-group-addon:first-child:not(:last-child),\n.input-group .input-group-btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.input-group .form-input:not(:first-child):not(:last-child),\n.input-group .form-select:not(:first-child):not(:last-child),\n.input-group .input-group-addon:not(:first-child):not(:last-child),\n.input-group .input-group-btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n  margin-left: -0.05rem;\n}\n.input-group .form-input:last-child:not(:first-child),\n.input-group .form-select:last-child:not(:first-child),\n.input-group .input-group-addon:last-child:not(:first-child),\n.input-group .input-group-btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  margin-left: -0.05rem;\n}\n.input-group .form-input:focus,\n.input-group .form-select:focus,\n.input-group .input-group-addon:focus,\n.input-group .input-group-btn:focus {\n  z-index: 2;\n}\n.input-group .form-select {\n  width: auto;\n}\n.input-group.input-inline {\n  display: inline-flex;\n}\n\n.has-success .form-input, .form-input.is-success,\n.has-success .form-select,\n.form-select.is-success {\n  border-color: #32b643;\n}\n.has-success .form-input:focus, .form-input.is-success:focus,\n.has-success .form-select:focus,\n.form-select.is-success:focus {\n  box-shadow: 0 0 0 0.1rem rgba(50, 182, 67, 0.2);\n}\n.has-error .form-input, .form-input.is-error,\n.has-error .form-select,\n.form-select.is-error {\n  border-color: #e85600;\n}\n.has-error .form-input:focus, .form-input.is-error:focus,\n.has-error .form-select:focus,\n.form-select.is-error:focus {\n  box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);\n}\n\n.has-error .form-checkbox .form-icon, .form-checkbox.is-error .form-icon,\n.has-error .form-radio .form-icon,\n.form-radio.is-error .form-icon,\n.has-error .form-switch .form-icon,\n.form-switch.is-error .form-icon {\n  border-color: #e85600;\n}\n.has-error .form-checkbox input:checked + .form-icon, .form-checkbox.is-error input:checked + .form-icon,\n.has-error .form-radio input:checked + .form-icon,\n.form-radio.is-error input:checked + .form-icon,\n.has-error .form-switch input:checked + .form-icon,\n.form-switch.is-error input:checked + .form-icon {\n  background: #e85600;\n  border-color: #e85600;\n}\n.has-error .form-checkbox input:focus + .form-icon, .form-checkbox.is-error input:focus + .form-icon,\n.has-error .form-radio input:focus + .form-icon,\n.form-radio.is-error input:focus + .form-icon,\n.has-error .form-switch input:focus + .form-icon,\n.form-switch.is-error input:focus + .form-icon {\n  box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);\n  border-color: #e85600;\n}\n\n.has-error .form-checkbox input:indeterminate + .form-icon, .form-checkbox.is-error input:indeterminate + .form-icon {\n  background: #e85600;\n  border-color: #e85600;\n}\n\n.form-input:not(:placeholder-shown):invalid {\n  border-color: #e85600;\n}\n.form-input:not(:placeholder-shown):invalid:focus {\n  box-shadow: 0 0 0 0.1rem rgba(232, 86, 0, 0.2);\n}\n.form-input:not(:placeholder-shown):invalid + .form-input-hint {\n  color: #e85600;\n}\n\n.form-input:disabled, .form-input.disabled,\n.form-select:disabled,\n.form-select.disabled {\n  background-color: #f0f1f4;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.form-input[readonly] {\n  background-color: #f8f9fa;\n}\n\ninput:disabled + .form-icon, input.disabled + .form-icon {\n  background: #f0f1f4;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.form-switch input:disabled + .form-icon::before, .form-switch input.disabled + .form-icon::before {\n  background: #fff;\n}\n\n.form-horizontal {\n  padding: 0.4rem 0;\n}\n.form-horizontal .form-group {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form-inline {\n  display: inline-block;\n}\n\n.label {\n  border-radius: 0.1rem;\n  line-height: 1.2;\n  padding: 0.1rem 0.2rem;\n  background: #f0f1f4;\n  color: #5b657a;\n  display: inline-block;\n}\n.label.label-rounded {\n  border-radius: 5rem;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n}\n.label.label-primary {\n  background: #144777;\n  color: #fff;\n}\n.label.label-secondary {\n  background: #65a7e5;\n  color: #144777;\n}\n.label.label-success {\n  background: #32b643;\n  color: #fff;\n}\n.label.label-warning {\n  background: #ffb700;\n  color: #fff;\n}\n.label.label-error {\n  background: #e85600;\n  color: #fff;\n}\n\ncode {\n  border-radius: 0.1rem;\n  line-height: 1.2;\n  padding: 0.1rem 0.2rem;\n  background: #fcf2f2;\n  color: #d73e48;\n  font-size: 85%;\n}\n\n.code {\n  border-radius: 0.1rem;\n  color: #50596c;\n  position: relative;\n}\n.code::before {\n  color: #acb3c2;\n  content: attr(data-lang);\n  font-size: 0.7rem;\n  position: absolute;\n  right: 0.4rem;\n  top: 0.1rem;\n}\n.code code {\n  background: #f8f9fa;\n  color: inherit;\n  display: block;\n  line-height: 1.5;\n  overflow-x: auto;\n  padding: 1rem;\n  width: 100%;\n}\n\n.img-responsive {\n  display: block;\n  height: auto;\n  max-width: 100%;\n}\n\n.img-fit-cover {\n  object-fit: cover;\n}\n\n.img-fit-contain {\n  object-fit: contain;\n}\n\n.video-responsive {\n  display: block;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  width: 100%;\n}\n.video-responsive::before {\n  content: \"\";\n  display: block;\n  padding-bottom: 56.25%;\n}\n.video-responsive iframe,\n.video-responsive object,\n.video-responsive embed {\n  border: 0;\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n}\n\nvideo.video-responsive {\n  height: auto;\n  max-width: 100%;\n}\nvideo.video-responsive::before {\n  content: none;\n}\n\n.video-responsive-4-3::before {\n  padding-bottom: 75%;\n}\n\n.video-responsive-1-1::before {\n  padding-bottom: 100%;\n}\n\n.figure {\n  margin: 0 0 0.4rem 0;\n}\n.figure .figure-caption {\n  color: #667189;\n  margin-top: 0.4rem;\n}\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  width: 100%;\n}\n.container.grid-xl {\n  max-width: 1296px;\n}\n.container.grid-lg {\n  max-width: 976px;\n}\n.container.grid-md {\n  max-width: 856px;\n}\n.container.grid-sm {\n  max-width: 616px;\n}\n.container.grid-xs {\n  max-width: 496px;\n}\n\n.show-xs,\n.show-sm,\n.show-md,\n.show-lg,\n.show-xl {\n  display: none !important;\n}\n\n.columns {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -0.4rem;\n  margin-right: -0.4rem;\n}\n.columns.col-gapless {\n  margin-left: 0;\n  margin-right: 0;\n}\n.columns.col-gapless > .column {\n  padding-left: 0;\n  padding-right: 0;\n}\n.columns.col-oneline {\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n\n.column {\n  flex: 1;\n  max-width: 100%;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n}\n.column.col-12, .column.col-11, .column.col-10, .column.col-9, .column.col-8, .column.col-7, .column.col-6, .column.col-5, .column.col-4, .column.col-3, .column.col-2, .column.col-1 {\n  flex: none;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n.col-11 {\n  width: 91.66666667%;\n}\n\n.col-10 {\n  width: 83.33333333%;\n}\n\n.col-9 {\n  width: 75%;\n}\n\n.col-8 {\n  width: 66.66666667%;\n}\n\n.col-7 {\n  width: 58.33333333%;\n}\n\n.col-6 {\n  width: 50%;\n}\n\n.col-5 {\n  width: 41.66666667%;\n}\n\n.col-4 {\n  width: 33.33333333%;\n}\n\n.col-3 {\n  width: 25%;\n}\n\n.col-2 {\n  width: 16.66666667%;\n}\n\n.col-1 {\n  width: 8.33333333%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  max-width: none;\n  width: auto;\n}\n\n.col-mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.col-ml-auto {\n  margin-left: auto;\n}\n\n.col-mr-auto {\n  margin-right: auto;\n}\n\n@media (max-width: 1280px) {\n  .col-xl-12,\n.col-xl-11,\n.col-xl-10,\n.col-xl-9,\n.col-xl-8,\n.col-xl-7,\n.col-xl-6,\n.col-xl-5,\n.col-xl-4,\n.col-xl-3,\n.col-xl-2,\n.col-xl-1 {\n    flex: none;\n  }\n\n  .col-xl-12 {\n    width: 100%;\n  }\n\n  .col-xl-11 {\n    width: 91.66666667%;\n  }\n\n  .col-xl-10 {\n    width: 83.33333333%;\n  }\n\n  .col-xl-9 {\n    width: 75%;\n  }\n\n  .col-xl-8 {\n    width: 66.66666667%;\n  }\n\n  .col-xl-7 {\n    width: 58.33333333%;\n  }\n\n  .col-xl-6 {\n    width: 50%;\n  }\n\n  .col-xl-5 {\n    width: 41.66666667%;\n  }\n\n  .col-xl-4 {\n    width: 33.33333333%;\n  }\n\n  .col-xl-3 {\n    width: 25%;\n  }\n\n  .col-xl-2 {\n    width: 16.66666667%;\n  }\n\n  .col-xl-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-xl {\n    display: none !important;\n  }\n\n  .show-xl {\n    display: block !important;\n  }\n}\n@media (max-width: 960px) {\n  .col-lg-12,\n.col-lg-11,\n.col-lg-10,\n.col-lg-9,\n.col-lg-8,\n.col-lg-7,\n.col-lg-6,\n.col-lg-5,\n.col-lg-4,\n.col-lg-3,\n.col-lg-2,\n.col-lg-1 {\n    flex: none;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-lg {\n    display: none !important;\n  }\n\n  .show-lg {\n    display: block !important;\n  }\n}\n@media (max-width: 840px) {\n  .col-md-12,\n.col-md-11,\n.col-md-10,\n.col-md-9,\n.col-md-8,\n.col-md-7,\n.col-md-6,\n.col-md-5,\n.col-md-4,\n.col-md-3,\n.col-md-2,\n.col-md-1 {\n    flex: none;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-md {\n    display: none !important;\n  }\n\n  .show-md {\n    display: block !important;\n  }\n}\n@media (max-width: 600px) {\n  .col-sm-12,\n.col-sm-11,\n.col-sm-10,\n.col-sm-9,\n.col-sm-8,\n.col-sm-7,\n.col-sm-6,\n.col-sm-5,\n.col-sm-4,\n.col-sm-3,\n.col-sm-2,\n.col-sm-1 {\n    flex: none;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-sm {\n    display: none !important;\n  }\n\n  .show-sm {\n    display: block !important;\n  }\n}\n@media (max-width: 480px) {\n  .col-xs-12,\n.col-xs-11,\n.col-xs-10,\n.col-xs-9,\n.col-xs-8,\n.col-xs-7,\n.col-xs-6,\n.col-xs-5,\n.col-xs-4,\n.col-xs-3,\n.col-xs-2,\n.col-xs-1 {\n    flex: none;\n  }\n\n  .col-xs-12 {\n    width: 100%;\n  }\n\n  .col-xs-11 {\n    width: 91.66666667%;\n  }\n\n  .col-xs-10 {\n    width: 83.33333333%;\n  }\n\n  .col-xs-9 {\n    width: 75%;\n  }\n\n  .col-xs-8 {\n    width: 66.66666667%;\n  }\n\n  .col-xs-7 {\n    width: 58.33333333%;\n  }\n\n  .col-xs-6 {\n    width: 50%;\n  }\n\n  .col-xs-5 {\n    width: 41.66666667%;\n  }\n\n  .col-xs-4 {\n    width: 33.33333333%;\n  }\n\n  .col-xs-3 {\n    width: 25%;\n  }\n\n  .col-xs-2 {\n    width: 16.66666667%;\n  }\n\n  .col-xs-1 {\n    width: 8.33333333%;\n  }\n\n  .hide-xs {\n    display: none !important;\n  }\n\n  .show-xs {\n    display: block !important;\n  }\n}\n.avatar {\n  font-size: 0.8rem;\n  height: 1.6rem;\n  width: 1.6rem;\n  background: #144777;\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.85);\n  display: inline-block;\n  font-weight: 300;\n  line-height: 1.25;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n}\n.avatar.avatar-xs {\n  font-size: 0.4rem;\n  height: 0.8rem;\n  width: 0.8rem;\n}\n.avatar.avatar-sm {\n  font-size: 0.6rem;\n  height: 1.2rem;\n  width: 1.2rem;\n}\n.avatar.avatar-lg {\n  font-size: 1.2rem;\n  height: 2.4rem;\n  width: 2.4rem;\n}\n.avatar.avatar-xl {\n  font-size: 1.6rem;\n  height: 3.2rem;\n  width: 3.2rem;\n}\n.avatar img {\n  border-radius: 50%;\n  height: 100%;\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n.avatar .avatar-icon,\n.avatar .avatar-presence {\n  background: #fff;\n  bottom: 14.64%;\n  height: 50%;\n  padding: 0.1rem;\n  position: absolute;\n  right: 14.64%;\n  transform: translate(50%, 50%);\n  width: 50%;\n  z-index: 2;\n}\n.avatar .avatar-presence {\n  background: #acb3c2;\n  box-shadow: 0 0 0 0.1rem #fff;\n  border-radius: 50%;\n  height: 0.5em;\n  width: 0.5em;\n}\n.avatar .avatar-presence.online {\n  background: #32b643;\n}\n.avatar .avatar-presence.busy {\n  background: #e85600;\n}\n.avatar .avatar-presence.away {\n  background: #ffb700;\n}\n.avatar[data-initial]::before {\n  color: currentColor;\n  content: attr(data-initial);\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.badge {\n  position: relative;\n  white-space: nowrap;\n}\n.badge[data-badge]::after, .badge:not([data-badge])::after {\n  background: #144777;\n  background-clip: padding-box;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 0 0.1rem #fff;\n  color: #fff;\n  content: attr(data-badge);\n  display: inline-block;\n  transform: translate(-0.05rem, -0.5rem);\n}\n.badge[data-badge]::after {\n  font-size: 0.7rem;\n  height: 0.9rem;\n  line-height: 1;\n  min-width: 0.9rem;\n  padding: 0.1rem 0.2rem;\n  text-align: center;\n  white-space: nowrap;\n}\n.badge:not([data-badge])::after, .badge[data-badge=\"\"]::after {\n  height: 6px;\n  min-width: 6px;\n  padding: 0;\n  width: 6px;\n}\n.badge.btn::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n.badge.avatar::after {\n  position: absolute;\n  top: 14.64%;\n  right: 14.64%;\n  transform: translate(50%, -50%);\n  z-index: 100;\n}\n\n.card {\n  background: #fff;\n  border: 0.05rem solid #e7e9ed;\n  border-radius: 0.1rem;\n  display: flex;\n  flex-direction: column;\n}\n.card .card-header,\n.card .card-body,\n.card .card-footer {\n  padding: 0.8rem;\n  padding-bottom: 0;\n}\n.card .card-header:last-child,\n.card .card-body:last-child,\n.card .card-footer:last-child {\n  padding-bottom: 0.8rem;\n}\n.card .card-body {\n  flex: 1 1 auto;\n}\n.card .card-image {\n  padding-top: 0.8rem;\n}\n.card .card-image:first-child {\n  padding-top: 0;\n}\n.card .card-image:first-child img {\n  border-top-left-radius: 0.1rem;\n  border-top-right-radius: 0.1rem;\n}\n.card .card-image:last-child img {\n  border-bottom-left-radius: 0.1rem;\n  border-bottom-right-radius: 0.1rem;\n}\n\n.chip {\n  align-items: center;\n  background: #f0f1f4;\n  border-radius: 5rem;\n  color: #667189;\n  display: inline-flex;\n  font-size: 90%;\n  height: 1.2rem;\n  line-height: 0.8rem;\n  margin: 0.1rem;\n  max-width: 100%;\n  padding: 0.2rem 0.4rem;\n  text-decoration: none;\n  vertical-align: middle;\n}\n.chip.active {\n  background: #144777;\n  color: #fff;\n}\n.chip .avatar {\n  margin-left: -0.4rem;\n  margin-right: 0.2rem;\n}\n.chip .btn-clear {\n  transform: scale(0.75);\n}\n\n/*! Spectre.css Icons v0.5.3 | MIT License | github.com/picturepan2/spectre */\n.icon {\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: inherit;\n  font-style: normal;\n  height: 1em;\n  position: relative;\n  text-indent: -9999px;\n  vertical-align: middle;\n  width: 1em;\n}\n.icon::before, .icon::after {\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.icon.icon-2x {\n  font-size: 1.6rem;\n}\n.icon.icon-3x {\n  font-size: 2.4rem;\n}\n.icon.icon-4x {\n  font-size: 3.2rem;\n}\n\n.accordion .icon,\n.btn .icon,\n.toast .icon,\n.menu .icon {\n  vertical-align: -10%;\n}\n\n.btn-lg .icon {\n  vertical-align: -15%;\n}\n\n.icon-arrow-down::before,\n.icon-arrow-left::before,\n.icon-arrow-right::before,\n.icon-arrow-up::before,\n.icon-downward::before,\n.icon-back::before,\n.icon-forward::before,\n.icon-upward::before {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-right: 0;\n  content: \"\";\n  height: 0.65em;\n  width: 0.65em;\n}\n\n.icon-arrow-down::before {\n  transform: translate(-50%, -75%) rotate(225deg);\n}\n\n.icon-arrow-left::before {\n  transform: translate(-25%, -50%) rotate(-45deg);\n}\n\n.icon-arrow-right::before {\n  transform: translate(-75%, -50%) rotate(135deg);\n}\n\n.icon-arrow-up::before {\n  transform: translate(-50%, -25%) rotate(45deg);\n}\n\n.icon-back::after,\n.icon-forward::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.1rem;\n  width: 0.8em;\n}\n\n.icon-downward::after,\n.icon-upward::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.8em;\n  width: 0.1rem;\n}\n\n.icon-back::after {\n  left: 55%;\n}\n.icon-back::before {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.icon-downward::after {\n  top: 45%;\n}\n.icon-downward::before {\n  transform: translate(-50%, -50%) rotate(-135deg);\n}\n\n.icon-forward::after {\n  left: 45%;\n}\n.icon-forward::before {\n  transform: translate(-50%, -50%) rotate(135deg);\n}\n\n.icon-upward::after {\n  top: 55%;\n}\n.icon-upward::before {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.icon-caret::before {\n  border-top: 0.3em solid currentColor;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent;\n  content: \"\";\n  height: 0;\n  transform: translate(-50%, -25%);\n  width: 0;\n}\n\n.icon-menu::before {\n  background: currentColor;\n  box-shadow: 0 -0.35em, 0 0.35em;\n  content: \"\";\n  height: 0.1rem;\n  width: 100%;\n}\n\n.icon-apps::before {\n  background: currentColor;\n  box-shadow: -0.35em -0.35em, -0.35em 0, -0.35em 0.35em, 0 -0.35em, 0 0.35em, 0.35em -0.35em, 0.35em 0, 0.35em 0.35em;\n  content: \"\";\n  height: 3px;\n  width: 3px;\n}\n\n.icon-resize-horiz::before, .icon-resize-horiz::after,\n.icon-resize-vert::before,\n.icon-resize-vert::after {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-right: 0;\n  content: \"\";\n  height: 0.45em;\n  width: 0.45em;\n}\n.icon-resize-horiz::before,\n.icon-resize-vert::before {\n  transform: translate(-50%, -90%) rotate(45deg);\n}\n.icon-resize-horiz::after,\n.icon-resize-vert::after {\n  transform: translate(-50%, -10%) rotate(225deg);\n}\n\n.icon-resize-horiz::before {\n  transform: translate(-90%, -50%) rotate(-45deg);\n}\n.icon-resize-horiz::after {\n  transform: translate(-10%, -50%) rotate(135deg);\n}\n\n.icon-more-horiz::before,\n.icon-more-vert::before {\n  background: currentColor;\n  box-shadow: -0.4em 0, 0.4em 0;\n  border-radius: 50%;\n  content: \"\";\n  height: 3px;\n  width: 3px;\n}\n\n.icon-more-vert::before {\n  box-shadow: 0 -0.4em, 0 0.4em;\n}\n\n.icon-plus::before,\n.icon-minus::before,\n.icon-cross::before {\n  background: currentColor;\n  content: \"\";\n  height: 0.1rem;\n  width: 100%;\n}\n\n.icon-plus::after,\n.icon-cross::after {\n  background: currentColor;\n  content: \"\";\n  height: 100%;\n  width: 0.1rem;\n}\n\n.icon-cross::before {\n  width: 100%;\n}\n.icon-cross::after {\n  height: 100%;\n}\n.icon-cross::before, .icon-cross::after {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.icon-check::before {\n  border: 0.1rem solid currentColor;\n  border-right: 0;\n  border-top: 0;\n  content: \"\";\n  height: 0.5em;\n  width: 0.9em;\n  transform: translate(-50%, -75%) rotate(-45deg);\n}\n\n.icon-stop {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n}\n.icon-stop::before {\n  background: currentColor;\n  content: \"\";\n  height: 0.1rem;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 1em;\n}\n\n.icon-shutdown {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.icon-shutdown::before {\n  background: currentColor;\n  content: \"\";\n  height: 0.5em;\n  top: 0.1em;\n  width: 0.1rem;\n}\n\n.icon-refresh::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  border-right-color: transparent;\n  content: \"\";\n  height: 1em;\n  width: 1em;\n}\n.icon-refresh::after {\n  border: 0.2em solid currentColor;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  content: \"\";\n  height: 0;\n  left: 80%;\n  top: 20%;\n  width: 0;\n}\n\n.icon-search::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  content: \"\";\n  height: 0.75em;\n  left: 5%;\n  top: 5%;\n  transform: translate(0, 0) rotate(45deg);\n  width: 0.75em;\n}\n.icon-search::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.1rem;\n  left: 80%;\n  top: 80%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 0.4em;\n}\n\n.icon-edit::before {\n  border: 0.1rem solid currentColor;\n  content: \"\";\n  height: 0.4em;\n  transform: translate(-40%, -60%) rotate(-45deg);\n  width: 0.85em;\n}\n.icon-edit::after {\n  border: 0.15em solid currentColor;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  content: \"\";\n  height: 0;\n  left: 5%;\n  top: 95%;\n  transform: translate(0, -100%);\n  width: 0;\n}\n\n.icon-delete::before {\n  border: 0.1rem solid currentColor;\n  border-bottom-left-radius: 0.1rem;\n  border-bottom-right-radius: 0.1rem;\n  border-top: 0;\n  content: \"\";\n  height: 0.75em;\n  top: 60%;\n  width: 0.75em;\n}\n.icon-delete::after {\n  background: currentColor;\n  box-shadow: -0.25em 0.2em, 0.25em 0.2em;\n  content: \"\";\n  height: 0.1rem;\n  top: 0.05rem;\n  width: 0.5em;\n}\n\n.icon-share {\n  border: 0.1rem solid currentColor;\n  border-radius: 0.1rem;\n  border-right: 0;\n  border-top: 0;\n}\n.icon-share::before {\n  border: 0.1rem solid currentColor;\n  border-left: 0;\n  border-top: 0;\n  content: \"\";\n  height: 0.4em;\n  left: 100%;\n  top: 0.25em;\n  transform: translate(-125%, -50%) rotate(-45deg);\n  width: 0.4em;\n}\n.icon-share::after {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-right: 0;\n  border-radius: 75% 0;\n  content: \"\";\n  height: 0.5em;\n  width: 0.6em;\n}\n\n.icon-flag::before {\n  background: currentColor;\n  content: \"\";\n  height: 1em;\n  left: 15%;\n  width: 0.1rem;\n}\n.icon-flag::after {\n  border: 0.1rem solid currentColor;\n  border-bottom-right-radius: 0.1rem;\n  border-left: 0;\n  border-top-right-radius: 0.1rem;\n  content: \"\";\n  height: 0.65em;\n  top: 35%;\n  left: 60%;\n  width: 0.8em;\n}\n\n.icon-bookmark::before {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-top-left-radius: 0.1rem;\n  border-top-right-radius: 0.1rem;\n  content: \"\";\n  height: 0.9em;\n  width: 0.8em;\n}\n.icon-bookmark::after {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-left: 0;\n  border-radius: 0.1rem;\n  content: \"\";\n  height: 0.5em;\n  transform: translate(-50%, 35%) rotate(-45deg) skew(15deg, 15deg);\n  width: 0.5em;\n}\n\n.icon-download,\n.icon-upload {\n  border-bottom: 0.1rem solid currentColor;\n}\n.icon-download::before,\n.icon-upload::before {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-right: 0;\n  content: \"\";\n  height: 0.5em;\n  width: 0.5em;\n  transform: translate(-50%, -60%) rotate(-135deg);\n}\n.icon-download::after,\n.icon-upload::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.6em;\n  top: 40%;\n  width: 0.1rem;\n}\n\n.icon-upload::before {\n  transform: translate(-50%, -60%) rotate(45deg);\n}\n.icon-upload::after {\n  top: 50%;\n}\n\n.icon-time {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n}\n.icon-time::before {\n  background: currentColor;\n  content: \"\";\n  height: 0.4em;\n  transform: translate(-50%, -75%);\n  width: 0.1rem;\n}\n.icon-time::after {\n  background: currentColor;\n  content: \"\";\n  height: 0.3em;\n  transform: translate(-50%, -75%) rotate(90deg);\n  transform-origin: 50% 90%;\n  width: 0.1rem;\n}\n\n.icon-mail::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 0.1rem;\n  content: \"\";\n  height: 0.8em;\n  width: 1em;\n}\n.icon-mail::after {\n  border: 0.1rem solid currentColor;\n  border-right: 0;\n  border-top: 0;\n  content: \"\";\n  height: 0.5em;\n  transform: translate(-50%, -90%) rotate(-45deg) skew(10deg, 10deg);\n  width: 0.5em;\n}\n\n.icon-people::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  content: \"\";\n  height: 0.45em;\n  top: 25%;\n  width: 0.45em;\n}\n.icon-people::after {\n  border: 0.1rem solid currentColor;\n  border-radius: 50% 50% 0 0;\n  content: \"\";\n  height: 0.4em;\n  top: 75%;\n  width: 0.9em;\n}\n\n.icon-message {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-radius: 0.1rem;\n  border-right: 0;\n}\n.icon-message::before {\n  border: 0.1rem solid currentColor;\n  border-bottom-right-radius: 0.1rem;\n  border-left: 0;\n  border-top: 0;\n  content: \"\";\n  height: 0.8em;\n  left: 65%;\n  top: 40%;\n  width: 0.7em;\n}\n.icon-message::after {\n  background: currentColor;\n  border-radius: 0.1rem;\n  content: \"\";\n  height: 0.3em;\n  left: 10%;\n  top: 100%;\n  transform: translate(0, -90%) rotate(45deg);\n  width: 0.1rem;\n}\n\n.icon-photo {\n  border: 0.1rem solid currentColor;\n  border-radius: 0.1rem;\n}\n.icon-photo::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  content: \"\";\n  height: 0.25em;\n  left: 35%;\n  top: 35%;\n  width: 0.25em;\n}\n.icon-photo::after {\n  border: 0.1rem solid currentColor;\n  border-bottom: 0;\n  border-left: 0;\n  content: \"\";\n  height: 0.5em;\n  left: 60%;\n  transform: translate(-50%, 25%) rotate(-45deg);\n  width: 0.5em;\n}\n\n.icon-link::before, .icon-link::after {\n  border: 0.1rem solid currentColor;\n  border-radius: 5em 0 0 5em;\n  border-right: 0;\n  content: \"\";\n  height: 0.5em;\n  width: 0.75em;\n}\n.icon-link::before {\n  transform: translate(-70%, -45%) rotate(-45deg);\n}\n.icon-link::after {\n  transform: translate(-30%, -55%) rotate(135deg);\n}\n\n.icon-location::before {\n  border: 0.1rem solid currentColor;\n  border-radius: 50% 50% 50% 0;\n  content: \"\";\n  height: 0.8em;\n  transform: translate(-50%, -60%) rotate(-45deg);\n  width: 0.8em;\n}\n.icon-location::after {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n  content: \"\";\n  height: 0.2em;\n  transform: translate(-50%, -80%);\n  width: 0.2em;\n}\n\n.icon-emoji {\n  border: 0.1rem solid currentColor;\n  border-radius: 50%;\n}\n.icon-emoji::before {\n  border-radius: 50%;\n  box-shadow: -0.17em -0.15em, 0.17em -0.15em;\n  content: \"\";\n  height: 0.1em;\n  width: 0.1em;\n}\n.icon-emoji::after {\n  border: 0.1rem solid currentColor;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  border-right-color: transparent;\n  content: \"\";\n  height: 0.5em;\n  transform: translate(-50%, -40%) rotate(-135deg);\n  width: 0.5em;\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-1.6rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.text-primary {\n  color: #144777;\n}\n\na.text-primary:focus, a.text-primary:hover {\n  color: #103a61;\n}\na.text-primary:visited {\n  color: #18548d;\n}\n\n.text-secondary {\n  color: #58a0e3;\n}\n\na.text-secondary:focus, a.text-secondary:hover {\n  color: #4293df;\n}\na.text-secondary:visited {\n  color: #6eace7;\n}\n\n.text-gray {\n  color: #acb3c2;\n}\n\na.text-gray:focus, a.text-gray:hover {\n  color: #9ea6b7;\n}\na.text-gray:visited {\n  color: #bbc1cd;\n}\n\n.text-light {\n  color: #fff;\n}\n\na.text-light:focus, a.text-light:hover {\n  color: #f2f2f2;\n}\na.text-light:visited {\n  color: white;\n}\n\n.text-dark {\n  color: #50596c;\n}\n\na.text-dark:focus, a.text-dark:hover {\n  color: #454d5d;\n}\na.text-dark:visited {\n  color: #5b657a;\n}\n\n.text-success {\n  color: #32b643;\n}\n\na.text-success:focus, a.text-success:hover {\n  color: #2da23c;\n}\na.text-success:visited {\n  color: #39c94b;\n}\n\n.text-warning {\n  color: #ffb700;\n}\n\na.text-warning:focus, a.text-warning:hover {\n  color: #e6a500;\n}\na.text-warning:visited {\n  color: #ffbe1a;\n}\n\n.text-error {\n  color: #e85600;\n}\n\na.text-error:focus, a.text-error:hover {\n  color: #cf4d00;\n}\na.text-error:visited {\n  color: #ff6003;\n}\n\n.bg-primary {\n  background: #144777;\n  color: #fff;\n}\n\n.bg-secondary {\n  background: #65a7e5;\n}\n\n.bg-dark {\n  background: #454d5d;\n  color: #fff;\n}\n\n.bg-gray {\n  background: #f8f9fa;\n}\n\n.bg-success {\n  background: #32b643;\n  color: #fff;\n}\n\n.bg-warning {\n  background: #ffb700;\n  color: #fff;\n}\n\n.bg-error {\n  background: #e85600;\n  color: #fff;\n}\n\n.c-hand {\n  cursor: pointer;\n}\n\n.c-move {\n  cursor: move;\n}\n\n.c-zoom-in {\n  cursor: zoom-in;\n}\n\n.c-zoom-out {\n  cursor: zoom-out;\n}\n\n.c-not-allowed {\n  cursor: not-allowed;\n}\n\n.c-auto {\n  cursor: auto;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-inline {\n  display: inline;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-inline-flex {\n  display: inline-flex;\n}\n\n.d-none,\n.d-hide {\n  display: none !important;\n}\n\n.d-visible {\n  visibility: visible;\n}\n\n.d-invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  background: transparent;\n  border: 0;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  text-shadow: none;\n}\n\n.text-assistive {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.divider,\n.divider-vert {\n  display: block;\n  position: relative;\n}\n.divider[data-content]::after,\n.divider-vert[data-content]::after {\n  background: #fff;\n  color: #acb3c2;\n  content: attr(data-content);\n  display: inline-block;\n  font-size: 0.7rem;\n  padding: 0 0.4rem;\n  transform: translateY(-0.65rem);\n}\n\n.divider {\n  border-top: 0.05rem solid #e7e9ed;\n  height: 0.05rem;\n  margin: 0.4rem 0;\n}\n.divider[data-content] {\n  margin: 0.8rem 0;\n}\n\n.divider-vert {\n  display: block;\n  padding: 0.8rem;\n}\n.divider-vert::before {\n  border-left: 0.05rem solid #e7e9ed;\n  bottom: 0.4rem;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 0.4rem;\n  transform: translateX(-50%);\n}\n.divider-vert[data-content]::after {\n  left: 50%;\n  padding: 0.2rem 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.loading {\n  color: transparent !important;\n  min-height: 0.8rem;\n  pointer-events: none;\n  position: relative;\n}\n.loading::after {\n  animation: loading 500ms infinite linear;\n  border: 0.1rem solid #144777;\n  border-radius: 50%;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 0.8rem;\n  left: 50%;\n  margin-left: -0.4rem;\n  margin-top: -0.4rem;\n  position: absolute;\n  top: 50%;\n  width: 0.8rem;\n  z-index: 1;\n}\n.loading.loading-lg {\n  min-height: 2rem;\n}\n.loading.loading-lg::after {\n  height: 1.6rem;\n  margin-left: -0.8rem;\n  margin-top: -0.8rem;\n  width: 1.6rem;\n}\n\n.clearfix::after, .container::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.relative {\n  position: relative !important;\n}\n\n.absolute {\n  position: absolute !important;\n}\n\n.fixed {\n  position: fixed !important;\n}\n\n.centered {\n  display: block;\n  float: none;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.flex-centered {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-bottom: 0 !important;\n  margin-top: 0 !important;\n}\n\n.m-1 {\n  margin: 0.2rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.2rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.2rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.2rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.2rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.2rem !important;\n  margin-right: 0.2rem !important;\n}\n\n.my-1 {\n  margin-bottom: 0.2rem !important;\n  margin-top: 0.2rem !important;\n}\n\n.m-2 {\n  margin: 0.4rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.4rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.4rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.4rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.4rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.4rem !important;\n  margin-right: 0.4rem !important;\n}\n\n.my-2 {\n  margin-bottom: 0.4rem !important;\n  margin-top: 0.4rem !important;\n}\n\n.m-3 {\n  margin: 0.6rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 0.6rem !important;\n}\n\n.ml-3 {\n  margin-left: 0.6rem !important;\n}\n\n.mr-3 {\n  margin-right: 0.6rem !important;\n}\n\n.mt-3 {\n  margin-top: 0.6rem !important;\n}\n\n.mx-3 {\n  margin-left: 0.6rem !important;\n  margin-right: 0.6rem !important;\n}\n\n.my-3 {\n  margin-bottom: 0.6rem !important;\n  margin-top: 0.6rem !important;\n}\n\n.m-4 {\n  margin: 0.8rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 0.8rem !important;\n}\n\n.ml-4 {\n  margin-left: 0.8rem !important;\n}\n\n.mr-4 {\n  margin-right: 0.8rem !important;\n}\n\n.mt-4 {\n  margin-top: 0.8rem !important;\n}\n\n.mx-4 {\n  margin-left: 0.8rem !important;\n  margin-right: 0.8rem !important;\n}\n\n.my-4 {\n  margin-bottom: 0.8rem !important;\n  margin-top: 0.8rem !important;\n}\n\n.m-5 {\n  margin: 1rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-5 {\n  margin-left: 1rem !important;\n}\n\n.mr-5 {\n  margin-right: 1rem !important;\n}\n\n.mt-5 {\n  margin-top: 1rem !important;\n}\n\n.mx-5 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-5 {\n  margin-bottom: 1rem !important;\n  margin-top: 1rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important;\n}\n\n.p-1 {\n  padding: 0.2rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.2rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.2rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.2rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.2rem !important;\n}\n\n.px-1 {\n  padding-left: 0.2rem !important;\n  padding-right: 0.2rem !important;\n}\n\n.py-1 {\n  padding-bottom: 0.2rem !important;\n  padding-top: 0.2rem !important;\n}\n\n.p-2 {\n  padding: 0.4rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.4rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.4rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.4rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.4rem !important;\n}\n\n.px-2 {\n  padding-left: 0.4rem !important;\n  padding-right: 0.4rem !important;\n}\n\n.py-2 {\n  padding-bottom: 0.4rem !important;\n  padding-top: 0.4rem !important;\n}\n\n.p-3 {\n  padding: 0.6rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 0.6rem !important;\n}\n\n.pl-3 {\n  padding-left: 0.6rem !important;\n}\n\n.pr-3 {\n  padding-right: 0.6rem !important;\n}\n\n.pt-3 {\n  padding-top: 0.6rem !important;\n}\n\n.px-3 {\n  padding-left: 0.6rem !important;\n  padding-right: 0.6rem !important;\n}\n\n.py-3 {\n  padding-bottom: 0.6rem !important;\n  padding-top: 0.6rem !important;\n}\n\n.p-4 {\n  padding: 0.8rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 0.8rem !important;\n}\n\n.pl-4 {\n  padding-left: 0.8rem !important;\n}\n\n.pr-4 {\n  padding-right: 0.8rem !important;\n}\n\n.pt-4 {\n  padding-top: 0.8rem !important;\n}\n\n.px-4 {\n  padding-left: 0.8rem !important;\n  padding-right: 0.8rem !important;\n}\n\n.py-4 {\n  padding-bottom: 0.8rem !important;\n  padding-top: 0.8rem !important;\n}\n\n.p-5 {\n  padding: 1rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-5 {\n  padding-left: 1rem !important;\n}\n\n.pr-5 {\n  padding-right: 1rem !important;\n}\n\n.pt-5 {\n  padding-top: 1rem !important;\n}\n\n.px-5 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-5 {\n  padding-bottom: 1rem !important;\n  padding-top: 1rem !important;\n}\n\n.s-rounded {\n  border-radius: 0.1rem;\n}\n\n.s-circle {\n  border-radius: 50%;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-normal {\n  font-weight: normal;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.text-italic {\n  font-style: italic;\n}\n\n.text-large {\n  font-size: 1.2em;\n}\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-clip {\n  overflow: hidden;\n  text-overflow: clip;\n  white-space: nowrap;\n}\n\n.text-break {\n  hyphens: auto;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n\n/*! Spectre.css Experimentals v0.5.3 | MIT License | github.com/picturepan2/spectre */\nhtml, body, #__next {\n  height: 100%;\n}\n\n* {\n  font-size: 0.9rem;\n}\n\na:active, a:focus {\n  outline: none;\n  outline-style: none;\n  box-shadow: none;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.fw-light {\n  font-weight: 300;\n}\n.fw-medium {\n  font-weight: 400;\n}\n.fw-bold {\n  font-weight: 700;\n}\n\n.ml-a {\n  margin-left: auto !important;\n}\n\n.mr-a {\n  margin-right: auto !important;\n}\n\n.mt-a, .my-a {\n  margin-top: auto !important;\n}\n\n.mb-a, .my-a {\n  margin-bottom: auto !important;\n}\n\n.fade-appear .transition-elem, .fade-enter .transition-elem {\n  opacity: 0;\n  transform: translateZ(0) translateY(80px);\n}\n.fade-appear-active, .fade-enter-active {\n  z-index: 1;\n}\n.fade-appear-active .transition-elem, .fade-enter-active .transition-elem {\n  opacity: 1;\n  transform: translateZ(0) translateY(0px);\n  -webkit-transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n  -moz-transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n  -o-transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n  /* easeOutQuart */\n}\n.fade-enter-active .transition-elem {\n  transition-duration: 700ms;\n}\n.fade-enter-active .transition-elem.delay-0 {\n  transition-delay: 430ms;\n}\n.fade-enter-active .transition-elem.delay-1 {\n  transition-delay: 510ms;\n}\n.fade-enter-active .transition-elem.delay-2 {\n  transition-delay: 590ms;\n}\n.fade-enter-active .transition-elem.delay-3 {\n  transition-delay: 670ms;\n}\n.fade-enter-active .transition-elem.delay-4 {\n  transition-delay: 750ms;\n}\n.fade-enter-active .transition-elem.delay-5 {\n  transition-delay: 830ms;\n}\n.fade-appear-active .transition-elem {\n  transition-duration: 1050ms;\n}\n.fade-appear-active .transition-elem.delay-0 {\n  transition-delay: 300ms;\n}\n.fade-appear-active .transition-elem.delay-1 {\n  transition-delay: 380ms;\n}\n.fade-appear-active .transition-elem.delay-2 {\n  transition-delay: 460ms;\n}\n.fade-appear-active .transition-elem.delay-3 {\n  transition-delay: 540ms;\n}\n.fade-appear-active .transition-elem.delay-4 {\n  transition-delay: 620ms;\n}\n.fade-appear-active .transition-elem.delay-5 {\n  transition-delay: 700ms;\n}\n.fade-exit .transition-elem {\n  opacity: 1;\n  transform: translateZ(0) translateY(0px);\n}\n.fade-exit-active .transition-elem {\n  opacity: 0;\n  transform: translateZ(0) translateY(-100px);\n  transition-duration: 350ms;\n  -webkit-transition-timing-function: cubic-bezier(0.6, 0, 0.735, 0.045);\n  /* older webkit */\n  -webkit-transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n  -moz-transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n  -o-transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n  /* easeInBack */\n}\n.fade-exit-active .transition-elem.delay-0 {\n  transition-delay: 0ms;\n}\n.fade-exit-active .transition-elem.delay-1 {\n  transition-delay: 80ms;\n}\n.fade-exit-active .transition-elem.delay-2 {\n  transition-delay: 160ms;\n}\n.fade-exit-active .transition-elem.delay-3 {\n  transition-delay: 160ms;\n}\n.fade-exit-active .transition-elem.delay-4 {\n  transition-delay: 160ms;\n}\n.fade-exit-active .transition-elem.delay-5 {\n  transition-delay: 160ms;\n}\n\n.transition-elem {\n  transition-property: transform, opacity;\n  transform: translateZ(0);\n}\n\n.btn-icon-right i {\n  margin-left: 5px;\n}\n\n.btn-icon-left i {\n  margin-right: 5px;\n}\n\n.content-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  padding: 90px 25px 30px;\n  overflow-y: scroll;\n}\n@media (min-width: 1200px) {\n  .content-page {\n    width: calc(100% + 17px);\n  }\n}\n\n@media (max-width: 599px) {\n  .padx-xs {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n@media (min-width: 600px) {\n  .content-page {\n    padding: 90px 45px 30px;\n  }\n}\n@media (min-width: 1200px) {\n  .content-page {\n    padding: 60px 100px;\n  }\n\n  .btn-icon-right i {\n    transition: margin-left 0.3s;\n  }\n  .btn-icon-right:hover i {\n    margin-left: 10px;\n  }\n\n  .btn-icon-left i {\n    transition: margin-right 0.3s;\n  }\n  .btn-icon-left:hover i {\n    margin-right: 10px;\n  }\n}","// Variables and mixins\r\n@import \"variables\";\r\n@import \"mixins\";\r\n\r\n/*! Spectre.css v#{$version} | MIT License | github.com/picturepan2/spectre */\r\n// Reset and dependencies\r\n@import \"normalize\";\r\n@import \"base\";\r\n\r\n// Elements\r\n@import \"typography\";\r\n// @import \"asian\";\r\n@import \"tables\";\r\n@import \"buttons\";\r\n@import \"forms\";\r\n@import \"labels\";\r\n@import \"codes\";\r\n@import \"media\";\r\n\r\n// Layout\r\n@import \"layout\";\r\n// @import \"navbar\";\r\n\r\n// Components\r\n// @import \"accordions\";\r\n@import \"avatars\";\r\n@import \"badges\";\r\n// @import \"breadcrumbs\";\r\n// @import \"bars\";\r\n@import \"cards\";\r\n@import \"chips\";\r\n// @import \"dropdowns\";\r\n// @import \"empty\";\r\n// @import \"menus\";\r\n// @import \"modals\";\r\n// @import \"navs\";\r\n// @import \"pagination\";\r\n// @import \"panels\";\r\n// @import \"popovers\";\r\n// @import \"steps\";\r\n// @import \"tabs\";\r\n// @import \"tiles\";\r\n// @import \"toasts\";\r\n// @import \"tooltips\";\r\n\r\n// Icons\r\n@import \"spectre-icons\";\r\n\r\n// Utility classes\r\n@import \"animations\";\r\n@import \"utilities\";\r\n\r\n@import \"spectre-exp\";","/* Manually forked from Normalize.css */\r\n/* normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Correct the line height in all browsers.\r\n * 3. Prevent adjustments of font size after orientation changes in\r\n *    IE on Windows Phone and in iOS.\r\n */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 3 */\r\n  -webkit-text-size-adjust: 100%; /* 3 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 9-.\r\n */\r\n\r\narticle,\r\naside,\r\nfooter,\r\nheader,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in IE.\r\n */\r\n\r\nfigcaption,\r\nfigure,\r\nmain { /* 1 */\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Add the correct margin in IE 8 (removed).\r\n */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers. (removed)\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\r\n\r\na {\r\n  background-color: transparent; /* 1 */\r\n  -webkit-text-decoration-skip: objects; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline-width: 0;\r\n}\r\n\r\n/**\r\n * Modify default styling of address.\r\n */\r\n\r\naddress {\r\n  font-style: normal;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. (removed)\r\n */\r\n\r\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: inherit;\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: $mono-font-family; /* 1 (changed) */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Add the correct background and color in IE 9-. (Removed)\r\n */\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n  font-weight: 400; /* (added) */\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 9-.\r\n */\r\n\r\naudio,\r\nvideo {\r\n  display: inline-block;\r\n}\r\n\r\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/**\r\n * Hide the overflow in IE.\r\n */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 (changed) */\r\n  font-size: inherit; /* 1 (changed) */\r\n  line-height: inherit; /* 1 (changed) */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\nhtml [type=\"button\"], /* 1 */\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule (removed).\r\n */\r\n\r\n\r\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated) (changed).\r\n */\r\n\r\nfieldset {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * 1. Add the correct display in IE 9-.\r\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n */\r\n\r\ndetails, /* 1 */\r\nmenu {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n  outline: none;\r\n}\r\n\r\n/* Scripting\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 9-.\r\n */\r\n\r\ncanvas {\r\n  display: inline-block;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* Hidden\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10-.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","// Core variables\r\n$version: \"0.5.3\";\r\n\r\n// Core features\r\n$rtl: false !default;\r\n\r\n// Core colors\r\n// $primary-color: #144777 !default;\r\n$primary-color: #144777 !default;\r\n$primary-color-dark: darken($primary-color, 3%) !default;\r\n$primary-color-light: lighten($primary-color, 3%) !default;\r\n$secondary-color: lighten($primary-color, 37.5%) !default;\r\n$secondary-color-dark: darken($secondary-color, 3%) !default;\r\n$secondary-color-light: lighten($secondary-color, 3%) !default;\r\n\r\n// Gray colors\r\n$dark-color: #454d5d !default;\r\n$light-color: #fff !default;\r\n$gray-color: lighten($dark-color, 40%) !default;\r\n$gray-color-dark: darken($gray-color, 25%) !default;\r\n$gray-color-light: lighten($gray-color, 20%) !default;\r\n\r\n$border-color: lighten($dark-color, 60%) !default;\r\n$border-color-dark: darken($border-color, 10%) !default;\r\n$bg-color: lighten($dark-color, 66%) !default;\r\n$bg-color-dark: darken($bg-color, 3%) !default;\r\n$bg-color-light: $light-color !default;\r\n\r\n// Control colors\r\n$success-color: #32b643 !default;\r\n$warning-color: #ffb700 !default;\r\n$error-color: #e85600 !default;\r\n\r\n// Other colors\r\n$code-color: #d73e48 !default;\r\n$highlight-color: #ffe9b3 !default;\r\n$body-bg: $bg-color-light !default;\r\n$body-font-color: lighten($dark-color, 5%) !default;\r\n$link-color: $primary-color !default;\r\n$link-color-dark: darken($link-color, 10%) !default;\r\n$link-color-light: lighten($link-color, 10%) !default;\r\n\r\n// Fonts\r\n// Credit: https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/\r\n$base-font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto !default;\r\n$mono-font-family: \"SF Mono\", \"Segoe UI Mono\", \"Roboto Mono\", Menlo, Courier, monospace !default;\r\n$fallback-font-family: \"Helvetica Neue\", sans-serif !default;\r\n$cjk-zh-hans-font-family: $base-font-family, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", $fallback-font-family !default;\r\n$cjk-zh-hant-font-family: $base-font-family, \"PingFang TC\", \"Hiragino Sans CNS\", \"Microsoft JhengHei\", $fallback-font-family !default;\r\n$cjk-jp-font-family: $base-font-family, \"Hiragino Sans\", \"Hiragino Kaku Gothic Pro\", \"Yu Gothic\", YuGothic, Meiryo, $fallback-font-family !default;\r\n$cjk-ko-font-family: $base-font-family, \"Malgun Gothic\", $fallback-font-family !default;\r\n$body-font-family: $base-font-family, $fallback-font-family !default;\r\n\r\n// Unit sizes\r\n$unit-o: .05rem !default;\r\n$unit-h: .1rem !default;\r\n$unit-1: .2rem !default;\r\n$unit-2: .4rem !default;\r\n$unit-3: .6rem !default;\r\n$unit-4: .8rem !default;\r\n$unit-5: 1rem !default;\r\n$unit-6: 1.2rem !default;\r\n$unit-7: 1.4rem !default;\r\n$unit-8: 1.6rem !default;\r\n$unit-9: 1.8rem !default;\r\n$unit-10: 2rem !default;\r\n$unit-12: 2.4rem !default;\r\n$unit-16: 3.2rem !default;\r\n\r\n// Font sizes\r\n$html-font-size: 20px !default;\r\n$html-line-height: 1.5 !default;\r\n$font-size: .8rem !default;\r\n$font-size-sm: .7rem !default;\r\n$font-size-lg: .9rem !default;\r\n$line-height: 1.2rem !default;\r\n\r\n// Sizes\r\n$layout-spacing: $unit-2 !default;\r\n$layout-spacing-sm: $unit-1 !default;\r\n$layout-spacing-lg: $unit-4 !default;\r\n$border-radius: $unit-h !default;\r\n$border-width: $unit-o !default;\r\n$border-width-lg: $unit-h !default;\r\n$control-size: $unit-9 !default;\r\n$control-size-sm: $unit-7 !default;\r\n$control-size-lg: $unit-10 !default;\r\n$control-padding-x: $unit-2 !default;\r\n$control-padding-x-sm: $unit-2 * .75 !default;\r\n$control-padding-x-lg: $unit-2 * 1.5 !default;\r\n$control-padding-y: ($control-size - $line-height) / 2 - $border-width !default;\r\n$control-padding-y-sm: ($control-size-sm - $line-height) / 2 - $border-width !default;\r\n$control-padding-y-lg: ($control-size-lg - $line-height) / 2 - $border-width !default;\r\n$control-icon-size: .8rem !default;\r\n\r\n$control-width-xs: 180px !default;\r\n$control-width-sm: 320px !default;\r\n$control-width-md: 640px !default;\r\n$control-width-lg: 960px !default;\r\n$control-width-xl: 1280px !default;\r\n\r\n// Responsive breakpoints\r\n$size-xs: 480px !default;\r\n$size-sm: 600px !default;\r\n$size-md: 840px !default;\r\n$size-lg: 960px !default;\r\n$size-xl: 1280px !default;\r\n$size-2x: 1440px !default;\r\n\r\n$responsive-breakpoint: $size-xs !default;\r\n\r\n// Z-index\r\n$zindex-0: 1 !default;\r\n$zindex-1: 100 !default;\r\n$zindex-2: 200 !default;\r\n$zindex-3: 300 !default;\r\n$zindex-4: 400 !default;\r\n","// Base\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: $html-font-size;\r\n  line-height: $html-line-height;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\nbody {\r\n  background: $body-bg;\r\n  color: $body-font-color;\r\n  font-family: $body-font-family;\r\n  font-size: $font-size;\r\n  overflow-x: hidden;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\na {\r\n  color: $link-color;\r\n  outline: none;\r\n  text-decoration: none;\r\n\r\n  &:focus {\r\n    @include control-shadow();\r\n  }\r\n\r\n  &:focus,\r\n  &:hover,\r\n  &:active,\r\n  &.active {\r\n    color: $link-color-dark;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  &:visited {\r\n    color: $link-color-light;\r\n  }\r\n}\r\n","// Component focus shadow\r\n@mixin control-shadow($color: $primary-color) {\r\n  box-shadow: 0 0 0 .1rem rgba($color, .2);\r\n}\r\n\r\n// Shadow mixin\r\n@mixin shadow-variant($offset) {\r\n  box-shadow: 0 $offset ($offset + .05rem) * 2 rgba($dark-color, .3);\r\n}\r\n","// Typography\r\n// Headings\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: inherit;\r\n  font-weight: 600;\r\n  line-height: 1.2;\r\n  margin-bottom: .5em;\r\n  margin-top: 0;\r\n}\r\n.h1,\r\n.h2,\r\n.h3,\r\n.h4,\r\n.h5,\r\n.h6 {\r\n  font-weight: 600;\r\n}\r\nh1,\r\n.h1 {\r\n  font-size: 2rem;\r\n}\r\nh2,\r\n.h2 {\r\n  font-size: 1.6rem;\r\n}\r\nh3,\r\n.h3 {\r\n  font-size: 1.4rem;\r\n}\r\nh4,\r\n.h4 {\r\n  font-size: 1.2rem;\r\n}\r\nh5,\r\n.h5 {\r\n  font-size: 1rem;\r\n}\r\nh6,\r\n.h6 {\r\n  font-size: .8rem;\r\n}\r\n\r\n// Paragraphs\r\np {\r\n  margin: 0 0 $line-height;\r\n}\r\n\r\n// Semantic text elements\r\na,\r\nins,\r\nu {\r\n  text-decoration-skip: ink edges;\r\n}\r\n\r\nabbr[title] {\r\n  border-bottom: $border-width dotted;\r\n  cursor: help;\r\n  text-decoration: none;\r\n}\r\n\r\nkbd {\r\n  @include label-base();\r\n  @include label-variant($light-color, $dark-color);\r\n  font-size: $font-size-sm;\r\n}\r\n\r\nmark {\r\n  @include label-variant($body-font-color, $highlight-color);\r\n  border-radius: $border-radius;\r\n  padding: .05rem;\r\n}\r\n\r\n// Blockquote\r\nblockquote {\r\n  border-left: $border-width-lg solid $border-color;\r\n  margin-left: 0;\r\n  padding: $unit-2 $unit-4;\r\n\r\n  p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n// Lists\r\nul,\r\nol {\r\n  margin: $unit-4 0 $unit-4 $unit-4;\r\n  padding: 0;\r\n\r\n  ul,\r\n  ol {\r\n    margin: $unit-4 0 $unit-4 $unit-4;\r\n  }\r\n\r\n  li {\r\n    margin-top: $unit-2;\r\n  }\r\n}\r\n\r\nul {\r\n  list-style: disc inside;\r\n\r\n  ul {\r\n    list-style-type: circle;\r\n  }\r\n}\r\n\r\nol {\r\n  list-style: decimal inside;\r\n\r\n  ol {\r\n    list-style-type: lower-alpha;\r\n  }\r\n}\r\n\r\ndl {\r\n  dt {\r\n    font-weight: bold;\r\n  }\r\n  dd {\r\n    margin: $unit-2 0 $unit-4 0;\r\n  }\r\n}\r\n","// Label base style\r\n@mixin label-base() {\r\n  border-radius: $border-radius;\r\n  line-height: 1.2;\r\n  padding: .1rem .2rem;\r\n}\r\n\r\n@mixin label-variant($color: $light-color, $bg-color: $primary-color) {\r\n  background: $bg-color;\r\n  color: $color;\r\n}\r\n","// Tables\r\n.table {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  width: 100%;\r\n  @if $rtl == true {\r\n    text-align: right;\r\n  } @else {\r\n    text-align: left;\r\n  }\r\n\r\n  &.table-striped {\r\n    tbody {\r\n      tr:nth-of-type(odd) {\r\n        background: $bg-color;\r\n      }\r\n    }\r\n  }\r\n\r\n  &,\r\n  &.table-striped {\r\n    tbody {\r\n      tr {\r\n        &.active {\r\n          background: $bg-color-dark;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &.table-hover {\r\n    tbody {\r\n      tr {\r\n        &:hover {\r\n          background: $bg-color-dark;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  // Tables with horizontal scrollbar\r\n  &.table-scroll {\r\n    display: block;\r\n    overflow-x: auto;\r\n    padding-bottom: .75rem;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  td,\r\n  th {\r\n    border-bottom: $border-width solid $border-color;\r\n    padding: $unit-3 $unit-2;\r\n  }\r\n  th {\r\n    border-bottom-width: $border-width-lg;\r\n  }\r\n}\r\n","// Buttons\r\n.btn {\r\n  @include control-transition();\r\n  appearance: none;\r\n  background: $bg-color-light;\r\n  border: $border-width solid $primary-color;\r\n  border-radius: $border-radius;\r\n  color: $primary-color;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: $font-size;\r\n  height: $control-size;\r\n  line-height: $line-height;\r\n  outline: none;\r\n  padding: $control-padding-y $control-padding-x;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  user-select: none;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  &:focus {\r\n    @include control-shadow();\r\n  }\r\n  &:focus,\r\n  &:hover {\r\n    background: $secondary-color;\r\n    border-color: $primary-color-dark;\r\n    text-decoration: none;\r\n  }\r\n  &:active,\r\n  &.active {\r\n    background: $primary-color-dark;\r\n    border-color: darken($primary-color-dark, 5%);\r\n    color: $light-color;\r\n    text-decoration: none;\r\n    &.loading {\r\n      &::after {\r\n        border-bottom-color: $light-color;\r\n        border-left-color: $light-color;\r\n      }\r\n    }\r\n  }\r\n  &[disabled],\r\n  &:disabled,\r\n  &.disabled {\r\n    cursor: default;\r\n    opacity: .5;\r\n    pointer-events: none;\r\n  }\r\n\r\n  // Button Primary\r\n  &.btn-primary {\r\n    background: $primary-color;\r\n    border-color: $primary-color-dark;\r\n    color: $light-color;\r\n    &:focus,\r\n    &:hover {\r\n      background: darken($primary-color-dark, 2%);\r\n      border-color: darken($primary-color-dark, 5%);\r\n      color: $light-color;\r\n    }\r\n    &:active,\r\n    &.active {\r\n      background: darken($primary-color-dark, 4%);\r\n      border-color: darken($primary-color-dark, 7%);\r\n      color: $light-color;\r\n    }\r\n    &.loading {\r\n      &::after {\r\n        border-bottom-color: $light-color;\r\n        border-left-color: $light-color;\r\n      }\r\n    }\r\n  }\r\n\r\n  // Button Colors\r\n  &.btn-success {\r\n    @include button-variant($success-color);\r\n  }\r\n\r\n  &.btn-error {\r\n    @include button-variant($error-color);\r\n  }\r\n\r\n  // Button Link\r\n  &.btn-link {\r\n    background: transparent;\r\n    border-color: transparent;\r\n    color: $link-color;\r\n    &:focus,\r\n    &:hover,\r\n    &:active,\r\n    &.active {\r\n      color: $link-color-dark;\r\n    }\r\n  }\r\n\r\n  // Button Sizes\r\n  &.btn-sm {\r\n    font-size: $font-size-sm;\r\n    height: $control-size-sm;\r\n    padding: $control-padding-y-sm $control-padding-x-sm;\r\n  }\r\n\r\n  &.btn-lg {\r\n    font-size: $font-size-lg;\r\n    height: $control-size-lg;\r\n    padding: $control-padding-y-lg $control-padding-x-lg;\r\n  }\r\n\r\n  // Button Block\r\n  &.btn-block {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n\r\n  // Button Action\r\n  &.btn-action {\r\n    width: $control-size;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n\r\n    &.btn-sm {\r\n      width: $control-size-sm;\r\n    }\r\n\r\n    &.btn-lg {\r\n      width: $control-size-lg;\r\n    }\r\n  }\r\n\r\n  // Button Clear\r\n  &.btn-clear {\r\n    background: transparent;\r\n    border: 0;\r\n    color: currentColor;\r\n    height: $unit-4;\r\n    line-height: $unit-4;\r\n    margin-left: $unit-1;\r\n    margin-right: -2px;\r\n    opacity: 1;\r\n    padding: 0;\r\n    text-decoration: none;\r\n    width: $unit-4;\r\n\r\n    &:hover {\r\n      opacity: .95;\r\n    }\r\n\r\n    &::before {\r\n      content: \"\\2715\";\r\n    }\r\n  }\r\n}\r\n\r\n// Button groups\r\n.btn-group {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n\r\n  .btn {\r\n    flex: 1 0 auto;\r\n    &:first-child:not(:last-child) {\r\n      border-bottom-right-radius: 0;\r\n      border-top-right-radius: 0;\r\n    }\r\n    &:not(:first-child):not(:last-child) {\r\n      border-radius: 0;\r\n      margin-left: -$border-width;\r\n    }\r\n    &:last-child:not(:first-child) {\r\n      border-bottom-left-radius: 0;\r\n      border-top-left-radius: 0;\r\n      margin-left: -$border-width;\r\n    }\r\n    &:focus,\r\n    &:hover,\r\n    &:active,\r\n    &.active {\r\n      z-index: $zindex-0;\r\n    }\r\n  }\r\n\r\n  &.btn-group-block {\r\n    display: flex;\r\n\r\n    .btn {\r\n      flex: 1 0 0;\r\n    }\r\n  }\r\n}\r\n","// Component transition\r\n@mixin control-transition() {\r\n  transition: all .2s ease;\r\n}\r\n","// Button variant mixin\r\n@mixin button-variant($color: $primary-color) {\r\n  background: $color;\r\n  border-color: darken($color, 3%);\r\n  color: $light-color;\r\n  &:focus {\r\n    @include control-shadow($color);\r\n  }\r\n  &:focus,\r\n  &:hover {\r\n    background: darken($color, 2%);\r\n    border-color: darken($color, 5%);\r\n    color: $light-color;\r\n  }\r\n  &:active,\r\n  &.active {\r\n    background: darken($color, 7%);\r\n    border-color: darken($color, 10%);\r\n    color: $light-color;\r\n  }\r\n  &.loading {\r\n    &::after {\r\n      border-bottom-color: $light-color;\r\n      border-left-color: $light-color;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin button-outline-variant($color: $primary-color) {\r\n  background: $light-color;\r\n  border-color: $color;\r\n  color: $color;\r\n  &:focus {\r\n    @include control-shadow($color);\r\n  }\r\n  &:focus,\r\n  &:hover {\r\n    background: lighten($color, 50%);\r\n    border-color: darken($color, 2%);\r\n    color: $color;\r\n  }\r\n  &:active,\r\n  &.active {\r\n    background: $color;\r\n    border-color: darken($color, 5%);\r\n    color: $light-color;\r\n  }\r\n  &.loading {\r\n    &::after {\r\n      border-bottom-color: $color;\r\n      border-left-color: $color;\r\n    }\r\n  }\r\n}\r\n","// Forms\r\n.form-group {\r\n  &:not(:last-child) {\r\n    margin-bottom: $layout-spacing;\r\n  }\r\n}\r\n\r\nfieldset {\r\n  margin-bottom: $layout-spacing-lg;\r\n}\r\n\r\nlegend {\r\n  font-size: $font-size-lg;\r\n  font-weight: 500;\r\n  margin-bottom: $layout-spacing-lg;\r\n}\r\n\r\n// Form element: Label\r\n.form-label {\r\n  display: block;\r\n  line-height: $line-height;\r\n  padding: $control-padding-y + $border-width 0;\r\n\r\n  &.label-sm {\r\n    font-size: $font-size-sm;\r\n    padding: $control-padding-y-sm + $border-width 0;\r\n  }\r\n\r\n  &.label-lg {\r\n    font-size: $font-size-lg;\r\n    padding: $control-padding-y-lg + $border-width 0;\r\n  }\r\n}\r\n\r\n// Form element: Input\r\n.form-input {\r\n  @include control-transition();\r\n  appearance: none;\r\n  background: $bg-color-light;\r\n  background-image: none;\r\n  border: $border-width solid $border-color-dark;\r\n  border-radius: $border-radius;\r\n  color: $body-font-color;\r\n  display: block;\r\n  font-size: $font-size;\r\n  height: $control-size;\r\n  line-height: $line-height;\r\n  max-width: 100%;\r\n  outline: none;\r\n  padding: $control-padding-y $control-padding-x;\r\n  position: relative;\r\n  width: 100%;\r\n  &:focus {\r\n    @include control-shadow();\r\n    border-color: $primary-color;\r\n  }\r\n  &::placeholder {\r\n    color: $gray-color;\r\n  }\r\n\r\n  // Input sizes\r\n  &.input-sm {\r\n    font-size: $font-size-sm;\r\n    height: $control-size-sm;\r\n    padding: $control-padding-y-sm $control-padding-x-sm;\r\n  }\r\n\r\n  &.input-lg {\r\n    font-size: $font-size-lg;\r\n    height: $control-size-lg;\r\n    padding: $control-padding-y-lg $control-padding-x-lg;\r\n  }\r\n\r\n  &.input-inline {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: auto;\r\n  }\r\n\r\n  // Input types\r\n  &[type=\"file\"] {\r\n    height: auto;\r\n  }\r\n}\r\n\r\n// Form element: Textarea\r\ntextarea.form-input {\r\n  height: auto;\r\n}\r\n\r\n// Form element: Input hint\r\n.form-input-hint {\r\n  color: $gray-color;\r\n  font-size: $font-size-sm;\r\n  margin-top: $unit-1;\r\n\r\n  .has-success &,\r\n  .is-success + & {\r\n    color: $success-color;\r\n  }\r\n\r\n  .has-error &,\r\n  .is-error + & {\r\n    color: $error-color;\r\n  }\r\n}\r\n\r\n// Form element: Select\r\n.form-select {\r\n  appearance: none;\r\n  border: $border-width solid $border-color-dark;\r\n  border-radius: $border-radius;\r\n  color: inherit;\r\n  font-size: $font-size;\r\n  height: $control-size;\r\n  line-height: $line-height;\r\n  outline: none;\r\n  padding: $control-padding-y $control-padding-x;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n\r\n  &[size],\r\n  &[multiple] {\r\n    height: auto;\r\n    \r\n    option {\r\n      padding: $unit-h $unit-1;\r\n    }\r\n  }\r\n  &:not([multiple]):not([size]) {\r\n    background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E\") no-repeat right .35rem center/.4rem .5rem;\r\n    padding-right: $control-icon-size + $control-padding-x;\r\n  }\r\n  &:focus {\r\n    @include control-shadow();\r\n    border-color: $primary-color;\r\n  }\r\n  &::-ms-expand {\r\n    display: none;\r\n  }\r\n\r\n  // Select sizes\r\n  &.select-sm {\r\n    font-size: $font-size-sm;\r\n    height: $control-size-sm;\r\n    padding: $control-padding-y-sm ($control-icon-size + $control-padding-x-sm) $control-padding-y-sm $control-padding-x-sm;\r\n  }\r\n\r\n  &.select-lg {\r\n    font-size: $font-size-lg;\r\n    height: $control-size-lg;\r\n    padding: $control-padding-y-lg ($control-icon-size + $control-padding-x-lg) $control-padding-y-lg $control-padding-x-lg;\r\n  }\r\n}\r\n\r\n// Form Icons\r\n.has-icon-left,\r\n.has-icon-right {\r\n  position: relative;\r\n\r\n  .form-icon {\r\n    height: $control-icon-size;\r\n    margin: 0 $control-padding-y;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: $control-icon-size;\r\n    z-index: $zindex-0 + 1;\r\n  }\r\n}\r\n\r\n.has-icon-left {\r\n  .form-icon {\r\n    left: $border-width;\r\n  }\r\n\r\n  .form-input {\r\n    padding-left: $control-icon-size + $control-padding-y * 2;\r\n  }\r\n}\r\n\r\n.has-icon-right {\r\n  .form-icon {\r\n    right: $border-width;\r\n  }\r\n\r\n  .form-input {\r\n    padding-right: $control-icon-size + $control-padding-y * 2;\r\n  }\r\n}\r\n\r\n// Form element: Checkbox and Radio\r\n.form-checkbox,\r\n.form-radio,\r\n.form-switch {\r\n  display: block;\r\n  line-height: $line-height;\r\n  margin: ($control-size - $control-size-sm) / 2 0;\r\n  min-height: 1.2rem;\r\n  padding: (($control-size-sm - $line-height) / 2) $control-padding-x (($control-size-sm - $line-height) / 2) ($control-icon-size + $control-padding-x);\r\n  position: relative;\r\n\r\n  input {\r\n    clip: rect(0, 0, 0, 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    &:focus + .form-icon {\r\n      @include control-shadow();\r\n      border-color: $primary-color;\r\n    }\r\n    &:checked + .form-icon {\r\n      background: $primary-color;\r\n      border-color: $primary-color;\r\n    }\r\n  }\r\n\r\n  .form-icon {\r\n    @include control-transition();\r\n    border: $border-width solid $border-color-dark;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: absolute;\r\n  }\r\n\r\n  // Input checkbox, radio and switch sizes\r\n  &.input-sm {\r\n    font-size: $font-size-sm;\r\n    margin: 0;\r\n  }\r\n\r\n  &.input-lg {\r\n    font-size: $font-size-lg;\r\n    margin: ($control-size-lg - $control-size-sm) / 2 0;\r\n  }\r\n}\r\n\r\n.form-checkbox,\r\n.form-radio {\r\n  .form-icon {\r\n    background: $bg-color-light;\r\n    height: $control-icon-size;\r\n    left: 0;\r\n    top: ($control-size-sm - $control-icon-size) / 2;\r\n    width: $control-icon-size;\r\n  }\r\n\r\n  input {\r\n    &:active + .form-icon {\r\n      background: $bg-color-dark;\r\n    }\r\n  }\r\n}\r\n.form-checkbox {\r\n  .form-icon {\r\n    border-radius: $border-radius;\r\n  }\r\n\r\n  input {\r\n    &:checked + .form-icon {\r\n      &::before {\r\n        background-clip: padding-box;\r\n        border: $border-width-lg solid $light-color;\r\n        border-left-width: 0;\r\n        border-top-width: 0;\r\n        content: \"\";\r\n        height: 12px;\r\n        left: 50%;\r\n        margin-left: -4px;\r\n        margin-top: -8px;\r\n        position: absolute;\r\n        top: 50%;\r\n        transform: rotate(45deg);\r\n        width: 8px;\r\n      }\r\n    }\r\n    &:indeterminate + .form-icon {\r\n      background: $primary-color;\r\n      border-color: $primary-color;\r\n      &::before {\r\n        background: $bg-color-light;\r\n        content: \"\";\r\n        height: 2px;\r\n        left: 50%;\r\n        margin-left: -5px;\r\n        margin-top: -1px;\r\n        position: absolute;\r\n        top: 50%;\r\n        width: 10px;\r\n      }\r\n    }\r\n  }\r\n}\r\n.form-radio {\r\n  .form-icon {\r\n    border-radius: 50%;\r\n  }\r\n\r\n  input {\r\n    &:checked + .form-icon {\r\n      &::before {\r\n        background: $bg-color-light;\r\n        border-radius: 50%;\r\n        content: \"\";\r\n        height: 4px;\r\n        left: 50%;\r\n        position: absolute;\r\n        top: 50%;\r\n        transform: translate(-50%, -50%);\r\n        width: 4px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Form element: Switch\r\n.form-switch {\r\n  padding-left: ($unit-8 + $control-padding-x);\r\n\r\n  .form-icon {\r\n    background: $gray-color-light;\r\n    background-clip: padding-box;\r\n    border-radius: $unit-2 + $border-width;\r\n    height: $unit-4 + $border-width * 2;\r\n    left: 0;\r\n    top: ($control-size-sm - $unit-4) / 2 - $border-width;\r\n    width: $unit-8;\r\n    &::before {\r\n      @include control-transition();\r\n      background: $bg-color-light;\r\n      border-radius: 50%;\r\n      content: \"\";\r\n      display: block;\r\n      height: $unit-4;\r\n      left: 0;\r\n      position: absolute;\r\n      top: 0;\r\n      width: $unit-4;\r\n    }\r\n  }\r\n\r\n  input {\r\n    &:checked + .form-icon {\r\n      &::before {\r\n        left: 14px;\r\n      }\r\n    }\r\n    &:active + .form-icon {\r\n      &::before {\r\n        background: $bg-color;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Form element: Input groups\r\n.input-group {\r\n  display: flex;\r\n\r\n  .input-group-addon {\r\n    background: $bg-color;\r\n    border: $border-width solid $border-color-dark;\r\n    border-radius: $border-radius;\r\n    line-height: $line-height;\r\n    padding: $control-padding-y $control-padding-x;\r\n    white-space: nowrap;\r\n\r\n    &.addon-sm {\r\n      font-size: $font-size-sm;\r\n      padding: $control-padding-y-sm $control-padding-x-sm;\r\n    }\r\n\r\n    &.addon-lg {\r\n      font-size: $font-size-lg;\r\n      padding: $control-padding-y-lg $control-padding-x-lg;\r\n    }\r\n  }\r\n\r\n  .form-input,\r\n  .form-select {\r\n    flex: 1 1 auto;\r\n    width: 1%;\r\n  }\r\n\r\n  .input-group-btn {\r\n    z-index: $zindex-0;\r\n  }\r\n\r\n  .form-input,\r\n  .form-select,\r\n  .input-group-addon,\r\n  .input-group-btn {\r\n    &:first-child:not(:last-child) {\r\n      border-bottom-right-radius: 0;\r\n      border-top-right-radius: 0;\r\n    }\r\n    &:not(:first-child):not(:last-child) {\r\n      border-radius: 0;\r\n      margin-left: -$border-width;\r\n    }\r\n    &:last-child:not(:first-child) {\r\n      border-bottom-left-radius: 0;\r\n      border-top-left-radius: 0;\r\n      margin-left: -$border-width;\r\n    }\r\n    &:focus {\r\n      z-index: $zindex-0 + 1;\r\n    }\r\n  }\r\n\r\n  .form-select {\r\n    width: auto;\r\n  }\r\n\r\n  &.input-inline {\r\n    display: inline-flex;\r\n  }\r\n}\r\n\r\n// Form validation states\r\n.form-input,\r\n.form-select {\r\n  .has-success &,\r\n  &.is-success {\r\n    border-color: $success-color;\r\n    &:focus {\r\n      @include control-shadow($success-color);\r\n    }\r\n  }\r\n\r\n  .has-error &,\r\n  &.is-error {\r\n    border-color: $error-color;\r\n    &:focus {\r\n      @include control-shadow($error-color);\r\n    }\r\n  }\r\n}\r\n\r\n.form-checkbox,\r\n.form-radio,\r\n.form-switch {\r\n  .has-error &,\r\n  &.is-error {\r\n    .form-icon {\r\n      border-color: $error-color;\r\n    }\r\n    \r\n    input {\r\n      &:checked + .form-icon {\r\n        background: $error-color;\r\n        border-color: $error-color;\r\n      }\r\n\r\n      &:focus + .form-icon {\r\n        @include control-shadow($error-color);\r\n        border-color: $error-color;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.form-checkbox {\r\n  .has-error &,\r\n  &.is-error {\r\n    input {\r\n      &:indeterminate + .form-icon {\r\n        background: $error-color;\r\n        border-color: $error-color;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// validation based on :placeholder-shown (Edge doesn't support it yet)\r\n.form-input {\r\n  &:not(:placeholder-shown) {\r\n    &:invalid {\r\n      border-color: $error-color;\r\n      &:focus {\r\n        @include control-shadow($error-color);\r\n      }\r\n\r\n      & + .form-input-hint {\r\n        color: $error-color;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Form disabled and readonly\r\n.form-input,\r\n.form-select {\r\n  &:disabled,\r\n  &.disabled {\r\n    background-color: $bg-color-dark;\r\n    cursor: not-allowed;\r\n    opacity: .5;\r\n  }\r\n}\r\n\r\n.form-input {\r\n  &[readonly] {\r\n    background-color: $bg-color;\r\n  }\r\n}\r\n\r\ninput {\r\n  &:disabled,\r\n  &.disabled {\r\n    & + .form-icon {\r\n      background: $bg-color-dark;\r\n      cursor: not-allowed;\r\n      opacity: .5;\r\n    }\r\n  }\r\n}\r\n\r\n.form-switch {\r\n  input {\r\n    &:disabled,\r\n    &.disabled {\r\n      & + .form-icon::before {\r\n        background: $bg-color-light;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Form horizontal\r\n.form-horizontal {\r\n  padding: $layout-spacing 0;\r\n\r\n  .form-group {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n}\r\n\r\n// Form inline\r\n.form-inline {\r\n  display: inline-block;\r\n}","// Labels\r\n.label {\r\n  @include label-base();\r\n  @include label-variant(lighten($body-font-color, 5%), $bg-color-dark);\r\n  display: inline-block;\r\n\r\n  // Label rounded\r\n  &.label-rounded {\r\n    border-radius: 5rem;\r\n    padding-left: .4rem;\r\n    padding-right: .4rem; \r\n  }\r\n\r\n  // Label colors\r\n  &.label-primary {\r\n    @include label-variant($light-color, $primary-color);\r\n  }\r\n\r\n  &.label-secondary {\r\n    @include label-variant($primary-color, $secondary-color);\r\n  }\r\n\r\n  &.label-success {\r\n    @include label-variant($light-color, $success-color);\r\n  }\r\n\r\n  &.label-warning {\r\n    @include label-variant($light-color, $warning-color);\r\n  }\r\n\r\n  &.label-error {\r\n    @include label-variant($light-color, $error-color);\r\n  }\r\n}\r\n","// Codes\r\ncode {\r\n  @include label-base();\r\n  @include label-variant($code-color, lighten($code-color, 42.5%));\r\n  font-size: 85%;\r\n}\r\n\r\n.code {\r\n  border-radius: $border-radius;\r\n  color: $body-font-color;\r\n  position: relative;\r\n\r\n  &::before {\r\n    color: $gray-color;\r\n    content: attr(data-lang);\r\n    font-size: $font-size-sm;\r\n    position: absolute;\r\n    right: $layout-spacing;\r\n    top: $unit-h;\r\n  }\r\n\r\n  code {\r\n    background: $bg-color;\r\n    color: inherit;\r\n    display: block;\r\n    line-height: 1.5;\r\n    overflow-x: auto;\r\n    padding: 1rem;\r\n    width: 100%;\r\n  }\r\n}\r\n","// Media\r\n// Image responsive\r\n.img-responsive {\r\n  display: block;\r\n  height: auto;\r\n  max-width: 100%;\r\n}\r\n\r\n// object-fit support is coming to Microsoft Edge\r\n// https://developer.microsoft.com/en-us/microsoft-edge/platform/status/objectfitandobjectposition/\r\n.img-fit-cover {\r\n  object-fit: cover;\r\n}\r\n\r\n.img-fit-contain {\r\n  object-fit: contain;\r\n}\r\n\r\n// Video responsive\r\n.video-responsive {\r\n  display: block;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: relative;\r\n  width: 100%;\r\n  &::before {\r\n    content: \"\";\r\n    display: block;\r\n    padding-bottom: 56.25%; // Default ratio 16:9, you can calculate this value by dividing 9 by 16\r\n  }\r\n\r\n  iframe,\r\n  object,\r\n  embed {\r\n    border: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nvideo.video-responsive {\r\n  height: auto;\r\n  max-width: 100%;\r\n\r\n  &::before {\r\n    content: none;\r\n  }\r\n}\r\n\r\n.video-responsive-4-3 {\r\n  &::before {\r\n    padding-bottom: 75%; // Ratio 4:3\r\n  }\r\n}\r\n\r\n.video-responsive-1-1 {\r\n  &::before {\r\n    padding-bottom: 100%; // Ratio 1:1\r\n  }\r\n}\r\n\r\n// Figure\r\n.figure {\r\n  margin: 0 0 $layout-spacing 0;\r\n\r\n  .figure-caption {\r\n    color: $gray-color-dark;\r\n    margin-top: $layout-spacing;\r\n  }\r\n}\r\n","// Layout\r\n.container {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-left: $layout-spacing;\r\n  padding-right: $layout-spacing;\r\n  width: 100%;\r\n  @extend .clearfix;\r\n\r\n  $grid-spacing: ($layout-spacing / ($layout-spacing * 0 + 1)) * $html-font-size;\r\n\r\n  &.grid-xl {\r\n    max-width: $grid-spacing * 2 + $size-xl;\r\n  }\r\n\r\n  &.grid-lg {\r\n    max-width: $grid-spacing * 2 + $size-lg;\r\n  }\r\n\r\n  &.grid-md {\r\n    max-width: $grid-spacing * 2 + $size-md;\r\n  }\r\n\r\n  &.grid-sm {\r\n    max-width: $grid-spacing * 2 + $size-sm;\r\n  }\r\n\r\n  &.grid-xs {\r\n    max-width: $grid-spacing * 2 + $size-xs;\r\n  }\r\n}\r\n\r\n// Responsive breakpoint system\r\n.show-xs,\r\n.show-sm,\r\n.show-md,\r\n.show-lg,\r\n.show-xl {\r\n  display: none !important;\r\n}\r\n\r\n// Responsive grid system\r\n.columns {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-left: -$layout-spacing;\r\n  margin-right: -$layout-spacing;\r\n\r\n  &.col-gapless {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n\r\n    & > .column {\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n    }\r\n  }\r\n  &.col-oneline {\r\n    flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n  }\r\n}\r\n.column {\r\n  flex: 1;\r\n  max-width: 100%;\r\n  padding-left: $layout-spacing;\r\n  padding-right: $layout-spacing;\r\n\r\n  &.col-12,\r\n  &.col-11,\r\n  &.col-10,\r\n  &.col-9,\r\n  &.col-8,\r\n  &.col-7,\r\n  &.col-6,\r\n  &.col-5,\r\n  &.col-4,\r\n  &.col-3,\r\n  &.col-2,\r\n  &.col-1 {\r\n    flex: none;\r\n  }\r\n}\r\n.col-12 {\r\n  width: 100%;\r\n}\r\n.col-11 {\r\n  width: 91.66666667%;\r\n}\r\n.col-10 {\r\n  width: 83.33333333%;\r\n}\r\n.col-9 {\r\n  width: 75%;\r\n}\r\n.col-8 {\r\n  width: 66.66666667%;\r\n}\r\n.col-7 {\r\n  width: 58.33333333%;\r\n}\r\n.col-6 {\r\n  width: 50%;\r\n}\r\n.col-5 {\r\n  width: 41.66666667%;\r\n}\r\n.col-4 {\r\n  width: 33.33333333%;\r\n}\r\n.col-3 {\r\n  width: 25%;\r\n}\r\n.col-2 {\r\n  width: 16.66666667%;\r\n}\r\n.col-1 {\r\n  width: 8.33333333%;\r\n}\r\n.col-auto {\r\n  flex: 0 0 auto;\r\n  max-width: none;\r\n  width: auto;\r\n}\r\n.col-mx-auto {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.col-ml-auto {\r\n  margin-left: auto;\r\n}\r\n.col-mr-auto {\r\n  margin-right: auto;\r\n}\r\n@media (max-width: $size-xl) {\r\n  .col-xl-12,\r\n  .col-xl-11,\r\n  .col-xl-10,\r\n  .col-xl-9,\r\n  .col-xl-8,\r\n  .col-xl-7,\r\n  .col-xl-6,\r\n  .col-xl-5,\r\n  .col-xl-4,\r\n  .col-xl-3,\r\n  .col-xl-2,\r\n  .col-xl-1 {\r\n    flex: none;\r\n  }\r\n  .col-xl-12 {\r\n    width: 100%;\r\n  }\r\n  .col-xl-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .col-xl-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .col-xl-9 {\r\n    width: 75%;\r\n  }\r\n  .col-xl-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .col-xl-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .col-xl-6 {\r\n    width: 50%;\r\n  }\r\n  .col-xl-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .col-xl-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .col-xl-3 {\r\n    width: 25%;\r\n  }\r\n  .col-xl-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .col-xl-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .hide-xl {\r\n    display: none !important;\r\n  }\r\n  .show-xl {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (max-width: $size-lg) {\r\n  .col-lg-12,\r\n  .col-lg-11,\r\n  .col-lg-10,\r\n  .col-lg-9,\r\n  .col-lg-8,\r\n  .col-lg-7,\r\n  .col-lg-6,\r\n  .col-lg-5,\r\n  .col-lg-4,\r\n  .col-lg-3,\r\n  .col-lg-2,\r\n  .col-lg-1 {\r\n    flex: none;\r\n  }\r\n  .col-lg-12 {\r\n    width: 100%;\r\n  }\r\n  .col-lg-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .col-lg-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .col-lg-9 {\r\n    width: 75%;\r\n  }\r\n  .col-lg-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .col-lg-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .col-lg-6 {\r\n    width: 50%;\r\n  }\r\n  .col-lg-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .col-lg-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .col-lg-3 {\r\n    width: 25%;\r\n  }\r\n  .col-lg-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .col-lg-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .hide-lg {\r\n    display: none !important;\r\n  }\r\n  .show-lg {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (max-width: $size-md) {\r\n  .col-md-12,\r\n  .col-md-11,\r\n  .col-md-10,\r\n  .col-md-9,\r\n  .col-md-8,\r\n  .col-md-7,\r\n  .col-md-6,\r\n  .col-md-5,\r\n  .col-md-4,\r\n  .col-md-3,\r\n  .col-md-2,\r\n  .col-md-1 {\r\n    flex: none;\r\n  }\r\n  .col-md-12 {\r\n    width: 100%;\r\n  }\r\n  .col-md-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .col-md-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .col-md-9 {\r\n    width: 75%;\r\n  }\r\n  .col-md-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .col-md-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .col-md-6 {\r\n    width: 50%;\r\n  }\r\n  .col-md-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .col-md-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .col-md-3 {\r\n    width: 25%;\r\n  }\r\n  .col-md-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .col-md-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .hide-md {\r\n    display: none !important;\r\n  }\r\n  .show-md {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (max-width: $size-sm) {\r\n  .col-sm-12,\r\n  .col-sm-11,\r\n  .col-sm-10,\r\n  .col-sm-9,\r\n  .col-sm-8,\r\n  .col-sm-7,\r\n  .col-sm-6,\r\n  .col-sm-5,\r\n  .col-sm-4,\r\n  .col-sm-3,\r\n  .col-sm-2,\r\n  .col-sm-1 {\r\n    flex: none;\r\n  }\r\n  .col-sm-12 {\r\n    width: 100%;\r\n  }\r\n  .col-sm-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .col-sm-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .col-sm-9 {\r\n    width: 75%;\r\n  }\r\n  .col-sm-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .col-sm-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .col-sm-6 {\r\n    width: 50%;\r\n  }\r\n  .col-sm-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .col-sm-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .col-sm-3 {\r\n    width: 25%;\r\n  }\r\n  .col-sm-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .col-sm-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .hide-sm {\r\n    display: none !important;\r\n  }\r\n  .show-sm {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (max-width: $size-xs) {\r\n  .col-xs-12,\r\n  .col-xs-11,\r\n  .col-xs-10,\r\n  .col-xs-9,\r\n  .col-xs-8,\r\n  .col-xs-7,\r\n  .col-xs-6,\r\n  .col-xs-5,\r\n  .col-xs-4,\r\n  .col-xs-3,\r\n  .col-xs-2,\r\n  .col-xs-1 {\r\n    flex: none;\r\n  }\r\n  .col-xs-12 {\r\n    width: 100%;\r\n  }\r\n  .col-xs-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .col-xs-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .col-xs-9 {\r\n    width: 75%;\r\n  }\r\n  .col-xs-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .col-xs-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .col-xs-6 {\r\n    width: 50%;\r\n  }\r\n  .col-xs-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .col-xs-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .col-xs-3 {\r\n    width: 25%;\r\n  }\r\n  .col-xs-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .col-xs-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .hide-xs {\r\n    display: none !important;\r\n  }\r\n  .show-xs {\r\n    display: block !important;\r\n  }\r\n}\r\n","// Avatars\r\n.avatar {\r\n  @include avatar-base();\r\n  background: $primary-color;\r\n  border-radius: 50%;\r\n  color: rgba($light-color, .85);\r\n  display: inline-block;\r\n  font-weight: 300;\r\n  line-height: 1.25;\r\n  margin: 0;\r\n  position: relative;\r\n  vertical-align: middle;\r\n\r\n  &.avatar-xs {\r\n    @include avatar-base($unit-4);\r\n  }\r\n  &.avatar-sm {\r\n    @include avatar-base($unit-6);\r\n  }\r\n  &.avatar-lg {\r\n    @include avatar-base($unit-12);\r\n  }\r\n  &.avatar-xl {\r\n    @include avatar-base($unit-16);\r\n  }\r\n\r\n  img {\r\n    border-radius: 50%;\r\n    height: 100%;\r\n    position: relative;\r\n    width: 100%;\r\n    z-index: $zindex-0;\r\n  }\r\n\r\n  .avatar-icon,\r\n  .avatar-presence {\r\n    background: $bg-color-light;\r\n    bottom: 14.64%;\r\n    height: 50%;\r\n    padding: $border-width-lg;\r\n    position: absolute;\r\n    right: 14.64%;\r\n    transform: translate(50%, 50%);\r\n    width: 50%;\r\n    z-index: $zindex-0 + 1;\r\n  }\r\n\r\n  .avatar-presence {\r\n    background: $gray-color;\r\n    box-shadow: 0 0 0 $border-width-lg $light-color;\r\n    border-radius: 50%;\r\n    height: .5em;\r\n    width: .5em;\r\n\r\n    &.online {\r\n      background: $success-color;\r\n    }\r\n\r\n    &.busy {\r\n      background: $error-color;\r\n    }\r\n\r\n    &.away {\r\n      background: $warning-color;\r\n    }\r\n  }\r\n\r\n  &[data-initial]::before {\r\n    color: currentColor;\r\n    content: attr(data-initial);\r\n    left: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: $zindex-0;\r\n  }\r\n}","// Avatar mixin\r\n@mixin avatar-base($size: $unit-8) {\r\n  font-size: $size / 2;\r\n  height: $size;\r\n  width: $size;\r\n}\r\n","// Badges\r\n.badge {\r\n  position: relative;\r\n  white-space: nowrap;\r\n\r\n  &[data-badge],\r\n  &:not([data-badge]) {\r\n    &::after {\r\n      background: $primary-color;\r\n      background-clip: padding-box;\r\n      border-radius: .5rem;\r\n      box-shadow: 0 0 0 .1rem $bg-color-light;\r\n      color: $light-color;\r\n      content: attr(data-badge);\r\n      display: inline-block;\r\n      transform: translate(-.05rem, -.5rem);\r\n    }\r\n  }\r\n  &[data-badge] {\r\n    &::after {\r\n      font-size: $font-size-sm;\r\n      height: .9rem;\r\n      line-height: 1;\r\n      min-width: .9rem;\r\n      padding: .1rem .2rem;\r\n      text-align: center;\r\n      white-space: nowrap;\r\n    }\r\n  }\r\n  &:not([data-badge]),\r\n  &[data-badge=\"\"] {\r\n    &::after {\r\n      height: 6px;\r\n      min-width: 6px;\r\n      padding: 0;\r\n      width: 6px;\r\n    }\r\n  }\r\n\r\n  // Badges for Buttons\r\n  &.btn {\r\n    &::after {\r\n      position: absolute;\r\n      top: 0;\r\n      right: 0;\r\n      transform: translate(50%, -50%);\r\n    }\r\n  }\r\n\r\n  // Badges for Avatars\r\n  &.avatar {\r\n    &::after {\r\n      position: absolute;\r\n      top: 14.64%;\r\n      right: 14.64%;\r\n      transform: translate(50%, -50%);\r\n      z-index: $zindex-1;\r\n    }\r\n  }\r\n}\r\n","// Cards\r\n.card {\r\n  background: $bg-color-light;\r\n  border: $border-width solid $border-color;\r\n  border-radius: $border-radius;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  .card-header,\r\n  .card-body,\r\n  .card-footer {\r\n    padding: $layout-spacing-lg;\r\n    padding-bottom: 0;\r\n\r\n    &:last-child {\r\n      padding-bottom: $layout-spacing-lg;\r\n    }\r\n  }\r\n\r\n  .card-body {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .card-image {\r\n    padding-top: $layout-spacing-lg;\r\n\r\n    &:first-child {\r\n      padding-top: 0;\r\n\r\n      img {\r\n        border-top-left-radius: $border-radius;\r\n        border-top-right-radius: $border-radius;\r\n      }\r\n    }\r\n\r\n    &:last-child {\r\n      img {\r\n        border-bottom-left-radius: $border-radius;\r\n        border-bottom-right-radius: $border-radius;\r\n      }\r\n    }\r\n  }\r\n}\r\n","// Chips\r\n.chip {\r\n  align-items: center;\r\n  background: $bg-color-dark;\r\n  border-radius: 5rem;\r\n  color: $gray-color-dark;\r\n  display: inline-flex;\r\n  font-size: 90%;\r\n  height: $unit-6;\r\n  line-height: $unit-4;\r\n  margin: $unit-h;\r\n  max-width: 100%;\r\n  padding: $unit-1 $unit-2;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n\r\n  &.active {\r\n    background: $primary-color;\r\n    color: $light-color;\r\n  }\r\n\r\n  .avatar {\r\n    margin-left: -$unit-2;\r\n    margin-right: $unit-1;\r\n  }\r\n\r\n  .btn-clear {\r\n    transform: scale(.75);\r\n  }\r\n}\r\n","// Variables and mixins\r\n@import \"variables\";\r\n@import \"mixins\";\r\n\r\n/*! Spectre.css Icons v#{$version} | MIT License | github.com/picturepan2/spectre */\r\n// Icons\r\n@import \"icons/icons-core\";\r\n@import \"icons/icons-navigation\";\r\n@import \"icons/icons-action\";\r\n@import \"icons/icons-object\";\r\n","// Icon variables\r\n$icon-border-width: $border-width-lg;\r\n$icon-prefix: \"icon\";\r\n\r\n// Icon base style\r\n.#{$icon-prefix} {\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  font-size: inherit;\r\n  font-style: normal;\r\n  height: 1em;\r\n  position: relative;\r\n  text-indent: -9999px;\r\n  vertical-align: middle;\r\n  width: 1em;\r\n  &::before,\r\n  &::after {\r\n    display: block;\r\n    left: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n\r\n  // Icon sizes\r\n  &.icon-2x {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  &.icon-3x {\r\n    font-size: 2.4rem;\r\n  }\r\n\r\n  &.icon-4x {\r\n    font-size: 3.2rem;\r\n  }\r\n}\r\n\r\n// Component icon support\r\n.accordion,\r\n.btn,\r\n.toast,\r\n.menu {\r\n  .#{$icon-prefix} {\r\n    vertical-align: -10%;\r\n  }\r\n}\r\n\r\n.btn-lg {\r\n  .#{$icon-prefix} {\r\n    vertical-align: -15%;\r\n  }\r\n}\r\n","// Icon arrows\r\n.icon-arrow-down,\r\n.icon-arrow-left,\r\n.icon-arrow-right,\r\n.icon-arrow-up,\r\n.icon-downward,\r\n.icon-back,\r\n.icon-forward,\r\n.icon-upward {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom: 0;\r\n    border-right: 0;\r\n    content: \"\";\r\n    height: .65em;\r\n    width: .65em;\r\n  }\r\n}\r\n\r\n.icon-arrow-down {\r\n  &::before {\r\n    transform: translate(-50%, -75%) rotate(225deg);\r\n  }\r\n}\r\n\r\n.icon-arrow-left {\r\n  &::before {\r\n    transform: translate(-25%, -50%) rotate(-45deg);\r\n  }\r\n}\r\n\r\n.icon-arrow-right {\r\n  &::before {\r\n    transform: translate(-75%, -50%) rotate(135deg);\r\n  }\r\n}\r\n\r\n.icon-arrow-up {\r\n  &::before {\r\n    transform: translate(-50%, -25%) rotate(45deg);\r\n  }\r\n}\r\n\r\n.icon-back,\r\n.icon-forward {\r\n  &::after {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: $icon-border-width;\r\n    width: .8em;\r\n  }\r\n}\r\n\r\n.icon-downward,\r\n.icon-upward {\r\n  &::after {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: .8em;\r\n    width: $icon-border-width;\r\n  }\r\n}\r\n\r\n.icon-back {\r\n  &::after {\r\n    left: 55%;\r\n  }\r\n  &::before {\r\n    transform: translate(-50%, -50%) rotate(-45deg);\r\n  }\r\n}\r\n\r\n.icon-downward {\r\n  &::after {\r\n    top: 45%;\r\n  }\r\n  &::before {\r\n    transform: translate(-50%, -50%) rotate(-135deg);\r\n  }\r\n}\r\n\r\n.icon-forward {\r\n  &::after {\r\n    left: 45%;\r\n  }\r\n  &::before {\r\n    transform: translate(-50%, -50%) rotate(135deg);\r\n  }\r\n}\r\n\r\n.icon-upward {\r\n  &::after {\r\n    top: 55%;\r\n  }\r\n  &::before {\r\n    transform: translate(-50%, -50%) rotate(45deg);\r\n  }\r\n}\r\n\r\n// Icon caret\r\n.icon-caret {\r\n  &::before {\r\n    border-top: .3em solid currentColor;\r\n    border-right: .3em solid transparent;\r\n    border-left: .3em solid transparent;\r\n    content: \"\";\r\n    height: 0;\r\n    transform: translate(-50%, -25%);\r\n    width: 0;\r\n  }\r\n}\r\n\r\n// Icon menu\r\n.icon-menu {\r\n  &::before {\r\n    background: currentColor;\r\n    box-shadow: 0 -.35em, 0 .35em;\r\n    content: \"\";\r\n    height: $icon-border-width;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n// Icon apps\r\n.icon-apps {\r\n  &::before {\r\n    background: currentColor;\r\n    box-shadow: -.35em -.35em, -.35em 0, -.35em .35em, 0 -.35em, 0 .35em, .35em -.35em, .35em 0, .35em .35em;\r\n    content: \"\";\r\n    height: 3px;\r\n    width: 3px;\r\n  }\r\n}\r\n","\r\n// Icon resize\r\n.icon-resize-horiz,\r\n.icon-resize-vert {\r\n  &::before,\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom: 0;\r\n    border-right: 0;\r\n    content: \"\";\r\n    height: .45em;\r\n    width: .45em;\r\n  }\r\n  &::before {\r\n    transform: translate(-50%, -90%) rotate(45deg);\r\n  }\r\n  &::after {\r\n    transform: translate(-50%, -10%) rotate(225deg);\r\n  }\r\n}\r\n\r\n.icon-resize-horiz {\r\n  &::before {\r\n    transform: translate(-90%, -50%) rotate(-45deg);\r\n  }\r\n  &::after {\r\n    transform: translate(-10%, -50%) rotate(135deg);\r\n  }\r\n}\r\n\r\n// Icon more\r\n.icon-more-horiz,\r\n.icon-more-vert {\r\n  &::before {\r\n    background: currentColor;\r\n    box-shadow: -.4em 0, .4em 0;\r\n    border-radius: 50%;\r\n    content: \"\";\r\n    height: 3px;\r\n    width: 3px;\r\n  }\r\n}\r\n\r\n.icon-more-vert {\r\n  &::before {\r\n    box-shadow: 0 -.4em, 0 .4em;\r\n  }\r\n}\r\n\r\n// Icon plus, minus, cross\r\n.icon-plus,\r\n.icon-minus,\r\n.icon-cross {\r\n  &::before {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: $icon-border-width;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.icon-plus,\r\n.icon-cross {\r\n  &::after {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: 100%;\r\n    width: $icon-border-width;\r\n  }\r\n}\r\n\r\n.icon-cross {\r\n  &::before {\r\n    width: 100%;\r\n  }\r\n  &::after {\r\n    height: 100%;\r\n  }\r\n  &::before,\r\n  &::after {\r\n    transform: translate(-50%, -50%) rotate(45deg);\r\n  }\r\n}\r\n\r\n// Icon check\r\n.icon-check {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-right: 0;\r\n    border-top: 0;\r\n    content: \"\";\r\n    height: .5em;\r\n    width: .9em;\r\n    transform: translate(-50%, -75%) rotate(-45deg);\r\n  }\r\n}\r\n\r\n// Icon stop\r\n.icon-stop {\r\n  border: $icon-border-width solid currentColor;\r\n  border-radius: 50%;\r\n  &::before {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: $icon-border-width;\r\n    transform: translate(-50%, -50%) rotate(45deg);\r\n    width: 1em;\r\n  }\r\n}\r\n\r\n// Icon shutdown\r\n.icon-shutdown {\r\n  border: $icon-border-width solid currentColor;\r\n  border-radius: 50%;\r\n  border-top-color: transparent;\r\n  &::before {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: .5em;\r\n    top: .1em;\r\n    width: $icon-border-width;\r\n  }\r\n}\r\n\r\n// Icon refresh\r\n.icon-refresh {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: 50%;\r\n    border-right-color: transparent;\r\n    content: \"\";\r\n    height: 1em;\r\n    width: 1em;\r\n  }\r\n  &::after {\r\n    border: .2em solid currentColor;\r\n    border-top-color: transparent;\r\n    border-left-color: transparent;\r\n    content: \"\";\r\n    height: 0;\r\n    left: 80%;\r\n    top: 20%;\r\n    width: 0;\r\n  }\r\n}\r\n\r\n// Icon search\r\n.icon-search {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: 50%;\r\n    content: \"\";\r\n    height: .75em;\r\n    left: 5%;\r\n    top: 5%;\r\n    transform: translate(0, 0) rotate(45deg);\r\n    width: .75em;\r\n  }\r\n  &::after {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: $icon-border-width;\r\n    left: 80%;\r\n    top: 80%;\r\n    transform: translate(-50%, -50%) rotate(45deg);\r\n    width: .4em;\r\n  }\r\n}\r\n\r\n// Icon edit\r\n.icon-edit {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    content: \"\";\r\n    height: .4em;\r\n    transform: translate(-40%, -60%) rotate(-45deg);\r\n    width: .85em;\r\n  }\r\n  &::after {\r\n    border: .15em solid currentColor;\r\n    border-top-color: transparent;\r\n    border-right-color: transparent;\r\n    content: \"\";\r\n    height: 0;\r\n    left: 5%;\r\n    top: 95%;\r\n    transform: translate(0, -100%);\r\n    width: 0;\r\n  }\r\n}\r\n\r\n// Icon delete\r\n.icon-delete {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom-left-radius: $border-radius;\r\n    border-bottom-right-radius: $border-radius;\r\n    border-top: 0;\r\n    content: \"\";\r\n    height: .75em;\r\n    top: 60%;\r\n    width: .75em;\r\n  }\r\n  &::after {\r\n    background: currentColor;\r\n    box-shadow: -.25em .2em, .25em .2em;\r\n    content: \"\";\r\n    height: $icon-border-width;\r\n    top: $icon-border-width/2;\r\n    width: .5em;\r\n  }\r\n}\r\n\r\n// Icon share\r\n.icon-share {\r\n  border: $icon-border-width solid currentColor;\r\n  border-radius: $border-radius;\r\n  border-right: 0;\r\n  border-top: 0;\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-left: 0;\r\n    border-top: 0;\r\n    content: \"\";\r\n    height: .4em;\r\n    left: 100%;\r\n    top: .25em;\r\n    transform: translate(-125%, -50%) rotate(-45deg);\r\n    width: .4em;\r\n  }\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom: 0;\r\n    border-right: 0;\r\n    border-radius: 75% 0;\r\n    content: \"\";\r\n    height: .5em;\r\n    width: .6em;\r\n  }\r\n}\r\n\r\n// Icon flag\r\n.icon-flag {\r\n  &::before {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: 1em;\r\n    left: 15%;\r\n    width: $icon-border-width;\r\n  }\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom-right-radius: $border-radius;\r\n    border-left: 0;\r\n    border-top-right-radius: $border-radius;\r\n    content: \"\";\r\n    height: .65em;\r\n    top: 35%;\r\n    left: 60%;\r\n    width: .8em;\r\n  }\r\n}\r\n\r\n// Icon bookmark\r\n.icon-bookmark {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom: 0;\r\n    border-top-left-radius: $border-radius;\r\n    border-top-right-radius: $border-radius;\r\n    content: \"\";\r\n    height: .9em;\r\n    width: .8em;\r\n  }\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom: 0;\r\n    border-left: 0;\r\n    border-radius: $border-radius;\r\n    content: \"\";\r\n    height: .5em;\r\n    transform: translate(-50%, 35%) rotate(-45deg) skew(15deg, 15deg);\r\n    width: .5em;\r\n  }\r\n}\r\n\r\n// Icon download & upload\r\n.icon-download,\r\n.icon-upload {\r\n  border-bottom: $icon-border-width solid currentColor;\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom: 0;\r\n    border-right: 0;\r\n    content: \"\";\r\n    height: .5em;\r\n    width: .5em;\r\n    transform: translate(-50%, -60%) rotate(-135deg);\r\n  }\r\n  &::after {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: .6em;\r\n    top: 40%;\r\n    width: $icon-border-width;\r\n  }\r\n}\r\n\r\n.icon-upload {\r\n  &::before {\r\n    transform: translate(-50%, -60%) rotate(45deg);\r\n  }\r\n  &::after {\r\n    top: 50%;\r\n  }\r\n}\r\n","// Icon time\r\n.icon-time {\r\n  border: $icon-border-width solid currentColor;\r\n  border-radius: 50%;\r\n  &::before {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: .4em;\r\n    transform: translate(-50%, -75%);\r\n    width: $icon-border-width;\r\n  }\r\n  &::after {\r\n    background: currentColor;\r\n    content: \"\";\r\n    height: .3em;\r\n    transform: translate(-50%, -75%) rotate(90deg);\r\n    transform-origin: 50% 90%;\r\n    width: $icon-border-width;\r\n  }\r\n}\r\n\r\n// Icon mail\r\n.icon-mail {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: $border-radius;\r\n    content: \"\";\r\n    height: .8em;\r\n    width: 1em;\r\n  }\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-right: 0;\r\n    border-top: 0;\r\n    content: \"\";\r\n    height: .5em;\r\n    transform: translate(-50%, -90%) rotate(-45deg) skew(10deg, 10deg);\r\n    width: .5em;\r\n  }\r\n}\r\n\r\n// Icon people\r\n.icon-people {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: 50%;\r\n    content: \"\";\r\n    height: .45em;\r\n    top: 25%;\r\n    width: .45em;\r\n  }\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: 50% 50% 0 0;\r\n    content: \"\";\r\n    height: .4em;\r\n    top: 75%;\r\n    width: .9em;\r\n  }\r\n}\r\n\r\n// Icon message\r\n.icon-message {\r\n  border: $icon-border-width solid currentColor;\r\n  border-bottom: 0;\r\n  border-radius: $border-radius;\r\n  border-right: 0;\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom-right-radius: $border-radius;\r\n    border-left: 0;\r\n    border-top: 0;\r\n    content: \"\";\r\n    height: .8em;\r\n    left: 65%;\r\n    top: 40%;\r\n    width: .7em;\r\n  }\r\n  &::after {\r\n    background: currentColor;\r\n    border-radius: $border-radius;\r\n    content: \"\";\r\n    height: .3em;\r\n    left: 10%;\r\n    top: 100%;\r\n    transform: translate(0, -90%) rotate(45deg);\r\n    width: $icon-border-width;\r\n  }\r\n}\r\n\r\n// Icon photo\r\n.icon-photo {\r\n  border: $icon-border-width solid currentColor;\r\n  border-radius: $border-radius;\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: 50%;\r\n    content: \"\";\r\n    height: .25em;\r\n    left: 35%;\r\n    top: 35%;\r\n    width: .25em;\r\n  }\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom: 0;\r\n    border-left: 0;\r\n    content: \"\";\r\n    height: .5em;\r\n    left: 60%;\r\n    transform: translate(-50%, 25%) rotate(-45deg);\r\n    width: .5em;\r\n  }\r\n}\r\n\r\n// Icon link\r\n.icon-link {\r\n  &::before,\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: 5em 0 0 5em;\r\n    border-right: 0;\r\n    content: \"\";\r\n    height: .5em;\r\n    width: .75em;\r\n  }\r\n  &::before {\r\n    transform: translate(-70%, -45%) rotate(-45deg);\r\n  }\r\n  &::after {\r\n    transform: translate(-30%, -55%) rotate(135deg);\r\n  }\r\n}\r\n\r\n// Icon location\r\n.icon-location {\r\n  &::before {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: 50% 50% 50% 0;\r\n    content: \"\";\r\n    height: .8em;\r\n    transform: translate(-50%, -60%) rotate(-45deg);\r\n    width: .8em;\r\n  }\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-radius: 50%;\r\n    content: \"\";\r\n    height: .2em;\r\n    transform: translate(-50%, -80%);\r\n    width: .2em;\r\n  }\r\n}\r\n\r\n// Icon emoji\r\n.icon-emoji {\r\n  border: $icon-border-width solid currentColor;\r\n  border-radius: 50%;\r\n  &::before {\r\n    border-radius: 50%;\r\n    box-shadow: -.17em -.15em, .17em -.15em;\r\n    content: \"\";\r\n    height: .1em;\r\n    width: .1em;\r\n  }\r\n  &::after {\r\n    border: $icon-border-width solid currentColor;\r\n    border-bottom-color: transparent;\r\n    border-radius: 50%;\r\n    border-right-color: transparent;\r\n    content: \"\";\r\n    height: .5em;\r\n    transform: translate(-50%, -40%) rotate(-135deg);\r\n    width: .5em;\r\n  }\r\n}\r\n","// Animations\r\n@keyframes loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes slide-down {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-$unit-8);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n","// Background color utility mixin\r\n@mixin bg-color-variant($name: \".bg-primary\", $color: $primary-color) {\r\n  #{$name} {\r\n    background: $color;\r\n\r\n    @if (lightness($color) < 60) {\r\n      color: $light-color;\r\n    }\r\n  }\r\n}\r\n\r\n// Text color utility mixin\r\n@mixin text-color-variant($name: \".text-primary\", $color: $primary-color) {\r\n  #{$name} {\r\n    color: $color;\r\n  }\r\n\r\n  a#{$name} {\r\n    &:focus,\r\n    &:hover {\r\n      color: darken($color, 5%);\r\n    }\r\n    &:visited {\r\n      color: lighten($color, 5%);\r\n    }\r\n  }\r\n}\r\n","// Cursors\r\n.c-hand {\r\n  cursor: pointer;\r\n}\r\n\r\n.c-move {\r\n  cursor: move;\r\n}\r\n\r\n.c-zoom-in {\r\n  cursor: zoom-in;\r\n}\r\n\r\n.c-zoom-out {\r\n  cursor: zoom-out;\r\n}\r\n\r\n.c-not-allowed {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.c-auto {\r\n  cursor: auto;\r\n}\r\n","// Display\r\n.d-block {\r\n  display: block;\r\n}\r\n.d-inline {\r\n  display: inline;\r\n}\r\n.d-inline-block {\r\n  display: inline-block;\r\n}\r\n.d-flex {\r\n  display: flex;\r\n}\r\n.d-inline-flex {\r\n  display: inline-flex;\r\n}\r\n.d-none,\r\n.d-hide {\r\n  display: none !important;\r\n}\r\n.d-visible {\r\n  visibility: visible;\r\n}\r\n.d-invisible {\r\n  visibility: hidden;\r\n}\r\n.text-hide {\r\n  background: transparent;\r\n  border: 0;\r\n  color: transparent;\r\n  font-size: 0;\r\n  line-height: 0;\r\n  text-shadow: none;\r\n}\r\n.text-assistive {\r\n  border: 0;\r\n  clip: rect(0,0,0,0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n","// Divider\r\n.divider,\r\n.divider-vert {\r\n  display: block;\r\n  position: relative;\r\n\r\n  &[data-content]::after {\r\n    background: $bg-color-light;\r\n    color: $gray-color;\r\n    content: attr(data-content);\r\n    display: inline-block;\r\n    font-size: $font-size-sm;\r\n    padding: 0 $unit-2;\r\n    transform: translateY(-$font-size-sm + $border-width);\r\n  }\r\n}\r\n\r\n.divider {\r\n  border-top: $border-width solid $border-color;\r\n  height: $border-width;\r\n  margin: $unit-2 0;\r\n\r\n  &[data-content] {\r\n    margin: $unit-4 0;\r\n  }\r\n}\r\n\r\n.divider-vert {\r\n  display: block;\r\n  padding: $unit-4;\r\n\r\n  &::before {\r\n    border-left: $border-width solid $border-color;\r\n    bottom: $unit-2;\r\n    content: \"\";\r\n    display: block;\r\n    left: 50%;\r\n    position: absolute;\r\n    top: $unit-2;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &[data-content]::after {\r\n    left: 50%;\r\n    padding: $unit-1 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n}\r\n","// Loading\r\n.loading {\r\n  color: transparent !important;\r\n  min-height: $unit-4;\r\n  pointer-events: none;\r\n  position: relative;\r\n  &::after {\r\n    animation: loading 500ms infinite linear;\r\n    border: $border-width-lg solid $primary-color;\r\n    border-radius: 50%;\r\n    border-right-color: transparent;\r\n    border-top-color: transparent;\r\n    content: \"\";\r\n    display: block;\r\n    height: $unit-4;\r\n    left: 50%;\r\n    margin-left: -$unit-2;\r\n    margin-top: -$unit-2;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: $unit-4;\r\n    z-index: $zindex-0;\r\n  }\r\n\r\n  &.loading-lg {\r\n    min-height: $unit-10;\r\n    &::after {\r\n      height: $unit-8;\r\n      margin-left: -$unit-4;\r\n      margin-top: -$unit-4;\r\n      width: $unit-8;\r\n    }\r\n  }\r\n}\r\n","// Clearfix mixin\r\n@mixin clearfix() {\r\n  &::after {\r\n    clear: both;\r\n    content: \"\";\r\n    display: table;\r\n  }\r\n}\r\n","// Position\r\n.clearfix {\r\n  @include clearfix();\r\n}\r\n\r\n.float-left {\r\n  float: left !important;\r\n}\r\n\r\n.float-right {\r\n  float: right !important;\r\n}\r\n\r\n.relative {\r\n  position: relative !important;\r\n}\r\n\r\n.absolute {\r\n  position: absolute !important;\r\n}\r\n\r\n.fixed {\r\n  position: fixed !important;\r\n}\r\n\r\n.centered {\r\n  display: block;\r\n  float: none;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.flex-centered {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n// Spacing\r\n@include margin-variant(0, 0);\r\n\r\n@include margin-variant(1, $unit-1);\r\n\r\n@include margin-variant(2, $unit-2);\r\n\r\n@include margin-variant(3, $unit-3);\r\n\r\n@include margin-variant(4, $unit-4);\r\n\r\n@include margin-variant(5, $unit-5);\r\n\r\n@include padding-variant(0, 0);\r\n\r\n@include padding-variant(1, $unit-1);\r\n\r\n@include padding-variant(2, $unit-2);\r\n\r\n@include padding-variant(3, $unit-3);\r\n\r\n@include padding-variant(4, $unit-4);\r\n\r\n@include padding-variant(5, $unit-5);\r\n","// Margin utility mixin\r\n@mixin margin-variant($id: 1, $size: $unit-1) {\r\n  .m-#{$id} {\r\n    margin: $size !important;\r\n  }\r\n\r\n  .mb-#{$id} {\r\n    margin-bottom: $size !important;\r\n  }\r\n\r\n  .ml-#{$id} {\r\n    margin-left: $size !important;\r\n  }\r\n\r\n  .mr-#{$id} {\r\n    margin-right: $size !important;\r\n  }\r\n\r\n  .mt-#{$id} {\r\n    margin-top: $size !important;\r\n  }\r\n\r\n  .mx-#{$id} {\r\n    margin-left: $size !important;\r\n    margin-right: $size !important;\r\n  }\r\n\r\n  .my-#{$id} {\r\n    margin-bottom: $size !important;\r\n    margin-top: $size !important;\r\n  }\r\n}\r\n\r\n// Padding utility mixin\r\n@mixin padding-variant($id: 1, $size: $unit-1) {\r\n  .p-#{$id} {\r\n    padding: $size !important;\r\n  }\r\n\r\n  .pb-#{$id} {\r\n    padding-bottom: $size !important;\r\n  }\r\n\r\n  .pl-#{$id} {\r\n    padding-left: $size !important;\r\n  }\r\n\r\n  .pr-#{$id} {\r\n    padding-right: $size !important;\r\n  }\r\n\r\n  .pt-#{$id} {\r\n    padding-top: $size !important;\r\n  }\r\n\r\n  .px-#{$id} {\r\n    padding-left: $size !important;\r\n    padding-right: $size !important;\r\n  }\r\n  \r\n  .py-#{$id} {\r\n    padding-bottom: $size !important;\r\n    padding-top: $size !important;\r\n  }\r\n}\r\n","// Shapes\r\n.s-rounded {\r\n  border-radius: $border-radius;\r\n}\r\n\r\n.s-circle {\r\n  border-radius: 50%;\r\n}","// Text\r\n// Text alignment utilities\r\n.text-left {\r\n  text-align: left;\r\n}\r\n\r\n.text-right {\r\n  text-align: right;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-justify {\r\n  text-align: justify;\r\n}\r\n\r\n// Text transform utilities\r\n.text-lowercase {\r\n  text-transform: lowercase;\r\n}\r\n\r\n.text-uppercase {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.text-capitalize {\r\n  text-transform: capitalize;\r\n}\r\n\r\n// Text style utilities\r\n.text-normal {\r\n  font-weight: normal;\r\n}\r\n\r\n.text-bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.text-italic {\r\n  font-style: italic;\r\n}\r\n\r\n.text-large {\r\n  font-size: 1.2em;\r\n}\r\n\r\n// Text overflow utilities\r\n.text-ellipsis {\r\n  @include text-ellipsis();\r\n}\r\n\r\n.text-clip {\r\n  overflow: hidden;\r\n  text-overflow: clip;\r\n  white-space: nowrap;\r\n}\r\n\r\n.text-break {\r\n  hyphens: auto;\r\n  word-break: break-word;\r\n  word-wrap: break-word;\r\n}\r\n","// Text Ellipsis\r\n@mixin text-ellipsis() {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n","// Variables and mixins\r\n@import \"variables\";\r\n@import \"mixins\";\r\n\r\n/*! Spectre.css Experimentals v#{$version} | MIT License | github.com/picturepan2/spectre */\r\n// Experimentals\r\n// @import \"autocomplete\";\r\n// @import \"calendars\";\r\n// @import \"carousels\";\r\n// @import \"comparison-sliders\";\r\n// @import \"filters\";\r\n// @import \"meters\";\r\n// @import \"off-canvas\";\r\n// @import \"parallax\";\r\n// @import \"progress\";\r\n// @import \"sliders\";\r\n// @import \"timelines\";\r\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.module.scss":
/*!********************************!*\
  !*** ./pages/_app.module.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./_app.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/_app.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function (element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./_app.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/_app.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./_app.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/_app.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styling_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styling/global.scss */ "./styling/global.scss");
/* harmony import */ var _styling_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styling_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app.module.scss */ "./pages/_app.module.scss");
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav/Nav */ "./components/Nav/Nav.tsx");


var _this = undefined,
    _jsxFileName = "F:\\Projekter\\PortfolioSSG\\pages\\_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var AppCustomized = function AppCustomized(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx("div", {
    className: _app_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.app,
    style: {
      backgroundImage: 'url(/images/bg-1920.jpg)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _app_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['app__content'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppCustomized);

/***/ }),

/***/ "./styling/global.scss":
/*!*****************************!*\
  !*** ./styling/global.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styling/global.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function (element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styling/global.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styling/global.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ./node_modules/next/dist/client/router.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./");
module.exports = __webpack_require__(/*! F:\Projekter\PortfolioSSG\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map