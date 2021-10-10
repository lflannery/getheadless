webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/post.js":
/*!**************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/post.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _styles_postMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/postMain */ \"./packages/getfused-theme/src/components/styles/postMain.js\");\n/* harmony import */ var _styles_topContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/topContent */ \"./packages/getfused-theme/src/components/styles/topContent.js\");\n/* harmony import */ var _styles_postContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/postContent */ \"./packages/getfused-theme/src/components/styles/postContent.js\");\n/* harmony import */ var _styles_calltoAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/calltoAction */ \"./packages/getfused-theme/src/components/styles/calltoAction.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Post=({state})=>{const data=state.source.get(state.router.link);const post=state.source[data.type][data.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"title\",{children:[post.title.rendered,\" - \",state.theme.siteName]})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_styles_postMain__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_styles_topContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:post.acf.hero_image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"img\",{className:\"featuredImage\",src:post.acf.hero_image,alt:\"\"}):null}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_styles_postContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h1\",{children:post.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:post.acf.subtitle?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.subtitle}}):post.acf.job_title?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.job_title}}):null}),post.content?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.content.rendered}}):post.acf.bio?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.bio}}):null,post.acf.call_to_action?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_styles_calltoAction__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.call_to_action}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:post.acf.cta_link,className:\"yellowArrow\",children:post.acf.cta_label})]}):null,post.acf.related_blogs?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:post.acf.related_blogs.map(item=>{const relatedBlog=state.source[item.post_type][item.ID];// const blogImage = state.source.attachment[relatedBlog.featured_media]\n// const blogLink = state.source[item.post_type][item.ID].link\nconst blogTitle=relatedBlog[title];console.log(relatedBlog);console.log(blogTitle);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{});})}):null]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9wb3N0LmpzPzc3YjYiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwidGl0bGUiLCJyZW5kZXJlZCIsInRoZW1lIiwic2l0ZU5hbWUiLCJhY2YiLCJoZXJvX2ltYWdlIiwic3VidGl0bGUiLCJfX2h0bWwiLCJqb2JfdGl0bGUiLCJjb250ZW50IiwiYmlvIiwiY2FsbF90b19hY3Rpb24iLCJjdGFfbGluayIsImN0YV9sYWJlbCIsInJlbGF0ZWRfYmxvZ3MiLCJtYXAiLCJpdGVtIiwicmVsYXRlZEJsb2ciLCJwb3N0X3R5cGUiLCJJRCIsImJsb2dUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUEsS0FBTUEsS0FBSSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFELEdBQWUsQ0FDeEIsS0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxLQUFNQyxLQUFJLENBQUdOLEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUFJLENBQUNNLElBQWxCLEVBQXdCTixJQUFJLENBQUNPLEVBQTdCLENBQWIsQ0FFQSxNQUNFLHdKQUNFLHVFQUFDLDZDQUFELFdBQ0ksMkZBQVFGLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxRQUFuQixPQUFnQ1YsS0FBSyxDQUFDVyxLQUFOLENBQVlDLFFBQTVDLEdBREosRUFERixDQUtFLHdFQUFDLHdEQUFELFlBQ0ksdUVBQUMsMERBQUQsV0FDTU4sSUFBSSxDQUFDTyxHQUFMLENBQVNDLFVBQVQsQ0FDRiw4RUFBSyxTQUFTLENBQUMsZUFBZixDQUErQixHQUFHLENBQUVSLElBQUksQ0FBQ08sR0FBTCxDQUFTQyxVQUE3QyxDQUF5RCxHQUFHLENBQUMsRUFBN0QsRUFERSxDQUVBLElBSE4sRUFESixDQU1JLHdFQUFDLDJEQUFELFlBQ0ksc0ZBQUtSLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxRQUFoQixFQURKLENBRUksc0ZBQ0VKLElBQUksQ0FBQ08sR0FBTCxDQUFTRSxRQUFULENBQ0YsOEVBQUssdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFVixJQUFJLENBQUNPLEdBQUwsQ0FBU0UsUUFBbkIsQ0FBOUIsRUFERSxDQUVBVCxJQUFJLENBQUNPLEdBQUwsQ0FBU0ksU0FBVCxDQUNGLDhFQUFLLHVCQUF1QixDQUFFLENBQUVELE1BQU0sQ0FBRVYsSUFBSSxDQUFDTyxHQUFMLENBQVNJLFNBQW5CLENBQTlCLEVBREUsQ0FFQSxJQUxGLEVBRkosQ0FTTVgsSUFBSSxDQUFDWSxPQUFMLENBQ0YsOEVBQUssdUJBQXVCLENBQUUsQ0FBRUYsTUFBTSxDQUFFVixJQUFJLENBQUNZLE9BQUwsQ0FBYVIsUUFBdkIsQ0FBOUIsRUFERSxDQUVBSixJQUFJLENBQUNPLEdBQUwsQ0FBU00sR0FBVCxDQUNGLDhFQUFLLHVCQUF1QixDQUFFLENBQUVILE1BQU0sQ0FBRVYsSUFBSSxDQUFDTyxHQUFMLENBQVNNLEdBQW5CLENBQTlCLEVBREUsQ0FFQSxJQWJOLENBY01iLElBQUksQ0FBQ08sR0FBTCxDQUFTTyxjQUFULENBQ0Usd0VBQUMsNERBQUQsWUFDSSw4RUFBSyx1QkFBdUIsQ0FBRSxDQUFFSixNQUFNLENBQUVWLElBQUksQ0FBQ08sR0FBTCxDQUFTTyxjQUFuQixDQUE5QixFQURKLENBRUksdUVBQUMsaUVBQUQsRUFBTSxJQUFJLENBQUVkLElBQUksQ0FBQ08sR0FBTCxDQUFTUSxRQUFyQixDQUErQixTQUFTLENBQUMsYUFBekMsVUFBd0RmLElBQUksQ0FBQ08sR0FBTCxDQUFTUyxTQUFqRSxFQUZKLEdBREYsQ0FLQSxJQW5CTixDQW9CTWhCLElBQUksQ0FBQ08sR0FBTCxDQUFTVSxhQUFULENBQ0YscUpBQ0NqQixJQUFJLENBQUNPLEdBQUwsQ0FBU1UsYUFBVCxDQUF1QkMsR0FBdkIsQ0FBNEJDLElBQUQsRUFBVSxDQUNsQyxLQUFNQyxZQUFXLENBQUcxQixLQUFLLENBQUNFLE1BQU4sQ0FBYXVCLElBQUksQ0FBQ0UsU0FBbEIsRUFBNkJGLElBQUksQ0FBQ0csRUFBbEMsQ0FBcEIsQ0FDQTtBQUNBO0FBQ0EsS0FBTUMsVUFBUyxDQUFHSCxXQUFXLENBQUNqQixLQUFELENBQTdCLENBQ0FxQixPQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWixFQUNBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWixFQUVBLE1BQ0ksaUZBREosQ0FHSCxDQVhBLENBREQsRUFERSxDQWVBLElBbkNOLEdBTkosR0FMRixHQURGLENBb0RILENBeERELENBMERlRyx1SEFBTyxDQUFDakMsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2dldGZ1c2VkLXRoZW1lL3NyYy9jb21wb25lbnRzL3BhZ2VzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQgfSBmcm9tICdmcm9udGl0eSdcclxuaW1wb3J0IExpbmsgZnJvbSAnQGZyb250aXR5L2NvbXBvbmVudHMvbGluaydcclxuaW1wb3J0IFBvc3RNYWluIGZyb20gJy4uL3N0eWxlcy9wb3N0TWFpbidcclxuaW1wb3J0IFRvcENvbnRlbnQgZnJvbSAnLi4vc3R5bGVzL3RvcENvbnRlbnQnXHJcbmltcG9ydCBQb3N0Q29udGVudCBmcm9tICcuLi9zdHlsZXMvcG9zdENvbnRlbnQnXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi4vc3R5bGVzL2NhbGx0b0FjdGlvbidcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3Bvc3QudGl0bGUucmVuZGVyZWR9IC0ge3N0YXRlLnRoZW1lLnNpdGVOYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmV4Y2VycHQucmVuZGVyZWR9IC8+ICovfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8UG9zdE1haW4+XHJcbiAgICAgICAgICAgIDxUb3BDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgeyBwb3N0LmFjZi5oZXJvX2ltYWdlID8gXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZlYXR1cmVkSW1hZ2VcIiBzcmM9e3Bvc3QuYWNmLmhlcm9faW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L1RvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxQb3N0Q29udGVudD5cclxuICAgICAgICAgICAgICAgIDxoMT57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgeyBwb3N0LmFjZi5zdWJ0aXRsZSA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5hY2Yuc3VidGl0bGUgfX0gLz5cclxuICAgICAgICAgICAgICAgIDogcG9zdC5hY2Yuam9iX3RpdGxlID9cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmFjZi5qb2JfdGl0bGUgfX0gLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgeyBwb3N0LmNvbnRlbnQgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudC5yZW5kZXJlZCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgOiBwb3N0LmFjZi5iaW8gP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLmJpbyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIHsgcG9zdC5hY2YuY2FsbF90b19hY3Rpb24gPyBcclxuICAgICAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5hY2YuY2FsbF90b19hY3Rpb24gfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17cG9zdC5hY2YuY3RhX2xpbmt9IGNsYXNzTmFtZT1cInllbGxvd0Fycm93XCI+e3Bvc3QuYWNmLmN0YV9sYWJlbH08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYWxsVG9BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgeyBwb3N0LmFjZi5yZWxhdGVkX2Jsb2dzID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC5hY2YucmVsYXRlZF9ibG9ncy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkQmxvZyA9IHN0YXRlLnNvdXJjZVtpdGVtLnBvc3RfdHlwZV1baXRlbS5JRF1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBibG9nSW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtyZWxhdGVkQmxvZy5mZWF0dXJlZF9tZWRpYV1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBibG9nTGluayA9IHN0YXRlLnNvdXJjZVtpdGVtLnBvc3RfdHlwZV1baXRlbS5JRF0ubGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2dUaXRsZSA9IHJlbGF0ZWRCbG9nW3RpdGxlXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbGF0ZWRCbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2dUaXRsZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8L1Bvc3RDb250ZW50PlxyXG4gICAgICAgIDwvUG9zdE1haW4+IFxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/post.js\n");

/***/ })

})