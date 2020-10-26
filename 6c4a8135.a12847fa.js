(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(7),i=(t(0),t(303)),o={title:"Rotate Array"},l={unversionedId:"linear-list/array/rotate-array",id:"linear-list/array/rotate-array",isDocsHomePage:!1,title:"Rotate Array",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/rotate-array.md",slug:"/linear-list/array/rotate-array",permalink:"/linear-list/array/rotate-array",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/rotate-array.md",version:"current",sidebar:"someSidebar",previous:{title:"Majority Element",permalink:"/linear-list/array/majority-element"},next:{title:"Contains Duplicate",permalink:"/linear-list/array/contains-duplicate"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u89e3\u6cd5 1 \u4e09\u8f6e reverse",id:"\u89e3\u6cd5-1-\u4e09\u8f6e-reverse",children:[]}],p={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Rotate an array of ",Object(i.b)("inlineCode",{parentName:"p"},"n")," elements to the right by ",Object(i.b)("inlineCode",{parentName:"p"},"k")," steps."),Object(i.b)("p",null,"For example, with ",Object(i.b)("inlineCode",{parentName:"p"},"n = 7")," and ",Object(i.b)("inlineCode",{parentName:"p"},"k = 3"),", the array ",Object(i.b)("inlineCode",{parentName:"p"},"[1,2,3,4,5,6,7]")," is rotated to ",Object(i.b)("inlineCode",{parentName:"p"},"[5,6,7,1,2,3,4]"),"."),Object(i.b)("p",null,"Note:\nTry to come up as many solutions as you can, there are at least 3 different ways to solve this problem."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u5f00\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"k"),"\u957f\u7684\u6570\u7ec4\uff0c\u5148\u628a\u53f3\u8fb9",Object(i.b)("inlineCode",{parentName:"p"},"k"),"\u4e2a\u5143\u7d20\u5b58\u5165\u8fd9\u4e2a\u4e34\u65f6\u6570\u7ec4\uff0c\u7136\u540e\u628a\u6570\u7ec4\u4e2d\u7684\u524d",Object(i.b)("inlineCode",{parentName:"p"},"n-k"),"\u53f3\u79fb",Object(i.b)("inlineCode",{parentName:"p"},"k"),"\u4f4d\uff0c\u518d\u628a\u4e34\u65f6\u6570\u7ec4\u7684",Object(i.b)("inlineCode",{parentName:"p"},"k"),"\u4e2a\u5143\u7d20\u5b58\u5165\u5230\u539f\u59cb\u6570\u7ec4\u5de6\u8fb9\u3002\u65f6\u95f4\u590d\u6742\u5ea6",Object(i.b)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",Object(i.b)("inlineCode",{parentName:"p"},"O(k)"),"\u3002"),Object(i.b)("p",null,"\u7b2c\u4e8c\u4e2a\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u5148\u5b9e\u73b0\u4e00\u4e2a\u51fd\u6570\uff0c\u628a\u6570\u7ec4\u53f3\u79fb\u4e00\u4f4d\uff0c\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570",Object(i.b)("inlineCode",{parentName:"p"},"k"),"\u6b21\u5373\u53ef\u3002\u65f6\u95f4\u590d\u6742\u5ea6",Object(i.b)("inlineCode",{parentName:"p"},"O(n*k)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",Object(i.b)("inlineCode",{parentName:"p"},"O(1)"),"\u3002"),Object(i.b)("p",null,"\u7b2c\u4e09\u4e2a\u65b9\u6cd5\uff0c\u5148\u5c06\u6570\u7ec4\u5206\u4e3a\u4e24\u6bb5\uff0c\u524d",Object(i.b)("inlineCode",{parentName:"p"},"n-k"),"\u4e2a\u4e3a\u4e00\u6bb5\uff0c\u540e",Object(i.b)("inlineCode",{parentName:"p"},"k"),"\u4e2a\u5143\u7d20\u4f5c\u4e3a\u7b2c\u4e8c\u6bb5\uff0c\u5c06\u7b2c\u4e00\u6bb5 reverse, \u7b2c\u4e8c\u6bb5 reverse, \u7136\u540e\u5c06\u6574\u4e2a\u6570\u7ec4 reverse, \u8fd9\u6837\u7ecf\u8fc7\u4e09\u8f6e reverse\uff0c\u5c31\u5b8c\u6210\u4e86\u5faa\u73af\u53f3\u79fb\u3002\u65f6\u95f4\u590d\u6742\u5ea6",Object(i.b)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",Object(i.b)("inlineCode",{parentName:"p"},"O(1)"),"\u3002"),Object(i.b)("h3",{id:"\u89e3\u6cd5-1-\u4e09\u8f6e-reverse"},"\u89e3\u6cd5 1 \u4e09\u8f6e reverse"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Rotate Array\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - k);\n        reverse(nums, nums.length - k, nums.length);\n        reverse(nums, 0, nums.length);\n    }\n    private static void reverse(int[] nums, int begin, int end) {\n        int left = begin;\n        int right = end - 1;\n        while (left < right) {\n            // swap\n            int tmp = nums[left];\n            nums[left] = nums[right];\n            nums[right] = tmp;\n            ++left;\n            --right;\n        }\n    }\n}\n")))}s.isMDXComponent=!0},303:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return t?a.a.createElement(d,l(l({ref:n},p),{},{components:t})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);