(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{186:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return c}));var t=r(2),i=r(7),a=(r(0),r(303)),o={title:"Super Ugly Number"},l={unversionedId:"number-theory/super-ugly-number",id:"number-theory/super-ugly-number",isDocsHomePage:!1,title:"Super Ugly Number",description:"\u63cf\u8ff0",source:"@site/docs/number-theory/super-ugly-number.md",slug:"/number-theory/super-ugly-number",permalink:"/number-theory/super-ugly-number",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/number-theory/super-ugly-number.md",version:"current",sidebar:"someSidebar",previous:{title:"Ugly Number II",permalink:"/number-theory/ugly-number-ii"},next:{title:"Fraction to Recurring Decimal",permalink:"/number-theory/fraction-to-recurring-decimal"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:u};function c(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Write a function to find the ",Object(a.b)("inlineCode",{parentName:"p"},"n"),"-th super ugly number."),Object(a.b)("p",null,"Super ugly numbers are positive numbers whose all prime factors are in the given prime list ",Object(a.b)("inlineCode",{parentName:"p"},"primes")," of size ",Object(a.b)("inlineCode",{parentName:"p"},"k"),". For example, ",Object(a.b)("inlineCode",{parentName:"p"},"[1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]")," is the sequence of the first 12 super ugly numbers given ",Object(a.b)("inlineCode",{parentName:"p"},"primes = [2, 7, 13, 19]")," of size 4."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),":"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"1 is a super ugly number for any given ",Object(a.b)("inlineCode",{parentName:"li"},"primes"),"."),Object(a.b)("li",{parentName:"ol"},"The given numbers in ",Object(a.b)("inlineCode",{parentName:"li"},"primes")," are in ascending order."),Object(a.b)("li",{parentName:"ol"},"0 < ",Object(a.b)("inlineCode",{parentName:"li"},"k")," \u2264 100, 0 < ",Object(a.b)("inlineCode",{parentName:"li"},"n")," \u2264 1000000, 0 < ",Object(a.b)("inlineCode",{parentName:"li"},"primes[i]")," < 1000.")),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u8fd9\u9898\u662f ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"/number-theory/ugly-number-ii"}),"Ugly Number II"),' \u7684\u6269\u5c55\u3002\u5728"Ugly Number II"\u4e2d\uff0c',Object(a.b)("inlineCode",{parentName:"p"},"primes=[2,3,5]"),"\uff0c\u8fd9\u9898\u4e2d",Object(a.b)("inlineCode",{parentName:"p"},"primes"),"\u53ef\u4ee5\u81ea\u7531\u53d8\u5316\u3002"),Object(a.b)("p",null,'\u6240\u4ee5\u8fd9\u9898\u53ef\u4ee5\u7528"Ugly Number II"\u7684\u601d\u8def\u89e3\u51b3\u3002\u6bcf\u6b21\u8981\u4ece\u591a\u4e2a\u5217\u8868\u4e2d\u9009\u62e9\u6700\u5c0f\u7684\u5143\u7d20\uff0c\u6211\u4eec\u53ef\u4ee5\u7ef4\u62a4\u4e00\u4e2a\u5927\u5c0f\u4e3a',Object(a.b)("inlineCode",{parentName:"p"},"primes"),"\u957f\u5ea6\u7684\u5c0f\u6839\u5806\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"// Super Ugly Number\n// Time complexity: O(n), Space complexity: O(n)\npublic class Solution {\n    public int nthSuperUglyNumber(int n, int[] primes) {\n        final int[] nums = new int[n];\n        nums[0] = 1; // 1 is the first ugly number\n        final Queue<Node> q = new PriorityQueue<>();\n        for (int i = 0; i < primes.length; ++i) {\n            q.add(new Node(0, primes[i], primes[i]));\n        }\n\n        for (int i = 1; i < n; ++i) {\n            // get the min element and add to nums\n            Node node = q.peek();\n            nums[i] = node.val;\n\n            // update top elements\n            do {\n                node = q.poll();\n                node.val = nums[++node.index] * node.prime;\n                q.add(node); // push it back\n                // prevent duplicate\n            } while (!q.isEmpty() && q.peek().val == nums[i]);\n        }\n        return nums[n - 1];\n    }\n    static class Node implements Comparable<Node> {\n        private int index;\n        private int val;\n        private int prime;\n\n        public Node(int index, int val, int prime) {\n            this.index = index;\n            this.val = val;\n            this.prime = prime;\n        }\n        public int compareTo(Node other) {\n            return this.val - other.val;\n        }\n    }\n}\n")),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"/number-theory/ugly-number-ii"}),"Ugly Number II"))))}c.isMDXComponent=!0},303:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},b=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=c(r),s=t,d=b["".concat(o,".").concat(s)]||b[s]||m[s]||a;return r?i.a.createElement(d,l(l({ref:n},p),{},{components:r})):i.a.createElement(d,l({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);