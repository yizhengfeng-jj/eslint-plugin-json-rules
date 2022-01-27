/**
 * @fileoverview json learn
 * @author json
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    rules: requireIndex(__dirname + "/rules"),
    configs: {
        jsonRules: {
            plugins: ['json-rules'],
            rules: {
                'json-rules/settimeout-no-number': 'error'
            }
        }
    }
}