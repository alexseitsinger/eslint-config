module.exports = {
  env: {
    jest: true
    //"jest/globals": true
  },
  globals: {
    shallow: true,
    mount: true,
    describe: true,
    it: true,
    test: true,
    beforeAll: true,
    afterAll: true,
    beforeEach: true,
    afterEach: true,
    expect: true
  },
  plugins: ["jest"],
  rules: {
    /**
     * Enforce consistent test or it keyword
     */
    "jest/consistent-test-it": "off",

    /**
     * Enforce assertion to be made in a test body
     */
    "jest/expect-expect": "off",

    /**
     * Disallow capitalized test names
     */
    "jest/lowercase-name": "error",

    /**
     * Disallow alias methods
     */
    "jest/no-alias-methods": "error",

    /**
     * Disallow commented out tests
     */
    "jest/no-commented-out-tests": "error",

    /**
     * Disallow disabled tests
     */
    "jest/no-disabled-tests": "error",

    /**
     * Disallow duplicate hooks within a describe block
     */
    "jest/no-duplicate-hooks": "error",

    /**
     * Disallow using expect().resolves
     */
    "jest/no-expect-resolves": "error",

    /**
     * Disallow export from test files
     */
    "jest/no-export": "error",

    /**
     * Disallow focused tests
     */
    "jest/no-focused-tests": "error",

    /**
     * Disallow setup and teardown hooks
     */
    "jest/no-hooks": "error",

    /**
     * Disallow identical titles
     */
    "jest/no-identical-title": "error",

    /**
     * Disallow conditional logic
     */
    "jest/no-if": "error",

    /**
     * Disallow Jasmine globals
     * (Fixable)
     */
    "jest/no-jasmine-globals": "error",

    /**
     * Disallow importing jest
     */
    "jest/no-jest-import": "error",

    /**
     * Disallow large snapshots
     */
    "jest/no-large-snapshots": "error",

    /**
     * Disallow manually importing from __mocks__
     */
    "jest/no-mocks-import": "error",

    /**
     * Prevents expect statements outside of a test or it block
     */
    "jest/no-standalone-expect": "error",

    /**
     * Using a callback in asynchronous tests
     * (Fixable)
     */
    "jest/no-test-callback": "error",

    /**
     * Disallow using f & x prefixes to define focused/skipped tests
     * (Fixable)
     */
    "jest/no-test-prefixes": "error",

    /**
     * Disallow explicitly returning from tests
     */
    "jest/no-test-return-statement": "error",

    /**
     * Disallow using toBeTruthy() & toBeFalsy()
     */
    "jest/no-truthy-falsy": "error",

    /**
     * Prevent catch assertions in tests
     */
    "jest/no-try-expect": "error",

    /**
     * Suggest using toBeCalledWith() OR toHaveBeenCalledWith()
     */
    "jest/prefer-called-with": "error",

    /**
     * Suggest using expect.assertions() OR expect.hasAssertions()
     */
    "jest/prefer-expect-assertions": "error",

    /**
     * Suggest to have all hooks at top-level before tests
     */
    "jest/prefer-hooks-on-top": "error",

    /**
     * Suggest using toMatchInlineSnapshot()
     * (Fixable)
     */
    "jest/prefer-inline-snapshots": "error",

    /**
     * Suggest using jest.spyOn()
     * (Fixable)
     */
    "jest/prefer-spy-on": "error",

    /**
     * Suggest using toStrictEqual()
     * (Fixable)
     */
    "jest/prefer-strict-equal": "error",

    /**
     * Suggest using toBeNull()
     * (Fixable)
     */
    "jest/prefer-to-be-null": "error",

    /**
     * Suggest using toBeUndefined()
     *
     * (Fixable)
     */
    "jest/prefer-to-be-undefined": "error",

    /**
     * Suggest using toContain()
     *
     * (Fixable)
     */
    "jest/prefer-to-contain": "error",

    /**
     * Suggest using toHaveLength()
     *
     * (Fixable)
     */
    "jest/prefer-to-have-length": "error",

    /**
     * Suggest using test.todo()
     *
     * (Fixable)
     */
    "jest/prefer-todo": "error",

    /**
     * Require a top-level describe block.
     */
    "jest/require-top-level-describe": "error",

    /**
     * Require that toThrow() and toThrowError includes a message.
     */
    "jest/require-to-throw-message": "error",

    /**
     * Enforce valid describe() callback.
     */
    "jest/valid-describe": "error",

    /**
     * Enforce having return statement when testing promises.
     */
    "jest/valid-expect-in-promise": "error",

    /**
     * Enforce valid expect() usage.
     */
    "jest/valid-expect": "error",

    /**
     * Enforce valid titles in jest blocks.
     */
    "jest/valid-title": "error"
  }
}
