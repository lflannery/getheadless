webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/page.js":
/*!**************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/page.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _styles_topContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/topContent */ \"./packages/getfused-theme/src/components/styles/topContent.js\");\n/* harmony import */ var _styles_contentSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/contentSection */ \"./packages/getfused-theme/src/components/styles/contentSection.js\");\n/* harmony import */ var _styles_pageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pageContent */ \"./packages/getfused-theme/src/components/styles/pageContent.js\");\n/* harmony import */ var _styles_serviceGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/serviceGrid */ \"./packages/getfused-theme/src/components/styles/serviceGrid.js\");\n/* harmony import */ var _styles_marketingPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/marketingPanel */ \"./packages/getfused-theme/src/components/styles/marketingPanel.js\");\n/* harmony import */ var _styles_bottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/bottom */ \"./packages/getfused-theme/src/components/styles/bottom.js\");\n/* harmony import */ var _styles_form_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/form-block */ \"./packages/getfused-theme/src/components/styles/form-block.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Page=({state,libraries})=>{const data=state.source.get(state.router.link);const page=state.source[data.type][data.id];const image=state.source.attachment[page.featured_media];const Html2React=libraries.html2react.Component;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(\"title\",{children:[page.title.rendered,\" - \",state.theme.siteName]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"meta\",{name:\"description\",content:page.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(_styles_topContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"h1\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.title.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"h2\",{className:\"subtitle\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.acf.subtitle})}),image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"img\",{className:\"featuredImage\",src:image.source_url,alt:\"\"}):null]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(_styles_contentSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_styles_pageContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.acf.page_content})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(_styles_serviceGrid__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{children:[page.acf.service_info_1?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.acf.service_info_1})}):null,page.acf.service_info_2?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.acf.service_info_2})}):null,page.acf.service_info_3?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.acf.service_info_3})}):null,page.acf.service_info_4?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.acf.service_info_4})}):null,page.acf.service_info_5?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.acf.service_info_5})}):null,page.acf.service_info_6?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.acf.service_info_6})}):null]}),page.acf.heading?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(_styles_marketingPanel__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"h2\",{children:page.acf.heading}),page.acf.logos.image_1?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"img\",{src:page.acf.logos.image_1,alt:\"\"}):null,page.acf.logos.image_2?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"img\",{src:page.acf.logos.image_2,alt:\"\"}):null,page.acf.logos.image_3?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"img\",{src:page.acf.logos.image_3,alt:\"\"}):null,page.acf.logos.image_4?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"img\",{src:page.acf.logos.image_4,alt:\"\"}):null,page.acf.logos.image_5?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"img\",{src:page.acf.logos.image_5,alt:\"\"}):null,page.acf.logos.image_6?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"img\",{src:page.acf.logos.image_6,alt:\"\"}):null]}):null]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(_styles_bottom__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"span\",{children:\"Get Inspired\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(\"h2\",{className:\"featuredWork\",children:[\"Featured \",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(Html2React,{html:page.title.rendered}),\" work\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:\"/link\",className:\"yellowArrow\",children:\"See our portfolio\"})]}),page.acf.case_studies?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"Fragment\"],{children:page.acf.case_studies.map(item=>{const caseStudyImage=state.source[item.post_type][item.ID].acf.thumbnail;const caseStudyLink=state.source[item.post_type][item.ID].link;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"a\",{href:caseStudyLink,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"img\",{src:caseStudyImage,alt:\"\"})})},item.ID);})}):null,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"h2\",{children:\"Ready to take your brand to new levels of success?\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"p\",{children:\"Get in touch with our team to get the conversation started. We look forward to partnering with you to achieve your marketing goals.\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"span\",{className:\"cta\",children:\"Let's drive your results\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsxs\"])(_styles_form_block__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"h2\",{children:\"Inquire Now\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"div\",{children:\"Let's create something beautiful\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__[\"jsx\"])(\"form\",{})]})]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9wYWdlLmpzPzA4MTkiXSwibmFtZXMiOlsiUGFnZSIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwYWdlIiwidHlwZSIsImlkIiwiaW1hZ2UiLCJhdHRhY2htZW50IiwiZmVhdHVyZWRfbWVkaWEiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsInRpdGxlIiwicmVuZGVyZWQiLCJ0aGVtZSIsInNpdGVOYW1lIiwiZXhjZXJwdCIsImFjZiIsInN1YnRpdGxlIiwic291cmNlX3VybCIsInBhZ2VfY29udGVudCIsInNlcnZpY2VfaW5mb18xIiwic2VydmljZV9pbmZvXzIiLCJzZXJ2aWNlX2luZm9fMyIsInNlcnZpY2VfaW5mb180Iiwic2VydmljZV9pbmZvXzUiLCJzZXJ2aWNlX2luZm9fNiIsImhlYWRpbmciLCJsb2dvcyIsImltYWdlXzEiLCJpbWFnZV8yIiwiaW1hZ2VfMyIsImltYWdlXzQiLCJpbWFnZV81IiwiaW1hZ2VfNiIsImNhc2Vfc3R1ZGllcyIsIm1hcCIsIml0ZW0iLCJjYXNlU3R1ZHlJbWFnZSIsInBvc3RfdHlwZSIsIklEIiwidGh1bWJuYWlsIiwiY2FzZVN0dWR5TGluayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLFNBQVQsQ0FBRCxHQUEwQixDQUNuQyxLQUFNQyxLQUFJLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEtBQU1DLEtBQUksQ0FBR1AsS0FBSyxDQUFDRyxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUNBLEtBQU1DLE1BQUssQ0FBR1YsS0FBSyxDQUFDRyxNQUFOLENBQWFRLFVBQWIsQ0FBd0JKLElBQUksQ0FBQ0ssY0FBN0IsQ0FBZCxDQUVBLEtBQU1DLFdBQVUsQ0FBR1osU0FBUyxDQUFDYSxVQUFWLENBQXFCQyxTQUF4QyxDQUVBLE1BQ0UsMEpBQ0UseUVBQUMsNkNBQUQsWUFDSSw0RkFBUVIsSUFBSSxDQUFDUyxLQUFMLENBQVdDLFFBQW5CLE9BQWdDakIsS0FBSyxDQUFDa0IsS0FBTixDQUFZQyxRQUE1QyxHQURKLENBRUksZ0ZBQU0sSUFBSSxDQUFDLGFBQVgsQ0FBeUIsT0FBTyxDQUFFWixJQUFJLENBQUNhLE9BQUwsQ0FBYUgsUUFBL0MsRUFGSixHQURGLENBS0UsMkZBQ0kseUVBQUMsMERBQUQsWUFDSSx1RkFBSSx3RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFVixJQUFJLENBQUNTLEtBQUwsQ0FBV0MsUUFBN0IsRUFBSixFQURKLENBRUksOEVBQUksU0FBUyxDQUFDLFVBQWQsVUFBeUIsd0VBQUMsVUFBRCxFQUFZLElBQUksQ0FBRVYsSUFBSSxDQUFDYyxHQUFMLENBQVNDLFFBQTNCLEVBQXpCLEVBRkosQ0FHTVosS0FBSyxDQUNQLCtFQUFLLFNBQVMsQ0FBQyxlQUFmLENBQStCLEdBQUcsQ0FBRUEsS0FBSyxDQUFDYSxVQUExQyxDQUFzRCxHQUFHLENBQUMsRUFBMUQsRUFETyxDQUVMLElBTE4sR0FESixDQVFJLHlFQUFDLDhEQUFELFlBQ0ksd0VBQUMsMkRBQUQsV0FDSSx3RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFaEIsSUFBSSxDQUFDYyxHQUFMLENBQVNHLFlBQTNCLEVBREosRUFESixDQUlJLHlFQUFDLDJEQUFELFlBQ01qQixJQUFJLENBQUNjLEdBQUwsQ0FBU0ksY0FBVCxDQUNFLHdGQUNJLHdFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVsQixJQUFJLENBQUNjLEdBQUwsQ0FBU0ksY0FBM0IsRUFESixFQURGLENBSUEsSUFMTixDQU1NbEIsSUFBSSxDQUFDYyxHQUFMLENBQVNLLGNBQVQsQ0FDRSx3RkFDSSx3RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFbkIsSUFBSSxDQUFDYyxHQUFMLENBQVNLLGNBQTNCLEVBREosRUFERixDQUlBLElBVk4sQ0FXTW5CLElBQUksQ0FBQ2MsR0FBTCxDQUFTTSxjQUFULENBQ0Usd0ZBQ0ksd0VBQUMsVUFBRCxFQUFZLElBQUksQ0FBRXBCLElBQUksQ0FBQ2MsR0FBTCxDQUFTTSxjQUEzQixFQURKLEVBREYsQ0FJQSxJQWZOLENBZ0JNcEIsSUFBSSxDQUFDYyxHQUFMLENBQVNPLGNBQVQsQ0FDRSx3RkFDSSx3RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFckIsSUFBSSxDQUFDYyxHQUFMLENBQVNPLGNBQTNCLEVBREosRUFERixDQUlBLElBcEJOLENBcUJNckIsSUFBSSxDQUFDYyxHQUFMLENBQVNRLGNBQVQsQ0FDRSx3RkFDSSx3RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFdEIsSUFBSSxDQUFDYyxHQUFMLENBQVNRLGNBQTNCLEVBREosRUFERixDQUlBLElBekJOLENBMEJNdEIsSUFBSSxDQUFDYyxHQUFMLENBQVNTLGNBQVQsQ0FDRSx3RkFDSSx3RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFdkIsSUFBSSxDQUFDYyxHQUFMLENBQVNTLGNBQTNCLEVBREosRUFERixDQUlBLElBOUJOLEdBSkosQ0FvQ012QixJQUFJLENBQUNjLEdBQUwsQ0FBU1UsT0FBVCxDQUNFLHlFQUFDLDhEQUFELFlBQ0ksdUZBQUt4QixJQUFJLENBQUNjLEdBQUwsQ0FBU1UsT0FBZCxFQURKLENBRU14QixJQUFJLENBQUNjLEdBQUwsQ0FBU1csS0FBVCxDQUFlQyxPQUFmLENBQXlCLCtFQUFLLEdBQUcsQ0FBRTFCLElBQUksQ0FBQ2MsR0FBTCxDQUFTVyxLQUFULENBQWVDLE9BQXpCLENBQWtDLEdBQUcsQ0FBQyxFQUF0QyxFQUF6QixDQUF1RSxJQUY3RSxDQUdNMUIsSUFBSSxDQUFDYyxHQUFMLENBQVNXLEtBQVQsQ0FBZUUsT0FBZixDQUF5QiwrRUFBSyxHQUFHLENBQUUzQixJQUFJLENBQUNjLEdBQUwsQ0FBU1csS0FBVCxDQUFlRSxPQUF6QixDQUFrQyxHQUFHLENBQUMsRUFBdEMsRUFBekIsQ0FBdUUsSUFIN0UsQ0FJTTNCLElBQUksQ0FBQ2MsR0FBTCxDQUFTVyxLQUFULENBQWVHLE9BQWYsQ0FBeUIsK0VBQUssR0FBRyxDQUFFNUIsSUFBSSxDQUFDYyxHQUFMLENBQVNXLEtBQVQsQ0FBZUcsT0FBekIsQ0FBa0MsR0FBRyxDQUFDLEVBQXRDLEVBQXpCLENBQXVFLElBSjdFLENBS001QixJQUFJLENBQUNjLEdBQUwsQ0FBU1csS0FBVCxDQUFlSSxPQUFmLENBQXlCLCtFQUFLLEdBQUcsQ0FBRTdCLElBQUksQ0FBQ2MsR0FBTCxDQUFTVyxLQUFULENBQWVJLE9BQXpCLENBQWtDLEdBQUcsQ0FBQyxFQUF0QyxFQUF6QixDQUF1RSxJQUw3RSxDQU1NN0IsSUFBSSxDQUFDYyxHQUFMLENBQVNXLEtBQVQsQ0FBZUssT0FBZixDQUF5QiwrRUFBSyxHQUFHLENBQUU5QixJQUFJLENBQUNjLEdBQUwsQ0FBU1csS0FBVCxDQUFlSyxPQUF6QixDQUFrQyxHQUFHLENBQUMsRUFBdEMsRUFBekIsQ0FBdUUsSUFON0UsQ0FPTTlCLElBQUksQ0FBQ2MsR0FBTCxDQUFTVyxLQUFULENBQWVNLE9BQWYsQ0FBeUIsK0VBQUssR0FBRyxDQUFFL0IsSUFBSSxDQUFDYyxHQUFMLENBQVNXLEtBQVQsQ0FBZU0sT0FBekIsQ0FBa0MsR0FBRyxDQUFDLEVBQXRDLEVBQXpCLENBQXVFLElBUDdFLEdBREYsQ0FVQSxJQTlDTixHQVJKLENBd0RJLHlFQUFDLHNEQUFELFlBQ0ksMEZBQ0kseUdBREosQ0FFSSwrRUFBSSxTQUFTLENBQUMsY0FBZCx1QkFBc0Msd0VBQUMsVUFBRCxFQUFZLElBQUksQ0FBRS9CLElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxRQUE3QixFQUF0QyxXQUZKLENBR0ksd0VBQUMsaUVBQUQsRUFBTSxJQUFJLENBQUMsT0FBWCxDQUFtQixTQUFTLENBQUMsYUFBN0IsK0JBSEosR0FESixDQU1NVixJQUFJLENBQUNjLEdBQUwsQ0FBU2tCLFlBQVQsQ0FDRix1SkFDQ2hDLElBQUksQ0FBQ2MsR0FBTCxDQUFTa0IsWUFBVCxDQUFzQkMsR0FBdEIsQ0FBMkJDLElBQUQsRUFBVSxDQUNqQyxLQUFNQyxlQUFjLENBQUcxQyxLQUFLLENBQUNHLE1BQU4sQ0FBYXNDLElBQUksQ0FBQ0UsU0FBbEIsRUFBNkJGLElBQUksQ0FBQ0csRUFBbEMsRUFBc0N2QixHQUF0QyxDQUEwQ3dCLFNBQWpFLENBQ0EsS0FBTUMsY0FBYSxDQUFHOUMsS0FBSyxDQUFDRyxNQUFOLENBQWFzQyxJQUFJLENBQUNFLFNBQWxCLEVBQTZCRixJQUFJLENBQUNHLEVBQWxDLEVBQXNDdEMsSUFBNUQsQ0FFQSxNQUNJLHlGQUNJLDZFQUFHLElBQUksQ0FBRXdDLGFBQVQsVUFDSSwrRUFBSyxHQUFHLENBQUVKLGNBQVYsQ0FBMEIsR0FBRyxDQUFDLEVBQTlCLEVBREosRUFESixFQUFVRCxJQUFJLENBQUNHLEVBQWYsQ0FESixDQU9ILENBWEEsQ0FERCxFQURFLENBZUEsSUFyQk4sQ0FzQkksMEZBQ0ksNklBREosQ0FFSSw2TkFGSixDQUdJLGdGQUFNLFNBQVMsQ0FBQyxLQUFoQixzQ0FISixHQXRCSixDQTJCSSx5RUFBQywwREFBRCxZQUNJLHNHQURKLENBRUksNEhBRkosQ0FHSSxrRkFISixHQTNCSixHQXhESixHQUxGLEdBREYsQ0FtR0gsQ0ExR0QsQ0E0R2VHLHVIQUFPLENBQUNoRCxJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvcGFnZXMvcGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5pbXBvcnQgVG9wQ29udGVudCBmcm9tICcuLi9zdHlsZXMvdG9wQ29udGVudCdcclxuaW1wb3J0IENvbnRlbnRTZWN0aW9uIGZyb20gJy4uL3N0eWxlcy9jb250ZW50U2VjdGlvbidcclxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3N0eWxlcy9wYWdlQ29udGVudCdcclxuaW1wb3J0IFNlcnZpY2VHcmlkIGZyb20gJy4uL3N0eWxlcy9zZXJ2aWNlR3JpZCdcclxuaW1wb3J0IE1hcmtldGluZ1BhbmVsIGZyb20gJy4uL3N0eWxlcy9tYXJrZXRpbmdQYW5lbCdcclxuaW1wb3J0IEJvdHRvbSBmcm9tICcuLi9zdHlsZXMvYm90dG9tJ1xyXG5pbXBvcnQgRm9ybUJsb2NrIGZyb20gJy4uL3N0eWxlcy9mb3JtLWJsb2NrJ1xyXG5cclxuY29uc3QgUGFnZSA9ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXHJcbiAgICBjb25zdCBwYWdlID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF1cclxuICAgIGNvbnN0IGltYWdlID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbcGFnZS5mZWF0dXJlZF9tZWRpYV1cclxuXHJcbiAgICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cGFnZS50aXRsZS5yZW5kZXJlZH0gLSB7c3RhdGUudGhlbWUuc2l0ZU5hbWV9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cGFnZS5leGNlcnB0LnJlbmRlcmVkfSAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPFRvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDE+PEh0bWwyUmVhY3QgaHRtbD17cGFnZS50aXRsZS5yZW5kZXJlZH0gLz48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+PEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2Yuc3VidGl0bGV9IC8+PC9oMj5cclxuICAgICAgICAgICAgICAgIHsgaW1hZ2UgPyBcclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmVhdHVyZWRJbWFnZVwiIHNyYz17aW1hZ2Uuc291cmNlX3VybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgIDwvVG9wQ29udGVudD5cclxuICAgICAgICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuYWNmLnBhZ2VfY29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VydmljZUdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5zZXJ2aWNlX2luZm9fMSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2Yuc2VydmljZV9pbmZvXzF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5zZXJ2aWNlX2luZm9fMiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2Yuc2VydmljZV9pbmZvXzJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5zZXJ2aWNlX2luZm9fMyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2Yuc2VydmljZV9pbmZvXzN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5zZXJ2aWNlX2luZm9fNCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2Yuc2VydmljZV9pbmZvXzR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5zZXJ2aWNlX2luZm9fNSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2Yuc2VydmljZV9pbmZvXzV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5zZXJ2aWNlX2luZm9fNiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2Yuc2VydmljZV9pbmZvXzZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8L1NlcnZpY2VHcmlkPlxyXG4gICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5oZWFkaW5nID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtldGluZ1BhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3BhZ2UuYWNmLmhlYWRpbmd9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5sb2dvcy5pbWFnZV8xID8gPGltZyBzcmM9e3BhZ2UuYWNmLmxvZ29zLmltYWdlXzF9IGFsdD1cIlwiIC8+IDogbnVsbCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLmxvZ29zLmltYWdlXzIgPyA8aW1nIHNyYz17cGFnZS5hY2YubG9nb3MuaW1hZ2VfMn0gYWx0PVwiXCIgLz4gOiBudWxsICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGFnZS5hY2YubG9nb3MuaW1hZ2VfMyA/IDxpbWcgc3JjPXtwYWdlLmFjZi5sb2dvcy5pbWFnZV8zfSBhbHQ9XCJcIiAvPiA6IG51bGwgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5sb2dvcy5pbWFnZV80ID8gPGltZyBzcmM9e3BhZ2UuYWNmLmxvZ29zLmltYWdlXzR9IGFsdD1cIlwiIC8+IDogbnVsbCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHBhZ2UuYWNmLmxvZ29zLmltYWdlXzUgPyA8aW1nIHNyYz17cGFnZS5hY2YubG9nb3MuaW1hZ2VfNX0gYWx0PVwiXCIgLz4gOiBudWxsICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGFnZS5hY2YubG9nb3MuaW1hZ2VfNiA/IDxpbWcgc3JjPXtwYWdlLmFjZi5sb2dvcy5pbWFnZV82fSBhbHQ9XCJcIiAvPiA6IG51bGwgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L01hcmtldGluZ1BhbmVsPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsICB9XHJcbiAgICAgICAgICAgIDwvQ29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxCb3R0b20+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkdldCBJbnNwaXJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmVhdHVyZWRXb3JrXCI+RmVhdHVyZWQgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS50aXRsZS5yZW5kZXJlZH0gLz4gd29yazwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9saW5rXCIgY2xhc3NOYW1lPVwieWVsbG93QXJyb3dcIj5TZWUgb3VyIHBvcnRmb2xpbzwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBwYWdlLmFjZi5jYXNlX3N0dWRpZXMgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtwYWdlLmFjZi5jYXNlX3N0dWRpZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FzZVN0dWR5SW1hZ2UgPSBzdGF0ZS5zb3VyY2VbaXRlbS5wb3N0X3R5cGVdW2l0ZW0uSURdLmFjZi50aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXNlU3R1ZHlMaW5rID0gc3RhdGUuc291cmNlW2l0ZW0ucG9zdF90eXBlXVtpdGVtLklEXS5saW5rXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLklEfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Nhc2VTdHVkeUxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXNlU3R1ZHlJbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5SZWFkeSB0byB0YWtlIHlvdXIgYnJhbmQgdG8gbmV3IGxldmVscyBvZiBzdWNjZXNzPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+R2V0IGluIHRvdWNoIHdpdGggb3VyIHRlYW0gdG8gZ2V0IHRoZSBjb252ZXJzYXRpb24gc3RhcnRlZC4gV2UgbG9vayBmb3J3YXJkIHRvIHBhcnRuZXJpbmcgd2l0aCB5b3UgdG8gYWNoaWV2ZSB5b3VyIG1hcmtldGluZyBnb2Fscy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3RhXCI+TGV0J3MgZHJpdmUgeW91ciByZXN1bHRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5JbnF1aXJlIE5vdzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5MZXQncyBjcmVhdGUgc29tZXRoaW5nIGJlYXV0aWZ1bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPjwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Cb3R0b20+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBhZ2UpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/page.js\n");

/***/ })

})