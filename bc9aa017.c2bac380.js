(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{264:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return l})),t.d(e,"metadata",(function(){return u})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return f}));var r=t(2),a=t(7),i=(t(0),t(329)),c=t(333),o=t(334),l={title:"Implement strStr()"},u={unversionedId:"string/strstr",id:"string/strstr",isDocsHomePage:!1,title:"Implement strStr()",description:"\u63cf\u8ff0",source:"@site/docs/string/strstr.md",slug:"/string/strstr",permalink:"/string/strstr",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/strstr.md",version:"current",sidebar:"someSidebar",previous:{title:"Valid Palindrome",permalink:"/string/valid-palindrome"},next:{title:"String to Integer (atoi)",permalink:"/string/atoi"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u66b4\u529b\u5339\u914d",id:"\u66b4\u529b\u5339\u914d",children:[]},{value:"KMP",id:"kmp",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function f(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Implement strStr()."),Object(i.b)("p",null,"Returns a pointer to the first occurrence of needle in haystack, or null if needle is not part of haystack."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u66b4\u529b\u7b97\u6cd5\u7684\u590d\u6742\u5ea6\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"O(m*n)"),"\uff0c\u4ee3\u7801\u5982\u4e0b\u3002\u66f4\u9ad8\u6548\u7684\u7684\u7b97\u6cd5\u6709 KMP \u7b97\u6cd5\u3001Boyer-Mooer \u7b97\u6cd5\u548c Rabin-Karp \u7b97\u6cd5\u3002\u9762\u8bd5\u4e2d\u66b4\u529b\u7b97\u6cd5\u8db3\u591f\u4e86\uff0c\u4e00\u5b9a\u8981\u5199\u5f97\u6ca1\u6709 BUG\u3002"),Object(i.b)("h3",{id:"\u66b4\u529b\u5339\u914d"},"\u66b4\u529b\u5339\u914d"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Implement strStr()\n// \u66b4\u529b\u89e3\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(N*M)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public int strStr(final String haystack, final String needle) {\n        if (needle.isEmpty()) return 0;\n\n        final int N = haystack.length() - needle.length() + 1;\n        for (int i = 0; i < N; i++) {\n            int j = i;\n            int k = 0;\n            while (j < haystack.length() && k < needle.length() &&\n                    haystack.charAt(j) == needle.charAt(k)) {\n                j++;\n                k++;\n            }\n            if (k == needle.length()) return i;\n        }\n        return -1;\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Implement strStr()\n// \u66b4\u529b\u89e3\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(N*M)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int strStr(const string& haystack, const string& needle) {\n        if (needle.empty()) return 0;\n\n        const int N = haystack.size() - needle.size() + 1;\n        for (int i = 0; i < N; i++) {\n            int j = i;\n            int k = 0;\n            while (j < haystack.size() && k < needle.size() && haystack[j] == needle[k]) {\n                j++;\n                k++;\n            }\n            if (k == needle.size()) return i;\n        }\n        return -1;\n    }\n};\n")))),Object(i.b)("h3",{id:"kmp"},"KMP"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Implement strStr()\n// KMP\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(N+M)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(M)\npublic class Solution {\n    public int strStr(final String haystack, final String needle) {\n        return kmp(haystack, needle);\n    }\n\n    /*\n     * \u8ba1\u7b97\u90e8\u5206\u5339\u914d\u8868\uff0c\u5373next\u6570\u7ec4.\n     *\n     * @param[in] pattern \u6a21\u5f0f\u4e32\n     * @param[out] next next\u6570\u7ec4\n     * @return \u65e0\n     */\n    private static void compute_prefix(final String pattern, final int[] next) {\n        int i;\n        int j = -1;\n\n        next[0] = j;\n        for (i = 1; i < pattern.length(); i++) {\n            while (j > -1 && pattern.charAt(j + 1) != pattern.charAt(i)) j = next[j];\n\n            if (pattern.charAt(i) == pattern.charAt(j + 1)) j++;\n            next[i] = j;\n        }\n    }\n\n    /*\n     * @brief KMP\u7b97\u6cd5.\n     *\n     * @param[in] text \u6587\u672c\n     * @param[in] pattern \u6a21\u5f0f\u4e32\n     * @return \u6210\u529f\u5219\u8fd4\u56de\u7b2c\u4e00\u6b21\u5339\u914d\u7684\u4f4d\u7f6e\uff0c\u5931\u8d25\u5219\u8fd4\u56de-1\n     */\n    private static int kmp(final String text, final String pattern) {\n        int i;\n        int j = -1;\n        final int n = text.length();\n        final int m = pattern.length();\n        if (n == 0 && m == 0) return 0; /* "","" */\n        if (m == 0) return 0;  /* "a","" */\n        int[] next = new int[m];\n\n        compute_prefix(pattern, next);\n\n        for (i = 0; i < n; i++) {\n            while (j > -1 && pattern.charAt(j + 1) != text.charAt(i)) j = next[j];\n\n            if (text.charAt(i) == pattern.charAt(j + 1)) j++;\n            if (j == m - 1) {\n                return i-j;\n            }\n        }\n\n        return -1;\n    }\n}\n'))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'// Implement strStr()\n// KMP\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(N+M)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(M)\nclass Solution {\npublic:\n    int strStr(const string& haystack, const string& needle) {\n        return kmp(haystack.c_str(), needle.c_str());\n    }\nprivate:\n    /*\n     * @brief \u8ba1\u7b97\u90e8\u5206\u5339\u914d\u8868\uff0c\u5373next\u6570\u7ec4.\n     *\n     * @param[in] pattern \u6a21\u5f0f\u4e32\n     * @param[out] next next\u6570\u7ec4\n     * @return \u65e0\n     */\n    static void compute_prefix(const char *pattern, int next[]) {\n        int i;\n        int j = -1;\n        const int m = strlen(pattern);\n\n        next[0] = j;\n        for (i = 1; i < m; i++) {\n            while (j > -1 && pattern[j + 1] != pattern[i]) j = next[j];\n\n            if (pattern[i] == pattern[j + 1]) j++;\n            next[i] = j;\n        }\n    }\n\n    /*\n     * @brief KMP\u7b97\u6cd5.\n     *\n     * @param[in] text \u6587\u672c\n     * @param[in] pattern \u6a21\u5f0f\u4e32\n     * @return \u6210\u529f\u5219\u8fd4\u56de\u7b2c\u4e00\u6b21\u5339\u914d\u7684\u4f4d\u7f6e\uff0c\u5931\u8d25\u5219\u8fd4\u56de-1\n     */\n    static int kmp(const char *text, const char *pattern) {\n        int i;\n        int j = -1;\n        const int n = strlen(text);\n        const int m = strlen(pattern);\n        if (n == 0 && m == 0) return 0; /* "","" */\n        if (m == 0) return 0;  /* "a","" */\n        int *next = (int*)malloc(sizeof(int) * m);\n\n        compute_prefix(pattern, next);\n\n        for (i = 0; i < n; i++) {\n            while (j > -1 && pattern[j + 1] != text[i]) j = next[j];\n\n            if (text[i] == pattern[j + 1]) j++;\n            if (j == m - 1) {\n                free(next);\n                return i-j;\n            }\n        }\n\n        free(next);\n        return -1;\n    }\n};\n')))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"string-to-integer.md"}),"String to Integer (atoi)"))))}f.isMDXComponent=!0},329:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),s=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=s(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return t?a.a.createElement(b,o(o({ref:e},u),{},{components:t})):a.a.createElement(b,o({ref:e},u))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:r,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},330:function(n,e,t){"use strict";function r(n){var e,t,a="";if("string"==typeof n||"number"==typeof n)a+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=r(n[e]))&&(a&&(a+=" "),a+=t);else for(e in n)n[e]&&(a&&(a+=" "),a+=e);return a}e.a=function(){for(var n,e,t=0,a="";t<arguments.length;)(n=arguments[t++])&&(e=r(n))&&(a&&(a+=" "),a+=e);return a}},331:function(n,e,t){"use strict";var r=t(0),a=t(332);e.a=function(){var n=Object(r.useContext)(a.a);if(null==n)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return n}},332:function(n,e,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);e.a=a},333:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(331),c=t(330),o=t(49),l=t.n(o),u=37,s=39;e.a=function(n){var e=n.block,t=n.children,o=n.defaultValue,p=n.values,f=n.groupId,m=n.className,b=Object(i.a)(),d=b.tabGroupChoices,j=b.setTabGroupChoices,v=Object(r.useState)(o),h=v[0],O=v[1],y=Object(r.useState)(!1),g=y[0],x=y[1];if(null!=f){var k=d[f];null!=k&&k!==h&&p.some((function(n){return n.value===k}))&&O(k)}var w=function(n){O(n),null!=f&&j(f,n)},S=[],N=function(n){n.metaKey||n.altKey||n.ctrlKey||x(!0)},P=function(){x(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",P),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",P)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":e},m)},p.map((function(n){var e=n.value,t=n.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),style:g?{}:{outline:"none"},key:e,ref:function(n){return S.push(n)},onKeyDown:function(n){!function(n,e,t){switch(t.keyCode){case s:!function(n,e){var t=n.indexOf(e)+1;n[t]?n[t].focus():n[0].focus()}(n,e);break;case u:!function(n,e){var t=n.indexOf(e)-1;n[t]?n[t].focus():n[n.length-1].focus()}(n,e)}}(S,n.target,n),N(n)},onFocus:function(){return w(e)},onClick:function(){w(e),x(!1)},onPointerDown:function(){return x(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(n){return n.props.value===h}))[0]))}},334:function(n,e,t){"use strict";var r=t(0),a=t.n(r);e.a=function(n){return a.a.createElement("div",null,n.children)}}}]);