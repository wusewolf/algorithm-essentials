(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{255:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(7),o=(t(0),t(329)),a={title:"Single Number III"},s={unversionedId:"bitwise-operations/single-number-iii",id:"bitwise-operations/single-number-iii",isDocsHomePage:!1,title:"Single Number III",description:"\u63cf\u8ff0",source:"@site/docs/bitwise-operations/single-number-iii.md",slug:"/bitwise-operations/single-number-iii",permalink:"/bitwise-operations/single-number-iii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/bitwise-operations/single-number-iii.md",version:"current",sidebar:"someSidebar",previous:{title:"Single Number II",permalink:"/bitwise-operations/single-number-ii"},next:{title:"Power of Two",permalink:"/bitwise-operations/power-of-two"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],p={rightToc:l};function u(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once."),Object(o.b)("p",null,"For example:"),Object(o.b)("p",null,"Given ",Object(o.b)("inlineCode",{parentName:"p"},"nums = [1, 2, 1, 3, 2, 5]"),", return ",Object(o.b)("inlineCode",{parentName:"p"},"[3, 5]"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),":"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The order of the result is not important. So in the above example, ","[5, 3]"," is also correct."),Object(o.b)("li",{parentName:"ol"},"Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?")),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,'\u672c\u9898\u662f\u6709\u4e24\u4e2a\u672a\u77e5\u6570\uff0c\u662f "Single Number" \u8fd9\u9053\u9898\u7684\u6269\u5c55\uff0c\u76f4\u63a5\u505a\u5f02\u6216\u80af\u5b9a\u662f\u4e0d\u884c\u7684\u3002\u6709\u6ca1\u6709\u529e\u6cd5\u628a\u4e24\u4e2a\u672a\u77e5\u6570\u5206\u5f00\uff0c\u4f7f\u5f97\u53ef\u4ee5\u5e94\u7528 Single Number \u7684\u89e3\u6cd5\u5462\uff1f'),Object(o.b)("p",null,"\u8bbe",Object(o.b)("inlineCode",{parentName:"p"},"x"),", ",Object(o.b)("inlineCode",{parentName:"p"},"y"),"\u662f\u90a3\u4e24\u4e2a\u672a\u77e5\u6570\uff0c\u90a3\u4e48\u5982\u679c\u5bf9\u8fd9\u4e2a\u6570\u7ec4\u505a\u5f02\u6216\u7684\u8bdd\uff0c\u7ed3\u679c\u5b9e\u8d28\u4e0a\u7b49\u4e8e",Object(o.b)("inlineCode",{parentName:"p"},"x ^ y"),"\uff0c\u56e0\u4e3a\u5176\u4ed6\u6570\u90fd\u51fa\u73b0\u4e86\u4e24\u6b21\uff0c\u88ab\u62b5\u6d88\u4e86\u3002"),Object(o.b)("p",null,"\u4f46\u662f\u4ec5\u4ec5\u662f\u901a\u8fc7\u6700\u540e\u5f02\u6216\u51fa\u6765\u7684\u503c\uff0c\u662f\u6ca1\u529e\u6cd5\u533a\u5206\u51fa",Object(o.b)("inlineCode",{parentName:"p"},"x"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"y"),"\u7684\uff0c\u4f46\u662f\u8db3\u4ee5\u5e2e\u52a9\u6211\u4eec\u628a",Object(o.b)("inlineCode",{parentName:"p"},"x"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"y"),"\u5212\u5206\u5230\u4e0d\u505c\u5730\u5b50\u6570\u7ec4\u4e2d\u53bb\u3002\u5bf9\u4e8e",Object(o.b)("inlineCode",{parentName:"p"},"x"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"y"),"\uff0c\u7531\u4e8e\u4e8c\u8005\u4e0d\u76f8\u7b49\uff0c\u90a3\u4e48\u4e8c\u8005\u81f3\u5c11\u5b58\u5728\u4e00\u4f4d\u4e0d\u76f8\u540c\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{src:t(415).default})),Object(o.b)("p",null,"\u5f53\u627e\u5230\u8fd9\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"k"),"\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u6309\u7167\u7b2c",Object(o.b)("inlineCode",{parentName:"p"},"k"),"\u4f4d\u662f\u5426\u7b49\u4e8e 1\uff0c\u5c06",Object(o.b)("inlineCode",{parentName:"p"},"nums"),"\u6570\u7ec4\u5212\u5206\u4e3a\u4e24\u4e2a\u5b50\u6570\u7ec4\uff0c\u7136\u540e\u628a Single Number \u7684\u7b97\u6cd5\u76f4\u63a5\u5e94\u7528\u5230\u4e24\u4e2a\u5b50\u6570\u7ec4\u4e0a\uff0c\u5c31\u53ef\u4ee5\u6c42\u51fa",Object(o.b)("inlineCode",{parentName:"p"},"x"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"y"),"\u4e86\u3002"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Single Number III\n// Time Complexity: O(log n), Space Complexity: O(1)\npublic class Solution {\n    public int[] singleNumber(int[] nums) {\n        int xorResult = 0;\n        for (int x : nums) {\n            xorResult ^= x;\n        }\n\n        // get the index of first 1\n        int k = 0;\n        for (k = 0; k < Integer.SIZE; ++ k) {\n            if (((xorResult >>> k) & 1) == 1) {\n                break;\n            }\n        }\n\n        // use k to split the array into two subarrays\n        // XOR result of the first subarray\n        int xorResult2 = 0;\n        for (int x : nums) {\n            if (((x >>> k) & 1) == 1) {\n                xorResult2 ^= x;\n            }\n        }\n        return new int[] {xorResult2, xorResult ^ xorResult2};\n    }\n}\n")))}u.isMDXComponent=!0},329:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},y=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),y=r,d=c["".concat(a,".").concat(y)]||c[y]||b[y]||o;return t?i.a.createElement(d,s(s({ref:n},p),{},{components:t})):i.a.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},415:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"}}]);