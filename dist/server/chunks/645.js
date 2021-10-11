"use strict";
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ apolloClient)
/* harmony export */ });
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9355);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);
/* harmony import */ var _apollo_client_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3245);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5975);
/* harmony import */ var _apollo_client_link_retry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_retry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9239);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const windowContext = false;
const errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__.onError)(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({
      message,
      locations,
      path
    }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`));
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
const retryLink = new _apollo_client_link_retry__WEBPACK_IMPORTED_MODULE_3__.RetryLink({
  attempts: (count, operation, error) => {
    if (!!error && count <= 3) {
      return !!error;
    }

    return false;
  },
  delay: (count, operation, error) => count * 1000 * Math.random()
});
const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__.setContext)((_, {
  headers
}) => {
  if (windowContext) {
    const token = window.localStorage.getItem('token');
    return {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        authorization: token ? `Bearer ${token}` : ''
      })
    };
  }
});
const httpLink = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
  uri: "https://radiant-oasis-74595.herokuapp.com/graphql"
});
const link = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([errorLink, retryLink, authLink, httpLink]);
const apolloClient = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  link,
  cache: new _apollo_client_cache__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
});

/***/ })

};
;