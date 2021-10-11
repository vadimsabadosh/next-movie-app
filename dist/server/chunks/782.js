exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 4314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_FormErrors)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/elements/FormErrors/FormErrors.module.scss
var FormErrors_module = __webpack_require__(2880);
var FormErrors_module_default = /*#__PURE__*/__webpack_require__.n(FormErrors_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/FormErrors/FormErrors.tsx





const FormErrors = ({
  errors
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: Object.keys(errors).length > 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (FormErrors_module_default()).errorBlock,
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: (FormErrors_module_default()).list,
        children: Object.values(errors).map(value => {
          return /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (FormErrors_module_default()).list__item,
            children: value
          }, value);
        })
      })
    })
  });
};

/* harmony default export */ const FormErrors_FormErrors = (FormErrors);
;// CONCATENATED MODULE: ./src/components/elements/FormErrors/index.ts

/* harmony default export */ const elements_FormErrors = (FormErrors_FormErrors);

/***/ }),

/***/ 8900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_Input)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/elements/Input/Input.module.scss
var Input_module = __webpack_require__(4148);
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/Input/Input.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Input = ({
  register,
  placeholder,
  name,
  type,
  className,
  errors
}) => {
  var _errors$name;

  const getClass = external_classnames_default()((Input_module_default()).inputBlock_input, className, {
    [(Input_module_default()).inputBlock_input_border]: errors[name]
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Input_module_default()).inputBlock,
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      className: (Input_module_default()).inputBlock_label,
      children: placeholder
    }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({}, register(name, {
      required: true
    })), {}, {
      type: type,
      placeholder: placeholder,
      className: getClass
    })), errors[name] && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (Input_module_default()).inputBlock_error,
      children: (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message
    })]
  });
};

/* harmony default export */ const Input_Input = (Input);
;// CONCATENATED MODULE: ./src/components/elements/Input/index.ts

/* harmony default export */ const elements_Input = (Input_Input);

/***/ }),

/***/ 8148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_LoginForm)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/elements/LoginForm/LoginForm.module.scss
var LoginForm_module = __webpack_require__(828);
var LoginForm_module_default = /*#__PURE__*/__webpack_require__.n(LoginForm_module);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/components/elements/Input/index.ts + 1 modules
var Input = __webpack_require__(8900);
// EXTERNAL MODULE: ./src/components/elements/Button/index.ts + 1 modules
var Button = __webpack_require__(2626);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./src/graphql/mutation/index.js
var mutation = __webpack_require__(7394);
// EXTERNAL MODULE: ./src/context/auth.tsx
var auth = __webpack_require__(7562);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/elements/Preloader/index.ts + 1 modules
var Preloader = __webpack_require__(5573);
// EXTERNAL MODULE: ./src/components/elements/FormErrors/index.ts + 1 modules
var FormErrors = __webpack_require__(4314);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/LoginForm/LoginForm.tsx















const validationSchema = external_yup_.object().shape({
  email: external_yup_.string().email('Почта должна быть валидна').required('Поле обязательно для заполнения'),
  password: external_yup_.string().required('Поле обязательно для заполнения').min(6)
});

const LoginForm = ({
  openRegister,
  toggleModal
}) => {
  const {
    0: apiErrors,
    1: setErrors
  } = (0,external_react_.useState)({});
  const router = (0,router_.useRouter)();
  const context = (0,auth/* useAuth */.aC)();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    resolver: (0,yup_.yupResolver)(validationSchema)
  });
  const [loginUser, {
    loading
  }] = (0,client_.useMutation)(mutation/* LOGIN_USER */.Ys, {
    async onCompleted(data) {
      context.login(data.loginUser);
      toggleModal();
      await router.push('/account', undefined, {
        shallow: true
      });
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    }

  });

  const showRegister = () => {
    openRegister();
    toggleModal();
  };

  const onSubmit = async data => {
    await loginUser({
      variables: {
        email: data.email,
        password: data.password
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (LoginForm_module_default()).loginForm,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (LoginForm_module_default()).loginForm_title,
      "data-cy": "login-title",
      children: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        register: register,
        type: "email",
        name: "email",
        placeholder: "Email \u0410\u0434\u0440\u0435\u0441\u0441",
        errors: errors
      }), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        register: register,
        type: "password",
        name: "password",
        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
        errors: errors
      }), loading ? /*#__PURE__*/jsx_runtime_.jsx(Preloader/* default */.Z, {}) : /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: (LoginForm_module_default()).button,
        loading: loading,
        children: "\u0412\u043E\u0439\u0442\u0438"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(FormErrors/* default */.Z, {
      errors: apiErrors
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (LoginForm_module_default()).loginForm_question,
      children: ["\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?", /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (LoginForm_module_default()).loginForm_signup,
        onClick: showRegister,
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      })]
    })]
  });
};

/* harmony default export */ const LoginForm_LoginForm = (LoginForm);
;// CONCATENATED MODULE: ./src/components/elements/LoginForm/index.ts

/* harmony default export */ const elements_LoginForm = (LoginForm_LoginForm);

/***/ }),

/***/ 931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_RegisterForm)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/elements/RegisterForm/RegisterForm.module.scss
var RegisterForm_module = __webpack_require__(25);
var RegisterForm_module_default = /*#__PURE__*/__webpack_require__.n(RegisterForm_module);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/components/elements/Input/index.ts + 1 modules
var Input = __webpack_require__(8900);
// EXTERNAL MODULE: ./src/components/elements/Button/index.ts + 1 modules
var Button = __webpack_require__(2626);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./src/graphql/mutation/index.js
var mutation = __webpack_require__(7394);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/context/auth.tsx
var auth = __webpack_require__(7562);
// EXTERNAL MODULE: ./src/components/elements/Preloader/index.ts + 1 modules
var Preloader = __webpack_require__(5573);
// EXTERNAL MODULE: ./src/components/elements/FormErrors/index.ts + 1 modules
var FormErrors = __webpack_require__(4314);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/RegisterForm/RegisterForm.tsx















const validationSchema = external_yup_.object().shape({
  firstName: external_yup_.string().required('Поле обязательно для заполнения'),
  lastName: external_yup_.string().required('Поле обязательно для заполнения'),
  email: external_yup_.string().email('Почта должна быть валидна').required('Поле обязательно для заполнения'),
  password: external_yup_.string().required('Поле обязательно для заполнения').min(6),
  passwordConfirmation: external_yup_.string().oneOf([external_yup_.ref('password'), null], 'Пароли должны совпадать')
});
const registerFields = [{
  type: 'email',
  name: 'email',
  placeholder: 'Email Адресс'
}, {
  type: 'text',
  name: 'firstName',
  placeholder: 'Имя'
}, {
  type: 'text',
  name: 'lastName',
  placeholder: 'Фамилия'
}, {
  type: 'password',
  name: 'password',
  placeholder: 'Пароль'
}, {
  type: 'password',
  name: 'confirmPassword',
  placeholder: 'Подтвердите пароль'
}];

const RegisterForm = ({
  openLogin,
  toggleModal
}) => {
  const {
    0: apiErrors,
    1: setErrors
  } = (0,external_react_.useState)({});
  const router = (0,router_.useRouter)();
  const context = (0,auth/* useAuth */.aC)();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    resolver: (0,yup_.yupResolver)(validationSchema)
  });

  const showLogin = () => {
    openLogin();
    toggleModal();
  };

  const [registerUser, {
    loading
  }] = (0,client_.useMutation)(mutation/* REGISTER_USER */.c7, {
    async onCompleted(data) {
      context.login(data.registerUser);
      toggleModal();
      await router.push('/account', undefined, {
        shallow: true
      });
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    }

  });

  const onSubmit = async data => {
    await registerUser({
      variables: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (RegisterForm_module_default()).form,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (RegisterForm_module_default()).form_title,
      "data-cy": "register",
      children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [registerFields.map(field => /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, {
        register: register,
        type: field.type,
        name: field.name,
        placeholder: field.placeholder,
        errors: errors
      }, field.name)), loading ? /*#__PURE__*/jsx_runtime_.jsx(Preloader/* default */.Z, {}) : /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: (RegisterForm_module_default()).button,
        loading: loading,
        children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(FormErrors/* default */.Z, {
      errors: apiErrors
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (RegisterForm_module_default()).form_question,
      children: ["\u0412\u044B \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B?", /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (RegisterForm_module_default()).form_signup,
        onClick: showLogin,
        children: "\u0412\u043E\u0439\u0442\u0438"
      })]
    })]
  });
};

/* harmony default export */ const RegisterForm_RegisterForm = (RegisterForm);
;// CONCATENATED MODULE: ./src/components/elements/RegisterForm/index.ts

/* harmony default export */ const elements_RegisterForm = (RegisterForm_RegisterForm);

/***/ }),

/***/ 2880:
/***/ ((module) => {

// Exports
module.exports = {
	"errorBlock": "FormErrors_errorBlock__HaXPo",
	"list": "FormErrors_list__3BdPW",
	"list__item": "FormErrors_list__item__1VyFC"
};


/***/ }),

/***/ 4148:
/***/ ((module) => {

// Exports
module.exports = {
	"inputBlock": "Input_inputBlock__3PMfn",
	"inputBlock_label": "Input_inputBlock_label__2geLj",
	"inputBlock_input": "Input_inputBlock_input__3qD_J",
	"inputBlock_input_border": "Input_inputBlock_input_border__2vK1G",
	"inputBlock_error": "Input_inputBlock_error__3seKt"
};


/***/ }),

/***/ 828:
/***/ ((module) => {

// Exports
module.exports = {
	"loginForm": "LoginForm_loginForm__3fZ6h",
	"loginForm_title": "LoginForm_loginForm_title__1YyOE",
	"loginForm_question": "LoginForm_loginForm_question__2Zs0a",
	"loginForm_signup": "LoginForm_loginForm_signup__1NqsP",
	"button": "LoginForm_button__2yiti"
};


/***/ }),

/***/ 25:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "RegisterForm_form__1rdbI",
	"form_title": "RegisterForm_form_title__D8ky0",
	"form_question": "RegisterForm_form_question__do8YE",
	"form_signup": "RegisterForm_form_signup__3T7Xj",
	"button": "RegisterForm_button__11N43"
};


/***/ })

};
;