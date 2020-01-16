module.exports = {
  plugins: ["simple-import-sort"],
  rules: {
    // Force certain rules from other plugins off.
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": [
      "error",
      {
        groups: [
          // Make sure out polyfills are always imported first.
          // Side effect imports.
          ["^\\u0000"],

          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)"
          ],

          // Packages. `react` related packages come first.
          ["^react", "^@?\\w"],

          // Internal packages.
          ["^(src|app|core|site|pages|tests)(/.*)?$"],

          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

          // Misc imports.
          ["^.+\\.(s?css|json|png|jpe?g|gif|ico)$"]
        ]
      }
    ]
  }
}
