webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/post.js":
/*!********************************************************!*\
  !*** ./packages/getfused-theme/src/components/post.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _styles_postMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/postMain */ \"./packages/getfused-theme/src/components/styles/postMain.js\");\n/* harmony import */ var _styles_postContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/postContent */ \"./packages/getfused-theme/src/components/styles/postContent.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Post=({state,libraries})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(\"title\",{children:[post.title.rendered,\" - \",state.theme.siteName]})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_styles_postMain__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_styles_postContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h1\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h2\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.subtitle}})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.content.rendered}}),post.acf.call_to_action?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(CallToAction,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.call_to_action}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:post.acf.cta_link,children:post.acf.cta_label})]}):null]})})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));const CallToAction=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1ogzcdx0\",label:\"CallToAction\"})( false?undefined:{name:\"1iaqh84\",styles:\"background:#1a1a1a;color:#fff;padding:1.5rem;margin:3rem 0;p{margin-bottom:2.5rem;}a{color:#ffcc00;font-size:1.5rem;font-weight:500;margin-bottom:1rem;text-decoration:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DK0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxsZmxhbm5lcnlcXERvY3VtZW50c1xcR2l0SHViXFxnZXRoZWFkbGVzc1xccGFja2FnZXNcXGdldGZ1c2VkLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXHBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5pbXBvcnQgUG9zdE1haW4gZnJvbSAnLi9zdHlsZXMvcG9zdE1haW4nXHJcbmltcG9ydCBQb3N0Q29udGVudCBmcm9tICcuL3N0eWxlcy9wb3N0Q29udGVudCdcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxyXG4gICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZS5yZW5kZXJlZH0gLSB7c3RhdGUudGhlbWUuc2l0ZU5hbWV9PC90aXRsZT5cclxuICAgICAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz4gKi99XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxQb3N0TWFpbj5cclxuICAgICAgICAgICAgPFBvc3RDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLnN1YnRpdGxlIH19IC8+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cclxuICAgICAgICAgICAgICAgIHsgcG9zdC5hY2YuY2FsbF90b19hY3Rpb24gPyBcclxuICAgICAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5hY2YuY2FsbF90b19hY3Rpb24gfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17cG9zdC5hY2YuY3RhX2xpbmt9Pntwb3N0LmFjZi5jdGFfbGFiZWx9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FsbFRvQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgPC9Qb3N0Q29udGVudD5cclxuICAgICAgICA8L1Bvc3RNYWluPiBcclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KVxyXG5cclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcblxyXG4gIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzPzBhNmEiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwidGl0bGUiLCJyZW5kZXJlZCIsInRoZW1lIiwic2l0ZU5hbWUiLCJfX2h0bWwiLCJhY2YiLCJzdWJ0aXRsZSIsImNvbnRlbnQiLCJjYWxsX3RvX2FjdGlvbiIsImN0YV9saW5rIiwiY3RhX2xhYmVsIiwiY29ubmVjdCIsIkNhbGxUb0FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQU1BLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsU0FBVCxDQUFELEdBQTBCLENBQ25DLEtBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsS0FBSSxDQUFHUCxLQUFLLENBQUNHLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxJQUFsQixFQUF3Qk4sSUFBSSxDQUFDTyxFQUE3QixDQUFiLENBRUEsTUFDRSx3SkFDRSx1RUFBQyw2Q0FBRCxXQUNJLDJGQUFRRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsUUFBbkIsT0FBZ0NYLEtBQUssQ0FBQ1ksS0FBTixDQUFZQyxRQUE1QyxHQURKLEVBREYsQ0FLRSx1RUFBQyx3REFBRCxXQUNJLHdFQUFDLDJEQUFELFlBQ0ksc0ZBQUtOLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxRQUFoQixFQURKLENBRUksc0ZBQUksOEVBQUssdUJBQXVCLENBQUUsQ0FBRUcsTUFBTSxDQUFFUCxJQUFJLENBQUNRLEdBQUwsQ0FBU0MsUUFBbkIsQ0FBOUIsRUFBSixFQUZKLENBR0ksOEVBQUssdUJBQXVCLENBQUUsQ0FBRUYsTUFBTSxDQUFFUCxJQUFJLENBQUNVLE9BQUwsQ0FBYU4sUUFBdkIsQ0FBOUIsRUFISixDQUlNSixJQUFJLENBQUNRLEdBQUwsQ0FBU0csY0FBVCxDQUNFLHdFQUFDLFlBQUQsWUFDSSw4RUFBSyx1QkFBdUIsQ0FBRSxDQUFFSixNQUFNLENBQUVQLElBQUksQ0FBQ1EsR0FBTCxDQUFTRyxjQUFuQixDQUE5QixFQURKLENBRUksdUVBQUMsaUVBQUQsRUFBTSxJQUFJLENBQUVYLElBQUksQ0FBQ1EsR0FBTCxDQUFTSSxRQUFyQixVQUFnQ1osSUFBSSxDQUFDUSxHQUFMLENBQVNLLFNBQXpDLEVBRkosR0FERixDQUtBLElBVE4sR0FESixFQUxGLEdBREYsQ0FxQkgsQ0F6QkQsQ0EyQmVDLHVIQUFPLENBQUN0QixJQUFELENBQXRCLEVBR0EsS0FBTXVCLGFBQVksNGlHQUFsQiIsImZpbGUiOiIuL3BhY2thZ2VzL2dldGZ1c2VkLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5pbXBvcnQgUG9zdE1haW4gZnJvbSAnLi9zdHlsZXMvcG9zdE1haW4nXHJcbmltcG9ydCBQb3N0Q29udGVudCBmcm9tICcuL3N0eWxlcy9wb3N0Q29udGVudCdcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxyXG4gICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZS5yZW5kZXJlZH0gLSB7c3RhdGUudGhlbWUuc2l0ZU5hbWV9PC90aXRsZT5cclxuICAgICAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZXhjZXJwdC5yZW5kZXJlZH0gLz4gKi99XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxQb3N0TWFpbj5cclxuICAgICAgICAgICAgPFBvc3RDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLnN1YnRpdGxlIH19IC8+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cclxuICAgICAgICAgICAgICAgIHsgcG9zdC5hY2YuY2FsbF90b19hY3Rpb24gPyBcclxuICAgICAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5hY2YuY2FsbF90b19hY3Rpb24gfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17cG9zdC5hY2YuY3RhX2xpbmt9Pntwb3N0LmFjZi5jdGFfbGFiZWx9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FsbFRvQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgPC9Qb3N0Q29udGVudD5cclxuICAgICAgICA8L1Bvc3RNYWluPiBcclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KVxyXG5cclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzFhMWExYTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcblxyXG4gIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/post.js\n");

/***/ }),

/***/ "./packages/getfused-theme/src/components/styles/postContent.js":
/*!**********************************************************************!*\
  !*** ./packages/getfused-theme/src/components/styles/postContent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const PostContent=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e182a8oc0\",label:\"PostContent\"})( false?undefined:{name:\"1r3cgbz\",styles:\"max-width:932px;margin:auto;padding:2rem 0 2.2rem 0;h1{line-height:1;}p,ul,h1,h2,h3{margin-bottom:1.5rem;}ul{padding-left:3rem;}a{color:#0e49b5;text-decoration:underline;&:hover{text-decoration:none;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxzdHlsZXNcXHBvc3RDb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUU4QiIsImZpbGUiOiJDOlxcVXNlcnNcXGxmbGFubmVyeVxcRG9jdW1lbnRzXFxHaXRIdWJcXGdldGhlYWRsZXNzXFxwYWNrYWdlc1xcZ2V0ZnVzZWQtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcc3R5bGVzXFxwb3N0Q29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5cclxuY29uc3QgUG9zdENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogOTMycHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDJyZW0gMCAyLjJyZW0gMDtcclxuXHJcbiAgaDEge1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcblxyXG4gIHAsIHVsLCBoMSwgaDIsIGgzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICB1bCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICAgIGNvbG9yOiAjMGU0OWI1O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbnRlbnQ7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (PostContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9zdHlsZXMvcG9zdENvbnRlbnQuanM/MTk4MSJdLCJuYW1lcyI6WyJQb3N0Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7O3FSQUVBLEtBQU1BLFlBQVcsdWlEQUFqQixDQXdCZUEsMEVBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9zdHlsZXMvcG9zdENvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdmcm9udGl0eSdcclxuXHJcbmNvbnN0IFBvc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDkzMnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAycmVtIDAgMi4ycmVtIDA7XHJcblxyXG4gIGgxIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5cclxuICBwLCB1bCwgaDEsIGgyLCBoMyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgdWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogIzBlNDliNTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDb250ZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/styles/postContent.js\n");

/***/ })

})