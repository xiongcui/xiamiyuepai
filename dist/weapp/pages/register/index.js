(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/register/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a38522c&scoped=true& */ "./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/register/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "1a38522c",
  "54b88990"
  
)

component.options.__file = "src/pages/register/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/register/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/register/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _we_cropper_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../we-cropper/index.vue */ "./src/pages/we-cropper/index.vue");
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
  name: "register",
  data: function data() {
    return {
      avatar: "",
      nickname: "",
      sex: "",
      date: "",
      identity: "",
      select_city: "",
      // region:["?????????", "?????????", "?????????"],
      region: [],
      regionList: [],
      identityList: ["?????????", "??????", "?????????", "?????????", "??????", "?????????", "?????????", "????????????"]
    };
  },
  components: {
    weCropper: _we_cropper_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  methods: {
    sexChange: function sexChange(index) {
      this.sex = index;
    },
    dateChange: function dateChange(e) {
      this.date = e.detail.value;
    },
    bindRegionChange: function bindRegionChange(e) {
      console.log(e);
      this.select_city = e.detail.value.join("-");
    },
    identityChange: function identityChange(e) {
      this.identity = this.identityList[e.detail.value];
    },
    submit: function submit() {
      var params = {
        nickname: this.nickname,
        sex: this.sex,
        date: this.date,
        select_city: this.select_city,
        identity: this.identity
      };
      console.log(params);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/we-cropper/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/we-cropper/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/pages/we-cropper/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var we_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! we-cropper */ "./node_modules/we-cropper/dist/we-cropper.js");
/* harmony import */ var we_cropper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(we_cropper__WEBPACK_IMPORTED_MODULE_1__);
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


var device = wx.getSystemInfoSync(); // ??????????????????

console.log(device);
var width = device.windowWidth; // ???????????????????????????????????????????????????

var height = device.windowHeight;
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "weCropper",
  data: function data() {
    return {
      cropper: null,
      cropperOpt: {
        id: "cropper",
        // ?????????????????????canvas???????????????
        targetId: "targetCropper",
        // ???????????????????????????canvas???????????????
        pixelRatio: device.pixelRatio,
        // ?????????????????????
        width: width,
        // ????????????
        height: height,
        // ????????????
        scale: 2.5,
        // ??????????????????
        zoom: 8,
        // ????????????
        cut: {
          x: (width - 200) / 2,
          // ?????????x?????????
          y: (height - 200) / 2,
          // ?????????y????????????
          width: 200,
          // ???????????????
          height: 200 // ???????????????

        }
      }
    };
  },
  methods: {
    touchStart: function touchStart(e) {
      this.cropper.touchStart(e);
    },
    touchMove: function touchMove(e) {
      this.cropper.touchMove(e);
    },
    touchEnd: function touchEnd(e) {
      this.cropper.touchEnd(e);
    },
    //??????????????????????????????????????????????????????src????????????wx.uploadFile()????????????????????????????????????????????????????????????
    getCropperImage: function getCropperImage() {
      this.cropper.getCropperImage().then(function (src) {
        console.log(src);
        wx.uploadFile({
          url: "http://t.kan.cn/roune/auth_api/uploadimage?uid=198",
          //?????????????????????????????????
          filePath: src,
          name: "avatar",
          success: function success(res) {
            console.log(res);
            console.log("uploadOK"); // wx.redirectTo({
            //     ...........
            // })
          }
        });
      }).catch(function (err) {
        wx.showModal({
          title: "????????????",
          content: err.message
        });
      });
    },
    uploadTap: function uploadTap() {
      var self = this;
      wx.chooseImage({
        count: 1,
        // ??????9
        sizeType: ["original", "compressed"],
        // ?????????????????????????????????????????????????????????
        sourceType: ["album", "camera"],
        // ????????????????????????????????????????????????????????????
        success: function success(res) {
          var src = res.tempFilePaths[0];
          self.cropper.pushOrign(src);
        }
      });
    }
  },
  mounted: function mounted() {
    this.cropper = new we_cropper__WEBPACK_IMPORTED_MODULE_1___default.a(this.cropperOpt).on("ready", function (ctx) {
      console.log("wecropper is ready for work!");
    }).on("beforeImageLoad", function (ctx) {
      wx.showToast({
        title: "?????????",
        icon: "loading",
        duration: 20000
      });
    }).on("imageLoad", function (ctx) {
      wx.hideToast();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("form", { staticClass: "main", attrs: { bindreset: "reset" } }, [
    _c("view", { staticClass: "top" }, [
      _c("view", { staticClass: "avatar", attrs: { bindtap: "chooesImage" } }, [
        _vm.avatar
          ? _c("image", { attrs: { mode: "aspectFit", src: _vm.avatar } })
          : _c("image", {
              staticClass: "no_avatar",
              attrs: { mode: "aspectFit" },
            }),
      ]),
      _c("view", { staticClass: "avatar_select" }, [
        _c("image", {
          attrs: {
            bindtap: "chooesImage",
            src: __webpack_require__(/*! ../../assets/images/avatar_select.png */ "./src/assets/images/avatar_select.png"),
          },
        }),
      ]),
    ]),
    _c("view", { staticClass: "infor" }, [
      _c("view", { staticClass: "item ub item-b" }, [
        _c("view", { staticClass: "item_label" }, [_vm._v("??????")]),
        _c("view", { staticClass: "ub-f1 item_input" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.nickname,
                expression: "nickname",
              },
            ],
            attrs: {
              maxlength: "60",
              name: "nickname",
              placeholder: "?????????????????????",
              placeholderClass: "nickname_tip",
              type: "text",
            },
            domProps: { value: _vm.nickname },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.nickname = $event.target.value
              },
            },
          }),
        ]),
      ]),
      _c("view", { staticClass: "item ub item-b" }, [
        _c("view", { staticClass: "item_label" }, [_vm._v("??????")]),
        _c("view", { staticClass: "ub-f1 item_input" }, [
          _vm.sex == 1
            ? _c("image", {
                staticClass: "select_sex",
                attrs: {
                  "data-sex": "1",
                  src: __webpack_require__(/*! ../../assets/images/six1ed.png */ "./src/assets/images/six1ed.png"),
                },
                on: {
                  tap: function ($event) {
                    return _vm.sexChange(1)
                  },
                },
              })
            : _c("image", {
                staticClass: "select_sex",
                attrs: {
                  "data-sex": "1",
                  src: __webpack_require__(/*! ../../assets/images/six1.png */ "./src/assets/images/six1.png"),
                },
                on: {
                  tap: function ($event) {
                    return _vm.sexChange(1)
                  },
                },
              }),
          _vm.sex == 2
            ? _c("image", {
                staticClass: "select_sex",
                attrs: {
                  "data-sex": "2",
                  src: __webpack_require__(/*! ../../assets/images/six2ed.png */ "./src/assets/images/six2ed.png"),
                },
                on: {
                  tap: function ($event) {
                    return _vm.sexChange(2)
                  },
                },
              })
            : _c("image", {
                staticClass: "select_sex",
                attrs: {
                  "data-sex": "2",
                  src: __webpack_require__(/*! ../../assets/images/six2.png */ "./src/assets/images/six2.png"),
                },
                on: {
                  tap: function ($event) {
                    return _vm.sexChange(2)
                  },
                },
              }),
        ]),
      ]),
      _c("view", { staticClass: "item ub item-b" }, [
        _c("view", { staticClass: "item_label" }, [_vm._v("??????")]),
        _c(
          "view",
          { staticClass: "ub-f1 item_input" },
          [
            _c(
              "picker",
              {
                attrs: {
                  end: "2020-09-01",
                  mode: "date",
                  start: "1960-09-01",
                  value: "2000-01-01",
                },
                on: { change: _vm.dateChange },
              },
              [
                _vm.date
                  ? _c("view", { staticClass: "picker_children picked" }, [
                      _vm._v(_vm._s(_vm.date)),
                    ])
                  : _c("view", { staticClass: "picker_children" }, [
                      _vm._v("???????????????"),
                    ]),
              ]
            ),
          ],
          1
        ),
      ]),
      _c("view", { staticClass: "item ub item-b" }, [
        _c("view", { staticClass: "item_label" }, [_vm._v("??????")]),
        _c(
          "view",
          { staticClass: "ub-f1 item_input" },
          [
            _c(
              "picker",
              {
                attrs: {
                  mode: "region",
                  range: _vm.regionList,
                  rangeKey: "name",
                  value: _vm.region,
                },
                on: { change: _vm.bindRegionChange },
              },
              [
                _vm.select_city
                  ? _c(
                      "view",
                      { staticClass: "picker_children pick_city picked" },
                      [_vm._v(_vm._s(_vm.select_city))]
                    )
                  : _c("view", { staticClass: "picker_children" }, [
                      _vm._v("???????????????"),
                    ]),
              ]
            ),
          ],
          1
        ),
      ]),
      _c("view", { staticClass: "item ub item-b" }, [
        _c("view", { staticClass: "item_label" }, [_vm._v("??????")]),
        _c(
          "view",
          { staticClass: "ub-f1 item_input" },
          [
            _c(
              "picker",
              {
                attrs: { range: _vm.identityList },
                on: { change: _vm.identityChange },
              },
              [
                _vm.identity
                  ? _c("view", { staticClass: "picker_children picked" }, [
                      _vm._v(_vm._s(_vm.identity)),
                    ])
                  : _c("view", { staticClass: "picker_children" }, [
                      _vm._v("???????????????"),
                    ]),
              ]
            ),
          ],
          1
        ),
      ]),
    ]),
    _c("view", { staticClass: "savebox" }, [
      _c("button", { staticClass: "save-btn", on: { tap: _vm.submit } }, [
        _vm._v("??? ???"),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/we-cropper/index.vue?vue&type=template&id=c6c737d6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/we-cropper/index.vue?vue&type=template&id=c6c737d6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "cropper-wrapper" }, [
    _c("canvas", {
      staticClass: "cropper",
      style: [
        { width: _vm.cropperOpt.width + "px" },
        { height: _vm.cropperOpt.height + "px" },
        { "background-color": "rgba(0, 0, 0, 0.8)" },
      ],
      attrs: { "disable-scroll": true, "canvas-id": "cropper" },
      on: {
        touchstart: _vm.touchStart,
        touchmove: _vm.touchMove,
        touchend: _vm.touchEnd,
      },
    }),
    _c("canvas", {
      staticClass: "cropper",
      style: [
        { position: "fixed" },
        { top: -_vm.cropperOpt.width * _vm.cropperOpt.pixelRatio + "px" },
        { left: -_vm.cropperOpt.height * _vm.cropperOpt.pixelRatio + "px" },
        { width: _vm.cropperOpt.width * _vm.cropperOpt.pixelRatio + "px" },
        { height: _vm.cropperOpt.height * _vm.cropperOpt.pixelRatio + "px" },
      ],
      attrs: { "disable-scroll": true, "canvas-id": "targetCropper" },
    }),
    _c("view", { staticClass: "cropper-buttons" }, [
      _c("view", { staticClass: "upload", on: { tap: _vm.uploadTap } }, [
        _vm._v(" ???????????? "),
      ]),
      _c(
        "view",
        { staticClass: "getCropperImage", on: { tap: _vm.getCropperImage } },
        [_vm._v(" ???????????? ")]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/we-cropper/dist/we-cropper.js":
/*!****************************************************!*\
  !*** ./node_modules/we-cropper/dist/we-cropper.js ***!
  \****************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window, global) {/**
 * we-cropper v1.4.0
 * (c) 2021 dlhandsome
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var device = void 0;
var TOUCH_STATE = ['touchstarted', 'touchmoved', 'touchended'];
var adaptAPI = {
  strokeStyle: 'setStrokeStyle',
  fillStyle: 'setFillStyle',
  lineWidth: 'setLineWidth'
};

function firstLetterUpper (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function setTouchState (instance) {
  var arg = [], len = arguments.length - 1;
  while ( len-- > 0 ) arg[ len ] = arguments[ len + 1 ];

  TOUCH_STATE.forEach(function (key, i) {
    if (arg[i] !== undefined) {
      instance[key] = arg[i];
    }
  });
}

function validator (instance, o) {
  Object.defineProperties(instance, o);
}

function	getDevice () {
  if (!device) {
    device = wx.getSystemInfoSync();
  }
  return device
}

function adapt2d (context, handle, value) {
  if (context.type === '2d') {
    context.ctx[handle] = value;
  } else {
    context.ctx[adaptAPI[handle]](value);
  }
}

var tmp = {};

var ref = getDevice();
var pixelRatio = ref.pixelRatio;

var DEFAULT = {
  id: {
    default: 'cropper',
    get: function get () {
      return tmp.id
    },
    set: function set (value) {
      if (typeof (value) !== 'string') {
        console.error(("id???" + value + " is invalid"));
      }
      tmp.id = value;
    }
  },
  width: {
    default: 750,
    get: function get () {
      return tmp.width
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("width???" + value + " is invalid"));
      }
      tmp.width = value;
    }
  },
  height: {
    default: 750,
    get: function get () {
      return tmp.height
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("height???" + value + " is invalid"));
      }
      tmp.height = value;
    }
  },
  pixelRatio: {
    default: pixelRatio,
    get: function get () {
      return tmp.pixelRatio
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("pixelRatio???" + value + " is invalid"));
      }
      tmp.pixelRatio = value;
    }
  },
  scale: {
    default: 2.5,
    get: function get () {
      return tmp.scale
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("scale???" + value + " is invalid"));
      }
      tmp.scale = value;
    }
  },
  zoom: {
    default: 5,
    get: function get () {
      return tmp.zoom
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("zoom???" + value + " is invalid"));
      } else if (value < 0 || value > 10) {
        console.error("zoom should be ranged in 0 ~ 10");
      }
      tmp.zoom = value;
    }
  },
  src: {
    default: '',
    get: function get () {
      return tmp.src
    },
    set: function set (value) {
      if (typeof (value) !== 'string') {
        console.error(("src???" + value + " is invalid"));
      }
      tmp.src = value;
    }
  },
  cut: {
    default: {},
    get: function get () {
      return tmp.cut
    },
    set: function set (value) {
      if (typeof (value) !== 'object') {
        console.error(("cut???" + value + " is invalid"));
      }
      tmp.cut = value;
    }
  },
  boundStyle: {
    default: {},
    get: function get () {
      return tmp.boundStyle
    },
    set: function set (value) {
      if (typeof (value) !== 'object') {
        console.error(("boundStyle???" + value + " is invalid"));
      }
      tmp.boundStyle = value;
    }
  },
  onReady: {
    default: null,
    get: function get () {
      return tmp.ready
    },
    set: function set (value) {
      tmp.ready = value;
    }
  },
  onBeforeImageLoad: {
    default: null,
    get: function get () {
      return tmp.beforeImageLoad
    },
    set: function set (value) {
      tmp.beforeImageLoad = value;
    }
  },
  onImageLoad: {
    default: null,
    get: function get () {
      return tmp.imageLoad
    },
    set: function set (value) {
      tmp.imageLoad = value;
    }
  },
  onBeforeDraw: {
    default: null,
    get: function get () {
      return tmp.beforeDraw
    },
    set: function set (value) {
      tmp.beforeDraw = value;
    }
  }
};

var ref$1 = getDevice();
var windowWidth = ref$1.windowWidth;

function prepare () {
  var self = this;

  // v1.4.0 ??????????????????????????????we-cropper??????
  self.attachPage = function () {
    var pages = getCurrentPages();
    // ???????????????page?????????
    var pageContext = pages[pages.length - 1];
    // ???this?????????Page????????????wecropper?????????????????????page?????????????????????
    Object.defineProperty(pageContext, 'wecropper', {
      get: function get () {
        console.warn(
          'Instance will not be automatically bound to the page after v1.4.0\n\n' +
          'Please use a custom instance name instead\n\n' +
          'Example: \n' +
          'this.mycropper = new WeCropper(options)\n\n' +
          '// ...\n' +
          'this.mycropper.getCropperImage()'
        );
        return self
      },
      configurable: true
    });
  };

  self.createCtx = function () {
    var id = self.id;
    var targetId = self.targetId;

    if (id) {
      self.ctx = self.ctx || wx.createCanvasContext(id);
      self.targetCtx = self.targetCtx || wx.createCanvasContext(targetId);

      // 2d ??????????????????
      if (typeof self.ctx.setStrokeStyle !== 'function') {
        self.type = '2d';
      }
    } else {
      console.error("constructor: create canvas context failed, 'id' must be valuable");
    }
  };

  self.deviceRadio = windowWidth / 750;
}

/**
 * String type check
 */

/**
 * Number type check
 */

/**
 * Array type check
 */

/**
 * undefined type check
 */





/**
 * Function type check
 */
var isFunc = function (v) { return typeof v === 'function'; };
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */






/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */


/**
 * Check if val is a valid array index.
 */

var EVENT_TYPE = ['ready', 'beforeImageLoad', 'beforeDraw', 'imageLoad'];

function observer () {
  var self = this;

  self.on = function (event, fn) {
    if (EVENT_TYPE.indexOf(event) > -1) {
      if (isFunc(fn)) {
        event === 'ready'
          ? fn(self)
          : self[("on" + (firstLetterUpper(event)))] = fn;
      }
    } else {
      console.error(("event: " + event + " is invalid"));
    }
    return self
  };
}

function wxPromise (fn) {
  return function (obj) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if ( obj === void 0 ) obj = {};
    return new Promise(function (resolve, reject) {
      obj.success = function (res) {
        resolve(res);
      };
      obj.fail = function (err) {
        reject(err);
      };
      fn.apply(void 0, [ obj ].concat( args ));
    })
  }
}

function draw (ctx, reserve) {
  if ( reserve === void 0 ) reserve = false;

  return new Promise(function (resolve) {
    ctx.draw && ctx.draw(reserve, resolve);
  })
}

var getImageInfo = wxPromise(wx.getImageInfo);

var canvasToTempFilePath = wxPromise(wx.canvasToTempFilePath);

var loadCanvasImage = function (context, src) {
  return new Promise(function (resolve, reject) {
    if (context.type === '2d') {
      var img = context.canvas.createImage();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function (e) {
        reject(e);
      };
      img.src = src;
    } else {
      resolve(src);
    }
  })
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var base64 = createCommonjsModule(function (module, exports) {
/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
(function(root) {

	// Detect free variables `exports`.
	var freeExports =  true && exports;

	// Detect free variable `module`.
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk???s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters???
			if (bitCounter++ % 4) {
				// ???convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '0.1.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		false
	) {}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = base64;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in base64) {
				base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.base64 = base64;
	}

}(commonjsGlobal));
});

function makeURI (strData, type) {
  return 'data:' + type + ';base64,' + strData
}

function fixType (type) {
  type = type.toLowerCase().replace(/jpg/i, 'jpeg');
  var r = type.match(/png|jpeg|bmp|gif/)[0];
  return 'image/' + r
}

function encodeData (data) {
  var str = '';
  if (typeof data === 'string') {
    str = data;
  } else {
    for (var i = 0; i < data.length; i++) {
      str += String.fromCharCode(data[i]);
    }
  }
  return base64.encode(str)
}

/**
 * ???????????????????????????????????????
 * @param canvasId canvas??????
 * @param x ?????????????????????????????????????????????????????? x ??????
 * @param y ?????????????????????????????????????????????????????? y ??????
 * @param width ???????????????????????????????????????????????????
 * @param height ???????????????????????????????????????????????????
 * @param done ????????????
 */
function getImageData (canvasId, x, y, width, height, done) {
  wx.canvasGetImageData({
    canvasId: canvasId,
    x: x,
    y: y,
    width: width,
    height: height,
    success: function success (res) {
      done(res, null);
    },
    fail: function fail (res) {
      done(null, res);
    }
  });
}

/**
 * ??????bmp????????????
 * ?????????????????????????????????????????????
 * @param oData ???????????? canvas ??????????????????????????? { data, width, height } = oData
 * @returns {*} base64?????????
 */
function genBitmapImage (oData) {
  //
  // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
  // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
  //
  var biWidth = oData.width;
  var biHeight	= oData.height;
  var biSizeImage = biWidth * biHeight * 3;
  var bfSize = biSizeImage + 54; // total header size = 54 bytes

  //
  //  typedef struct tagBITMAPFILEHEADER {
  //  	WORD bfType;
  //  	DWORD bfSize;
  //  	WORD bfReserved1;
  //  	WORD bfReserved2;
  //  	DWORD bfOffBits;
  //  } BITMAPFILEHEADER;
  //
  var BITMAPFILEHEADER = [
    // WORD bfType -- The file type signature; must be "BM"
    0x42, 0x4D,
    // DWORD bfSize -- The size, in bytes, of the bitmap file
    bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
    // WORD bfReserved1 -- Reserved; must be zero
    0, 0,
    // WORD bfReserved2 -- Reserved; must be zero
    0, 0,
    // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
    54, 0, 0, 0
  ];

  //
  //  typedef struct tagBITMAPINFOHEADER {
  //  	DWORD biSize;
  //  	LONG  biWidth;
  //  	LONG  biHeight;
  //  	WORD  biPlanes;
  //  	WORD  biBitCount;
  //  	DWORD biCompression;
  //  	DWORD biSizeImage;
  //  	LONG  biXPelsPerMeter;
  //  	LONG  biYPelsPerMeter;
  //  	DWORD biClrUsed;
  //  	DWORD biClrImportant;
  //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
  //
  var BITMAPINFOHEADER = [
    // DWORD biSize -- The number of bytes required by the structure
    40, 0, 0, 0,
    // LONG biWidth -- The width of the bitmap, in pixels
    biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
    // LONG biHeight -- The height of the bitmap, in pixels
    biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
    // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
    1, 0,
    // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
    // has a maximum of 2^24 colors (16777216, Truecolor)
    24, 0,
    // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
    0, 0, 0, 0,
    // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
    biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
    // LONG biXPelsPerMeter, unused
    0, 0, 0, 0,
    // LONG biYPelsPerMeter, unused
    0, 0, 0, 0,
    // DWORD biClrUsed, the number of color indexes of palette, unused
    0, 0, 0, 0,
    // DWORD biClrImportant, unused
    0, 0, 0, 0
  ];

  var iPadding = (4 - ((biWidth * 3) % 4)) % 4;

  var aImgData = oData.data;

  var strPixelData = '';
  var biWidth4 = biWidth << 2;
  var y = biHeight;
  var fromCharCode = String.fromCharCode;

  do {
    var iOffsetY = biWidth4 * (y - 1);
    var strPixelRow = '';
    for (var x = 0; x < biWidth; x++) {
      var iOffsetX = x << 2;
      strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +
        fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +
        fromCharCode(aImgData[iOffsetY + iOffsetX]);
    }

    for (var c = 0; c < iPadding; c++) {
      strPixelRow += String.fromCharCode(0);
    }

    strPixelData += strPixelRow;
  } while (--y)

  var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);

  return strEncoded
}

/**
 * ???????????????base64
 * @param canvasId canvas??????
 * @param x ?????????????????????????????????????????????????????? x ??????
 * @param y ?????????????????????????????????????????????????????? y ??????
 * @param width ???????????????????????????????????????????????????
 * @param height ???????????????????????????????????????????????????
 * @param type ??????????????????
 * @param done ????????????
 */
function convertToImage (canvasId, x, y, width, height, type, done) {
  if ( done === void 0 ) done = function () {};

  if (type === undefined) { type = 'png'; }
  type = fixType(type);
  if (/bmp/.test(type)) {
    getImageData(canvasId, x, y, width, height, function (data, err) {
      var strData = genBitmapImage(data);
      isFunc(done) && done(makeURI(strData, 'image/' + type), err);
    });
  } else {
    console.error('??????????????????\'' + type + '\'?????????base64??????');
  }
}

var CanvasToBase64 = {
  convertToImage: convertToImage,
  // convertToPNG: function (width, height, done) {
  //   return convertToImage(width, height, 'png', done)
  // },
  // convertToJPEG: function (width, height, done) {
  //   return convertToImage(width, height, 'jpeg', done)
  // },
  // convertToGIF: function (width, height, done) {
  //   return convertToImage(width, height, 'gif', done)
  // },
  convertToBMP: function (ref, done) {
    if ( ref === void 0 ) ref = {};
    var canvasId = ref.canvasId;
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;
    if ( done === void 0 ) done = function () {};

    return convertToImage(canvasId, x, y, width, height, 'bmp', done)
  }
};

function methods () {
  var self = this;

  var boundWidth = self.width; // ?????????????????????????????????????????????
  var boundHeight = self.height; // ?????????????????????????????????????????????

  var id = self.id;
  var targetId = self.targetId;
  var pixelRatio = self.pixelRatio;

  var ref = self.cut;
  var x = ref.x; if ( x === void 0 ) x = 0;
  var y = ref.y; if ( y === void 0 ) y = 0;
  var width = ref.width; if ( width === void 0 ) width = boundWidth;
  var height = ref.height; if ( height === void 0 ) height = boundHeight;

  self.updateCanvas = function (done) {
    if (self.croperTarget) {
      //  ??????????????????
      self.ctx.drawImage(
        self.croperTarget,
        self.imgLeft,
        self.imgTop,
        self.scaleWidth,
        self.scaleHeight
      );
    }
    isFunc(self.onBeforeDraw) && self.onBeforeDraw(self.ctx, self);

    self.setBoundStyle(self.boundStyle); //	??????????????????

    if (self.type !== '2d') {
      self.ctx.draw(false, done);
    }

    done && done();
    return self
  };

  self.pushOrigin = self.pushOrign = function (src) {
    self.src = src;

    isFunc(self.onBeforeImageLoad) && self.onBeforeImageLoad(self.ctx, self);

    return loadCanvasImage(self, src).then(function (img) {
      self.croperTarget = img;

      return getImageInfo({ src: src })
        .then(function (res) {
          var innerAspectRadio = res.width / res.height;
          var customAspectRadio = width / height;

          if (innerAspectRadio < customAspectRadio) {
            self.rectX = x;
            self.baseWidth = width;
            self.baseHeight = width / innerAspectRadio;
            self.rectY = y - Math.abs((height - self.baseHeight) / 2);
          } else {
            self.rectY = y;
            self.baseWidth = height * innerAspectRadio;
            self.baseHeight = height;
            self.rectX = x - Math.abs((width - self.baseWidth) / 2);
          }

          self.imgLeft = self.rectX;
          self.imgTop = self.rectY;
          self.scaleWidth = self.baseWidth;
          self.scaleHeight = self.baseHeight;

          self.update();

          return new Promise(function (resolve) {
            self.updateCanvas(resolve);
          })
        })
        .then(function () {
          isFunc(self.onImageLoad) && self.onImageLoad(self.ctx, self);
        })
    })
  };

  self.removeImage = function () {
    self.src = '';
    self.croperTarget = '';

    if (self.type === '2d') {
      return self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height)
    } else {
      return draw(self.ctx)
    }
  };

  self.getCropperBase64 = function (done) {
    if ( done === void 0 ) done = function () {};

    CanvasToBase64.convertToBMP({
      canvasId: id,
      x: x,
      y: y,
      width: width,
      height: height
    }, done);
  };

  self.getCropperImage = function (opt, fn) {
    var customOptions = Object.assign({fileType: 'jpg'}, opt);
    var callback = isFunc(opt) ? opt : isFunc(fn) ? fn : null;

    var canvasOptions = {
      canvasId: id,
      x: x,
      y: y,
      width: width,
      height: height
    };

    if (self.type === '2d') {
      canvasOptions.canvas = self.canvas;
    }

    var task = function () { return Promise.resolve(); };

    if (customOptions.original) {
      // original mode
      task = function () {
        self.targetCtx.drawImage(
          self.croperTarget,
          self.imgLeft * pixelRatio,
          self.imgTop * pixelRatio,
          self.scaleWidth * pixelRatio,
          self.scaleHeight * pixelRatio
        );

        canvasOptions = {
          canvasId: targetId,
          x: x * pixelRatio,
          y: y * pixelRatio,
          width: width * pixelRatio,
          height: height * pixelRatio
        };

        return draw(self.targetCtx)
      };
    }

    return task()
      .then(function () {
        Object.assign(canvasOptions, customOptions);
        var arg = canvasOptions.componentContext
          ? [canvasOptions, canvasOptions.componentContext]
          : [canvasOptions];

        return canvasToTempFilePath.apply(null, arg)
      })
      .then(function (res) {
        var tempFilePath = res.tempFilePath;
        return callback
          ? callback.call(self, tempFilePath, null)
          : tempFilePath
      })
      .catch(function (err) {
        if (callback) {
          callback.call(self, null, err);
        } else {
          throw err
        }
      })
  };
}

/**
 * ?????????????????????
 * @param oldScale ????????????????????????????????????
 * @param oldDistance ???????????????????????????????????????
 * @param zoom ????????????
 * @param touch0 ?????????touch??????
 * @param touch1 ?????????touch??????
 * @returns {*}
 */
var getNewScale = function (oldScale, oldDistance, zoom, touch0, touch1) {
  var xMove, yMove, newDistance;
  // ????????????????????????
  xMove = Math.round(touch1.x - touch0.x);
  yMove = Math.round(touch1.y - touch0.y);
  newDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));

  return oldScale + 0.001 * zoom * (newDistance - oldDistance)
};

function update () {
  var self = this;

  if (!self.src) { return }

  self.__oneTouchStart = function (touch) {
    self.touchX0 = Math.round(touch.x);
    self.touchY0 = Math.round(touch.y);
  };

  self.__oneTouchMove = function (touch) {
    var xMove, yMove;
    // ???????????????????????????
    if (self.touchended) {
      return self.updateCanvas()
    }
    xMove = Math.round(touch.x - self.touchX0);
    yMove = Math.round(touch.y - self.touchY0);

    var imgLeft = Math.round(self.rectX + xMove);
    var imgTop = Math.round(self.rectY + yMove);

    self.outsideBound(imgLeft, imgTop);

    self.updateCanvas();
  };

  self.__twoTouchStart = function (touch0, touch1) {
    var xMove, yMove, oldDistance;

    self.touchX1 = Math.round(self.rectX + self.scaleWidth / 2);
    self.touchY1 = Math.round(self.rectY + self.scaleHeight / 2);

    // ??????????????????
    xMove = Math.round(touch1.x - touch0.x);
    yMove = Math.round(touch1.y - touch0.y);
    oldDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));

    self.oldDistance = oldDistance;
  };

  self.__twoTouchMove = function (touch0, touch1) {
    var oldScale = self.oldScale;
    var oldDistance = self.oldDistance;
    var scale = self.scale;
    var zoom = self.zoom;

    self.newScale = getNewScale(oldScale, oldDistance, zoom, touch0, touch1);

    //  ??????????????????
    self.newScale <= 1 && (self.newScale = 1);
    self.newScale >= scale && (self.newScale = scale);

    self.scaleWidth = Math.round(self.newScale * self.baseWidth);
    self.scaleHeight = Math.round(self.newScale * self.baseHeight);
    var imgLeft = Math.round(self.touchX1 - self.scaleWidth / 2);
    var imgTop = Math.round(self.touchY1 - self.scaleHeight / 2);

    self.outsideBound(imgLeft, imgTop);

    self.updateCanvas();
  };

  self.__xtouchEnd = function () {
    self.oldScale = self.newScale;
    self.rectX = self.imgLeft;
    self.rectY = self.imgTop;
  };
}

var handle = {
  //  ????????????????????????
  touchStart: function touchStart (e) {
    var self = this;
    var ref = e.touches;
    var touch0 = ref[0];
    var touch1 = ref[1];

    if (!self.src) { return }

    setTouchState(self, true, null, null);

    // ???????????????????????????????????????????????????????????????
    self.__oneTouchStart(touch0);

    // ??????????????????
    if (e.touches.length >= 2) {
      self.__twoTouchStart(touch0, touch1);
    }
  },

  //  ????????????????????????
  touchMove: function touchMove (e) {
    var self = this;
    var ref = e.touches;
    var touch0 = ref[0];
    var touch1 = ref[1];

    if (!self.src) { return }

    setTouchState(self, null, true);

    // ?????????????????????
    if (e.touches.length === 1) {
      self.__oneTouchMove(touch0);
    }
    // ??????????????????
    if (e.touches.length >= 2) {
      self.__twoTouchMove(touch0, touch1);
    }
  },

  touchEnd: function touchEnd (e) {
    var self = this;

    if (!self.src) { return }

    setTouchState(self, false, false, true);
    self.__xtouchEnd();
  }
};

function cut () {
  var self = this;
  var boundWidth = self.width; // ?????????????????????????????????????????????
  var boundHeight = self.height;
  // ?????????????????????????????????????????????
  var ref = self.cut;
  var x = ref.x; if ( x === void 0 ) x = 0;
  var y = ref.y; if ( y === void 0 ) y = 0;
  var width = ref.width; if ( width === void 0 ) width = boundWidth;
  var height = ref.height; if ( height === void 0 ) height = boundHeight;

  /**
   * ????????????
   * @param imgLeft ???????????????????????????
   * @param imgTop ???????????????????????????
   */
  self.outsideBound = function (imgLeft, imgTop) {
    self.imgLeft = imgLeft >= x
      ? x
      : self.scaleWidth + imgLeft - x <= width
        ? x + width - self.scaleWidth
        :	imgLeft;

    self.imgTop = imgTop >= y
      ? y
      : self.scaleHeight + imgTop - y <= height
        ? y + height - self.scaleHeight
        : imgTop;
  };

  /**
   * ??????????????????
   * @param color	????????????
   */
  self.setBoundStyle = function (ref) {
    if ( ref === void 0 ) ref = {};
    var color = ref.color; if ( color === void 0 ) color = '#04b00f';
    var mask = ref.mask; if ( mask === void 0 ) mask = 'rgba(0, 0, 0, 0.3)';
    var lineWidth = ref.lineWidth; if ( lineWidth === void 0 ) lineWidth = 1;

    var half = lineWidth / 2;
    var boundOption = [
      {
        start: { x: x - half, y: y + 10 - half },
        step1: { x: x - half, y: y - half },
        step2: { x: x + 10 - half, y: y - half }
      },
      {
        start: { x: x - half, y: y + height - 10 + half },
        step1: { x: x - half, y: y + height + half },
        step2: { x: x + 10 - half, y: y + height + half }
      },
      {
        start: { x: x + width - 10 + half, y: y - half },
        step1: { x: x + width + half, y: y - half },
        step2: { x: x + width + half, y: y + 10 - half }
      },
      {
        start: { x: x + width + half, y: y + height - 10 + half },
        step1: { x: x + width + half, y: y + height + half },
        step2: { x: x + width - 10 + half, y: y + height + half }
      }
    ];

    // ??????????????????
    self.ctx.beginPath();
    adapt2d(self, 'fillStyle', mask);
    self.ctx.fillRect(0, 0, x, boundHeight);
    self.ctx.fillRect(x, 0, width, y);
    self.ctx.fillRect(x, y + height, width, boundHeight - y - height);
    self.ctx.fillRect(x + width, 0, boundWidth - x - width, boundHeight);
    self.ctx.fill();

    boundOption.forEach(function (op) {
      self.ctx.beginPath();
      adapt2d(self, 'strokeStyle', color);
      adapt2d(self, 'lineWidth', lineWidth);
      self.ctx.moveTo(op.start.x, op.start.y);
      self.ctx.lineTo(op.step1.x, op.step1.y);
      self.ctx.lineTo(op.step2.x, op.step2.y);
      self.ctx.stroke();
    });
  };
}

var version = "1.4.0";

var WeCropper = function WeCropper (params) {
  var self = this;
  var _default = {};

  validator(self, DEFAULT);

  Object.keys(DEFAULT).forEach(function (key) {
    _default[key] = DEFAULT[key].default;
  });
  Object.assign(self, _default, params);

  self.prepare();
  self.attachPage();
  self.createCtx();
  self.observer();
  self.cutt();
  self.methods();
  self.init();
  self.update();

  return self
};

WeCropper.prototype.init = function init () {
  var self = this;
  var src = self.src;

  self.version = version;

  typeof self.onReady === 'function' && self.onReady(self.ctx, self);

  if (src) {
    self.pushOrign(src);
  } else {
    self.updateCanvas();
  }
  setTouchState(self, false, false, false);

  self.oldScale = 1;
  self.newScale = 1;

  return self
};

Object.assign(WeCropper.prototype, handle);

WeCropper.prototype.prepare = prepare;
WeCropper.prototype.observer = observer;
WeCropper.prototype.methods = methods;
WeCropper.prototype.cutt = cut;
WeCropper.prototype.update = update;

return WeCropper;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/assets/images/avatar_select.png":
/*!*********************************************!*\
  !*** ./src/assets/images/avatar_select.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/avatar_select.png";

/***/ }),

/***/ "./src/assets/images/six1.png":
/*!************************************!*\
  !*** ./src/assets/images/six1.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAMAAACKyR5FAAAAk1BMVEUAAADx8fH39/fy8vLx8fHy8vLx8fHy8vLx8fHy8vLx8fHz8/Py8vLw8PD09PTz8/Pq6ur////x8fHx8fHz8/Px8fGZmZmioqLg4ODPz8/q6uqmpqbk5OSxsbHGxsbv7++7u7ucnJzLy8vd3d3n5+efn5++vr7Y2Ni4uLi1tbWqqqrV1dXs7OzBwcGurq65ubnu7u66OOa6AAAAFXRSTlMAuR747uvc1qmgkntfVy8WDAWWx5ZoQ91NAAACtElEQVRYw82Y63aiMBSFofXSemmr7dmBIGAQEEHpvP/TzdBUxEiio8XV79dZYS02OZxbYp3yMBnZg/4j3cBjf2CPJg/WWR7GQ/oxhmOz4ssT/TBPL1qx12fqgOfXdrVpjzqhN20Rm82pM+YzVe3Npg6x3xS1d+qU9yO9mU0dYzf9+UGdM2/EJN2BaZ1vPboDvX3+XZbdYYkvvLhe4m4LjjbfvysXXUSMb9x6yUELAemQ9ezSOumm6UaVE0uJgC8NzyD39NUDzjkx5iFJuKfKJSRhWEnj0yBHVX8Yk4FVygCIMuLfavktcuN/cob+tvCxJ4nCSm3jKM50JAyuNHyT3NDoy7UAUO6i4DMB4FdqoXN1qEhvTvRqALKF/H8uAyo1ioGiKedLBHJpMKPcxBppAz9pboSXgFeFTBGFV/87Glna4pxVage2HuBI83o52xrowgTwlXdjcyrHJQxraWRGuYHVp3aCk81sILbSujpU+pZunizB1KoCrBU5r4XINH9q5ViL66B71ZYr+9bJaZ0pkCorXO+oDDu6hL42VBgyNXj0u/Pg0iUMtImQI1dWCpnhNTGrARJWkxoSQZvmOyCmI5YAP5JDO5+mNJ/oegGUnxcLlNQkXOxh2NV2hqWhiOlLdAmsmi/36zxQcSF4I2pSY8Mb6reXOAe1FPCpFUc049LUgYam9hoBYl+PHR9gvP2zGPI/zRBzDe3V1PACAGxXrNaRD8BbtCZ4IMCaTxhWel+aR6OCoWbTtjceMSCPj5qk2BpGI/Pgtw1yVCRZyyfH7kYAyd7fiyCIolQgMwx+58faeFWsnZBOCRkAFvBDjfsi59qx9rahPWDpOmyGVrpc7oqQtEP7bUeSkP6LqVUzp86Z3/04ef/D8v2vAiSzDg/MH7O7XuP8hkuqjq7gfs8FY+fXp38Btx6noejIUSwAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/six1ed.png":
/*!**************************************!*\
  !*** ./src/assets/images/six1ed.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAMAAACKyR5FAAAAqFBMVEUAAABUj/9Uj/9Vkf9Uj/9UkP9Vj/9Uj/9Uj/9UkP9Uj/1Uj/9Tjv9VkP9Xjf9Ri/9VgP9VkP9Uj/7////r8v7j7f5tn/5hl/7T4v6Yu/52pf78/f680/5yo/7z9/7B1v75+/6px/57qP630P6TuP7o8P7M3v7G2v6cvv6Drv5kmf7t8/6hwf5clP5Xkf6wy/6nxf5pnP5WkP7b6P6Jsf7e6f6Xu/6NtP6UlpMaAAAAEnRSTlMA7bke+NzWqaCWkntfVy8WDMdqPAmBAAACuklEQVRYw82Y2XqiQBCFlURNXLLUQSGiQEAWBQXXvP+bzZg2RLC7w8TA5L/qjwsO1dSpqu7GJTf9rtJq3tIV3DZbSrd/0/iSm16bfox2T6740KEfpvMgFHu8owq4e+SrDZpUCc0BT+2eKuP+QuxJoQpRngpqz1Qpz3k9hSpGqfK/yf/fgGpgkPmtSTXQ/PBfOXevdOMdb5090l44jIV+P1UuKsUCJ2bZozE4vJIIVs/K1sk31w2KcvaEYcJnC08i13nvAV9t4kLLAhwW5UxieHDYwpLI0bE/9EiC46oAbD1entT218j1/spJ+tvIxwdm/K4WjAtyU0aEGVv4Mrm2dC/nJmDoSZxaEQD/qLaafjtV2G72xWoGYLGs38xU4KhGa2B3JmfoDBtbtoikcv1GlwSsTRifgWg6MFwd8zOkb/876oqLswUc6JPlEAZz8BVySqMlShPAL7wbwaWcxlAxZ4tAKtdqiOplChSC8WEv2erbqdJsiOZJHR7lmQFzyjEdcghl86dQTkVwub2iVy21JZXhVriZNlzKowGpMK2Sck1ImCoRrPLRDTGjMrSERthiT3l2zOEZCzXDgKlmuBIjCG2eAGvKMYGh5eoA+FgSmwuLmIPCz1vb0HMPNqMPVCTZ2sJEUsTEJVqH4eRthzlxOcDWzrLGlTa8tig8A+b4MxQX8InL1EZy/pWpuAHJ2msI2OHqlJU64Gn8z4qwXZ2n2EHSXmUNLwWgJm/OPPQNYDjiGjy1EY1yBnLEeykfjXYRMgJebFqsAtvFeZNkhZVL56vBbxnv2ehgjTmT4CGwATPcnPb7NQ5fXFvig4cSY+3CeZtPV/yqCnixlkVq4MheE4611w3tqefmnBG7k0my24iH9uuOJBv6Jwb1HrjqPU7WfFiu9yqg1ouO/3+NU90l1e+4gqvhgrHm69M/HYN03ME0BNgAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/six2.png":
/*!************************************!*\
  !*** ./src/assets/images/six2.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAMAAACKyR5FAAAAkFBMVEUAAADx8fH39/fy8vLx8fHy8vLx8fHy8vLx8fHy8vLx8fHz8/Py8vLw8PD09PTz8/Pq6ur////x8fHx8fHz8/Px8fGZmZnT09OxsbHu7u65ubmioqLq6uqcnJzBwcHm5ubf39/FxcW+vr6rq6uenp7Y2Njb29vJycmurq6mpqbMzMy0tLTj4+PPz8/Q0NCwsLBk3zxkAAAAFXRSTlMAuR747uvc1qmgkntfVy8WDAWWx5ZoQ91NAAACs0lEQVRYw82Y2XLqMBBEbQg7WSCZNrLxvoNN/v/vrsNysRCSlUpM5bziomuk6R5JhshgOTfHoyH9gOFobM6XA6OTwWJCv8ZkoVZ8mdIvM32Rir3OqAdmr/fVnp+oF56eDZHVmnpjvbpVezOpR8y3G7V36pV3Tm9lUs+Y7fX8oN5Zt3qSHsDzf791OGBbZRUjGVa91fPDxX8zpVYYA3BR7CSKDiJNv5+TixTsElxwLLpDClSkxynPVDm5/5LxdlYefcmGd78otPPzOANIjg04BzrCchfIhS984EC6fM2HhWIlgdKnC1kCpHRDiISRLotGbiLvkgSOT1cyFyXxMAceaTNRrmUI1NTGA87tEmxOxEC84QmUq7kkKTGSm3IB+1wopGQkZ2nMSQaD4KgCzlnYOuIBuXVmBxysBpXp54Y8nH2xEz2A2mwQX9MFZXdQG2OSEQC1uJtb/gurZZrudBkbo+9UFwGcxVsFsQQpdTEyhqq9s4XmcbjiWhY/ND91MlTI0SdcdltvxBd3/T1GqCM3UoYKv5o21+YVUFoXvRquxhwaca0iRobbNq0FLo6ryAWSKDgHUEjdjEUj8P+Pq14KTr2B1QWAz5RYAYdRN+aNzUWfuR47GTsCIE68ygZQ7oGANJgLISYYDe7eC70CkIwa33PB9bAyxAakJC1xIZYUsN2jYePrDbwJKWHWPgHg2DITBw7g2YCb6wwgY0GdfMrXyreBJCVKHaCoNMbrgNSwMC8R5zvpvhX+pZXcumstG6akxMYJT9izuuDOZ5kDRCo7TMWDn4jl3hubqRejodyxlv4GiP2ug58x09o7sebEzgTfKBwx0zy0UyQmVBCHGSOB1Gadh/buK4lPP6d1ZV5T76wffJ187GX50U8BPKseL8wfq4c+4/yFR6qenuD+zgNj78+n/wCji6RvCgEo6wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/six2ed.png":
/*!**************************************!*\
  !*** ./src/assets/images/six2ed.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAMAAACKyR5FAAAAtFBMVEUAAAD/VFf/VVn/VFf/VFf+VFf/VVf/VFf/VVf/VFj/VFj/VFf9VFf/VFb/U1b/VVj/V1f/UVH/VVX/Zmb/VVf+VFf////+/Pz+0NH+jpD++fr+V1r+ZWf+goT+6ur+tLX+qqv+lJX+oKH+cnT+Wl3+8vL+19j+mpz+iYv+a23+5eX+v8D+ubv+r7H+en3+dnn+XmH+9vb+7u/+09T+pab+3+D+zM3+29z+x8j+wsP+vL3+4uJ0s6oJAAAAFXRSTlMAuR78+O7r3NapoJaSe19XLxYMBceApbSNAAAC40lEQVRYw83Y13biMBAGYMEm9JI2/+CCC2DTSWih5P3fa1kIaxsjW7uJOfm4gYMPQuOZkSwRl2/UcsXCHX3BXaGYqzXyIlW+XqJvU6onj/hQ/kXf6lf5Qcg8VigDlUdxVfOeMnHfFHHPVcpM9VlceMpRhnJPF6O9UKZeIuM95yhjuXA8q5S5aign6Qaaf+stpQLeurNhj2Q011Srh3P9VRLHWm1YP7yWfYOusmAr1vtn56IEfQ9n1oCuGABdUnPqZ2WS2zLYmva1zsQ7vHMo7h0+KSof14CErjwGLJeOjM4c6NAlk+Eq9+s/60M9IZKMjyAPZgtwmy448Hqkqn4YriTPkgVGQwq86lhTlLGATcpKh1iS1AocDdQU/Jku3daJD6xbUUmJkxcNkvKxuJiujgkdtSHVJrmGqJFMj2OBap3/gKkdTYGO9qkPuNpBUtHXhLw5D/VYJk7BF1WwCboLPtIbtSiSzGs8xx1wL3wFEJT+XiFpiqLwL7OzwdHJjYLQe2hTmoKQ7ycNHZNY8owo0EVo+i4shf1nwnDUgmdQmBlNni1GwfdrOCrDFRKbSjSa+0hb6TI+NON8LeYmKQSzSFKGhXm4aAeMJQWGkzng2ccrTA8OpSvGCyH6+/wafNKhd6OV6foAWm0ylrBUWmfuUOYJHIbunH7HnDCg0aXumIH1Nvy3Esu8QUlWDOjb6Wq6ZIA1usK05wDGpKIh8pSoPWKcsC+ZwNs7DlpDSpcPFiAJY7BbAGztZUU8s8DODph3VBYgUadULXmszD3DaxO1LcBPm2A92DxI9VadETad/tU+Z+vAcni8zGbobvrmQZQp0QQnTuyeuUsAo0EoqpgYaVsj8UCJNJ0BZsyiKTTdMIB134jmjG+mbfxE5T/u3Q6AN57F6jShIiqKm3ayeRVbDH1nZlypm50h37QrP5KY9HXN2z5w3fhx8rYPy7c9CrjtQcdNj3F+wiFVRkdwP+eAMfPj0999LqqpV/qFpwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/register/index.scss":
/*!***************************************!*\
  !*** ./src/pages/register/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/register/index.vue":
/*!**************************************!*\
  !*** ./src/pages/register/index.vue ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/register/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/register/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/register/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/pages/register/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1a38522c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/register/index.vue?vue&type=template&id=1a38522c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a38522c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/pages/we-cropper/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/we-cropper/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/we-cropper/index.vue":
/*!****************************************!*\
  !*** ./src/pages/we-cropper/index.vue ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_c6c737d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c6c737d6&scoped=true& */ "./src/pages/we-cropper/index.vue?vue&type=template&id=c6c737d6&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/we-cropper/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _index_vue_vue_type_template_id_c6c737d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_c6c737d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "c6c737d6",
  "279137d8"
  
)

component.options.__file = "src/pages/we-cropper/index.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/pages/we-cropper/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/pages/we-cropper/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/we-cropper/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/we-cropper/index.vue?vue&type=template&id=c6c737d6&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./src/pages/we-cropper/index.vue?vue&type=template&id=c6c737d6&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c6c737d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c6c737d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/we-cropper/index.vue?vue&type=template&id=c6c737d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c6c737d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c6c737d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/register/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map