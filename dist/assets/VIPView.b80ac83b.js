import{d as S,u as N,c as F,r as p,o as d,a as r,b as e,t as l,e as h,n as w,f as O,w as c,v as _,g as E,F as x,h as V,i as U,j as G,k as R,l as z}from"./index.6e9e696b.js";var j=(o=>(o[o.XSmall=0]="XSmall",o[o.Small=1]="Small",o[o.Medium=2]="Medium",o[o.Large=3]="Large",o[o.XLarge=4]="XLarge",o))(j||{});const B={class:"shipping-form-view"},H={class:"shipping-form-button"},X=e("path",{d:" M 1,6 13.25,17.65 M 23,6.36 10.75,17.65",style:{stroke:"#0000FF","stroke-width":"4"}},null,-1),Z=[X],T={class:"order-status"},Y={class:"order-addressee"},Q={class:"order-address1"},q={class:"order-city"},K={class:"order-state"},W={class:"order-postalcode"},J={class:"order-country"},ee={key:1,class:"shipping-form"},se={class:"form-group"},te=e("label",{for:"shipping-name"},"Real/Fake Name",-1),oe=["disabled"],ie={class:"form-group"},ae=e("label",{for:"shipping-street-address1"},"Address1",-1),ne=["disabled"],de={class:"form-group"},le=e("label",{for:"shipping-city"},"City",-1),re=["disabled"],ue={class:"form-group"},pe=e("label",{for:"shipping-state"},"State/Province",-1),ce=["disabled"],_e={class:"form-group"},he=e("label",{for:"shipping-postalcode"},"Postal Code",-1),me=["disabled"],ve={class:"form-group"},ge=e("label",{for:"shipping-country"},"Country",-1),ye=["disabled"],fe={class:"form-group"},be=e("label",{for:"jersey-size"},"Size",-1),we=["disabled"],xe=["value"],Se={class:"form-group",id:"submit-button-group"},ke=["disabled"],Ie=S({__name:"ShippingForm",props:{orderId:String,order:Object},setup(o){var I,P,C,M;const m=o,u=N(),t=F(()=>u.orders[m.orderId||""]),n=p(((I=t.value)==null?void 0:I.status)!=="SHIPPING_UNASSIGNED"),v=F(()=>{var f;return((f=t.value)==null?void 0:f.status)!=="SHIPPING_UNASSIGNED"}),g=["Small","Medium","Large","XLarge"],s=p((P=t.value)!=null&&P.shippingAddress?{...t.value.shippingAddress}:{name:"",address1:"",city:"",stateProvince:"",postalCode:"",country:""}),k=p(t.value.status==="SHIPPING_ASSIGNED"?"ORDER PLACED":t.value.status==="FULFILLED"?"ORDER SHIPPED":"PLACED ORDER"),y=p(!0),b=p((C=t.value)!=null&&C.jerseySize?(M=t.value)==null?void 0:M.jerseySize:g[j.Large]),$=f=>Object.values(s.value||{}).every(i=>!!i),A=()=>{$(s.value)&&u.updateOrder(t.value.tokenId||"",{tokenId:t.value.tokenId,jerseySize:b.value,shippingAddress:s.value,status:"SHIPPING_ASSIGNED"})},L=()=>{y.value=!y.value};return(f,i)=>{var D;return d(),r("div",B,[e("div",H,[e("h1",{onClick:L,class:"shipping-form-title"},"Order # "+l((D=h(t))==null?void 0:D.tokenId),1),h(v)?(d(),r("svg",{key:0,class:w({arrowDown:y.value}),width:"32",height:"32",viewBox:"-4 -4 32 32",xmlns:"http://www.w3.org/2000/svg",_transform:"translate(0,0) rotate(50%)",style:{"transform-origin":"center center",border:"1px solid #FFFFFF00"},"xmlns:xlink":"http://www.w3.org/1999/xlink"},Z,2)):O("",!0)]),h(v)?(d(),r("div",{key:0,class:w(["order-confirmation",{collapsed:y.value}])},[e("div",T,l(k.value),1),e("div",Y,l(s.value.name),1),e("div",Q,l(s.value.address1),1),e("div",q,l(s.value.city),1),e("div",K,l(s.value.stateProvince),1),e("div",W,l(s.value.postalCode),1),e("div",J,l(s.value.country),1)],2)):(d(),r("form",ee,[e("div",se,[te,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[0]||(i[0]=a=>s.value.name=a),type:"text",name:"shipping-name",id:"shipping-name"},null,8,oe),[[_,s.value.name]])]),e("div",ie,[ae,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[1]||(i[1]=a=>s.value.address1=a),type:"text",name:"shipping-street-address1",id:"shipping-street-address1"},null,8,ne),[[_,s.value.address1]])]),e("div",de,[le,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[2]||(i[2]=a=>s.value.city=a),type:"text",name:"shipping-city",id:"shipping-city"},null,8,re),[[_,s.value.city]])]),e("div",ue,[pe,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[3]||(i[3]=a=>s.value.stateProvince=a),type:"text",name:"shipping-state",id:"shipping-state"},null,8,ce),[[_,s.value.stateProvince]])]),e("div",_e,[he,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[4]||(i[4]=a=>s.value.postalCode=a),type:"text",name:"shipping-postalcode",id:"shipping-postalcode"},null,8,me),[[_,s.value.postalCode]])]),e("div",ve,[ge,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[5]||(i[5]=a=>s.value.country=a),type:"text",name:"shipping-country",id:"shipping-country"},null,8,ye),[[_,s.value.country]])]),e("div",fe,[be,c(e("select",{disabled:n.value,"onUpdate:modelValue":i[6]||(i[6]=a=>b.value=a),name:"jersey-size",id:"jersey-size"},[(d(),r(x,null,V(g,(a,Ge)=>e("option",{value:a},l(a),9,xe)),64))],8,we),[[E,b.value]])]),e("div",Se,[e("input",{disabled:n.value,onClick:A,type:"button",name:"shipping-submit",id:"shipping-submit",value:"Submit"},null,8,ke)])]))])}}});const Pe=G('<ul id="app-menu-items"><li class="app-menu-item" id="mirror"><a href="https://mirror.xyz/zorhol.eth/uPGvlrhjSY722zhchp2NtY_eVkG5O0OodsCx5-A6j80"> Read our mirror.xyz post for additional info </a></li><li class="app-menu-item" id="twitter"><a href="https://twitter.com"> Reach out with Questions on twitter </a></li><li class="app-menu-item" id="gallery"><a href="#"> See gallery for physical jersey pics </a></li><li class="app-menu-item" id="sizechart"><a href="#"> Jersey Size chart </a></li></ul>',1),Ce=S({__name:"AppMenu",props:{show:Boolean},emits:["closemenu"],setup(o,{emit:m}){const u=o;p(!1);const t=p(500),n=()=>{m("closemenu")};return(v,g)=>(d(),r("div",{id:"app-menu",class:w({open:u.show}),style:U({width:u.show?t.value+"px":0})},[e("div",{onClick:n,id:"app-menu-close"},"\xD7"),Pe],6))}});const Me={id:"vip-view"},De={id:"vip-header"},Fe={id:"header-content-left"},Ne=e("g",{id:"bars",fill:"#000000"},[e("path",{id:"top",d:" M 3,17 29,17 29,21.15 3,21.15 3,17 Z",transform:"matrix(1,0,0,1,0,-3.1)"}),e("path",{id:"middle",d:" M 3,14 29,14 29,18.05 3,18.05 3,14 Z",transform:"matrix(1,0,0,-1,-0,22.65)"}),e("path",{id:"bottom",transform:"matrix(1,0,0,1,-0,9.3)",d:" M 3,14 29,14 29,18.05 3,18.05 3,14 Z"})],-1),Ve=[Ne],je={id:"header-content-right"},$e=e("div",{class:"caption-text"},"mi777: the MiladyMoto Jersey",-1),Ae={class:"header-text"},Le=e("div",{class:"header-right-bottom"},[e("span",{class:"normal-text"},"Once submitted, order = final. "),e("span",{class:"bold-text"},"Once submitted, order = final.")],-1),Oe={key:0,id:"pixel-editor-container"},Ee={key:1,class:"shipping-forms"},Ue=e("h1",null,"Have jersey",-1),ze=S({__name:"VIPView",setup(o){const m=p(!1),u=p(!1),t=N(),n=()=>{console.log("menu click"),u.value=!u.value};return(v,g)=>(d(),r(x,null,[e("section",Me,[e("header",De,[e("div",Fe,[(d(),r("svg",{onClick:n,id:"menu-open",class:"app-button",width:"40",height:"40",viewBox:"2 1.5  28 28",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Ve))]),e("div",je,[$e,e("div",Ae,"Minted "+l(h(t).ownedTokenIds.length)+" Jerseys. Placed "+l(h(t).assignedOrders.length)+" Order",1),Le])]),m.value?(d(),r("div",Oe)):(d(),r("div",Ee,[Ue,(d(!0),r(x,null,V(h(t).orders,(s,k)=>(d(),z(Ie,{"order-id":s.tokenId},null,8,["order-id"]))),256))]))]),R(Ce,{onClosemenu:n,show:u.value},null,8,["show"])],64))}});export{ze as default};
