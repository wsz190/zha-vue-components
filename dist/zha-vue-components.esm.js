import { computed, defineComponent, openBlock, createBlock, resolveDynamicComponent, normalizeStyle, withCtx, createTextVNode, toDisplayString, createElementBlock, withModifiers, Fragment, renderList, normalizeProps, guardReactiveProps } from 'vue';
import { pick, without, mapValues } from 'lodash-es';

const useComponentCommon = (props, picks) => {
    const styleProps = computed(() => pick(props, picks));
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
const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
const imageStylePropsNames = without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src');
const shapeStylePropsNames = without(Object.keys(imageDefaultProps), 'actionType', 'url');
const transformToComponentProps = (props) => {
    const mapProps = mapValues(props, (item) => {
        return {
            type: item.constructor,
            default: item
        };
    });
    return { ...mapProps, ...isEditingProp };
};

const defaultProps$2 = transformToComponentProps(textDefaultProps);
// array that contains style props
var script$3 = defineComponent({
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
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-text-component",
    onClick: _ctx.handleClick
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
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
var script$2 = defineComponent({
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
  return (openBlock(), createElementBlock("img", {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-image-component",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
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
var script$1 = defineComponent({
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
  return (openBlock(), createElementBlock("div", {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-shape-component",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
  }, null, 4 /* STYLE */))
}

script$1.render = render$1;
script$1.__file = "src/components/ZShape/ZShape.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};

var script = defineComponent({
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
  return (openBlock(), createElementBlock("div", {
    class: "final-page",
    style: normalizeStyle(_ctx.page && _ctx.page.props)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.components, (item) => {
      return (openBlock(), createElementBlock("div", {
        key: item.id,
        id: `component-${item.id}`
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(item.name), normalizeProps(guardReactiveProps(item.props)), null, 16 /* FULL_PROPS */))
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

export { script as FinalPage, script$2 as ZImage, script$1 as ZShape, script$3 as ZText, index as default, install };
