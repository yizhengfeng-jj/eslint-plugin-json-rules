# eslint-plugin-jsonlint

json learn

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-jsonlint`:

```sh
npm install eslint-plugin-jsonlint --save-dev
```

## Usage

Add `jsonlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jsonlint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "jsonlint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


