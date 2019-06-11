module.exports = {
  rules: {

    "accessor-pairs": [2, {
      "setWithoutGet": true,
      "getWithoutSet": true,
    }],

    "array-callback-return": [2, {
      "allowImplicit": true,
    }],
    
    "block-scoped-var": 2,
    "class-methods-use-this": [2, {
      "exceptMethods": [],
    }],
    
    "complexity": [2, {
      "max": 10,
    }],
    
    "consistent-return": [2, {
      "treatUndefinedAsUnspecified": false,
    }],
    
    "curly": [2, "all"],
    
    "default-case": [2, {
      "commentPattern": "^no\\sdefault$",
    }],
    
    "dot-location": [2, "property"],
    
    "dot-notation": [2, {
      "allowKeywords": true,
      "allowPattern": "",
    }],
    
    "eqeqeq": [2, "always"],
    
    "guard-for-in": 2,
    
    "max-classes-per-file": [2, 1],
    
    "no-alert": 2,
    
    "no-caller": 2,
    
    "no-case-declarations": 2,
    
    "no-div-regex": 2,
    
    "no-else-return": [2, {
      "allowElseIf": false,
    }],
    
    "no-empty-function": [2, {
      "allow": [
        //"functions",
        //"arrowFunctions",
        //"generatorFunctions",
        //"methods",
        //"generatorMethods",
        //"getters",
        //"setters",
        //"constructors",
      ]
    }],
    
    "no-empty-pattern": 2,
    
    "no-eq-null": 2,
    
    "no-eval": [2, {
      "allowIndirect": false,
    }],
    
    "no-extend-native": [2, {
      "exceptions": [],
    }],
    
    "no-extra-bind": 2,
    
    "no-extra-label": 2,
    
    "no-fallthrough": [2, {
      "commentPattern": "fallthrough",
    }],
    
    "no-floating-decimal": 2,
    
    "no-global-assign": [2, {
      "exceptions": [],
    }],
    
    "no-implicit-coercion": [2, {
      "boolean": true,
      "number": true,
      "string": true,
      "allow": [
        //"~",
        //"!!",
        //"+",
        //"*",
      ]
    }],
    
    "no-implicit-globals": 2,
    
    "no-implied-eval": 2,
    
    "no-invalid-this": 2,
    
    "no-iterator": 2,
    
    "no-labels": [2, {
      "allowLoop": false,
      "allowSwitch": false,
    }],
    
    "no-lone-blocks": 2,
    
    "no-loop-func": 2,
    
    "no-magic-numbers": [2, {
      "ignore": [],
      "ignoreArrayIndexes": true,
      "enforceConst": true,
      "detectObjects": true,
    }],
    
    "no-multi-spaces": [2, {
      "ignoreEOLComments": false,
      "exceptions": {
        "Property": false, // default is True
      }
    }],
    
    "no-multi-str": 2,
    
    // Since webpack uses plugins with new, we might need to set this to warn only
    "no-new": "warn",
    
    "no-new-func": 2 ,
    
    "no-new-wrappers": 2,
    
    "no-octal": 2,
    
    "no-octal-escape": 2,
    
    "no-param-reassign": [2, {
      "props": true, // Default: false
      "ignorePropertyModificationsFor": [],
    }],
    
    "no-proto": 2,
    
    "no-redeclare": [2, {
      "builtinGlobals": true,
    }],
    
    "no-restricted-properties": [2, {
      "object": "",
      "property": "",
      "message": "",
    }],
    
    "no-return-assign": [2, "always"],
    
    "no-return-await": 2,
    
    "no-script-url": 2,
    
    "no-self-assign": [2, {
      "props": true,
    }],
    
    "no-self-compare": 2,
    
    "no-sequences": 2,
    
    "no-throw-literal": 2,
    
    "no-unmodified-loop-condition": 2,
    
    "no-unused-expressions": [2, {
      "allowShortCircuit": true,
      "allowTernary": true,
      "allowTaggedTemplates": false
    }],
    
    "no-unused-labels": 2,
    
    "no-useless-call": 2,
    
    "no-useless-catch": 2,
    
    "no-useless-concat": 2,
    
    "no-useless-escape": 2,
    
    "no-useless-return": 2,
    
    "no-void": 2,
    
    "no-warning-comments": [2, {
      "terms": ["todo", "fix",],
      "location": "start",
    }],
    
    "no-with": 2,
    
    "prefer-named-capture-group": "warn", // only available in newer envs.
    
    "prefer-promise-reject-errors": 2,
    
    "radix": [2, "as-needed"],
    
    "require-await": 2,
    
    "require-unicode-regexp": "warn",
    
    "vars-on-top": 2,
    
    "wrap-iife": [2, "outside", {
      "functionPrototypeMethods": false
    }],
    
    "yoda": [2, "never", {
      "exceptRange": true,
      "onlyEquality": false,
    }],
  }
}
