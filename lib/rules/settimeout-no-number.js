module.exports = {
    meta: {
        docs: {
            description: "setTimeout 第二个参数禁止是数字",
        },
        fixable: 'code',  // 修复函数
    },
   // rule 核心
    create: function(context) {
       // 公共变量和函数应该在此定义
        return {
            "CallExpression": node => {
                if (node.callee.name !== 'setTimeout') {
                    return;
                }

                // 如果是setTimeout，获取第二个参数
                const second = node.arguments[1];
                if (second && second.type === 'Literal' && typeof second.value === 'number') {
                    context.report({
                        node,
                        message: 'setTimeout第二个参数不能为空',
                        fix(fixer) {
                            const setTimeoutVar = `const setTimeoutTimer = ${second.value};\n`;

                            return [
                                // 替换变量
                                fixer.replaceTextRange(node.arguments[1].range, 'setTimeoutTimer'),
                                // 插入变量
                                fixer.insertTextBeforeRange(node.range, setTimeoutVar)
                            ];
                        }
                    })
                }
            }
        };
    }
};