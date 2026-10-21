import{S as e,b as t,n,p as r,r as i,t as a,w as o,x as s,y as c}from"./narration.Crm9S85h.js";import{c as l,i as u,o as d,r as f,s as p}from"./post.lhgbitLo.js";import{l as m}from"./views.C-9pmGw3.js";var h=`234, 244, 248`,g=`143, 216, 238`,_=`242, 180, 90`,v=`255, 138, 128`;function y(e){let t=e.getContext(`2d`);return()=>{let n=e.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,2);if(n.width<20||n.height<20)return null;let i=Math.round(n.width*r),a=Math.round(n.height*r);return(e.width!==i||e.height!==a)&&(e.width=i,e.height=a),t.setTransform(r,0,0,r,0,0),t.clearRect(0,0,n.width,n.height),{g:t,w:n.width,h:n.height}}}var b=(e,t,n,r,i,a,o)=>{let s=r-t,c=i-n,l=Math.hypot(s,c);if(l<.5)return;e.strokeStyle=`rgb(${a})`,e.fillStyle=`rgb(${a})`,e.lineWidth=o,e.lineCap=`round`,e.shadowColor=`rgba(${a}, 0.8)`,e.shadowBlur=6;let u=s/l,d=c/l,f=Math.min(9,l*.4);e.beginPath(),e.moveTo(t,n),e.lineTo(r-u*f*.6,i-d*f*.6),e.stroke(),e.beginPath(),e.moveTo(r,i),e.lineTo(r-u*f-d*f*.5,i-d*f+u*f*.5),e.lineTo(r-u*f+d*f*.5,i-d*f-u*f*.5),e.closePath(),e.fill(),e.shadowBlur=0};function x(e){let t=y(e),n=1e-9;return{draw(r,a,o){let s=t();if(!s)return;let{g:c,w:l,h:u}=s,d=Math.hypot(...r);if(d>1e-12){let e=r[0]/d,t=r[1]/d;a=[a[0]*e+a[1]*t,a[1]*e-a[0]*t],r=[d,0]}let f=[r[0]+a[0],r[1]+a[1]],p=Math.max(Math.hypot(...r)+Math.hypot(...a),Math.hypot(...f),1e-12);n=p>n?p:n*.985+p*.015;let m=Math.min(l,u)*.42,h=m/Math.max(n,1e-12),y=l/2,x=u/2;c.strokeStyle=`rgba(${g}, 0.14)`,c.lineWidth=1,c.beginPath(),c.arc(y,x,m,0,7),c.stroke(),c.beginPath(),c.moveTo(y-m,x),c.lineTo(y+m,x),c.moveTo(y,x-m),c.lineTo(y,x+m),c.stroke();let S=y+r[0]*h,C=x-r[1]*h;b(c,y,x,S,C,g,2.2),o&&(b(c,S,C,S+a[0]*h,C-a[1]*h,v,2.2),b(c,y,x,y+f[0]*h,x-f[1]*h,_,2.8)),c.font=i(c.canvas,`fig`,{weight:600,sans:!0}),c.textBaseline=`middle`;let w=(e,t,n,r,i,a,o=.5,s=1)=>{let l=r-t,u=i-n,d=Math.hypot(l,u);if(d<18)return;let f=-u/d*s,p=l/d*s,m=t+l*o+f*12,h=n+u*o+p*12;c.textAlign=Math.abs(f)<.3?`center`:f>0?`left`:`right`,c.fillStyle=`rgb(${a})`,c.shadowColor=`#000`,c.shadowBlur=4,c.fillText(e,m,h),c.shadowBlur=0};if(w(o?`A`:`THE WAVE`,y,x,S,C,g,.5,1),o){let e=S+a[0]*h,t=C-a[1]*h,n=y+f[0]*h,r=x-f[1]*h;w(`B`,S,C,e,t,v,.5,(e-S)*(r-x)-(t-C)*(n-y)>0?1:-1);let i=Math.hypot(n-y,r-x);i>18&&(c.textAlign=n>=y?`left`:`right`,c.fillStyle=`rgb(${_})`,c.shadowColor=`#000`,c.shadowBlur=4,c.fillText(`BOTH`,n+(n-y)/i*8,r+(r-x)/i*8),c.shadowBlur=0)}c.textBaseline=`alphabetic`,e.setAttribute(`aria-label`,o?`The two ways' arrows, and the two added: the added arrow is ${Math.round(Math.hypot(...f)/Math.max(p,1e-12)*100)} per cent of the two end to end`:`The wave’s arrow at the point`)}}}function S(e){let t=y(e);return{draw(n,r,a,o){let s=t();if(!s)return;let{g:c,w:l,h:u}=s,d=u-14,f=l/n.length,p=0,m=0;for(let e=0;e<n.length;e++)p=Math.max(p,n[e]),m=Math.max(m,r[e]);if(c.fillStyle=`rgba(6, 10, 16, 0.55)`,c.fillRect(0,4,l,d-4),p>0){c.fillStyle=`rgba(${g}, 0.75)`;for(let e=0;e<n.length;e++){let t=n[e]/p*(d-4-6);t>0&&c.fillRect(e*f+.5,d-t,Math.max(1,f-1),t)}}if(m>0){let e=0,t=0;for(let i=0;i<n.length;i++)e+=r[i],t+=n[i];let i=t>8&&p>0?t/e/p:1/m;c.strokeStyle=`rgb(${_})`,c.lineWidth=1.6,c.shadowColor=`rgba(${_}, 0.7)`,c.shadowBlur=5,c.beginPath();for(let e=0;e<n.length;e++){let t=d-Math.min(1.15,r[e]*i)*(d-4-6),n=(e+.5)*f;e?c.lineTo(n,t):c.moveTo(n,t)}c.stroke(),c.shadowBlur=0}c.fillStyle=`rgb(${_})`;let h=o*l;c.beginPath(),c.moveTo(h,d+2),c.lineTo(h-4,d+9),c.lineTo(h+4,d+9),c.closePath(),c.fill(),c.font=i(c.canvas,`fig`),c.fillStyle=`rgba(${g}, 0.6)`,c.textAlign=`left`,c.fillText(a?`${a.toLocaleString(`en-GB`)} landed`:`none landed yet`,2,u-2),e.setAttribute(`aria-label`,`Where the electrons have landed across the screen: ${a} so far, with the wave's prediction over them.`)}}}function C(e){let t=y(e),n=e=>{let t=e/(2*Math.PI)+.5;return[0,.33,.67].map(e=>Math.round(255*Math.min(1,Math.max(0,.55+.45*Math.cos(2*Math.PI*(t+e))))**1.6)).join(`, `)};return{draw(){let r=t();if(!r)return;let{g:i,w:a,h:o}=r,s=Math.min(a,o)*.42,c=a/2,l=o/2;for(let e=0;e<96;e++){let t=e/96*2*Math.PI-Math.PI,r=(e+1.05)/96*2*Math.PI-Math.PI;i.strokeStyle=`rgb(${n((t+r)/2)})`,i.lineWidth=s*.22,i.beginPath(),i.arc(c,l,s*.86,-r,-t),i.stroke()}for(let e=0;e<4;e++){let t=e/4*2*Math.PI;b(i,c,l,c+Math.cos(t)*s*.62,l-Math.sin(t)*s*.62,n(t),1.8)}e.setAttribute(`aria-label`,`The tank's colours: each colour is a direction of the wave's arrow, turning through cyan, violet, magenta and amber and back`)}}}function w(e){let t=y(e);return{draw(n,r,a){let o=t();if(!o)return;let{g:s,w:c,h:l}=o,u=n.length,d=l-8,f=1e-30;for(let e=0;e<u;e++)f=Math.max(f,n[e],r[e]);if(s.fillStyle=`rgba(6, 10, 16, 0.55)`,s.fillRect(0,16,c,d-22+6),f<=1e-29)return;let p=e=>(e+.5)/u*c,m=e=>d-e/f*(d-22-10),h=(e,t,n,r)=>{s.strokeStyle=`rgb(${t})`,s.lineWidth=n,s.setLineDash(r),s.beginPath();for(let t=0;t<u;t++){let n=p(t),r=m(e(t));t?s.lineTo(n,r):s.moveTo(n,r)}s.stroke(),s.setLineDash([])};h(e=>n[e],g,1.2,[4,3]),h(e=>r[e],v,1.2,[4,3]),s.shadowColor=`rgba(${_}, 0.7)`,s.shadowBlur=5,h(e=>(1-a)*n[e]+a*r[e],_,2,[]),s.shadowBlur=0,s.font=i(s.canvas,`fig`,{weight:600,sans:!0});let y=0;for(let e=0;e<u;e++)n[e]>n[y]&&(y=e);let b=(e,t,n,r,i)=>{s.textAlign=i,s.fillStyle=`rgb(${r})`,s.shadowColor=`#000`,s.shadowBlur=4,s.fillText(e,p(t),Math.max(20,m(n)-6)),s.shadowBlur=0};b(`BOTH WAYS`,y,n[y],g,`center`);let x=Math.round(u*.14),S=Math.round(u*.86);b(`EACH WAY ALONE`,x,r[x],v,`left`),b(`NOW`,S,(1-a)*n[S]+a*r[S],_,`right`),e.setAttribute(`aria-label`,`Across the screen: the pattern with both ways added as waves, with stripes; with each way's chance added alone, without; and the pattern now, ${Math.round(a*100)} per cent of the way to the second.`)}}}function ee(e){let t=y(e);return{draw(n,r=``){let a=t();if(!a)return;let{g:o,w:s,h:c}=a,l=s-16,u=Math.round(c*.58);if(o.fillStyle=`rgba(4, 8, 14, 0.9)`,o.fillRect(8,u,l,22),o.strokeStyle=`rgba(${g}, 0.3)`,o.lineWidth=1,o.strokeRect(8.5,u+.5,l-1,21),r){o.font=i(o.canvas,`fig`,{weight:600,sans:!0}),o.textAlign=`center`,o.fillStyle=`rgba(${g}, 0.75)`,o.fillText(r,s/2,u+11+4),e.setAttribute(`aria-label`,r);return}let d=Math.max(1e-9,n.reduce((e,t)=>e+Math.max(0,t.v),0)),f=8,p=n.map(e=>{let t=Math.max(0,e.v)/d*l,n={...e,x0:f,x1:f+t};return f+=t,n});for(let e of p)e.x1-e.x0<.5||(o.fillStyle=`rgba(${e.rgb}, ${e.dim?.3:.8})`,o.fillRect(e.x0,u+1,e.x1-e.x0,20));o.font=i(o.canvas,`small`,{weight:600,sans:!0});let m=p.filter(e=>e.v/d>=.015).map(e=>{let t=`${Math.round(100*e.v/d)}%`,n=Math.max(o.measureText(e.name.toUpperCase()).width,30);return{...e,pct:t,wd:n,mid:(e.x0+e.x1)/2,lx:0}}),_=-1/0;for(let e of m)e.lx=Math.max(2,e.mid-e.wd/2,_+12),_=e.lx+e.wd;let v=s-2;for(let e=m.length-1;e>=0;e--){let t=m[e];t.lx+t.wd>v&&(t.lx=v-t.wd),v=t.lx-12}for(let e of m){let t=e.lx+e.wd/2;o.textAlign=`center`,o.fillStyle=`rgb(${e.rgb})`,o.shadowColor=`#000`,o.shadowBlur=4,o.font=i(o.canvas,`small`,{weight:600,sans:!0}),o.fillText(e.name.toUpperCase(),t,u-26),o.font=i(o.canvas,`fig`),o.fillStyle=`rgba(${h}, 0.95)`,o.fillText(e.pct,t,u-12),o.shadowBlur=0,Math.abs(t-e.mid)>3&&(o.strokeStyle=`rgba(${h}, 0.4)`,o.beginPath(),o.moveTo(t,u-8),o.lineTo(e.mid,u),o.stroke())}e.setAttribute(`aria-label`,`Where the electron could be now: ${m.map(e=>`${e.name}, ${e.pct}`).join(`; `)}.`)}}}function te(e){let t=y(e),n=1e-9;return{draw(r,a,o,s,c){let l=t();if(!l)return;let{g:u,w:d,h:f}=l,p=f-18,m=e=>6+e/(a-1)*(d-12),h=18+(p-18)*.45,v=(p-h)/Math.max(o,1e-9),y=1e-12;for(let e=0;e<a;e++)y=Math.max(y,Math.hypot(r[e*4],r[e*4+1]));n=y>n?y:n*.97+y*.03;let b=(h-18)*.85/n;u.fillStyle=`rgba(6, 10, 16, 0.55)`,u.fillRect(6,18,d-12,p-18),u.beginPath(),u.moveTo(m(0),p);for(let e=0;e<a;e++)u.lineTo(m(e),Math.max(18,p-r[e*4+2]*v));u.lineTo(m(a-1),p),u.closePath(),u.fillStyle=s===`hill`?`rgba(242, 160, 70, 0.28)`:`rgba(150, 175, 200, 0.35)`,u.fill(),s===`hill`&&(u.strokeStyle=`rgba(${_}, 0.75)`,u.setLineDash([5,4]),u.lineWidth=1,u.beginPath(),u.moveTo(m(0),h),u.lineTo(m(a-1),h),u.stroke(),u.setLineDash([])),u.beginPath();for(let e=0;e<a;e++){let t=Math.hypot(r[e*4],r[e*4+1])*b;e?u.lineTo(m(e),h-t):u.moveTo(m(e),h-t)}for(let e=a-1;e>=0;e--){let t=Math.hypot(r[e*4],r[e*4+1])*b;u.lineTo(m(e),h+t)}u.closePath(),u.fillStyle=`rgba(${g}, 0.18)`,u.fill(),u.strokeStyle=`rgb(${g})`,u.lineWidth=1.3,u.shadowColor=`rgba(${g}, 0.7)`,u.shadowBlur=4,u.beginPath();for(let e=0;e<a;e++){let t=h-r[e*4]*b;e?u.lineTo(m(e),t):u.moveTo(m(e),t)}u.stroke(),u.shadowBlur=0,u.font=i(u.canvas,`fig`,{weight:600,sans:!0});let x=(e,t,n,r,i)=>{u.textAlign=i,u.fillStyle=`rgb(${r})`,u.shadowColor=`#000`,u.shadowBlur=4,u.fillText(e,t,n),u.shadowBlur=0};x(`GUN`,m(c.gun),p+13,g,`center`),x(`SCREEN`,m(c.screen),p+13,g,`right`),s===`hill`?(x(`HILL`,m(c.wall),p+13,_,`center`),x(`THE ELECTRON’S ENERGY`,m(a-1)-4,h-6,_,`right`)):s===`slits`?x(`SLIT A`,m(c.wall),p+13,g,`center`):s===`slit`&&x(`THE SLIT`,m(c.wall),p+13,g,`center`),e.setAttribute(`aria-label`,s===`hill`?`Side on: the electron's wave meeting a hill higher than its energy, most of it turned back, a little fading through the hill and out the other side`:s===`slits`?`Side on: a slice along the tank through slit A, the wave rippling from the gun, through the slit, towards the screen`:`Side on: a slice along the middle of the tank, the wave rippling from the gun towards the screen`)}}}var T={ANOD:0,GOLD:1,TUNGSTEN:2,CERAMIC:3,GLASS:4,LENS:5,ENGRAVED:6,KNURL:7},E=class{v=[];i=[];n=0;vert(e,t,n,r){return this.v.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],r),this.n++}tri(e,t,n){this.i.push(e,t,n)}},D=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},O=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function k(e,t,n,r,i,a=4){let o=n.map(e=>e/2);r=Math.min(r,...o.map(e=>e*.98));let s=e=>{let t=[];for(let n=a;n>=0;n--)t.push(-e+r*(1-Math.tan(n/a*Math.PI/4)));for(let n=0;n<=a;n++)t.push(e-r*(1-Math.tan(n/a*Math.PI/4)));return t};for(let n=0;n<3;n++)for(let a of[-1,1]){let c=(n+1)%3,l=(n+2)%3,u=s(o[c]),d=s(o[l]),f=[];for(let s=0;s<u.length;s++)for(let p=0;p<d.length;p++){let m=[0,0,0];m[n]=a*o[n],m[c]=u[s],m[l]=d[p];let h=m.map((e,t)=>Math.max(-(o[t]-r),Math.min(o[t]-r,e))),g=D([m[0]-h[0],m[1]-h[1],m[2]-h[2]]),_=[h[0]+g[0]*r+t[0],h[1]+g[1]*r+t[1],h[2]+g[2]*r+t[2]];f.push([e.vert(_,g,[s/(u.length-1),p/(d.length-1)],i)])}let p=d.length;for(let t=0;t<u.length-1;t++)for(let n=0;n<p-1;n++){let r=f[t*p+n][0],i=f[(t+1)*p+n][0],o=f[t*p+n+1][0],s=f[(t+1)*p+n+1][0];a>0?(e.tri(r,i,s),e.tri(r,s,o)):(e.tri(r,s,i),e.tri(r,o,s))}}}function A(e,t,n,r,i,a,o=72,s=!0){let c=D([n[0]-t[0],n[1]-t[1],n[2]-t[2]]),l=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),u=D(O(c,Math.abs(c[1])<.9?[0,1,0]:[1,0,0])),d=O(c,u),f=Math.atan2(r-i,l),p=[];for(let s=0;s<=o;s++){let l=s/o*Math.PI*2,m=Math.cos(l),h=Math.sin(l),g=[u[0]*m+d[0]*h,u[1]*m+d[1]*h,u[2]*m+d[2]*h],_=D([g[0]*Math.cos(f)+c[0]*Math.sin(f),g[1]*Math.cos(f)+c[1]*Math.sin(f),g[2]*Math.cos(f)+c[2]*Math.sin(f)]);p.push([e.vert([t[0]+g[0]*r,t[1]+g[1]*r,t[2]+g[2]*r],_,[s/o,0],a),e.vert([n[0]+g[0]*i,n[1]+g[1]*i,n[2]+g[2]*i],_,[s/o,1],a)])}for(let t=0;t<o;t++)e.tri(p[t][0],p[t+1][0],p[t+1][1]),e.tri(p[t][0],p[t+1][1],p[t][1]);if(s)for(let[s,l,f]of[[t,r,-1],[n,i,1]]){if(l<1e-4)continue;let t=c.map(e=>e*f),n=e.vert(s,t,[.5,.5],a),r=[];for(let n=0;n<=o;n++){let i=n/o*Math.PI*2,c=Math.cos(i),f=Math.sin(i);r.push(e.vert([s[0]+(u[0]*c+d[0]*f)*l,s[1]+(u[1]*c+d[1]*f)*l,s[2]+(u[2]*c+d[2]*f)*l],t,[.5+c*.5,.5+f*.5],a))}for(let t=0;t<o;t++)f>0?e.tri(n,r[t],r[t+1]):e.tri(n,r[t+1],r[t])}}function j(e,t,n,r,i){let a=D(O(n,r)),o=e.vert(t,a,[0,0],i),s=e.vert([t[0]+n[0],t[1]+n[1],t[2]+n[2]],a,[1,0],i),c=e.vert([t[0]+r[0],t[1]+r[1],t[2]+r[2]],a,[0,1],i),l=e.vert([t[0]+n[0]+r[0],t[1]+n[1]+r[1],t[2]+n[2]+r[2]],a,[1,1],i);e.tri(o,s,l),e.tri(o,l,c)}function M(e){let t=document.createElement(`canvas`);t.width=4096,t.height=96;let n=t.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,t.width,t.height),n.strokeStyle=`#fff`,n.fillStyle=`#fff`;let r=n=>24+n/e*(t.width-48);for(let t=0;t<=Math.floor(e*20);t++){let e=t/20,i=t%20==0,a=t%10==0,o=t%2==0;n.lineWidth=i?4:2.2,n.beginPath(),n.moveTo(r(e),0),n.lineTo(r(e),i?54:a?40:o?26:14),n.stroke()}n.font=`600 30px "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`;for(let t=1;t<=Math.floor(e);t++)n.fillText(`${t} nm`,r(t),90);return n.textAlign=`left`,n.fillText(`0`,r(0)+6,90),t}function N(e,t){let n=u(e,ne,F,[`aPos`,`aNrm`,`aUv`,`aMat`]),r={vao:e.createVertexArray(),vb:e.createBuffer(),ib:e.createBuffer(),n:0},i={vao:e.createVertexArray(),vb:e.createBuffer(),ib:e.createBuffer(),n:0};for(let t of[r,i])e.bindVertexArray(t.vao),e.bindBuffer(e.ARRAY_BUFFER,t.vb),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.ib),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,36,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,36,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,36,24),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,1,e.FLOAT,!1,36,32);e.bindVertexArray(null);let a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,M(t.nm)),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let o=e.getExtension(`EXT_texture_filter_anisotropic`);o&&e.texParameterf(e.TEXTURE_2D,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(8,e.getParameter(o.MAX_TEXTURE_MAX_ANISOTROPY_EXT)));let s=t.L/2,c=t.W/2,l=c+.2,d=[0,1.4,0],f=(t,n)=>{e.bindVertexArray(t.vao),e.bindBuffer(e.ARRAY_BUFFER,t.vb),e.bufferData(e.ARRAY_BUFFER,new Float32Array(n.v),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.ib),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint32Array(n.i),e.STATIC_DRAW),e.bindVertexArray(null),t.n=n.i.length};function p(e){let n=new E,a=new E;k(n,[.1,-.38,0],[t.L+1.9,.74,t.W+1.7],.14,T.ANOD,5),k(n,[-s-.1,.2,0],[.18,.44,t.W+.5],.04,T.ANOD);for(let e of[-l,l]){k(n,[.05,.06,e],[t.L+.5,.18,.3],.045,T.GOLD);let r=e>0;j(n,[r?s:-s,.1515,e+(r?.11:-.11)],[r?-t.L:t.L,0,0],[0,0,r?-.22:.22],T.ENGRAVED)}for(let e of[-c-.02,c+.02])k(a,[0,.3,e],[t.L,.6,.03],.012,T.GLASS,2);if(e.place===`slits`||e.place===`slit`){for(let[t,r]of e.spans)k(n,[e.wallX,.25,(t+r)/2],[.2,.5,r-t],.03,T.TUNGSTEN,4);for(let t of[-1,1]){let r=t*(l+.32);k(n,[e.wallX,.12,r],[.34,.24,.36],.04,T.ANOD),A(n,[e.wallX,.42,r-t*.2],[e.wallX,.42,r+t*.16],.15,.15,T.KNURL,96),A(n,[e.wallX,.42,r-t*.24],[e.wallX,.42,r-t*.2],.17,.17,T.TUNGSTEN,96),A(n,[e.wallX,.42,r+t*.16],[e.wallX,.42,r+t*.22],.08,.08,T.TUNGSTEN,48),A(n,[e.wallX,.42,r-t*.24],[e.wallX,.42,t*(c+.05)],.03,.03,T.TUNGSTEN,24)}}if(e.place===`slits`){let t=e.wallX-.7,r=1.05,i=l-.55;A(n,[t,.15,l],[t,1.1500000000000001,l],.035,.035,T.GOLD,32),A(n,[t,1.1500000000000001,l],[t,1.1500000000000001,i+.1],.03,.03,T.GOLD,32);let a=D([e.wallX-t,-1,0-i]),o=[t-a[0]*.2,r-a[1]*.2,i-a[2]*.2],s=[t+a[0]*.12,r+a[1]*.12,i+a[2]*.12];A(n,o,s,.12,.12,T.ANOD,64),A(n,s,[s[0]+a[0]*.05,s[1]+a[1]*.05,s[2]+a[2]*.05],.13,.115,T.GOLD,64,!1);let c=[s[0]+a[0]*.05,s[1]+a[1]*.05,s[2]+a[2]*.05];A(n,c,[c[0]+a[0]*.006,c[1]+a[1]*.006,c[2]+a[2]*.006],.105,.105,T.LENS,64),d=[c[0]+a[0]*.01,c[1]+a[1]*.01,c[2]+a[2]*.01]}let[o,u]=t.gunTip,p=-s-1.05;k(n,[p+.55,-0,0],[1.2,.16,.56],.05,T.ANOD);for(let e=0;e<6;e++)A(n,[p+e*.17,u,0],[p+(e+1)*.17,u,0],e%2?.215:.245,e%2?.215:.245,T.CERAMIC,96);for(let e of[p-.03,p+.34,p+.68,p+1.02])A(n,[e,u,0],[e+.04,u,0],.262,.262,T.GOLD,96);let m=p+1.06;A(n,[m,u,0],[m+.36,u,0],.235,.07,T.TUNGSTEN,96),A(n,[m+.36,u,0],[o-.012,u,0],.045,.004,T.TUNGSTEN,64),k(n,[t.screenX+.24,t.paneH/2+.02,0],[.34,t.paneH+.42,t.W+.55],.07,T.ANOD,5),k(n,[t.screenX+.03,t.paneH+.06,0],[.12,.1,t.W+.26],.03,T.GOLD),k(n,[t.screenX+.03,-0,0],[.12,.06,t.W+.26],.02,T.GOLD);for(let e of[-c-.08,c+.08])k(n,[t.screenX+.03,t.paneH/2+.02,e],[.12,t.paneH+.12,.1],.03,T.GOLD);f(r,n),f(i,a)}return{build:p,get lampAt(){return d},draw(o){let s=o.glass?i:r;s.n&&(e.useProgram(n.p),e.uniformMatrix4fv(n.u(`uVP`),!1,o.viewProj),e.uniform3fv(n.u(`uEye`),o.eye),e.uniform2f(n.u(`uSize`),t.L,t.W),e.uniform1f(n.u(`uWaveLight`),o.waveLight),e.uniform1f(n.u(`uLamp`),o.lamp),e.uniform3fv(n.u(`uLampAt`),d),e.uniform4fv(n.u(`uGlint`),o.glint),e.uniform1f(n.u(`uNm`),t.nm),e.uniform1i(n.u(`uGlass`),+!!o.glass),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o.glowMap),e.uniform1i(n.u(`uGlowMap`),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,a),e.uniform1i(n.u(`uEng`),1),e.bindVertexArray(s.vao),e.drawElements(e.TRIANGLES,s.n,e.UNSIGNED_INT,0),e.bindVertexArray(null),e.activeTexture(e.TEXTURE0))}}}var P=`
vec3 studio(vec3 d, float rough);
// (Specular anti-aliasing: where the surface's normal turns a lot within a pixel, as on a thin polished edge seen from
// afar, its reflection is blurred to match, and dimmed as it spreads; otherwise the softbox's narrow highlight jumps from
// pixel to pixel as the camera moves, and the edge shimmers. John, 18 October 2026: "the bottom edge of the tank appears
// to pulse slightly as it moves, almost like an aliasing problem".)
vec3 studioAA(vec3 d, vec3 n, float rough) {
  vec3 dn = fwidth(n);
  float ra = clamp(sqrt(rough * rough + dot(dn, dn) * 1.5), rough, 1.);
  return studio(d, ra) * sqrt((rough + 0.04) / (ra + 0.04));
}
vec3 studio(vec3 d, float rough) {
  float w = 0.02 + rough * 0.35;
  vec3 c = mix(vec3(0.003, 0.004, 0.007), vec3(0.016, 0.022, 0.032), clamp(d.y * 0.5 + 0.5, 0., 1.));
  // The long softbox overhead, along the tank, a little towards the far side; a thinner one nearer.
  c += vec3(1.0, 0.97, 0.93) * 1.7 * smoothstep(w, 0., abs(d.z - 0.1) - 0.05) * smoothstep(0.62 - w, 0.8, d.y);
  c += vec3(0.9, 0.95, 1.0) * 0.9 * smoothstep(w * 0.8, 0., abs(d.z + 0.34) - 0.018) * smoothstep(0.55 - w, 0.72, d.y);
  // A cool box on the near side, behind the gun; a warm kicker beyond the screen.
  c += vec3(0.6, 0.74, 0.92) * 0.5 * smoothstep(0.62 - w, 0.86, dot(d, normalize(vec3(-0.55, 0.35, -0.75))));
  c += vec3(1.0, 0.7, 0.4) * 0.42 * smoothstep(0.66 - w, 0.9, dot(d, normalize(vec3(0.75, 0.3, 0.6))));
  // A faint line of ice at the horizon, all round.
  c += vec3(0.3, 0.55, 0.65) * 0.16 * smoothstep(0.05 + w, 0., abs(d.y - 0.03));
  return c;
}
`,ne=`#version 300 es
precision highp float;
in vec3 aPos, aNrm;
in vec2 aUv;
in float aMat;
uniform mat4 uVP;
out vec3 vPos, vNrm;
out vec2 vUv;
flat out int vMat;
void main() { vPos = aPos; vNrm = aNrm; vUv = aUv; vMat = int(aMat + 0.5); gl_Position = uVP * vec4(aPos, 1.); }
`,F=`#version 300 es
precision highp float;
in vec3 vPos, vNrm;
in vec2 vUv;
flat in int vMat;
out vec4 o;
uniform vec3 uEye, uLampAt;
uniform vec2 uSize;
uniform float uWaveLight, uLamp, uNm;
uniform vec4 uGlint;
uniform int uGlass;
uniform sampler2D uGlowMap, uEng;
${P}
// Light falling on a surface: from the studio (soft, mostly from above), the wave (its glow just in front of the
// surface, fading with height above the floor), the lamp.
vec3 irradiance(vec3 p, vec3 n) {
  vec3 e = vec3(0.012, 0.014, 0.018) + vec3(0.55, 0.53, 0.5) * max(n.y, 0.) * 0.32
         + vec3(0.5, 0.6, 0.75) * 0.08 * max(dot(n, normalize(vec3(-0.55, 0.35, -0.75))), 0.)
         + vec3(1., 0.7, 0.4) * 0.06 * max(dot(n, normalize(vec3(0.75, 0.3, 0.6))), 0.);
  return e;
}
vec3 waveLight(vec3 p, vec3 n) {
  vec2 g = (p.xz + n.xz * 0.3) / uSize + 0.5;
  vec3 w = texture(uGlowMap, clamp(g, vec2(0.002), vec2(0.998))).rgb;
  // (The wave is low, on the floor: faces turned down or sideways to it catch the most.)
  float lit = clamp(0.6 - 0.4 * n.y, 0.15, 1.);
  return w * uWaveLight * exp(-max(p.y - 0.05, 0.) * 1.6) * lit;
}
vec3 lampLight(vec3 p, vec3 n) {
  vec3 d = uLampAt - p;
  float r2 = dot(d, d);
  return vec3(1., 0.62, 0.26) * uLamp * 1.6 * max(dot(n, normalize(d)), 0.) / (1. + r2 * 3.);
}
void main() {
  vec3 n = normalize(vNrm), v = normalize(uEye - vPos), r = reflect(-v, n);
  float nv = max(dot(n, v), 0.), F = pow(1. - nv, 5.);
  vec3 wl = waveLight(vPos, n), ll = lampLight(vPos, n);
  // A glint where the wall caught an electron: a moment's flare on the metal.
  float gd = length(vPos - uGlint.xyz);
  vec3 glint = vec3(0.8, 0.95, 1.15) * exp(-gd * gd / 0.012) * exp(-uGlint.w / 0.3) * 7.;
  vec3 col;
  if (uGlass == 1) {
    // Sapphire: only what it reflects, the studio and the wave's light along it.
    col = (studioAA(r, n, 0.0) * (0.06 + 0.94 * F) + wl * 0.12 * (0.2 + F)) * 0.9;
    o = vec4(col, 1.);
    return;
  }
  if (vMat == 0) {
    // Black anodised, under a clear coat.
    vec3 base = vec3(0.012, 0.014, 0.017);
    col = base * (irradiance(vPos, n) * 3. + wl * 2. + ll) + studioAA(r, n, 0.32) * vec3(0.32, 0.34, 0.38) * 0.35
        + studioAA(r, n, 0.02) * (0.04 + 0.96 * F) * 0.8 + wl * 0.12 * (0.1 + F);
  } else if (vMat == 1 || vMat == 6 || vMat == 7) {
    // Champagne gold: brushed a little; the rails' engraving cut dark into it; the drums knurled.
    vec3 f0 = vec3(0.96, 0.8, 0.56) * 0.9;
    float rough = 0.16, cut = 0.;
    if (vMat == 6) cut = texture(uEng, vUv).r;
    if (vMat == 7) { float k = sin(vUv.x * 6.2831853 * 90.); n = normalize(n + 0.25 * k * normalize(cross(n, vec3(0., 0., 1.)) + 1e-4)); r = reflect(-v, n); rough = 0.3; }
    vec3 refl = studioAA(r, n, rough) * mix(f0, vec3(1.), F) * 0.8 + (wl * 0.8 + ll * 0.8) * f0;
    col = mix(refl, refl * 0.12 + vec3(0.03, 0.022, 0.012) * irradiance(vPos, n) * 4., cut);
  } else if (vMat == 2) {
    // Polished tungsten.
    vec3 f0 = vec3(0.6, 0.62, 0.65);
    col = studioAA(r, n, 0.12) * mix(f0, vec3(1.), F) * 1.15 + (wl * 1.25 + ll) * f0 + glint;
  } else if (vMat == 3) {
    // Glazed ceramic: white, a soft sheen.
    vec3 alb = vec3(0.86, 0.83, 0.77);
    col = alb * (irradiance(vPos, n) * 1.1 + wl + ll) * 0.9 + studioAA(r, n, 0.06) * (0.04 + 0.96 * F) * 0.7;
  } else {
    // The lamp's lens: dark glass, glowing warm when it's on.
    col = studioAA(r, n, 0.02) * (0.04 + 0.96 * F) + vec3(1., 0.6, 0.22) * uLamp * 9.;
  }
  if (any(isnan(col))) col = vec3(0.);
  o = vec4(min(col, vec3(40.)), 1.);
}
`,I=`
// A cyclic palette for the phase: cyan, violet, magenta, amber and back (Quilez's cosine palettes), deepened (the
// same hues, more saturated, since 18 October 2026: pastel, its colours averaged to near white where the ripples crowd
// together, seen from low down; figs.ts's wheel matches).
vec3 phaseColour(float a) {
  float t = a / 6.2831853 + 0.5;
  return pow(clamp(0.55 + 0.45 * cos(6.2831853 * (vec3(1.) * t + vec3(0.0, 0.33, 0.67))), 0., 1.), vec3(1.6));
}
`,L=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 aCell;
uniform sampler2D uS, uV;
uniform mat4 uVP;
uniform vec2 uGrid, uSize;
uniform float uNorm, uWaveH, uWallV, uHillE, uScreenX, uMix, uHover;
uniform int uPass;
out vec3 vPos, vNrm;
out float vP, vPhase, vCos, vWall, vHill, vScreen;
vec2 psi(ivec2 c) { vec4 s = texelFetch(uS, clamp(c, ivec2(0), ivec2(uGrid) - 1), 0); return s.rg + s.ba; }
// The wall as it stands: where both waves have wall. (Each wave's wall has only its own slit open, the one through A
// and the one through B; drawn where either had wall, both slits were closed in the picture, which showed one slit's
// outline and no slit at all: John, 18 October 2026, "the journey talks about two slits, but I can only ever see one
// slit in the wall".)
float pot(ivec2 c) { vec4 v = texelFetch(uV, clamp(c, ivec2(0), ivec2(uGrid) - 1), 0); return min(v.r, v.g); }
float hillAt(ivec2 c) {
  c = clamp(c, ivec2(0), ivec2(uGrid) - 1);
  float vv = pot(c), wall = smoothstep(0.5 * uWallV, uWallV, vv);
  return (1. - wall) * clamp(vv / max(uHillE, 1e-6), 0., 2.);
}
float height(ivec2 c) {
  c = clamp(c, ivec2(0), ivec2(uGrid) - 1);
  if (uPass == 0) return hillAt(c) * 0.16;
  float r = psi(c).r * uNorm;
  return uHover + sign(r) * pow(abs(r), 0.6) * uWaveH;
}
void main() {
  ivec2 c = ivec2(aCell);
  vec2 z = psi(c);
  float vv = pot(c);
  vWall = smoothstep(0.5 * uWallV, uWallV, vv);
  vHill = hillAt(c);
  // (With the lamp or the air in a flood, the stripes wash out: the two ways' chances added, not their waves.)
  vec4 sa = texelFetch(uS, c, 0);
  vP = mix(dot(z, z), dot(sa.rg, sa.rg) + dot(sa.ba, sa.ba), uMix) * uNorm * uNorm;
  // (atan(0, 0) is undefined, and on some graphics not a number, which the glow would spread over the whole picture.)
  float m = length(z);
  vPhase = m > 1e-15 ? atan(z.y, z.x) : 0.;
  vCos = m > 1e-15 ? z.x / m : 0.;
  vScreen = step(uScreenX, aCell.x);
  vec2 xz = (aCell / (uGrid - 1.) - 0.5) * uSize;
  float h = height(c);
  if (uPass == 1) h = max(h, 0.006);
  vec3 p = vec3(xz.x, h, xz.y);
  float dx = (height(c + ivec2(1, 0)) - height(c - ivec2(1, 0))) / (2. * uSize.x / uGrid.x);
  float dz = (height(c + ivec2(0, 1)) - height(c - ivec2(0, 1))) / (2. * uSize.y / uGrid.y);
  vNrm = normalize(vec3(-dx, 1., -dz));
  vPos = p;
  gl_Position = uVP * vec4(p, 1.);
}
`,R=`#version 300 es
precision highp float;
in vec3 vPos, vNrm;
in float vP, vPhase, vCos, vWall, vHill, vScreen;
out vec4 o;
uniform vec3 uEye;
uniform vec2 uSize;
uniform float uWaveLight, uCaustic, uNm;
uniform sampler2D uGlowMap;
${P}
${I}
void main() {
  vec3 n = normalize(vNrm), v = normalize(uEye - vPos), r = reflect(-v, n);
  float F = pow(1. - max(dot(n, v), 0.), 5.);
  vec3 col = vec3(0.003, 0.004, 0.0055);
  col += studioAA(r, n, 0.02) * (0.035 + 0.965 * F) * 0.55;
  // An etched reference grid, a line each half nanometre, barely there.
  vec2 gq = vPos.xz / (uSize.x / uNm) * 2.;
  vec2 gd = abs(fract(gq + 0.5) - 0.5) / fwidth(gq);
  col += vec3(0.05, 0.08, 0.1) * 0.05 * (1. - min(min(gd.x, gd.y), 1.));
  // The wave's light, pooled under it.
  vec3 pool = texture(uGlowMap, vPos.xz / uSize + 0.5).rgb;
  col += pool * 0.08 * uWaveLight;
  // Caustics: the crests focus the wave's light onto the floor beneath them, in fine lines of its own colour.
  float crest = pow(max(vCos, 0.), 14.);
  col += mix(phaseColour(vPhase), vec3(1., 0.9, 0.75), 0.25) * crest * pow(vP, 0.7) / (1. + 1.5 * vP) * uCaustic * (1. - vWall);
  // The hill: a ridge of amber glass.
  vec3 amber = studioAA(r, n, 0.05) * (0.04 + 0.96 * F) * 0.9 + vec3(1., 0.55, 0.18) * 0.22 + vec3(1., 0.7, 0.3) * pow(vHill, 3.) * 0.18 + pool * 0.35;
  col = mix(col, amber, smoothstep(0.02, 0.25, vHill));
  // The screen's strip, at the far end: darker, the wave swallowed there.
  col *= 1. - 0.55 * vScreen;
  if (any(isnan(col)) || any(isinf(col))) col = vec3(0.);
  o = vec4(min(col, vec3(60.)), 1.);
}
`,re=`#version 300 es
precision highp float;
in vec3 vPos, vNrm;
in float vP, vPhase, vCos, vWall, vHill, vScreen;
out vec4 o;
uniform vec3 uEye;
uniform float uGlow;
uniform int uDepthOnly;
// A look: where (x, z), how long ago, found or not; its window's size.
uniform vec4 uLook;
uniform float uLookR;
${P}
${I}
void main() {
  // (First its depth alone, where there's wave enough to see, so then only its nearest layer is drawn: see draw.)
  if (uDepthOnly == 1) { if (vP < 0.0015) discard; o = vec4(0.); return; }
  vec3 n = normalize(vNrm), v = normalize(uEye - vPos), r = reflect(-v, n);
  float F = pow(1. - max(dot(n, v), 0.), 5.);
  float p = vP;
  // (Its strength on a logarithmic curve: the faint parts as bright as they were, the brightest held well below white,
  // so the crests keep their colour and stay apart rather than glowing into one another. John, 18 October 2026: "The
  // center of the electron still glows far too brightly, it's white and blown out"; then "It needs toning right down.
  // Don't lose the dimmer detail, but the center of the wave crests are white and they just all blur together".)
  float b = pow(p, 0.45);
  vec3 glow = phaseColour(vPhase) * uGlow * 0.22 * log(1. + 60. * b) / log(61.);
  float on = smoothstep(0.0, 0.03, p);
  // (The crests catch the softbox overhead, faintly, and less where the wave is strongest, so its heart keeps its colour.)
  vec3 col = glow * (1. - 0.6 * vScreen) + studioAA(r, n, 0.02) * (0.02 + 0.5 * F) * on * 0.14 / (1. + 2. * p);
  col *= 1. - vWall;
  // A look: a ring of light spreading out from where the reader looked, white where the electron was found there,
  // ice where it wasn't, with a moment's flash inside it.
  if (uLook.z < 1.2) {
    float d = length(vPos.xz - uLook.xy), age = uLook.z;
    float rr = uLookR * (1. + age * 3.);
    float q = (d - rr) / (uLookR * 0.3), u = d / uLookR;
    float ring = exp(-q * q) * exp(-age / 0.45);
    float disc = exp(-u * u) * exp(-age / 0.12);
    vec3 lc = uLook.w > 0.5 ? vec3(1.6, 1.45, 1.2) : vec3(0.35, 0.8, 1.3);
    col += lc * (ring * 2.4 + disc * 1.5) * (1. - vWall);
  }
  if (any(isnan(col)) || any(isinf(col))) col = vec3(0.);
  o = vec4(min(col, vec3(60.)), 1.);
}
`,z=`#version 300 es
in vec2 aP;
out vec2 vUv;
void main() { vUv = aP * 0.5 + 0.5; gl_Position = vec4(aP, 0., 1.); }
`,B=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uS;
uniform vec2 uGrid;
uniform float uNorm, uMix;
out vec4 o;
${I}
void main() {
  ivec2 c0 = ivec2(gl_FragCoord.xy) * 4;
  vec3 acc = vec3(0.);
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) {
    vec4 s = texelFetch(uS, clamp(c0 + ivec2(i, j), ivec2(0), ivec2(uGrid) - 1), 0);
    vec2 z = s.rg + s.ba;
    float p = mix(dot(z, z), dot(s.rg, s.rg) + dot(s.ba, s.ba), uMix) * uNorm * uNorm;
    acc += (dot(z, z) > 1e-30 ? phaseColour(atan(z.y, z.x)) : vec3(0.)) * pow(p, 0.6) / (1. + 0.6 * p) + vec3(0.6, 0.7, 0.8) * pow(p, 1.4) * 0.08;
  }
  vec3 g = acc / 16.;
  if (any(isnan(g)) || any(isinf(g))) g = vec3(0.);
  o = vec4(min(g, vec3(20.)), 1.);
}
`,ie=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uSrc;
uniform vec2 uStep;
out vec4 o;
void main() {
  vec3 s = texture(uSrc, vUv).rgb * 0.2270;
  s += (texture(uSrc, vUv + uStep * 1.385).rgb + texture(uSrc, vUv - uStep * 1.385).rgb) * 0.3162;
  s += (texture(uSrc, vUv + uStep * 3.231).rgb + texture(uSrc, vUv - uStep * 3.231).rgb) * 0.0703;
  o = vec4(s, 1.);
}
`,ae=`#version 300 es
precision highp float;
in vec2 aUv;
uniform mat4 uVP;
uniform vec3 uO, uU, uV;
out vec2 vUv;
out vec3 vPos;
void main() { vUv = aUv; vPos = uO + uU * aUv.x + uV * aUv.y; gl_Position = uVP * vec4(vPos, 1.); }
`,oe=`#version 300 es
precision highp float;
in vec2 vUv;
in vec3 vPos;
out vec4 o;
uniform sampler2D uFlux;
uniform vec3 uEye;
${P}
float lines(float x, float n) { float q = x * n; return 1. - smoothstep(0.4, 1.4, abs(fract(q + 0.5) - 0.5) / fwidth(q)); }
void main() {
  float f = texture(uFlux, vec2(vUv.x, 0.5)).r;
  vec3 n = vec3(-1., 0., 0.), v = normalize(uEye - vPos), r = reflect(-v, n);
  float F = pow(1. - max(dot(n, v), 0.), 5.);
  vec3 col = vec3(0.004, 0.004, 0.005);
  // The reticle: ticks along the top and bottom, every fortieth, longer every eighth; quarter lines across, the centre.
  float edge = step(vUv.y, 0.03) + step(0.97, vUv.y), edge2 = step(vUv.y, 0.06) + step(0.94, vUv.y);
  float ret = lines(vUv.x, 40.) * edge + lines(vUv.x, 8.) * edge2 + lines(vUv.y, 4.) * 0.3 + (1. - smoothstep(0.4, 1.4, abs(vUv.x - 0.5) / fwidth(vUv.x))) * 0.3;
  col += vec3(0.85, 0.7, 0.45) * 0.045 * min(ret, 1.);
  col += studioAA(r, n, 0.03) * (0.04 + 0.96 * F) * 0.55;
  col += vec3(0.25, 0.6, 0.9) * f * 0.3 * (0.4 + 0.6 * smoothstep(0., 0.6, vUv.y));
  o = vec4(col, 1.);
}
`,V=`#version 300 es
precision highp float;
in vec3 aPos;
in vec4 aCol; // colour, and size (world units) in .a
uniform mat4 uVP;
uniform float uPx; // pixels per world unit at distance 1
out vec3 vCol;
void main() {
  vec4 c = uVP * vec4(aPos, 1.);
  gl_Position = c;
  vCol = aCol.rgb;
  gl_PointSize = clamp(aCol.a * uPx / max(c.w, 1e-3), 3., 120.);
}
`,H=`#version 300 es
precision highp float;
in vec3 vCol;
out vec4 o;
void main() {
  float d = length(gl_PointCoord * 2. - 1.);
  float core = exp(-d * d * 18.), halo = exp(-d * d * 3.5) * 0.35;
  o = vec4(vCol * (core + halo) * (1. - smoothstep(0.85, 1., d)), 1.);
}
`,se=`#version 300 es
precision highp float;
in vec3 aPos;
uniform mat4 uVP;
out vec3 vPos;
void main() { vPos = aPos; gl_Position = uVP * vec4(aPos, 1.); }
`,ce=`#version 300 es
precision highp float;
in vec3 vPos;
out vec4 o;
uniform vec3 uA, uB, uEye;
uniform float uR, uOn, uDiag;
// (Marched through, from the box's far face back towards the eye: the light along the line of sight, in the cone.)
void main() {
  vec3 ax = uB - uA, d = vPos - uEye;
  float L2 = dot(ax, ax), total = length(d), len = min(total, uDiag), ds = len / 32., acc = 0.;
  vec3 dir = d / total;
  for (int i = 0; i < 32; i++) {
    vec3 p = uEye + dir * (total - len + (float(i) + 0.5) * ds);
    float t = dot(p - uA, ax) / L2;
    if (t < 0. || t > 1.) continue;
    float r = length(p - (uA + ax * t)) / (uR * (0.12 + t));
    acc += exp(-r * r * 2.5) * (1. - 0.5 * t) * smoothstep(0., 0.06, t);
  }
  o = vec4(vec3(1., 0.62, 0.26) * acc * ds * 0.35 * uOn, 1.);
}
`;function le(e,t){let n=t.NX,r=t.NY,i=10*r/n,a=u(e,L,R,[`aCell`]),o=u(e,L,re,[`aCell`]),s=u(e,ae,oe,[`aUv`]),c=u(e,V,H,[`aPos`,`aCol`]),l=u(e,z,B,[`aP`]),f=u(e,z,ie,[`aP`]),p=u(e,se,ce,[`aPos`]),m=new Float32Array(n*r*2);for(let e=0;e<r;e++)for(let t=0;t<n;t++)m[(e*n+t)*2]=t,m[(e*n+t)*2+1]=e;let h=new Uint32Array((n-1)*(r-1)*6),g=0;for(let e=0;e<r-1;e++)for(let t=0;t<n-1;t++){let r=e*n+t,i=r+1,a=r+n,o=a+1;h[g++]=r,h[g++]=a,h[g++]=i,h[g++]=i,h[g++]=a,h[g++]=o}let _=e.createVertexArray();e.bindVertexArray(_);let v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let y=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,y),e.bufferData(e.ELEMENT_ARRAY_BUFFER,h,e.STATIC_DRAW);let b=e.createVertexArray();e.bindVertexArray(b);let x=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,x),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let S=e.createTexture();e.bindTexture(e.TEXTURE_2D,S),e.texImage2D(e.TEXTURE_2D,0,e.R16F,r,1,0,e.RED,e.HALF_FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE);let C=e.createVertexArray();e.bindVertexArray(C);let w=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,w),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let ee=n/4,te=r/4,T=()=>{let t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,ee,te,0,e.RGBA,e.HALF_FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let n=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),{tex:t,fb:n}},E=T(),D=T();e.bindFramebuffer(e.FRAMEBUFFER,null);let O=e.createVertexArray();e.bindVertexArray(O);let k=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,k),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let A=6e4,j=new Float32Array(A*7),M=e.createVertexArray();e.bindVertexArray(M);let P=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,P),e.bufferData(e.ARRAY_BUFFER,j.byteLength,e.DYNAMIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,28,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,28,12),e.bindVertexArray(null);let ne=(e,t)=>[(e/(n-1)-.5)*10,0,(t/(r-1)-.5)*i],F=i/2,I=1.9,le=[4.98,0,-F],U=[0,0,i],W=[0,I,0],ue=[ne(t.GUN_X,r/2)[0]-.12,.2,0],G=N(e,{L:10,W:i,gunTip:ue,screenX:le[0],paneH:I,nm:5.12}),de=ne(t.WALL_X,0)[0];G.build({place:`open`,spans:[],wallX:de,slitsZ:[]});let K=d({centre:[0,0,0],yaw:0,pitch:.5,dist:10,fovY:.75,aspect:1.6});return{W:i,PANE_H:I,paneO:le,paneU:U,paneV:W,cellToWorld:ne,gunTip:ue,get camera(){return K},get lampAt(){return G.lampAt},setPlace(e,t){let n=e=>(e/(r-1)-.5)*i,a=[];if(e===`slits`||e===`slit`){let e=[...t].sort((e,t)=>e[0]-t[0]),r=-F;for(let[t,i]of e)a.push([r,n(t)]),r=n(i);a.push([r,F])}G.build({place:e,spans:a.filter(([e,t])=>t-e>.01),wallX:de,slitsZ:t.map(([e,t])=>n((e+t)/2))})},draw(u){let m=d({centre:u.view.centre??[.4,.2,0],yaw:u.view.yaw,pitch:u.view.pitch,dist:u.view.dist,fovY:u.view.fovY,aspect:u.view.aspect,near:.1,far:200,shiftY:u.view.shiftY});K=m;let g=e.getParameter(e.FRAMEBUFFER_BINDING),v=e.getParameter(e.VIEWPORT);e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.bindVertexArray(C),e.viewport(0,0,ee,te),e.useProgram(l.p),e.bindFramebuffer(e.FRAMEBUFFER,E.fb),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t.state),e.uniform1i(l.u(`uS`),0),e.uniform2f(l.u(`uGrid`),n,r),e.uniform1f(l.u(`uNorm`),u.norm),e.uniform1f(l.u(`uMix`),u.mix),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(f.p),e.uniform1i(f.u(`uSrc`),0);for(let t=0;t<2;t++)e.bindFramebuffer(e.FRAMEBUFFER,D.fb),e.bindTexture(e.TEXTURE_2D,E.tex),e.uniform2f(f.u(`uStep`),(1.5+t)/ee,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,E.fb),e.bindTexture(e.TEXTURE_2D,D.tex),e.uniform2f(f.u(`uStep`),0,(1.5+t)/te),e.drawArrays(e.TRIANGLES,0,3);e.bindFramebuffer(e.FRAMEBUFFER,g),e.viewport(v[0],v[1],v[2],v[3]),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL);let y=.7,x=(a,o)=>{e.useProgram(a.p),e.bindVertexArray(_),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t.state),e.uniform1i(a.u(`uS`),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,t.potential),e.uniform1i(a.u(`uV`),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,E.tex),e.uniform1i(a.u(`uGlowMap`),2),e.uniformMatrix4fv(a.u(`uVP`),!1,m.viewProj),e.uniform2f(a.u(`uGrid`),n,r),e.uniform2f(a.u(`uSize`),10,i),e.uniform1f(a.u(`uNorm`),u.norm),e.uniform1f(a.u(`uWaveH`),u.waveH),e.uniform1f(a.u(`uHover`),.11),e.uniform1f(a.u(`uWallV`),2.2),e.uniform1f(a.u(`uHillE`),u.hillE),e.uniform1f(a.u(`uMix`),u.mix),e.uniform1f(a.u(`uScreenX`),t.SCREEN_X),e.uniform3fv(a.u(`uEye`),m.eye),e.uniform1f(a.u(`uGlow`),u.glow),e.uniform1f(a.u(`uWaveLight`),y),e.uniform1f(a.u(`uCaustic`),.3),e.uniform1f(a.u(`uNm`),5.12),e.uniform1i(a.u(`uPass`),o),e.activeTexture(e.TEXTURE0)};if(x(a,0),e.drawElements(e.TRIANGLES,h.length,e.UNSIGNED_INT,0),G.draw({viewProj:m.viewProj,eye:m.eye,glowMap:E.tex,waveLight:y,lamp:u.lamp,glint:u.glint,glass:!1}),u.flux&&(e.bindTexture(e.TEXTURE_2D,S),e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,1,e.RED,e.FLOAT,u.flux)),e.useProgram(s.p),e.bindVertexArray(b),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,S),e.uniform1i(s.u(`uFlux`),0),e.uniformMatrix4fv(s.u(`uVP`),!1,m.viewProj),e.uniform3fv(s.u(`uO`),le),e.uniform3fv(s.u(`uU`),U),e.uniform3fv(s.u(`uV`),W),e.uniform3fv(s.u(`uEye`),m.eye),e.drawArrays(e.TRIANGLE_STRIP,0,4),x(o,1),e.colorMask(!1,!1,!1,!1),e.uniform1i(o.u(`uDepthOnly`),1),e.drawElements(e.TRIANGLES,h.length,e.UNSIGNED_INT,0),e.colorMask(!0,!0,!0,!0),e.uniform1i(o.u(`uDepthOnly`),0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.depthMask(!1),u.look){let t=ne(u.look.cx,u.look.cy);e.uniform4f(o.u(`uLook`),t[0],t[2],u.look.age,+!!u.look.found),e.uniform1f(o.u(`uLookR`),u.look.r*10/n)}else e.uniform4f(o.u(`uLook`),0,0,99,0);if(e.drawElements(e.TRIANGLES,h.length,e.UNSIGNED_INT,0),G.draw({viewProj:m.viewProj,eye:m.eye,glowMap:E.tex,waveLight:y,lamp:u.lamp,glint:u.glint,glass:!0}),u.lamp>.01){let t=G.lampAt,n=[de,.05,0],r=.75,i=[Math.min(t[0],n[0])-r,.02,-.75*1.2],a=[Math.max(t[0],n[0])+r,t[1]+.1,r*1.2],o=new Float32Array([i[0],i[1],i[2],a[0],i[1],i[2],a[0],a[1],i[2],i[0],i[1],i[2],a[0],a[1],i[2],i[0],a[1],i[2],i[0],i[1],a[2],a[0],a[1],a[2],a[0],i[1],a[2],i[0],i[1],a[2],i[0],a[1],a[2],a[0],a[1],a[2],i[0],i[1],i[2],i[0],a[1],a[2],i[0],i[1],a[2],i[0],i[1],i[2],i[0],a[1],i[2],i[0],a[1],a[2],a[0],i[1],i[2],a[0],i[1],a[2],a[0],a[1],a[2],a[0],i[1],i[2],a[0],a[1],a[2],a[0],a[1],i[2],i[0],a[1],i[2],a[0],a[1],i[2],a[0],a[1],a[2],i[0],a[1],i[2],a[0],a[1],a[2],i[0],a[1],a[2]]);e.useProgram(p.p),e.bindVertexArray(O),e.bindBuffer(e.ARRAY_BUFFER,k),e.bufferData(e.ARRAY_BUFFER,o,e.DYNAMIC_DRAW),e.uniformMatrix4fv(p.u(`uVP`),!1,m.viewProj),e.uniform3fv(p.u(`uA`),t),e.uniform3fv(p.u(`uB`),n),e.uniform3fv(p.u(`uEye`),m.eye),e.uniform1f(p.u(`uR`),.42),e.uniform1f(p.u(`uOn`),u.lamp),e.uniform1f(p.u(`uDiag`),Math.hypot(a[0]-i[0],a[1]-i[1],a[2]-i[2])),e.enable(e.CULL_FACE),e.cullFace(e.FRONT),e.drawArrays(e.TRIANGLES,0,o.length/3),e.disable(e.CULL_FACE)}let w=[...u.sprites.filter(e=>!e.over),...u.sprites.filter(e=>e.over)].slice(0,A),T=w.length,N=w.filter(e=>!e.over).length;if(T){for(let e=0;e<T;e++){let t=w[e];j.set([t.pos[0],t.pos[1],t.pos[2],t.col[0],t.col[1],t.col[2],t.size],e*7)}e.useProgram(c.p),e.bindVertexArray(M),e.bindBuffer(e.ARRAY_BUFFER,P),e.bufferSubData(e.ARRAY_BUFFER,0,j.subarray(0,T*7)),e.uniformMatrix4fv(c.u(`uVP`),!1,m.viewProj),e.uniform1f(c.u(`uPx`),u.px),N&&e.drawArrays(e.POINTS,0,N),T>N&&(e.disable(e.DEPTH_TEST),e.drawArrays(e.POINTS,N,T-N),e.enable(e.DEPTH_TEST))}return e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null),e.disable(e.DEPTH_TEST),m}}}var U=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uS, uV;
uniform vec2 uTexel;
`,W=`${U}
out vec4 o;
uniform float uDt, uPart, uSrcOn, uSrcPhase, uSrcK, uSrcAmp;
uniform vec2 uSrc; // the gun: its place (cells, x and y) and its beam's half-width (x is the source's)
uniform float uSrcW;
vec4 at(vec2 d) { return texture(uS, vUv + d * uTexel); }
void main() {
  vec4 s = at(vec2(0.)), v = texture(uV, vUv);
  vec4 lap = at(vec2(1., 0.)) + at(vec2(-1., 0.)) + at(vec2(0., 1.)) + at(vec2(0., -1.)) - 4. * s;
  // H applied to each part: −½∇²f + V f, A's parts with A's wall, B's with B's.
  vec4 hs = -0.5 * lap + vec4(v.r, v.r, v.g, v.g) * s;
  float keep = 1. - v.b;
  vec2 cell = vUv / uTexel;
  // (A steady beam, in a flood: a ribbon of source at the gun, its phase turning at the wave's frequency.)
  float src = uSrcOn * uSrcAmp * exp(-pow((cell.y - uSrc.y) / uSrcW, 2.)) * exp(-pow((cell.x - uSrc.x) / 3., 2.));
  // (The source feeds S·e^{i(kx − ωt)}, half to each wave where there are two.)
  float arg = uSrcK * (cell.x - uSrc.x) - uSrcPhase;
  if (uPart < 0.5) {
    s.r = (s.r + uDt * hs.g) * keep + uDt * src * cos(arg) * 0.5;
    s.b = (s.b + uDt * hs.a) * keep + uDt * src * cos(arg) * 0.5;
  } else {
    s.g = (s.g - uDt * hs.r) * keep + uDt * src * sin(arg) * 0.5;
    s.a = (s.a - uDt * hs.b) * keep + uDt * src * sin(arg) * 0.5;
  }
  o = s;
}
`,ue=`${U}
out vec4 o;
uniform vec2 uC, uW;
uniform float uK, uAmp, uSplit, uHalf;
void main() {
  vec2 d = vUv / uTexel - uC;
  float g = uAmp * exp(-0.25 * (d.x * d.x / (uW.x * uW.x) + d.y * d.y / (uW.y * uW.y)));
  vec2 z = g * vec2(cos(uK * d.x), sin(uK * d.x - uHalf));
  o = uSplit > 0.5 ? vec4(z * 0.5, z * 0.5) : vec4(z, 0., 0.);
}
`,G=`${U}
out vec4 o;
uniform vec2 uP;
uniform float uSig, uFound, uScale, uKeep, uWallX;
void main() {
  vec4 s = texture(uS, vUv);
  vec2 cell = vUv / uTexel;
  if (uKeep > 0.5) {
    // (Seen at slit A, uKeep 1: A's wave beyond the slits; at B, 2: B's; 3: past the wall or the hill, both.)
    float beyond = step(uWallX, cell.x);
    if (uKeep > 2.5) { o = s * beyond * uScale; return; }
    vec2 a = uKeep < 1.5 ? s.rg : s.ba;
    o = vec4(a * beyond * uScale, 0., 0.);
    return;
  }
  float g = exp(-0.5 * dot(cell - uP, cell - uP) / (uSig * uSig));
  float m = uFound > 0.5 ? g : sqrt(max(0., 1. - g * g));
  o = s * m * uScale;
}
`,de=`${U}
out vec4 o;
uniform float uWallX;
void main() {
  vec2 base = floor(gl_FragCoord.xy) * 8.;
  vec4 acc = vec4(0.);
  for (int j = 0; j < 8; j++) for (int i = 0; i < 8; i++) {
    vec2 cell = base + vec2(float(i), float(j)) + 0.5;
    vec4 s = texture(uS, cell * uTexel);
    vec2 t = s.rg + s.ba;
    float p = dot(t, t), beyond = step(uWallX, cell.x);
    acc.r += p;
    acc.g += dot(s.rg, s.rg) * beyond;
    acc.b += dot(s.ba, s.ba) * beyond;
    acc.a = max(acc.a, p);
  }
  o = acc;
}
`,K=`${U}
out vec4 o;
uniform float uScreenX, uCols, uRow;
void main() {
  float y = floor(gl_FragCoord.x) + 0.5;
  if (uRow < 0.5) {
    float acc = 0.;
    for (int i = 0; i < 64; i++) {
      if (float(i) >= uCols) break;
      vec2 cell = vec2(uScreenX + float(i) + 0.5, y);
      vec4 s = texture(uS, cell * uTexel), v = texture(uV, cell * uTexel);
      vec2 t = s.rg + s.ba;
      acc += dot(t, t) * 2. * v.b;
    }
    o = vec4(acc, 0., 0., 1.);
  } else {
    o = texture(uS, vec2(uScreenX - 6. + 0.5, y) * uTexel);
  }
}
`,fe=`${U}
out vec4 o;
uniform float uRowY;
void main() {
  vec2 cell = vec2(floor(gl_FragCoord.x) + 0.5, uRowY + 0.5);
  vec4 s = texture(uS, cell * uTexel), v = texture(uV, cell * uTexel);
  vec2 t = s.rg + s.ba;
  o = vec4(t, min(v.r, v.g), 0.);
}
`;function pe(e,t,n){let r=e.createBuffer();e.bindBuffer(e.PIXEL_PACK_BUFFER,r),e.bufferData(e.PIXEL_PACK_BUFFER,t*n*16,e.STREAM_READ),e.bindBuffer(e.PIXEL_PACK_BUFFER,null);let i=null,a=new Float32Array(t*n*4);return{get busy(){return!!i},start(a){e.bindFramebuffer(e.FRAMEBUFFER,a),e.bindBuffer(e.PIXEL_PACK_BUFFER,r),e.readPixels(0,0,t,n,e.RGBA,e.FLOAT,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),i=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0)},poll(){if(!i)return null;let t=e.clientWaitSync(i,0,0);return t!==e.ALREADY_SIGNALED&&t!==e.CONDITION_SATISFIED?null:(e.deleteSync(i),i=null,e.bindBuffer(e.PIXEL_PACK_BUFFER,r),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,a),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),a)}}}function me(e,t,n){let i=e.createVertexArray(),a=t=>u(e,r,t),o=a(W),s=a(ue),c=a(G),l=a(de),d=a(K),f=a(fe),p=(t,n,r=null)=>{let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,t,n,0,e.RGBA,e.FLOAT,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:i,fb:a}},m=p(t,n),h=p(t,n),g=p(t,n),_=t/8,v=n/8,y=p(_,v),b=p(n,1),x=p(n,1),S=p(t,1),C=pe(e,_,v),w=pe(e,n,1),ee=pe(e,n,1),te=pe(e,t,1),T=n/2,E=[1/t,1/n],D=Math.round(t*.12),O=Math.round(t*.42),k=t-24,A=2.2,j={place:`slits`,slitW:8,slitSep:36,hillV:1.15,hillW:8},M=!0,N=O+3;function P(r,i){j=r,M=r.place===`slits`;let a=i*i/2;N=r.place===`hill`?O+Math.ceil(r.hillW*.8)+1:O+3;let o=new Float32Array(t*n*4),s=n/2;for(let e=0;e<n;e++)for(let i=0;i<t;i++){let c=0,l=0,u=Math.abs(i-O)<=2;if(r.place===`slits`&&u){let t=Math.abs(e-(s+r.slitSep/2))<=r.slitW/2,n=Math.abs(e-(s-r.slitSep/2))<=r.slitW/2;c=t?0:A,l=n?0:A}else if(r.place===`slit`&&u)c=l=Math.abs(e-s)<=r.slitW/2?0:A;else if(r.place===`hill`){let e=(i-O)/(r.hillW/2);c=l=Math.abs(e)<1.6?r.hillV*a*Math.exp(-(Math.abs(e)**6)):0}let d=Math.min(e,n-1-e,i),f=d<18?.05*(1-d/18)**2:0;(r.place===`slits`||r.place===`slit`)&&i<O-2&&i>=O-2-10&&((r.place===`slits`?Math.abs(e-(s+r.slitSep/2))<=r.slitW/2+1||Math.abs(e-(s-r.slitSep/2))<=r.slitW/2+1:Math.abs(e-s)<=r.slitW/2+1)||(f=Math.max(f,.07*((i-(O-2-10))/10)**2))),i>=k&&(f=Math.max(f,.06*Math.min(1,(i-k+1)/8)));let p=(e*t+i)*4;o[p]=c,o[p+1]=l,o[p+2]=f,o[p+3]=+(i>=k)}return e.bindTexture(e.TEXTURE_2D,g.tex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,t,n,e.RGBA,e.FLOAT,o),o}let ne=P(j,.5),F=(r,i,a=t,o=n)=>{e.useProgram(r.p),e.bindFramebuffer(e.FRAMEBUFFER,i?i.fb:null),e.viewport(0,0,a,o),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,m.tex),e.uniform1i(r.u(`uS`),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,g.tex),e.uniform1i(r.u(`uV`),1),e.uniform2f(r.u(`uTexel`),E[0],E[1])},I=()=>{let e=m;m=h,h=e},L=.25,R=!1,re=0,z=.5,B=0;return{NX:t,NY:n,GUN_X:D,WALL_X:O,SCREEN_X:k,DT:L,get state(){return m.tex},get potential(){return g.tex},get potData(){return ne},get setup(){return j},get split(){return M},get steps(){return B},build(e,t){z=t,ne=P(e,t)},clear(){for(let t of[m,h])e.bindFramebuffer(e.FRAMEBUFFER,t.fb),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);e.bindFramebuffer(e.FRAMEBUFFER,null)},fire(t,r,a){z=t,R=!1,e.bindVertexArray(i),F(s,h),e.uniform2f(s.u(`uC`),D,n/2),e.uniform2f(s.u(`uW`),r,a),e.uniform1f(s.u(`uK`),t),e.uniform1f(s.u(`uAmp`),1/Math.sqrt(2*Math.PI*r*a)),e.uniform1f(s.u(`uSplit`),+!!M),e.uniform1f(s.u(`uHalf`),(1-Math.cos(t))*L*.5),e.drawArrays(e.TRIANGLES,0,3),I()},flood(e,t){R=e,z=t},run(t){e.bindVertexArray(i);let r=1-Math.cos(z);for(let i=0;i<t;i++){for(let t of[0,1])F(o,h),e.uniform1f(o.u(`uDt`),L),e.uniform1f(o.u(`uPart`),t),e.uniform1f(o.u(`uSrcOn`),+!!R),e.uniform1f(o.u(`uSrcPhase`),re+(t?r*L*.5:0)),e.uniform1f(o.u(`uSrcK`),z),e.uniform1f(o.u(`uSrcAmp`),.0025),e.uniform2f(o.u(`uSrc`),D,n/2),e.uniform1f(o.u(`uSrcW`),n*.22),e.drawArrays(e.TRIANGLES,0,3),I();re+=r*L,B++}},measure(t,n,r,a){e.bindVertexArray(i),F(c,h),e.uniform2f(c.u(`uP`),t[0],t[1]),e.uniform1f(c.u(`uSig`),n),e.uniform1f(c.u(`uFound`),+!!r),e.uniform1f(c.u(`uScale`),a),e.uniform1f(c.u(`uKeep`),0),e.uniform1f(c.u(`uWallX`),N),e.drawArrays(e.TRIANGLES,0,3),I()},keep(t,n){e.bindVertexArray(i),F(c,h),e.uniform1f(c.u(`uKeep`),t),e.uniform1f(c.u(`uScale`),n),e.uniform1f(c.u(`uWallX`),N),e.drawArrays(e.TRIANGLES,0,3),I()},sample(){e.bindVertexArray(i),C.busy||(F(l,y,_,v),e.uniform1f(l.u(`uWallX`),N),e.drawArrays(e.TRIANGLES,0,3),C.start(y.fb)),w.busy||(F(d,b,n,1),e.uniform1f(d.u(`uScreenX`),k),e.uniform1f(d.u(`uCols`),24),e.uniform1f(d.u(`uRow`),0),e.drawArrays(e.TRIANGLES,0,3),w.start(b.fb)),ee.busy||(F(d,x,n,1),e.uniform1f(d.u(`uScreenX`),k),e.uniform1f(d.u(`uCols`),24),e.uniform1f(d.u(`uRow`),1),e.drawArrays(e.TRIANGLES,0,3),ee.start(x.fb)),te.busy||(F(f,S,t,1),e.uniform1f(f.u(`uRowY`),Math.max(0,Math.min(n-1,Math.round(T)))),e.drawArrays(e.TRIANGLES,0,3),te.start(S.fb)),e.bindFramebuffer(e.FRAMEBUFFER,null)},stats(){let e=C.poll();if(!e)return null;let t=0,n=0,r=0,i=0,a=new Float32Array(_*v);for(let o=0;o<_*v;o++)t+=e[o*4],n+=e[o*4+1],r+=e[o*4+2],i=Math.max(i,e[o*4+3]),a[o]=e[o*4];return{total:t,a:n,b:r,peak:i,blocks:a}},rows(){let e=w.poll();if(!e)return null;let t=new Float32Array(n);for(let r=0;r<n;r++)t[r]=e[r*4];return t},arms(){let e=ee.poll();return e?new Float32Array(e):null},slice(e){T=e;let t=te.poll();return t?new Float32Array(t):null},BX:_,BY:v}}var he=[`The tank`,`Two slits`,`One at a time`,`Stripes`,`The lamp`,`Narrower`,`Faster`,`The hill`,`Looking`,`Yours`],ge=[53,56,55,53,46,16,14,40,35,1];function _e(e,t){switch(e){case 0:return t<5?{kind:`big`,line:`THE VAN RUNS THIS FIRST TOUR`,detail:`ONE ELECTRON, SHRUNK TO A WAVE YOU CAN SEE. THEN THE TANK IS YOURS`}:{line:`ONE ELECTRON, AS A WAVE`,detail:`ITS COLOUR IS ITS PHASE. ITS GLOW, THE CHANCE OF FINDING IT THERE`};case 1:return t<34?{line:`TWO SLITS`,detail:`ONE ELECTRON. WATCH ITS WAVE GO THROUGH BOTH`}:{line:`IT LANDS AS ONE SPARK`,detail:`THE WAVE SAID WHERE IT MIGHT. CHANCE CHOSE WHERE IT DID`};case 2:return{line:`ONE AT A TIME`,detail:`MOST ARE CAUGHT BY THE WALL. EACH ONE THROUGH LANDS SOMEWHERE NEW`};case 3:return{line:`THOUSANDS OF THEM`,detail:`AND THE SPARKS BUILD INTO STRIPES`};case 4:return t<20.5?{line:`THE LAMP IS ON`,detail:`IT SEES WHICH SLIT EACH ELECTRON USES`}:{line:`NO MORE STRIPES`,detail:`SEEN AT ONE SLIT, AN ELECTRON COMES FROM THAT SLIT ALONE`};case 5:return{line:`NARROWER SLITS`,detail:`LESS ROOM, AND THE WAVE SPREADS WIDER`};case 6:return{line:`FASTER ELECTRONS`,detail:`A SHORTER WAVE, AND THE STRIPES CROWD CLOSER`};case 7:return{line:`A HILL TOO HIGH TO CLIMB`,detail:`MOST OF THE WAVE BOUNCES BACK. A LITTLE GETS THROUGH`};case 8:return{line:`LOOKING FOR IT`,detail:`FOUND OR NOT, THE WAVE CHANGES, THEN SPREADS AGAIN`};default:return{kind:`go`,line:`THE TANK IS YOURS`,detail:`FIRE, FLOOD, CHANGE THE PLACE. TAP THE TANK TO LOOK`}}}function ve(e){return e.flood?{line:e.lamp>.5?`FLOODING, LAMP ON`:`FLOODING THE TANK`,detail:`${e.landed.toLocaleString(`en-GB`)} LANDED`}:{line:`ONE AT A TIME`,detail:`${e.landed.toLocaleString(`en-GB`)} LANDED. ENTER FIRES ANOTHER`}}var ye=.01,be=64;function xe(){let r=c(`sim-canvas`),i=new URLSearchParams(location.search).has(`large`)||Math.max(screen.width,screen.height)*Math.min(window.devicePixelRatio||1,2)>=1800?512:384,u=i/2,d=i/512,h={mode:`launch`,playing:!1,at:0,ch:0,yaw:-Math.PI/2-.38,pitch:.56,dist:19,fovY:.48,clock:0},g=!1,_=-1e9,v=()=>{g=!0,_=q()},y=0,b=()=>y,T={place:`open`,slitW:14,slitSep:36,hillV:1.15,hillW:6,energy:.45,lamp:0,air:0,flood:!1,auto:!0},E=null,D=null,O=null,k=null,A=0,j=()=>20*(8/20)**T.energy,M=()=>2*Math.PI/(j()*d),N=()=>j()*ye,P=()=>Math.sin(M())*.25,ne=()=>d*Math.sin(2*Math.PI/j())/Math.sin(M()),F=()=>1.50412/(N()*N()),I=()=>Math.sqrt(2*F()*1602176634e-28/91093837e-38)/1e3,L=null,R=0,re=0,z=0,B=0,ie=[],ae=new Float32Array(be),oe=new Float32Array(be),V=null,H=null,se=1e-6,ce=-1,U=null,W=null,ue=-1e9,G=null,de=-1,K=`none`,fe=0,pe=new Float32Array(u),xe=new Float32Array(u),Se=null,Ce=0,we=-1,Te=u/2,Ee=null,q=()=>performance.now()/1e3,De=t(`Fire one electron (Enter)`,e(`<circle cx="8" cy="8" r="2.4" fill="currentColor"/><circle cx="8" cy="8" r="5.6" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>`),()=>{kt(),Z()}),Oe=t(`Flood the tank (W)`,e(`<path d="M2 5.5c1.5-1.4 3-1.4 4.5 0s3 1.4 4.5 0 2.4-1.2 3 0M2 10.5c1.5-1.4 3-1.4 4.5 0s3 1.4 4.5 0 2.4-1.2 3 0" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`),()=>{kt(),yt(!T.flood)}),ke=[{id:`overview`,name:`Overview`},{id:`arrows`,name:`The arrows`},{id:`screen`,name:`The screen`},{id:`which`,name:`Which way`},{id:`where`,name:`Where is it?`},{id:`side`,name:`Side on`}],Ae=!1,je=a(c(`sim`).dataset.narration??``,{time:()=>h.at,active:()=>h.mode===`guided`||Ae,playing:()=>h.playing,ended:()=>Ae}),Me=n(JSON.parse(c(`sim`).dataset.cues||`null`)),Ne=e=>e===null?ke[0].id:ke.find(t=>t.name.toLowerCase()===e.toLowerCase())?.id??null;for(let e of Me.views)Ne(e)||console.warn(`narration: the cue sheet shows the view "${e}", which this simulator doesn't have`);let Pe=!1,Fe=!1;function Ie(){if(h.mode!==`guided`&&!Ae||Fe)return;let e=Ne(Me.viewAt(h.at));e&&e!==J.view&&J.setView(e)}let Le=[],Re=e=>{Le.length<400&&Le.push({at:Math.round(h.at*10)/10,ch:h.ch,e})},J=o({playing:()=>h.playing,toggle:()=>{h.mode!==`launch`&&(h.playing=!h.playing,J.setPlay(),J.raiseLcd(h.playing?1200:2800))},again:()=>{h.mode!==`launch`&&Tt()},againTitle:`Run the guided tour again (R)`,views:ke,onView:(e,t)=>{Pe=t,t&&h.mode!==`launch`&&(Fe=!0),h.mode!==`launch`&&(Wt(),gt())},keys:[je.button,De,Oe],busy:()=>!!Q||Y.some(e=>e.dragging),onKey:(e,t)=>{if(h.mode===`launch`)return!1;if(t.key===`Enter`)return kt(),Z(),!0;if(e===`n`)return je.toggle(),!0;if(e===`w`)return kt(),yt(!T.flood),!0;if(t.key.startsWith(`Arrow`)){t.preventDefault(),v();let e=.08;return t.key===`ArrowLeft`&&(h.yaw-=e),t.key===`ArrowRight`&&(h.yaw+=e),t.key===`ArrowUp`&&(h.pitch=At(h.pitch+e)),t.key===`ArrowDown`&&(h.pitch=At(h.pitch-e)),!0}return t.key===`+`||t.key===`=`?(kt(),Y[0].nudge(1),!0):t.key===`-`||t.key===`_`?(kt(),Y[0].nudge(-1),!0):!1}}),ze=()=>Oe.classList.toggle(`is-on`,T.flood),Be=[[`open`,`Open`],[`slits`,`Two slits`],[`narrow`,`Narrower`],[`slit`,`One slit`],[`hill`,`Hill`]],Ve=document.createElement(`div`);Ve.className=`wt-places`,Ve.setAttribute(`role`,`group`),Ve.setAttribute(`aria-label`,`The place in the tank`);let He=Be.map(([e,t])=>{let n=document.createElement(`button`);return n.type=`button`,n.className=`wt-place`,n.textContent=t,n.addEventListener(`click`,()=>{kt(),X(e)}),Ve.append(n),[e,n]});c(`sim-ctl`).append(Ve);let Ue=()=>He.forEach(([e,t])=>{let n=e===`narrow`?T.place===`slits`&&T.slitW<6:e===T.place&&!(e===`slits`&&T.slitW<6);t.classList.toggle(`is-on`,n),t.setAttribute(`aria-pressed`,String(n))}),Y=[l(c(`wt-lv-energy`),{label:`Energy`,value:T.energy,step:.05,ticks:[{at:0,text:`slow`},{at:.5,text:`·`,minor:!0},{at:1,text:`fast`}],words:()=>`${Math.round(F())} eV`,onChange:e=>{kt(),T.energy=e,_t()}}),l(c(`wt-lv-lamp`),{label:`Lamp`,value:T.lamp,step:.1,ticks:[{at:0,text:`off`},{at:1,text:`on`}],words:e=>e<.02?`off`:`${Math.round(e*100)}%`,onChange:e=>{kt(),T.lamp=e}}),l(c(`wt-lv-air`),{label:`Air`,value:T.air,step:.1,ticks:[{at:0,text:`none`},{at:1,text:`thick`}],words:e=>e<.02?`none`:`${Math.round(e*100)}%`,onChange:e=>{kt(),T.air=e}})],We=c(`wt-lv-head`),Ge=()=>{Y[0].set(T.energy),Y[1].set(T.lamp),Y[2].set(T.air)},Ke=s(c(`sim-tl`),he,e=>{h.mode!==`launch`&&(h.mode===`free`&&Tt(),Et(e))}),qe=e=>ge.slice(0,e).reduce((e,t)=>e+t,0),Je=ge.slice(0,-1).reduce((e,t)=>e+t,0),Ye=c(`sim-inst`).querySelector(`.hp-body`),Xe=[`landed`,`fired`,`caught`,`energy`,`speed`,`lambda`,`slits`,`lamp`,`air`];Ye.innerHTML=Xe.map(e=>`<div class="hp-row" data-row="${e}"><span class="hp-k"></span><span class="hp-v"><b></b><small></small></span></div>`).join(``);let Ze=Object.fromEntries(Xe.map(e=>{let t=Ye.querySelector(`[data-row="${e}"]`);return[e,{k:t.querySelector(`.hp-k`),v:t.querySelector(`b`)}]})),Qe=(e,t)=>{e.textContent!==t&&(e.textContent=t)},$e=(e,t,n)=>{Qe(Ze[e].k,t),Qe(Ze[e].v,n)},et=(e,t)=>String(e).padStart(t,` `),tt=x(c(`wt-arrows-canvas`)),nt=S(c(`sim-st-canvas`)),rt=e=>c(e).querySelector(`.hp-body`),it=C(c(`wt-wheel`)),at=w(c(`wt-which-canvas`)),ot=ee(c(`wt-where-canvas`)),st=te(c(`wt-side-canvas`)),ct=c(`wt-side`).querySelector(`.lcd-cap`),lt=m(rt(`wt-arrows-read`),{turn:`B turned from A`,both:`Both together`}),ut=m(rt(`wt-screen-read`),{landed:`Landed`,apart:`Stripes apart`,strength:`Stripe strength`}),dt=m(rt(`wt-which-read`),{known:`Which way known`,stripes:`Stripe strength`}),ft=e=>`<span class="hp-gauge bh-gauge">${Array.from({length:12},(t,n)=>`<i${n<Math.round(Math.max(0,Math.min(1,e))*12)?` class="is-on"`:``}></i>`).join(``)}</span>`,pt=e=>{let t=0,n=1/0;for(let r=Math.round(u*.3);r<Math.round(u*.7);r++){let i=e(r);t=Math.max(t,i),n=Math.min(n,i)}return t>0&&Number.isFinite(n)?(t-n)/(t+n):0},mt=()=>T.place===`slits`?Math.max(T.lamp,T.air):0;function ht(){if(T.flood)return{parts:[],note:`A STEADY BEAM: FIRE ONE AT A TIME TO FOLLOW ONE ELECTRON`};let e=V;if(K===`none`||!e)return{parts:[],note:`FIRE AN ELECTRON TO FOLLOW IT`};let t={name:`At the screen`,v:0,rgb:`242, 180, 90`};if(K===`landed`)return{parts:[{...t,name:`Landed`,v:1}],note:``};if(K===`caught`)return{parts:[{name:`Caught by the wall`,v:1,rgb:`160, 185, 210`}],note:``};if(K===`sentback`)return{parts:[{name:`Sent back`,v:1,rgb:`160, 185, 210`}],note:``};let n=Math.min(1,L?.caught??0);if(T.place===`open`)return{parts:[{name:`In flight`,v:Math.max(0,e.total),rgb:`143, 216, 238`},{...t,v:n}],note:``};if(K===`through`){let r=Math.max(1e-9,e.a+e.b),i=Math.max(0,1-n);return D.split?{parts:[{name:`Through slit A`,v:i*e.a/r,rgb:`143, 216, 238`},{name:`Through slit B`,v:i*e.b/r,rgb:`255, 138, 128`},{...t,v:n}],note:``}:{parts:[{name:T.place===`hill`?`Through the hill`:`Through the slit`,v:i,rgb:`143, 216, 238`},{...t,v:n}],note:``}}let r=D.split?4:1,i=Math.max(0,e.total-e.a-e.b),a=r*e.a,o=r*e.b,s=Math.max(0,1-i-a-o);return T.place===`hill`?{parts:[{name:`This side of the hill`,v:i,rgb:`143, 216, 238`,dim:!0},{name:`Through the hill`,v:a+o,rgb:`143, 216, 238`},{name:`Sent back`,v:s,rgb:`160, 185, 210`}],note:``}:D.split?{parts:[{name:`Not at the wall yet`,v:i,rgb:`143, 216, 238`,dim:!0},{name:`Through slit A`,v:a,rgb:`143, 216, 238`},{name:`Through slit B`,v:o,rgb:`255, 138, 128`},{name:`At the wall`,v:s,rgb:`160, 185, 210`}],note:``}:{parts:[{name:`Not at the wall yet`,v:i,rgb:`143, 216, 238`,dim:!0},{name:`Through the slit`,v:a+o,rgb:`143, 216, 238`},{name:`At the wall`,v:s,rgb:`160, 185, 210`}],note:``}}function gt(){Se&&D&&st.draw(Se,i,M()*M()/2,T.place,{gun:D.GUN_X,wall:D.WALL_X,screen:D.SCREEN_X})}c(`sim-st-canvas`).addEventListener(`click`,e=>{let t=e.target.getBoundingClientRect();we=Math.round((e.clientX-t.left)/t.width*(u-1))});function _t(){if(!D)return;D.build({place:T.place,slitW:T.slitW*d,slitSep:T.slitSep*d,hillV:T.hillV,hillW:T.hillW*d},M());let e=u/2,t=T.slitW*d/2+.5,n=T.slitSep*d/2;O?.setPlace(T.place,T.place===`slits`?[[e-n-t,e-n+t],[e+n-t,e+n+t]]:T.place===`slit`?[[e-t,e+t]]:[]),T.flood&&D.flood(!0,M()),Ue()}function vt(){ie.length=0,ae.fill(0),oe.fill(0),z=0,re=0,fe=0,pe.fill(0),xe.fill(0),K=`none`}function X(e){e===`narrow`?(T.place=`slits`,T.slitW=4,T.slitSep=24):(T.place=e,e===`slits`?(T.slitW=14,T.slitSep=36):e===`slit`&&(T.slitW=8,T.slitSep=36)),_t(),D?.clear(),L=null,vt(),R=q()+.4}function yt(e){T.flood=e,D?.flood(e,M()),e||D?.clear(),L=null,R=q()+.3,ze()}function Z(e=10,t=24,n=!1,r=0,i=!1){if(!D)return;T.flood&&yt(!1);let a=M();D.fire(a,e*d,(T.place===`slits`?t:Math.min(t,24))*d),L={steps0:D.steps,u:n?.5:Math.random(),caught:0,decided:!1,pass:(D.WALL_X+4*d-D.GUN_X+3*e*d)/P(),staged:n,holdTo:r,back:i,arrived:new Float32Array(u)},Re(`fire`),re++,K=`flying`,ue=q(),B=0}let bt=e=>{let t=0;for(let n=0;n<e.length;n++)t+=e[n];if(t<=0)return-1;let n=Math.random()*t;for(let t=0;t<e.length;t++)if(n-=e[t],n<=0)return t;return e.length-1};function xt(e){ie.push({row:e,h:.06+.88*Math.random(),t:q(),one:!T.flood}),ie.length>4e4&&ie.splice(0,ie.length-4e4),ae[Math.min(63,Math.floor(e/u*be))]++,z++}function St(e,t,n){if(!D||!V||T.flood)return;let r=10*d,i=0;for(let n=0;n<D.BY;n++)for(let a=0;a<D.BX;a++){let o=(a+.5)*8-e,s=(n+.5)*8-t;i+=V.blocks[n*D.BX+a]*Math.exp(-(o*o+s*s)/(r*r))}i=Math.min(.999,i/Math.max(V.total,1e-9));let a=n??Math.random()<i;Re(a?`look: found`:`look: not found`),D.measure([e,t],r,a,1/Math.sqrt(Math.max(a?i:1-i,1e-6))),ce=h.clock+.12;let o=O.cellToWorld(e,t);W={pos:[o[0],.05,o[2]],t:q(),found:a,cx:e,cy:t},L&&(L.caught=0,L.u=L.staged?.5:Math.random())}let Ct={2:39,7:24},wt=()=>h.mode===`guided`&&Ct[h.ch]!==void 0&&h.at-qe(h.ch)>=Ct[h.ch];function Tt(){h.mode=`guided`,h.playing=!0,h.at=0,h.ch=-1,Ae=!1,Le.length=0,g=!1,Fe=Pe&&J.view!==ke[0].id,J.setPlay(),Et(0)}function Et(e){switch(h.at=qe(e)+.001,h.ch=e,J.raiseLcd(),L=null,D?.clear(),T.lamp=0,T.air=0,T.flood=!1,T.auto=!1,T.energy=.45,e){case 0:X(`open`);break;case 1:X(`slits`);break;case 2:X(`slits`),T.auto=!0,R=q();break;case 3:X(`slits`),yt(!0);break;case 4:X(`slits`),T.lamp=1;break;case 5:X(`narrow`),yt(!0);break;case 6:X(`slits`),T.energy=.9,_t(),yt(!0);break;case 7:X(`hill`);break;case 8:X(`open`);break;default:Ot(),Ae=!0}ze(),Ge()}function Dt(e,t){let n=n=>e<n&&t>=n;if(h.ch===0&&n(21.5)&&Z(6,6,!0),h.ch===1&&n(7.5)&&Z(10,24,!0,qe(1)+22.2),h.ch===1&&n(35.5)&&Z(10,24,!0),h.ch===4&&(n(6.5)||n(13.5))&&Z(10,24,!0),h.ch===4&&n(20.5)&&(yt(!0),ie.length=0,ae.fill(0),oe.fill(0),z=0),h.ch===7&&n(.5)&&Z(10,24,!1,0,!0),h.ch===7&&n(7)&&(T.auto=!0,R=q()),h.ch===8){let e=()=>L&&D?[D.GUN_X+P()*(D.steps-L.steps0),u/2]:[i/2,u/2];if(n(1)&&Z(10,10),n(6.5)){let t=e();St(t[0]+4*d,t[1]+6*d,!0)}if(n(17.5)&&(D?.clear(),L=null,Z(10,10)),n(21.5)){let t=e();St(t[0],t[1]-22*d,!1)}}}function Ot(){h.mode=`free`,h.ch=-1,T.auto=!0,T.place!==`slits`&&X(`slits`),R=q()+.5,Y.forEach(e=>e.lock(!1))}function kt(){h.mode===`guided`&&(h.mode=`free`,h.ch=-1,Y.forEach(e=>e.lock(!1))),!h.playing&&h.mode!==`launch`&&(h.playing=!0,J.setPlay())}let Q=null,At=e=>Math.max(.12,Math.min(1.45,e));r.addEventListener(`pointerdown`,e=>{Q={x:e.clientX,y:e.clientY,moved:0},r.setPointerCapture(e.pointerId)}),r.addEventListener(`pointermove`,e=>{if(Q){let t=e.clientX-Q.x,n=e.clientY-Q.y;Q.moved+=Math.abs(t)+Math.abs(n),Q.moved>6&&v(),h.yaw-=t*.005,h.pitch=At(h.pitch+n*.004),Q.x=e.clientX,Q.y=e.clientY}let t=Pt(e.clientX,e.clientY);t>=0&&(we=t)}),r.addEventListener(`pointerup`,e=>{let t=Q&&Q.moved<6;if(Q=null,!t||!D||!O)return;let n=Nt(e.clientX,e.clientY);n&&n[0]>D.GUN_X*.6&&n[0]<D.SCREEN_X&&(h.mode===`guided`&&kt(),St(n[0],n[1]))}),r.addEventListener(`wheel`,e=>{e.preventDefault(),v(),h.dist=Math.max(7,Math.min(30,h.dist*Math.exp(e.deltaY*.001)))},{passive:!1});let jt=null;J.ballEl.addEventListener(`pointerdown`,e=>{jt={x:e.clientX,y:e.clientY},J.ballEl.setPointerCapture(e.pointerId)}),J.ballEl.addEventListener(`pointermove`,e=>{jt&&=(v(),h.yaw-=(e.clientX-jt.x)*.02,h.pitch=At(h.pitch+(e.clientY-jt.y)*.015),{x:e.clientX,y:e.clientY})}),J.ballEl.addEventListener(`pointerup`,()=>{jt=null});let Mt=(e,t)=>{let n=O.camera,i=r.getBoundingClientRect(),a=(e-i.left)/i.width*2-1,o=1-(t-i.top)/i.height*2,s=i.width/i.height,c=[0,1,2].map(e=>n.fwd[e]+n.right[e]*a*n.tanHalf*s+n.up[e]*(o-n.shiftY)*n.tanHalf);return{o:n.eye,d:c}},Nt=(e,t)=>{if(!O)return null;let{o:n,d:r}=Mt(e,t);if(r[1]>=-1e-6)return null;let a=-n[1]/r[1],o=n[0]+r[0]*a,s=n[2]+r[2]*a,c=(o/10+.5)*(i-1),l=(s/O.W+.5)*(u-1);return c>=0&&c<i&&l>=0&&l<u?[c,l]:null},Pt=(e,t)=>{if(!O)return-1;let{o:n,d:r}=Mt(e,t),i=O.paneO[0];if(Math.abs(r[0])<1e-6)return-1;let a=(i-n[0])/r[0];if(a<=0)return-1;let o=n[1]+r[1]*a,s=n[2]+r[2]*a;return o<0||o>O.PANE_H||Math.abs(s)>O.W/2?-1:Math.round((s/O.W+.5)*(u-1))},Ft=performance.now(),It=e=>{if(A=requestAnimationFrame(It),!E||!D||!O||!k)return;let t=Math.min(.1,(e-Ft)/1e3);Ft=e;let n=q();if(h.playing&&h.mode!==`launch`){if(h.clock+=t,h.mode===`guided`){let e=h.at;h.at+=t;let n=0;for(;n<ge.length-1&&h.at>=qe(n+1);)n++;n===h.ch?Dt(e-qe(n),h.at-qe(n)):Et(n),h.at}let e=h.mode===`guided`&&wt()||h.mode===`free`&&T.auto&&z>6,r=h.mode===`guided`?h.ch:-1,i=r===1&&!!L&&!L.decided&&!!L.holdTo&&D.steps-L.steps0>L.pass*.62,a=T.flood?20:e?40:i?.9:r===0||r===1?4:r===8?5:10;zt+=a*ne()*t*60;let o=Math.floor(zt);zt-=o,o>0&&D.run(o),B+=o,!T.flood&&!L&&T.auto&&n>=R&&Z()}Ie(),je.sync(),D.sample();let i=D.stats();i&&(V=i,se=i.peak>se?i.peak:se*.96+i.peak*.04,ce>0&&h.clock>=ce&&i.total>1e-6&&!T.flood&&(D.measure([0,0],1e9,!0,1/Math.sqrt(i.total)),ce=-1));let a=D.rows(),o=D.arms();if(o){H=o;let e=0;for(let t=0;t<u;t++)e=Math.max(e,Math.hypot(o[t*4],o[t*4+1])+Math.hypot(o[t*4+2],o[t*4+3]));Ce=Math.max(e,Ce*Math.exp(-Math.min(.2,t)/3));let n=Math.exp(-Math.min(.2,t)/6);for(let e=0;e<u;e++){let t=o[e*4],r=o[e*4+1],i=o[e*4+2],a=o[e*4+3];pe[e]=pe[e]*n+(t+i)**2+(r+a)**2,xe[e]=xe[e]*n+t*t+r*r+i*i+a*a}}let s=D.slice(T.place===`slits`?Math.round(u/2+T.slitSep*d/2):u/2);s&&(Se=s),J.view===`side`&&J.lcdUp()&&!(Rt++%2)&&gt();let l=T.flood?Math.max(T.lamp,T.air):0;if(h.playing&&h.mode!==`launch`){if(T.flood&&H){let e=new Float32Array(u);for(let t=0;t<u;t++){let n=H[t*4],r=H[t*4+1],i=H[t*4+2],a=H[t*4+3],o=(n+i)**2+(r+a)**2,s=n*n+r*r+i*i+a*a;e[t]=(1-l)*o+l*s}let n=Math.round(9*t*60);for(let t=0;t<n;t++){let t=bt(e);t>=0&&(xt(t),re++)}let r=0;for(let t=0;t<u;t++)r+=e[t];if(r>0)for(let t=0;t<u;t++)oe[Math.min(63,Math.floor(t/u*be))]+=e[t]/r}else if(L){if(!L.decided&&D.steps-L.steps0>=L.pass*(T.place===`hill`?1.35:1)&&V&&!(L.holdTo&&h.mode===`guided`&&h.at<L.holdTo)){L.decided=!0;let e=Math.min(1,(D.split?4:1)*(V.a+V.b)),t=h.mode===`guided`&&!!L.staged;if(de=e,(T.place===`slits`||T.place===`slit`||T.place===`hill`)&&(L.back||!t&&Math.random()>=e)){if(T.place!==`hill`){let e=Math.max(0,Math.floor((D.WALL_X-14)/8)),t=Math.floor(D.WALL_X/8),r=new Float32Array(D.BY);for(let n=0;n<D.BY;n++)for(let i=e;i<=t;i++)r[n]+=V.blocks[n*D.BX+i];let i=bt(r),a=i>=0?(i+Math.random())*8:u/2,o=O.cellToWorld(D.WALL_X-3,a);Ee={pos:[o[0],.3,o[2]],t:n}}G={t:n,by:T.place===`hill`?`hill`:`wall`},K=T.place===`hill`?`sentback`:`caught`,fe++,Re(T.place===`hill`?`sent back`:`caught`),D.clear(),L=null,R=n+(wt()?.3:1.4)}else if(e>1e-6&&T.place!==`open`){K=`through`;let e=V.a+V.b;D.keep(3,1/Math.sqrt(e)),V.a/=e,V.b/=e,L.caught=0,L.u=L.staged?.5:Math.random(),Re(`through`)}if(L&&D.split&&T.lamp>0&&Math.random()<T.lamp&&V.a+V.b>1e-5){let e=Math.random()<V.a/(V.a+V.b)?1:2;D.keep(e,1/Math.sqrt(e===1?V.a:V.b)),ce=h.clock+.12;let t=u/2+(e===1?1:-1)*(T.slitSep*d)/2,r=O.cellToWorld(D.WALL_X,t);U={pos:[r[0],.18,r[2]],t:n},L.caught=0,L.u=L.staged?.5:Math.random(),Re(`seen at slit ${e===1?`A`:`B`}`)}}if(L&&T.air>0&&V&&Math.random()<T.air*1.4*t){let e=bt(V.blocks);e>=0&&St((e%D.BX+Math.random())*8,(Math.floor(e/D.BX)+Math.random())*8)}if(L&&a&&B>0){let e=0;for(let t=0;t<u;t++)e+=a[t];e*=B;for(let e=0;e<u;e++)oe[Math.min(63,Math.floor(e/u*be))]+=a[e]*B,L.arrived[e]+=a[e]*B;if(L.caught+=e,L.caught>=L.u){let e=bt(a);e>=0&&(xt(e),K=`landed`,Re(`landed`)),D.clear(),L=null,R=n+(h.mode===`guided`&&h.ch===1?99:wt()?.35:1.2)}else if(V&&V.total<.015&&D.steps-L.steps0>L.pass){if(K===`through`||T.place===`open`){let e=bt(L.arrived);e>=0&&(xt(e),K=`landed`,Re(`landed`))}D.clear(),L=null,R=n+.35}B=0}}}a&&(B=T.flood?0:B);let f=[],p=O.paneO[0]-.015;for(let e of ie){let t=n-e.t,r=Math.exp(-t/.3),i=Math.exp(-t/1.6),a=(e.row/(u-1)-.5)*O.W,o=e.h*O.PANE_H;f.push({pos:[p,o,a],col:[.6+4.5*r+1.5*i,.42+4.2*r+.8*i,.17+3.8*r+.24*i],size:e.one?.06+.18*r+.05*i:.026+.07*r+.02*i})}let m=Math.exp(-(n-ue)/.25);f.push({pos:O.gunTip,col:[.9+6*m,1.3+6*m,1.7+6*m],size:.14+.3*m,over:!0});let v=T.place===`slits`?T.lamp:0;if(v>.02&&f.push({pos:O.lampAt,col:[2.4*v,1.4*v,.5*v],size:.3,over:!0}),Ee&&n-Ee.t<1.6){let e=Math.exp(-(n-Ee.t)/.45);f.push({pos:Ee.pos,col:[2.4*e,3*e,3.6*e],size:.45})}if(U&&n-U.t<1.2){let e=Math.exp(-(n-U.t)/.25);f.push({pos:U.pos,col:[8*e,5*e,2*e],size:.9})}if(W&&W.found&&n-W.t<1.2){let e=Math.exp(-(n-W.t)/.25);f.push({pos:W.pos,col:[5*e,4.6*e,4*e],size:.7})}let x=null;if(H){x=new Float32Array(u);let e=1e-12;for(let t=0;t<u;t++){let n=H[t*4]+H[t*4+2],r=H[t*4+1]+H[t*4+3];x[t]=n*n+r*r,e=Math.max(e,x[t])}let t=Math.min(1,e/Math.max(se,1e-12)*4)/e;for(let e=0;e<u;e++)x[e]=Math.sqrt(x[e]*t)}let S=r.clientWidth/Math.max(1,r.clientHeight);{let e=c(`sim-lcd`).getBoundingClientRect(),n=r.getBoundingClientRect(),i=J.lcdUp()?Math.max(0,n.bottom-e.top)/Math.max(1,n.height):.06;y+=(i-y)*(1-Math.exp(-t/.35))}let C=g?Vt:Ut(),w=1-Math.exp(-t/2.2);for(let e=0;e<3;e++)$.centre[e]+=(C.centre[e]-$.centre[e])*w;$.k+=(C.k-$.k)*w,$.pitch+=(C.pitch-$.pitch)*w,$.yaw+=(C.yaw-$.yaw)*w,Bt+=(+(n-_>6&&!Q&&!jt)-Bt)*(1-Math.exp(-t/2.5));let ee=Bt*(.03*Math.sin(h.clock*2*Math.PI/53)+.012*Math.sin(h.clock*2*Math.PI/21)),te=Bt*.012*Math.sin(h.clock*2*Math.PI/37),j=h.dist*$.k*(1+y*1.2)*Math.max(1,(1.6/S)**.85);k.begin([0,0,0]);let N=M()*M()/2,P=O.draw({view:{yaw:h.yaw+$.yaw+ee,pitch:At(h.pitch+$.pitch+te),dist:j,fovY:h.fovY,aspect:S,shiftY:b(),centre:$.centre},norm:1/Math.sqrt(Math.max(se,1e-9)),waveH:.16,hillE:N,glow:2,mix:l,flux:x,sprites:f,time:n,px:k.size[1]/(2*Math.tan(h.fovY/2)),lamp:v,glint:Ee?[D.WALL_X>=0?O.cellToWorld(D.WALL_X,0)[0]-.1:0,Ee.pos[1],Ee.pos[2],n-Ee.t]:[0,-9,0,99],look:W?{cx:W.cx,cy:W.cy,age:n-W.t,found:W.found,r:10*d}:void 0});k.finish(1,.5),J.ball.draw({right:P.right,up:P.up,fwd:P.fwd,hole:P.fwd,tanY:P.tanHalf,tanX:P.tanHalf*S},!!jt,`star`),e-Lt>100&&(Wt(),Lt=e)},Lt=0,Rt=0,zt=0,Bt=0,Vt={centre:[.4,.2,0],k:1,pitch:0,yaw:0},Ht={slits:{centre:[-1,.25,0],k:.52,pitch:.05,yaw:.1},screen:{centre:[3,.7,0],k:.62,pitch:-.04,yaw:.16},hill:{centre:[-1.1,.2,0],k:.6,pitch:.04,yaw:.12}},$={centre:[...Vt.centre],k:1,pitch:0,yaw:0};function Ut(){if(h.mode!==`guided`)return Vt;let e=h.at-qe(h.ch);return h.ch===1&&e>9&&e<24?Ht.slits:h.ch===3&&e<22?Ht.screen:h.ch===4&&e>5&&e<18?Ht.slits:h.ch===7&&e<16?Ht.hill:Vt}function Wt(){if(h.mode===`launch`||!D)return;$e(`landed`,`Landed`,z.toLocaleString(`en-GB`)),$e(`fired`,`Fired`,re.toLocaleString(`en-GB`)),$e(`caught`,T.place===`hill`?`Sent back`:`Caught`,T.place===`open`?`—`:fe.toLocaleString(`en-GB`)),$e(`energy`,`Energy`,`${et(Math.round(F()),3)} eV`),$e(`speed`,`Speed`,`${et(Math.round(I()),5)} km/s`),$e(`lambda`,`Wavelength`,`${N().toFixed(3)} nm`),$e(`slits`,T.place===`slit`?`Slit width`:`Slits apart`,T.place===`slits`?`${(T.slitSep*ye).toFixed(2)} nm`:T.place===`slit`?`${(T.slitW*ye).toFixed(2)} nm`:`—`),$e(`lamp`,`Lamp`,T.lamp<.02?`off`:`${et(Math.round(T.lamp*100),3)}%`),$e(`air`,`Air`,T.air<.02?`none`:`${et(Math.round(T.air*100),3)}%`);let e=we;if(e<0){if(h.mode===`guided`&&T.flood)e=u/2+u*.2*Math.sin(2*Math.PI*h.clock/16);else{let t=0,n=be/2;for(let e=0;e<be;e++)oe[e]>t&&(t=oe[e],n=e);e=(n+.5)/be*u}}Te+=(e-Te)*(we>=0?.6:.12);let t=Math.max(0,Math.min(u-1,Math.round(Te)));H&&tt.draw([H[t*4],H[t*4+1]],[H[t*4+2],H[t*4+3]],D.split),nt.draw(ae,oe,z,t/(u-1));let n=mt(),r=pt(e=>pe[e]);if(J.view===`arrows`&&H){let e=H[t*4],n=H[t*4+1],r=H[t*4+2],i=H[t*4+3],a=Math.hypot(e,n),o=Math.hypot(r,i),s=(T.flood||!!L)&&a+o>.03*Ce;lt.set(`turn`,s&&D.split?`${Math.round(Math.abs(Math.atan2(e*i-n*r,e*r+n*i))*180/Math.PI)}°`:`—`),lt.set(`both`,s&&D.split?`${Math.round(100*Math.hypot(e+r,n+i)/(a+o))}%`:`—`),it.draw()}if(J.view===`screen`){let e=(D.SCREEN_X-D.WALL_X)*ye/d,t=T.place===`slits`?N()*e/(T.slitSep*ye):0;ut.set(`landed`,z.toLocaleString(`en-GB`)),ut.set(`apart`,t?`${t.toFixed(2)} nm`:`—`);let i=T.place===`slits`?(1-n)*r:0;ut.set(`strength`,T.place===`slits`?`${Math.round(i*100)}%${ft(i)}`:`—`)}if(J.view===`which`&&(at.draw(pe,xe,n),dt.set(`known`,T.place===`slits`?`${Math.round(n*100)}%${ft(n)}`:`—`),dt.set(`stripes`,T.place===`slits`?`${Math.round((1-n)*r*100)}%${ft((1-n)*r)}`:`—`)),J.view===`where`){let e=ht();ot.draw(e.parts,e.note)}J.view===`side`&&Qe(ct,T.place===`slits`?`Side on, along slit A`:`Side on, down the middle`),Y.forEach(e=>e.lock(h.mode===`guided`)),Qe(We,h.mode===`guided`?`Auto settings`:`Settings`),c(`wt-levers`).classList.toggle(`is-auto`,h.mode===`guided`),Y[0].actual(T.energy),Y[1].actual(T.lamp),Y[2].actual(T.air);let i=h.mode===`guided`?h.at-qe(h.ch):0,a=h.mode===`guided`?_e(h.ch,i):ve({flood:T.flood,place:T.place,lamp:T.lamp,air:T.air,landed:z});G&&q()-G.t<(wt()?.6:1.8)&&(a=G.by===`wall`?{kind:`flash`,line:`CAUGHT BY THE WALL`,detail:`FOUND AT THE WALL, SO IT ISN’T ANYWHERE ELSE`}:{kind:`flash`,line:`SENT BACK BY THE HILL`,detail:`THIS TIME, NONE OF IT GOT THROUGH`}),J.say(a),Ke.set(h.mode===`guided`?h.ch:-1,h.mode===`guided`?h.at/Je:1)}J.launch([{label:`Schrödinger solver compiled`,min:450,run:()=>{if(E=f(r),!E)throw Error(`no WebGL 2 with float pictures`);D=me(E,i,u),O=le(E,D),k=p(E,r,{maxScale:1,knee:1.1,streak:{gain:.55,knee:6},grain:.022}),_t(),A=requestAnimationFrame(It)}},{label:`Tank filled`,done:`WITH NOTHING`,min:400},{label:`Electron gun`,done:`PRIMED`,min:380},{label:`Slits cut`,done:`0.36 nm APART`,min:380},{label:`Two slits`,done:`SET`,amber:!0,min:420},{label:`Planck’s constant`,done:`REAL SIZE`,min:360},{label:`Lamp`,done:`DIMMED`,min:300},{label:`Cat`,done:`NOT INCLUDED`,amber:!0,min:360},{label:`Doughnuts`,done:`KEPT OUT OF THE TANK`,min:330}],()=>{Tt()}),new URLSearchParams(location.search).has(`debug`)&&(window.__wt={chapter:e=>{h.mode!==`guided`&&Tt(),Et(e)},get state(){return{mode:h.mode,ch:h.ch,at:h.at,fired:re,landed:z,peak:se,total:V?.total,fps:k?.fps,scale:k?.scale,steps:D?.steps,through:de,el:!!L}},fire:()=>Z(),flood:yt,place:X,rebuild:()=>{_t(),D?.clear(),L=null},cfg:T,view:h,pause:()=>{h.playing=!1,J.setPlay()},events:Le,seek:e=>{let t=0;for(;t<ge.length-1&&e>=qe(t+1);)t++;Et(t),h.at=e},get narration(){let e=je.audio;return e?{at:e.currentTime,run:h.at,paused:e.paused,ready:e.readyState,duration:e.duration,view:J.view,own:Fe,ended:Ae}:null}}),window.addEventListener(`pagehide`,()=>{cancelAnimationFrame(A),k?.destroy()})}xe();