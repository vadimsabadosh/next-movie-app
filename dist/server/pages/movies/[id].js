(() => {
var exports = {};
exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 8062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/apollo/apollo-client.js
var apollo_client = __webpack_require__(1645);
// EXTERNAL MODULE: ./src/graphql/query/index.js
var graphql_query = __webpack_require__(6395);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./src/components/elements/Button/index.ts + 1 modules
var Button = __webpack_require__(2626);
// EXTERNAL MODULE: ./src/graphql/mutation/index.js
var mutation = __webpack_require__(7394);
// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(9723);
// EXTERNAL MODULE: ./src/components/modules/Movie/Movie.module.scss
var Movie_module = __webpack_require__(7897);
var Movie_module_default = /*#__PURE__*/__webpack_require__.n(Movie_module);
// EXTERNAL MODULE: ./src/context/auth.tsx
var auth = __webpack_require__(7562);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/modules/Movie/Movie.tsx











const Movie = ({
  movie
}) => {
  const {
    state: {
      user
    }
  } = (0,auth/* useAuth */.aC)();
  const {
    data: wantToWatch
  } = (0,client_.useQuery)(graphql_query/* GET_USER_WANT_TO_WATCH_MOVIES */.wq, {
    variables: {
      id: user === null || user === void 0 ? void 0 : user.id
    }
  });
  const {
    data: watched
  } = (0,client_.useQuery)(graphql_query/* GET_USER_WATCHED_MOVIES */.h8, {
    variables: {
      id: user === null || user === void 0 ? void 0 : user.id
    }
  });
  const isWatched = watched === null || watched === void 0 ? void 0 : watched.getUserWatchedMovies.some(mov => mov.id === movie.id);
  const isWanted = wantToWatch === null || wantToWatch === void 0 ? void 0 : wantToWatch.getUserWantToWatchMovies.some(mov => mov.id === movie.id);
  const watchedQuery = isWatched ? mutation/* DELETE_FROM_WATCHED */.Rl : mutation/* ADD_TO_WATCHED */.b1;
  const WantedQuery = isWanted ? mutation/* DELETE_FROM_WISH_LIST */.EO : mutation/* ADD_TO_WISH_LIST */.e1;
  const [addToWatched] = (0,client_.useMutation)(watchedQuery, {
    variables: {
      movieId: movie.id
    },
    refetchQueries: [{
      query: graphql_query/* GET_USER_WATCHED_MOVIES */.h8,
      variables: {
        id: user === null || user === void 0 ? void 0 : user.id
      }
    }]
  });
  const [addToWishList] = (0,client_.useMutation)(WantedQuery, {
    variables: {
      movieId: movie.id
    },
    refetchQueries: [{
      query: graphql_query/* GET_USER_WANT_TO_WATCH_MOVIES */.wq,
      variables: {
        id: user === null || user === void 0 ? void 0 : user.id
      }
    }]
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Movie_module_default()).movie,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Movie_module_default()).movie__left,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: constants/* constant.IMAGE_LINK */.a.IMAGE_LINK + movie.poster_path,
        alt: movie.title,
        title: movie.title,
        className: (Movie_module_default()).movie__poster
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Movie_module_default()).movie__buttons,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          className: (Movie_module_default()).movie__want,
          onClick: addToWatched,
          children: isWatched ? 'Удалить из просмотренных' : 'Добавить в просмотренные'
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          className: (Movie_module_default()).movie__already,
          onClick: addToWishList,
          children: isWanted ? 'Удалить из списка желаний' : 'Хочу посмотреть'
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Movie_module_default()).movie__right,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (Movie_module_default()).movie__title,
        children: movie.title
      }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
        className: (Movie_module_default()).movie__subtitle,
        children: movie.original_title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Movie_module_default()).info,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: (Movie_module_default()).info__item,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Movie_module_default()).info__title,
            children: "\u0414\u0430\u0442\u0430 \u0432\u044B\u0445\u043E\u0434\u0430:"
          }), " ", movie.release_date]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: (Movie_module_default()).info__item,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Movie_module_default()).info__title,
            children: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433:"
          }), " ", movie.vote_average]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Movie_module_default()).movie__overview,
        children: movie.overview
      })]
    })]
  });
};

/* harmony default export */ const Movie_Movie = (Movie);
;// CONCATENATED MODULE: ./src/components/modules/Movie/index.ts

/* harmony default export */ const modules_Movie = (Movie_Movie);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/movies/[id].tsx









const MoviePage = ({
  movie
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["\u0424\u0438\u043B\u044C\u043C ", movie.title]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(modules_Movie, {
      movie: movie
    })]
  });
};

/* harmony default export */ const _id_ = (MoviePage);
const getServerSideProps = async ctx => {
  const {
    query
  } = ctx;
  const {
    id
  } = query;

  try {
    const response = await apollo_client/* apolloClient.query */.l.query({
      fetchPolicy: 'network-only',
      query: graphql_query/* GET_MOVIE */.t1,
      variables: {
        id
      }
    });

    if (!response) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        movie: response.data.getMovie
      }
    };
  } catch (e) {
    return {
      notFound: true
    };
  }
};

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

/***/ 7897:
/***/ ((module) => {

// Exports
module.exports = {
	"movie": "Movie_movie__1K50s",
	"movie__left": "Movie_movie__left__29zBw",
	"movie__right": "Movie_movie__right__2i2zY",
	"movie__poster": "Movie_movie__poster__UGSKS",
	"movie__already": "Movie_movie__already__19jIJ",
	"movie__want": "Movie_movie__want__2kkfT",
	"movie__addToList": "Movie_movie__addToList__3BVJO",
	"movie__title": "Movie_movie__title__1aoHw",
	"movie__subtitle": "Movie_movie__subtitle__2yc3P",
	"movie__overview": "Movie_movie__overview__2PHcW",
	"info": "Movie_info__3RMVS",
	"info__item": "Movie_info__item__2LVtD",
	"info__title": "Movie_info__title__2llPq"
};


/***/ }),

/***/ 8074:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 526:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/cache");

/***/ }),

/***/ 9355:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/core");

/***/ }),

/***/ 9239:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 3245:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 5975:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/retry");

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 6420:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [991,645,135], () => (__webpack_exec__(8062)));
module.exports = __webpack_exports__;

})();