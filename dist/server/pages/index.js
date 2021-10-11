(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/elements/Button/index.ts + 1 modules
var Button = __webpack_require__(2626);
// EXTERNAL MODULE: ./src/components/elements/RegisterTrigger/RegisterTrigger.module.scss
var RegisterTrigger_module = __webpack_require__(475);
var RegisterTrigger_module_default = /*#__PURE__*/__webpack_require__.n(RegisterTrigger_module);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "react-use"
var external_react_use_ = __webpack_require__(3983);
// EXTERNAL MODULE: ./src/components/elements/RegisterForm/index.ts + 1 modules
var RegisterForm = __webpack_require__(931);
// EXTERNAL MODULE: ./src/components/elements/LoginForm/index.ts + 1 modules
var LoginForm = __webpack_require__(8148);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/RegisterTrigger/RegisterTrigger.tsx










const Modal = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 515).then(__webpack_require__.bind(__webpack_require__, 515)), {
  // eslint-disable-next-line react/display-name
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(515)],
    modules: ["..\\src\\components\\elements\\RegisterTrigger\\RegisterTrigger.tsx -> " + 'src/components/elements/Modal']
  }
});

const RegisterTrigger = () => {
  const [showSignup, toggleSignup] = (0,external_react_use_.useToggle)(false);
  const [showLogin, toggleLogin] = (0,external_react_use_.useToggle)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (RegisterTrigger_module_default()).banner,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (RegisterTrigger_module_default()).banner_image,
          "data-cy": "register-trigger",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
            className: (RegisterTrigger_module_default()).banner_title,
            children: ["\u0422\u044B \u0435\u0449\u0435 \u043D\u0435 \u0441 \u043D\u0430\u043C\u0438?", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043D\u0430\u043C"]
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            onClick: toggleSignup,
            children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
          })]
        })
      })
    }), showSignup && /*#__PURE__*/jsx_runtime_.jsx(Modal, {
      toggleModal: toggleSignup,
      show: showSignup,
      children: /*#__PURE__*/jsx_runtime_.jsx(RegisterForm/* default */.Z, {
        openLogin: toggleLogin,
        toggleModal: toggleSignup
      })
    }), showLogin && /*#__PURE__*/jsx_runtime_.jsx(Modal, {
      toggleModal: toggleLogin,
      show: showLogin,
      children: /*#__PURE__*/jsx_runtime_.jsx(LoginForm/* default */.Z, {
        openRegister: toggleSignup,
        toggleModal: toggleLogin
      })
    })]
  });
};

/* harmony default export */ const RegisterTrigger_RegisterTrigger = (RegisterTrigger);
;// CONCATENATED MODULE: ./src/components/elements/RegisterTrigger/index.ts

/* harmony default export */ const elements_RegisterTrigger = (RegisterTrigger_RegisterTrigger);
// EXTERNAL MODULE: ./src/components/modules/MainScreen/MainScreen.module.scss
var MainScreen_module = __webpack_require__(5681);
var MainScreen_module_default = /*#__PURE__*/__webpack_require__.n(MainScreen_module);
;// CONCATENATED MODULE: ./src/components/modules/MainScreen/MainScreen.tsx






const MainScreen = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (MainScreen_module_default()).main,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (MainScreen_module_default()).main_titles,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (MainScreen_module_default()).main_title,
        children: "Night Watch"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MainScreen_module_default()).main_triggers,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MainScreen_module_default()).main_text,
          children: "2021"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MainScreen_module_default()).main_limit,
          children: "18+"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MainScreen_module_default()).main_text,
          children: "9 Seasons"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MainScreen_module_default()).main_rate,
          children: "8.8"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MainScreen_module_default()).main_description,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis et elit lacinia urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (MainScreen_module_default()).main_button_img
        }), "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0436\u0435\u043B\u0430\u043D\u0438\u0439"]
      })]
    })
  });
};

/* harmony default export */ const MainScreen_MainScreen = (MainScreen);
;// CONCATENATED MODULE: ./src/components/modules/MainScreen/index.ts

/* harmony default export */ const modules_MainScreen = (MainScreen_MainScreen);
// EXTERNAL MODULE: ./src/components/modules/MoviesBlock/MoviesBlock.module.scss
var MoviesBlock_module = __webpack_require__(3492);
var MoviesBlock_module_default = /*#__PURE__*/__webpack_require__.n(MoviesBlock_module);
// EXTERNAL MODULE: ./src/components/elements/MovieList/index.ts + 1 modules
var MovieList = __webpack_require__(9411);
// EXTERNAL MODULE: ./src/components/elements/Title/index.ts + 1 modules
var Title = __webpack_require__(1465);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/modules/MoviesBlock/MoviesBlock.tsx









const MoviesBlock = ({
  movies
}) => {
  const router = (0,router_.useRouter)();

  const onClick = async () => {
    await router.push('/movies');
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (MoviesBlock_module_default()).list__block,
      id: "movies",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
        text: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0444\u0438\u043B\u044C\u043C\u044B"
      }), /*#__PURE__*/jsx_runtime_.jsx(MovieList/* default */.Z, {
        movies: movies
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        onClick: onClick,
        children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435"
      })]
    })
  });
};

/* harmony default export */ const MoviesBlock_MoviesBlock = (MoviesBlock);
;// CONCATENATED MODULE: ./src/components/modules/MoviesBlock/index.ts

/* harmony default export */ const modules_MoviesBlock = (MoviesBlock_MoviesBlock);
// EXTERNAL MODULE: ./src/apollo/apollo-client.js
var apollo_client = __webpack_require__(1645);
// EXTERNAL MODULE: ./src/graphql/query/index.js
var query = __webpack_require__(6395);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.tsx










const Home = ({
  movies
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(modules_MainScreen, {}), /*#__PURE__*/jsx_runtime_.jsx(modules_MoviesBlock, {
      movies: movies
    }), /*#__PURE__*/jsx_runtime_.jsx(elements_RegisterTrigger, {})]
  });
};

/* harmony default export */ const pages = (Home);
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
        movies: response.data.getAllMovies.slice(0, 12)
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

/***/ 475:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "RegisterTrigger_banner__IRRud",
	"banner_image": "RegisterTrigger_banner_image__3M9Vq",
	"banner_title": "RegisterTrigger_banner_title__1cisk"
};


/***/ }),

/***/ 8501:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Title_title__Baplh"
};


/***/ }),

/***/ 5681:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "MainScreen_main__2HRHW",
	"main_title": "MainScreen_main_title__3Xy6s",
	"main_triggers": "MainScreen_main_triggers__3MLXC",
	"main_text": "MainScreen_main_text__35dzM",
	"main_limit": "MainScreen_main_limit__3ie22",
	"main_rate": "MainScreen_main_rate__1Oahm",
	"main_description": "MainScreen_main_description__1Wi3C",
	"main_button": "MainScreen_main_button__F4eAm",
	"main_button_img": "MainScreen_main_button_img__2CMQe"
};


/***/ }),

/***/ 3492:
/***/ ((module) => {

// Exports
module.exports = {
	"list__block": "MoviesBlock_list__block__2z4ub"
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

/***/ 2166:
/***/ ((module) => {

"use strict";
module.exports = require("@hookform/resolvers/yup");

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

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 2662:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ 3983:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9440:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,152,991,645,968,135,573,782], () => (__webpack_exec__(4992)));
module.exports = __webpack_exports__;

})();