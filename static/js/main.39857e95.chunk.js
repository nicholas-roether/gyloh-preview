(this["webpackJsonpgyloh-preview"]=this["webpackJsonpgyloh-preview"]||[]).push([[0],{103:function(e,t,a){e.exports=a(115)},114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(152),r=a(0),i=a.n(r),s=a(12),o=a.n(s),c=a(7),l=a(8),p=a(10),u=a(9),m=a(15),h=a(160),d=a(146),f=a(154),g=a(6),b=a(94),v=Object(b.a)({palette:{primary:{main:"#002860",contrastText:"#fff"},secondary:{main:"#6184d8",contrastText:"#fff"},background:{default:"#fff"}},typography:{fontFamily:"Roboto, sans-serif",fontSize:13,button:{fontSize:15,fontFamily:"Rubik, sans-serif",textTransform:"uppercase"},h1:{fontFamily:"Rubik, sans-serif"},h2:{fontFamily:"Rubik, sans-serif"},h3:{fontFamily:"Rubik, sans-serif"},h4:{fontFamily:"Rubik, sans-serif"},h5:{fontFamily:"Rubik, sans-serif"},h6:{fontFamily:"Rubik, sans-serif"}}});function E(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return"string"===typeof e||e[1]})).map((function(e){return"string"===typeof e?e:e[0]})).join(" ")}var y,O=a(140),j=a(141),x=a(139),k=a(63),w=a(91),C=a.n(w),S=a(92),N=a.n(S),I=a(156),W=a(90),A=a.n(W),L=Object(h.a)({searchBg:{display:"inline-flex",justifyContent:"flex-end",background:"transparent",verticalAlign:"baseline",borderRadius:v.shape.borderRadius,flexGrow:1,maxWidth:"400px",transition:v.transitions.create(["background"],{easing:v.transitions.easing.easeIn,duration:v.transitions.duration.shortest})},searchBgActive:{background:v.palette.secondary.main},searchField:{width:0,color:v.palette.primary.contrastText,textOverflow:"ellipsis",transition:v.transitions.create(["width","padding"],{easing:v.transitions.easing.easeIn,duration:v.transitions.duration.shortest})},searchFieldActive:{width:"100%",paddingLeft:v.spacing(2)}}),F=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).ref=void 0,n.state={open:!1},n.ref=i.a.createRef(),n}return Object(l.a)(a,[{key:"toggle",value:function(e){this.setState((function(e){return{open:!e.open}}))}},{key:"putCursor",value:function(e){var t=e.querySelector("input");t&&t.focus()}},{key:"componentDidUpdate",value:function(){this.ref.current instanceof HTMLElement&&this.state.open&&this.putCursor(this.ref.current)}},{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement("span",{className:E(t.searchBg,[t.searchBgActive,this.state.open]),ref:this.ref,key:"search"},i.a.createElement(I.a,{placeholder:"Seite Durchsuchen...",className:E(t.searchField,[t.searchFieldActive,this.state.open])}),i.a.createElement(x.a,{color:"inherit",onClick:function(t){return e.toggle(t)}},i.a.createElement(A.a,null)))}}]),a}(i.a.Component),R=Object(g.a)(L)(F),T=Object(h.a)({heading:{margin:v.spacing(0,2)},titleLong:Object(m.a)({display:"none"},v.breakpoints.up("md"),{display:"inline"}),titleShort:(y={display:"none"},Object(m.a)(y,v.breakpoints.up("sm"),{display:"inline"}),Object(m.a)(y,v.breakpoints.up("md"),{display:"none"}),y),icons:Object(m.a)({display:"inline-flex",flexGrow:1,justifyContent:"flex-end"},v.breakpoints.up("sm"),{flexGrow:0,position:"relative",float:"right"}),grow:{flexGrow:1}}),D=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(O.a,{position:"sticky",className:this.props.className},i.a.createElement(j.a,null,i.a.createElement(x.a,{color:"inherit",onClick:this.props.onOpenMenu},i.a.createElement(C.a,null)),i.a.createElement("span",{className:e.heading},i.a.createElement(k.a,{className:e.titleLong,variant:"h5"},"Gymnasium Lohbr\xfcgge"),i.a.createElement(k.a,{className:e.titleShort,variant:"h5"},"Gyloh")),i.a.createElement("span",{className:e.grow}),i.a.createElement("span",{className:e.icons},i.a.createElement(R,null),i.a.createElement(x.a,{color:"inherit","aria-label":"Kalender ansehen"},i.a.createElement(N.a,null)))))}}]),a}(i.a.Component),M=Object(g.a)(T)(D),z=a(51),B=a(159),P=a(27),U=a(161),G=a(74),H=a(75),K=Object(h.a)({drawerPaper:{maxWidth:240,width:"100vw"},drawerNav:Object(z.a)({position:"sticky",top:0,zIndex:1,borderBottom:"1px ".concat(v.palette.divider," solid"),background:v.palette.background.paper,display:"flex",alignItems:"center",justifyContent:"ltr"===v.direction?"flex-end":"flex-start"},v.mixins.toolbar)}),J=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=i.a.createElement("div",{className:this.props.classes.drawerNav},i.a.createElement(x.a,{onClick:this.props.onClose},"ltr"===v.direction?i.a.createElement(G.a,null):i.a.createElement(H.a,null)));return["sm","xs"].includes(this.props.width)?i.a.createElement(B.a,{anchor:"left",open:this.props.open,classes:{paper:this.props.classes.drawerPaper},onOpen:this.props.onOpen,onClose:this.props.onClose,keepMounted:!0},e,this.props.children):i.a.createElement(P.a,{variant:"persistent",anchor:"left",open:this.props.open,classes:{paper:this.props.classes.drawerPaper},onClose:this.props.onClose},e,this.props.children)}}]),a}(i.a.Component),V=Object(g.a)(K)(Object(U.a)()(J)),_=a(144),Y=a(145),q=a(142),X=a(143),Z=a(41),$=a(162),Q=a(76),ee=a(77),te=a(78),ae=a(79),ne=a(80),re=a(81),ie=a(82),se=a(83),oe=a(84),ce=a(157),le=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={anchorEl:null},e}return Object(l.a)(a,[{key:"open",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"close",value:function(){this.setState({anchorEl:null})}},{key:"render",value:function(){var e=this;return i.a.createElement("span",{id:this.props.id},i.a.createElement(q.a,{className:"dropdown-button",color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(t){return e.open(t)}},this.props.element),i.a.createElement(ce.a,{open:Boolean(this.state.anchorEl),id:this.props.menuId,anchorEl:this.state.anchorEl,anchorOrigin:this.props.origin,onClick:function(t){t.target instanceof HTMLElement&&t.target.parentNode===t.currentTarget&&e.close()},keepMounted:!0},this.props.children))}}]),a}(i.a.Component),pe=Object(h.a)({textSizedImage:{height:v.typography.h4.fontSize}}),ue=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(le,{element:i.a.createElement("img",{src:"eduport.png",width:"70%",alt:"EduPort"}),origin:{horizontal:"right",vertical:"top"}},i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(Q.a,null)),i.a.createElement(Y.a,{primary:"Startseite"})),i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(ee.a,null)),i.a.createElement(Y.a,{primary:"Account"})),i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(te.a,null)),i.a.createElement(Y.a,{primary:"Neuigkeiten"})),i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(ae.a,null)),i.a.createElement(Y.a,{primary:"Termine"})),i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(ne.a,null)),i.a.createElement(Y.a,{primary:"E-Mail"})),i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(re.a,null)),i.a.createElement(Y.a,{primary:"Dateien"})),i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(ie.a,null)),i.a.createElement(Y.a,{primary:"Hilfe"})),i.a.createElement(d.a,null),i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(se.a,null)),i.a.createElement(Y.a,{primary:"Schulmediathek"})),i.a.createElement($.a,{button:!0},i.a.createElement(_.a,null,i.a.createElement(oe.a,null)),i.a.createElement(Y.a,{primary:"Geschichtsbuch"})),i.a.createElement(d.a,null),i.a.createElement(f.a,{mt:1,mb:1},i.a.createElement($.a,{button:!0},i.a.createElement("img",{className:e.textSizedImage,src:"dll.png",alt:"digital learing lab",height:v.typography.h3.fontSize}))))}}]),a}(i.a.Component),me=Object(g.a)(pe)(ue),he=a(147),de=a(36),fe=a(85),ge=a(86),be=Object(h.a)({nested:{paddingLeft:v.spacing(8)}}),ve=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e}return Object(l.a)(a,[{key:"onClick",value:function(){this.setState((function(e){return{open:!e.open}}))}},{key:"render",value:function(){var e=this;return i.a.createElement("span",null,i.a.createElement($.a,{button:!0,component:this.props.to?de.b:"span",to:this.props.to,onClick:function(){return e.onClick()}},this.props.icon,this.props.text,this.state.open?i.a.createElement(fe.a,null):i.a.createElement(ge.a,null)),i.a.createElement(he.a,{in:this.state.open},i.a.createElement(X.a,{disablePadding:!0},this.props.children)))}}]),a}(i.a.Component),Ee=Object(g.a)(be)(ve),ye=a(44),Oe=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.to,a=Object(ye.a)(e,["to"]);return i.a.createElement($.a,Object.assign({button:!0,component:de.b,to:t},a),this.props.children)}}]),a}(i.a.Component),je=Object(h.a)({nested:{paddingLeft:v.spacing(10)}}),xe=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=Object(ye.a)(e,["classes"]);return i.a.createElement(Oe,Object.assign({classes:{button:t.nested}},a))}}]),a}(i.a.Component),ke=Object(g.a)(je)(xe),we=a(93),Ce=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"redirect",value:function(){window.location.href=this.props.to}},{key:"render",value:function(){var e=this,t=this.props,a=(t.to,Object(ye.a)(t,["to"]));return i.a.createElement($.a,Object.assign({button:!0,component:"li",onClick:function(){return e.redirect()}},a),this.props.children)}}]),a}(i.a.Component),Se=Object(h.a)({navHeader:{display:"flex",margin:v.spacing(4,0,2),flexDirection:"column",alignItems:"center",justifyContent:"center"}});var Ne=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"createIcon",value:function(e){var t,a=(t=Z,new Map(Object.keys(t).map((function(e){return[e,t[e]]}))));return i.a.createElement(a.get(e),{key:"Icon-".concat(e)})}},{key:"createListItemLink",value:function(e,t){return i.a.createElement(Oe,{to:e.to,key:t},e.icon&&i.a.createElement(_.a,null,this.createIcon(e.icon)),i.a.createElement(Y.a,{primary:e.text}))}},{key:"createCollapseItem",value:function(e,t){return i.a.createElement(ke,{to:e.to,key:t},i.a.createElement(Y.a,{primary:e.text}))}},{key:"createListItemCollapse",value:function(e,t){var a=this;return i.a.createElement(Ee,{to:e.to,text:i.a.createElement(Y.a,null,e.text),icon:e.icon?i.a.createElement(_.a,null,this.createIcon(e.icon)):null,key:t},e.collapse.map((function(e,t){return a.createCollapseItem(e,t.toString())})))}},{key:"createListItemExternal",value:function(e,t){return i.a.createElement(Ce,{to:e.external,key:t},e.icon&&i.a.createElement(_.a,null,this.createIcon(e.icon)),i.a.createElement(Y.a,null,e.text))}},{key:"renderStructure",value:function(e){var t=this,a=[];return e.forEach((function(e,n){var r;"text"in(r=e)&&"collapse"in r?a.push(t.createListItemCollapse(e,n.toString())):!function(e){return"text"in e&&"external"in e}(e)?function(e){return function(e){return"to"in e&&"text"in e}(e)}(e)&&a.push(t.createListItemLink(e,n.toString())):a.push(t.createListItemExternal(e,n.toString()))})),a}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(V,{open:this.props.open,onOpen:this.props.onOpen,onClose:this.props.onClose},i.a.createElement("div",{className:e.navHeader},i.a.createElement(q.a,null,i.a.createElement("img",{src:"logo.png",width:"70%",alt:"Gyloh"}))),i.a.createElement(X.a,null,this.renderStructure(we.a)),i.a.createElement(f.a,{mb:3}),i.a.createElement(d.a,null),i.a.createElement(f.a,{pt:3,pb:3},i.a.createElement(me,null)))}}]),a}(i.a.Component),Ie=Object(g.a)(Se)(Ne),We=Object(h.a)({bar:{transition:v.transitions.create(["margin","width"],{easing:v.transitions.easing.easeIn,duration:v.transitions.duration.leavingScreen})},barOpen:Object(m.a)({transition:v.transitions.create(["margin","width"],{easing:v.transitions.easing.easeOut,duration:v.transitions.duration.enteringScreen})},v.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:"ltr"===v.direction?240:0,marginRight:"ltr"===v.direction?0:240}),contentWrapper:{transition:v.transitions.create(["margin"],{easing:v.transitions.easing.easeIn,duration:v.transitions.duration.leavingScreen})},content:Object(m.a)({maxWidth:"1200px",margin:"0 auto",padding:v.spacing(0,1)},v.breakpoints.up("sm"),{padding:v.spacing(0,3)}),contentWrapperOpen:Object(m.a)({transition:v.transitions.create(["margin"],{easing:v.transitions.easing.easeOut,duration:v.transitions.duration.enteringScreen})},v.breakpoints.up("md"),{marginLeft:"ltr"===v.direction?240:0,marginRight:"ltr"===v.direction?0:240})}),Ae=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={navOpen:!1},e}return Object(l.a)(a,[{key:"openNav",value:function(){this.setState({navOpen:!0})}},{key:"closeNav",value:function(){this.setState({navOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement("div",{className:"page"},i.a.createElement(M,{onOpenMenu:function(){return e.openNav()},className:E(t.bar,[t.barOpen,this.state.navOpen])}),i.a.createElement(Ie,{open:this.state.navOpen,onOpen:function(){return e.openNav()},onClose:function(){return e.closeNav()}}),i.a.createElement(d.a,null),i.a.createElement("div",{className:E(t.contentWrapper,[t.contentWrapperOpen,this.state.navOpen])},i.a.createElement(f.a,{marginX:4,marginY:1}),i.a.createElement(f.a,{className:t.content},this.props.children)))}}]),a}(i.a.Component),Le=Object(g.a)(We)(Ae),Fe=a(17),Re=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.margin;return i.a.createElement(f.a,{mr:!e||["right","both"].includes(e)?2:0,ml:e&&["left","both"].includes(e)?2:0,marginY:1,display:"inline-block"},this.props.to?i.a.createElement(de.b,{to:this.props.to,style:{textDecoration:"none"}},i.a.createElement(q.a,{variant:"contained",color:"secondary"},this.props.children)):i.a.createElement(q.a,{variant:"contained",color:"secondary",onClick:this.props.onClick,href:this.props.href},this.props.children))}}]),a}(i.a.Component),Te=a(158),De=i.a.createContext(0),Me=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getOffsets",value:function(e){switch(e){case"top":return[0,-a.OFFSET];case"left":return[-a.OFFSET,0];case"right":return[a.OFFSET,0];default:case"bottom":return[0,a.OFFSET]}}},{key:"render",value:function(){var e=this,t=this.getOffsets(this.props.from),n={entering:{opacity:0,left:t[0],top:t[1]},entered:{opacity:1,left:0,top:0}},r={position:"relative",transition:"opacity ease-in ".concat(a.DURATION,"ms, top ease-in ").concat(a.DURATION,"ms, left ease-in ").concat(a.DURATION,"ms")},s=this.props.timeout||100,o=s+this.context;return i.a.createElement(De.Provider,{value:this.context+s+a.DURATION},i.a.createElement(Te.a,{in:!0,timeout:o,appear:!0},(function(t){return i.a.createElement(e.props.component||"div",{style:Object(z.a)(Object(z.a)({},r),n[t])},e.props.children)})))}}]),a}(i.a.Component);Me.OFFSET=20,Me.DURATION=200,Me.contextType=De;var ze=Object(h.a)({wrapper:Object(m.a)({marginBottom:v.spacing(8)},v.breakpoints.up("sm"),{marginBottom:v.spacing(16)}),contentWrapper:Object(m.a)({marginBottom:v.spacing(4)},v.breakpoints.up("sm"),{marginBottom:v.spacing(8)})}),Be=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).timeoutFactor=100,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.number,a=e.classes,n=t?(t-1)*this.timeoutFactor:0;return i.a.createElement("div",{className:a.wrapper},i.a.createElement(Me,{timeout:n},i.a.createElement("div",{className:a.contentWrapper},this.props.children),i.a.createElement(d.a,null)))}}]),a}(i.a.Component),Pe=Object(g.a)(ze)(Be),Ue=a(148),Ge=a(149),He=a(150),Ke=Object(h.a)({cardRoot:{background:v.palette.primary.main,color:v.palette.primary.contrastText,display:"flex",flexDirection:"column",justifyContent:"space-between"},cardContent:{margin:v.spacing(0,2),flexShrink:1,overflow:"hidden"},news:Object(m.a)({margin:v.spacing(0,1.5),width:"100%",maxWidth:"320px"},v.breakpoints.up("sm"),{margin:v.spacing(0,2)})}),Je=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(Ue.a,{className:e.news,classes:{root:e.cardRoot}},i.a.createElement(Ge.a,{className:this.props.classes.cardContent},i.a.createElement(f.a,{mb:3},i.a.createElement(k.a,{variant:"h5"},this.props.heading)),i.a.createElement(k.a,null,this.props.children)),this.props.more&&i.a.createElement(He.a,null,i.a.createElement(q.a,{color:"secondary",style:{margin:"auto"}},"Mehr lesen")))}}]),a}(i.a.Component),Ve=Object(g.a)(Ke)(Je),_e=a(151),Ye=Object(h.a)({displayWrapper:{margin:v.spacing(4,0),position:"relative",top:0,left:0,display:"flex",alignItems:"center"},contentWrapper:{display:"flex",margin:v.spacing(0,-5),height:"100%",overflow:"hidden",flexGrow:1},cardWrapper:{position:"relative",top:0,left:0,height:"100%",display:"flex",flexGrow:1},pageWrapper:Object(m.a)({display:"flex",position:"absolute",justifyContent:"center",height:"100%",width:"100%",transition:"margin ease-out 400ms"},v.breakpoints.up("sm"),{justifyContent:"space-between"}),button:{zIndex:100}}),qe=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={index:0,prevIndex:-1},e}return Object(l.a)(a,[{key:"prevPage",value:function(e){this.setState((function(t){if(t.index>0)return{index:t.index-e,prevIndex:t.index}}))}},{key:"nextPage",value:function(e){var t=this;this.setState((function(a){if(a.index<t.numCards-1)return{index:a.index+e,prevIndex:a.index}}))}},{key:"adjustIndex",value:function(e){return e-e%this.props.numCards[this.props.width]}},{key:"componentDidUpdate",value:function(){var e=this.adjustIndex(this.state.index),t=this.adjustIndex(this.state.prevIndex);e===this.state.index&&t===this.state.prevIndex||this.setState({index:e,prevIndex:t})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.width,r=this.props.numCards[n],s=1.5*v.breakpoints.values[n],o={entering:{marginLeft:-s},entered:{marginLeft:0},exiting:{marginLeft:0},exited:{marginLeft:s}},c={entering:{marginLeft:s},entered:{marginLeft:0},exiting:{marginLeft:0},exited:{marginLeft:-s}};return i.a.createElement("div",{className:a.displayWrapper,style:{height:this.props.height||400}},i.a.createElement(_e.a,{className:a.button,color:"secondary",disabled:this.state.index<=0,onClick:function(){return e.prevPage(r)}},i.a.createElement(G.a,null)),i.a.createElement("div",{className:a.contentWrapper},i.a.createElement("div",{className:a.cardWrapper},this.state.prevIndex!==this.state.index&&"xs"!==n&&i.a.createElement(Te.a,{in:!1,timeout:0,appear:!0,key:"page-"+this.state.prevIndex.toString()},(function(t){return i.a.createElement("div",{className:a.pageWrapper,style:(e.state.index<e.state.prevIndex?o:c)[t]},i.a.Children.toArray(e.props.children).slice(e.state.prevIndex,e.state.prevIndex+r))})),i.a.createElement(Te.a,{in:!0,timeout:0,appear:!0,key:"page-"+this.state.index.toString()},(function(t){return i.a.createElement("div",{className:a.pageWrapper,style:(e.state.index<e.state.prevIndex?o:c)[t]},i.a.Children.toArray(e.props.children).slice(e.state.index,e.state.index+r))})))),i.a.createElement(_e.a,{className:a.button,color:"secondary",disabled:this.state.index+this.numCards>this.numCards,onClick:function(){return e.nextPage(r)}},i.a.createElement(H.a,null)))}},{key:"numCards",get:function(){return i.a.Children.count(this.props.children)}},{key:"numPages",get:function(){return Math.ceil(this.numCards/this.props.numCards[this.props.width])}}]),a}(i.a.Component),Xe=Object(g.a)(Ye)(Object(U.a)()(qe)),Ze=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(Xe,{numCards:a.NUM_CARDS},this.props.children)}}]),a}(i.a.Component);Ze.NUM_CARDS={xs:1,sm:2,md:3,lg:3,xl:3};var $e=a(47),Qe=Object(h.a)({starWrapper:Object(m.a)({position:"relative",overflow:"hidden",backgroundColor:v.palette.secondary.main,top:0,left:0,width:"400px",height:"400px",maxWidth:"80vw",maxHeight:"80vw",margin:"auto",clipPath:"polygon(\n\t\t\t30.5699% 3.9297%, \n\t\t\t57.952% 15.9153%, \n\t\t\t87.8111% 17.2843%, \n\t\t\t84.8738% 47.0301%, \n\t\t\t92.7987% 75.8509%, \n\t\t\t63.6011% 82.2491%, \n\t\t\t38.6399% 98.6924%, \n\t\t\t23.5321% 72.9009%, \n\t\t\t0.1803% 54.2427%, \n\t\t\t20.0409% 31.9043%\n\t\t)"},v.breakpoints.up("md"),{flex:"0 0 400px",margin:v.spacing(2,2,2,0)}),imageWrapper:{position:"absolute",display:"flex",justifyContent:"center",width:"100%",height:"100%"},image:{height:"100%",transition:"opacity ease-out ".concat(300,"ms")},"@keyframes fadeIn":{from:{opacity:0},to:{opacity:1}},animation:{opacity:0,animation:"$fadeIn ".concat(300,"ms")}}),et=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={image:0,initial:!0},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){this.stageRefresh()}},{key:"componentDidMount",value:function(){this.stageRefresh()}},{key:"stageRefresh",value:function(){var e=this;setTimeout((function(){return e.setState((function(e){return{image:(e.image+1)%$e.a.length,initial:!1}}))}),a.SLIDE_INTERVAL)}},{key:"render",value:function(){var e=this,t=this.props.classes,a={entering:{opacity:0},entered:{opacity:1},exiting:{opacity:1},exited:{opacity:0}},n=(this.state.image+$e.a.length-1)%$e.a.length;return i.a.createElement("div",{className:t.starWrapper},i.a.createElement("span",{className:t.imageWrapper},i.a.createElement("img",{className:t.image,src:$e.a[n],alt:"Star Slide"})),i.a.createElement("span",{className:t.imageWrapper},i.a.createElement(Te.a,{key:this.state.image,in:!0,timeout:0,appear:!this.state.initial},(function(n){return i.a.createElement("img",{className:t.image,style:a[n],src:$e.a[e.state.image],alt:"Star Slide"})}))))}}]),a}(i.a.Component);et.SLIDE_INTERVAL=5e3;var tt=Object(g.a)(Qe)(et),at=Object(h.a)({openingWrapper:Object(m.a)({display:"flex",maxWidth:"920px",justifyContent:"space-between",alignItems:"flex-end",margin:"0 auto"},v.breakpoints.down("sm"),{flexDirection:"column-reverse",alignItems:"center",textAlign:"center"}),textWrapper:{display:"flex",flexDirection:"column",justifyContent:"center"}}),nt=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",null,i.a.createElement(Pe,{number:1},i.a.createElement("div",{className:e.openingWrapper},i.a.createElement("span",{className:e.textWrapper},i.a.createElement(k.a,{variant:"h3",gutterBottom:!0},"Herzlich Willkommen"),i.a.createElement(k.a,{variant:"subtitle1",style:{fontStyle:"italic",fontWeight:"lighter"}},'"Mit dem Wir zum Ich - f\xf6rdere dein Wissen und erweitere deinen Horizont!"'),i.a.createElement(Me,{from:"right"},i.a.createElement(f.a,{mt:3,whiteSpace:"nowrap"},i.a.createElement(Re,{to:"/about"},"\xdcber Uns"),i.a.createElement(Re,null,"Vertretungsplan")))),i.a.createElement(tt,null))),i.a.createElement(Pe,{number:2},i.a.createElement(k.a,{variant:"h4",gutterBottom:!0},"News"),i.a.createElement(Me,{from:"left"},i.a.createElement(Ze,null,i.a.createElement(Ve,{heading:"Sch\xfclerin verreckt elendig in Minecraft",more:"#"},"Eine Sch\xfclerin der Klasse 7e wurde gestern gegen 20:21 Uhr absolut krank von einem weiteren Sch\xfcler in Minecraft Skywars weggerekt."),i.a.createElement(Ve,{heading:"Aufnahmeritual der F\xfcnftkl\xe4ssler",more:"#"},"Am 17.09 fand endlich die traditionelle Opfergabenzeremonie der neuen f\xfcnften Klassen statt. Die Kinder schlugen sich alle ziemlich gut in dem zeremoniellen blutigen Todeskampf, Zehn wurden schwer verletzt und es gab sogar drei Tote! Schlussendlich fand die Jungfrauopferung statt - Man konnte die Schreie von Lena aus der 5b viele Kilometer weit h\xf6ren!"),i.a.createElement(Ve,{heading:"\u65e5\u672c\u8a9e\u66f8\u3051\u308c\u3070\u3069\u3046\u306a\u308b\u306e",more:"#"},"\u3053\u308c\u306f\u305f\u3060\u306e\u30c6\u30b9\u30c8\u3060\u3002\u3053\u306e\u30b5\u30a4\u30c8\u3067\u65e5\u672c\u8a9e\u306f\u3069\u3046\u898b\u3048\u308b\u306e\u304c\u77e5\u308a\u305f\u3044\u3002"),i.a.createElement(Ve,{heading:"pingeon exxist t ??/?",more:"#"},"Wap wap wappu wap")))),i.a.createElement(Pe,{number:3},i.a.createElement(f.a,{textAlign:"center"},i.a.createElement(k.a,{variant:"h4"},"Bleiben Sie auf dem neuesten Stand."),i.a.createElement(Re,{to:"/newsletter"},"Newsletter beitreten"))))}}]),a}(i.a.Component),rt=Object(g.a)(at)(nt),it=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(de.a,null,i.a.createElement(this.props.wrapper,{},i.a.createElement(Fe.c,null,i.a.createElement(Fe.a,{path:"/"},i.a.createElement(rt,null)))))}}]),a}(i.a.Component),st=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"app",style:{background:v.palette.background.default}},i.a.createElement(it,{wrapper:Le}))}}]),a}(i.a.Component);a(114);o.a.render(i.a.createElement(n.a,{theme:v},i.a.createElement(st,null)),document.getElementById("root"))},47:function(e){e.exports=JSON.parse('{"a":["galleries/star/0.jpg","galleries/star/1.jpg","galleries/star/2.jpg"]}')},93:function(e){e.exports=JSON.parse('{"a":[{"text":"Home","to":"/","icon":"Home"},{"text":"\xdcber Uns","to":"/about","icon":"People","collapse":[{"text":"Menschen","to":"/about/menschen"},{"text":"F\xf6rdern & Fordern","to":"/about/f\xf6rdern"},{"text":"Beratung","to":"/about/beratung"},{"text":"Ausland","to":"/about/ausland"},{"text":"Projekte & Events","to":"/about/projekte"},{"text":"Partner","to":"/about/partner"}]},{"text":"Klassenstufen","to":"/klassenstufen","icon":"School"},{"text":"News","to":"/news","icon":"Announcement"},{"text":"Info","to":"/info","icon":"Info","collapse":[{"text":"Downloads","to":"/info/downloads"},{"text":"Ganztag","to":"/info/ganztag"},{"text":"Berufsorientierung","to":"/info/berufsorientierung"},{"text":"Schulverein","to":"/info/schulverein"}]},{"text":"Kontakt","to":"/kontakt","icon":"ContactSupport"},{"text":"Mensa","to":"/mensa","icon":"Fastfood"},{"text":"Alumni","external":"https://alumni.gyloh.de","icon":"Forum"},{"text":"Bewerber","to":"/bewerber","icon":"PersonAdd"},{"text":"Vertretungsplan","to":"/vertretungsplan","icon":"Today"},{"text":"Newsletter","to":"/newsletter","icon":"Email"}]}')}},[[103,1,2]]]);
//# sourceMappingURL=main.39857e95.chunk.js.map