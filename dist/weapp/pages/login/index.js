(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/index.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/index.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=247e7dd8&scoped=true& */ "./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/login/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "247e7dd8",
  "1c88a76c"
  
)

component.options.__file = "src/pages/login/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/login/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/login/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "login",
  data: function data() {
    return {
      userInfo: {
        avatar: __webpack_require__(/*! ../../assets/images/avatar_default.png */ "./src/assets/images/avatar_default.png"),
        nickname: "xc",
        phone: ""
      },
      pageshow: "login"
    };
  },
  methods: {
    // ?????????????????????????????? ??????????????????
    getUserProfile: function getUserProfile() {
      var _this2 = this;

      var _this = this;

      wx.getUserProfile({
        desc: "??????",
        success: function success(res) {
          _this2.userInfo.avatar = res.userInfo.avatarUrl;
          _this2.userInfo.nickname = res.userInfo.nickName;
          wx.login({
            success: function success(res) {
              _this.getWxLogin({
                avatar: _this.userInfo.avatar,
                nickname: _this.userInfo.nickname,
                account: res.code,
                secret: "",
                type: 200
              });
            },
            fail: function fail(err) {
              console.log(err);
            }
          });
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },
    onGetPhoneNumber: function onGetPhoneNumber(e) {
      console.log(e, "eee");

      var _this = this;

      var token = wx.getStorageSync("token");

      if (token) {
        if ("getPhoneNumber:ok" == e.detail.errMsg) {
          wx.checkSession({
            success: function success() {
              //session_key ????????????????????????????????????????????????
              //??????????????????????????????????????????
              console.log(1111);

              _this.getPhone({});
            },
            fail: function fail() {
              // session_key ?????????????????????????????????????????????
              console.log(222);
              wx.login({
                success: function success(res) {
                  _this.getWxLogin({
                    account: res.code,
                    avatar: res.userInfo.avatarUrl,
                    nickname: res.userInfo.nickName,
                    secret: "",
                    type: 200
                  });
                },
                fail: function fail(err) {
                  console.log(err);
                }
              });
            }
          });
        }
      } else {
        console.log(3333);
        this.pageshow = "login";
      }
    },
    getWxLogin: function getWxLogin(params) {
      var _this3 = this;

      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
        var res, token;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* wxlogin */ "b"])(params);

              case 3:
                res = _context.sent;
                console.log("?????????", res);
                token = res.data.data.token;
                wx.setStorageSync("token", token);
                _this3.pageshow = "bindphone";
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log("??????"); // this.pageshow = "bindphone";

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    getPhone: function getPhone(params) {
      return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
        var res;
        return Object(_Users_niujun_WeChatProjects_xiamiyuepai_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_api_index__WEBPACK_IMPORTED_MODULE_3__[/* getPhone */ "a"])(params);

              case 3:
                res = _context2.sent;
                console.log("?????????", res);
                _context2.next = 9;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    }
  },
  created: function created() {
    console.log(1111);
    console.log(this.pageshow, "pageshow");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _vm.pageshow == "login"
        ? _c("block", { staticClass: "login" }, [
            _c("view", { staticClass: "login-top" }, [
              _c("image", {
                staticClass: "logo-img",
                attrs: {
                  src: __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png"),
                  mode: "aspectFit",
                },
              }),
              _c("view", { staticClass: "desc" }, [
                _c("text", [_vm._v("???????????? - ??????????????????????????????")]),
              ]),
              _c("view", { staticClass: "small-desc" }, [
                _c("text", [_vm._v("MODEL PHOTOGRAPH")]),
              ]),
            ]),
            _c("view", { staticClass: "login-bottom" }, [
              _c(
                "view",
                { staticClass: "login-btn", on: { tap: _vm.getUserProfile } },
                [_c("text", [_vm._v("????????????")])]
              ),
              _c("view", { staticClass: "cancel-btn" }, [
                _c("text", [_vm._v("????????????")]),
              ]),
              _c("view", { staticClass: "login-tips" }, [
                _c("text", [_vm._v("?????????????????????????????????")]),
                _c("text", { staticClass: "user-xy" }, [
                  _vm._v("??????????????????"),
                ]),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm.pageshow == "bindphone"
        ? _c("block", { staticClass: "user_phone" }, [
            _c("view", { staticClass: "user_infor" }, [
              _c("view", { staticClass: "user_avatar" }, [
                _c("image", {
                  attrs: { mode: "widthFix", src: _vm.userInfo.avatar },
                }),
              ]),
              _c("view", { staticClass: "user_name" }, [
                _vm._v(_vm._s(_vm.userInfo.nickname)),
              ]),
            ]),
            _c("view", { staticClass: "get_phone" }, [
              _c(
                "button",
                {
                  staticClass: "phone-btn",
                  attrs: { openType: "getPhoneNumber" },
                  on: { getphonenumber: _vm.onGetPhoneNumber },
                },
                [_vm._v(" ????????????????????? ")]
              ),
            ]),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/avatar_default.png":
/*!**********************************************!*\
  !*** ./src/assets/images/avatar_default.png ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/avatar_default.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/logo.png";

/***/ }),

/***/ "./src/pages/login/index.scss":
/*!************************************!*\
  !*** ./src/pages/login/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/index.vue":
/*!***********************************!*\
  !*** ./src/pages/login/index.vue ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/index.vue");


var config = {"navigationBarTitleText":"??????"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/login/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/login/index.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/pages/login/index.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/login/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=247e7dd8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/login/index.vue?vue&type=template&id=247e7dd8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_247e7dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/login/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map