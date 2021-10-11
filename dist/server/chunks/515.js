exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ elements_Modal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2268);
// EXTERNAL MODULE: ./src/components/elements/Modal/Modal.module.scss
var Modal_module = __webpack_require__(3773);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/Modal/Modal.tsx





const modalRoot =  false ? 0 : null;

const Modal = props => {
  const {
    children,
    show = false,
    toggleModal
  } = props;

  const onOverlay = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  (0,external_react_.useEffect)(() => {
    const $body = document.querySelector('body');
    $body.classList.add('modal-open');
    return () => {
      $body.classList.remove('modal-open');
    };
  }, [show]);
  return /*#__PURE__*/(0,external_react_dom_.createPortal)( /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Modal_module_default()).modal__overlay,
    onMouseUp: onOverlay,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Modal_module_default()).modal__dialog,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Modal_module_default()).modal__content,
        "data-cy": "modal",
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: (Modal_module_default()).close,
          onClick: toggleModal,
          children: "\xD7"
        }), children]
      })
    })
  }), modalRoot);
};

/* harmony default export */ const Modal_Modal = (Modal);
;// CONCATENATED MODULE: ./src/components/elements/Modal/index.ts

/* harmony default export */ const elements_Modal = (Modal_Modal);

/***/ }),

/***/ 3773:
/***/ ((module) => {

// Exports
module.exports = {
	"modal__overlay": "Modal_modal__overlay__1_KST",
	"modal__dialog": "Modal_modal__dialog__2IqB3",
	"modal__content": "Modal_modal__content__2Qn8O",
	"close": "Modal_close__2ScFh"
};


/***/ })

};
;