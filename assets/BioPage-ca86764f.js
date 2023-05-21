import{r as p,j as i,s as _,u as V,a as U,b as x,f as A,c as H,d as D,e as G,g as Z,L as q}from"./index-bf622685.js";import{g as J,B as K,L as Q,a as X,T as Y,u as E,b as y,c as w,C,f as aa,d as j,s as oa}from"./TextField-b99eebb4.js";import{g as ta,s as I,r as ia,c,a as b,b as na,u as sa,d as S,e as ra}from"./styled-231b7297.js";function ea(a){return ta("MuiButton",a)}const la=J("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),h=la,ca=p.createContext({}),da=ca,pa=a=>{const{color:o,disableElevation:t,fullWidth:n,size:s,variant:r,classes:d}=a,u={root:["root",r,`${r}${c(o)}`,`size${c(s)}`,`${r}Size${c(s)}`,o==="inherit"&&"colorInherit",t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${c(s)}`],endIcon:["endIcon",`iconSize${c(s)}`]},l=ra(u,ea,d);return{...d,...l}},R=a=>({...a.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},...a.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},...a.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}}),ua=I(K,{shouldForwardProp:a=>ia(a)||a==="classes",name:"MuiButton",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.root,o[t.variant],o[`${t.variant}${c(t.color)}`],o[`size${c(t.size)}`],o[`${t.variant}Size${c(t.size)}`],t.color==="inherit"&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})(({theme:a,ownerState:o})=>{var t,n;const s=a.palette.mode==="light"?a.palette.grey[300]:a.palette.grey[800],r=a.palette.mode==="light"?a.palette.grey.A100:a.palette.grey[700];return{...a.typography.button,minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:b(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},...o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:b(a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(a.vars||a).palette[o.color].main}`,backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:b(a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...o.variant==="contained"&&{backgroundColor:a.vars?a.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},...o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(a.vars||a).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[o.color].main}}},"&:active":{...o.variant==="contained"&&{boxShadow:(a.vars||a).shadows[8]}},[`&.${h.focusVisible}`]:{...o.variant==="contained"&&{boxShadow:(a.vars||a).shadows[6]}},[`&.${h.disabled}`]:{color:(a.vars||a).palette.action.disabled,...o.variant==="outlined"&&{border:`1px solid ${(a.vars||a).palette.action.disabledBackground}`},...o.variant==="contained"&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground}},...o.variant==="text"&&{padding:"6px 8px"},...o.variant==="text"&&o.color!=="inherit"&&{color:(a.vars||a).palette[o.color].main},...o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},...o.variant==="outlined"&&o.color!=="inherit"&&{color:(a.vars||a).palette[o.color].main,border:a.vars?`1px solid rgba(${a.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${b(a.palette[o.color].main,.5)}`},...o.variant==="contained"&&{color:a.vars?a.vars.palette.text.primary:(t=(n=a.palette).getContrastText)==null?void 0:t.call(n,a.palette.grey[300]),backgroundColor:a.vars?a.vars.palette.Button.inheritContainedBg:s,boxShadow:(a.vars||a).shadows[2]},...o.variant==="contained"&&o.color!=="inherit"&&{color:(a.vars||a).palette[o.color].contrastText,backgroundColor:(a.vars||a).palette[o.color].main},...o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},...o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},...o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},...o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},...o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},...o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},...o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},...o.fullWidth&&{width:"100%"}}},({ownerState:a})=>a.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${h.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${h.disabled}`]:{boxShadow:"none"}}),xa=I("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.startIcon,o[`iconSize${c(t.size)}`]]}})(({ownerState:a})=>({display:"inherit",marginRight:8,marginLeft:-4,...a.size==="small"&&{marginLeft:-2},...R(a)})),ga=I("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.endIcon,o[`iconSize${c(t.size)}`]]}})(({ownerState:a})=>({display:"inherit",marginRight:-4,marginLeft:8,...a.size==="small"&&{marginRight:-2},...R(a)})),va=p.forwardRef(function(o,t){const n=p.useContext(da),s=na(n,o),r=sa({props:s,name:"MuiButton"}),{children:d,color:u="primary",component:l="button",className:e,disabled:g=!1,disableElevation:k=!1,disableFocusRipple:z=!1,endIcon:m,focusVisibleClassName:T,fullWidth:F=!1,size:P="medium",startIcon:B,type:$,variant:M="text",...W}=r,f={...r,color:u,component:l,disabled:g,disableElevation:k,disableFocusRipple:z,fullWidth:F,size:P,type:$,variant:M},v=pa(f),N=B&&i.jsx(xa,{className:v.startIcon,ownerState:f,children:B}),O=m&&i.jsx(ga,{className:v.endIcon,ownerState:f,children:m});return i.jsxs(ua,{ownerState:f,className:S(n.className,v.root,e),component:l,disabled:g,focusRipple:!z,focusVisibleClassName:S(v.focusVisible,T),ref:t,type:$,...W,classes:v,children:[N,d,O]})}),fa=va,L=p.memo(function({title:o}){return i.jsx(Q,{children:i.jsx(X,{primary:o})})}),ba=a=>a.characterById.itemsInfo,ha=a=>a.characterById.statusInfo,Ca=a=>a.characterById.itemsFilms,ya=a=>a.characterById.statusFilms,Ia=a=>a.characterById.itemsSpecies,za=a=>a.characterById.statusSpecies,ma=p.memo(function({label:o,value:t,name:n,type:s,handleChange:r}){return i.jsx(Y,{label:o,name:n,value:t,type:s,onChange:r,variant:"standard"})}),Ba="_editInputs_60tvm_1",$a={editInputs:Ba},ja=({characterInfo:a})=>{const o=E(),t=n=>{const{name:s,value:r}=n.currentTarget;o(_({name:s,value:r}))};return a?i.jsxs(i.Fragment,{children:[i.jsxs(y,{variant:"h6",children:["Name: ",a.name]}),i.jsx("form",{children:i.jsx("div",{className:$a.editInputs,children:Object.entries(a).filter(([n,s])=>!Array.isArray(s)&&n!=="url"&&n!=="name").map(([n,s])=>i.jsx(ma,{label:n.replace(/^./,r=>r.toUpperCase()).replace(/_/g," "),name:n,value:s,type:typeof s=="number"?"number":"text",handleChange:t},n))})})]}):null},Ra=()=>{const a=V(),{characterId:o}=U(),t=x(ba),n=x(ha),s=x(Ca),r=x(ya),d=x(Ia),u=x(za),l=E();return typeof o!="string"&&a("/",{replace:!0}),p.useEffect(()=>{o&&typeof o=="string"&&l(A(o))},[o,l]),p.useEffect(()=>{p.startTransition(()=>{var e,g;((e=t==null?void 0:t.films)!=null&&e.length||s.length===0)&&l(H(t.films)),((g=t.species)!=null&&g.length||d.length===0)&&l(D(t.species))})},[t,l]),p.useEffect(()=>{G(),Z()},[]),i.jsxs("div",{children:[i.jsx(q,{to:"/",children:i.jsx(fa,{variant:"outlined",children:"Back"})}),i.jsxs("div",{children:[n==="failed"&&i.jsx("p",{children:w}),n==="loading"&&i.jsx(C,{})]}),n==="succeeded"&&t&&typeof t=="object"&&Object.keys(t).length&&i.jsx(ja,{characterInfo:t}),i.jsxs("div",{children:[r==="failed"&&i.jsx("p",{children:aa}),r==="loading"&&i.jsx(C,{})]}),r==="succeeded"&&s&&s.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(y,{variant:"h5",children:"Films:"}),i.jsx(j,{children:s.map(e=>i.jsx(L,{title:`${e.episode_id}. ${e.title}`},e.url.split("/").at(-2)))})]}),i.jsxs("div",{children:[u==="failed"&&i.jsx("p",{children:oa}),u==="loading"&&i.jsx(C,{})]}),u==="succeeded"&&d&&d.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(y,{variant:"h5",children:"Species:"}),i.jsx(j,{children:d.map(e=>i.jsx(L,{title:`${e.name} - ${e.classification} - ${e.designation}`},e.url.split("/").at(-2)))})]})]})};export{Ra as default};
