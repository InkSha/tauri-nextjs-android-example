import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    plugins: ["import", "simple-import-sort"],
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-before-interactive-script-outside-document": "off",
      "import/order": "off",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "prettier/prettier": ["error"]
    },
    settings: {
      "import/resolver": {
        "alias": {
          "map": [
            [
              // 将 @ 映射到 src
              "@",
              "./src"
            ]
          ],
          "extensions": [".js", ".jsx", ".ts", ".tsx", ".scss", ".sass", ".css", ".less"]
        }
      }
    }
  }
})

/** @type { import('eslint').Linter.Config[] } */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"),
]

export default eslintConfig
