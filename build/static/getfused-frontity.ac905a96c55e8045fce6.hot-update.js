webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/about.js":
/*!*********************************************************!*\
  !*** ./packages/getfused-theme/src/components/about.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const About=({state,libraries})=>{const data=state.source.get(state.router.link);const page=state.source[data.type][data.id];const image=state.source.attachment[page.featured_media];const Html2React=libraries.html2react.Component;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"title\",{children:page.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"meta\",{name:\"description\",content:page.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(TopContent,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h1\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Html2React,{html:page.title.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h2\",{className:\"subtitle\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Html2React,{html:page.acf.subtitle})}),image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"img\",{className:\"featuredImage\",src:image.source_url,alt:\"\"}):null]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(ContentSection,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(PageContent,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Html2React,{html:page.content.rendered})})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Approach,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Html2React,{html:page.acf.approach})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(Bottom,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"img\",{src:page.acf.map,alt:\"\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{className:\"content\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Html2React,{html:page.acf.visit_us})})]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(About));const TopContent=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e90egak4\",label:\"TopContent\"})( false?undefined:{name:\"19bkwqi\",styles:\"text-align:center;.featuredImage{margin:-2rem auto 0;display:block;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCwgc3R5bGVkIH0gZnJvbSAnZnJvbnRpdHknXHJcbmltcG9ydCBMaW5rIGZyb20gJ0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsnXHJcblxyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG4gICAgY29uc3QgaW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtwYWdlLmZlYXR1cmVkX21lZGlhXVxyXG5cclxuICAgIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwYWdlLnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxUb3BDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgxPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UudGl0bGUucmVuZGVyZWR9IC8+PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuYWNmLnN1YnRpdGxlfSAvPjwvaDI+XHJcbiAgICAgICAgICAgICAgICB7IGltYWdlID8gXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZlYXR1cmVkSW1hZ2VcIiBzcmM9e2ltYWdlLnNvdXJjZV91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L1RvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmNvbnRlbnQucmVuZGVyZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8QXBwcm9hY2g+XHJcbiAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5hcHByb2FjaH0gLz5cclxuICAgICAgICAgICAgPC9BcHByb2FjaD5cclxuICAgICAgICAgICAgPEJvdHRvbT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5tYXB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi52aXNpdF91c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JvdHRvbT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWJvdXQpXHJcblxyXG5jb25zdCBUb3BDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5mZWF0dXJlZEltYWdlIHtcclxuICAgIG1hcmdpbjogLTJyZW0gYXV0byAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgI2ZmY2MwMDtcclxuICBwYWRkaW5nLXRvcDogNS43cmVtO1xyXG5gXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4ODBweDtcclxuICBmb250LXNpemU6IDEuMTc2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbmBcclxuY29uc3QgQXBwcm9hY2ggPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2l0aDogODgwcHg7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5gXHJcblxyXG5jb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YCBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmNjMDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG4gIH1cclxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const ContentSection=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e90egak3\",label:\"ContentSection\"})( false?undefined:{name:\"p0b7h9\",styles:\"background:#fff;color:#000;border-top:14px solid #ffcc00;padding-top:5.7rem\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGlDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCwgc3R5bGVkIH0gZnJvbSAnZnJvbnRpdHknXHJcbmltcG9ydCBMaW5rIGZyb20gJ0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsnXHJcblxyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG4gICAgY29uc3QgaW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtwYWdlLmZlYXR1cmVkX21lZGlhXVxyXG5cclxuICAgIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwYWdlLnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxUb3BDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgxPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UudGl0bGUucmVuZGVyZWR9IC8+PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuYWNmLnN1YnRpdGxlfSAvPjwvaDI+XHJcbiAgICAgICAgICAgICAgICB7IGltYWdlID8gXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZlYXR1cmVkSW1hZ2VcIiBzcmM9e2ltYWdlLnNvdXJjZV91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L1RvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmNvbnRlbnQucmVuZGVyZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8QXBwcm9hY2g+XHJcbiAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5hcHByb2FjaH0gLz5cclxuICAgICAgICAgICAgPC9BcHByb2FjaD5cclxuICAgICAgICAgICAgPEJvdHRvbT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5tYXB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi52aXNpdF91c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JvdHRvbT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWJvdXQpXHJcblxyXG5jb25zdCBUb3BDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5mZWF0dXJlZEltYWdlIHtcclxuICAgIG1hcmdpbjogLTJyZW0gYXV0byAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgI2ZmY2MwMDtcclxuICBwYWRkaW5nLXRvcDogNS43cmVtO1xyXG5gXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4ODBweDtcclxuICBmb250LXNpemU6IDEuMTc2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbmBcclxuY29uc3QgQXBwcm9hY2ggPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2l0aDogODgwcHg7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5gXHJcblxyXG5jb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YCBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmNjMDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG4gIH1cclxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PageContent=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e90egak2\",label:\"PageContent\"})( false?undefined:{name:\"1ygstsn\",styles:\"margin:auto;max-width:880px;font-size:1.176rem;font-weight:500;line-height:1.5;margin-bottom:1.5rem\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RDhCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCwgc3R5bGVkIH0gZnJvbSAnZnJvbnRpdHknXHJcbmltcG9ydCBMaW5rIGZyb20gJ0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsnXHJcblxyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG4gICAgY29uc3QgaW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtwYWdlLmZlYXR1cmVkX21lZGlhXVxyXG5cclxuICAgIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwYWdlLnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxUb3BDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgxPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UudGl0bGUucmVuZGVyZWR9IC8+PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuYWNmLnN1YnRpdGxlfSAvPjwvaDI+XHJcbiAgICAgICAgICAgICAgICB7IGltYWdlID8gXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZlYXR1cmVkSW1hZ2VcIiBzcmM9e2ltYWdlLnNvdXJjZV91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L1RvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmNvbnRlbnQucmVuZGVyZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8QXBwcm9hY2g+XHJcbiAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5hcHByb2FjaH0gLz5cclxuICAgICAgICAgICAgPC9BcHByb2FjaD5cclxuICAgICAgICAgICAgPEJvdHRvbT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5tYXB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi52aXNpdF91c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JvdHRvbT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWJvdXQpXHJcblxyXG5jb25zdCBUb3BDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5mZWF0dXJlZEltYWdlIHtcclxuICAgIG1hcmdpbjogLTJyZW0gYXV0byAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgI2ZmY2MwMDtcclxuICBwYWRkaW5nLXRvcDogNS43cmVtO1xyXG5gXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4ODBweDtcclxuICBmb250LXNpemU6IDEuMTc2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbmBcclxuY29uc3QgQXBwcm9hY2ggPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2l0aDogODgwcHg7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5gXHJcblxyXG5jb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YCBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmNjMDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG4gIH1cclxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Approach=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e90egak1\",label:\"Approach\"})( false?undefined:{name:\"1rjb7my\",styles:\"margin:auto;max-with:880px;padding:2rem 0\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRTJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCwgc3R5bGVkIH0gZnJvbSAnZnJvbnRpdHknXHJcbmltcG9ydCBMaW5rIGZyb20gJ0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsnXHJcblxyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG4gICAgY29uc3QgaW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtwYWdlLmZlYXR1cmVkX21lZGlhXVxyXG5cclxuICAgIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwYWdlLnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxUb3BDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgxPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UudGl0bGUucmVuZGVyZWR9IC8+PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuYWNmLnN1YnRpdGxlfSAvPjwvaDI+XHJcbiAgICAgICAgICAgICAgICB7IGltYWdlID8gXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZlYXR1cmVkSW1hZ2VcIiBzcmM9e2ltYWdlLnNvdXJjZV91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L1RvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmNvbnRlbnQucmVuZGVyZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8QXBwcm9hY2g+XHJcbiAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5hcHByb2FjaH0gLz5cclxuICAgICAgICAgICAgPC9BcHByb2FjaD5cclxuICAgICAgICAgICAgPEJvdHRvbT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5tYXB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi52aXNpdF91c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JvdHRvbT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWJvdXQpXHJcblxyXG5jb25zdCBUb3BDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5mZWF0dXJlZEltYWdlIHtcclxuICAgIG1hcmdpbjogLTJyZW0gYXV0byAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgI2ZmY2MwMDtcclxuICBwYWRkaW5nLXRvcDogNS43cmVtO1xyXG5gXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4ODBweDtcclxuICBmb250LXNpemU6IDEuMTc2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbmBcclxuY29uc3QgQXBwcm9hY2ggPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2l0aDogODgwcHg7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5gXHJcblxyXG5jb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YCBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmNjMDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG4gIH1cclxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Bottom=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e90egak0\",label:\"Bottom\"})( false?undefined:{name:\"e2musd\",styles:\"display:grid;grid-template-columns:50% 50%;align-items:center;background:#ffcc00;color:#000;img{width:100%;height:450px;object-fit:cover;}.content{padding:2rem;h2{margin-bottom:1.5rem;}a{font-size:1.5rem;font-weight:500;color:#000;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RXlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCwgc3R5bGVkIH0gZnJvbSAnZnJvbnRpdHknXHJcbmltcG9ydCBMaW5rIGZyb20gJ0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsnXHJcblxyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG4gICAgY29uc3QgaW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtwYWdlLmZlYXR1cmVkX21lZGlhXVxyXG5cclxuICAgIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwYWdlLnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxUb3BDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgxPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UudGl0bGUucmVuZGVyZWR9IC8+PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuYWNmLnN1YnRpdGxlfSAvPjwvaDI+XHJcbiAgICAgICAgICAgICAgICB7IGltYWdlID8gXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZlYXR1cmVkSW1hZ2VcIiBzcmM9e2ltYWdlLnNvdXJjZV91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L1RvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDb250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmNvbnRlbnQucmVuZGVyZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8QXBwcm9hY2g+XHJcbiAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5hcHByb2FjaH0gLz5cclxuICAgICAgICAgICAgPC9BcHByb2FjaD5cclxuICAgICAgICAgICAgPEJvdHRvbT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5tYXB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi52aXNpdF91c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JvdHRvbT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWJvdXQpXHJcblxyXG5jb25zdCBUb3BDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5mZWF0dXJlZEltYWdlIHtcclxuICAgIG1hcmdpbjogLTJyZW0gYXV0byAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvbnRlbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgI2ZmY2MwMDtcclxuICBwYWRkaW5nLXRvcDogNS43cmVtO1xyXG5gXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4ODBweDtcclxuICBmb250LXNpemU6IDEuMTc2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbmBcclxuY29uc3QgQXBwcm9hY2ggPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2l0aDogODgwcHg7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG5gXHJcblxyXG5jb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YCBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmNjMDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG4gIH1cclxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9hYm91dC5qcz9iMjdlIl0sIm5hbWVzIjpbIkFib3V0Iiwic3RhdGUiLCJsaWJyYXJpZXMiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInBhZ2UiLCJ0eXBlIiwiaWQiLCJpbWFnZSIsImF0dGFjaG1lbnQiLCJmZWF0dXJlZF9tZWRpYSIsIkh0bWwyUmVhY3QiLCJodG1sMnJlYWN0IiwiQ29tcG9uZW50IiwidGl0bGUiLCJyZW5kZXJlZCIsImV4Y2VycHQiLCJhY2YiLCJzdWJ0aXRsZSIsInNvdXJjZV91cmwiLCJjb250ZW50IiwiYXBwcm9hY2giLCJtYXAiLCJ2aXNpdF91cyIsImNvbm5lY3QiLCJUb3BDb250ZW50IiwiQ29udGVudFNlY3Rpb24iLCJQYWdlQ29udGVudCIsIkFwcHJvYWNoIiwiQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FSQU1BLEtBQU1BLE1BQUssQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsU0FBVCxDQUFELEdBQTBCLENBQ3BDLEtBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsS0FBSSxDQUFHUCxLQUFLLENBQUNHLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxJQUFsQixFQUF3Qk4sSUFBSSxDQUFDTyxFQUE3QixDQUFiLENBQ0EsS0FBTUMsTUFBSyxDQUFHVixLQUFLLENBQUNHLE1BQU4sQ0FBYVEsVUFBYixDQUF3QkosSUFBSSxDQUFDSyxjQUE3QixDQUFkLENBRUEsS0FBTUMsV0FBVSxDQUFHWixTQUFTLENBQUNhLFVBQVYsQ0FBcUJDLFNBQXhDLENBRUEsTUFDRSx3SkFDRSx3RUFBQyw2Q0FBRCxZQUNJLHlGQUFRUixJQUFJLENBQUNTLEtBQUwsQ0FBV0MsUUFBbkIsRUFESixDQUVJLCtFQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBRVYsSUFBSSxDQUFDVyxPQUFMLENBQWFELFFBQS9DLEVBRkosR0FERixDQUtFLDBGQUNJLHdFQUFDLFVBQUQsWUFDSSxzRkFBSSx1RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFVixJQUFJLENBQUNTLEtBQUwsQ0FBV0MsUUFBN0IsRUFBSixFQURKLENBRUksNkVBQUksU0FBUyxDQUFDLFVBQWQsVUFBeUIsdUVBQUMsVUFBRCxFQUFZLElBQUksQ0FBRVYsSUFBSSxDQUFDWSxHQUFMLENBQVNDLFFBQTNCLEVBQXpCLEVBRkosQ0FHTVYsS0FBSyxDQUNQLDhFQUFLLFNBQVMsQ0FBQyxlQUFmLENBQStCLEdBQUcsQ0FBRUEsS0FBSyxDQUFDVyxVQUExQyxDQUFzRCxHQUFHLENBQUMsRUFBMUQsRUFETyxDQUVMLElBTE4sR0FESixDQVFJLHVFQUFDLGNBQUQsV0FDSSx1RUFBQyxXQUFELFdBQ0ksdUVBQUMsVUFBRCxFQUFZLElBQUksQ0FBRWQsSUFBSSxDQUFDZSxPQUFMLENBQWFMLFFBQS9CLEVBREosRUFESixFQVJKLENBYUksdUVBQUMsUUFBRCxXQUNJLHVFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVWLElBQUksQ0FBQ1ksR0FBTCxDQUFTSSxRQUEzQixFQURKLEVBYkosQ0FnQkksd0VBQUMsTUFBRCxZQUNJLDhFQUFLLEdBQUcsQ0FBRWhCLElBQUksQ0FBQ1ksR0FBTCxDQUFTSyxHQUFuQixDQUF3QixHQUFHLENBQUMsRUFBNUIsRUFESixDQUVJLDhFQUFLLFNBQVMsQ0FBQyxTQUFmLFVBQ0ksdUVBQUMsVUFBRCxFQUFZLElBQUksQ0FBRWpCLElBQUksQ0FBQ1ksR0FBTCxDQUFTTSxRQUEzQixFQURKLEVBRkosR0FoQkosR0FMRixHQURGLENBK0JILENBdENELENBd0NlQyx1SEFBTyxDQUFDM0IsS0FBRCxDQUF0QixFQUVBLEtBQU00QixXQUFVLG94SUFBaEIsQ0FRQSxLQUFNQyxlQUFjLDh4SUFBcEIsQ0FNQSxLQUFNQyxZQUFXLG96SUFBakIsQ0FRQSxLQUFNQyxTQUFRLHV2SUFBZCxDQU1BLEtBQU1DLE9BQU0sbzdJQUFaIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5cclxuXHJcblxyXG5jb25zdCBBYm91dCA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXHJcbiAgICBjb25zdCBwYWdlID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF1cclxuICAgIGNvbnN0IGltYWdlID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbcGFnZS5mZWF0dXJlZF9tZWRpYV1cclxuXHJcbiAgICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cGFnZS50aXRsZS5yZW5kZXJlZH08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwYWdlLmV4Y2VycHQucmVuZGVyZWR9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8VG9wQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxoMT48SHRtbDJSZWFjdCBodG1sPXtwYWdlLnRpdGxlLnJlbmRlcmVkfSAvPjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj48SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zdWJ0aXRsZX0gLz48L2gyPlxyXG4gICAgICAgICAgICAgICAgeyBpbWFnZSA/IFxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmZWF0dXJlZEltYWdlXCIgc3JjPXtpbWFnZS5zb3VyY2VfdXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgPC9Ub3BDb250ZW50PlxyXG4gICAgICAgICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5jb250ZW50LnJlbmRlcmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlQ29udGVudD5cclxuICAgICAgICAgICAgPC9Db250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgPEFwcHJvYWNoPlxyXG4gICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2YuYXBwcm9hY2h9IC8+XHJcbiAgICAgICAgICAgIDwvQXBwcm9hY2g+XHJcbiAgICAgICAgICAgIDxCb3R0b20+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZS5hY2YubWFwfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2YudmlzaXRfdXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Cb3R0b20+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEFib3V0KVxyXG5cclxuY29uc3QgVG9wQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAuZmVhdHVyZWRJbWFnZSB7XHJcbiAgICBtYXJnaW46IC0ycmVtIGF1dG8gMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb250ZW50U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXItdG9wOiAxNHB4IHNvbGlkICNmZmNjMDA7XHJcbiAgcGFkZGluZy10b3A6IDUuN3JlbTtcclxuYFxyXG5jb25zdCBQYWdlQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogODgwcHg7XHJcbiAgZm9udC1zaXplOiAxLjE3NnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5gXHJcbmNvbnN0IEFwcHJvYWNoID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpdGg6IDg4MHB4O1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuYFxyXG5cclxuY29uc3QgQm90dG9tID0gc3R5bGVkLmRpdmAgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZjYzAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG5cclxuICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIH1cclxuICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/about.js\n");

/***/ })

})