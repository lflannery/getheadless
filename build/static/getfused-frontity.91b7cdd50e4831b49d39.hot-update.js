webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/handlers/case-study-handler.js":
/*!*******************************************************************************!*\
  !*** ./packages/getfused-theme/src/components/handlers/case-study-handler.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\nconst caseStudyHandler={pattern:\"/work\",func:async({route,params,state,libraries})=>{const response=await libraries.source.api.get({endpoint:\"/wp/v2/case-study\",params:{per_page:50,order_by:\"date\",order:\"desc\"}});const items=await libraries.source.populate({response,state});Object.assign(state.source.data[route],{isPortfolioType:true,items:items.items,items});}};/* harmony default export */ __webpack_exports__[\"default\"] = (caseStudyHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9jYXNlLXN0dWR5LWhhbmRsZXIuanM/ODk3ZSJdLCJuYW1lcyI6WyJjYXNlU3R1ZHlIYW5kbGVyIiwicGF0dGVybiIsImZ1bmMiLCJyb3V0ZSIsInBhcmFtcyIsInN0YXRlIiwibGlicmFyaWVzIiwicmVzcG9uc2UiLCJzb3VyY2UiLCJhcGkiLCJnZXQiLCJlbmRwb2ludCIsInBlcl9wYWdlIiwib3JkZXJfYnkiLCJvcmRlciIsIml0ZW1zIiwicG9wdWxhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhIiwiaXNQb3J0Zm9saW9UeXBlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLEtBQU1BLGlCQUFnQixDQUFHLENBQ3JCQyxPQUFPLENBQUUsT0FEWSxDQUVyQkMsSUFBSSxDQUFFLE1BQU8sQ0FBRUMsS0FBRixDQUFTQyxNQUFULENBQWlCQyxLQUFqQixDQUF3QkMsU0FBeEIsQ0FBUCxHQUErQyxDQUNuRCxLQUFNQyxTQUFRLENBQUcsS0FBTUQsVUFBUyxDQUFDRSxNQUFWLENBQWlCQyxHQUFqQixDQUFxQkMsR0FBckIsQ0FBeUIsQ0FDOUNDLFFBQVEsQ0FBRSxtQkFEb0MsQ0FFOUNQLE1BQU0sQ0FBRSxDQUNKUSxRQUFRLENBQUUsRUFETixDQUVKQyxRQUFRLENBQUUsTUFGTixDQUdKQyxLQUFLLENBQUUsTUFISCxDQUZzQyxDQUF6QixDQUF2QixDQVVBLEtBQU1DLE1BQUssQ0FBRyxLQUFNVCxVQUFTLENBQUNFLE1BQVYsQ0FBaUJRLFFBQWpCLENBQTBCLENBQUVULFFBQUYsQ0FBWUYsS0FBWixDQUExQixDQUFwQixDQUVBWSxNQUFNLENBQUNDLE1BQVAsQ0FBY2IsS0FBSyxDQUFDRyxNQUFOLENBQWFXLElBQWIsQ0FBa0JoQixLQUFsQixDQUFkLENBQXdDLENBQ3RDaUIsZUFBZSxDQUFFLElBRHFCLENBRXRDTCxLQUFLLENBQUVBLEtBQUssQ0FBQ0EsS0FGeUIsQ0FHdENBLEtBSHNDLENBQXhDLEVBTUQsQ0FyQm9CLENBQXpCLENBd0JpQmYsK0VBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9jYXNlLXN0dWR5LWhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXNlU3R1ZHlIYW5kbGVyID0ge1xyXG4gICAgcGF0dGVybjogXCIvd29ya1wiLFxyXG4gICAgZnVuYzogYXN5bmMgKHsgcm91dGUsIHBhcmFtcywgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGlicmFyaWVzLnNvdXJjZS5hcGkuZ2V0KHtcclxuICAgICAgICBlbmRwb2ludDogXCIvd3AvdjIvY2FzZS1zdHVkeVwiLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBwZXJfcGFnZTogNTAsXHJcbiAgICAgICAgICAgIG9yZGVyX2J5OiBcImRhdGVcIixcclxuICAgICAgICAgICAgb3JkZXI6IFwiZGVzY1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG5cclxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBsaWJyYXJpZXMuc291cmNlLnBvcHVsYXRlKHsgcmVzcG9uc2UsIHN0YXRlIH0pO1xyXG5cclxuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5zb3VyY2UuZGF0YVtyb3V0ZV0sIHtcclxuICAgICAgICBpc1BvcnRmb2xpb1R5cGU6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IGl0ZW1zLml0ZW1zLFxyXG4gICAgICAgIGl0ZW1zXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjYXNlU3R1ZHlIYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/handlers/case-study-handler.js\n");

/***/ })

})