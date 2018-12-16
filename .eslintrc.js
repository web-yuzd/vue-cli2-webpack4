// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    'plugin:vue/essential'
    // 'plugin:vue/recommended',
    // 'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  /**
   * 规则的错误等级有三种
   * "off" 或者 0：关闭规则。
   * "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
   * "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。
   */
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止混用空格和 tab 来做缩进，必须统一
    'no-mixed-spaces-and-tabs': 2,
    // 行尾必须使用分号结束
    'semi': 0,
    // 禁止额外的分号
    'no-extra-semi': 2,
    // 必须使用 4 空格缩进
    'indent': [2, 2],
    // 禁止使用 tabs
    // @off 不限制
    'no-tabs': 0,
    // 禁止使用 var，必须用 let 或 const，暂时不限制
    'no-var': 0,
    // 禁止定义不使用的变量
    'no-unused-vars': [1,
      {
        'vars': 'all', // 变量定义必须被使用
        'args': 'none', // 对于函数形参不检测
        'ignoreRestSiblings': true, // 忽略剩余子项 fn(...args)，{a, b, ...coords}
        'caughtErrors': 'none', // 忽略 catch 语句的参数使用
      }
    ],
    // 禁止在变量被定义之前使用它
    'no-use-before-define': [2,
      {
        'functions': false, // 允许函数在定义之前被调用
        'classes': false, // 允许类在定义之前被引用
      }
    ],
    // 禁止条件表达式中出现赋值操作符
    "no-cond-assign": 2,
    // 禁用 console,不限制
    "no-console": 0,
    // 禁止在条件中使用常量表达式
    // if (false) {
    // doSomethingUnfinished();
    // } 
    "no-constant-condition": 2,
    // 禁止将 undefined 赋值给变量
    'no-undef-init': 2,
    // 禁止访问未定义的变量或方法
    'no-undef': 2,
    // 禁止使用 undefined，如需判断一个变量是否为 undefined，请使用 typeof a === 'undefined'
    'no-undefined': 2,
    // if 后必须包含 { ，单行 if 除外
    'curly': [2, 'multi-line', 'consistent'],
    // 禁止 if 语句在没有花括号的情况下换行
    'nonblock-statement-body-position': 2,
    // switch 语句必须包含 default
    'default-case': 2,
    // for in 时需检测 hasOwnProperty
    'guard-for-in': 2,
    // function 等的花括号之前使用空格
    'space-before-blocks': 2,
    // function 的圆括号之前是否使用空格
    // @off 不关心
    'space-before-function-paren': 0,
    // 强制在圆括号内使用一致的空格
    "space-in-parens": [2, "never"],
    // 操作符前后要加空格
    'space-infix-ops': 2,
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [1, "never"],
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,
    // 禁止空语句块
    "no-empty": 2,
    // 强制所有控制语句使用一致的括号风格
    "curly": [2, "all"],
    // 禁止在循环中出现 function 声明和表达式
    "no-loop-func": 1,
    // 禁止使用 var 多次声明同一变量
    "no-redeclare": 2,
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    "array-bracket-spacing": [2, "never"],
    // 控制逗号前后的空格
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    // 强制 function 定义中最多允许的参数数量
    "max-params": [1, 7],
    // 强制回调函数最大嵌套深度 5层
    "max-nested-callbacks": [1, 5],
    // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false
    }],
    // 要求调用无参构造函数时有圆括号
    "new-parens": 2,
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": [2, "single", "avoid-escape"],
    // 要求使用 JSDoc 注释
    "require-jsdoc": 1,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": [2, "always", {
      "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"]
    }],
    // 要求箭头函数体使用大括号
    "arrow-body-style": 0,
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 0,
    // 要求箭头函数的箭头前后要有空格
    "arrow-spacing": [2, {
      "before": true,
      "after": true
    }],
    // 禁止修改类声明的变量
    "no-class-assign": 2,
    // 不允许箭头功能，在那里他们可以混淆的比较
    "no-confusing-arrow": 0,
    // 禁止修改 const 声明的变量
    "no-const-assign": 2,
    // 禁止类成员中出现重复的名称
    "no-dupe-class-members": 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    "no-this-before-super": 2,
    // vue中script标签缩进
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1
    }],
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }]
  },
  "overrides": [{
    "files": ["*.vue"],
    "rules": {
      "indent": "off"
    }
  }]
}
