"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[1292],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},l="MiniProgram SDK",o={unversionedId:"how-to/Client-Side SDKs/minirprogram-sdk",id:"how-to/Client-Side SDKs/minirprogram-sdk",title:"MiniProgram SDK",description:"This SDK is only applicable to WeChat mini program, other mini programs including Alipay, Baidu, DingDing and TouTiao are preparing, will be released soon. To provide a better integration for use in mini program applications, MiniProgram SDK builds on JavaScript SDK. Much of the JavaScript SDK functionality is also available for the MiniProgram SDK to use. Please reference JavaScript SDK.",source:"@site/docs/how-to/Client-Side SDKs/minirprogram-sdk.md",sourceDirName:"how-to/Client-Side SDKs",slug:"/how-to/Client-Side SDKs/minirprogram-sdk",permalink:"/how-to/Client-Side SDKs/minirprogram-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/how-to/Client-Side SDKs/minirprogram-sdk.md",tags:[],version:"current",lastUpdatedAt:1679915116,formattedLastUpdatedAt:"Mar 27, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"iOS SDK",permalink:"/how-to/Client-Side SDKs/ios-sdk"},next:{title:"React SDK",permalink:"/how-to/Client-Side SDKs/react-sdk"}},p={},s=[{value:"Try Out Demo Code",id:"try-out-demo-code",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Step 1. Install MiniProgram SDK",id:"step-1-install-miniprogram-sdk",level:3},{value:"Step 2. Initialize SDK client",id:"step-2-initialize-sdk-client",level:3},{value:"Step 3. Get varation value",id:"step-3-get-varation-value",level:3},{value:"Track events",id:"track-events",level:2},{value:"Track custom events",id:"track-custom-events",level:3},{value:"Available options for initialization",id:"available-options-for-initialization",level:2}],m={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"miniprogram-sdk"},"MiniProgram SDK"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This SDK is only applicable to WeChat mini program, other mini programs including Alipay, Baidu, DingDing and TouTiao are preparing, will be released soon. To provide a better integration for use in mini program applications, MiniProgram SDK builds on JavaScript SDK. Much of the JavaScript SDK functionality is also available for the MiniProgram SDK to use. Please reference ",(0,r.kt)("a",{parentName:"p",href:"/how-to/Client-Side%20SDKs/javascript-sdk"},"JavaScript SDK"),".")),(0,r.kt)("admonition",{title:"Notice",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For users who needs to use metric analysis, please upgrade MiniProgram SDK to version ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/featureprobe-client-sdk-miniprogram/v/2.0.1"}," 2.0.1 "),". From this version, we support sending custom events.")),(0,r.kt)("admonition",{title:"SDK quick links",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In addition to this reference guide, we provide source code, API reference documentation, and sample applications at the following links:"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Resource")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Location")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDK API documentation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://featureprobe.github.io/client-sdk-miniprogram/"}," SDK API docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub repository"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-miniprogram"},"Client Side SDK for MiniProgram"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sample applications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-miniprogram/tree/main/example"},"Demo code"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Published module"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/featureprobe-client-sdk-miniprogram"},"npm")))))),(0,r.kt)("h2",{id:"try-out-demo-code"},"Try Out Demo Code"),(0,r.kt)("p",null,"We provide a runnable demo code for you to understand how FeatureProbe SDK is used."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First, you need to choose which environment FeatureProbe is connected to control your program"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can use our online ",(0,r.kt)("a",{parentName:"li",href:"https://featureprobe.io/login"},"demo environment")),(0,r.kt)("li",{parentName:"ul"},"You can also use your own ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/featureprobe/FeatureProbe"},"docker environment")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download this repo and run the demo program:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/client-sdk-miniprogram.git\ncd client-sdk-miniprogram\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the link information in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-miniprogram/tree/main/example"},"example"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For online demo environment:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remoteUrl"),' = "',(0,r.kt)("a",{parentName:"li",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSdkKey")," Please copy from the following interface:")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"client_sdk_key snapshot",src:a(989).Z,width:"414",height:"385"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For local docker environment:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remoteUrl"),' = "http://YOUR_DOCKER_IP:4009/server"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSdkKey"),' = "client-25614c7e03e9cb49c0e96357b797b1e47e7f2dff"'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the program."))),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,r.kt)("p",null,"In this guide we explain how to use feature toggles in a Wechat MiniProgram application using FeatureProbe."),(0,r.kt)("h3",{id:"step-1-install-miniprogram-sdk"},"Step 1. Install MiniProgram SDK"),(0,r.kt)("p",null,"Install the FeatureProbe SDK as a dependency in your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm install featureprobe-client-sdk-miniprogram --save\n")),(0,r.kt)("h3",{id:"step-2-initialize-sdk-client"},"Step 2. Initialize SDK client"),(0,r.kt)("p",null,"Initialize SDK client with required options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { initialize, FPUser } from \'featureprobe-client-sdk-miniprogram\';\n\nconst user = new FPUser();\nuser.with("userId", /* userId */);\n\nconst featureProbeClient = initialize({\n  remoteUrl: "https://featureprobe.io/server",\n  // remoteUrl: "https://127.0.0.1:4007", // for local docker\n  clientSdkKey: /* clientSdkKey */\n  user,\n});\n\nfeatureProbeClient.start();\n')),(0,r.kt)("h3",{id:"step-3-get-varation-value"},"Step 3. Get varation value"),(0,r.kt)("p",null,"You can get variation value from globalData object, SDK will update ",(0,r.kt)("inlineCode",{parentName:"p"},"globalData.toggles")," object automatically"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const app = getApp();   // getApp is a global function provided Wechat Miniprogram\n\nconst value = app.globalData.toggles[/* toggleKey */].value;\nconst reason = app.globalData.toggles[/* toggleKey */].reason;\n")),(0,r.kt)("p",null,"You can also use the SDK API to get value or detail."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'featureProbeClient.on("ready", function() {\n  const result = featureProbeClient.boolValue(/* toggleKey */, false);\n  if (result) {\n    do_some_thing();\n  } else {\n    do_other_thing();\n  }\n  const reason = featureProbeClient.boolDetail(/* toggleKey */, false);\n  console.log(reason);\n})\n')),(0,r.kt)("h2",{id:"track-events"},"Track events"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Mini Program SDK supports event tracking from version 2.0.1.")),(0,r.kt)("h3",{id:"track-custom-events"},"Track custom events"),(0,r.kt)("p",null,"After the SDK is ready, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," api."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"featureProbeClient.on('ready', function() {\n  // Send a custom event.\n  // The first parameter is the event name,\n  // the second parameter is optional, it means a metric value to track\n  // highlight-start\n  featureProbeClient.track('YOUR_CUSTOM_EVENT_NAME_1');\n  featureProbeClient.track('YOUR_CUSTOM_EVENT_NAME_2', 5.5);\n  // highlight-end\n})\n")),(0,r.kt)("h2",{id:"available-options-for-initialization"},"Available options for initialization"),(0,r.kt)("p",null,"This SDK takes the following options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"option"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"depends"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"The unified URL to get toggles and post events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"togglesUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"The specific URL to get toggles, once set, remoteUrl will be ignored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventsUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"The specific URL to post events, once set, remoteUrl will be ignored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientSdkKey"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"The Client SDK Key is used to authentification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"The User with attributes like name, age is used when toggle evaluation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refreshInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"The SDK check for updated in millisecond")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeoutInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout for SDK initialization, SDK will emit an ",(0,r.kt)("inlineCode",{parentName:"td"},"error")," event when timeout is reaching")))))}u.isMDXComponent=!0},989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/client_sdk_key_snapshot_cn-441a8bffad52964614b63b1961967db9.png"}}]);