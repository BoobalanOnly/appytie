(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[84],{104:function(e,a,t){"use strict";var s=t(14),n=t(19),c=t(8),r=t.n(c),i=t(43),o=t.n(i),l=t(90),b=t.n(l),u=t(91),j={tag:u.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var a=e.className,t=e.cssModule,c=e.color,i=e.body,o=e.inverse,l=e.outline,j=e.tag,p=e.innerRef,d=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(u.mapToCssModules)(b()(a,"card",!!o&&"text-white",!!i&&"card-body",!!c&&(l?"border":"bg")+"-"+c),t);return r.a.createElement(j,Object(s.a)({},d,{className:m,ref:p}))};p.propTypes=j,p.defaultProps={tag:"div"},a.a=p},116:function(e,a,t){"use strict";var s=t(14),n=t(19),c=t(8),r=t.n(c),i=t(43),o=t.n(i),l=t(90),b=t.n(l),u=t(91),j={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),o=Object(u.mapToCssModules)(b()(a,"card-title"),t);return r.a.createElement(c,Object(s.a)({},i,{className:o}))};p.propTypes=j,p.defaultProps={tag:"div"},a.a=p},1166:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t(96),c=t(8),r=t(314),i=t(284),o=t(104),l=t(116),b=t(211),u=t(283),j=t(701),p=t(702),d=t(732),m=t(461),O=t(229),f=t(394),g=t(95),h=t(35),v=t(2),x=t(93),y=t(98),N=t(24);a.default=Object(h.b)((function(){}),{registerUserAction:v.Bb})((function(){var e=Object(c.useState)({name:"",email:"",mobile:"",pass:"",cpass:"",shop:""}),a=Object(n.a)(e,2),t=a[0],h=t.name,v=t.email,C=t.mobile,P=t.pass,w=t.cpass,M=t.shop,T=a[1],I=Object(c.useState)({type:"primary",visible:!1,msg:""}),R=Object(n.a)(I,2),E=R[0],A=E.type,S=E.visible,k=E.msg,D=R[1],L=Object(c.useState)({nameInv:!1,emailInv:!1,mobileInv:!1,passInv:!1,cpassInv:!1,shopInv:!1}),z=Object(n.a)(L,2),Z=z[0],$=Z.nameInv,J=Z.emailInv,_=Z.mobileInv,q=Z.passInv,B=Z.cpassInv,G=Z.shopInv,H=z[1];return Object(N.jsx)(i.a,{className:"h-100",children:Object(N.jsx)(y.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(N.jsxs)(o.a,{className:"auth-card",children:[Object(N.jsxs)("div",{className:"position-relative image-side ",children:[Object(N.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(N.jsxs)("p",{className:"white mb-0",children:["Please use this form to register. ",Object(N.jsx)("br",{}),"If you are a member, please"," ",Object(N.jsx)(g.b,{to:"/user/login",className:"white",children:"login"}),"."]})]}),Object(N.jsxs)("div",{className:"form-side",children:[Object(N.jsx)(g.b,{to:"/",className:"white",children:Object(N.jsx)("span",{className:"logo-single"})}),Object(N.jsx)(l.a,{className:"mb-4",children:Object(N.jsx)(x.a,{id:"user.register"})}),Object(N.jsxs)(b.a,{children:[Object(N.jsxs)(i.a,{children:[Object(N.jsxs)(u.a,{children:[Object(N.jsxs)(j.a,{className:"form-group has-float-label  mb-4",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(x.a,{id:"user.fullname"})}),Object(N.jsx)(d.a,{type:"name",onChange:function(e){T((function(a){return Object(s.a)(Object(s.a)({},a),{},{name:e.target.value})}));var a,t=e.target.value;a=""!==t&&!t.match(/^[a-zA-Z ]*$/),H((function(e){return Object(s.a)(Object(s.a)({},e),{},{nameInv:a})}))},value:h,invalid:$}),Object(N.jsx)(m.a,{children:"This characters are not allowed!"})]}),Object(N.jsxs)(j.a,{className:"form-group has-float-label  mb-4",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(x.a,{id:"user.email"})}),Object(N.jsx)(d.a,{type:"email",value:v,onChange:function(e){T((function(a){return Object(s.a)(Object(s.a)({},a),{},{email:e.target.value.toLowerCase()})}));var a,t=e.target.value;a=""!==t&&!t.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),H((function(e){return Object(s.a)(Object(s.a)({},e),{},{emailInv:a})}))},invalid:J}),Object(N.jsx)(m.a,{children:"Enter a valid email!"})]}),Object(N.jsxs)(j.a,{className:"form-group has-float-label  mb-4",children:[Object(N.jsx)(p.a,{children:"Mobile"}),Object(N.jsx)(d.a,{type:"text",value:C,onChange:function(e){T((function(a){return Object(s.a)(Object(s.a)({},a),{},{mobile:e.target.value})}));var a,t=e.target.value;a=""!==t&&(!t.match(/^[0-9\b]+$/)||10!==t.length),H((function(e){return Object(s.a)(Object(s.a)({},e),{},{mobileInv:a})}))},invalid:_,required:!0}),Object(N.jsx)(m.a,{children:"Enter a valid mobile no!"})]})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsxs)(j.a,{className:"form-group has-float-label  mb-4",children:[Object(N.jsx)(p.a,{children:"Shopify Store Domain"}),Object(N.jsx)(d.a,{type:"text",value:M,onChange:function(e){T((function(a){return Object(s.a)(Object(s.a)({},a),{},{shop:e.target.value})}))},invalid:G})]}),Object(N.jsxs)(j.a,{className:"form-group has-float-label  mb-4",children:[Object(N.jsx)(p.a,{children:"Create Password"}),Object(N.jsx)(d.a,{type:"password",value:P,onChange:function(e){T((function(a){return Object(s.a)(Object(s.a)({},a),{},{pass:e.target.value})}));var a,t=e.target.value;a=""!==t&&!(t.length>7),H((function(e){return Object(s.a)(Object(s.a)({},e),{},{passInv:a})}))},invalid:q}),Object(N.jsx)(m.a,{children:"Password length must be at least 8!"})]}),Object(N.jsxs)(j.a,{className:"form-group has-float-label  mb-4",children:[Object(N.jsx)(p.a,{children:"Confirm Password"}),Object(N.jsx)(d.a,{type:"password",value:w,onChange:function(e){T((function(a){return Object(s.a)(Object(s.a)({},a),{},{cpass:e.target.value})}));var a,t=e.target.value;a=""!==t&&!(t.length>7),H((function(e){return Object(s.a)(Object(s.a)({},e),{},{cpassInv:a})}))},invalid:B}),Object(N.jsx)(m.a,{children:"Password length must be at least 8!"})]}),Object(N.jsx)("div",{className:"d-flex justify-content-end align-items-center",children:Object(N.jsx)(O.a,{color:"primary",className:"btn-shadow",size:"lg",onClick:function(){return function(){if(""!==h&&""!==v&&""!==P&&""!==M&&""!==w)if($||J||_||q||B||G)D({type:"danger",visible:!0,msg:"Check if all fields are okay !"});else if(P===w){var e={name:h,email:v,mobile:C,pass:P,shop:M};r.post("https://app.appytie.com/get_token.php",e).then((function(e){0===e.error_code?D({type:"success",visible:!0,msg:e.message}):D({type:"danger",visible:!0,msg:e.message})})).catch((function(e){D({type:"danger",visible:!0,msg:e.message})}))}else D({type:"danger",visible:!0,msg:"Passwords do not match !"});else D({type:"danger",visible:!0,msg:"Please fill out all the fields."})}()},children:Object(N.jsx)(x.a,{id:"user.register-button"})})})]})]}),Object(N.jsx)(i.a,{children:Object(N.jsx)(u.a,{children:Object(N.jsx)(f.a,{color:A,isOpen:S,className:"mt-4",toggle:function(){D((function(e){return Object(s.a)(Object(s.a)({},e),{},{visible:!e.visible})}))},children:k})})})]})]})]})})})}))},211:function(e,a,t){"use strict";var s=t(14),n=t(19),c=t(103),r=t(101),i=t(8),o=t.n(i),l=t(43),b=t.n(l),u=t(90),j=t.n(u),p=t(91),d={children:b.a.node,inline:b.a.bool,tag:p.tagPropType,innerRef:b.a.oneOfType([b.a.object,b.a.func,b.a.string]),className:b.a.string,cssModule:b.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,r=e.tag,i=e.innerRef,l=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),b=Object(p.mapToCssModules)(j()(a,!!c&&"form-inline"),t);return o.a.createElement(r,Object(s.a)({},l,{ref:i,className:b}))},a}(i.Component);m.propTypes=d,m.defaultProps={tag:"form"},a.a=m},230:function(e,a,t){"use strict";var s=t(14),n=t(19),c=t(107),r=t(8),i=t.n(r),o=t(43),l=t.n(o),b=t(90),u=t.n(b),j=t(91),p=t(160);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:j.tagPropType,transition:l.a.shape(p.a.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},p.a.defaultProps),{},{unmountOnExit:!0})};function g(e){var a=e.className,t=e.closeClassName,c=e.closeAriaLabel,r=e.cssModule,o=e.tag,l=e.color,b=e.isOpen,d=e.toggle,O=e.children,f=e.transition,g=e.fade,h=e.innerRef,v=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),x=Object(j.mapToCssModules)(u()(a,"alert","alert-"+l,{"alert-dismissible":d}),r),y=Object(j.mapToCssModules)(u()("close",t),r),N=m(m(m({},p.a.defaultProps),f),{},{baseClass:g?f.baseClass:"",timeout:g?f.timeout:0});return i.a.createElement(p.a,Object(s.a)({},v,N,{tag:o,className:x,in:b,role:"alert",innerRef:h}),d?i.a.createElement("button",{type:"button",className:y,"aria-label":c,onClick:d},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}g.propTypes=O,g.defaultProps=f,a.a=g},394:function(e,a,t){"use strict";var s=t(14),n=t(103),c=t(101),r=t(8),i=t.n(r),o=t(230),l=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:!0},t.toggle=t.toggle.bind(Object(n.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return i.a.createElement(o.a,Object(s.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},a}(r.Component);a.a=l},461:function(e,a,t){"use strict";var s=t(14),n=t(19),c=t(8),r=t.n(c),i=t(43),o=t.n(i),l=t(90),b=t.n(l),u=t(91),j={children:o.a.node,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,valid:o.a.bool,tooltip:o.a.bool},p={tag:"div",valid:void 0},d=function(e){var a=e.className,t=e.cssModule,c=e.valid,i=e.tooltip,o=e.tag,l=Object(n.a)(e,["className","cssModule","valid","tooltip","tag"]),j=i?"tooltip":"feedback",p=Object(u.mapToCssModules)(b()(a,c?"valid-"+j:"invalid-"+j),t);return r.a.createElement(o,Object(s.a)({},l,{className:p}))};d.propTypes=j,d.defaultProps=p,a.a=d},93:function(e,a,t){"use strict";var s=t(1),n=(t(8),t(384)),c=t(277),r=t(24);a.a=Object(c.c)((function(e){return Object(r.jsx)(n.a,Object(s.a)({},e))}),{withRef:!1})},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return i}));var s=t(1),n=(t(8),t(283)),c=t(24),r=function(e){return Object(c.jsx)(n.a,Object(s.a)(Object(s.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},i=function(e){var a=e.className;return Object(c.jsx)("div",{className:"separator ".concat(a)})}}}]);
//# sourceMappingURL=user-register.173032aa.chunk.js.map