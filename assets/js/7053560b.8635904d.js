"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[9093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},i="Spring Boot Starter",l={unversionedId:"how-to/Server-Side SDKs/spring-boot-starter",id:"how-to/Server-Side SDKs/spring-boot-starter",title:"Spring Boot Starter",description:"FeatureProbe is an open source feature management service.",source:"@site/docs/how-to/Server-Side SDKs/spring-boot-starter.md",sourceDirName:"how-to/Server-Side SDKs",slug:"/how-to/Server-Side SDKs/spring-boot-starter",permalink:"/FeatureProbe/how-to/Server-Side SDKs/spring-boot-starter",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/how-to/Server-Side SDKs/spring-boot-starter.md",tags:[],version:"current",lastUpdatedAt:1672905296,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Java SDK",permalink:"/FeatureProbe/how-to/Server-Side SDKs/java-sdk"},next:{title:"Golang SDK",permalink:"/FeatureProbe/how-to/Server-Side SDKs/golang-sdk"}},s={},p=[{value:"Access FeatureProbe",id:"access-featureprobe",level:2},{value:"Step 1. Install FeatureProbe Starter",id:"step-1-install-featureprobe-starter",level:3},{value:"Apache Maven",id:"apache-maven",level:4},{value:"Gradle Groovy DSL",id:"gradle-groovy-dsl",level:4},{value:"Step 2. Config FeatureProbe instance",id:"step-2-config-featureprobe-instance",level:3},{value:"Step 3. Use the feature toggle",id:"step-3-use-the-feature-toggle",level:3},{value:"Step 4. Close FeatureProbe Client",id:"step-4-close-featureprobe-client",level:3},{value:"Mock FeatureProbe for Unittest",id:"mock-featureprobe-for-unittest",level:2},{value:"1. Install powermock SDK:",id:"1-install-powermock-sdk",level:3},{value:"2. Mock FeatureProbe Toggle",id:"2-mock-featureprobe-toggle",level:3},{value:"Target Method",id:"target-method",level:4},{value:"Unit Test Code",id:"unit-test-code",level:4},{value:"Customize SDK",id:"customize-sdk",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spring-boot-starter"},"Spring Boot Starter"),(0,n.kt)("p",null,"FeatureProbe is an open source feature management service.\nThis article describes how to use the FeatureProbe SDK in a Spring Boot project."),(0,n.kt)("admonition",{title:"SDK quick links",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In addition to this reference guide, we provide source code, API reference documentation, and sample applications at the following links:"),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Resource")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Location")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GitHub repository"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/featureprobe-spring-boot-starter"},"featureprobe-spring-boot-starter"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sample applications"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Published module"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.featureprobe/featureprobe-spring-boot-starter"},"Maven")))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For users who use FeatureProbe for the first time, we strongly recommend that you return to this article after reading ",(0,n.kt)("a",{parentName:"p",href:"../../tutorials/rollout_tutorial/"},"Gradual Rollout Tutorial"))),(0,n.kt)("h2",{id:"access-featureprobe"},"Access FeatureProbe"),(0,n.kt)("p",null,"For the Spring Boot project, FeatureProbe provides an out of the box starter to facilitate the rapid integration of FeatureProbe in Spring Boot."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The service SDK uses asynchronous connection to the FeatureProbe server to pull the decision rules,\nand the decision rules will be cached locally. All interfaces exposed to user code only involve memory operations,\nso you don't need to worry about performance issues when calling.")),(0,n.kt)("h3",{id:"step-1-install-featureprobe-starter"},"Step 1. Install FeatureProbe Starter"),(0,n.kt)("p",null,"First, install the FeatureProbe Starter as a dependency in your application."),(0,n.kt)("h4",{id:"apache-maven"},"Apache Maven"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.featureprobe</groupId>\n    <artifactId>featureprobe-spring-boot-starter</artifactId>\n    <version>1.4.0</version>\n</dependency>\n")),(0,n.kt)("h4",{id:"gradle-groovy-dsl"},"Gradle Groovy DSL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"implementation 'com.featureprobe:featureprobe-spring-boot-starter:1.4.0'\n")),(0,n.kt)("h3",{id:"step-2-config-featureprobe-instance"},"Step 2. Config FeatureProbe instance"),(0,n.kt)("p",null,"After installing and importing Starter, configure the required FeatureProbe instance according to the current environment."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  featureprobe:\n    event-url: https://featureprobe.io/server/api/events\n    synchronizer-url: https://featureprobe.io/server/api/server-sdk/toggles\n    sdk-key: server-9e53c5db4fd75049a69df8881f3bc90edd58fb06\n    refresh-interval: 5\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"config"),(0,n.kt)("th",{parentName:"tr",align:"left"},"describe"),(0,n.kt)("th",{parentName:"tr",align:"right"},"required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"spring.featureprobe.event-url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"events upload Url"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Y")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"spring.featureprobe.synchronizer-url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"toggle data synchronization Url"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Y")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"spring.featureprobe.sdk-key"),(0,n.kt)("td",{parentName:"tr",align:"left"},"current environment SDK KEY"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Y")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"spring.featureprobe.refresh-interval"),(0,n.kt)("td",{parentName:"tr",align:"left"},"data synchronization frequency\uff08s\uff09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N")))),(0,n.kt)("h3",{id:"step-3-use-the-feature-toggle"},"Step 3. Use the feature toggle"),(0,n.kt)("p",null,"You can use sdk to check which variation a particular user will receive for a given feature flag."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@Resource\nFeatureProbe fpClient;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'FPUser user=new FPUser();\nuser.with("ATTRIBUTE_NAME_IN_RULE",VALUE_OF_ATTRIBUTE);    // Call with() for each attribute used in Rule.\nboolean boolValue=fpClient.boolValue("YOUR_TOGGLE_KEY",user,false);\nif(boolValue){\n// the code to run if the toggle is on\n}else{\n// the code to run if the toggle is off\n}\n')),(0,n.kt)("h3",{id:"step-4-close-featureprobe-client"},"Step 4. Close FeatureProbe Client"),(0,n.kt)("p",null,"Close the client before exiting to ensure accurate data reporting."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"fpClient.close();\n")),(0,n.kt)("h2",{id:"mock-featureprobe-for-unittest"},"Mock FeatureProbe for Unittest"),(0,n.kt)("p",null,"You can mock FeatureProbe SDK returned value, to run unittest of your code."),(0,n.kt)("h3",{id:"1-install-powermock-sdk"},"1. Install powermock SDK:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.powermock</groupId>\n    <artifactId>powermock-api-mockito2</artifactId>\n    <version>2.0.9</version>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.powermock</groupId>\n    <artifactId>powermock-module-junit4</artifactId>\n    <version>2.0.9</version>\n    <scope>test</scope>\n</dependency>\n")),(0,n.kt)("h3",{id:"2-mock-featureprobe-toggle"},"2. Mock FeatureProbe Toggle"),(0,n.kt)("h4",{id:"target-method"},"Target Method"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@AllArgsConstructor\n@Service\npublic class DemoService {\n\n    FeatureProbe fp;\n\n    public boolean businessFunction(String userId, String tel) {\n        FPUser fpUser = new FPUser(userId);\n        fpUser.with("tel", tel);\n        return fp.boolValue("is_tester", fpUser, false);\n    }\n}\n')),(0,n.kt)("h4",{id:"unit-test-code"},"Unit Test Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@RunWith(PowerMockRunner.class)\n@PrepareForTest({FeatureProbe.class})\npublic class FeatureProbeTest {\n\n    @Test\n    public void test() {\n        FeatureProbe fp = PowerMockito.mock(FeatureProbe.class);\n        DemoService demoService = new DemoService(fp);\n        Mockito.when(fp.boolValue(anyString(), any(FPUser.class), anyBoolean())).thenReturn(true);\n        boolean tester = demoService.businessFunction("user123", "12397347232");\n        assert tester;\n    }\n\n}\n')),(0,n.kt)("h2",{id:"customize-sdk"},"Customize SDK"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This paragraph applies to users who want to customize this SDK, or contribute code to this SDK through the open source community. Other users can skip this section.")),(0,n.kt)("p",null,"We provide an acceptance test of this SDK to ensure that the modified SDK is compatible with the native rules of FeatureProbe.\nIntegration test cases are added as submodules of each SDK repository. So be sure to pull the submodule first to get the latest integration tests before running the tests."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init --recursive\nmvn test\n")))}c.isMDXComponent=!0}}]);