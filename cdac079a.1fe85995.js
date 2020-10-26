(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(7),i=(r(0),r(303)),a={title:"Power of Three"},c={unversionedId:"simulation/power-of-three",id:"simulation/power-of-three",isDocsHomePage:!1,title:"Power of Three",description:"\u63cf\u8ff0",source:"@site/docs/simulation/power-of-three.md",slug:"/simulation/power-of-three",permalink:"/simulation/power-of-three",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/power-of-three.md",version:"current",sidebar:"someSidebar",previous:{title:"Bitwise AND of Numbers Range",permalink:"/bitwise-operations/bitwise-and-of-numbers-range"},next:{title:"Rectangle Area",permalink:"/simulation/rectangle-area"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given an integer, write a function to determine if it is a power of three."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Follow up"),":"),Object(i.b)("p",null,"Could you do it without using any loop / recursion?"),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u4e0d\u65ad\u9664\u4ee5 3\uff0c\u770b\u6700\u540e\u80fd\u5426\u5f97\u5230 1\u3002"),Object(i.b)("p",null,"\u5982\u679c\u4e0d\u7528\u5faa\u73af\u548c\u9012\u5f52\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u627e\u6570\u5b66\u65b9\u6cd5\u4e86\u3002\u6700\u7b80\u5355\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u8be5\u6574\u6570\u5bf9 3 \u53d6\u5bf9\u6570\uff0c\u5982\u679c\u7ed3\u679c\u662f\u6574\u6570\uff0c\u8bf4\u660e\u8be5\u6574\u6570\u662f 3 \u7684\u5e42\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Power of Three\n// Time Complexity: O(1), Space Complexity: O(1)\npublic class Solution {\n    public boolean isPowerOfThree(int n) {\n        return (Math.log10(n) / Math.log10(3)) % 1 == 0;\n    }\n}\n")))}p.isMDXComponent=!0},303:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(a,".").concat(b)]||s[b]||f[b]||i;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);