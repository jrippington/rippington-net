import{t as e}from"./kit.Bqo6d9YU.js";var t=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function n(e){let n=document.createElement(`canvas`);n.setAttribute(`aria-hidden`,`true`),e.append(n);let r=n.getContext(`2d`),i=getComputedStyle(e),a=i.getPropertyValue(`--ice-rgb`).trim()||`143, 216, 238`,o=i.getPropertyValue(`--amber-rgb`).trim()||`242, 180, 90`,s=i.getPropertyValue(`--deep-0-rgb`).trim()||`1, 28, 42`,c=0,l=0,u=e=>{let t=Math.PI/180,n=[],r=[];for(let e=0;e<=360;e+=4)r.push([Math.cos(e*t),Math.sin(e*t),0]);for(let r=-90+e;r<90;r+=e){if(r===0)continue;let e=Math.cos(r*t),i=Math.sin(r*t),a=[];for(let n=0;n<=360;n+=4)a.push([e*Math.cos(n*t),e*Math.sin(n*t),i]);n.push(a)}for(let r=0;r<360;r+=e){let e=[];for(let n=-90;n<=90;n+=4){let i=Math.cos(n*t);e.push([i*Math.cos(r*t),i*Math.sin(r*t),Math.sin(n*t)])}n.push(e)}return{lines:n,equator:r}},d=u(30),f=u(45);function p(i,u,p=`hole`){let m=e.clientWidth;if(!m)return;let h=Math.min(2,window.devicePixelRatio||1);(m!==c||h!==l)&&(c=m,l=h,n.width=n.height=Math.round(m*h)),r.setTransform(l,0,0,l,0,0),r.clearRect(0,0,c,c);let g=c/2,_=c/2-1.5,v=e=>[g+_*t(e,i.right),g-_*t(e,i.up),t(e,i.fwd)],y=r.createRadialGradient(g-.38*_,g-.42*_,0,g,g,_);y.addColorStop(0,`rgba(${a}, 0.2)`),y.addColorStop(.55,`rgba(${s}, 0.75)`),y.addColorStop(1,`rgba(2, 4, 8, 0.95)`),r.beginPath(),r.arc(g,g,_,0,Math.PI*2),r.fillStyle=y,r.fill();let b=_<30?f:d,x=new Path2D,S=[new Path2D,new Path2D,new Path2D],C=(e,t,n)=>{let r=v(e[0]);for(let i=1;i<e.length;i++){let a=v(e[i]),o=(r[2]+a[2])/2,s=o<0?t:n(o);s.moveTo(r[0],r[1]),s.lineTo(a[0],a[1]),r=a}},w=e=>S[e<.4?0:e<.75?1:2];for(let e of b.lines)C(e,x,w);let T=new Path2D,E=new Path2D;C(b.equator,T,()=>E),r.lineWidth=1,r.strokeStyle=`rgba(${a}, 0.1)`,r.stroke(x),r.strokeStyle=`rgba(${a}, 0.2)`,r.stroke(T),[.3,.48,.66].forEach((e,t)=>{r.strokeStyle=`rgba(${a}, ${e})`,r.stroke(S[t])}),r.lineWidth=1.5,r.strokeStyle=`rgba(${a}, 0.9)`,r.stroke(E);let[D,O,k]=v(i.hole),A=Math.max(2.5,_*.075);r.beginPath(),r.arc(D,O,p===`star`?A*.6:A,0,Math.PI*2),p===`star`?(r.fillStyle=k>=0?`rgba(255, 255, 255, 0.95)`:`rgba(${a}, 0.3)`,k>=0&&(r.shadowColor=`rgba(${a}, 0.95)`,r.shadowBlur=8),r.fill(),r.shadowBlur=0):k>=0?(r.fillStyle=`#000`,r.fill(),r.lineWidth=1.5,r.strokeStyle=`rgba(${a}, 0.95)`,r.shadowColor=`rgba(${a}, 0.9)`,r.shadowBlur=6,r.stroke(),r.shadowBlur=0):(r.lineWidth=1,r.strokeStyle=`rgba(${a}, 0.35)`,r.stroke());let j=new Path2D,M=(e,t)=>{let n=e*i.tanX,r=t*i.tanY,a=Math.hypot(1,n,r);return[g+_*n/a,g-_*r/a]};for(let e=0;e<48;e++){let t=Math.floor(e/12),n=e%12/12*2-1,[r,i]=t===0?[n,1]:t===1?[1,-n]:t===2?[-n,-1]:[-1,n],[a,o]=M(r,i);e===0?j.moveTo(a,o):j.lineTo(a,o)}j.closePath(),r.lineWidth=1.25,r.strokeStyle=`rgba(${o}, 0.85)`,r.stroke(j);let N=r.createRadialGradient(g,g,_*.7,g,g,_);N.addColorStop(0,`rgba(0, 0, 0, 0)`),N.addColorStop(1,`rgba(0, 0, 0, 0.55)`),r.beginPath(),r.arc(g,g,_,0,Math.PI*2),r.fillStyle=N,r.fill();let P=r.createRadialGradient(g-.42*_,g-.48*_,0,g-.42*_,g-.48*_,.42*_);P.addColorStop(0,`rgba(255, 255, 255, 0.16)`),P.addColorStop(1,`rgba(255, 255, 255, 0)`),r.fillStyle=P,r.fill(),r.lineWidth=1,r.strokeStyle=u?`rgba(${o}, 0.95)`:`rgba(${a}, 0.4)`,u&&(r.shadowColor=`rgba(${o}, 0.7)`,r.shadowBlur=8),r.stroke(),r.shadowBlur=0}return{draw:p}}var r=e=>new Promise(t=>setTimeout(t,e));async function i(e,t,n,i,a){e.innerHTML=``;let o=i.map(t=>{let n=document.createElement(`li`);return n.innerHTML=`<span></span><i></i><b></b>`,n.querySelector(`span`).textContent=t.label,e.append(n),n});for(let e=0;e<i.length;e++){let t=i[e],n=o[e],s=n.querySelector(`b`);n.className=`is-busy`,s.textContent=`···`,await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));let c=performance.now();await t.run?.();let l=(t.min??300)-(performance.now()-c);l>0&&await r(l),n.className=t.amber?`is-done is-amber`:`is-done`,s.textContent=t.done??`✓`,a?.(e+1,i.length)}await r(400),t.classList.add(`is-shown`),n.disabled=!1,n.focus({preventScroll:!0})}var a=e=>document.getElementById(e),o=e=>`<svg viewBox="0 0 16 16" aria-hidden="true">${e}</svg>`,s={play:o(`<path d="M4.5 2.5v11l9-5.5z" fill="currentColor"/>`),pause:o(`<path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor"/>`),again:o(`<path d="M3.2 8a4.8 4.8 0 1 0 1.5-3.5M3.2 2.6v2.9h2.9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`),fullOn:o(`<path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4" fill="none" stroke="currentColor" stroke-width="1.5"/>`),fullOff:o(`<path d="M6 2v4H2M14 6h-4V2M10 14v-4h4M2 10h4v4" fill="none" stroke="currentColor" stroke-width="1.5"/>`)};function c(e,t,n,r=``){let i=document.createElement(`button`);return i.type=`button`,i.className=`hp-btn ${r}`,i.title=e,i.setAttribute(`aria-label`,e),i.innerHTML=t,i.addEventListener(`click`,n),i}function l(t){let r=a(`sim-stage`),o=a(`sim-lcd`),l=a(`sim-readout`),u=e();r.append(u.el);let d=new URLSearchParams(location.search).get(`from`)??``,f=/^\/science\/[a-z0-9-]+\/$/.test(d)?d:a(`sim`).dataset.article??`/`,p=matchMedia(`(max-width: 760px)`).matches,m=``,h=e=>{l.textContent!==e.line&&(l.textContent=e.line),l.classList.toggle(`is-alert`,e.kind===`alert`),l.classList.toggle(`is-flash`,e.kind===`flash`),l.classList.toggle(`is-go`,e.kind===`go`),l.classList.toggle(`is-big`,e.kind===`big`);let t=e.line.replace(/\d+/g,`#`);t!==m&&(u.say(e.detail?`${e.line}. ${e.detail}`:e.line),m=t)},g=0,_=!p&&!matchMedia(`(max-height: 560px)`).matches,v=document.createElement(`button`);v.type=`button`,v.className=`lcd-pin`,v.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 1.8h4l-.6 4.4 2.6 2.4v1.2H8.6V14L8 15l-.6-1V9.8H4V8.6l2.6-2.4z" fill="currentColor"/></svg>`;let y=()=>{v.classList.toggle(`is-on`,_),v.setAttribute(`aria-pressed`,String(_)),v.title=_?`Let the display fold away (I)`:`Keep the display open (I)`,v.setAttribute(`aria-label`,v.title)};y();let b=document.createElement(`a`);b.className=`hp-btn lcd-leave`,b.href=f,b.textContent=`← The article`,b.title=`Back to the article`,o.append(b,v);let x=document.createElement(`div`);x.className=`lcd-ball`,x.tabIndex=0,x.title=`Turn the ball to look around (or the arrow keys)`,x.setAttribute(`role`,`group`),x.setAttribute(`aria-roledescription`,`trackball`),x.setAttribute(`aria-label`,`The view: turn the ball, or use the arrow keys, to look around`),o.append(x);let S=n(x),C=()=>o.classList.contains(`is-up`),w=!1,T=``,E=()=>{try{return!!o.querySelector(`:focus-visible`)}catch{return o.contains(document.activeElement)}},D=()=>{if(_||!t.playing()||o.matches(`:hover`)||E()||t.busy?.()){g=window.setTimeout(D,1500);return}o.classList.remove(`is-up`)},O=(e=2800)=>{w||(o.classList.add(`is-up`),clearTimeout(g),g=window.setTimeout(D,e))};r.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(e.clientY>r.getBoundingClientRect().bottom-120?O():w=!1)}),o.addEventListener(`pointerdown`,e=>{T=e.pointerType,!v.contains(e.target)&&(w=!1,O())});let k=()=>{if(_=!_,y(),_){w=!1,O();return}clearTimeout(g),o.classList.remove(`is-up`),w=T===`mouse`,v.blur()};v.addEventListener(`click`,e=>{e.stopPropagation(),k()}),o.addEventListener(`focusin`,()=>{E()&&(w=!1),O()});let A=t.views?.length?t.views:[{id:`overview`,name:`Overview`}],j=o.querySelector(`.lcd-body`),M=a(`sim-view`),N=document.createElement(`nav`);N.className=`lcd-sec lcd-views sp-views`,N.setAttribute(`aria-label`,`Views`),N.innerHTML=`<p class="sp-label lcd-cap">Views</p>${A.map((e,t)=>`<button type="button" class="sp-view" data-view="${e.id}" aria-pressed="false" title="${e.name} (${t+1})"><i aria-hidden="true"></i><span>${e.name}</span></button>`).join(``)}`,j.prepend(N);let P=A[0].id,F=(e,n=!1)=>{P=e,M&&(M.dataset.view=e,M.querySelectorAll(`[data-views]`).forEach(t=>{t.hidden=!(t.dataset.views??``).split(` `).includes(e)})),N.querySelectorAll(`.sp-view`).forEach(t=>{let n=t.dataset.view===e;t.classList.toggle(`is-lit`,n),t.setAttribute(`aria-pressed`,String(n))}),t.onView?.(e,n)};N.querySelectorAll(`.sp-view`).forEach(e=>e.addEventListener(`click`,()=>F(e.dataset.view,!0))),F(P);let I=document,L=()=>!!(I.fullscreenElement??I.webkitFullscreenElement)||r.classList.contains(`is-full`),R=c(`Full screen (F)`,s.fullOn,()=>L()?H():V()),z=()=>{R.innerHTML=L()?s.fullOff:s.fullOn,R.title=L()?`Leave full screen (F)`:`Full screen (F)`,R.setAttribute(`aria-label`,R.title)},B=()=>{r.classList.toggle(`is-fullscreen`,L()),z()},V=()=>{let e=r;e.requestFullscreen?e.requestFullscreen().catch(()=>{r.classList.add(`is-full`),B()}):e.webkitRequestFullscreen?e.webkitRequestFullscreen():(r.classList.add(`is-full`),B())},H=()=>{I.fullscreenElement?I.exitFullscreen():I.webkitFullscreenElement&&I.webkitExitFullscreen?.(),r.classList.remove(`is-full`),B()};document.addEventListener(`fullscreenchange`,B),document.addEventListener(`webkitfullscreenchange`,B);let U=a(`sim-ctl`),W=c(`Pause (space)`,s.pause,()=>t.toggle()),ee=c(t.againTitle,s.again,()=>t.again()),G=document.createElement(`div`);if(G.className=`lcd-keys`,G.append(W,ee,R),U.append(G),t.keys.length){let e=document.createElement(`div`);e.className=`lcd-keys lcd-own`,e.append(...t.keys),U.append(e)}let K=document.createElement(`div`);K.className=`hp-row lcd-fov`,K.innerHTML=`<span class="hp-k">Field of view</span><span class="hp-v"><b></b></span>`;let te=K.querySelector(`b`);t.fov&&U.append(K);let q=document.createElement(`div`);q.className=`hp-row lcd-fov`,q.innerHTML=`<span class="hp-k">Sim time</span><span class="hp-v"><b>—</b></span>`;let ne=q.querySelector(`b`);t.time&&U.append(q);let re=o.querySelector(`.lcd-say`),J=()=>{let e=U.getBoundingClientRect().top,t=e;for(let e of U.children)e.getClientRects().length&&(t=Math.max(t,e.getBoundingClientRect().bottom));o.style.setProperty(`--ctl-top`,`${Math.round(t-e+re.getBoundingClientRect().height+13)}px`)},Y=new ResizeObserver(()=>J()),X=()=>{Y.disconnect();for(let e of U.children)Y.observe(e);J()};new MutationObserver(X).observe(U,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`hidden`]}),X();let Z=``,ie=e=>{let t=`${e<1?e.toFixed(2):e<10?e.toFixed(1):Math.round(e)}°`;t!==Z&&(te.textContent=Z=t)},Q=``,ae=e=>{let t=e=>{for(let[t,n,r]of[[0x38d7ea4c68000,0x38d7ea4c68000,`quadrillion`],[0xe8d4a51000,0xe8d4a51000,`trillion`],[1e9,1e9,`billion`],[1e6,1e6,`million`],[1e4,1e3,`thousand`]])if(e>=t)return`${Number((e/n).toPrecision(2))} ${r}`;return e>=10?Math.round(e).toLocaleString(`en-GB`):e.toFixed(1)},n=e===null||!Number.isFinite(e)||e<=0?`—`:e>=.95?`×${t(e)}`:`×1/${t(1/e)}`;n!==Q&&(ne.textContent=Q=n)},$=null;return z(),document.querySelectorAll(`.pl-back, [data-back]`).forEach(e=>e.setAttribute(`href`,f)),window.addEventListener(`keydown`,e=>{if(e.target instanceof Element&&e.target.closest(`input, button, a, [role="slider"]`)&&e.key!==`Escape`)return;let n=e.key.toLowerCase();t.onKey?.(n,e)||(e.key===` `?(e.preventDefault(),t.toggle()):n===`r`?t.again():n===`i`||n===`d`?k():/^[1-9]$/.test(e.key)&&A[Number(e.key)-1]?(F(A[Number(e.key)-1].id,!0),w=!1,O()):n===`f`?L()?H():V():e.key===`Escape`&&L()&&(e.preventDefault(),H()))}),{stage:r,from:f,narrow:p,say:h,raiseLcd:O,lcdUp:C,setPlay:()=>{let e=t.playing();e!==$&&($=e,W.innerHTML=e?s.pause:s.play,W.title=e?`Pause (space)`:`Carry on (space)`,W.setAttribute(`aria-label`,W.title))},setFov:ie,setTime:ae,ball:S,ballEl:x,isFull:L,launch:(e,t)=>{let n=a(`sim-launch`),o=a(`sim-launch-btn`),s=!1;o.addEventListener(`click`,()=>{o.disabled||s||(s=!0,o.disabled=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.add(`is-gone`),r.classList.add(`is-running`),setTimeout(()=>{s=!1,t()},1700)})))}),i(n.querySelector(`ol`),a(`sim-go`),o,e,(e,t)=>{let n=Math.round(100*e/t);a(`sim-calc-bar`).style.width=`${n}%`,a(`sim-calc-pct`).textContent=`${n}%`,e===t&&(a(`sim-calc-label`).textContent=a(`sim-calc-label`).dataset.done??`Ready`,a(`sim-calc`).classList.add(`is-done`))}).catch(()=>{n.classList.add(`is-unsupported`)})},views:A,get view(){return P},setView:F}}function u(e,t){let n=document.createElement(`label`);n.className=`hp-tl`,n.title=`Where in the journey: drag to go there`,n.innerHTML=`<span class="lv-sr">Where</span><input type="range" min="0" max="1" step="0.0005" value="0" /><span class="hp-tl-marks" aria-hidden="true"></span>`;let r=n.querySelector(`input`),i=n.querySelector(`.hp-tl-marks`);r.addEventListener(`input`,()=>t(Number(r.value))),e.append(n);let a=()=>{let e=[...i.querySelectorAll(`span`)];e.forEach(e=>e.classList.remove(`is-flip`,`is-clash`));let t=e.filter(e=>e.getClientRects().length>0);for(let e=1;e<t.length-1;e++){let n=t[e].getBoundingClientRect(),r=t[e+1].getBoundingClientRect(),i=t[e-1].getBoundingClientRect();!n.width||n.right+8<=r.left||n.left-n.width-8>=i.right&&t[e].classList.add(`is-flip`)}let n=t=>t.classList.contains(`is-h`)?3:t===e[0]?2:+(t===e[e.length-1]);for(let e=0;e<t.length-1;e++){let r=t[e].getBoundingClientRect(),i=t[e+1].getBoundingClientRect();r.right+6>i.left&&(n(t[e])>=n(t[e+1])?t[e+1]:t[e]).classList.add(`is-clash`)}};new ResizeObserver(()=>a()).observe(n);let o=-2;return{el:n,set(e){let t=String(Math.min(1,Math.max(0,e)));r.value!==t&&(r.value=t)},marks(e){i.innerHTML=e.map(([t,n,r],i)=>`<span class="${[r,n>.98?`is-end`:``].filter(Boolean).join(` `)}" style="left:${(n*100).toFixed(2)}%;--next:${((e[i+1]?.[1]??1)*100).toFixed(2)}%" data-p="${n.toFixed(4)}">${t}</span>`).join(``),o=-2,a()},current(e){e!==o&&(o=e,i.querySelectorAll(`span`).forEach((t,n)=>t.classList.toggle(`is-h`,n===e)),a())},unclash:a}}function d(e,t,n){e.innerHTML=`<div class="van-ch"><div class="van-ch-row"></div><div class="van-ch-line"><i></i></div></div>`;let r=e.querySelector(`.van-ch-row`),i=e.querySelector(`.van-ch-line i`),a=t.map((e,t)=>{let i=document.createElement(`button`);return i.type=`button`,i.className=`van-ch-b`,i.textContent=e,i.title=`Go to ${e}`,i.addEventListener(`click`,()=>n(t)),r.append(i),i});return{set(t,n){a.forEach((e,n)=>{e.classList.toggle(`is-h`,n===t),e.classList.toggle(`is-past`,t>=0&&n<t)}),i.style.width=`${Math.max(0,Math.min(1,n))*100}%`,e.classList.toggle(`is-free`,t<0)}}}var f=`
precision highp sampler2DArray;
precision highp usampler2D;
uniform sampler2DArray uSkyTiles;
uniform usampler2D uSkyPage;
uniform vec4 uSkyGrid; // a face's width at the finest level, a tile's, its border, the levels
uniform vec2 uSkyLog;  // the stored logarithms' range
uniform vec3 uSkyN[6], uSkyU[6], uSkyR[6];

// Which face a direction falls on, and where on it (a and b from −1 to 1).
int skyFace(vec3 d, out vec2 ab) {
  vec3 a = abs(d);
  int f = a.x >= a.y && a.x >= a.z ? (d.x > 0. ? 0 : 1) : a.y >= a.z ? (d.y > 0. ? 2 : 3) : (d.z > 0. ? 4 : 5);
  ab = vec2(dot(d, uSkyR[f]), dot(d, uSkyU[f])) / dot(d, uSkyN[f]);
  return f;
}
vec3 skyDecode(vec3 c) {
  vec3 q = c * 255.;
  return exp2(uSkyLog.x + (q - 1.) / 254. * (uSkyLog.y - uSkyLog.x)) * clamp(q, 0., 1.);
}
float skyLevel(float foot) { return clamp(log2(max(foot, 1e-12) * uSkyGrid.x / 1.5707963), 0., uSkyGrid.w - 1.); }
// The light at a level, from the finest held tile at or above it.
vec3 skyAt(int f, vec2 ab, float L) {
  float n0 = uSkyGrid.x / uSkyGrid.y;
  for (int k = 0; k < 8; k++) {
    if (L > uSkyGrid.w - 1.) break;
    float N = uSkyGrid.x / exp2(L), n = n0 / exp2(L);
    vec2 st = vec2(ab.x * 0.5 + 0.5, 0.5 - ab.y * 0.5) * N;
    vec2 t = clamp(floor(st / uSkyGrid.y), vec2(0.), vec2(n - 1.));
    float off = 2. * n0 * (1. - exp2(-L));
    uint layer = texelFetch(uSkyPage, ivec2(int(off + t.x), f * int(n0) + int(t.y)), 0).r;
    if (layer > 0u) {
      vec2 uv = (st - t * uSkyGrid.y + uSkyGrid.z) / (uSkyGrid.y + 2. * uSkyGrid.z);
      return skyDecode(texture(uSkyTiles, vec3(uv, float(layer - 1u))).rgb);
    }
    L += 1.;
  }
  return vec3(0.);
}
// The sky's light in a galactic direction, for a pixel spanning foot radians of it.
vec3 skyTile(vec3 d, float foot) {
  vec2 ab;
  int f = skyFace(d, ab);
  float lv = skyLevel(foot), l0 = floor(lv);
  vec3 c0 = skyAt(f, ab, l0);
  return lv - l0 < 0.01 ? c0 : mix(c0, skyAt(f, ab, l0 + 1.), lv - l0);
}
// The tile that pixel would like: its face (plus one), level, and place, as a colour (read back by skyFeedback).
vec4 skyKey(vec3 d, float foot) {
  vec2 ab;
  int f = skyFace(d, ab);
  float L = floor(skyLevel(foot)), N = uSkyGrid.x / exp2(L), n = uSkyGrid.x / uSkyGrid.y / exp2(L);
  vec2 t = clamp(floor(vec2(ab.x * 0.5 + 0.5, 0.5 - ab.y * 0.5) * N / uSkyGrid.y), vec2(0.), vec2(n - 1.));
  return vec4(float(f + 1), L, t) / 255.;
}
`;function p(e,t,n){let r=null,i=0,a=0,o=e.createTexture(),s=e.createTexture(),c=new Uint8Array(1),l=new Map,u=[],d=new Set,f=[],p=[],m=0,h=(e,t,n,r)=>`${e}/${t}/${r}-${n}`,g=e=>{d.add(e.key),fetch(`${t}${e.key}.webp`).then(e=>e.ok?e.blob():Promise.reject(Error(String(e.status)))).then(e=>createImageBitmap(e,{colorSpaceConversion:`none`,premultiplyAlpha:`none`})).then(t=>p.push({key:e.key,img:t,pinned:e.pinned})).catch(()=>d.delete(e.key))},_=()=>{for(f.sort((e,t)=>t.L-e.L);d.size<6&&f.length;){let e=f.shift();!l.has(e.key)&&!d.has(e.key)&&g(e)}},v=(e,t,n,r,i=!1)=>{let a=h(e,t,n,r),o=l.get(a);if(o){o.used=m;return}d.has(a)||f.some(e=>e.key===a)||f.push({key:a,L:e,f:t,x:n,y:r,pinned:i})},y=(t,n)=>{let[r,o,l]=t.split(`/`),[u,d]=l.split(`-`).map(Number),f=Number(r),p=2*i*(1-2**-f)+d,m=Number(o)*i+u;c[m*a+p]=n,e.bindTexture(e.TEXTURE_2D,s),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texSubImage2D(e.TEXTURE_2D,0,p,m,1,1,e.RED_INTEGER,e.UNSIGNED_BYTE,new Uint8Array([n]))},b=(async()=>{let d=await fetch(`${t}manifest.json`);if(!d.ok)throw Error(`sky tiles: ${d.status}`);r=await d.json(),i=r.face/r.tile,a=2*i;let f=r.tile+2*r.border;e.bindTexture(e.TEXTURE_2D_ARRAY,o),e.texStorage3D(e.TEXTURE_2D_ARRAY,1,e.RGBA8,f,f,n),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),c=new Uint8Array(a*6*i),e.bindTexture(e.TEXTURE_2D,s),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8UI,a,6*i,0,e.RED_INTEGER,e.UNSIGNED_BYTE,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let e=0;e<n;e++)u.push(e);let p=[];for(let e=r.levels-1;e>=Math.max(0,r.levels-2);e--){let t=i>>e;for(let n=0;n<6;n++)for(let r=0;r<t;r++)for(let i=0;i<t;i++)v(e,n,i,r,!0),p.push(h(e,n,i,r))}_(),await new Promise(e=>{let t=()=>{x(64),_(),p.every(e=>l.has(e))?e():setTimeout(t,30)};t()})})();function x(t=3){for(let n=0;n<t&&p.length;n++){let t=p.shift();d.delete(t.key);let n=u.pop();if(n===void 0){let e=null,r=1/0;for(let[t,n]of l)!n.pinned&&n.used<r&&(r=n.used,e=t);if(!e||r>=m){t.img.close();continue}n=l.get(e).layer,l.delete(e),y(e,0)}e.bindTexture(e.TEXTURE_2D_ARRAY,o),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,n,t.img.width,t.img.height,1,e.RGBA,e.UNSIGNED_BYTE,t.img),t.img.close(),l.set(t.key,{layer:n,used:m,pinned:t.pinned}),y(t.key,n+1)}}return{ready:b,get manifest(){return r},request(e){if(!r)return;let t=new Set;for(let n=0;n<e.length;n+=4){if(!e[n])continue;let i=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3];if(t.has(i))continue;t.add(i);let a=e[n]-1,o=e[n+1],s=e[n+2],c=e[n+3];for(;o<r.levels;o++,s>>=1,c>>=1)v(o,a,s,c)}_()},update(){m++,x(),_()},bind(t,n,i){if(!r)return;e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_2D_ARRAY,o),e.activeTexture(e.TEXTURE0+i),e.bindTexture(e.TEXTURE_2D,s),e.uniform1i(t(`uSkyTiles`),n),e.uniform1i(t(`uSkyPage`),i),e.uniform4f(t(`uSkyGrid`),r.face,r.tile,r.border,r.levels),e.uniform2f(t(`uSkyLog`),r.log2Min,r.log2Max);let a=[],c=[],l=[];for(let e of r.faces)a.push(...e.n),c.push(...e.u),l.push(e.n[1]*e.u[2]-e.n[2]*e.u[1],e.n[2]*e.u[0]-e.n[0]*e.u[2],e.n[0]*e.u[1]-e.n[1]*e.u[0]);e.uniform3fv(t(`uSkyN`),a),e.uniform3fv(t(`uSkyU`),c),e.uniform3fv(t(`uSkyR`),l),e.activeTexture(e.TEXTURE0)},stats(){return{held:l.size,loading:d.size,queued:f.length,layers:n}},destroy(){e.deleteTexture(o),e.deleteTexture(s)}}}function m(e,t=64,n=40){let r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null);let a=e.createBuffer();e.bindBuffer(e.PIXEL_PACK_BUFFER,a),e.bufferData(e.PIXEL_PACK_BUFFER,t*n*4,e.STREAM_READ),e.bindBuffer(e.PIXEL_PACK_BUFFER,null);let o=null,s=0,c=new Uint8Array(t*n*4);return{w:t,h:n,fb:i,due(e=6){return!o&&++s>=e},start(){e.bindFramebuffer(e.FRAMEBUFFER,i),e.bindBuffer(e.PIXEL_PACK_BUFFER,a),e.readPixels(0,0,t,n,e.RGBA,e.UNSIGNED_BYTE,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),o=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),e.flush(),s=0},poll(){if(!o)return null;let t=e.clientWaitSync(o,0,0);return t!==e.ALREADY_SIGNALED&&t!==e.CONDITION_SATISFIED?null:(e.deleteSync(o),o=null,e.bindBuffer(e.PIXEL_PACK_BUFFER,a),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,c),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),c)},destroy(){e.deleteTexture(r),e.deleteFramebuffer(i),e.deleteBuffer(a)}}}var h=()=>document.getElementById(`sim`)?.dataset.sky??``,g=()=>document.getElementById(`sim`)?.dataset.stars??``,_=`#version 300 es
precision highp float;
const vec2 P[3] = vec2[3](vec2(-1., -1.), vec2(3., -1.), vec2(-1., 3.));
out vec2 vUv;
void main() { vUv = P[gl_VertexID] * 0.5 + 0.5; gl_Position = vec4(P[gl_VertexID], 0., 1.); }
`,v=`#version 300 es
// The notice below travels with the shader's text, so it ships with the site (a comment in JavaScript would be stripped).
/* The look of the disc's gas, the stars and the blackbody colours in these shaders is adapted from Black-Holes,
 * https://github.com/Goodog2013/Black-Holes:
 *
 * MIT License
 *
 * Copyright (c) 2026 Goodog2013 and Fable 5
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
precision highp float;
out vec4 o;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uCam;
uniform vec3 uRight, uUp, uFwd;
uniform float uTan;
uniform int uProj;
uniform float uV, uGam; // the camera's speed against the rain, and its Lorentz factor (passed, as v rounds to 1)
uniform vec3 uVdir;      // and the direction it moves in, against the rain
uniform int uDisc;
uniform float uDiscIn, uDiscOut, uDiscT, uDiscGain, uDiscCap;
uniform int uShift;
uniform mat3 uSkyRot;
uniform float uSkyGain, uStarGain;
uniform float uMapGain; // NASA's map into the photograph's units, which the gains and the exposure were tuned to
#ifdef FEEDBACK
uniform float uFootK; // the feedback picture's pixel against the main view's
vec4 gKey = vec4(0.); // the sky's tile this pixel would like (../sky/tiles.ts)
#endif
uniform int uSteps;
uniform float uSeed;
uniform vec2 uJitter; // this frame's offset within the pixel, for the temporal anti-aliasing

const float PI = 3.14159265;
${f}

float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float noise2(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3. - 2. * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y);
}
// Octaves up to oct: fewer where the disc is seen squeezed (its images bent round the black hole), so its finest
// streaks don't beat against the pixels.
float fbm(vec2 p, int oct) { float v = 0., a = 0.5; for (int i = 0; i < 5; i++) { if (i >= oct) { v += a * 0.5; break; } v += a * noise2(p); p *= 2.13; a *= 0.5; } return v; }
float ridged(vec2 p, int oct) { float v = 0., a = 0.55; for (int i = 0; i < 4; i++) { if (i >= oct) { v += a * 0.5; break; } v += a * (1. - abs(2. * noise2(p) - 1.)); p *= 2.2; a *= 0.5; } return v; }

vec3 blackbody(float T) {
  T = clamp(T, 1000., 40000.);
  float t = T / 100.;
  vec3 c;
  c.r = t <= 66. ? 1. : clamp(1.2929 * pow(t - 60., -0.1332), 0., 1.);
  c.g = t <= 66. ? clamp(0.3900816 * log(t) - 0.6318414, 0., 1.) : clamp(1.1298909 * pow(t - 60., -0.0755148), 0., 1.);
  c.b = t >= 66. ? 1. : (t <= 19. ? 0. : clamp(0.5432068 * log(t - 10.) - 1.19625408, 0., 1.));
  return c;
}
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// Stars in cells of direction space; faded to their average where a pixel spans many cells (strong lensing).
vec3 starLayer(vec3 d, float scale, float bright, float sharp, float foot) {
  vec3 p = d * scale, id = floor(p), f = fract(p) - 0.5;
  float h = hash13(id);
  vec3 sp = vec3(hash13(id + 7.1), hash13(id + 13.7), hash13(id + 27.3)) - 0.5;
  float dist = length(f - sp * 0.85);
  float temp = mix(2600., 14000., pow(max(hash13(id + 3.3), 0.001), 1.6));
  float star = exp(-dist * dist * sharp) * bright * pow(max(h, 0.001), 24.);
  // Where a pixel spans many cells (strong lensing), the stars fade, rather than flicker.
  return blackbody(temp) * star * (1. - clamp(foot * scale * 2.5, 0., 1.));
}

vec3 sky(vec3 D, float foot) {
  vec3 g = uSkyRot * D;
#ifdef FEEDBACK
  gKey = skyKey(g, foot * uFootK);
#endif
  // NASA's Milky Way, in tiles (since 15 October 2026; ../sky/tiles.ts): as sharp as the pixel's footprint on the sky
  // asks, however strongly the black hole magnifies it.
  // (No made-up nebulae over it any more: they gave the old photograph's soft band something for the lensing to swirl,
  // and over NASA's map, darker and sharper, they turned the Milky Way pink. John: "the background milky way looks
  // very pink in there now".)
  vec3 c = skyTile(g, foot) * uMapGain * uSkyGain;
  c = mix(vec3(luma(c)), c, 0.88); // the Milky Way a touch less saturated (the stars keep their colours)
  c += (starLayer(D, 30., 26., 320., foot) + starLayer(D, 68., 10., 420., foot) + starLayer(D, 140., 5., 520., foot)) * uStarGain;
  // A denser layer of faint stars (15 October 2026): sharp at any resolution, so the sky reads crisper where the map's
  // clouds are soft.
  c += (starLayer(D, 230., 3.2, 600., foot) + starLayer(D, 360., 1.8, 680., foot)) * uStarGain;
  return c;
}

// The light's colour and brightness for a frequency ratio g (seen / sent).
vec3 shiftLight(vec3 c, float g) {
  if (uShift == 0) return c;
  vec3 t = blackbody(6500. * g) / blackbody(6500.);
  t /= max(luma(t), 1e-4);
  float k = clamp(abs(log2(g)) * 0.35, 0., 0.7);
  return mix(c, luma(c) * t, k) * min(pow(g, 2.5), 30.); // falling in, light from behind brightens greatly (capped: tiny, very bright points flicker)
}

// The disc: thin, from the innermost stable orbit outwards, turning one way about +z. p on the disc, rp its radius;
// bz the light's angular momentum about the axis over its energy; G its frequency at the camera over at infinity.
// The error function (Abramowitz and Stegun 7.1.26, good to 1.5e-7), for the disc's haze.
float erfA(float x) {
  float t = 1. / (1. + 0.3275911 * abs(x));
  float y = 1. - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * exp(-x * x);
  return sign(x) * y;
}
// The mean of exp(−z²) along a straight stretch from height a to b (in the haze's thickness).
float hazeAcross(float a, float b) {
  float d = b - a;
  if (abs(d) < 1e-3) return exp(-0.25 * (a + b) * (a + b));
  return 0.8862269 * (erfA(b) - erfA(a)) / d;
}

// The gas's streaks, turned through rot (anticlockwise about the disc's axis, as the disc turns).
float plasma(vec3 p, float rp, float lr, float rot, int oct) {
  float cs = cos(rot), sn = sin(rot);
  vec2 q = vec2(p.x * cs + p.y * sn, -p.x * sn + p.y * cs) / rp;
  float n1 = fbm(q * 3. + vec2(lr * 7., 0.), oct);
  float n2 = fbm(q * 5.5 + vec2(lr * 11., lr * 9.), oct);
  float fil = ridged(q * 7. + vec2(lr * 15., lr * 4.), max(oct - 1, 1));
  return 0.3 + 2.3 * n1 * n2 + 0.55 * fil * fil;
}

vec4 disc(vec3 p, float rp, float bz, float G, vec3 dir, int image) {
  float ut = inversesqrt(max(1. - 1.5 / rp, 1e-3));
  float Om = sqrt(0.5 / (rp * rp * rp));
  float gD = G / (ut * (1. - Om * bz));
  float x = uDiscIn / rp;
  float prof = pow(x, 0.75) * pow(max(1. - sqrt(x), 0.), 0.25) / 0.488;
  float lr = log(rp);
  int oct = image == 0 ? 4 : image == 1 ? 2 : 1;
  // The gas turns with its orbit, inner faster than outer, TURN times faster than life so the eye catches it. Left to
  // turn, the inner gas lapping the outer would wind the pattern into rings, which look still however they turn; so
  // the pattern is renewed every SPAN seconds, two copies half a span apart, crossfaded (a flow map's trick).
  const float TURN = 7., SPAN = 6.;
  float t1 = mod(uTime, SPAN), t2 = mod(uTime + 0.5 * SPAN, SPAN);
  float w1 = 1. - abs(2. * t1 / SPAN - 1.);
  float streaks = plasma(p, rp, lr, Om * TURN * t1, oct) * w1 + plasma(p, rp, lr, Om * TURN * t2, oct) * (1. - w1);
  // Hot spots: a few bright, hotter clumps of gas, each on its own orbit at its own speed. The eye follows them round:
  // across the front, behind the black hole, and over the top in the arch (the disc's far side, its light bent round),
  // blue-white as each swings towards you, red as it goes away.
  float spots = 0., phi = atan(p.y, p.x);
  for (int k = 0; k < 4; k++) {
    float fk = float(k), rk = uDiscIn * (1.18 + 0.42 * fk);
    float ak = fk * 2.39 + 0.8 + uTime * TURN * sqrt(0.5 / (rk * rk * rk));
    float da = mod(phi - ak + 3.14159265, 6.2831853) - 3.14159265;
    float along = rk * da / (0.85 + 0.2 * fk), across = (rp - rk) / (0.26 + 0.05 * fk);
    spots += exp(-along * along - across * across);
  }
  float edge = smoothstep(uDiscIn * 0.92, uDiscIn * 1.4, rp) * (1. - smoothstep(uDiscOut * 0.3, uDiscOut, rp)); // soft edges, in and out
  float dens = edge * streaks;
  float T = uDiscT * prof;
  // The colour's temperature shifted more than the physics would (gD^2.5, not gD), so the Doppler shift shows: a
  // disc this cool only goes from white to orange; this one goes from blue-white to red.
  float Tobs = uShift == 1 ? T * pow(gD, 2.5) : T;
  float boost = uShift == 1 ? min(pow(gD, 3.), 8.) : 1.;
  // The colour as its own thing (a blackbody's, at the temperature seen, a little saturated), the brightness apart,
  // so the side turning towards you shows bluer and the side turning away redder, rather than both bleaching white.
  vec3 hue = blackbody(Tobs);
  hue /= max(luma(hue), 1e-4);
  // The side coming towards you more strongly saturated as its shift rises, so it reads blue rather than white.
  float sat = 1.6 + (uShift == 1 ? 2.6 * smoothstep(1., 1.6, gD) : 0.);
  hue = max(mix(vec3(1.), hue, sat), 0.);
  vec3 c = hue * pow(prof, 3.) * dens * boost * uDiscGain;
  // The hot spots: half as hot again as the gas round them, and much brighter, their colour shifted the same way.
  float Ts = uShift == 1 ? T * 1.5 * pow(gD, 2.5) : T * 1.5;
  vec3 hs = blackbody(Ts);
  hs /= max(luma(hs), 1e-4);
  hs = max(mix(vec3(1.), hs, sat), 0.);
  c += hs * spots * edge * pow(prof, 1.5) * boost * uDiscGain * 9.;
  float a = clamp((dens + 2. * spots * edge) * 0.9 * (0.55 + 0.45 / max(abs(dir.z), 0.3)), 0., 0.95);
  return vec4(c, a);
}

void main() {
  vec2 fc = gl_FragCoord.xy + uJitter;
  vec3 d;
  bool off = false;
  if (uProj == 0) {
    vec2 uv = (fc * 2. - uRes) / uRes.y;
    d = normalize(uRight * uv.x * uTan + uUp * uv.y * uTan + uFwd);
  } else if (uProj == 1) {
    vec2 uv = (fc * 2. - uRes) / min(uRes.x, uRes.y);
    float rho = length(uv);
    off = rho > 1.;
    float th = min(rho, 1.) * PI, az = atan(uv.y, uv.x);
    d = uFwd * cos(th) + (uRight * cos(az) + uUp * sin(az)) * sin(th);
  } else {
    // The whole sky as a flat map (16 October 2026, for the dashboard's Your sky): ahead at the middle, behind at both
    // side edges, straight up along the top and down along the foot, longitude across and latitude up.
    vec2 uv = fc / uRes;
    float lon = (uv.x - 0.5) * 2. * PI, lat = (uv.y - 0.5) * PI;
    d = uFwd * cos(lat) * cos(lon) + uRight * cos(lat) * sin(lon) + uUp * sin(lat);
  }

  // 1. Into the rain frame.
  float rc = length(uCam);
  vec3 rh = uCam / rc;
  float beta = inversesqrt(rc);
  vec3 n1 = -d;
  // The light's direction, from the camera's frame into the rain's, the camera moving at uV along uVdir.
  float np = dot(n1, uVdir);
  float gam = uGam;
  float k = max(1. + uV * np, 1e-9);
  vec3 n = normalize((np + uV) / k * uVdir + (n1 - np * uVdir) / (gam * k));
  float nr = dot(n, rh);
  vec3 nperp = n - nr * rh;
  float eI = 1. - beta * nr;
  bool past = eI <= 1e-5;
  float G = 1. / (gam * k * max(eI, 1e-5));
  float bz = (rc * cross(rh, n) / max(eI, 1e-5)).z;
  vec3 w = normalize((beta - nr) * rh - nperp);
  // The light's 1/b², from its energy and angular momentum: fixed along its path. With h = 1 (the path's shape
  // doesn't depend on its scale), its speed in the flat picture is exactly √(1/b² + u³), its speed across exactly u:
  // each step is held to both, so no rounding can turn it round where the physics has no turning point (deep inside,
  // the two terms nearly cancel, and an unconstrained step does).
  float pl = length(nperp);
  float B = eI * eI / max(rc * rc * pl * pl, 1e-30);
  float sgn = beta - nr >= 0. ? 1. : -1.;
  vec3 tdir = pl > 1e-7 ? -nperp / pl : vec3(0.);
  float u0 = 1. / rc;
  vec3 w0 = sgn * sqrt(max(B - u0 * u0 + u0 * u0 * u0, 0.)) * rh + u0 * tdir;

  // 2. Back along the light's path.
  vec3 x = uCam, v = pl > 1e-7 ? w0 : w;
  vec3 col = vec3(0.);
  float trans = 1.;
  bool escaped = false;
  int image = 0; // which image of the disc: 0 seen directly, 1 and on bent round the black hole
  float rfar = max(40., rc * 1.6);
  float jit = 1.; // no scatter along the path: it blurs the sky's detail (the disc's haze, integrated exactly, doesn't band)
  if (!past && !off && pl <= 1e-7) {
    escaped = sgn > 0.;
  } else if (!past && !off) {
    for (int i = 0; i < 1200; i++) {
      if (i >= uSteps) break;
      float r = length(x);
      float dl = clamp(0.06 * r, 2e-6, 1e5) / max(length(v), 1e-30);
      if (i == 0) dl *= jit;
      vec3 a = -1.5 * x / (r * r * r * r * r);
      vec3 vh = v + 0.5 * dl * a;
      vec3 xn = x + dl * vh;
      float rn = length(xn);
      vec3 an = -1.5 * xn / (rn * rn * rn * rn * rn);
      vec3 vn = vh + 0.5 * dl * an;
      {
        float un = 1. / rn;
        vec3 rhn = xn * un;
        float vr = dot(vn, rhn);
        vec3 vt = vn - vr * rhn;
        float lt = length(vt);
        vt = lt > 0. ? vt * (un / lt) : vt;
        vn = (vr >= 0. ? 1. : -1.) * sqrt(max(B - un * un + un * un * un, 0.)) * rhn + vt;
      }
      // The disc's glow: hot gas thickening round it, which light passing near the disc picks up on the way, so the
      // disc is soft-edged and haloed rather than a sheet. Its temperature and Doppler shift as the disc's own.
      if (uDisc == 1) {
        vec3 mid = 0.5 * (x + xn);
        float rm = length(mid.xy), hz = 0.12 * rm + 0.15;
        if (min(abs(x.z), abs(xn.z)) < 3. * hz && rm > uDiscIn * 0.85 && rm < uDiscOut * 1.4) {
          // The haze across this stretch, integrated exactly in height (its thickness is a gaussian), not sampled at
          // one point, so neighbouring rays don't step together into bands.
          float fall = hazeAcross(x.z / hz, xn.z / hz);
          // Its brightness, which changes fast with distance from the centre, taken at a point along the stretch that
          // differs from pixel to pixel and frame to frame (not always its middle, which lines up into stripes across
          // the disc); the anti-aliasing averages the frames. The path itself is untouched.
          float hj = fract(hash12(floor(gl_FragCoord.xy)) + fract(uSeed * 0.618034));
          float rh = length(mix(x, xn, hj).xy);
          float xx = uDiscIn / max(rh, uDiscIn);
          float pr = pow(xx, 0.75) * pow(max(1. - sqrt(xx), 0.), 0.25) / 0.488;
          float ut = inversesqrt(max(1. - 1.5 / rm, 1e-3)), Om = sqrt(0.5 / (rm * rm * rm));
          float gD = G / (ut * (1. - Om * bz));
          vec3 hue = blackbody(uDiscT * pr * (uShift == 1 ? pow(gD, 2.5) : 1.));
          hue /= max(luma(hue), 1e-4);
          hue = max(mix(vec3(1.), hue, 1.6 + (uShift == 1 ? 2.6 * smoothstep(1., 1.6, gD) : 0.)), 0.); // as the disc's
          // (Its outer edge tapers further out since 15 October 2026: seen edge-on, the light's path through the haze is
          // longest right at the edge, so where it stopped short the disc ended at its brightest, a hard stop while The
          // Van holds still; John: "Can we make the edge of the accretion disk fuzzier?")
          float ed = smoothstep(uDiscIn * 0.85, uDiscIn * 1.5, rh) * (1. - smoothstep(uDiscOut * 0.3, uDiscOut * 1.35, rh));
          col += trans * hue * pow(pr, 3.) * ed * fall * min(pow(gD, 3.), 8.) * uDiscGain * 0.35 * length(xn - x) / hz;
        }
      }
      if (uDisc == 1 && x.z * xn.z < 0.) {
        float t = x.z / (x.z - xn.z);
        vec3 p = mix(x, xn, t);
        float rp = length(p.xy);
        if (rp > uDiscIn && rp < uDiscOut) {
          vec4 dc = disc(p, rp, bz, G, normalize(vh), image);
          image++;
          col += trans * dc.rgb * dc.a;
          trans *= 1. - dc.a;
        }
      }
      x = xn;
      v = vn;
      if (rn < 1. && dot(x, v) < 0.) break;
      if (rn > rfar && dot(x, v) > 0.) { escaped = true; break; }
      if (trans < 0.01) break;
    }
  }

  // The disc's very brightest light, compressed as far as uDiscCap says (late in the fall, where the disc is brightened):
  // above 1 it rises ever more slowly towards 4, so its beamed light glows round rather than flaring into a flicker.
  if (uDiscCap > 0.) {
    float lc = luma(col);
    if (lc > 1.) col *= mix(1., (1. + (lc - 1.) / (1. + (lc - 1.) / 3.)) / lc, uDiscCap);
  }

  // 3. The sky, where the light came from.
  vec3 D = escaped ? normalize(v) : w;
  float foot = max(length(dFdx(D)), length(dFdy(D)));
  if (escaped) col += trans * shiftLight(sky(D, foot), G);
  if (off) col = vec3(0.);
  // A pixel gone wrong (not a number, or infinite) is dropped, so it can't spread through the glow and the exposure
  // into the whole picture.
  if (any(isnan(col)) || any(isinf(col))) col = vec3(0.);
  col = min(col, vec3(30000.));
#ifdef FEEDBACK
  o = gKey;
  return;
#endif
  // Alpha carries the brightness's logarithm, for the auto exposure's geometric mean (ADAPT).
  o = vec4(col, log(max(luma(col), 0.05))); // the black shadow doesn't pull the exposure up
}
`,y=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uSrc;
uniform vec2 uTexel;
uniform float uKnee;
void main() {
  vec3 c = vec3(0.);
  for (int i = 0; i < 4; i++) { vec2 off = vec2(float(i % 2), float(i / 2)) - 0.5; c += texture(uSrc, vUv + off * uTexel).rgb; }
  c *= 0.25;
  float l = max(c.r, max(c.g, c.b));
  o = vec4(c * max(l - uKnee, 0.) / max(l, 1e-4) * min(1., 40. / max(l, 1e-4)), 1.);
}
`,b=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uSrc;
uniform vec2 uTexel;
vec3 s(vec2 d) { return texture(uSrc, vUv + d * uTexel).rgb; }
void main() {
  vec3 c = s(vec2(0)) * 0.125;
  c += (s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1))) * 0.125;
  c += (s(vec2(-2, -2)) + s(vec2(2, -2)) + s(vec2(-2, 2)) + s(vec2(2, 2))) * 0.03125;
  c += (s(vec2(0, -2)) + s(vec2(0, 2)) + s(vec2(-2, 0)) + s(vec2(2, 0))) * 0.0625;
  o = vec4(c, 1.);
}
`,x=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uSrc;
uniform vec2 uTexel;
vec3 s(vec2 d) { return texture(uSrc, vUv + d * uTexel).rgb; }
void main() {
  vec3 c = s(vec2(0)) * 4.;
  c += (s(vec2(-1, 0)) + s(vec2(1, 0)) + s(vec2(0, -1)) + s(vec2(0, 1))) * 2.;
  c += s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1));
  o = vec4(c / 16., 1.);
}
`,S=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uScene, uGlow, uAdapt;
uniform float uExposure, uGlowGain, uWhite, uFlash, uCollapse;
uniform int uAuto;
uniform int uFlat; // 1 for the whole sky's map: no darkening towards the edges (they're behind you, not the lens's edge)
uniform vec2 uRes;
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0., 1.); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  // The close, where the theory ends (John: "everything pulls into a bright flash at a point and then the simulation
  // stops"): past the last moment traced, the picture is drawn in from the sides to a point, its light concentrated
  // as it goes, and flashes. Not traced light: the end of what the simulator can show.
  float k = 1. + 90. * uCollapse * uCollapse;
  vec2 d = vUv - 0.5, uv = d * k + 0.5;
  bool inPic = uv.x >= 0. && uv.x <= 1. && uv.y >= 0. && uv.y <= 1.;
  vec3 c = inPic ? texture(uScene, uv).rgb + texture(uGlow, uv).rgb * uGlowGain : vec3(0.);
  c *= 1. + (k - 1.) * 0.6;
  vec2 da = d * vec2(uRes.x / uRes.y, 1.);
  float c2 = uCollapse * uCollapse;
  c += vec3(1., 0.96, 0.9) * c2 * 0.02 / (dot(da, da) + 0.0004);
  // Auto exposure: the picture's average brightness, adapted over half a second (ADAPT), brought to a middle grey,
  // within limits, so the last flash still blows out.
  float avg = exp(texture(uAdapt, vec2(0.5)).r);
  float auto = uAuto == 1 ? clamp(0.05 / max(avg, 1e-5), 0.05, 1.3) : 1.;
  c = aces(c * uExposure * auto * uFlash);
  vec2 q = vUv - 0.5;
  if (uFlat == 0) c *= 1. - 0.35 * dot(q, q) * 1.6;
  c = pow(c, vec3(1. / 2.2));
  c = mix(c, vec3(1.), uWhite);
  c += (hash12(gl_FragCoord.xy) - 0.5) / 255.;
  o = vec4(c, 1.);
}
`,C=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uScene, uPrev;
uniform float uLevel, uRate;
void main() {
  float l = textureLod(uScene, vec2(0.5), uLevel).a;
  float prev = texture(uPrev, vec2(0.5)).r;
  float a = mix(prev, l, uRate);
  if (isnan(a) || isinf(a)) a = isnan(l) || isinf(l) ? -2.5 : l;
  o = vec4(a, 0., 0., 1.);
}
`,w=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uCur, uHist;
uniform vec2 uTexel;
uniform float uBlend;
void main() {
  vec4 c = texture(uCur, vUv);
  vec3 mn = c.rgb, mx = c.rgb;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 n = texture(uCur, vUv + vec2(float(x), float(y)) * uTexel).rgb;
    mn = min(mn, n);
    mx = max(mx, n);
  }
  vec3 h = clamp(texture(uHist, vUv).rgb, mn, mx);
  vec3 m = mix(h, c.rgb, uBlend);
  if (any(isnan(m)) || any(isinf(m))) m = any(isnan(c.rgb)) ? vec3(0.) : c.rgb;
  o = vec4(m, c.a);
}
`,T=new WeakMap;function E(e,t=`fig`,n={}){let r=`${t}|${n.weight??500}|${n.sans?`s`:`m`}`,i=T.get(e);i||T.set(e,i=new Map);let a=performance.now(),o=i.get(r);if(o&&a-o.at<500)return o.font;let s=getComputedStyle(e),c=s.getPropertyValue(`--dash-${t}`).trim()||`10px`,l=s.getPropertyValue(n.sans?`--font-sans`:`--font-mono`).trim()||(n.sans?`sans-serif`:`monospace`),u=`${n.weight??500} ${c} ${l}`;return i.set(r,{at:a,font:u}),u}function D(e){e.font=E(e.canvas,`small`,{weight:600,sans:!0}),e.letterSpacing=`${(.22*(parseFloat(e.font.split(` `)[1])||10.5)).toFixed(2)}px`}var O=e=>{e.letterSpacing=`0px`},k=.35,A=.6;function j(e){let t=[...e?.views??[]].sort((e,t)=>e.at-t.at),n=e?.lights??[],r=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};return{viewAt(e){let n=null;for(let r of t)r.at<=e&&(n=r.view);return n},lit(e){let t={};for(let i of n){let n=Math.min(r((e-i.from)/k),1-r((e-i.to)/A));n>0&&(t[i.what]=Math.max(t[i.what]??0,n))}return t},playsBetween(t,n){return(e?.plays??[]).filter(e=>e.at>t&&e.at<=n)},names:[...new Set(n.map(e=>e.what))],views:t.map(e=>e.view)}}function M(e,t){let n=e?new Audio(e):null;n&&(n.preload=`auto`);let r=!0,i=c(`Narration (N)`,``,()=>l()),a=()=>{i.innerHTML=o(r?`<path d="M2.5 6v4h2.6L8.6 13V3L5.1 6z" fill="currentColor"/><path d="M10.6 5.4a3.6 3.6 0 0 1 0 5.2M12.3 3.7a6 6 0 0 1 0 8.6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`:`<path d="M2.5 6v4h2.6L8.6 13V3L5.1 6z" fill="currentColor"/><path d="M10.5 6l3.5 4M14 6l-3.5 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`),i.classList.toggle(`is-on`,r),i.title=r?`Narration on (N)`:`Narration off (N)`,i.setAttribute(`aria-label`,i.title)};a(),n||(i.hidden=!0);function s(){if(!n)return;if(!r||!t.active()){n.paused||n.pause();return}let e=t.ended(),i=t.time(),a=e?n.currentTime<i-.4:Math.abs(n.currentTime-i)>.4;(t.playing()||e)&&!t.paused?.()?(a&&(n.currentTime=i),n.paused&&!n.ended&&(e||i<(n.duration||1/0))&&n.play().catch(()=>{})):(n.paused||n.pause(),a&&(n.currentTime=i))}function l(){r=!r,a(),s()}return{button:i,sync:s,toggle:l,audio:n,get on(){return r}}}export{u as C,o as S,i as T,p as _,O as a,c as b,b as c,v as d,x as f,m as g,h,D as i,S as l,f as m,j as n,C as o,_ as p,E as r,y as s,M as t,w as u,g as v,l as w,d as x,a as y};