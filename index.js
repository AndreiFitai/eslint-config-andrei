require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["import", "prettier", "@typescript-eslint", "immutable", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "no-console": 1,
    curly: [2, "multi-line", "consistent"],
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "import/order": 1,
    "import/no-duplicates": 1,
    "import/newline-after-import": 1,
    "import/no-useless-path-segments": 1,
    "import/no-extraneous-dependencies": 1,
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      1,
      { args: "after-used", varsIgnorePattern: "^_" },
    ],
  },
  ignorePatterns: [".eslintrc.js"],
};
