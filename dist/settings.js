(()=>{var s=crypto,y=t=>t instanceof CryptoKey;var d=new TextEncoder,l=new TextDecoder,ft=2**32;function g(...t){let e=t.reduce((o,{length:u})=>o+u,0),r=new Uint8Array(e),n=0;return t.forEach(o=>{r.set(o,n),n+=o.length}),r}var V=t=>{let e=t;typeof e=="string"&&(e=d.encode(e));let r=32768,n=[];for(let o=0;o<e.length;o+=r)n.push(String.fromCharCode.apply(null,e.subarray(o,o+r)));return btoa(n.join(""))},f=t=>V(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");var v=class extends Error{static get code(){return"ERR_JOSE_GENERIC"}constructor(e){var r;super(e),this.code="ERR_JOSE_GENERIC",this.name=this.constructor.name,(r=Error.captureStackTrace)===null||r===void 0||r.call(Error,this,this.constructor)}};var a=class extends v{constructor(){super(...arguments),this.code="ERR_JOSE_NOT_SUPPORTED"}static get code(){return"ERR_JOSE_NOT_SUPPORTED"}};var m=class extends v{constructor(){super(...arguments),this.code="ERR_JWS_INVALID"}static get code(){return"ERR_JWS_INVALID"}},S=class extends v{constructor(){super(...arguments),this.code="ERR_JWT_INVALID"}static get code(){return"ERR_JWT_INVALID"}};var N=s.getRandomValues.bind(s);function b(){return typeof WebSocketPair<"u"||typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"||typeof EdgeRuntime<"u"&&EdgeRuntime==="vercel"}function E(t,e="algorithm.name"){return new TypeError(`CryptoKey does not support this operation, its ${e} must be ${t}`)}function P(t,e){return t.name===e}function F(t){return parseInt(t.name.slice(4),10)}function Se(t){switch(t){case"ES256":return"P-256";case"ES384":return"P-384";case"ES512":return"P-521";default:throw new Error("unreachable")}}function Ae(t,e){if(e.length&&!e.some(r=>t.usages.includes(r))){let r="CryptoKey does not support this operation, its usages must include ";if(e.length>2){let n=e.pop();r+=`one of ${e.join(", ")}, or ${n}.`}else e.length===2?r+=`one of ${e[0]} or ${e[1]}.`:r+=`${e[0]}.`;throw new TypeError(r)}}function te(t,e,...r){switch(e){case"HS256":case"HS384":case"HS512":{if(!P(t.algorithm,"HMAC"))throw E("HMAC");let n=parseInt(e.slice(2),10);if(F(t.algorithm.hash)!==n)throw E(`SHA-${n}`,"algorithm.hash");break}case"RS256":case"RS384":case"RS512":{if(!P(t.algorithm,"RSASSA-PKCS1-v1_5"))throw E("RSASSA-PKCS1-v1_5");let n=parseInt(e.slice(2),10);if(F(t.algorithm.hash)!==n)throw E(`SHA-${n}`,"algorithm.hash");break}case"PS256":case"PS384":case"PS512":{if(!P(t.algorithm,"RSA-PSS"))throw E("RSA-PSS");let n=parseInt(e.slice(2),10);if(F(t.algorithm.hash)!==n)throw E(`SHA-${n}`,"algorithm.hash");break}case(b()&&"EdDSA"):{if(!P(t.algorithm,"NODE-ED25519"))throw E("NODE-ED25519");break}case"EdDSA":{if(t.algorithm.name!=="Ed25519"&&t.algorithm.name!=="Ed448")throw E("Ed25519 or Ed448");break}case"ES256":case"ES384":case"ES512":{if(!P(t.algorithm,"ECDSA"))throw E("ECDSA");let n=Se(e);if(t.algorithm.namedCurve!==n)throw E(n,"algorithm.namedCurve");break}default:throw new TypeError("CryptoKey does not support this operation")}Ae(t,r)}function re(t,e,...r){if(r.length>2){let n=r.pop();t+=`one of type ${r.join(", ")}, or ${n}.`}else r.length===2?t+=`one of type ${r[0]} or ${r[1]}.`:t+=`of type ${r[0]}.`;return e==null?t+=` Received ${e}`:typeof e=="function"&&e.name?t+=` Received function ${e.name}`:typeof e=="object"&&e!=null&&e.constructor&&e.constructor.name&&(t+=` Received an instance of ${e.constructor.name}`),t}var w=(t,...e)=>re("Key must be ",t,...e);function z(t,e,...r){return re(`Key for the ${t} algorithm must be `,e,...r)}var X=t=>y(t),i=["CryptoKey"];var xe=(...t)=>{let e=t.filter(Boolean);if(e.length===0||e.length===1)return!0;let r;for(let n of e){let o=Object.keys(n);if(!r||r.size===0){r=new Set(o);continue}for(let u of o){if(r.has(u))return!1;r.add(u)}}return!0},_=xe;function He(t){return typeof t=="object"&&t!==null}function p(t){if(!He(t)||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}var k=(t,e)=>{if(t.startsWith("RS")||t.startsWith("PS")){let{modulusLength:r}=e.algorithm;if(typeof r!="number"||r<2048)throw new TypeError(`${t} requires key modulusLength to be 2048 bits or larger`)}};var Ie=(t,e)=>{if(!(e instanceof Uint8Array)){if(!X(e))throw new TypeError(z(t,e,...i,"Uint8Array"));if(e.type!=="secret")throw new TypeError(`${i.join(" or ")} instances for symmetric algorithms must be of type "secret"`)}},Te=(t,e,r)=>{if(!X(e))throw new TypeError(z(t,e,...i));if(e.type==="secret")throw new TypeError(`${i.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);if(r==="sign"&&e.type==="public")throw new TypeError(`${i.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);if(r==="decrypt"&&e.type==="public")throw new TypeError(`${i.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);if(e.algorithm&&r==="verify"&&e.type==="private")throw new TypeError(`${i.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);if(e.algorithm&&r==="encrypt"&&e.type==="private")throw new TypeError(`${i.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`)},De=(t,e,r)=>{t.startsWith("HS")||t==="dir"||t.startsWith("PBES2")||/^A\d{3}(?:GCM)?KW$/.test(t)?Ie(t,e):Te(t,e,r)},J=De;function Be(t,e,r,n,o){if(o.crit!==void 0&&n.crit===void 0)throw new t('"crit" (Critical) Header Parameter MUST be integrity protected');if(!n||n.crit===void 0)return new Set;if(!Array.isArray(n.crit)||n.crit.length===0||n.crit.some(c=>typeof c!="string"||c.length===0))throw new t('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');let u;r!==void 0?u=new Map([...Object.entries(r),...e.entries()]):u=e;for(let c of n.crit){if(!u.has(c))throw new a(`Extension Header Parameter "${c}" is not recognized`);if(o[c]===void 0)throw new t(`Extension Header Parameter "${c}" is missing`);if(u.get(c)&&n[c]===void 0)throw new t(`Extension Header Parameter "${c}" MUST be integrity protected`)}return new Set(n.crit)}var x=Be;var Fe=Symbol();function B(t,e){let r=`SHA-${t.slice(-3)}`;switch(t){case"HS256":case"HS384":case"HS512":return{hash:r,name:"HMAC"};case"PS256":case"PS384":case"PS512":return{hash:r,name:"RSA-PSS",saltLength:t.slice(-3)>>3};case"RS256":case"RS384":case"RS512":return{hash:r,name:"RSASSA-PKCS1-v1_5"};case"ES256":case"ES384":case"ES512":return{hash:r,name:"ECDSA",namedCurve:e.namedCurve};case(b()&&"EdDSA"):let{namedCurve:n}=e;return{name:n,namedCurve:n};case"EdDSA":return{name:e.name};default:throw new a(`alg ${t} is not supported either by JOSE or your javascript runtime`)}}function L(t,e,r){if(y(e))return te(e,t,r),e;if(e instanceof Uint8Array){if(!t.startsWith("HS"))throw new TypeError(w(e,...i));return s.subtle.importKey("raw",e,{hash:`SHA-${t.slice(-3)}`,name:"HMAC"},!1,[r])}throw new TypeError(w(e,...i,"Uint8Array"))}var I=t=>Math.floor(t.getTime()/1e3);var Xe=/^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i,$=t=>{let e=Xe.exec(t);if(!e)throw new TypeError("Invalid time period format");let r=parseFloat(e[1]);switch(e[2].toLowerCase()){case"sec":case"secs":case"second":case"seconds":case"s":return Math.round(r);case"minute":case"minutes":case"min":case"mins":case"m":return Math.round(r*60);case"hour":case"hours":case"hr":case"hrs":case"h":return Math.round(r*3600);case"day":case"days":case"d":return Math.round(r*86400);case"week":case"weeks":case"w":return Math.round(r*604800);default:return Math.round(r*31557600)}};var Qe=async(t,e,r)=>{let n=await L(t,e,"sign");k(t,n);let o=await s.subtle.sign(B(t,n.algorithm),n,r);return new Uint8Array(o)},de=Qe;var H=class{constructor(e){if(!(e instanceof Uint8Array))throw new TypeError("payload must be an instance of Uint8Array");this._payload=e}setProtectedHeader(e){if(this._protectedHeader)throw new TypeError("setProtectedHeader can only be called once");return this._protectedHeader=e,this}setUnprotectedHeader(e){if(this._unprotectedHeader)throw new TypeError("setUnprotectedHeader can only be called once");return this._unprotectedHeader=e,this}async sign(e,r){if(!this._protectedHeader&&!this._unprotectedHeader)throw new m("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");if(!_(this._protectedHeader,this._unprotectedHeader))throw new m("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");let n={...this._protectedHeader,...this._unprotectedHeader},o=x(m,new Map([["b64",!0]]),r?.crit,this._protectedHeader,n),u=!0;if(o.has("b64")&&(u=this._protectedHeader.b64,typeof u!="boolean"))throw new m('The "b64" (base64url-encode payload) Header Parameter must be a boolean');let{alg:c}=n;if(typeof c!="string"||!c)throw new m('JWS "alg" (Algorithm) Header Parameter missing or invalid');J(c,e,"sign");let O=this._payload;u&&(O=d.encode(f(O)));let U;this._protectedHeader?U=d.encode(f(JSON.stringify(this._protectedHeader))):U=d.encode("");let ye=g(U,d.encode("."),O),we=await de(c,e,ye),M={signature:f(we),payload:""};return u&&(M.payload=l.decode(O)),this._unprotectedHeader&&(M.header=this._unprotectedHeader),this._protectedHeader&&(M.protected=l.decode(U)),M}};var T=class{constructor(e){this._flattened=new H(e)}setProtectedHeader(e){return this._flattened.setProtectedHeader(e),this}async sign(e,r){let n=await this._flattened.sign(e,r);if(n.payload===void 0)throw new TypeError("use the flattened module for creating JWS with b64: false");return`${n.protected}.${n.payload}.${n.signature}`}};var C=class{constructor(e){if(!p(e))throw new TypeError("JWT Claims Set MUST be an object");this._payload=e}setIssuer(e){return this._payload={...this._payload,iss:e},this}setSubject(e){return this._payload={...this._payload,sub:e},this}setAudience(e){return this._payload={...this._payload,aud:e},this}setJti(e){return this._payload={...this._payload,jti:e},this}setNotBefore(e){return typeof e=="number"?this._payload={...this._payload,nbf:e}:this._payload={...this._payload,nbf:I(new Date)+$(e)},this}setExpirationTime(e){return typeof e=="number"?this._payload={...this._payload,exp:e}:this._payload={...this._payload,exp:I(new Date)+$(e)},this}setIssuedAt(e){return typeof e>"u"?this._payload={...this._payload,iat:I(new Date)}:this._payload={...this._payload,iat:e},this}};var D=class extends C{setProtectedHeader(e){return this._protectedHeader=e,this}async sign(e,r){var n;let o=new T(d.encode(JSON.stringify(this._payload)));if(o.setProtectedHeader(this._protectedHeader),Array.isArray((n=this._protectedHeader)===null||n===void 0?void 0:n.crit)&&this._protectedHeader.crit.includes("b64")&&this._protectedHeader.b64===!1)throw new S("JWTs MUST NOT use unencoded payload");return o.sign(e,r)}};var R=document.getElementById("chargify-js-src"),Z=document.getElementById("public-key"),pe=document.getElementById("private-key"),Q=document.getElementById("server-host"),G=document.getElementById("examples"),ue=document.getElementById("gateway-handle"),j=document.getElementById("settings-submit"),le=document.getElementById("settings-loading"),ot=document.getElementById("errors-box"),h=window.localStorage,fe=h.getItem("chargifyJsSrc"),me=h.getItem("publicKey"),q=h.getItem("privateKey"),at=h.getItem("serverHost"),it=h.getItem("example"),st=h.getItem("gatewayHandle"),ct=async()=>{if(!q)return null;let t=new TextEncoder().encode(q);return new D({}).setProtectedHeader({alg:"HS256"}).setIssuer(me).setJti(self.crypto.randomUUID()).setSubject(self.crypto.randomUUID()).sign(t)};R.value=fe;Z.value=me;pe.value=q;Q.value=at;G.value=it;ue.value=st;R.value||(R.value="https://js.chargify.com/latest/chargify.js");(!R.value||!Z.value||!Q.value||!G.value)&&(ot.style.display="block");saveSettings=()=>{j.style.display="none",le.style.display="block",h.setItem("chargifyJsSrc",R.value),h.setItem("publicKey",Z.value),h.setItem("privateKey",pe.value),h.setItem("serverHost",Q.value),h.setItem("example",G.value),h.setItem("gatewayHandle",ue.value),ct().then(t=>h.setItem("securityToken",t)),location.reload()};j.addEventListener("click",saveSettings);var he=document.createElement("script");he.setAttribute("src",fe);document.head.appendChild(he);setTimeout(()=>{let t=document.createElement("script");t.setAttribute("src",`./example/${G.value}.js`),document.head.appendChild(t);let e=document.createElement("script");e.setAttribute("src","./example/submit.js"),document.head.appendChild(e),le.style.display="none",j.style.display="block"},2e3);})();
//# sourceMappingURL=settings.js.map
