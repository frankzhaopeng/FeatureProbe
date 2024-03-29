"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[5725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=i(r),k=a,m=s["".concat(u,".").concat(k)]||s[k]||b[k]||l;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={slug:"FeatureProbe BranchingAndFlags",title:"\u5206\u652f\u7ba1\u7406\u5de5\u5177:\u7279\u6027\u5206\u652f VS \u7279\u6027\u5f00\u5173"},p=void 0,o={permalink:"/blog/FeatureProbe BranchingAndFlags",editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/blog/2022-12-22-featureprobe.md",source:"@site/blog/2022-12-22-featureprobe.md",title:"\u5206\u652f\u7ba1\u7406\u5de5\u5177:\u7279\u6027\u5206\u652f VS \u7279\u6027\u5f00\u5173",description:"\u6765\u6e90\uff1aDevOps.com",date:"2022-12-22T00:00:00.000Z",formattedDate:"December 22, 2022",tags:[],readingTime:20.605,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"FeatureProbe BranchingAndFlags",title:"\u5206\u652f\u7ba1\u7406\u5de5\u5177:\u7279\u6027\u5206\u652f VS \u7279\u6027\u5f00\u5173"},nextItem:{title:"\u600e\u4e48\u505a\u5230\u96f6\u98ce\u9669\u8fc1\u79fb\u6570\u636e\u5e93\uff1f",permalink:"/blog/FeatureProbe Database"}},u={authorsImageUrls:[]},i=[{value:"1\u3001\u5f00\u5173\u8981\u6709\u8fc7\u671f\u65f6\u95f4",id:"1\u5f00\u5173\u8981\u6709\u8fc7\u671f\u65f6\u95f4",level:4},{value:"2\u3001\u5f00\u5173\u4e0d\u662f\u300e\u94f6\u5f39\u300f",id:"2\u5f00\u5173\u4e0d\u662f\u94f6\u5f39",level:4}],c={toc:i};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6765\u6e90\uff1aDevOps.com"),(0,a.kt)("p",null,"\u4f5c\u8005\uff1aPete Hodgson"),(0,a.kt)("p",null,"\u82f1\u6587\u539f\u6587\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://devops.com/feature-branching-vs-feature-flags-whats-right-tool-job/"},"https://devops.com/feature-branching-vs-feature-flags-whats-right-tool-job/\n")),(0,a.kt)("p",null,"\u8f6f\u4ef6\u5f00\u53d1\u56e2\u961f\u7684\u4ee3\u7801\u5206\u652f\u7ba1\u7406\u7b56\u7565\u4f1a\u5bf9\u5176\u53d1\u5e03\u9ad8\u8d28\u91cf\u8f6f\u4ef6\u7684\u901f\u5ea6\u4ea7\u751f\u91cd\u5927\u5f71\u54cd\uff0c\u8fd9\u7bc7\u6587\u7ae0\u6211\u4eec\u5c06\u63a2\u8ba8\u5728\u540c\u4e00\u4ee3\u7801\u5e93\u4e2d\u5b9e\u73b0\u591a\u4e2a\u5e76\u884c\u5f00\u53d1\u5de5\u4f5c\u6d41\u7684\u51e0\u79cd\u4e0d\u540c\u65b9\u6cd5\u7684\u5229\u5f0a\u3002\u6211\u4eec\u5c06\u770b\u5230\u4e24\u4e2a\u4e3b\u8981\u7684\u56e0\u7d20\uff1a\u5408\u5e76\u4ee3\u7801\u51b2\u7a81\u7684\u6210\u672c\u4ee5\u53ca\u72ec\u7acb\u53d1\u5e03\u529f\u80fd\u7684\u80fd\u529b\u901a\u5e38\u662f\u65e0\u6cd5\u517c\u5f97\u7684\uff0c\u4f46\u7279\u6027\u5f00\u5173\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u89e3\u51b3\u8fd9\u79cd\u77db\u76fe\u601d\u8def\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa3bbf8937e14bfa97502ba3668eae72~tplv-k3u1fbpfcp-watermark.image?",alt:"1.jpg"})),(0,a.kt)("h1",{id:"\u4e00\u4ee3\u7801\u5408\u5e76\u51b2\u7a81\u95ee\u9898"},"\u4e00\u3001\u4ee3\u7801\u5408\u5e76\u51b2\u7a81\u95ee\u9898"),(0,a.kt)("p",null,"\u65b0\u4ea7\u54c1\u5f00\u59cb\u65f6\u4ee3\u7801\u5e93\u8fd8\u6bd4\u8f83\u5c0f\uff0c\u901a\u5e38\u53ea\u6709\u5c11\u6570\u51e0\u4e2a\u5f00\u53d1\u4eba\u5458\u5728\u5f00\u53d1\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u592a\u591a\u7684\u6b63\u5f0f\u5f00\u53d1\u6d41\u7a0b\u89c4\u8303\u3002\u7136\u800c\uff0c\u5373\u4f7f\u4e00\u4e2a\u56e2\u961f\u53ea\u6709\u4e24\u4e2a\u5f00\u53d1\u4eba\u5458\uff0c\u5728\u540c\u4e00\u65f6\u95f4\u5904\u7406\u76f8\u540c\u7684\u6587\u4ef6\u65f6\u4ecd\u9700\u8981\u5c3d\u91cf\u907f\u514d\u5408\u5e76\u51b2\u7a81\u3002"),(0,a.kt)("p",null,"\u5c3d\u7ba1\u5927\u5bb6\u52aa\u529b\u907f\u514d\u5de5\u4f5c\u5185\u5bb9\u4e92\u76f8\u5f71\u54cd\uff0c\u4f46\u770b\u8d77\u6765\u6beb\u4e0d\u76f8\u5173\u7684\u5de5\u4f5c\u5206\u652f\uff0c\u7ecf\u5e38\u8fd8\u662f\u4f1a\u4fee\u6539\u5230\u540c\u4e00\u4e2a\u6587\u4ef6\u3002\u6709\u65f6\uff0c\u6b63\u662f\u8fd9\u4e9b\u610f\u5916\u7684\u5408\u5e76\u51b2\u7a81\u4f1a\u9020\u6210\u5de8\u5927\u7684\u75db\u82e6 -- \u4efb\u4f55\u4e00\u4e2a\u8d44\u6df1\u7684iOS\u5f00\u53d1\u8005\u60f3\u5fc5\u90fd\u7ecf\u5386\u8fc7\u5408\u5e76\u7b2c\u4e09\u65b9 XIB \u6587\u4ef6\u7684\u51b2\u7a81\u95ee\u9898\u3002\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u4e00\u4e9b\u4e0d\u540c\u7684\u65b9\u6cd5\u6765\u5904\u7406\u591a\u4e2a\u5f00\u53d1\u4eba\u5458\u5728\u540c\u4e00\u4ee3\u7801\u5e93\u4e2d\u5de5\u4f5c\u65f6\u9020\u6210\u5408\u5e76\u51b2\u7a81\u7684\u6311\u6218\u3002"),(0,a.kt)("p",null,"\u6709\u4e9b\u4eba\u53ef\u80fd\u4f1a\u8bf4\uff0c\u73b0\u5728\u7684\u5408\u5e76\u51b2\u7a81\u5e76\u4e0d\u662f\u4ec0\u4e48\u5927\u95ee\u9898\uff0c\u4f7f\u7528\u73b0\u4ee3\u7684\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff0c\u4f8b\u5982Git\uff0c\u57fa\u672c\u90fd\u80fd\u89e3\u51b3\uff0c\u8fd9\u662f\u4e00\u79cd\u7406\u60f3\u72b6\u6001\u3002\u73b0\u4ee3\u7248\u672c\u7ba1\u7406\u5de5\u5177\u786e\u5b9e\u8ba9\u521b\u5efa\u5206\u652f\u53d8\u5f97\u5341\u5206\u7b80\u5355\uff0c\u4f46\u5e76\u4e0d\u603b\u662f\u80fd\u4f7f\u5408\u5e76\u8fd9\u4e9b\u5206\u652f\u5185\u7684\u5e76\u884c\u5f00\u53d1\u4ee3\u7801\u53d8\u5f97\u7b80\u5355\u3002Git \u6709\u4e00\u4e9b\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u5728\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\u81ea\u52a8\u5408\u5e76\u4ee3\u7801\uff0c\u4f46 Git \u4e0d\u80fd\u89e3\u51b3\u6240\u6709\u5408\u5e76\u95ee\u9898\u3002\u5982\u679c\u5e76\u884c\u4fee\u6539\u5f71\u54cd\u5230\u4e86\u5927\u578b\u7684 XML \u6587\u4ef6\u3001\u6216 XIB\u3001IDE \u5de5\u7a0b\u6587\u4ef6\uff0cGit \u662f\u65e0\u6cd5\u81ea\u52a8\u5316\u89e3\u51b3\u8fd9\u4e9b\u5408\u5e76\u51b2\u7a81\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u6700\u91cd\u8981\u7684\u662f\uff0cGit \u65e0\u6cd5\u81ea\u52a8\u89e3\u51b3\u4ee3\u7801\u8bed\u4e49\u51b2\u7a81\u3002\u4f8b\u5982\uff0c\u5728\u4e00\u4e2a\u5206\u652f\u4e2d\uff0cAlice \u91cd\u65b0\u547d\u540d\u4e86\u4e00\u4e2a\u65b9\u6cd5\uff0c\u800c\u5728\u53e6\u4e00\u4e2a\u5206\u652f\u4e2d\uff0cBob \u589e\u52a0\u4e86\u8be5\u65b9\u6cd5\u7684\u4e00\u4e2a\u65b0\u8c03\u7528\u3002\u5f53\u8fd9\u4e24\u4e2a\u5206\u652f\u5408\u5e76\u65f6\uff0cGit \u5c31\u65e0\u6cd5\u8bc6\u522b\u51fa Bob \u7684\u5206\u652f\u6b63\u5728\u8c03\u7528\u4e00\u4e2a\u4f7f\u7528\u65e7\u540d\u79f0\u7684\u65b9\u6cd5, \u800c Bob \u7684\u4ee3\u7801\u6b63\u5728\u8c03\u7528\u4e00\u4e2a\u5df2\u7ecf\u4e0d\u5b58\u5728\u7684\u65b9\u6cd5\u3002\u4e8b\u5b9e\u4e0a\uff0cGit \u4e0d\u4f1a\u7ed9 Alice \u6216 Bob \u4efb\u4f55\u63d0\u793a\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u8bed\u4e49\u51b2\u7a81\u662f\u6211\u4eec\u76ee\u524d\u7684\u5de5\u5177\u65e0\u6cd5\u68c0\u6d4b\u7684\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ea\u6709\u5728\u5c1d\u8bd5\u7f16\u8bd1\u5408\u5e76\u540e\u7684\u4ee3\u7801\u5e93\u65f6\u624d\u4f1a\u53d1\u73b0\u8bed\u4e49\u51b2\u7a81\uff0c\u800c\u4e14\u8fd9\u53ea\u662f\u5176\u4e2d\u7684\u4e00\u4e2a\u95ee\u9898\u3002\u5982\u679c\u4ee3\u7801\u662f\u52a8\u6001\u7c7b\u578b\u7684\u8bed\u8a00\uff0c\u4f8b\u5982 javascript\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u80fd\u76f4\u5230\u7528\u6237\u5f00\u59cb\u62a5\u544a\u7ebf\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u5d29\u6e83\u65f6\u624d\u4f1a\u88ab\u53d1\u73b0\u3002"),(0,a.kt)("p",null,"\u5f53\u53d8\u66f4\u7684\u6210\u672c\u8d8a\u6765\u8d8a\u9ad8\u65f6\uff0c\u5728\u7cfb\u7edf\u4e2d\u8fdb\u884c\u4e00\u4e9b\u5c0f\u4f18\u5316\u6295\u5165\u4ea7\u51fa\u6bd4\u5c31\u4f1a\u964d\u4f4e\u3002\u8fd9\u5f15\u5165\u4e86\u4e00\u4e2a\u5fae\u5999\u7684\u963b\u529b\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u5bf9\u4ee3\u7801\u5e93\u7684\u5185\u90e8\u8d28\u91cf\u4e0d\u5229\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u80fd\u591f\u9010\u6e10\u6539\u5584\u4ee3\u7801\u5e93\u6216\u963b\u6b62\u5176\u9010\u6e10\u9000\u5316\u7684\u90a3\u79cd\u5c0f\u800c\u5e7f\u6cdb\u7684\u91cd\u6784\uff0c\u6b63\u662f\u4f1a\u7ecf\u5e38\u5bfc\u81f4\u5408\u5e76\u51b2\u7a81\u7684\u90a3\u79cd\u53d8\u66f4\u3002\u5728\u6211\u770b\u6765\uff0c\u8fd9\u662f\u57fa\u4e8e\u5206\u652f\u5f00\u53d1\u7684\u771f\u6b63\u9690\u6027\u6210\u672c--",(0,a.kt)("strong",{parentName:"p"},'\u5b83\u6291\u5236\u4e86\u90a3\u79cd\xa0"\u7ae5\u5b50\u519b\u519b\u89c4 "\u7684\u6539\u8fdb\uff0c\u800c\u8fd9\u79cd\u6539\u8fdb\u53ef\u4ee5\u9632\u6b62\u4ee3\u7801\u5e93\u7684\u67d0\u4e9b\u533a\u57df\u9010\u6e10\u9000\u5316\u4e3a\u7981\u533a\u3002\uff08\u7ae5\u5b50\u519b\u519b\u89c4\uff1a\u6c38\u8fdc\u628a\u9732\u8425\u5730\u5f04\u5f97\u6bd4\u4f60\u5230\u8fbe\u65f6\u8fd8\u8981\u5e72\u51c0\uff0c\u6307\u968f\u65f6\u5904\u7406\u548c\u4f18\u5316\u624b\u4e2d\u7684\u95ee\u9898\uff09')),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u4ecb\u7ecd\u4e86\u5408\u5e76\u51b2\u7a81\u4f1a\u5f15\u8d77\u7684\u95ee\u9898\u540e\uff0c\u4e0b\u9762\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u907f\u514d\u5408\u5e76\u51b2\u7a81\u3002"),(0,a.kt)("h1",{id:"\u4e8c\u5728\u4e3b\u5e72\u4e0a\u540c\u6b65\u4fee\u6539\u4ee3\u7801"},"\u4e8c\u3001\u5728\u4e3b\u5e72\u4e0a\u540c\u6b65\u4fee\u6539\u4ee3\u7801"),(0,a.kt)("p",null,"\u4e00\u4e2a\u521a\u5f00\u59cb\u5f00\u53d1\u65b0\u5e94\u7528\u7684\u5c0f\u56e2\u961f\uff0c\u6700\u521d\u53ef\u80fd\u4f1a\u8bd5\u56fe\u901a\u8fc7\u8ba9\u6240\u6709\u5f00\u53d1\u4eba\u5458\u9891\u7e41\u5730\u63a8\u9001\u53d8\u66f4\u5230\u5171\u4eab\u7684\u4e3b\u5e72\u5206\u652f\u6765\u964d\u4f4e\u53d1\u751f\u5927\u7684\u610f\u5916\u5408\u5e76\u51b2\u7a81\u7684\u98ce\u9669\uff0c\u8fd9\u662f\u6301\u7eed\u96c6\u6210\u7684\u6838\u5fc3\u539f\u5219\u4e4b\u4e00\u3002\u5f53\u6bcf\u4e2a\u4eba\u90fd\u5728\u5171\u4eab\u7684\u4e3b\u5e72\u5206\u652f\u4e2d\u9891\u7e41\u5730\u540c\u6b65\u4ed6\u4eec\u7684\u4fee\u6539\u65f6\uff0c\u610f\u5916\u7684\u5408\u5e76\u51b2\u7a81\u53ef\u4ee5\u5728\u65e9\u671f\u65f6\u66b4\u9732\u51fa\u6765\u5e76\u89e3\u51b3\u6389\u3002"),(0,a.kt)("p",null,"\u4e0d\u5e78\u7684\u662f\uff0c\u8ba9\u591a\u4e2a\u5de5\u4f5c\u843d\u5728\u4e00\u4e2a\u5171\u4eab\u7684\u4e3b\u5e72\u5206\u652f\u4e0a\uff0c\u4f1a\u6709\u4e00\u4e2a\u5f88\u5927\u7684\u95ee\u9898\u3002\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u5de5\u4f5c\u6ca1\u6709\u51c6\u5907\u597d\u53d1\u5e03\uff0c\u90a3\u4e48\u5171\u4eab\u5206\u652f\u4e0a\u7684\u4efb\u4f55\u4e1c\u897f\u90fd\u4e0d\u80fd\u88ab\u53d1\u5e03\u3002\u8ba9\u6211\u4eec\u7528\u4e00\u4e2a\u5047\u60f3\u7684\u4f8b\u5b50\u6765\u770b\u770b\u4e3a\u4ec0\u4e48\u3002"),(0,a.kt)("p",null,"Alice \u548c Bob \u662f\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u7684\u4e24\u4e2a\u5f00\u53d1\u4eba\u5458\uff0c\u4ed6\u4eec\u6709\u4e24\u4e2a\u6b63\u5728\u8fdb\u884c\u7684\u4efb\u52a1\u3002Bob \u6b63\u5728\u5bf9\u7528\u6237\u504f\u597d\u7684\u5de5\u4f5c\u65b9\u5f0f\u8fdb\u884c\u5927\u4fee\uff0c\u800c Alice \u6b63\u5728\u5b8c\u6210\u4e00\u4e2a\u5173\u952e\u7684\u65b0\u529f\u80fd\uff0c\u5927\u8001\u677f\u89c4\u5b9a\u5fc5\u987b\u5728\u672c\u5468\u672b\u524d\u5c06\u5176\u63a8\u9001\u5230\u5e94\u7528\u5546\u5e97\u3002\u8fd9\u4e2a\u56e2\u961f\u901a\u8fc7\u9891\u7e41\u5730\u5728\u4e3b\u5e72\u63d0\u4ea4\u4ee3\u7801\u6765\u907f\u514d\u51fa\u73b0\u5927\u7684\u5408\u5e76\u51b2\u7a81\u3002"),(0,a.kt)("p",null,"\u5230\u4e86\u5468\u56db\uff0cAlice\u6b63\u5728\u7ed3\u675f\u5979\u7684\u5de5\u4f5c\u540c\u65f6\u4e5f\u5f00\u59cb\u505a\u529f\u80fd\u6d4b\u8bd5\u3002\u5728\u5bf9\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u4e00\u822c\u7684\u6d4b\u8bd5\u65f6\uff0c\u5979\u6ce8\u610f\u5230\u7528\u6237\u504f\u597d\u6a21\u5757\u5b58\u5728\u95ea\u9000\u73b0\u8c61\uff0c\u4fbf\u95ee Bob \u662f\u5426\u77e5\u9053\u662f\u4ec0\u4e48\u539f\u56e0\u5bfc\u81f4\u7684\u3002Bob \u89e3\u91ca\u8bf4\uff0c\u4ed6\u6b63\u5bf9\u8fd9\u4e2a\u6a21\u5757\u8fdb\u884c\u91cd\u6784\uff0c\u91cd\u6784\u65f6\u95f4\u53ef\u80fd\u4f1a\u6bd4\u9884\u671f\u65f6\u95f4\u957f\u4e00\u4e9b\uff0c\u5728\u5b8c\u6210\u524d\u53ef\u80fd\u4f1a\u5b58\u5728 bug\u3002\u4f46 Alice \u7684\u65b0\u529f\u80fd\u672c\u5468\u53c8\u5fc5\u987b\u4e0a\u7ebf\u3002\u7ecf\u8fc7\u4e86\u4e24\u5929\u6f2b\u957f\u7684\u65f6\u95f4\uff0cBob \u548c Alice \u7ec8\u4e8e\u4e00\u8d77\u56de\u6eda\u4e86 Bob \u7684\u66f4\u6539\uff0c\u56e0\u4e3a\u5176\u4e2d\u4e00\u4e9b\u66f4\u6539\u5df2\u7ecf\u4e0e Alice \u7684\u65b0\u529f\u80fd\u7684\u4fee\u6539\u7ea0\u7f20\u5728\u4e00\u8d77\u4e86\u3002\u6700\u7ec8\u4ed6\u4eec\u8d76\u4e0a\u4e86\u5468\u516d\u5728\u4ea7\u54c1\u5546\u5e97\u4e0a\u67b6\uff0c\u907f\u514d\u4e86\u4e00\u573a\u5371\u673a\u3002"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u5230\uff0c\u7531\u4e8e Alice \u548c Bob \u5728\u4e00\u4e2a\u5171\u4eab\u5206\u652f\u4e0a\u63d0\u4ea4\u4ee3\u7801\uff0c\u4ed6\u4eec\u539f\u672c\u76f8\u4e92\u72ec\u7acb\u7684\u5f00\u53d1\u4efb\u52a1\u4e92\u76f8\u8026\u5408\u5728\u4e86\u4e00\u8d77\u3002Alice \u65e0\u6cd5\u5ffd\u89c6 Bob \u7684\u5de5\u4f5c\u800c\u72ec\u7acb\u53d1\u5e03\u81ea\u5df1\u7684\u53d8\u66f4\uff0cBob \u4e5f\u662f\u5982\u6b64\u3002\u8fd9\u662f\u5728\u5171\u4eab\u5206\u652f\u4e0a\u5de5\u4f5c\u7684\u4e00\u4e2a\u5927\u95ee\u9898\uff0c\u597d\u5728\u540e\u9762\u6211\u4eec\u4f1a\u4ecb\u7ecd\u4e00\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u7f13\u89e3\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,a.kt)("h1",{id:"\u4e09\u7279\u6027\u5206\u652f"},"\u4e09\u3001\u7279\u6027\u5206\u652f"),(0,a.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u5de5\u4f5c\u8026\u5408\u7684\u95ee\u9898\uff0c\u5f00\u53d1\u56e2\u961f\u5f80\u5f80\u4f1a\u653e\u5f03\u5c06\u6b63\u5728\u7f16\u5199\u7684\u4ee3\u7801\u63a8\u9001\u5230\u5171\u4eab\u5206\u652f\u4e0a\u7684\u65b9\u5f0f\u3002\u6709\u4e9b\u56e2\u961f\u4f1a\u9009\u62e9\u5728\u672c\u5730\u673a\u5668 master \u5206\u652f\u4e0a\u5de5\u4f5c\uff0c\u5728\u5de5\u4f5c\u5b8c\u6210\u540e\u518d\u63a8\u9001\u5230\u56e2\u961f\u7684\u5171\u4eab\u4ed3\u5e93\u3002\u5176\u4ed6\u56e2\u961f\u4f1a\u9009\u62e9\u4f7f\u7528\u7279\u6027\u5206\u652f\uff0c\u5728\u72ec\u7acb\u7684\u5206\u652f\u4e0a\u8fdb\u884c\u72ec\u7acb\u7684\u5de5\u4f5c\uff0c\u53ea\u6709\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u624d\u5408\u5165\u5230\u4e3b\u5e72\u3002"),(0,a.kt)("p",null,"\u987a\u4fbf\u63d0\u4e00\u4e0b\uff0c\u5f53\u4f7f\u7528\u50cf Git \u8fd9\u6837\u7684\u5206\u5e03\u5f0f\u6e90\u7801\u63a7\u5236\u7cfb\u7edf\u65f6\uff0c\u8fd9\u4e24\u79cd\u65b9\u6cd5\u672c\u8d28\u4e0a\u662f\u7b49\u540c\u7684\uff1b\u552f\u4e00\u7684\u533a\u522b\u662f\uff0c\u672a\u5408\u5e76\u7684\u5f00\u53d1\u4e2d\u7684\u4ee3\u7801\u662f\u5728\u8fdc\u7a0b\u7279\u6027\u5206\u652f\u4e2d\u53ef\u89c1\uff0c\u8fd8\u662f\u9690\u85cf\u5728\u5f00\u53d1\u8005\u7684\u672c\u5730\u4e3b\u5e72\u4e0a\u3002\u56e0\u6b64\uff0c\u6211\u628a\u8fd9\u4e24\u79cd\u65b9\u5f0f\u90fd\u79f0\u4e3a\u7279\u6027\u5206\u652f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e8fdba52bb64bfd8ab9d98a0d44272d~tplv-k3u1fbpfcp-watermark.image?",alt:"2.jpg"})),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u5982\u679c\u4e00\u4e2a\u56e2\u961f\u4f7f\u7528\u4e86\u7279\u6027\u5206\u652f\uff0c\u90a3\u4e48\u4ed6\u4eec\u6240\u6709\u7684\u95ee\u9898\u90fd\u89e3\u51b3\u4e86\uff0c\u5bf9\u5417\uff1f\u53ef\u60dc\u4e0d\u662f\uff0c\u6211\u4eec\u91cd\u65b0\u5f15\u5165\u4e86\u5408\u5e76\u98ce\u9669\u3002\u7279\u6027\u5206\u652f\u4e0a\u8fdb\u884c\u7684\u5de5\u4f5c\uff0c\u5728\u88ab\u5408\u5e76\u5230\u5171\u4eab\u7684\u4e3b\u5e72\u5206\u652f\u4e4b\u524d\uff0c\u5e76\u6ca1\u6709\u4e0e\u5176\u4ed6\u7684\u4fee\u6539\u96c6\u6210\u3002\u6bcf\u5f53\u4e24\u4e2a\u5de5\u4f5c\u540c\u65f6\u4fee\u6539\u5230\u76f8\u540c\u7684\u6587\u4ef6\u65f6\uff0c\u65e0\u8bba\u662f\u65e0\u610f\u8fd8\u662f\u6709\u610f\uff0c\u90fd\u4f1a\u5b58\u5728\u4e00\u4e2a\u6f5c\u5728\u7684\u5408\u5e76\u51b2\u7a81\uff0c\u8fd9\u4e2a\u6f5c\u5728\u51b2\u7a81\u4f1a\u7ee7\u7eed\u6269\u5927\uff0c\u76f4\u5230\u5176\u4e2d\u4e00\u4e2a\u5de5\u4f5c\u7684\u5206\u652f\u5408\u5165\u4e3b\u5e72\u3002\u6709\u4e9b\u56e2\u961f\u4f1a\u901a\u8fc7\u9891\u7e41\u5730\u5c06\u4e3b\u5e72\u5206\u652f\u7684\u4fee\u6539\u5408\u5e76\u5230\u7279\u6027\u5206\u652f\u4e2d\u6765\u7f13\u89e3\u8fd9\u4e00\u95ee\u9898\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a22e5c15db348a9a5889230a6e86e8d~tplv-k3u1fbpfcp-watermark.image?",alt:"3.jpg"})),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u5f53\u5b58\u5728\u5e76\u884c\u7684\u5f00\u53d1\u5206\u652f\u65f6\uff0c\u8fd9\u79cd\u7b56\u7565\u662f\u6ca1\u6709\u6548\u679c\u7684\u3002\u4f8b\u5982\u53ea\u6709\u5f53 Bob \u7684\u5206\u652f\u5408\u5e76\u5230\u4e3b\u5e72\u4e0a\u4e4b\u540e\uff0cAlice \u7684\u5206\u652f\u624d\u80fd\u5408\u5165\u4ed6\u7684\u4fee\u6539\u3002\u8fd9\u4e24\u4e2a\u5e76\u884c\u5206\u652f\u7684\u6f5c\u5728\u51b2\u7a81\u53ea\u80fd\u7b49\u5230 Alice \u4e0b\u4e00\u6b21\u5408\u5165\u4e3b\u5e72\u4ee3\u7801\u7684\u65f6\u5019\u53bb\u89e3\u51b3\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/745621c9ea3b4c418c224afcd2fd97ad~tplv-k3u1fbpfcp-watermark.image?",alt:"\u56fe\u72474.jpg"})),(0,a.kt)("p",null,"\u6709\u4e9b\u56e2\u961f\u8fd8\u4f1a\u5c1d\u8bd5 ",(0,a.kt)("strong",{parentName:"p"},"\u201c\u4ea4\u53c9\u5408\u5e76\u201d")," \u6765\u89e3\u51b3\u4ee3\u7801\u5408\u5e76\u51b2\u7a81\u7684\u95ee\u9898\uff0c\u5c06\u4e00\u4e2a\u7279\u6027\u5206\u652f\u7684\u4ee3\u7801\u5408\u5e76\u5230\u53e6\u4e00\u4e2a\u7279\u6027\u5206\u652f\u4ee3\u7801\u4e0a\uff0c\u6765\u51cf\u5c11\u5206\u652f\u4e4b\u95f4\u6f5c\u5728\u7684\u5408\u5e76\u51b2\u7a81\u3002\u7136\u800c\u4e00\u65e6\u4f60\u5c06\u4e24\u4e2a\u7279\u6027\u5206\u652f\u5408\u5e76\u540e\uff0c\u4e8b\u5b9e\u4e0a\u4f60\u8fd8\u662f\u521b\u5efa\u4e86\u4e00\u4e2a\u542b\u6709\u8fdb\u884c\u4e2d\u5de5\u4f5c\u7684\u5171\u4eab\u5206\u652f\uff0c\u8fd9\u548c\u4e24\u4e2a\u56e2\u961f\u5c06\u8fdb\u884c\u4e2d\u7684\u5de5\u4f5c\u5408\u5165\u5171\u4eab master \u5206\u652f\u662f\u4e00\u6837\u7684\uff1a ",(0,a.kt)("strong",{parentName:"p"},"\u4e24\u4e2a\u5de5\u4f5c\u7684\u4ee3\u7801\u53d8\u66f4\u5185\u5bb9\u4ecd\u7136\u7ea0\u7f20\u5728\u4e86\u4e00\u8d77\uff0c\u6240\u6709\u7684\u529f\u80fd\u90fd\u662f\u8026\u5408\u5728\u4e00\u8d77\u7684\uff0c\u65e0\u6cd5\u72ec\u7acb\u53d1\u5e03\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f6716b148b248349d9c1a06700b4c91~tplv-k3u1fbpfcp-watermark.image?",alt:"5.jpg"})),(0,a.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u7279\u6027\u5206\u652f\u5141\u8bb8\u56e2\u961f\u5bf9\u5de5\u4f5c\u8fdb\u884c\u89e3\u8026\uff0c\u8ba9\u90e8\u5206\u529f\u80fd\u53ef\u4ee5\u72ec\u7acb\u53d1\u5e03\u3002\u7136\u800c\uff0c\u5f53\u7279\u6027\u5206\u652f\u505a\u4e86\u5927\u91cf\u7684\u4fee\u6539\u65f6\uff0c\u5b83\u4eec\u4f1a\u5e26\u6765\u5927\u91cf\u5408\u5e76\u51b2\u7a81\u7684\u98ce\u9669\u3002\u53ea\u6709\u5728\u5176\u4ed6\u5e76\u884c\u5de5\u4f5c\u5df2\u7ecf\u5b8c\u6210\u5e76\u5408\u5165\u7684\u60c5\u51b5\u4e0b\uff0c\u4ece\u4e3b\u5e72\u5206\u652f\u62c9\u53d6\u4ee3\u7801\u5408\u5165\u81ea\u5df1\u7684\u7279\u6027\u5206\u652f\u624d\u4f1a\u6709\u5e2e\u52a9\uff0c\u800c\u5206\u652f\u4e4b\u95f4\u7684\u4ea4\u53c9\u5408\u5e76\u4e0e\u5728\u5171\u4eab\u4e3b\u5e72\u5206\u652f\u4e00\u6837\uff0c\u90fd\u4f1a\u5c06\u591a\u4e2a\u7279\u6027\u8026\u5408\u5728\u4e00\u8d77\u3002"),(0,a.kt)("h1",{id:"\u56db\u7279\u6027\u5f00\u5173"},"\u56db\u3001\u7279\u6027\u5f00\u5173"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u56e2\u961f\u60f3\u907f\u514d\u7279\u6027\u5206\u652f\u5e26\u6765\u7684\u5408\u5e76\u51b2\u7a81\u98ce\u9669\uff0c\u4ed6\u4eec\u6709\u4ec0\u4e48\u9009\u62e9\u5462\uff1f\u4ed6\u4eec\u53ef\u4ee5\u56de\u5230\u5728\u4e3b\u5e72\u4e0a\u9891\u7e41\u96c6\u6210\u53d8\u66f4\u7684\u65b9\u5f0f\uff0c\u4f46\u6211\u4eec\u8bf4\u8fc7\u8fd9\u6837\u505a\u7684\u4e00\u4e2a\u4e3b\u8981\u95ee\u9898\u662f\u4ee5\u524d\u76f8\u4e92\u72ec\u7acb\u7684\u5f00\u53d1\u5de5\u4f5c\u73b0\u5728\u88ab\u8026\u5408\u5728\u4e00\u8d77\uff0c\u4e0d\u80fd\u72ec\u7acb\u53d1\u5e03\u3002"),(0,a.kt)("p",null,"\u8fd9\u65f6\uff0c\u4e00\u79cd\u53eb\u505a\u7279\u6027\u5f00\u5173\uff08\u53c8\u79f0\u7279\u6027\u6807\u8bc6\u3001\u6bd4\u7279\u6216\u7ffb\u8f6c\u5668\uff09\u7684\u6280\u672f\u5c31\u53ef\u4ee5\u5e2e\u4e0a\u5fd9\u4e86** ",(0,a.kt)("strong",{parentName:"p"},"\u7279\u6027\u5f00\u5173\u901a\u8fc7\u5c06\u8fdb\u884c\u4e2d\u7684\u4ee3\u7801\u7f6e\u4e8e\u4e00\u4e2a")," ",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6807\u5fd7\u201d\u6216\u201c\u5f00\u5173\u201d")," ",(0,a.kt)("strong",{parentName:"p"},"\u4e4b\u540e\u6765\u9694\u79bb\u4ed6\u4eec\u7684\u5f71\u54cd\u3002\u5de5\u4f5c\u4e2d\u7684\u4ee3\u7801\u53ea\u6709\u5728\u6807\u5fd7\u88ab\u6253\u5f00\u65f6\u624d\u4f1a\u88ab\u6267\u884c\u3002\u5426\u5219\uff0c\u5b83\u5c06\u4f5c\u4e3a")," ",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6f5c\u4f0f\u4ee3\u7801\u201d")," **\u5b58\u5728\u4e8e\u4ee3\u7801\u5e93\u4e2d\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u57fa\u672c\u7279\u6027\u5f00\u5173\u7684\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if( featureFlags.isOn(\u201cmy-new-feature\u201d) ){  \nshowNewFeatureInUI();  \n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'\u9664\u975e\xa0 my-new-feature \u5f00\u5173\u88ab\u914d\u7f6e\u4e3a "on"\uff0c\u5426\u5219\u65b0\u529f\u80fd\u5c06\u4e0d\u4f1a\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u7528\u6237\u754c\u9762\u4e2d\u5c55\u73b0\u51fa\u6765\u3002')," \u8fd9\u610f\u5473\u7740\uff0c\u5373\u4f7f\u5b9e\u73b0\u65b0\u529f\u80fd\u7684\u4ee3\u7801\u5b8c\u5168\u662f\u9519\u8bef\u7684\uff0c\u53ea\u8981\u8be5\u529f\u80fd\u7684\u6807\u5fd7\u662f\u5173\u95ed\u7684\uff0c\u5e94\u7528\u7a0b\u5e8f\u4e5f\u53ef\u4ee5\u6b63\u5e38\u53d1\u5e03\u3002\u901a\u8fc7\u4f7f\u7528\u7279\u6027\u5f00\u5173\uff0c\u53ef\u4ee5\u5c06\u6b63\u5728\u8fdb\u884c\u4e2d\u7684\u4ee3\u7801\u63a8\u9001\u5230\u5171\u4eab\u5206\u652f\uff0c\u800c\u4e0d\u59a8\u788d\u8be5\u5206\u652f\u7684\u53d1\u5e03\u3002\u5982\u679c Bob \u7684\u529f\u80fd\u5df2\u7ecf\u5b8c\u6210\u4e86\u4e00\u534a\uff0c\u800c Alice \u60f3\u53d1\u5e03\u5979\u7684\u529f\u80fd\uff0c\u56e2\u961f\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u53d1\u5e03\u7248\u672c\uff0c\u628a Alice \u5b8c\u6210\u7684\u529f\u80fd\u6253\u5f00\uff0c\u800c\u628a Bob \u672a\u5b8c\u6210\u7684\u529f\u80fd\u5173\u95ed\u3002\u6211\u4eec\u65e2\u5f97\u5230\u4e86\u5c06\u5f00\u53d1\u5de5\u4f5c\u6301\u7eed\u96c6\u6210\u7684\u597d\u5904\uff08\u51cf\u5c11\u4e86\u5408\u5e76\u51b2\u7a81\u7684\u98ce\u9669\uff09\uff0c\u53c8\u786e\u4fdd\u8fd9\u4e9b\u5de5\u4f5c\u7684\u53d1\u5e03\u662f\u89e3\u8026\u7684\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u6280\u672f\u5e76\u4e0d\u662f\u4ec0\u4e48\u65b0\u6280\u672f\u3002\u5b83\u662f trunk based \u7684\u5f00\u53d1\u6280\u672f\u4e2d\u7684\u4e00\u90e8\u5206\uff08\u4f60\u53ef\u4ee5\u77e5\u9053\u8fd9\u4e2a\u6280\u672f\u4e0d\u662f\u65b0\u7684\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u540d\u5b57\u4f7f\u7528\u4e86 trunk \u800c\u4e0d\u662f mastermoniker\uff0c\u540e\u8005\u5728\u4eca\u5929\u7531\u4e8e git \u7684\u4e3b\u5bfc\u5730\u4f4d\u800c\u66f4\u52a0\u666e\u904d\uff09\u3002Flickr\u3001Etsy\u3001Github \u548c Facebook \u662f\u8fd9\u79cd\u6280\u672f\u7684\u4e00\u4e9b\u6bd4\u8f83\u77e5\u540d\u7684\u652f\u6301\u8005\u3002\u6b63\u662f\u7279\u6027\u5f00\u5173\u7684\u4f7f\u7528\uff0c\u4f7f\u5f97 Facebook \u53ef\u4ee5\u505a\u5230 feacebook.com \u7f51\u7ad9\u57fa\u4e8e\u4e3b\u5e72\u6bcf\u5929\u53d1\u5e03\u4e24\u6b21\u3002"),(0,a.kt)("h1",{id:"\u4e94\u7279\u6027\u5f00\u5173\u7684\u7f3a\u70b9"},"\u4e94\u3001\u7279\u6027\u5f00\u5173\u7684\u7f3a\u70b9"),(0,a.kt)("p",null,"\u4e0e\u5230\u76ee\u524d\u4e3a\u6b62\u8ba8\u8bba\u7684\u5176\u4ed6\u65b9\u6cd5\u4e00\u6837\uff0c\u7279\u6027\u5f00\u5173\u4e5f\u6709\u5176\u7f3a\u70b9\u3002\u5b83\u4eec\u5728\u4ee3\u7801\u5e93\u4e2d\u5f15\u5165\u4e86\u76f8\u5f53\u591a\u7684\u566a\u97f3\uff0c\u56e0\u4e3a\u6211\u4eec\u73b0\u5728\u9700\u8981\u4e3a\u4efb\u4f55\u5f00\u53d1\u4e2d\u7684\u7279\u6027\u663e\u5f0f\u7684\u5b9e\u73b0\u4e00\u4e2a\u5206\u652f\u903b\u8f91\u3002\u8fd9\u79cd\u566a\u97f3\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u4f1a\u4ea7\u751f\u4e00\u4e9b\u4ee3\u7801\u5f02\u5473\uff0c\u9664\u975e\u65f6\u523b\u7559\u610f\u5c06\u4e0d\u518d\u9700\u8981\u7684\u7279\u6027\u5f00\u5173\u79fb\u9664\u3002\u6d4b\u8bd5\u4eba\u5458\u53ef\u80fd\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\u6765\u9002\u5e94\u5e26\u7279\u6027\u5f00\u5173\u7684\u5e94\u7528\u7a0b\u5e8f\u2014\u2014\u5c06\u672a\u5b8c\u6210\u7684\u3001\u672a\u7ecf\u6d4b\u8bd5\u7684\u4ee3\u7801\u53d1\u5e03\u5230\u5e94\u7528\u5546\u5e97\u7684\u60f3\u6cd5\u9700\u8981\u65f6\u95f4\u53bb\u63a5\u53d7\u3002\u5982\u679c\u5f00\u5173\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u8fdc\u7a0b\u63a7\u5236\uff0c\u90a3\u4e48\u56e2\u961f\u9700\u8981\u660e\u767d\uff0c\u65b0\u7684\u5f00\u5173\u914d\u7f6e\u72b6\u6001\u5fc5\u987b\u7ecf\u8fc7\u6d4b\u8bd5\u624d\u80fd\u5728\u7528\u6237\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0a\u751f\u6548\u3002 "),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u67d0\u4e9b\u7c7b\u578b\u7684\u6539\u52a8\u96be\u4ee5\u901a\u8fc7\u7279\u6027\u5f00\u5173\u6765\u4fdd\u62a4\u2014\u2014\u4f8b\u5982\u6d89\u53ca\u5927\u91cf\u6587\u4ef6\u53d8\u5316\u7684\u5c0f\u6539\u52a8\u5c31\u662f\u4e00\u4e2a\u6311\u6218\u3002\u4ee4\u4eba\u6b23\u6170\u7684\u662f\uff0c\u4f7f\u7528\u7279\u6027\u5f00\u5173\u5e76\u4e0d\u662f\u4e00\u4e2a\u975e\u9ed1\u5373\u767d\u7684\u65b9\u6848\uff1b\u7279\u6027\u5206\u652f\u4ecd\u7136\u53ef\u4ee5\u7528\u6765\u5904\u7406\u90a3\u4e9b\u4e0d\u9002\u4e8e\u4f7f\u7528\u7279\u6027\u5f00\u5173\u7684\u7e41\u7410\u53d8\u66f4\u3002"),(0,a.kt)("h1",{id:"\u516d\u5408\u7406\u4f7f\u7528\u7279\u6027\u5f00\u5173"},"\u516d\u3001\u5408\u7406\u4f7f\u7528\u7279\u6027\u5f00\u5173"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u56e2\u961f\u5f00\u59cb\u91c7\u7528\u7279\u6027\u5f00\u5173\u65f6\uff0c\u901a\u5e38\u4f1a\u9047\u5230\u4e0a\u9762\u63d0\u5230\u7684\u4e00\u4e9b\u6311\u6218\uff0c\u5e76\u6700\u7ec8\u627e\u51fa\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u5728\u4ee3\u7801\u5e93\u4e2d\u6210\u529f\u4f7f\u7528\u7279\u6027\u5f00\u5173\u7684\u6280\u5de7\u3002"),(0,a.kt)("h4",{id:"1\u5f00\u5173\u8981\u6709\u8fc7\u671f\u65f6\u95f4"},"1\u3001\u5f00\u5173\u8981\u6709\u8fc7\u671f\u65f6\u95f4"),(0,a.kt)("p",null,'\u5f88\u591a\u56e2\u961f\u5728\u521a\u5f00\u59cb\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\u65f6\uff0c\u90fd\u4f1a\u6709\u4e9b\u6025\u529f\u8fd1\u5229\u3002\u4ed6\u4eec\u503e\u5411\u4e8e\u5f15\u5165\u5927\u91cf\u7684\u5f00\u5173\uff0c\u5374\u4e0d\u60f3\u82b1\u65f6\u95f4\u53bb\u6e05\u9664\u90a3\u4e9b\u4e0d\u518d\u9700\u8981\u63a7\u5236\u7684\u5f00\u5173\u3002\u8bf7\u786e\u4fdd\u82b1\u65f6\u95f4\u6e05\u7406\u8fc7\u671f\u7684\u5f00\u5173--\u5b83\u4eec\u62d6\u7d2f\u4f60\u7684\u4ee3\u7801\u8bbe\u8ba1\u5e76\u5e26\u6765\u56f0\u60d1\u3002\u4e00\u4e9b\u56e2\u961f\u91c7\u53d6\u4e86\u76f8\u5f53\u79ef\u6781\u7684\u65b9\u6cd5\u6765\u786e\u4fdd\u65e7\u5f00\u5173\u5f97\u5230\u6e05\u7406\uff0c\u6bd4\u5982\u5728\u521b\u5efa\u5f00\u5173\u65f6\u8bbe\u7f6e "\u5b9a\u65f6\u70b8\u5f39"\uff0c\u6216\u8005\u5728\u4e00\u5b9a\u65f6\u95f4\u540e\u4ecd\u5728\u4f7f\u7528\u65f6\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u3002\u5176\u4ed6\u6280\u672f\u5305\u62ec\u5728\u521b\u5efa\u5f00\u5173\u65f6\u5c31\u5728\u56e2\u961f\u4efb\u52a1\u5217\u8868\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u5bf9\u5e94\u7684\u6e05\u9664\u4efb\u52a1\u3002'),(0,a.kt)("h4",{id:"2\u5f00\u5173\u4e0d\u662f\u94f6\u5f39"},"2\u3001\u5f00\u5173\u4e0d\u662f\u300e\u94f6\u5f39\u300f"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a\u65b0\u7684\u4efb\u52a1\u4e2d\u5e76\u4e0d\u603b\u662f\u53ef\u4ee5\u4f7f\u7528\u7279\u6027\u5f00\u5173\u3002\u7279\u6027\u5f00\u5173\u66f4\u9002\u5408\u4e8e\u65b0\u529f\u80fd\u6216\u8005\u66ff\u4ee3\u529f\u80fd\u7684\u5f00\u53d1\uff0c\u5728\u8fd9\u4e9b\u529f\u80fd\u7684\u5165\u53e3\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u5355\u72ec\u7684\u4f4d\u7f6e\u8fdb\u884c\u63a7\u5236\uff0c\u901a\u5e38\u901a\u8fc7\u53ef\u9690\u85cf\u7684\u6309\u94ae\u6216\u8005\u901a\u8fc7UI\u754c\u9762\u64cd\u4f5c\u89e6\u53d1\u3002\u800c\u53e6\u4e00\u4e9b\u5de5\u4f5c\uff0c\u4f8b\u5982\u91cd\u6784\uff0c\u5219\u5f88\u96be\u901a\u8fc7\u4e00\u4e2a\u5f00\u5173\u6765\u5305\u88f9\u3002\u5bf9\u4e8e\u8fd9\u79cd\u60c5\u51b5\uff0c\u9700\u8981\u8003\u8651\u4f7f\u7528\u7279\u6027\u5206\u652f\uff0c\u7406\u60f3\u60c5\u51b5\u4e0b\u6700\u597d\u62c6\u89e3\u4e3a\u53ef\u4ee5\u589e\u91cf\u5f00\u53d1\u7684\u4e00\u7cfb\u5217\u5b50\u4efb\u52a1\u5206\u652f\u800c\u4e0d\u8981\u4f7f\u7528\u4e00\u4e2a\u957f\u671f\u7684\u5206\u652f\uff0c\u4ee5\u51cf\u5c11\u5927\u91cf\u5408\u5e76\u4ee3\u7801\u5e26\u6765\u7684\u51b2\u7a81\u95ee\u9898\u3002"),(0,a.kt)("h1",{id:"\u4e03\u603b\u7ed3"},"\u4e03\u3001\u603b\u7ed3"),(0,a.kt)("p",null,'\u7279\u6027\u5f00\u5173\u548c\u7279\u6027\u5206\u652f\u90fd\u662f\u89e3\u8026\u5e76\u884c\u4ee3\u7801\u53d8\u66f4\u7684\u65b9\u6cd5\uff0c\u5141\u8bb8\u56e2\u961f\u5728\u53d1\u5e03\u53d8\u66f4\u65f6\u51cf\u5c11\u534f\u8c03\u5f00\u9500\u3002\u7279\u6027\u5206\u652f\u5f88\u5bb9\u6613\u4e0a\u624b\uff0c\u4f46\u4f1a\u5bfc\u81f4\u75db\u82e6\u7684\u5408\u5e76\u51b2\u7a81\u3002\u8fd9\u79cd\u5bf9\u51b2\u7a81\u7684\u6050\u60e7\u5f80\u5f80\u4f1a\u6291\u5236\u5bf9\u4ee3\u7801\u5e93\u8fdb\u884c\u589e\u91cf\u6539\u8fdb\u7684\u884c\u4e3a\uff0c\u5e76\u53ef\u80fd\u5bfc\u81f4\u4ee3\u7801\u5e93\u7684\u67d0\u4e9b\u533a\u57df\u6700\u7ec8\u6210\u4e3a "\u7981\u533a"\u3002',(0,a.kt)("strong",{parentName:"p"},"\u7279\u6027\u5f00\u5173\u5141\u8bb8\u56e2\u961f\u5b9e\u8df5\u771f\u6b63\u7684\u6301\u7eed\u96c6\u6210\uff0c\u5e76\u5c06\u4ee3\u7801\u53d8\u66f4\u4e0e\u7279\u6027\u53d1\u5e03\u5b8c\u5168\u8131\u94a9\uff0c\u4f46\u4e5f\u5fc5\u987b\u4ed8\u51fa\u5b9e\u73b0\u6bcf\u4e2a\u5f00\u5173\u7684\u6210\u672c\u4f5c\u4e3a\u4ee3\u4ef7\u3002")),(0,a.kt)("p",null,"\u7279\u6027\u5f00\u5173\u4e0d\u662f\u94f6\u5f39\u4e5f\u4e0d\u603b\u662f\u6b63\u786e\u7684\u9009\u62e9\uff0c\u4f46\u5bf9\u4e8e\u7814\u53d1\u56e2\u961f\u4e0a\u624b\u5f88\u7b80\u5355\uff0c\u4f60\u53ef\u4ee5\u4ece\u4e00\u4e2a\u7b80\u5355\u7684if/else\u8bed\u53e5\u5f00\u59cb\uff0c\u53bb\u63a2\u7d22\u7279\u6027\u5f00\u5173\u5e26\u6765\u7684\u4ef7\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u4f5c\u8005")),(0,a.kt)("p",null,"Pete Hodgson \u662f Rollout.io \u7684\u54a8\u8be2\u987e\u95ee\uff0c\u540c\u65f6\u4e5f\u662f\u4e00\u540d\u8f6f\u4ef6\u5de5\u7a0b\u5e08\u548c\u67b6\u6784\u5e08\u3002\u4e3b\u8981\u662f\u4e13\u6ce8\u4e8e\u901a\u8fc7\u6d4b\u8bd5\u81ea\u52a8\u5316\u3001\u7279\u6027\u5f00\u5173\u3001\u57fa\u4e8e\u4e3b\u5e72\u7684\u5f00\u53d1\u548c DevOps \u7b49\u5b9e\u8df5\u4ee5\u53ef\u6301\u7eed\u7684\u901f\u5ea6\u6301\u7eed\u4ea4\u4ed8\u8f6f\u4ef6\uff0c\u4ed6\u7684\u5ba2\u6237\u5305\u62ec\u65e7\u91d1\u5c71\u521d\u521b\u516c\u53f8\u5230\u8d22\u5bcc50\u5f3a\u7684\u4f01\u4e1a\uff0c\u540c\u65f6\u4e5f\u7ecf\u5e38\u62c5\u4efb\u64ad\u5ba2\u5c0f\u7ec4\u6210\u5458\uff0c\u662f\u7f8e\u56fd\u548c\u6b27\u6d32\u7684\u5b9a\u671f\u4f1a\u8bae\u53d1\u8a00\u4eba\uff0c\u4e5f\u662f\u4e00\u540d\u7279\u7ea6\u4f5c\u8005\u3002"),(0,a.kt)("p",null,"FeatureProbe \u662f\u4e00\u4e2a\u9ad8\u6548\u7684\u7279\u6027\u5f00\u5173\xa0 (Feature Flags)\xa0 \u7ba1\u7406\u670d\u52a1\uff0c\u5b83\u63d0\u4f9b\u4e86\u7070\u5ea6\u653e\u91cf\u3001AB\u5b9e\u9a8c\u3001\u5b9e\u65f6\u914d\u7f6e\u53d8\u66f4\u7b49\u9488\u5bf9\u529f\u80fd\u7c92\u5ea6\u7684\u4e00\u7cfb\u5217\u7ba1\u7406\u80fd\u529b\u3002\u76ee\u524d FeatureProbe \u4f7f\u7528 Apache 2.0 License \u534f\u8bae\u5df2\u7ecf\u5b8c\u5168\u5f00\u6e90, \u5f00\u6e90\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/FeatureProbe"},"https://github.com/FeatureProbe/FeatureProbe")))}b.isMDXComponent=!0}}]);