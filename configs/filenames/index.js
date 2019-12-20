module.exports = {
  plugins: [
    "filenames",
  ],
  rules: {
    /**
     * A rule to enforce a certain file naming convention using a regular
     * expression.
     *
     * This convention can be configured using a regular expression (the
     * default is camelCase.js). Additionally, exporting files can be ignored
     * with a second configuratoin parameter.
     */
    "filenames/match-regex": ["error", "^[a-z_]+$", true],

    /**
     * Match the filename against the default exported value in the module.
     * Files that don't have a default export will be ignored. THe exports of
     * index.js are matched against their parent directoru.
     */
    "filenames/match-exported": "error",

    /**
     * Having a bunch of index.js files can have negative influence on developer
     * experience, eg: when opening files by name. When enabling this rule,
     * index.js files will always be considered a problem.
     */
    "filenames/no-index": "off",
  },
}
