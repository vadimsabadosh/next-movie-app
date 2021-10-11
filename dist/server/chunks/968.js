exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 9411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_MovieList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/elements/MovieList/MovieList.module.scss
var MovieList_module = __webpack_require__(1610);
var MovieList_module_default = /*#__PURE__*/__webpack_require__.n(MovieList_module);
// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(9723);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/MovieList/MovieList.tsx








const MovieList = ({
  movies
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (MovieList_module_default()).movie__list,
      children: [!movies.length && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MovieList_module_default()).movie__empty,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/empty.png",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (MovieList_module_default()).movie__empty_text,
          children: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442"
        })]
      }), movies === null || movies === void 0 ? void 0 : movies.map(movie => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MovieList_module_default()).movie__item,
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/movies/${movie.id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: constants/* constant.IMAGE_LINK */.a.IMAGE_LINK + movie.poster_path,
                alt: movie.original_title,
                title: movie.title,
                className: (MovieList_module_default()).movie__image
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MovieList_module_default()).movie__descriptionBlock,
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: (MovieList_module_default()).movie__title,
              children: movie.title
            })
          })]
        }, movie.id);
      })]
    })
  });
};

/* harmony default export */ const MovieList_MovieList = (MovieList);
;// CONCATENATED MODULE: ./src/components/elements/MovieList/index.ts

/* harmony default export */ const elements_MovieList = (MovieList_MovieList);

/***/ }),

/***/ 6395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tL": () => (/* binding */ GET_ALL_MOVIES),
/* harmony export */   "t1": () => (/* binding */ GET_MOVIE),
/* harmony export */   "h8": () => (/* binding */ GET_USER_WATCHED_MOVIES),
/* harmony export */   "wq": () => (/* binding */ GET_USER_WANT_TO_WATCH_MOVIES)
/* harmony export */ });
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9355);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3804);


const GET_ALL_MOVIES = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	query getAllMovies {
		getAllMovies {
			...Movie
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;
const GET_MOVIE = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	query getMovie($id: ID!) {
		getMovie(id: $id) {
			...Movie
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;
const GET_USER_WATCHED_MOVIES = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	query getUserWatchedMovies($id: ID!) {
		getUserWatchedMovies(id: $id) {
			...Movie
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;
const GET_USER_WANT_TO_WATCH_MOVIES = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	query getUserWantToWatchMovies($id: ID!) {
		getUserWantToWatchMovies(id: $id) {
			...Movie
		}
	}
	${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .MOVIE */ .w}
`;

/***/ }),

/***/ 9723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ constant)
/* harmony export */ });
const constant = {
  IMAGE_LINK: 'https://image.tmdb.org/t/p/w300/'
};

/***/ }),

/***/ 1610:
/***/ ((module) => {

// Exports
module.exports = {
	"movie__list": "MovieList_movie__list__3u2Vb",
	"movie__item": "MovieList_movie__item__zzOvx",
	"movie__image": "MovieList_movie__image__2jJW-",
	"movie__title": "MovieList_movie__title__3UZk_",
	"movie__descriptionBlock": "MovieList_movie__descriptionBlock__crT5y",
	"movie__empty": "MovieList_movie__empty__3HiGa",
	"movie__empty_text": "MovieList_movie__empty_text__1NRty"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;