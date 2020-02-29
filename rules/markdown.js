const disabled = {
  eslint: {
    strict: "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    semi: "off",
    "no-shadow": "off",
  },
  react: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-undef": "off",
  },
  import: {
    "import/no-unresolved": "off",
  },
}

const enabled = {}

module.exports = {
  enabled,
  disabled,
}
