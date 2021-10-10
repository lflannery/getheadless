webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/pages/category-page.js":
/*!***********************************************************************!*\
  !*** ./packages/getfused-theme/src/components/pages/category-page.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main */ \"./packages/getfused-theme/src/components/styles/main.js\");\n/* harmony import */ var _styles_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/items */ \"./packages/getfused-theme/src/components/styles/items.js\");\n/* harmony import */ var _styles_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pagination */ \"./packages/getfused-theme/src/components/styles/pagination.js\");\n/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/button */ \"./packages/getfused-theme/src/components/styles/button.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst CategoryPage=({state,actions})=>{const data=state.source.get(state.router.link);const categoryName=state.source.category[data.id].name;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"title\",{children:[\" \",categoryName,\" Blog Posts - \",state.theme.siteName]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"meta\",{name:\"description\",content:\"Category Page\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_styles_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h1\",{dangerouslySetInnerHTML:{__html:categoryName+` Blog Posts`}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{className:\"yellowArrow\",link:\"/blog\",children:\"All Posts\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_styles_items__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:data.items.map(item=>{const post=state.source[item.type][item.id];const image=state.source.attachment[post.featured_media];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"article\",{className:\"listingItem\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:post.link,children:[image?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"img\",{className:\"listingImage\",src:image.source_url,alt:image.alt_text}):null,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h3\",{dangerouslySetInnerHTML:{__html:post.title.rendered}}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.acf.subtitle}})]})},item.id);})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_styles_pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:[data.previous&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_styles_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{onClick:()=>{actions.router.set(data.previous);},children:\"\\xAB Prev\"}),data.next&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_styles_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{onClick:()=>{actions.router.set(data.next);},children:\"Next \\xBB\"})]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(CategoryPage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9wYWdlcy9jYXRlZ29yeS1wYWdlLmpzP2Y3NTYiXSwibmFtZXMiOlsiQ2F0ZWdvcnlQYWdlIiwic3RhdGUiLCJhY3Rpb25zIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJjYXRlZ29yeU5hbWUiLCJjYXRlZ29yeSIsImlkIiwibmFtZSIsInRoZW1lIiwic2l0ZU5hbWUiLCJfX2h0bWwiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwb3N0IiwidHlwZSIsImltYWdlIiwiYXR0YWNobWVudCIsImZlYXR1cmVkX21lZGlhIiwic291cmNlX3VybCIsImFsdF90ZXh0IiwidGl0bGUiLCJyZW5kZXJlZCIsImFjZiIsInN1YnRpdGxlIiwicHJldmlvdXMiLCJzZXQiLCJuZXh0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLEtBQU1BLGFBQVksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUFELEdBQXdCLENBQ3pDLEtBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsYUFBWSxDQUFHUCxLQUFLLENBQUNHLE1BQU4sQ0FBYUssUUFBYixDQUFzQk4sSUFBSSxDQUFDTyxFQUEzQixFQUErQkMsSUFBcEQsQ0FFQSxNQUNFLHdKQUNFLHdFQUFDLDZDQUFELFlBQ0ksK0ZBQVNILFlBQVQsa0JBQXFDUCxLQUFLLENBQUNXLEtBQU4sQ0FBWUMsUUFBakQsR0FESixDQUVJLCtFQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBQyxlQUFqQyxFQUZKLEdBREYsQ0FLRSx3RUFBQyxvREFBRCxZQUNJLDZFQUFJLHVCQUF1QixDQUFFLENBQUVDLE1BQU0sQ0FBRU4sWUFBWSxDQUFJLGFBQTFCLENBQTdCLEVBREosQ0FFSSx1RUFBQyxpRUFBRCxFQUFNLFNBQVMsQ0FBQyxhQUFoQixDQUE4QixJQUFJLENBQUMsT0FBbkMsdUJBRkosQ0FHRyx1RUFBQyxxREFBRCxXQUNNTCxJQUFJLENBQUNZLEtBQUwsQ0FBV0MsR0FBWCxDQUFnQkMsSUFBRCxFQUFVLENBQ3RCLEtBQU1DLEtBQUksQ0FBR2pCLEtBQUssQ0FBQ0csTUFBTixDQUFhYSxJQUFJLENBQUNFLElBQWxCLEVBQXdCRixJQUFJLENBQUNQLEVBQTdCLENBQWIsQ0FDQSxLQUFNVSxNQUFLLENBQUduQixLQUFLLENBQUNHLE1BQU4sQ0FBYWlCLFVBQWIsQ0FBd0JILElBQUksQ0FBQ0ksY0FBN0IsQ0FBZCxDQUVBLE1BQ0ksbUZBQVMsU0FBUyxDQUFDLGFBQW5CLFVBQ0ksd0VBQUMsaUVBQUQsRUFBTSxJQUFJLENBQUVKLElBQUksQ0FBQ1gsSUFBakIsV0FDS2EsS0FBSyxDQUNOLDhFQUFLLFNBQVMsQ0FBQyxjQUFmLENBQThCLEdBQUcsQ0FBRUEsS0FBSyxDQUFDRyxVQUF6QyxDQUFxRCxHQUFHLENBQUVILEtBQUssQ0FBQ0ksUUFBaEUsRUFETSxDQUVKLElBSE4sQ0FLSSw2RUFBSSx1QkFBdUIsQ0FBRSxDQUFFVixNQUFNLENBQUVJLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxRQUFyQixDQUE3QixFQUxKLENBTUksOEVBQUssdUJBQXVCLENBQUUsQ0FBRVosTUFBTSxDQUFFSSxJQUFJLENBQUNTLEdBQUwsQ0FBU0MsUUFBbkIsQ0FBOUIsRUFOSixHQURKLEVBQXNDWCxJQUFJLENBQUNQLEVBQTNDLENBREosQ0FZSCxDQWhCQSxDQUROLEVBSEgsQ0FzQkksd0VBQUMsMERBQUQsWUFDS1AsSUFBSSxDQUFDMEIsUUFBTCxFQUNELHVFQUFDLHNEQUFELEVBQ0ksT0FBTyxDQUFFLElBQU0sQ0FDZjNCLE9BQU8sQ0FBQ0ksTUFBUixDQUFld0IsR0FBZixDQUFtQjNCLElBQUksQ0FBQzBCLFFBQXhCLEVBQ0MsQ0FITCx1QkFGSixDQVVLMUIsSUFBSSxDQUFDNEIsSUFBTCxFQUNELHVFQUFDLHNEQUFELEVBQ0ksT0FBTyxDQUFFLElBQU0sQ0FDZjdCLE9BQU8sQ0FBQ0ksTUFBUixDQUFld0IsR0FBZixDQUFtQjNCLElBQUksQ0FBQzRCLElBQXhCLEVBQ0MsQ0FITCx1QkFYSixHQXRCSixHQUxGLEdBREYsQ0FtREgsQ0F2REQsQ0F5RGVDLHVIQUFPLENBQUNoQyxZQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvcGFnZXMvY2F0ZWdvcnktcGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgSGVhZCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgTGluayBmcm9tICdAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rJ1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9zdHlsZXMvbWFpbidcclxuaW1wb3J0IEl0ZW1zIGZyb20gJy4uL3N0eWxlcy9pdGVtcydcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vc3R5bGVzL3BhZ2luYXRpb24nXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3R5bGVzL2J1dHRvbidcclxuXHJcbmNvbnN0IENhdGVnb3J5UGFnZSA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxyXG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gc3RhdGUuc291cmNlLmNhdGVnb3J5W2RhdGEuaWRdLm5hbWVcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPiB7Y2F0ZWdvcnlOYW1lfSBCbG9nIFBvc3RzIC0ge3N0YXRlLnRoZW1lLnNpdGVOYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDYXRlZ29yeSBQYWdlXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPE1haW4+XHJcbiAgICAgICAgICAgIDxoMSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNhdGVnb3J5TmFtZSArIGAgQmxvZyBQb3N0c2B9fSAgLz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwieWVsbG93QXJyb3dcIiBsaW5rPVwiL2Jsb2dcIj5BbGwgUG9zdHM8L0xpbms+XHJcbiAgICAgICAgICAgPEl0ZW1zPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtpdGVtLnR5cGVdW2l0ZW0uaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtwb3N0LmZlYXR1cmVkX21lZGlhXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJsaXN0aW5nSXRlbVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBsaW5rPXtwb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdGluZ0ltYWdlXCIgc3JjPXtpbWFnZS5zb3VyY2VfdXJsfSBhbHQ9e2ltYWdlLmFsdF90ZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYWNmLnN1YnRpdGxlIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9JdGVtcz4gXHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAge2RhdGEucHJldmlvdXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoZGF0YS5wcmV2aW91cylcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICYjMTcxOyBQcmV2XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5uZXh0ICYmIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGRhdGEubmV4dClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHQgJiMxODc7XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbj5cclxuICAgICAgICA8L01haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQ2F0ZWdvcnlQYWdlKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/pages/category-page.js\n");

/***/ })

})