(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{178:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(7),i=(t(0),t(303)),o=t(307),c=t(308),s={title:"Count and Say"},l={unversionedId:"string/count-and-say",id:"string/count-and-say",isDocsHomePage:!1,title:"Count and Say",description:"\u63cf\u8ff0",source:"@site/docs/string/count-and-say.md",slug:"/string/count-and-say",permalink:"/string/count-and-say",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/count-and-say.md",version:"current",sidebar:"someSidebar",previous:{title:"Roman to Integer",permalink:"/string/roman-to-integer"},next:{title:"Anagrams",permalink:"/string/anagrams"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],b={rightToc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"The count-and-say sequence is the sequence of integers beginning as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"1, 11, 21, 1211, 111221, ...\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"1")," is read off as ",Object(i.b)("inlineCode",{parentName:"p"},'"one 1"')," or ",Object(i.b)("inlineCode",{parentName:"p"},"11"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"11")," is read off as ",Object(i.b)("inlineCode",{parentName:"p"},'"two 1s"')," or ",Object(i.b)("inlineCode",{parentName:"p"},"21"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"21")," is read off as ",Object(i.b)("inlineCode",{parentName:"p"},'"one 2"'),", then ",Object(i.b)("inlineCode",{parentName:"p"},'"one 1"')," or ",Object(i.b)("inlineCode",{parentName:"p"},"1211"),"."),Object(i.b)("p",null,"Given an integer ",Object(i.b)("inlineCode",{parentName:"p"},"n"),", generate the nth sequence."),Object(i.b)("p",null,"Note: The sequence of integers will be represented as a string."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u6a21\u62df\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Count and Say\n// @author \u8fde\u57ce (http://weibo.com/lianchengzju)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public String countAndSay(int n) {\n        String s = "1";\n\n        while (--n > 0)\n            s = getNext(s);\n\n        return s;\n    }\n\n    String getNext(final String s) {\n        StringBuilder sb = new StringBuilder();\n\n        for (int i = 0; i < s.length();) {\n            int j = notEqual(s, i);\n            sb.append(j - i);\n            sb.append(s.charAt(i));\n            i = j;\n        }\n\n        return sb.toString();\n    }\n    // find the first char that not equal to fromIndex\n    private static int notEqual(final String s, int fromIndex) {\n        final char target = s.charAt(fromIndex);\n        int i = fromIndex;\n        for (; i < s.length(); ++i) {\n            if (s.charAt(i) != target) break;\n        }\n        return i;\n    }\n}\n'))),Object(i.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'// Count and Say\n// @author \u8fde\u57ce (http://weibo.com/lianchengzju)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    string countAndSay(int n) {\n        string s("1");\n\n        while (--n)\n            s = getNext(s);\n\n        return s;\n    }\n\n    string getNext(const string &s) {\n        stringstream ss;\n\n        for (auto i = s.begin(); i != s.end(); ) {\n            auto j = find_if(i, s.end(), bind1st(not_equal_to<char>(), *i));\n            ss << distance(i, j) << *i;\n            i = j;\n        }\n\n        return ss.str();\n    }\n};\n')))))}p.isMDXComponent=!0},303:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},304:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},305:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a},306:function(e,n,t){"use strict";var r=t(0),a=t(305);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},307:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(306),o=t(304),c=t(49),s=t.n(c);const l=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:b,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[m,g]=Object(r.useState)(c),[O,j]=Object(r.useState)(!1);if(null!=p){const e=d[p];null!=e&&e!==m&&b.some((n=>n.value===e))&&g(e)}const y=e=>{g(e),null!=p&&f(p,e)},h=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},w=()=>{j(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",w)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},b.map((({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":m===e}),style:O?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e),v(e)},onFocus:()=>y(e),onClick:()=>{y(e),j(!1)},onPointerDown:()=>j(!1)},n)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((e=>e.props.value===m))[0]))}},308:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);