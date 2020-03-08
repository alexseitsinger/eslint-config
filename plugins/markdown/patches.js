module.exports = {
  eslint: {
    /**
     * We use eslint's parser option 'impliedStrict'
     */
    strict: "off",
    /**
     * Sometimes, we use variables in examples just to provide context to the
     * usage samples.
     */
    "no-undef": "off",
    "no-unused-vars": "off",
    /**
     * Sometimes our examples includes console statements.
     */
    "no-console": "off",
    /**
     * We always expect ASI to be used.
     */
    semi: "off",
    /**
     * Since our examples aren't actually used within the scope of the modules,
     * we don't need to report on shadowed variables.
     */
    "no-shadow": "off",
  },
  react: {
    /**
     * Our examples are supposed to depict the specifics of using OUR package,
     * and should not necessarily require a complete usage sample (importing all
     * required moudles like React, etc.)
     */
    "react/react-in-jsx-scope": "off",
    /**
     * Since we may use <Component /> in a .md file, requiring a .jsx extension
     * isn't possible. Therefore, disable this rule.
     */
    "react/jsx-filename-extension": "off",
    /**
     * Markdown examples shouldn't expect a complete functioning module, so
     * disable this rule.
     */
    "react/jsx-no-undef": "off",
  },
  import: {
    /**
     * Imports in our README's shouldn't expect to actually be functional code,
     * so disable this rule.
     */
    "import/no-unresolved": "off",
  },
}
