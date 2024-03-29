"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[7434],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(a),k=n,g=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return a?r.createElement(g,i(i({ref:e},u),{},{components:a})):r.createElement(g,i({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1556:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:8},i="Deployment Configuration",o={unversionedId:"reference/deployment-configuration",id:"reference/deployment-configuration",title:"Deployment Configuration",description:"The following is the description of the parameters of the API module and Server module at startup.",source:"@site/docs/reference/deployment-configuration.md",sourceDirName:"reference",slug:"/reference/deployment-configuration",permalink:"/reference/deployment-configuration",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/reference/deployment-configuration.md",tags:[],version:"current",lastUpdatedAt:1680513425,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Deploy a Cluster",permalink:"/reference/deployment-cluster"},next:{title:"Webhook Access",permalink:"/reference/webhook-access"}},p={},d=[{value:"FeatureProbe API",id:"featureprobe-api",level:2},{value:"Security authentication configuration",id:"security-authentication-configuration",level:3},{value:"FeatureProbe Server",id:"featureprobe-server",level:2}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deployment-configuration"},"Deployment Configuration"),(0,n.kt)("p",null,"The following is the description of the parameters of the API module and Server module at startup."),(0,n.kt)("h2",{id:"featureprobe-api"},"FeatureProbe API"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Environment variable")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Default value")),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.port"),(0,n.kt)("td",{parentName:"tr",align:null},"8080"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Server port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TZ"),(0,n.kt)("td",{parentName:"tr",align:null},"Asia/Shanghai"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Timezone")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spring.datasource.jdbc-url"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Connection address of JDBC. Such as ",(0,n.kt)("inlineCode",{parentName:"td"},"jdbc:mysql://database:13306/feature_probe"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spring.profiles.active"),(0,n.kt)("td",{parentName:"tr",align:null},"online"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Currently active profile")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"logging.level.root"),(0,n.kt)("td",{parentName:"tr",align:null},"INFO"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Application log level: ",(0,n.kt)("inlineCode",{parentName:"td"},"INFO"),"/",(0,n.kt)("inlineCode",{parentName:"td"},"ERROR"),"/",(0,n.kt)("inlineCode",{parentName:"td"},"WARN"),"/",(0,n.kt)("inlineCode",{parentName:"td"},"DEBUG"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spring.jpa.show-sql"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to display the SQL statement at execution time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.security.jwt.keystore-location"),(0,n.kt)("td",{parentName:"tr",align:null},"./jwt.jks"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Certificate file path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.security.jwt.keystore-password"),(0,n.kt)("td",{parentName:"tr",align:null},"password"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Storepass when generating the certificate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.security.jwt.private-key-passphrase"),(0,n.kt)("td",{parentName:"tr",align:null},"password"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Keypass when generating the certificate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.analysis-url"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://127.0.0.1:4006"},"http://127.0.0.1:4006")),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Analysis Server URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server-base-urls"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://127.0.0.1:4007"},"http://127.0.0.1:4007")),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Server URLs;           Multiple URLs, separated by commas")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The above parameters use the docker method to start the program and pass it in through Environment, such as starting it with a jar package and passing it in through java -D.")),(0,n.kt)("h3",{id:"security-authentication-configuration"},"Security authentication configuration"),(0,n.kt)("p",null,"FeatureProbe API is used as the management background, using ",(0,n.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," standard protocol for user login authentication, and using ",(0,n.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/RSA-Kryptosystem"},"RSA256")," encryption Algorithmic signature. For security reasons, it is strongly recommended to regenerate the RSA key file."),(0,n.kt)("p",null,"Key generation method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -genkey -alias my-featureprobe-jwt -keyalg RSA -keysize 1024 -keystore fp-jwt.jks -validity 365 -keypass YOU-PRIVATE-KEY-PASSPHRASE -storepass YOU-KEYSTORE-PASSWORD\n")),(0,n.kt)("p",null,"After the execution is completed, the ",(0,n.kt)("inlineCode",{parentName:"p"},"fp-jwt.jks")," file will be generated in the current directory. The parameter description:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"validity - Certificate valid days"),(0,n.kt)("li",{parentName:"ul"},"keypass - ",(0,n.kt)("em",{parentName:"li"},"YOU-PRIVATE-KEY-PASSPHRASE")),(0,n.kt)("li",{parentName:"ul"},"storepass - ",(0,n.kt)("em",{parentName:"li"},"YOU-KEYSTORE-PASSWORD"))),(0,n.kt)("p",null,"After the certificate is generated, you need to modify the enabling parameters ",(0,n.kt)("inlineCode",{parentName:"p"},"app.security.jwt.*")," to make the current certificate take effect in the application."),(0,n.kt)("h2",{id:"featureprobe-server"},"FeatureProbe Server"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Environment variable")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Default value")),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_SERVER_PORT"),(0,n.kt)("td",{parentName:"tr",align:null},"4007"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Server port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_TOGGLES_URL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080/api/server/toggles"},"http://127.0.0.1:8080/api/server/toggles")),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service address to connect to FeatureProbe API. Used for pull toggles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_KEYS_URL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080/api/server/sdk_keys"},"http://127.0.0.1:8080/api/server/sdk_keys")),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service address to connect to FeatureProbe API. Used for pull sdk key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_EVENTS_URL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080/api/server/events"},"http://127.0.0.1:8080/api/server/events")),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service address to connect to FeatureProbe API. Used to report toggle access events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_ANALYSIS_URL"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Analysis Server URL\uff0cUsed to report toggle events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_REFRESH_SECONDS"),(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Interval of polling pull toggle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RUST_LOG"),(0,n.kt)("td",{parentName:"tr",align:null},"info"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"Application log level, ",(0,n.kt)("inlineCode",{parentName:"td"},"info"),"/",(0,n.kt)("inlineCode",{parentName:"td"},"error"))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Whether the above parameters are started in docker mode or binary mode, they are all passed in through Environment.")))}m.isMDXComponent=!0}}]);