(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{209:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(2),i=t(7),c=(t(0),t(303)),r=t(307),l=t(308),o={title:"LRU Cache"},s={unversionedId:"linear-list/linked-list/lru-cache",id:"linear-list/linked-list/lru-cache",isDocsHomePage:!1,title:"LRU Cache",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/lru-cache.md",slug:"/linear-list/linked-list/lru-cache",permalink:"/linear-list/linked-list/lru-cache",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/lru-cache.md",version:"current",sidebar:"someSidebar",previous:{title:"Reorder List",permalink:"/linear-list/linked-list/reorder-list"},next:{title:"Palindrome Linked List",permalink:"/linear-list/linked-list/palindrome-linked-list"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:p};function d(e){var n=e.components,o=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,o,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(c.b)("p",null,"Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"get(key)")," - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"set(key, value)")," - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item."),Object(c.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(c.b)("p",null,"\u4e3a\u4e86\u4f7f\u67e5\u627e\u3001\u63d2\u5165\u548c\u5220\u9664\u90fd\u6709\u8f83\u9ad8\u7684\u6027\u80fd\uff0c\u8fd9\u9898\u7684\u5173\u952e\u662f\u8981\u4f7f\u7528\u4e00\u4e2a\u53cc\u5411\u94fe\u8868\u548c\u4e00\u4e2a HashMap\uff0c\u56e0\u4e3a\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"HashMap \u4fdd\u5b58\u6bcf\u4e2a\u8282\u70b9\u7684\u5730\u5740\uff0c\u53ef\u4ee5\u57fa\u672c\u4fdd\u8bc1\u5728",Object(c.b)("inlineCode",{parentName:"li"},"O(1)"),"\u65f6\u95f4\u5185\u67e5\u627e\u8282\u70b9"),Object(c.b)("li",{parentName:"ul"},"\u53cc\u5411\u94fe\u8868\u80fd\u540e\u5728",Object(c.b)("inlineCode",{parentName:"li"},"O(1)"),"\u65f6\u95f4\u5185\u6dfb\u52a0\u548c\u5220\u9664\u8282\u70b9\uff0c\u5355\u94fe\u8868\u5219\u4e0d\u884c")),Object(c.b)("p",null,"\u5177\u4f53\u5b9e\u73b0\u7ec6\u8282\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8d8a\u9760\u8fd1\u94fe\u8868\u5934\u90e8\uff0c\u8868\u793a\u8282\u70b9\u4e0a\u6b21\u8bbf\u95ee\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u6700\u77ed\uff0c\u5c3e\u90e8\u7684\u8282\u70b9\u8868\u793a\u6700\u8fd1\u8bbf\u95ee\u6700\u5c11"),Object(c.b)("li",{parentName:"ul"},"\u8bbf\u95ee\u8282\u70b9\u65f6\uff0c\u5982\u679c\u8282\u70b9\u5b58\u5728\uff0c\u628a\u8be5\u8282\u70b9\u4ea4\u6362\u5230\u94fe\u8868\u5934\u90e8\uff0c\u540c\u65f6\u66f4\u65b0 hash \u8868\u4e2d\u8be5\u8282\u70b9\u7684\u5730\u5740"),Object(c.b)("li",{parentName:"ul"},"\u63d2\u5165\u8282\u70b9\u65f6\uff0c\u5982\u679c cache \u7684 size \u8fbe\u5230\u4e86\u4e0a\u9650 capacity\uff0c\u5219\u5220\u9664\u5c3e\u90e8\u8282\u70b9\uff0c\u540c\u65f6\u8981\u5728 hash \u8868\u4e2d\u5220\u9664\u5bf9\u5e94\u7684\u9879\uff1b\u65b0\u8282\u70b9\u63d2\u5165\u94fe\u8868\u5934\u90e8")),Object(c.b)("p",null,Object(c.b)("img",{alt:"LRU Cche",src:t(369).default})),Object(c.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(c.b)("p",null,"C++\u7684",Object(c.b)("inlineCode",{parentName:"p"},"std::list")," \u5c31\u662f\u4e2a\u53cc\u5411\u94fe\u8868\uff0c\u4e14\u5b83\u6709\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"splice()"),"\u65b9\u6cd5\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"O(1)"),"\u65f6\u95f4\uff0c\u975e\u5e38\u597d\u7528\u3002"),Object(c.b)("p",null,"Java \u4e2d\u4e5f\u6709\u53cc\u5411\u94fe\u8868",Object(c.b)("inlineCode",{parentName:"p"},"LinkedList"),", \u4f46\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"LinkedList")," \u5c01\u88c5\u7684\u592a\u6df1\uff0c\u6ca1\u6709\u80fd\u5728",Object(c.b)("inlineCode",{parentName:"p"},"O(1)"),"\u65f6\u95f4\u5185\u5220\u9664\u4e2d\u95f4\u67d0\u4e2a\u5143\u7d20\u7684 API(C++\u7684",Object(c.b)("inlineCode",{parentName:"p"},"list"),"\u6709\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"splice()"),", O(1), \u6240\u4ee5\u672c\u9898 C++\u53ef\u4ee5\u653e\u5fc3\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"splice()"),")\uff0c\u4e8e\u662f\u6211\u4eec\u53ea\u80fd\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a\u53cc\u5411\u94fe\u8868\u3002"),Object(c.b)("p",null,"\u672c\u9898\u6709\u7684\u4eba\u76f4\u63a5\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"LinkedHashMap")," \uff0c\u4ee3\u7801\u66f4\u77ed\uff0c\u4f46\u8fd9\u662f\u4e00\u79cd\u5077\u61d2\u505a\u6cd5\uff0c\u9762\u8bd5\u5b98\u4e00\u5b9a\u4f1a\u8ba9\u4f60\u81ea\u5df1\u91cd\u65b0\u5b9e\u73b0\u3002"),Object(c.b)(r.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// LRU Cache\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class LRUCache {\n    private int capacity;\n    private final HashMap<Integer, Node> map;\n    private Node head;\n    private Node end;\n\n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        map = new HashMap<>();\n    }\n\n    public int get(int key) {\n        if(map.containsKey(key)){\n            Node n = map.get(key);\n            remove(n);\n            setHead(n);\n            return n.value;\n        }\n\n        return -1;\n    }\n\n    public void set(int key, int value) {\n        if (map.containsKey(key)){\n            Node old = map.get(key);\n            old.value = value;\n            remove(old);\n            setHead(old);\n        } else {\n            Node created = new Node(key, value);\n            if (map.size() >= capacity){\n                map.remove(end.key);\n                remove(end);\n                setHead(created);\n            } else {\n                setHead(created);\n            }\n\n            map.put(key, created);\n        }\n    }\n\n    private void remove(Node n){\n        if (n.prev !=null) {\n            n.prev.next = n.next;\n        } else {\n            head = n.next;\n        }\n\n        if (n.next != null) {\n            n.next.prev = n.prev;\n        } else {\n            end = n.prev;\n        }\n\n    }\n\n    private void setHead(Node n){\n        n.next = head;\n        n.prev = null;\n\n        if (head!=null ) head.prev = n;\n\n        head = n;\n\n        if(end == null) end = head;\n    }\n\n    // doubly linked list\n    static class Node {\n        int key;\n        int value;\n        Node prev;\n        Node next;\n\n        public Node(int key, int value) {\n            this.key = key;\n            this.value = value;\n        }\n    }\n}\n"))),Object(c.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// LRU Cache\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass LRUCache{\nprivate:\n    struct CacheNode {\n        int key;\n        int value;\n        CacheNode(int k, int v) :key(k), value(v){}\n    };\npublic:\n    LRUCache(int capacity) {\n        this->capacity = capacity;\n    }\n\n    int get(int key) {\n        if (cacheMap.find(key) == cacheMap.end()) return -1;\n\n        // \u628a\u5f53\u524d\u8bbf\u95ee\u7684\u8282\u70b9\u79fb\u5230\u94fe\u8868\u5934\u90e8\uff0c\u5e76\u4e14\u66f4\u65b0map\u4e2d\u8be5\u8282\u70b9\u7684\u5730\u5740\n        cacheList.splice(cacheList.begin(), cacheList, cacheMap[key]);\n        cacheMap[key] = cacheList.begin();\n        return cacheMap[key]->value;\n    }\n\n    void set(int key, int value) {\n        if (cacheMap.find(key) == cacheMap.end()) {\n            if (cacheList.size() == capacity) { //\u5220\u9664\u94fe\u8868\u5c3e\u90e8\u8282\u70b9\uff08\u6700\u5c11\u8bbf\u95ee\u7684\u8282\u70b9\uff09\n                cacheMap.erase(cacheList.back().key);\n                cacheList.pop_back();\n            }\n            // \u63d2\u5165\u65b0\u8282\u70b9\u5230\u94fe\u8868\u5934\u90e8, \u5e76\u4e14\u5728map\u4e2d\u589e\u52a0\u8be5\u8282\u70b9\n            cacheList.push_front(CacheNode(key, value));\n            cacheMap[key] = cacheList.begin();\n        } else {\n            //\u66f4\u65b0\u8282\u70b9\u7684\u503c\uff0c\u628a\u5f53\u524d\u8bbf\u95ee\u7684\u8282\u70b9\u79fb\u5230\u94fe\u8868\u5934\u90e8,\u5e76\u4e14\u66f4\u65b0map\u4e2d\u8be5\u8282\u70b9\u7684\u5730\u5740\n            cacheMap[key]->value = value;\n            cacheList.splice(cacheList.begin(), cacheList, cacheMap[key]);\n            cacheMap[key] = cacheList.begin();\n        }\n    }\nprivate:\n    list<CacheNode> cacheList; // doubly linked list\n    unordered_map<int, list<CacheNode>::iterator> cacheMap;\n    int capacity;\n};\n")))))}d.isMDXComponent=!0},303:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,h=u["".concat(r,".").concat(b)]||u[b]||d[b]||c;return t?i.a.createElement(h,l(l({ref:n},s),{},{components:t})):i.a.createElement(h,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=b;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<c;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},304:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},305:function(e,n,t){"use strict";var a=t(0);const i=Object(a.createContext)(void 0);n.a=i},306:function(e,n,t){"use strict";var a=t(0),i=t(305);n.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},307:function(e,n,t){"use strict";var a=t(0),i=t.n(a),c=t(306),r=t(304),l=t(49),o=t.n(l);const s=37,p=39;n.a=function(e){const{block:n,children:t,defaultValue:l,values:u,groupId:d}=e,{tabGroupChoices:b,setTabGroupChoices:h}=Object(c.a)(),[m,f]=Object(a.useState)(l),[y,v]=Object(a.useState)(!1);if(null!=d){const e=b[d];null!=e&&e!==m&&u.some((n=>n.value===e))&&f(e)}const O=e=>{f(e),null!=d&&h(d,e)},j=[],k=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},g=()=>{v(!1)};return Object(a.useEffect)((()=>{window.addEventListener("keydown",k),window.addEventListener("mousedown",g)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n})},u.map((({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":m===e}),style:y?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case p:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(j,e.target,e),k(e)},onFocus:()=>O(e),onClick:()=>{O(e),v(!1)},onPointerDown:()=>v(!1)},n)))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((e=>e.props.value===m))[0]))}},308:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function(e){return i.a.createElement("div",null,e.children)}},369:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/lru-cache-a6cb2698b18906d4a2ed6420c128a689.png"}}]);