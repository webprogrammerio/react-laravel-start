"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_UpdateAccount_js"],{

/***/ "./resources/js/components/Account/UpdateAccountForm.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Account/UpdateAccountForm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var UpdateAccountForm = function UpdateAccountForm() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
      className: "flex flex-col",
      method: "POST",
      action: "#",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          className: "block text-gray-500 text-sm font-bold mb-2 ",
          htmlFor: "firstName",
          children: "First Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          id: "firstName",
          placeholder: "first name",
          className: "bg-gray-100 rounded w-full text-gray-700 focus:outline-none focus:border-blue-600 transition duration-500 p-3 border border-solid border-gray-300"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          className: "block text-gray-500 text-sm font-bold mb-2 ",
          htmlFor: "lastName",
          children: "Last Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          id: "lastName",
          placeholder: "last name",
          className: "bg-gray-100 rounded w-full text-gray-700 focus:outline-none focus:border-blue-600 transition duration-500 p-3 border border-solid border-gray-300"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          className: "block text-gray-500 text-sm font-bold mb-2 ",
          htmlFor: "email",
          children: "Email"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          id: "email",
          placeholder: "email address",
          className: "bg-gray-100 rounded w-full text-gray-700 focus:outline-none focus:border-blue-600 transition duration-500 p-3 border border-solid border-gray-300"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded shadow-lg hover:shadow-xl transition duration-200",
          type: "submit",
          children: "Save"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateAccountForm);

/***/ }),

/***/ "./resources/js/pages/UpdateAccount.js":
/*!*********************************************!*\
  !*** ./resources/js/pages/UpdateAccount.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _components_Account_UpdateAccountForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Account/UpdateAccountForm */ "./resources/js/components/Account/UpdateAccountForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var UpdateAccount = function UpdateAccount() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "pb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          to: "/account",
          className: "text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6",
          children: "\u2039 Return to Account"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "text-2xl mb-4",
        children: "Update Your Account"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Account_UpdateAccountForm__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateAccount);

/***/ })

}]);