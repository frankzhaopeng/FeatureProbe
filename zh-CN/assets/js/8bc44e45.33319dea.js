"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[6262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="\u642d\u5efa\u81ea\u5df1\u7684\u73af\u5883",l={unversionedId:"tutorials/setup_own_env",id:"tutorials/setup_own_env",title:"\u642d\u5efa\u81ea\u5df1\u7684\u73af\u5883",description:"\u6211\u4eec\u5c06\u5e26\u4f60\u5728\u4f60\u81ea\u5df1\u7684\u670d\u52a1\u5668\u8d44\u6e90\u4e0a\u642d\u5efaFeatureProbe\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u62e5\u6709\u4e00\u4e2a\u81ea\u5df1\u79c1\u6709\u7684\u73af\u5883\u6765\u4f53\u9a8cFeatureProbe\u7684\u529f\u80fd\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u79c1\u6709\u73af\u5883\u76f4\u63a5\u7ba1\u7406\u60a8\u7684\u7ebf\u4e0a\u670d\u52a1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/setup_own_env.md",sourceDirName:"tutorials",slug:"/tutorials/setup_own_env",permalink:"/FeatureProbe/zh-CN/tutorials/setup_own_env",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/setup_own_env.md",tags:[],version:"current",lastUpdatedAt:1673491868,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"\u64cd\u4f5c\u5f00\u5173",permalink:"/FeatureProbe/zh-CN/tutorials/try_demo"},next:{title:"\u6309\u767e\u5206\u6bd4\u7070\u5ea6\u653e\u91cf",permalink:"/FeatureProbe/zh-CN/tutorials/rollout_tutorial/"}},p={},u=[{value:"\u5de5\u5177\u73af\u5883\u51c6\u5907",id:"\u5de5\u5177\u73af\u5883\u51c6\u5907",level:2},{value:"\u5b89\u88c5\u542f\u52a8FeatureProbe",id:"\u5b89\u88c5\u542f\u52a8featureprobe",level:2},{value:"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",id:"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",level:2}],c={toc:u};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u642d\u5efa\u81ea\u5df1\u7684\u73af\u5883"},"\u642d\u5efa\u81ea\u5df1\u7684\u73af\u5883"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u5e26\u4f60\u5728\u4f60\u81ea\u5df1\u7684\u670d\u52a1\u5668\u8d44\u6e90\u4e0a\u642d\u5efaFeatureProbe\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u62e5\u6709\u4e00\u4e2a\u81ea\u5df1\u79c1\u6709\u7684\u73af\u5883\u6765\u4f53\u9a8cFeatureProbe\u7684\u529f\u80fd\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u79c1\u6709\u73af\u5883\u76f4\u63a5\u7ba1\u7406\u60a8\u7684\u7ebf\u4e0a\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6559\u7a0b\u5047\u8bbe\u60a8\u4e86\u89e3\u6700\u57fa\u672cgit\u64cd\u4f5c\uff0c\u4ee5\u53ca\u4e86\u89e3\u57fa\u672c\u7684docker\u539f\u7406\uff0c\u5e76\u4e14\u62e5\u6709\u81ea\u5df1\u7684\u673a\u5668\u8d44\u6e90\uff0c\u9002\u5408\u6709\u4e00\u5b9a\u6280\u672f\u80cc\u666f\u7684\u7528\u6237\u5b66\u4e60\u3002"),(0,a.kt)("h2",{id:"\u5de5\u5177\u73af\u5883\u51c6\u5907"},"\u5de5\u5177\u73af\u5883\u51c6\u5907"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u786e\u4fdd\u60a8\u7684\u670d\u52a1\u5668\u8fde\u63a5\u4e86\u7f51\u7edc\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5",(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")," "),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")," "),(0,a.kt)("li",{parentName:"ol"},"\u56fd\u5185\u7f51\u7edc\u8bbf\u95eedocker hub\u4f1a\u6bd4\u8f83\u6162\uff0c\u9700\u8981\u6dfb\u52a0",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/featureprobe/FeatureProbe/blob/main/DOCKER_HUB.md"},"\u56fd\u5185\u955c\u50cf"))),(0,a.kt)("h2",{id:"\u5b89\u88c5\u542f\u52a8featureprobe"},"\u5b89\u88c5\u542f\u52a8FeatureProbe"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528git\u4e0b\u8f7d\u6700\u65b0\u7248\u672cFeatureProbe\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/featureprobe/FeatureProbe.git\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528docker composer\u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd FeatureProbe\ndocker compose up\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u955c\u50cf\u62c9\u53d6\uff0c\u89c6\u7f51\u7edc\u72b6\u51b5\uff0c\u53ef\u80fd\u9700\u89815-10min"),(0,a.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u955c\u50cf\u542f\u52a8\uff0c\u5927\u7ea61min\u5de6\u53f3\uff0c\u542f\u52a8\u6210\u529f\u540e\u547d\u4ee4\u884c\u53ef\u4ee5\u770b\u5230\u65e5\u5fd7\u6eda\u52a8\u3002\u4e5f\u53ef\u5728docker GUI\u5de5\u5177\u4e2d\u67e5\u770b\u955c\u50cf\u542f\u52a8\u72b6\u51b5\uff0c\u5168\u90e8\u7eff\u8272\u5373\u4e3a\u542f\u52a8\u6210\u529f\uff1a\n",(0,a.kt)("img",{alt:"docker startup",src:r(5132).Z,width:"1375",height:"626"}))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"FeatureProbe\u5305\u542b5\u4e2a\u72ec\u7acb\u955c\u50cf\uff0c\u9700\u8981\u8fd95\u4e2a\u955c\u50cf\u5168\u90e8\u542f\u52a8\u6210\u529f\u540e\u624d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002\u5982\u67d0\u4e2a\u672a\u542f\u52a8\u6210\u529f\u53ef\u4ee5\u5728docker GUI\u4e2d\u5355\u72ec\u91cd\u542f\u672a\u6210\u529f\u7684\u955c\u50cf\u3002")),(0,a.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"),(0,a.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4009"},"http://localhost:4009")," \uff0c\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u767b\u5f55\u9875\u9762\uff1a\n",(0,a.kt)("img",{alt:"login",src:r(157).Z,width:"1039",height:"660"})),(0,a.kt)("p",null,"\u4f7f\u7528\u9ed8\u8ba4\u5e10\u53f7\u767b\u5f55\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"username"),": admin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password"),": Pass1234")),(0,a.kt)("p",null,"\u767b\u5f55\u540e\u5373\u53ef\u770b\u52304\u4e2a\u5185\u7f6e\u5f00\u5173\uff0c\u5e76\u5f00\u59cb\u8bd5\u7528\u4e86\u3002\n",(0,a.kt)("img",{alt:"toggle list",src:r(8876).Z,width:"1532",height:"627"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"4\u4e2a\u5185\u7f6e\u5f00\u5173\u4e3a\u4e86\u7528\u6237\u53c2\u8003\u5404\u79cd\u5178\u578b\u7684\u5f00\u5173\u914d\u7f6e\uff0c\u7528\u6237\u53ef\u6839\u636e\u81ea\u5df1\u9700\u8981\u9009\u62e9\u4fdd\u7559\u6216\u5220\u9664\uff0c\u4e0d\u5f71\u54cd\u5e73\u53f0\u4f7f\u7528")))}s.isMDXComponent=!0},157:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docker_login-51acc538fede576f3af935365fea4d19.png"},5132:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docker_startup-23514c4644da6512f1843256c513fbe6.png"},8876:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docker_toggle_list_cn-0aa0c1d7b77a76c6bd25f566d32f9c58.png"}}]);