webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/handlers/recent-blog-handler.js":
/*!********************************************************************************!*\
  !*** ./packages/getfused-theme/src/components/handlers/recent-blog-handler.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\nconst recentBlogHandler={pattern:\"/recent-post\",func:async({route,params,state,libraries})=>{const response=await libraries.source.api.get({endpoint:\"/wp/v2/posts\",params:{per_page:4,order_by:'date',order:\"desc\"}});const items=await libraries.source.populate({response,state});Object.assign(state.source.data[route],{isPortfolioType:true,items:items.items,items});}};/* harmony default export */ __webpack_exports__[\"default\"] = (recentBlogHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9yZWNlbnQtYmxvZy1oYW5kbGVyLmpzP2MwMDEiXSwibmFtZXMiOlsicmVjZW50QmxvZ0hhbmRsZXIiLCJwYXR0ZXJuIiwiZnVuYyIsInJvdXRlIiwicGFyYW1zIiwic3RhdGUiLCJsaWJyYXJpZXMiLCJyZXNwb25zZSIsInNvdXJjZSIsImFwaSIsImdldCIsImVuZHBvaW50IiwicGVyX3BhZ2UiLCJvcmRlcl9ieSIsIm9yZGVyIiwiaXRlbXMiLCJwb3B1bGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJpc1BvcnRmb2xpb1R5cGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsS0FBTUEsa0JBQWlCLENBQUcsQ0FDdEJDLE9BQU8sQ0FBRSxjQURhLENBRXRCQyxJQUFJLENBQUUsTUFBTyxDQUFFQyxLQUFGLENBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLENBQXdCQyxTQUF4QixDQUFQLEdBQStDLENBQ25ELEtBQU1DLFNBQVEsQ0FBRyxLQUFNRCxVQUFTLENBQUNFLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCQyxHQUFyQixDQUF5QixDQUM5Q0MsUUFBUSxDQUFFLGNBRG9DLENBRTlDUCxNQUFNLENBQUUsQ0FDSlEsUUFBUSxDQUFFLENBRE4sQ0FFSkMsUUFBUSxDQUFFLE1BRk4sQ0FHSkMsS0FBSyxDQUFFLE1BSEgsQ0FGc0MsQ0FBekIsQ0FBdkIsQ0FVQSxLQUFNQyxNQUFLLENBQUcsS0FBTVQsVUFBUyxDQUFDRSxNQUFWLENBQWlCUSxRQUFqQixDQUEwQixDQUFFVCxRQUFGLENBQVlGLEtBQVosQ0FBMUIsQ0FBcEIsQ0FFQVksTUFBTSxDQUFDQyxNQUFQLENBQWNiLEtBQUssQ0FBQ0csTUFBTixDQUFhVyxJQUFiLENBQWtCaEIsS0FBbEIsQ0FBZCxDQUF3QyxDQUN0Q2lCLGVBQWUsQ0FBRSxJQURxQixDQUV0Q0wsS0FBSyxDQUFFQSxLQUFLLENBQUNBLEtBRnlCLENBR3RDQSxLQUhzQyxDQUF4QyxFQU1ELENBckJxQixDQUExQixDQXdCaUJmLGdGQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGFuZGxlcnMvcmVjZW50LWJsb2ctaGFuZGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlY2VudEJsb2dIYW5kbGVyID0ge1xyXG4gICAgcGF0dGVybjogXCIvcmVjZW50LXBvc3RcIixcclxuICAgIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UuYXBpLmdldCh7XHJcbiAgICAgICAgZW5kcG9pbnQ6IFwiL3dwL3YyL3Bvc3RzXCIsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHBlcl9wYWdlOiA0LFxyXG4gICAgICAgICAgICBvcmRlcl9ieTogJ2RhdGUnLFxyXG4gICAgICAgICAgICBvcmRlcjogXCJkZXNjXCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcblxyXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UucG9wdWxhdGUoeyByZXNwb25zZSwgc3RhdGUgfSk7XHJcblxyXG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXSwge1xyXG4gICAgICAgIGlzUG9ydGZvbGlvVHlwZTogdHJ1ZSxcclxuICAgICAgICBpdGVtczogaXRlbXMuaXRlbXMsXHJcbiAgICAgICAgaXRlbXNcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgcmVjZW50QmxvZ0hhbmRsZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/handlers/recent-blog-handler.js\n");

/***/ })

})