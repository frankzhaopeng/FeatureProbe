"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[5310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:6},s="Rust SDK",i={unversionedId:"how-to/Server-Side SDKs/rust-sdk",id:"how-to/Server-Side SDKs/rust-sdk",title:"Rust SDK",description:"FeatureProbe is an open source feature management service. This SDK is used to control features in Rust programs. This SDK is designed primarily for use in multi-user systems such as web servers and applications.",source:"@site/docs/how-to/Server-Side SDKs/rust-sdk.md",sourceDirName:"how-to/Server-Side SDKs",slug:"/how-to/Server-Side SDKs/rust-sdk",permalink:"/FeatureProbe/how-to/Server-Side SDKs/rust-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/how-to/Server-Side SDKs/rust-sdk.md",tags:[],version:"current",lastUpdatedAt:1678090719,formattedLastUpdatedAt:"Mar 6, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Python SDK",permalink:"/FeatureProbe/how-to/Server-Side SDKs/python-sdk"},next:{title:"Client-Side SDKs",permalink:"/FeatureProbe/category/client-side-sdks"}},l={},u=[{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Step 1. Install the Rust SDK",id:"step-1-install-the-rust-sdk",level:3},{value:"Step 2. Create a FeatureProbe instance",id:"step-2-create-a-featureprobe-instance",level:3},{value:"Step 3. Use the feature toggle",id:"step-3-use-the-feature-toggle",level:3},{value:"Step 4. Close FeatureProbe Client before program exits",id:"step-4-close-featureprobe-client-before-program-exits",level:3},{value:"Track Events",id:"track-events",level:2},{value:"Unit Testing",id:"unit-testing",level:2},{value:"Customize SDK",id:"customize-sdk",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rust-sdk"},"Rust SDK"),(0,n.kt)("p",null,"FeatureProbe is an open source feature management service. This SDK is used to control features in Rust programs. This SDK is designed primarily for use in multi-user systems such as web servers and applications."),(0,n.kt)("admonition",{title:"SDK quick links",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In addition to this reference guide, we provide source code, API reference documentation, and sample applications at the following links:"),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Resource")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Location")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDK API documentation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.rs/feature-probe-server-sdk/latest/feature_probe_server_sdk/"}," SDK API docs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GitHub repository"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/server-sdk-rust"},"Server-SDK for Rust"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sample applications"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/server-sdk-rust/blob/main/examples/demo.rs"},"Demo code"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Published module"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://crates.io/crates/feature-probe-server-sdk"},"crates.io")))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For users who are using FeatureProbe for the first time, we strongly recommend that you return to this article to continue reading after reading the ",(0,n.kt)("a",{parentName:"p",href:"../../tutorials/rollout_tutorial/"},"Gradual Rollout Tutorial"),".")),(0,n.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,n.kt)("p",null,"Backend projects usually only need to instantiate a FeatureProbe SDK (Client)."),(0,n.kt)("p",null,"According to the requests of different users, call the FeatureProbe Client to obtain the toggle result for each user."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The server-side SDK uses an asynchronous connection to the FeatureProbe server to pull judgment rules, and the judgment rules will be cached locally. All interfaces exposed to user code only involve memory operations, so there is no need to worry about performance issues when calling.")),(0,n.kt)("h3",{id:"step-1-install-the-rust-sdk"},"Step 1. Install the Rust SDK"),(0,n.kt)("p",null,"First, install the FeatureProbe SDK as a dependency in your application."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cargo install cargo-edit\ncargo add feature-probe-server-sdk-rs --allow-prerelease\n")),(0,n.kt)("p",null,"Next, import the FeatureProbe SDK in your application code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use feature_probe_server_sdk::{FPConfig, FPUser, FeatureProbe};\n")),(0,n.kt)("h3",{id:"step-2-create-a-featureprobe-instance"},"Step 2. Create a FeatureProbe instance"),(0,n.kt)("p",null,"After you install and import the SDK, create a single, shared instance of the FeatureProbe sdk."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let remote_url = url::Url::parse("http://localhost:4007").expect("invalid url");\n    // Server SDK key in Project List Page.\n    let server_sdk_key = "server-7fa2f771259cb7235b96433d70b91e99abcf6ff8".to_owned();\n\n    let config = FPConfig {\n        remote_url,\n        server_sdk_key,\n        refresh_interval: Duration::from_secs(5),\n        start_wait: Some(Duration::from_secs(5)),\n        ..Default::default()\n    };\n\n    let fp =  FeatureProbe::new(config);\n    if !fp.initialized() {\n        println!("FeatureProbe failed to initialize, will return default value");\n    }\n}\n')),(0,n.kt)("h3",{id:"step-3-use-the-feature-toggle"},"Step 3. Use the feature toggle"),(0,n.kt)("p",null,"You can use sdk to check which variation a particular user will receive for a given feature flag."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let user = FPUser::new().with("ATTRIBUTE_NAME_IN_RULE", VALUE_OF_ATTRIBUTE);\nlet show_feature = fp.bool_value("YOUR_TOGGLE_KEY", &user, false);\n\nif show_feature {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,n.kt)("h3",{id:"step-4-close-featureprobe-client-before-program-exits"},"Step 4. Close FeatureProbe Client before program exits"),(0,n.kt)("p",null,"Close the client before exiting to ensure accurate data reporting."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"fp.close();\n")),(0,n.kt)("h2",{id:"track-events"},"Track Events"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The Rust SDK supports event tracking from version 2.0.1.")),(0,n.kt)("p",null,"The event tracking feature can record the actions taken by the user in the application as events.\nEvents are related to toggle's metrics. For more information about event analysis, please read ",(0,n.kt)("a",{parentName:"p",href:"../../tutorials/analysis"},"Event Analysis"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'fp.track("YOUR_CUSTOM_EVENT_NAME", &user, None);\n// Providing a metric value to track\nfp.track("YOUR_CUSTOM_EVENT_NAME", &user, Some(5.5));\n')),(0,n.kt)("h2",{id:"unit-testing"},"Unit Testing"),(0,n.kt)("p",null,"FeatureProbe SDK provides a set of mock mechanism, which can specify the return value of FeatureProbe SDK in unit test."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let fp = FeatureProbe::new_for_test("toggle_1", Value::Bool(false));\nlet u = FPUser::new();\nassert_eq!(fp.bool_value("toggle_1", &u, true), false);\n\nlet mut toggles: HashMap<String, Value> = HashMap::new();\ntoggles.insert("toggle_2".to_owned(), json!(12.5));\ntoggles.insert("toggle_3".to_owned(), json!("value"));\nlet fp = FeatureProbe::new_for_tests(toggles);\nassert_eq!(fp.number_value("toggle_2", &u, 20.0), 12.5);\nassert_eq!(fp.string_value("toggle_3", &u, "val".to_owned()), "value");\n')),(0,n.kt)("h2",{id:"customize-sdk"},"Customize SDK"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This paragraph applies to users who want to customize this SDK, or contribute code to this SDK through the open source community. Other users can skip this section.")),(0,n.kt)("p",null,"We provide an acceptance test of this SDK to ensure that the modified SDK is compatible with the native rules of FeatureProbe.\nIntegration test cases are added as submodules of each SDK repository. So be sure to pull the submodule first to get the latest integration tests before running the tests."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git pull --recurse-submodules\ncargo test\n")))}c.isMDXComponent=!0}}]);