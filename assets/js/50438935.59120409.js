"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[2824],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},937:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},i="Third-party authentication",o={unversionedId:"reference/identity-authenticate",id:"reference/identity-authenticate",title:"Third-party authentication",description:"Overview",source:"@site/docs/reference/identity-authenticate.md",sourceDirName:"reference",slug:"/reference/identity-authenticate",permalink:"/reference/identity-authenticate",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/reference/identity-authenticate.md",tags:[],version:"current",lastUpdatedAt:1689230275,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Support for PostgreSQL",permalink:"/reference/support-postgresql"},next:{title:"Best Practices",permalink:"/category/best-practices"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"LDAP",id:"ldap",level:3}],c={toc:u};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"third-party-authentication"},"Third-party authentication"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In addition to basic username and password authentication, FeatureProbe supports popular identity authentication protocols. The following are the identity authentication methods currently supported by FeatureProbe:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LDAP")),(0,a.kt)("h3",{id:"ldap"},"LDAP"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage"),":"),(0,a.kt)("p",null,"Modify environment variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Environment variable")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Default value")),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app.security.ldap.url"),(0,a.kt)("td",{parentName:"tr",align:null},"ldap://ldap.forumsys.com:389"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"The LDAP connection address.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app.security.ldap.userDn"),(0,a.kt)("td",{parentName:"tr",align:null},"cn=read-only-admin,dc=example,dc=com"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"The DN of the user connecting to LDAP, which needs query bind permission to verify other accounts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app.security.ldap.usernameAttribute"),(0,a.kt)("td",{parentName:"tr",align:null},"uid"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of LDAP schema attribute for user name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app.security.ldap.base"),(0,a.kt)("td",{parentName:"tr",align:null},"dc=example,dc=com"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"The base DN of the account to be verified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app.security.ldap.password"),(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"The password corresponding to UserDn.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app.security.connect.timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"5000"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"The timeout for connecting to LDAP, defaulting to 5s.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app.security.request.timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"5000"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"The timeout for requesting LDAP, defaulting to 5s.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app.security.validator.impl"),(0,a.kt)("td",{parentName:"tr",align:null},"common"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the specific validator, which defaults to common, i.e. userpassword. To enable LDAP support, change it to ldap.")))))}d.isMDXComponent=!0}}]);