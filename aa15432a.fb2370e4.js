(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{226:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(7),o=(r(0),r(303)),u=r(307),i=r(308),c={title:"Path Sum II"},l={unversionedId:"binary-tree/recursion/path-sum-ii",id:"binary-tree/recursion/path-sum-ii",isDocsHomePage:!1,title:"Path Sum II",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/recursion/path-sum-ii.md",slug:"/binary-tree/recursion/path-sum-ii",permalink:"/binary-tree/recursion/path-sum-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/recursion/path-sum-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Path Sum",permalink:"/binary-tree/recursion/path-sum"},next:{title:"Binary Tree Maximum Path Sum",permalink:"/binary-tree/recursion/binary-tree-maximum-path-sum"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum."),Object(o.b)("p",null,"For example:\nGiven the below binary tree and ",Object(o.b)("inlineCode",{parentName:"p"},"sum = 22"),","),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"          5\n         / \\\n        4   8\n       /   / \\\n      11  13  4\n     /  \\    / \\\n    7    2  5   1\n")),Object(o.b)("p",null,"return"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[\n   [5,4,11,2],\n   [5,8,4,5]\n]\n")),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u8ddf\u4e0a\u4e00\u9898\u76f8\u6bd4\uff0c\u672c\u9898\u662f\u6c42\u8def\u5f84\u672c\u8eab\u3002\u4e14\u8981\u6c42\u51fa\u6240\u6709\u7ed3\u679c\uff0c\u5de6\u5b50\u6811\u6c42\u5230\u4e86\u6ee1\u610f\u7ed3\u679c\uff0c\u4e0d\u80fd return\uff0c\u8981\u63a5\u7740\u6c42\u53f3\u5b50\u6811\u3002"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(u.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Path Sum II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int sum) {\n        List<List<Integer>> result = new ArrayList<>();\n        ArrayList<Integer>  cur = new ArrayList<>(); // \u4e2d\u95f4\u7ed3\u679c\n        pathSum(root, sum, cur, result);\n        return result;\n    }\n    private static void pathSum(TreeNode root, int gap, ArrayList<Integer> cur,\n                                List<List<Integer>> result) {\n        if (root == null) return;\n\n        cur.add(root.val);\n\n        if (root.left == null && root.right == null) { // leaf\n            if (gap == root.val)\n                result.add(new ArrayList<>(cur));\n        }\n        pathSum(root.left, gap - root.val, cur, result);\n        pathSum(root.right, gap - root.val, cur, result);\n\n        cur.remove(cur.size() - 1);\n    }\n}\n"))),Object(o.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Path Sum II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    vector<vector<int> > pathSum(TreeNode *root, int sum) {\n        vector<vector<int> > result;\n        vector<int> cur; // \u4e2d\u95f4\u7ed3\u679c\n        pathSum(root, sum, cur, result);\n        return result;\n    }\nprivate:\n    void pathSum(TreeNode *root, int gap, vector<int> &cur,\n            vector<vector<int> > &result) {\n        if (root == nullptr) return;\n\n        cur.push_back(root->val);\n\n        if (root->left == nullptr && root->right == nullptr) { // leaf\n            if (gap == root->val)\n                result.push_back(cur);\n        }\n        pathSum(root->left, gap - root->val, cur, result);\n        pathSum(root->right, gap - root->val, cur, result);\n\n        cur.pop_back();\n    }\n};\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/binary-tree/recursion/path-sum"}),"Path Sum"))))}b.isMDXComponent=!0},303:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var l=2;l<o;l++)u[l]=r[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},304:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},305:function(e,t,r){"use strict";var n=r(0);const a=Object(n.createContext)(void 0);t.a=a},306:function(e,t,r){"use strict";var n=r(0),a=r(305);t.a=function(){const e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},307:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(306),u=r(304),i=r(49),c=r.n(i);const l=37,s=39;t.a=function(e){const{block:t,children:r,defaultValue:i,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[d,v]=Object(n.useState)(i),[h,y]=Object(n.useState)(!1);if(null!=b){const e=m[b];null!=e&&e!==d&&p.some((t=>t.value===e))&&v(e)}const O=e=>{v(e),null!=b&&f(b,e)},j=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},w=()=>{y(!1)};return Object(n.useEffect)((()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",w)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(u.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),style:h?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,r)=>{switch(r.keyCode){case s:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),g(e)},onFocus:()=>O(e),onClick:()=>{O(e),y(!1)},onPointerDown:()=>y(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((e=>e.props.value===d))[0]))}},308:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);