webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/post.js":
/*!**************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/post.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _styles_postMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/postMain */ \"./packages/getfused-theme/src/components/styles/postMain.js\");\n/* harmony import */ var _styles_topContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/topContent */ \"./packages/getfused-theme/src/components/styles/topContent.js\");\n/* harmony import */ var _styles_postContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/postContent */ \"./packages/getfused-theme/src/components/styles/postContent.js\");\n/* harmony import */ var _styles_calltoAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/calltoAction */ \"./packages/getfused-theme/src/components/styles/calltoAction.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Post=({state})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"title\",{children:[post.title.rendered,\" - \",state.theme.siteName]})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_styles_postMain__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_styles_topContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:post.acf.hero_image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"img\",{className:\"featuredImage\",src:post.acf.hero_image,alt:\"\"}):null}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_styles_postContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h1\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:post.acf.subtitle?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.subtitle}}):post.acf.job_title?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.job_title}}):null}),post.content?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.content.rendered}}):post.acf.bio?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.bio}}):null,post.acf.call_to_action?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_styles_calltoAction__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.call_to_action}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:post.acf.cta_link,className:\"yellowArrow\",children:post.acf.cta_label})]}):null,post.acf.author?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{children:\"Author\"}),post.acf.author.map(item=>{const authorImage=state.source[item.post_type][item.ID].acf.thumbnail;const authorLink=state.source[item.post_type][item.ID].link;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:authorLink,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"img\",{src:authorImage,alt:\"\"})})},item.ID);})]}):null]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9wb3N0LmpzPzc3YjYiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwidGl0bGUiLCJyZW5kZXJlZCIsInRoZW1lIiwic2l0ZU5hbWUiLCJhY2YiLCJoZXJvX2ltYWdlIiwic3VidGl0bGUiLCJfX2h0bWwiLCJqb2JfdGl0bGUiLCJjb250ZW50IiwiYmlvIiwiY2FsbF90b19hY3Rpb24iLCJjdGFfbGluayIsImN0YV9sYWJlbCIsImF1dGhvciIsIm1hcCIsIml0ZW0iLCJhdXRob3JJbWFnZSIsInBvc3RfdHlwZSIsIklEIiwidGh1bWJuYWlsIiwiYXV0aG9yTGluayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUN4QixLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEtBQU1DLEtBQUksQ0FBR04sS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUVBLE1BQ0Usd0pBQ0UsdUVBQUMsNkNBQUQsV0FDSSwyRkFBUUYsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQW5CLE9BQWdDVixLQUFLLENBQUNXLEtBQU4sQ0FBWUMsUUFBNUMsR0FESixFQURGLENBSUUsd0VBQUMsd0RBQUQsWUFDSSx1RUFBQywwREFBRCxXQUNNTixJQUFJLENBQUNPLEdBQUwsQ0FBU0MsVUFBVCxDQUNGLDhFQUFLLFNBQVMsQ0FBQyxlQUFmLENBQStCLEdBQUcsQ0FBRVIsSUFBSSxDQUFDTyxHQUFMLENBQVNDLFVBQTdDLENBQXlELEdBQUcsQ0FBQyxFQUE3RCxFQURFLENBRUEsSUFITixFQURKLENBTUksd0VBQUMsMkRBQUQsWUFDSSxzRkFBS1IsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQWhCLEVBREosQ0FFSSxzRkFDRUosSUFBSSxDQUFDTyxHQUFMLENBQVNFLFFBQVQsQ0FDRiw4RUFBSyx1QkFBdUIsQ0FBRSxDQUFFQyxNQUFNLENBQUVWLElBQUksQ0FBQ08sR0FBTCxDQUFTRSxRQUFuQixDQUE5QixFQURFLENBRUFULElBQUksQ0FBQ08sR0FBTCxDQUFTSSxTQUFULENBQ0YsOEVBQUssdUJBQXVCLENBQUUsQ0FBRUQsTUFBTSxDQUFFVixJQUFJLENBQUNPLEdBQUwsQ0FBU0ksU0FBbkIsQ0FBOUIsRUFERSxDQUVBLElBTEYsRUFGSixDQVNNWCxJQUFJLENBQUNZLE9BQUwsQ0FDRiw4RUFBSyx1QkFBdUIsQ0FBRSxDQUFFRixNQUFNLENBQUVWLElBQUksQ0FBQ1ksT0FBTCxDQUFhUixRQUF2QixDQUE5QixFQURFLENBRUFKLElBQUksQ0FBQ08sR0FBTCxDQUFTTSxHQUFULENBQ0YsOEVBQUssdUJBQXVCLENBQUUsQ0FBRUgsTUFBTSxDQUFFVixJQUFJLENBQUNPLEdBQUwsQ0FBU00sR0FBbkIsQ0FBOUIsRUFERSxDQUVBLElBYk4sQ0FjTWIsSUFBSSxDQUFDTyxHQUFMLENBQVNPLGNBQVQsQ0FDRSx3RUFBQyw0REFBRCxZQUNJLDhFQUFLLHVCQUF1QixDQUFFLENBQUVKLE1BQU0sQ0FBRVYsSUFBSSxDQUFDTyxHQUFMLENBQVNPLGNBQW5CLENBQTlCLEVBREosQ0FFSSx1RUFBQyxpRUFBRCxFQUFNLElBQUksQ0FBRWQsSUFBSSxDQUFDTyxHQUFMLENBQVNRLFFBQXJCLENBQStCLFNBQVMsQ0FBQyxhQUF6QyxVQUF3RGYsSUFBSSxDQUFDTyxHQUFMLENBQVNTLFNBQWpFLEVBRkosR0FERixDQUtBLElBbkJOLENBb0JNaEIsSUFBSSxDQUFDTyxHQUFMLENBQVNVLE1BQVQsQ0FDRix1SkFDQSxpR0FEQSxDQUVDakIsSUFBSSxDQUFDTyxHQUFMLENBQVNVLE1BQVQsQ0FBZ0JDLEdBQWhCLENBQXFCQyxJQUFELEVBQVUsQ0FDM0IsS0FBTUMsWUFBVyxDQUFHMUIsS0FBSyxDQUFDRSxNQUFOLENBQWF1QixJQUFJLENBQUNFLFNBQWxCLEVBQTZCRixJQUFJLENBQUNHLEVBQWxDLEVBQXNDZixHQUF0QyxDQUEwQ2dCLFNBQTlELENBQ0EsS0FBTUMsV0FBVSxDQUFHOUIsS0FBSyxDQUFDRSxNQUFOLENBQWF1QixJQUFJLENBQUNFLFNBQWxCLEVBQTZCRixJQUFJLENBQUNHLEVBQWxDLEVBQXNDdkIsSUFBekQsQ0FFQSxNQUNJLHdGQUNJLHVFQUFDLGlFQUFELEVBQU0sSUFBSSxDQUFFeUIsVUFBWixVQUNJLDhFQUFLLEdBQUcsQ0FBRUosV0FBVixDQUF1QixHQUFHLENBQUMsRUFBM0IsRUFESixFQURKLEVBQVVELElBQUksQ0FBQ0csRUFBZixDQURKLENBT0gsQ0FYQSxDQUZELEdBREUsQ0FnQkEsSUFwQ04sR0FOSixHQUpGLEdBREYsQ0FvREgsQ0F4REQsQ0EwRGVHLHVIQUFPLENBQUNoQyxJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvcGFnZXMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5pbXBvcnQgUG9zdE1haW4gZnJvbSAnLi4vc3R5bGVzL3Bvc3RNYWluJ1xyXG5pbXBvcnQgVG9wQ29udGVudCBmcm9tICcuLi9zdHlsZXMvdG9wQ29udGVudCdcclxuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gJy4uL3N0eWxlcy9wb3N0Q29udGVudCdcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuLi9zdHlsZXMvY2FsbHRvQWN0aW9uJ1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxyXG4gICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZS5yZW5kZXJlZH0gLSB7c3RhdGUudGhlbWUuc2l0ZU5hbWV9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPFBvc3RNYWluPlxyXG4gICAgICAgICAgICA8VG9wQ29udGVudD5cclxuICAgICAgICAgICAgICAgIHsgcG9zdC5hY2YuaGVyb19pbWFnZSA/IFxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmZWF0dXJlZEltYWdlXCIgc3JjPXtwb3N0LmFjZi5oZXJvX2ltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgPC9Ub3BDb250ZW50PlxyXG4gICAgICAgICAgICA8UG9zdENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHsgcG9zdC5hY2Yuc3VidGl0bGUgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLnN1YnRpdGxlIH19IC8+XHJcbiAgICAgICAgICAgICAgICA6IHBvc3QuYWNmLmpvYl90aXRsZSA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5hY2Yuam9iX3RpdGxlIH19IC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIHsgcG9zdC5jb250ZW50ID9cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cclxuICAgICAgICAgICAgICAgIDogcG9zdC5hY2YuYmlvID9cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmFjZi5iaW8gfX0gLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB7IHBvc3QuYWNmLmNhbGxfdG9fYWN0aW9uID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPENhbGxUb0FjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLmNhbGxfdG9fYWN0aW9uIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGxpbms9e3Bvc3QuYWNmLmN0YV9saW5rfSBjbGFzc05hbWU9XCJ5ZWxsb3dBcnJvd1wiPntwb3N0LmFjZi5jdGFfbGFiZWx9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FsbFRvQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIHsgcG9zdC5hY2YuYXV0aG9yID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkF1dGhvcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QuYWNmLmF1dGhvci5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JJbWFnZSA9IHN0YXRlLnNvdXJjZVtpdGVtLnBvc3RfdHlwZV1baXRlbS5JRF0uYWNmLnRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvckxpbmsgPSBzdGF0ZS5zb3VyY2VbaXRlbS5wb3N0X3R5cGVdW2l0ZW0uSURdLmxpbmtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uSUR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17YXV0aG9yTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F1dGhvckltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9Qb3N0Q29udGVudD5cclxuICAgICAgICA8L1Bvc3RNYWluPiBcclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/post.js\n");

/***/ })

})