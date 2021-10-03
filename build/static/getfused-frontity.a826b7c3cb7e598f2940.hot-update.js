webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/handlers/recent-blog-handler.js":
/*!********************************************************************************!*\
  !*** ./packages/getfused-theme/src/components/handlers/recent-blog-handler.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\nconst recentBlogHandler={pattern:\"/blog\",func:async({route,params,state,libraries})=>{const response=await libraries.source.api.get({endpoint:\"/wp/v2/posts\",params:{per_page:3}});const items=await libraries.source.populate({response,state});Object.assign(state.source.data[route],{isPortfolioType:true,items:items.items,items});}};/* harmony default export */ __webpack_exports__[\"default\"] = (recentBlogHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9yZWNlbnQtYmxvZy1oYW5kbGVyLmpzP2MwMDEiXSwibmFtZXMiOlsicmVjZW50QmxvZ0hhbmRsZXIiLCJwYXR0ZXJuIiwiZnVuYyIsInJvdXRlIiwicGFyYW1zIiwic3RhdGUiLCJsaWJyYXJpZXMiLCJyZXNwb25zZSIsInNvdXJjZSIsImFwaSIsImdldCIsImVuZHBvaW50IiwicGVyX3BhZ2UiLCJpdGVtcyIsInBvcHVsYXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsImlzUG9ydGZvbGlvVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxLQUFNQSxrQkFBaUIsQ0FBRyxDQUN0QkMsT0FBTyxDQUFFLE9BRGEsQ0FFdEJDLElBQUksQ0FBRSxNQUFPLENBQUVDLEtBQUYsQ0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsQ0FBd0JDLFNBQXhCLENBQVAsR0FBK0MsQ0FDbkQsS0FBTUMsU0FBUSxDQUFHLEtBQU1ELFVBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsR0FBakIsQ0FBcUJDLEdBQXJCLENBQXlCLENBQzlDQyxRQUFRLENBQUUsY0FEb0MsQ0FFOUNQLE1BQU0sQ0FBRSxDQUNKUSxRQUFRLENBQUUsQ0FETixDQUZzQyxDQUF6QixDQUF2QixDQVFBLEtBQU1DLE1BQUssQ0FBRyxLQUFNUCxVQUFTLENBQUNFLE1BQVYsQ0FBaUJNLFFBQWpCLENBQTBCLENBQUVQLFFBQUYsQ0FBWUYsS0FBWixDQUExQixDQUFwQixDQUVBVSxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsS0FBSyxDQUFDRyxNQUFOLENBQWFTLElBQWIsQ0FBa0JkLEtBQWxCLENBQWQsQ0FBd0MsQ0FDdENlLGVBQWUsQ0FBRSxJQURxQixDQUV0Q0wsS0FBSyxDQUFFQSxLQUFLLENBQUNBLEtBRnlCLENBR3RDQSxLQUhzQyxDQUF4QyxFQU1ELENBbkJxQixDQUExQixDQXNCaUJiLGdGQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGFuZGxlcnMvcmVjZW50LWJsb2ctaGFuZGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlY2VudEJsb2dIYW5kbGVyID0ge1xyXG4gICAgcGF0dGVybjogXCIvYmxvZ1wiLFxyXG4gICAgZnVuYzogYXN5bmMgKHsgcm91dGUsIHBhcmFtcywgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGlicmFyaWVzLnNvdXJjZS5hcGkuZ2V0KHtcclxuICAgICAgICBlbmRwb2ludDogXCIvd3AvdjIvcG9zdHNcIixcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgcGVyX3BhZ2U6IDMsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG5cclxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBsaWJyYXJpZXMuc291cmNlLnBvcHVsYXRlKHsgcmVzcG9uc2UsIHN0YXRlIH0pO1xyXG5cclxuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5zb3VyY2UuZGF0YVtyb3V0ZV0sIHtcclxuICAgICAgICBpc1BvcnRmb2xpb1R5cGU6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IGl0ZW1zLml0ZW1zLFxyXG4gICAgICAgIGl0ZW1zXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IHJlY2VudEJsb2dIYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/handlers/recent-blog-handler.js\n");

/***/ })

})