exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 5573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ elements_Preloader)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/elements/Preloader/Preloader.module.scss
var Preloader_module = __webpack_require__(8943);
var Preloader_module_default = /*#__PURE__*/__webpack_require__.n(Preloader_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/elements/Preloader/Preloader.tsx






const Preloader = ({
  size = 'small'
}) => {
  const getClass = external_classnames_default()((Preloader_module_default()).loader, (Preloader_module_default())[size]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: getClass,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Preloader_module_default()).inner + ' ' + (Preloader_module_default()).one
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Preloader_module_default()).inner + ' ' + (Preloader_module_default()).two
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Preloader_module_default()).inner + ' ' + (Preloader_module_default()).three
    })]
  });
};

/* harmony default export */ const Preloader_Preloader = (Preloader);
;// CONCATENATED MODULE: ./src/components/elements/Preloader/index.ts

/* harmony default export */ const elements_Preloader = (Preloader_Preloader);

/***/ }),

/***/ 8943:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Preloader_loader__3UFLE",
	"small": "Preloader_small__3LxrJ",
	"medium": "Preloader_medium__eR-xu",
	"big": "Preloader_big__1b8IX",
	"inner": "Preloader_inner__3AF-1",
	"one": "Preloader_one__OSyWJ",
	"rotate-one": "Preloader_rotate-one__1L-Kv",
	"two": "Preloader_two__2kY4R",
	"rotate-two": "Preloader_rotate-two__2amBi",
	"three": "Preloader_three__ln2lF",
	"rotate-three": "Preloader_rotate-three__3RyNM"
};


/***/ })

};
;