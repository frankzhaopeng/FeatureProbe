"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Deploy a private environment",s={unversionedId:"tutorials/setup_own_env",id:"tutorials/setup_own_env",title:"Deploy a private environment",description:"We will take you to deploy FeatureProbe on your own server resources, so that you can have your own private environment to experience the features of FeatureProbe, and you can also directly manage your online services through this private environment.",source:"@site/docs/tutorials/setup_own_env.md",sourceDirName:"tutorials",slug:"/tutorials/setup_own_env",permalink:"/FeatureProbe/tutorials/setup_own_env",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/tutorials/setup_own_env.md",tags:[],version:"current",lastUpdatedAt:1676614480,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Use toggle",permalink:"/FeatureProbe/tutorials/try_demo"},next:{title:"Use Toggle to Roll out a Feature",permalink:"/FeatureProbe/tutorials/rollout_tutorial/"}},l={},u=[{value:"Preparations of tools and environments",id:"preparations-of-tools-and-environments",level:2},{value:"Install and start FeatureProbe",id:"install-and-start-featureprobe",level:2},{value:"Verify installation results",id:"verify-installation-results",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-a-private-environment"},"Deploy a private environment"),(0,o.kt)("p",null,"We will take you to deploy FeatureProbe on your own server resources, so that you can have your own private environment to experience the features of FeatureProbe, and you can also directly manage your online services through this private environment."),(0,o.kt)("p",null,"This tutorial assumes that you understand the most basic git operations and basic docker principles, and have your own machine resources, which is suitable for users with certain technical backgrounds to learn."),(0,o.kt)("h2",{id:"preparations-of-tools-and-environments"},"Preparations of tools and environments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure your server is connected to the Internet."),(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"),"."),(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker"),"."),(0,o.kt)("li",{parentName:"ol"},"Network in China mainland access to docker hub may be slow, you need to add ",(0,o.kt)("a",{parentName:"li",href:"https://gitee.com/featureprobe/FeatureProbe/blob/main/DOCKER_HUB.md"},"docker image"),".")),(0,o.kt)("h2",{id:"install-and-start-featureprobe"},"Install and start FeatureProbe"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use git to download the latest code of the FeatureProbe.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/featureprobe/FeatureProbe.git\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use docker composer to pull the image and start it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd FeatureProbe\ndocker compose up\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Wait for the image to be pulled, depending on the network conditions, it may take 5-10 minutes."),(0,o.kt)("li",{parentName:"ol"},"Wait for the image to start, about 1 minute. After the startup is successful, you can see the log scrolling on the command line. You can also check the image startup status in the docker GUI tool. If everything is green, it means the startup is successful:\n",(0,o.kt)("img",{alt:"docker startup",src:r(5132).Z,width:"1375",height:"626"}))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"FeatureProbe contains 5 independent images, which can only run normally after all 5 images are successfully started. If a certain image fails to start successfully, you can restart the unsuccessful image separately in the docker GUI.")),(0,o.kt)("h2",{id:"verify-installation-results"},"Verify installation results"),(0,o.kt)("p",null,"Open the browser, visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4009"},"http://localhost:4009"),", you can see the following login page:\n",(0,o.kt)("img",{alt:"login",src:r(1518).Z,width:"2686",height:"2020"})),(0,o.kt)("p",null,"Log in with the default account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"username"),": admin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password"),": Pass1234")),(0,o.kt)("p",null,"Log in to see the four built-in toggles and start trying them out.\n",(0,o.kt)("img",{alt:"toggle list",src:r(9129).Z,width:"3580",height:"1302"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Four built-in toggles for users to refer to various typical toggle configurations, users can choose to keep or delete according to their own needs, without affecting the use of the platform.")))}p.isMDXComponent=!0},1518:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docker_login_en-91ee34b591fe2a5ff73a88de447359bf.png"},5132:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docker_startup-23514c4644da6512f1843256c513fbe6.png"},9129:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docker_toggle_list_en-190cfe03030f9fbc4d44ce1b84f64049.png"}}]);