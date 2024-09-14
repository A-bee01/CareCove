import{e as Ce,f as we,r as d,i as P,P as D,c as r,b as _e,a as t,j as u,h as g,k as se,F as w,m as _,q as ne,n as y,t as i,v as oe,Q as Ne,d as Se,o,R as Be,L as Pe}from"./vwRdSaPh.js";import{H as De}from"./BDp76w7U.js";import{S as re}from"./BVHvhCMQ.js";import"./DlAUqK2U.js";const Oe={class:"flex flex-col min-h-screen"},Ue={class:"flex-1 bg-[ffffff] dark:bg-[ffffff] py-8 px-6 md:px-8"},Ae={class:"max-w-3xl mx-auto grid gap-8"},Te={key:0,class:"bg-white dark:bg-[#10673b] rounded-lg shadow p-6"},Ge={key:0},qe={class:"mb-4"},Ee=["value"],Ve={class:"mb-4"},Re=["disabled"],Fe=["value"],Ie={key:2,class:"mt-4 dark:text-white"},Le=["onClick"],Me={class:"font-bold"},je={class:"text-blue-500"},He={key:1,class:"bg-white dark:bg-[#10673b] rounded-lg shadow p-6"},Qe={class:"mb-4"},$e={key:0,class:"text-red-500 mt-2"},Ke={class:"block text-gray-700 dark:text-gray-300 mb-2"},ze=["disabled"],Je={class:"mb-4"},We={class:"block text-gray-700 dark:text-gray-300 mb-2"},Xe={class:"mb-4 text-gray-700 dark:text-gray-300"},Ye=["for"],Ze=["onUpdate:modelValue","id","type","pattern"],et={class:"block text-gray-500 dark:text-gray-400"},tt=["disabled"],lt={__name:"donate",setup(at){const O=Ce(),{state:c,setOffering:ie,createExchange:le,formatAmount:de,deductAmount:st,filterOfferings:ue,satisfiesOfferingRequirements:ce,getOfferingById:fe}=we(),x=d(1),m=d(""),h=d(""),N=d(!1),s=d(null),l=d(""),S=d(""),v=d({}),B=d([]),k=P(()=>!ce(s.value,c.customerCredentials)),be=P(()=>c.payinCurrencies.length==0),U=d(!1);D(m,()=>{T()}),D(be,()=>{ke()}),D(()=>s.value,()=>{s.value&&me()});const me=()=>{const n=s.value.data.payout.currencyCode,e={GHS:{accountNumber:"1234567890",bankName:"Ghana Commercial Bank",swiftCode:"GCB123GH"},KES:{accountNumber:"0987654321",bankName:"Equity Bank",swiftCode:"EQBK456KE"},USD:{accountNumber:"111122223333",bankName:"Wells Fargo",swiftCode:"WFUS789"},GBP:{accountNumber:"444455556666",bankName:"Barclays",swiftCode:"BARCGB22"},NGN:{accountNumber:"777788889999",bankName:"First Bank Nigeria",swiftCode:"FBNINGLA"},BTC:{address:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"},USDC:{address:"0x4e7b1f7c9d3f3f7f3e1e1e1e1e1e1e1e1e1e1e1e"},AUD:{accountNumber:"1234567890",bankName:"Commonwealth Bank",swiftCode:"CBA123AU"},MXN:{accountNumber:"0987654321",bankName:"Banorte",swiftCode:"BAN456MX"}};e[n]&&(v.value=e[n])},A=P(()=>{var f,p;if(!s.value||!s.value.data.payin.max||!s.value.data.payin.min)return!0;const n=(f=s.value)==null?void 0:f.data.payin.min,e=(p=s.value)==null?void 0:p.data.payin.max;return l.value>=n&&l.value<=e}),T=()=>{if(m.value){const n=c.offerings.filter(f=>f.data.payin.currencyCode===m.value),e=new Set;n.forEach(f=>{e.add(f.data.payout.currencyCode)}),c.payoutCurrencies=Array.from(e),N.value=!0}else c.payoutCurrencies=[],N.value=!1},ve=()=>{m.value&&h.value&&(B.value=ue(m.value,h.value))},pe=n=>{s.value=n,ie(n),he(),x.value=2},ge=()=>{l.value&&s.value&&(S.value=de(l.value*s.value.data.payoutUnitsPerPayinUnit))},ye=()=>{if(!l.value){alert("Please enter the amount.");return}for(const n in s.value.data.payout.methods[0].requiredPaymentDetails.properties){if(!v.value[n]){alert(`Please enter ${s.value.data.payout.methods[0].requiredPaymentDetails.properties[n].title}.`);return}const e=s.value.data.payout.methods[0].requiredPaymentDetails.properties[n].pattern;if(e&&!v.value[n].match(e)){alert(`Please enter a valid ${s.value.data.payout.methods[0].requiredPaymentDetails.properties[n].title}.`);return}}xe()},xe=async()=>{U.value=!0,await le(s.value,l.value,v.value),O.push("/dashboard")},he=()=>{k.value&&(localStorage.setItem("selectedOffering",JSON.stringify(s.value)),O.push("/credentials"))},ke=()=>{if(localStorage.getItem("selectedOffering")){const n=JSON.parse(localStorage.getItem("selectedOffering"));s.value=fe(n.metadata.id),localStorage.removeItem("selectedOffering"),x.value=2}};return(n,e)=>{var f,p,G,q,E,V,R,F,I,L,M,j,H,Q,$,K,z,J,W,X,Y,Z,ee,te,ae;return o(),r("div",Oe,[_e(De),t("main",Ue,[t("div",Ae,[x.value===1?(o(),r("div",Te,[e[10]||(e[10]=t("h2",{class:"text-2xl font-bold mb-4 dark:text-white"},"Donate To A Cause",-1)),u(c).payinCurrencies.length?(o(),r("div",Ge,[t("div",qe,[e[6]||(e[6]=t("label",{class:"block text-gray-700 dark:text-gray-300 mb-2"},"From Currency",-1)),g(t("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>m.value=a),onChange:T,class:"w-full p-2 border rounded"},[e[5]||(e[5]=t("option",{disabled:"",value:""},"Select currency",-1)),(o(!0),r(w,null,_(u(c).payinCurrencies,a=>(o(),r("option",{key:a,value:a},i(a),9,Ee))),128))],544),[[se,m.value]])]),t("div",Ve,[e[8]||(e[8]=t("label",{class:"block text-gray-700 dark:text-gray-300 mb-2"},"To Currency",-1)),g(t("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>h.value=a),disabled:!N.value,class:"w-full p-2 border rounded"},[e[7]||(e[7]=t("option",{disabled:"",value:""},"Select currency",-1)),(o(!0),r(w,null,_(u(c).payoutCurrencies,a=>(o(),r("option",{key:a,value:a},i(a),9,Fe))),128))],8,Re),[[se,h.value]])]),t("button",{onClick:ve,class:"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-800 dark:text-white border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"}," Get Offerings ")])):(o(),ne(re,{key:1})),B.value.length?(o(),r("div",Ie,[e[9]||(e[9]=t("h2",{class:"text-2xl font-bold mb-4"},"Exchange Rate Offerings",-1)),t("ul",null,[(o(!0),r(w,null,_(B.value,a=>{var b;return o(),r("li",{key:a.id,onClick:C=>pe(a),class:"cursor-pointer p-4 border rounded mb-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"},[t("h3",Me,i((b=u(c).pfiAllowlist.find(C=>C.pfiUri===a.metadata.from))==null?void 0:b.pfiName),1),t("p",null,i(a.data.description),1),t("p",je,i(a.data.payoutUnitsPerPayinUnit)+" "+i(a.data.payout.currencyCode)+" for 1 "+i(a.data.payin.currencyCode),1)],8,Le)}),128))])])):y("",!0)])):y("",!0),x.value===2?(o(),r("div",He,[e[11]||(e[11]=t("h2",{class:"text-2xl font-bold mb-4 dark:text-white"},"Enter Transaction Details",-1)),t("div",Qe,[!u(A)&&l.value!==""?(o(),r("p",$e," Amount must be between "+i((G=(p=(f=s.value)==null?void 0:f.data)==null?void 0:p.payin)==null?void 0:G.min)+" and "+i((V=(E=(q=s.value)==null?void 0:q.data)==null?void 0:E.payin)==null?void 0:V.max),1)):y("",!0),t("label",Ke,"You Send ("+i((I=(F=(R=s.value)==null?void 0:R.data)==null?void 0:F.payin)==null?void 0:I.currencyCode)+")",1),g(t("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>l.value=a),onInput:ge,type:"number",required:"",class:Ne(["w-full p-2 border rounded disabled:bg-slate-200",{"border-red-500":!u(A)&&l.value!==""}]),disabled:u(k)},null,42,ze),[[oe,l.value]])]),t("div",Je,[t("label",We,"They Get ("+i((j=(M=(L=s.value)==null?void 0:L.data)==null?void 0:M.payout)==null?void 0:j.currencyCode)+")",1),g(t("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>S.value=a),type:"number",disabled:"",class:"w-full p-2 border rounded disabled:bg-slate-200"},null,512),[[oe,S.value]])]),t("div",Xe," Exchange Rate: "+i((Q=(H=s.value)==null?void 0:H.data)==null?void 0:Q.payoutUnitsPerPayinUnit)+" "+i((z=(K=($=s.value)==null?void 0:$.data)==null?void 0:K.payout)==null?void 0:z.currencyCode)+" for 1 "+i((X=(W=(J=s.value)==null?void 0:J.data)==null?void 0:W.payin)==null?void 0:X.currencyCode),1),(o(!0),r(w,null,_((ae=(te=(ee=(Z=(Y=s.value)==null?void 0:Y.data)==null?void 0:Z.payout)==null?void 0:ee.methods[0])==null?void 0:te.requiredPaymentDetails)==null?void 0:ae.properties,(a,b)=>(o(),r("div",{key:b,class:"mb-4"},[t("label",{for:b,class:"block text-gray-700 dark:text-gray-300 mb-2"},i(a.title),9,Ye),g(t("input",{"onUpdate:modelValue":C=>v.value[b]=C,id:b,type:a.type,pattern:a.pattern,required:"",class:"w-full p-2 border rounded disabled:bg-slate-200",disabled:""},null,8,Ze),[[Be,v.value[b]]]),t("small",et,i(a.description),1)]))),128)),e[12]||(e[12]=t("p",{class:"text-xs text-green-400 mb-2 flex"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"green","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"h-5 w-5"},[t("path",{d:"M20 6 9 17l-5-5"})]),Se(" Required credentials available. ")],-1)),u(k)?(o(),r("button",{key:0,class:"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-slate-400 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-2 dark:text-white",onClick:e[4]||(e[4]=a=>("navigateTo"in n?n.navigateTo:u(Pe))("/credentials"))},"Verify Identity")):y("",!0),U.value?(o(),ne(re,{key:2})):(o(),r("button",{key:1,onClick:ye,class:"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-slate-400 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 dark:text-white",disabled:u(k)}," Request for Quote ",8,tt))])):y("",!0)])])])}}};export{lt as default};