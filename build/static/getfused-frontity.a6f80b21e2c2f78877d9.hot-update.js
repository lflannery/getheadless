webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/about.js":
/*!***************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/about.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _styles_topContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/topContent */ \"./packages/getfused-theme/src/components/styles/topContent.js\");\n/* harmony import */ var _styles_contentSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/contentSection */ \"./packages/getfused-theme/src/components/styles/contentSection.js\");\n/* harmony import */ var _styles_pageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pageContent */ \"./packages/getfused-theme/src/components/styles/pageContent.js\");\n/* harmony import */ var _styles_stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/stats */ \"./packages/getfused-theme/src/components/styles/stats.js\");\n/* harmony import */ var _styles_philanthropy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/philanthropy */ \"./packages/getfused-theme/src/components/styles/philanthropy.js\");\n/* harmony import */ var _styles_logos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/logos */ \"./packages/getfused-theme/src/components/styles/logos.js\");\n/* harmony import */ var _styles_approach__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/approach */ \"./packages/getfused-theme/src/components/styles/approach.js\");\n/* harmony import */ var _styles_directions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/directions */ \"./packages/getfused-theme/src/components/styles/directions.js\");\n/* harmony import */ var _styles_items__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/items */ \"./packages/getfused-theme/src/components/styles/items.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst About=({state,libraries})=>{const data=state.source.get(state.router.link);const page=state.source[data.type][data.id];const image=state.source.attachment[page.featured_media];const leadership=state.source.get(`/leadership`);const Html2React=libraries.html2react.Component;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(\"title\",{children:[page.title.rendered,\"- \",state.theme.siteName]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"meta\",{name:\"description\",content:page.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_styles_topContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"h1\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(Html2React,{html:page.title.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"h2\",{className:\"subtitle\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(Html2React,{html:page.acf.subtitle})}),image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{className:\"featuredImage\",src:image.source_url,alt:\"\"}):null]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_styles_contentSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(_styles_pageContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(Html2React,{html:page.content.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_styles_stats__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_1.number}),page.acf.statistic_1.label]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_2.number}),page.acf.statistic_2.label]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_3.number}),page.acf.statistic_3.label]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_4.number}),page.acf.statistic_4.label]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{className:\"number\",children:page.acf.statistic_5.number}),page.acf.statistic_5.label]})]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_styles_items__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"article\",{className:\"listingItem\",children:\"Test\"},item.id),leadership.items.map(item=>{const post=state.source[item.type][item.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"article\",{className:\"listingItem\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:post.link,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{className:\"listingImage\",src:post.acf.thumbnail_image,alt:\"\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"h3\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"span\",{dangerouslySetInnerHTML:{__html:post.title.rendered}})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.job_title}})]},item.id)},item.id);})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_styles_philanthropy__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(Html2React,{html:page.acf.video}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(Html2React,{html:page.acf.philanthropy})})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_styles_logos__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{src:page.acf.logo_1.url,alt:page.acf.logo_1.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{src:page.acf.logo_2.url,alt:page.acf.logo_2.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{src:page.acf.logo_3.url,alt:page.acf.logo_3.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{src:page.acf.logo_4.url,alt:page.acf.logo_4.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{src:page.acf.logo_5.url,alt:page.acf.logo_5.alt})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{src:page.acf.logo_6.url,alt:page.acf.logo_6.alt})})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(_styles_approach__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(Html2React,{html:page.acf.approach})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsxs\"])(_styles_directions__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"img\",{src:page.acf.map,alt:\"\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(\"div\",{className:\"content\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__[\"jsx\"])(Html2React,{html:page.acf.visit_us})})]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(About));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9hYm91dC5qcz80YzVjIl0sIm5hbWVzIjpbIkFib3V0Iiwic3RhdGUiLCJsaWJyYXJpZXMiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInBhZ2UiLCJ0eXBlIiwiaWQiLCJpbWFnZSIsImF0dGFjaG1lbnQiLCJmZWF0dXJlZF9tZWRpYSIsImxlYWRlcnNoaXAiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsInRpdGxlIiwicmVuZGVyZWQiLCJ0aGVtZSIsInNpdGVOYW1lIiwiZXhjZXJwdCIsImFjZiIsInN1YnRpdGxlIiwic291cmNlX3VybCIsImNvbnRlbnQiLCJzdGF0aXN0aWNfMSIsIm51bWJlciIsImxhYmVsIiwic3RhdGlzdGljXzIiLCJzdGF0aXN0aWNfMyIsInN0YXRpc3RpY180Iiwic3RhdGlzdGljXzUiLCJpdGVtIiwiaXRlbXMiLCJtYXAiLCJwb3N0IiwidGh1bWJuYWlsX2ltYWdlIiwiX19odG1sIiwiam9iX3RpdGxlIiwidmlkZW8iLCJwaGlsYW50aHJvcHkiLCJsb2dvXzEiLCJ1cmwiLCJhbHQiLCJsb2dvXzIiLCJsb2dvXzMiLCJsb2dvXzQiLCJsb2dvXzUiLCJsb2dvXzYiLCJhcHByb2FjaCIsInZpc2l0X3VzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQSxLQUFNQSxNQUFLLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLFNBQVQsQ0FBRCxHQUEwQixDQUNwQyxLQUFNQyxLQUFJLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEtBQU1DLEtBQUksQ0FBR1AsS0FBSyxDQUFDRyxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUNBLEtBQU1DLE1BQUssQ0FBR1YsS0FBSyxDQUFDRyxNQUFOLENBQWFRLFVBQWIsQ0FBd0JKLElBQUksQ0FBQ0ssY0FBN0IsQ0FBZCxDQUNBLEtBQU1DLFdBQVUsQ0FBR2IsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBa0IsYUFBbEIsQ0FBbkIsQ0FFQSxLQUFNVSxXQUFVLENBQUdiLFNBQVMsQ0FBQ2MsVUFBVixDQUFxQkMsU0FBeEMsQ0FFQSxNQUNFLDBKQUNFLHlFQUFDLDZDQUFELFlBQ0ksNEZBQVFULElBQUksQ0FBQ1UsS0FBTCxDQUFXQyxRQUFuQixNQUErQmxCLEtBQUssQ0FBQ21CLEtBQU4sQ0FBWUMsUUFBM0MsR0FESixDQUVJLGdGQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBRWIsSUFBSSxDQUFDYyxPQUFMLENBQWFILFFBQS9DLEVBRkosR0FERixDQUtHLDJGQUNHLHlFQUFDLDBEQUFELFlBQ0ksdUZBQUksd0VBQUMsVUFBRCxFQUFZLElBQUksQ0FBRVgsSUFBSSxDQUFDVSxLQUFMLENBQVdDLFFBQTdCLEVBQUosRUFESixDQUVJLDhFQUFJLFNBQVMsQ0FBQyxVQUFkLFVBQXlCLHdFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVYLElBQUksQ0FBQ2UsR0FBTCxDQUFTQyxRQUEzQixFQUF6QixFQUZKLENBR01iLEtBQUssQ0FDUCwrRUFBSyxTQUFTLENBQUMsZUFBZixDQUErQixHQUFHLENBQUVBLEtBQUssQ0FBQ2MsVUFBMUMsQ0FBc0QsR0FBRyxDQUFDLEVBQTFELEVBRE8sQ0FFTCxJQUxOLEdBREgsQ0FRRyx5RUFBQyw4REFBRCxZQUNJLHdFQUFDLDJEQUFELFdBQ0ksd0VBQUMsVUFBRCxFQUFZLElBQUksQ0FBRWpCLElBQUksQ0FBQ2tCLE9BQUwsQ0FBYVAsUUFBL0IsRUFESixFQURKLENBSUkseUVBQUMscURBQUQsWUFDSSwwRkFDSSwrRUFBSyxTQUFTLENBQUMsUUFBZixVQUF5QlgsSUFBSSxDQUFDZSxHQUFMLENBQVNJLFdBQVQsQ0FBcUJDLE1BQTlDLEVBREosQ0FFS3BCLElBQUksQ0FBQ2UsR0FBTCxDQUFTSSxXQUFULENBQXFCRSxLQUYxQixHQURKLENBS0ksMEZBQ0ksK0VBQUssU0FBUyxDQUFDLFFBQWYsVUFBeUJyQixJQUFJLENBQUNlLEdBQUwsQ0FBU08sV0FBVCxDQUFxQkYsTUFBOUMsRUFESixDQUVLcEIsSUFBSSxDQUFDZSxHQUFMLENBQVNPLFdBQVQsQ0FBcUJELEtBRjFCLEdBTEosQ0FTSSwwRkFDSSwrRUFBSyxTQUFTLENBQUMsUUFBZixVQUF5QnJCLElBQUksQ0FBQ2UsR0FBTCxDQUFTUSxXQUFULENBQXFCSCxNQUE5QyxFQURKLENBRUtwQixJQUFJLENBQUNlLEdBQUwsQ0FBU1EsV0FBVCxDQUFxQkYsS0FGMUIsR0FUSixDQWFJLDBGQUNJLCtFQUFLLFNBQVMsQ0FBQyxRQUFmLFVBQXlCckIsSUFBSSxDQUFDZSxHQUFMLENBQVNTLFdBQVQsQ0FBcUJKLE1BQTlDLEVBREosQ0FFS3BCLElBQUksQ0FBQ2UsR0FBTCxDQUFTUyxXQUFULENBQXFCSCxLQUYxQixHQWJKLENBaUJJLDBGQUNJLCtFQUFLLFNBQVMsQ0FBQyxRQUFmLFVBQXlCckIsSUFBSSxDQUFDZSxHQUFMLENBQVNVLFdBQVQsQ0FBcUJMLE1BQTlDLEVBREosQ0FFS3BCLElBQUksQ0FBQ2UsR0FBTCxDQUFTVSxXQUFULENBQXFCSixLQUYxQixHQWpCSixHQUpKLEdBUkgsQ0FtQ0cseUVBQUMsc0RBQUQsWUFDSSxtRkFBUyxTQUFTLENBQUMsYUFBbkIsa0JBQXNDSyxJQUFJLENBQUN4QixFQUEzQyxDQURKLENBSUtJLFVBQVUsQ0FBQ3FCLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXNCRixJQUFELEVBQVUsQ0FDNUIsS0FBTUcsS0FBSSxDQUFHcEMsS0FBSyxDQUFDRyxNQUFOLENBQWE4QixJQUFJLENBQUN6QixJQUFsQixFQUF3QnlCLElBQUksQ0FBQ3hCLEVBQTdCLENBQWIsQ0FFQSxNQUNJLG9GQUFTLFNBQVMsQ0FBQyxhQUFuQixVQUNJLHlFQUFDLGlFQUFELEVBQU0sSUFBSSxDQUFFMkIsSUFBSSxDQUFDOUIsSUFBakIsV0FDSSwrRUFBSyxTQUFTLENBQUMsY0FBZixDQUE4QixHQUFHLENBQUU4QixJQUFJLENBQUNkLEdBQUwsQ0FBU2UsZUFBNUMsQ0FBNkQsR0FBRyxDQUFDLEVBQWpFLEVBREosQ0FFSSx1RkFBSSxnRkFBTSx1QkFBdUIsQ0FBRSxDQUFFQyxNQUFNLENBQUVGLElBQUksQ0FBQ25CLEtBQUwsQ0FBV0MsUUFBckIsQ0FBL0IsRUFBSixFQUZKLENBR0ksK0VBQUssdUJBQXVCLENBQUUsQ0FBRW9CLE1BQU0sQ0FBRUYsSUFBSSxDQUFDZCxHQUFMLENBQVNpQixTQUFuQixDQUE5QixFQUhKLEdBQTRCTixJQUFJLENBQUN4QixFQUFqQyxDQURKLEVBQXNDd0IsSUFBSSxDQUFDeEIsRUFBM0MsQ0FESixDQVNILENBWkEsQ0FKTCxHQW5DSCxDQXFERyx5RUFBQyw0REFBRCxZQUNJLHdFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVGLElBQUksQ0FBQ2UsR0FBTCxDQUFTa0IsS0FBM0IsRUFESixDQUVJLHdGQUNJLHdFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVqQyxJQUFJLENBQUNlLEdBQUwsQ0FBU21CLFlBQTNCLEVBREosRUFGSixHQXJESCxDQTJERyx5RUFBQyxxREFBRCxZQUNJLHdGQUNJLCtFQUFLLEdBQUcsQ0FBRWxDLElBQUksQ0FBQ2UsR0FBTCxDQUFTb0IsTUFBVCxDQUFnQkMsR0FBMUIsQ0FBK0IsR0FBRyxDQUFFcEMsSUFBSSxDQUFDZSxHQUFMLENBQVNvQixNQUFULENBQWdCRSxHQUFwRCxFQURKLEVBREosQ0FJSSx3RkFDSSwrRUFBSyxHQUFHLENBQUVyQyxJQUFJLENBQUNlLEdBQUwsQ0FBU3VCLE1BQVQsQ0FBZ0JGLEdBQTFCLENBQStCLEdBQUcsQ0FBRXBDLElBQUksQ0FBQ2UsR0FBTCxDQUFTdUIsTUFBVCxDQUFnQkQsR0FBcEQsRUFESixFQUpKLENBT0ksd0ZBQ0ksK0VBQUssR0FBRyxDQUFFckMsSUFBSSxDQUFDZSxHQUFMLENBQVN3QixNQUFULENBQWdCSCxHQUExQixDQUErQixHQUFHLENBQUVwQyxJQUFJLENBQUNlLEdBQUwsQ0FBU3dCLE1BQVQsQ0FBZ0JGLEdBQXBELEVBREosRUFQSixDQVVJLHdGQUNJLCtFQUFLLEdBQUcsQ0FBRXJDLElBQUksQ0FBQ2UsR0FBTCxDQUFTeUIsTUFBVCxDQUFnQkosR0FBMUIsQ0FBK0IsR0FBRyxDQUFFcEMsSUFBSSxDQUFDZSxHQUFMLENBQVN5QixNQUFULENBQWdCSCxHQUFwRCxFQURKLEVBVkosQ0FhSSx3RkFDSSwrRUFBSyxHQUFHLENBQUVyQyxJQUFJLENBQUNlLEdBQUwsQ0FBUzBCLE1BQVQsQ0FBZ0JMLEdBQTFCLENBQStCLEdBQUcsQ0FBRXBDLElBQUksQ0FBQ2UsR0FBTCxDQUFTMEIsTUFBVCxDQUFnQkosR0FBcEQsRUFESixFQWJKLENBZ0JJLHdGQUNJLCtFQUFLLEdBQUcsQ0FBRXJDLElBQUksQ0FBQ2UsR0FBTCxDQUFTMkIsTUFBVCxDQUFnQk4sR0FBMUIsQ0FBK0IsR0FBRyxDQUFFcEMsSUFBSSxDQUFDZSxHQUFMLENBQVMyQixNQUFULENBQWdCTCxHQUFwRCxFQURKLEVBaEJKLEdBM0RILENBK0VHLHdFQUFDLHdEQUFELFdBQ0ksd0VBQUMsVUFBRCxFQUFZLElBQUksQ0FBRXJDLElBQUksQ0FBQ2UsR0FBTCxDQUFTNEIsUUFBM0IsRUFESixFQS9FSCxDQWtGRyx5RUFBQywyREFBRCxZQUNJLCtFQUFLLEdBQUcsQ0FBRTNDLElBQUksQ0FBQ2UsR0FBTCxDQUFTYSxHQUFuQixDQUF3QixHQUFHLENBQUMsRUFBNUIsRUFESixDQUVJLCtFQUFLLFNBQVMsQ0FBQyxTQUFmLFVBQ0ksd0VBQUMsVUFBRCxFQUFZLElBQUksQ0FBRTVCLElBQUksQ0FBQ2UsR0FBTCxDQUFTNkIsUUFBM0IsRUFESixFQUZKLEdBbEZILEdBTEgsR0FERixDQWlHSCxDQXpHRCxDQTJHZUMsdUhBQU8sQ0FBQ3JELEtBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5pbXBvcnQgVG9wQ29udGVudCBmcm9tICcuLi9zdHlsZXMvdG9wQ29udGVudCdcclxuaW1wb3J0IENvbnRlbnRTZWN0aW9uIGZyb20gJy4uL3N0eWxlcy9jb250ZW50U2VjdGlvbidcclxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3N0eWxlcy9wYWdlQ29udGVudCdcclxuaW1wb3J0IFN0YXRzIGZyb20gJy4uL3N0eWxlcy9zdGF0cydcclxuaW1wb3J0IFBoaWxhbnRocm9weSBmcm9tICcuLi9zdHlsZXMvcGhpbGFudGhyb3B5J1xyXG5pbXBvcnQgTG9nb3MgZnJvbSAnLi4vc3R5bGVzL2xvZ29zJ1xyXG5pbXBvcnQgQXBwcm9hY2ggZnJvbSAnLi4vc3R5bGVzL2FwcHJvYWNoJ1xyXG5pbXBvcnQgRGlyZWN0aW9ucyBmcm9tICcuLi9zdHlsZXMvZGlyZWN0aW9ucydcclxuaW1wb3J0IEl0ZW1zIGZyb20gJy4uL3N0eWxlcy9pdGVtcydcclxuXHJcbmNvbnN0IEFib3V0ID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG4gICAgY29uc3QgaW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtwYWdlLmZlYXR1cmVkX21lZGlhXVxyXG4gICAgY29uc3QgbGVhZGVyc2hpcCA9IHN0YXRlLnNvdXJjZS5nZXQoYC9sZWFkZXJzaGlwYClcclxuXHJcbiAgICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cGFnZS50aXRsZS5yZW5kZXJlZH0tIHtzdGF0ZS50aGVtZS5zaXRlTmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwYWdlLmV4Y2VycHQucmVuZGVyZWR9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPFRvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDE+PEh0bWwyUmVhY3QgaHRtbD17cGFnZS50aXRsZS5yZW5kZXJlZH0gLz48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+PEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2Yuc3VidGl0bGV9IC8+PC9oMj5cclxuICAgICAgICAgICAgICAgIHsgaW1hZ2UgPyBcclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmVhdHVyZWRJbWFnZVwiIHNyYz17aW1hZ2Uuc291cmNlX3VybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgICAgIDwvVG9wQ29udGVudD5cclxuICAgICAgICAgICAgPENvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuY29udGVudC5yZW5kZXJlZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8U3RhdHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj57cGFnZS5hY2Yuc3RhdGlzdGljXzEubnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5hY2Yuc3RhdGlzdGljXzEubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj57cGFnZS5hY2Yuc3RhdGlzdGljXzIubnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5hY2Yuc3RhdGlzdGljXzIubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj57cGFnZS5hY2Yuc3RhdGlzdGljXzMubnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5hY2Yuc3RhdGlzdGljXzMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj57cGFnZS5hY2Yuc3RhdGlzdGljXzQubnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5hY2Yuc3RhdGlzdGljXzQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj57cGFnZS5hY2Yuc3RhdGlzdGljXzUubnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5hY2Yuc3RhdGlzdGljXzUubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N0YXRzPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8SXRlbXM+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJsaXN0aW5nSXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAge2xlYWRlcnNoaXAuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImxpc3RpbmdJdGVtXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGxpbms9e3Bvc3QubGlua30ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3RpbmdJbWFnZVwiIHNyYz17cG9zdC5hY2YudGh1bWJuYWlsX2ltYWdlfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19IC8+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5hY2Yuam9iX3RpdGxlIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9JdGVtcz4gXHJcbiAgICAgICAgICAgIDxQaGlsYW50aHJvcHk+XHJcbiAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi52aWRlb30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5hY2YucGhpbGFudGhyb3B5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUGhpbGFudGhyb3B5PlxyXG4gICAgICAgICAgICA8TG9nb3M+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5sb2dvXzEudXJsfSBhbHQ9e3BhZ2UuYWNmLmxvZ29fMS5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BhZ2UuYWNmLmxvZ29fMi51cmx9IGFsdD17cGFnZS5hY2YubG9nb18yLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZS5hY2YubG9nb18zLnVybH0gYWx0PXtwYWdlLmFjZi5sb2dvXzMuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5sb2dvXzQudXJsfSBhbHQ9e3BhZ2UuYWNmLmxvZ29fNC5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BhZ2UuYWNmLmxvZ29fNS51cmx9IGFsdD17cGFnZS5hY2YubG9nb181LmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZS5hY2YubG9nb182LnVybH0gYWx0PXtwYWdlLmFjZi5sb2dvXzYuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTG9nb3M+XHJcbiAgICAgICAgICAgIDxBcHByb2FjaD5cclxuICAgICAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuYWNmLmFwcHJvYWNofSAvPlxyXG4gICAgICAgICAgICA8L0FwcHJvYWNoPlxyXG4gICAgICAgICAgICA8RGlyZWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYWdlLmFjZi5tYXB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwYWdlLmFjZi52aXNpdF91c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0RpcmVjdGlvbnM+IFxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChBYm91dCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/about.js\n");

/***/ })

})