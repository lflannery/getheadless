webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/contact.js":
/*!*****************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/contact.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_topContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/topContent */ \"./packages/getfused-theme/src/components/styles/topContent.js\");\n/* harmony import */ var _styles_contentSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/contentSection */ \"./packages/getfused-theme/src/components/styles/contentSection.js\");\n/* harmony import */ var _styles_pageContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pageContent */ \"./packages/getfused-theme/src/components/styles/pageContent.js\");\n/* harmony import */ var _styles_form_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/form-block */ \"./packages/getfused-theme/src/components/styles/form-block.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Contact=({state,libraries})=>{const data=state.source.get(state.router.link);const page=state.source[data.type][data.id];const Html2React=libraries.html2react.Component;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(\"title\",{children:[page.title.rendered,\"- \",state.theme.siteName]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"meta\",{name:\"description\",content:page.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_styles_topContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"h1\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Html2React,{html:page.title.rendered})})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_styles_contentSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_styles_pageContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Html2React,{html:page.content.rendered})})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(_styles_form_block__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"h2\",{children:\"Inquire Now\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"tagline\",children:\"Let's create something beautiful\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(\"form\",{action:\"\",method:\"get\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(\"div\",{className:\"field\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"label\",{htmlFor:\"firstName\",children:\"First Name\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"input\",{id:\"firstName\",type:\"text\",autoComplete:\"given-name\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(\"div\",{className:\"field\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"label\",{htmlFor:\"lastName\",children:\"Last Name\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"input\",{id:\"lastName\",type:\"text\",autoComplete:\"family-name\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(\"div\",{className:\"field\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"label\",{htmlFor:\"companyName\",children:\"Company Name\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"input\",{id:\"companyName\",type:\"text\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(\"div\",{className:\"field\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"label\",{htmlFor:\"email\",children:\"Email *\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"input\",{id:\"email\",type:\"text\",autoComplete:\"email\",required:true})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(\"div\",{className:\"field last\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"label\",{htmlFor:\"message\",children:\"Tell us about the challenges you are facing\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"textarea\",{id:\"message\",rows:\"7\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"button\",{type:\"submit\",children:\"Send\"})]})]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Contact));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9jb250YWN0LmpzPzI4MTciXSwibmFtZXMiOlsiQ29udGFjdCIsInN0YXRlIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwYWdlIiwidHlwZSIsImlkIiwiSHRtbDJSZWFjdCIsImh0bWwycmVhY3QiLCJDb21wb25lbnQiLCJ0aXRsZSIsInJlbmRlcmVkIiwidGhlbWUiLCJzaXRlTmFtZSIsImV4Y2VycHQiLCJjb250ZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSxLQUFNQSxRQUFPLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLFNBQVQsQ0FBRCxHQUEwQixDQUN0QyxLQUFNQyxLQUFJLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEtBQU1DLEtBQUksQ0FBR1AsS0FBSyxDQUFDRyxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUVBLEtBQU1DLFdBQVUsQ0FBR1QsU0FBUyxDQUFDVSxVQUFWLENBQXFCQyxTQUF4QyxDQUVBLE1BQ0Usd0pBQ0Usd0VBQUMsNkNBQUQsWUFDSSwyRkFBUUwsSUFBSSxDQUFDTSxLQUFMLENBQVdDLFFBQW5CLE1BQStCZCxLQUFLLENBQUNlLEtBQU4sQ0FBWUMsUUFBM0MsR0FESixDQUVJLCtFQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBRVQsSUFBSSxDQUFDVSxPQUFMLENBQWFILFFBQS9DLEVBRkosR0FERixDQUtFLDBGQUNJLHVFQUFDLDBEQUFELFdBQ0ksc0ZBQUksdUVBQUMsVUFBRCxFQUFZLElBQUksQ0FBRVAsSUFBSSxDQUFDTSxLQUFMLENBQVdDLFFBQTdCLEVBQUosRUFESixFQURKLENBSUksdUVBQUMsOERBQUQsV0FDSSx1RUFBQywyREFBRCxXQUNJLHVFQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVQLElBQUksQ0FBQ1csT0FBTCxDQUFhSixRQUEvQixFQURKLEVBREosRUFKSixDQVNJLHdFQUFDLDBEQUFELFlBQ0kscUdBREosQ0FFSSw4RUFBSyxTQUFTLENBQUMsU0FBZiw4Q0FGSixDQUdJLGdGQUFNLE1BQU0sQ0FBQyxFQUFiLENBQWdCLE1BQU0sQ0FBQyxLQUF2QixXQUNJLCtFQUFLLFNBQVMsQ0FBQyxPQUFmLFdBQ0ksZ0ZBQU8sT0FBTyxDQUFDLFdBQWYsd0JBREosQ0FFSSxnRkFBTyxFQUFFLENBQUMsV0FBVixDQUFzQixJQUFJLENBQUMsTUFBM0IsQ0FBa0MsWUFBWSxDQUFDLFlBQS9DLEVBRkosR0FESixDQUtJLCtFQUFLLFNBQVMsQ0FBQyxPQUFmLFdBQ0ksZ0ZBQU8sT0FBTyxDQUFDLFVBQWYsdUJBREosQ0FFSSxnRkFBTyxFQUFFLENBQUMsVUFBVixDQUFxQixJQUFJLENBQUMsTUFBMUIsQ0FBaUMsWUFBWSxDQUFDLGFBQTlDLEVBRkosR0FMSixDQVNJLCtFQUFLLFNBQVMsQ0FBQyxPQUFmLFdBQ0ksZ0ZBQU8sT0FBTyxDQUFDLGFBQWYsMEJBREosQ0FFSSxnRkFBTyxFQUFFLENBQUMsYUFBVixDQUF3QixJQUFJLENBQUMsTUFBN0IsRUFGSixHQVRKLENBYUksK0VBQUssU0FBUyxDQUFDLE9BQWYsV0FDSSxnRkFBTyxPQUFPLENBQUMsT0FBZixxQkFESixDQUVJLGdGQUFPLEVBQUUsQ0FBQyxPQUFWLENBQWtCLElBQUksQ0FBQyxNQUF2QixDQUE4QixZQUFZLENBQUMsT0FBM0MsQ0FBbUQsUUFBUSxLQUEzRCxFQUZKLEdBYkosQ0FpQkksK0VBQUssU0FBUyxDQUFDLFlBQWYsV0FDSSxnRkFBTyxPQUFPLENBQUMsU0FBZix5REFESixDQUVJLG1GQUFVLEVBQUUsQ0FBQyxTQUFiLENBQXVCLElBQUksQ0FBQyxHQUE1QixFQUZKLEdBakJKLENBcUJJLGlGQUFRLElBQUksQ0FBQyxRQUFiLGtCQXJCSixHQUhKLEdBVEosR0FMRixHQURGLENBNkNILENBbkRELENBcURlSyx1SEFBTyxDQUFDcEIsT0FBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2dldGZ1c2VkLXRoZW1lL3NyYy9jb21wb25lbnRzL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QsIEhlYWQgfSBmcm9tICdmcm9udGl0eSdcclxuaW1wb3J0IFRvcENvbnRlbnQgZnJvbSAnLi4vc3R5bGVzL3RvcENvbnRlbnQnXHJcbmltcG9ydCBDb250ZW50U2VjdGlvbiBmcm9tICcuLi9zdHlsZXMvY29udGVudFNlY3Rpb24nXHJcbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zdHlsZXMvcGFnZUNvbnRlbnQnXHJcbmltcG9ydCBGb3JtQmxvY2sgZnJvbSAnLi4vc3R5bGVzL2Zvcm0tYmxvY2snXHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxyXG5cclxuICAgIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnRcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwYWdlLnRpdGxlLnJlbmRlcmVkfS0ge3N0YXRlLnRoZW1lLnNpdGVOYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxUb3BDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgxPjxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UudGl0bGUucmVuZGVyZWR9IC8+PC9oMT5cclxuICAgICAgICAgICAgPC9Ub3BDb250ZW50PlxyXG4gICAgICAgICAgICA8Q29udGVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS5jb250ZW50LnJlbmRlcmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlQ29udGVudD5cclxuICAgICAgICAgICAgPC9Db250ZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgPEZvcm1CbG9jaz5cclxuICAgICAgICAgICAgICAgIDxoMj5JbnF1aXJlIE5vdzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ2xpbmVcIj5MZXQncyBjcmVhdGUgc29tZXRoaW5nIGJlYXV0aWZ1bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdE5hbWVcIiB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cImdpdmVuLW5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3ROYW1lXCIgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJmYW1pbHktbmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBhbnlOYW1lXCI+Q29tcGFueSBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29tcGFueU5hbWVcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgKjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJlbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBsYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPlRlbGwgdXMgYWJvdXQgdGhlIGNoYWxsZW5nZXMgeW91IGFyZSBmYWNpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgcm93cz1cIjdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Gb3JtQmxvY2s+ICAgICBcclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQ29udGFjdCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/contact.js\n");

/***/ })

})