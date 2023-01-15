import{d as S,u as $,c as M,r as p,o as l,a as r,b as e,t as d,e as h,n as w,f as A,w as c,v as _,g as O,F as x,h as D,i as E,j as U,k as G,l as R}from"./index.216a7bc5.js";var F=(t=>(t[t.XSmall=0]="XSmall",t[t.Small=1]="Small",t[t.Medium=2]="Medium",t[t.Large=3]="Large",t[t.XLarge=4]="XLarge",t[t.XXLarge=5]="XXLarge",t[t.XXXLarge=6]="XXXLarge",t))(F||{});const B={class:"shipping-form-view"},H={class:"shipping-form-button"},z=e("path",{d:" M 1,6 13.25,17.65 M 23,6.36 10.75,17.65",style:{stroke:"#0000FF","stroke-width":"4"}},null,-1),Z=[z],T={class:"order-status"},Y={class:"order-addressee"},Q={class:"order-address1"},q={class:"order-city"},K={class:"order-state"},W={class:"order-postalcode"},J={class:"order-country"},ee={key:1,class:"shipping-form"},se={class:"form-group"},te=e("label",{for:"shipping-name"},"Real/Fake Name",-1),oe=["disabled"],ie={class:"form-group"},ae=e("label",{for:"shipping-street-address1"},"Address1",-1),ne=["disabled"],le={class:"form-group"},de=e("label",{for:"shipping-city"},"City",-1),re=["disabled"],ue={class:"form-group"},pe=e("label",{for:"shipping-state"},"State/Province",-1),ce=["disabled"],_e={class:"form-group"},he=e("label",{for:"shipping-postalcode"},"Postal Code",-1),me=["disabled"],ve={class:"form-group"},ge=e("label",{for:"shipping-country"},"Country",-1),fe=["disabled"],ye={class:"form-group"},be=e("label",{for:"jersey-size"},"Size",-1),we=["disabled"],xe=["value"],Se={class:"form-group",id:"submit-button-group"},ke=["disabled"],Ie=S({__name:"ShippingForm",props:{orderId:String,order:Object},setup(t){var I,P,X,C;const m=t,u=$(),o=M(()=>u.orders[m.orderId||""]),n=p(((I=o.value)==null?void 0:I.status)!=="SHIPPING_UNASSIGNED"),g=M(()=>{var y;return((y=o.value)==null?void 0:y.status)!=="SHIPPING_UNASSIGNED"}),f=["XSmall","Small","Medium","Large","XLarge","XXLarge","XXXLarge"],s=p((P=o.value)!=null&&P.shippingAddress?{...o.value.shippingAddress}:{name:"",address1:"",city:"",stateProvince:"",postalCode:"",country:""}),k=p(o.value.status==="SHIPPING_ASSIGNED"?"ORDER PLACED":o.value.status==="FULFILLED"?"ORDER SHIPPED":"PLACED ORDER"),v=p(!0),b=p((X=o.value)!=null&&X.jerseySize?(C=o.value)==null?void 0:C.jerseySize:f[F.Large]),N=y=>Object.values(s.value||{}).every(i=>!!i),V=()=>{N(s.value)&&u.updateOrder(o.value.tokenId||"",{tokenId:o.value.tokenId,jerseySize:b.value,shippingAddress:s.value,status:"SHIPPING_ASSIGNED"})},j=()=>{v.value=!v.value,v.value};return(y,i)=>{var L;return l(),r("div",B,[e("div",H,[e("h1",{onClick:j,class:"shipping-form-title"},"Order # "+d((L=h(o))==null?void 0:L.tokenId),1),h(g)?(l(),r("svg",{key:0,class:w({arrowDown:v.value}),width:"32",height:"32",viewBox:"-4 -4 32 32",xmlns:"http://www.w3.org/2000/svg",_transform:"translate(0,0) rotate(50%)",style:{"transform-origin":"center center",border:"1px solid #FFFFFF00"},"xmlns:xlink":"http://www.w3.org/1999/xlink"},Z,2)):A("",!0)]),h(g)?(l(),r("div",{key:0,class:w(["order-confirmation",{collapsed:v.value}])},[e("div",T,d(k.value),1),e("div",Y,d(s.value.name),1),e("div",Q,d(s.value.address1),1),e("div",q,d(s.value.city),1),e("div",K,d(s.value.stateProvince),1),e("div",W,d(s.value.postalCode),1),e("div",J,d(s.value.country),1)],2)):(l(),r("form",ee,[e("div",se,[te,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[0]||(i[0]=a=>s.value.name=a),type:"text",name:"shipping-name",id:"shipping-name"},null,8,oe),[[_,s.value.name]])]),e("div",ie,[ae,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[1]||(i[1]=a=>s.value.address1=a),type:"text",name:"shipping-street-address1",id:"shipping-street-address1"},null,8,ne),[[_,s.value.address1]])]),e("div",le,[de,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[2]||(i[2]=a=>s.value.city=a),type:"text",name:"shipping-city",id:"shipping-city"},null,8,re),[[_,s.value.city]])]),e("div",ue,[pe,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[3]||(i[3]=a=>s.value.stateProvince=a),type:"text",name:"shipping-state",id:"shipping-state"},null,8,ce),[[_,s.value.stateProvince]])]),e("div",_e,[he,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[4]||(i[4]=a=>s.value.postalCode=a),type:"text",name:"shipping-postalcode",id:"shipping-postalcode"},null,8,me),[[_,s.value.postalCode]])]),e("div",ve,[ge,c(e("input",{disabled:n.value,"onUpdate:modelValue":i[5]||(i[5]=a=>s.value.country=a),type:"text",name:"shipping-country",id:"shipping-country"},null,8,fe),[[_,s.value.country]])]),e("div",ye,[be,c(e("select",{disabled:n.value,"onUpdate:modelValue":i[6]||(i[6]=a=>b.value=a),name:"jersey-size",id:"jersey-size"},[(l(),r(x,null,D(f,(a,Re)=>e("option",{value:a},d(a),9,xe)),64))],8,we),[[O,b.value]])]),e("div",Se,[e("input",{disabled:n.value,onClick:V,type:"button",name:"shipping-submit",id:"shipping-submit",value:"Submit"},null,8,ke)])]))])}}});const Pe=U('<ul id="app-menu-items"><li class="app-menu-item" id="mirror"><a href="https://mirror.xyz/zorhol.eth/uPGvlrhjSY722zhchp2NtY_eVkG5O0OodsCx5-A6j80"> Read our mirror.xyz post for additional info </a></li><li class="app-menu-item" id="twitter"><a href="https://twitter.com"> Reach out with Questions on twitter </a></li><li class="app-menu-item" id="gallery"><a href="#"> See gallery for physical jersey pics </a></li><li class="app-menu-item" id="sizechart"><a href="#"> Jersey Size chart </a></li></ul>',1),Xe=S({__name:"AppMenu",props:{show:Boolean},emits:["closemenu"],setup(t,{emit:m}){const u=t;p(!1);const o=p(500),n=()=>{m("closemenu")};return(g,f)=>(l(),r("div",{id:"app-menu",class:w({open:u.show}),style:E({width:u.show?o.value+"px":0})},[e("div",{onClick:n,id:"app-menu-close"},"\xD7"),Pe],6))}});const Ce={id:"vip-view"},Le={id:"vip-header"},Me={id:"header-content-left"},$e=e("g",{id:"bars",fill:"#000000"},[e("path",{id:"top",d:" M 3,17 29,17 29,21.15 3,21.15 3,17 Z",transform:"matrix(1,0,0,1,0,-3.1)"}),e("path",{id:"middle",d:" M 3,14 29,14 29,18.05 3,18.05 3,14 Z",transform:"matrix(1,0,0,-1,-0,22.65)"}),e("path",{id:"bottom",transform:"matrix(1,0,0,1,-0,9.3)",d:" M 3,14 29,14 29,18.05 3,18.05 3,14 Z"})],-1),De=[$e],Fe={id:"header-content-right"},Ne=e("div",{class:"caption-text"},"mi777: the MiladyMoto Jersey",-1),Ve={class:"header-text"},je=e("div",{class:"header-right-bottom"},[e("span",{class:"normal-text"},"Once submitted, order = final. "),e("span",{class:"bold-text"},"Once submitted, order = final.")],-1),Ae={key:0,id:"pixel-editor-container"},Oe=e("iframe",{src:"https://hamilsauce.github.io/playground/simple-pixel-editor/",width:"430",height:"800",frameborder:"0"},null,-1),Ee=[Oe],Ue={key:1,class:"shipping-forms"},Ge=e("h1",null,"Have jersey",-1),He=S({__name:"VIPView",setup(t){const m=p(!1),u=p(!1),o=$(),n=()=>{console.log("menu click"),u.value=!u.value};return(g,f)=>(l(),r(x,null,[e("section",Ce,[e("header",Le,[e("div",Me,[(l(),r("svg",{onClick:n,id:"menu-open",class:"app-button",width:"40",height:"40",viewBox:"2 1.5  28 28",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},De))]),e("div",Fe,[Ne,e("div",Ve,"Minted "+d(h(o).ownedTokenIds.length)+" Jerseys. Placed "+d(h(o).assignedOrders.length)+" Order",1),je])]),m.value?(l(),r("div",Ae,Ee)):(l(),r("div",Ue,[Ge,(l(!0),r(x,null,D(h(o).orders,(s,k)=>(l(),R(Ie,{"order-id":s.tokenId},null,8,["order-id"]))),256))]))]),G(Xe,{onClosemenu:n,show:u.value},null,8,["show"])],64))}});export{He as default};
