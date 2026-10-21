import{S as e,b as t,n,p as r,r as i,t as a,w as o,x as s,y as c}from"./narration.Crm9S85h.js";import{c as l,i as u,o as d,r as f,s as p}from"./post.lhgbitLo.js";import{n as m}from"./sky.Cy6Kxnap.js";import{T as h}from"./shared-a13.DT6NLTJQ.js";function g(e,t){if(t>=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){let[r,i]=e[n-1],[a,o]=e[n];if(t>=a)return i+(o-i)*(t-r)/(a-r)}return e[e.length-1][1]}var _=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},v=(e,t,n,r)=>_(t+r,t-r,e)*_(n-r,n+r,e),y=4510,b=4530,x=-7590;function ee(e){return e>=0?1/(1+.4*(1-(4570-e)/4570)):h(-e/1e3).L}var te=e=>e>=0?1:h(-e/1e3).R,ne=e=>g([[4510,5],[4400,8],[3800,11],[3200,13],[2450,17],[2e3,19],[1e3,19.2],[620,21.9],[400,21.9],[100,23.5],[0,24],[-250,25.5],[-1e3,30],[-5e3,48],[-7600,60]],e),re=e=>g([[4510,25],[4500,60],[4450,120],[4e3,200],[3200,270],[2450,330],[1400,341],[620,371],[0,384.4],[-1e3,420],[-5e3,460],[-7600,470]],e),S=e=>g([[4510,0],[2500,1e-5],[2430,.01],[2300,1],[2050,2],[1800,.2],[800,.5],[580,4],[540,10],[420,15],[300,30],[250,16],[200,20],[0,21],[-500,18],[-1e3,1],[-1300,0]],e);function ie(e){return{snowball:Math.max(v(e,2420,2220,25),v(e,717,660,4),v(e,650,635,2)),caps:Math.max(.35*v(e,447,443,2),.3*v(e,340,262,6),e<34&&e>-100?.12+(e<2.6?.13:0):0,.15*v(e,2900,2800,30))}}function ae(e){let t=Math.max(_(4440,4505,e),_(-7400,-7590,e)),n=_(4430,4380,e)*(1-_(-900,-1600,e)),r=v(e,4505,4415,20)+.7*v(e,-800,-1800,150),i=v(e,3800,2450,120)*.8,a=Math.max(0,_(475,420,e)*.35+_(400,360,e)*.65)*(1-_(-600,-1100,e)),o=1-_(-2e3,-4500,e)*.92;return{molten:t,oceans:n,steam:Math.min(1,r),haze:i,green:a,air:o,lights:+(e<=2e-4&&e>=-5e-5)}}var oe=e=>g([[4400,.004],[4e3,.02],[3500,.06],[3e3,.12],[2500,.2],[1800,.24],[1e3,.27]],e);function se(e){return e>4100?`none`:e>3500?`perhaps the first cells`:e>2400?`microbes, in the sea`:e>1600?`microbes, making oxygen`:e>800?`the first complex cells`:e>575?`seaweeds and sponges`:e>539?`the Ediacarans`:e>470?`animals, all in the sea`:e>385?`the first plants on land`:e>252?`forests, insects, amphibians`:e>66?`dinosaurs`:e>.3?`mammals and birds`:e>0?`us`:e>-600?`whatever comes next`:e>-1300?`microbes, holding on`:`none`}var C=[[4567,`Hadean`],[4e3,`Archean`],[2500,`Proterozoic`],[538.8,`Phanerozoic`]],w=[[538.8,`Cambrian`],[485.4,`Ordovician`],[443.8,`Silurian`],[419.2,`Devonian`],[358.9,`Carboniferous`],[298.9,`Permian`],[251.9,`Triassic`],[201.4,`Jurassic`],[145,`Cretaceous`],[66,`Paleogene`],[23.03,`Neogene`],[2.58,`Quaternary`]];function T(e){if(e<0)return`the future`;if(e<.0117)return`today`;for(let t=w.length-1;t>=0;t--)if(e<=w[t][0]&&e>=0)return w[t][1];for(let t=C.length-1;t>=0;t--)if(e<=C[t][0])return C[t][1];return`Hadean`}function ce(e){return e>4400?{grade:`RECONSTRUCTED`,how:`CONFIDENCE: MEDIUM`}:e>1e3?{grade:`SPECULATION`,how:`THE LAND: NO MAP SURVIVES`}:e>540?{grade:`RECONSTRUCTED`,how:`CONFIDENCE: LOW`}:e>.01?{grade:`RECONSTRUCTED`,how:`CONFIDENCE: HIGH`}:e>=-.01?{grade:`OBSERVED`,how:`BY EVERYONE`}:e>-250?{grade:`SPECULATION`,how:`IF TODAY’S MOTIONS CARRY ON`}:{grade:`PREDICTED`,how:`CONFIDENCE: FALLING`}}function le(e){if(Math.abs(e)<5e-4)return{n:`today`,unit:``};let t=Math.abs(e),n=e<0?`from now`:`ago`;return t>=1e3?{n:(t/1e3).toFixed(t>=3e3?1:2).replace(/\.?0+$/,``),unit:`billion years ${n}`}:t>=1?{n:String(Math.round(t)),unit:`million years ${n}`}:t>=.001?{n:String(Math.round(t*1e3)),unit:`thousand years ${n}`}:{n:String(Math.round(t*1e6)),unit:`years ${n}`}}var E=[{t:4510,name:`The Moon is made`},{t:4400,name:`The oldest crystals`},{t:3480,name:`The oldest signs of life`},{t:2400,name:`Oxygen`},{t:1800,name:`Columbia`},{t:1e3,name:`Rodinia`},{t:690,name:`Snowball Earth`},{t:539,name:`The Cambrian`},{t:470,name:`Plants on land`},{t:300,name:`Pangaea`},{t:66,name:`The asteroid`},{t:0,name:`Today`},{t:-250,name:`The next supercontinent`},{t:-1e3,name:`The oceans go`}],D=[[0,4530],[.05,4510],[.1,4380],[.36,1e3],[.43,540],[.62,0],[.7,-250],[1,-7590]],O=.62;function ue(e){if(e<=0)return D[0][1];for(let t=1;t<D.length;t++){let[n,r]=D[t-1],[i,a]=D[t];if(e<=i)return r+(a-r)*(e-n)/(i-n)}return D[D.length-1][1]}function k(e){if(e>=D[0][1])return 0;for(let t=1;t<D.length;t++){let[n,r]=D[t-1],[i,a]=D[t];if(e>=a)return n+(i-n)*(e-r)/(a-r)}return 1}var de=e=>Math.min(1,Math.max(0,(b-e)/20)),A=`143, 216, 238`,j=`242, 180, 90`,M=`230, 238, 245`;function N(e){let t=e.getContext(`2d`);return()=>{let n=e.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,2);if(n.width<20||n.height<20)return null;let i=Math.round(n.width*r),a=Math.round(n.height*r);return(e.width!==i||e.height!==a)&&(e.width=i,e.height=a),t.setTransform(r,0,0,r,0,0),t.clearRect(0,0,n.width,n.height),{g:t,w:n.width,h:n.height}}}function fe(e,t){let n=N(e),r=[[4567,4e3,`HADEAN`,`HAD.`],[4e3,2500,`ARCHEAN`,`ARCH.`],[2500,538.8,`PROTEROZOIC`,`PROT.`],[538.8,0,`PHANEROZOIC`,`PHAN.`],[0,-7590,`AHEAD`,`AHEAD`]],a=[[2420,2220],[717,660],[650,635]];return{draw(e){let o=n();if(!o)return;let{g:s,w:c,h:l}=o,u=c-6,d=l-18,f=e=>30+t(e)*(u-30),p=e=>d-(Math.log10(Math.max(1e-4,e))+4)/6*(d-20);s.font=i(s.canvas,`fig`),s.textBaseline=`middle`;for(let[e,t,n,i]of r){let r=f(Math.min(e,4530)),a=f(t);s.fillStyle=`rgba(${A}, ${n===`AHEAD`?.03:.06})`,s.fillRect(r+1,d+3,a-r-2,10),s.fillStyle=`rgba(${A}, 0.6)`,s.textAlign=`center`;let o=a-r>s.measureText(n).width+4?n:a-r>s.measureText(i).width+2?i:``;o&&s.fillText(o,(r+a)/2,d+8.5)}s.strokeStyle=`rgba(${A}, 0.22)`,s.strokeRect(30.5,20.5,u-30-1,d-20-1),s.fillStyle=`rgba(${M}, 0.16)`;for(let[e,t]of a)s.fillRect(f(e),20,Math.max(2,f(t)-f(e)),d-20);s.strokeStyle=`rgba(${A}, 0.3)`,s.setLineDash([2,3]),s.beginPath(),s.moveTo(30,p(21)),s.lineTo(u,p(21)),s.stroke(),s.setLineDash([]),s.textAlign=`right`,s.fillStyle=`rgba(${A}, 0.6)`;for(let[e,t]of[[21,`21%`],[.01,`0.01%`]])s.fillText(t,27,p(e));s.strokeStyle=`rgb(${A})`,s.lineWidth=1.5,s.beginPath();let m=!0;for(let e=0;e<=240;e++){let n=e/240,r=4530,i=-7590;for(let e=0;e<30;e++){let e=(r+i)/2;t(e)<n?r=e:i=e}let a=S((r+i)/2),o=30+n*(u-30),c=p(a);if(a<11e-5){m=!0;continue}m?(s.moveTo(o,c),m=!1):s.lineTo(o,c)}s.stroke(),s.lineWidth=1,s.textAlign=`left`,s.fillStyle=`rgba(${A}, 0.75)`,s.fillText(`OXYGEN IN THE AIR`,30,12);let h=f(e);s.strokeStyle=`rgb(${j})`,s.lineWidth=1.5,s.beginPath(),s.moveTo(h,18),s.lineTo(h,d+2),s.stroke(),s.lineWidth=1;let g=E[0],_=1/0;for(let e of E){let t=Math.abs(f(e.t)-h);t<_&&(_=t,g=e)}if(_<14){let e=g.name.toUpperCase();s.fillStyle=`rgb(${j})`,s.textAlign=h>(30+u)/2?`right`:`left`,s.fillText(e,h+(h>(30+u)/2?-5:5),d-8)}}}}function pe(e){let t=N(e);return{draw(e,n,r){let a=t();if(!a)return;let{g:o,w:s,h:c}=a,l=Math.min(s-4,(c-4)*2),u=l/2,d=(s-l)/2,f=(c-u)/2;o.strokeStyle=`rgba(${A}, 0.22)`,o.strokeRect(d+.5,f+.5,l-1,u-1),e&&(o.save(),o.filter=`contrast(3.2) brightness(0.62)`,o.globalAlpha=.9,o.drawImage(e,d,f,l,u),o.restore(),o.fillStyle=`rgba(${A}, 0.18)`,o.globalCompositeOperation=`multiply`,o.fillRect(d,f,l,u),o.globalCompositeOperation=`source-over`),o.strokeStyle=`rgba(${A}, 0.25)`,o.setLineDash([2,3]);for(let e of[0,23.4,-23.4]){let t=f+(90-e)/180*u;o.beginPath(),o.moveTo(d,t),o.lineTo(d+l,t),o.stroke()}o.setLineDash([]),o.font=i(o.canvas,`fig`),o.textBaseline=`middle`,r&&(o.fillStyle=`rgba(${A}, 0.75)`,o.textAlign=`center`,o.fillText(r,d+l/2,f+u/2));for(let e of n){if(!e.at)continue;let t=d+(e.at[1]+180)/360*l,n=f+(90-e.at[0])/180*u;o.strokeStyle=`rgb(${j})`,o.fillStyle=`rgb(${j})`,o.lineWidth=1.4,o.beginPath(),o.arc(t,n,3.6,0,Math.PI*2),o.stroke(),e.hollow||(o.beginPath(),o.arc(t,n,1.4,0,Math.PI*2),o.fill()),o.lineWidth=1,o.textAlign=t>d+l*.7?`right`:`left`,o.fillText(e.name.toUpperCase(),t+(t>d+l*.7?-7:7),n)}}}}var P=Math.PI/180,F=[1,0,0,0],I=(e,t)=>[Math.cos(e*P)*Math.cos(t*P),Math.cos(e*P)*Math.sin(t*P),Math.sin(e*P)],L=e=>[Math.asin(Math.max(-1,Math.min(1,e[2])))/P,Math.atan2(e[1],e[0])/P];function R(e,t,n){let r=I(e,t),i=n*P/2,a=Math.sin(i);return[Math.cos(i),r[0]*a,r[1]*a,r[2]*a]}function me(e,t){return[e[0]*t[0]-e[1]*t[1]-e[2]*t[2]-e[3]*t[3],e[0]*t[1]+e[1]*t[0]+e[2]*t[3]-e[3]*t[2],e[0]*t[2]-e[1]*t[3]+e[2]*t[0]+e[3]*t[1],e[0]*t[3]+e[1]*t[2]-e[2]*t[1]+e[3]*t[0]]}var he=e=>[e[0],-e[1],-e[2],-e[3]];function z(e,t,n){let r=t,i=e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3];if(i<0&&(r=[-r[0],-r[1],-r[2],-r[3]],i=-i),i>.9995){let t=[e[0]+(r[0]-e[0])*n,e[1]+(r[1]-e[1])*n,e[2]+(r[2]-e[2])*n,e[3]+(r[3]-e[3])*n],i=Math.hypot(...t);return[t[0]/i,t[1]/i,t[2]/i,t[3]/i]}let a=Math.acos(i),o=Math.sin(a),s=Math.sin((1-n)*a)/o,c=Math.sin(n*a)/o;return[e[0]*s+r[0]*c,e[1]*s+r[1]*c,e[2]*s+r[2]*c,e[3]*s+r[3]*c]}function B(e,t){let n=me(me(e,[0,t[0],t[1],t[2]]),he(e));return[n[1],n[2],n[3]]}function V(e){let t=new Map;for(let[n,r]of Object.entries(e))t.set(+n,r.map(([e,t,n,r,i])=>({t:e,q:R(t,n,r),fixed:i})));function n(e,n){let r=t.get(e);if(!r||!r.length)return null;for(let e=0;e<r.length-1;e++){let t=r[e],i=r[e+1];if(t.fixed!==i.fixed||n<t.t||n>i.t)continue;let a=i.t>t.t?(n-t.t)/(i.t-t.t):0;return{q:z(t.q,i.q,a),fixed:t.fixed}}let i=n<r[0].t?r[0]:r[r.length-1];return{q:i.q,fixed:i.fixed}}let r=NaN,i=new Map;function a(e,t,o=0){if(t!==r&&(i.clear(),r=t),e===0||o>60)return F;let s=i.get(e);if(s)return s;let c=n(e,t),l=c&&c.fixed!==e?me(a(c.fixed,t,o+1),c.q):F;return i.set(e,l),l}return{has:e=>t.has(e),move:(e,t,n)=>B(a(e,t),n),unmove:(e,t,n)=>B(he(a(e,t)),n),plates:()=>[...t.keys()]}}var ge=(e,t)=>[e[0][0]*t[0]+e[0][1]*t[1]+e[0][2]*t[2],e[1][0]*t[0]+e[1][1]*t[1]+e[1][2]*t[2],e[2][0]*t[0]+e[2][1]*t[1]+e[2][2]*t[2]];function H(e,t,n){let r=Math.min(e.h-1,Math.max(0,Math.floor((90-t)/180*e.h))),i=(Math.floor((n+180)/360*e.w)%e.w+e.w)%e.w,a=r*e.w+i,o=e.age[a];return{id:e.id[a],made:o===255?1/0:o*4}}function U(e){let t=V(e.pm),n=V(e.md);return{where(r,i,a){let o=H(e.pmMap,r,i);if(a>o.made)return null;let s=I(r,i);if(a<=545)return L(t.move(o.id,a,s));let c=H(e.mdMap,r,i).id;return L(ge(e.align,n.move(c,a,s)))},under(n,r,i){if(i>545)return null;let a=I(n,r),o=null;for(let n of t.plates()){let r=L(t.unmove(n,i,a)),s=H(e.pmMap,r[0],r[1]);if(s.id===n&&i<=s.made){o=r;break}}return o}}}var _e=async e=>{let t=await fetch(e);if(!t.ok)throw Error(`${e}: ${t.status}`);return createImageBitmap(await t.blob(),{colorSpaceConversion:`none`,premultiplyAlpha:`none`})};async function ve(e){let t=await fetch(`${e}index.json`);if(!t.ok)throw Error(`no Deep Time index`);return await t.json()}function ye(e,t,n,r={}){let i=[...n.deep.slice().sort((e,t)=>t-e),...n.past.slice().sort((e,t)=>t-e),...n.future.slice().sort((e,t)=>t-e)],a=r.keep??10,o=new Map,s=new Set,c=new Map,l=new Map,u=0,d=(t,n)=>{let r=e.createTexture();for(e.bindTexture(e.TEXTURE_2D,r),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.R8,e.RED,e.UNSIGNED_BYTE,n),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),o.set(t,r),c.set(t,u);o.size>a;){let t=NaN,n=1/0;for(let[e,r]of c)r<n&&o.has(e)&&(t=e,n=r);if(Number.isNaN(t))break;e.deleteTexture(o.get(t)),o.delete(t),c.delete(t),s.delete(t),l.get(t)?.close(),l.delete(t)}},f=e=>{s.has(e)||(s.add(e),_e(`${t}e${e}.png`).then(t=>{l.set(e,t),d(e,t)}).catch(()=>s.delete(e)))},p=e=>{if(e>=i[0])return[i[0],i[0],0];for(let t=1;t<i.length;t++)if(e>=i[t]){let n=i[t-1],r=i[t];return[n,r,(n-e)/(n-r)]}let t=i[i.length-1];return[t,t,0]},m=e=>{let t=null;for(let n of o.keys())(t===null||Math.abs(n-e)<Math.abs(t-e))&&(t=n);return t};return{keys:i,first:i[0],last:i[i.length-1],async preload(e){await Promise.all(e.map(async e=>{if(o.has(e))return;s.add(e);let n=await _e(`${t}e${e}.png`);l.set(e,n),d(e,n)}))},at(e,t){u++;let[n,r,a]=p(e);f(n),f(r);let s=i.indexOf(t>=0?r:n);for(let e=1;e<=2;e++){let n=i[s+(t>=0?e:-e)];n!==void 0&&f(n)}let l=o.get(n)??null,d=o.get(r)??null,h=a;if(l&&c.set(n,u),d&&c.set(r,u),!l&&!d){let e=m(a<.5?n:r);l=d=e===null?null:o.get(e),h=0}else l?d||(d=l,h=0):(l=d,h=0);return{a:l,b:d,mix:h,key:a<.5?n:r}},image(e){let[t,n,r]=p(e),i=r<.5?t:n;if(l.has(i))return{key:i,img:l.get(i)};let a=m(i);return a!==null&&l.has(a)?{key:a,img:l.get(a)}:null}}}async function be(e){let t=await _e(e),n=document.createElement(`canvas`);n.width=t.width,n.height=t.height;let r=n.getContext(`2d`,{willReadFrequently:!0});r.drawImage(t,0,0);let i=r.getImageData(0,0,t.width,t.height).data;return t.close(),{w:n.width,h:n.height,d:i}}async function xe(e,t){let[n,r,i,a]=await Promise.all([fetch(`${e}rot.json`).then(e=>e.json()),fetch(`${e}rot-md.json`).then(e=>e.json()),be(`${e}plates.png`),be(`${e}plates-md.png`)]),o=e=>{let t=e.w*e.h,n=new Uint16Array(t),r=new Uint8Array(t);for(let i=0;i<t;i++)n[i]=e.d[i*4]<<8|e.d[i*4+1],r[i]=e.d[i*4+2];return{w:e.w,h:e.h,id:n,age:r}},s=o(a);return s.age.fill(255),U({pm:n,md:r,align:t.align,pmMap:o(i),mdMap:s})}var Se=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform vec3 uEye, uRight, uUp, uFwd;
uniform float uTan, uAspect, uShift;
uniform sampler2D uMapA, uMapB, uColour, uMoonTex;
uniform float uMix, uProc, uLandAt, uDrift, uSpin, uTime;
uniform vec3 uSun, uSunCol, uSunDisc;
uniform float uSunR;
uniform float uMolten, uSeaLvl, uSteam, uHaze, uGreen, uAir, uLights, uSnow, uCapLat, uRed, uArch, uClouds, uToday, uHasColour;
uniform vec4 uMoon;
uniform float uMoonHot, uMare, uHasMoonTex;
uniform vec4 uTheia;
uniform float uTheiaHot;
uniform float uEscape;

float hash3(vec3 p) { p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3. - 2. * f);
  return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float fbm(vec3 p, int oct) {
  float s = 0., a = 0.5;
  for (int i = 0; i < 6; i++) { if (i >= oct) break; s += a * vnoise(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; }
  return s;
}

const float PI = 3.14159265;
vec2 hitSphere(vec3 ro, vec3 rd, vec3 c, float r) {
  vec3 oc = ro - c;
  float b = dot(oc, rd), cc = dot(oc, oc) - r * r, h = b * b - cc;
  if (h < 0.) return vec2(-1.);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}
vec3 rotY(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z); }
// (A map's height in metres: 128 + 127 × the square root of |h| / 8000, signed.)
float decode(float v) { float s = (v * 255. - 128.) / 127.; return sign(s) * s * s * 8000.; }
vec2 uvOf(vec3 e) { return vec2(atan(-e.z, e.x) / (2. * PI) + 0.5, 0.5 - asin(clamp(e.y, -1., 1.)) / PI); }
float mapH(vec2 uv, vec2 dx, vec2 dy) {
  float a = textureGrad(uMapA, uv, dx, dy).r, b = textureGrad(uMapB, uv, dx, dy).r;
  return decode(mix(a, b, uMix));
}
// (Before any map survives: land from noise, as much as the crust of the time is thought to have had above the sea,
// drifting.)
float procH(vec3 e) {
  vec3 q = e * 2.6 + vec3(uDrift, uDrift * 0.7, -uDrift * 0.4);
  float f = fbm(q, 5);
  return (f - uLandAt) * 9000.;
}
float heightAt(vec3 e, vec2 uv, vec2 dx, vec2 dy) {
  float h = uProc < 0.999 ? mapH(uv, dx, dy) : 0.;
  if (uProc > 0.001) h = mix(h, procH(e), uProc);
  return h;
}
// Molten rock: cells of crust on a glowing sea, the cracks wider the hotter.
vec3 magma(vec3 p, float m, float t) {
  float n1 = fbm(p * 3.2 + vec3(0., t * 0.015, t * 0.01), 4);
  float n2 = fbm(p * 9. - vec3(t * 0.02, 0., 0.), 3);
  float ridge = 1. - abs(n1 * 2. - 1.);
  float cracks = pow(ridge, mix(26., 3., m));
  float sea = smoothstep(0.55, 1., m) * (0.2 + 0.8 * n2 * n2) * (0.6 + 0.4 * ridge);
  float g = max(cracks * (0.6 + 0.6 * n2), sea);
  return vec3(3.2, 0.8, 0.13) * g * g * smoothstep(0., 0.15, m) + vec3(0.9, 0.12, 0.015) * g * m;
}
vec3 srgb(vec3 c) { return pow(c, vec3(2.2)); }
void main() {
  vec2 ndc = vUv * 2. - 1.;
  vec3 rd = normalize(uFwd + uRight * ndc.x * uTan * uAspect + uUp * (ndc.y - uShift) * uTan);
  vec3 ro = uEye;
  vec2 hE = hitSphere(ro, rd, vec3(0.), 1.);
  vec2 hM = uMoon.w > 0. ? hitSphere(ro, rd, uMoon.xyz, uMoon.w) : vec2(-1.);
  vec2 hT = uTheia.w > 0. ? hitSphere(ro, rd, uTheia.xyz, uTheia.w) : vec2(-1.);
  float tE = hE.x > 0. ? hE.x : 1e9, tM = hM.x > 0. ? hM.x : 1e9, tT = hT.x > 0. ? hT.x : 1e9;
  float tMin = min(tE, min(tM, tT));
  vec3 col = vec3(0.);
  float alpha = 0.;
  vec3 airCol = mix(mix(mix(vec3(0.25, 0.5, 1.0), vec3(1.0, 0.5, 0.18), uHaze), vec3(0.85, 0.85, 0.9), uSteam * 0.8), vec3(1.0, 0.42, 0.12), smoothstep(0.2, 0.8, uMolten));
  if (tMin < 1e8 && tMin == tE) {
    // ── The Earth ──
    vec3 p = ro + rd * tE, n = normalize(p);
    vec3 e = rotY(n, -uSpin);
    vec2 uv = uvOf(e);
    vec2 dx = dFdx(uv), dy = dFdy(uv);
    if (abs(dx.x) > 0.5) dx.x -= sign(dx.x);
    if (abs(dy.x) > 0.5) dy.x -= sign(dy.x);
    float lat = asin(clamp(e.y, -1., 1.)) * 180. / PI;
    float h = heightAt(e, uv, dx, dy);
    // The slope, for shading the hills (a texel each way).
    vec3 east = normalize(cross(vec3(0, 1, 0), e) + 1e-5);
    vec3 eE = normalize(e + east * 0.006), eN = normalize(e + cross(e, east) * 0.006);
    float hx = heightAt(eE, uvOf(eE), dx, dy), hy = heightAt(eN, uvOf(eN), dx, dy);
    float wet = smoothstep(uSeaLvl + 25., uSeaLvl - 25., h);
    float relief = (1. - wet) * 0.00011;
    vec3 tE1 = normalize(cross(vec3(0, 1, 0), n) + 1e-5), tN1 = normalize(cross(n, tE1));
    vec3 nb = normalize(n - (tE1 * (hx - h) + tN1 * (hy - h)) * relief * 2.2);
    // How far inland: the land round about (four samples, about ten degrees off).
    float inland = 0.;
    if (uGreen > 0.01 || uRed > 0.01) {
      for (int k = 0; k < 4; k++) {
        float a = float(k) * 1.5708 + 0.4;
        vec3 q = normalize(e + (tE1 * cos(a) + tN1 * sin(a)) * 0.17);
        inland += step(uSeaLvl, heightAt(q, uvOf(q), dx * 4., dy * 4.));
      }
      inland *= 0.25;
    }
    float al = abs(lat);
    float nz = fbm(e * 14., 3);
    // The land.
    float dry = smoothstep(10., 22., al) * (1. - smoothstep(30., 42., al)) * 0.85 + inland * 0.55;
    dry = clamp(dry + (nz - 0.5) * 0.4, 0., 1.);
    vec3 rock = mix(vec3(0.085, 0.08, 0.075), vec3(0.30, 0.15, 0.075), uRed);
    vec3 desert = vec3(0.50, 0.37, 0.22);
    vec3 land = mix(rock, mix(rock, desert, 0.75), dry * uRed);
    float lush = (1. - dry) * (1. - smoothstep(55., 72., al));
    vec3 veg = mix(vec3(0.17, 0.15, 0.07), mix(vec3(0.035, 0.11, 0.03), vec3(0.02, 0.08, 0.025), smoothstep(30., 55., al)), lush);
    land = mix(land, veg, uGreen * (0.3 + 0.7 * lush) * (1. - smoothstep(64., 76., al)));
    land = mix(land, vec3(0.22, 0.21, 0.2), smoothstep(1800., 4200., h) * 0.7);
    land *= 0.85 + 0.3 * nz;
    if (uHasColour > 0.5 && uToday > 0.001) land = mix(land, srgb(textureGrad(uColour, uv, dx, dy).rgb), uToday);
    // The sea floor, where the sea isn't (filling at first; boiled away at the end): salt and bare rock.
    vec3 floorC = mix(mix(rock * 1.3, vec3(0.27, 0.2, 0.15), 0.5), vec3(0.5, 0.46, 0.4), smoothstep(-3500., -6000., h) * 0.6 * (1. - uMolten));
    vec3 ground = h > 0. ? land : floorC;
    // The sea.
    float depth = uSeaLvl - h;
    vec3 deepC = mix(vec3(0.004, 0.016, 0.05), vec3(0.008, 0.03, 0.028), uArch);
    vec3 shallowC = mix(vec3(0.02, 0.11, 0.15), vec3(0.035, 0.11, 0.07), uArch);
    vec3 sea = mix(shallowC, deepC, smoothstep(0., 700., depth));
    // Ice: the caps (on land and sea, a little further out on the sea), then all of it, a Snowball Earth.
    float edge = (nz - 0.5) * 7.;
    float capL = smoothstep(uCapLat - 2.5, uCapLat + 2.5, al + edge) + smoothstep(4200., 5500., h) * (1. - uMolten);
    float capS = smoothstep(uCapLat + 3., uCapLat + 8., al + edge);
    vec3 iceC = vec3(0.82, 0.86, 0.9);
    ground = mix(ground, iceC, clamp(capL, 0., 1.) * (1. - uToday));
    sea = mix(sea, iceC * 0.92, capS);
    vec3 surf = mix(ground, sea, wet);
    surf = mix(surf, mix(iceC, vec3(0.7, 0.8, 0.88), wet * 0.4) * (0.9 + 0.15 * nz), uSnow);
    // Lit.
    float ndl = max(0., dot(nb, uSun)), ndl0 = dot(n, uSun);
    col = surf * uSunCol * ndl;
    // The sun's glint on the sea.
    vec3 hv = normalize(uSun - rd);
    float fres = 0.04 + 0.96 * pow(1. - max(0., dot(n, -rd)), 5.);
    float spec = (pow(max(dot(n, hv), 0.), 1200.) * 0.7 + pow(max(dot(n, hv), 0.), 80.) * 0.025) * wet * (1. - uSnow) * (1. - capS) * (0.4 + fres);
    col += uSunCol * spec * step(0., ndl0) * (1. - uSteam);
    // Clouds (thicker in the steam at the start and the end), the orange haze between.
    // (Stretched east to west, as the winds blow them, and broken up.)
    vec3 ce = rotY(e, uTime * 0.004);
    vec3 cw = vec3(fbm(ce * 2.1 + 4.3, 3), fbm(ce * 2.1 + 9.1, 3), fbm(ce * 2.1 + 1.7, 3)) - 0.5;
    float cf = fbm(ce * vec3(2.4, 5.5, 2.4) + cw * 2.4 + vec3(0., uTime * 0.002, 0.), 6);
    float bands = 0.55 + 0.45 * cos(asin(clamp(e.y, -1., 1.)) * 6.);
    float fine = fbm(ce * vec3(9., 22., 9.) + cw * 3., 3);
    float c0 = 0.66 - uClouds * 0.32;
    float cloud = smoothstep(c0, c0 + 0.12, cf * 0.75 + fine * 0.35 + 0.1 * (bands - 0.5) - 0.07) * 0.85;
    // (Steam: thick, but broken; over molten rock, rock vapour, dim and lit from below.)
    cloud = max(cloud, uSteam * smoothstep(0.35, 0.8, cf + 0.15) * (1. - 0.5 * uMolten));
    vec3 cloudC = mix(mix(vec3(0.95), vec3(0.85, 0.78, 0.7), uHaze), vec3(0.32, 0.22, 0.18), smoothstep(0., 0.6, uMolten));
    col = mix(col, cloudC * uSunCol * (0.08 + 0.92 * max(0., ndl0)), cloud * 0.9);
    // (The haze: a tint over the middle of the disc, thick towards the edge, where you look through more of it.)
    float muH = max(0., dot(n, -rd));
    col = mix(col, vec3(0.62, 0.34, 0.13) * uSunCol * (0.12 + 0.88 * max(0., ndl0)), uHaze * (0.18 + 0.7 * pow(1. - muH, 2.)));
    // Molten: its own light, day and night.
    if (uMolten > 0.001) col = mix(col, vec3(0.03, 0.02, 0.018) * uSunCol * ndl, smoothstep(0., 0.3, uMolten) * (1. - cloud * 0.5)) + magma(e, uMolten, uTime) * (1. - cloud * 0.6 * (1. - uMolten));
    // Lights, on the night side, today (where people are: on land, away from ice and desert).
    if (uLights > 0.01) {
      float night = smoothstep(0.05, -0.15, ndl0);
      float town = smoothstep(0.56, 0.72, fbm(e * 30., 4)) * (0.4 + 0.6 * smoothstep(0.5, 0.75, fbm(e * 90., 3))) * (1. - wet) * (1. - capL) * (1. - dry * 0.7) * step(al, 64.);
      col += vec3(1.0, 0.6, 0.22) * town * night * uLights * 1.1;
    }
    // The air, seen edge on.
    float mu = max(0., dot(n, -rd));
    col += airCol * uAir * pow(1. - mu, 4.) * smoothstep(-0.25, 0.35, ndl0) * length(uSunCol) * 0.5;
    alpha = 1.;
  } else if (tMin < 1e8 && tMin == tM) {
    // ── The Moon, its near side to the Earth ──
    vec3 p = ro + rd * tM, n = normalize(p - uMoon.xyz);
    vec3 e1 = normalize(-uMoon.xyz), e2 = vec3(0, 1, 0), e3 = normalize(cross(e1, e2));
    e2 = cross(e3, e1);
    vec3 l = vec3(dot(n, e1), dot(n, e2), dot(n, e3));
    vec2 uv = uvOf(vec3(l.x, l.y, l.z));
    vec2 dx = dFdx(uv), dy = dFdy(uv);
    if (abs(dx.x) > 0.5) dx.x -= sign(dx.x);
    if (abs(dy.x) > 0.5) dy.x -= sign(dy.x);
    vec3 c = uHasMoonTex > 0.5 ? srgb(textureGrad(uMoonTex, uv, dx, dy).rgb) : vec3(0.18) * (0.8 + 0.4 * fbm(l * 6., 4));
    // (Before the seas of lava filled its basins, about 3.9 to 3.1 billion years ago, no dark seas.)
    float lum = dot(c, vec3(0.3, 0.6, 0.1));
    c = mix(c, vec3(max(lum, 0.16)) * vec3(1.02, 1., 0.97), (1. - uMare) * smoothstep(0.17, 0.07, lum));
    col = c * uSunCol * max(0., dot(n, uSun));
    if (uMoonHot > 0.001) col = mix(col, vec3(0.02) * uSunCol * max(0., dot(n, uSun)), smoothstep(0., 0.3, uMoonHot)) + magma(l * 1.6 + 3., uMoonHot, uTime) * 0.8;
    alpha = 1.;
  } else if (tMin < 1e8 && tMin == tT) {
    // ── Theia ──
    vec3 p = ro + rd * tT, n = normalize(p - uTheia.xyz);
    float nz = fbm(n * 5., 4);
    col = vec3(0.11, 0.095, 0.085) * (0.7 + 0.6 * nz) * uSunCol * max(0., dot(n, uSun)) + magma(n * 1.3 + 7., uTheiaHot, uTime);
    alpha = 1.;
  } else {
    // ── Space: the Sun, and the air's glow round the Earth's edge ──
    float ca = clamp(dot(rd, uSun), -1., 1.), ang = acos(ca);
    float disc = smoothstep(uSunR * 1.015, uSunR * 0.985, ang);
    float limb = sqrt(max(0., 1. - (ang / max(uSunR, 1e-4)) * (ang / max(uSunR, 1e-4))));
    // (A giant's face: great cells of rising gas, as Betelgeuse's are.)
    float cells = uSunR > 0.04 ? 0.55 + 0.9 * fbm(rd * (5. / uSunR) + uTime * 0.004, 4) : 1.;
    col += uSunDisc * disc * (0.35 + 0.65 * limb) * cells * 30.;
    col += uSunDisc * (exp(-max(0., ang - uSunR) / (0.012 + uSunR * 0.25)) * 0.6 + exp(-max(0., ang - uSunR) / 0.12) * 0.05) * (1. - disc);
  }
  // The air's glow beyond the edge (and over it), brightest towards the Sun, strongest from behind.
  float tc = -dot(ro, rd);
  if (tc > 0. && (tMin == tE || tc < tMin)) {
    vec3 c0 = ro + rd * tc;
    float dc = length(c0);
    if (dc > 0.98 && dc < 1.12 && tc < tMin + 1.) {
      float H = 0.018;
      float g = exp(-max(0., dc - 1.) / H) * smoothstep(0.98, 1.0, dc);
      float lit = smoothstep(-0.35, 0.3, dot(normalize(c0), uSun));
      float fwd = pow(max(0., dot(rd, uSun)), 6.) * 3.;
      col += airCol * uAir * g * (lit + fwd) * length(uSunCol) * 0.6 * (tE > 1e8 ? 1. : 0.35);
    }
  }
  // The seas' hydrogen streaming away as they boil off, about a billion years from now (19 October 2026; John: "we
  // don't seem to see the Earth lose its atmosphere"): sunlight splits the water high in the air, and its hydrogen
  // escapes into space, as Venus's did; here a pale glow round the Earth and a plume blown away from the Sun, streaked.
  // (Dramatised: the real glow is ultraviolet, unseen, and far fainter.)
  if (uEscape > 0.001) {
    vec3 ax = -uSun;
    float far = min(tMin < 1e8 ? tMin : 1e8, 46.), acc = 0.;
    float j = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    for (int i = 0; i < 36; i++) {
      float sd = (float(i) + j) / 36. * far;
      vec3 q = ro + rd * sd;
      float along = dot(q, ax), r = length(q);
      if (r < 1.) continue;
      vec3 perp = q - ax * along;
      float rp = length(perp), w = 0.75 + 0.11 * max(along, 0.);
      // (Round the Earth, a halo; downwind, the plume, widening and fading with distance, in streaks that stream away.)
      float halo = exp(-(r - 1.) / 0.3) * 0.7;
      float plume = exp(-rp * rp / (w * w)) * exp(-max(along, 0.) / 12.) * smoothstep(-0.3, 1.6, along);
      float ang = atan(dot(perp, normalize(cross(ax, vec3(0., 1., 0.0001)))), perp.y);
      float fb = fbm(vec3(ang * 2.6, rp * 1.1, along * 0.16 - uTime * 0.08), 3), streak = 0.15 + 2.2 * fb * fb;
      acc += (halo + plume * streak) * far / 36.;
    }
    col += vec3(0.5, 0.68, 1.0) * acc * uEscape * 0.05 * length(uSunCol);
  }
  o = vec4(col, alpha);
}
`,Ce=`#version 300 es
precision highp float;
in vec4 aSeed;
uniform mat4 uVP;
uniform vec3 uEye;
uniform float uP, uTime, uPx, uDev;
uniform vec3 uHit, uOut, uMoonC;
out vec3 vCol;
out float vS;
float sm(float a, float b, float x) { return smoothstep(a, b, x); }
void main() {
  float a = aSeed.x, b = aSeed.y, c = aSeed.z, d = aSeed.w;
  // Thrown out from the impact, in a fan.
  vec3 side = normalize(cross(uOut, vec3(0., 1., 0.)) + 1e-4), up = cross(side, uOut);
  vec3 dir = normalize(uOut * (0.6 + 0.8 * a) + side * (b - 0.5) * 1.6 + up * (c - 0.5) * 0.7);
  float s = max(0., uP - 0.45);
  vec3 thrown = uHit + dir * s * (6. + 10. * d);
  // The ring.
  float r = 1.25 + 4.2 * pow(a, 1.4);
  float phi = b * 6.2832 + uTime * 0.9 / pow(r, 1.5);
  vec3 ring = vec3(r * cos(phi), (c - 0.5) * 0.08 * r, r * sin(phi));
  vec3 pos = mix(thrown, ring, sm(0.48 + 0.06 * d, 0.66 + 0.06 * d, uP));
  // Gathered into the Moon (the outer grains, drawn along the ring to where it clumps), or fallen back (the inner).
  float gone = sm(0.78 + 0.1 * a, 0.97, uP);
  if (a > 0.35) {
    float rM = length(uMoonC.xz), phM = atan(uMoonC.z, uMoonC.x);
    float dph = phM - phi;
    dph = dph - 6.2832 * floor((dph + 3.1416) / 6.2832);
    float r2 = mix(r, rM, gone), ph2 = phi + dph * pow(gone, 1.6);
    vec3 spiral = vec3(r2 * cos(ph2), (c - 0.5) * 0.08 * r2 * (1. - gone), r2 * sin(ph2));
    pos = mix(pos, spiral, sm(0.78, 0.82, uP));
  } else pos = mix(pos, ring * (1. / r) * mix(r, 1.02, gone), sm(0.78, 0.82, uP));
  float hot = 1. - sm(0.45, 1.0, uP);
  vCol = mix(vec3(0.5, 0.1, 0.015), vec3(1.0, 0.5, 0.16), hot * hot) * (0.5 + 0.8 * d) * (1. - gone * (a > 0.35 ? 0.9 : 1.)) * sm(0.45, 0.47, uP) * (1. - sm(0.97, 1., uP));
  // (Hidden behind the Earth.)
  vec3 rd = pos - uEye;
  float L = length(rd);
  rd /= L;
  float bb = dot(uEye, rd), h = bb * bb - (dot(uEye, uEye) - 1.);
  float behind = (h > 0. && -bb - sqrt(h) < L && -bb - sqrt(h) > 0.) ? 0. : 1.;
  gl_Position = uVP * vec4(pos, 1.);
  float size = (0.025 + 0.035 * c) * uPx / max(0.1, gl_Position.w);
  vS = clamp(size, 1.5 * uDev, 40. * uDev);
  vCol *= behind * min(1., size * size / (vS * vS) + 0.15);
  gl_PointSize = behind > 0. ? vS : 0.;
}
`,we=`#version 300 es
precision highp float;
in vec3 vCol;
in float vS;
out vec4 o;
void main() {
  vec2 q = gl_PointCoord * 2. - 1.;
  float r2 = dot(q, q);
  if (r2 > 1.) discard;
  float f = exp(-r2 * 3.);
  o = vec4(vCol * f, 0.);
}
`,W=`#version 300 es
precision highp float;
in vec3 aPos;
in vec3 aCol;
in vec2 aSize; // size (pixels), kind (0 glow, 1 pin, 2 hollow pin)
uniform mat4 uVP;
uniform vec3 uEye;
uniform float uDev;
out vec3 vCol;
out float vKind;
void main() {
  vec3 rd = aPos - uEye;
  float L = length(rd);
  rd /= L;
  // (Behind the Earth if the ray to it meets a sphere a little inside the surface first.)
  float bb = dot(uEye, rd), h = bb * bb - (dot(uEye, uEye) - 0.985);
  float t0 = -bb - sqrt(max(h, 0.));
  float behind = aSize.y > 0.5 && h > 0. && t0 > 0. && t0 < L ? 1. : 0.;
  gl_Position = uVP * vec4(aPos, 1.);
  gl_PointSize = behind > 0.5 ? 0. : aSize.x * uDev;
  vCol = aCol;
  vKind = aSize.y;
}
`,Te=`#version 300 es
precision highp float;
in vec3 vCol;
in float vKind;
out vec4 o;
void main() {
  vec2 q = gl_PointCoord * 2. - 1.;
  float r = length(q);
  if (r > 1.) discard;
  if (vKind < 0.5) { float f = exp(-r * r * 4.); o = vec4(vCol * f, 0.); return; }
  float ring = smoothstep(0.62, 0.72, r) * smoothstep(1.0, 0.88, r);
  float dot0 = vKind < 1.5 ? smoothstep(0.34, 0.24, r) : 0.;
  o = vec4(vCol * max(ring, dot0), max(ring, dot0) * 0.9);
}
`;function Ee(e,t){let n=u(e,r,Se),i=u(e,Ce,we,[`aSeed`]),a=u(e,W,Te,[`aPos`,`aCol`,`aSize`]),o=e.createVertexArray(),s=new Float32Array(t*4),c=12345,l=()=>(c=c*16807%2147483647,c/2147483647);for(let e=0;e<s.length;e++)s[e]=l();let d=e.createVertexArray(),f=e.createBuffer();e.bindVertexArray(d),e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,4,e.FLOAT,!1,16,0);let p=e.createVertexArray(),m=e.createBuffer();e.bindVertexArray(p),e.bindBuffer(e.ARRAY_BUFFER,m),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,32,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,32,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,32,24),e.bindVertexArray(null);let h=(()=>{let t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([20,20,20,255])),t})(),g=null,_=null,v=t=>{let n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n},y=(t,n,r,i)=>{e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,i??h),e.uniform1i(r.u(n),t)};return{setColour(e){g=v(e)},setMoon(e){_=v(e)},draw(r,s){e.disable(e.DEPTH_TEST),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.useProgram(n.p),e.bindVertexArray(o);let c=n.u;e.uniform3fv(c(`uEye`),r.eye),e.uniform3fv(c(`uRight`),r.right),e.uniform3fv(c(`uUp`),r.up),e.uniform3fv(c(`uFwd`),r.fwd),e.uniform1f(c(`uTan`),r.tanHalf),e.uniform1f(c(`uAspect`),s.aspect),e.uniform1f(c(`uShift`),s.shift),y(0,`uMapA`,n,s.mapA),y(1,`uMapB`,n,s.mapB),y(2,`uColour`,n,g),y(3,`uMoonTex`,n,_),e.uniform1f(c(`uHasColour`),+!!g),e.uniform1f(c(`uHasMoonTex`),+!!_);for(let[t,n]of[[`uMix`,s.mix],[`uProc`,s.mapA?s.proc:1],[`uLandAt`,s.landAt],[`uDrift`,s.drift],[`uSpin`,s.spin],[`uTime`,s.time],[`uSunR`,s.sunR],[`uMolten`,s.molten],[`uSeaLvl`,s.seaLvl],[`uSteam`,s.steam],[`uHaze`,s.haze],[`uGreen`,s.green],[`uAir`,s.air],[`uLights`,s.lights],[`uSnow`,s.snow],[`uCapLat`,s.capLat],[`uRed`,s.red],[`uArch`,s.arch],[`uClouds`,s.clouds],[`uToday`,s.today],[`uMoonHot`,s.moonHot],[`uMare`,s.mare],[`uTheiaHot`,s.theiaHot],[`uEscape`,s.escape??0]])e.uniform1f(c(t),n);if(e.uniform3fv(c(`uSun`),s.sun),e.uniform3fv(c(`uSunCol`),s.sunCol),e.uniform3fv(c(`uSunDisc`),s.sunDisc),e.uniform4fv(c(`uMoon`),s.moon),e.uniform4fv(c(`uTheia`),s.theia),e.drawArrays(e.TRIANGLES,0,3),e.activeTexture(e.TEXTURE0),e.blendFunc(e.ONE,e.ONE),s.impact&&s.impact.p>.45&&s.impact.p<1&&(e.useProgram(i.p),e.uniformMatrix4fv(i.u(`uVP`),!1,r.viewProj),e.uniform3fv(i.u(`uEye`),r.eye),e.uniform1f(i.u(`uP`),s.impact.p),e.uniform1f(i.u(`uTime`),s.time),e.uniform1f(i.u(`uPx`),s.px),e.uniform1f(i.u(`uDev`),s.dev),e.uniform3fv(i.u(`uHit`),s.impact.hit),e.uniform3fv(i.u(`uOut`),s.impact.out),e.uniform3fv(i.u(`uMoonC`),s.impact.moon),e.bindVertexArray(d),e.drawArrays(e.POINTS,0,t)),s.marks.length){let t=new Float32Array(s.marks.length*8);s.marks.forEach((e,n)=>t.set([...e.pos,...e.col,e.size,e.kind],n*8)),e.useProgram(a.p),e.uniformMatrix4fv(a.u(`uVP`),!1,r.viewProj),e.uniform3fv(a.u(`uEye`),r.eye),e.uniform1f(a.u(`uDev`),s.dev),e.bindVertexArray(p),e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,t,e.DYNAMIC_DRAW),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.POINTS,0,s.marks.length)}e.bindVertexArray(null),e.disable(e.BLEND)}}}var De=[`Impact`,`Magma`,`Rain`,`Orange sky`,`Oxygen`,`Gathering`,`Snowball`,`Green`,`Drift`,`Now`,`Ahead`,`Seas go`,`Air goes`,`Last light`,`Yours`],Oe=[48,28.5,24.5,34.5,38,30.5,32,30,45.5,9.5,10.5,23.5,25,35,1],ke=[[0,.5,4530],[0,20.8,4521.6],[0,26.5,4520],[0,37.7,4514.5],[0,47.4,4510],[1,0,4510],[1,12.2,4480],[1,27.8,4442],[2,0,4442],[2,11.8,4405],[2,23.7,4380],[3,0,4380],[3,13.8,3700],[3,23.7,3100],[3,33.9,2600],[4,0,2600],[4,11.3,2440],[4,15.8,2405],[4,25.8,2340],[4,30,2300],[4,37.1,2190],[5,0,2190],[5,15.2,1120],[5,18,1080],[5,22.7,1e3],[6,.5,1e3],[6,10,740],[6,14.2,708],[6,20.6,685],[6,24.5,672],[6,27.9,645],[6,30.1,638],[7,.5,630],[7,13.1,520],[7,14.5,490],[7,17.6,420],[7,21,400],[7,29.4,270],[8,.5,260],[8,7.2,190],[8,8.5,180],[8,11.4,166],[8,17,166],[8,30.1,70],[8,31.5,67],[8,33,66],[8,37.5,64],[8,44.9,0],[9,.5,0],[10,.5,0],[10,8.1,-250],[11,.5,-250],[11,6.7,-700],[11,15.9,-1150],[11,23,-1400],[12,.5,-1450],[12,11.4,-1900],[12,15.5,-2e3],[12,22.1,-3600],[13,.5,-3800],[13,8.2,-5600],[13,24.5,-7450],[13,32.2,-7590]],G={0:[[.5,`big`,`THE VAN RUNS THIS FIRST TOUR`,`THE VAN STAYS IN ORBIT. THE LEVER RUNS THE EARTH’S STORY. THEN IT’S YOURS`],[11.5,`flash`,`THEIA, CLOSING`,`A WORLD THE SIZE OF MARS`],[21.3,`alert`,`IMPACT`,`4.51 BILLION YEARS AGO`],[26.5,``,`A RING OF MOLTEN ROCK`,`MOST FALLS BACK. THE REST GATHERS`],[44.9,`go`,`THE MOON IS MADE`,`RECONSTRUCTED. CONFIDENCE: MEDIUM`]],1:[[.5,``,`MOLTEN`,`A SEA OF GLOWING ROCK, THE MOON CLOSE AND HUGE`]],2:[[.5,``,`RAIN`,`FOR THOUSANDS OF YEARS. THE FIRST SEAS`],[15.1,``,`THE OLDEST CRYSTALS`,`4.4 BILLION YEARS AGO: WATER`]],3:[[.5,``,`A FAINT SUN`,`SEVENTY PER CENT AS BRIGHT. THE SEAS DON’T FREEZE`],[25,``,`NO MAP SURVIVES`,`THE LAND: AS MUCH AS THERE WAS, NOT WHERE`]],4:[[.5,`go`,`OXYGEN`,`MADE BY MICROBES. THE LAND RUSTS`],[17.8,`flash`,`SNOWBALL EARTH`,`ICE TO THE EQUATOR`]],5:[[.5,``,`THE LAND GATHERS`,`COLUMBIA, THEN RODINIA`],[22.7,`go`,`THE FIRST MAPS`,`A BILLION YEARS AGO. CONFIDENCE: LOW`]],6:[[.5,``,`RODINIA TEARS`,`THE SUPERCONTINENT BREAKS`],[14.2,`flash`,`SNOWBALL EARTH`,`FROZEN OVER, TWICE`]],7:[[4.3,``,`THE CAMBRIAN`,`ANIMALS WITH SHELLS AND EYES`],[14.5,`go`,`GREEN`,`PLANTS SPREAD OVER THE LAND`],[23.5,``,`PANGAEA`,`ALL THE LAND IN ONE`]],8:[[.5,``,`DRIFT`,`THE AMBER PINS: TEIDE AND OXFORDSHIRE`],[11.4,``,`MEGALOSAURUS`,`166 MILLION YEARS AGO: OXFORDSHIRE AS FAR SOUTH AS MADRID`],[17,``,`THE ATLANTIC OPENS`,`AS FAST AS FINGERNAILS GROW`],[33,`alert`,`THE ASTEROID`,`66 MILLION YEARS AGO`],[39.7,``,`THE MAP WE KNOW`,`THE MAMMALS SPREAD. THE HIMALAYAS RISE`]],9:[[.5,`big`,`NOW`,`CITY LIGHTS ON THE NIGHT SIDE`]],10:[[.5,``,`AHEAD`,`THE LAND GATHERS AGAIN. SPECULATION`]],11:[[9,`flash`,`THE OCEANS GO`,`THE SUN TOO BRIGHT. THE SEAS STEAM AWAY`]],12:[[3.8,`flash`,`THE AIR GOES`,`THE SEAS’ HYDROGEN, STREAMING INTO SPACE`],[17.5,``,`DRY`,`A HOT DESERT WORLD, ITS AIR THINNING`]],13:[[4.3,`alert`,`THE LAST LIGHT`,`THE SUN A RED GIANT. THE ROCK MELTS AGAIN`]],14:[[.5,``,`THE LEVER IS YOURS`,`DRAG IT, OR PRESS PLAY. TAP THE GLOBE TO DROP A PIN`]]},Ae=[{d:11,pitch:.32,round:.9},{d:9,pitch:.28,round:.9},{d:5.2,pitch:.22,round:.7},{d:4.8,pitch:.25,round:.6},{d:4.8,pitch:.45,round:.6},{d:4.8,pitch:.25,round:.6,face:120},{d:4.9,pitch:.5,round:.55,face:170},{d:4.8,pitch:.3,round:.55,face:10},{d:4.7,pitch:.42,round:.55,face:15},{d:4.6,pitch:.4,round:1.45,face:10},{d:4.8,pitch:.35,round:.6,face:20},{d:4.8,pitch:.3,round:.8},{d:7.5,pitch:.18,round:1.75},{d:5.5,pitch:.1,round:2.92},{d:4.8,pitch:.3,round:.6}];function je(e,t){let n=G[e]??[],r={line:De[e]?.toUpperCase()??``,detail:``};for(let[e,i,a,o]of n)t>=e&&(r={line:a,detail:o,...i?{kind:i}:{}});return e===0&&t<6?r={...r,kind:`big`}:e===0&&r.kind===`big`&&(r={line:`THEIA, CLOSING`,detail:`A WORLD THE SIZE OF MARS`,kind:`flash`}),r}function Me(e,t){if(t)return t;let n=ce(e);return{line:`${n.grade}. ${n.how}`,detail:`DRAG THE LEVER, OR TAP THE GLOBE TO DROP A PIN`}}var Ne=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},Pe=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],K=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},q=Math.PI/180,Fe=(e,t,n,r=1)=>{let i=[Math.cos(e*q)*Math.cos(t*q),Math.sin(e*q),-Math.cos(e*q)*Math.sin(t*q)],a=Math.cos(n),o=Math.sin(n);return[(a*i[0]+o*i[2])*r,i[1]*r,(-o*i[0]+a*i[2])*r]},Ie=Ne([.9,.12,.6]),Le=Math.atan2(Ie[0],Ie[2]),J=Ne([-.95,.15,.28]),Re=Ne(Pe([0,1,0],J)),ze=Ne([J[0]+Re[0]*.9,J[1]*.3,J[2]+Re[2]*.9]);function Be(){let e=(e,t,n)=>{let r=(e*.3183099+.1)%1,i=(t*.3183099+.2)%1,a=(n*.3183099+.3)%1;r<0&&(r+=1),i<0&&(i+=1),a<0&&(a+=1),r*=17,i*=17,a*=17;let o=r*i*a*(r+i+a);return o-Math.floor(o)},t=(t,n,r)=>{let i=Math.floor(t),a=Math.floor(n),o=Math.floor(r),s=t-i,c=n-a,l=r-o;s=s*s*(3-2*s),c=c*c*(3-2*c),l=l*l*(3-2*l);let u=(e,t,n)=>e+(t-e)*n,d=(t,n,r)=>e(i+t,a+n,o+r);return u(u(u(d(0,0,0),d(1,0,0),s),u(d(0,1,0),d(1,1,0),s),c),u(u(d(0,0,1),d(1,0,1),s),u(d(0,1,1),d(1,1,1),s),c),l)},n=(e,n,r)=>{let i=0,a=.5;for(let o=0;o<5;o++)i+=a*t(e,n,r),e=e*2.03+1.7,n=n*2.03+9.2,r=r*2.03+3.1,a*=.5;return i},r=[],i=99,a=()=>(i=i*16807%2147483647,i/2147483647);for(let e=0;e<6e3;e++){let e=a()*2-1,t=a()*6.2832,i=Math.sqrt(1-e*e);r.push(n(i*Math.cos(t)*2.6+a()*3,e*2.6,i*Math.sin(t)*2.6))}return r.sort((e,t)=>e-t),e=>r[Math.min(r.length-1,Math.max(0,Math.floor((1-e)*r.length)))]}function Ve(e){let t=e/100,n=t<=66?1:Math.min(1,1.2929*(t-60)**-.1332),r=t<=66?Math.min(1,Math.max(0,.3901*Math.log(t)-.6318)):Math.min(1,1.1299*(t-60)**-.0755),i=t>=66?1:t<=19?0:Math.min(1,Math.max(0,.5432*Math.log(t-10)-1.1963));return[n**2.2,r**2.2,i**2.2]}function He(e,t,n){let r=n**1.5,i=K(.4,.06,n);return[e[0]/t*r,e[1]/t*r*(1-.35*i),e[2]/t*r*(1-.5*i)]}function Ue(){let r=c(`sim-canvas`),i=c(`sim`).dataset.deep??``,u=new URLSearchParams(location.search).has(`large`)||Math.max(screen.width,screen.height)*Math.min(window.devicePixelRatio||1,2)>=1800,g=matchMedia(`(pointer: coarse)`).matches&&!u,_={mode:`launch`,playing:!1,at:0,ch:0,yaw:Le-.9,pitch:.3,clock:0,run:!1},v=0,b=0,C=0,w=11,E=11,D=0,A=-1,j=!0,M=null,N=null,P=null,F=null,I=null,L=null,R=null,me=e=>.6+0*e,he=0,z=null,B=[{name:`Teide`,lat:28.272,lon:-16.642,preset:!0,born:12},{name:`Oxfordshire`,lat:51.86,lon:-1.43,preset:!0}],V=!1,ge=a(c(`sim`).dataset.narration??``,{time:()=>_.at,active:()=>_.mode===`guided`||V,playing:()=>_.playing,ended:()=>V,paused:()=>!_.playing}),H=[{id:`overview`,name:`Overview`},{id:`story`,name:`The story`},{id:`map`,name:`The map`}],U=n(JSON.parse(c(`sim`).dataset.cues||`null`)),_e=e=>e===null?H[0].id:H.find(t=>t.name.toLowerCase()===e.toLowerCase())?.id??null;for(let e of U.views)_e(e)||console.warn(`narration: the cue sheet shows the view "${e}", which this simulator doesn't have`);let be=!1;function Se(){if(_.mode!==`guided`&&!V||be)return;let e=_e(U.viewAt(_.at));e&&e!==W.view&&W.setView(e)}let Ce=t(`Now (T)`,e(`<circle cx="8" cy="8" r="5.6" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 4.6V8l2.4 1.6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`),()=>{X(),b=O,_.run=!1}),we=t(`Show or hide the pins (P)`,e(`<path d="M8 14.5s-4.2-4.3-4.2-7.4a4.2 4.2 0 0 1 8.4 0c0 3.1-4.2 7.4-4.2 7.4z" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="7.1" r="1.5" fill="currentColor"/>`),()=>{j=!j}),W=o({playing:()=>_.mode===`free`?_.run:_.playing,toggle:()=>{_.mode!==`launch`&&(_.mode===`free`?(_.run=!_.run,_.playing=!0,_.run&&b>=.999&&(b=0)):_.playing=!_.playing,W.setPlay(),W.raiseLcd(2e3))},again:()=>{_.mode!==`launch`&&Ze()},againTitle:`Run the guided tour again (R)`,views:H,onView:(e,t)=>{t&&_.mode!==`launch`&&(be=!0)},keys:[ge.button,Ce,we],busy:()=>!!Z||G.dragging,onKey:(e,t)=>_.mode===`launch`?!1:e===`t`?(X(),b=O,_.run=!1,!0):e===`p`?(j=!j,!0):e===`n`?(ge.toggle(),!0):t.key===`ArrowUp`||t.key===`+`||t.key===`=`?(t.preventDefault(),X(),b=Math.min(1,b+.005),!0):t.key===`ArrowDown`||t.key===`-`||t.key===`_`?(t.preventDefault(),X(),b=Math.max(0,b-.005),!0):t.key===`ArrowLeft`?(_.yaw-=.06,!0):t.key===`ArrowRight`&&(_.yaw+=.06,!0)}),Te=[[4530,`Impact`],[4e3,`−4 bn`],[2e3,`−2 bn`],[1e3,`−1 bn`],[540,`−540 m`,!0],[0,`Now`],[-250,`+250 m`,!0],[-2e3,`+2 bn`],[x,`+7.6 bn`]],G=l(c(`tl-lever`),{label:`Time`,value:b,step:.005,ticks:Te.map(([e,t,n])=>({at:k(e),text:t,minor:n})),words:e=>{let t=ue(e);if(t>4510)return`The impact`;let n=le(t);return`${n.n} ${n.unit}`.trim()},onChange:e=>{X(),b=Math.abs(e-.62)<.006?O:e,_.run=!1}}),Pe=s(c(`sim-tl`),De,e=>{_.mode!==`launch`&&(_.mode===`free`&&Ze(),Qe(e))}),Ue=e=>Oe.slice(0,e).reduce((e,t)=>e+t,0),We=Oe.slice(0,-1).reduce((e,t)=>e+t,0),Ge=c(`sim-inst`).querySelector(`.hp-body`),Ke=[`when`,`age`,`day`,`moon`,`oxygen`,`sun`,`life`,`sure`];Ge.innerHTML=Ke.map(e=>`<div class="hp-row" data-row="${e}"><span class="hp-k"></span><span class="hp-v"><b></b><small></small></span></div>`).join(``);let qe=Object.fromEntries(Ke.map(e=>{let t=Ge.querySelector(`[data-row="${e}"]`);return[e,{k:t.querySelector(`.hp-k`),v:t.querySelector(`b`),sm:t.querySelector(`small`)}]})),Je=(e,t)=>{e.textContent!==t&&(e.textContent=t)},Y=(e,t,n,r=``)=>{Je(qe[e].k,t),Je(qe[e].v,n),Je(qe[e].sm,r)},Ye=fe(c(`dt-hist-canvas`),k),Xe=pe(c(`sim-st-canvas`));function Ze(){_.mode=`guided`,_.playing=!0,_.at=0,_.ch=-1,_.run=!1,V=!1,W.setPlay(),Qe(0)}function Qe(e){_.at=Ue(e)+.001,_.ch=e,W.raiseLcd(),e===De.length-1?(et(),V=!0):(b=$e(e,0),C=b);let t=Ae[e]?.face;if(t===void 0)M=null;else{let n=Le-Ae[e].round;M=Math.atan2(-Math.cos(n),Math.sin(n))-t*q}}function $e(e,t){let n=ke.filter(t=>t[0]===e);if(!n.length)return b;if(t<=n[0][1])return k(n[0][2]);for(let e=1;e<n.length;e++)if(t<=n[e][1]){let r=(t-n[e-1][1])/(n[e][1]-n[e-1][1]),i=r*r*(3-2*r);return k(n[e-1][2])+(k(n[e][2])-k(n[e-1][2]))*i}return k(n[n.length-1][2])}function et(){_.mode=`free`,_.ch=-1,_.run=!1,M=null,b=O,G.lock(!1)}function X(){_.mode===`guided`&&(_.mode=`free`,_.ch=-1,G.lock(!1)),V=!1,!_.playing&&_.mode!==`launch`&&(_.playing=!0,W.setPlay())}let Z=null,tt=0,nt=e=>Math.max(-1.45,Math.min(1.45,e));r.addEventListener(`pointerdown`,e=>{Z={x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY,t0:performance.now()},r.setPointerCapture(e.pointerId)}),r.addEventListener(`pointermove`,e=>{Z&&(_.yaw-=(e.clientX-Z.x)*.005,_.pitch=nt(_.pitch+(e.clientY-Z.y)*.004),Z.x=e.clientX,Z.y=e.clientY,tt=0)}),r.addEventListener(`pointerup`,e=>{Z&&Math.hypot(e.clientX-Z.x0,e.clientY-Z.y0)<6&&performance.now()-Z.t0<450&&at(e.clientX,e.clientY),Z=null}),r.addEventListener(`wheel`,e=>{e.preventDefault(),w=Math.max(1.7,Math.min(120,w*Math.exp(e.deltaY*.0015))),_.mode===`guided`&&X()},{passive:!1});let Q=null;W.ballEl.addEventListener(`pointerdown`,e=>{Q={x:e.clientX,y:e.clientY},W.ballEl.setPointerCapture(e.pointerId)}),W.ballEl.addEventListener(`pointermove`,e=>{Q&&(_.yaw-=(e.clientX-Q.x)*.02,_.pitch=nt(_.pitch+(e.clientY-Q.y)*.015),Q={x:e.clientX,y:e.clientY},tt=0)}),W.ballEl.addEventListener(`pointerup`,()=>{Q=null});let $=null,rt=0,it=(e,t,n=`flash`)=>{z={line:{line:e,detail:t,kind:n},until:performance.now()+4e3}};function at(e,t){if(!$||_.mode===`launch`)return;let n=r.getBoundingClientRect(),i=n.width/Math.max(1,n.height),a=(e-n.left)/n.width*2-1,o=1-(t-n.top)/n.height*2,s=Ne([0,1,2].map(e=>$.fwd[e]+$.right[e]*a*$.tanHalf*i+$.up[e]*(o-v)*$.tanHalf));for(let e=B.length-1;e>=0;e--){let t=B[e];if(t.preset)continue;let r=ot(t,rt);if(!r)continue;let s=Fe(r.at[0],r.at[1],D,1.004),c=[s[0]-$.eye[0],s[1]-$.eye[1],s[2]-$.eye[2]],l=c[0]*$.fwd[0]+c[1]*$.fwd[1]+c[2]*$.fwd[2];if(l<=0)continue;let u=(c[0]*$.right[0]+c[1]*$.right[1]+c[2]*$.right[2])/(l*$.tanHalf*i),d=(c[0]*$.up[0]+c[1]*$.up[1]+c[2]*$.up[2])/(l*$.tanHalf)+v;if(Math.hypot((u-a)*n.width/2,(d-o)*n.height/2)<14){B.splice(e,1),X(),it(`PIN LIFTED`,t.name.toUpperCase());return}}let c=$.eye,l=c[0]*s[0]+c[1]*s[1]+c[2]*s[2],u=l*l-(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]-1);if(u<0)return;let d=-l-Math.sqrt(u),f=Ne([c[0]+s[0]*d,c[1]+s[1]*d,c[2]+s[2]*d]),p=Math.cos(-D),m=Math.sin(-D),h=[p*f[0]+m*f[2],f[1],-m*f[0]+p*f[2]],g=Math.asin(h[1])/q,y=Math.atan2(-h[2],h[0])/q;X();let b=rt,x=null;if(Math.abs(b)<.01)x=[g,y];else if(b>540){it(`NO PIN THERE`,`THE PLATES TAKE A PLACE BACK 540 MILLION YEARS. TRY LATER`);return}else if(b<-250){it(`NO PIN THERE`,`THE PLATES’ FUTURE ENDS 250 MILLION YEARS AHEAD`);return}else x=R?.under(g,y,b)??null;if(!x){it(`NO PIN THERE`,`THAT GROUND ISN’T ON TODAY’S MAP`);return}let ee=`${Math.abs(Math.round(x[0]))}°${x[0]>=0?`N`:`S`} ${Math.abs(Math.round(x[1]))}°${x[1]>=0?`E`:`W`}`,te=B.filter(e=>!e.preset);te.length>=4&&B.splice(B.indexOf(te[0]),1),B.push({name:ee,lat:x[0],lon:x[1]}),it(`PIN DROPPED`,`${ee}, WHERE IT IS TODAY`,`go`)}function ot(e,t){if(!R||t>1e3||t<-260)return null;let n=Math.max(-250,t),r=R.where(e.lat,e.lon,n);return r?{at:r,hollow:e.born!==void 0&&t>e.born}:null}let st=performance.now(),ct=0,lt=e=>{if(he=requestAnimationFrame(lt),!N||!P||!F)return;let t=Math.min(.1,(e-st)/1e3);if(st=e,_.playing&&_.mode!==`launch`){if(_.clock+=t,_.mode===`guided`){_.at+=t;let e=0;for(;e<Oe.length-1&&_.at>=Ue(e+1);)e++;if(e!==_.ch&&Qe(e),_.mode===`guided`){b=$e(_.ch,_.at-Ue(_.ch));let e=Ae[_.ch],n=1-Math.exp(-t/1.6);w+=(e.d-w)*n,_.pitch+=(e.pitch-_.pitch)*n;let r=Le-e.round-_.yaw;if(r=Math.atan2(Math.sin(r),Math.cos(r)),_.yaw+=r*n,M!==null){M+=2*Math.PI/120*t;let e=Math.atan2(Math.sin(M-D),Math.cos(M-D));D+=e*(1-Math.exp(-t/1.4))}}}else _.run&&(b=Math.min(1,b+t*(b<.05?.0018:.0045)),b>=1&&(_.run=!1));tt+=t,_.mode===`free`&&!Z&&!Q&&tt>3&&(_.yaw+=t*.01)}let n=C;C+=(b-C)*(1-Math.exp(-t/(_.mode===`guided`?.05:.3))),Math.abs(b-C)<1e-5&&(C=b);let i=ue(C);rt=i;let a=Math.min(i,y),o=de(i),s=ne(a);_.playing&&((_.mode!==`guided`||M===null)&&(D+=2*Math.PI/40*t*(24/s)*(o<1?.35:1)),A+=t*.02*(25/re(a))**1.5*(o<1?0:1)),E+=(w-E)*(1-Math.exp(-t/.4));let l=r.clientWidth/Math.max(1,r.clientHeight);{let e=c(`sim-lcd`).getBoundingClientRect(),n=r.getBoundingClientRect(),i=W.lcdUp()&&e.height>0?Math.max(0,n.bottom-e.top)/Math.max(1,n.height):.03;v+=(i-v)*(1-Math.exp(-t/.35))}let u=Math.max(1,Math.min(2.2,1.2/Math.max(.2,l)));$=d({centre:[0,0,0],yaw:_.yaw,pitch:_.pitch,dist:E*u*(1+v*.9),fovY:.62,aspect:l,near:.01,far:2e3,shiftY:v*.8});let{w:f,h:p}=F.begin([0,0,0]),m=p/Math.max(1,r.clientHeight),x=p/(2*$.tanHalf);I&&I.draw($,{aspect:l,shift:v*.8,w:f,h:p,dev:m},{gain:.0025,starGain:.3,limit:6.5});let S=ae(a),se=ie(a),T=i<0?h(-i/1e3):null,ce=T?5772*(T.L/(T.R*T.R))**.25:5772,le=ee(a),O=Ve(ce),k=Math.max(O[0],O[1],O[2]),fe=le>=1?1+.35*Math.log10(le):Math.sqrt(le),pe=T?Math.max(.05,T.L/(T.R*T.R)):1,R=[O[0]/k*fe*1.25,O[1]/k*fe*1.25,O[2]/k*fe*1.25],z=S.molten;i>4510&&(z=.3+.7*K(.46,.6,o));let V=L&&i<=1080?L.at(Math.max(L.last,Math.min(L.first,i)),C-n):null,H=re(a)/6.371,U=[H*Math.cos(A),0,H*Math.sin(A)],_e=.273*(o<1?K(.86,1,o):1),ve=[0,0,0,0];if(o<.52){let e=Math.max(0,(.46-o)/.46),t=K(.45,.52,o),n=[J[0]*1.48-Re[0]*e*16-J[0]*e*2,J[1]*1.48+e*1.5,J[2]*1.48-Re[2]*e*16-J[2]*e*2];ve=[n[0]-(n[0]-J[0])*t*.6,n[1]-(n[1]-J[1])*t*.6,n[2]-(n[2]-J[2])*t*.6,.53*(1-t)]}let ye=[];if(o>.44&&o<.7){let e=K(.44,.46,o)*(1-K(.47,.56,o));ye.push({pos:[J[0]*1.05,J[1]*1.05,J[2]*1.05],col:[3.2*e,2*e,1.1*e],size:60+150*K(.44,.5,o),kind:0})}let be=[];if(j)for(let e of B){let t=ot(e,i);be.push({name:e.name,at:t?.at??null,hollow:!!t?.hollow}),t&&ye.push({pos:Fe(t.at[0],t.at[1],D,1.004),col:[2.4,1.5,.55],size:g?15:13,kind:t.hollow?2:1})}P.draw($,{aspect:l,shift:v*.8,px:x,dev:m,mapA:V?.a??null,mapB:V?.b??null,mix:V?.mix??0,proc:K(1e3,1080,i),landAt:me(oe(a)),drift:a*45e-5,spin:D,time:_.clock,sun:Ie,sunCol:R,sunDisc:He(O,k,pe),sunR:.00465*(te(a)+3),molten:z,seaLvl:-8500*(1-S.oceans),steam:S.steam,haze:S.haze,green:S.green,air:S.air*(i>4510?.4:1)*(1-.6*K(-6e3,-7500,a)),lights:+(Math.abs(i)<5e-4),snow:se.snowball,capLat:90-se.caps*100,red:K(2450,2200,a),arch:K(4100,3800,a)*(1-K(2300,1800,a)),clouds:.42+.25*K(-700,-1300,a)*(1-K(-1500,-1900,a))-.42*K(-1700,-2200,a),today:1-K(0,4,Math.abs(i)),moon:[U[0],U[1],U[2],_e],moonHot:a>=4400?K(4400,4500,a):0,mare:K(3900,3100,a),theia:ve,theiaHot:.15+.85*K(.44,.5,o),escape:K(-850,-1250,i)*(1-K(-2e3,-2700,i)),impact:o>.45&&o<1?{p:o,hit:J,out:ze,moon:[H*Math.cos(A),0,H*Math.sin(A)]}:null,marks:ye}),F.finish(1,.5),W.ball.draw({right:$.right,up:$.up,fwd:$.fwd,hole:[-$.eye[0]/E,-$.eye[1]/E,-$.eye[2]/E],tanY:$.tanHalf,tanX:$.tanHalf*l},!!Q,`star`),_.mode!==`launch`&&(Se(),ge.sync()),e-ct>100&&(ut(be),ct=e)};function ut(e){if(_.mode===`launch`)return;let t=rt,n=Math.min(t,y),r=de(t);if(t>4510)Y(`when`,`Ago`,`4.51`,`billion yr`),r<.45?Y(`age`,`Impact`,`in ${Math.max(1,Math.round((.45-r)*22))}`,`hours`):r<.85?Y(`age`,`Impact`,`${Math.max(1,Math.round((r-.45)*60))}`,`hours ago`):Y(`age`,`The Moon`,`Gathering`);else{let e=Math.abs(t),[n,r]=e<5e-4?[`Today`,``]:e>=1e3?[(e/1e3).toFixed(e>=3e3?1:2).replace(/\.?0+$/,``),`billion yr`]:e>=1?[String(Math.round(e)),`million yr`]:e>=.001?[String(Math.round(e*1e3)),`thousand yr`]:[String(Math.round(e*1e6)),`yr`];Y(`when`,e<5e-4?`When`:t<0?`From now`:`Ago`,n,r);let i=T(t);i===`the future`?Y(`age`,`Aeon`,`Ahead`):i===`today`?Y(`age`,`Period`,`Quaternary`):Y(`age`,[`Hadean`,`Archean`,`Proterozoic`].includes(i)?`Aeon`:`Period`,i)}let i=ne(n);Y(`day`,`A day`,i<30?i.toFixed(1):String(Math.round(i)),`hours`);let a=re(n);r<.86&&t>4510?Y(`moon`,`The Moon`,`Not yet`):Y(`moon`,`The Moon`,`${Math.round(a).toLocaleString(`en-GB`)},000`,`km`);let o=S(n);Y(`oxygen`,`Oxygen`,o>=1?`${Math.round(o)}%`:o>=.01?`${o.toPrecision(1)}%`:`Almost none`);let s=ee(n);s<10?Y(`sun`,`Sunshine`,`${Math.round(s*100)}%`,`of now`):Y(`sun`,`Sunshine`,`${Math.round(s).toLocaleString(`en-GB`)}×`,`now`);let l=se(n);Y(`life`,`Life`,l.charAt(0).toUpperCase()+l.slice(1));let u=ce(t);Y(`sure`,`How sure`,u.grade.charAt(0)+u.grade.slice(1).toLowerCase(),u.how.charAt(0)+u.how.slice(1).toLowerCase()),Ye.draw(t);let d=L&&t<=1080?L.image(Math.max(L.last,Math.min(L.first,t))):null;Xe.draw(t>1040?null:d?.img??null,j?e:[],t>1040?`NO MAP SURVIVES`:t>540&&j?`PINS: FROM 540 MILLION YEARS`:``),c(`sim-st`).querySelector(`.lcd-cap`).textContent=t<-.01?`The map ahead`:t>1040?`The map`:`The map, and the pins`,G.lock(_.mode===`guided`),c(`tl-lever-sec`).classList.toggle(`is-auto`,_.mode===`guided`),G.set(b),G.actual(C),we.classList.toggle(`is-on`,j),z&&performance.now()>z.until&&(z=null);let f=_.mode===`guided`?_.at-Ue(_.ch):0;W.say(_.mode===`guided`?je(_.ch,f):Me(t,z?.line??null)),Pe.set(_.mode===`guided`?_.ch:-1,_.mode===`guided`?_.at/We:1),W.setPlay()}let dt=async(e,t)=>{let n=await(await fetch(e)).blob();try{return await createImageBitmap(n,{resizeWidth:t,resizeHeight:t/2,resizeQuality:`high`,colorSpaceConversion:`none`})}catch{return createImageBitmap(n)}};W.launch([{label:`The Earth`,done:`IN ORBIT`,min:400,run:async()=>{if(N=f(r),!N)throw Error(`no WebGL 2 with float pictures`);P=Ee(N,g?4e3:9e3),F=p(N,r,{maxScale:1,knee:.9});try{I=m(N,{large:u})}catch{I=null}let e=await ve(i);L=ye(N,i,e,{keep:g?6:12}),await L.preload([1e3,0]),dt(`/earth/colour.jpg`,g?2048:4096).then(e=>P?.setColour(e)).catch(()=>{}),dt(`/moon/colour.jpg`,g?1024:2048).then(e=>P?.setMoon(e)).catch(()=>{}),he=requestAnimationFrame(lt)}},{label:`The plates`,done:`PALEOMAP, MERDITH`,min:360,run:async()=>{let e=await ve(i);R=await xe(i,e)}},{label:`The land before the maps`,done:`GUESSED`,amber:!0,min:380,run:()=>{me=Be()}},{label:`The impact`,done:`SLOWED`,amber:!0,min:360},{label:`Four and a half billion years`,done:`FOLDED`,amber:!0,min:360},{label:`The Moon`,done:`TO SCALE`,min:330},{label:`Sandwiches`,done:`BEST BEFORE THE CAMBRIAN`,min:330}],()=>{Ze()}),new URLSearchParams(location.search).has(`debug`)&&(window.__dt={chapter:e=>{_.mode!==`guided`&&Ze(),Qe(e)},seek:e=>{_.mode!==`guided`&&Ze();let t=0;for(;t<Oe.length-1&&e>=Ue(t+1);)t++;Qe(t),_.at=e},get narration(){let e=ge.audio;return e?{at:e.currentTime,run:_.at,paused:e.paused,duration:e.duration}:null},get state(){return{mode:_.mode,ch:_.ch,u:C,t:rt,dist:E,fps:F?.fps,scale:F?.scale}},view:_,at:e=>{X(),b=C=k(e),_.run=!1},look:e=>{e.round!==void 0&&(_.yaw=Le-e.round),e.yaw!==void 0&&(_.yaw=e.yaw),e.pitch!==void 0&&(_.pitch=e.pitch),e.dist!==void 0&&(w=E=e.dist),e.face!==void 0&&(D=Math.atan2(-Math.cos(_.yaw),Math.sin(_.yaw))-e.face*q)},pins:B,pause:()=>{_.playing=!1,W.setPlay()}}),window.addEventListener(`pagehide`,()=>{cancelAnimationFrame(he),F?.destroy()})}Ue();