webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/handlers/blog-handler.js":
/*!*************************************************************************!*\
  !*** ./packages/getfused-theme/src/components/handlers/blog-handler.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\nconst blogHandler={pattern:\"/blog\",func:async({route,params,state,libraries})=>{const response=await libraries.source.api.get({endpoint:\"/wp/v2/posts\",params:{per_page:16}});const items=await libraries.source.populate({response,state});Object.assign(state.source.data[route],{isPortfolioType:true,items:items.items,items});}};/* harmony default export */ __webpack_exports__[\"default\"] = (blogHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9ibG9nLWhhbmRsZXIuanM/OWQwNiJdLCJuYW1lcyI6WyJibG9nSGFuZGxlciIsInBhdHRlcm4iLCJmdW5jIiwicm91dGUiLCJwYXJhbXMiLCJzdGF0ZSIsImxpYnJhcmllcyIsInJlc3BvbnNlIiwic291cmNlIiwiYXBpIiwiZ2V0IiwiZW5kcG9pbnQiLCJwZXJfcGFnZSIsIml0ZW1zIiwicG9wdWxhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhIiwiaXNQb3J0Zm9saW9UeXBlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLEtBQU1BLFlBQVcsQ0FBRyxDQUNoQkMsT0FBTyxDQUFFLE9BRE8sQ0FFaEJDLElBQUksQ0FBRSxNQUFPLENBQUVDLEtBQUYsQ0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsQ0FBd0JDLFNBQXhCLENBQVAsR0FBK0MsQ0FDbkQsS0FBTUMsU0FBUSxDQUFHLEtBQU1ELFVBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsR0FBakIsQ0FBcUJDLEdBQXJCLENBQXlCLENBQzlDQyxRQUFRLENBQUUsY0FEb0MsQ0FFOUNQLE1BQU0sQ0FBRSxDQUNKUSxRQUFRLENBQUUsRUFETixDQUZzQyxDQUF6QixDQUF2QixDQVFBLEtBQU1DLE1BQUssQ0FBRyxLQUFNUCxVQUFTLENBQUNFLE1BQVYsQ0FBaUJNLFFBQWpCLENBQTBCLENBQUVQLFFBQUYsQ0FBWUYsS0FBWixDQUExQixDQUFwQixDQUVBVSxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsS0FBSyxDQUFDRyxNQUFOLENBQWFTLElBQWIsQ0FBa0JkLEtBQWxCLENBQWQsQ0FBd0MsQ0FDdENlLGVBQWUsQ0FBRSxJQURxQixDQUV0Q0wsS0FBSyxDQUFFQSxLQUFLLENBQUNBLEtBRnlCLENBR3RDQSxLQUhzQyxDQUF4QyxFQU1ELENBbkJlLENBQXBCLENBc0JpQmIsMEVBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9ibG9nLWhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBibG9nSGFuZGxlciA9IHtcclxuICAgIHBhdHRlcm46IFwiL2Jsb2dcIixcclxuICAgIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UuYXBpLmdldCh7XHJcbiAgICAgICAgZW5kcG9pbnQ6IFwiL3dwL3YyL3Bvc3RzXCIsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxNixcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcblxyXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UucG9wdWxhdGUoeyByZXNwb25zZSwgc3RhdGUgfSk7XHJcblxyXG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXSwge1xyXG4gICAgICAgIGlzUG9ydGZvbGlvVHlwZTogdHJ1ZSxcclxuICAgICAgICBpdGVtczogaXRlbXMuaXRlbXMsXHJcbiAgICAgICAgaXRlbXNcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGJsb2dIYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/handlers/blog-handler.js\n");

/***/ })

})