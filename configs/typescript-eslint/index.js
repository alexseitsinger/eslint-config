/*
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {
    /**
     * Require that member overloads be consecutive
     * (Recommended)
     */
    "@typescript-eslint/adjacent-overload-signatures": "error",

    /**
     * Requires using either T[] or Array<T> for arrays
     * (Fixable)
     */
    "@typescript-eslint/array-type": ["error", {
      default: "array",
      //readonly: 
    }],

    /**
     * Disallows awaiting a value that is not a Thenable
     * (Fixable)
     * (Requires type info)
     */
    //"@typescript-eslint/await-thenable": "error",

    /**
     * Bans “// @ts-ignore” comments from being used
     * (Recommended)
     *
     * NOTE: This is used by react-imported-component when imported.js is
     *       generated, so disable.
     */
    "@typescript-eslint/ban-ts-ignore": "error",

    /**
     * Bans specific types from being used
     * (Recommended)
     * (Fixable)
     */
    "@typescript-eslint/ban-types": ["error", {
      types: {
        Array: null,
        Object: "Use {} instead",
        String: {
          message: "Use string instead",
          fixWith: "string",
        },
      },
    }],

    /**
     * Enforce consistent brace style for blocks
     * (Fixable)
     *
     * - Requires disabling the original eslint config rule.
     * - Disabled because we use eslint.
     */
    /*
    "brace-style": "off",
    "@typescript-eslint/brace-style": "error",
    */

    /**
     * Enforce camelCase naming convention
     * (Recommended)
     *
     * - Requires disabling the eslint rule.
     *
     * - Note: Should ignore this for REST params that need to match a model
     *   field.
     */
    "camelcase": "off",
    "@typescript-eslint/camelcase": ["off", {
      properties: "always",
      genericType: "never",
      ignoreDestructuring: false,
      allow: [
        // put names of keys that are allowed to be camelcase?
      ],
    }],

    /**
     * Require PascalCased class and interface names
     */
    "@typescript-eslint/class-name-casing": ["error", {
      allowUnderscorePrefix: false,
    }],

    /**
     * Enforces consistent usage of type assertions.
     */
    "@typescript-eslint/consistent-type-assertions": ["error", {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "allow",
    }],

    /**
     * Consistent with type definition either interface or type
     * (Fixable)
     */
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    /**
     * Require explicit return types on functions and class methods
     */
    //"@typescript-eslint/explicit-function-return-type": ["error", {
    //  allowExpression: false,
    //  allowTypedFunctionExpressions: true,
    //  allowHigherOrderFunctions: true,
    //}],

    /**
     * Require explicit accessibility modifiers on class properties and methods
     */
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      accessibility: "explicit",
      ignoredMethodNames: [],
      overrides: {
        accessors: "explicit",
        constructors: "explicit",
        methods: "explicit",
        properties: "explicit",
        parameterProperties: "explicit",
      },
    }],

    /**
     * Require or disallow spacing between function identifiers and their
     * invocations
     * (Fixable)
     */
    //"@typescript-eslint/func-call-spacing": null,

    /**
     * Enforces naming of generic type variables
     */
    //"@typescript-eslint/generic-type-naming": null,

    /**
     * Enforce consistent indentation
     * (Fixable)
     */
    //"@typescript-eslint/indent": null,

    /**
     * Require that interface names should or should not prefixed with I
     */
    //"@typescript-eslint/interface-name-prefix": null,

    /**
     * Require a specific member delimiter style for interfaces and type
     * literals
     */
    "@typescript-eslint/member-delimiter-style": ["error", "semi"],

    /**
     * Enforces naming conventions for class members by visibility
     */
    //"@typescript-eslint/member-naming": null,

    /**
     * Require a consistent member declaration order
     */
    //"@typescript-eslint/member-ordering": null,

    /**
     * Disallow generic Array constructors
     * (Fixable)
     */
    //"@typescript-eslint/no-array-constructor": null,

    /**
     * Bans usage of the delete operator with computed key expressions
     * (Fixable)
     */
    //"@typescript-eslint/no-dynamic-delete": null,

    /**
     * Disallow empty functions
     */
    //"@typescript-eslint/no-empty-function": null,

    /**
     * Disallow the declaration of empty interfaces
     * (Fixable)
     */
    //"@typescript-eslint/no-empty-interface": null,

    /**
     * Disallow usage of the any type
     * (Fixable)
     */
    //"@typescript-eslint/no-explicit-any": null,

    /**
     * Disallow extra non-null assertion
     */
    //"@typescript-eslint/no-extra-non-null-assertion": null,

    /**
     * Disallow unnecessary parentheses
     * (Fixable)
     */
    //"@typescript-eslint/no-extra-parens": null,

    /**
     * Disallow unnecessary semicolons
     * (Fixable)
     */
    //"@typescript-eslint/no-extra-semi": null,

    /**
     * Forbids the use of classes as namespaces
     */
    //"@typescript-eslint/no-extraneous-class": null,

    /**
     * Requires Promise-like values to be handled appropriately.
     */
    //"@typescript-eslint/no-floating-promises": null,

    /**
     * Disallow iterating over an array with a for-in loop
     */
    //"@typescript-eslint/no-for-in-array": null,

    /**
     * Disallows explicit type declarations for variables or parameters
     * initialized to a number, string, or boolean
     * (Fixable)
     */
    //"@typescript-eslint/no-inferrable-types": null,

    /**
     * Disallows magic numbers
     */
    //"@typescript-eslint/no-magic-numbers": null,

    /**
     * Enforce valid definition of new and constructor
     */
    //"@typescript-eslint/no-misused-new": null,

    /**
     * Avoid using promises in places not designed to handle them
     */
    //"@typescript-eslint/no-misused-promises": null,

    /**
     * Disallow the use of custom TypeScript modules and namespaces
     */
    //"@typescript-eslint/no-namespace": null,

    /**
     * Disallows non-null assertions using the ! postfix operator
     */
    "@typescript-eslint/no-non-null-assertion": "error",

    /**
     * Disallow the use of parameter properties in class constructors
     */
    "@typescript-eslint/no-parameter-properties": "error",

    /**
     * Disallows invocation of require()
     */
    "@typescript-eslint/no-require-imports": "error",

    /**
     * Disallow aliasing this
     */
    "@typescript-eslint/no-this-alias": ["error", {
      allowDestructuring: true,
      allowedNames: [],
    }],

    /**
     * Disallow throwing literals as exceptions
     */
    "@typescript-eslint/no-throw-literal": "error",

    /**
     * Disallow the use of type aliases
     */
    "@typescript-eslint/no-type-alias": ["error", {
      allowAliases: "never",
      allowCallbacks: "never",
      allowConditionalTypes: "never",
      allowConstructors: "never",
      allowLiterals: "never",
      allowMappedTypes: "never",
      allowTupleTypes: "never",
    }],

    /**
     * Prevents conditionals where the type is always truthy or always falsy
     * (Fixable)
    "@typescript-eslint/no-unnecessary-condition": ["error", {
      ignoreRhs: false,
      allowConstantLoopConditions: false,
    }],
     */

    /**
     * Warns when a namespace qualifier is unnecessary
     * (Fixable)
    "@typescript-eslint/no-unnecessary-qualifier": "error",
     */

    /**
     * Warns if an explicitly specified type argument is the default for that
     * type parameter
     * (Fixable)
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
*/

    /**
     * Warns if a type assertion does not change the type of an expression
     * (Fixable)
    "@typescript-eslint/no-unnecessary-type-assertion": ["error", {
      typesToIgnore: [],
    }],
     */

    /**
     * Requires that all public method arguments and return type will be
     * explicitly typed
     */
    "@typescript-eslint/no-untyped-public-signature": ["error", {
      ignoredMethods: [],
    }],

    /**
     * Disallow unused expressions
     */
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",

    /**
     * Disallow unused variables
     */
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: false,
    }],

    /**
     * Disallow unused variables and arguments.
    "@typescript-eslint/no-unused-vars-experimental": ["error", {
      ignoredNamesRegex: '^_',
      ignoreArgsIfArgsAfterAreUsed: false,
    }],
     */

    /**
     * Disallow the use of variables before they are defined
     */
    "@typescript-eslint/no-use-before-define": "error",

    /**
     * Disallow unnecessary constructors
     */
    "@typescript-eslint/no-useless-constructor": "error",

    /**
     * Disallows the use of require statements except in import statements
     *
     * - Disabled because we import our client store via require in a function.
     */
    //"@typescript-eslint/no-var-requires": "error",

    /**
     * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only
     * used to access the array being iterated
    "@typescript-eslint/prefer-for-of": "error",
     */

    /**
     * Use function types instead of interfaces with call signatures
     * (Fixable)
    "@typescript-eslint/prefer-function-type": "error",
     */

    /**
     * Enforce includes method over indexOf method
     * (Fixable)
    "@typescript-eslint/prefer-includes": "error",
     */

    /**
     * Require the use of the namespace keyword instead of the module keyword to
     * declare custom TypeScript modules
     * (Fixable)
    "@typescript-eslint/prefer-namespace-keyword": "error",
     */

    /**
     * Enforce the usage of the nullish coalescing operator instead of logical
     * chaining
     * (Fixable)
    "@typescript-eslint/prefer-nullish-coalescing": "error",
     */

    /**
     * Prefer using concise optional chain expressions instead of chained
     * logical ands
     * (Fixable)
    "@typescript-eslint/prefer-optional-chain": "error",
     */

    /**
     * Requires that private members are marked as readonly if they're never
     * modified outside of the constructor
     * (Fixable)
    "@typescript-eslint/prefer-readonly": "error",
     */

    /**
     * Prefer RegExp#exec() over String#match() if no global flag is provided
    "@typescript-eslint/prefer-regexp-exec": "error",
     */

    /**
     * Enforce the use of String#startsWith and String#endsWith instead of other
     * equivalent methods of checking substrings
     * (Fixable)
     * (Requires Type Info)
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
     */

    /**
     * Requires any function or method that returns a Promise to be marked async
     * (Requires Type Info)
    "@typescript-eslint/promise-function-async": ["error", {
      allowedPromiseNames: ["Thenable"],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    }],
     */

    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     * (Fixable)
     *
     * - This rule extends the original eslint rule, so disable that one for
     *   this. 
     */
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "double", {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],

    /**
     * Enforce giving compare argument to Array#sort
    "@typescript-eslint/require-array-sort-compare": "error",
     */

    /**
     * Disallow async functions which have no await expression
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
     */

    /**
     * When adding two variables, operands must both be of type number or of
     * type string
    "@typescript-eslint/restrict-plus-operands": ["error", {
      checkCompoundAssignments: false,
    }],
     */

    /**
     * Enforce template literal expressions to be of string type
    "@typescript-eslint/restrict-template-expressions": ["error", {
      allowNumber: false,
      allowBoolean: false,
      allowNullable: false,
    }],
     */

    /**
     * Rules for awaiting returned promises
    "@typescript-eslint/return-await": ["error", "in-try-catch"],
     */

    /**
     * Require or disallow semicolons instead of ASI
     * (Fixable)
     *
     * - Requires disabling the original eslint rule. 
     * -This version adds support for numerous typescript features.
     */
    "semi": "off",
    "@typescript-eslint/semi": "error",

    /**
     * enforce consistent spacing before function definition opening parenthesis
     * (Fixable)
     */
    //"@typescript-eslint/space-before-function-paren": "error",

    /**
     * Restricts the types allowed in boolean expressions
     * (Requires Type Info)
    "@typescript-eslint/strict-boolean-expressions": "error",
     */

    /**
     * Sets preference level for triple slash directives versus ES6-style import
     * declarations
     */
    "@typescript-eslint/triple-slash-reference": ["error", {
      path: "never",
      types: "never",
      lib: "never",
    }],

    /**
     * Require consistent spacing around type annotations
     * (Fixable)
     */
    "@typescript-eslint/type-annotation-spacing": ["error", {
      before: false,
      after: true,
    }],

    /**
     * Requires type annotations to exist
     */
    "@typescript-eslint/typedef": ["error", {
      arrayDestructuring: true,
      arrowParameter: true,
      memberVariableDeclaration: true,
      objectDestructuring: true,
      parameter: true,
      propertyDeclaration: true,
      variableDeclaration: true,
    }],

    /**
     * Enforces unbound methods are called with their expected scope
    "@typescript-eslint/unbound-method": ["error", {
      ignoreStatic: true,
    }],
     */

    /**
     * Warns for any two overloads that could be unified into one by using a
     * union or an optional/rest parameter
     */
    "@typescript-eslint/unified-signatures": "error",
  },
}
