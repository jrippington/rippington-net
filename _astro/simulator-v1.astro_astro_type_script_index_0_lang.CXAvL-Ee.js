import{i as e,l as t,n,t as r,u as i}from"./kit.Bqo6d9YU.js";var a=19196125e6,o=a/299792458,s=9.80665;function c(e,t){let n=Math.sqrt(1-1/t),r=Math.sqrt(1/e),i=t**1.5/2,c=Math.acos(Math.min(1,Math.max(-1,2*e/t-1))),l=i*(c+Math.sin(c)),u=i*Math.PI;return{r:e,beta:r,vRain:(r-n*Math.sqrt(Math.max(0,1/e-1/t)))/(1/e+n*n),tau:l*o,left:(u-l)*o,vStatic:e>1?Math.sqrt(Math.max(0,(1/e-1/t)/(1-1/t))):NaN,tide:299792458**2*2/(a*a*e*e*e)/s}}var l=e=>{let t=e*e-Math.sqrt(e**4-3*e*e);return(1-1/t)*(1+e*e/(t*t))};function u(e){let t=Math.sqrt(3)+1e-9,n=200;if(l(t)>e*e)return NaN;for(let r=0;r<200;r++){let r=(t+n)/2;l(r)<e*e?t=r:n=r}return(t+n)/2}function d(e,t=3e-4,n=2e-5){let r=Math.sqrt(1-1/e),i=t=>{let n=1/Math.sqrt(1-t*t);return{E:n*r,L:n*t*e}},a=0,o=.999999,s=r,c=0;for(let e=0;e<200;e++){let e=(a+o)/2,n=i(e),r=u(n.E);n.L<(1-t)*r?a=e:o=e}({E:s,L:c}=i(a));let l=e=>1/(e*e)-2*c*c/e**3+3*c*c/e**4,d=[0],f=[e],p=[0],m=[0],h=[],g=[],_=[],v=e,y=0,b=0,x=0,S=0,C=(e,t)=>{let n=Math.sqrt(1/e),r=1-n*n,i=Math.abs(r)>1e-6?(t+n*s)/r:(1+c*c/(e*e)-s*s)/(2*s),a=s+n*i;return[i/a,c/e/a,a]};{let[e,t,n]=C(v,y);h.push(e),g.push(t),_.push(n)}for(let e=0;e<4e5&&v>n;e++){let e=Math.abs(y)/v+Math.abs(c)/(v*v),t=Math.min(.004/Math.max(e,1e-12),.02*Math.sqrt(v*v*v)),n=(e,t)=>[t,-.5*l(e),c/(e*e)],r=n(v,y),i=n(v+.5*t*r[0],y+.5*t*r[1]),a=n(v+.5*t*i[0],y+.5*t*i[1]),o=n(v+t*a[0],y+t*a[1]),s=v+t/6*(r[0]+2*i[0]+2*a[0]+o[0]),u=y+t/6*(r[1]+2*i[1]+2*a[1]+o[1]),w=b+t/6*(r[2]+2*i[2]+2*a[2]+o[2]);if(!(s>0))break;S+=Math.hypot((v>2.5?1.6:1)*Math.log(s/v),w-b),v=s,y=Math.min(u,0),b=w,x+=t,d.push(S),f.push(v),p.push(b),m.push(x);let[T,ee,E]=C(v,y);h.push(T),g.push(ee),_.push(E)}return{E:s,L:c,total:S,s:Float64Array.from(d),r:Float64Array.from(f),phi:Float64Array.from(p),tau:Float64Array.from(m),vr:Float64Array.from(h),vt:Float64Array.from(g),g:Float64Array.from(_)}}function f(e,t){let n=Math.min(1,Math.max(0,t))*e.total,r=e.s,i=0,a=r.length-1;for(;a-i>1;){let e=i+a>>1;r[e]<=n?i=e:a=e}let o=r[a]>r[i]?(n-r[i])/(r[a]-r[i]):0,s=e=>e[i]+(e[a]-e[i])*o,c=e.tau[e.tau.length-1];return{r:Math.exp(Math.log(e.r[i])+(Math.log(e.r[a])-Math.log(e.r[i]))*o),phi:s(e.phi),tau:s(e.tau),left:c-s(e.tau),vr:s(e.vr),vt:s(e.vt),g:Math.exp(Math.log(e.g[i])+(Math.log(e.g[a])-Math.log(e.g[i]))*o),tauEnd:c}}var p=(e,t)=>c(e,1/0).tide*(1+1.5*t*t/(e*e)),m=120,h=[{label:`From the
centre`,unit:`horizon radii`,lo:1e3,hi:1e-5,log:!0,marks:[{at:1,text:`H`,tone:`amber`}]},{label:`Left on
your clock`,unit:``,lo:3e9,hi:.001,log:!0,marks:[{at:86400,text:`1d`},{at:1,text:`1s`}]},{label:`Your speed`,unit:`vs holding still`,lo:0,hi:1,stopShort:.975,marks:[{at:1,text:`c`,tone:`red`}],optional:!0},{label:`Tidal
force`,unit:`times your weight`,lo:1e-12,hi:1e6,log:!0,zone:[{from:10,to:1e6,tone:`red`}],marks:[{at:1,text:`1`}]},{label:`Light
from above`,unit:``,lo:.01,hi:10,log:!0,zone:[{from:.01,to:1,tone:`red`},{from:1,to:10,tone:`blue`}],marks:[{at:1,text:`×1`}],optional:!0}],g=(e,t)=>{let n=e.log?(Math.log10(t)-Math.log10(e.lo))/(Math.log10(e.hi)-Math.log10(e.lo)):(t-e.lo)/(e.hi-e.lo);return Math.max(0,Math.min(1,n))},_=e=>(-120+240*e)*Math.PI/180,v=(e,t)=>[60+t*Math.sin(e),58-t*Math.cos(e)],y=(e,t,n)=>{let[r,i]=v(_(e),n),[a,o]=v(_(t),n);return`M${r.toFixed(1)} ${i.toFixed(1)} A${n} ${n} 0 ${+((t-e)*2*m>180)} 1 ${a.toFixed(1)} ${o.toFixed(1)}`},b={amber:`var(--amber)`,red:`var(--light-r)`,blue:`var(--light-b)`};function x(t){let n=[`<circle cx="60" cy="58" r="50" class="hud-back"/>`,`<path d="${y(0,1,42)}" class="hud-arc"/>`];for(let e of t.zone??[])n.push(`<path d="${y(g(t,e.from),g(t,e.to),42)}" class="hud-zone" style="stroke: ${b[e.tone]}"/>`);for(let e=0;e<=12;e++){let t=_(e/12),[r,i]=v(t,42),[a,o]=v(t,e%3?38.5:35.5);n.push(`<line x1="${r.toFixed(1)}" y1="${i.toFixed(1)}" x2="${a.toFixed(1)}" y2="${o.toFixed(1)}" class="hud-tick"/>`)}for(let r of t.marks??[]){let i=_(g(t,r.at)),[a,o]=v(i,44),[s,c]=v(i,33),[l,u]=v(i,26),d=r.tone?b[r.tone]:`var(--ice)`;n.push(`<line x1="${a.toFixed(1)}" y1="${o.toFixed(1)}" x2="${s.toFixed(1)}" y2="${c.toFixed(1)}" style="stroke: ${d}; stroke-width: 1.6"/>`),n.push(`<text x="${l.toFixed(1)}" y="${(u+3).toFixed(1)}" class="hud-mark" style="fill: ${d}">${e(r.text)}</text>`)}return n.push(`<text x="60" y="125" class="hud-label">${t.label.toUpperCase().split(`
`).map((t,n)=>`<tspan x="60" dy="${n?12:0}">${e(t)}</tspan>`).join(``)}</text>`),n.join(``)}function S(t){let n=document.createElement(`div`);n.className=`sim-hud`,n.setAttribute(`aria-hidden`,`true`);let r=h.map(t=>{let r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 120 142`),r.setAttribute(`class`,`hud-dial${t.optional?` is-optional`:``}`),r.innerHTML=`${x(t)}<g class="hud-needle"><line x1="60" y1="58" x2="60" y2="20"/><circle cx="60" cy="58" r="3.2"/></g><text x="60" y="87" class="hud-value"></text><text x="60" y="99" class="hud-unit">${e(t.unit.toUpperCase())}</text>`,n.append(r),{d:t,needle:r.querySelector(`.hud-needle`),value:r.querySelector(`.hud-value`),unit:r.querySelector(`.hud-unit`)}});return t.append(n),{el:n,show(e){n.hidden=!e,t.classList.toggle(`has-hud`,e)},set(e,t,n=[]){r.forEach((r,i)=>{let a=e[i],o=_(a===null?1:Math.min(g(r.d,a),r.d.stopShort??1));r.needle.setAttribute(`transform`,`rotate(${(o*180/Math.PI).toFixed(2)} 60 58)`),r.needle.classList.toggle(`is-parked`,a===null),r.value.textContent=t[i],n[i]&&(r.unit.textContent=n[i].toUpperCase())})}}}var C=`#version 300 es
precision highp float;
const vec2 P[3] = vec2[3](vec2(-1., -1.), vec2(3., -1.), vec2(-1., 3.));
out vec2 vUv;
void main() { vUv = P[gl_VertexID] * 0.5 + 0.5; gl_Position = vec4(P[gl_VertexID], 0., 1.); }
`,w=`#version 300 es
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
`,T=`#version 300 es
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
`,ee=`#version 300 es
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
`,E=`#version 300 es
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
`,D=`#version 300 es
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
`,O=`#version 300 es
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
`,k=`#version 300 es
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
`,A=(e,t)=>{let n=1,r=0;for(let i=e;i>0;i=Math.floor(i/t))n/=t,r+=i%t*n;return r},j={low:{steps:260,max:.5},medium:{steps:420,max:.75},high:{steps:700,max:1}};function M(e){let t=e.getContext(`webgl2`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!t)return null;let n=t,r=!!n.getExtension(`EXT_color_buffer_float`)||!!n.getExtension(`EXT_color_buffer_half_float`);n.getExtension(`OES_texture_float_linear`);let i=(e,t)=>{let r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw Error(n.getShaderInfoLog(r)??`shader`);return r},a=i(n.VERTEX_SHADER,C),o=e=>{let t=n.createProgram();if(n.attachShader(t,a),n.attachShader(t,i(n.FRAGMENT_SHADER,e)),n.linkProgram(t),!n.getProgramParameter(t,n.LINK_STATUS))throw Error(n.getProgramInfoLog(t)??`program`);let r=new Map;return{p:t,u:e=>(r.has(e)||r.set(e,n.getUniformLocation(t,e)),r.get(e))}},s=o(w),c=o(T),l=o(ee),u=o(E),d=o(D),f=o(O),p=o(k);n.bindVertexArray(n.createVertexArray());let m=n.createTexture();n.bindTexture(n.TEXTURE_2D,m),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));let h=new Image;h.decoding=`async`,h.onload=()=>{n.bindTexture(n.TEXTURE_2D,m),n.texImage2D(n.TEXTURE_2D,0,n.SRGB8_ALPHA8,n.RGBA,n.UNSIGNED_BYTE,h),n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)},h.src=`/sky/milky-way.jpg`;let g=(e,t)=>{let i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),r?n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,e,t,0,n.RGBA,n.HALF_FLOAT,null):n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let a=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,a),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0),{tex:i,fb:a,w:e,h:t}},_=e=>{n.deleteTexture(e.tex),n.deleteFramebuffer(e.fb)},v=`medium`,y=.6,b=null,x=[],S=0,M=!1,N=0,P=[],F=[0,0],I=0,L=[g(1,1),g(1,1)];for(let e of L)n.bindFramebuffer(n.FRAMEBUFFER,e.fb),n.clearColor(-2.5,0,0,1),n.clear(n.COLOR_BUFFER_BIT);let R=0,z=()=>{let t=Math.min(window.devicePixelRatio||1,2),r=Math.max(1,Math.round(e.clientWidth*t)),i=Math.max(1,Math.round(e.clientHeight*t));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i);let a=Math.max(64,Math.round(r*y)),o=Math.max(64,Math.round(i*y));if(b&&F[0]===a&&F[1]===o)return;b&&_(b),x.forEach(_),P.forEach(_),b=g(a,o),x=[g(a,o),g(a,o)],M=!1,n.bindTexture(n.TEXTURE_2D,b.tex),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),I=Math.floor(Math.log2(Math.max(a,o))),P=[];let s=Math.max(1,a>>1),c=Math.max(1,o>>1);for(let e=0;e<5&&s>8&&c>8;e++)P.push(g(s,c)),s>>=1,c>>=1;F=[a,o]},B=(t,r,i,a)=>{n.useProgram(t.p),n.bindFramebuffer(n.FRAMEBUFFER,r?r.fb:null),n.viewport(0,0,r?r.w:e.width,r?r.h:e.height),i&&(n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i),n.uniform1i(t.u(`uSrc`),0)),a&&n.uniform2f(t.u(`uTexel`),a[0],a[1]),n.drawArrays(n.TRIANGLES,0,3)},V=16,H=0;function U(t){let r=performance.now();H&&(V=V*.9+(r-H)*.1),H=r;let i=j[v];V>30&&y>.3?y=Math.max(.3,y*.94):V<20&&y<i.max&&(y=Math.min(i.max,y*1.03)),z();let a=b;n.useProgram(s.p),n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,a.w,a.h),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,m);let o=s.u;n.uniform1i(o(`uSky`),0),n.uniform2f(o(`uRes`),a.w,a.h),n.uniform1f(o(`uTime`),t.time),n.uniform3fv(o(`uCam`),t.cam),n.uniform3fv(o(`uRight`),t.right),n.uniform3fv(o(`uUp`),t.up),n.uniform3fv(o(`uFwd`),t.fwd),n.uniform1f(o(`uTan`),t.tanHalf),n.uniform1i(o(`uProj`),+!!t.allRound),n.uniform1f(o(`uV`),t.vRain),n.uniform1f(o(`uGam`),t.gRain),n.uniform3fv(o(`uVdir`),t.vDir),n.uniform1i(o(`uDisc`),+!!t.disc),n.uniform1f(o(`uDiscIn`),3),n.uniform1f(o(`uDiscOut`),9),n.uniform1f(o(`uDiscT`),5200),n.uniform1f(o(`uDiscGain`),.24),n.uniform1i(o(`uShift`),+!!t.shift),n.uniformMatrix3fv(o(`uSkyRot`),!1,t.skyRot),n.uniform1f(o(`uSkyGain`),1.6*t.skyGain),n.uniform1f(o(`uNebGain`),.24*t.skyGain),n.uniform1f(o(`uStarGain`),.9),n.uniform1i(o(`uSteps`),i.steps),n.uniform1f(o(`uSeed`),r%1e3*.37),N=N%64+1,n.uniform2f(o(`uJitter`),A(N,2)-.5,A(N,3)-.5),n.drawArrays(n.TRIANGLES,0,3),n.bindTexture(n.TEXTURE_2D,a.tex),n.generateMipmap(n.TEXTURE_2D);{let e=L[R],t=L[1-R];n.useProgram(f.p),n.bindFramebuffer(n.FRAMEBUFFER,t.fb),n.viewport(0,0,1,1),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,a.tex),n.uniform1i(f.u(`uScene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.tex),n.uniform1i(f.u(`uPrev`),1),n.uniform1f(f.u(`uLevel`),I),n.uniform1f(f.u(`uRate`),1-Math.exp(-Math.min(.1,V/1e3)/.6)),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0),R=1-R}let h=x[S],g=x[1-S];if(n.useProgram(p.p),n.bindFramebuffer(n.FRAMEBUFFER,g.fb),n.viewport(0,0,g.w,g.h),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,a.tex),n.uniform1i(p.u(`uCur`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,h.tex),n.uniform1i(p.u(`uHist`),1),n.uniform2f(p.u(`uTexel`),1/a.w,1/a.h),n.uniform1f(p.u(`uBlend`),M?.12:1),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0),S=1-S,M=!0,P.length){n.useProgram(c.p),n.uniform1f(c.u(`uKnee`),2.2),B(c,P[0],g.tex,[1/g.w,1/g.h]);for(let e=1;e<P.length;e++)B(l,P[e],P[e-1].tex,[1/P[e-1].w,1/P[e-1].h]);n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE);for(let e=P.length-1;e>0;e--)B(u,P[e-1],P[e].tex,[1/P[e].w,1/P[e].h]);n.disable(n.BLEND)}n.useProgram(d.p),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.tex),n.uniform1i(d.u(`uScene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,P.length?P[0].tex:g.tex),n.uniform1i(d.u(`uGlow`),1),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,L[R].tex),n.uniform1i(d.u(`uAdapt`),2),n.uniform1i(d.u(`uAuto`),+!!t.autoExposure),n.uniform1f(d.u(`uExposure`),t.exposure),n.uniform1f(d.u(`uGlowGain`),P.length?.5:0),n.uniform1f(d.u(`uWhite`),t.white),n.uniform1f(d.u(`uFlash`),t.flash),n.uniform1f(d.u(`uCollapse`),t.collapse),n.uniform2f(d.u(`uRes`),e.width,e.height),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,e.width,e.height),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0)}return{draw:U,setQuality(e){v=e,y=Math.min(y,j[e].max)},get scale(){return y},get fps(){return 1e3/V},resetHistory(){M=!1},destroy(){b&&_(b),x.forEach(_),P.forEach(_),n.getExtension(`WEBGL_lose_context`)?.loseContext()}}}var N=100,P=.31,F=.52,I=.01,L=[.25,.5,1,2,4,8,16],R=.61,z=e=>{let t=Math.hypot(...e);return t>1e-12?[e[0]/t,e[1]/t,e[2]/t]:[0,0,1]},B=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],V=(e,t,n=1)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n],H=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],U=[Math.cos(P),0,Math.sin(P)],W=[0,1,0],te=e=>{let t=Math.cos(e+F),n=Math.sin(e+F);return[t*U[0]+n*W[0],t*U[1]+n*W[1],t*U[2]+n*W[2]]},ne=e=>{let t=Math.cos(e+F),n=Math.sin(e+F);return[-n*U[0]+t*W[0],-n*U[1]+t*W[1],-n*U[2]+t*W[2]]},re=(()=>{let e=te(0).map(e=>-e),t=[0,0,1],n=t[0]*e[0]+t[1]*e[1]+t[2]*e[2],r=z([t[0]-n*e[0],t[1]-n*e[1],t[2]-n*e[2]]),i=z(V(H(r,Math.cos(R)),B(e,r),Math.sin(R))),a=B(i,e);return new Float32Array([e[0],a[0],i[0],e[1],a[1],i[1],e[2],a[2],i[2]])})(),G={r:e=>e>=100?`${Math.round(e)}`:e>=10?e.toFixed(1):e>=.1?e.toFixed(2):e>=.001?e.toFixed(4):e.toExponential(0),t:e=>e>=63115200?`${Math.round(e/31557600)} yr`:e>=86400?`${Math.floor(e/86400)} d`:e>=3600?`${Math.floor(e/3600)} h`:e>=60?`${Math.floor(e/60)} min`:e>=1?`${Math.floor(e)} s`:e>=.1?`${e.toFixed(1)} s`:e>=.001?`${Number((e*1e3).toPrecision(2))} ms`:e<=0?`0 s`:`${Number((e*1e6).toPrecision(2))} µs`,v:e=>{if(e<.99)return`${e.toFixed(2)} c`;let t=Math.min(Math.floor(-Math.log10(Math.max(1-e,1e-15)))+1,6);return`${(Math.floor(e*10**t)/10**t).toFixed(t)} c`},g:e=>e<.001?`under 0.001`:e<10?`${Number(e.toPrecision(2))}`:e<1e6?Math.round(Number(e.toPrecision(2))).toLocaleString(`en-GB`):e<1e9?`${Number((e/1e6).toPrecision(2))} million`:e<0xe8d4a51000?`${Number((e/1e9).toPrecision(2))} billion`:`${Number((e/0xe8d4a51000).toPrecision(2))} trillion`};function ie(e){return e>=100?Math.round(e).toLocaleString(`en-GB`):e>=.1?e.toFixed(2):e>=.001?e.toFixed(4):e.toExponential(1)}function ae(e,t,n,r){return e<=0?{line:`SIMULATION REALISM: MAXIMUM. RETURN JOURNEY: NOT GUARANTEED`,note:`The Van is holding still ${n===10?`ten`:n.toLocaleString(`en-GB`)} horizon radii out. Across the shadow lies the accretion disc: gas spiralling in, heated as it falls. Its far side shows over the top and under the bottom, its light bent round, and the side turning towards you is bluer and brighter. The bright ring is the Milky Way's centre, behind the black hole, bent round it.`}:e>=.975?{line:`YOU ARE APPROACHING THE END OF SPACE AND TIME`,note:`You have reached the end of space and time. For you, this is the end of this universe. Whatever lies beyond, the theory can say nothing about it, and no news of it will ever reach anyone outside.`}:r>=10?{alert:!0,line:`APPROACHING THE SPEED OF LIGHT`,note:`The tides across a person have passed ten times their weight: nothing could survive this. The simulator carries on, as if you were a point. All the light of the outside universe crowds ahead of you, blueshifted without limit.`}:t<1&&t>.6?{line:`EVENT HORIZON CROSSED`,note:`You crossed the event horizon a moment ago, and nothing marked it. The light from outside still reaches you, because it is falling in after you. None of yours will ever get out to it.`}:t<.05?{line:`EVERY TOMORROW YOU HAVE LEFT IS FURTHER IN`,note:`Carried sideways ever faster, you see the light of the outside universe crowd forward, into a narrowing ring ahead of you, ever brighter and bluer. Behind you and below, black: no light can reach you from the centre.`}:t<1?{line:`RETURN JOURNEY: IMPOSSIBLE. THE CENTRE IS NOW YOUR FUTURE`,note:`Below you, black: nothing can reach you from the centre. Round you, the outside universe, its light still falling in after you, gathered into a glowing ring, brightest and bluest at its lower edge. As you fall, the ring narrows and crowds ahead.`}:t<1.6?{alert:!0,line:`APPROACHING THE EVENT HORIZON`,note:`You feel nothing: you are falling freely. The shadow fills half the sky. Its glowing edge is light from all over the sky, bent round the black hole, bluer and brighter because you are falling into it.`}:t<2.6&&e>.1?{flash:!0,line:`EXPERIENCING INTENSE SPACETIME CURVATURE`,note:`You let go with a small sideways push, so you swing round the black hole close to twice the event horizon's radius, where no orbit can last. The disc and the shadow wheel past, and the sky streams round them. Then the fall takes you in.`}:{line:`IN FREE FALL`,note:`You let go, with a small sideways push, and fell. The shadow grows as you fall towards it, and the starlight passing near it is bent into a ring round its edge. The side of the disc turning towards you is brighter and bluer than the side turning away.`}}function K(){let e=document.getElementById(`sim-canvas`),a=e.parentElement,s=document.getElementById(`sim-panel`),c=document.getElementById(`sim-readout`),l=document.getElementById(`sim-end`),u;try{u=M(e)}catch(e){console.error(e),u=null}if(!u){a.classList.add(`is-unsupported`);return}let m={p:0,closing:-1,R0:26,playing:!1,speed:1,yaw:0,pitch:0,fov:72,fovOwn:!1,allRound:!1,guided:!0,hud:!0},h=r(),g=d(m.R0,I),_=()=>g.tau[g.tau.length-1],v=e=>{let t={r:m.R0,phi:0,tau:0,left:_(),vr:Math.sqrt(1/m.R0),vt:0,g:1/Math.sqrt(1-1/m.R0)},n=e<=0?t:f(g,e),r=e<=0?0:Math.min(1,e/.02);if(r<1){let e=r*r*(3-2*r),i=t.vr+(n.vr-t.vr)*e,a=n.vt*e;n={...n,vr:i,vt:a,g:1/Math.sqrt(Math.max(1e-12,1-i*i-a*a))}}let i=te(n.phi),a=ne(n.phi),o=V(H(i,n.vr),a,n.vt),s=Math.hypot(...o);return{...n,out:i,round:a,vDir:s>1e-12?H(o,1/s):i,v:Math.sqrt(Math.max(0,1-1/(n.g*n.g)))}},y=(e,t)=>{let n=Math.sqrt(1/t.r),r=H(e,-1),i=r[0]*t.vDir[0]+r[1]*t.vDir[1]+r[2]*t.vDir[2],a=Math.max(1+t.v*i,1e-12),o=z(V(H(t.vDir,(i+t.v)/a),V(r,t.vDir,-i),1/(t.g*a))),s=1-n*(o[0]*t.out[0]+o[1]*t.out[1]+o[2]*t.out[2]);return s<=0?NaN:1/(t.g*a*s)},b=(e,...t)=>{let n=document.createElement(`section`);n.className=`sim-sec`;let r=document.createElement(`h2`);return r.textContent=e,n.append(r,...t),n},x=n(``,()=>le(),{icon:`play`,title:`Let go`}),C=n(``,()=>X(),{icon:`again`,title:`Back to holding still`}),w=i({label:`Speed`,min:0,max:L.length-1,step:1,value:2,format:e=>`×${L[e]}`,onInput:e=>{m.speed=L[e]}}),T=i({label:`Where`,min:0,max:1,step:.001,value:0,format:e=>`${ie(v(e).r)} horizon radii`,onInput:e=>{J=0,u?.resetHistory(),m.p=e,m.playing=!1,e<1&&(m.closing=-1),q(),Z()}}),ee=i({label:`Let go from`,min:.3,max:3,step:.005,value:Math.log10(m.R0),format:e=>`${Number((10**e).toPrecision(2))} horizon radii`,onInput:e=>{m.R0=Number((10**e).toPrecision(2)),g=d(m.R0,I),X(),K()}}),E=i({label:`Field of view`,min:30,max:120,step:1,value:m.fov,format:e=>`${e}°`,onInput:e=>{m.fov=e,m.fovOwn=!0}}),D=S(a),O=n(`Head-up display`,()=>{m.hud=!m.hud,O.setAttribute(`aria-pressed`,String(m.hud)),D.show(m.hud)},{pressed:!0});D.show(!0);let k=document,A=()=>!!(k.fullscreenElement??k.webkitFullscreenElement)||a.classList.contains(`is-full`),j=()=>a.classList.toggle(`is-fullscreen`,A()),P=()=>{let e=a;e.requestFullscreen?e.requestFullscreen().catch(()=>{a.classList.add(`is-full`),j()}):e.webkitRequestFullscreen?e.webkitRequestFullscreen():(a.classList.add(`is-full`),j())},F=()=>{k.fullscreenElement?k.exitFullscreen():k.webkitFullscreenElement&&k.webkitExitFullscreen?.(),a.classList.remove(`is-full`),j()},R=n(`Full screen`,P),U=document.createElement(`button`);U.type=`button`,U.className=`sim-close`,U.setAttribute(`aria-label`,`Leave full screen`),U.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,U.addEventListener(`click`,F),a.append(U),document.addEventListener(`fullscreenchange`,j),document.addEventListener(`webkitfullscreenchange`,j),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&A()&&(e.preventDefault(),F())});let W=document.createElement(`p`);W.className=`sim-note`,s.append(b(`What you're seeing`,W),b(`The fall`,t(x,C,w.el),T.el,ee.el),b(`View`,t(O,R),E.el),h.el);let K=()=>{let e=W.cloneNode();e.style.cssText=`position: absolute; visibility: hidden; height: auto; width: ${W.clientWidth}px`,W.parentElement.append(e);let t=0;for(let[n,r,i]of[[0,m.R0,0],[1,1e-5,1e9],[.97,1e-4,50],[.51,.9,0],[.9,.01,0],[.6,.5,0],[.45,1.2,0],[.3,2,0],[.05,5,0]])e.textContent=ae(n,r,m.R0,i).note,t=Math.max(t,e.offsetHeight);e.remove(),W.style.height=`${t}px`},oe=!1,q=()=>{x.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true">${m.playing?`<path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor"/>`:`<path d="M4 2.5v11l9-5.5z" fill="currentColor"/>`}</svg>`,x.title=m.playing?`Pause`:m.p>0?`Fall on`:`Let go`,x.setAttribute(`aria-label`,x.title)},J=0,Y=0,se=()=>{matchMedia(`(prefers-reduced-motion: reduce)`).matches||(J=performance.now())},ce=e=>{let t=(e-J)/1e3,n=`PREPARING TO LET GO…`;return t<2.2?n:t<3.2?`${n} 3`:t<4.2?`${n} 3, 2`:t<5.2?`${n} 3, 2, 1`:null};function le(){J=0,m.p>=1&&X(),m.playing=!m.playing,q()}function X(){J=0,u?.resetHistory(),m.p=0,m.closing=-1,m.playing=!1,oe=!1,l.hidden=!0,a.classList.remove(`is-ended`),q(),Z()}let ue=``;function Z(){T.set(m.p),E.set(Math.round(m.fov));let e=v(m.p),t=e.r,n=p(t,m.p<=0?0:g.L),r=ae(m.p,t,m.R0,n),i=performance.now(),s=J?ce(i):null;c.textContent=s??(i<Y?`SIMULATION REALISM: MAXIMUM. RETURN JOURNEY: NOT GUARANTEED`:r.line),c.classList.toggle(`is-alert`,!s&&i>=Y&&`alert`in r&&!!r.alert),c.classList.toggle(`is-flash`,!s&&i>=Y&&`flash`in r&&!!r.flash),r.note!==ue&&(W.textContent=r.note,ue=r.note,h.say(r.line));let u=y(e.out,e),d=m.p<=0?0:t>1?Math.sqrt(Math.max(0,1-(1-1/t)/(g.E*g.E))):e.v,f=e.left*o;D.set([t,Math.max(f,.001),d,n,u],[G.r(t),G.t(f),G.v(d),G.g(n),`×${Number(u.toPrecision(2))}`],[null,null,t>1||m.p<=0?`vs holding still`:`vs falling in`,null,null]),t<1&&!oe&&(oe=!0),m.closing>=1&&l.hidden&&(l.hidden=!1,a.classList.add(`is-ended`),m.playing=!1,q())}let Q=null,$=0;e.addEventListener(`pointerdown`,t=>{m.guided=!1,$=0,Q={x:t.clientX,y:t.clientY,yaw:m.yaw,pitch:m.pitch},e.setPointerCapture(t.pointerId),a.classList.add(`is-looking`)}),e.addEventListener(`pointermove`,t=>{if(!Q)return;let n=(m.allRound?180:m.fov)*Math.PI/180/e.clientHeight;m.yaw=Q.yaw-(t.clientX-Q.x)*n,m.pitch=Math.max(-Math.PI,Math.min(Math.PI,Q.pitch+(t.clientY-Q.y)*n))});let de=()=>{Q=null,a.classList.remove(`is-looking`),$=performance.now()+3e3};e.addEventListener(`pointerup`,de),e.addEventListener(`pointercancel`,de),e.addEventListener(`wheel`,e=>{e.preventDefault(),m.fov=Math.max(30,Math.min(120,m.fov*Math.exp(e.deltaY*.001))),m.fovOwn=!0,E.set(Math.round(m.fov))},{passive:!1}),window.addEventListener(`keydown`,e=>{e.target.closest(`input, button`)||(e.key===` `&&(e.preventDefault(),le()),(e.key===`r`||e.key===`R`)&&X())});let fe=performance.now(),pe=0,me=!1,he=0,ge=e=>{let t=Math.min(.25,(e-fe)/1e3);fe=e,J&&!ce(e)&&(J=0,m.playing=!0,q(),Y=e+4500),m.playing&&m.p<1&&(m.p=Math.min(1,m.p+t*m.speed/N)),(m.playing||m.p<=0||m.closing>=0)&&(he+=t),m.p>=1&&m.closing<0&&(m.closing=0),a.classList.toggle(`is-closing`,m.closing>=0),m.closing>=0&&m.closing<1&&(m.closing=Math.min(1,m.closing+t/2.8));let n=v(m.p),r=n.r;!m.guided&&$&&e>$&&!Q&&(m.guided=!0,$=0);let i=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},o=m.p<=0?0:.6*i(5,2.4,r)+.4*i(1,.15,r);if(m.guided){let e=1-Math.exp(-t/.7);m.yaw+=(0-m.yaw)*e,m.pitch+=(0-m.pitch)*e,m.fovOwn||(m.fov+=(72+28*o-m.fov)*e)}let s=z(V(H(H(n.out,-1),1-o),n.vDir,o)),c=[0,0,1],l=(e,t)=>V(e,t,-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2])),d=(e,t)=>{let n=l(e,s),r=Math.hypot(...n);return r>1e-9?H(n,t/r):[0,0,0]},f=V(d(c,1-o),d(n.out,o));Math.hypot(...f)<1e-9&&(f=d(c,1));let p=z(l(f,s)),h=z(B(s,p)),g=z(V(H(z(V(H(s,Math.cos(m.yaw)),h,Math.sin(m.yaw))),Math.cos(m.pitch)),p,Math.sin(m.pitch))),_=z(B(g,p)),y=B(_,g);try{u.draw({cam:H(n.out,r),right:_,up:y,fwd:g,tanHalf:Math.tan(m.fov/2*Math.PI/180),allRound:m.allRound,vRain:n.v,gRain:n.g,vDir:n.vDir,time:he,disc:!0,shift:!0,exposure:1,autoExposure:!0,flash:1+12*Math.max(0,Math.min(1,(m.p-.96)/.04))**2,collapse:Math.max(0,m.closing),white:m.closing<0?0:Math.max(0,Math.min(1,(m.closing-.86)/.14)),skyRot:re,skyGain:.55+.45*i(2,14,r)})}catch(e){me||(me=!0,console.error(e))}e-pe>100&&(Z(),pe=e),_e=requestAnimationFrame(ge)},_e=requestAnimationFrame(ge);l.querySelector(`[data-again]`)?.addEventListener(`click`,()=>{X(),se()}),l.querySelector(`a`)?.addEventListener(`click`,e=>{e.preventDefault(),location.assign(e.currentTarget.href)}),q(),Z(),K(),se(),window.addEventListener(`resize`,K),window.addEventListener(`pagehide`,()=>{cancelAnimationFrame(_e),u.destroy()}),e.addEventListener(`webglcontextlost`,e=>e.preventDefault()),e.addEventListener(`webglcontextrestored`,()=>location.reload())}K();