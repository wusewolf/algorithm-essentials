(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{208:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return o})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return p}));var a=n(2),r=n(7),s=(n(0),n(303)),i={title:"\u5c0f\u7ed3"},o={unversionedId:"bfs/bfs-summary",id:"bfs/bfs-summary",isDocsHomePage:!1,title:"\u5c0f\u7ed3",description:"\u9002\u7528\u573a\u666f",source:"@site/docs/bfs/bfs-summary.md",slug:"/bfs/bfs-summary",permalink:"/bfs/bfs-summary",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/bfs/bfs-summary.md",version:"current",sidebar:"someSidebar",previous:{title:"Surrounded Regions",permalink:"/bfs/surrounded-regions"},next:{title:"Additive Number",permalink:"/dfs/additive-number"}},c=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",children:[]},{value:"\u601d\u8003\u7684\u6b65\u9aa4",id:"\u601d\u8003\u7684\u6b65\u9aa4",children:[]},{value:"\u4ee3\u7801\u6a21\u677f",id:"\u4ee3\u7801\u6a21\u677f",children:[]},{value:"\u5982\u4f55\u8868\u793a\u72b6\u6001",id:"\u5982\u4f55\u8868\u793a\u72b6\u6001",children:[]},{value:"\u6c42\u6700\u77ed\u8def\u5f84\u957f\u5ea6\u6216\u4e00\u6761\u8def\u5f84",id:"\u6c42\u6700\u77ed\u8def\u5f84\u957f\u5ea6\u6216\u4e00\u6761\u8def\u5f84",children:[]},{value:"\u6c42\u6240\u6709\u8def\u5f84",id:"\u6c42\u6240\u6709\u8def\u5f84",children:[]}],l={rightToc:c};function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u8f93\u5165\u6570\u636e"),"\uff1a\u6ca1\u4ec0\u4e48\u7279\u5f81\uff0c\u4e0d\u50cf\u6df1\u641c\uff0c\u9700\u8981\u6709\u201c\u9012\u5f52\u201d\u7684\u6027\u8d28\u3002\u5982\u679c\u662f\u6811\u6216\u8005\u56fe\uff0c\u6982\u7387\u66f4\u5927\u3002"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u72b6\u6001\u8f6c\u6362\u56fe"),"\uff1a\u6811\u6216\u8005 DAG \u56fe\u3002"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u6c42\u89e3\u76ee\u6807"),"\uff1a\u591a\u9636\u6bb5\u6700\u4f18\u5316\u95ee\u9898\u3002"),Object(s.b)("h3",{id:"\u601d\u8003\u7684\u6b65\u9aa4"},"\u601d\u8003\u7684\u6b65\u9aa4"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u662f\u6c42\u8def\u5f84\u957f\u5ea6\uff0c\u8fd8\u662f\u8def\u5f84\u672c\u8eab\uff08\u6216\u52a8\u4f5c\u5e8f\u5217\uff09\uff1f"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u5982\u679c\u662f\u6c42\u8def\u5f84\u957f\u5ea6\uff0c\u5219\u72b6\u6001\u91cc\u9762\u8981\u5b58\u8def\u5f84\u957f\u5ea6\uff08\u6216\u53cc\u961f\u5217+\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff09")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u5982\u679c\u662f\u6c42\u8def\u5f84\u672c\u8eab\u6216\u52a8\u4f5c\u5e8f\u5217"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},"\u8981\u7528\u4e00\u68f5\u6811\u5b58\u50a8\u5bbd\u641c\u8fc7\u7a0b\u4e2d\u7684\u8def\u5f84"),Object(s.b)("li",{parentName:"ol"},"\u662f\u5426\u53ef\u4ee5\u9884\u4f30\u72b6\u6001\u4e2a\u6570\u7684\u4e0a\u9650\uff1f\u80fd\u591f\u9884\u4f30\u72b6\u6001\u603b\u6570\uff0c\u5219\u5f00\u4e00\u4e2a\u5927\u6570\u7ec4\uff0c\u7528\u6811\u7684\u53cc\u4eb2\u8868\u793a\u6cd5\uff1b\u5982\u679c\u4e0d\u80fd\u9884\u4f30\u72b6\u6001\u603b\u6570\uff0c\u5219\u8981\u4f7f\u7528\u4e00\u68f5\u901a\u7528\u7684\u6811\u3002\u8fd9\u4e00\u6b65\u4e5f\u662f\u7b2c 4 \u6b65\u7684\u5fc5\u8981\u4e0d\u5145\u5206\u6761\u4ef6\u3002"))))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u5982\u4f55\u8868\u793a\u72b6\u6001\uff1f\u5373\u4e00\u4e2a\u72b6\u6001\u9700\u8981\u5b58\u50a8\u54ea\u4e9b\u4e9b\u5fc5\u8981\u7684\u6570\u636e\uff0c\u624d\u80fd\u591f\u5b8c\u6574\u63d0\u4f9b\u5982\u4f55\u6269\u5c55\u5230\u4e0b\u4e00\u6b65\u72b6\u6001\u7684\u6240\u6709\u4fe1\u606f\u3002\u4e00\u822c\u8bb0\u5f55\u5f53\u524d\u4f4d\u7f6e\u6216\u6574\u4f53\u5c40\u9762\u3002")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u5982\u4f55\u6269\u5c55\u72b6\u6001\uff1f\u8fd9\u4e00\u6b65\u8ddf\u7b2c 2 \u6b65\u76f8\u5173\u3002\u72b6\u6001\u91cc\u8bb0\u5f55\u7684\u6570\u636e\u4e0d\u540c\uff0c\u6269\u5c55\u65b9\u6cd5\u5c31\u4e0d\u540c\u3002\u5bf9\u4e8e\u56fa\u5b9a\u4e0d\u53d8\u7684\u6570\u636e\u7ed3\u6784\uff08\u4e00\u822c\u9898\u76ee\u76f4\u63a5\u7ed9\u51fa\uff0c\u4f5c\u4e3a\u8f93\u5165\u6570\u636e\uff09\uff0c\u5982\u4e8c\u53c9\u6811\uff0c\u56fe\u7b49\uff0c\u6269\u5c55\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u76f4\u63a5\u5f80\u4e0b\u4e00\u5c42\u8d70\uff0c\u5bf9\u4e8e\u9690\u5f0f\u56fe\uff0c\u8981\u5148\u5728\u7b2c 1 \u6b65\u91cc\u60f3\u6e05\u695a\u72b6\u6001\u6240\u5e26\u7684\u6570\u636e\uff0c\u60f3\u6e05\u695a\u4e86\u8fd9\u70b9\uff0c\u90a3\u5982\u4f55\u6269\u5c55\u5c31\u5f88\u7b80\u5355\u4e86\u3002")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u5982\u4f55\u5224\u65ad\u91cd\u590d\uff1f\u5982\u679c\u72b6\u6001\u8f6c\u6362\u56fe\u662f\u4e00\u9897\u6811\uff0c\u5219\u6c38\u8fdc\u4e0d\u4f1a\u51fa\u73b0\u56de\u8def\uff0c\u4e0d\u9700\u8981\u5224\u91cd\uff1b\u5982\u679c\u72b6\u6001\u8f6c\u6362\u56fe\u662f\u4e00\u4e2a\u56fe\uff08\u8fd9\u65f6\u5019\u662f\u4e00\u4e2a\u56fe\u4e0a\u7684 BFS\uff09\uff0c\u5219\u9700\u8981\u5224\u91cd\u3002"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u5982\u679c\u662f\u6c42\u6700\u77ed\u8def\u5f84\u957f\u5ea6\u6216\u4e00\u6761\u8def\u5f84\uff0c\u5219\u53ea\u9700\u8981\u8ba9\u201c\u70b9\u201d\uff08\u5373\u72b6\u6001\uff09\u4e0d\u91cd\u590d\u51fa\u73b0\uff0c\u5373\u53ef\u4fdd\u8bc1\u4e0d\u51fa\u73b0\u56de\u8def")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u5982\u679c\u662f\u6c42\u6240\u6709\u8def\u5f84\uff0c\u6ce8\u610f\u6b64\u65f6\uff0c\u72b6\u6001\u8f6c\u6362\u56fe\u662f DAG\uff0c\u5373\u5141\u8bb8\u4e24\u4e2a\u7236\u8282\u70b9\u6307\u5411\u540c\u4e00\u4e2a\u5b50\u8282\u70b9\u3002\u5177\u4f53\u5b9e\u73b0\u65f6\uff0c\u6bcf\u4e2a\u8282\u70b9\u8981",Object(s.b)("strong",{parentName:"p"},"\u201c\u5ef6\u8fdf\u201d"),"\u52a0\u5165\u5230\u5df2\u8bbf\u95ee\u96c6\u5408",Object(s.b)("inlineCode",{parentName:"p"},"visited"),"\uff0c\u8981\u7b49\u4e00\u5c42\u5168\u90e8\u8bbf\u95ee\u5b8c\u540e\uff0c\u518d\u52a0\u5165\u5230",Object(s.b)("inlineCode",{parentName:"p"},"visited"),"\u96c6\u5408\u3002")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u5177\u4f53\u5b9e\u73b0"),Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},"\u72b6\u6001\u662f\u5426\u5b58\u5728\u5b8c\u7f8e\u54c8\u5e0c\u65b9\u6848\uff1f\u5373\u5c06\u72b6\u6001\u4e00\u4e00\u6620\u5c04\u5230\u6574\u6570\uff0c\u4e92\u76f8\u4e4b\u95f4\u4e0d\u4f1a\u51b2\u7a81\u3002"),Object(s.b)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u9700\u8981\u4f7f\u7528\u901a\u7528\u7684\u54c8\u5e0c\u8868\uff08\u81ea\u5df1\u5b9e\u73b0\u6216\u7528\u6807\u51c6\u5e93\uff0c\u4f8b\u5982",Object(s.b)("inlineCode",{parentName:"li"},"unordered_set"),"\uff09\u6765\u5224\u91cd\uff1b\u81ea\u5df1\u5b9e\u73b0\u54c8\u5e0c\u8868\u7684\u8bdd\uff0c\u5982\u679c\u80fd\u591f\u9884\u4f30\u72b6\u6001\u4e2a\u6570\u7684\u4e0a\u9650\uff0c\u5219\u53ef\u4ee5\u5f00\u4e24\u4e2a\u6570\u7ec4\uff0chead \u548c next\uff0c\u8868\u793a\u54c8\u5e0c\u8868\uff0c\u53c2\u8003\u7b2c ??? \u8282\u65b9\u6848 2\u3002"),Object(s.b)("li",{parentName:"ol"},"\u5982\u679c\u5b58\u5728\uff0c\u5219\u53ef\u4ee5\u5f00\u4e00\u4e2a\u5927\u5e03\u5c14\u6570\u7ec4\uff0c\u6765\u5224\u91cd\uff0c\u4e14\u6b64\u65f6\u53ef\u4ee5\u7cbe\u786e\u8ba1\u7b97\u51fa\u72b6\u6001\u603b\u6570\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u9884\u4f30\u4e0a\u9650\u3002"))))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"\u76ee\u6807\u72b6\u6001\u662f\u5426\u5df2\u77e5\uff1f\u5982\u679c\u9898\u76ee\u5df2\u7ecf\u7ed9\u51fa\u4e86\u76ee\u6807\u72b6\u6001\uff0c\u53ef\u4ee5\u5e26\u6765\u5f88\u5927\u4fbf\u5229\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u4ece\u8d77\u59cb\u72b6\u6001\u51fa\u53d1\uff0c\u6b63\u5411\u5e7f\u641c\uff1b\u4e5f\u53ef\u4ee5\u4ece\u76ee\u6807\u72b6\u6001\u51fa\u53d1\uff0c\u9006\u5411\u5e7f\u641c\uff1b\u4e5f\u53ef\u4ee5\u540c\u65f6\u51fa\u53d1\uff0c\u53cc\u5411\u5e7f\u641c\u3002"))),Object(s.b)("h3",{id:"\u4ee3\u7801\u6a21\u677f"},"\u4ee3\u7801\u6a21\u677f"),Object(s.b)("p",null,"\u5e7f\u641c\u9700\u8981\u4e00\u4e2a\u961f\u5217\uff0c\u7528\u4e8e\u4e00\u5c42\u4e00\u5c42\u6269\u5c55\uff0c\u4e00\u4e2a hashset\uff0c\u7528\u4e8e\u5224\u91cd\uff0c\u4e00\u68f5\u6811\uff08\u53ea\u6c42\u957f\u5ea6\u65f6\u4e0d\u9700\u8981\uff09\uff0c\u7528\u4e8e\u5b58\u50a8\u6574\u68f5\u6811\u3002"),Object(s.b)("p",null,"\u5bf9\u4e8e\u961f\u5217\uff0c\u53ef\u4ee5\u7528",Object(s.b)("inlineCode",{parentName:"p"},"queue"),"\uff0c\u4e5f\u53ef\u4ee5\u628a",Object(s.b)("inlineCode",{parentName:"p"},"vector"),"\u5f53\u505a\u961f\u5217\u4f7f\u7528\u3002\u5f53\u6c42\u957f\u5ea6\u65f6\uff0c\u6709\u4e24\u79cd\u505a\u6cd5\uff1a"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"\u53ea\u7528\u4e00\u4e2a\u961f\u5217\uff0c\u4f46\u5728\u72b6\u6001\u7ed3\u6784\u4f53",Object(s.b)("inlineCode",{parentName:"li"},"state_t"),"\u91cc\u589e\u52a0\u4e00\u4e2a\u6574\u6570\u5b57\u6bb5",Object(s.b)("inlineCode",{parentName:"li"},"level"),"\uff0c\u8868\u793a\u5f53\u524d\u6240\u5728\u7684\u5c42\u6b21\uff0c\u5f53\u78b0\u5230\u76ee\u6807\u72b6\u6001\uff0c\u76f4\u63a5\u8f93\u51fa",Object(s.b)("inlineCode",{parentName:"li"},"level"),"\u5373\u53ef\u3002\u8fd9\u4e2a\u65b9\u6848\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u53d8\u6210 A","*","\u7b97\u6cd5\uff0c\u628a",Object(s.b)("inlineCode",{parentName:"li"},"queue"),"\u66ff\u6362\u4e3a",Object(s.b)("inlineCode",{parentName:"li"},"priority_queue"),"\u5373\u53ef\u3002"),Object(s.b)("li",{parentName:"ol"},"\u7528\u4e24\u4e2a\u961f\u5217\uff0c",Object(s.b)("inlineCode",{parentName:"li"},"current, next"),"\uff0c\u5206\u522b\u8868\u793a\u5f53\u524d\u5c42\u6b21\u548c\u4e0b\u4e00\u5c42\uff0c\u53e6\u8bbe\u4e00\u4e2a\u5168\u5c40\u6574\u6570",Object(s.b)("inlineCode",{parentName:"li"},"level"),"\uff0c\u8868\u793a\u5c42\u6570\uff08\u4e5f\u5373\u8def\u5f84\u957f\u5ea6\uff09\uff0c\u5f53\u78b0\u5230\u76ee\u6807\u72b6\u6001\uff0c\u8f93\u51fa",Object(s.b)("inlineCode",{parentName:"li"},"level"),"\u5373\u53ef\u3002\u8fd9\u4e2a\u65b9\u6848\uff0c\u72b6\u6001\u91cc\u53ef\u4ee5\u4e0d\u5b58\u8def\u5f84\u957f\u5ea6\uff0c\u53ea\u9700\u5168\u5c40\u8bbe\u7f6e\u4e00\u4e2a\u6574\u6570",Object(s.b)("inlineCode",{parentName:"li"},"level"),"\uff0c\u6bd4\u8f83\u8282\u7701\u5185\u5b58\uff1b")),Object(s.b)("p",null,"\u5bf9\u4e8e hashset\uff0c\u5982\u679c\u6709\u5b8c\u7f8e\u54c8\u5e0c\u65b9\u6848\uff0c\u7528\u5e03\u5c14\u6570\u7ec4(",Object(s.b)("inlineCode",{parentName:"p"},"bool visited[STATE_MAX]"),"\u6216",Object(s.b)("inlineCode",{parentName:"p"},"vector<bool> visited(STATE_MAX, false)"),")\u6765\u8868\u793a\uff1b\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u7528 STL \u91cc\u7684",Object(s.b)("inlineCode",{parentName:"p"},"set"),"\u6216",Object(s.b)("inlineCode",{parentName:"p"},"unordered_set"),"\u3002"),Object(s.b)("p",null,"\u5bf9\u4e8e\u6811\uff0c\u5982\u679c\u7528 STL\uff0c\u53ef\u4ee5\u7528",Object(s.b)("inlineCode",{parentName:"p"},"unordered_map<state_t, state_t > father"),"\u8868\u793a\u4e00\u9897\u6811\uff0c\u4ee3\u7801\u975e\u5e38\u7b80\u6d01\u3002\u5982\u679c\u80fd\u591f\u9884\u4f30\u72b6\u6001\u603b\u6570\u7684\u4e0a\u9650\uff08\u8bbe\u4e3a STATE_MAX\uff09\uff0c\u53ef\u4ee5\u7528\u6570\u7ec4(",Object(s.b)("inlineCode",{parentName:"p"},"state_t nodes[STATE_MAX]"),")\uff0c\u5373\u6811\u7684\u53cc\u4eb2\u8868\u793a\u6cd5\u6765\u8868\u793a\u6811\uff0c\u6548\u7387\u66f4\u9ad8\uff0c\u5f53\u7136\uff0c\u9700\u8981\u5199\u66f4\u591a\u4ee3\u7801\u3002"),Object(s.b)("h3",{id:"\u5982\u4f55\u8868\u793a\u72b6\u6001"},"\u5982\u4f55\u8868\u793a\u72b6\u6001"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'/** \u72b6\u6001 */\nstruct state_t {\n    int data1;  /** \u72b6\u6001\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u5b57\u6bb5. */\n    int data2;  /** \u72b6\u6001\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u5b57\u6bb5. */\n    // dataN;   /** \u5176\u4ed6\u5b57\u6bb5 */\n    int action; /** \u7531\u7236\u72b6\u6001\u79fb\u52a8\u5230\u672c\u72b6\u6001\u7684\u52a8\u4f5c\uff0c\u6c42\u52a8\u4f5c\u5e8f\u5217\u65f6\u9700\u8981. */\n    int level;  /** \u6240\u5728\u7684\u5c42\u6b21\uff08\u4ece0\u5f00\u59cb\uff09\uff0c\u4e5f\u5373\u8def\u5f84\u957f\u5ea6-1\uff0c\u6c42\u8def\u5f84\u957f\u5ea6\u65f6\u9700\u8981\uff1b\n                    \u4e0d\u8fc7\uff0c\u91c7\u7528\u53cc\u961f\u5217\u65f6\u4e0d\u9700\u8981\u672c\u5b57\u6bb5\uff0c\u53ea\u9700\u5168\u5c40\u8bbe\u4e00\u4e2a\u6574\u6570 */\n    bool operator==(const state_t &other) const {\n        return true;  // \u6839\u636e\u5177\u4f53\u95ee\u9898\u5b9e\u73b0\n    }\n};\n\n// \u5b9a\u4e49hash\u51fd\u6570\n\n// \u65b9\u6cd51\uff1a\u6a21\u677f\u7279\u5316\uff0c\u5f53hash\u51fd\u6570\u53ea\u9700\u8981\u72b6\u6001\u672c\u8eab\uff0c\u4e0d\u9700\u8981\u5176\u4ed6\u6570\u636e\u65f6\uff0c\u7528\u8fd9\u4e2a\u65b9\u6cd5\u6bd4\u8f83\u7b80\u6d01\nnamespace std {\ntemplate<> struct hash<state_t> {\n    size_t operator()(const state_t & x) const {\n        return 0; // \u6839\u636e\u5177\u4f53\u95ee\u9898\u5b9e\u73b0\n    }\n};\n}\n\n// \u65b9\u6cd52\uff1a\u51fd\u6570\u5bf9\u8c61\uff0c\u5982\u679chash\u51fd\u6570\u9700\u8981\u8fd0\u884c\u65f6\u6570\u636e\uff0c\u5219\u7528\u8fd9\u79cd\u65b9\u6cd5\nclass Hasher {\npublic:\n    Hasher(int _m) : m(_m) {};\n    size_t operator()(const state_t &s) const {\n        return 0; // \u6839\u636e\u5177\u4f53\u95ee\u9898\u5b9e\u73b0\n    }\nprivate:\n    int m; // \u5b58\u653e\u5916\u9762\u4f20\u5165\u7684\u6570\u636e\n};\n\n/**\n * @brief \u53cd\u5411\u751f\u6210\u8def\u5f84\uff0c\u6c42\u4e00\u6761\u8def\u5f84.\n * @param[in] father \u6811\n * @param[in] target \u76ee\u6807\u8282\u70b9\n * @return \u4ece\u8d77\u70b9\u5230target\u7684\u8def\u5f84\n */\nvector<state_t> gen_path(const unordered_map<state_t, state_t> &father,\n        const state_t &target) {\n    vector<state_t> path;\n    path.push_back(target);\n\n    for (state_t cur = target; father.find(cur) != father.end();\n            cur = father.at(cur))\n        path.push_back(cur);\n\n    reverse(path.begin(), path.end());\n\n    return path;\n}\n\n/**\n * \u53cd\u5411\u751f\u6210\u8def\u5f84\uff0c\u6c42\u6240\u6709\u8def\u5f84.\n * @param[in] father \u5b58\u653e\u4e86\u6240\u6709\u8def\u5f84\u7684\u6811\n * @param[in] start \u8d77\u70b9\n * @param[in] state \u7ec8\u70b9\n * @return \u4ece\u8d77\u70b9\u5230\u7ec8\u70b9\u7684\u6240\u6709\u8def\u5f84\n */\nvoid gen_path(unordered_map<state_t, vector<state_t> > &father,\n        const string &start, const state_t& state, vector<state_t> &path,\n        vector<vector<state_t> > &result) {\n    path.push_back(state);\n    if (state == start) {\n        if (!result.empty()) {\n            if (path.size() < result[0].size()) {\n                result.clear();\n                result.push_back(path);\n            } else if(path.size() == result[0].size()) {\n                result.push_back(path);\n            } else {\n                // not possible\n                throw std::logic_error("not possible to get here");\n            }\n        } else {\n            result.push_back(path);\n        }\n        reverse(result.back().begin(), result.back().end());\n    } else {\n        for (const auto& f : father[state]) {\n            gen_path(father, start, f, path, result);\n        }\n    }\n    path.pop_back();\n}\n')),Object(s.b)("h3",{id:"\u6c42\u6700\u77ed\u8def\u5f84\u957f\u5ea6\u6216\u4e00\u6761\u8def\u5f84"},"\u6c42\u6700\u77ed\u8def\u5f84\u957f\u5ea6\u6216\u4e00\u6761\u8def\u5f84"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u5355\u961f\u5217\u7684\u5199\u6cd5")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include "bfs_common.h"\n\n/**\n * @brief \u5e7f\u641c\uff0c\u53ea\u7528\u4e00\u4e2a\u961f\u5217.\n * @param[in] start \u8d77\u70b9\n * @param[in] data \u8f93\u5165\u6570\u636e\n * @return \u4ece\u8d77\u70b9\u5230\u76ee\u6807\u72b6\u6001\u7684\u4e00\u6761\u6700\u77ed\u8def\u5f84\n */\nvector<state_t> bfs(state_t &start, const vector<vector<int>> &grid) {\n    queue<state_t> q; // \u961f\u5217\n    unordered_set<state_t> visited; // \u5224\u91cd\n    unordered_map<state_t, state_t> father; // \u6811\uff0c\u6c42\u8def\u5f84\u672c\u8eab\u65f6\u624d\u9700\u8981\n\n    // \u5224\u65ad\u72b6\u6001\u662f\u5426\u5408\u6cd5\n    auto state_is_valid = [&](const state_t &s) { /*...*/ };\n\n    // \u5224\u65ad\u5f53\u524d\u72b6\u6001\u662f\u5426\u4e3a\u6240\u6c42\u76ee\u6807\n    auto state_is_target = [&](const state_t &s) { /*...*/ };\n\n    // \u6269\u5c55\u5f53\u524d\u72b6\u6001\n    auto state_extend = [&](const state_t &s) {\n        unordered_set<state_t> result;\n        for (/*...*/) {\n            const state_t new_state = /*...*/;\n            if (state_is_valid(new_state) &&\n                    visited.find(new_state) != visited.end()) {\n                result.insert(new_state);\n            }\n        }\n        return result;\n    };\n\n    assert (start.level == 0);\n    q.push(start);\n    while (!q.empty()) {\n        // \u5343\u4e07\u4e0d\u80fd\u7528 const auto&\uff0cpop() \u4f1a\u5220\u9664\u5143\u7d20\uff0c\n        // \u5f15\u7528\u5c31\u53d8\u6210\u4e86\u60ac\u7a7a\u5f15\u7528\n        const state_t state = q.front();\n        q.pop();\n        visited.insert(state);\n\n        // \u8bbf\u95ee\u8282\u70b9\n        if (state_is_target(state)) {\n            return return gen_path(father, target); // \u6c42\u4e00\u6761\u8def\u5f84\n            // return state.level + 1; // \u6c42\u8def\u5f84\u957f\u5ea6\n        }\n\n        // \u6269\u5c55\u8282\u70b9\n        vector<state_t> new_states = state_extend(state);\n        for (const auto& new_state : new_states) {\n            q.push(new_state);\n            father[new_state] = state;  // \u6c42\u4e00\u6761\u8def\u5f84\n            // visited.insert(state); // \u4f18\u5316\uff1a\u53ef\u4ee5\u63d0\u524d\u52a0\u5165 visited \u96c6\u5408\uff0c\n            // \u4ece\u800c\u7f29\u5c0f\u72b6\u6001\u6269\u5c55\u3002\u8fd9\u65f6 q \u7684\u542b\u4e49\u7565\u6709\u53d8\u5316\uff0c\u91cc\u9762\u5b58\u653e\u7684\u662f\u5904\u7406\u4e86\u4e00\u534a\n            // \u7684\u8282\u70b9\uff1a\u5df2\u7ecf\u52a0\u5165\u4e86visited\uff0c\u4f46\u8fd8\u6ca1\u6709\u6269\u5c55\u3002\u522b\u5fd8\u8bb0 while\u5faa\u73af\u5f00\u59cb\n            // \u524d\uff0c\u8981\u52a0\u4e00\u884c\u4ee3\u7801, visited.insert(start)\n        }\n    }\n\n    return vector<state_t>();\n    //return 0;\n}\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u53cc\u961f\u5217\u7684\u5199\u6cd5")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include "bfs_common.h"\n\n/**\n * @brief \u5e7f\u641c\uff0c\u4f7f\u7528\u4e24\u4e2a\u961f\u5217.\n * @param[in] start \u8d77\u70b9\n * @param[in] data \u8f93\u5165\u6570\u636e\n * @return \u4ece\u8d77\u70b9\u5230\u76ee\u6807\u72b6\u6001\u7684\u4e00\u6761\u6700\u77ed\u8def\u5f84\n */\nvector<state_t> bfs(const state_t &start, const type& data) {\n    queue<state_t> next, current; // \u5f53\u524d\u5c42\uff0c\u4e0b\u4e00\u5c42\n    unordered_set<state_t> visited; // \u5224\u91cd\n    unordered_map<state_t, state_t> father; // \u6811\uff0c\u6c42\u8def\u5f84\u672c\u8eab\u65f6\u624d\u9700\u8981\n\n    int level = -1;  // \u5c42\u6b21\n\n    // \u5224\u65ad\u72b6\u6001\u662f\u5426\u5408\u6cd5\n    auto state_is_valid = [&](const state_t &s) { /*...*/ };\n\n    // \u5224\u65ad\u5f53\u524d\u72b6\u6001\u662f\u5426\u4e3a\u6240\u6c42\u76ee\u6807\n    auto state_is_target = [&](const state_t &s) { /*...*/ };\n\n    // \u6269\u5c55\u5f53\u524d\u72b6\u6001\n    auto state_extend = [&](const state_t &s) {\n        unordered_set<state_t> result;\n        for (/*...*/) {\n            const state_t new_state = /*...*/;\n            if (state_is_valid(new_state) &&\n                    visited.find(new_state) != visited.end()) {\n                result.insert(new_state);\n            }\n        }\n        return result;\n    };\n\n    current.push(start);\n    while (!current.empty()) {\n        ++level;\n        while (!current.empty()) {\n            // \u5343\u4e07\u4e0d\u80fd\u7528 const auto&\uff0cpop() \u4f1a\u5220\u9664\u5143\u7d20\uff0c\n            // \u5f15\u7528\u5c31\u53d8\u6210\u4e86\u60ac\u7a7a\u5f15\u7528\n            const auto state = current.front();\n            current.pop();\n            visited.insert(state);\n\n            if (state_is_target(state)) {\n                return return gen_path(father, state); // \u6c42\u4e00\u6761\u8def\u5f84\n                // return state.level + 1; // \u6c42\u8def\u5f84\u957f\u5ea6\n            }\n\n            const auto& new_states = state_extend(state);\n            for (const auto& new_state : new_states) {\n                next.push(new_state);\n                father[new_state] = state;\n                // visited.insert(state); // \u4f18\u5316\uff1a\u53ef\u4ee5\u63d0\u524d\u52a0\u5165 visited \u96c6\u5408\uff0c\n                // \u4ece\u800c\u7f29\u5c0f\u72b6\u6001\u6269\u5c55\u3002\u8fd9\u65f6 current \u7684\u542b\u4e49\u7565\u6709\u53d8\u5316\uff0c\u91cc\u9762\u5b58\u653e\u7684\u662f\u5904\n                // \u7406\u4e86\u4e00\u534a\u7684\u8282\u70b9\uff1a\u5df2\u7ecf\u52a0\u5165\u4e86visited\uff0c\u4f46\u8fd8\u6ca1\u6709\u6269\u5c55\u3002\u522b\u5fd8\u8bb0 while\n                // \u5faa\u73af\u5f00\u59cb\u524d\uff0c\u8981\u52a0\u4e00\u884c\u4ee3\u7801, visited.insert(start)\n            }\n        }\n        swap(next, current); //!!! \u4ea4\u6362\u4e24\u4e2a\u961f\u5217\n    }\n\n    return vector<state_t>();\n    // return 0;\n}\n')),Object(s.b)("h3",{id:"\u6c42\u6240\u6709\u8def\u5f84"},"\u6c42\u6240\u6709\u8def\u5f84"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u5355\u961f\u5217")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'/**\n * @brief \u5e7f\u641c\uff0c\u4f7f\u7528\u4e00\u4e2a\u961f\u5217.\n * @param[in] start \u8d77\u70b9\n * @param[in] data \u8f93\u5165\u6570\u636e\n * @return \u4ece\u8d77\u70b9\u5230\u76ee\u6807\u72b6\u6001\u7684\u6240\u6709\u6700\u77ed\u8def\u5f84\n */\nvector<vector<state_t> > bfs(const state_t &start, const type& data) {\n    queue<state_t> q;\n    unordered_set<state_t> visited; // \u5224\u91cd\n    unordered_map<state_t, vector<state_t> > father; // DAG\n\n    auto state_is_valid = [&](const state_t& s) { /*...*/ };\n    auto state_is_target = [&](const state_t &s) { /*...*/ };\n    auto state_extend = [&](const state_t &s) {\n        unordered_set<state_t> result;\n        for (/*...*/) {\n            const state_t new_state = /*...*/;\n            if (state_is_valid(new_state)) {\n                auto visited_iter = visited.find(new_state);\n\n                if (visited_iter != visited.end()) {\n                    if (visited_iter->level < new_state.level) {\n                        // do nothing\n                    } else if (visited_iter->level == new_state.level) {\n                        result.insert(new_state);\n                    } else { // not possible\n                        throw std::logic_error("not possible to get here");\n                    }\n                } else {\n                    result.insert(new_state);\n                }\n            }\n        }\n\n        return result;\n    };\n\n    vector<vector<string>> result;\n    state_t start_state(start, 0);\n    q.push(start_state);\n    visited.insert(start_state);\n    while (!q.empty()) {\n        // \u5343\u4e07\u4e0d\u80fd\u7528 const auto&\uff0cpop() \u4f1a\u5220\u9664\u5143\u7d20\uff0c\n        // \u5f15\u7528\u5c31\u53d8\u6210\u4e86\u60ac\u7a7a\u5f15\u7528\n        const auto state = q.front();\n        q.pop();\n\n        // \u5982\u679c\u5f53\u524d\u8def\u5f84\u957f\u5ea6\u5df2\u7ecf\u8d85\u8fc7\u5f53\u524d\u6700\u77ed\u8def\u5f84\u957f\u5ea6\uff0c\n        // \u53ef\u4ee5\u4e2d\u6b62\u5bf9\u8be5\u8def\u5f84\u7684\u5904\u7406\uff0c\u56e0\u4e3a\u6211\u4eec\u8981\u627e\u7684\u662f\u6700\u77ed\u8def\u5f84\n        if (!result.empty() && state.level + 1 > result[0].size()) break;\n\n        if (state_is_target(state)) {\n            vector<string> path;\n            gen_path(father, start_state, state, path, result);\n            continue;\n        }\n        // \u5fc5\u987b\u632a\u5230\u4e0b\u9762\uff0c\u6bd4\u5982\u540c\u4e00\u5c42A\u548cB\u4e24\u4e2a\u8282\u70b9\u5747\u6307\u5411\u4e86\u76ee\u6807\u8282\u70b9\uff0c\n        // \u90a3\u4e48\u76ee\u6807\u8282\u70b9\u5c31\u4f1a\u5728q\u4e2d\u51fa\u73b0\u4e24\u6b21\uff0c\u8f93\u51fa\u8def\u5f84\u5c31\u4f1a\u7ffb\u500d\n        // visited.insert(state);\n\n        // \u6269\u5c55\u8282\u70b9\n        const auto& new_states = state_extend(state);\n        for (const auto& new_state : new_states) {\n            if (visited.find(new_state) == visited.end()) {\n                q.push(new_state);\n            }\n            visited.insert(new_state);\n            father[new_state].push_back(state);\n        }\n    }\n\n    return result;\n}\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u53cc\u961f\u5217\u7684\u5199\u6cd5")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include "bfs_common.h"\n\n/**\n * @brief \u5e7f\u641c\uff0c\u4f7f\u7528\u4e24\u4e2a\u961f\u5217.\n * @param[in] start \u8d77\u70b9\n * @param[in] data \u8f93\u5165\u6570\u636e\n * @return \u4ece\u8d77\u70b9\u5230\u76ee\u6807\u72b6\u6001\u7684\u6240\u6709\u6700\u77ed\u8def\u5f84\n */\nvector<vector<state_t> > bfs(const state_t &start, const type& data) {\n    // \u5f53\u524d\u5c42\uff0c\u4e0b\u4e00\u5c42\uff0c\u7528unordered_set\u662f\u4e3a\u4e86\u53bb\u91cd\uff0c\u4f8b\u5982\u4e24\u4e2a\u7236\u8282\u70b9\u6307\u5411\n    // \u540c\u4e00\u4e2a\u5b50\u8282\u70b9\uff0c\u5982\u679c\u7528vector, \u5b50\u8282\u70b9\u5c31\u4f1a\u5728next\u91cc\u51fa\u73b0\u4e24\u6b21\uff0c\u5176\u5b9e\u6b64\n    // \u65f6 father \u5df2\u7ecf\u8bb0\u5f55\u4e86\u4e24\u4e2a\u7236\u8282\u70b9\uff0cnext\u91cc\u91cd\u590d\u51fa\u73b0\u4e24\u6b21\u662f\u6ca1\u5fc5\u8981\u7684\n    unordered_set<string> current, next;\n    unordered_set<state_t> visited; // \u5224\u91cd\n    unordered_map<state_t, vector<state_t> > father; // DAG\n\n    int level = -1;  // \u5c42\u6b21\n\n    // \u5224\u65ad\u72b6\u6001\u662f\u5426\u5408\u6cd5\n    auto state_is_valid = [&](const state_t &s) { /*...*/ };\n\n    // \u5224\u65ad\u5f53\u524d\u72b6\u6001\u662f\u5426\u4e3a\u6240\u6c42\u76ee\u6807\n    auto state_is_target = [&](const state_t &s) { /*...*/ };\n\n    // \u6269\u5c55\u5f53\u524d\u72b6\u6001\n    auto state_extend = [&](const state_t &s) {\n        unordered_set<state_t> result;\n        for (/*...*/) {\n            const state_t new_state = /*...*/;\n            if (state_is_valid(new_state) &&\n                    visited.find(new_state) != visited.end()) {\n                result.insert(new_state);\n            }\n        }\n        return result;\n    };\n\n    vector<vector<state_t> > result;\n    current.insert(start);\n    while (!current.empty()) {\n        ++ level;\n        // \u5982\u679c\u5f53\u524d\u8def\u5f84\u957f\u5ea6\u5df2\u7ecf\u8d85\u8fc7\u5f53\u524d\u6700\u77ed\u8def\u5f84\u957f\u5ea6\uff0c\u53ef\u4ee5\u4e2d\u6b62\u5bf9\u8be5\u8def\u5f84\u7684\n        // \u5904\u7406\uff0c\u56e0\u4e3a\u6211\u4eec\u8981\u627e\u7684\u662f\u6700\u77ed\u8def\u5f84\n        if (!result.empty() && level+1 > result[0].size()) break;\n\n        // 1. \u5ef6\u8fdf\u52a0\u5165visited, \u8fd9\u6837\u624d\u80fd\u5141\u8bb8\u4e24\u4e2a\u7236\u8282\u70b9\u6307\u5411\u540c\u4e00\u4e2a\u5b50\u8282\u70b9\n        // 2. \u4e00\u80a1\u8111current \u5168\u90e8\u52a0\u5165visited, \u662f\u9632\u6b62\u672c\u5c42\u524d\u4e00\u4e2a\u8282\u70b9\u6269\u5c55\n        // \u8282\u70b9\u65f6\uff0c\u6307\u5411\u4e86\u672c\u5c42\u540e\u9762\u5c1a\u672a\u5904\u7406\u7684\u8282\u70b9\uff0c\u8fd9\u6761\u8def\u5f84\u5fc5\u7136\u4e0d\u662f\u6700\u77ed\u7684\n        for (const auto& state : current)\n            visited.insert(state);\n        for (const auto& state : current) {\n            if (state_is_target(state)) {\n                vector<string> path;\n                gen_path(father, path, start, state, result);\n                continue;\n            }\n\n            const auto new_states = state_extend(state);\n            for (const auto& new_state : new_states) {\n                next.insert(new_state);\n                father[new_state].push_back(state);\n            }\n        }\n\n        current.clear();\n        swap(current, next);\n    }\n\n    return result;\n}\n')))}p.isMDXComponent=!0},303:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return _}));var a=n(0),r=n.n(a);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),p=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,_=u["".concat(i,".").concat(d)]||u[d]||b[d]||s;return n?r.a.createElement(_,o(o({ref:e},l),{},{components:n})):r.a.createElement(_,o({ref:e},l))}));function _(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);