webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/handlers/leadership-handler.js":
/*!*******************************************************************************!*\
  !*** ./packages/getfused-theme/src/components/handlers/leadership-handler.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\nconst leadershipHandler={pattern:\"/about\",func:async({route,params,state,libraries})=>{const response=await libraries.source.api.get({endpoint:\"/wp/v2/team\",params:{per_page:2}});const items=await libraries.source.populate({response,state});Object.assign(state.source.data[route],{isPortfolioType:true,items:items.items,items});}};/* harmony default export */ __webpack_exports__[\"default\"] = (leadershipHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9sZWFkZXJzaGlwLWhhbmRsZXIuanM/MDMyYyJdLCJuYW1lcyI6WyJsZWFkZXJzaGlwSGFuZGxlciIsInBhdHRlcm4iLCJmdW5jIiwicm91dGUiLCJwYXJhbXMiLCJzdGF0ZSIsImxpYnJhcmllcyIsInJlc3BvbnNlIiwic291cmNlIiwiYXBpIiwiZ2V0IiwiZW5kcG9pbnQiLCJwZXJfcGFnZSIsIml0ZW1zIiwicG9wdWxhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhIiwiaXNQb3J0Zm9saW9UeXBlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLEtBQU1BLGtCQUFpQixDQUFHLENBQ3RCQyxPQUFPLENBQUUsUUFEYSxDQUV0QkMsSUFBSSxDQUFFLE1BQU8sQ0FBRUMsS0FBRixDQUFTQyxNQUFULENBQWlCQyxLQUFqQixDQUF3QkMsU0FBeEIsQ0FBUCxHQUErQyxDQUNuRCxLQUFNQyxTQUFRLENBQUcsS0FBTUQsVUFBUyxDQUFDRSxNQUFWLENBQWlCQyxHQUFqQixDQUFxQkMsR0FBckIsQ0FBeUIsQ0FDOUNDLFFBQVEsQ0FBRSxhQURvQyxDQUU5Q1AsTUFBTSxDQUFFLENBQ0pRLFFBQVEsQ0FBRSxDQUROLENBRnNDLENBQXpCLENBQXZCLENBUUEsS0FBTUMsTUFBSyxDQUFHLEtBQU1QLFVBQVMsQ0FBQ0UsTUFBVixDQUFpQk0sUUFBakIsQ0FBMEIsQ0FBRVAsUUFBRixDQUFZRixLQUFaLENBQTFCLENBQXBCLENBRUFVLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCxLQUFLLENBQUNHLE1BQU4sQ0FBYVMsSUFBYixDQUFrQmQsS0FBbEIsQ0FBZCxDQUF3QyxDQUN0Q2UsZUFBZSxDQUFFLElBRHFCLENBRXRDTCxLQUFLLENBQUVBLEtBQUssQ0FBQ0EsS0FGeUIsQ0FHdENBLEtBSHNDLENBQXhDLEVBTUQsQ0FuQnFCLENBQTFCLENBc0JpQmIsZ0ZBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9oYW5kbGVycy9sZWFkZXJzaGlwLWhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsZWFkZXJzaGlwSGFuZGxlciA9IHtcclxuICAgIHBhdHRlcm46IFwiL2Fib3V0XCIsXHJcbiAgICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaWJyYXJpZXMuc291cmNlLmFwaS5nZXQoe1xyXG4gICAgICAgIGVuZHBvaW50OiBcIi93cC92Mi90ZWFtXCIsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHBlcl9wYWdlOiAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG5cclxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBsaWJyYXJpZXMuc291cmNlLnBvcHVsYXRlKHsgcmVzcG9uc2UsIHN0YXRlIH0pO1xyXG5cclxuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5zb3VyY2UuZGF0YVtyb3V0ZV0sIHtcclxuICAgICAgICBpc1BvcnRmb2xpb1R5cGU6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IGl0ZW1zLml0ZW1zLFxyXG4gICAgICAgIGl0ZW1zXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBsZWFkZXJzaGlwSGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/handlers/leadership-handler.js\n");

/***/ }),

/***/ "./packages/getfused-theme/src/index.js":
/*!**********************************************!*\
  !*** ./packages/getfused-theme/src/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./packages/getfused-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\n/* harmony import */ var _components_handlers_menu_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/handlers/menu-handler */ \"./packages/getfused-theme/src/components/handlers/menu-handler.js\");\n/* harmony import */ var _components_handlers_case_study_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/handlers/case-study-handler */ \"./packages/getfused-theme/src/components/handlers/case-study-handler.js\");\n/* harmony import */ var _components_handlers_team_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/handlers/team-handler */ \"./packages/getfused-theme/src/components/handlers/team-handler.js\");\n/* harmony import */ var _components_handlers_recent_blog_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/handlers/recent-blog-handler */ \"./packages/getfused-theme/src/components/handlers/recent-blog-handler.js\");\n/* harmony import */ var _components_handlers_leadership_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/handlers/leadership-handler */ \"./packages/getfused-theme/src/components/handlers/leadership-handler.js\");\nconst theme={name:\"getfused-theme\",roots:{theme:_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"]},state:{theme:{menu:[],primaryMenu:\"main-nav\",footerMenu:\"footer-nav\",socialMenu:\"social-nav\",siteName:\"Getfused, Inc.\",featured:{showOnList:false,showOnPost:false}}},actions:{theme:{beforeSSR:async({state,actions})=>{await actions.source.fetch(`/menu/${state.theme.primaryMenu}/`);await actions.source.fetch(`/menu/${state.theme.footerMenu}/`);await actions.source.fetch(`/menu/${state.theme.socialMenu}/`);}}},libraries:{html2react:{processors:[_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]},source:{handlers:[_components_handlers_menu_handler__WEBPACK_IMPORTED_MODULE_3__[\"default\"],_components_handlers_case_study_handler__WEBPACK_IMPORTED_MODULE_4__[\"default\"],_components_handlers_team_handler__WEBPACK_IMPORTED_MODULE_5__[\"default\"],_components_handlers_recent_blog_handler__WEBPACK_IMPORTED_MODULE_6__[\"default\"],_components_handlers_leadership_handler__WEBPACK_IMPORTED_MODULE_7__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvaW5kZXguanM/YTk0MSJdLCJuYW1lcyI6WyJ0aGVtZSIsIm5hbWUiLCJyb290cyIsIlJvb3QiLCJzdGF0ZSIsIm1lbnUiLCJwcmltYXJ5TWVudSIsImZvb3Rlck1lbnUiLCJzb2NpYWxNZW51Iiwic2l0ZU5hbWUiLCJmZWF0dXJlZCIsInNob3dPbkxpc3QiLCJzaG93T25Qb3N0IiwiYWN0aW9ucyIsImJlZm9yZVNTUiIsInNvdXJjZSIsImZldGNoIiwibGlicmFyaWVzIiwiaHRtbDJyZWFjdCIsInByb2Nlc3NvcnMiLCJsaW5rIiwiaGFuZGxlcnMiLCJtZW51SGFuZGxlciIsImNhc2VTdHVkeUhhbmRsZXIiLCJ0ZWFtSGFuZGxlciIsInJlY2VudEJsb2dIYW5kbGVyIiwibGVhZGVyc2hpcEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFTQSxLQUFNQSxNQUFLLENBQUcsQ0FDWkMsSUFBSSxDQUFFLGdCQURNLENBRVpDLEtBQUssQ0FBRSxDQUNMRixLQUFLLENBQUVHLG1EQURGLENBRkssQ0FLWkMsS0FBSyxDQUFFLENBQ0xKLEtBQUssQ0FBRSxDQUNISyxJQUFJLENBQUUsRUFESCxDQUVIQyxXQUFXLENBQUUsVUFGVixDQUdIQyxVQUFVLENBQUUsWUFIVCxDQUlIQyxVQUFVLENBQUUsWUFKVCxDQUtIQyxRQUFRLENBQUUsZ0JBTFAsQ0FNSEMsUUFBUSxDQUFFLENBQ1JDLFVBQVUsQ0FBRSxLQURKLENBRVJDLFVBQVUsQ0FBRSxLQUZKLENBTlAsQ0FERixDQUxLLENBa0JaQyxPQUFPLENBQUUsQ0FDUGIsS0FBSyxDQUFFLENBQ0xjLFNBQVMsQ0FBRSxNQUFPLENBQUVWLEtBQUYsQ0FBU1MsT0FBVCxDQUFQLEdBQThCLENBQ3ZDLEtBQU1BLFFBQU8sQ0FBQ0UsTUFBUixDQUFlQyxLQUFmLENBQXNCLFNBQVFaLEtBQUssQ0FBQ0osS0FBTixDQUFZTSxXQUFZLEdBQXRELENBQU4sQ0FDQSxLQUFNTyxRQUFPLENBQUNFLE1BQVIsQ0FBZUMsS0FBZixDQUFzQixTQUFRWixLQUFLLENBQUNKLEtBQU4sQ0FBWU8sVUFBVyxHQUFyRCxDQUFOLENBQ0EsS0FBTU0sUUFBTyxDQUFDRSxNQUFSLENBQWVDLEtBQWYsQ0FBc0IsU0FBUVosS0FBSyxDQUFDSixLQUFOLENBQVlRLFVBQVcsR0FBckQsQ0FBTixDQUNELENBTEksQ0FEQSxDQWxCRyxDQTJCWlMsU0FBUyxDQUFFLENBQ1RDLFVBQVUsQ0FBRSxDQUNSQyxVQUFVLENBQUUsQ0FBQ0MsNEVBQUQsQ0FESixDQURILENBSVRMLE1BQU0sQ0FBRSxDQUNKTSxRQUFRLENBQUUsQ0FBQ0MseUVBQUQsQ0FBY0MsK0VBQWQsQ0FBZ0NDLHlFQUFoQyxDQUE2Q0MsZ0ZBQTdDLENBQWdFQywrRUFBaEUsQ0FETixDQUpDLENBM0JDLENBQWQsQ0FzQ2UxQixvRUFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL2dldGZ1c2VkLXRoZW1lL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb290IGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCBsaW5rIGZyb20gJ0Bmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvbGluaydcbmltcG9ydCBtZW51SGFuZGxlciBmcm9tICcuL2NvbXBvbmVudHMvaGFuZGxlcnMvbWVudS1oYW5kbGVyJztcbmltcG9ydCBjYXNlU3R1ZHlIYW5kbGVyIGZyb20gJy4vY29tcG9uZW50cy9oYW5kbGVycy9jYXNlLXN0dWR5LWhhbmRsZXInO1xuaW1wb3J0IHRlYW1IYW5kbGVyIGZyb20gJy4vY29tcG9uZW50cy9oYW5kbGVycy90ZWFtLWhhbmRsZXInO1xuaW1wb3J0IHJlY2VudEJsb2dIYW5kbGVyIGZyb20gJy4vY29tcG9uZW50cy9oYW5kbGVycy9yZWNlbnQtYmxvZy1oYW5kbGVyJztcbmltcG9ydCBsZWFkZXJzaGlwSGFuZGxlciBmcm9tICcuL2NvbXBvbmVudHMvaGFuZGxlcnMvbGVhZGVyc2hpcC1oYW5kbGVyJztcblxuXG5jb25zdCB0aGVtZSA9IHtcbiAgbmFtZTogXCJnZXRmdXNlZC10aGVtZVwiLFxuICByb290czoge1xuICAgIHRoZW1lOiBSb290XG4gIH0sXG4gIHN0YXRlOiB7XG4gICAgdGhlbWU6IHtcbiAgICAgICAgbWVudTogW10sXG4gICAgICAgIHByaW1hcnlNZW51OiBcIm1haW4tbmF2XCIsXG4gICAgICAgIGZvb3Rlck1lbnU6IFwiZm9vdGVyLW5hdlwiLFxuICAgICAgICBzb2NpYWxNZW51OiBcInNvY2lhbC1uYXZcIixcbiAgICAgICAgc2l0ZU5hbWU6IFwiR2V0ZnVzZWQsIEluYy5cIixcbiAgICAgICAgZmVhdHVyZWQ6IHtcbiAgICAgICAgICBzaG93T25MaXN0OiBmYWxzZSxcbiAgICAgICAgICBzaG93T25Qb3N0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICB0aGVtZToge1xuICAgICAgYmVmb3JlU1NSOiBhc3luYyAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG4gICAgICAgIGF3YWl0IGFjdGlvbnMuc291cmNlLmZldGNoKGAvbWVudS8ke3N0YXRlLnRoZW1lLnByaW1hcnlNZW51fS9gKTtcbiAgICAgICAgYXdhaXQgYWN0aW9ucy5zb3VyY2UuZmV0Y2goYC9tZW51LyR7c3RhdGUudGhlbWUuZm9vdGVyTWVudX0vYCk7XG4gICAgICAgIGF3YWl0IGFjdGlvbnMuc291cmNlLmZldGNoKGAvbWVudS8ke3N0YXRlLnRoZW1lLnNvY2lhbE1lbnV9L2ApO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBsaWJyYXJpZXM6IHtcbiAgICBodG1sMnJlYWN0OiB7XG4gICAgICAgIHByb2Nlc3NvcnM6IFtsaW5rXVxuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICAgIGhhbmRsZXJzOiBbbWVudUhhbmRsZXIsIGNhc2VTdHVkeUhhbmRsZXIsIHRlYW1IYW5kbGVyLCByZWNlbnRCbG9nSGFuZGxlciwgbGVhZGVyc2hpcEhhbmRsZXJcbiAgICAgICAgXVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/index.js\n");

/***/ })

})