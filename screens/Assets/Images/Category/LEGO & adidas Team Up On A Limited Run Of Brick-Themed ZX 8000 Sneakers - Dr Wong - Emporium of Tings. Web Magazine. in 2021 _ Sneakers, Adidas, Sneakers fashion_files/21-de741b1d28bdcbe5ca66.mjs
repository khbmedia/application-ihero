(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[21],{"/8nX":function(e,t,n){n.d(t,"a",(function(){return s}));var r=n("q1tI"),o=n("28DW"),a=n("AGnR");const i=({viewType:e,viewParameter:t,viewData:n,auxData:r,objectIdStr:i,component:s,clientTrackingParams:c,element:d})=>{const u=(p={event_type:13,view_type:e,view_parameter:t,view_data:n,aux_data:r,object_id_str:i,component:s,clientTrackingParams:c,element:d},Object.keys(p).reduce((e,t)=>(void 0!==p[t]&&(e[t]=p[t]),e),{}));var p;-1===Object.keys(u).indexOf("view_type")&&Object(o.a)("mweb.logging.null_view_type"),Object(a.e)(u)};function s(e){const{auxData:t,clientTrackingParams:n,children:o,component:a,element:s,objectIdStr:c,viewData:d,viewParameter:u,viewType:p}=e;return Object(r.useEffect)(()=>{i(e)},[JSON.stringify(t),n,a,s,c,JSON.stringify(d),u,p]),r.Children.only(o)}},"3h4M":function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));const r=[];function o(e){let t;try{t=JSON.stringify({errorObj:e})}catch(i){t=JSON.stringify({errorObj:{message:e.message,name:"logToServer stringify exception"}})}const n=(o={report_context:JSON.stringify({current_url:window.location.href,client_version:"0f5c828"}),report_data:t},Object.keys(o).map(e=>e+"="+encodeURIComponent(o[e])).join("&"));var o;const a=window.btoa(n);if(-1===r.indexOf(a)){const e=new XMLHttpRequest;e.open("post","/_/_/report/error/",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.setRequestHeader("X-CSRFToken",function(e){const t=("; "+document.cookie).split("; "+e+"=");return 2===t.length?t.pop().split(";").shift():""}("csrftoken")),e.send(n),r.push(a)}r.length>100&&r.shift()}function a(){window.addEventListener("error",e=>{const t=e.error||{};o({name:t.name,message:t.message||e.message,stack:t.stack,filename:e.filename,line:e.lineno,column:e.colno})}),window.addEventListener("unhandledrejection",e=>{var t,n,r,a,i;if(!((null==e?void 0:e.reason)instanceof Error))return;const{reason:s}=e,c="string"==typeof(null==s?void 0:s.message)?s.message:String(s);o({name:null!==(t=null==s?void 0:s.name)&&void 0!==t?t:"unhandledrejection",message:c,message_detail:null==s?void 0:s.message_detail,original_message:null==s?void 0:s.original_message,stack:null==s?void 0:s.stack,filename:null==s?void 0:s.fileName,line:null!==(n=null!==(r=null==s?void 0:s.lineno)&&void 0!==r?r:null==s?void 0:s.line)&&void 0!==n?n:null==s?void 0:s.lineNumber,column:null!==(a=null!==(i=null==s?void 0:s.column)&&void 0!==i?i:null==s?void 0:s.colno)&&void 0!==a?a:null==s?void 0:s.columnNumber})})}},BGsa:function(e,t,n){n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}));const r=e=>"ios"===e&&(window.devicePixelRatio||1)*window.screen.height==2436,o=28,a=e=>window.innerHeight>=748&&r(e),i=function(){return!("undefined"==typeof window||!window.navigator)&&(/iPad/.test(navigator.platform)||navigator.maxTouchPoints>1&&"MacIntel"===navigator.platform)}},"Bb4+":function(e,t,n){n.d(t,"a",(function(){return c}));var r=n("/MKj"),o=n("n6mq"),a=n("lIsI"),i=n("BGsa"),s=n("nKUr");const c=({children:e,dataLayoutShiftBoundaryId:t,devicePlatform:n="",hasFixedHeader:r=!1,hasGutter:c=!0,useViewport:d=!1})=>{const u=Object(i.b)(n)?i.a:0;return Object(s.jsx)(o.f,{"data-layout-shift-boundary-id":t||"PageContainer",height:d?`calc(100vh - ${u}px)`:void 0,paddingX:c?a.a:void 0,paddingY:r?void 0:3,children:Object(s.jsx)(a.b,{value:!!c,children:e})})};t.b=Object(r.connect)(({session:e})=>({devicePlatform:e.userAgentPlatform}))(c)},FDmi:function(e,t,n){n.d(t,"a",(function(){return i}));var r=n("n6mq"),o=n("nKUr");const a=(e,t)=>{const n=null==e?void 0:e.includes("images/user/default");return Boolean(n&&t)};function i({accessibilityLabel:e,name:t,outline:n,size:i,src:s,verified:c}){return Object(o.jsx)(r.b,{accessibilityLabel:e,name:t,outline:n,size:i,src:a(s,t)?void 0:s,verified:c})}},Lr1Z:function(e,t,n){var r=n("fv8A"),o=n("n6mq"),a=n("nKUr");t.a=({children:e,external:t,externalQueryParams:n,inline:i=!1,newTab:s,nofollow:c,onTouch:d,onBlur:u,onFocus:p,pressState:l,refresh:m,replace:v=!1,rounding:f,to:h})=>Object(a.jsx)(r.a,{external:t,newTab:s,refresh:m,replace:v,onTouch:d,externalQueryParams:n,to:h,children:({navigate:t,path:n})=>Object(a.jsx)(o.C,{onBlur:u?({event:e})=>u(e):void 0,onFocus:p?({event:e})=>p(e):void 0,hoverStyle:"none",href:n,inline:i,onClick:({event:e,disableOnNavigation:n})=>{n(),t(e)},rel:c?"nofollow":"none",rounding:f,tapStyle:(Array.isArray(l)?l:[l]).includes("compress")?"compress":"none",children:e})})},YcfT:function(e,t,n){var r=n("1u47"),o=n("RNo4"),a=n("AGnR");const i=!!Object(o.k)(window.location.search).debug_timespent;t.a=Object(r.b)({flushEvents:a.b,shouldShowLogStatements:i,track:a.e})},clxp:function(e,t,n){var r=n("q1tI"),o=n("7w6Q"),a=n("3h4M");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends r.Component{constructor(...e){super(...e),i(this,"state",{error:null,info:null}),i(this,"resetError",()=>{this.setState({error:null,info:null})})}componentDidCatch(e,t){try{const t=this.props.name,n=this.props.type||"secondary";Object(a.b)({errorBoundary:t,errorBoundaryType:n,message:e.message,name:e.name,stack:e.stack}),o.a.increment("react.error_boundary",.1,{component:void 0,name:this.props.name})}catch(n){o.a.increment("react.error_boundary.error",1,{name:this.props.name})}this.setState({error:e,info:t})}render(){const{renderErrorState:e}=this.props,{error:t,info:n}=this.state;return t&&n?e?e({error:t,info:n,resetError:this.resetError}):null:this.props.children}}t.a=s},fv8A:function(e,t,n){var r=n("q1tI"),o=n("RNo4"),a=n("EC67");const i=e=>"string"==typeof e?e:e.pathname||"";class s extends r.PureComponent{constructor(...e){var t,n,r;super(...e),r=e=>{const{external:t,newTab:n,refresh:r,replace:a,history:s,location:c,onTouch:d,externalQueryParams:u,to:p}=this.props;if(!p)throw new Error("to does not exist when expected");const l=i(p);d&&d(e),e.defaultPrevented||(e.preventDefault(),(c.pathname!==l||c.search)&&(t?Object(o.i)(l,u):n?window.open(l,"_blank"):r?window.location.assign(l):a?s.replace(p):s.push(p)))},(n="handleTouch")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}render(){return this.props.children({navigate:this.handleTouch,history:this.props.history,path:i(this.props.to||{})})}}t.a=Object(a.l)(s)},hFTz:function(e,t,n){var r=n("YcfT"),o=n("1u47"),a=n("nKUr");t.a=e=>Object(a.jsx)(o.a,{...e,timeSpentManager:r.a})},ihsa:function(e,t,n){n.d(t,"a",(function(){return a}));n("QLaP");var r=n("nKUr");class o{static factory(e){return e instanceof o?e:new o(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function a(e){const{css:t,unsafeCSS:n,...a}=e,i=String(t||"")||n||"";return!!i?Object(r.jsx)("style",{...a,dangerouslySetInnerHTML:{__html:String(o.factory(i))}}):null}},lIsI:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var r=n("q1tI");const o=2,a=Object(r.createContext)(!1),i=a.Provider,s=()=>Object(r.useContext)(a)},"o+5w":function(e,t,n){var r=n("q1tI"),o=n("/MKj"),a=n("Y+p1"),i=n.n(a),s=n("/8nX"),c=n("jUT+");var d=n("nKUr");class u extends r.Component{componentDidMount(){const{setCurrentPageData:e,viewData:t,viewParameter:n,viewType:r}=this.props;e({viewData:t,viewParameter:n,viewType:r})}componentDidUpdate(e){const{setCurrentPageData:t,viewData:n,viewParameter:r,viewType:o}=this.props;r===e.viewParameter&&o===e.viewType&&i()(n,e.viewData)||t({viewData:n,viewParameter:r,viewType:o})}componentWillUnmount(){this.props.clearCurrentPageData()}render(){const{auxData:e,children:t,component:n,objectIdStr:r,viewData:o,viewParameter:a,viewType:i,clientTrackingParams:c}=this.props;return Object(d.jsx)(s.a,{auxData:e,component:n,objectIdStr:r,clientTrackingParams:c,viewData:o,viewParameter:a,viewType:i,children:t})}}t.a=Object(o.connect)(null,(function(e){return{clearCurrentPageData:()=>e({type:c.s}),setCurrentPageData:t=>{return e((n=t,{type:c.Cb,payload:n}));var n}}}))(u)},t84P:function(e,t,n){n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return v})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"g",(function(){return w})),n.d(t,"f",(function(){return g}));var r=n("q1tI"),o=n("i8i4"),a=n("D2p8"),i=n("AGnR");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class c extends r.Component{constructor(...e){super(...e),s(this,"observe",()=>{try{if(this.node=Object(o.findDOMNode)(this),this.node instanceof HTMLElement){const{pinIdStr:e,newsIdStr:t}=this.props.eventData;a.c.start(this.node).onExitViewport(this.logImpression).setDebugId(e||t||"unknown")}}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}}),s(this,"logImpression",e=>{Object(i.d)({viewData:this.props.viewData||{},viewType:this.props.viewType,viewParameter:this.props.viewParameter,eventType:this.props.eventType,impressionType:this.props.impressionType,auxData:this.props.auxData,component:this.props.component,objectIdStr:this.props.objectIdStr,eventData:{endTime:e.endTime,time:e.startTime,...this.props.eventData}}),this.props.onTracked&&this.props.onTracked(this.props.eventData)})}componentDidMount(){this.props.isPaused||this.observe()}componentDidUpdate(e){e.isPaused&&!this.props.isPaused&&this.observe()}componentWillUnmount(){this.node instanceof HTMLElement&&a.c.stop(this.node)}render(){return r.Children.only(this.props.children)}}function d({auxData:e,component:t,eventData:n,eventType:o,impressionType:s,isPaused:c,objectIdStr:d,onTracked:u,viewData:p,viewType:l,viewParameter:m}){const v=Object(r.useRef)(null),f=r=>{Object(i.d)({viewData:p||{},viewType:l,viewParameter:m,eventType:o,impressionType:s,auxData:e,component:t,objectIdStr:d,eventData:{endTime:r.endTime,time:r.startTime,...n}}),u&&u(n)},h=Object(r.useCallback)(()=>{try{if(v.current instanceof HTMLElement){const{pinIdStr:e,newsIdStr:t}=n;a.c.start(v.current).onExitViewport(f).setDebugId(e||t||"unknown")}}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}},[v.current]);Object(r.useEffect)(()=>(c||h(),()=>{v.current instanceof HTMLElement&&a.c.stop(v.current)}),[h]);const w=Object(r.useRef)(c);return Object(r.useEffect)(()=>{w.current&&!c&&h(),w.current=c},[c,h]),v}var u=n("nKUr");const p=e=>Object(u.jsx)(c,{eventData:{...e.impressionData||{},pinIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:18,impressionType:"pinImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,children:e.children}),l=e=>Object(u.jsx)(c,{eventData:{newsIdStr:e.notificationId,newsType:e.newsType,displayMode:e.displayMode,newsIndex:e.newsIndex||0,tapItemIdStr:e.tapItemIdStr},auxData:e.auxData||{},eventType:4111,impressionType:"notificationDetailImpressions",loggingId:e.notificationId,viewType:107,viewParameter:3082,children:e.children}),m=e=>Object(u.jsx)(c,{eventData:{newsIdStr:e.notificationId,newsType:e.newsType},auxData:e.auxData||{},eventType:4110,impressionType:"notificationFeedImpressions",loggingId:e.notificationId,viewType:107,viewParameter:3081,children:e.children}),v=e=>Object(u.jsx)(c,{eventData:{...e.impressionData||{},articleIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:3829,impressionType:"articleImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,children:e.children}),f=e=>Object(u.jsx)(c,{eventData:{...e.impressionData||{},storyIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:170,impressionType:"storyImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,children:e.children}),h=e=>{const t=d({eventData:{...e.impressionData||{},userIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0},auxData:e.auxData||{},component:e.component,eventType:3704,impressionType:"userImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},w=e=>{const t=d({eventData:{...e.impressionData||{},topicIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0},auxData:e.auxData||{},component:e.component,eventType:3703,impressionType:"topicImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},g=e=>{const t=d({eventData:{...e.impressionData||{},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:8569,impressionType:"todayArticleImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})}},zmYE:function(e,t,n){n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return v})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return h}));var r=n("7w6Q"),o=n("eOdZ"),a=n("O/nw"),i=n("jUT+"),s=n("XiPH");const c=(e,t,n,r)=>({type:i.D,payload:{resource:e,options:t,response:n,normalizedResponse:r}}),d=(e,t,n)=>({type:i.G,payload:{resource:e,options:t,isFetching:n}}),u=(e,t,n,r,o,a)=>({type:i.H,payload:{resource:e,options:t,response:n,normalizedResponse:r,isRefresh:o,schema:a}}),p=(e,t,n)=>({type:i.I,payload:{resource:e,options:t,error:n}}),l=(e,{bookmark:t,options:n,schema:r})=>{const o=r||a.a[e];return"function"==typeof o?o({resource:e,options:n,bookmark:t}):o},m=(e,t,n)=>a=>{const{bookmark:c,options:v,refresh:f,schema:h}=t,w=n?n.bookmark:c,g=w?{...v,bookmarks:[w]}:v;return a(d(e,v,!0)),o.a.create(e,g).callGet().then(o=>{let d=o.resource_response.data;if("number"==typeof d||d){const[p]=((o.resource||{}).options||{}).bookmarks||[];if(Array.isArray(d)&&0===d.length&&p&&"-end-"!==p){const o=n?n.count:0,i=o>=10;if(r.a.increment("mweb.resource_empty_data_retry",1,{name:e,retry:o,maxRetryReached:i}),!i)return a(m(e,t,{count:o+1,bookmark:p}))}"ExploreArticleResource"===e&&(d.id=o.resource.options.story_id,d.objects.forEach(e=>{e.article_id=o.resource.options.story_id})),"VisualSearchFlashlightUnifiedResource"===e&&(d=d.results);const w=l(e,{bookmark:c,options:v,schema:h}),g=w?Object(s.b)(d,w):null;a(c?((e,t,n,r,o)=>({type:i.K,payload:{resource:e,options:t,response:n,normalizedResponse:r,schema:o}}))(e,v,o,g,w):u(e,v,o,g,f,w))}return Promise.resolve()},t=>{a(p(e,v,t))})},v=(e,{bookmark:t,options:n,schema:r})=>m(e,{bookmark:t,options:n,refresh:!1,schema:r}),f=(e,{options:t,schema:n})=>m(e,{options:t,refresh:!0,schema:n}),h=(e,t)=>n=>{const{options:r,schema:a}=t;return o.a.create(e,r).callCreate().then(t=>{if(t.resource_response.data){const o=t.resource_response.data,i=a?Object(s.b)(o,a):null;n(c(e,r,t,i))}return t},t=>(n(p(e,r,t)),t))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/21-de741b1d28bdcbe5ca66.mjs.map