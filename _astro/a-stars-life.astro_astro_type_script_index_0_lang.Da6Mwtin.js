import{S as e,b as t,n,p as r,t as i,w as a,x as o,y as s}from"./narration.Crm9S85h.js";import{a as c,c as l,i as u,o as d,r as f,s as p,t as m}from"./post.lhgbitLo.js";import{n as ee,t as h}from"./sky.Cy6Kxnap.js";import{l as te}from"./views.C-9pmGw3.js";import{T as ne,c as re,u as g}from"./shared-a13.DT6NLTJQ.js";import{a as _,c as v,d as y,i as ie,l as b,n as x,o as S,r as ae,s as C,t as oe,u as se}from"./figs.Du327Gvd.js";var w=[`Its heat`,``],T=[`Electrons`,`that won’t share`],E=[`Its heat`,`and its core, by electrons`];function ce(e,t,n,r,i){let a=e=>Math.min(1,e/Math.max(r,1e-6)),o=15e6*n**(n<1?.55:.3);switch(e){case`cloud`:return{whole:[{r:1,kind:`gas`,name:`Cold gas and dust`}],fusing:[`Nothing`,`not yet`],Tc:10*10**(4*t),heldBy:[`Barely`,`it’s falling in`]};case`protostar`:return{whole:[{r:1,kind:`conv`,name:`Boiling all through`}],fusing:[`Nothing yet`,`heating as it shrinks`],Tc:1e5*10**(2*t),heldBy:w};case`main`:case`red dwarf`:{let r=o*(.9+.22*t),i=[`Hydrogen`,`into helium`];return n<.35||e===`red dwarf`?{whole:[{r:.2,kind:`fuseH`,name:`Fusing hydrogen`},{r:1,kind:`conv`,name:`Boiling all through`}],fusing:i,Tc:r,heldBy:w}:n<1.3?{whole:[{r:.25,kind:`fuseH`,name:`Fusing hydrogen`},{r:n<1?.71-.45*(1-n):Math.min(.97,.71+.26*((n-1)/.3)),kind:`rad`,name:`Light working its way out`},{r:1,kind:`conv`,name:`Boiling`}],fusing:i,Tc:r,heldBy:w}:{whole:[{r:.2+.03*Math.log10(n),kind:`fuseH`,name:`Fusing hydrogen, boiling`},{r:1,kind:`rad`,name:`Light working its way out`}],fusing:i,Tc:r,heldBy:w}}case`gap`:{let e=n>=8,r=e?.6*n**.4:.03;return{whole:e?[{r:1,kind:`rad`,name:`Light working its way out`}]:[{r:.5-.3*t,kind:`rad`,name:`Light working its way out`},{r:1,kind:`conv`,name:`Boiling`}],core:{layers:[{r:.85,kind:`he`,name:`Helium, spent`},{r:1,kind:`fuseH`,name:`A shell fusing hydrogen`}],share:a(r)},fusing:[`Hydrogen`,`in a shell`],Tc:o*(1.3+.7*t),heldBy:e?w:E}}case`giant`:return{whole:[{r:1,kind:`conv`,name:`Boiling, deep`}],core:{layers:[{r:.85,kind:`he`,name:`Helium, spent and squeezed`},{r:1,kind:`fuseH`,name:`A shell fusing hydrogen`}],share:a(.03)},fusing:[`Hydrogen`,`in a shell`],Tc:3e7+7e7*t**2,heldBy:E};case`helium`:return{whole:[{r:1,kind:`conv`,name:`Boiling`}],core:{layers:[{r:.6,kind:`fuseHe`,name:`Fusing helium`},{r:.85,kind:`he`,name:`Helium`},{r:1,kind:`fuseH`,name:`A shell fusing hydrogen`}],share:a(n<2?.1:.15*n**.6)},fusing:[`Helium`,`into carbon and oxygen`],Tc:11e7+4e7*t,heldBy:w};case`agb`:return{whole:[{r:1,kind:`conv`,name:`Boiling, deep`}],core:{layers:[{r:.6,kind:`co`,name:`Carbon and oxygen, spent`},{r:.72,kind:`fuseHe`,name:`A shell fusing helium`},{r:.88,kind:`he`,name:`Helium`},{r:1,kind:`fuseH`,name:`A shell fusing hydrogen`}],share:a(.025)},fusing:[`Helium, hydrogen`,`in shells`],Tc:2e8+1e8*t,heldBy:E};case`supergiant`:{let e=[{r:.88,kind:`he`,name:`Helium`},{r:1,kind:`fuseH`,name:`A shell fusing hydrogen`}],t,r,o;return i<2.6?(t=[{r:.6,kind:`fuseHe`,name:`Fusing helium`},...e],r=[`Helium`,`into carbon and oxygen`],o=2e8):i<3.6?(t=[{r:.38,kind:`fuseHeavy`,name:`Fusing carbon`},{r:.6,kind:`co`,name:`Carbon and oxygen`},{r:.7,kind:`fuseHe`,name:`A shell fusing helium`},...e],r=[`Carbon`,`into neon and magnesium`],o=8e8):i<4.3?(t=[{r:.3,kind:`fuseHeavy`,name:`Fusing neon, then oxygen`},{r:.42,kind:`onemg`,name:`Oxygen, neon and magnesium`},{r:.5,kind:`fuseHeavy`,name:`A shell fusing carbon`},{r:.62,kind:`co`,name:`Carbon and oxygen`},{r:.7,kind:`fuseHe`,name:`A shell fusing helium`},...e],r=[`Oxygen`,`into silicon and sulphur`],o=18e8):i<5.2?(t=[{r:.22,kind:`fuseHeavy`,name:`Fusing silicon`},{r:.32,kind:`si`,name:`Silicon and sulphur`},{r:.42,kind:`onemg`,name:`Oxygen, neon and magnesium`},{r:.5,kind:`fuseHeavy`,name:`Shells fusing carbon and oxygen`},{r:.62,kind:`co`,name:`Carbon and oxygen`},{r:.7,kind:`fuseHe`,name:`A shell fusing helium`},...e],r=[`Silicon`,`into iron`],o=3e9):(t=[{r:.2,kind:`fe`,name:`Iron: nothing left to burn`},{r:.26,kind:`fuseHeavy`,name:`Shells still fusing`},{r:.34,kind:`si`,name:`Silicon and sulphur`},{r:.44,kind:`onemg`,name:`Oxygen, neon and magnesium`},{r:.6,kind:`co`,name:`Carbon and oxygen`},{r:.7,kind:`fuseHe`,name:`A shell fusing helium`},...e],r=[`Nothing`,`in its core: iron won’t burn`],o=35e8),{whole:[{r:1,kind:`conv`,name:`Boiling`}],core:{layers:t,share:a(2+.08*n)},fusing:r,Tc:o,heldBy:i>=5.2?[`Electrons`,`in its iron core, for now`]:w}}case`supernova`:return i<6?{whole:[{r:.03,kind:n>=25?`bh`:`ns`,name:`Its core, fallen in`},{r:.5,kind:`ejecta`,name:`The shock, on its way out`},{r:1,kind:`conv`,name:`The rest, not knowing yet`}],fusing:[`For a moment`,`in the shock, heavier elements`],Tc:1e11,heldBy:[`Nothing`,`its core fell in`]}:{whole:[{r:.04,kind:n>=25?`bh`:`ns`,name:n>=25?`Its core, collapsing to a black hole`:`Its core, now a neutron star`},{r:1,kind:`ejecta`,name:`The rest of the star, blasted out`}],fusing:[`For a moment`,`heavier elements, in the blast`],Tc:1e11,heldBy:[`Nothing`,`its core fell in`]};case`nebula`:return{whole:[{r:.12,kind:`wd`,name:`Its bare core: carbon and oxygen`},{r:1,kind:`ejecta`,name:`Its outer layers, drifting away`}],fusing:[`Nothing`,`its shells have gone out`],Tc:1e8,heldBy:T};case`white dwarf`:return{whole:[{r:.96,kind:`wd`,name:`Carbon and oxygen, crushed`},{r:1,kind:`he`,name:`A thin skin of helium and hydrogen`}],fusing:[`Nothing`,`cooling for ever`],Tc:3e7*(1-.6*t),heldBy:T};case`neutron star`:return{whole:[{r:1,kind:`ns`,name:`Neutrons, packed as tight as a nucleus`}],fusing:[`Nothing`,``],Tc:0,heldBy:[`Neutrons`,`that won’t share`]};case`black hole`:return{whole:[{r:1,kind:`bh`,name:`No inside to see: a black hole`}],fusing:[`Nothing`,``],Tc:0,heldBy:[`Nothing`,`it fell in for ever`]}}}var le=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform vec3 uEye, uRight, uUp, uFwd;
uniform float uTan, uAspect, uShift, uTime;
uniform float uR, uT, uBright, uCell, uSpin; // the star: radius, temperature, surface brightness, cell scale, spin
uniform vec4 uCloud;   // the birth cloud: radius, density, the bubble its star blows in it, how far its first light has reached (both in its radius)
uniform vec4 uDisc;    // the young star's disc: radius, density, the jets' strength; and how far the cloud has turned
uniform vec4 uBirth;   // its birth: collapse (0 to 1), the core's glow (0 to 1), the star's light (0 to 1), the flash (0 to 1)
uniform vec4 uNeb;     // a planetary nebula: radius, brightness, 1, age 0 to 1
uniform vec4 uRem;     // what's left: kind (1 white dwarf, 2 neutron star, 3 black hole), radius drawn, brightness, temperature
uniform vec4 uBoom;    // a supernova: the whiteout (0 to 1), the ejecta's radius, its age (0 to 1, on through what's left), 0
uniform vec4 uCore;    // a heavy star's last moments, seen through it: its core's radius drawn, the bounce's flash, the shock's radius, how see-through it is
// (Squares written out: pow() of a negative number is undefined on graphics cards, and came out as not-a-number.)
float sq(float x) { return x * x; }
float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
// (Noise from a texture since 19 October 2026: four channels of smooth value noise, one lattice cell to a unit, eight
// cells to the texture's width, repeating; a look in it is far cheaper than working the noise out each time.)
uniform highp sampler3D uNoise;
float noise3(vec3 p) { return texture(uNoise, p * 0.125).r; }
vec4 noise4(vec3 p) { return texture(uNoise, p * 0.125); }
float fbm3(vec3 p) { float v = 0., a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise3(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return v; }
float fbm2(vec3 p) { return 0.66 * noise3(p) + 0.34 * noise3(p * 2.11 + 5.3); }
// Wisps: noise bent by noise, so its shapes stream and curl rather than blot.
float warped(vec3 p) {
  vec3 q = noise4(p * 0.9 + vec3(0., 3.1, 7.7)).gba;
  return fbm3(p + 2.2 * (q - 0.5));
}
// Filaments: the noise's ridges, sharpened.
float ridged(vec3 p) { return 1. - abs(2. * fbm2(p) - 1.); }
// Convection cells: bright centres, dark lanes between (a cellular pattern from the noise's ridges).
float cells(vec3 p) {
  float n = noise3(p), m = noise3(p * 2.1 + 7.3);
  float lanes = 1. - abs(2. * n - 1.);
  return 0.55 + 0.45 * pow(lanes, 0.35) - 0.25 * pow(1. - abs(2. * m - 1.), 6.);
}
vec3 bb(float T) {
  T = clamp(T, 900., 50000.);
  float t = T / 100.;
  vec3 c;
  c.r = t <= 66. ? 1. : clamp(1.2929 * pow(t - 60., -0.1332), 0., 1.);
  c.g = t <= 66. ? clamp(0.3900816 * log(t) - 0.6318414, 0., 1.) : clamp(1.1298909 * pow(t - 60., -0.0755148), 0., 1.);
  c.b = t >= 66. ? 1. : (t <= 19. ? 0. : clamp(0.5432068 * log(t - 10.) - 1.19625408, 0., 1.));
  c = pow(c, vec3(2.2));
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  vec3 r = pow(c / max(l, 1e-4), vec3(1.35));
  return r / max(dot(r, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
}
vec2 sphere(vec3 ro, vec3 rd, float R) {
  float b = dot(ro, rd), c = dot(ro, ro) - R * R, h = b * b - c;
  if (h < 0.) return vec2(1e30, -1e30);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}
mat3 spinY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0., -s, 0., 1., 0., s, 0., c); }
// (A ray's jitter, so the marching's steps don't show as rings.)
float jit() { return hash13(vec3(gl_FragCoord.xy, fract(uTime * 7.13) * 91.)); }

// ── The birth cloud (17 October 2026's ball of noise, reworked on 19 October 2026: John, "much wispier, more nebulous,
// and blend in with the background in a cinematic way ... the cloud doesn't really show that it's condensing towards
// the center"). Dust and gas in curling wisps and filaments, its edges ragged and fading into the sky, dark lanes
// hiding the stars behind; collapsing, its wisps drawn in and wound around as they fall, its centre thickening and
// glowing dull red; then, when the star lights, its light thrown out through the cloud, catching the wisps' edges and
// breaking through the gaps in shafts. In units of the cloud's radius.
// Its matter: long filaments streaming in to a dense hub, as Herschel saw clouds collapsing to stars (the "hub and
// filaments" of Taurus and Serpens), with ragged turbulent wisps between them; the filaments wound around as they fall,
// the whole drawing in, the hub thickening.
float cloudDensity(vec3 q, float collapse) {
  float r = length(q);
  // (Falling in: what's seen at r came from further out, and has wound around as it fell.)
  float fall = 1. + 1.3 * collapse * (1. - smoothstep(0., 1.1, r));
  // (And turning, faster and faster towards its middle as it falls in, as a skater's spin quickens as she draws her
  // arms in: John, "The cloud at the beginning should be rotating rapidly in its center ... when it comes together to
  // form the star".)
  // (The spin varying gently with distance from the middle, so that its wisps wind into a whirl, not into threads.)
  float a = collapse * 2.2 / (r + 0.3) + uDisc.w * 0.6 / (r + 0.25);
  float c = cos(a), s = sin(a);
  // (Not a ball: flattened and drawn out, as clouds are, into a lumpy sheet.)
  vec3 p = vec3(c * q.x - s * q.z, q.y * (1.6 + 0.5 * collapse), (s * q.x + c * q.z) * 1.15) * fall;
  float rp = length(p);
  vec3 dir = p / max(rp, 1e-4);
  // Its edge ragged and lopsided, and drawing in as it collapses; the hub. (Nothing more to work out where there's
  // neither.)
  float edge = (0.55 + 0.9 * noise3(dir * 1.1 + 4.4)) * (1. - 0.45 * collapse);
  float env = smoothstep(edge, edge * 0.1, r);
  float core = exp(-sq(r / max(0.05, 0.36 - 0.3 * collapse))) * (0.3 + 2.6 * collapse);
  if (env < 0.02 && core < 0.02) return 0.;
  // The filaments: ridges of noise on the sky of directions, stretched along the radius and bent, so that a few run in,
  // curving, to the hub; fainter, finer ones between.
  vec4 wq = noise4(p * 1.1 + 7.1);
  vec3 wd = dir * 1.25 + (wq.gba - 0.5) * (0.5 + 0.6 * rp) + vec3(0., 0., rp * 0.35);
  float fil = 1. - abs(2. * noise3(wd) - 1.);
  fil = fil * fil; fil *= fil; fil *= fil; fil *= fil; // (to the sixteenth: thin)
  float fil2 = 1. - abs(2. * noise3(wd * 2.7 + 3.3 + vec3(rp * 0.9)) - 1.);
  fil2 = fil2 * fil2; fil2 *= fil2; fil2 *= fil2;
  // The wisps: warped noise, cut off below a level so that there's clear sky between them.
  vec3 pw = p * 2.1 + 2.4 * (wq.rgb - 0.5);
  float w = 0.57 * noise3(pw) + 0.29 * noise3(pw * 2.03 + vec3(1.7, 9.2, 3.1)) + 0.14 * noise3(pw * 4.12 + vec3(5.1, 2.2, 8.3));
  float wisp = smoothstep(0.45, 0.75, w);
  float discOn = clamp(uDisc.x / max(uCloud.x * 0.12, 1e-3), 0., 1.);
  float d = env * (1. + collapse) * (0.1 * wisp + (1.3 * fil + 0.4 * fil2) * (0.3 + wisp)) + core * (0.5 + 0.8 * w) * (1. - 0.95 * discOn);
  // (The jets bore cones out of it along its axis.)
  d *= 1. - 0.9 * discOn * exp(-sq(length(q.xz) / (0.02 + 0.45 * abs(q.y))));
  // The hollow around the young star, and once it's lit, the bubble its light and wind blow: its wall ragged, the gas
  // piled up on it.
  float wall = uCloud.z * (0.55 + 0.9 * w);
  d *= smoothstep(wall, wall + 0.14, r) * (1. + 1.8 * exp(-sq((r - wall - 0.06) / 0.05)) * step(0.001, uCloud.z));
  return d;
}
// (The same, roughly and cheaply, for the shadows: its shape, its core, one look at the noise.)
float cloudRough(vec3 q, float collapse) {
  float r = length(q);
  float edge = (0.55 + 0.9 * noise3(q / max(r, 1e-4) * 1.1 + 4.4)) * (1. - 0.45 * collapse);
  float core = exp(-sq(r / max(0.05, 0.36 - 0.3 * collapse))) * (0.3 + 2.6 * collapse);
  float discOn = clamp(uDisc.x / max(uCloud.x * 0.12, 1e-3), 0., 1.);
  float wall = uCloud.z * 1.0;
  return (smoothstep(edge, edge * 0.1, r) * (1. + collapse) * 0.4 * noise3(q * 3.3 + 2.) + core * (1. - 0.95 * discOn)) * smoothstep(wall, wall + 0.14, r);
}
// Light on the cloud from outside it: a bright cluster of young stars somewhere behind it and above (where The Van looks
// from as the cloud falls in), throwing its wisps' edges into silver as the light comes through; and a little from all
// round, the galaxy's own glow. (Scattering by the dust: mostly forwards, as dust's is, by Henyey and Greenstein's rule.)
const vec3 KEY = vec3(-0.80, 0.52, -0.30);
float hg(float c, float g) { return (1. - g * g) / pow(1. + g * g - 2. * g * c, 1.5) * 0.0796; }
vec4 birthCloud(vec3 ro, vec3 rd, float tHit) {
  float Rc = uCloud.x;
  float collapse = uBirth.x, glow = uBirth.y, light = uBirth.z;
  // (Only where there's matter: inside its edge, and outside the hollow.)
  vec2 h = sphere(ro, rd, Rc * (1.3 - 0.55 * collapse));
  if (h.y <= 0.) return vec4(0., 0., 0., 1.);
  float t0 = max(h.x, 0.), t1 = min(h.y, tHit);
  vec2 hole = uCloud.z > 0.02 ? sphere(ro, rd, Rc * uCloud.z * 0.5) : vec2(1e30, -1e30);
  // (A ray that misses the hollow is one stretch.)
  float ha = t1, hb = t1;
  if (hole.y > hole.x) { ha = clamp(hole.x, t0, t1); hb = clamp(hole.y, t0, t1); }
  float len1 = ha - t0, len2 = t1 - hb, tot = max(len1 + len2, 1e-6);
  const int N = 34;
  int n1 = int(float(N) * len1 / tot + 0.5);
  float tr = 1.;
  vec3 acc = vec3(0.);
  vec3 star = bb(max(uT, 3500.)) * light;
  vec3 key = normalize(KEY);
  float ph = 0.2 * 0.0796 + 0.8 * hg(dot(key, rd), 0.65);
  vec3 keyCol = vec3(0.6, 0.78, 1.05) * 7. * ph * (1. - 0.6 * light);
  vec3 amb = vec3(0.05, 0.042, 0.04) * (1. - 0.5 * light);
  float js = jit();
  for (int i = 0; i < N; i++) {
    // (The steps shared between the stretch before the hollow and the stretch after it.)
    bool first = i < n1;
    float a = first ? t0 : hb, b = first ? ha : t1;
    float k = first ? float(i) : float(i - n1), n = first ? float(n1) : float(N - n1);
    float dt = (b - a) / max(n, 1.);
    float tt = a + (k + js) * dt;
    vec3 p = ro + rd * tt;
    vec3 q = p / Rc;
    float r = length(q);
    // (Clear just in front of The Van's lens, so that close in it sees past the near wisps rather than into fog.)
    float near = smoothstep(0.08, 0.4, tt / Rc);
    // Once it's lit, a thin haze through the cloud too, in which the star's light shows as shafts between the
    // filaments' shadows.
    float haze = light * 0.012 * uCloud.y * smoothstep(0.9, 0.2, r) * smoothstep(uCloud.z * 0.6, uCloud.z * 0.6 + 0.25, r);
    float d = cloudDensity(q, collapse) * uCloud.y * near + haze;
    if (d < 0.003) continue;
    // The key light, through the cloud between (two looks towards it): the side facing it lit, the far side dark.
    float tk = cloudRough(q + key * 0.2, collapse) * 0.4;
    float keyShade = exp(-tk * uCloud.y * 14.);
    vec3 lit = keyCol * keyShade + amb;
    // (Its rims facing the cluster glow faintly red, the gas there lit up by its ultraviolet: bright-rimmed, as the
    // Horsehead's and the Pillars' edges are.)
    acc += tr * vec3(1.0, 0.16, 0.22) * 0.5 * (1. - light) * keyShade * smoothstep(0.02, 0.4, d) * exp(-d * 3.) * dt / Rc;
    // The hub's dull red glow, as it thickens and heats; and once lit, the star's light, through the cloud between
    // (three looks back towards the centre, for the shadows that make the shafts).
    lit += vec3(1.0, 0.28, 0.08) * glow * 1.6 * exp(-r * 6.);
    vec3 dustCol = vec3(0.6, 0.52, 0.48);
    if (light > 0.01) {
      // (Its first light sweeping out through the cloud, lighting each wisp as it reaches it.)
      // (Before it lights, the young star's own glow, faint, reaching everywhere.)
      float reach = uCloud.w > 0. ? smoothstep(uCloud.w + 0.08, uCloud.w - 0.25, r) : 1.;
      float fallOff = 1. / (0.04 + r * r * 6.) * reach;
      float between = cloudRough(q * 0.7, collapse) + cloudRough(q * 0.4, collapse) + cloudRough(q * 0.12, collapse);
      float shade = exp(-between * uCloud.y * r * 1.6);
      // (And for a moment, as it lights, far brighter: the flash lighting the cloud.)
      lit += star * fallOff * shade * 2.2 * (1. + 10. * uBirth.w);
      dustCol = mix(dustCol, vec3(1.0, 0.92, 0.84), light * shade);
      // (A faint glow of the gas itself: hydrogen's red, where the young star's light reaches.)
      acc += tr * vec3(0.9, 0.18, 0.25) * light * shade * d * fallOff * dt / Rc * 0.8;
    }
    float step_ = d * dt / Rc * 7.;
    acc += tr * dustCol * lit * step_ * 0.55;
    tr *= exp(-step_ * 1.2);
    if (tr < 0.01) break;
  }
  return vec4(acc, tr);
}

// ── The young star's disc: dust in a flared disc, rings and gaps carved by forming planets, as ALMA saw HL Tauri's;
// lit on its upper surface by the star, dark in its middle where it's thickest, its inner rim hot. Its two jets: knotted,
// widening, bright shock knots travelling out along them and a bow shock at each tip, as the Herbig–Haro objects are.
// The disc's rings and gaps, carved by planets forming (HL Tauri's, as ALMA saw them), as a share of its full density.
float discGaps(float r) {
  return 1. - 0.8 * exp(-sq((r - 0.3) / 0.022)) - 0.85 * exp(-sq((r - 0.47) / 0.026)) - 0.7 * exp(-sq((r - 0.66) / 0.03)) - 0.55 * exp(-sq((r - 0.82) / 0.026)) - 0.35 * exp(-sq((r - 0.2) / 0.015));
}
// The young star's disc (rebuilt on 19 October 2026; John, of a first, ringed one: "It looks solid and shiny like a
// solid disc. It should be still nebulous and irregular and not like a shiny cylinder"): dust and gas, puffed up and
// flared, clumpy and torn, streamers winding in from the cloud around it, its outer edge fraying into the cloud; a dark
// lane of dust through its middle where it's thickest, its surfaces lit softly from within by the young star, whiter
// where the smallest grains scatter its light at the top, browner and redder deeper in; the rings and gaps planets will
// carve only hinted at.
vec4 youngDisc(vec3 ro, vec3 rd, float tHit) {
  float Rd = uDisc.x;
  // (Where it can be: a slab around the middle, within its streamers' reach.)
  if (abs(rd.y) < 1e-4) return vec4(0., 0., 0., 1.);
  float H = Rd * 0.38;
  float ta = (-H - ro.y) / rd.y, tb = (H - ro.y) / rd.y;
  float t0 = max(min(ta, tb), 0.), t1 = min(max(ta, tb), tHit);
  vec2 hs = sphere(ro, rd, Rd * 1.7);
  t0 = max(t0, hs.x); t1 = min(t1, hs.y);
  if (t1 <= t0) return vec4(0., 0., 0., 1.);
  const int N = 36;
  float dt = (t1 - t0) / float(N), tr = 1., js = jit();
  vec3 acc = vec3(0.);
  vec3 star = bb(max(uT, 3500.)) * (0.5 + uBirth.z);
  for (int i = 0; i < N; i++) {
    vec3 p = ro + rd * (t0 + (float(i) + js) * dt);
    float r = length(p.xz) / Rd;
    if (r > 1.7 || r < 0.015) continue;
    float z = p.y / Rd;
    // Its gas turning, the inside faster, so that its clumps are drawn out into spiral streaks.
    float ang = atan(p.z, p.x);
    float sp = ang + 2.4 * log(r + 0.08) - uTime * 0.05 / (pow(r, 1.5) + 0.25);
    vec3 nq = vec3(cos(sp) * r * 3.2, z * 9., sin(sp) * r * 3.2);
    float n = fbm3(nq + 3.7);
    float clump = smoothstep(0.3, 0.8, n);
    // Puffed up and uneven; its edge ragged.
    float hh = (0.05 + 0.11 * r) * (0.75 + 0.6 * n);
    float vert = exp(-sq(z / hh) * 0.5);
    float edge = 0.85 + 0.45 * (noise3(vec3(cos(ang) * 1.6, sin(ang) * 1.6, 7.) ) - 0.5);
    float body = smoothstep(edge * 1.3, edge * 0.45, r) * smoothstep(0.015, 0.06, r);
    float rings = 1. - 0.3 * (1. - max(discGaps(r), 0.)) * smoothstep(0.75, 0.3, r);
    float d = vert * body * (0.25 + 1.4 * clump) * rings;
    // Streamers: thin wound arms of gas still falling in on to it from the cloud.
    float arm = 1. - abs(2. * noise3(vec3(sp * 1.3, z * 6., r * 1.5) + 1.1) - 1.);
    arm *= arm; arm *= arm; arm *= arm;
    d += arm * 0.6 * exp(-sq(z / (0.06 + 0.08 * r))) * smoothstep(1.7, 0.7, r) * smoothstep(0.4, 0.8, r);
    d *= uDisc.y;
    if (d < 0.002) continue;
    // The star's light reaching here: through less of the disc the higher above its middle (its surfaces lit, its middle
    // in shadow), and less of it the further out.
    float tauStar = 7. * exp(-sq(z / (hh * 1.4)) * 0.5) * smoothstep(0.03, 0.25, r);
    float fall = 1. / (0.05 + r * r * 3.);
    float top = smoothstep(0.8, 2.2, abs(z) / hh);
    vec3 tint = mix(vec3(0.75, 0.5, 0.36), vec3(0.95, 0.9, 0.88), top);
    vec3 col = star * tint * exp(-tauStar) * fall * 0.5;
    // (The innermost part warm with its own heat.)
    col += vec3(1.0, 0.42, 0.16) * exp(-r / 0.08) * 0.6;
    float step_ = d * dt / Rd * 22.;
    acc += tr * col * step_;
    tr *= exp(-step_ * 1.3);
    if (tr < 0.01) break;
  }
  return vec4(acc, tr);
}
// (The nearest points of a ray and a line through the centre along A: how far along the line, and how far apart.)
vec2 nearAxis(vec3 ro, vec3 rd, vec3 A) {
  float b = dot(rd, A), d = dot(rd, ro), e = dot(A, ro), den = max(1. - b * b, 1e-5);
  float t = max((b * e - d) / den, 0.), s = (e - b * d) / den;
  vec3 P = ro + rd * t;
  return vec2(dot(P, A), length(P - A * dot(P, A)));
}
vec3 jets(vec3 ro, vec3 rd) {
  vec3 acc = vec3(0.);
  float Rd = max(uDisc.x, 1e-3), L = Rd * 2.2;
  for (int s = 0; s < 2; s++) {
    vec3 A = vec3(0., s == 0 ? 1. : -1., 0.);
    vec2 na = nearAxis(ro, rd, A);
    float along = na.x, dl = na.y;
    if (along <= 0. || along > L * 1.3) continue;
    float x = along / L;
    float width = Rd * (0.008 + 0.03 * x);
    float body = exp(-sq(dl / width));
    // Knots travelling out, uneven, each a blob a little wider than the jet; the bow shock at the tip curving back.
    float ph = x * 22. - uTime * 0.9 + float(s) * 2.3;
    float kw = exp(-sq(dl / (width * 1.8)));
    float knot = pow(max(0., sin(ph)), 16.) * (0.3 + 1.4 * noise3(vec3(floor(ph / 6.2832) * 1.7, float(s) * 5., 0.))) * kw;
    float bowAt = 1. - 2.5 * sq(dl / Rd);
    float bow = exp(-sq((x - bowAt) / 0.02)) * exp(-sq(dl / (Rd * 0.09)));
    vec3 col = mix(vec3(0.7, 0.8, 1.2), vec3(1.25, 0.3, 0.36), smoothstep(0.05, 0.5, x));
    acc += col * uDisc.z * ((body * 0.05 + 1.8 * knot) * exp(-x * 1.4) * smoothstep(0., 0.04, x) + bow * 0.9);
  }
  return acc * 0.6;
}

// ── A planetary nebula: the dying star's outer layers, shell within shell, as the Helix and the Cat's Eye are: a faint
// hot bubble inside, glowing in doubly ionised oxygen's blue-green; a thick bright rim, its inner edge oxygen's, its
// outer hydrogen's red, studded on its inside with dense knots, dark-headed, lit on the side facing the star, trailing
// tails away from it; faint outer rings and a halo beyond.
vec4 planetary(vec3 ro, vec3 rd, float tHit) {
  float Rn = uNeb.x;
  vec2 h = sphere(ro, rd, Rn * 1.9);
  if (h.y <= 0.) return vec4(0., 0., 0., 1.);
  float t0 = max(h.x, 0.), t1 = min(h.y, tHit);
  const int N = 46;
  float dt = (t1 - t0) / float(N), tr = 1., js = jit();
  vec3 acc = vec3(0.);
  vec3 oiii = vec3(0.1, 0.95, 0.85), ha = vec3(1.3, 0.14, 0.22), nii = vec3(1.1, 0.35, 0.2);
  for (int i = 0; i < N; i++) {
    vec3 p = ro + rd * (t0 + (float(i) + js) * dt);
    vec3 q = p / Rn;
    float r = length(q);
    vec3 dir = q / max(r, 1e-4);
    // (A little hourglass-waisted, and lumpy.)
    float shapeR = 0.9 + 0.22 * dir.y * dir.y + 0.12 * (fbm2(dir * 3.1 + 2.) - 0.5);
    float s = r / shapeR;
    float n = warped(q * 2.6 + 1.3);
    float rim = exp(-sq((s - 0.92) / 0.09)) * smoothstep(0.35, 0.75, n) * 1.6;
    float bubble = smoothstep(0.85, 0.3, s) * 0.1 * (0.4 + 0.9 * n);
    // Knots on the rim's inside: dark heads, bright cusps facing the star.
    float kn = noise3(dir * 34. + 7.);
    float knot = smoothstep(0.7, 0.85, kn) * exp(-sq((s - 0.82) / 0.06));
    float cusp = knot * smoothstep(0.81, 0.77, s);
    float halo = (0.05 + 0.06 * pow(0.5 + 0.5 * sin(s * 26.), 3.)) * smoothstep(1.85, 1.2, s) * smoothstep(1.05, 1.25, s);
    vec3 col = oiii * (bubble + rim * smoothstep(1.02, 0.85, s)) + mix(oiii, ha, smoothstep(0.88, 1.02, s)) * rim * 0.9 + nii * cusp * 3.5 + ha * halo;
    acc += tr * col * dt / Rn * 0.9 * uNeb.y * 4.5;
    tr *= exp(-knot * 14. * dt / Rn);
  }
  return vec4(acc, tr);
}

// ── A supernova (19 October 2026; John: "the supernova visualization gives no feel as to the immense power and speed
// with which this happens. And the cloud that is emitted just seems to stop at a particular radius, whereas it should be
// the most cataclysmic explosion. With complex gas and streams flying way beyond the bounds of the screen"). The star's
// insides thrown out at a tenth of light's speed: not a shell but fingers and plumes of hot gas, pushed through the
// cooler gas ahead of them (the Rayleigh–Taylor fingers of Cassiopeia A and the Crab), streamers running far beyond
// the main front; hot and blue-violet within, glowing gold and green in its middle, red at its shocked outer edges. It
// never stops: it thins as it spreads.
vec4 supernova(vec3 ro, vec3 rd, float tHit) {
  float Re = uBoom.y, age = uBoom.z;
  vec2 h = sphere(ro, rd, Re * 2.4);
  if (h.y <= 0.) return vec4(0., 0., 0., 1.);
  float t0 = max(h.x, 0.), t1 = min(h.y, tHit);
  const int N = 40;
  float dt = (t1 - t0) / float(N), js = jit();
  vec3 acc = vec3(0.);
  float tr = 1.;
  float bright = (0.45 + 1.6 * exp(-age * 10.)) * (1. - 0.5 * age);
  for (int i = 0; i < N; i++) {
    vec3 p = ro + rd * (t0 + (float(i) + js) * dt);
    vec3 q = p / Re;
    float r = length(q);
    if (r < 0.06) continue;
    vec3 dir = q / r;
    // Each direction's own: how far its front has got, how strong its fingers are, whether a streamer runs out of it.
    vec4 nd = noise4(dir * 1.8 + 3.7);
    float front = 0.62 + 0.3 * nd.r + 0.25 * nd.g;
    // Fingers: thin ridges on the sphere of directions, so that they run straight out; broken into knots along them.
    float f1 = 1. - abs(2. * noise3(dir * 6.5 + 1.3) - 1.);
    f1 *= f1; f1 *= f1; f1 *= f1; f1 *= f1;
    float f2 = 1. - abs(2. * noise3(dir * 14. + 5.1 + r * 0.4) - 1.);
    f2 *= f2; f2 *= f2; f2 *= f2; f2 *= f2;
    float knots = smoothstep(0.35, 0.75, noise3(dir * 4. + vec3(r * 7.)));
    float inside = smoothstep(front + 0.04, front - 0.12, r) * smoothstep(0.08, 0.35, r);
    float d = inside * (1.2 * f1 + 0.7 * f2) * (0.25 + knots);
    // The shock running ahead of it all, a thin faint skin; and streamers, the strongest fingers flying on far beyond.
    float shock = exp(-sq((r - front - 0.07) / 0.02)) * 0.1 * (0.6 + nd.b);
    float strm = f1 * smoothstep(0.55, 0.8, nd.a) * smoothstep(front - 0.05, front + 0.05, r) * exp(-(r - front) / (0.35 + 0.5 * nd.g));
    if (d + shock + strm < 0.004) continue;
    float s = r / front;
    // Its colours: hot iron and silicon blue-violet deep inside; oxygen green-gold in its middle; hydrogen and sulphur
    // red at its edges; the shock blue-white; all white-hot at first.
    vec3 col = mix(vec3(0.45, 0.45, 1.3), vec3(0.45, 1.15, 0.45), smoothstep(0.35, 0.65, s));
    col = mix(col, vec3(1.3, 0.85, 0.3), smoothstep(0.6, 0.85, s) * nd.b);
    col = mix(col, vec3(1.35, 0.22, 0.2), smoothstep(0.85, 1.0, s));
    vec3 e = col * d + vec3(0.7, 0.85, 1.3) * shock + vec3(1.3, 0.35, 0.3) * strm * 0.8;
    e = mix(e, vec3(1.2, 1.1, 1.0) * (d + shock + strm), exp(-age * 20.) * 0.7);
    acc += tr * e * dt / Re * 1.1 * bright;
    tr *= exp(-(d + strm) * 0.4 * dt / Re);
  }
  // The heart of it, still blazing, early on.
  float b = length(cross(ro, rd)), tc = -dot(ro, rd);
  if (tc > 0.) acc += vec3(1.1, 1.0, 1.25) * exp(-sq(b / (Re * 0.12))) * 3. * exp(-age * 14.);
  return vec4(acc, tr);
}

void main() {
  vec2 ndc = vUv * 2. - 1.;
  vec3 rd = normalize(uFwd + uRight * ndc.x * uTan * uAspect + uUp * (ndc.y - uShift) * uTan);
  vec3 ro = uEye;
  vec3 col = vec3(0.);
  float alpha = 0.;
  float tHit = 1e30;
  // The star.
  if (uR > 0.) {
    vec2 h = sphere(ro, rd, uR);
    if (h.x < 1e29 && h.x > 0.) {
      if (uCore.w < 0.5) tHit = h.x;
      vec3 p = ro + rd * h.x, n = p / uR;
      float mu = max(dot(n, -rd), 0.);
      float limb = 1. - 0.62 * (1. - mu) - 0.12 * (1. - mu) * (1. - mu);
      vec3 q = spinY(uSpin) * n;
      float g = cells(q * uCell + vec3(0., uTime * 0.05, 0.)) * cells(q * uCell * 2.7 - vec3(uTime * 0.03));
      float spot = uCell > 30. ? smoothstep(0.9, 0.93, noise3(q * 16. + 11.)) * smoothstep(0.55, 0.7, noise3(q * 2. + 3.)) * 0.6 : 0.;
      col = bb(uT * (0.92 + 0.12 * g) * (0.88 + 0.12 * mu)) * uBright * limb * (0.45 + 0.75 * g) * (1. - spot);
      alpha = 1.;
      // (Seen through, as The Van looks inside a heavy star at its end: its outer layers a faint glow, brighter towards
      // its edge, what's inside showing through.)
      if (uCore.w > 0.) {
        vec3 shell = bb(uT) * uBright * (0.05 + 0.45 * pow(1. - mu, 3.)) * (0.6 + 0.4 * g);
        col = mix(col, shell, uCore.w);
        alpha = mix(1., 0.3, uCore.w);
      }
    }
    // The glow round it: its light scattered in the picture's glass, and a faint corona for hot stars.
    float b = length(cross(ro, rd));
    float tc = -dot(ro, rd);
    if (tc > 0. && b > uR) {
      float x = b / uR - 1.;
      col += bb(uT) * uBright * (0.10 * exp(-x * 9.) + 0.02 * exp(-x * 1.8)) * (uT > 4000. ? 1. : 0.6);
    }
  }
  // A heavy star's last moments, seen through it (19 October 2026; John: "the star should very, very quickly shrink down
  // to a point and then explode out from that"; but it's the star's iron core, about the size of the Earth, that falls in,
  // in a quarter of a second, not the whole star, whose outer layers don't notice for about a day, until the shock from
  // the core reaches them, as Lives and Deaths of Stars tells it). Its core, drawn far larger than it is, white-hot,
  // shrinking to a point; its bounce, a contained flash; then the shock running out through the star, a thin bright
  // shell, the gas behind it heated.
  if (uCore.w > 0. && uR > 0.) {
    float b = length(cross(ro, rd)), tc = -dot(ro, rd);
    if (tc > 0.) {
      float rc = uCore.x;
      if (rc > 0.) { float x = b / rc; col += vec3(0.85, 0.92, 1.15) * uCore.w * (smoothstep(1.05, 0.85, x) * 2.5 + exp(-x * 1.4) * 0.7); }
      col += vec3(1.0, 0.97, 0.92) * uCore.y * (exp(-sq(b / (uR * 0.012))) * 60. + exp(-b / (uR * 0.05)) * 3.);
      float Rs = uCore.z;
      if (Rs > 0.) {
        float inside = step(b, Rs);
        float edge = inside * Rs / sqrt(max(Rs * Rs - b * b, Rs * Rs * 0.004));
        float ring = exp(-sq((b - Rs) / (uR * 0.012)));
        col += vec3(0.75, 0.86, 1.3) * uCore.w * (0.12 * min(edge, 10.) + 1.6 * ring);
        col += vec3(1.0, 0.75, 0.5) * uCore.w * inside * 0.25 * (1. - b / Rs);
      }
    }
  }
  // What's left at the centre.
  if (uRem.x > 0.5) {
    float b = length(cross(ro, rd));
    float tc = -dot(ro, rd);
    if (uRem.x > 2.5) {
      // A black hole: its shadow, and a thin bright ring of bent light round it.
      vec2 h = sphere(ro, rd, uRem.y);
      if (h.x < 1e29 && h.x > 0.) { col = vec3(0.); alpha = 1.; tHit = h.x; }
      else if (tc > 0.) { float x = b / uRem.y - 1.; col += vec3(1.0, 0.85, 0.7) * uRem.z * exp(-x * x * 160.) * 1.2; }
    } else if (tc > 0.) {
      float x = b / uRem.y;
      if (uRem.x < 1.5) {
        // A white dwarf: a tiny, intensely bright point, in its surface's colour (blue-white when it's new, cooling over
        // billions of years through white and yellow to orange), a tight hot core and a soft halo (no spikes: John, "Be
        // careful with diffraction spikes. They can look a bit fake").
        vec3 c = bb(max(uRem.w, 3000.));
        col += c * uRem.z * (exp(-x * x * 1.2) * 9. + exp(-x * 0.55) * 0.5 + exp(-x * 0.12) * 0.06);
      } else {
        vec3 c = vec3(0.65, 0.8, 1.3);
        col += c * uRem.z * (exp(-x * x * 0.35) * 4. + exp(-x * 0.25) * 0.3);
        // A neutron star's two beams, turning.
        float a = uTime * 2.6;
        vec3 ax = normalize(vec3(cos(a) * 0.55, 0.83, sin(a) * 0.55));
        for (int s = 0; s < 2; s++) {
          vec3 A = s == 0 ? ax : -ax;
          vec2 na = nearAxis(ro, rd, A);
          float along = na.x, dl = na.y;
          if (along > 0.) col += vec3(0.5, 0.75, 1.3) * uRem.z * 0.4 * exp(-dl * dl / (uRem.y * uRem.y * 40.)) * exp(-along / (uRem.y * 60.));
        }
      }
    }
  }
  // The disc and the jets, then the cloud around them (the star's birth).
  if (uDisc.x > 0. && uDisc.y > 0.) {
    vec4 d = youngDisc(ro, rd, tHit);
    col = col * d.a + d.rgb;
    alpha = max(alpha, 1. - d.a);
  }
  if (uDisc.z > 0.) col += jets(ro, rd);
  if (uCloud.x > 0. && uCloud.y > 0.) {
    vec4 c = birthCloud(ro, rd, tHit);
    col = col * c.a + c.rgb;
    alpha = max(alpha, 1. - c.a);
  }
  // A planetary nebula.
  if (uNeb.x > 0. && uNeb.y > 0.) {
    vec4 n = planetary(ro, rd, tHit);
    col = col * n.a + n.rgb;
    alpha = max(alpha, (1. - n.a) * 0.6);
  }
  // A supernova's ejecta.
  if (uBoom.y > 0.) {
    vec4 s = supernova(ro, rd, tHit);
    col = col * s.a + s.rgb;
    alpha = max(alpha, (1. - s.a) * 0.5);
  }
  // Flashes: the star lighting, at the cloud's centre; and the supernova's whiteout, drowning the sky.
  if (uBirth.w > 0.) {
    float b = length(cross(ro, rd)), tc = -dot(ro, rd);
    float x = tc > 0. ? b / max(uCloud.x * 0.006, uR * 3.) : 1e3;
    // (A sudden ignition, brilliant and very quick, contained at the centre: the cloud lit by it, nothing more (John:
    // "It doesn't need to flash so that the screen goes completely white. It just needs to be a contained flash at the
    // center of the cloud ... It needs to actually light the cloud in a brilliant, very quick flash at the center,
    // nothing more. And then fade away").)
    float g = exp(-x * x * 0.5) * 80. + exp(-x * 0.6) * 2.5;
    col += vec3(1.0, 0.95, 0.88) * uBirth.w * g;
    alpha = max(alpha, clamp(uBirth.w * g * 0.1, 0., 1.));
  }
  if (uBoom.x > 0.) {
    float b = length(cross(ro, rd)), tc = -dot(ro, rd);
    float x = tc > 0. ? b / max(uBoom.y * 0.25 + 1., 1e-3) : 1e3;
    col += vec3(1.0, 0.98, 1.05) * uBoom.x * (exp(-x * x) * 40. + 4.);
    alpha = max(alpha, uBoom.x);
  }
  if (any(isnan(col)) || any(isinf(col))) col = vec3(0.);
  o = vec4(min(col, vec3(80.)), clamp(alpha, 0., 1.));
}
`,D=`#version 300 es
precision highp float;
in vec3 aPos;
uniform mat4 uVP;
void main() { gl_Position = uVP * vec4(aPos, 1.); }
`,O=`#version 300 es
precision highp float;
out vec4 o;
uniform vec3 uCol;
void main() { o = vec4(uCol, 1.); }
`,k=`#version 300 es
precision highp float;
in vec3 aPos;
in vec4 aCol;
uniform mat4 uVP;
uniform float uDev;
out vec3 vCol;
void main() { gl_Position = uVP * vec4(aPos, 1.); vCol = aCol.rgb; gl_PointSize = aCol.a * uDev; }
`,A=`#version 300 es
precision highp float;
in vec3 vCol;
out vec4 o;
void main() { float d = length(gl_PointCoord * 2. - 1.); o = vec4(vCol * (exp(-d * d * 9.) + 0.25 * exp(-d * d * 2.5)) * (1. - smoothstep(0.85, 1., d)), 1.); }
`;function ue(e){let t=u(e,r,le),n=u(e,D,O,[`aPos`]),i=u(e,k,A,[`aPos`,`aCol`]),a=e.createVertexArray(),o=new Float32Array(480);for(let e=0;e<160;e++){let t=e/160*Math.PI*2;o.set([Math.cos(t),0,Math.sin(t)],e*3)}let s=e.createVertexArray(),c=e.createBuffer();e.bindVertexArray(s),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,o,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let l=e.createVertexArray(),d=e.createBuffer();e.bindVertexArray(l),e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,448,e.DYNAMIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,28,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,28,12),e.bindVertexArray(null);let f=(()=>{let t=[0,1,2,3].map(e=>{let t=1+e*7919;return Float32Array.from({length:512},()=>(t=t*16807%2147483647)/2147483647)}),n=new Int32Array(64),r=new Float32Array(64);for(let e=0;e<64;e++){let t=e/8,i=t-Math.floor(t);n[e]=Math.floor(t),r[e]=i*i*(3-2*i)}let i=new Uint8Array(1048576);for(let e=0;e<64;e++)for(let a=0;a<64;a++)for(let o=0;o<64;o++){let s=n[o],c=(s+1)%8,l=n[a],u=(l+1)%8,d=n[e],f=(d+1)%8,p=r[o],m=r[a],ee=r[e];for(let n=0;n<4;n++){let r=t[n],h=(e,t,n)=>r[(n*8+t)*8+e],te=h(s,l,d)+(h(c,l,d)-h(s,l,d))*p,ne=h(s,u,d)+(h(c,u,d)-h(s,u,d))*p,re=h(s,l,f)+(h(c,l,f)-h(s,l,f))*p,g=h(s,u,f)+(h(c,u,f)-h(s,u,f))*p,_=te+(ne-te)*m,v=re+(g-re)*m;i[((e*64+a)*64+o)*4+n]=Math.round((_+(v-_)*ee)*255)}}let a=e.createTexture();e.bindTexture(e.TEXTURE_3D,a),e.texImage3D(e.TEXTURE_3D,0,e.RGBA8,64,64,64,0,e.RGBA,e.UNSIGNED_BYTE,i),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.LINEAR);for(let t of[e.TEXTURE_WRAP_S,e.TEXTURE_WRAP_T,e.TEXTURE_WRAP_R])e.texParameteri(e.TEXTURE_3D,t,e.REPEAT);return e.bindTexture(e.TEXTURE_3D,null),a})(),p=e=>[e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1],m=(e,t)=>{let n=new Float32Array(16);for(let r=0;r<4;r++)for(let i=0;i<4;i++){let a=0;for(let n=0;n<4;n++)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n};return{draw(n,r){e.useProgram(t.p),e.bindVertexArray(a),e.disable(e.DEPTH_TEST),e.activeTexture(e.TEXTURE7),e.bindTexture(e.TEXTURE_3D,f),e.uniform1i(t.u(`uNoise`),7),e.activeTexture(e.TEXTURE0),e.uniform3fv(t.u(`uEye`),n.eye),e.uniform3fv(t.u(`uRight`),n.right),e.uniform3fv(t.u(`uUp`),n.up),e.uniform3fv(t.u(`uFwd`),n.fwd),e.uniform1f(t.u(`uTan`),n.tanHalf),e.uniform1f(t.u(`uAspect`),n.aspect),e.uniform1f(t.u(`uShift`),n.shiftY),e.uniform1f(t.u(`uTime`),r.time),e.uniform1f(t.u(`uR`),r.star.R),e.uniform1f(t.u(`uT`),r.star.T),e.uniform1f(t.u(`uBright`),r.star.bright),e.uniform1f(t.u(`uCell`),r.star.cell),e.uniform1f(t.u(`uSpin`),r.star.spin),e.uniform4fv(t.u(`uCloud`),r.cloud),e.uniform4fv(t.u(`uDisc`),r.disc),e.uniform4fv(t.u(`uBirth`),r.birth),e.uniform4fv(t.u(`uNeb`),r.neb),e.uniform4fv(t.u(`uRem`),r.rem),e.uniform4fv(t.u(`uBoom`),r.boom),e.uniform4fv(t.u(`uCore`),r.core),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLES,0,3),e.disable(e.BLEND)},planets(t,r,a,o){e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.useProgram(n.p),e.bindVertexArray(s);for(let i of r)e.uniformMatrix4fv(n.u(`uVP`),!1,m(t.viewProj,p(i.r))),e.uniform3f(n.u(`uCol`),.06*i.alpha,.12*i.alpha,.16*i.alpha),e.drawArrays(e.LINE_LOOP,0,160);if(a.length){let n=new Float32Array(a.length*7);a.forEach((e,t)=>n.set([e.pos[0],e.pos[1],e.pos[2],e.col[0],e.col[1],e.col[2],e.size],t*7)),e.useProgram(i.p),e.bindVertexArray(l),e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferSubData(e.ARRAY_BUFFER,0,n),e.uniformMatrix4fv(i.u(`uVP`),!1,t.viewProj),e.uniform1f(i.u(`uDev`),o),e.drawArrays(e.POINTS,0,a.length)}e.disable(e.BLEND),e.bindVertexArray(null)}}}var de=[`A cloud`,`It lights`,`A long life`,`Swelling`,`The flash`,`Last breath`,`White dwarf`,`A heavy star`,`Supernova`,`Yours`],fe=[46,63.5,91.5,54,32,39,32.5,70,134,1],j={lights:42,look:12.5,collapse:20.1,breakout:64.4};function pe(e,t,n={}){switch(e){case 0:return t<5?{kind:`big`,line:`THE VAN RUNS THIS FIRST TOUR`,detail:`THE SUN’S WHOLE LIFE, THEN A HEAVY STAR’S. THEN IT’S YOURS`}:{line:`A CLOUD`,detail:`FALLING IN ON ITSELF, HEATING AS IT GOES`};case 1:return n.lit?{kind:`alert`,line:`IT LIGHTS`,detail:`HYDROGEN FUSING INTO HELIUM AT ITS CENTRE`}:{line:`A YOUNG STAR`,detail:`A DISC SPINNING AROUND IT, JETS FROM ITS POLES`};case 2:return t<8?{line:`A LONG, STEADY LIFE`,detail:`TEN BILLION YEARS, BARELY CHANGING`}:{kind:`go`,line:`LISTEN`,detail:`THE SUN RINGING, SPED UP INTO HEARING`};case 3:return{line:`SWELLING`,detail:`A RED GIANT. MERCURY AND VENUS GO, AND PROBABLY THE EARTH`};case 4:return{kind:`alert`,line:`THE HELIUM FLASH`,detail:`HELIUM LIGHTS: CARBON AND OXYGEN`};case 5:return{line:`ITS LAST BREATH`,detail:`ITS OUTER LAYERS, GIVEN AWAY: A PLANETARY NEBULA`};case 6:return{line:`A WHITE DWARF`,detail:`HALF THE SUN IN A BALL THE SIZE OF THE EARTH`};case 7:return t<9?{line:`A HEAVY STAR`,detail:`THIRTY SUNS: BRIGHT, BLUE, BRIEF`}:{line:`DOWN TO IRON`,detail:`SHELL AFTER SHELL, EACH FASTER THAN THE LAST`};case 8:return n.sn===`look`?{line:`ITS CORE`,detail:`IRON, HELD UP ONLY BY ITS ELECTRONS`}:n.sn===`shock`?{kind:`alert`,line:`COLLAPSE`,detail:`ITS CORE FALLS IN IN A QUARTER OF A SECOND, AND REBOUNDS`}:n.sn===`blast`?{kind:`alert`,line:`SUPERNOVA`,detail:`THE REST OF IT BLASTED OUT AT TEN THOUSAND KILOMETRES A SECOND`}:{line:`A BLACK HOLE`,detail:`ALL THAT’S LEFT OF ITS CORE`};default:return{line:`IT’S YOURS`,detail:`CHOOSE A MASS AT BIRTH. RUN ITS LIFE`}}}function me(e){return{line:`${e.M<1?e.M.toFixed(2):e.M<10?e.M.toFixed(1):Math.round(e.M)} SUNS AT BIRTH`,detail:e.phase.toUpperCase()}}var he=1/g,M=4600,ge=12189.5,N=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},_e=(e,t,n)=>e<0||e>n*10?0:Math.min(1,e/t)*Math.exp(-Math.max(0,e-t)/n);function ve(e,t){if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[r,i]=t[n-1],[a,o]=t[n];return i*(o/i)**((e-r)/(a-r))}let[n,r]=t[t.length-2],[i,a]=t[t.length-1];return a*(a/r)**((e-i)/(i-n))}var ye=(()=>{let e=1.2,t=.18,n=.9,r=[-Math.cos(t)*Math.sin(e),-Math.sin(t),-Math.cos(t)*Math.cos(e)],i=c(m(r,[0,-1,0])),a=Math.cos(n),o=Math.sin(n),s=1-a,l=[a+i[0]*i[0]*s,i[1]*i[0]*s+i[2]*o,i[2]*i[0]*s-i[1]*o,i[0]*i[1]*s-i[2]*o,a+i[1]*i[1]*s,i[2]*i[1]*s+i[0]*o,i[0]*i[2]*s+i[1]*o,i[1]*i[2]*s-i[0]*o,a+i[2]*i[2]*s],u=Array(9).fill(0);for(let e=0;e<3;e++)for(let t=0;t<3;t++){let n=0;for(let r=0;r<3;r++)n+=h[r*3+t]*l[e*3+r];u[e*3+t]=n}return u})();function P(){let r=s(`sim-canvas`),c=new URLSearchParams(location.search).has(`large`)||Math.max(screen.width,screen.height)*Math.min(window.devicePixelRatio||1,2)>=1800,u={mode:`launch`,playing:!1,at:0,ch:0,yaw:.6,pitch:.22,clock:0,run:!1},m=0,h=null,w=null,T=null,E=null,le=0,D={M:1,sun:!0},O=xe(),k=0,A=0,P=[],be=-1;function xe(){let e=v(1),t=e=>M+1e3*e,n=e.stages.filter(e=>e.phase===`cloud`||e.phase===`protostar`),r=(e,t,n)=>({phase:e,t0:t,dt:n-t});return{...e,mRem:.5405,tms:t(5.42),end:t(8),stages:[...n,r(`main`,0,t(5.42)),r(`gap`,t(5.42),t(7)),r(`giant`,t(7),t(7.59)),r(`helium`,t(7.59),t(7.7)),r(`agb`,t(7.7),t(7.72)),r(`nebula`,t(7.72),t(7.7203)),r(`white dwarf`,t(7.7203),t(12))]}}function Se(e){let t=y(D.M,e,O);if(!D.sun||t.phase===`cloud`||t.phase===`protostar`)return t;if(e<M){let n=b(1,M),r=b(1,Math.max(0,e)),i=r.L/n.L,a=r.R/n.R;return{...t,L:i,R:a,T:5772*(i/(a*a))**.25,mass:1}}let n=ne((e-M)/1e3),r=n.L,i=t.phase===`white dwarf`?.013:n.R,a=t.phase===`white dwarf`?Math.min(n.L,t.L*2):r;return{...t,L:a,R:i,T:5772*(a/(i*i))**.25,mass:n.M}}let Ce={cloud:.06,protostar:.06,main:.28,"red dwarf":.1,gap:.07,giant:.14,helium:.08,agb:.09,nebula:.07,"white dwarf":.06,supergiant:.2,supernova:.08,"neutron star":.08,"black hole":.08};function we(){let e=O.stages.reduce((e,t)=>e+(Ce[t.phase]??.05),0),t=0;return O.stages.map(n=>{let r=(Ce[n.phase]??.05)/e,i={...n,u0:t,du:r};return t+=r,i})}let Te=(e,t)=>e<.25?e/C*S:S*(t/S)**((e-C)/(1-C)),F=(e,t)=>e<2.737850787132101e-9?e/S*C:C+(1-C)*Math.log(e/S)/Math.log(t/S),Ee=e=>{let t=we(),n=t.find(t=>e<=t.u0+t.du)??t[t.length-1],r=Math.min(1,Math.max(0,(e-n.u0)/n.du));return n.t0+(n.phase===`supernova`?Te(r,n.dt):r*n.dt)},De=e=>{let t=we(),n=t.find(t=>e<=t.t0+t.dt)??t[t.length-1],r=n.phase===`supernova`?F(Math.max(0,e-n.t0),n.dt):(e-n.t0)/n.dt;return n.u0+Math.min(1,Math.max(0,r))*n.du};function I(e,t){D.M=e,D.sun=t,O=t?xe():v(e),P=[],be=-1,Me.classList.toggle(`is-on`,t),Je.set(U(e))}let L=null,Oe=null,R=null,z=!1,ke=``;function Ae(e,t){if(!L)return null;let n=L.sampleRate,r=n*6,i=520/3090*(3090/Math.max(e,1))**.65,a=new Float32Array(r),o=[];for(let n=-6;n<=6;n++)for(let[r,a,s]of[[0,0,1],[1,.5,1.3],[2,-.12,.7]]){let r=e+(n+a)*t;r<=0||o.push({f:r*i,a:s*Math.exp(-(((r-e)/(.25*e))**2))})}let s=1,c=()=>(s=s*16807%2147483647,s/2147483647);for(let e of o){let t=c()*6.28,i=0,o=Math.exp(-1/(n*.35));for(let s=0;s<r;s++)c()<6/n&&(i+=(c()-.3)*e.a),i*=o,t+=2*Math.PI*e.f/n,a[s]+=i*Math.sin(t)}let l=1e-9;for(let e=0;e<r;e++)l=Math.max(l,Math.abs(a[e]));let u=Math.round(n*.25);for(let e=0;e<r;e++){let t=Math.min(1,e/u,(r-e)/u);a[e]=a[e]/l*.8*t}let d=L.createBuffer(1,r,n);return d.copyToChannel(a,0),d}function je(e,t,n){if(!L||!Oe)return;let r=n?`${Math.round(Math.log(e)*6)}|${Math.round(Math.log(t)*6)}`:``;if(r===ke)return;if(ke=r,R){try{R.stop()}catch{}R=null}if(!n)return;let i=Ae(e,t);i&&(L.resume(),R=L.createBufferSource(),R.buffer=i,R.loop=!0,R.connect(Oe),R.start())}let Me=t(`The Sun (S)`,e(`<circle cx="8" cy="8" r="3.2" fill="currentColor"/><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`),()=>{K(),I(1,!0),k=De(M)}),Ne=t(`Listen to it ring (L)`,``,()=>{z=!z,Pe()}),Pe=()=>{Ne.innerHTML=e(z?`<path d="M2.5 6v4h2.6L8.6 13V3L5.1 6z" fill="currentColor"/><path d="M10.6 5.4a3.6 3.6 0 0 1 0 5.2M12.3 3.7a6 6 0 0 1 0 8.6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`:`<path d="M2.5 6v4h2.6L8.6 13V3L5.1 6z" fill="currentColor"/><path d="M10.5 6l3.5 4M14 6l-3.5 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`),Ne.classList.toggle(`is-on`,z),Ne.title=z?`Listening (L)`:`Listen to it ring (L)`,Ne.setAttribute(`aria-label`,Ne.title)};Pe();let B=!1,V=0,Fe=i(s(`sim`).dataset.narration??``,{time:()=>u.at,active:()=>u.mode===`guided`||B,playing:()=>u.playing,ended:()=>B}),Ie=[{id:`overview`,name:`Overview`},{id:`inside`,name:`Inside`},{id:`life`,name:`Lifetime`}],Le=n(JSON.parse(s(`sim`).dataset.cues||`null`)),Re=e=>e===null?Ie[0].id:Ie.find(t=>t.name.toLowerCase()===e.toLowerCase())?.id??null;for(let e of Le.views)Re(e)||console.warn(`narration: the cue sheet shows the view "${e}", which this simulator doesn't have`);let ze=!1,Be=!1;function Ve(){if(u.mode!==`guided`&&!B||Be)return;let e=Re(Le.viewAt(u.at));e&&e!==H.view&&H.setView(e)}function He(e){let t=/^ring\s+([0-9.]+)$/.exec(e);if(!t){console.warn(`narration: the cue sheet plays "${e}", which this simulator doesn't know`);return}z=!0,V=u.at+Number(t[1]),Pe()}let Ue=[],We=e=>{u.mode===`guided`&&Ue.length<400&&Ue.push({at:Math.round(u.at*10)/10,ch:u.ch,e})},Ge=document.createElement(`a`);Ge.className=`hp-btn st-door`,Ge.href=`/science/black-holes/simulator/?from=/science/stellar-evolution/`,Ge.textContent=`Into the black hole →`,Ge.hidden=!0;let H=a({playing:()=>u.mode===`free`?u.run:u.playing,toggle:()=>{u.mode!==`launch`&&(u.mode===`free`?(u.run=!u.run,u.playing=!0):u.playing=!u.playing,H.setPlay(),H.raiseLcd(2e3))},again:()=>{u.mode!==`launch`&&ft()},againTitle:`Run the guided tour again (R)`,views:Ie,onView:(e,t)=>{ze=t,t&&u.mode!==`launch`&&(Be=!0),u.mode!==`launch`&&jt()},keys:[Fe.button,Me,Ne],busy:()=>!!q||Je.dragging||Ye.dragging,onKey:(e,t)=>u.mode===`launch`?!1:e===`s`?(K(),I(1,!0),k=De(M),!0):e===`l`?(z=!z,V=0,Pe(),!0):e===`n`?(Fe.toggle(),!0):t.key===`ArrowUp`||t.key===`+`||t.key===`=`?(t.preventDefault(),K(),k=Math.min(1,k+.005),!0):t.key===`ArrowDown`||t.key===`-`||t.key===`_`?(t.preventDefault(),K(),k=Math.max(0,k-.005),!0):t.key===`ArrowLeft`?(u.yaw-=.06,!0):t.key===`ArrowRight`&&(u.yaw+=.06,!0)});s(`sim-ctl`).append(Ge);let Ke=e=>e<0?`${Math.round(-e*1e3).toLocaleString(`en-GB`)} thousand yr to go`:e<1?`${Math.round(e*1e3).toLocaleString(`en-GB`)} thousand yr`:e<1e3?`${Number(e.toPrecision(3))} million yr`:`${Number((e/1e3).toPrecision(3))} billion yr`,U=e=>Math.log(e/.1)/Math.log(500),qe=e=>Number((.1*500**e).toPrecision(2)),Je=l(s(`st-lv-mass`),{label:`Mass`,value:U(1),step:.01,ticks:[{at:U(.1),text:`0.1`},{at:U(1),text:`1`},{at:U(8),text:`8`,minor:!0},{at:U(50),text:`50`}],words:e=>`${qe(e)}\n${qe(e)===1?`Sun`:`Suns`}`,onChange:e=>{K(),I(qe(e),Math.abs(qe(e)-1)<1e-9&&D.sun),k=De(0)+.02}}),Ye=l(s(`st-lv-time`),{label:`Age`,value:0,step:.005,ticks:[{at:0,text:`birth`},{at:1,text:`end`}],words:e=>{let t=Ee(e);if(t<0)return`unborn`;let n=Ke(t),r=n.indexOf(` `);return`${n.slice(0,r)}\n${n.slice(r+1)}`},onChange:e=>{K(),k=e,u.run=!1}}),Xe=o(s(`sim-tl`),de,e=>{u.mode!==`launch`&&(u.mode===`free`&&ft(),pt(e))}),Ze=e=>fe.slice(0,e).reduce((e,t)=>e+t,0),Qe=fe.slice(0,-1).reduce((e,t)=>e+t,0),$e=s(`sim-inst`).querySelector(`.hp-body`),et=[`age`,`birth`,`phase`,`surface`,`bright`,`size`,`mass`];$e.innerHTML=et.map(e=>`<div class="hp-row" data-row="${e}"><span class="hp-k"></span><span class="hp-v"><b></b><small></small>${e===`surface`?`<i class="st-swatch" aria-hidden="true"></i>`:``}</span></div>`).join(``);let tt=$e.querySelector(`.st-swatch`),nt=Object.fromEntries(et.map(e=>{let t=$e.querySelector(`[data-row="${e}"]`);return[e,{k:t.querySelector(`.hp-k`),v:t.querySelector(`b`),sm:t.querySelector(`small`)}]})),rt=(e,t)=>{e.textContent!==t&&(e.textContent=t)},W=(e,t,n,r=``)=>{rt(nt[e].k,t),rt(nt[e].v,n),rt(nt[e].sm,r)},it=oe(s(`sim-st-canvas`)),at=ie(s(`st-made-canvas`)),ot=x(s(`st-inside-canvas`)),st=ae(s(`st-life-canvas`)),ct=e=>s(e).querySelector(`.hp-body`),lt=te(ct(`st-inside-read`),{fusing:`Fusing`,centre:`Centre temperature`,held:`Held up by`}),ut=te(ct(`st-life-read`),{stage:`This stage lasts`,left:`Time remaining`,whole:`Time as a star`,ms:`Burning hydrogen`}),dt={cloud:`A cloud, collapsing`,protostar:`A young star, still growing`,main:`Burning hydrogen`,"red dwarf":`Burning hydrogen, slowly`,gap:`Swelling, its centre spent`,giant:`A red giant`,helium:`Burning helium`,agb:`A giant again`,supergiant:`A supergiant`,nebula:`A planetary nebula`,supernova:`Exploding`,"white dwarf":`A white dwarf`,"neutron star":`A neutron star`,"black hole":`A black hole`};function ft(){u.mode=`guided`,u.playing=!0,u.at=0,u.ch=-1,u.run=!1,B=!1,V=0,Ue.length=0,Be=ze&&H.view!==Ie[0].id,u.yaw=.6,u.pitch=.22,H.setPlay(),pt(0)}let G=(e,t=0)=>{let n=we().find(t=>t.phase===e);return n?n.u0+n.du*t:0};function pt(e){u.at=Ze(e)+.001,u.ch=e,H.raiseLcd(),e<=6&&!(D.sun&&D.M===1)&&I(1,!0),e>=7&&e<=8&&D.M!==30&&I(30,!1),u.mode===`guided`&&(z=!1,V=0),Pe(),We(`chapter ${e}`),e===de.length-1?(ht(),B=!0):(A=k=mt(e,0),P=[],be=-1)}function mt(e,t){let n=t*t*(3-2*t),r=[[G(`cloud`,0),G(`protostar`,.2)],[G(`protostar`,.2),G(`main`,.05)],[G(`main`,.05),De(M)],[G(`gap`,.6),G(`giant`,.999)],[G(`giant`,.999),G(`helium`,.6)],[G(`agb`,.2),G(`nebula`,.95)],[G(`white dwarf`,0),G(`white dwarf`,.9)],[G(`main`,.05),G(`supergiant`,.995)],[G(`supergiant`,.995),G(`black hole`,.8)]],i=t=>Math.min(.999,t/(fe[e]-1.5));if(e===1){let e=[[0,G(`protostar`,.2)],[i(j.lights),G(`main`,0)+1e-6],[1,G(`main`,.05)]],n=t<=e[1][0]?0:1,r=Math.min(1,Math.max(0,(t-e[n][0])/(e[n+1][0]-e[n][0])));return e[n][1]+(e[n+1][1]-e[n][1])*(n===0?r*r*(3-2*r):r)}if(e===8){let e=i(j.collapse),n=[[0,G(`supergiant`,.995)],[i(j.look),G(`supergiant`,.9962)],[e-.004,G(`supergiant`,.9999)],[e,G(`supernova`,5e-4)],[i(j.breakout),G(`supernova`,C+.002)],[1,G(`black hole`,.8)]],r=0;for(;r<n.length-2&&t>n[r+1][0];)r++;let a=Math.min(1,Math.max(0,(t-n[r][0])/(n[r+1][0]-n[r][0]))),o=r===3?a:r===4?1-(1-a)**2.5:a*a*(3-2*a);return n[r][1]+(n[r+1][1]-n[r][1])*o}let[a,o]=r[e]??[k,k];return a+(o-a)*n}function ht(){u.mode=`free`,u.ch=-1,u.run=!1,I(1,!0),k=De(M),Je.lock(!1),Ye.lock(!1)}function K(){u.mode===`guided`&&(u.mode=`free`,u.ch=-1,Je.lock(!1),Ye.lock(!1)),B=!1,!u.playing&&u.mode!==`launch`&&(u.playing=!0,H.setPlay())}let q=null,gt=0,_t=1,vt=e=>Math.max(-1.3,Math.min(1.3,e));r.addEventListener(`pointerdown`,e=>{q={x:e.clientX,y:e.clientY},r.setPointerCapture(e.pointerId)}),r.addEventListener(`pointermove`,e=>{q&&(u.yaw-=(e.clientX-q.x)*.005,u.pitch=vt(u.pitch+(e.clientY-q.y)*.004),q={x:e.clientX,y:e.clientY},gt=0)}),r.addEventListener(`pointerup`,()=>{q=null}),r.addEventListener(`wheel`,e=>{e.preventDefault(),_t=Math.max(.4,Math.min(4,_t*Math.exp(e.deltaY*.001)))},{passive:!1});let J=null;H.ballEl.addEventListener(`pointerdown`,e=>{J={x:e.clientX,y:e.clientY},H.ballEl.setPointerCapture(e.pointerId)}),H.ballEl.addEventListener(`pointermove`,e=>{J&&(u.yaw-=(e.clientX-J.x)*.02,u.pitch=vt(u.pitch+(e.clientY-J.y)*.015),J={x:e.clientX,y:e.clientY},gt=0)}),H.ballEl.addEventListener(`pointerup`,()=>{J=null});let yt=performance.now(),bt=0,Y={dist:6,t:0},X={noRem:!1,noNeb:!1,noCloud:!1,noDisc:!1,noBoom:!1},Z=Se(0),xt=e=>{if(le=requestAnimationFrame(xt),!h||!w||!T)return;let t=Math.min(.1,(e-yt)/1e3);if(yt=e,u.playing&&u.mode!==`launch`){if(u.clock+=t,u.mode===`guided`){let e=u.at;u.at+=t;let n=0;for(;n<fe.length-1&&u.at>=Ze(n+1);)n++;n!==u.ch&&pt(n),u.mode===`guided`&&(k=mt(u.ch,Math.min(1,(u.at-Ze(u.ch))/(fe[u.ch]-1.5))));for(let t of Le.playsBetween(e,u.at))He(t.what);V&&u.at>=V&&(z=!1,V=0,Pe())}else u.run&&(k=Math.min(1,k+t*.012),k>=1&&(u.run=!1));gt+=t,!q&&!J&&gt>2&&(u.yaw+=t*.04,u.mode===`guided`&&(u.pitch+=((u.ch===1?.42:.22)-u.pitch)*(1-Math.exp(-t/2.5))))}A+=(k-A)*(1-Math.exp(-t/(u.mode===`guided`?.05:.3)));let n=Ee(A);Z=Se(n),Z.L>0&&(be<0||Math.abs(A-be)>.002)&&(P.length&&A<be&&(P=[]),P.push({T:Z.T,L:Z.L}),be=A,P.length>600&&P.shift());let i=Z.phase,a=Z.f,o=O.M>=8,c=Z.R,l=[0,0,0,0],f=[0,0,0,0],p=[0,0,0,0],ee=[0,0,0,0],te=[0,0,0,0],ne=[0,0,0,0],g=Math.max(c,1),_=.8,v=e/1e3,y=G(`main`,0),ie=G(`cloud`,0),b=Math.min(1,Math.max(0,(A-ie)/(y-ie)));Q<y&&A>=y&&A-Q<.02&&($=v,We(`it lights`));let x=A<y?0:Math.min(1,Math.max((A-y)/(G(`main`,.15)-y),v-$>0&&v-$<1e6?(v-$)/9:1)),S=_e(v-$,.04,.2)+.2*_e(v-$,.05,.9),ae=i===`cloud`||i===`protostar`||i===`main`&&x<1;if(ae){let e=St()*900,n=1-(1-b)**1.6,r=N(.45,.8,b),a=v-$,o=x<=0?0:a>0&&a<10?Math.max(.001,a*3):3;p=[e,(1-.25*N(.5,.95,b))*(1-N(.35,1,x)),.3*N(.55,.9,b)+.65*N(.25,1,x),o],u.playing&&(Et+=t*(.15+.6*n)),b<.01&&(Et=0),ee=[e*.12*r,r*(1-N(.05,.4,x)),N(.55,.75,b)*(1-N(0,.25,x)),Et],te=[n,N(.1,.9,b)*(1-N(0,.3,x)),.12*N(.6,1,b)+.88*N(0,.12,x),S],c=i===`cloud`?0:Z.R;let s=e*.6,l=e*.12,d=e*.22;g=b<.5?s:b<.9?s*(l/s)**N(.5,.86,b):l*(d/l)**N(.9,1,b),x>0&&(g=x<.3?d:Math.max(c,1)),_=x>.3?2.6:1}if(i===`nebula`){let e=12e3*(.2+a);l=[e,.22,1,a],c=0,f=[1,Y.dist*.008,3,Math.max(Z.T,3e3)],g=e*1.7}if(i===`white dwarf`){let e=12e3*(1.2+2*a);l=[e,Math.max(0,1-a*3)*.22,1,1],c=0,f=[1,Y.dist*.008,Math.max(.6,2.5-a*2),Math.max(Z.T,3e3)],g=Math.max(400,e*1.7*Math.max(.05,1-a*3))}let oe=o?G(`supernova`,0):2,ce=o?G(`supernova`,C):2;o&&Q<oe&&A>=oe&&A-Q<.02&&(wt=v,We(`its core falls in`)),o&&Q<ce&&A>=ce&&A-Q<.02&&(Ct=v,At(`st-boom`),We(`the shock breaks out`));let ue=_e(v-Ct,.06,.55),de=[0,0,0,0],j=0;if(o&&i===`supergiant`){let e=N(.996,.9995,a);e>0&&(de=[c*.07,0,0,e])}if(o&&(i===`supernova`||i===`neutron star`||i===`black hole`)){let e=Math.max(0,(A-oe)/(G(`supernova`,1)-oe)),t=kt();if(e<.25){let n=v-wt,r=n>=0&&n<1e6,i=r?Math.min(1,n/.3):1;j=r?_e(n-.3,.03,.25):0,c=t,de=[t*.07*(1-i)**2+t*.004*i,j,i>=1?e/C*t:0,1],g=t}else{let n=(e-C)/(1-C),r=t*(1+80*n**.9);ne=[ue,r,Math.min(1,n/1.8),0],c=0,g=t*ve(n,[[0,1],[.12,1.6],[.5,17.5],[1.8,50]]),_=.35;let i=N(.15,.5,n);O.remnant===`black hole`?n>.12&&(f=[3,r*.02,i,0]):f=[2,r*.004,2.5*i,0]}}let pe=D.sun&&!ae&&(i===`main`||i===`gap`||i===`giant`||i===`helium`||i===`agb`);pe&&(u.ch===3||u.ch===4||u.ch===5||u.mode===`free`&&n>9600)&&(g=Math.max(g,2.2*he)),i===`main`&&v-$<14&&(_=Math.max(_,2.6));let me=g*4.2*_t;Y.dist=Math.exp(Math.log(Y.dist)+(Math.log(me)-Math.log(Y.dist))*(1-Math.exp(-t/_))),Tt+=((ae?.55:1)-Tt)*(1-Math.exp(-t/1.5)),Q=A,Y.t=n;let M=r.clientWidth/Math.max(1,r.clientHeight);{let e=s(`sim-lcd`).getBoundingClientRect(),n=r.getBoundingClientRect(),i=H.lcdUp()?Math.max(0,n.bottom-e.top)/Math.max(1,n.height):.04;m+=(i-m)*(1-Math.exp(-t/.35))}let xe=Y.dist*(1+m*1.1)*Math.max(1,(1.5/M)**.8),Ce=.03*_e(v-Ct,.02,.8),we=Ce*(Math.sin(v*61)*.6+Math.sin(v*37.3+1)*.4),Te=Ce*(Math.sin(v*53.7+2)*.6+Math.sin(v*29.1)*.4),F=d({centre:[0,0,0],yaw:u.yaw+we,pitch:u.pitch+Te,dist:xe,fovY:.6,aspect:M,near:xe*1e-4,far:xe*1e4,shiftY:m}),{w:De,h:I}=T.begin([0,0,0]),L=I/Math.max(1,r.clientHeight);E&&E.draw(F,{aspect:M,shift:m,w:De,h:I,dev:L},{gain:.045*Tt,starGain:.6*(.5+.5*Tt),limit:8,rot:ye});let Oe=.95*(Math.max(Z.T,2e3)/5772)**.3,R=c>0?Math.max(4,70/Math.max(c,.1)**.45):10;if(X.noCloud&&(p=[0,0,0,0]),X.noBoom&&(ne=[0,0,0,0]),X.noDisc&&(ee=[0,0,0,0]),X.noRem&&(f=[0,0,0,0]),X.noNeb&&(l=[0,0,0,0]),w.draw({eye:F.eye,right:F.right,up:F.up,fwd:F.fwd,tanHalf:F.tanHalf,aspect:M,shiftY:m,viewProj:F.viewProj},{star:{R:c,T:Z.T||6e3,bright:Oe,cell:R,spin:u.clock*.03},cloud:p,disc:ee,birth:te,neb:l,rem:f,boom:ne,core:de,time:u.clock}),pe&&Y.dist>2*he){let e=[],t=[],r=Z.mass;for(let i of[re.mercury,re.venus,re.earth,re.mars]){let a=i.a/r*he,o=c>a*.98||i.name===`Earth`&&n>=ge;if(e.push({r:a,alpha:o?.25:1}),o)continue;let s=u.clock*(.25/i.a**1.5)+i.a*5,l=i.name===`Earth`?[.45,.75,1.4]:i.name===`Mars`?[1.2,.5,.3]:[.9,.85,.75];t.push({pos:[Math.cos(s)*a,0,Math.sin(s)*a],col:l,size:i.name===`Earth`?6:4.5})}w.planets({eye:F.eye,right:F.right,up:F.up,fwd:F.fwd,tanHalf:F.tanHalf,aspect:M,shiftY:m,viewProj:F.viewProj},e,t,L)}T.finish(1,.7+.8*Math.min(1,S)+.8*j+1.5*ue),H.ball.draw({right:F.right,up:F.up,fwd:F.fwd,hole:F.fwd,tanY:F.tanHalf,tanX:F.tanHalf*M},!!J,`star`);let ke=c>0&&i!==`cloud`,Ae=se(Z.mass,Math.max(Z.R,.01),Math.max(Z.T,2e3));je(Ae.numax,Ae.dnu,z&&ke),e-bt>100&&(jt(),bt=e),Ve(),Fe.sync()},St=()=>Math.max(.3,v(D.M).M**.8),Q=0,$=-1e9,Ct=-1e9,wt=-1e9,Tt=.55,Et=0,Dt=null,Ot=1e3,kt=()=>{if(Dt!==O){let e=O.stages.find(e=>e.phase===`supernova`);Dt=O,Ot=e?Math.max(50,y(O.M,e.t0-1e-6,O).R):1e3}return Ot};function At(e){let t=s(`sim-lcd`);t.classList.remove(`st-boom`),t.offsetWidth,t.classList.add(e),setTimeout(()=>t.classList.remove(e),1600)}function jt(){if(u.mode===`launch`)return;let e=Y.t,t=e<0?Z.phase===`cloud`?`not yet born`:`newborn`:Ke(e),n=t.split(` `);W(`age`,`Age`,e<0?t[0].toUpperCase()+t.slice(1):n[0],e<0?``:n.slice(1).join(` `)),W(`birth`,`Mass at birth`,O.M<1?O.M.toFixed(2):O.M<10?String(Number(O.M.toFixed(1))):String(Math.round(O.M)),O.M===1?`Sun`:`Suns`);let r=Z.phase===`supernova`&&e-Z.stage.t0<2.737850787132101e-9;W(`phase`,`Now`,r?`Its core fallen in`:dt[Z.phase]??Z.phase);let i=Z.phase===`supernova`&&!r?0:Z.T;if(W(`surface`,`Surface`,i>0?`${(Math.round(i/10)*10>=1e4?Math.round(i/100)*100:Math.round(i/10)*10).toLocaleString(`en-GB`)}`:`—`,i>0?`K`:``),tt.hidden=!(i>0),i>0){let e=_(i);tt.style.background!==e&&(tt.style.background=e),tt.title=Ft(i)}W(`bright`,`Brightness`,Z.L>0?Mt(Z.L):`—`,Z.L>0?`Suns`:``);let a=Z.R,o=a*g*2,c=o/63241;W(`size`,`Width`,c>=.05?String(Number(c.toPrecision(2))):o>=1e3?Math.round(o).toLocaleString(`en-GB`):o>=.6?o.toFixed(1):a>=.5?Mt(a):a>.001?Math.round(a*109.1).toLocaleString(`en-GB`):Math.round(a*696e3*2).toLocaleString(`en-GB`),c>=.05?c===1?`light-year`:`light-years`:o>=.6?`AU`:a>=.5?Mt(a)===`1`?`Sun`:`Suns`:a>.001?Math.round(a*109.1)===1?`Earth`:`Earths`:`km`),W(`mass`,`Mass now`,Z.mass.toFixed(2),`Suns`),it.draw({path:P,T:Z.T,L:Z.L,label:`The colour–brightness chart: the star at ${Math.round(Z.T)} K and ${Mt(Z.L)} times the Sun's brightness`}),at.draw(Z.made,O.M>=8);let l=s(`sim-view`).dataset.view??`overview`;if(l===`inside`){let e=ce(Z.phase,Z.f,O.M,Z.R,Z.made);ot.draw({...e,T:Z.T,time:u.clock}),lt.set(`fusing`,e.fusing[0],e.fusing[1]),lt.set(`centre`,e.Tc>0?`${Nt(e.Tc)} K`:`—`,``),lt.set(`held`,e.heldBy[0],e.heldBy[1])}if(l===`life`){let t=we();st.draw({stages:t,t:e,u:A});let n=t.find(e=>A<=e.u0+e.du)??t[t.length-1],r=n===t[t.length-1]&&n.phase!==`red dwarf`,i=t[t.length-1],a=i.phase===`red dwarf`?i.t0+i.dt:i.t0,o=t.find(e=>e.phase===`main`),s=e=>{let t=e.indexOf(` `);return t<0?[e,``]:[e.slice(0,t),e.slice(t+1)]};ut.set(`stage`,...r?[`for ever`,``]:s(Pt(n.dt))),ut.set(`left`,...r?[`for ever`,``]:s(Pt(Math.max(0,n.t0+n.dt-e)))),ut.set(`whole`,...s(Pt(a-t[0].t0))),ut.set(`ms`,o?`${Math.round(100*o.dt/(a-t[0].t0))}%`:`—`,``)}Ge.hidden=Z.phase!==`black hole`,Je.lock(u.mode===`guided`),Ye.lock(u.mode===`guided`),s(`st-levers`).classList.toggle(`is-auto`,u.mode===`guided`),rt(s(`st-lv-head`),u.mode===`guided`?`Auto settings`:`Settings`),Je.set(U(O.M)),Ye.set(k),Ye.actual(A);let d=u.mode===`guided`?u.at-Ze(u.ch):0;H.say(u.mode===`guided`?pe(u.ch,d,{lit:A>=G(`main`,0),sn:A<G(`supernova`,0)?`look`:A<G(`supernova`,.25)?`shock`:Z.phase===`supernova`?`blast`:`left`}):me({phase:dt[Z.phase]??Z.phase,M:O.M})),Xe.set(u.mode===`guided`?u.ch:-1,u.mode===`guided`?u.at/Qe:1),H.setPlay()}let Mt=e=>e>=1e9?`${Number((e/1e9).toPrecision(2))} billion`:e>=1e6?`${Number((e/1e6).toPrecision(2))} million`:e>=1e3?Math.round(e).toLocaleString(`en-GB`):e>=10?String(Math.round(e)):e>=.01?String(Number(e.toPrecision(2))):e.toExponential(1).replace(`e-`,` × 10⁻`).replace(/⁻(\d+)/,(e,t)=>`⁻`+String(t).split(``).map(e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[+e]).join(``)),Nt=e=>e>=1e9?`${Number((e/1e9).toPrecision(2))} billion`:e>=1e6?`${Number((e/1e6).toPrecision(2))} million`:e>=1e4?Math.round(e/1e3).toLocaleString(`en-GB`)+`,000`:String(Math.round(e)),Pt=e=>e>=1e3?`${Number((e/1e3).toPrecision(2))} billion yr`:e>=1?`${Number(e.toPrecision(2))} million yr`:e>=.001?`${Math.round(e*1e3).toLocaleString(`en-GB`)} thousand yr`:`${Math.max(1,Math.round(e*1e6)).toLocaleString(`en-GB`)} yr`,Ft=e=>e>2e4?`blue`:e>9e3?`blue-white`:e>6500?`white`:e>5300?`yellow-white`:e>4300?`orange`:`red`;H.launch([{label:`Stellar tracks`,done:`HURLEY, POLS AND TOUT`,min:420,run:()=>{if(h=f(r),!h)throw Error(`no WebGL 2 with float pictures`);w=ue(h),T=p(h,r,{maxScale:1,knee:.9});try{E=ee(h,{large:c})}catch{E=null}le=requestAnimationFrame(xt)}},{label:`The Sun`,done:`ITS OWN TRACK`,min:360},{label:`After the giant branch`,done:`SIMPLIFIED`,amber:!0,min:400},{label:`Nebulae’s colours`,done:`OXYGEN AND HYDROGEN`,min:360},{label:`Time`,done:`A LEVER`,min:330},{label:`Ringing`,done:`SPED UP INTO HEARING`,amber:!0,min:380},{label:`Doughnuts`,done:`FRIED`,min:340},{label:`Sunglasses`,done:`ON`,min:330}],()=>{ft()}),s(`sim-launch-btn`).addEventListener(`click`,()=>{if(!L)try{L=new AudioContext,Oe=L.createGain(),Oe.gain.value=.35,Oe.connect(L.destination),L.resume()}catch{L=null}}),new URLSearchParams(location.search).has(`debug`)&&(window.__st={chapter:e=>{u.mode!==`guided`&&ft(),pt(e)},seek:e=>{u.mode!==`guided`&&ft();let t=0;for(;t<fe.length-1&&e>=Ze(t+1);)t++;pt(t),u.at=e},get state(){return{mode:u.mode,ch:u.ch,M:O.M,sun:D.sun,u:A,t:Y.t,phase:Z.phase,L:Z.L,R:Z.R,T:Z.T,fps:T?.fps,scale:T?.scale}},star:(e,t=!1)=>{K(),I(e,t)},at:(e,t=.5)=>{K(),k=A=G(e,t)},view:u,dbg:X,get dist(){return Y.dist},events:Ue,get narration(){let e=Fe.audio;return e?{at:e.currentTime,run:u.at,paused:e.paused,duration:e.duration,view:H.view,own:Be,ended:B}:null},pause:()=>{u.playing=!1,H.setPlay()}}),window.addEventListener(`pagehide`,()=>{cancelAnimationFrame(le),T?.destroy(),L?.close()})}P();