"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[9234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(7462),n=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:a,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var h=a(2389);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==o&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",f,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(_,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},8461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),i=a(5162);const o={sidebar_position:4},s="\u7ed9\u4e0d\u540c\u7528\u6237\u5c55\u793a\u4e0d\u540c\u4fe1\u606f",u={unversionedId:"tutorials/backend_custom_attribute",id:"tutorials/backend_custom_attribute",title:"\u7ed9\u4e0d\u540c\u7528\u6237\u5c55\u793a\u4e0d\u540c\u4fe1\u606f",description:"\u6211\u4eec\u5c06\u5e26\u9886\u4f60\u4f7f\u7528FeatureProbe\u7684\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u6309\u7528\u6237\u7279\u6027\u63a7\u5236\u7684\u5f00\u5173\u3002\u7136\u540e\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u540e\u7aef\u7a0b\u5e8f\uff0c\u9a8c\u8bc1\u540e\u7aef\u7a0b\u5e8f\u62ff\u4e0d\u540c\u7684\u7528\u6237\u4fe1\u606f\u8bf7\u6c42FeatureProbe SDK\uff0c\u4f1a\u62ff\u5230\u4e0d\u540c\u7684\u7ed3\u679c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/backend_custom_attribute.md",sourceDirName:"tutorials",slug:"/tutorials/backend_custom_attribute",permalink:"/FeatureProbe/zh-CN/tutorials/backend_custom_attribute",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/backend_custom_attribute.md",tags:[],version:"current",lastUpdatedAt:1706624576,formattedLastUpdatedAt:"2024\u5e741\u670830\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"\u7528\u6237\u7a33\u5b9a\u8fdb\u5165\u7070\u5ea6\u7ec4",permalink:"/FeatureProbe/zh-CN/tutorials/rollout_tutorial/stable_rollout_tutorial"},next:{title:"\u4f7f\u7528\u4eba\u7fa4\u7ec4",permalink:"/FeatureProbe/zh-CN/tutorials/user_segment_tutorial"}},p={},c=[{value:"\u5728\u5e73\u53f0\u521b\u5efa\u5f00\u5173",id:"\u5728\u5e73\u53f0\u521b\u5efa\u5f00\u5173",level:2},{value:"\u63a7\u5236\u540e\u7aef\u7a0b\u5e8f",id:"\u63a7\u5236\u540e\u7aef\u7a0b\u5e8f",level:2},{value:"\u7f16\u5199\u4ee3\u7801",id:"\u7f16\u5199\u4ee3\u7801",level:3},{value:"\u9a8c\u8bc1\u7ed3\u679c",id:"\u9a8c\u8bc1\u7ed3\u679c",level:3},{value:"\u63a7\u5236\u524d\u7aef\u7a0b\u5e8f",id:"\u63a7\u5236\u524d\u7aef\u7a0b\u5e8f",level:2},{value:"\u7f16\u5199\u4ee3\u7801",id:"\u7f16\u5199\u4ee3\u7801-1",level:3},{value:"\u9a8c\u8bc1\u7ed3\u679c",id:"\u9a8c\u8bc1\u7ed3\u679c-1",level:3}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u7ed9\u4e0d\u540c\u7528\u6237\u5c55\u793a\u4e0d\u540c\u4fe1\u606f"},"\u7ed9\u4e0d\u540c\u7528\u6237\u5c55\u793a\u4e0d\u540c\u4fe1\u606f"),(0,n.kt)("p",null,"\u6211\u4eec\u5c06\u5e26\u9886\u4f60\u4f7f\u7528FeatureProbe\u7684\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u6309\u7528\u6237\u7279\u6027\u63a7\u5236\u7684\u5f00\u5173\u3002\u7136\u540e\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u540e\u7aef\u7a0b\u5e8f\uff0c\u9a8c\u8bc1\u540e\u7aef\u7a0b\u5e8f\u62ff\u4e0d\u540c\u7684\u7528\u6237\u4fe1\u606f\u8bf7\u6c42FeatureProbe SDK\uff0c\u4f1a\u62ff\u5230\u4e0d\u540c\u7684\u7ed3\u679c\u3002"),(0,n.kt)("p",null,"\u5047\u5b9a\u6211\u4eec\u8981\u5b9e\u73b0\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u300e\u4e0a\u6d77\u300f\u7684\u300e\u94bb\u77f3\u300f\u7528\u6237\uff0c\u663e\u793a\u300e\u6b22\u8fce\u4e0a\u6d77\u7684\u5c0a\u8d35\u5ba2\u6237\u300f"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u300e\u5317\u4eac\u300f\u7684\u7528\u6237\uff08\u4e0d\u533a\u5206\u7ea7\u522b\uff09\uff0c\u663e\u793a\u300e\u6b22\u8fce\u5317\u4eac\u7684\u5ba2\u6237\u300f"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e0d\u6ee1\u8db3\u4ee5\u4e0a\u4e24\u70b9\u7684\u7528\u6237\uff0c\u663e\u793a\u300e\u6b22\u8fce\u300f")),(0,n.kt)("h2",{id:"\u5728\u5e73\u53f0\u521b\u5efa\u5f00\u5173"},"\u5728\u5e73\u53f0\u521b\u5efa\u5f00\u5173"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u767b\u5f55\u6211\u4eec\u63d0\u4f9b\u7684FeatureProbe",(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io"},"\u6f14\u793a\u5e73\u53f0"),"\uff0c\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u767b\u5f55\uff0c\u8bf7\u8f93\u5165\u90ae\u7bb1\u3002\u540e\u7eed\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u4f60\u7684\u90ae\u7bb1\u8bbf\u95ee\u5230\u5c5e\u4e8e\u4f60\u7684\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"+\u5f00\u5173"),"\u65b0\u5efa\u4e00\u4e2a\u5f00\u5173")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u586b\u5165\u540d\u79f0\u548c\u6807\u8bc6"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9string\u7c7b\u578b\u4f5c\u4e3a\u8fd4\u56de\u503c"),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a03\u4e2a\u5206\u7ec4\uff0c\u5206\u522b\u5c06\u540d\u79f0\u548c\u503c\u586b\u5165\uff0c\u503c\u5c31\u662f\u6211\u4eec\u8981\u8fd4\u56de\u7684\u4e09\u4e2a\u4e0d\u540c\u7684\u63d0\u793a\u8bed"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5f53\u5f00\u5173\u672a\u751f\u6548\u65f6\u7684\u9ed8\u8ba4\u8fd4\u56de\u7684\u5206\u7ec4"),(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u521b\u5efa\u5e76\u53d1\u5e03"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create toggle",src:a(425).Z,width:"1654",height:"1808"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u8fdb\u5165\u65b0\u521b\u5efa\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"tutorial_variation"),"\u5f00\u5173\u7684\u8be6\u60c5\u9875\u9762")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"+ \u589e\u52a0\u89c4\u5219")),(0,n.kt)("li",{parentName:"ul"},"\u89c4\u5219\u4e2d\u589e\u52a0\u4e24\u4e2a\u6761\u4ef6\uff0ccity\u662f\u4e0a\u6d77\uff0c\u4ee5\u53carank\u662f\u94bb\u77f3"),(0,n.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u9009\u62e9\u4e3avariation1\uff08\u5373\u503c\u4e3a\uff1a\u6b22\u8fce\u4e0a\u6d77\u7684\u5c0a\u8d35\u5ba2\u6237\uff09")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rule one",src:a(1458).Z,width:"1792",height:"1654"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u518d\u6b21\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"+ \u589e\u52a0\u89c4\u5219")),(0,n.kt)("li",{parentName:"ul"},"\u89c4\u5219\u4e2d\u589e\u52a0\u6761\u4ef6\uff0ccity\u662f\u5317\u4eac\uff0c\u8fd4\u56de\u503c\u9009\u62e9\u4e3avariation2")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rule two",src:a(7635).Z,width:"1838",height:"1808"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u89c4\u5219\u7684\u8fd4\u56de\u503c\u9009\u62e9\u4e3avariation3")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"default",src:a(4384).Z,width:"1576",height:"1396"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f00\u5173\u72b6\u6001\u6539\u4e3a",(0,n.kt)("inlineCode",{parentName:"li"},"\u751f\u6548"),"\uff0c\u70b9\u51fb\u4e0b\u65b9",(0,n.kt)("inlineCode",{parentName:"li"},"\u53d1\u5e03"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"publish",src:a(6065).Z,width:"1828",height:"1914"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u786e\u8ba4"),"\uff0c\u53d1\u5e03\u5f00\u5173\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"confirm",src:a(2652).Z,width:"1618",height:"1416"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u6b64\u65f6\u5e94\u5f53\u770b\u5230",(0,n.kt)("inlineCode",{parentName:"li"},"\u53d1\u5e03\u6210\u529f"),"\u7684\u63d0\u793a")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"publish success",src:a(3284).Z,width:"2492",height:"368"})),(0,n.kt)("p",null,"\u5728\u5e73\u53f0\u7684\u64cd\u4f5c\u5230\u8fd9\u91cc\u5c31\u7ed3\u675f\u4e86\uff0c\u5f00\u5173\u5df2\u7ecf\u521b\u5efa\u6210\u529f\uff0c\u5e76\u4e14\u53ef\u4ee5\u8bbf\u95ee\u4e86\u3002\u4e0b\u9762\u6211\u4eec\u4ecb\u7ecd\u600e\u4e48\u5728\u7a0b\u5e8f\u4e2d\u901a\u8fc7SDK\u62ff\u5230\u8fd9\u4e9b\u914d\u7f6e\u503c\u3002"),(0,n.kt)("h2",{id:"\u63a7\u5236\u540e\u7aef\u7a0b\u5e8f"},"\u63a7\u5236\u540e\u7aef\u7a0b\u5e8f"),(0,n.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u540e\u7aef\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u4ece\u8fd9\u91cc\u5f00\u59cb\u4f53\u9a8c\u540e\u7aef\u4ee3\u7801\u5982\u4f55\u4f7f\u7528\u5f00\u5173\u3002"),(0,n.kt)("h3",{id:"\u7f16\u5199\u4ee3\u7801"},"\u7f16\u5199\u4ee3\u7801"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6309\u4f60\u719f\u6089\u7684\u8bed\u8a00\uff0c\u4e0b\u8f7d\u5e76\u6253\u5f00\u76f8\u5e94\u7684\u540e\u7aef\u793a\u4f8b\u4ee3\u7801")),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/server-sdk-java.git\ncd server-sdk-java\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"),"\u6587\u4ef6\u3002")),(0,n.kt)(i.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/server-sdk-go.git\ncd server-sdk-go\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"example/main.go"),"\u6587\u4ef6\u3002")),(0,n.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/server-sdk-rust.git\ncd server-sdk-rust\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"examples/demo.rs"),"\u6587\u4ef6\u3002")),(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/server-sdk-python.git\ncd server-sdk-python\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"demo.py"),"\u6587\u4ef6\u3002")),(0,n.kt)(i.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/server-sdk-node.git\ncd server-sdk-node\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"example/demo.js"),"\u6587\u4ef6\u3002"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00FeatureProbe\u5e73\u53f0",(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/projects"},"\u9879\u76ee\u5217\u8868\u9875\u9762"),"\uff0c \u53ef\u4ee5\u5728\u5f00\u5173\u8be6\u60c5\u9875\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u670d\u52a1"),"\u6765\u6253\u5f00\n",(0,n.kt)("img",{alt:"project",src:a(6802).Z,width:"2994",height:"810"})),(0,n.kt)("li",{parentName:"ol"},"\u590d\u5236",(0,n.kt)("inlineCode",{parentName:"li"},"\u670d\u52a1\u7aefSDK\u5bc6\u94a5"),(0,n.kt)("img",{alt:"sdk key",src:a(4406).Z,width:"1290",height:"1204"})),(0,n.kt)("li",{parentName:"ol"},"\u5c06",(0,n.kt)("inlineCode",{parentName:"li"},"\u670d\u52a1\u7aefSDK\u5bc6\u94a5"),"\u4ee5\u53ca",(0,n.kt)("inlineCode",{parentName:"li"},"FeatureProbe\u7f51\u5740"),' ("',(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"'),") \u586b\u5165\u540e\u7aef\u4ee3\u7801\u76f8\u5e94\u53d8\u91cf\u4e2d")),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"',title:'"src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"'},'    private static final String FEATURE_PROBE_SERVER_URL = "https://featureprobe.io/server";\n    private static final String FEATURE_PROBE_SERVER_SDK_KEY = // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5 ;\n'))),(0,n.kt)(i.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="example/main.go"',title:'"example/main.go"'},'    config := featureprobe.FPConfig{\n        // highlight-start\n        RemoteUrl: "https://featureprobe.io/server",\n        ServerSdkKey:    // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5\n        // highlight-end\n        RefreshInterval: 5000, // ms\n        WaitFirstResp:   true,\n    }\n'))),(0,n.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/demo.rs"',title:'"examples/demo.rs"'},'    let remote_url = "https://featureprobe.io/server";\n    let server_sdk_key = // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5\n'))),(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="demo.py"',title:'"demo.py"'},"    FEATURE_PROBE_SERVER_URL = 'https://featureprobe.io/server'\n    FEATURE_PROBE_SERVER_SDK_KEY = # \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5\n"))),(0,n.kt)(i.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="demo.js"',title:'"demo.js"'},"const FEATURE_PROBE_SERVER_URL = 'https://featureprobe.io/server';\nconst FEATURE_PROBE_SERVER_SDK_KEY = // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5\n")))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u52a0\u5165\u4ee5\u4e0b\u4ee3\u7801\uff0c\u6a21\u62df5\u4e2a\u7528\u6237\u8bbf\u95ee\u8fd9\u4e2a\u5f00\u5173",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u4e0a\u6d77\u7684\u94bb\u77f3\u7528\u6237"),(0,n.kt)("li",{parentName:"ol"},"\u4e0a\u6d77\u7684\u9ec4\u91d1\u7528\u6237"),(0,n.kt)("li",{parentName:"ol"},"\u5317\u4eac\u7684\u94bb\u77f3\u7528\u6237"),(0,n.kt)("li",{parentName:"ol"},"\u5317\u4eac\u7684\u9ec4\u91d1\u7528\u6237"),(0,n.kt)("li",{parentName:"ol"},"\u5929\u6d25\u7684\u94bb\u77f3\u7528\u6237")))),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"',title:'"src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"'},'    public static void main(String[] args) throws IOException {\n\n        Logger root = (Logger)LoggerFactory.getLogger(org.slf4j.Logger.ROOT_LOGGER_NAME);\n        root.setLevel(Level.WARN);\n\n        final FPConfig config = FPConfig.builder()\n            .remoteUri(FEATURE_PROBE_SERVER_URL)\n            .build();\n\n        // Init FeatureProbe, share this FeatureProbe instance in your project.\n        final FeatureProbe fpClient = new FeatureProbe(FEATURE_PROBE_SERVER_SDK_KEY, config);\n        \n        // highlight-start\n        FPUser[] users = {\n            new FPUser().with("city", "\u4e0a\u6d77").with("rank", "\u94bb\u77f3"),\n            new FPUser().with("city", "\u4e0a\u6d77").with("rank", "\u9ec4\u91d1"),\n            new FPUser().with("city", "\u5317\u4eac").with("rank", "\u94bb\u77f3"),\n            new FPUser().with("city", "\u5317\u4eac").with("rank", "\u9ec4\u91d1"),\n            new FPUser().with("city", "\u5929\u6d25").with("rank", "\u94bb\u77f3"),\n        };\n    \n        for (FPUser user:users) {\n            String greeting = fpClient.stringValue("tutorial_variation", user, "\u6b22\u8fce\u60a8");\n            System.out.println(greeting);\n        }\n        // highlight-end\n                  \n        fpClient.close();\n    }\n'))),(0,n.kt)(i.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="example/main.go"',title:'"example/main.go"'},'func main() {\n    config := featureprobe.FPConfig{\n        RemoteUrl: "https://featureprobe.io/server",\n        ServerSdkKey:    // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5,\n        RefreshInterval: 5000, // ms\n        WaitFirstResp:   true,\n    }\n    fp, err := featureprobe.NewFeatureProbe(config)\n    if err != nil {\n        fmt.Println(err)\n        return\n    }\n    // highlight-start\n    users := []featureprobe.FPUser{\n        featureprobe.NewUser().With("city", "\u4e0a\u6d77").With("rank", "\u94bb\u77f3"),\n        featureprobe.NewUser().With("city", "\u4e0a\u6d77").With("rank", "\u9ec4\u91d1"),\n        featureprobe.NewUser().With("city", "\u5317\u4eac").With("rank", "\u94bb\u77f3"),\n        featureprobe.NewUser().With("city", "\u5317\u4eac").With("rank", "\u9ec4\u91d1"),\n        featureprobe.NewUser().With("city", "\u5929\u6d25").With("rank", "\u94bb\u77f3"),\n    }\n\n    for _, user := range users {\n        greeting := fp.StrValue("tutorial_variation", user, "\u4f60\u597d\u554a")\n        fmt.Println(greeting)\n    }\n    // highlight-end\n    fp.Close()\n}\n'))),(0,n.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/demo.rs"',title:'"examples/demo.rs"'},'#[tokio::main]\nasync fn main() {\n    let remote_url = "https://featureprobe.io/server";\n    let server_sdk_key = // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5;\n    let config = FPConfig {\n        remote_url: remote_url.to_owned(),\n        server_sdk_key: server_sdk_key.to_owned(),\n        refresh_interval: Duration::from_millis(2000),\n        ..Default::default()\n    };\n\n    let fp = match FeatureProbe::new(config) {\n        Ok(fp) => fp,\n        Err(e) => {\n            tracing::error!("{:?}", e);\n            return;\n        }\n    };\n  // highlight-start\n    let users = [\n        FPUser::new().with("city", "\u4e0a\u6d77").with("rank", "\u94bb\u77f3"),\n        FPUser::new().with("city", "\u4e0a\u6d77").with("rank", "\u9ec4\u91d1"),\n        FPUser::new().with("city", "\u5317\u4eac").with("rank", "\u94bb\u77f3"),\n        FPUser::new().with("city", "\u5317\u4eac").with("rank", "\u9ec4\u91d1"),\n        FPUser::new().with("city", "\u5929\u6d25").with("rank", "\u94bb\u77f3")\n    ];\n    for user in users {\n        let greeting = fp.string_value("tutorial_variation", &user, "\u4f60\u597d\u554a".to_string());\n        println!("{:?}", greeting);\n    }\n  // highlight-end\n    fp.close();\n}\n'))),(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="demo.py"',title:'"demo.py"'},'logging.basicConfig(level=logging.WARNING)\n\nif __name__ == \'__main__\':\n    FEATURE_PROBE_SERVER_URL = \'https://featureprobe.io/server\'\n    FEATURE_PROBE_SERVER_SDK_KEY = # \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5;\n\n    config = fp.Config(remote_uri=FEATURE_PROBE_SERVER_URL,  # FeatureProbe server URL\n                       sync_mode=\'polling\',\n                       refresh_interval=3)\n\n    with fp.Client(FEATURE_PROBE_SERVER_SDK_KEY, config) as client:\n      # highlight-start\n      users = [\n         fp.User().with_attr("city", "\u4e0a\u6d77").with_attr("rank", "\u94bb\u77f3"),\n         fp.User().with_attr("city", "\u4e0a\u6d77").with_attr("rank", "\u9ec4\u91d1"),\n         fp.User().with_attr("city", "\u5317\u4eac").with_attr("rank", "\u94bb\u77f3"),\n         fp.User().with_attr("city", "\u5317\u4eac").with_attr("rank", "\u9ec4\u91d1"),\n         fp.User().with_attr("city", "\u5929\u6d25").with_attr("rank", "\u94bb\u77f3")\n      ]\n      for user in users:\n         greeting = client.value(\'tutorial_variation\', user, default="\u4f60\u597d")\n         print(greeting)\n      # highlight-end\n'))),(0,n.kt)(i.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="demo.js"',title:'"demo.js"'},'const fpClient = new featureProbe.FeatureProbe({\n  remoteUrl: FEATURE_PROBE_SERVER_URL,\n  serverSdkKey: FEATURE_PROBE_SERVER_SDK_KEY,\n  refreshInterval: 5000,\n});\n\n// highlight-start\nconst users = [\n    new featureProbe.FPUser().with("city", "\u4e0a\u6d77").with("rank", "\u94bb\u77f3"),\n    new featureProbe.FPUser().with("city", "\u4e0a\u6d77").with("rank", "\u9ec4\u91d1"),\n    new featureProbe.FPUser().with("city", "\u5317\u4eac").with("rank", "\u94bb\u77f3"),\n    new featureProbe.FPUser().with("city", "\u5317\u4eac").with("rank", "\u9ec4\u91d1"),\n    new featureProbe.FPUser().with("city", "\u5929\u6d25").with("rank", "\u94bb\u77f3"),\n];\n\nfor(let i = 0; i < users.length; i++) {\n  const greeting = fpClient.stringValue("tutorial_variation", users[i], "\u4f60\u597d");\n  console.log(greeting);\n}\n// highlight-end\n\n')))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u7528\u6237\u7684\u5c5e\u6027\uff08\u4f8b\u5982\uff1a\u6240\u5728\u57ce\u5e02\u3001\u5e10\u53f7\u7ea7\u522b\uff09\u9700\u8981\u5f00\u53d1\u8005\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u83b7\u53d6\u5230\uff0c\u7136\u540e\u901a\u8fc7With\u65b9\u6cd5\u4f20\u5165FeatureProbe SDK\u3002 SDK\u53ea\u8d1f\u8d23\u5c06\u89c4\u5219\u5e94\u7528\u5230\u8fd9\u4e9b\u7528\u6237\u4e0a\uff0cSDK\u65e0\u6cd5\u5728\u5185\u90e8\u81ea\u5df1\u63a8\u65ad\u51fa\u7528\u6237\u7684\u5c5e\u6027\u3002")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u7f16\u8f91\u540e\u7684\u670d\u52a1\u7aef\u7a0b\u5e8f")),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mvn package\njava -jar ./target/server-sdk-java-1.4.0.jar\n"))),(0,n.kt)(i.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go run example/main.go\n"))),(0,n.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example demo\n"))),(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\npython3 demo.py\n"))),(0,n.kt)(i.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"node demo.js\n")))),(0,n.kt)("h3",{id:"\u9a8c\u8bc1\u7ed3\u679c"},"\u9a8c\u8bc1\u7ed3\u679c"),(0,n.kt)("p",null,"\u4ece\u547d\u4ee4\u884clog\u53ef\u4ee5\u770b\u5230\uff0c\u5bf9\u4e8e\u4ee5\u4e0b\u4e94\u4e2a\u6d4b\u8bd5\u7528\u6237"),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\u4e0a\u6d77\u7684\u94bb\u77f3\u7528\u6237"),(0,n.kt)("li",{parentName:"ol"},"\u4e0a\u6d77\u7684\u9ec4\u91d1\u7528\u6237"),(0,n.kt)("li",{parentName:"ol"},"\u5317\u4eac\u7684\u94bb\u77f3\u7528\u6237"),(0,n.kt)("li",{parentName:"ol"},"\u5317\u4eac\u7684\u9ec4\u91d1\u7528\u6237"),(0,n.kt)("li",{parentName:"ol"},"\u5929\u6d25\u7684\u94bb\u77f3\u7528\u6237"))),(0,n.kt)("p",null,"\u5e94\u7528\u4e86\u89c4\u5219"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u300e\u4e0a\u6d77\u300f\u7684\u300e\u94bb\u77f3\u300f\u7528\u6237\uff0c\u663e\u793a\u300e\u6b22\u8fce\u4e0a\u6d77\u7684\u5c0a\u8d35\u5ba2\u6237\u300f"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u300e\u5317\u4eac\u300f\u7684\u7528\u6237\uff08\u4e0d\u533a\u5206\u7ea7\u522b\uff09\uff0c\u663e\u793a\u300e\u6b22\u8fce\u5317\u4eac\u7684\u5ba2\u6237\u300f"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e0d\u6ee1\u8db3\u4ee5\u4e0a\u4e24\u70b9\u7684\u7528\u6237\uff0c\u663e\u793a\u300e\u6b22\u8fce\u300f"))),(0,n.kt)("p",null,"\u4e4b\u540e\uff0c\u62ff\u5230\u4e86\u4ee5\u4e0b\u7ed3\u679c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u6b22\u8fce\u4e0a\u6d77\u7684\u5c0a\u8d35\u5ba2\u6237\n\u6b22\u8fce\n\u6b22\u8fce\u5317\u4eac\u7684\u5ba2\u6237\n\u6b22\u8fce\u5317\u4eac\u7684\u5ba2\u6237\n\u6b22\u8fce\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u66f4\u6539\u4ee3\u7801\uff0c\u5c1d\u8bd5\u66f4\u591a\u7528\u6237\u5c5e\u6027\u7ec4\u5408\uff0c\u770b\u770blog\u4e2d\u663e\u793a\u7684\u7ed3\u679c\u662f\u5426\u7b26\u5408\u6761\u4ef6\u3002"),(0,n.kt)("h2",{id:"\u63a7\u5236\u524d\u7aef\u7a0b\u5e8f"},"\u63a7\u5236\u524d\u7aef\u7a0b\u5e8f"),(0,n.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u524d\u7aef\u7684js\u4ee3\u7801\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u4ece\u8fd9\u91cc\u5f00\u59cb\u4f53\u9a8c\u524d\u7aef\u4ee3\u7801\u5982\u4f55\u4f7f\u7528\u5f00\u5173\u3002"),(0,n.kt)("h3",{id:"\u7f16\u5199\u4ee3\u7801-1"},"\u7f16\u5199\u4ee3\u7801"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u793a\u4f8b\u4ee3\u7801")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/client-sdk-js.git\ncd client-sdk-js\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00",(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/projects"},"\u5e73\u53f0"),"\u83b7\u53d6client sdk key")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u70b9\u51fb\u300e\u670d\u52a1\u300fTab\uff0c\u53ef\u4ee5\u8fdb\u5165\u300e\u670d\u52a1\u300f\u5217\u8868\uff0c\u83b7\u53d6\u5404\u7c7bSDK key\uff0c\u4ee5\u53ca\u4fee\u6539\u670d\u52a1\u548c\u73af\u5883\u4fe1\u606f\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"client sdk key",src:a(5126).Z,width:"1548",height:"1218"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"li"},"example/index.html")," \u586b\u5165 ",(0,n.kt)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aefSDK\u5bc6\u94a5")," \u4ee5\u53ca ",(0,n.kt)("inlineCode",{parentName:"li"},"FeatureProbe\u7f51\u5740"),'  ("',(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"'),")")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="example/index.html"',title:'"example/index.html"'},'      const fpClient = new featureProbe.FeatureProbe({\n  //      highlight-start\n        remoteUrl: "https://featureprobe.io/server",\n        clientSdkKey: // Paste client sdk key here,\n  //      highlight-end\n        user,\n        refreshInterval: 5000,\n      });\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u6a21\u62df\u300e\u4e0a\u6d77\u300f\u7684\u300e\u94bb\u77f3\u300f\u7528\u6237\u8bbf\u95ee\u5f00\u5173 ",(0,n.kt)("inlineCode",{parentName:"li"},"tutorial_variation")," \uff0c\u76f4\u63a5\u83b7\u53d6\u5f00\u5173\u72b6\u6001")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="example/index.html"',title:'"example/index.html"'},'  <script>\n    //  highlight-next-line\n    const user = new featureProbe.FPUser().with("city", "\u4e0a\u6d77").with("rank", "\u94bb\u77f3");\n    const fpClient = new featureProbe.FeatureProbe({\n      remoteUrl: "https://featureprobe.io/server",\n      clientSdkKey:  // Paste client sdk key here,\n      user,\n      refreshInterval: 5000,\n    });\n  \n    fpClient.start();\n    fpClient.on("ready", function() {\n      // highlight-start\n      const stringValue = fpClient.stringValue("tutorial_variation", "\u6b22\u8fce");\n      document.getElementById("string-result").innerText = stringValue;\n      // highlight-end\n    });\n  <\/script>\n')),(0,n.kt)("h3",{id:"\u9a8c\u8bc1\u7ed3\u679c-1"},"\u9a8c\u8bc1\u7ed3\u679c"),(0,n.kt)("p",null,"\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," , \u53ef\u4ee5\u770b\u5230\u5bf9\u4e0e\u5f53\u524d\u8fd9\u4e2a\u300e\u4e0a\u6d77\u300f\u7684\u300e\u94bb\u77f3\u300f\u7528\u6237\uff0c\u663e\u793a\u4e86\u300e\u6b22\u8fce\u4e0a\u6d77\u7684\u5c0a\u8d35\u5ba2\u6237\u300f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"string type\nFeatureProbe evaluation string type toggle result is : \u6b22\u8fce\u4e0a\u6d77\u7684\u5c0a\u8d35\u5ba2\u6237\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u56de\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," \u6587\u4ef6\uff0c\u7136\u540e\u66f4\u65b0 ",(0,n.kt)("inlineCode",{parentName:"p"},"with")," \u53c2\u6570\uff0c\u770b\u770b\u8fd4\u56de\u503c\u6709\u4ec0\u4e48\u5dee\u522b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="example/index.html"',title:'"example/index.html"'},'const user = new featureProbe.FPUser().with("city", "\u5317\u4eac").with("rank", "\u94bb\u77f3");\n')))}d.isMDXComponent=!0},6802:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_click_project_cn-c3db2a69ddea236b09333158e5a8db9b.png"},5126:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_client_sdk_key_cn-fcf9cc73d6a62b4687b852f17df52fb0.png"},4406:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_rollout_server_sdk_key_cn-809d5f9211fb6e4b012630f79d321361.png"},2652:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_variation_confirm_cn-4e54c24ae3a7548eb64ab78806c77f63.png"},425:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_variation_create_cn-6589220b99d2a8cf4e9b8d58eeb6f6cb.png"},4384:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_variation_default_rule_cn-b24fb77505eeb65042f2498241fd8c2b.png"},6065:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_variation_publish_cn-0ce2a5b457d401af0afb3aed9490b6f4.png"},3284:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_variation_publish_success_cn-780e574414f84e11deac60e1e46e2114.png"},1458:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_variation_rule1_cn-f3b797fbc94c7f25acc8a34c77dd20e7.png"},7635:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_variation_rule2_cn-55275686216f1caf2a1d42dd5d932018.png"}}]);