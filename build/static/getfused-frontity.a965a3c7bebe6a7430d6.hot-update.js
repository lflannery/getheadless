webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/about.js":
/*!***************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/about.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_topContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/topContent */ \"./packages/getfused-theme/src/components/styles/topContent.js\");\n/* harmony import */ var _styles_contentSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/contentSection */ \"./packages/getfused-theme/src/components/styles/contentSection.js\");\n/* harmony import */ var _styles_pageContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pageContent */ \"./packages/getfused-theme/src/components/styles/pageContent.js\");\n/* harmony import */ var _styles_stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/stats */ \"./packages/getfused-theme/src/components/styles/stats.js\");\n/* harmony import */ var _styles_philanthropy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/philanthropy */ \"./packages/getfused-theme/src/components/styles/philanthropy.js\");\n/* harmony import */ var _styles_logos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/logos */ \"./packages/getfused-theme/src/components/styles/logos.js\");\n/* harmony import */ var _styles_approach__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/approach */ \"./packages/getfused-theme/src/components/styles/approach.js\");\n/* harmony import */ var _styles_directions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/directions */ \"./packages/getfused-theme/src/components/styles/directions.js\");\n/* harmony import */ var _styles_items__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/items */ \"./packages/getfused-theme/src/components/styles/items.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst About=({state,libraries})=>{const data=state.source.get(state.router.link);const page=state.source[data.type][data.id];const image=state.source.attachment[page.featured_media];const leadership=state.source.get(`/leadership`);const Html2React=libraries.html2react.Component;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(\"title\",{children:[page.title.rendered,\"- \",state.theme.siteName]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"meta\",{name:\"description\",content:page.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(_styles_topContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"h1\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(Html2React,{html:page.title.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"h2\",{className:\"subtitle\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(Html2React,{html:page.acf.subtitle})}),image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{className:\"featuredImage\",src:image.source_url,alt:\"\"}):null]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(_styles_contentSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(_styles_pageContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(Html2React,{html:page.content.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(_styles_stats__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_1.number}),page.acf.statistic_1.label]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_2.number}),page.acf.statistic_2.label]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_3.number}),page.acf.statistic_3.label]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_4.number}),page.acf.statistic_4.label]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_5.number}),page.acf.statistic_5.label]})]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(_styles_items__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{children:leadership.items.map(item=>{const post=state.source[item.type][item.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"article\",{className:\"listingItem\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(Link,{link:post.link,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{className:\"listingImage\",src:post.acf.thumbnail_image,alt:\"\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"h3\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"span\",{dangerouslySetInnerHTML:{__html:post.title.rendered}})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.job_title}})]},item.id)},item.id);})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(_styles_philanthropy__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(Html2React,{html:page.acf.video}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(Html2React,{html:page.acf.philanthropy})})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(_styles_logos__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{src:page.acf.logo_1.url,alt:page.acf.logo_1.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{src:page.acf.logo_2.url,alt:page.acf.logo_2.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{src:page.acf.logo_3.url,alt:page.acf.logo_3.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{src:page.acf.logo_4.url,alt:page.acf.logo_4.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{src:page.acf.logo_5.url,alt:page.acf.logo_5.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{src:page.acf.logo_6.url,alt:page.acf.logo_6.alt})})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(_styles_approach__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(Html2React,{html:page.acf.approach})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(_styles_directions__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"img\",{src:page.acf.map,alt:\"\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"div\",{className:\"content\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(Html2React,{html:page.acf.visit_us})})]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(About));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9hYm91dC5qcz80YzVjIl0sIm5hbWVzIjpbIkFib3V0Iiwic3RhdGUiLCJsaWJyYXJpZXMiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInBhZ2UiLCJ0eXBlIiwiaWQiLCJpbWFnZSIsImF0dGFjaG1lbnQiLCJmZWF0dXJlZF9tZWRpYSIsImxlYWRlcnNoaXAiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsInRpdGxlIiwicmVuZGVyZWQiLCJ0aGVtZSIsInNpdGVOYW1lIiwiZXhjZXJwdCIsImFjZiIsInN1YnRpdGxlIiwic291cmNlX3VybCIsImNvbnRlbnQiLCJzdGF0aXN0aWNfMSIsIm51bWJlciIsImxhYmVsIiwic3RhdGlzdGljXzIiLCJzdGF0aXN0aWNfMyIsInN0YXRpc3RpY180Iiwic3RhdGlzdGljXzUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwb3N0IiwidGh1bWJuYWlsX2ltYWdlIiwiX19odG1sIiwiam9iX3RpdGxlIiwidmlkZW8iLCJwaGlsYW50aHJvcHkiLCJsb2dvXzEiLCJ1cmwiLCJhbHQiLCJsb2dvXzIiLCJsb2dvXzMiLCJsb2dvXzQiLCJsb2dvXzUiLCJsb2dvXzYiLCJhcHByb2FjaCIsInZpc2l0X3VzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUEsS0FBTUEsTUFBSyxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxTQUFULENBQUQsR0FBMEIsQ0FDcEMsS0FBTUMsS0FBSSxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxLQUFNQyxLQUFJLENB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Yy9jb21wb25lbnRzL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0LCBIZWFkIH0gZnJvbSAnZnJvbnRpdHknXHJcbmltcG9ydCBUb3BDb250ZW50IGZyb20gJy4uL3N0eWxlcy90b3BDb250ZW50J1xyXG5pbXBvcnQgQ29udGVudFNlY3Rpb24gZnJvbSAnLi4vc3R5bGVzL2NvbnRlbnRTZWN0aW9uJ1xyXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc3R5bGVzL3BhZ2VDb250ZW50J1xyXG5pbXBvcnQgU3RhdHMgZnJvbSAnLi4vc3R5bGVzL3N0YXRzJ1xyXG5pbXBvcnQgUGhpbGFudGhyb3B5IGZyb20gJy4uL3N0eWxlcy9waGlsYW50aHJvcHknXHJcbmltcG9ydCBMb2dvcyBmcm9tICcuLi9zdHlsZXMvbG9nb3MnXHJcbmltcG9ydCBBcHByb2FjaCBmcm9tICcuLi9zdHlsZXMvYXBwcm9hY2gnXHJcbmltcG9ydCBEaXJlY3Rpb25zIGZyb20gJy4uL3N0eWxlcy9kaXJlY3Rpb25zJ1xyXG5pbXBvcnQgSXRlbXMgZnJvbSAnLi4vc3R5bGVzL2l0ZW1zJ1xyXG5cclxuY29uc3QgQWJvdXQgPSAoeyBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxyXG4gICAgY29uc3QgcGFnZSA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdXHJcbiAgICBjb25zdCBpbWFnZSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W3BhZ2UuZmVhdHVyZWRfbWVkaWFdXHJcbiAgICBjb25zdCBsZWFkZXJzaGlwID0gc3RhdGUuc291cmNlLmdldChgL2xlYWRlcnNoaXBgKVxyXG5cclxuICAgIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwYWdlLnRpdGxlLnJlbmRlcmVkfS0ge3N0YXRlLnRoZW1lLnNpdGVOYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8VG9wQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxoMT48SHRtbDJSZWFjdCBodG1sPXtwYWdlLnRpdGxlLnJlbmRlcmVkfSAvPjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj48SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zdWJ0aXRsZX0gLz48L2gyPlxyXG4gICAgICAgICAgICAgICAgeyBpbWFnZSA/IFxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmZWF0dXJlZEltYWdlXCIgc3JjPXtpbWFnZS5zb3VyY2VfdXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgPC9Ub3BDb250ZW50PlxyXG4gICAgICAgICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5jb250ZW50LnJlbmRlcmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxTdGF0cz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPntwYWdlLmFjZi5zdGF0aXN0aWNfMS5udW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmFjZi5zdGF0aXN0aWNfMS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPntwYWdlLmFjZi5zdGF0aXN0aWNfMi5udW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmFjZi5zdGF0aXN0aWNfMi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPntwYWdlLmFjZi5zdGF0aXN0aWNfMy5udW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmFjZi5zdGF0aXN0aWNfMy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPntwYWdlLmFjZi5zdGF0aXN0aWNfNC5udW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmFjZi5zdGF0aXN0aWNfNC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPntwYWdlLmFjZi5zdGF0aXN0aWNfNS5udW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmFjZi5zdGF0aXN0aWNfNS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU3RhdHM+XHJcbiAgICAgICAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxJdGVtcz5cclxuICAgICAgICAgICAgICAgIHtsZWFkZXJzaGlwLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbaXRlbS50eXBlXVtpdGVtLmlkXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJsaXN0aW5nSXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBsaW5rPXtwb3N0Lmxpbmt9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaXN0aW5nSW1hZ2VcIiBzcmM9e3Bvc3QuYWNmLnRodW1ibmFpbF9pbWFnZX0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fSAvPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLmpvYl90aXRsZSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvSXRlbXM+IFxyXG4gICAgICAgICAgICA8UGhpbGFudGhyb3B5PlxyXG4gICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2YudmlkZW99IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuYWNmLnBoaWxhbnRocm9weX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BoaWxhbnRocm9weT5cclxuICAgICAgICAgICAgPExvZ29zPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZS5hY2YubG9nb18xLnVybH0gYWx0PXtwYWdlLmFjZi5sb2dvXzEuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5sb2dvXzIudXJsfSBhbHQ9e3BhZ2UuYWNmLmxvZ29fMi5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BhZ2UuYWNmLmxvZ29fMy51cmx9IGFsdD17cGFnZS5hY2YubG9nb18zLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZS5hY2YubG9nb180LnVybH0gYWx0PXtwYWdlLmFjZi5sb2dvXzQuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5sb2dvXzUudXJsfSBhbHQ9e3BhZ2UuYWNmLmxvZ29fNS5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BhZ2UuYWNmLmxvZ29fNi51cmx9IGFsdD17cGFnZS5hY2YubG9nb182LmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xvZ29zPlxyXG4gICAgICAgICAgICA8QXBwcm9hY2g+XHJcbiAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5hcHByb2FjaH0gLz5cclxuICAgICAgICAgICAgPC9BcHByb2FjaD5cclxuICAgICAgICAgICAgPERpcmVjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZS5hY2YubWFwfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2YudmlzaXRfdXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9EaXJlY3Rpb25zPiBcclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWJvdXQpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/about.js\n");

/***/ })

})