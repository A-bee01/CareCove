import{e as b,f as m,r as n,c as p,b as x,a as t,g as v,h as d,v as i,o as g}from"./vwRdSaPh.js";import{H as y}from"./BDp76w7U.js";import"./DlAUqK2U.js";const k={class:"flex flex-col min-h-screen"},h={class:"flex-1 bg-[#ffffff] dark:bg-[#ffffff] py-8 px-6 md:px-8"},w={class:"max-w-3xl mx-auto bg-white dark:bg-[#10673b] rounded-lg shadow p-6"},C={class:"mb-4"},_={class:"mb-4"},$={__name:"credentials",setup(N){const l=b(),{state:u,addCredential:c}=m(),s=n(""),r=n(""),f=async()=>{const a=u.customerDid.uri,e=await fetch(`https://mock-idv.tbddev.org/kcc?name=${s.value}&country=${r.value}&did=${a}`).then(o=>o.text());c(e),l.push("/donate")};return(a,e)=>(g(),p("div",k,[x(y),t("main",h,[t("div",w,[e[5]||(e[5]=t("h2",{class:"text-2xl font-bold mb-4 dark:text-white"},"Create Credential",-1)),t("form",{onSubmit:v(f,["prevent"])},[t("div",C,[e[2]||(e[2]=t("label",{class:"block text-gray-700 dark:text-gray-300 mb-2"},"Name",-1)),d(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o),type:"text",required:"",class:"w-full p-2 border rounded"},null,512),[[i,s.value]])]),t("div",_,[e[3]||(e[3]=t("label",{class:"block text-gray-700 dark:text-gray-300 mb-2"},"Country Code",-1)),d(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),type:"text",maxlength:"2",required:"",class:"w-full p-2 border rounded"},null,512),[[i,r.value]])]),e[4]||(e[4]=t("button",{type:"submit",class:"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 dark:text-white"}," Create Credential ",-1))],32)])])]))}};export{$ as default};