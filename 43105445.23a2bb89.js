(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(7),i=(t(0),t(300)),l=t(304),o=t(305),c={title:"Insert Interval"},s={unversionedId:"simulation/insert-interval",id:"simulation/insert-interval",isDocsHomePage:!1,title:"Insert Interval",description:"\u63cf\u8ff0",source:"@site/docs/simulation/insert-interval.md",slug:"/simulation/insert-interval",permalink:"/simulation/insert-interval",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/insert-interval.md",version:"current",sidebar:"someSidebar",previous:{title:"Palindrome Number",permalink:"/simulation/palindrome-number"},next:{title:"Merge Intervals",permalink:"/simulation/merge-intervals"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],v={rightToc:u};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},v,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary)."),Object(i.b)("p",null,"You may assume that the intervals were initially sorted according to their start times."),Object(i.b)("p",null,"Example 1:\nGiven intervals ",Object(i.b)("inlineCode",{parentName:"p"},"[1,3],[6,9]"),", insert and merge ",Object(i.b)("inlineCode",{parentName:"p"},"[2,5]")," in as ",Object(i.b)("inlineCode",{parentName:"p"},"[1,5],[6,9]"),"."),Object(i.b)("p",null,"Example 2:\nGiven ",Object(i.b)("inlineCode",{parentName:"p"},"[1,2],[3,5],[6,7],[8,10],[12,16]"),", insert and merge ",Object(i.b)("inlineCode",{parentName:"p"},"[4,9]")," in as ",Object(i.b)("inlineCode",{parentName:"p"},"[1,2],[3,10],[12,16]"),"."),Object(i.b)("p",null,"This is because the new interval ",Object(i.b)("inlineCode",{parentName:"p"},"[4,9]")," overlaps with ",Object(i.b)("inlineCode",{parentName:"p"},"[3,5],[6,7],[8,10]"),"."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u65e0"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Insert Interval\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        ArrayList<int[]> list = new ArrayList<>(Arrays.asList(intervals));\n        insert(list, newInterval);\n        return list.toArray(new int[0][2]);\n    }\n\n    private void insert(ArrayList<int[]> intervals, int[] newInterval) {\n        for (int i = 0; i < intervals.size();) {\n            final int[] cur = intervals.get(i);\n            if (newInterval[1] < cur[0]) {\n                intervals.add(i, newInterval);\n                return;\n            } else if (newInterval[0] > cur[1]) {\n                ++i;\n            } else {\n                newInterval[0] = Math.min(newInterval[0], cur[0]);\n                newInterval[1] = Math.max(newInterval[1], cur[1]);\n                intervals.remove(i);\n            }\n        }\n        intervals.add(newInterval);\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Insert Interval\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<Interval> insert(vector<Interval> &intervals, Interval newInterval) {\n        vector<Interval>::iterator it = intervals.begin();\n        while (it != intervals.end()) {\n            if (newInterval.end < it->start) {\n                intervals.insert(it, newInterval);\n                return intervals;\n            } else if (newInterval.start > it->end) {\n                it++;\n                continue;\n            } else {\n                newInterval.start = min(newInterval.start, it->start);\n                newInterval.end = max(newInterval.end, it->end);\n                it = intervals.erase(it);\n            }\n        }\n        intervals.insert(intervals.end(), newInterval);\n        return intervals;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/simulation/merge-intervals"}),"Merge Intervals"))))}b.isMDXComponent=!0},300:function(e,n,t){"use strict";t.d(n,"a",(function(){return v})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},v=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=u(t),p=r,f=v["".concat(l,".").concat(p)]||v[p]||b[p]||i;return t?a.a.createElement(f,o(o({ref:n},s),{},{components:t})):a.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},301:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},302:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},303:function(e,n,t){"use strict";var r=t(0),a=t(302);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},304:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(303),l=t(301),o=t(49),c=t.n(o),s=37,u=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,v=e.values,b=e.groupId,p=Object(i.a)(),f=p.tabGroupChoices,m=p.setTabGroupChoices,d=Object(r.useState)(o),O=d[0],j=d[1],y=Object(r.useState)(!1),w=y[0],h=y[1];if(null!=b){var g=f[b];null!=g&&g!==O&&v.some((function(e){return e.value===g}))&&j(g)}var I=function(e){j(e),null!=b&&m(b,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},E=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n})},v.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===n}),style:w?{}:{outline:"none"},key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e),C(e)},onFocus:function(){return I(n)},onClick:function(){I(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},305:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);