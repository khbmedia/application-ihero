(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[66,585],{"2oSX":function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return u}));var i=n("8ThB"),o=n("28DW");let c;const r=()=>{const e=c.getState().session;if(!e.isMobile&&!e.isTablet)return"desktop";switch(e.userAgentPlatform){case"ios":return"iphone";case"android":return e.isTablet?"android_tablet":"android";case"ipad":return"ipad";default:return"mobile_other"}},a=(e,t)=>{const n=4===t?3456:3455;return e===i.b?n:3050},s=({action:e,type:t,isCrossDomain:n,isMultipleAccounts:i,trigger:c})=>{Object(o.l)(`new_mweb_${e}.${r()}${i?".multipleAccounts":""}`,{referrer:Object(o.d)(),type:t,cctld:n}),Object(o.a)(`mweb_${e}.${r()}.${Object(o.d)()}.${t}${n?".cctld":""}${i?".multipleAccounts":""}`),Object(o.g)({action:e,event:"success",type:t,trigger:c})},d=({action:e,type:t,error:n,isCrossDomain:i,isMultipleAccounts:c,trigger:a})=>{const s=c?".multipleAccounts":"",d=i?".cctld":"",l={type:t};Object(o.l)(`new_mweb_${e}_error.${r()}${s}${d}`,l),Object(o.k)(`mweb_${e}_error.${r()}.${Object(o.d)()}.${t}${d}${s}`,{error:n}),Object(o.g)({action:e,event:"fail",type:t,trigger:a})},l=({action:e,placement:t,isAuthenticated:n})=>{Object(o.a)(`mweb_${e}.${String(t)}.is_auth_${String(n)}`)},b=e=>{c=e},u=e=>{Object(o.a)(e)}},"6AqG":function(e,t,n){var i=n("q1tI"),o=n("/MKj"),c=n("n6mq"),r=n("nKUr");t.a=Object(o.connect)(({pins:e},t)=>({selectedPins:(t.selectedPinIds||[]).map(t=>e[t])}),()=>({}))((function({selectedPins:e}){const t=Object(i.useRef)();Object(i.useEffect)(()=>{const e=t.current;e&&(e.scrollLeft=e.scrollWidth-e.offsetWidth)},[e]);const n=e.map((e,t)=>{var n,i,o,a;const{description:s,images:d}=e,l=null==d?void 0:d["236x"];return Object(r.jsx)(c.f,{marginEnd:1,children:Object(r.jsx)(c.D,{rounding:2,wash:!0,width:50,height:65,children:Object(r.jsx)(c.y,{alt:null!=s?s:"",color:null!==(n=e.dominant_color)&&void 0!==n?n:"",naturalHeight:null!==(i=null==l?void 0:l.height)&&void 0!==i?i:1,naturalWidth:null!==(o=null==l?void 0:l.width)&&void 0!==o?o:1,src:null!==(a=null==l?void 0:l.url)&&void 0!==a?a:"",fit:"contain"})})},t)});return Object(r.jsx)(c.f,{display:"flex",overflow:"scroll",marginTop:2,ref:t,children:n})}))},"8ThB":function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));const i=0,o=1},DLcE:function(e,t,n){n.d(t,"a",(function(){return u}));var i=n("/MKj"),o=n("yaGx"),c=n("bcHz"),r=n("n6mq"),a=n("nKUr");function s({onSectionSelected:e,sectionId:t,showSectionRep:n}){var o;const s=Object(i.useSelector)(({boardsections:e})=>e[t]),d=Object(i.useSelector)(({pins:e})=>{var t;return s&&s.preview_pins&&(null===(t=e[s.preview_pins[0]])||void 0===t?void 0:t.image_medium_url)});return Object(a.jsx)(c.a,{rounding:2,onTouch:e,pressState:"none",children:Object(a.jsxs)(r.f,{"data-test-id":"sectionPickerRow",display:"flex",alignItems:"center",rounding:2,column:12,marginBottom:n?4:0,children:[n&&Object(a.jsx)(r.f,{height:48,width:51,children:Object(a.jsx)(r.D,{height:"100%",rounding:2,width:"100%",children:Object(a.jsx)(r.y,{alt:null!==(o=s.title)&&void 0!==o?o:"",color:"lightGray",fit:"cover",naturalHeight:1,naturalWidth:1,src:d||""})})}),!n&&Object(a.jsx)(r.f,{column:1,paddingY:2}),Object(a.jsx)(r.f,{column:11,display:"flex",flex:"grow",justifyContent:"between",paddingY:2,children:n?Object(a.jsx)(r.f,{overflow:"hidden",width:"100%",marginStart:2,children:Object(a.jsx)(r.v,{size:"sm",truncate:!0,children:s.title})}):Object(a.jsx)(r.f,{marginStart:2,children:Object(a.jsx)(r.bb,{weight:"bold",children:s.title})})})]})})}var d=n("yweb"),l=n("OadL"),b=n("0HhX");function u({boardId:e,sectionId:t,repin:n,hideBoardPickerRow:c,showSectionRep:u}){const j=Object(d.c)(),{fetching:h,boardSections:f,filteredBoardSections:g}=((e,t)=>{const{fetching:n}=Object(b.b)({name:"BoardSectionsRepinResource",options:{board_id:e}}),o=Object(i.useSelector)(t=>(Object(l.g)(t,{boardId:e})||[]).reduce((e,t)=>{if("boardsection"===t.type){const n={type:"boardsection",id:t.id};e.push(n)}return e},[])),c=Object(i.useSelector)(n=>o.map(e=>e.id).reduce((i,o)=>{const c=n.boardsections[null!=o?o:""];return o!==t&&c&&i.push({board:{id:e},id:c.id,title:c.title,type:"boardsection",slug:c.slug}),i},[]));return{fetching:n,boardSections:o,filteredBoardSections:c}})(e,t);return Object(a.jsxs)(r.f,{children:[f.length>0&&Object(a.jsxs)(r.f,{paddingY:u?0:3,children:[u&&Object(a.jsx)(r.f,{paddingY:2,children:Object(a.jsx)(r.f,{marginBottom:2,children:Object(a.jsx)(r.bb,{children:j._("Board","RepinFlow.SectionPickerList.Board","Section picker board title")})})}),!c&&Object(a.jsx)(o.a,{boardId:e,noArrowIcon:!0,onBoardSelected:()=>n(e,void 0,j),showSingleBoardRep:u},e),u&&Object(a.jsx)(r.f,{paddingY:4,children:Object(a.jsx)(r.bb,{children:j._("Section","RepinFlow.SectionPickerList.Section","Section picker all sections title")})}),g.map(t=>{var i;return Object(a.jsx)(s,{onSectionSelected:()=>{n(e,t,j)},sectionId:null!==(i=t.id)&&void 0!==i?i:"",showSectionRep:u},t.id)})]}),Object(a.jsx)(r.U,{accessibilityLabel:j._("Loading board section for repin flow"),show:h})]})}},EQY6:function(e,t,n){n.d(t,"a",(function(){return O}));var i=n("q1tI"),o=n("/MKj"),c=n("PaNI"),r=n("bcHz"),a=n("Bb4+"),s=n("JMvz"),d=n("DLcE"),l=n("6AqG"),b=n("6adH"),u=n("yweb"),j=n("n6mq"),h=n("ANjH"),f=n("r8+8"),g=n("DhV1"),p=n("nKUr");function O({onAddNewSection:e,useIconWithBackground:t}){const n=Object(u.c)();return Object(p.jsx)(f.c,{height:t?80:70,alignCenter:t,children:Object(p.jsx)(r.a,{onTouch:e,pressState:"none",children:Object(p.jsxs)(j.f,{display:"flex",alignItems:"center",padding:t?0:1,"data-test-id":"addSectionButton",children:[t?Object(p.jsx)(j.f,{color:"lightGray",rounding:2,dangerouslySetInlineStyle:{__style:{padding:"14px"}},children:Object(p.jsx)(j.w,{icon:"add",color:"darkGray",size:20,accessibilityLabel:n._("Create board button","RepinSection.CreateBoard.Button","accessibility label for create board button")})}):Object(p.jsx)(j.w,{icon:"add-circle",color:"red",size:38,accessibilityLabel:n._("Add section button")}),t?Object(p.jsx)(j.f,{marginStart:2,children:Object(p.jsx)(j.v,{size:"sm",children:n._("Add section","Add new section to Pin to","Add new section to Pin to")})}):Object(p.jsx)(j.f,{marginStart:3,children:Object(p.jsx)(j.bb,{weight:"bold",children:n._("Add section","Add new section to Pin to","Add new section to Pin to")})})]})})})}class m extends i.PureComponent{constructor(...e){var t,n,i;super(...e),i=e=>{e.section_count?this.props.onRepinToBoardWithSections(e):this.props.repinToOtherBoard(e.id,this.props.i18n)},(n="onRepinToBoard")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}render(){const{boardId:e,boardSectionId:t,orginalBoardId:n,onAddNewSection:i,repin:o,hideBoardPickerRow:r,selectedPinIds:b,isCollaborative:u}=this.props,h=n===e;return Object(p.jsxs)(a.b,{hasFixedHeader:!0,children:[Object(p.jsxs)(f.d,{hasBorder:!0,height:130,children:[Object(p.jsxs)(j.f,{display:"flex",alignItems:"center",children:[Object(p.jsx)(j.f,{column:2,children:Object(p.jsx)(c.a,{})}),Object(p.jsx)(j.f,{column:8,children:Object(p.jsx)(j.bb,{align:"center",weight:"bold",children:this.props.i18n._("Choose section","title for section selection in repin flow","title for section selection in repin flow")})}),Object(p.jsx)(j.f,{column:2})]}),Object(p.jsx)(l.a,{selectedPinIds:b})]}),e&&Object(p.jsx)(d.a,{boardId:e,repin:o,hideBoardPickerRow:h&&r,sectionId:t}),h&&Object(p.jsxs)(j.f,{children:[!u&&Object(p.jsx)(s.a,{excludeBoardId:e,onRepinToBoard:this.onRepinToBoard}),Object(p.jsx)(O,{onAddNewSection:i})]})]})}}function x(e,t,n){return e?n._("Got it! Hang tight while we move all those Pins...","Toast message for bulk pins move.","Toast message for bulk pins move."):t?n._("Saved to section!"):n._("Saved to board!")}t.b=Object(h.compose)(b.b,Object(o.connect)(null,(e,{orginalBoardId:t,boardSectionId:n,onRefreshBoardSection:i,pinIds:o,inSelectAll:c,showToast:r,history:a})=>({repin:async(s,d,l)=>{const b=d&&d.id,u={boardId:t,sectionId:n},j={boardId:s,sectionId:b},h=c?Object(g.e)({source:u,target:j,excludePinIds:o}):Object(g.f)({source:u,target:j,pinIds:o});t!==s?(await e(h),a.go(-3)):(await e(h),i&&await i(),a.go(-2)),r({text:x(c,b,l)})},repinToOtherBoard:async(i,s)=>{const d={boardId:t,sectionId:n},l={boardId:i,sectionId:void 0};r({text:x(c,void 0,s)}),await e(c?Object(g.e)({source:d,target:l,excludePinIds:o}):Object(g.f)({source:d,target:l,pinIds:o})),a.go(-2)}})))((function(e){const t=Object(u.c)();return Object(p.jsx)(m,{...e,i18n:t})}))},JMvz:function(e,t,n){n.d(t,"a",(function(){return l}));var i=n("/MKj"),o=n("yaGx"),c=n("yweb"),r=n("OadL"),a=n("0HhX"),s=n("n6mq"),d=n("nKUr");function l({excludeBoardId:e,onRepinToBoard:t}){const n=Object(c.c)(),l=(()=>{const{userId:e}=Object(i.useSelector)(e=>e.session);return Object(a.b)({name:"BoardPickerBoardsResource",options:{field_set_key:"board_picker",user_id:e}}),Object(i.useSelector)(e=>Object(r.q)(e)||[])})();return l.length>0&&Object(d.jsxs)(s.f,{children:[Object(d.jsx)(s.f,{marginTop:3,children:Object(d.jsx)(s.bb,{children:n._("All boards","title for board picker all boards section","title for board picker all boards section")})}),Object(d.jsx)(s.f,{paddingY:3,children:l.filter(t=>t.id!==e).map(e=>Object(d.jsx)(o.a,{boardId:e.id,onBoardSelected:()=>t(e)},e.id))})]})}},PaNI:function(e,t,n){n.d(t,"a",(function(){return l}));var i=n("/MKj"),o=n("hLPq"),c=n("yweb"),r=n("2oSX"),a=n("AGnR"),s=n("EC67"),d=n("nKUr");function l({alignIconLeft:e,bgColor:t,color:n,disableRedirect:l=!1,fallbackUrl:b,icon:u="arrow-back",onTouch:j,padding:h,placement:f,shouldUseFallbackUrl:g,size:p="lg",viewParameter:O,viewType:m}){const x=Object(c.c)(),w=Object(s.h)(),v=Object(s.i)(),y=Object(i.useSelector)(e=>e.session.isAuthenticated);return Object(d.jsx)(o.a,{accessibilityLabel:x._("Back","navigation button","navigation button"),bgColor:t,color:n,icon:u,onTouch:()=>{Object(r.d)({action:"back_button_click",placement:f,isAuthenticated:y}),m&&O&&Object(a.h)({view_type:m,view_parameter:O,element:34}),j&&j(),l||((!v.key||v.state&&"redirect"===v.state.referrer||g)&&b?w.replace(b):v.pathname.includes("/password/reset/")&&v.search&&v.search.includes("?nativeShouldDismiss=true")?w.push("/login/?dismissWebview=true"):w.goBack())},padding:h||2,size:p,containerStyle:e?{display:"flex",alignItems:"center",marginLeft:"cancel"===u?"-4px":"-8px",width:"48px",height:"48px"}:{}})}},yaGx:function(e,t,n){var i=n("q1tI"),o=n("/MKj"),c=n("8ifP"),r=n("bcHz"),a=n("yweb"),s=n("5xeR"),d=n("qpbZ"),l=n("n6mq"),b=n("nKUr");t.a=Object(o.connect)((e,t)=>({board:e.boards[t.boardId]}))((function({board:e,onBoardSelected:t,noArrowIcon:n,showSingleBoardRep:u}){const j=Object(a.c)(),h=Object(o.useSelector)(({users:e})=>e),f=(e.collaborating_users||[]).map(e=>{var t,n;return{name:null!==(t=h[e].username)&&void 0!==t?t:"",src:"https://s.pinimg.com/images/user/default_75.png"===h[e].image_medium_url?"":null!==(n=h[e].image_medium_url)&&void 0!==n?n:""}});let g="";const p=f.slice(0,3).map(e=>e.name);switch(f.length){case 3:g=Object(d.c)(""+j._("{{ first }}, {{ second }}, and {{ last }}","CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars","List of three usernames"),{first:""+p[0],second:""+p[1],last:""+p[2]});break;case 2:g=Object(d.c)(""+j._("{{ first }} and {{ second }}","CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars","List of two usernames."),{first:""+p[0],second:""+p[1]});break;default:g=p.join(", ")}const O=f.length>3?Object(d.c)(j.ngettext("Collaborators: {{ userNames }} and {{ leftCount }} more.","Collaborators: {{ userNames }} and {{ leftCount }} more.",f.length-3,"CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree","Accessibility label that lists the names of collaborators and a final count of non-displayed avatars"),{userNames:g,leftCount:""+(f.length-3)}):Object(d.c)(""+j._("Collaborators: {{ userNames }}.","CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree","Accessibility label that lists the names of collaborators"),{userNames:g}),m=new l.t(0),x=Object(b.jsx)(i.Fragment,{children:Object(b.jsxs)(l.f,{"data-test-id":"board-picker-row",display:"flex",alignItems:"center",rounding:2,column:12,marginBottom:u?4:0,children:[Object(b.jsx)(l.f,{paddingY:u?0:2,children:u?Object(b.jsx)(l.f,{height:48,overflow:"hidden",width:48,children:Object(b.jsx)(l.D,{height:"100%",rounding:2,width:"100%",children:Object(b.jsx)(l.y,{alt:"",color:"lightGray",fit:"cover",naturalHeight:1,naturalWidth:1,src:e.image_cover_url||""})})}):Object(b.jsx)(l.f,{height:60,overflow:"hidden",rounding:4,width:60,children:Object(b.jsx)(c.a,{boardId:e.id,type:"thumbnail",fullSize:!0})})}),Object(b.jsxs)(l.f,{display:"flex",justifyContent:"between",alignItems:"center",flex:"grow",children:[Object(b.jsx)(l.f,{direction:"column",display:"flex",justifyContent:"center",marginStart:u?2:4,width:"100%",overflow:u?"hidden":"auto",children:Object(b.jsx)(l.v,{size:"sm",truncate:u,children:e.name})}),Object(b.jsxs)(l.f,{display:"flex",alignItems:u?"center":"start",children:["secret"===e.privacy&&Object(b.jsx)(l.f,{marginStart:u?3:1,children:Object(b.jsx)(l.w,{color:u?"darkGray":"gray",icon:"lock",accessibilityLabel:j._("secret board icon")})}),e.is_collaborative&&u&&f.length>0?Object(b.jsx)(l.f,{zIndex:m,children:Object(b.jsx)(l.c,{accessibilityLabel:s.a+O,collaborators:f,size:1===f.length?"sm":"xs"})}):e.is_collaborative&&Object(b.jsx)(l.f,{marginStart:1,children:Object(b.jsx)(l.w,{icon:"people",accessibilityLabel:j._("group board icon")})}),!n&&!!e.section_count&&Object(b.jsx)(l.f,{"data-test-id":"boardSectionPicker",marginStart:u?3:0,children:Object(b.jsx)(l.w,{color:u?"darkGray":"gray",icon:"arrow-forward",accessibilityLabel:j._("board section board picker icon")})})]})]})]})}),w=e.section_count,v=!!w&&w>0;return Object(b.jsx)(r.a,{rounding:2,onTouch:()=>t(v),pressState:"none",children:x})}))},yv4w:function(e,t,n){n.d(t,"a",(function(){return h}));var i=n("q1tI"),o=n("PaNI"),c=n("Bb4+"),r=n("6AqG"),a=n("yweb"),s=n("r8+8"),d=n("eyT9"),l=n("QAzJ"),b=n("n6mq"),u=n("nKUr");const j=e=>({color:e?"#fff":"#333",fontSize:18,fontWeight:"bold",background:"none",outline:"none",border:"none",marginTop:"4px",width:"100%"});function h(e){const t=Object(a.c)(),{backButtonIcon:n,name:h,onNextButtonTouch:f,onNameChange:g,selectedPinIds:p=[],useRoundedCorners:O}=e,m=Object(l.b)("mweb_board_modals")().anyEnabled,x=p.length>0?130:64;return Object(u.jsxs)(c.b,{hasFixedHeader:!0,children:[Object(u.jsxs)(s.d,{hasBorder:!m,height:x,paddingY:m?3:void 0,useRoundedCorners:O,children:[Object(u.jsxs)(b.f,{display:"flex",justifyContent:"between",alignItems:"center",children:[Object(u.jsx)(o.a,{color:m?"darkGray":void 0,icon:n||"cancel",padding:m?3:void 0,size:m?"sm":void 0}),Object(u.jsx)(b.bb,{weight:"bold",children:t._("Add section","for add board section page","for add board section page")}),Object(u.jsx)(b.g,{accessibilityLabel:m?t._("Add","boardSectionCreate.Add.Button.Text","Add button accessibility label for board section create page"):t._("Next","Next button accessibility label for board section create page","Next button accessibility label for board section create page"),onClick:f,disabled:""===h.trim(),color:"red",size:m?"lg":"sm",text:t._("Next","Next button for board section create page","Next button for board section create page")})]}),p&&Object(u.jsx)(r.a,{selectedPinIds:p})]}),Object(u.jsx)(b.f,{"data-test-id":"addSectionName",paddingX:m?2:void 0,paddingY:3,children:m?Object(u.jsx)(b.db,{id:"name",label:t._("Name","boardSectionCreate.TextField.Name.Label","TextField label to Name on BoardSectionCreate"),onChange:e=>g(e.event),size:"lg",value:h}):Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)(b.z,{htmlFor:"name",children:Object(u.jsx)(b.bb,{size:"sm",children:t._("Section name","name tag for board create page","name tag for board create page")})}),Object(u.jsx)("input",{id:"name",placeholder:t._("Add","name placeholder for board section create page","name placeholder for board section create page"),value:h,style:j(Object(d.e)()),onChange:g})]})})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/66-c9530f6c1c7aa8c487b8.mjs.map