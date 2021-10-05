webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/page.js":
/*!**************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/page.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _styles_topContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/topContent */ \"./packages/getfused-theme/src/components/styles/topContent.js\");\n/* harmony import */ var _styles_contentSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/contentSection */ \"./packages/getfused-theme/src/components/styles/contentSection.js\");\n/* harmony import */ var _styles_pageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pageContent */ \"./packages/getfused-theme/src/components/styles/pageContent.js\");\n/* harmony import */ var _styles_serviceGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/serviceGrid */ \"./packages/getfused-theme/src/components/styles/serviceGrid.js\");\n/* harmony import */ var _styles_marketingPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/marketingPanel */ \"./packages/getfused-theme/src/components/styles/marketingPanel.js\");\n/* harmony import */ var _styles_bottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/bottom */ \"./packages/getfused-theme/src/components/styles/bottom.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Page=({state,libraries})=>{const data=state.source.get(state.router.link);const page=state.source[data.type][data.id];const image=state.source.attachment[page.featured_media];const Html2React=libraries.html2react.Component;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"title\",{children:[page.title.rendered,\" - \",state.theme.siteName]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"meta\",{name:\"description\",content:page.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_styles_topContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"h1\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.title.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"h2\",{className:\"subtitle\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.acf.subtitle})}),image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"img\",{className:\"featuredImage\",src:image.source_url,alt:\"\"}):null]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_styles_contentSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_styles_pageContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.acf.page_content})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_styles_serviceGrid__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{children:[page.acf.service_info_1?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.acf.service_info_1})}):null,page.acf.service_info_2?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.acf.service_info_2})}):null,page.acf.service_info_3?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.acf.service_info_3})}):null,page.acf.service_info_4?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.acf.service_info_4})}):null,page.acf.service_info_5?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.acf.service_info_5})}):null,page.acf.service_info_6?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.acf.service_info_6})}):null]}),page.acf.heading?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_styles_marketingPanel__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"h2\",{children:page.acf.heading}),page.acf.logos.image_1?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"img\",{src:page.acf.logos.image_1,alt:\"\"}):null,page.acf.logos.image_2?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"img\",{src:page.acf.logos.image_2,alt:\"\"}):null,page.acf.logos.image_3?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"img\",{src:page.acf.logos.image_3,alt:\"\"}):null,page.acf.logos.image_4?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"img\",{src:page.acf.logos.image_4,alt:\"\"}):null,page.acf.logos.image_5?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"img\",{src:page.acf.logos.image_5,alt:\"\"}):null,page.acf.logos.image_6?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"img\",{src:page.acf.logos.image_6,alt:\"\"}):null]}):null]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_styles_bottom__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"span\",{children:\"Get Inspired\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"h2\",{className:\"featuredWork\",children:[\"Featured \",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(Html2React,{html:page.title.rendered}),\" work\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:\"/link\",className:\"yellowArrow\",children:\"See our portfolio\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"div\",{children:page.acf.case_studies.map(item=>{const id=item.ID;const caseStudy=state.source[`case-study`][id].acf.thumbnail;console.log(caseStudy);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"div\",{children:[item.ID,\" \",item.post_type]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"img\",{src:caseStudy,alt:\"\"})]});})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"h2\",{children:\"Ready to take your brand to new levels of success?\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"p\",{children:\"Get in touch with our team to get the conversation started. We look forward to partnering with you to achieve your marketing goals.\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"span\",{className:\"cta\",children:\"Let's drive your results\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"form\",{})]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9wYWdlLmpzPzA4MTkiXSwibmFtZXMiOlsiUGFnZSIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwYWdlIiwidHlwZSIsImlkIiwiaW1hZ2UiLCJhdHRhY2htZW50IiwiZmVhdHVyZWRfbWVkaWEiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsInRpdGxlIiwicmVuZGVyZWQiLCJ0aGVtZSIsInNpdGVOYW1lIiwiZXhjZXJwdCIsImFjZiIsInN1YnRpdGxlIiwic291cmNlX3VybCIsInBhZ2VfY29udGVudCIsInNlcnZpY2VfaW5mb18xIiwic2VydmljZV9pbmZvXzIiLCJzZXJ2aWNlX2luZm9fMyIsInNlcnZpY2VfaW5mb180Iiwic2VydmljZV9pbmZvXzUiLCJzZXJ2aWNlX2luZm9fNiIsImhlYWRpbmciLCJsb2dvcyIsImltYWdlXzEiLCJpbWFnZV8yIiwiaW1hZ2VfMyIsImltYWdlXzQiLCJpbWFnZV81IiwiaW1hZ2VfNiIsImNhc2Vfc3R1ZGllcyIsIm1hcCIsIml0ZW0iLCJJRCIsImNhc2VTdHVkeSIsInRodW1ibmFpbCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0X3R5cGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsU0FBVCxDQUFELEdBQTBCLENBQ25DLEtBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsS0FBSSxDQUFHUCxLQUFLLENBQUNHLE1BQU4s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QUFNLElBQUksQ0FBQyxPQUFYLENBQW1CLFNBQVMsQ0FBQyxhQUE3QiwrQkFISixHQURKLENBTUksdUZBQ0tWLElBQUksQ0FBQ2MsR0FBTCxDQUFTa0IsWUFBVCxDQUFzQkMsR0FBdEIsQ0FBMkJDLElBQUQsRUFBVSxDQUNqQyxLQUFNaEMsR0FBRSxDQUFHZ0MsSUFBSSxDQUFDQyxFQUFoQixDQUNBLEtBQU1DLFVBQVMsQ0FBRzNDLEtBQUssQ0FBQ0csTUFBTixDQUFjLFlBQWQsRUFBMkJNLEVBQTNCLEVBQStCWSxHQUEvQixDQUFtQ3VCLFNBQXJELENBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxTQUFaLEVBRUEsTUFDSSx3SkFDSSx5RkFBTUYsSUFBSSxDQUFDQyxFQUFYLEtBQWdCRCxJQUFJLENBQUNNLFNBQXJCLEdBREosQ0FFSSw4RUFBSyxHQUFHLENBQUVKLFNBQVYsQ0FBcUIsR0FBRyxDQUFDLEVBQXpCLEVBRkosR0FESixDQU1ILENBWEEsQ0FETCxFQU5KLENBb0JJLHlGQUNJLDRJQURKLENBRUksNE5BRkosQ0FHSSwrRUFBTSxTQUFTLENBQUMsS0FBaEIsc0NBSEosR0FwQkosQ0F5QkksaUZBekJKLEdBeERKLEdBTEYsR0FERixDQTRGSCxDQW5HRCxDQXFHZUssdUhBQU8sQ0FBQ2pELElBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9wYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0LCBIZWFkIH0gZnJvbSAnZnJvbnRpdHknXHJcbmltcG9ydCBMaW5rIGZyb20gJ0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsnXHJcbmltcG9ydCBUb3BDb250ZW50IGZyb20gJy4uL3N0eWxlcy90b3BDb250ZW50J1xyXG5pbXBvcnQgQ29udGVudFNlY3Rpb24gZnJvbSAnLi4vc3R5bGVzL2NvbnRlbnRTZWN0aW9uJ1xyXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc3R5bGVzL3BhZ2VDb250ZW50J1xyXG5pbXBvcnQgU2VydmljZUdyaWQgZnJvbSAnLi4vc3R5bGVzL3NlcnZpY2VHcmlkJ1xyXG5pbXBvcnQgTWFya2V0aW5nUGFuZWwgZnJvbSAnLi4vc3R5bGVzL21hcmtldGluZ1BhbmVsJ1xyXG5pbXBvcnQgQm90dG9tIGZyb20gJy4uL3N0eWxlcy9ib3R0b20nXHJcblxyXG5jb25zdCBQYWdlID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG4gICAgY29uc3QgaW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtwYWdlLmZlYXR1cmVkX21lZGlhXVxyXG5cclxuICAgIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwYWdlLnRpdGxlLnJlbmRlcmVkfSAtIHtzdGF0ZS50aGVtZS5zaXRlTmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwYWdlLmV4Y2VycHQucmVuZGVyZWR9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8VG9wQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxoMT48SHRtbDJSZWFjdCBodG1sPXtwYWdlLnRpdGxlLnJlbmRlcmVkfSAvPjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj48SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zdWJ0aXRsZX0gLz48L2gyPlxyXG4gICAgICAgICAgICAgICAgeyBpbWFnZSA/IFxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmZWF0dXJlZEltYWdlXCIgc3JjPXtpbWFnZS5zb3VyY2VfdXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgPC9Ub3BDb250ZW50PlxyXG4gICAgICAgICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2YucGFnZV9jb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLnNlcnZpY2VfaW5mb18xID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zZXJ2aWNlX2luZm9fMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLnNlcnZpY2VfaW5mb18yID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zZXJ2aWNlX2luZm9fMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLnNlcnZpY2VfaW5mb18zID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zZXJ2aWNlX2luZm9fM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLnNlcnZpY2VfaW5mb180ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zZXJ2aWNlX2luZm9fNH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLnNlcnZpY2VfaW5mb181ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zZXJ2aWNlX2luZm9fNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLnNlcnZpY2VfaW5mb182ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi5zZXJ2aWNlX2luZm9fNn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDwvU2VydmljZUdyaWQ+XHJcbiAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLmhlYWRpbmcgPyBcclxuICAgICAgICAgICAgICAgICAgICA8TWFya2V0aW5nUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cGFnZS5hY2YuaGVhZGluZ308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLmxvZ29zLmltYWdlXzEgPyA8aW1nIHNyYz17cGFnZS5hY2YubG9nb3MuaW1hZ2VfMX0gYWx0PVwiXCIgLz4gOiBudWxsICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGFnZS5hY2YubG9nb3MuaW1hZ2VfMiA/IDxpbWcgc3JjPXtwYWdlLmFjZi5sb2dvcy5pbWFnZV8yfSBhbHQ9XCJcIiAvPiA6IG51bGwgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5sb2dvcy5pbWFnZV8zID8gPGltZyBzcmM9e3BhZ2UuYWNmLmxvZ29zLmltYWdlXzN9IGFsdD1cIlwiIC8+IDogbnVsbCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLmxvZ29zLmltYWdlXzQgPyA8aW1nIHNyYz17cGFnZS5hY2YubG9nb3MuaW1hZ2VfNH0gYWx0PVwiXCIgLz4gOiBudWxsICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGFnZS5hY2YubG9nb3MuaW1hZ2VfNSA/IDxpbWcgc3JjPXtwYWdlLmFjZi5sb2dvcy5pbWFnZV81fSBhbHQ9XCJcIiAvPiA6IG51bGwgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5sb2dvcy5pbWFnZV82ID8gPGltZyBzcmM9e3BhZ2UuYWNmLmxvZ29zLmltYWdlXzZ9IGFsdD1cIlwiIC8+IDogbnVsbCAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFya2V0aW5nUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgIH1cclxuICAgICAgICAgICAgPC9Db250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgPEJvdHRvbT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2V0IEluc3BpcmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmZWF0dXJlZFdvcmtcIj5GZWF0dXJlZCA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLnRpdGxlLnJlbmRlcmVkfSAvPiB3b3JrPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBsaW5rPVwiL2xpbmtcIiBjbGFzc05hbWU9XCJ5ZWxsb3dBcnJvd1wiPlNlZSBvdXIgcG9ydGZvbGlvPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYWdlLmFjZi5jYXNlX3N0dWRpZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gaXRlbS5JRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXNlU3R1ZHkgPSBzdGF0ZS5zb3VyY2VbYGNhc2Utc3R1ZHlgXVtpZF0uYWNmLnRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXNlU3R1ZHkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLklEfSB7aXRlbS5wb3N0X3R5cGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nhc2VTdHVkeX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5SZWFkeSB0byB0YWtlIHlvdXIgYnJhbmQgdG8gbmV3IGxldmVscyBvZiBzdWNjZXNzPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+R2V0IGluIHRvdWNoIHdpdGggb3VyIHRlYW0gdG8gZ2V0IHRoZSBjb252ZXJzYXRpb24gc3RhcnRlZC4gV2UgbG9vayBmb3J3YXJkIHRvIHBhcnRuZXJpbmcgd2l0aCB5b3UgdG8gYWNoaWV2ZSB5b3VyIG1hcmtldGluZyBnb2Fscy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3RhXCI+TGV0J3MgZHJpdmUgeW91ciByZXN1bHRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT48L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvQm90dG9tPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQYWdlKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/page.js\n");

/***/ })

})