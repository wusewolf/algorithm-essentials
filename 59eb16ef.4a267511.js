(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),i=(n(0),n(337)),o={title:"Word Pattern"},l={unversionedId:"string/word-pattern",id:"string/word-pattern",isDocsHomePage:!1,title:"Word Pattern",description:"\u63cf\u8ff0",source:"@site/docs/string/word-pattern.md",slug:"/string/word-pattern",permalink:"/string/word-pattern",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/word-pattern.md",version:"current",sidebar:"someSidebar",previous:{title:"Isomorphic Strings",permalink:"/string/isomorphic-strings"},next:{title:"Decode String",permalink:"/string/decode-string"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," and a string ",Object(i.b)("inlineCode",{parentName:"p"},"str"),", find if ",Object(i.b)("inlineCode",{parentName:"p"},"str")," follows the same pattern."),Object(i.b)("p",null,"Here follow means a full match, such that there is a bijection between a letter in ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," and a non-empty word in ",Object(i.b)("inlineCode",{parentName:"p"},"str"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"pattern = ",Object(i.b)("inlineCode",{parentName:"li"},'"abba"'),", str = ",Object(i.b)("inlineCode",{parentName:"li"},'"dog cat cat dog"')," should return true."),Object(i.b)("li",{parentName:"ol"},"pattern = ",Object(i.b)("inlineCode",{parentName:"li"},'"abba"'),", str = ",Object(i.b)("inlineCode",{parentName:"li"},'"dog cat cat fish"')," should return false."),Object(i.b)("li",{parentName:"ol"},"pattern = ",Object(i.b)("inlineCode",{parentName:"li"},'"aaaa"'),", str = ",Object(i.b)("inlineCode",{parentName:"li"},'"dog cat cat dog"')," should return false."),Object(i.b)("li",{parentName:"ol"},"pattern = ",Object(i.b)("inlineCode",{parentName:"li"},'"abba"'),", str = ",Object(i.b)("inlineCode",{parentName:"li"},'"dog dog dog dog"')," should return false.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notes"),":"),Object(i.b)("p",null,"You may assume ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," contains only lowercase letters, and ",Object(i.b)("inlineCode",{parentName:"p"},"str")," contains lowercase letters separated by a single space."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,'\u672c\u9898\u8ddf "Isomorphic Strings" \u5f88\u7c7b\u4f3c\uff0c\u7528\u4e24\u4e2aHashMap, \u8bb0\u5f55\u4ece\u5b57\u7b26\u5230\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u4e32\u5230\u5b57\u7b26\u7684\u6620\u5c04\u3002'),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Word Pattern\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public boolean wordPattern(String pattern, String str) {\n        String[] words = str.split(" ");\n        if (words.length != pattern.length()) return false;\n\n        final Map<Character, String> map1 = new HashMap<>();\n        final Map<String, Character> map2 = new HashMap<>();\n        for (int i = 0; i < words.length; ++i) {\n            final Character key1 = pattern.charAt(i);\n            if (map1.containsKey(key1)) {\n                final String value = map1.get(key1);\n                if (!value.equals(words[i])) return false;\n            } else {\n                map1.put(key1, words[i]);\n            }\n\n            final String key2 = words[i];\n            if (map2.containsKey(key2)) {\n                final char value = map2.get(key2);\n                if (value != pattern.charAt(i)) return false;\n            } else {\n                map2.put(key2, pattern.charAt(i));\n            }\n        }\n        return true;\n    }\n}\n')),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/string/isomorphic-strings"}),"Isomorphic Strings"))))}s.isMDXComponent=!0},337:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);