import './polyfills.server.mjs';
import{$b as Ue,Aa as D,Ba as A,Ca as Me,Cc as Ve,Da as De,Dc as z,Ea as Ae,Fa as Ne,Fc as $e,Ga as Oe,Ha as Pe,Hb as ke,Ia as Ie,Ib as ee,Ja as T,Jb as Le,Kc as Ke,Ma as I,P as we,Pb as xe,Q as w,Qb as Ce,Ra as Se,S as f,Ta as U,Ub as te,V as b,Va as _,Vb as je,Wa as g,Wb as Fe,X as d,Xb as p,Y as m,_ as P,ea as q,ec as _e,fa as Te,hc as ne,j as W,kc as Be,n as O,oa as Z,ra as Re,sa as Y,ta as be,ua as M,v as ve,va as Q,vc as ze,wa as H,wc as S,xa as F,xc as B,y as Ee}from"./chunk-3TFYSFPM.mjs";import{a as N,b as me,d as ge}from"./chunk-VVCT4QZE.mjs";var se=class{};var R=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(s=>{let n=s.indexOf(":");if(n>0){let r=s.slice(0,n),o=r.toLowerCase(),i=s.slice(n+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){let s=new t;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){let s=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,s);let r=(e.op==="a"?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":let o=e.value;if(!o)this.headers.delete(s),this.normalizedNames.delete(s);else{let i=this.headers.get(s);if(!i)return;i=i.filter(a=>o.indexOf(a)===-1),i.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,i)}break}}setHeaderEntries(e,s){let n=(Array.isArray(s)?s:[s]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}};var oe=class{encodeKey(e){return Xe(e)}encodeValue(e){return Xe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Tt(t,e){let s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[i,a]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],l=s.get(i)||[];l.push(a),s.set(i,l)}),s}var Rt=/%(\d[a-f0-9])/gi,bt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Xe(t){return encodeURIComponent(t).replace(Rt,(e,s)=>bt[s]??e)}function V(t){return`${t}`}var v=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new oe,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Tt(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{let n=e.fromObject[s],r=Array.isArray(n)?n.map(V):[V(n)];this.map.set(s,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){let s=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(o=>{s.push({param:n,value:o,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let s=this.encoder.encodeKey(e);return this.map.get(e).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let s=new t({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let s=(e.op==="a"?this.map.get(e.param):void 0)||[];s.push(V(e.value)),this.map.set(e.param,s);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(V(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var ie=class{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Mt(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Je(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Ge(t){return typeof Blob<"u"&&t instanceof Blob}function We(t){return typeof FormData<"u"&&t instanceof FormData}function Dt(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var k=class t{constructor(e,s,n,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Mt(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new R,this.context??=new ie,!this.params)this.params=new v,this.urlWithParams=s;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=s;else{let a=s.indexOf("?"),l=a===-1?"?":a<s.length-1?"&":"";this.urlWithParams=s+l+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Je(this.body)||Ge(this.body)||We(this.body)||Dt(this.body)?this.body:this.body instanceof v?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||We(this.body)?null:Ge(this.body)?this.body.type||null:Je(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let s=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,o=e.transferCache??this.transferCache,i=e.body!==void 0?e.body:this.body,a=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,h=e.params||this.params,u=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((y,E)=>y.set(E,e.setHeaders[E]),c)),e.setParams&&(h=Object.keys(e.setParams).reduce((y,E)=>y.set(E,e.setParams[E]),h)),new t(s,n,i,{params:h,headers:c,context:u,reportProgress:l,responseType:r,withCredentials:a,transferCache:o})}},ot=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(ot||{}),ae=class{constructor(e,s=it.Ok,n="OK"){this.headers=e.headers||new R,this.status=e.status!==void 0?e.status:s,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var L=class t extends ae{constructor(e={}){super(e),this.type=ot.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var it=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(it||{});function re(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Rn=(()=>{let e=class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof k)i=n;else{let c;o.headers instanceof R?c=o.headers:c=new R(o.headers);let h;o.params&&(o.params instanceof v?h=o.params:h=new v({fromObject:o.params})),i=new k(n,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:h,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let a=W(i).pipe(Ee(c=>this.handler.handle(c)));if(n instanceof k||o.observe==="events")return a;let l=a.pipe(ve(c=>c instanceof L));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe(O(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(O(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(O(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(O(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new v().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,re(o,r))}post(n,r,o={}){return this.request("POST",n,re(o,r))}put(n,r,o={}){return this.request("PUT",n,re(o,r))}};e.\u0275fac=function(r){return new(r||e)(d(se))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})();var At=new b("");var qe="b",Ze="h",Ye="s",Qe="st",He="u",et="rt",$=new b(""),Nt=["GET","HEAD"];function Ot(t,e){let h=m($),{isCacheActive:s}=h,n=ge(h,["isCacheActive"]),{transferCache:r,method:o}=t;if(!s||o==="POST"&&!n.includePostRequests&&!r||o!=="POST"&&!Nt.includes(o)||r===!1||n.filter?.(t)===!1)return e(t);let i=m(F),a=It(t),l=i.get(a,null),c=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(c=r.includeHeaders),l){let{[qe]:u,[et]:y,[Ze]:E,[Ye]:yt,[Qe]:mt,[He]:gt}=l,G=u;switch(y){case"arraybuffer":G=new TextEncoder().encode(u).buffer;break;case"blob":G=new Blob([u]);break}let vt=new R(E);return W(new L({body:G,headers:vt,status:yt,statusText:mt,url:gt}))}return e(t).pipe(we(u=>{u instanceof L&&i.set(a,{[qe]:u.body,[Ze]:Pt(u.headers,c),[Ye]:u.status,[Qe]:u.statusText,[He]:u.url||"",[et]:t.responseType})}))}function Pt(t,e){if(!e)return{};let s={};for(let n of e){let r=t.getAll(n);r!==null&&(s[n]=r)}return s}function tt(t){return[...t.keys()].sort().map(e=>`${e}=${t.getAll(e)}`).join("&")}function It(t){let{params:e,method:s,responseType:n,url:r}=t,o=tt(e),i=t.serializeBody();i instanceof URLSearchParams?i=tt(i):typeof i!="string"&&(i="");let a=[s,n,r,i,o].join("|"),l=St(a);return l}function St(t){let e=0;for(let s of t)e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function at(t){return[{provide:$,useFactory:()=>(_("NgHttpTransferCache"),N({isCacheActive:!0},t))},{provide:At,useValue:Ot,multi:!0,deps:[F,$]},{provide:ke,multi:!0,useFactory:()=>{let e=m(ee),s=m($);return()=>{Le(e).then(()=>{s.isCacheActive=!1})}}}]}var de=class extends Fe{constructor(){super(...arguments),this.supportsDOMEvents=!0}},ue=class t extends de{static makeCurrent(){je(new t)}onAndCancel(e,s,n){return e.addEventListener(s,n),()=>{e.removeEventListener(s,n)}}dispatchEvent(e,s){e.dispatchEvent(s)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,s){return s=s||this.getDefaultDocument(),s.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,s){return s==="window"?window:s==="document"?e:s==="body"?e.body:null}getBaseHref(e){let s=Lt();return s==null?null:xt(s)}resetBaseElement(){x=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ue(document.cookie,e)}},x=null;function Lt(){return x=x||document.querySelector("base"),x?x.getAttribute("href"):null}function xt(t){return new URL(t,document.baseURI).pathname}var Ct=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),he=new b(""),dt=(()=>{let e=class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new w(5101,!1);return this._eventNameToPlugin.set(n,r),r}};e.\u0275fac=function(r){return new(r||e)(d(he),d(g))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),K=class{constructor(e){this._doc=e}},ce="ng-app-id",ut=(()=>{let e=class e{constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ne(i),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(o=>o.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${ce}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(o=>{o.textContent!=null&&r.set(o.textContent,o)}),r}return null}changeUsageCount(n,r){let o=this.styleRef;if(o.has(n)){let i=o.get(n);return i.usage+=r,i.usage}return o.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let o=this.styleNodesInDOM,i=o?.get(r);if(i?.parentNode===n)return o.delete(r),i.removeAttribute(ce),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(ce,this.appId),n.appendChild(a),a}}addStyleToHost(n,r){let o=this.getStyleElement(n,r),i=this.styleRef,a=i.get(r)?.elements;a?a.push(o):i.set(r,{elements:[o],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(d(p),d(Y),d(H,8),d(M))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),le={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},ye=/%COMP%/g,ht="%COMP%",jt=`_nghost-${ht}`,Ft=`_ngcontent-${ht}`,Ut=!0,_t=new b("",{providedIn:"root",factory:()=>Ut});function Bt(t){return Ft.replace(ye,t)}function zt(t){return jt.replace(ye,t)}function ft(t,e){return e.map(s=>s.replace(ye,t))}var X=(()=>{let e=class e{constructor(n,r,o,i,a,l,c,h=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=l,this.ngZone=c,this.nonce=h,this.rendererByCompId=new Map,this.platformIsServer=ne(l),this.defaultRenderer=new C(n,a,c,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===P.ShadowDom&&(r=me(N({},r),{encapsulation:P.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof J?o.applyToHost(n):o instanceof j&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let a=this.doc,l=this.ngZone,c=this.eventManager,h=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,y=this.platformIsServer;switch(r.encapsulation){case P.Emulated:i=new J(c,h,r,this.appId,u,a,l,y);break;case P.ShadowDom:return new fe(c,h,n,r,a,l,this.nonce,y);default:i=new j(c,h,r,u,a,l,y);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(d(dt),d(ut),d(Y),d(_t),d(p),d(M),d(g),d(H))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),C=class{constructor(e,s,n,r){this.eventManager=e,this.doc=s,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,s){return s?this.doc.createElementNS(le[s]||s,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,s){(ct(e)?e.content:e).appendChild(s)}insertBefore(e,s,n){e&&(ct(e)?e.content:e).insertBefore(s,n)}removeChild(e,s){e&&e.removeChild(s)}selectRootElement(e,s){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new w(-5104,!1);return s||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,s,n,r){if(r){s=r+":"+s;let o=le[r];o?e.setAttributeNS(o,s,n):e.setAttribute(s,n)}else e.setAttribute(s,n)}removeAttribute(e,s,n){if(n){let r=le[n];r?e.removeAttributeNS(r,s):e.removeAttribute(`${n}:${s}`)}else e.removeAttribute(s)}addClass(e,s){e.classList.add(s)}removeClass(e,s){e.classList.remove(s)}setStyle(e,s,n,r){r&(I.DashCase|I.Important)?e.style.setProperty(s,n,r&I.Important?"important":""):e.style[s]=n}removeStyle(e,s,n){n&I.DashCase?e.style.removeProperty(s):e.style[s]=""}setProperty(e,s,n){e!=null&&(e[s]=n)}setValue(e,s){e.nodeValue=s}listen(e,s,n){if(typeof e=="string"&&(e=te().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${s}`);return this.eventManager.addEventListener(e,s,this.decoratePreventDefault(n))}decoratePreventDefault(e){return s=>{if(s==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(s)):e(s))===!1&&s.preventDefault()}}};function ct(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var fe=class extends C{constructor(e,s,n,r,o,i,a,l){super(e,o,i,l),this.sharedStylesHost=s,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=ft(r.id,r.styles);for(let h of c){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=h,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,s){return super.appendChild(this.nodeOrShadowRoot(e),s)}insertBefore(e,s,n){return super.insertBefore(this.nodeOrShadowRoot(e),s,n)}removeChild(e,s){return super.removeChild(this.nodeOrShadowRoot(e),s)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},j=class extends C{constructor(e,s,n,r,o,i,a,l){super(e,o,i,a),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=r,this.styles=l?ft(l,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},J=class extends j{constructor(e,s,n,r,o,i,a,l){let c=r+"-"+n.id;super(e,s,n,o,i,a,l,c),this.contentAttr=Bt(c),this.hostAttr=zt(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,s){let n=super.createElement(e,s);return super.setAttribute(n,this.contentAttr,""),n}},Vt=(()=>{let e=class e extends K{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}};e.\u0275fac=function(r){return new(r||e)(d(p))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})(),lt=["alt","control","meta","shift"],$t={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Kt={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Xt=(()=>{let e=class e extends K{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o){let i=e.parseEventName(r),a=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>te().onAndCancel(n,i.domEventName,a))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),a="",l=r.indexOf("code");if(l>-1&&(r.splice(l,1),a="code."),lt.forEach(h=>{let u=r.indexOf(h);u>-1&&(r.splice(u,1),a+=h+".")}),a+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=a,c}static matchEventFullKeyCode(n,r){let o=$t[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),lt.forEach(a=>{if(a!==o){let l=Kt[a];l(n)&&(i+=a+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}};e.\u0275fac=function(r){return new(r||e)(d(p))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})();function Jn(t,e){return xe(N({rootComponent:t},Jt(e)))}function Jt(t){return{appProviders:[...Yt,...t?.providers??[]],platformProviders:Zt}}function Gt(){ue.makeCurrent()}function Wt(){return new Z}function qt(){return Re(document),document}var Zt=[{provide:M,useValue:_e},{provide:be,useValue:Gt,multi:!0},{provide:p,useFactory:qt,deps:[]}];var Yt=[{provide:Te,useValue:"root"},{provide:Z,useFactory:Wt,deps:[]},{provide:he,useClass:Vt,multi:!0,deps:[p,g,M]},{provide:he,useClass:Xt,multi:!0,deps:[p]},X,ut,dt,{provide:U,useExisting:X},{provide:Be,useClass:Ct,deps:[]},[]];var Gn=(()=>{let e=class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};e.\u0275fac=function(r){return new(r||e)(d(p))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=f({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=d(Ht),o},providedIn:"root"});let t=e;return t})(),Ht=(()=>{let e=class e extends Qt{constructor(n){super(),this._doc=n}sanitize(n,r){if(r==null)return null;switch(n){case T.NONE:return r;case T.HTML:return A(r,"HTML")?D(r):Ie(this._doc,String(r)).toString();case T.STYLE:return A(r,"Style")?D(r):r;case T.SCRIPT:if(A(r,"Script"))return D(r);throw new w(5200,!1);case T.URL:return A(r,"URL")?D(r):Pe(String(r));case T.RESOURCE_URL:if(A(r,"ResourceURL"))return D(r);throw new w(5201,!1);default:throw new w(5202,!1)}}bypassSecurityTrustHtml(n){return Me(n)}bypassSecurityTrustStyle(n){return De(n)}bypassSecurityTrustScript(n){return Ae(n)}bypassSecurityTrustUrl(n){return Ne(n)}bypassSecurityTrustResourceUrl(n){return Oe(n)}};e.\u0275fac=function(r){return new(r||e)(d(p))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),pe=function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t}(pe||{});function Wn(...t){let e=[],s=new Set,n=s.has(pe.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:o}of t)s.add(o),r.length&&e.push(r);return q([[],Ce(),s.has(pe.NoHttpTransferCache)||n?[]:at({}),e])}var en=(()=>{let e=class e extends z{constructor(n,r,o){super(n,r,o,m(Se,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(r){return new(r||e)(d(p),d(S),d(B))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let t=e;return t})();function tn(){return new Ve}function nn(t,e,s){return new Ke(t,e,s)}var pt=[{provide:B,useFactory:tn},{provide:z,useClass:en},{provide:U,useFactory:nn,deps:[X,z,g]}],rn=[{provide:S,useFactory:()=>new $e},{provide:Q,useValue:"BrowserAnimations"},...pt],sn=[{provide:S,useClass:ze},{provide:Q,useValue:"NoopAnimations"},...pt];function ir(){return _("NgEagerAnimations"),[...rn]}function ar(){return[...sn]}export{Rn as a,At as b,ue as c,he as d,K as e,X as f,Jn as g,Gn as h,Qt as i,Wn as j,ir as k,ar as l};