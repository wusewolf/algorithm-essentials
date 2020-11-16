(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{281:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),i=t(7),r=(t(0),t(329)),o=t(333),u=t(334),l={title:"Moving Average of Data Stream"},s={unversionedId:"stack-and-queue/queue/moving-average-of-data-stream",id:"stack-and-queue/queue/moving-average-of-data-stream",isDocsHomePage:!1,title:"Moving Average of Data Stream",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/queue/moving-average-of-data-stream.md",slug:"/stack-and-queue/queue/moving-average-of-data-stream",permalink:"/stack-and-queue/queue/moving-average-of-data-stream",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/stack-and-queue/queue/moving-average-of-data-stream.md",version:"current",sidebar:"someSidebar",previous:{title:"Implement Queue using Stacks",permalink:"/stack-and-queue/queue/implement-queue-using-stacks"},next:{title:"Sliding Window Maximum",permalink:"/stack-and-queue/queue/sliding-window-maximum"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],m={rightToc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"MovingAverage m = new MovingAverage(3);",Object(r.b)("br",{parentName:"p"}),"\n","m.next(1) = 1",Object(r.b)("br",{parentName:"p"}),"\n","m.next(10) = (1 + 10) / 2",Object(r.b)("br",{parentName:"p"}),"\n","m.next(3) = (1 + 10 + 3) / 3",Object(r.b)("br",{parentName:"p"}),"\n","m.next(5) = (10 + 3 + 5) / 3")),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u53ef\u4ee5\u7528\u4e00\u4e2a\u53cc\u7aef\u961f\u5217\uff0c\u5927\u5c0f\u4e3a\u7a97\u53e3\u5927\u5c0f\uff0c\u5e76\u7528\u4e00\u4e2a\u53d8\u91cf\u5b58\u50a8\u603b\u548c\u3002\u6bcf\u6b21\u65b0\u6765\u4e00\u4e2a\u5143\u7d20\uff0c\u5c31\u63d2\u5165\u5230\u5c3e\u90e8\uff0c\u5e76\u4ece\u5934\u90e8\u5f39\u51fa\u65e7\u5143\u7d20\uff0c\u6700\u540e\u8981\u66f4\u65b0\u603b\u548c\u3002"),Object(r.b)("p",null,"\u7531\u4e8e\u8fd9\u4e2a\u53cc\u7aef\u961f\u5217\u7684\u5927\u5c0f\u662f\u56fa\u5b9a\u7684\uff0c\u53ef\u4ee5\u4f18\u5316\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u7528\u5faa\u73af\u961f\u5217\u6765\u5b9e\u73b0\u3002"),Object(r.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(r.b)("h4",{id:"\u53cc\u7aef\u961f\u5217"},"\u53cc\u7aef\u961f\u5217"),Object(r.b)(o.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(u.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Moving Average of Data Stream\n# Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage:\n    def __init__(self, size: int):\n        self.size = size\n        self.queue = deque()\n        self.window_sum = 0.0\n        self.count = 0\n\n    def next(self, val: int) -> float:\n        self.count += 1\n        self.queue.append(val)\n        head = self.queue.popleft() if self.count > self.size else 0\n        self.window_sum = self.window_sum - head + val\n        return self.window_sum / min(self.size, self.count)\n"))),Object(r.b)(u.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\n  private int size, count = 0;\n  private double windowSum = 0.0;\n  private Deque<Integer> queue = new ArrayDeque<>();\n\n  public MovingAverage(int size) {\n    this.size = size;\n  }\n\n  public double next(int val) {\n    ++count;\n    queue.add(val);\n    int head = count > size ? queue.poll() : 0;\n    windowSum = windowSum - head + val;\n    return windowSum / Math.min(size, count);\n  }\n}\n"))),Object(r.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\npublic:\n    /** Initialize your data structure here. */\n    MovingAverage(int size) {\n        this->size = size;\n    }\n\n    double next(int val) {\n        ++count;\n        queue.push_back(val);\n        int head = count > size ? queue.front() : 0;\n        if (count > size) queue.pop_front();\n        window_sum = window_sum - head + val;\n        return window_sum / min(size, count);\n    }\nprivate:\n    int size, count = 0;\n    double window_sum = 0;\n    deque<int> queue;\n};\n")))),Object(r.b)("h4",{id:"\u5faa\u73af\u961f\u5217"},"\u5faa\u73af\u961f\u5217"),Object(r.b)(o.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(u.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Moving Average of Data Stream\n# Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage:\n    def __init__(self, size: int):\n        self.size = size\n        self.queue = [0] * size\n        self.tail = 0\n        self.window_sum = 0.0\n        self.count = 0\n\n    def next(self, val: int) -> float:\n        self.count += 1\n        head_index = (self.tail + 1) % self.size\n        self.window_sum = self.window_sum - self.queue[head_index] + val\n        # move forward for one step\n        self.tail = (self.tail + 1) % self.size\n        self.queue[self.tail] = val\n        return self.window_sum / min(self.size, self.count)\n"))),Object(r.b)(u.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\n  private int size, count = 0, tail = 0;\n  private double windowSum = 0.0;\n  private int[] queue;\n\n  public MovingAverage(int size) {\n    this.size = size;\n    this.queue = new int[size];\n  }\n\n  public double next(int val) {\n    ++this.count;\n    int headIndex = (this.tail + 1) % this.size;\n    this.windowSum = this.windowSum - this.queue[headIndex] + val;\n    // move forward for one step\n    this.tail = (this.tail + 1) % size;\n    this.queue[this.tail] = val;\n    return this.windowSum / Math.min(this.size, this.count);\n  }\n}\n"))),Object(r.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\npublic:\n    MovingAverage(int size) {\n        this->size = size;\n        this->queue = vector<int>(size);\n    }\n\n    double next(int val) {\n        ++count;\n        int head_index = (tail + 1) % size;\n        window_sum = window_sum - queue[head_index] + val;\n        // move forward for one step\n        tail = (tail + 1) % size;\n        queue[tail] = val;\n        return window_sum / min(size, count);\n    }\nprivate:\n    int size, count = 0, tail = 0;\n    double window_sum = 0;\n    vector<int> queue;\n};\n\n")))),Object(r.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../stack/median-of-data-stream"}),"Median of Data Stream"))))}d.isMDXComponent=!0},329:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,b=m["".concat(o,".").concat(p)]||m[p]||d[p]||r;return t?i.a.createElement(b,u(u({ref:n},s),{},{components:t})):i.a.createElement(b,u({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},330:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},331:function(e,n,t){"use strict";var a=t(0),i=t(332);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},332:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},333:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(331),o=t(330),u=t(49),l=t.n(u),s=37,c=39;n.a=function(e){var n=e.block,t=e.children,u=e.defaultValue,m=e.values,d=e.groupId,p=e.className,b=Object(r.a)(),f=b.tabGroupChoices,v=b.setTabGroupChoices,g=Object(a.useState)(u),O=g[0],w=g[1],h=Object(a.useState)(!1),y=h[0],j=h[1];if(null!=d){var x=f[d];null!=x&&x!==O&&m.some((function(e){return e.value===x}))&&w(x)}var q=function(e){w(e),null!=d&&v(d,e)},z=[],_=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},T=function(){j(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",_),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",_),window.removeEventListener("mousedown",T)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},m.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return z.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case c:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(z,e.target,e),_(e)},onFocus:function(){return q(n)},onClick:function(){q(n),j(!1)},onPointerDown:function(){return j(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},334:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function(e){return i.a.createElement("div",null,e.children)}}}]);