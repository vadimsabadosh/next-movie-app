exports.id = 135;
exports.ids = [135];
exports.modules = {

/***/ 2626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_Button)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/elements/Button/Button.module.scss
var Button_module = __webpack_require__(7707);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/Button/Button.tsx





const Button = ({
  children,
  onClick,
  className
}) => {
  const buttonClass = external_classnames_default()((Button_module_default()).button, className);
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: buttonClass,
    onClick: onClick,
    children: children
  });
};

/* harmony default export */ const Button_Button = (Button);
;// CONCATENATED MODULE: ./src/components/elements/Button/index.ts

/* harmony default export */ const elements_Button = (Button_Button);

/***/ }),

/***/ 7394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c7": () => (/* binding */ REGISTER_USER),
/* harmony export */   "Ys": () => (/* binding */ LOGIN_USER),
/* harmony export */   "b1": () => (/* binding */ ADD_TO_WATCHED),
/* harmony export */   "Rl": () => (/* binding */ DELETE_FROM_WATCHED),
/* harmony export */   "e1": () => (/* binding */ ADD_TO_WISH_LIST),
/* harmony export */   "EO": () => (/* binding */ DELETE_FROM_WISH_LIST)
/* harmony export */ });
/* unused harmony export UPDATE_USER */
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9355);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3804);


const REGISTER_USER = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation registerUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		registerUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			id
			token
			email
			firstName
			lastName
			watched_films {
				...Movie
			}
			wish_list {
				...Movie
			}
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;
const LOGIN_USER = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			id
			token
			email
			firstName
			lastName
			watched_films {
				...Movie
			}
			wish_list {
				...Movie
			}
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;
const UPDATE_USER = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation updateUser($firstName: String, $lastName: String, $email: String) {
		updateUser(firstName: $firstName, lastName: $lastName, email: $email) {
			id
			token
			email
			firstName
			lastName
		}
	}
`;
const ADD_TO_WATCHED = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation addMovieToWatched($movieId: ID!) {
		addMovieToWatched(movieId: $movieId) {
			watched_films {
				...Movie
			}
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;
const DELETE_FROM_WATCHED = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation deleteMovieFromWatched($movieId: ID!) {
		deleteMovieFromWatched(movieId: $movieId) {
			watched_films {
				...Movie
			}
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;
const ADD_TO_WISH_LIST = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation addMovieToWishList($movieId: ID!) {
		addMovieToWishList(movieId: $movieId) {
			wish_list {
				...Movie
			}
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;
const DELETE_FROM_WISH_LIST = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation deleteMovieFromWishList($movieId: ID!) {
		deleteMovieFromWishList(movieId: $movieId) {
			wish_list {
				...Movie
			}
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;

/***/ }),

/***/ 7707:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__2wZxU"
};


/***/ })

};
;