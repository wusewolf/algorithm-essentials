(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{300:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,m=b["".concat(u,".").concat(f)]||b[f]||p[f]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},301:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},302:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},303:function(e,t,n){"use strict";var r=n(0),a=n(302);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},304:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(303),u=n(301),i=n(49),c=n.n(i),l=37,s=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,b=e.values,p=e.groupId,f=Object(o.a)(),m=f.tabGroupChoices,d=f.setTabGroupChoices,h=Object(r.useState)(i),v=h[0],O=h[1],y=Object(r.useState)(!1),j=y[0],g=y[1];if(null!=p){var w=m[p];null!=w&&w!==v&&b.some((function(e){return e.value===w}))&&O(w)}var P=function(e){O(e),null!=p&&d(p,e)},x=[],S=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},T=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",S),window.addEventListener("mousedown",T)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(u.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),S(e)},onFocus:function(){return P(t)},onClick:function(){P(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},305:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(300)),u=n(304),i=n(305),c={title:"Path Sum"},l={unversionedId:"binary-tree/recursion/path-sum",id:"binary-tree/recursion/path-sum",isDocsHomePage:!1,title:"Path Sum",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/recursion/path-sum.md",slug:"/binary-tree/recursion/path-sum",permalink:"/binary-tree/recursion/path-sum",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/recursion/path-sum.md",version:"current",sidebar:"someSidebar",previous:{title:"Maximum Depth of Binary Tree",permalink:"/binary-tree/recursion/maximum-depth-of-binary-tree"},next:{title:"Path Sum II",permalink:"/binary-tree/recursion/path-sum-ii"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum."),Object(o.b)("p",null,"For example:\nGiven the below binary tree and ",Object(o.b)("inlineCode",{parentName:"p"},"sum = 22"),","),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"          5\n         / \\\n        4   8\n       /   / \\\n      11  13  4\n     /  \\      \\\n    7    2      1\n")),Object(o.b)("p",null,"return true, as there exist a root-to-leaf path ",Object(o.b)("inlineCode",{parentName:"p"},"5->4->11->2")," which sum is 22."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u9898\u76ee\u53ea\u8981\u6c42\u8fd4\u56de",Object(o.b)("inlineCode",{parentName:"p"},"true"),"\u6216\u8005",Object(o.b)("inlineCode",{parentName:"p"},"false"),"\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u8bb0\u5f55\u8def\u5f84\u3002"),Object(o.b)("p",null,"\u7531\u4e8e\u53ea\u9700\u8981\u6c42\u51fa\u4e00\u4e2a\u7ed3\u679c\uff0c\u56e0\u6b64\uff0c\u5f53\u5de6\u3001\u53f3\u4efb\u610f\u4e00\u68f5\u5b50\u6811\u6c42\u5230\u4e86\u6ee1\u610f\u7ed3\u679c\uff0c\u90fd\u53ef\u4ee5\u53ca\u65f6 return\u3002"),Object(o.b)("p",null,"\u7531\u4e8e\u9898\u76ee\u6ca1\u6709\u8bf4\u8282\u70b9\u7684\u6570\u636e\u4e00\u5b9a\u662f\u6b63\u6574\u6570\uff0c\u5fc5\u987b\u8981\u8d70\u5230\u53f6\u5b50\u8282\u70b9\u624d\u80fd\u5224\u65ad\uff0c\u56e0\u6b64\u4e2d\u9014\u6ca1\u6cd5\u526a\u679d\uff0c\u53ea\u80fd\u8fdb\u884c\u6734\u7d20\u6df1\u641c\u3002"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(u.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Path Sum\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean hasPathSum(TreeNode root, int sum) {\n        if (root == null) return false;\n\n        if (root.left == null && root.right == null) // leaf\n            return sum == root.val;\n\n        return hasPathSum(root.left, sum - root.val)\n                || hasPathSum(root.right, sum - root.val);\n    }\n}\n"))),Object(o.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Path Sum\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool hasPathSum(TreeNode *root, int sum) {\n        if (root == nullptr) return false;\n\n        if (root->left == nullptr && root->right == nullptr) // leaf\n            return sum == root->val;\n\n        return hasPathSum(root->left, sum - root->val)\n                || hasPathSum(root->right, sum - root->val);\n    }\n};\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/binary-tree/recursion/path-sum-ii"}),"Path Sum II"))))}p.isMDXComponent=!0}}]);