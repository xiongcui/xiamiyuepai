(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/release/works/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/works/index.vue":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/works/index.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2ebf7eae& */ "./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/release/works/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "7b48dd1b"
  
)

component.options.__file = "src/pages/release/works/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/release/works/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/release/works/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/release/works/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
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
  name: "works",
  data: function data() {
    return {
      name: "",
      device: "",
      place: "",
      imglist: [// {
        //   imgurl: "",
        // },
      ],
      videolist: [],
      taglist: [{
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "????????????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "?????????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "cosplay",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }, {
        name: "??????",
        checked: false
      }],
      switchChecked: false
    };
  },
  methods: {
    chooseImage: function chooseImage() {
      var _this = this;

      wx.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: function success(res) {
          var arr = res.tempFiles;
          var imgInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            imgInfo = v;
          });
          console.log(imgInfo.tempFilePath);

          _this.imglist.push({
            imgurl: imgInfo.tempFilePath
          }); //   _this.upImgs(imgInfo, "image");

        }
      });
    },
    chooseVideo: function chooseVideo() {
      var _this2 = this;

      var _this = this;

      wx.chooseMedia({
        count: 1,
        mediaType: ["video"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: function success(res) {
          console.log(res, "res");
          var arr = res.tempFiles;
          var videoInfo = {};
          arr.map(function (v, i) {
            v["progress"] = 0;
            videoInfo = v;
          });

          _this2.videolist.push(videoInfo);

          console.log(videoInfo); //   _this.upImgs(videoInfo, "video");
        }
      });
    },
    upImgs: function upImgs(dataInfo, type) {
      var _this = this;

      wx.showLoading({
        title: "?????????",
        mask: true
      });
      wx.uploadFile({
        url: "?????????????????????",
        filePath: type == "video" ? dataInfo.tempFilePath : dataInfo.path,
        formData: null,
        name: "file",
        header: {
          "content-type": "multipart/form-data"
        },
        success: function success(res) {
          wx.hideLoading(); //????????????????????????????????????

          if (type == "video") {
            // _this.setData({
            console.log("???????????????" + data.data.src);
            console.log("???????????????" + data.data.src + "?spm=qipa250&x-oss-process=video/snapshot,t_1000,f_jpg,w_800,h_400,m_fast"); // ))
          } else {
            console.log("???????????????" + data.data.src);
          }
        }
      });
    },
    switchChange: function switchChange(e) {
      this.switchChecked = e.detail.value;
    },
    chooseTag: function chooseTag(index) {
      this.taglist[index].checked = !this.taglist[index].checked;
    },
    nameBlur: function nameBlur(e) {
      this.name = e.detail.value;
    },
    submit: function submit() {
      if (!this.name) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[/* errortip */ "a"])("?????????????????????/?????????");
        return false;
      }

      if (!this.imglist.length && !this.videolist.length) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[/* errortip */ "a"])("??????????????????");
        return false;
      }

      var checkTag = this.taglist.some(function (item) {
        return item.checked;
      });

      if (!checkTag) {
        Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[/* errortip */ "a"])("????????????????????????");
        return false;
      }

      var params = {
        name: this.name
      };
      console.log(params, "params");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "works" }, [
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" ????????????/?????? "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
      ]),
      _c("textarea", {
        staticClass: "works-name",
        attrs: {
          "auto-height": "",
          placeholder:
            "?????????????????????/??????????????????????????????????????????????????????????????????????????????????????????????????????5???????????????",
          value: _vm.name,
        },
        on: { blur: _vm.nameBlur },
      }),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" ???????????? "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
        _c("text", { staticClass: "works-tips" }, [
          _vm._v("??????????????????/????????????"),
        ]),
      ]),
      _c("view", { staticClass: "works-upload" }, [
        _c(
          "view",
          { staticClass: "works-upload-list" },
          _vm._l(_vm.imglist, function (item, index) {
            return _c("view", { key: index, staticClass: "works-upload-img" }, [
              _c("image", {
                staticClass: "upload-width",
                attrs: { src: item.imgurl, mode: "aspectFit" },
              }),
            ])
          }),
          0
        ),
        _c(
          "view",
          { staticClass: "works-upload-list" },
          _vm._l(_vm.videolist, function (item, index) {
            return _c(
              "view",
              { key: index, staticClass: "works-upload-video" },
              [
                _c("image", {
                  staticClass: "upload-width",
                  attrs: { src: item.thumbTempFilePath, mode: "aspectFit" },
                }),
              ]
            )
          }),
          0
        ),
        _c(
          "view",
          { staticClass: "works-upload-img", on: { tap: _vm.chooseImage } },
          [
            _c("image", {
              staticClass: "upload-img",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/upload-img.png */ "./src/assets/images/upload-img.png"),
                mode: "aspectFit",
              },
            }),
            _c("view", [
              _c("text", { staticClass: "upload-txt" }, [_vm._v("????????????")]),
            ]),
          ]
        ),
        _c(
          "view",
          { staticClass: "works-upload-video", on: { tap: _vm.chooseVideo } },
          [
            _c("image", {
              staticClass: "upload-video",
              attrs: {
                src: __webpack_require__(/*! ../../../assets/images/upload-video.png */ "./src/assets/images/upload-video.png"),
                mode: "aspectFit",
              },
            }),
            _c("view", [
              _c("text", { staticClass: "upload-txt" }, [_vm._v("????????????")]),
            ]),
          ]
        ),
      ]),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" ???????????? "),
        _c("input", {
          staticClass: "works-input",
          attrs: { placeholder: "?????????????????????????????????", value: _vm.device },
        }),
      ]),
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" ???????????? "),
        _c("input", {
          staticClass: "works-input",
          attrs: { placeholder: "?????????????????????????????????", value: _vm.place },
        }),
      ]),
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" ???????????? "),
        _c("view", { staticClass: "works-switch" }, [
          _c("text", [_vm._v("??????????????????")]),
          _c("switch", {
            staticClass: "switch-btn",
            attrs: {
              name: "switch",
              color: "#ff6467",
              checked: _vm.switchChecked,
            },
            on: { change: _vm.switchChange },
          }),
        ]),
      ]),
    ]),
    _c("view", { staticClass: "works-item" }, [
      _c("view", { staticClass: "works-title" }, [
        _vm._v(" ???????????? "),
        _c("text", { staticClass: "check-tips" }, [_vm._v("*")]),
      ]),
      _c(
        "view",
        { staticClass: "tag-list" },
        _vm._l(_vm.taglist, function (item, index) {
          return _c(
            "text",
            {
              key: index,
              staticClass: "tag-txt",
              class: item.checked ? "active" : "",
              on: {
                tap: function ($event) {
                  return _vm.chooseTag(index)
                },
              },
            },
            [_vm._v(_vm._s(item.name))]
          )
        }),
        0
      ),
    ]),
    _c("view", { staticClass: "works-btn" }, [
      _c("text", { staticClass: "release", on: { tap: _vm.submit } }, [
        _vm._v("????????????"),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/images/upload-img.png":
/*!******************************************!*\
  !*** ./src/assets/images/upload-img.png ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/upload-img.png";

/***/ }),

/***/ "./src/assets/images/upload-video.png":
/*!********************************************!*\
  !*** ./src/assets/images/upload-video.png ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/upload-video.png";

/***/ }),

/***/ "./src/pages/release/works/index.scss":
/*!********************************************!*\
  !*** ./src/pages/release/works/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/release/works/index.vue":
/*!*******************************************!*\
  !*** ./src/pages/release/works/index.vue ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/release/works/index.vue");


var config = {"navigationBarTitleText":"????????????"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/release/works/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/release/works/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/pages/release/works/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/release/works/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae&":
/*!**************************************************************************!*\
  !*** ./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2ebf7eae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/release/works/index.vue?vue&type=template&id=2ebf7eae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ebf7eae___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/release/works/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map