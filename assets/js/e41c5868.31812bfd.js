"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[3169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(a),h=r,u=g["".concat(p,".").concat(h)]||g[h]||d[h]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:6},o="How to use Approvals",l={unversionedId:"how-to/platform/approval",id:"how-to/platform/approval",title:"How to use Approvals",description:"In many cases, the R&D team is very strict about online change management, and approval can reduce the risk of going online. In addition, FeatureProbe supports setting different approval policies in different environments, and the approval policy can be configured more finely to improve approval efficiency.",source:"@site/docs/how-to/platform/approval.md",sourceDirName:"how-to/platform",slug:"/how-to/platform/approval",permalink:"/FeatureProbe/how-to/platform/approval",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/how-to/platform/approval.md",tags:[],version:"current",lastUpdatedAt:1672898221,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"How to use segments",permalink:"/FeatureProbe/how-to/platform/segments"},next:{title:"How to use webhook",permalink:"/FeatureProbe/how-to/platform/webhooks"}},p={},s=[{value:"Approval settings",id:"approval-settings",level:2},{value:"trigger approval",id:"trigger-approval",level:2},{value:"Approval Center",id:"approval-center",level:2},{value:"toggle list and toggle targeting",id:"toggle-list-and-toggle-targeting",level:2},{value:"toggle targeting",id:"toggle-targeting",level:3},{value:"switch configuration page",id:"switch-configuration-page",level:3}],c={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-approvals"},"How to use Approvals"),(0,r.kt)("p",null,"In many cases, the R&D team is very strict about online change management, and approval can reduce the risk of going online. In addition, FeatureProbe supports setting different approval policies in different environments, and the approval policy can be configured more finely to improve approval efficiency."),(0,r.kt)("h2",{id:"approval-settings"},"Approval settings"),(0,r.kt)("p",null,'In the "Environment" under the project, you can set approvers and enable approval separately.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"toggle targeting screenshot",src:a(7199).Z,width:"2818",height:"1384"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Environment: All environments under the project are shown here."),(0,r.kt)("li",{parentName:"ol"},"Approver: Support setting the same or different approvers for each item. Approvers receive release approval for all toggles in the environment."),(0,r.kt)("li",{parentName:"ol"},"Enable Approval: Approval is only enabled for certain environments. After the approval is enabled, all toggles in this environment need to go through the approval process.  you need to wait for all the approvals to be completed before closing the approval)."),(0,r.kt)("li",{parentName:"ol"},"Click Save to complete the approval settings, and the approval will be officially started.")),(0,r.kt)("h2",{id:"trigger-approval"},"trigger approval"),(0,r.kt)("p",null,"After the approval setting is completed, in the environment where the approval is enabled, if the toggle is released, the approval will be triggered."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sdk screenshot",src:a(2291).Z,width:"1616",height:"994"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Modify the toggle configuration information, and click "Request Approval", and you will see the approvers for this release.'),(0,r.kt)("li",{parentName:"ol"},"Changes description: The change description is required at this time, and it will be sent to the approver as the title of the approval."),(0,r.kt)("li",{parentName:"ol"},'Click "Confirm": At this time, the approval is officially initiated, and the approval has been transferred to the approver.')),(0,r.kt)("h2",{id:"approval-center"},"Approval Center"),(0,r.kt)("p",null,"After the release, the approver can see it in the ","[Approval Center]","~ You can click to enter the toggle to approve, and the applicant can also see it in the application list.\n",(0,r.kt)("img",{alt:"history screenshot",src:a(4987).Z,width:"2824",height:"768"}),"\n",(0,r.kt)("img",{alt:"history screenshot",src:a(7821).Z,width:"2828",height:"1390"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Approval Status: (Pending review, Accepted, Declined, Skipped, Withdrawn)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Pending revie: After the approval is released, it is in the status of "Pending revie"'),(0,r.kt)("li",{parentName:"ul"},'Accepted: "Pending revie" toggle, after the approver approves ',"[Passed]",', it is in the "Accepted" state'),(0,r.kt)("li",{parentName:"ul"},'Declined: "Pending revie" toggle, after the approver ',"[Rejected]",' approves, it is in the "Declined" state'),(0,r.kt)("li",{parentName:"ul"},'Skipped: "Pending revie" toggle, after the applicant ',"[Skip Approval and Publish]",', it is in the "Skipped" state'),(0,r.kt)("li",{parentName:"ul"},'Withdrawn: "Pending revie" toggle, after the applicant ',"[withdraws]",' approval, it is in the status of "Withdrawn"')))),(0,r.kt)("h2",{id:"toggle-list-and-toggle-targeting"},"toggle list and toggle targeting"),(0,r.kt)("p",null,"After approval, the applicant needs to click ","[Publish]"," to complete the release."),(0,r.kt)("h3",{id:"toggle-targeting"},"toggle targeting"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"history screenshot",src:a(270).Z,width:"2826",height:"1394"})),(0,r.kt)("h3",{id:"switch-configuration-page"},"switch configuration page"),(0,r.kt)("p",null,"[Pending approval]"," - ","[Applicant]",":\n",(0,r.kt)("img",{alt:"history screenshot",src:a(9748).Z,width:"2358",height:"156"}),"\n","[Pending approval]"," - ","[Approver]",":\n",(0,r.kt)("img",{alt:"history screenshot",src:a(9327).Z,width:"2350",height:"114"}),"\n\u3010To be released\u3011-\u3010Applicant\u3011\uff1a\n",(0,r.kt)("img",{alt:"history screenshot",src:a(2865).Z,width:"2350",height:"112"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switch Status: (Pending review, Pending Publishing, Declined, Published)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Pending review: After the approval is released, it is in the status of "Pending review"'),(0,r.kt)("li",{parentName:"ul"},"Pending Publishing: After the approver approves ","[Pass]",', it is in the "Pending Publishing" state. At this time, the applicant can click ',"[Publish]"," or ","[Abandon]"),(0,r.kt)("li",{parentName:"ul"},"Declined: After approval by the approver ","[Rejected]",', the status is "Declined". At this time, the applicant needs to click ',"[Modify]"," or ","[Abandon]"),(0,r.kt)("li",{parentName:"ul"},'Published: "Pending Publishing" toggle, after the applicant clicks ',"[Publish]",', it will be in the "Published" state. The "Pending review" toggle, after the applicant clicks ',"[Skip Approval and Publish]",', is also in the "Published" state.\nNote: Once the approval is turned on, the toggle is equivalent to being locked. Before the approval is completed (finally "publish" or "abandon"), others cannot edit the toggle configuration and click publish again.')))),(0,r.kt)("p",null,"In addition: In addition to the normal process of passing the approval and completing the release, there are also some exception handling functions set for special scenarios, as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applicant:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Skip approval and publish: the situation is urgent, the applicant needs to skip this approval and publish it online directly"),(0,r.kt)("li",{parentName:"ul"},"Withdrawal: The content of the release is wrong, and the applicant terminates the approval and release"),(0,r.kt)("li",{parentName:"ul"},"Abandon: After the approval is passed, the applicant abandons the change to the online application due to special reasons"))),(0,r.kt)("li",{parentName:"ul"},"Approver:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rejected: the published content does not meet expectations, and the approval fails")))))}d.isMDXComponent=!0},7821:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application_list_en-3fabdc12e491cbbbaca1467b973792c9.png"},4987:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/approval_list_en-eefc2194e2d7e0017bc1561b2e1d5415.png"},7199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/approval_settings_en-cfa27bfd0788e7911bef40ab8adcd5a4.png"},2865:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pending_publish_en-9d26afe150342ce504a26b24956405a5.png"},9327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pending_review_p_en-8e27f4a1d1afa1f72f6ba8990beb1574.png"},9748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pending_review_q_en-50a3435823898d7ca2df18c5d5dba75a.png"},2291:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/publish_en-4835106d8efcaa80623ea838bdb7fc7f.png"},270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/toggle_approval_en-3917fb4109d801a75a4bdd5a5d86af77.png"}}]);