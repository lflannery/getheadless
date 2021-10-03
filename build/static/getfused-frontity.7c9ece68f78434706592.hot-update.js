webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/handlers/recent-blog-handler.js":
/*!********************************************************************************!*\
  !*** ./packages/getfused-theme/src/components/handlers/recent-blog-handler.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\nconst leadershipHandler={pattern:\"/\",func:async({route,params,state,libraries})=>{const response=await libraries.source.api.get({endpoint:\"/wp/v2/posts\",params:{per_page:2}});const items=await libraries.source.populate({response,state});Object.assign(state.source.data[route],{isPortfolioType:true,items:items.items,items});}};/* harmony default export */ __webpack_exports__[\"default\"] = (leadershipHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9yZWNlbnQtYmxvZy1oYW5kbGVyLmpzP2MwMDEiXSwibmFtZXMiOlsibGVhZGVyc2hpcEhhbmRsZXIiLCJwYXR0ZXJuIiwiZnVuYyIsInJvdXRlIiwicGFyYW1zIiwic3RhdGUiLCJsaWJyYXJpZXMiLCJyZXNwb25zZSIsInNvdXJjZSIsImFwaSIsImdldCIsImVuZHBvaW50IiwicGVyX3BhZ2UiLCJpdGVtcyIsInBvcHVsYXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsImlzUG9ydGZvbGlvVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxLQUFNQSxrQkFBaUIsQ0FBRyxDQUN0QkMsT0FBTyxDQUFFLEdBRGEsQ0FFdEJDLElBQUksQ0FBRSxNQUFPLENBQUVDLEtBQUYsQ0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsQ0FBd0JDLFNBQXhCLENBQVAsR0FBK0MsQ0FDbkQsS0FBTUMsU0FBUSxDQUFHLEtBQU1ELFVBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsR0FBakIsQ0FBcUJDLEdBQXJCLENBQXlCLENBQzlDQyxRQUFRLENBQUUsY0FEb0MsQ0FFOUNQLE1BQU0sQ0FBRSxDQUNKUSxRQUFRLENBQUUsQ0FETixDQUZzQyxDQUF6QixDQUF2QixDQVFBLEtBQU1DLE1BQUssQ0FBRyxLQUFNUCxVQUFTLENBQUNFLE1BQVYsQ0FBaUJNLFFBQWpCLENBQTBCLENBQUVQLFFBQUYsQ0FBWUYsS0FBWixDQUExQixDQUFwQixDQUVBVSxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsS0FBSyxDQUFDRyxNQUFOLENBQWFTLElBQWIsQ0FBa0JkLEtBQWxCLENBQWQsQ0FBd0MsQ0FDdENlLGVBQWUsQ0FBRSxJQURxQixDQUV0Q0wsS0FBSyxDQUFFQSxLQUFLLENBQUNBLEtBRnlCLENBR3RDQSxLQUhzQyxDQUF4QyxFQU1ELENBbkJxQixDQUExQixDQXNCaUJiLGdGQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGFuZGxlcnMvcmVjZW50LWJsb2ctaGFuZGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxlYWRlcnNoaXBIYW5kbGVyID0ge1xyXG4gICAgcGF0dGVybjogXCIvXCIsXHJcbiAgICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaWJyYXJpZXMuc291cmNlLmFwaS5nZXQoe1xyXG4gICAgICAgIGVuZHBvaW50OiBcIi93cC92Mi9wb3N0c1wiLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBwZXJfcGFnZTogMixcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcblxyXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UucG9wdWxhdGUoeyByZXNwb25zZSwgc3RhdGUgfSk7XHJcblxyXG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXSwge1xyXG4gICAgICAgIGlzUG9ydGZvbGlvVHlwZTogdHJ1ZSxcclxuICAgICAgICBpdGVtczogaXRlbXMuaXRlbXMsXHJcbiAgICAgICAgaXRlbXNcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGxlYWRlcnNoaXBIYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/handlers/recent-blog-handler.js\n");

/***/ })

})