webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/search/search-results.js":
/*!*******************************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/search/search-results.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-form */ \"./packages/getfused-theme/src/components/pages/search/search-form.js\");\n/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/main */ \"./packages/getfused-theme/src/components/styles/main.js\");\n/* harmony import */ var _styles_topContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/topContent */ \"./packages/getfused-theme/src/components/styles/topContent.js\");\n/* harmony import */ var _styles_items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/items */ \"./packages/getfused-theme/src/components/styles/items.js\");\n/* harmony import */ var _styles_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/pagination */ \"./packages/getfused-theme/src/components/styles/pagination.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst SearchResults=({state,libraries})=>{// Get the current path or link\nconst currentPath=state.router.link;// Get the total pages that match the current path/url\nconst{total}=state.source.data[currentPath];const isEmpty=total===0;// Parse to current url to get the search query\nconst parse=libraries.source.parse(state.router.link);// Parse returns an object whose query string is stored in \"s\"\nconst searchQuery=parse.query[\"s\"];// Since we formatted the query string in the search modal, let's reverse the formatting\nconst reverseFormat=query=>query.replace(\"+\",\" \");return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_3__[\"Head\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"title\",{children:[\"Search Results for \",searchQuery,\" - \",state.theme.siteName]})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_styles_main__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_styles_topContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{children:[isEmpty?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"h1\",{children:[\"No Results found for: \",searchQuery,\" \"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"p\",{children:\"We could not find any results for your search. You can give it another try through the search form below.\"})]}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxs\"])(\"h1\",{children:[total,\" \",total===1?\"result\":\"results\",\" found for: \",searchQuery]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_search_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{})]})})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(SearchResults));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuanM/MTI2ZSJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRzIiwic3RhdGUiLCJsaWJyYXJpZXMiLCJjdXJyZW50UGF0aCIsInJvdXRlciIsImxpbmsiLCJ0b3RhbCIsInNvdXJjZSIsImRhdGEiLCJpc0VtcHR5IiwicGFyc2UiLCJzZWFyY2hRdWVyeSIsInF1ZXJ5IiwicmV2ZXJzZUZvcm1hdCIsInJlcGxhY2UiLCJ0aGVtZSIsInNpdGVOYW1lIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsS0FBTUEsY0FBYSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxTQUFULENBQUQsR0FBMEIsQ0FDOUM7QUFDQSxLQUFNQyxZQUFXLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxJQUFqQyxDQUVBO0FBQ0EsS0FBTSxDQUFFQyxLQUFGLEVBQVlMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUFiLENBQWtCTCxXQUFsQixDQUFsQixDQUNBLEtBQU1NLFFBQU8sQ0FBR0gsS0FBSyxHQUFLLENBQTFCLENBRUE7QUFDQSxLQUFNSSxNQUFLLENBQUdSLFNBQVMsQ0FBQ0ssTUFBVixDQUFpQkcsS0FBakIsQ0FBdUJULEtBQUssQ0FBQ0csTUFBTixDQUFhQyxJQUFwQyxDQUFkLENBRUE7QUFDQSxLQUFNTSxZQUFXLENBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZLEdBQVosQ0FBcEIsQ0FFQTtBQUNBLEtBQU1DLGNBQWEsQ0FBR0QsS0FBSyxFQUFJQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxHQUFkLENBQW1CLEdBQW5CLENBQS9CLENBRUEsTUFDRSx3SkFDSSx1RUFBQyw2Q0FBRCxXQUNJLGlIQUEyQkgsV0FBM0IsT0FBMkNWLEtBQUssQ0FBQ2MsS0FBTixDQUFZQyxRQUF2RCxHQURKLEVBREosQ0FJSSx1RUFBQyxvREFBRCxXQUNJLHdFQUFDLDBEQUFELFlBQ0tQLE9BQU8sQ0FDSix1SkFDSSxpSEFBMkJFLFdBQTNCLE9BREosQ0FFSSxrTUFGSixHQURJLENBTUosd0ZBQUtMLEtBQUwsS0FBYUEsS0FBSyxHQUFLLENBQVYsQ0FBYyxRQUFkLENBQXlCLFNBQXRDLGdCQUE2REssV0FBN0QsR0FQUixDQVNJLHVFQUFDLG9EQUFELElBVEosR0FESixFQUpKLEdBREYsQ0FzQkQsQ0F2Q0QsQ0F5Q2VNLHVIQUFPLENBQUNqQixhQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvcGFnZXMvc2VhcmNoL3NlYXJjaC1yZXN1bHRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCIuL3NlYXJjaC1mb3JtXCI7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uL3N0eWxlcy9tYWluJ1xyXG5pbXBvcnQgVG9wQ29udGVudCBmcm9tIFwiLi4vLi4vc3R5bGVzL3RvcENvbnRlbnRcIjtcclxuaW1wb3J0IEl0ZW1zIGZyb20gJy4uLy4uL3N0eWxlcy9pdGVtcydcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2luYXRpb24nXHJcblxyXG5jb25zdCBTZWFyY2hSZXN1bHRzID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgLy8gR2V0IHRoZSBjdXJyZW50IHBhdGggb3IgbGlua1xyXG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gc3RhdGUucm91dGVyLmxpbms7XHJcblxyXG4gIC8vIEdldCB0aGUgdG90YWwgcGFnZXMgdGhhdCBtYXRjaCB0aGUgY3VycmVudCBwYXRoL3VybFxyXG4gIGNvbnN0IHsgdG90YWwgfSA9IHN0YXRlLnNvdXJjZS5kYXRhW2N1cnJlbnRQYXRoXTtcclxuICBjb25zdCBpc0VtcHR5ID0gdG90YWwgPT09IDA7XHJcblxyXG4gIC8vIFBhcnNlIHRvIGN1cnJlbnQgdXJsIHRvIGdldCB0aGUgc2VhcmNoIHF1ZXJ5XHJcbiAgY29uc3QgcGFyc2UgPSBsaWJyYXJpZXMuc291cmNlLnBhcnNlKHN0YXRlLnJvdXRlci5saW5rKTtcclxuXHJcbiAgLy8gUGFyc2UgcmV0dXJucyBhbiBvYmplY3Qgd2hvc2UgcXVlcnkgc3RyaW5nIGlzIHN0b3JlZCBpbiBcInNcIlxyXG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gcGFyc2UucXVlcnlbXCJzXCJdO1xyXG5cclxuICAvLyBTaW5jZSB3ZSBmb3JtYXR0ZWQgdGhlIHF1ZXJ5IHN0cmluZyBpbiB0aGUgc2VhcmNoIG1vZGFsLCBsZXQncyByZXZlcnNlIHRoZSBmb3JtYXR0aW5nXHJcbiAgY29uc3QgcmV2ZXJzZUZvcm1hdCA9IHF1ZXJ5ID0+IHF1ZXJ5LnJlcGxhY2UoXCIrXCIsIFwiIFwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5TZWFyY2ggUmVzdWx0cyBmb3Ige3NlYXJjaFF1ZXJ5fSAtIHtzdGF0ZS50aGVtZS5zaXRlTmFtZX08L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TWFpbj5cclxuICAgICAgICAgICAgPFRvcENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7aXNFbXB0eSA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5ObyBSZXN1bHRzIGZvdW5kIGZvcjoge3NlYXJjaFF1ZXJ5fSA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBjb3VsZCBub3QgZmluZCBhbnkgcmVzdWx0cyBmb3IgeW91ciBzZWFyY2guIFlvdSBjYW4gZ2l2ZSBpdCBhbm90aGVyIHRyeSB0aHJvdWdoIHRoZSBzZWFyY2ggZm9ybSBiZWxvdy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3RvdGFsfSB7dG90YWwgPT09IDEgPyBcInJlc3VsdFwiIDogXCJyZXN1bHRzXCJ9IGZvdW5kIGZvcjoge3NlYXJjaFF1ZXJ5fTwvaDE+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSAvPiAgXHJcbiAgICAgICAgICAgIDwvVG9wQ29udGVudD5cclxuICAgICAgICA8L01haW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoU2VhcmNoUmVzdWx0cyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/search/search-results.js\n");

/***/ })

})