webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/handlers/team-handler.js":
/*!*************************************************************************!*\
  !*** ./packages/getfused-theme/src/components/handlers/team-handler.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\nconst teamHandler={pattern:\"/about/team\",func:async({route,params,state,libraries})=>{const response=await libraries.source.api.get({endpoint:\"/wp/v2/team\",params:{per_page:50,order_by:\"rank first_name\",order:\"asc\"}});const items=await libraries.source.populate({response,state});Object.assign(state.source.data[route],{isPortfolioType:true,items:items.items,items});}};/* harmony default export */ __webpack_exports__[\"default\"] = (teamHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy90ZWFtLWhhbmRsZXIuanM/N2MwOSJdLCJuYW1lcyI6WyJ0ZWFtSGFuZGxlciIsInBhdHRlcm4iLCJmdW5jIiwicm91dGUiLCJwYXJhbXMiLCJzdGF0ZSIsImxpYnJhcmllcyIsInJlc3BvbnNlIiwic291cmNlIiwiYXBpIiwiZ2V0IiwiZW5kcG9pbnQiLCJwZXJfcGFnZSIsIm9yZGVyX2J5Iiwib3JkZXIiLCJpdGVtcyIsInBvcHVsYXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsImlzUG9ydGZvbGlvVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxLQUFNQSxZQUFXLENBQUcsQ0FDaEJDLE9BQU8sQ0FBRSxhQURPLENBRWhCQyxJQUFJLENBQUUsTUFBTyxDQUFFQyxLQUFGLENBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLENBQXdCQyxTQUF4QixDQUFQLEdBQStDLENBQ25ELEtBQU1DLFNBQVEsQ0FBRyxLQUFNRCxVQUFTLENBQUNFLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCQyxHQUFyQixDQUF5QixDQUM5Q0MsUUFBUSxDQUFFLGFBRG9DLENBRTlDUCxNQUFNLENBQUUsQ0FDSlEsUUFBUSxDQUFFLEVBRE4sQ0FFSkMsUUFBUSxDQUFFLGlCQUZOLENBR0pDLEtBQUssQ0FBRSxLQUhILENBRnNDLENBQXpCLENBQXZCLENBVUEsS0FBTUMsTUFBSyxDQUFHLEtBQU1ULFVBQVMsQ0FBQ0UsTUFBVixDQUFpQlEsUUFBakIsQ0FBMEIsQ0FBRVQsUUFBRixDQUFZRixLQUFaLENBQTFCLENBQXBCLENBRUFZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjYixLQUFLLENBQUNHLE1BQU4sQ0FBYVcsSUFBYixDQUFrQmhCLEtBQWxCLENBQWQsQ0FBd0MsQ0FDdENpQixlQUFlLENBQUUsSUFEcUIsQ0FFdENMLEtBQUssQ0FBRUEsS0FBSyxDQUFDQSxLQUZ5QixDQUd0Q0EsS0FIc0MsQ0FBeEMsRUFNRCxDQXJCZSxDQUFwQixDQXdCaUJmLDBFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGFuZGxlcnMvdGVhbS1oYW5kbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGVhbUhhbmRsZXIgPSB7XHJcbiAgICBwYXR0ZXJuOiBcIi9hYm91dC90ZWFtXCIsXHJcbiAgICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaWJyYXJpZXMuc291cmNlLmFwaS5nZXQoe1xyXG4gICAgICAgIGVuZHBvaW50OiBcIi93cC92Mi90ZWFtXCIsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHBlcl9wYWdlOiA1MCxcclxuICAgICAgICAgICAgb3JkZXJfYnk6IFwicmFuayBmaXJzdF9uYW1lXCIsXHJcbiAgICAgICAgICAgIG9yZGVyOiBcImFzY1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG5cclxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBsaWJyYXJpZXMuc291cmNlLnBvcHVsYXRlKHsgcmVzcG9uc2UsIHN0YXRlIH0pO1xyXG5cclxuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5zb3VyY2UuZGF0YVtyb3V0ZV0sIHtcclxuICAgICAgICBpc1BvcnRmb2xpb1R5cGU6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IGl0ZW1zLml0ZW1zLFxyXG4gICAgICAgIGl0ZW1zXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB0ZWFtSGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/handlers/team-handler.js\n");

/***/ })

})