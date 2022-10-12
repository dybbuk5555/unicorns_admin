"use strict";(self.webpackChunkCrypto_Unicorns_Admin=self.webpackChunkCrypto_Unicorns_Admin||[]).push([[4460],{89994:function(e,n,t){var r=t(93433),a=t(36834),i=t(10499),o=t(70816),l=t.n(o),u=t(55558),s={generic:function(e){return a.nK().label(e)},string:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.Xg().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.IX().compact().ensure().of(a.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.IX().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.IX().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.IX().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat((0,r.Z)(n.options||[])));return n.required&&(t=t.required((0,i.ag)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).transform((function(e,n){return e?l()(n,u.Bx).toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).test("is-date",(0,i.ag)("validation.mixed.default"),(function(e){return!e||l()(e,u.eM).isValid()})).transform((function(e){return e?l()(e).format(u.eM):null}));return n.required&&(t=t.required()),t}};n.Z=s},98040:function(e,n,t){var r=t(76747),a=function(e){return e.tenant.form},i=(0,r.P1)([a],(function(e){return e.record})),o={selectInitLoading:(0,r.P1)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,r.P1)([a],(function(e){return Boolean(e.saveLoading)})),selectRecord:i,selectRaw:a};n.Z=o},42735:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),a=t(45987),i=t(47313),o=t(48106),l=(0,t(88564).ZP)(o.Z)((function(e){var n=e.theme,t=e.ownerState,a=n.palette,i=n.functions,o=t.error,l=t.success,u=t.disabled,s=a.grey,c=a.transparent,d=a.error,m=a.success,f=i.pxToRem;return(0,r.Z)((0,r.Z)({backgroundColor:u?"".concat(s[200]," !important"):c.main,pointerEvents:u?"none":"auto"},o&&{backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23F44335' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23F44335' stroke='none'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right ".concat(f(12)," center"),backgroundSize:"".concat(f(16)," ").concat(f(16)),"& .Mui-focused":{"& .MuiOutlinedInput-notchedOutline, &:after":{borderColor:d.main}},"& .MuiInputLabel-root.Mui-focused":{color:d.main}}),l&&{backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%234CAF50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right ".concat(f(12)," center"),backgroundSize:"".concat(f(16)," ").concat(f(16)),"& .Mui-focused":{"& .MuiOutlinedInput-notchedOutline, &:after":{borderColor:m.main}},"& .MuiInputLabel-root.Mui-focused":{color:m.main}})})),u=t(46417),s=["error","success","disabled"],c=(0,i.forwardRef)((function(e,n){var t=e.error,i=e.success,o=e.disabled,c=(0,a.Z)(e,s);return(0,u.jsx)(l,(0,r.Z)((0,r.Z)({},c),{},{ref:n,ownerState:{error:t,success:i,disabled:o}}))}));c.defaultProps={error:!1,success:!1,disabled:!1};var d=c},12335:function(e,n,t){var r=t(47313),a=t(45788),i=t(63830),o=t(72686),l=t(93019),u=t(46417);function s(e){var n=e.background,t=e.children,s=(0,a.I0)(),c=(0,i.TH)().pathname;return(0,r.useEffect)((function(){s(l.Z.doLayout("page"))}),[c]),(0,u.jsx)(o.Z,{width:"100vw",height:"100%",minHeight:"100vh",bgcolor:n,sx:{overflowX:"hidden"},children:t})}s.defaultProps={background:"default"},n.Z=s},76340:function(e,n,t){var r=t(9019),a=t(72686),i=t(12335),o=t(46417);function l(e){var n=e.coverHeight,t=e.image,l=e.children;return(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(a.Z,{width:"calc(100% - 2rem)",minHeight:n,borderRadius:"xl",mx:2,my:2,pt:6,pb:28,sx:{backgroundImage:function(e){var n=e.functions,r=n.linearGradient,a=n.rgba,i=e.palette.gradients;return t&&"".concat(r(a(i.dark.main,.1),a(i.dark.state,.1)),", url(").concat(t,")")},backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),(0,o.jsx)(a.Z,{mt:{xs:-20,lg:-18},px:1,width:"calc(100% - 2rem)",mx:"auto",children:(0,o.jsx)(r.ZP,{container:!0,spacing:1,justifyContent:"center",children:(0,o.jsx)(r.ZP,{item:!0,xs:11,sm:9,md:5,lg:4,xl:3,children:l})})})]})}l.defaultProps={coverHeight:"35vh"},n.Z=l},44460:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(29439),a=t(10499),i=t(926),o=t(86495),l=t(47313),u=t(45788),s=t(1413),c=t(43270),d=t(51853),m=t(98040),f=t(56148),g=t(89994),v=t(36834),p=t(86430);var h=t(1354),b=t(41727),x=t(67357),Z=t(64760),j=t(46417),y=v.Ry().shape({name:g.Z.string((0,a.ag)("tenant.fields.tenantName"),{required:!0,max:50}),url:g.Z.string((0,a.ag)("tenant.fields.tenantUrl"),{required:!0,max:50}).matches(/^[a-z0-9][-a-zA-Z0-9]*$/,(0,a.ag)("tenant.validation.url"))}),C=v.Ry().shape({name:g.Z.string((0,a.ag)("tenant.fields.tenantName"),{required:!0,max:50})}),w=h.w.isEnabled?y:C;var q=function(e){var n=(0,u.I0)(),t=(0,l.useState)({name:""}),i=(0,r.Z)(t,1)[0],g=(0,c.cI)({resolver:(0,x.X)(w),mode:"onSubmit",defaultValues:i}),v=(0,u.v9)(m.Z.selectSaveLoading),y=(0,u.v9)(o.Z.selectInvitedTenants);return(0,j.jsx)(c.RV,(0,s.Z)((0,s.Z)({},g),{},{children:(0,j.jsxs)("form",{onSubmit:g.handleSubmit((function(e){n(d.Z.doCreate(e))})),children:[(0,j.jsx)(f.Z,{name:"name",label:(0,a.ag)("tenant.fields.tenantName"),autoComplete:"name",onChange:function(e){g.setValue("url",e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-"))},autoFocus:!0}),h.w.isEnabled&&(0,j.jsx)(f.Z,{name:"url",placeholder:(0,a.ag)("tenant.fields.tenantUrl"),endAdornment:(0,j.jsxs)(b.Z,{position:"end",children:[".",p.Z.frontendUrl.host]})}),(0,j.jsx)(Z.Z,{style:{marginTop:"16px"},variant:"gradient",color:"info",type:"submit",fullWidth:!0,disabled:v,children:(0,a.ag)("tenant.create.button")}),Boolean(y.length)&&(0,j.jsx)(Z.Z,{style:{marginTop:"16px"},type:"button",fullWidth:!0,onClick:e.onViewToggle,children:(0,a.ag)("tenant.invitation.view")})]})}))},k=t(28769),I=t(10546),S=t(5544),E=t(60357),P=v.Ry().shape({id:g.Z.string((0,a.ag)("tenant.fields.tenantId"))});var V=function(e){var n=(0,u.I0)(),t=(0,E.Q)().sidenavColor,i=(0,u.v9)(I.Z.selectLoading),d=(0,u.v9)(o.Z.selectInvitedTenants),m=(0,u.v9)(o.Z.selectCurrentUser),f=(0,l.useState)({id:d[0].id}),g=(0,r.Z)(f,1)[0],v=(0,c.cI)({resolver:(0,x.X)(P),mode:"onSubmit",defaultValues:g});return(0,j.jsx)(c.RV,(0,s.Z)((0,s.Z)({},v),{},{children:(0,j.jsxs)("form",{onSubmit:v.handleSubmit((function(e){var t=e.id,r=m.tenants.find((function(e){return e.tenant.id===t}));n(k.Z.doAccept(r.invitationToken))})),children:[(0,j.jsx)(S.Z,{name:"id",label:(0,a.ag)("tenant.fields.tenantId"),options:d.map((function(e){return{value:e.id,label:e.name}}))}),(0,j.jsx)(Z.Z,{style:{marginTop:"16px"},variant:"gradient",color:t,type:"submit",fullWidth:!0,disabled:i,children:(0,a.ag)("tenant.invitation.accept")}),(0,j.jsx)(Z.Z,{style:{marginTop:"16px"},variant:"gradient",color:t,type:"button",fullWidth:!0,onClick:e.onViewToggle,children:(0,a.ag)("tenant.new.title")})]})}))},T=t(73428),O=t(72686),L=t(53649),M=t(76340),R=t(68090),A=t(28303);var z=function(){var e=(0,l.useState)("form"),n=(0,r.Z)(e,2),t=n[0],s=n[1],c=(0,u.I0)(),d=(0,u.v9)(o.Z.selectInvitedTenants);(0,u.v9)(o.Z.selectBackgroundImageUrl),(0,u.v9)(o.Z.selectLogoUrl),(0,l.useEffect)((function(){s(d.length?"select":"form")}),[d]);var m=function(){s((function(e){return"form"===e?"select":"form"}))};return(0,j.jsx)(M.Z,{image:"/images/background.svg",children:(0,j.jsxs)(T.Z,{children:[(0,j.jsx)(O.Z,{variant:"gradient",bgcolor:"info",borderRadius:"lg",coloredShadow:"success",mx:2,mt:-3,p:3,mb:1,textAlign:"center",children:(0,j.jsx)(O.Z,{display:"flex",justifyContent:"center",py:2,children:(0,j.jsx)(R.O,{width:"80%"})})}),(0,j.jsxs)(O.Z,{pt:4,pb:3,px:3,children:["form"===t?(0,j.jsx)(q,{onViewToggle:m}):(0,j.jsx)(V,{onViewToggle:m}),(0,j.jsx)(O.Z,{mt:3,mb:1,textAlign:"center",children:(0,j.jsx)(L.Z,{variant:"button",color:"text",children:(0,j.jsx)(L.Z,{component:A.rU,to:"#",variant:"button",color:"info",fontWeight:"medium",onClick:function(){c(i.Z.doSignout())},textGradient:!0,children:(0,a.ag)("auth.signout")})})})]})]})})}},49384:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(15671),a=t(43144),i=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var o=n[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},56148:function(e,n,t){var r=t(29439),a=t(47313),i=t(43270),o=t(49384),l=t(72686),u=t(42735),s=t(53649),c=t(46417);function d(e){var n=e.autoComplete,t=e.autoFocus,d=e.disabled,m=e.endAdornment,f=e.externalErrorMessage,g=e.forceValue,v=(e.fullWidth,e.hint),p=(e.id,e.label),h=e.margin,b=e.name,x=e.placeholder,Z=e.readOnly,j=e.required,y=e.shrink,C=e.size,w=e.startAdornment,q=e.type,k=e.value,I=e.variant,S=(0,i.Gc)(),E=S.control.defaultValuesRef,P=S.errors,V=S.formState,T=V.touched,O=V.isSubmitted,L=S.getValues,M=S.register,R=S.setValue,A=E.current||{},z=L(b),B=(0,a.useState)(z||k||A[b]||""),F=(0,r.Z)(B,2),U=F[0],W=F[1];g&&R(b,k,{shouldValidate:!1,shouldDirty:!0}),(0,a.useEffect)((function(){M({name:b})}),[M,b]),(0,a.useEffect)((function(){g&&W(k)}),[k]);var X=o.Z.errorMessage(b,P,T,O,f);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.Z,{id:b,name:b,type:q,label:p,required:j,onChange:function(n){g||R(b,n.target.value,{shouldValidate:!1,shouldDirty:!0}),W(n.target.value),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},margin:h,fullWidth:!0,variant:I,size:C,placeholder:x||void 0,autoFocus:t||void 0,autoComplete:n||void 0,InputLabelProps:{shrink:y},error:Boolean(X),helperText:v,InputProps:{startAdornment:w,endAdornment:m},inputProps:{name:b,readOnly:Z},disabled:d,value:U}),X&&(0,c.jsx)(l.Z,{mt:.75,children:(0,c.jsx)(s.Z,{component:"div",variant:"caption",color:"error",fontWeight:"regular",children:X})})]})}d.defaultProps={forceValue:!1,readOnly:!1,required:!1,type:"text"},n.Z=d},5544:function(e,n,t){var r=t(1413),a=t(29439),i=t(62829),o=t(10499),l=t(47313),u=t(43270),s=t(49384),c=t(72686),d=t(42735),m=t(53649),f=t(46417);function g(e){var n=e.externalErrorMessage,t=e.forceValue,g=(e.hint,e.isClearable,e.label),v=e.margin,p=e.mode,h=e.name,b=e.options,x=(e.placeholder,e.renderInput),Z=e.renderOption,j=e.renderTags,y=e.required,C=e.shrink,w=e.size,q=e.value,k=e.variant,I=(0,u.Gc)(),S=I.control.defaultValuesRef,E=I.errors,P=I.formState,V=P.touched,T=P.isSubmitted,O=I.getValues,L=I.register,M=I.setValue,R=s.Z.errorMessage(h,E,V,T,n),A=(S.current||{})[h],z=O(h),B=(0,l.useState)(z||q||A),F=(0,a.Z)(B,2),U=F[0],W=F[1];(0,l.useEffect)((function(){L({name:h})}),[L,h]);var X=function(e){return e?e.map((function(e){return b.find((function(n){return n.value===e}))})):[]},N=function(n){var t=e.options;return null!=n&&t.find((function(e){return e.value===n}))||null},_=function(n){if(!n)return W([]),M(h,[],{shouldValidate:!1,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var t=n.map((function(e){return e?e.value:e})).filter((function(e){return null!=e}));W(t),M(h,t,{shouldValidate:!1,shouldDirty:!0}),e.onChange&&e.onChange(t)},D=function(n){if(!n)return W(null),M(h,null,{shouldValidate:!1,shouldDirty:!0}),void(e.onChange&&e.onChange(null));W(n.value),M(h,n.value,{shouldValidate:!1,shouldDirty:!0}),e.onChange&&e.onChange(n.value)};return(0,f.jsxs)(c.Z,{position:"relative",children:[(0,f.jsx)(i.Z,{multiple:"multiple"===p,isOptionEqualToValue:function(e,n){return e.value===n.value},disablePortal:!1,value:function(){var n=e.mode,r=t?q:z||U;return"multiple"===n?X(r):N(r)}(),options:b,onChange:function(n,t){var r;r=t,"multiple"===e.mode?_(r):D(r)},renderOption:Z,renderInput:null!==x&&void 0!==x?x:function(e){return(0,f.jsx)(d.Z,(0,r.Z)((0,r.Z)({},e),{},{required:y,margin:v,variant:k,size:w,InputLabelProps:{shrink:C},label:g}))},renderTags:j,loadingText:(0,o.ag)("autocomplete.loading"),noOptionsText:(0,o.ag)("autocomplete.noOptions")}),R&&(0,f.jsx)(c.Z,{mt:.75,children:(0,f.jsx)(m.Z,{component:"div",variant:"caption",color:"error",fontWeight:"regular",children:R})})]})}g.defaultProps={forceValue:!1,isClearable:!0,required:!1},n.Z=g},67357:function(e,n,t){t.d(n,{X:function(){return s}});var r=t(74165),a=t(15861),i=t(4942),o=t(93433),l=t(43270),u=function(e,n){return Array.isArray(e.inner)&&e.inner.length?e.inner.reduce((function(e,t){var r=t.path,a=t.message,l=t.type,u=e[r]&&e[r].types||{},s=r||l;return Object.assign(Object.assign({},e),s?(0,i.Z)({},s,Object.assign(Object.assign({},e[s]||{message:a,type:l}),n?{types:Object.assign(Object.assign({},u),(0,i.Z)({},l,u[l]?[].concat((0,o.Z)([].concat(u[l])),[a]):a))}:{})):{})}),{}):(0,i.Z)({},e.path,{message:e.message,type:e.type})},s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{abortEarly:!1};return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a,i){var o,s,c=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c.length>2&&void 0!==c[2]&&c[2],t.prev=1,n.context,t.next=5,e.validate(a,Object.assign(Object.assign({},n),{context:i}));case 5:return t.t0=t.sent,t.t1={},t.abrupt("return",{values:t.t0,errors:t.t1});case 10:return t.prev=10,t.t2=t.catch(1),s=u(t.t2,o),t.abrupt("return",{values:{},errors:(0,l.T8)(s)});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()}},41727:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(4942),a=t(63366),i=t(87462),o=t(47313),l=t(83061),u=t(50317),s=t(91615),c=t(61113),d=t(91397),m=t(99008),f=t(88564),g=t(22131);function v(e){return(0,g.Z)("MuiInputAdornment",e)}var p,h=(0,t(655).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=t(29394),x=t(46417),Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,f.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,s.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active},"filled"===t.variant&&(0,r.Z)({},"&.".concat(h.positionStart,"&:not(.").concat(h.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),y=o.forwardRef((function(e,n){var t=(0,b.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,f=t.className,g=t.component,h=void 0===g?"div":g,y=t.disablePointerEvents,C=void 0!==y&&y,w=t.disableTypography,q=void 0!==w&&w,k=t.position,I=t.variant,S=(0,a.Z)(t,Z),E=(0,m.Z)()||{},P=I;I&&E.variant,E&&!P&&(P=E.variant);var V=(0,i.Z)({},t,{hiddenLabel:E.hiddenLabel,size:E.size,disablePointerEvents:C,position:k,variant:P}),T=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,a=e.position,i=e.size,o=e.variant,l={root:["root",t&&"disablePointerEvents",a&&"position".concat((0,s.Z)(a)),o,r&&"hiddenLabel",i&&"size".concat((0,s.Z)(i))]};return(0,u.Z)(l,v,n)}(V);return(0,x.jsx)(d.Z.Provider,{value:null,children:(0,x.jsx)(j,(0,i.Z)({as:h,ownerState:V,className:(0,l.Z)(T.root,f),ref:n},S,{children:"string"!==typeof r||q?(0,x.jsxs)(o.Fragment,{children:["start"===k?p||(p=(0,x.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,x.jsx)(c.Z,{color:"text.secondary",children:r})}))})}))}}]);