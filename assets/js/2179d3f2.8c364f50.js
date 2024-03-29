"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[7445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},i="Source Code Deploy Guide",p={unversionedId:"how-to/deploy/deployment-source-code",id:"how-to/deploy/deployment-source-code",title:"Source Code Deploy Guide",description:"This document describes how to deploy each module through source code compilation. Assume that it is deployed according to the following architecture:",source:"@site/docs/how-to/deploy/deployment-source-code.md",sourceDirName:"how-to/deploy",slug:"/how-to/deploy/deployment-source-code",permalink:"/FeatureProbe/how-to/deploy/deployment-source-code",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/how-to/deploy/deployment-source-code.md",tags:[],version:"current",lastUpdatedAt:1675137487,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"All In One Deploy Guide",permalink:"/FeatureProbe/how-to/deploy/deployment-docker-all-in-one"},next:{title:"UI",permalink:"/FeatureProbe/how-to/develop/ui-local-develop"}},l={},s=[{value:"Create database",id:"create-database",level:2},{value:"Compile and deploy API service",id:"compile-and-deploy-api-service",level:2},{value:"Compilation steps",id:"compilation-steps",level:3},{value:"Deployment steps",id:"deployment-steps",level:3},{value:"Compile and deploy Server service",id:"compile-and-deploy-server-service",level:2},{value:"Compilation steps",id:"compilation-steps-1",level:3},{value:"Deployment steps",id:"deployment-steps-1",level:3},{value:"Compile and deploy UI service",id:"compile-and-deploy-ui-service",level:2},{value:"Compilation steps",id:"compilation-steps-2",level:3},{value:"Deployment steps",id:"deployment-steps-2",level:3},{value:"Configure Nginx",id:"configure-nginx",level:2},{value:"Service verification",id:"service-verification",level:2},{value:"Platform",id:"platform",level:3},{value:"Server Side SDK Access",id:"server-side-sdk-access",level:3}],d={toc:s};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"source-code-deploy-guide"},"Source Code Deploy Guide"),(0,n.kt)("p",null,"This document describes how to deploy each module through source code compilation. Assume that it is deployed according to the following architecture:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"deploy",src:a(3110).Z,width:"669",height:"385"})),(0,n.kt)("p",null,"There are three main modules that need to be compiled and deployed:"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"From v1.11.0 and later versions, the API service will integrate the UI service. After starting the API service, the root path to access the API service is the FeatureProbe UI page.\nAccording to the requirements of the deployment architecture, you can choose whether to deploy UI services separately.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Sample machine"),(0,n.kt)("th",{parentName:"tr",align:null},"Deployment module"),(0,n.kt)("th",{parentName:"tr",align:null},"Port"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10.100.1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"4008")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10.100.1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe UI"),(0,n.kt)("td",{parentName:"tr",align:null},"4009(Nginx)(Optional)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10.100.1.2"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"4007")))),(0,n.kt)("h2",{id:"create-database"},"Create database"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Environment preparation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MySQL 5.7+"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the ",(0,n.kt)("inlineCode",{parentName:"p"},"feature_probe")," database:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE feature_probe;\n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"There is no need to manually create table structures. All tables and initialization data are automatically created when the API service is started for the first time. If you want to import DML/DDL manually, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/reference/database-setup"},"Database Setup")," document.")),(0,n.kt)("h2",{id:"compile-and-deploy-api-service"},"Compile and deploy API service"),(0,n.kt)("h3",{id:"compilation-steps"},"Compilation steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compilation environment"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"JDK 1.8+"),(0,n.kt)("li",{parentName:"ul"},"Maven 2.0+ : ",(0,n.kt)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"how to install")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain the source code and compile the deployment package:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/FeatureProbe.git\ncd FeatureProbe/api\nmvn clean package\n")),(0,n.kt)("p",null,"   After the compilation is completed, a jar deployment file named after the version will be generated in the current directory, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"target/api-1.1.0.jar"),"."),(0,n.kt)("h3",{id:"deployment-steps"},"Deployment steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deployment environment"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"JDK 1.8+"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Place ",(0,n.kt)("inlineCode",{parentName:"p"},"api-1.1.0.jar")," in the deployment server, fill in the database link configuration, and start it with ",(0,n.kt)("inlineCode",{parentName:"p"},"4008")," port:"),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The database-related information in the following script needs to be replaced with the actual database information you use.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar api-1.1.0.jar --server.port=4008 \\\n     --spring.datasource.jdbc-url=jdbc:mysql://{MYSQL_DATABASE_IP}:{MYSQL_PORT}/feature_probe \\  # \u6570\u636e\u5e93 IP/\u7aef\u53e3\u548c\u5e93\u540d\n     --spring.datasource.username={MYSQL_USERNAME} \\\n     --spring.datasource.password={MYSQL_PASSWORD} \n")),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For a more detailed description of the startup parameters of the API service, see ",(0,n.kt)("a",{parentName:"p",href:"../../reference/deployment-configuration#featureprobe-api"},"FeatureProbe API parameters")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check whether the service is running successfully"),(0,n.kt)("p",{parentName:"li"},"Run on the deployment machine:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://localhost:4008/actuator/health"\n')),(0,n.kt)("p",{parentName:"li"},"If the following information is displayed, the startup is successful:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    status: "UP"\n}\n')))),(0,n.kt)("h2",{id:"compile-and-deploy-server-service"},"Compile and deploy Server service"),(0,n.kt)("h3",{id:"compilation-steps-1"},"Compilation steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Environment preparation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rust"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Official website installation")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Or, install from ",(0,n.kt)("a",{parentName:"p",href:"https://rsproxy.cn/"},"domestic mirror")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'1. Modify ~/.zshrc or ~/.bashrc:\n~~~bash\nexport RUSTUP_DIST_SERVER="https://rsproxy.cn"\nexport RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"\n~~~\n2. Install\n~~~bash\n$ curl --proto \'=https\' --tlsv1.2 -sSf https://rsproxy.cn/rustup-init.sh | sh\n~~~\n')),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Pay attention to the prompt on the last line after installation, follow the prompt command to reload the environment variable, and the installation will take effect."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Configure ",(0,n.kt)("a",{parentName:"p",href:"https://rsproxy.cn/"},"dependant download mirror"),", create file: ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.cargo/config")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"[source.crates-io]\n# To use sparse index, change 'rsproxy' to 'rsproxy-sparse'\nreplace-with = 'rsproxy'\n\n[source.rsproxy]\nregistry = \"https://rsproxy.cn/crates.io-index\"\n[source.rsproxy-sparse]\nregistry = \"sparse+https://rsproxy.cn/index/\"\n\n[registries.rsproxy]\nindex = \"https://rsproxy.cn/crates.io-index\"\n\n[net]\ngit-fetch-with-cli = true\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get the source code and compile the deployment package"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/FeatureProbe.git\n")),(0,n.kt)("p",{parentName:"li"},"Compile in the source code directory:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd server\ncargo build --release --verbose\n")),(0,n.kt)("p",{parentName:"li"},"After compiling, an executable binary file will be generated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"target/release/")," directory:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls target/release/ \nfeature_probe_server\n")))),(0,n.kt)("h3",{id:"deployment-steps-1"},"Deployment steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Environment preparation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"none"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Put the generated ",(0,n.kt)("inlineCode",{parentName:"p"},"feature_probe_server")," file on the server and create the startup script ",(0,n.kt)("inlineCode",{parentName:"p"},"start-feature-probe-server.sh"),":"),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In actual use, you need to modify the ip and port in the script below to the ip and port of the actual deployment environment of your API service.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#/bin/bash\n\nexport FP_SERVER_PORT=4007 # FeatureProbe Server port\nexport FP_TOGGLES_URL=http://10.100.1.1:4008/internal/server/toggles # FeatureProbe API IP and port\nexport FP_EVENTS_URL=http://10.100.1.1:4008/internal/server/events\nexport FP_KEYS_URL=http://10.100.1.1:4008/internal/server/sdk_keys\nexport FP_REFRESH_SECONDS=1\n\n./feature_probe_server\n")),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For a more detailed description of the startup parameters of the Server service, see ",(0,n.kt)("a",{parentName:"p",href:"../../reference/deployment-configuration#featureprobe-server"},"FeatureProbe Server parameters")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the startup script to run the service: ",(0,n.kt)("inlineCode",{parentName:"p"},"sh ./start-feature-probe-server.sh"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check whether the service is running successfully, and run it on the deployment machine:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://localhost:4007/"\n')),(0,n.kt)("p",{parentName:"li"},"If the following information is displayed, the startup is successful:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},"<h1>Feature Probe Server</h1>\n")))),(0,n.kt)("h2",{id:"compile-and-deploy-ui-service"},"Compile and deploy UI service"),(0,n.kt)("h3",{id:"compilation-steps-2"},"Compilation steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Environment preparation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Node.js 16.13+ : ",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/zh-cn/download/"},"Download"))),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It is recommended to switch to the npm China mirror station in China: ",(0,n.kt)("inlineCode",{parentName:"p"},"npm config set registry https://registry.npmmirror.com/")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain the source code and compile a deployable static file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/FeatureProbe.git\ncd FeatureProbe/ui\nnpm install\nnpm run build\n")),(0,n.kt)("p",{parentName:"li"},"After compiling, deployable static files will be generated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," directory. As follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls build\nasset-manifest.json favicon.ico index.html static/\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"[Optional]"," Configure output path:"),(0,n.kt)("p",{parentName:"li"},"For production environment deployment, there are two options for domain name configuration:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separately deploy the FeatureProbe service as an independent domain name, for example: directly access the FeatureProbe entry page through ",(0,n.kt)("a",{parentName:"li",href:"https://your.domain.com"},"https://your.domain.com")),(0,n.kt)("li",{parentName:"ul"},"Share a domain name with several services, and distinguish services in the form of path (/path), for example: access the FeatureProbe entry page through ",(0,n.kt)("a",{parentName:"li",href:"https://your.domain.com/featureprobe"},"https://your.domain.com/featureprobe"))),(0,n.kt)("p",{parentName:"li"},"At present, we support the first method by default. If you deploy in the second method, you need to make some changes to the source code:"),(0,n.kt)("p",{parentName:"li"},"(1) Open ",(0,n.kt)("inlineCode",{parentName:"p"},"craco.config.js")," file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ui\nvi craco.config.js\n")),(0,n.kt)("p",{parentName:"li"},"(2) On the basis of the original configuration, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"publicPath")," field in the webpack - configure - output object, for example, set the value to: /featureprobe/"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n   webpack: {\n      configure: {\n         output: {\n            publicPath: '/featureprobe/'\n         },\n      }\n   }\n};\n")),(0,n.kt)("p",{parentName:"li"},"(3) After executing the ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn build")," command, view the index.html file through ",(0,n.kt)("inlineCode",{parentName:"p"},"vi build/index.html"),", you can find that the static resource js and css files in the file have been added with the prefix configured in publicPath"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"yarn build",src:a(3518).Z,width:"1518",height:"698"})),(0,n.kt)("p",{parentName:"li"},"(4) In order to speed up access, you can choose to upload static resource (js, css, etc.) files to the CDN server, and you can also configure publicPath as the address of the CDN during the compilation phase:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n   webpack: {\n      configure: {\n         output: {\n            publicPath: 'https://cdn.domain.com/'\n         },\n      }\n   }\n};\n")),(0,n.kt)("p",{parentName:"li"},"The static resources (js, css, etc.) in the compiled html are all paths carrying the CDN address:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"yarn build CND",src:a(9492).Z,width:"1614",height:"746"})))),(0,n.kt)("h3",{id:"deployment-steps-2"},"Deployment steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Environment preparation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Nginx"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy all the files and folders under ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," generated by compilation to the ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/")," directory."))),(0,n.kt)("h2",{id:"configure-nginx"},"Configure Nginx"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create Nginx configuration: ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/feature_probe.conf")),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In actual use, you need to modify the ip and port in the script below to the ip and port of the actual deployment environment of the service.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"upstream featureProbeAPI {\n    server 10.100.1.1:4008; # FeatureProbe API IP and port\n}\n\n\nupstream featureProbeServer {\n    server 10.100.1.2:4007; # FeatureProbe Server IP and port\n}\n\nserver {\n    listen 4009; # UI port\n\n    location / {\n        index index.html index.htm;\n        root /usr/share/nginx/html; # UI static file directory\n        try_files $uri /index.html;\n    }\n\n    location /api { # Unified forwarding to featureProbeAPI service when accessing /api\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-NginX-Proxy true;\n        proxy_pass http://featureProbeAPI/api;\n        proxy_ssl_session_reuse off;\n        proxy_set_header Host $http_host;\n        proxy_cache_bypass $http_upgrade;\n        proxy_redirect off;\n    }\n\n    location /server/api { # Unified forwarding to featureProbeServer service when accessing /server/api\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-NginX-Proxy true;\n        proxy_pass http://featureProbeServer/api;\n        proxy_ssl_session_reuse off;\n        proxy_set_header Host $http_host;\n        proxy_cache_bypass $http_upgrade;\n        proxy_redirect off;\n    }\n}\n")),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[optional]"),(0,n.kt)("p",{parentName:"admonition"},"In actual use, if you configure a custom output path, for example: configure ",(0,n.kt)("inlineCode",{parentName:"p"},"publicPath")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"/featureprobe/"),", you need to change ",(0,n.kt)("inlineCode",{parentName:"p"},"location /")," in the above nginx configuration to ",(0,n.kt)("inlineCode",{parentName:"p"},"location /featureprobe/")," to be correct matches static files such as html, js and css."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"location /featureprobe/ {\n   index index.html index.htm;\n   root /usr/share/nginx/html; # UI static file directory\n   try_files $uri /index.html;\n}\n")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute ",(0,n.kt)("inlineCode",{parentName:"p"},"reload nginx")," configuration to make the above configuration take effect:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"nginx -s reload\n")))),(0,n.kt)("h2",{id:"service-verification"},"Service verification"),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In actual use, you need to modify the following ip and port to the ip and port of the actual deployment environment of your ngnix service.")),(0,n.kt)("p",null,"Visit ",(0,n.kt)("inlineCode",{parentName:"p"},"http://10.100.1.1:4009")," in the browser and use the following account and password to log in to verify whether the deployment is successful:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"username: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")),(0,n.kt)("li",{parentName:"ul"},"password: ",(0,n.kt)("inlineCode",{parentName:"li"},"Pass1234"))),(0,n.kt)("h3",{id:"server-side-sdk-access"},"Server Side SDK Access"),(0,n.kt)("p",null,"The server ",(0,n.kt)("inlineCode",{parentName:"p"},"remote_uri")," address used by the SDK connection is the ngnix machine address and service port configured above, plus the path ",(0,n.kt)("inlineCode",{parentName:"p"},"/server"),", for example: ",(0,n.kt)("inlineCode",{parentName:"p"},"http://10.100.1.1:4009/server")," in the above example."),(0,n.kt)("p",null,"For specific steps, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/FeatureProbe/tutorials/rollout_tutorial/"},"Rollout Tutorial")))}m.isMDXComponent=!0},3110:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/featureprobe_deploy_from_code-3c545a1ffe8031efda197331d0a0e33a.png"},3518:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/yarn_build-19b5be2ea5e37f0a80ad7e466d3f1e64.png"},9492:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/yarn_build_cdn-28073ad57bd51808c5b448bbe40f313c.png"}}]);