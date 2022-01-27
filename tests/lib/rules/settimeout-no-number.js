/**
 * @fileoverview setTimeout 第二个参数禁止是数字
 * @author json
 */
"use strict";
var rule = require("../../../lib/rules/settimeout-no-number"), // 引入rule
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 7, // 默认支持语法为es5 
    },
});
// 运行测试用例
ruleTester.run("settimeout-no-number", rule, {
    // 正确的测试用例
    valid: [
        {
            code: 'let someNumber = 1000; setTimeout(()=>{ console.log(11) },someNumber)'
        },
        {
            code: 'setTimeout(()=>{ console.log(11) },someNumber)'
        }
    ],
    // 错误的测试用例
    invalid: [
        {
            code: 'setTimeout(()=>{ console.log(11) },1000)',
            errors: [{
                message: "setTimeout第二个参数禁止是数字", // 与rule抛出的错误保持一致
                type: "CallExpression" // rule监听的对应钩子
            }]
        }
    ]
});