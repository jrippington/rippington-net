import{_ as e,g as t,h as n,m as r,p as i,v as a}from"./narration.Crm9S85h.js";import{i as o}from"./post.lhgbitLo.js";var s=[1,0,0,0,0,1,0,-1,0],c=`#version 300 es
precision highp float;
${r}
in vec2 vUv;
out vec4 o;
uniform vec3 uRight, uUp, uFwd;
uniform float uTan, uAspect, uShift, uGain, uFoot;
uniform mat3 uRot;
uniform int uKey;
void main() {
  vec2 ndc = vUv * 2. - 1.;
  vec3 d = normalize(uFwd + uRight * ndc.x * uTan * uAspect + uUp * (ndc.y - uShift) * uTan);
  vec3 g = normalize(uRot * d);
  if (uKey == 1) { o = skyKey(g, uFoot); return; }
  o = vec4(skyTile(g, uFoot) * uGain, 1.);
}
`,l=`#version 300 es
precision highp float;
in vec3 aDir;   // galactic
in float aMag;  // (V + 2) × 1000
in float aTemp; // (log10 T − 3.3) / 1.4
uniform mat4 uVP;
uniform mat3 uRotT; // galactic to world
uniform float uGain, uDev, uLimit;
out vec3 vCol;
out float vS;
out float vR;
vec3 tint(float T) {
  // (A blackbody's colour, after Tanner Helland's fit, linear, a touch strengthened.)
  float t = T / 100.;
  vec3 c;
  c.r = t <= 66. ? 1. : clamp(1.2929 * pow(t - 60., -0.1332), 0., 1.);
  c.g = t <= 66. ? clamp(0.3901 * log(t) - 0.6318, 0., 1.) : clamp(1.1299 * pow(t - 60., -0.0755), 0., 1.);
  c.b = t >= 66. ? 1. : t <= 19. ? 0. : clamp(0.5432 * log(t - 10.) - 1.1963, 0., 1.);
  c = pow(c, vec3(2.2));
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  vec3 r = pow(c / max(l, 1e-4), vec3(1.25));
  return r / max(dot(r, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
}
void main() {
  float V = aMag / 1000. - 2.;
  gl_PointSize = 0.;
  gl_Position = vec4(2., 2., 2., 1.);
  vCol = vec3(0.);
  vS = 1.;
  vR = 1.;
  if (V > uLimit) return;
  vec4 c = uVP * vec4(uRotT * aDir, 0.);
  if (c.w <= 0.) return;
  float f = pow(10., -0.4 * V) * uGain;
  float big = log(1. + f / 4.);
  vS = (0.7 + 0.35 * big) * uDev;
  vR = min((2.2 + 2.6 * big) * uDev, 32.);
  gl_PointSize = 2. * vR;
  vCol = tint(pow(10., 3.3 + aTemp * 1.4)) * f;
  gl_Position = vec4(c.xy, 0., c.w); // (a direction, at infinity: kept inside the far limit)
}
`,u=`#version 300 es
precision highp float;
in vec3 vCol;
in float vS;
in float vR;
out vec4 o;
void main() {
  float d = length(gl_PointCoord * 2. - 1.) * vR; // pixels from its middle
  float core = exp(-d * d / (2. * vS * vS)), halo = 0.06 * pow(1. + d * d / (4. * vS * vS), -1.5);
  o = vec4(vCol * (core + halo) * (1. - smoothstep(0.8, 1., d / vR)), 1.);
}
`;function d(r,d){let f=o(r,i,c),p=o(r,l,u,[`aDir`,`aMag`,`aTemp`]),m=r.createVertexArray(),h=null,g=t(r,64,40),_=1;try{h=e(r,n(),d.large?160:64)}catch{h=null}let v=h?h.ready.then(()=>{let e=h.manifest?.mean??[.002,.002,.002];_=1/Math.max(1e-9,.2126*e[0]+.7152*e[1]+.0722*e[2])}).catch(e=>{console.warn(`sky:`,e),h=null}):Promise.resolve(),y=r.createBuffer(),b=r.createVertexArray(),x=0,S=(async()=>{let e=a();if(!e)return;let t=await(await fetch(`${e}manifest.json`)).json(),n=t.parts.slice(0,d.starParts??(d.large?2:1)),i=n.reduce((e,t)=>e+t.count,0);r.bindBuffer(r.ARRAY_BUFFER,y),r.bufferData(r.ARRAY_BUFFER,i*t.record,r.STATIC_DRAW),r.bindVertexArray(b),r.enableVertexAttribArray(0),r.vertexAttribPointer(0,3,r.SHORT,!0,12,0),r.enableVertexAttribArray(1),r.vertexAttribPointer(1,1,r.UNSIGNED_SHORT,!1,12,6),r.enableVertexAttribArray(2),r.vertexAttribPointer(2,1,r.UNSIGNED_BYTE,!0,12,8),r.bindVertexArray(null);let o=0;for(let t of n){let n=await(await fetch(`${e}${t.file}`)).arrayBuffer();r.bindBuffer(r.ARRAY_BUFFER,y),r.bufferSubData(r.ARRAY_BUFFER,o,new Uint8Array(n)),o+=n.byteLength,x+=t.count}})().catch(e=>console.warn(`stars:`,e)),C=(e,t,n,i,a)=>{r.uniform3fv(f.u(`uRight`),e.right),r.uniform3fv(f.u(`uUp`),e.up),r.uniform3fv(f.u(`uFwd`),e.fwd),r.uniform1f(f.u(`uTan`),e.tanHalf),r.uniform1f(f.u(`uAspect`),t),r.uniform1f(f.u(`uShift`),n),r.uniform1f(f.u(`uFoot`),a),r.uniformMatrix3fv(f.u(`uRot`),!1,i)},w=e=>[e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8]];return{ready:Promise.all([v,S]),get tiles(){return h},get mapGain(){return _},draw(e,t,n){let i=n.rot??s,a=2*e.tanHalf/t.h,o=r.getParameter(r.FRAMEBUFFER_BINDING);if(r.disable(r.DEPTH_TEST),r.bindVertexArray(m),h){h.update();let s=g.poll();s&&h.request(s),r.useProgram(f.p),h.bind(f.u,4,5),g.due()&&(r.bindFramebuffer(r.FRAMEBUFFER,g.fb),r.viewport(0,0,g.w,g.h),C(e,t.aspect,t.shift,i,a),r.uniform1i(f.u(`uKey`),1),r.drawArrays(r.TRIANGLES,0,3),g.start(),r.bindFramebuffer(r.FRAMEBUFFER,o)),r.viewport(0,0,t.w,t.h),C(e,t.aspect,t.shift,i,a),r.uniform1i(f.u(`uKey`),0),r.uniform1f(f.u(`uGain`),n.gain*_),r.drawArrays(r.TRIANGLES,0,3)}x&&(r.useProgram(p.p),r.bindVertexArray(b),r.uniformMatrix4fv(p.u(`uVP`),!1,e.viewProj),r.uniformMatrix3fv(p.u(`uRotT`),!1,w(i)),r.uniform1f(p.u(`uGain`),n.starGain),r.uniform1f(p.u(`uDev`),t.dev),r.uniform1f(p.u(`uLimit`),n.limit??9.5),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE),r.drawArrays(r.POINTS,0,x),r.disable(r.BLEND)),r.bindVertexArray(null),r.activeTexture(r.TEXTURE0)},destroy(){h?.destroy(),g.destroy()}}}export{d as n,s as t};