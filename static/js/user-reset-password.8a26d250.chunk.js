(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[85],{104:function(e,s,a){"use strict";var t=a(14),o=a(19),r=a(8),n=a.n(r),c=a(43),l=a.n(c),i=a(90),u=a.n(i),d=a(91),b={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var s=e.className,a=e.cssModule,r=e.color,c=e.body,l=e.inverse,i=e.outline,b=e.tag,p=e.innerRef,j=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.mapToCssModules)(u()(s,"card",!!l&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),a);return n.a.createElement(b,Object(t.a)({},j,{className:m,ref:p}))};p.propTypes=b,p.defaultProps={tag:"div"},s.a=p},116:function(e,s,a){"use strict";var t=a(14),o=a(19),r=a(8),n=a.n(r),c=a(43),l=a.n(c),i=a(90),u=a.n(i),d=a(91),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var s=e.className,a=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(s,"card-title"),a);return n.a.createElement(r,Object(t.a)({},c,{className:l}))};p.propTypes=b,p.defaultProps={tag:"div"},s.a=p},1168:function(e,s,a){"use strict";a.r(s);var t=a(96),o=a(8),r=a(284),n=a(104),c=a(116),l=a(701),i=a(702),u=a(229),d=a(95),b=a(205),p=a(35),j=a(98),m=a(93),f=a(2),g=a(375),h=a(24),w=function(e){var s=e.newPassword,a=e.newPasswordAgain,t={};return a&&s!==a&&(t.newPasswordAgain="Please check your new password"),t};s.default=Object(p.b)((function(e){var s=e.authUser;return{newPassword:s.newPassword,resetPasswordCode:s.resetPasswordCode,loading:s.loading,error:s.error}}),{resetPasswordAction:f.Cb})((function(e){var s=e.location,a=e.history,p=e.loading,f=e.error,O=e.resetPasswordAction,v=Object(o.useState)(""),x=Object(t.a)(v,1)[0],N=Object(o.useState)(""),y=Object(t.a)(N,1)[0];Object(o.useEffect)((function(){f?g.b.warning(f,"Forgot Password Error",3e3,null,null,""):p||"success"!==x||g.b.success("Please login with your new password.","Reset Password Success",3e3,null,null,"")}),[f,p,x]);var P={newPassword:x,newPasswordAgain:y};return Object(h.jsx)(r.a,{className:"h-100",children:Object(h.jsx)(j.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(h.jsxs)(n.a,{className:"auth-card",children:[Object(h.jsxs)("div",{className:"position-relative image-side ",children:[Object(h.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(h.jsxs)("p",{className:"white mb-0",children:["Please use your e-mail to reset your password. ",Object(h.jsx)("br",{}),"If you are not a member, please"," ",Object(h.jsx)(d.b,{to:"/register",className:"white",children:"register"}),"."]})]}),Object(h.jsxs)("div",{className:"form-side",children:[Object(h.jsx)(d.b,{to:"/",className:"white",children:Object(h.jsx)("span",{className:"logo-single"})}),Object(h.jsx)(c.a,{className:"mb-4",children:Object(h.jsx)(m.a,{id:"user.reset-password"})}),Object(h.jsx)(b.c,{validate:w,initialValues:P,onSubmit:function(e){if(!p){var t=new URLSearchParams(s.search).get("oobCode");t?""!==e.newPassword&&O({newPassword:e.newPassword,resetPasswordCode:t,history:a}):g.b.warning("Please check your email url.","Reset Password Error",3e3,null,null,"")}},children:function(e){var s=e.errors,a=e.touched;return Object(h.jsxs)(b.b,{className:"av-tooltip tooltip-label-bottom",children:[Object(h.jsxs)(l.a,{className:"form-group has-float-label",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)(m.a,{id:"user.new-password"})}),Object(h.jsx)(b.a,{className:"form-control",name:"newPassword",type:"password"})]}),Object(h.jsxs)(l.a,{className:"form-group has-float-label",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)(m.a,{id:"user.new-password-again"})}),Object(h.jsx)(b.a,{className:"form-control",name:"newPasswordAgain",type:"password"}),s.newPasswordAgain&&a.newPasswordAgain&&Object(h.jsx)("div",{className:"invalid-feedback d-block",children:s.newPasswordAgain})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(h.jsx)(d.b,{to:"/user/login",children:Object(h.jsx)(m.a,{id:"user.login-title"})}),Object(h.jsxs)(u.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(p?"show-spinner":""),size:"lg",children:[Object(h.jsxs)("span",{className:"spinner d-inline-block",children:[Object(h.jsx)("span",{className:"bounce1"}),Object(h.jsx)("span",{className:"bounce2"}),Object(h.jsx)("span",{className:"bounce3"})]}),Object(h.jsx)("span",{className:"label",children:Object(h.jsx)(m.a,{id:"user.reset-password-button"})})]})]})]})}})]})]})})})}))},229:function(e,s,a){"use strict";var t=a(14),o=a(19),r=a(103),n=a(101),c=a(8),l=a.n(c),i=a(43),u=a.n(i),d=a(90),b=a.n(d),p=a(91),j={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function s(s){var a;return(a=e.call(this,s)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(n.a)(s,e);var a=s.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,s=e.active,a=e["aria-label"],r=e.block,n=e.className,c=e.close,i=e.cssModule,u=e.color,d=e.outline,j=e.size,m=e.tag,f=e.innerRef,g=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(d?"-outline":"")+"-"+u,w=Object(p.mapToCssModules)(b()(n,{close:c},c||"btn",c||h,!!j&&"btn-"+j,!!r&&"btn-block",{active:s,disabled:this.props.disabled}),i);g.href&&"button"===m&&(m="a");var O=c?"Close":null;return l.a.createElement(m,Object(t.a)({type:"button"===m&&g.onClick?"button":void 0},g,{className:w,ref:f,onClick:this.onClick,"aria-label":a||O}))},s}(l.a.Component);m.propTypes=j,m.defaultProps={color:"secondary",tag:"button"},s.a=m},283:function(e,s,a){"use strict";var t=a(14),o=a(19),r=a(8),n=a.n(r),c=a(43),l=a.n(c),i=a(90),u=a.n(i),d=a(91),b=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),j={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,s,a){return!0===a||""===a?e?"col":"col-"+s:"auto"===a?e?"col-auto":"col-"+s+"-auto":e?"col-"+a:"col-"+s+"-"+a},g=function(e){var s=e.className,a=e.cssModule,r=e.widths,c=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(s,t){var o=e[s];if(delete l[s],o||""===o){var r=!t;if(Object(d.isObject)(o)){var n,c=r?"-":"-"+s+"-",b=f(r,s,o.size);i.push(Object(d.mapToCssModules)(u()(((n={})[b]=o.size||""===o.size,n["order"+c+o.order]=o.order||0===o.order,n["offset"+c+o.offset]=o.offset||0===o.offset,n)),a))}else{var p=f(r,s,o);i.push(p)}}})),i.length||i.push("col");var b=Object(d.mapToCssModules)(u()(s,i),a);return n.a.createElement(c,Object(t.a)({},l,{className:b}))};g.propTypes=j,g.defaultProps=m,s.a=g},284:function(e,s,a){"use strict";var t=a(14),o=a(19),r=a(8),n=a.n(r),c=a(43),l=a.n(c),i=a(90),u=a.n(i),d=a(91),b=l.a.oneOfType([l.a.number,l.a.string]),p={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},j={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var s=e.className,a=e.cssModule,r=e.noGutters,c=e.tag,l=e.form,i=e.widths,b=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(s,a){var t=e[s];if(delete b[s],t){var o=!a;p.push(o?"row-cols-"+t:"row-cols-"+s+"-"+t)}}));var j=Object(d.mapToCssModules)(u()(s,r?"no-gutters":null,l?"form-row":"row",p),a);return n.a.createElement(c,Object(t.a)({},b,{className:j}))};m.propTypes=p,m.defaultProps=j,s.a=m},384:function(e,s,a){"use strict";var t=a(207),o=a(8),r=a(277),n=a(224),c=a(276),l=a.n(c).a||c,i=function(e){function s(){return null!==e&&e.apply(this,arguments)||this}return Object(t.b)(s,e),s.prototype.shouldComponentUpdate=function(e){var s=this.props,a=s.values,o=Object(t.c)(s,["values"]),r=e.values,n=Object(t.c)(e,["values"]);return!l(r,a)||!l(o,n)},s.prototype.render=function(){var e=this;return o.createElement(r.a.Consumer,null,(function(s){Object(n.c)(s);var a=s.formatMessage,r=s.textComponent,c=void 0===r?o.Fragment:r,l=e.props,i=l.id,u=l.description,d=l.defaultMessage,b=l.values,p=l.children,j=l.tagName,m=void 0===j?c:j,f=a({id:i,description:u,defaultMessage:d},b);return Array.isArray(f)||(f=[f]),"function"===typeof p?p(f):m?o.createElement.apply(o,Object(t.d)([m,null],f)):f}))},s.displayName="FormattedMessage",s}(o.Component);s.a=i},93:function(e,s,a){"use strict";var t=a(1),o=(a(8),a(384)),r=a(277),n=a(24);s.a=Object(r.c)((function(e){return Object(n.jsx)(o.a,Object(t.a)({},e))}),{withRef:!1})},98:function(e,s,a){"use strict";a.d(s,"a",(function(){return n})),a.d(s,"b",(function(){return c}));var t=a(1),o=(a(8),a(283)),r=a(24),n=function(e){return Object(r.jsx)(o.a,Object(t.a)(Object(t.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},c=function(e){var s=e.className;return Object(r.jsx)("div",{className:"separator ".concat(s)})}}}]);
//# sourceMappingURL=user-reset-password.8a26d250.chunk.js.map