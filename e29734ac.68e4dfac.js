(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{273:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(7),i=(n(0),n(303)),a={title:"\u7b80\u4ecb"},c={unversionedId:"sorting/bucket-sort/README",id:"sorting/bucket-sort/README",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"\u6876\u6392\u5e8f(Bucket Sort)\u7684\u57fa\u672c\u601d\u8def\u662f\uff1a",source:"@site/docs/sorting/bucket-sort/README.md",slug:"/sorting/bucket-sort/README",permalink:"/sorting/bucket-sort/README",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/bucket-sort/README.md",version:"current",sidebar:"someSidebar",previous:{title:"Kth Largest Element in an Array",permalink:"/sorting/quick-sort/kth-largest-element-in-an-array"},next:{title:"First Missing Positive",permalink:"/sorting/bucket-sort/first-missing-positive"}},l=[],p={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u6876\u6392\u5e8f"),"(Bucket Sort)\u7684\u57fa\u672c\u601d\u8def\u662f\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u5c06\u5f85\u6392\u5e8f\u5143\u7d20\u5212\u5206\u5230\u4e0d\u540c\u7684\u75db\u3002\u5148\u626b\u63cf\u4e00\u904d\u5e8f\u5217\u6c42\u51fa\u6700\u5927\u503c",Object(i.b)("inlineCode",{parentName:"li"},"maxV"),"\u548c\u6700\u5c0f\u503c",Object(i.b)("inlineCode",{parentName:"li"},"minV"),"\uff0c\u8bbe\u6876\u7684\u4e2a\u6570\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"k"),"\uff0c\u5219\u628a\u533a\u95f4",Object(i.b)("inlineCode",{parentName:"li"},"[minV, maxV]"),"\u5747\u5300\u5212\u5206\u6210",Object(i.b)("inlineCode",{parentName:"li"},"k"),"\u4e2a\u533a\u95f4\uff0c\u6bcf\u4e2a\u533a\u95f4\u5c31\u662f\u4e00\u4e2a\u6876\u3002\u5c06\u5e8f\u5217\u4e2d\u7684\u5143\u7d20\u5206\u914d\u5230\u5404\u81ea\u7684\u6876\u3002"),Object(i.b)("li",{parentName:"ol"},"\u5bf9\u6bcf\u4e2a\u6876\u5185\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u3002\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u4e00\u79cd\u6392\u5e8f\u7b97\u6cd5\u3002"),Object(i.b)("li",{parentName:"ol"},"\u5c06\u5404\u4e2a\u6876\u4e2d\u7684\u5143\u7d20\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u7684\u6709\u5e8f\u5e8f\u5217\u3002")),Object(i.b)("p",null,"\u5047\u8bbe\u6570\u636e\u662f\u5747\u5300\u5206\u5e03\u7684\uff0c\u5219\u6bcf\u4e2a\u6876\u7684\u5143\u7d20\u5e73\u5747\u4e2a\u6570\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"n/k"),"\u3002\u5047\u8bbe\u9009\u62e9\u7528\u5feb\u901f\u6392\u5e8f\u5bf9\u6bcf\u4e2a\u6876\u5185\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\uff0c\u90a3\u4e48\u6bcf\u6b21\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"O(n/klog(n/k))"),"\u3002\u603b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"O(n)+O(m)O(n/klog(n/k))"),"=",Object(i.b)("inlineCode",{parentName:"p"},"O(n+nlog(n/k))"),"=",Object(i.b)("inlineCode",{parentName:"p"},"O(n+nlogn-nlogk"),"\u3002\u5f53",Object(i.b)("inlineCode",{parentName:"p"},"k"),"\u63a5\u8fd1\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"n"),"\u65f6\uff0c\u6876\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u53ef\u4ee5\u91d1\u65af\u8ba4\u4e3a\u662f",Object(i.b)("inlineCode",{parentName:"p"},"O(n)"),"\u7684\u3002\u5373\u6876\u8d8a\u591a\uff0c\u65f6\u95f4\u6548\u7387\u5c31\u8d8a\u9ad8\uff0c\u800c\u6876\u8d8a\u591a\uff0c\u7a7a\u95f4\u5c31\u8d8a\u5927\u3002"))}b.isMDXComponent=!0},303:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,O=u["".concat(a,".").concat(m)]||u[m]||s[m]||i;return n?o.a.createElement(O,c(c({ref:t},p),{},{components:n})):o.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);