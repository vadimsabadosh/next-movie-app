(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 5310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ movies),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/elements/MovieList/index.ts + 1 modules
var MovieList = __webpack_require__(9411);
// EXTERNAL MODULE: ./src/components/elements/Title/index.ts + 1 modules
var Title = __webpack_require__(1465);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/modules/Movies/Movies.tsx






const Movies = ({
  movies
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
      text: "\u0424\u0438\u043B\u044C\u043C\u044B"
    }), /*#__PURE__*/jsx_runtime_.jsx(MovieList/* default */.Z, {
      movies: movies
    })]
  });
};

/* harmony default export */ const Movies_Movies = (Movies);
;// CONCATENATED MODULE: ./src/components/modules/Movies/index.ts

/* harmony default export */ const modules_Movies = (Movies_Movies);
// EXTERNAL MODULE: ./src/apollo/apollo-client.js
var apollo_client = __webpack_require__(1645);
// EXTERNAL MODULE: ./src/graphql/query/index.js
var query = __webpack_require__(6395);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/movies/index.tsx









const MoviesPage = ({
  movies
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\u0421\u043F\u0438\u0441\u043E\u043A \u0444\u0438\u043B\u044C\u043C\u043E\u0432"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(modules_Movies, {
      movies: movies
    })]
  });
};

/* harmony default export */ const movies = (MoviesPage);
const getServerSideProps = async () => {
  try {
    const response = await apollo_client/* apolloClient.query */.l.query({
      fetchPolicy: 'network-only',
      query: query/* GET_ALL_MOVIES */.tL
    });

    if (!response) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        movies: response.data.getAllMovies
      }
    };
  } catch (e) {
    return {
      notFound: true
    };
  }
};

/***/ }),

/***/ 1465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_Title)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/elements/Title/Title.module.scss
var Title_module = __webpack_require__(8501);
var Title_module_default = /*#__PURE__*/__webpack_require__.n(Title_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/Title/Title.tsx




const Title = ({
  text
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("h2", {
    className: (Title_module_default()).title,
    children: text
  });
};

/* harmony default export */ const Title_Title = (Title);
;// CONCATENATED MODULE: ./src/components/elements/Title/index.ts

/* harmony default export */ const elements_Title = (Title_Title);

/***/ }),

/***/ 3804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ MOVIE)
/* harmony export */ });
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9355);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_core__WEBPACK_IMPORTED_MODULE_0__);

const MOVIE = _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.gql`
	fragment Movie on Movie {
		id
		backdrop_path
		original_title
		overview
		popularity
		poster_path
		release_date
		title
		vote_average
	}
`;

/***/ }),

/***/ 8501:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Title_title__Baplh"
};


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

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,645,968], () => (__webpack_exec__(5310)));
module.exports = __webpack_exports__;

})();