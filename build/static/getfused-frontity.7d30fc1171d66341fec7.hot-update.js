webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/post.js":
/*!********************************************************!*\
  !*** ./packages/getfused-theme/src/components/post.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Post=({state,libraries})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"title\",{children:post.title.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Main,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(ContentSection,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h1\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h2\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.subtitle}})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.content.rendered}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(CallToAction,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.call_to_action}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:post.acf.cta_link,children:post.acf.cta_label})]})]})})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));const Main=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"main\", false?undefined:{target:\"e1ogzcdx2\",label:\"Main\"})( false?undefined:{name:\"dbedq6\",styles:\"background:#fff;color:#000\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCd0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxsZmxhbm5lcnlcXERvY3VtZW50c1xcR2l0SHViXFxnZXRoZWFkbGVzc1xccGFja2FnZXNcXGdldGZ1c2VkLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXHBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXHJcbiAgICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+ICovfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TWFpbj5cclxuICAgICAgICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLnN1YnRpdGxlIH19IC8+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxDYWxsVG9BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLmNhbGxfdG9fYWN0aW9uIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17cG9zdC5hY2YuY3RhX2xpbmt9Pntwb3N0LmFjZi5jdGFfbGFiZWx9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9DYWxsVG9BY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgPC9NYWluPiBcclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KVxyXG5cclxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDkzMnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAycmVtIDAgMi4ycmVtIDA7XHJcblxyXG4gIGgxIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5cclxuICBwLCB1bCwgaDEsIGgyLCBoMyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgdWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogIzBlNDliNTtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcblxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogI2ZmY2MwMDtcclxuICB9XHJcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const ContentSection=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1ogzcdx1\",label:\"ContentSection\"})( false?undefined:{name:\"144teui\",styles:\"max-width:932px;margin:auto;padding:2rem 0 2.2rem 0;h1{line-height:1;}p,ul,h1,h2,h3{margin-bottom:1.5rem;}ul{padding-left:3rem;}a{color:#0e49b5;font-size:1.5rem;font-weight:500;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DaUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxsZmxhbm5lcnlcXERvY3VtZW50c1xcR2l0SHViXFxnZXRoZWFkbGVzc1xccGFja2FnZXNcXGdldGZ1c2VkLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXHBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXHJcbiAgICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+ICovfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TWFpbj5cclxuICAgICAgICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLnN1YnRpdGxlIH19IC8+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxDYWxsVG9BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLmNhbGxfdG9fYWN0aW9uIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17cG9zdC5hY2YuY3RhX2xpbmt9Pntwb3N0LmFjZi5jdGFfbGFiZWx9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9DYWxsVG9BY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgPC9NYWluPiBcclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KVxyXG5cclxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDkzMnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAycmVtIDAgMi4ycmVtIDA7XHJcblxyXG4gIGgxIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5cclxuICBwLCB1bCwgaDEsIGgyLCBoMyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgdWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogIzBlNDliNTtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcblxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogI2ZmY2MwMDtcclxuICB9XHJcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const CallToAction=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1ogzcdx0\",label:\"CallToAction\"})( false?undefined:{name:\"1ebafa9\",styles:\"background:#1a1a1a;color:#fff;padding:1.5rem;a{color:#ffcc00;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEK0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxsZmxhbm5lcnlcXERvY3VtZW50c1xcR2l0SHViXFxnZXRoZWFkbGVzc1xccGFja2FnZXNcXGdldGZ1c2VkLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXHBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXHJcbiAgICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+ICovfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TWFpbj5cclxuICAgICAgICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLnN1YnRpdGxlIH19IC8+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxDYWxsVG9BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLmNhbGxfdG9fYWN0aW9uIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17cG9zdC5hY2YuY3RhX2xpbmt9Pntwb3N0LmFjZi5jdGFfbGFiZWx9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9DYWxsVG9BY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgPC9NYWluPiBcclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KVxyXG5cclxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG5gXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDkzMnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAycmVtIDAgMi4ycmVtIDA7XHJcblxyXG4gIGgxIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5cclxuICBwLCB1bCwgaDEsIGgyLCBoMyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgdWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogIzBlNDliNTtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcblxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogI2ZmY2MwMDtcclxuICB9XHJcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzPzBhNmEiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwidGl0bGUiLCJyZW5kZXJlZCIsIl9faHRtbCIsImFjZiIsInN1YnRpdGxlIiwiY29udGVudCIsImNhbGxfdG9fYWN0aW9uIiwiY3RhX2xpbmsiLCJjdGFfbGFiZWwiLCJjb25uZWN0IiwiTWFpbiIsIkNvbnRlbnRTZWN0aW9uIiwiQ2FsbFRvQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FSQUlBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsU0FBVCxDQUFELEdBQTBCLENBQ25DLEtBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsS0FBSSxDQUFHUCxLQUFLLENBQUNHLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxJQUFsQixFQUF3Qk4sSUFBSSxDQUFDTyxFQUE3QixDQUFiLENBRUEsTUFDRSx3SkFDRSx1RUFBQyw2Q0FBRCxXQUNJLHlGQUFRRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsUUFBbkIsRUFESixFQURGLENBS0UsdUVBQUMsSUFBRCxXQUNJLHdFQUFDLGNBQUQsWUFDSSxzRkFBS0osSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQWhCLEVBREosQ0FFSSxzRkFBSSw4RUFBSyx1QkFBdUIsQ0FBRSxDQUFFQyxNQUFNLENBQUVMLElBQUksQ0FBQ00sR0FBTCxDQUFTQyxRQUFuQixDQUE5QixFQUFKLEVBRkosQ0FHSSw4RUFBSyx1QkFBdUIsQ0FBRSxDQUFFRixNQUFNLENBQUVMLElBQUksQ0FBQ1EsT0FBTCxDQUFhSixRQUF2QixDQUE5QixFQUhKLENBSUksd0VBQUMsWUFBRCxZQUNJLDhFQUFLLHVCQUF1QixDQUFFLENBQUVDLE1BQU0sQ0FBRUwsSUFBSSxDQUFDTSxHQUFMLENBQVNHLGNBQW5CLENBQTlCLEVBREosQ0FFSSx1RUFBQyxpRUFBRCxFQUFNLElBQUksQ0FBRVQsSUFBSSxDQUFDTSxHQUFMLENBQVNJLFFBQXJCLFVBQWdDVixJQUFJLENBQUNNLEdBQUwsQ0FBU0ssU0FBekMsRUFGSixHQUpKLEdBREosRUFMRixHQURGLENBbUJILENBdkJELENBeUJlQyx1SEFBTyxDQUFDcEIsSUFBRCxDQUF0QixFQUVBLEtBQU1xQixLQUFJLHE5RkFBVixDQUlBLEtBQU1DLGVBQWMsdW5HQUFwQixDQXNCQSxLQUFNQyxhQUFZLGlnR0FBbEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0LCBIZWFkLCBzdHlsZWQgfSBmcm9tICdmcm9udGl0eSdcclxuaW1wb3J0IExpbmsgZnJvbSAnQGZyb250aXR5L2NvbXBvbmVudHMvbGluaydcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxyXG4gICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZS5yZW5kZXJlZH08L3RpdGxlPlxyXG4gICAgICAgICAgICB7LyogPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5leGNlcnB0LnJlbmRlcmVkfSAvPiAqL31cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPE1haW4+XHJcbiAgICAgICAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxoMT57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPjxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmFjZi5zdWJ0aXRsZSB9fSAvPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50LnJlbmRlcmVkIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmFjZi5jYWxsX3RvX2FjdGlvbiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGxpbms9e3Bvc3QuYWNmLmN0YV9saW5rfT57cG9zdC5hY2YuY3RhX2xhYmVsfTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ2FsbFRvQWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgIDwvTWFpbj4gXHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdClcclxuXHJcbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuYFxyXG5jb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA5MzJweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMnJlbSAwIDIuMnJlbSAwO1xyXG5cclxuICBoMSB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuXHJcbiAgcCwgdWwsIGgxLCBoMiwgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIHVsIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIH1cclxuICBhIHtcclxuICAgICAgY29sb3I6ICMwZTQ5YjU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG5cclxuICBhIHtcclxuICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgfVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/post.js\n");

/***/ })

})