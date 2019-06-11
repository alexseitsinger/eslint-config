module.exports = {
  rules: {
    /**
     * Enforces consistent naming for boolean props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
     */
    "react/boolean-prop-naming": [2, {
      "propTypeNames": ["bool"],
      "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      //"message": "",
      //"validateNested": true,
    }],

    /**
     * Forbid "button" element without an explicit "type" attribute.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    "react/button-has-type": [2, {
      "button": true,
      "submit": true,
      "reset": true,
    }],

    /**
     * Prevent extraneous defaultProps on components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     */
    "react/default-props-match-prop-types": [2, {
      "allowRequiredDefaults": false,
    }],

    /**
     * Enforces consistent usage of destructuring assignment in component.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    "react/destructuring-assignment": [2, "always", {
      "ignoreClassFields": true,
    }],
    
    /**
     * Prevent missing displayName in a React component definition.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    "react/display-name": [2, {
      "ignoreTranspilerName": false,
    }],

    /**
     * Forbid certain props on Components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    "react/forbid-component-props": [2, {
      "forbid": ["className", "style"],
    }],

    /**
     * Forbid certain props on DOM Nodes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     */
    "react/forbid-dom-props": [2, {
      "forbid": [],
    }],

    /**
     * Forbid certain elements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     */
    "react/forbid-elements": [2, {
      "forbid": [],
    }],

    /**
     * Forbid certain propTypes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    "react/forbid-prop-types": [2, {
      "forbid": ["any", "array", "object"],
      "checkContextTypes": false,
      "checkChildContextTypes": false,
    }],

    /**
     * Forbid foreign propTypes.
     * 
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     */
    "react/forbid-foreign-prop-types": 2,

    /**
     * Prevent using this.state inside this.setState.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     */
    "react/no-access-state-in-setstate": 2,

    /**
     * Prevent using Array index in key props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    "react/no-array-index-key": 2,

    /**
     * Prevent passing children as props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    "react/no-children-prop": 2,

    /**
     * Prevent usage of dangerous JSX properties.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     */
    "react/no-danger": 2,
    
    /**
     * Prevent problem with children and props.dangerouslySetInnerHTML.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    "react/no-danger-with-children": 2,

    /**
     * Prevent usage of deprecated methods, including component lifecyle
     * methods.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    "react/no-deprecated": 2,

    /**
     * Prevent usage of setState in componentDidMount.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    "react/no-did-mount-set-state": [2, "disallow-in-func"],

    /**
     * Prevent usage of setState in componentDidUpdate.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    "react/no-did-update-set-state": [2, "disallow-in-func"],

    /**
     * Prevent direct mutation of this.state.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    "react/no-direct-mutation-state": 2,

    /**
     * Prevent usage of findDOMNode.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    "react/no-find-dom-node": 2,

    /**
     * Prevent usage of isMounted.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    "react/no-is-mounted": 2,

    /**
     * Prevent multiple component definition per file.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    "react/no-multi-comp": [2, {
      "ignoreStateless": false,
    }],

    /**
     * Prevent usage of shouldComponentUpdate when extending
     * React.PureComponent.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     */
    "react/no-redundant-should-component-update": 2,

    /**
     * Prevent usage of the return value of React.render.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    "react/no-render-return-value": 2,

    /**
     * Prevent usage of setState.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    "react/no-set-state": 2,

    /**
     * Prevent common casing typos.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     */
    "react/no-typos": 2,

    /**
     * Prevent using string references in ref attribute.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     */
    "react/no-string-refs": [2, {
      "noTemplateLiterals": true,
    }],

    /**
     * Prevent using this in stateless functional components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     */
    "react/no-this-in-sfc": 2,

    /**
     * Prevent invalid characters from appearing in markup.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    "react/no-unescaped-entities": [2, {
      "forbid": [">", '"', "\'", "}"],
    }],

    /**
     * Prevent usage of unknown DOM property. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     */
    "react/no-unknown-property": [2, {
      "ignore": [],
    }],

    /**
     * Prevent usage of unsafe lifecycle methods
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     */
    "react/no-unsafe": [2, {
      "checkAliases": true,
    }],

    /**
     * Prevent definitions of unused prop types.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    "react/no-unused-prop-types": [2, {
      "customValidators": [],
      "skipShapeProps": true,
    }],

    /**
     * Prevent definitions of unused state properties.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     */
    "react/no-unused-state": 2,

    /**
     * Prevent usage of setState in componentWillUpdate.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     */
    "react/no-will-update-set-state": [2, "disallow-in-func"],

    /**
     * Enforce ES5 or ES6 class for React Components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     */
    "react/prefer-es6-class": [2, "always"],

    /**
     * Enforce that props are read-only.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
     */
    "react/prefer-read-only-props": 2,

    /**
     * Enforce stateless React Components to be written as a pure function.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    "react/prefer-stateless-function": [2, {
      "ignorePureComponents": true,
    }],

    /**
     * Prevent missing props validation in a React component definition.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */ 
    "react/prop-types": [2, {
      "ignore": [],
      "customValidators": [],
      "skipUndeclared": true,
    }],

    /**
     * Prevent missing React when using JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    "react/react-in-jsx-scope": 2,

    /**
     * Enforce a defaultProps definition for every prop that is not a required
     * prop.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    "react/require-default-props": [2, {
      "forbidDefaultForRequired": true,
    }],

    /**
     * Enforce React components to have a shouldComponentUpdate method.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     */
    "react/require-optimization": 0,

    /**
     * Enforce ES5 or ES6 class for returning value in render function.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     */
    "react/require-render-return": 2,

    /**
     * Prevent extra closing tags for components without children. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    "react/self-closing-comp": [2, {
      "component": true,
      "html": true,
    }],
    
    /**
     * Enforce component methods order.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    "react/sort-comp": [2, {
      "order": [
        "static-methods",
        "instance-variables",
        "lifecycle",
        "/^on.+$/",
        "getters",
        "setters",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "instance-methods",
        "everything-else",
        "rendering",
      ],
      "groups": {
        "lifecycle": [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount'  
        ],
        rendering: [
          "/^render.+$/",
          "render"
        ]
      }
    }],
    
    /**
     * Enforce propTypes declarations alphabetical sorting.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     */
    "react/sort-prop-types": [2, {
      "callbacksLast": true,
      "ignoreCase": false,
      "requiredFirst": true,
      "sortShapeProp": true,
      "noSortAlphabetically": false,
    }],

    /**
     * Enforce the state initialization style to be either in a constructor or
     * with a class property.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
     */
    "react/state-in-constructor": [2, "never"],

    /**
     * Enforces where React component static properties should be positioned.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
     */
    "react/static-property-placement": [2, "property assignment"],

    /**
     * Enforce style prop value being an object.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    "react/style-prop-object": 2,

    /**
     * Prevent void DOM elements (e.g. <img />, <br />) from receiving children.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
     */
    "react/void-dom-elements-no-children": 2,
  }
}
