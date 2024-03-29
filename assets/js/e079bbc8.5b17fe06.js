"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[1143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},o="FeatureProbe  Architecture",c={unversionedId:"reference/structure",id:"reference/structure",title:"FeatureProbe  Architecture",description:"System Overview",source:"@site/docs/reference/structure.md",sourceDirName:"reference",slug:"/reference/structure",permalink:"/FeatureProbe/reference/structure",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/reference/structure.md",tags:[],version:"current",lastUpdatedAt:1673256672,formattedLastUpdatedAt:"Jan 9, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Reference Document",permalink:"/FeatureProbe/category/reference-document"},next:{title:"SDK Introduction",permalink:"/FeatureProbe/reference/sdk-introduction"}},s={},l=[{value:"Architecture Features",id:"architecture-features",level:2},{value:"Performance",id:"performance",level:3},{value:"Resilience",id:"resilience",level:3},{value:"Privacy",id:"privacy",level:3},{value:"Extensibility",id:"extensibility",level:3}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"featureprobe--architecture"},"FeatureProbe  Architecture"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"System Overview")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"featureprobe architecture",src:r(4681).Z,width:"3402",height:"1494"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FeatureProbe UI")," - Provides users with a visual UI interface for managing and publishing feature switches."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FeatureProbe API")," - Provides data management capabilities for the UI and external Open API services, designed to strictly adhere to ",(0,n.kt)("a",{parentName:"li",href:"https://www.redhat.com/zh/topics/api/what-is-a-rest-api"},"Restful specifications"),", and as a common API for feature management domain not only provides core data management capabilities for the UI, but you can also automate switch rule changes and publishing based on this API. ",(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/api-docs"},"View OpenAPI documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FeatureProbe Server")," - Provides a high-performance switch rule determination engine and second-level data distribution capabilities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FeatureProbe SDK")," - We provide SDKs for all major languages to obtain switch rule determination results, allowing you to quickly access FeatureProbe in your application to implement the corresponding feature switching capabilities.")),(0,n.kt)("h2",{id:"architecture-features"},"Architecture Features"),(0,n.kt)("h3",{id:"performance"},"Performance"),(0,n.kt)("p",null,"Since the SDK needs to be integrated into your application runtime environment, we have designed it to be highly fault-tolerant and high-performance. Even if FeatureProbe Server is not available, it will not affect the normal reading of the switch rules that are already in effect in your application, because we use multi-level caching and local memory-based rule logic calculations for the SDK on the Server side to support nanosecond-level fetching of switch decisions."),(0,n.kt)("h3",{id:"resilience"},"Resilience"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/FeatureProbe/tree/main/server"},"FeatureProbe Server ")," is implemented in Rust language and is naturally high-performance and highly reliable. As you can see in the figure below, the fast horizontal scaling allows you to easily handle large-scale traffic access. At the same time, we are already planning to further improve the performance of the Server by using Multiplexing + Publish & Subscribe mode, so that the switch rules can be issued and take effect in milliseconds after changes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"featureprobe server",src:r(546).Z,width:"1160",height:"747"})),(0,n.kt)("h3",{id:"privacy"},"Privacy"),(0,n.kt)("p",null,"The overall architecture also ensures privacy aspects since the switch execution happens only in the SDK run by the client. We do not collect or share any user data, which also allows us to confidently state that we are  ",(0,n.kt)("a",{parentName:"p",href:"https://gdpr-info.eu/"},"GDPR")," compliant."),(0,n.kt)("h3",{id:"extensibility"},"Extensibility"),(0,n.kt)("p",null,"We open up all of our OpenAPI so you can extend or customize your business based on it."))}p.isMDXComponent=!0},546:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/feature-probe-server-768644ea5041d1bed39d731d76b40b12.png"},4681:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/structure-2b13f61d8dc42e1068d11a9da791b01d.png"}}]);