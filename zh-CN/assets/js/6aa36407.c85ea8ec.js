"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=i(r),f=a,m=b["".concat(u,".").concat(f)]||b[f]||s[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={slug:"FeatureProbe \u964d\u7ea7\u670d\u52a1",title:"\u529f\u80fd\u7ba1\u7406\u7684\u5b9e\u8df5\u573a\u666f \u2014 \u8fd0\u7ef4\u670d\u52a1\u964d\u7ea7"},l=void 0,p={permalink:"/zh-CN/blog/FeatureProbe \u964d\u7ea7\u670d\u52a1",editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-blog/2022-11-23-featureprobe.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-11-23-featureprobe.md",title:"\u529f\u80fd\u7ba1\u7406\u7684\u5b9e\u8df5\u573a\u666f \u2014 \u8fd0\u7ef4\u670d\u52a1\u964d\u7ea7",description:"\u8fd0\u7ef4\u5f00\u5173(Ops Toggles)\u662f\u7279\u6027\u7ba1\u7406\uff08Feature Management\uff09\u7684\u6838\u5fc3\u5e94\u7528\u573a\u666f\u4e4b\u4e00\u3002\u8fd9\u7c7b\u5f00\u5173\u901a\u5e38\u4ece\u8fd0\u7ef4\u7684\u89d2\u5ea6\u7ba1\u63a7\u7cfb\u7edf\u529f\u80fd\uff0c\u6bd4\u5982\u5f53\u6211\u4eec\u4e0a\u7ebf\u7684\u65b0\u529f\u80fd\u51fa\u73b0\u95ee\u9898\u6216\u67d0\u4e2a\u4f9d\u8d56\u670d\u52a1\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u8fd0\u7ef4\u6216\u7814\u53d1\u4eba\u5458\u53ef\u4ee5\u7981\u7528\u529f\u80fd\u6216\u670d\u52a1\u964d\u7ea7\uff0c\u6765\u51cf\u5c11\u6545\u969c\u5bf9\u7cfb\u7edf\u6574\u4f53\u7684\u5f71\u54cd\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 FeatureProbe \u5b9e\u73b0\u624b\u52a8\u964d\u7ea7\u5f00\u5173\u548c\u81ea\u52a8\u964d\u7ea7\u5f00\u5173\u3002",date:"2022-11-23T00:00:00.000Z",formattedDate:"2022\u5e7411\u670823\u65e5",tags:[],readingTime:6.845,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"FeatureProbe \u964d\u7ea7\u670d\u52a1",title:"\u529f\u80fd\u7ba1\u7406\u7684\u5b9e\u8df5\u573a\u666f \u2014 \u8fd0\u7ef4\u670d\u52a1\u964d\u7ea7"},prevItem:{title:"\u957f\u8fde\u63a5\u5b9e\u8df5\u65b9\u6848\uff08\u4e0a\uff09",permalink:"/zh-CN/blog/FeatureProbe Longlink"},nextItem:{title:"\u529f\u80fd\u7ba1\u7406\uff08Feature management\uff09\u4e2d\u7684 Keystone \u6a21\u5f0f",permalink:"/zh-CN/blog/FeatureProbe Keystone"}},u={authorsImageUrls:[]},i=[{value:"\u4e00\u3001\u4ec0\u4e48\u662f\u964d\u7ea7\u5f00\u5173 \uff1f",id:"\u4e00\u4ec0\u4e48\u662f\u964d\u7ea7\u5f00\u5173-",level:4},{value:"\u4e8c\u3001\u5982\u4f55\u5b9e\u73b0\u624b\u52a8\u964d\u7ea7\u5f00\u5173\uff1f",id:"\u4e8c\u5982\u4f55\u5b9e\u73b0\u624b\u52a8\u964d\u7ea7\u5f00\u5173",level:4},{value:"\u4e09\u3001\u5982\u4f55\u5b9e\u73b0\u81ea\u52a8\u964d\u7ea7\u5f00\u5173\uff1f",id:"\u4e09\u5982\u4f55\u5b9e\u73b0\u81ea\u52a8\u964d\u7ea7\u5f00\u5173",level:4},{value:"1\u3001\u57fa\u4e8e\u89c4\u5219\u7684\u81ea\u52a8\u964d\u7ea7",id:"1\u57fa\u4e8e\u89c4\u5219\u7684\u81ea\u52a8\u964d\u7ea7",level:5},{value:"2\u3001\u57fa\u4e8e\u5916\u90e8\u89e6\u53d1\u7684\u81ea\u52a8\u964d\u7ea7",id:"2\u57fa\u4e8e\u5916\u90e8\u89e6\u53d1\u7684\u81ea\u52a8\u964d\u7ea7",level:5}],c={toc:i};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd0\u7ef4\u5f00\u5173(Ops Toggles)\u662f\u7279\u6027\u7ba1\u7406\uff08Feature Management\uff09\u7684\u6838\u5fc3\u5e94\u7528\u573a\u666f\u4e4b\u4e00\u3002\u8fd9\u7c7b\u5f00\u5173\u901a\u5e38\u4ece\u8fd0\u7ef4\u7684\u89d2\u5ea6\u7ba1\u63a7\u7cfb\u7edf\u529f\u80fd\uff0c\u6bd4\u5982\u5f53\u6211\u4eec\u4e0a\u7ebf\u7684\u65b0\u529f\u80fd\u51fa\u73b0\u95ee\u9898\u6216\u67d0\u4e2a\u4f9d\u8d56\u670d\u52a1\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u8fd0\u7ef4\u6216\u7814\u53d1\u4eba\u5458\u53ef\u4ee5\u7981\u7528\u529f\u80fd\u6216\u670d\u52a1\u964d\u7ea7\uff0c\u6765\u51cf\u5c11\u6545\u969c\u5bf9\u7cfb\u7edf\u6574\u4f53\u7684\u5f71\u54cd\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 FeatureProbe \u5b9e\u73b0\u624b\u52a8\u964d\u7ea7\u5f00\u5173\u548c\u81ea\u52a8\u964d\u7ea7\u5f00\u5173\u3002"),(0,a.kt)("h4",{id:"\u4e00\u4ec0\u4e48\u662f\u964d\u7ea7\u5f00\u5173-"},"\u4e00\u3001\u4ec0\u4e48\u662f\u964d\u7ea7\u5f00\u5173 \uff1f"),(0,a.kt)("p",null,"\u670d\u52a1\u964d\u7ea7\u4f5c\u4e3a\u670d\u52a1\u5bb9\u9519\u7684\u5e38\u7528\u65b9\u5f0f\u4e4b\u4e00\uff0c\u5176\u601d\u60f3\u662f\u727a\u7272\u7cfb\u7edf\u4e2d\u975e\u6838\u5fc3\u529f\u80fd\u6216\u670d\u52a1\u6765\u4fdd\u8bc1\u7cfb\u7edf\u6574\u4f53\u53ef\u7528\u6027\u3002\u5e38\u7528\u7684\u670d\u52a1\u964d\u7ea7\u65b9\u5f0f\u6709",(0,a.kt)("strong",{parentName:"p"},"\u7194\u65ad\u964d\u7ea7"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u9650\u6d41\u964d\u7ea7"),"\u4ee5\u53ca",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u5173\u964d\u7ea7"),"\uff0c\u8fd9\u4e9b\u4e0d\u540c\u7684\u964d\u7ea7\u65b9\u5f0f\u5206\u522b\u5e94\u5bf9\u4e0d\u540c\u7684\u6545\u969c\u573a\u666f\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u7194\u65ad\u964d\u7ea7\u548c\u9650\u6d41\u964d\u7ea7\u65b9\u5f0f\u4e0d\u5c55\u5f00\u4ecb\u7ecd\uff0c\u8fd9\u91cc\u7684\u5f00\u5173\u964d\u7ea7\u6307\u7684\u662f\u5728\u4ee3\u7801\u4e2d\u9884\u5148\u57cb\u8bbe\u4e00\u4e9b\u5f00\u5173\uff0c\u5e76\u5b9e\u65f6\u83b7\u53d6\u5f00\u5173\u7684\u72b6\u6001\u6765\u63a7\u5236\u670d\u52a1\u7684\u884c\u4e3a\u3002\u6bd4\u5982\uff0c\u5f00\u5173\u5f00\u542f\u7684\u65f6\u5019\u8bbf\u95ee\u4e0b\u6e38\u670d\u52a1\u83b7\u53d6\u5b9e\u65f6\u6570\u636e\uff0c\u5f53\u4f9d\u8d56\u7684\u4e0b\u6e38\u670d\u52a1\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u7acb\u5373\u5173\u95ed\u5f00\u5173\u6765\u8bbf\u95ee\u65e7\u7684\u7f13\u5b58\u6570\u636e\u6216\u9ed8\u8ba4\u503c\uff1b\u518d\u6bd4\u5982\uff0c\u5728\u7535\u5546\u5927\u4fc3\u671f\u95f4\u4e3a\u4e86\u4fdd\u969c\u6838\u5fc3\u670d\u52a1\u7528\u5230\u7684\u8ba1\u7b97\u8d44\u6e90\uff0c\u901a\u8fc7\u5f00\u5173\u6765\u5173\u95ed\u975e\u6838\u5fc3\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u5229\u7528\u5f00\u5173\u6267\u884c\u964d\u7ea7\u903b\u8f91\u7684\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-//",metastring:"\u83b7\u53d6\u964d\u7ea7\u5f00\u5173\u8fd4\u56de\u503c","\u83b7\u53d6\u964d\u7ea7\u5f00\u5173\u8fd4\u56de\u503c":!0},'degradeRpcService := fpClient.BoolValue("degrade_rpc_service", false)\nif degradeRpcService {\n  // \u6267\u884c\u964d\u7ea7\u903b\u8f91, \u5982\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u65e7\u6570\u636e} else {\n  // \u8c03\u7528\u6b63\u5e38\u903b\u8f91\uff0c\u5982\u4ece\u8fdc\u7a0b\u670d\u52a1\u83b7\u53d6\u5b9e\u65f6\u6570\u636e\n}\n')),(0,a.kt)("p",null,"\u5176\u4e2d  degrade_rpc_service \u5c31\u662f\u4e00\u4e2a\u5178\u578b\u7684\u964d\u7ea7\u5f00\u5173\u3002"),(0,a.kt)("h4",{id:"\u4e8c\u5982\u4f55\u5b9e\u73b0\u624b\u52a8\u964d\u7ea7\u5f00\u5173"},"\u4e8c\u3001\u5982\u4f55\u5b9e\u73b0\u624b\u52a8\u964d\u7ea7\u5f00\u5173\uff1f"),(0,a.kt)("p",null,"\u5b9e\u73b0\u964d\u7ea7\u5f00\u5173\u901a\u5e38\u4f1a\u8003\u8651\u4f7f\u7528\u914d\u7f6e\u4e2d\u5fc3\u3001Redis \u6216\u6570\u636e\u5e93\u7b49\u6765\u5b58\u50a8\u5f00\u5173\u503c\uff0c\u5e76\u7528\u5bf9\u5e94\u7684 client \u7aef\u83b7\u53d6\u5f00\u5173\u7ed3\u679c\u3002\u4f46\u8fd9\u4e9b\u901a\u7528\u5de5\u5177\u7684\u4f7f\u7528\u754c\u9762\u5bf9\u5f00\u5173\u573a\u666f\u7684\u7528\u6237\u6765\u8bf4\u5e76\u4e0d\u5341\u5206\u53cb\u597d\u3002FeatureProbe \u4f5c\u4e3a\u4e13\u95e8\u7684\u5f00\u5173\u7ba1\u7406\u670d\u52a1\uff0c\u4e0d\u4ec5\u63d0\u4f9b\u4e86 client \u5b9e\u65f6\u83b7\u53d6\u5f00\u5173\u72b6\u6001\u7684\u529f\u80fd\uff0c\u540c\u65f6\u8fd8\u80fd\u8ba9\u4f60\u5728\u7edf\u4e00\u7684\u5e73\u53f0\u4e0a\u53ef\u89c6\u5316\u7ba1\u7406\u5f00\u5173\u548c\u63a7\u5236\u5f00\u5173\u72b6\u6001\uff0c\u8ba9\u5f00\u5173\u63a7\u5236\u66f4\u52a0\u9ad8\u6548\u3001\u5b89\u5168\u3002"),(0,a.kt)("p",null,"\u964d\u7ea7\u5f00\u5173\u901a\u5e38\u662f\u4e00\u4e2a boolean \u7c7b\u578b\u7684\u5f00\u5173\uff0c\u5bf9\u5e94\u7684\u8fd4\u56de\uff08\u5206\u7ec4\uff09\u503c\u4e5f\u53ea\u6709\u4e24\u79cd\u60c5\u51b5\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://oscimg.oschina.net/oscnet/up-2c04d5d8c55c1f9f95b9a879391999c1a39.jpg",alt:null})),(0,a.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u53ef\u901a\u8fc7\u63a5\u5165 FeatureProbe SDK \u6765\u83b7\u53d6\u8be5\u964d\u7ea7\u5f00\u5173\u8fd4\u56de\u503c\uff0c\u4ee5 Java \u4ee3\u7801\u4e3a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-final",metastring:"FeatureProbe fpClient = new FeatureProbe(FEATURE_PROBE_SERVER_SDK_KEY, config);",FeatureProbe:!0,fpClient:!0,"":"",new:!0,"FeatureProbe(FEATURE_PROBE_SERVER_SDK_KEY,":!0,"config);":!0},'boolean isDegrade = fpClient.boolValue("degrade_rpc_service", new User(), false);\nif (isDegrade) {\n  // \u964d\u7ea7\u5904\u7406\u903b\u8f91\n  return;\n}\n')),(0,a.kt)("p",null,"\u5f53 RPC \u8c03\u7528\u7684\u670d\u52a1\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u53ea\u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u89c4\u5219\u4e2d\u7684\u8fd4\u56de\u503c\u4e3a\u201c\u964d\u7ea7\u201d\u5e76\u53d1\u5e03\uff0c\u5373\u53ef\u5b9e\u73b0\u5feb\u901f\u4eba\u5de5\u964d\u7ea7\u64cd\u4f5c\u3002"),(0,a.kt)("h4",{id:"\u4e09\u5982\u4f55\u5b9e\u73b0\u81ea\u52a8\u964d\u7ea7\u5f00\u5173"},"\u4e09\u3001\u5982\u4f55\u5b9e\u73b0\u81ea\u52a8\u964d\u7ea7\u5f00\u5173\uff1f"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5c3d\u53ef\u80fd\u63d0\u9ad8\u964d\u7ea7\u6548\u7387\uff0c\u67d0\u4e9b\u5f00\u5173\u964d\u7ea7\u573a\u666f\u4e0d\u5e0c\u671b\u9700\u8981\u4eba\u5de5\u5e72\u9884\u964d\u7ea7\u3002\u6bd4\u5982\u6211\u4eec\u5e0c\u671b\u5728 11\u670810\u53f7 23:59 \u65f6\u5bf9\u67d0\u4e9b\u670d\u52a1\u6267\u884c\u964d\u7ea7\u4ee5\u5e94\u5bf9\u7b2c\u4e8c\u5929\u7684\u5927\u4fc3\u6d3b\u52a8\uff1b\u5f53\u6211\u4eec\u76d1\u63a7\u7cfb\u7edf\u53d1\u73b0\u4e0b\u6e38\u670d\u52a1\u89e6\u53d1 P0 \u62a5\u8b66\u65f6\uff0c\u5e0c\u671b\u7acb\u5373\u6267\u884c\u964d\u7ea7\u7b49\u7b49\u3002\u8fd9\u4e9b\u81ea\u52a8\u964d\u7ea7\u573a\u666f\u90fd\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u4f7f\u7528 FeatureProbe \u5b9e\u73b0\u3002"),(0,a.kt)("h5",{id:"1\u57fa\u4e8e\u89c4\u5219\u7684\u81ea\u52a8\u964d\u7ea7"},"1\u3001\u57fa\u4e8e\u89c4\u5219\u7684\u81ea\u52a8\u964d\u7ea7"),(0,a.kt)("p",null,"FeatureProbe \u63d0\u4f9b\u4e86\u7075\u6d3b\u89c4\u5219\u914d\u7f6e\uff0c\u8ba9\u4f60\u5b9e\u73b0\u81ea\u52a8\u964d\u7ea7\u3002\u4f8b\u5982\u53cc\u5341\u4e00\u5927\u4fc3\u5f00\u59cb\u65f6\uff0c\u9700\u8981\u5173\u95ed\u9000\u6b3e\u670d\u52a1\uff0c\u4ee5\u6ee1\u8db3\u5927\u90e8\u5206\u6d88\u8d39\u8005\u5728\u5e73\u53f0\u4e0a\u83b7\u5f97\u7a33\u5b9a\u7684\u4ea4\u6613\u4f53\u9a8c\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u63d0\u524d\u914d\u7f6e\u597d\u964d\u7ea7\u89c4\u5219\u540e\uff0c\u5c06\u5728 11.10 23:59:59 \u65f6\u81ea\u52a8\u6267\u884c\u5bf9\u670d\u52a1\u964d\u7ea7\u800c\u4e0d\u9700\u8981\u4eba\u5de5\u5e72\u9884\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://oscimg.oschina.net/oscnet/up-a86813b743b791c7b1cf380682b41852393.jpg",alt:null})),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u8ff0\u964d\u7ea7\u89c4\u5219\u5728\u63a5\u5165 SDK \u7684\u4ee3\u7801\u4e5f\u65e0\u987b\u7279\u6b8a\u5904\u7406\uff0cFeatureProbe SDK \u5c06\u81ea\u52a8\u6839\u636e\u670d\u52a1\u5668\u65f6\u95f4\u6765\u51b3\u5b9a\u662f\u5426\u964d\u7ea7\u3002"),(0,a.kt)("h5",{id:"2\u57fa\u4e8e\u5916\u90e8\u89e6\u53d1\u7684\u81ea\u52a8\u964d\u7ea7"},"2\u3001\u57fa\u4e8e\u5916\u90e8\u89e6\u53d1\u7684\u81ea\u52a8\u964d\u7ea7"),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u81ea\u52a8\u964d\u7ea7\u573a\u666f\u662f\u7531\u5916\u90e8\u7cfb\u7edf\u89e6\u53d1\uff0c\u5982\u76d1\u63a7\u7cfb\u7edf\u3002\u8be5\u573a\u666f\u4e0b\u53ef\u4ee5\u4f7f\u7528 FeatureProbe OpenAPI \u6765\u81ea\u52a8\u53d8\u66f4\u5f00\u5173\u72b6\u6001\u3002\u5982\u4e0b\u811a\u672c\u6240\u793a\uff0c\u901a\u8fc7 OpenAPI \u4fee\u6539\u5f00\u5173\u9ed8\u8ba4\u8fd4\u56de\u503c\u5b9e\u73b0\u81ea\u52a8\u964d\u7ea7\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl \'https://featureprobe.io/api/projects/{PROJECT KEY}/environments/{ENV KEY}/toggles/{TOGGKE KEY}/targeting\' \\\n  -X \'PATCH\' \\\n   -H \'Authorization: {YOU API KEY}\' -H \'Content-Type: application/json\' --data-raw \'{\n    "comment":"\u6267\u884c\u964d\u7ea7",\n    "content":{\n        "defaultServe":{\n            "select": 0\n        },\n        "variations":[\n            {\n                "value":"true",\n                "name":"\u964d\u7ea7",\n            },\n            {\n                "value":"false",\n                "name":"\u4e0d\u964d\u7ea7",\n            }\n        ]\n    }\n}\'\n')),(0,a.kt)("p",null,"\u66f4\u591a\u5173\u4e8e OpenAPI \u4f7f\u7528\u4ecb\u7ecd\u53ef\u4ee5\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://featureprobe.io/api-docs",title:"\u6587\u6863"},"\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4ec0\u4e48\u662f\u964d\u7ea7\u5f00\u5173\uff0c\u540c\u65f6\u5206\u522b\u6f14\u793a\u4e86\u624b\u52a8\u548c\u81ea\u52a8\u5f00\u5173\u964d\u7ea7\u4f7f\u7528\u65b9\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7 FeatureProbe \u7684\u89c4\u5219\u914d\u7f6e\u5b9e\u73b0\u81ea\u52a8\u964d\u7ea7\u4ee5\u53ca\u5982\u4f55\u7531\u5916\u90e8\u89e6\u53d1 FeatureProbe \u7684 OpenAPI \u6765\u5b9e\u73b0\u81ea\u52a8\u964d\u7ea7\u3002\u5173\u4e8e\u66f4\u591a\u5f00\u5173\u964d\u7ea7\u7684\u4f7f\u7528\u573a\u666f\u6b22\u8fce\u6765\u548c\u6211\u4eec\u4e00\u8d77\u5171\u540c\u63a2\u8ba8\u548c\u5206\u4eab\u3002"),(0,a.kt)("p",null,"\u76ee\u524d FeatureProbe \u4f7f\u7528 Apache 2.0 License \u534f\u8bae\u5df2\u7ecf\u5b8c\u5168\u5f00\u6e90\u3002\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe"},"GitHub ")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/featureprobe",title:"Gitee"},"Gitee")," \u4e0a\u83b7\u53d6\u5230\u6240\u6709\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u4e0e\u6b64\u540c\u65f6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u65e0\u9700\u90e8\u7f72\u7684\u5728\u7ebf",(0,a.kt)("a",{parentName:"p",href:"https://featureprobe.io/",title:"\u8bd5\u7528\u73af\u5883"},"\u8bd5\u7528\u73af\u5883"),"\u548c\u4e00\u4e2a\u4ec5\u97005\u5206\u949f\u5373\u53ef\u4f53\u9a8c\u7684",(0,a.kt)("a",{parentName:"p",href:"https://featureprobe.io/demo/",title:"\u793a\u4f8b\u9879\u76ee"},"\u793a\u4f8b\u9879\u76ee")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u529f\u80fd\uff08\u7279\u6027\uff09\u7ba1\u7406\u611f\u5174\u8da3\uff0c\u6b22\u8fce\u52a0\u5165\u5230\u6211\u4eec\u7684\u5f00\u6e90\u9879\u76ee\u4e2d\u6765\uff0c\u5171\u540c\u63a8\u52a8\u8f6f\u4ef6\u5f00\u53d1\u884c\u4e1a\u7684\u6548\u80fd\u3002"))}s.isMDXComponent=!0}}]);