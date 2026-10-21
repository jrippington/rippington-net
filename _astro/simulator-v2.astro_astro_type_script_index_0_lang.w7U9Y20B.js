import{t as e}from"./kit.Bqo6d9YU.js";var t=19196125e6,n=t/299792458,r=9.80665;function i(e,i){let a=Math.sqrt(1-1/i),o=Math.sqrt(1/e),s=i**1.5/2,c=Math.acos(Math.min(1,Math.max(-1,2*e/i-1))),l=s*(c+Math.sin(c)),u=s*Math.PI;return{r:e,beta:o,vRain:(o-a*Math.sqrt(Math.max(0,1/e-1/i)))/(1/e+a*a),tau:l*n,left:(u-l)*n,vStatic:e>1?Math.sqrt(Math.max(0,(1/e-1/i)/(1-1/i))):NaN,tide:299792458**2*2/(t*t*e*e*e)/r}}var a=e=>299792458**2/(2*t*e*e*Math.sqrt(1-1/e))/r,o=e=>{let t=e*e-Math.sqrt(e**4-3*e*e);return(1-1/t)*(1+e*e/(t*t))};function s(e){let t=Math.sqrt(3)+1e-9,n=200;if(o(t)>e*e)return NaN;for(let r=0;r<200;r++){let r=(t+n)/2;o(r)<e*e?t=r:n=r}return(t+n)/2}function c(e,t=3e-4,n=2e-5){let r=Math.sqrt(1-1/e),i=t=>{let n=1/Math.sqrt(1-t*t);return{E:n*r,L:n*t*e}},a=0,o=.999999,c=r,l=0;for(let e=0;e<200;e++){let e=(a+o)/2,n=i(e),r=s(n.E);n.L<(1-t)*r?a=e:o=e}({E:c,L:l}=i(a));let u=e=>1/(e*e)-2*l*l/e**3+3*l*l/e**4,d=[0],f=[e],p=[0],m=[0],h=[],g=[],_=[],v=e,y=0,b=0,x=0,S=0,C=(e,t)=>{let n=Math.sqrt(1/e),r=1-n*n,i=Math.abs(r)>1e-6?(t+n*c)/r:(1+l*l/(e*e)-c*c)/(2*c),a=c+n*i;return[i/a,l/e/a,a]};{let[e,t,n]=C(v,y);h.push(e),g.push(t),_.push(n)}for(let e=0;e<4e5&&v>n;e++){let e=Math.abs(y)/v+Math.abs(l)/(v*v),t=Math.min(.004/Math.max(e,1e-12),.02*Math.sqrt(v*v*v)),n=(e,t)=>[t,-.5*u(e),l/(e*e)],r=n(v,y),i=n(v+.5*t*r[0],y+.5*t*r[1]),a=n(v+.5*t*i[0],y+.5*t*i[1]),o=n(v+t*a[0],y+t*a[1]),s=v+t/6*(r[0]+2*i[0]+2*a[0]+o[0]),c=y+t/6*(r[1]+2*i[1]+2*a[1]+o[1]),w=b+t/6*(r[2]+2*i[2]+2*a[2]+o[2]);if(!(s>0))break;S+=Math.hypot((v>2.5?1.6:1)*Math.log(s/v),w-b),v=s,y=Math.min(c,0),b=w,x+=t,d.push(S),f.push(v),p.push(b),m.push(x);let[T,E,D]=C(v,y);h.push(T),g.push(E),_.push(D)}return{E:c,L:l,total:S,s:Float64Array.from(d),r:Float64Array.from(f),phi:Float64Array.from(p),tau:Float64Array.from(m),vr:Float64Array.from(h),vt:Float64Array.from(g),g:Float64Array.from(_)}}function l(e,t){let n=Math.min(1,Math.max(0,t))*e.total,r=e.s,i=0,a=r.length-1;for(;a-i>1;){let e=i+a>>1;r[e]<=n?i=e:a=e}let o=r[a]>r[i]?(n-r[i])/(r[a]-r[i]):0,s=e=>e[i]+(e[a]-e[i])*o,c=e.tau[e.tau.length-1];return{r:Math.exp(Math.log(e.r[i])+(Math.log(e.r[a])-Math.log(e.r[i]))*o),phi:s(e.phi),tau:s(e.tau),left:c-s(e.tau),vr:s(e.vr),vt:s(e.vt),g:Math.exp(Math.log(e.g[i])+(Math.log(e.g[a])-Math.log(e.g[i]))*o),tauEnd:c}}var u=(e,t)=>i(e,1/0).tide*(1+1.5*t*t/(e*e));function d(e){let t=e.r.length,r=new Float64Array(t),i=new Float64Array(t),a=e.tau[t-1],o=0;for(let s=0;s<t;s++){s&&(o+=.5*(e.g[s]+e.g[s-1])*(e.tau[s]-e.tau[s-1]));let t=Math.sqrt(e.r[s]);r[s]=o+2*Math.log(1+t)-2*t,i[s]=(a-e.tau[s])*n}return{r:e.r,ef:r,left:i}}var f=(e,t,n)=>n+(e-t)+2*Math.log(Math.abs(e-1)/Math.abs(t-1)),p=e=>{let t=Math.floor(Math.log10(e));return`${(e/10**t).toFixed(1)} × 10<sup>${String(t).replace(`-`,`−`)}</sup>`},m=e=>{for(let[t,n]of[[0xde0b6b3a7640000,`quintillion`],[0x38d7ea4c68000,`quadrillion`],[0xe8d4a51000,`trillion`],[1e9,`billion`],[1e6,`million`]])if(e>=t)return`${Number((e/t).toPrecision(2))} ${n}`;return`${e}`},h={r:e=>e>=1e3?Math.round(e).toLocaleString(`en-GB`):e>=100?`${Math.round(e)}`:e>=10?e.toFixed(1):e>=1?e.toFixed(2):e>=.1?e.toFixed(3):e>=.001?e.toFixed(4):p(e),km:e=>{let n=e*t/1e3,r=n/94607e8;return r>=.1?`${r>=10?Math.round(r).toLocaleString(`en-GB`):r.toFixed(1)} light-years`:n>=1e9?`${Number((n/1e9).toPrecision(3))} billion km`:n>=1e6?`${Number((n/1e6).toPrecision(3))} million km`:`${Math.round(n).toLocaleString(`en-GB`)} km`},left:e=>e>=864e3?`${Math.round(e/86400)} days`:e>=86400?`${(e/86400).toFixed(1)} days`:e>=3600?`${Math.floor(e/3600)} h ${Math.floor(e%3600/60)} min`:e>=600?`${Math.floor(e/60)} min`:e>=60?`${Math.floor(e/60)} min ${Math.floor(e%60)} s`:e>=10?`${Math.floor(e)} s`:e>=1?`${e.toFixed(1)} s`:e>=.001?`${Number((e*1e3).toPrecision(3))} ms`:e>=1e-6?`${Number((e*1e6).toPrecision(2))} µs`:`under 1 µs`,speed:e=>{if(e<.99)return`${(e*100).toFixed(1)}%`;let t=Math.min(Math.floor(-Math.log10(Math.max(1-e,1e-15)))+1,5);return`${(Math.floor(e*10**t)/10**t*100).toFixed(t-2)}%`},tide:e=>e<.001?p(e):e<10?`${Number(e.toPrecision(2))}`:e<1e6?Math.round(Number(e.toPrecision(3))).toLocaleString(`en-GB`):m(e),z:e=>{let t=e=>e<1e6?Math.round(e).toLocaleString(`en-GB`):m(e);if(Math.abs(e)<.005)return`0.00`;if(e>0)return e<10?e.toFixed(2):e<100?e.toFixed(1):t(e);let n=1/(1+e);return n<10?n.toFixed(2):n<100?n.toFixed(1):t(n)}},g=(e,t,n)=>`rgb(${e.map((e,r)=>Math.round(e+(t[r]-e)*Math.min(1,Math.max(0,n)))).join(`,`)})`,_=[234,244,248],v=[126,160,255],y=[64,96,255],b=[255,128,116],x=[228,52,44],S=e=>{if(e<0){let t=1/(1+e);return t<2?g(_,v,t-1):g(v,y,Math.log10(t/2)/Math.log10(500))}return e<1?g(_,b,e):g(b,x,Math.log10(e)/Math.log10(15))};function C(e){let t={},n=(n,r)=>{let i=document.createElement(`div`);i.className=`hp-row`,i.innerHTML=`<span class="hp-k">${r}</span><span class="hp-v"><b></b><small></small></span>`,e.append(i),t[n]={v:i.querySelector(`b`),u:i.querySelector(`small`)}};n(`dist`,`Distance from the centre`),n(`hor`,`Horizon`);let r=document.createElement(`div`);r.className=`hp-row`,r.innerHTML=`<span class="hp-k">Futures outside</span><span class="hp-v"><span class="hp-gauge">${`<i></i>`.repeat(12)}</span><small></small></span>`,e.append(r);let i=[...r.querySelectorAll(`i`)],a=r.querySelector(`small`);n(`left`,`Time left, on your clock`),n(`speed`,`Speed`),n(`tide`,`Tidal force, head to foot`),n(`za`,`Redshift ahead`),n(`zb`,`Redshift behind`),n(`eng`,`Engines`);let o=(e,n,r=``,i=``)=>{let a=t[e];a.v.innerHTML!==n&&(a.v.innerHTML=n),a.u.innerHTML!==r&&(a.u.innerHTML=r),a.v.style.color=i};return{set(e){o(`dist`,h.r(e.r),`r<sub>s</sub> · ${h.km(e.r)}`),o(`hor`,e.r>=1.6?`AHEAD`:e.r>=1?`APPROACHING`:`CROSSED`,``,e.r>=1.6?``:e.r>=1?`var(--amber)`:`var(--light-r)`),o(`left`,e.left===null?`—`:h.left(e.left),``,e.left!==null&&e.left<1?`var(--light-r)`:``),o(`speed`,e.speed===null?`—`:h.speed(e.speed),e.speed===null?``:e.r>1?`of c · past someone holding still here`:`of c · past someone falling in from far away`),o(`tide`,h.tide(e.tide),`× your weight`,e.tide<.1?`var(--light-g)`:e.tide<10?`var(--amber)`:`var(--light-r)`);for(let[t,n]of[[`za`,e.shiftAhead],[`zb`,e.shiftBehind]]){let e=Number.isFinite(n)&&n>0?1/n-1:NaN;o(t,Number.isFinite(e)?h.z(e):`—`,``,Number.isFinite(e)?S(e):``)}o(`eng`,e.engines);let t=e.outside<=0?0:Math.max(1,Math.round(e.outside*i.length));i.forEach((e,n)=>e.classList.toggle(`is-on`,n<t));let n=e.outside<=0?`NONE`:e.outside>=.9?`NEARLY ALL`:e.outside>=.6?`MOST`:e.outside>=.3?`SOME`:`FEW`;a.textContent!==n&&(a.textContent=n),r.classList.toggle(`is-none`,e.outside<=0)}}}var w=e=>new Promise(t=>setTimeout(t,e));async function T(e,t,n,r,i){e.innerHTML=``;let a=r.map(t=>{let n=document.createElement(`li`);return n.innerHTML=`<span></span><i></i><b></b>`,n.querySelector(`span`).textContent=t.label,e.append(n),n});for(let e=0;e<r.length;e++){let t=r[e],n=a[e],o=n.querySelector(`b`);n.className=`is-busy`,o.textContent=`···`,await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));let s=performance.now();await t.run?.();let c=(t.min??300)-(performance.now()-s);c>0&&await w(c),n.className=t.amber?`is-done is-amber`:`is-done`,o.textContent=t.done??`✓`,i?.(e+1,r.length)}await w(400),t.classList.add(`is-shown`),n.disabled=!1,n.focus({preventScroll:!0})}var E=[[3,{line:`SIMULATION RUNNING. TARGET: 6.5 BILLION SUNS`,detail:`TWO HUNDRED LIGHT-YEARS OUT. SOMEWHERE AHEAD, SOMETHING DARK`}],[3,{line:`TARGET IN SIGHT`,detail:`NOTHING THERE TO SEE. BUT THE STARS BEHIND IT ARE BENDING`}],[2.5,{line:`CLOSING. SLOWING TO HOLD`,detail:`THE MILKY WAY'S HEART, BENT INTO A RING ROUND THE DARK`}],[1/0,{line:`BRAKING`,detail:`THE DISC: GAS WHIRLING AT UP TO HALF THE SPEED OF LIGHT`}]],D=[[3,{line:`HOLDING STILL, 26 HORIZON RADII OUT`,detail:`ENGINES ON: A THIRD OF A G, JUST TO STAY PUT`}],[3.5,{line:`PREPARING TO CONTINUE…`,detail:`THE DISC'S FAR SIDE, BENT OVER THE TOP OF THE SHADOW AND UNDER IT`}],[2.5,{line:`RETURN JOURNEY: NOT GUARANTEED`,detail:`SIMULATION REALISM: MAXIMUM`}]],ee=D.reduce((e,[t])=>e+t,0),O=(e,t)=>{let n=0;for(let[r,i]of e)if(n+=r,t<n)return i;return e[e.length-1][1]};function k(e){if(e.stage===`approach`)return O(E,e.t);if(e.stage===`hold`)return O(D,e.t);let{p:t,r:n,tide:r,pTide:i}=e;return t>=.975?{line:`YOU ARE APPROACHING THE END OF SPACE AND TIME`,detail:``}:r>=10&&t<i+.03?{kind:`alert`,line:`TIDES: TEN TIMES YOUR WEIGHT`,detail:`NOTHING COULD SURVIVE THIS. THE SIMULATOR CARRIES ON, AS IF YOU WERE A POINT`}:r>=10?{kind:`alert`,line:`APPROACHING THE SPEED OF LIGHT`,detail:`ALL THE LIGHT OF THE UNIVERSE, CROWDING AHEAD OF YOU, BLUER AND BLUER`}:n<.05?{line:`EVERY TOMORROW YOU HAVE LEFT IS FURTHER IN`,detail:`BEHIND YOU AND BELOW, BLACK. NOTHING REACHES YOU FROM THE CENTRE`}:n<.4?{line:`THE UNIVERSE IS STILL FALLING IN AFTER YOU`,detail:`ITS LIGHT GATHERS INTO A RING. THE RING IS NARROWING`}:n<.8?{line:`RETURN JOURNEY: IMPOSSIBLE`,detail:`THE CENTRE IS NO LONGER A PLACE. IT IS A MOMENT IN TIME, AND IT IS COMING`}:n<1?{line:`EVENT HORIZON CROSSED`,detail:`NOTHING MARKED IT. NO LIGHT OF YOURS WILL EVER GET OUT`}:n<1.6?{kind:`alert`,line:`APPROACHING THE EVENT HORIZON`,detail:`YOU FEEL NOTHING. THE DARK FILLS HALF THE SKY`}:n<2.6&&t>.1?{kind:`flash`,line:`INTENSE SPACETIME CURVATURE`,detail:`NO ORBIT CAN LAST HERE. THE SKY WHEELS AROUND YOU`}:t<.04?{line:`ENGINES OFF. FALLING FREELY`,detail:`YOU WEIGH NOTHING, AND YOU WILL FEEL NOTHING UNTIL THE VERY END`}:n<8?{line:`THE SHADOW GROWS`,detail:`ITS GLOWING EDGE IS LIGHT FROM ALL OVER THE SKY, BENT ROUND IT`}:{line:`IN FREE FALL`,detail:`THE SIDE OF THE DISC TURNING TOWARDS YOU IS BLUER AND BRIGHTER`}}var A={instruments:`<path d="M3 4.5h10M3 8h6.5M3 11.5h8.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,behind:`<rect x="1.8" y="3.5" width="12.4" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 8H5.5m2-2-2 2 2 2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,spacetime:`<path d="M8 13.5 3 4.5M8 13.5l5-9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M2 2v12.5h12.5" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/>`},j=`sim-panels`,M=()=>{try{return JSON.parse(localStorage.getItem(j)??`{}`)}catch{return{}}},N=(e,t)=>{try{localStorage.setItem(j,JSON.stringify({...M(),[e]:t}))}catch{}};function P(e,t){let n=document.createElement(`button`);n.type=`button`,n.className=`hp-min`,n.title=`Shrink the ${t.label.toLowerCase()} to an icon`,n.setAttribute(`aria-label`,n.title),n.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8h9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,e.append(n);let r=document.createElement(`button`);r.type=`button`,r.className=`hp-icon ${e.dataset.anchor?`at-${e.dataset.anchor}`:``}`,r.title=`Show the ${t.label.toLowerCase()}`,r.setAttribute(`aria-label`,r.title),r.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true">${A[t.name]}</svg>`,e.after(r);let i=M()[t.name]??t.open,a=()=>{e.hidden=!i,r.hidden=i,t.onChange?.(i)},o=e=>{i=e,N(t.name,e),a()};return n.addEventListener(`click`,()=>o(!1)),r.addEventListener(`click`,()=>o(!0)),a(),{get open(){return i},set:o,toggle:()=>o(!i)}}var F=`#version 300 es
precision highp float;
const vec2 P[3] = vec2[3](vec2(-1., -1.), vec2(3., -1.), vec2(-1., 3.));
out vec2 vUv;
void main() { vUv = P[gl_VertexID] * 0.5 + 0.5; gl_Position = vec4(P[gl_VertexID], 0., 1.); }
`,te=`#version 300 es
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
uniform float uDiscIn, uDiscOut, uDiscT, uDiscGain;
uniform int uShift;
uniform sampler2D uSky;
uniform mat3 uSkyRot;
uniform float uSkyGain, uStarGain, uNebGain;
uniform int uSteps;
uniform float uSeed;
uniform vec2 uJitter; // this frame's offset within the pixel, for the temporal anti-aliasing

const float PI = 3.14159265;

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

// Value noise in 3D, in fractal octaves: for clouds on the sky without seams; octaves finer than a pixel's
// footprint fade to their average, so strongly lensed sky stays smooth rather than glittering.
float vnoise3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3. - 2. * f);
  return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float fbm3(vec3 p, float scale, float foot) {
  float v = 0., a = 0.5, s = scale;
  for (int i = 0; i < 6; i++) {
    float keep = 1. - smoothstep(0.2, 0.6, foot * s);
    v += a * mix(0.5, vnoise3(p * s), keep);
    s *= 2.07;
    a *= 0.5;
  }
  return v;
}

// Glowing nebulae along the galactic plane, procedural, for the lensing to swirl: wide clouds of hydrogen's red and
// pink, here and there blue, and a scattering of small bright knots.
vec3 nebulae(vec3 g, float foot) {
  float lat = asin(clamp(g.z, -1., 1.));
  float band = exp(-lat * lat * 26.);
  float n1 = fbm3(g + 7.3, 3.2, foot), n2 = fbm3(g - 2.1, 8., foot), hue = fbm3(g + 31., 2.2, foot);
  float clouds = smoothstep(0.5, 0.8, n1 * 0.75 + n2 * 0.4) * band;
  vec3 c = mix(vec3(1., 0.2, 0.3), vec3(1., 0.42, 0.72), smoothstep(0.38, 0.62, hue));
  c = mix(c, vec3(0.3, 0.68, 1.), smoothstep(0.58, 0.78, n2) * 0.65);
  vec3 col = c * clouds * (0.35 + 1.8 * n2 * n2);
  vec3 cp = g * 6., id = floor(cp), fr = fract(cp) - 0.5;
  vec3 off = (vec3(hash13(id + 3.1), hash13(id + 5.7), hash13(id + 9.3)) - 0.5) * 0.4;
  float dd = length(fr - off);
  float knot = hash13(id + 91.) > 0.8 ? exp(-dd * dd * 110.) * exp(-lat * lat * 10.) : 0.;
  col += knot * mix(vec3(1., 0.36, 0.48), vec3(0.55, 0.92, 1.), hash13(id + 13.)) * 2.5;
  return col;
}

vec3 sky(vec3 D, float foot) {
  vec3 g = uSkyRot * D;
  vec2 uv = vec2(0.5 - atan(g.y, g.x) / (2. * PI), 0.5 - asin(clamp(g.z, -1., 1.)) / PI); // longitude rising leftwards, as the map is drawn
  float lod = clamp(log2(max(foot, 1e-6) * 4096. / (2. * PI)), 1., 11.); // never sharper than half the map: its grain, magnified, shows
  vec3 c = max(textureLod(uSky, uv, lod).rgb - 0.012, 0.) * uSkyGain; // a black level: the map's dark-sky grain, magnified, shows
  c += nebulae(g, foot) * uNebGain;
  c = mix(vec3(luma(c)), c, 0.88); // the Milky Way and its clouds a touch less saturated (the stars keep their colours)
  c += (starLayer(D, 30., 26., 320., foot) + starLayer(D, 68., 10., 420., foot) + starLayer(D, 140., 5., 520., foot)) * uStarGain;
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
  float edge = smoothstep(uDiscIn * 0.92, uDiscIn * 1.4, rp) * (1. - smoothstep(uDiscOut * 0.4, uDiscOut, rp)); // soft edges, in and out
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
  } else {
    vec2 uv = (fc * 2. - uRes) / min(uRes.x, uRes.y);
    float rho = length(uv);
    off = rho > 1.;
    float th = min(rho, 1.) * PI, az = atan(uv.y, uv.x);
    d = uFwd * cos(th) + (uRight * cos(az) + uUp * sin(az)) * sin(th);
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
        if (min(abs(x.z), abs(xn.z)) < 3. * hz && rm > uDiscIn * 0.85 && rm < uDiscOut * 1.1) {
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
          float ed = smoothstep(uDiscIn * 0.85, uDiscIn * 1.5, rh) * (1. - smoothstep(uDiscOut * 0.5, uDiscOut * 1.1, rh));
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

  // 3. The sky, where the light came from.
  vec3 D = escaped ? normalize(v) : w;
  float foot = max(length(dFdx(D)), length(dFdy(D)));
  if (escaped) col += trans * shiftLight(sky(D, foot), G);
  if (off) col = vec3(0.);
  // A pixel gone wrong (not a number, or infinite) is dropped, so it can't spread through the glow and the exposure
  // into the whole picture.
  if (any(isnan(col)) || any(isinf(col))) col = vec3(0.);
  col = min(col, vec3(30000.));
  // Alpha carries the brightness's logarithm, for the auto exposure's geometric mean (ADAPT).
  o = vec4(col, log(max(luma(col), 0.05))); // the black shadow doesn't pull the exposure up
}
`,ne=`#version 300 es
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
`,I=`#version 300 es
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
`,re=`#version 300 es
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
`,ie=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uScene, uGlow, uAdapt;
uniform float uExposure, uGlowGain, uWhite, uFlash, uCollapse;
uniform int uAuto;
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
  c *= 1. - 0.35 * dot(q, q) * 1.6;
  c = pow(c, vec3(1. / 2.2));
  c = mix(c, vec3(1.), uWhite);
  c += (hash12(gl_FragCoord.xy) - 0.5) / 255.;
  o = vec4(c, 1.);
}
`,ae=`#version 300 es
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
`,oe=`#version 300 es
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
`,se=(e,t)=>{let n=1,r=0;for(let i=e;i>0;i=Math.floor(i/t))n/=t,r+=i%t*n;return r},L={low:{steps:260,max:.5},medium:{steps:420,max:.75},high:{steps:700,max:1}};function ce(e){let t=e.getContext(`webgl2`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!t)return null;let n=t,r=!!n.getExtension(`EXT_color_buffer_float`)||!!n.getExtension(`EXT_color_buffer_half_float`);n.getExtension(`OES_texture_float_linear`);let i=(e,t)=>{let r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw Error(n.getShaderInfoLog(r)??`shader`);return r},a=i(n.VERTEX_SHADER,F),o=e=>{let t=n.createProgram();if(n.attachShader(t,a),n.attachShader(t,i(n.FRAGMENT_SHADER,e)),n.linkProgram(t),!n.getProgramParameter(t,n.LINK_STATUS))throw Error(n.getProgramInfoLog(t)??`program`);let r=new Map;return{p:t,u:e=>(r.has(e)||r.set(e,n.getUniformLocation(t,e)),r.get(e))}},s=o(te),c=o(ne),l=o(I),u=o(re),d=o(ie),f=o(ae),p=o(oe);n.bindVertexArray(n.createVertexArray());let m=n.createTexture();n.bindTexture(n.TEXTURE_2D,m),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));let h=new Image;h.decoding=`async`;let g=()=>{},_=new Promise(e=>{g=e});h.onload=()=>{n.bindTexture(n.TEXTURE_2D,m),n.texImage2D(n.TEXTURE_2D,0,n.SRGB8_ALPHA8,n.RGBA,n.UNSIGNED_BYTE,h),n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),g()},h.onerror=()=>g(),h.src=`/sky/milky-way.jpg`;let v=(e,t)=>{let i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),r?n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,e,t,0,n.RGBA,n.HALF_FLOAT,null):n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let a=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,a),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0),{tex:i,fb:a,w:e,h:t}},y=e=>{n.deleteTexture(e.tex),n.deleteFramebuffer(e.fb)},b=`medium`,x=.6,S=null,C=[],w=0,T=!1,E=0,D=[],ee=[0,0],O=0,k=[v(1,1),v(1,1)];for(let e of k)n.bindFramebuffer(n.FRAMEBUFFER,e.fb),n.clearColor(-2.5,0,0,1),n.clear(n.COLOR_BUFFER_BIT);let A=0,j=()=>{let t=Math.min(window.devicePixelRatio||1,2),r=Math.max(1,Math.round(e.clientWidth*t)),i=Math.max(1,Math.round(e.clientHeight*t));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i);let a=Math.max(64,Math.round(r*x)),o=Math.max(64,Math.round(i*x));if(S&&ee[0]===a&&ee[1]===o)return;S&&y(S),C.forEach(y),D.forEach(y),S=v(a,o),C=[v(a,o),v(a,o)],T=!1,n.bindTexture(n.TEXTURE_2D,S.tex),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),O=Math.floor(Math.log2(Math.max(a,o))),D=[];let s=Math.max(1,a>>1),c=Math.max(1,o>>1);for(let e=0;e<5&&s>8&&c>8;e++)D.push(v(s,c)),s>>=1,c>>=1;ee=[a,o]},M=null,N=[],P=0,ce=!1,R=(e,t)=>{M&&M.w===e&&M.h===t||(M&&y(M),N.forEach(y),M=v(e,t),N=[v(e,t),v(e,t)],ce=!1)},z=(t,r,i,a)=>{n.useProgram(t.p),n.bindFramebuffer(n.FRAMEBUFFER,r?r.fb:null),n.viewport(0,0,r?r.w:e.width,r?r.h:e.height),i&&(n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i),n.uniform1i(t.u(`uSrc`),0)),a&&n.uniform2f(t.u(`uTexel`),a[0],a[1]),n.drawArrays(n.TRIANGLES,0,3)},B=16,V=0;function H(e,t){let n=performance.now();V&&(B=B*.9+(n-V)*.1),V=n;let r=L[b];B>30&&x>.3?x=Math.max(.3,x*.94):B<20&&x<r.max&&(x=Math.min(r.max,x*1.03)),j();let i=S;E=E%64+1,U(i,e,e.right,e.up,e.fwd,r.steps,n),W(e,i),t&&G(e,t,r.steps,n)}function U(e,t,r,i,a,o,c){n.useProgram(s.p),n.bindFramebuffer(n.FRAMEBUFFER,e.fb),n.viewport(0,0,e.w,e.h),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,m);let l=s.u;n.uniform1i(l(`uSky`),0),n.uniform2f(l(`uRes`),e.w,e.h),n.uniform1f(l(`uTime`),t.time),n.uniform3fv(l(`uCam`),t.cam),n.uniform3fv(l(`uRight`),r),n.uniform3fv(l(`uUp`),i),n.uniform3fv(l(`uFwd`),a),n.uniform1f(l(`uTan`),t.tanHalf),n.uniform1i(l(`uProj`),+!!t.allRound),n.uniform1f(l(`uV`),t.vRain),n.uniform1f(l(`uGam`),t.gRain),n.uniform3fv(l(`uVdir`),t.vDir),n.uniform1i(l(`uDisc`),+!!t.disc),n.uniform1f(l(`uDiscIn`),3),n.uniform1f(l(`uDiscOut`),9),n.uniform1f(l(`uDiscT`),5200),n.uniform1f(l(`uDiscGain`),.24),n.uniform1i(l(`uShift`),+!!t.shift),n.uniformMatrix3fv(l(`uSkyRot`),!1,t.skyRot),n.uniform1f(l(`uSkyGain`),1.6*t.skyGain),n.uniform1f(l(`uNebGain`),.24*t.skyGain),n.uniform1f(l(`uStarGain`),.9),n.uniform1i(l(`uSteps`),t.steps??o),n.uniform1f(l(`uSeed`),c%1e3*.37),n.uniform2f(l(`uJitter`),se(E,2)-.5,se(E,3)-.5),n.drawArrays(n.TRIANGLES,0,3)}function W(t,r){n.bindTexture(n.TEXTURE_2D,r.tex),n.generateMipmap(n.TEXTURE_2D);{let e=k[A],t=k[1-A];n.useProgram(f.p),n.bindFramebuffer(n.FRAMEBUFFER,t.fb),n.viewport(0,0,1,1),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,r.tex),n.uniform1i(f.u(`uScene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.tex),n.uniform1i(f.u(`uPrev`),1),n.uniform1f(f.u(`uLevel`),O),n.uniform1f(f.u(`uRate`),1-Math.exp(-Math.min(.1,B/1e3)/.6)),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0),A=1-A}let i=C[w],a=C[1-w];if(n.useProgram(p.p),n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,a.w,a.h),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,r.tex),n.uniform1i(p.u(`uCur`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,i.tex),n.uniform1i(p.u(`uHist`),1),n.uniform2f(p.u(`uTexel`),1/r.w,1/r.h),n.uniform1f(p.u(`uBlend`),T?.12:1),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0),w=1-w,T=!0,D.length){n.useProgram(c.p),n.uniform1f(c.u(`uKnee`),2.2),z(c,D[0],a.tex,[1/a.w,1/a.h]);for(let e=1;e<D.length;e++)z(l,D[e],D[e-1].tex,[1/D[e-1].w,1/D[e-1].h]);n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE);for(let e=D.length-1;e>0;e--)z(u,D[e-1],D[e].tex,[1/D[e].w,1/D[e].h]);n.disable(n.BLEND)}n.useProgram(d.p),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,a.tex),n.uniform1i(d.u(`uScene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,D.length?D[0].tex:a.tex),n.uniform1i(d.u(`uGlow`),1),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,k[A].tex),n.uniform1i(d.u(`uAdapt`),2),n.uniform1i(d.u(`uAuto`),+!!t.autoExposure),n.uniform1f(d.u(`uExposure`),t.exposure),n.uniform1f(d.u(`uGlowGain`),D.length?.5:0),n.uniform1f(d.u(`uWhite`),t.white),n.uniform1f(d.u(`uFlash`),t.flash),n.uniform1f(d.u(`uCollapse`),t.collapse),n.uniform2f(d.u(`uRes`),e.width,e.height),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,e.width,e.height),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0)}function G(t,r,i,a){let[o,s,c,l]=r.rect.map(Math.round);if(c<8||l<8)return;R(Math.max(32,Math.round(c*x)),Math.max(20,Math.round(l*x)));let u=M;U(u,t,r.right,r.up,r.fwd,i,a);let f=N[P],m=N[1-P];n.useProgram(p.p),n.bindFramebuffer(n.FRAMEBUFFER,m.fb),n.viewport(0,0,m.w,m.h),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.tex),n.uniform1i(p.u(`uCur`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,f.tex),n.uniform1i(p.u(`uHist`),1),n.uniform2f(p.u(`uTexel`),1/u.w,1/u.h),n.uniform1f(p.u(`uBlend`),ce?.12:1),n.drawArrays(n.TRIANGLES,0,3),P=1-P,ce=!0,n.useProgram(d.p),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,m.tex),n.uniform1i(d.u(`uScene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,m.tex),n.uniform1i(d.u(`uGlow`),1),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,k[A].tex),n.uniform1i(d.u(`uAdapt`),2),n.uniform1i(d.u(`uAuto`),+!!t.autoExposure),n.uniform1f(d.u(`uExposure`),t.exposure),n.uniform1f(d.u(`uGlowGain`),0),n.uniform1f(d.u(`uWhite`),t.white),n.uniform1f(d.u(`uFlash`),t.flash),n.uniform1f(d.u(`uCollapse`),t.collapse),n.uniform2f(d.u(`uRes`),c,l),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(o,s,c,l),n.drawArrays(n.TRIANGLES,0,3),n.viewport(0,0,e.width,e.height),n.activeTexture(n.TEXTURE0)}return{draw:H,setQuality(e){b=e,x=Math.min(x,L[e].max)},get scale(){return x},get fps(){return 1e3/B},resetHistory(){T=!1,ce=!1},skyReady:_,destroy(){S&&y(S),C.forEach(y),D.forEach(y),M&&y(M),N.forEach(y),n.getExtension(`WEBGL_lose_context`)?.loseContext()}}}var R=`143,216,238`,z=`242,180,90`,B=`255,138,128`,V=`234,244,248`,H=(e,t)=>`rgba(${e},${t})`,U=e=>{for(let[t,n]of[[0xde0b6b3a7640000,`QUINTILLION`],[0x38d7ea4c68000,`QUADRILLION`],[0xe8d4a51000,`TRILLION`],[1e9,`BILLION`],[1e6,`MILLION`],[1e3,`THOUSAND`]])if(e>=t)return`${Number((e/t).toPrecision(2))} ${n}`;return`${Number(e.toPrecision(2))}`},W=e=>{let t=10**Math.floor(Math.log10(e/3)),n=e/3/t;return(n<1.5?1:n<3.5?2:5)*t},G=.3;function le(e,t){let n=[],r=1/0;for(let e=0;e<t.r.length;e++)(e===t.r.length-1||Math.abs(Math.log(t.r[e]/r))>.003)&&(n.push([t.r[e],t.ef[e]]),r=t.r[e]);let i=n[0][0],a=n[0][1],o=0,s=0;function c(t){let r=Math.min(2,window.devicePixelRatio||1),c=e.clientWidth,l=e.clientHeight;if(c<40||l<40)return;(e.width!==Math.round(c*r)||e.height!==Math.round(l*r))&&(e.width=Math.round(c*r),e.height=Math.round(l*r));let u=e.getContext(`2d`);u.setTransform(r,0,0,r,0,0),u.clearRect(0,0,c,l);let d=performance.now(),p=s?Math.min(.2,(d-s)/1e3):1;s=d;let m=t.phase===`fall`&&t.ef!==void 0,h=Math.abs(t.r-1)<1e-5?t.r+2e-5:t.r,g=m?t.ef:a,_=h>=G?2.27*h**.8:2.27*G**.8*(h/G);o=o&&Math.abs(Math.log(_/o))>.25?Math.exp(Math.log(o)+(Math.log(_)-Math.log(o))*(1-Math.exp(-p/.35))):_;let v=h<G?(G/h)**.75:1,y=c-18-6,b=l-6-36,x=18+y/2,S=6+b/2,C=y/2/o,w=e=>x+(e-h)*C,T=(e,t)=>{let n=h-e;return[w(e),S-(n+(t-g-n)*v)*C]},E=(e,t)=>{let n=h-e;return g+n+((S-t)/C-n)/v},D=h+o,ee=h>1,O=e=>f(e,h,g),k=e=>{u.beginPath(),e.forEach(([e,t],n)=>{let[r,i]=T(e,t);n?u.lineTo(r,i):u.moveTo(r,i)}),u.stroke()};u.save(),u.beginPath(),u.rect(18,6,y,b),u.clip();let A=e=>(i/Math.max(e,1e-9))**3,j=u.createLinearGradient(w(0),0,w(D),0);for(let e=0;e<=24;e++){let t=D*e/24,n=A(Math.max(t,D*.004));j.addColorStop(e/24,H(B,Math.min(.42,Math.max(0,.02+.028*Math.log10(n)))))}u.fillStyle=j,u.fillRect(w(0),6,w(D)-w(0),b),u.fillStyle=`rgba(0,0,0,0.55)`,u.fillRect(18,6,Math.max(0,w(0)-18),b),u.lineWidth=1,u.strokeStyle=H(R,.11);for(let e=-3;e<=9;e++){let t=6+e*b/6,n=E(D,t);if(k([[D,n],[0,n+D]]),D>1.02){let e=[];for(let t=0;t<=48;t++){let r=1+(D-1)*Math.exp(t/48*-7);e.push([r,f(r,D,n)])}k(e)}let r=E(0,t),i=[];for(let e=0;e<=40;e++){let t=.9999*(1-Math.exp(e/40*-6))/(1-Math.exp(-6));i.push([t,r+t+2*Math.log(1-t)])}k(i)}u.fillStyle=H(B,.06),u.fillRect(w(0),6,w(1)-w(0),b),u.setLineDash([5,4]),u.strokeStyle=H(z,.9),u.lineWidth=1.3,u.beginPath(),u.moveTo(w(1),6),u.lineTo(w(1),6+b),u.stroke(),u.setLineDash([]),u.strokeStyle=H(B,.95),u.lineWidth=1.5,u.beginPath();for(let e=6,t=0;e<=6+b+5;e+=5,t++)u.lineTo(w(0)+(t%2?3:-1),e);if(u.stroke(),t.phase!==`approach`&&v<2){let e=m?n.findIndex(([e])=>e<=h):0,t=[[i,Math.min(E(i,6+b+20),a)],[i,m?a:g]];if(m){for(let r=0;r<e;r++)t.push(n[r]);t.push([h,g])}u.lineWidth=1.4,u.strokeStyle=H(R,.55),k(t);let r=[[h,g]];for(let t=Math.max(0,e);t<n.length&&(r.push(n[t]),!(T(n[t][0],n[t][1])[1]<-14));t++);u.setLineDash([2,4]),u.strokeStyle=H(R,.4),k(r),u.setLineDash([])}let M=[[h,g]];for(let e=1;e<=160;e++){let t=ee?h+(D*1.05-h)*(e/160):h*(1-e/160),n=O(t);if(M.push([t,n]),T(t,n)[1]<-14)break}let N=new Path2D,P=(e,t,n=!1)=>{let[r,i]=T(e,t);n?N.moveTo(r,i):N.lineTo(r,i)};P(h,g,!0);for(let[e,t]of M)P(e,t);if(ee){let[e]=M[M.length-1];P(e,E(e,-14)),P(0,E(0,-14))}P(0,g+h),N.closePath();let F=Math.max(18,Math.min(18+y,w(1)));u.save(),u.beginPath(),u.rect(F,6,18+y-F,b),u.clip(),u.fillStyle=H(R,.3),u.fill(N),u.restore(),u.save(),u.beginPath(),u.rect(18,6,F-18,b),u.clip(),u.fillStyle=H(B,.32),u.fill(N),u.restore(),u.lineWidth=1,u.lineCap=`round`;let te=E(h,-14);for(let e=1;e<11;e++){let t=e/11,n=e=>-1+t*2*e/(e+1),r=h,i=g,a=r<1,o=Math.max(1e-12,(te-g)/200),s=[[r,i]],c=()=>{u.strokeStyle=a?H(B,.4):H(R,.34),k(s)};for(let e=0;e<600;e++){let e=r<4*o?Math.max(1e-14,r/4):o,t=n(r+.5*e*n(r)),l=r+e*t;if(l<=0){s.push([0,i-r/t]);break}if(!a&&l<1){let t=i+(r-1)/(r-l)*e;s.push([1,t]),c(),a=!0,s=[[1,t]]}if(r=l,i+=e,s.push([r,i]),T(r,i)[1]<-14||r>D*1.05)break}c()}u.lineCap=`butt`,u.lineWidth=1.7,u.strokeStyle=H(V,.95),u.shadowColor=H(R,.8),u.shadowBlur=6,k([[h,g],[0,g+h]]),k(M),u.shadowBlur=0,u.fillStyle=`#fff`,u.shadowColor=H(R,1),u.shadowBlur=10,u.beginPath(),u.arc(x,S,3.8,0,7),u.fill(),u.shadowBlur=0;let ne=(e,t,n,r,i=`left`,a=0,o=11)=>{u.save(),u.font=`600 ${o}px "Plex Sans", sans-serif`,!a&&i===`left`&&(t=Math.max(22,Math.min(t,18+y-4-u.measureText(e).width))),u.translate(t,n),u.rotate(a),u.textAlign=i,u.fillStyle=r,u.shadowColor=`#000`,u.shadowBlur=4,u.fillText(e,0,0),u.restore()},I=w(1);I-w(0)>9&&I>18&&I<18+y&&ne(`EVENT HORIZON`,I+10,38,H(z,.95),`left`,Math.PI/2),w(0)>16&&ne(`SINGULARITY`,w(0)+9,6+b*.62,H(B,.95),`left`,Math.PI/2),ne(`YOU`,x+9,S+4,`#fff`),u.textAlign=`right`,u.font=`600 12px "Plex Sans", sans-serif`,u.shadowColor=`#000`,u.shadowBlur=4;let re=A(h);u.fillStyle=H(B,.95),u.fillText(`CURVATURE ×${re>=1?U(re):`1/${U(1/re)}`}`,18+y-6,6+b-8),u.font=`600 10px "Plex Sans", sans-serif`,u.fillStyle=H(R,.9),u.fillText(`SPACETIME`,18+y-6,22),u.shadowBlur=0,u.restore(),u.fillStyle=H(R,.75),u.font=`500 10px "Plex Mono", monospace`,u.textAlign=`center`;let ie=W(2*o);for(let e=Math.max(0,Math.ceil((h-o)/ie)*ie);e<=D*.99;e+=ie){let t=w(e);t>28&&t<18+y-10&&u.fillText(e>=1e3?Math.round(e).toLocaleString(`en-GB`):String(Number(e.toPrecision(3))),t,l-20)}u.textAlign=`right`,u.fillText(`DISTANCE FROM THE CENTRE, HORIZON RADII`,c-6,l-3),u.save(),u.translate(9,6+b*.3),u.rotate(-Math.PI/2),u.textAlign=`center`,u.fillText(`TIME →`,0,0),u.restore()}return{draw:c}}var ue=100,de=10,fe=1e5,pe=26,me=.31,he=.52,ge=.01,K=.61,q=e=>{let t=Math.hypot(...e);return t>1e-12?[e[0]/t,e[1]/t,e[2]/t]:[0,0,1]},_e=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],J=(e,t,n=1)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n],Y=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],X=[Math.cos(me),0,Math.sin(me)],Z=[0,1,0],ve=e=>{let t=Math.cos(e+he),n=Math.sin(e+he);return[t*X[0]+n*Z[0],t*X[1]+n*Z[1],t*X[2]+n*Z[2]]},ye=e=>{let t=Math.cos(e+he),n=Math.sin(e+he);return[-n*X[0]+t*Z[0],-n*X[1]+t*Z[1],-n*X[2]+t*Z[2]]},be=(()=>{let e=ve(0).map(e=>-e),t=[0,0,1],n=t[0]*e[0]+t[1]*e[1]+t[2]*e[2],r=q([t[0]-n*e[0],t[1]-n*e[1],t[2]-n*e[2]]),i=q(J(Y(r,Math.cos(K)),_e(e,r),Math.sin(K))),a=_e(i,e);return new Float32Array([e[0],a[0],i[0],e[1],a[1],i[1],e[2],a[2],i[2]])})(),xe=e=>{let t=1-(1-Math.min(1,Math.max(0,e/de)))**2;return Math.exp(Math.log(fe)+(Math.log(pe)-Math.log(fe))*t)},Q=e=>document.getElementById(e);function Se(){let t=Q(`sim-stage`),r=Q(`sim-canvas`),i=Q(`sim-readout`),o=Q(`sim-detail`),s=Q(`sim-hint`),f=Q(`sim-end`),p=Q(`sim-launch`),m=Q(`sim-launch-btn`),h=Q(`sim-inst`),g=Q(`sim-rear`),_=Q(`sim-rear-view`),v=Q(`sim-rear-tag`),y=Q(`sim-lcd`),b=e();t.append(b.el);let x=null,S={stage:`launch`,a:0,h:0,p:0,closing:-1,playing:!1,yaw:0,pitch:0,fov:72,fovOwn:!1,guided:!0,swapped:!1},w=null,E=null,D=null,O=1,A=()=>w.tau[w.tau.length-1],j=e=>{let t=ve(0),n=Math.sqrt(1/e);return{r:e,phi:0,tau:0,left:NaN,vr:n,vt:0,g:1/Math.sqrt(1-1/e),out:t,round:ye(0),vDir:t,v:n}},M=e=>{let t=j(pe),n=e<=0?{...t,left:A()}:l(w,e),r=e<=0?0:Math.min(1,e/.02);if(r<1){let e=r*r*(3-2*r),i=t.vr+(n.vr-t.vr)*e,a=n.vt*e;n={...n,vr:i,vt:a,g:1/Math.sqrt(Math.max(1e-12,1-i*i-a*a))}}let i=ve(n.phi),a=ye(n.phi),o=J(Y(i,n.vr),a,n.vt),s=Math.hypot(...o);return{...n,out:i,round:a,vDir:s>1e-12?Y(o,1/s):i,v:Math.sqrt(Math.max(0,1-1/(n.g*n.g)))}},N=()=>S.stage===`launch`?j(fe):S.stage===`approach`?j(xe(S.a)):M(S.stage===`hold`?0:S.p),F=(e,t)=>{let n=Math.sqrt(1/t.r),r=Y(e,-1),i=r[0]*t.vDir[0]+r[1]*t.vDir[1]+r[2]*t.vDir[2],a=Math.max(1+t.v*i,1e-12),o=q(J(Y(t.vDir,(i+t.v)/a),J(r,t.vDir,-i),1/(t.g*a))),s=1-n*(o[0]*t.out[0]+o[1]*t.out[1]+o[2]*t.out[2]);return s<=0?NaN:1/(t.g*a*s)},te=(()=>{let e=1500,t=Math.PI*(3-Math.sqrt(5)),n=[];for(let r=0;r<e;r++){let i=1-2*(r+.5)/e,a=Math.sqrt(1-i*i),o=t*r;n.push([i,Math.cos(o)*a,Math.sin(o)*a])}return n})(),ne=3*Math.sqrt(3)/2,I=e=>{let t=e.r;if(t<=1)return 0;let n=Math.sqrt(1/t),r=1-n*e.vr,i=(e.vr-n)/r,a=e.vt*Math.sqrt(1-n*n)/r,o=1/Math.sqrt(Math.max(1e-12,1-i*i-a*a)),s=ne*Math.sqrt(1-1/t)/t,c=0;for(let[e,n,r]of te){let l=e*i+n*a,u=1+o/(o+1)*l,d=e/o+u*i,f=n/o+u*a,p=r/o,m=d/Math.hypot(d,f,p),h=Math.sqrt(Math.max(0,1-m*m))<s;(t>=1.5?m>=0||!h:m>0&&h)&&c++}return c/te.length},re=e=>{let t=w.tau,n=D.ef,r=0,i=t.length-1;for(;i-r>1;){let n=r+i>>1;t[n]<=e?r=n:i=n}return n[r]+(n[i]-n[r])*(e-t[r])/Math.max(1e-30,t[i]-t[r])},ie=matchMedia(`(max-width: 760px)`).matches,ae=C(h.querySelector(`.hp-body`)),oe={rear:P(g,{name:`behind`,label:`View behind`,open:!ie,onChange:()=>x?.resetHistory()})},se=0,L=!1,R=()=>y.classList.contains(`is-up`),z=()=>{if(L||!S.playing||y.matches(`:hover`)||y.contains(document.activeElement)){se=window.setTimeout(z,1500);return}y.classList.remove(`is-up`)},B=(e=2800)=>{y.classList.add(`is-up`),clearTimeout(se),se=window.setTimeout(z,e)};t.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&e.clientY>t.getBoundingClientRect().bottom-120&&B()}),y.addEventListener(`pointerdown`,()=>B()),y.addEventListener(`focusin`,()=>B());let V=()=>{S.swapped=!S.swapped,v.textContent=S.swapped?`Ahead`:`Behind`,x?.resetHistory()};Q(`sim-swap`).addEventListener(`click`,V);let H=document,U=()=>!!(H.fullscreenElement??H.webkitFullscreenElement)||t.classList.contains(`is-full`),W=()=>{t.classList.toggle(`is-fullscreen`,U()),je()},G=()=>{let e=t;e.requestFullscreen?e.requestFullscreen().catch(()=>{t.classList.add(`is-full`),W()}):e.webkitRequestFullscreen?e.webkitRequestFullscreen():(t.classList.add(`is-full`),W())},me=()=>{H.fullscreenElement?H.exitFullscreen():H.webkitFullscreenElement&&H.webkitExitFullscreen?.(),t.classList.remove(`is-full`),W()};document.addEventListener(`fullscreenchange`,W),document.addEventListener(`webkitfullscreenchange`,W);let he=Q(`sim-ctl`),K=e=>`<svg viewBox="0 0 16 16" aria-hidden="true">${e}</svg>`,X=(e,t,n,r=``)=>{let i=document.createElement(`button`);return i.type=`button`,i.className=`hp-btn ${r}`,i.title=e,i.setAttribute(`aria-label`,e),i.innerHTML=t,i.addEventListener(`click`,n),i},Z=K(`<path d="M4.5 2.5v11l9-5.5z" fill="currentColor"/>`),Se=K(`<path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor"/>`),Ce=X(`Pause (space)`,Se,()=>Be()),we=X(`Start again (R)`,K(`<path d="M3.2 8a4.8 4.8 0 1 0 1.5-3.5M3.2 2.6v2.9h2.9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`),()=>Ve()),Te=document.createElement(`label`);Te.className=`hp-tl`,Te.title=`Where in the journey: drag to go there`,Te.innerHTML=`<span class="lv-sr">Where</span><input type="range" min="0" max="1" step="0.001" value="0" /><span class="hp-tl-marks" aria-hidden="true"></span>`;let Ee=Te.querySelector(`input`);Ee.addEventListener(`input`,()=>{S.stage=`fall`,S.p=Number(Ee.value),S.playing=!1,S.closing=-1,f.hidden=!0,t.classList.remove(`is-ended`),x?.resetHistory(),Pe(),Ke()});let De=document.createElement(`span`);De.className=`hp-fov`;let Oe=K(`<path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4" fill="none" stroke="currentColor" stroke-width="1.5"/>`),ke=K(`<path d="M6 2v4H2M14 6h-4V2M10 14v-4h4M2 10h4v4" fill="none" stroke="currentColor" stroke-width="1.5"/>`),Ae=X(`Full screen (F)`,Oe,()=>U()?me():G()),je=()=>{Ae.innerHTML=U()?ke:Oe,Ae.title=U()?`Leave full screen (F)`:`Full screen (F)`,Ae.setAttribute(`aria-label`,Ae.title)},Me=document.createElement(`a`);Me.className=`hp-btn hp-leave`,Me.href=Q(`sim`).dataset.article??`/`,Me.textContent=`← The article`,Me.title=`Back to the article`;let Ne=document.createElement(`div`);Ne.className=`lcd-keys`,Ne.append(Ce,we,Ae,Me),he.append(Ne,De),Q(`sim-tl`).append(Te);let Pe=()=>{Ce.innerHTML=S.playing?Se:Z,Ce.title=S.playing?`Pause (space)`:`Carry on (space)`,Ce.setAttribute(`aria-label`,Ce.title)},Fe=0,Ie=()=>{t.classList.remove(`is-idle`),Fe=performance.now()+3e3};t.addEventListener(`pointermove`,Ie),t.addEventListener(`pointerdown`,Ie);let Le=!1,Re=!1;function ze(){S.stage=`fall`,S.p=0,S.playing=!0,Pe()}function Be(){if(S.stage!==`launch`){if(S.stage===`fall`&&S.p>=1){Ve();return}S.playing=!S.playing,Pe(),B(S.playing?1200:2800)}}function Ve(e=!0){S.stage=`approach`,S.a=0,S.h=0,S.p=0,S.closing=-1,S.playing=!0,S.yaw=0,S.pitch=0,S.guided=!0,S.fovOwn=!1,S.fov=72,Le=!1,f.hidden=!0,t.classList.remove(`is-ended`),e&&x?.resetHistory(),Pe(),Ke()}let He=!1;m.addEventListener(`click`,()=>{m.disabled||S.stage!==`launch`||He||(He=!0,m.disabled=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{p.classList.add(`is-gone`),t.classList.add(`is-running`),Ie(),setTimeout(()=>{Ve(!1),Ie()},1700)})))});let Ue=Y(ve(0),-1),We=``,Ge=e=>{i.textContent=e.line,o.textContent=e.detail,i.classList.toggle(`is-alert`,e.kind===`alert`),i.classList.toggle(`is-flash`,e.kind===`flash`),e.line!==We&&(b.say(e.detail?`${e.line}. ${e.detail}`:e.line),We=e.line)};function Ke(){if(!w)return;let e=N(),r=e.r,i=S.stage===`fall`,o=u(r,i&&S.p>0?w.L:0);S.stage!==`launch`&&Ge(k(S.stage===`approach`?{stage:`approach`,t:S.a}:S.stage===`hold`?{stage:`hold`,t:S.h}:{stage:`fall`,p:S.p,r,tide:o,pTide:O}));let c=!i||S.p<=0?0:r>1?Math.sqrt(Math.max(0,1-(1-1/r)/(w.E*w.E))):e.v;ae.set({r,left:S.stage===`launch`||S.stage===`approach`?null:S.stage===`hold`?A()*n:e.left*n,speed:S.stage===`launch`||S.stage===`approach`?null:c,tide:o,shiftAhead:F(Ue,e),shiftBehind:F(Y(Ue,-1),e),engines:S.stage===`approach`?`BRAKING`:S.stage===`hold`?`ON · ${a(pe).toFixed(2)} g`:S.stage===`launch`?`STANDING BY`:`OFF`,outside:I(e)}),Ee.value=String(i?S.p:0),De.textContent=`FOV ${Math.round(S.fov)}°`,s.classList.toggle(`is-shown`,!Re&&(S.stage===`hold`||i&&S.p<.08)),r<1&&!Le&&(Le=!0),S.closing>=1&&f.hidden&&(f.hidden=!1,t.classList.add(`is-ended`),S.playing=!1,Pe())}let qe=()=>{if(!E||!R())return;let e=N();E.draw(S.stage===`fall`&&S.p>0?{phase:`fall`,r:e.r,ef:re(e.tau)}:S.stage===`hold`||S.stage===`fall`?{phase:`hold`,r:pe}:{phase:`approach`,r:e.r})},$=null,Je=0;r.addEventListener(`pointerdown`,e=>{S.guided=!1,Je=0,Re=!0,$={x:e.clientX,y:e.clientY,yaw:S.yaw,pitch:S.pitch},r.setPointerCapture(e.pointerId),t.classList.add(`is-looking`)}),r.addEventListener(`pointermove`,e=>{if(!$)return;let t=S.fov*Math.PI/180/r.clientHeight;S.yaw=$.yaw-(e.clientX-$.x)*t,S.pitch=Math.max(-Math.PI,Math.min(Math.PI,$.pitch+(e.clientY-$.y)*t))});let Ye=()=>{$=null,t.classList.remove(`is-looking`),Je=performance.now()+3e3};r.addEventListener(`pointerup`,Ye),r.addEventListener(`pointercancel`,Ye),r.addEventListener(`wheel`,e=>{e.preventDefault(),S.fov=Math.max(30,Math.min(120,S.fov*Math.exp(e.deltaY*.001))),S.fovOwn=!0},{passive:!1}),window.addEventListener(`keydown`,e=>{if(e.target instanceof Element&&e.target.closest(`input, button, a`)&&e.key!==`Escape`)return;let t=e.key.toLowerCase();e.key===` `?(e.preventDefault(),S.stage===`approach`||S.stage===`hold`?ze():Be()):t===`r`&&S.stage!==`launch`?Ve():t===`i`||t===`d`?(L=!L,L?B():z()):t===`b`?oe.rear.toggle():t===`s`?V():t===`f`?U()?me():G():e.key===`Escape`&&U()&&(e.preventDefault(),me()),S.stage!==`launch`&&Ie()});let Xe=performance.now(),Ze=0,Qe=0,$e=!1,et=0,tt=0,nt=0,rt=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},it=!1,at=e=>{if(it&&S.stage===`launch`&&!He){Xe=e,tt=requestAnimationFrame(at);return}let n=Math.min(.25,(e-Xe)/1e3);Xe=e,S.playing&&(S.stage===`approach`?(S.a+=n,S.a>=de&&(S.stage=`hold`,S.h=0)):S.stage===`hold`?(S.h+=n,S.h>=ee&&ze()):S.stage===`fall`&&S.p<1&&(S.p=Math.min(1,S.p+n/ue))),(S.playing||S.stage===`launch`||S.closing>=0)&&(nt+=n),S.stage===`fall`&&S.p>=1&&S.closing<0&&(S.closing=0),t.classList.toggle(`is-closing`,S.closing>=0),S.closing>=0&&S.closing<1&&(S.closing=Math.min(1,S.closing+n/2.8)),S.playing&&Fe&&e>Fe&&t.classList.add(`is-idle`);let i=N(),a=i.r,o=S.stage===`fall`&&S.p>0;!S.guided&&Je&&e>Je&&!$&&(S.guided=!0,Je=0);let s=o?.6*rt(5,2.4,a)+.4*rt(1,.15,a):0;if(S.guided){let e=1-Math.exp(-n/.7);S.yaw+=(0-S.yaw)*e,S.pitch+=(0-S.pitch)*e,S.fovOwn||(S.fov+=(72+28*s-S.fov)*e)}let c=q(J(Y(Y(i.out,-1),1-s),i.vDir,s)),l=[0,0,1],u=(e,t)=>J(e,t,-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2])),d=(e,t)=>{let n=u(e,c),r=Math.hypot(...n);return r>1e-9?Y(n,t/r):[0,0,0]},f=J(d(l,1-s),d(i.out,s));Math.hypot(...f)<1e-9&&(f=d(l,1));let p=q(u(f,c)),m=q(_e(c,p)),h=q(J(Y(q(J(Y(c,Math.cos(S.yaw)),m,Math.sin(S.yaw))),Math.cos(S.pitch)),p,Math.sin(S.pitch))),g=q(_e(h,p)),v=_e(g,h),y={right:g,up:v,fwd:h},b={right:Y(g,-1),up:v,fwd:Y(h,-1)};Ue=h;let C=S.swapped?b:y,w=S.swapped?y:b,T=null;if(oe.rear.open&&(S.stage!==`launch`||He)&&!t.classList.contains(`is-ended`)&&S.closing<0){let e=r.getBoundingClientRect(),t=_.getBoundingClientRect(),n=r.width/Math.max(1,e.width),i=r.height/Math.max(1,e.height);T={...w,rect:[(t.left-e.left)*n,r.height-(t.bottom-e.top)*i,t.width*n,t.height*i]}}try{x.draw({cam:Y(i.out,a),...C,tanHalf:Math.tan(S.fov/2*Math.PI/180),allRound:!1,vRain:i.v,gRain:i.g,vDir:i.vDir,time:nt,disc:!0,shift:!0,exposure:1,autoExposure:!0,flash:S.stage===`fall`?1+12*Math.max(0,Math.min(1,(S.p-.96)/.04))**2:1,collapse:Math.max(0,S.closing),white:S.closing<0?0:Math.max(0,Math.min(1,(S.closing-.86)/.14)),skyRot:be,skyGain:.55+.45*rt(2,14,a),steps:a>30?1200:void 0},T)}catch(e){$e||($e=!0,console.error(e))}et++,e-Ze>100&&(Ke(),Ze=e),e-Qe>30&&(qe(),Qe=e),tt=requestAnimationFrame(at)},ot=e=>new Promise(t=>setTimeout(t,e));T(p.querySelector(`ol`),Q(`sim-go`),m,[{label:`Light tracer compiled`,min:450,run:()=>{try{x=ce(r)}catch(e){console.error(e),x=null}if(!x)throw Error(`no WebGL 2`);tt=requestAnimationFrame(at)}},{label:`Galaxy loaded`,min:400,run:()=>x.skyReady},{label:`Fall plotted to the singularity`,min:400,run:()=>{w=c(pe,ge),D=d(w),E=le(Q(`sim-st-canvas`),D);let e=0,t=1;for(let n=0;n<50;n++){let n=(e+t)/2;u(l(w,n).r,w.L)<10?e=n:t=n}O=t}},{label:`Light cones aligned`,min:600,run:async()=>{let e=et,t=performance.now();for(;et-e<45&&performance.now()-t<2500;)await ot(50);it=!0}},{label:`Relativistic physics engine`,done:`ONLINE`,min:360},{label:`Spacetime curvature`,done:`CALIBRATED`,min:330},{label:`Event horizon`,done:`LOCATED`,min:330},{label:`Tidal dampers`,done:`DECORATIVE`,amber:!0,min:360},{label:`Doughnuts`,done:`STOWED`,min:300},{label:`Return journey`,done:`NOT GUARANTEED`,amber:!0,min:420}],(e,t)=>{let n=Math.round(100*e/t);Q(`sim-calc-bar`).style.width=`${n}%`,Q(`sim-calc-pct`).textContent=`${n}%`,e===t&&(Q(`sim-calc-label`).textContent=`Simulated journey calculated`,Q(`sim-calc`).classList.add(`is-done`))}).catch(()=>{p.classList.add(`is-unsupported`)});let st=()=>{if(!w){setTimeout(st,200);return}let e=e=>{let t=0,n=1;for(let r=0;r<50;r++){let r=(t+n)/2;l(w,r).r>e?t=r:n=r}return(t+n)/2},t=[[`Let go`,0],[`The shadow`,e(8)],[`The whirl`,e(2.6)],[`The horizon`,e(1),`is-h`],[`The narrowing ring`,e(.4)],[`The end`,.975]];Te.querySelector(`.hp-tl-marks`).innerHTML=t.map(([e,n,r],i)=>`<span class="${r??``}" style="left:${(n*100).toFixed(2)}%;--next:${((t[i+1]?.[1]??1)*100).toFixed(2)}%" data-p="${n.toFixed(4)}">${e}</span>`).join(``)};st(),f.querySelector(`[data-again]`)?.addEventListener(`click`,()=>Ve()),f.querySelector(`a`)?.addEventListener(`click`,e=>{e.preventDefault(),location.assign(e.currentTarget.href)}),Pe(),je(),window.addEventListener(`pagehide`,()=>{cancelAnimationFrame(tt),x?.destroy()}),r.addEventListener(`webglcontextlost`,e=>e.preventDefault()),r.addEventListener(`webglcontextrestored`,()=>location.reload())}Se();