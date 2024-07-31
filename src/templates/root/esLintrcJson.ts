export class CreateEsLintrcJson {
  public execute(): string {
    return `{
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "eslint-plugin-import-helpers",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "camelcase": "off",
    "no-param-reassign": "off",
    "prettier/prettier": "error",
    "import/no-unresolved": "error",
    "no-useless-escape": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "warn",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": ["**/*.spec.js"] }
    ]
  },
  "overrides": [
    {
      "files": ["**/dtos/**/*.ts"],
      "rules": {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^I[A-Z]\\\\w*DTO$",
              "match": true
            }
          },
          {
            "selector": "typeAlias",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^I[A-Z]\\\\w*DTO$",
              "match": true
            }
          }
        ]
      }
    },
    {
      "files": ["**/models/*.ts", "**/repositories/*.ts"],
      "rules": {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^I[A-Z]\\\\w*$",
              "match": true
            }
          },
          {
            "selector": "typeAlias",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^I[A-Z]\\\\w*$",
              "match": true
            }
          }
        ]
      }
    }
  ],
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
`;
  }
}
