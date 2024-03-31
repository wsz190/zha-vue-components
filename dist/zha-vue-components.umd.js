(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.WangzhaComponents = {}, global.Vue, global._));
})(this, (function (exports, vue, lodashEs) { 'use strict';

  const useComponentCommon = (props, picks) => {
      const styleProps = vue.computed(() => lodashEs.pick(props, picks));
      const handleClick = () => {
          if (props.actionType === 'url' && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return {
          styleProps,
          handleClick
      };
  };

  const commonDefaultProps = {
      // actions
      actionType: '',
      url: '',
      // size
      height: '',
      width: '373px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      // border type
      borderStyle: 'none',
      borderColor: '#000',
      borderWidth: '0',
      borderRadius: '0',
      // shadow and opacity
      boxShadow: '0 0 0 #000000',
      opacity: '1',
      // position and x,y
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0'
  };
  const textDefaultProps = {
      // basic props - font styles
      text: '正文内容',
      fontSize: '14px',
      fontFamily: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      lineHeight: '1',
      textAlign: 'left',
      color: '#000000',
      backgroundColor: '',
      ...commonDefaultProps
  };
  const imageDefaultProps = {
      src: 'test.url',
      ...commonDefaultProps
  };
  const shapeDefaultProps = {
      backgroundColor: '',
      ...commonDefaultProps
  };
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false
      }
  };
  const textStylePropNames = lodashEs.without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
  const imageStylePropsNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src');
  const shapeStylePropsNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url');
  const transformToComponentProps = (props) => {
      const mapProps = lodashEs.mapValues(props, (item) => {
          return {
              type: item.constructor,
              default: item
          };
      });
      return { ...mapProps, ...isEditingProp };
  };

  const defaultProps$2 = transformToComponentProps(textDefaultProps);
  // array that contains style props
  var script$3 = vue.defineComponent({
      name: 'z-text',
      props: {
          tag: {
              type: String,
              default: 'div'
          },
          ...defaultProps$2
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-text-component",
      onClick: _ctx.handleClick
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style", "onClick"]))
  }

  script$3.render = render$3;
  script$3.__scopeId = "data-v-607d9842";
  script$3.__file = "src/components/ZText/ZText.vue";

  script$3.install = (app) => {
      app.component(script$3.name, script$3);
  };

  const defaultProps$1 = transformToComponentProps(imageDefaultProps);
  // array that contains style props
  var script$2 = vue.defineComponent({
      name: 'z-image',
      props: {
          ...defaultProps$1
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, imageStylePropsNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  const _hoisted_1$1 = ["src"];

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("img", {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-image-component",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
      src: _ctx.src
    }, null, 12 /* STYLE, PROPS */, _hoisted_1$1))
  }

  script$2.render = render$2;
  script$2.__scopeId = "data-v-93fa6322";
  script$2.__file = "src/components/ZImage/ZImage.vue";

  script$2.install = (app) => {
      app.component(script$2.name, script$2);
  };

  const defaultProps = transformToComponentProps(shapeDefaultProps);
  // array that contains style props
  var script$1 = vue.defineComponent({
      name: 'z-shape',
      props: {
          ...defaultProps
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, shapeStylePropsNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-shape-component",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
    }, null, 4 /* STYLE */))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/ZShape/ZShape.vue";

  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  var script = vue.defineComponent({
      name: 'final-page',
      props: {
          page: {
              type: Object
          },
          components: {
              type: Array,
              required: true
          }
      }
  });

  const _hoisted_1 = ["id"];

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: "final-page",
      style: vue.normalizeStyle(_ctx.page && _ctx.page.props)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.components, (item) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          key: item.id,
          id: `component-${item.id}`
        }, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.name), vue.normalizeProps(vue.guardReactiveProps(item.props)), null, 16 /* FULL_PROPS */))
        ], 8 /* PROPS */, _hoisted_1))
      }), 128 /* KEYED_FRAGMENT */))
    ], 4 /* STYLE */))
  }

  script.render = render;
  script.__file = "src/components/FinalPage/FinalPage.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script$3,
      script$2,
      script$1,
      script
  ];
  const install = (app) => {
      components.forEach(component => {
          app.component(component.name, component);
      });
  };
  var index = {
      install
  };

  exports.FinalPage = script;
  exports.ZImage = script$2;
  exports.ZShape = script$1;
  exports.ZText = script$3;
  exports["default"] = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
