import{S as e,b as t,n,p as r,r as i,t as a,w as o,x as s,y as c}from"./narration.Crm9S85h.js";import{c as l,i as u,o as d,r as f,s as p}from"./post.lhgbitLo.js";import{n as m,t as h}from"./sky.Cy6Kxnap.js";import{l as g}from"./views.C-9pmGw3.js";import{a as _}from"./figs.Du327Gvd.js";import{C as v,E as y,F as b,_ as ee,a as x,f as S,g as te,h as C,j as ne,l as w,m as T,u as E,w as re,x as ie}from"./shared-a1.BEDQzQy6.js";var ae=1e9*C,D=3085677581491367e7,O=299792458,k=x*1e3/D,oe=k*Math.sqrt(w),se=e=>Math.sqrt(E/(e*e*e)+w),A=null;function ce(){if(A)return A;let e=[{la:0,t:T}],t=3e3;for(let n=1;n<=t;n++){let r=60*n/t,i=e[n-1],a=r-i.la,o=e=>1/(k*se(Math.exp(e)));e.push({la:r,t:i.t+.5*a*(o(i.la)+o(r))})}return A=e,e}function le(e){if(e<=0x609bb2ab9e86800){let t=b(e);return{la:Math.log(t.a),T:t.T}}let t=ce(),n=t[t.length-1];if(e>=n.t){let t=n.la+oe*(e-n.t);return{la:t,T:S*Math.exp(-t)}}let r=0,i=t.length-1;for(;i-r>1;){let n=r+i>>1;t[n].t<e?r=n:i=n}let a=t[r],o=t[i],s=(e-a.t)/(o.t-a.t),c=a.la+s*(o.la-a.la);return{la:c,T:S*Math.exp(-c)}}var j=null;function ue(e){if(!j){let e=[],t=e=>{let t=0;for(let n=1;n<=600;n++){let r=e*(n-.5)/600;t+=1/(r*se(r))**3}return 2.5*E*se(e)*t*(e/600)},n=t(1);for(let r=0;r<=400;r++){let i=-12+18*r/400;e.push({la:i,D:t(Math.exp(i))/n})}j=e}let t=j;if(e<=t[0].la)return Math.exp(e)/Math.exp(t[0].la)*t[0].D;if(e>=t[t.length-1].la)return t[t.length-1].D;let n=(e-t[0].la)/(t[t.length-1].la-t[0].la)*(t.length-1),r=Math.floor(n);return t[r].D+(n-r)*(t[r+1].D-t[r].D)}function de(e){let t=Math.max(e+12,14),n=0;for(let r=0;r<400;r++){let i=e+(t-e)*(r+.5)/400,a=Math.exp(i);n+=1/(a*k*se(a))}return n*(t-e)/400*O/D}var M=1e-6,N=1e100*C,P=Math.log10(M),F=Math.log10(T),I=Math.log10(0x5af3107a4000*C),fe=Math.log10(N);function pe(e){return e<=.62?10**(P+e/.62*(F-P)):e<=.85?10**(F+(e-.62)/.23*(I-F)):10**(I+(e-.85)/.15*(fe-I))}function L(e){let t=Math.log10(Math.max(e,M));return t<=F?(t-P)/(F-P)*.62:t<=I?.62+(t-F)/(I-F)*.23:.85+(t-I)/(fe-I)*.15}function me(e){let{la:t}=le(e),n=Math.exp(t),r=91e-6/n**4,i=E/n**3,a=w,o=r+i+a;return{radiation:r/o,matter:i/o,dark:a/o}}function he(e){let t=e/C;return e<.001?{n:String(Number((e*1e6).toPrecision(2))),unit:e*1e6<1.5?`millionth of a second`:`millionths of a second`}:e<.1?{n:String(Number((e*1e3).toPrecision(2))),unit:e*1e3<1.5?`thousandth of a second`:`thousandths of a second`}:e<60?{n:e<10?e.toFixed(1):String(Math.round(e)),unit:`seconds`}:e<3600?{n:String(Math.round(e/60)),unit:`minutes`}:e<259200?{n:String(Math.round(e/3600)),unit:`hours`}:t<1?{n:String(Math.round(e/86400)),unit:`days`}:t<999500?{n:Math.round(t).toLocaleString(`en-GB`),unit:`years`}:t<9995e5?{n:String(Number((t/1e6).toPrecision(3))),unit:`million years`}:t<9995e8?{n:String(Number((t/1e9).toPrecision(3))),unit:`billion years`}:t<9995e11?{n:String(Number((t/0xe8d4a51000).toPrecision(3))),unit:`trillion years`}:{n:`10${(e=>String(e).split(``).map(e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[+e]).join(``))(Math.round(Math.log10(t)))}`,unit:`years`}}var ge=91e-6,_e=e=>k*Math.sqrt(ge/(e*e*e*e)+E/(e*e*e)+w);function ve(e){let t=ge/e**4,n=E/e**3,r=t+n+w;return(t+n/2)/r<w/r}var ye=null;function be(e){if(!ye){let e=[],t=6e3,n=O/D*Math.exp(-30)/(Math.exp(-30)*Math.exp(-30)*_e(Math.exp(-30)));e.push({la:-30,chi:n});for(let r=1;r<=t;r++){let i=-30+90*r/t,a=e[r-1].la,o=i-a,s=e=>{let t=Math.exp(e);return 1/(t*_e(t))};n+=.5*o*(s(a)+s(i))*O/D,e.push({la:i,chi:n})}ye=e}let t=ye;if(e<=t[0].la)return t[0].chi*Math.exp(e-t[0].la);if(e>=t[t.length-1].la)return t[t.length-1].chi;let n=(e-t[0].la)/(t[t.length-1].la-t[0].la)*(t.length-1),r=Math.floor(n);return t[r].chi+(n-r)*(t[r+1].chi-t[r].chi)}var xe=3261600,R=`143, 216, 238`,z=`242, 180, 90`,B=`230, 238, 245`;function V(e){let t=e.getContext(`2d`);return()=>{let n=e.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,2);if(n.width<20||n.height<20)return null;let i=Math.round(n.width*r),a=Math.round(n.height*r);return(e.width!==i||e.height!==a)&&(e.width=i,e.height=a),t.setTransform(r,0,0,r,0,0),t.clearRect(0,0,n.width,n.height),{g:t,w:n.width,h:n.height}}}function Se(e,t=1){if(e<380||e>720)return`rgba(${R}, ${t})`;let n=[[380,[140,80,255]],[450,[70,110,255]],[490,[60,210,230]],[530,[90,230,110]],[580,[240,230,80]],[620,[255,150,60]],[720,[230,50,50]]];for(let r=1;r<n.length;r++)if(e<=n[r][0]){let[i,a]=n[r-1],[o,s]=n[r],c=(e-i)/(o-i);return`rgba(${a.map((e,t)=>Math.round(e+(s[t]-e)*c)).join(`, `)}, ${t})`}return`rgba(230, 50, 50, ${t})`}function H(e,t,n,r){let i=`30 BILLION YR`,a=e.measureText(i).width;for(let i of[0,10,20]){let o=e.measureText(String(i)).width;t(i)+o/2+6<n-a&&U(e,String(i),t(i),r+10,`rgba(${R}, 0.55)`,`center`)}U(e,i,n,r+10,`rgba(${R}, 0.55)`,`right`)}var U=(e,t,n,r,i=`rgba(${R}, 0.6)`,a=`left`)=>{e.fillStyle=i,e.textAlign=a,e.fillText(t,n,r)};function Ce(e){let t=V(e);return{draw(n){let r=t();if(!r)return;let{g:a,w:o,h:s}=r;a.font=i(a.canvas,`fig`),a.textBaseline=`middle`;let c=n.la<=0,l=Math.abs(n.la)/Math.LN10,u=10**Math.min(l,300),d=Math.min(12,u),f=o-8,p=s*.52,m=Math.min(s*.2,26),h=Math.max(6,(f-8)/46),g=-n.time*5;a.lineWidth=1.6;let _=8,v=p;for(let e=8;e<=f;e+=1){let t=(e-8)/(f-8),n=h*d**t;g+=2*Math.PI/n;let r=p+Math.sin(g)*m,i=430*d**(t*.5);a.strokeStyle=Se(Math.min(700,i),.95),a.beginPath(),a.moveTo(_,v),a.lineTo(e,r),a.stroke(),_=e,v=r}U(a,n.fog?`THEN`:c?`SET OFF THEN`:`SET OFF TODAY`,8,12),U(a,n.fog?`TODAY`:c?`REACHES US TODAY`:`ARRIVES THEN`,f,12,`rgba(${R}, 0.6)`,`right`);let y=l>=1e3?`A 1 AND 10${(e=>String(e).replace(/\d/g,e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[+e]))(Math.round(Math.log10(l)))} NOUGHTS`:l>=6?l>=21?`10${String(Math.round(l)).replace(/\d/g,e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[+e])}`:`${Number((u/10**(3*Math.floor(l/3))).toPrecision(2))} ${[``,`THOUSAND`,`MILLION`,`BILLION`,`TRILLION`,`QUADRILLION`,`QUINTILLION`][Math.floor(l/3)]}`:u>=1e3?Math.round(u).toLocaleString(`en-GB`):u.toPrecision(3),b=u<1.005?`NOT STRETCHED YET`:n.fog?`SPACE GROWS ${y} TIMES BETWEEN THEN AND TODAY`:`EACH WAVE ${y} TIMES LONGER`;U(a,b,o/2,s-10,`rgb(${z})`,`center`),u>12&&U(a,`(DRAWN UP TO TWELVE TIMES)`,o/2,s-24,`rgba(${R}, 0.45)`,`center`),e.setAttribute(`aria-label`,`Light ${c?`set off then and reaching us today`:`set off today and arriving then`}: ${b.toLowerCase()}`)}}}function we(e,t,n,r){let a=V(e),o=Array.from({length:241},(e,n)=>{let r=30*n/240;return{t:r,a:t(Math.max(r,1e-4))}}),s=o[o.length-1].a*1.05;return{draw(c){let l=a();if(!l)return;let{g:u,w:d,h:f}=l;u.font=i(u.canvas,`fig`),u.textBaseline=`middle`;let p=d-8,m=f-20,h=e=>30+e/30*(p-30),g=e=>m-e/s*(m-8);u.fillStyle=`rgba(${R}, 0.05)`,u.fillRect(30,8,h(n)-30,m-8),u.fillStyle=`rgba(178, 140, 255, 0.07)`,u.fillRect(h(n),8,p-h(n),m-8),U(u,`SLOWING DOWN`,36,18),U(u,`SPEEDING UP`,p-6,m-10,`rgba(178, 140, 255, 0.85)`,`right`),u.strokeStyle=`rgba(${R}, 0.3)`,u.strokeRect(30.5,8.5,p-30-1,m-8-1),H(u,h,p,m);for(let e of[1,2])u.fillStyle=`rgba(${R}, 0.55)`,u.textAlign=`right`,u.fillText(String(e),25,g(e)),u.fillRect(30,g(e),3,1);u.strokeStyle=`rgba(${R}, 0.35)`,u.setLineDash([2,3]),u.beginPath(),u.moveTo(h(r),8),u.lineTo(h(r),m),u.stroke(),u.setLineDash([]),U(u,`TODAY`,h(r)+4,m-26),u.strokeStyle=`rgba(${B}, 0.85)`,u.lineWidth=1.6,u.beginPath(),o.forEach((e,t)=>t?u.lineTo(h(e.t),g(e.a)):u.moveTo(h(e.t),g(e.a))),u.stroke();let _=Math.min(30,c.tGyr),v=t(Math.max(_,1e-4));u.fillStyle=`rgb(${z})`,u.shadowColor=`rgb(${z})`,u.shadowBlur=8,u.beginPath(),u.arc(h(_),g(Math.min(v,s)),4.5,0,7),u.fill(),u.shadowBlur=0,c.tGyr>30&&U(u,`AND ON, FASTER AND FASTER →`,p-6,34,`rgb(${z})`,`right`),e.setAttribute(`aria-label`,`The universe's size against time: ${c.tGyr<n?`slowing down`:`speeding up`}`)}}}function Te(e){let t=V(e),n=7,r=()=>(n=n*16807%2147483647)/2147483647,a=Array.from({length:520},()=>{let e=Math.sqrt(r()),t=r()*6.283;return{x:e*Math.cos(t),y:e*Math.sin(t),s:.6+r()*1.1}});return{draw(n){let r=t();if(!r)return;let{g:o,w:s,h:c}=r;o.font=i(o.canvas,`fig`),o.textBaseline=`middle`;let l=Math.min(c*.46,s*.3),u=l+10,d=c/2,f=e=>e/64*l;o.fillStyle=`rgba(4, 10, 16, 1)`,o.beginPath(),o.arc(u,d,l,0,7),o.fill();for(let e of a){let t=Math.hypot(e.x,e.y)*64,r=t<=n.see,i=t<=n.reach;o.fillStyle=r&&i?`rgba(${B}, 0.95)`:r?`rgba(${R}, 0.35)`:`rgba(120, 130, 150, 0.12)`,o.beginPath(),o.arc(u+e.x*l,d+e.y*l,e.s*(r&&i?1.1:.9),0,7),o.fill()}o.fillStyle=`rgba(${B}, 1)`;for(let[e,t]of[[0,0],[2.2,-1.4],[-1.8,1.6],[1.2,2.2]])o.beginPath(),o.arc(u+e,d+t,1.3,0,7),o.fill();o.lineWidth=1.4,o.strokeStyle=`rgba(${R}, 0.8)`,o.beginPath(),o.arc(u,d,Math.min(l,f(n.see)),0,7),o.stroke(),o.strokeStyle=`rgb(${z})`,o.setLineDash([4,3]),o.beginPath(),o.arc(u,d,Math.max(1.5,Math.min(l,f(n.reach))),0,7),o.stroke(),o.setLineDash([]),o.strokeStyle=`rgba(${R}, 0.25)`,o.lineWidth=1,o.beginPath(),o.arc(u,d,l,0,7),o.stroke();let p=u+l+16,m=Math.max(20,s-p-26),h=(e,t,n,r)=>{o.fillStyle=r,o.textAlign=`left`,o.fillText(e,t,n,m)},g=(e,t,n,r)=>{o.strokeStyle=t,o.lineWidth=1.4,o.setLineDash(n?[4,3]:[]),o.beginPath(),o.moveTo(p,e),o.lineTo(p+16,e),o.stroke(),o.setLineDash([]),h(r,p+22,e,`rgba(${B}, 0.85)`)};g(d-l*.6,`rgba(${R}, 0.8)`,!1,`WHAT WE CAN SEE`),g(d-l*.6+18,`rgb(${z})`,!0,`WHAT WE COULD EVER REACH`);let _=(e,t,n)=>{o.fillStyle=t,o.beginPath(),o.arc(p+8,e,2.2,0,7),o.fill(),h(n,p+22,e,`rgba(${R}, 0.7)`)};_(d-l*.6+46,`rgba(${B}, 0.95)`,`WITHIN REACH`),_(d-l*.6+62,`rgba(${R}, 0.45)`,`SEEN, OUT OF REACH`),_(d-l*.6+78,`rgba(120, 130, 150, 0.4)`,`NOT SEEN YET`),h(`DISTANCES AS THEY ARE TODAY`,p,d+l*.9,`rgba(${R}, 0.4)`),e.setAttribute(`aria-label`,`A map from above: we can see out to ${Math.round(n.see)} billion light-years as distances are today, and could ever reach ${n.reach.toPrecision(2)}`)}}}function Ee(e){let t=V(e),n=[[-9,-8,``],[-8,Math.log10(38e-8),`ULTRAVIOLET`],[Math.log10(38e-8),Math.log10(7e-7),``],[Math.log10(7e-7),-3,`INFRARED`],[-3,0,`MICROWAVES`],[0,1,`RADIO`]];return{draw(r){let a=t();if(!a)return;let{g:o,w:s,h:c}=a;o.font=i(o.canvas,`fig`),o.textBaseline=`middle`;let l=s-6,u=c-40,d=e=>6+(e- -9)/10*(l-6);n.forEach(([e,t,n],r)=>{if(!n&&r===0){o.fillStyle=`rgba(${R}, 0.05)`,o.fillRect(d(e),u+2,d(t)-d(e),8);return}if(n)o.fillStyle=`rgba(${R}, ${r%2?.1:.05})`,o.fillRect(d(e),u+2,d(t)-d(e),8);else for(let n=d(e);n<d(t);n+=1){let r=380+(n-d(e))/(d(t)-d(e))*320;o.fillStyle=Se(r,.55),o.fillRect(n,u+2,1.2,8)}n&&d(t)-d(e)>o.measureText(n).width+4&&U(o,n,(d(e)+d(t))/2,u+20,`rgba(${R}, 0.55)`,`center`)}),U(o,`VISIBLE`,(d(n[2][0])+d(n[2][1]))/2,u+31,`rgba(${B}, 0.7)`,`center`);let f=.0028978/Math.max(r.T,1e-300),p=Math.log10(f),m=e=>{let t=10**(e-p)/4.965;return t>50||t<.001?0:1/(t**4*(Math.exp(1/t)-1))},h=m(p);if(p>-10&&p<2){o.beginPath();let e=!1;for(let t=6;t<=l;t+=1){let n=u-m(-9+(t-6)/(l-6)*10)/h*(u-22);e?o.lineTo(t,n):(o.moveTo(t,n),e=!0)}o.lineTo(l,u),o.lineTo(6,u),o.closePath();let t=o.createLinearGradient(0,22,0,u);t.addColorStop(0,`rgba(${z}, 0.55)`),t.addColorStop(1,`rgba(${z}, 0.05)`),o.fillStyle=t,o.fill(),o.strokeStyle=`rgb(${z})`,o.lineWidth=1.4,o.stroke()}let g=d(p);g>6&&g<l&&(o.strokeStyle=`rgba(${B}, 0.5)`,o.setLineDash([2,3]),o.beginPath(),o.moveTo(g,22),o.lineTo(g,u),o.stroke(),o.setLineDash([])),r.free||U(o,`THE FOG’S OWN GLOW: NOT FREE YET`,6,9,`rgba(${B}, 0.8)`),g<=6&&U(o,`← SHORTER STILL`,6,32,`rgb(${z})`),g>=l&&U(o,`LONGER STILL →`,l,32,`rgb(${z})`,`right`),e.setAttribute(`aria-label`,`The light's colour: its power at each wavelength, peaking at ${f.toExponential(1)} metres`)}}}function De(e,t){let n=V(e),r=null,a=new Image;return a.onload=()=>{let e=a.naturalWidth,t=a.naturalHeight,n=document.createElement(`canvas`),i=Math.round(18/Math.cos(50*Math.PI/180)/360*e),o=Math.round(10/180*t),s=Math.round((.5- -60/360)*e-i/2),c=Math.round((.5-50/180)*t-o/2);n.width=i,n.height=o;let l=n.getContext(`2d`);l.drawImage(a,s,c,i,o,0,0,i,o);let u=l.getImageData(0,0,i,o);for(let e=0;e<u.data.length;e+=4){let t=u.data[e]/255*2-1,n=Math.max(-1,Math.min(1,t*1.6)),r=n<0?[Math.round(255*(1+n*.85)),Math.round(255*(1+n*.55)),255]:[255,Math.round(255*(1-n*.55)),Math.round(255*(1-n*.9))];u.data[e]=r[0],u.data[e+1]=r[1],u.data[e+2]=r[2],u.data[e+3]=255}l.putImageData(u,0,0),r=n},a.src=t,{draw(t){let a=n();if(!a)return;let{g:o,w:s,h:c}=a;o.font=i(o.canvas,`fig`),o.textBaseline=`middle`;let l=c-24,u=l-18,d=Math.min(s-12,u*18/10),f=(s-d)/2,p=d/18;r?(o.imageSmoothingEnabled=!0,o.globalAlpha=.9,o.drawImage(r,f,18,d,u),o.globalAlpha=1):(o.fillStyle=`rgba(${R}, 0.08)`,o.fillRect(f,18,d,u)),o.strokeStyle=`rgba(${R}, 0.3)`,o.strokeRect(f+.5,18.5,d-1,u-1);let m=f+d-p*1.2,h=18+p*1.1;o.fillStyle=`rgba(236, 236, 228, 0.92)`,o.strokeStyle=`rgba(20, 20, 20, 0.6)`,o.beginPath(),o.arc(m,h,p*.26,0,7),o.fill(),o.stroke(),U(o,`THE MOON`,m-p*.4,h,`rgba(10, 14, 20, 0.95)`,`right`);let g=f+p*.6,_=l-p*.6;o.strokeStyle=`rgba(10, 14, 20, 0.95)`,o.lineWidth=2,o.beginPath(),o.moveTo(g,_),o.lineTo(g+p,_),o.moveTo(g,_-4),o.lineTo(g,_+4),o.moveTo(g+p,_-4),o.lineTo(g+p,_+4),o.stroke(),o.lineWidth=1,U(o,`A DEGREE`,g+p+6,_,`rgba(10, 14, 20, 0.95)`),U(o,t.free?`AS WE SEE THEM TODAY`:`STILL RINGING IN THE FOG`,f,8,`rgba(${B}, 0.8)`),U(o,`A DEGREE ACROSS: SPACE IS FLAT`,s/2,c-9,`rgb(${z})`,`center`),e.setAttribute(`aria-label`,`Spots in the oldest light, from Planck’s map, beside the full Moon: the commonest about a degree across`)}}}var W=[[38e4,`The fog clears`],[1e8,`The first stars`],[919e7,`The Sun and Earth`],[959e7,`Life`],[1139e7,`Oxygen in the air`],[1319e7,`The first animals`],[13721e6,`The dinosaurs’ end`],[137867e5,`Our species`]];function Oe(e,t,n){let r=V(e),a=[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],o=[31,28,31,30,31,30,31,31,30,31,30,31];return{draw(s){let c=r();if(!c)return;let{g:l,w:u,h:d}=c;l.font=i(l.canvas,`fig`),l.textBaseline=`middle`;let f=Math.min(d*.42,u*.2),p=f+14,m=d/2,h=Math.min(1,s.years/t),g=e=>-Math.PI/2+e*Math.PI*2,_=0;for(let e=0;e<12;e++){let t=_/365,n=(_+o[e])/365;l.strokeStyle=`rgba(${R}, ${e%2?.18:.3})`,l.lineWidth=8,l.beginPath(),l.arc(p,m,f,g(t)+.01,g(n)-.01),l.stroke();let r=g((t+n)/2);U(l,a[e],p+Math.cos(r)*(f+13),m+Math.sin(r)*(f+13),`rgba(${R}, 0.55)`,`center`),_+=o[e]}l.strokeStyle=`rgba(${z}, 0.7)`,l.lineWidth=8,l.beginPath(),l.arc(p,m,f,g(0),g(h)),l.stroke();for(let[e]of W){let n=g(e/t);l.fillStyle=s.years>=e?`rgba(${B}, 0.95)`:`rgba(${R}, 0.35)`,l.beginPath(),l.arc(p+Math.cos(n)*(f-12),m+Math.sin(n)*(f-12),2.2,0,7),l.fill()}l.strokeStyle=`rgb(${z})`,l.lineWidth=2,l.beginPath(),l.moveTo(p,m),l.lineTo(p+Math.cos(g(h))*(f-4),m+Math.sin(g(h))*(f-4)),l.stroke(),l.fillStyle=`rgb(${z})`,l.beginPath(),l.arc(p,m,3,0,7),l.fill(),s.years>t*1.0001&&U(l,`TODAY IS MIDNIGHT`,p,m+f*.45,`rgba(${R}, 0.6)`,`center`);let v=p+f+30,y=Math.min(17,(d-10)/W.length),b=Math.max(...W.map(([e])=>l.measureText(n(e).toUpperCase()).width));W.forEach(([e,t],r)=>{let i=8+y*(r+.5),a=s.years>=e;l.fillStyle=a?`rgba(${B}, 0.88)`:`rgba(${R}, 0.35)`,l.textAlign=`left`,l.fillText(t.toUpperCase(),v,i,Math.max(20,u-6-b-10-v)),U(l,n(e).toUpperCase(),u-6,i,a?`rgba(${z}, 0.95)`:`rgba(${R}, 0.35)`,`right`)}),e.setAttribute(`aria-label`,`The whole history as one year: now ${s.years>=t?`past midnight on 31 December`:n(s.years)}`)}}}function ke(e,t,n){let r=V(e),a=Array.from({length:301},(e,n)=>{let r=30*n/300;return{t:r,r:t(r)}}),o=Math.max(...a.map(e=>e.r))*1.12;return{draw(s){let c=r();if(!c)return;let{g:l,w:u,h:d}=c;l.font=i(l.canvas,`fig`),l.textBaseline=`middle`;let f=u-8,p=d-20,m=e=>30+e/30*(f-30),h=e=>p-e/o*(p-8);l.fillStyle=`rgba(4, 10, 16, 1)`,l.fillRect(30,8,Math.max(1.5,m(.1)-30),p-8),l.strokeStyle=`rgba(${R}, 0.3)`,l.strokeRect(30.5,8.5,f-30-1,p-8-1),H(l,m,f,p);for(let e of[1,5,10])h(e)<8||(l.fillStyle=`rgba(${R}, 0.55)`,l.textAlign=`right`,l.fillText(`${e}×`,26,h(e)),l.fillRect(30,h(e),3,1));l.beginPath(),a.forEach((e,t)=>t?l.lineTo(m(e.t),h(e.r)):l.moveTo(m(e.t),h(e.r))),l.lineTo(m(30),p),l.lineTo(m(0),p),l.closePath();let g=l.createLinearGradient(0,8,0,p);g.addColorStop(0,`rgba(150, 190, 255, 0.5)`),g.addColorStop(1,`rgba(150, 190, 255, 0.04)`),l.fillStyle=g,l.fill(),l.strokeStyle=`rgba(170, 205, 255, 0.95)`,l.lineWidth=1.5,l.beginPath(),a.forEach((e,t)=>t?l.lineTo(m(e.t),h(e.r)):l.moveTo(m(e.t),h(e.r))),l.stroke(),l.strokeStyle=`rgba(${R}, 0.35)`,l.setLineDash([2,3]),l.beginPath(),l.moveTo(m(n),8),l.lineTo(m(n),p),l.stroke(),l.setLineDash([]),U(l,`TODAY`,m(n)+4,18),U(l,`BUSIEST`,m(3.3),h(t(3.3))-9,`rgba(${B}, 0.7)`,`center`);let _=Math.min(30,s.tGyr);l.fillStyle=`rgb(${z})`,l.shadowColor=`rgb(${z})`,l.shadowBlur=8,l.beginPath(),l.arc(m(_),h(t(_)),4.5,0,7),l.fill(),l.shadowBlur=0,s.tGyr>30&&U(l,`AND ON, FEWER AND FEWER →`,f-4,32,`rgb(${z})`,`right`),e.setAttribute(`aria-label`,`How fast stars are born, against today’s, over the universe’s history`)}}}var G=[{name:`Blue giants`,T:35e3,life:5e6,lifeWords:`5 million yr`},{name:`Blue-white`,T:15e3,life:1e8,lifeWords:`100 million yr`},{name:`White`,T:9e3,life:1e9,lifeWords:`a billion yr`},{name:`Yellow-white`,T:6800,life:35e8,lifeWords:`3.5 billion yr`},{name:`Like the Sun`,T:5800,life:1e10,lifeWords:`10 billion yr`},{name:`Orange`,T:4500,life:3e10,lifeWords:`30 billion yr`},{name:`Red dwarfs`,T:3200,life:0x9184e72a000,lifeWords:`10 trillion yr`}],Ae=(e,t)=>t>=1e8&&t<9e13+e.life;function je(e,t){let n=V(e);return{draw(r){let a=n();if(!a)return;let{g:o,w:s,h:c}=a;o.font=i(o.canvas,`fig`),o.textBaseline=`middle`;let l=Math.min(22,(c-6)/G.length);G.forEach((e,n)=>{let i=4+l*(n+.5),a=Ae(e,r.years),c=Math.max(2.5,Math.min(8,2+Math.log10(e.T/2e3)*4));o.fillStyle=a?t(e.T):`rgba(80, 90, 110, 0.35)`,a&&(o.shadowColor=t(e.T),o.shadowBlur=8),o.beginPath(),o.arc(12,i,c,0,7),o.fill(),o.shadowBlur=0;let u=o.measureText(e.lifeWords.toUpperCase()).width;o.fillStyle=a?`rgba(${B}, 0.88)`:`rgba(${R}, 0.3)`,o.textAlign=`left`,o.fillText(e.name.toUpperCase(),28,i,Math.max(20,s-4-u-10-28)),U(o,e.lifeWords.toUpperCase(),s-4,i,a?`rgba(${R}, 0.65)`:`rgba(${R}, 0.25)`,`right`)});let u=G.filter(e=>Ae(e,r.years)).length;e.setAttribute(`aria-label`,`Kinds of star still shining: ${u} of ${G.length}`)}}}var Me=`143, 216, 238`,Ne=`242, 180, 90`,Pe=`178, 140, 255`,Fe=`255, 138, 128`,K=`230, 238, 245`;function q(e){let t=e.getContext(`2d`);return()=>{let n=e.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,2);if(n.width<20||n.height<20)return null;let i=Math.round(n.width*r),a=Math.round(n.height*r);return(e.width!==i||e.height!==a)&&(e.width=i,e.height=a),t.setTransform(r,0,0,r,0,0),t.clearRect(0,0,n.width,n.height),{g:t,w:n.width,h:n.height}}}var J=e=>e>=.995?`100%`:e>=.1?`${Math.round(e*100)}%`:e>=.01?`${(e*100).toFixed(1)}%`:e>=1e-4?`${(e*100).toFixed(2)}%`:e>0?`<0.01%`:`0%`;function Ie(e){let t=q(e);return{draw(n){let r=t();if(!r)return;let{g:a,w:o,h:s}=r,c=Math.min(o*.26,s*.27),l=o/2,u=c+10,d=[[n.radiation,Ne,`Light`],[n.matter,Me,`Matter`],[n.dark,Pe,`Dark energy`]],f=-Math.PI/2;a.lineWidth=Math.max(6,c*.32);for(let[e,t]of d){if(e<1e-4)continue;let n=f+e*Math.PI*2;a.strokeStyle=`rgb(${t})`,a.shadowColor=`rgba(${t}, 0.8)`,a.shadowBlur=8,a.beginPath(),a.arc(l,u,c,f,n),a.stroke(),f=n}a.shadowBlur=0,a.font=i(a.canvas,`fig`),a.textBaseline=`middle`,a.textAlign=`left`;let p=u+c+a.lineWidth/2+12;d.forEach(([e,t,n],r)=>{let i=p+r*14;a.fillStyle=`rgb(${t})`,a.fillRect(4,i-4,8,8),a.fillStyle=`rgba(${K}, 0.9)`,a.textAlign=`left`,a.fillText(n.toUpperCase(),18,i),a.fillStyle=`rgba(${Me}, 0.8)`,a.textAlign=`right`,a.fillText(J(e),o-2,i)}),e.setAttribute(`aria-label`,`What fills the universe: light ${J(n.radiation)}, matter ${J(n.matter)}, dark energy ${J(n.dark)}`)}}}function Le(e){let t=q(e);return{draw(n){let r=t();if(!r)return;let{g:a,w:o,h:s}=r,c=n.before?[[`Quark soup`,1,K]]:[[`Hydrogen`,n.Xp,Me],[`Neutrons`,n.Xn,Fe],[`Deuterium`,n.Xd,Ne],[`Helium`,n.Y,Pe],[`Heavier`,n.Z,K]],l=Math.min(26,(s-6-6)/c.length),u=o-52;a.font=i(a.canvas,`fig`),a.textBaseline=`middle`,c.forEach(([e,t,n],r)=>{let i=6+l*(r+.5);a.fillStyle=`rgba(${Me}, 0.75)`,a.textAlign=`left`,a.fillText(e.toUpperCase(),0,i),a.fillStyle=`rgba(${Me}, 0.12)`,a.fillRect(92,i-4,u-92,8);let s=t<=0?0:Math.max(2,(u-92)*t);a.fillStyle=`rgb(${n})`,a.shadowColor=`rgba(${n}, 0.7)`,a.shadowBlur=6,a.fillRect(92,i-4,s,8),a.shadowBlur=0,a.fillStyle=`rgba(${K}, 0.9)`,a.textAlign=`right`,a.fillText(J(t),o,i)}),e.setAttribute(`aria-label`,n.before?`Before the first second: too hot for protons and neutrons to hold together`:`By weight: hydrogen ${J(n.Xp)}, helium ${J(n.Y)}, deuterium ${J(n.Xd)}, free neutrons ${J(n.Xn)}, heavier elements ${J(n.Z)}`)}}}var Y=`
vec3 bb(float T) {
  T = clamp(T, 800., 40000.);
  float t = T / 100.;
  vec3 c;
  c.r = t <= 66. ? 1. : clamp(1.2929 * pow(t - 60., -0.1332), 0., 1.);
  c.g = t <= 66. ? clamp(0.3900816 * log(t) - 0.6318414, 0., 1.) : clamp(1.1298909 * pow(t - 60., -0.0755148), 0., 1.);
  c.b = t >= 66. ? 1. : (t <= 19. ? 0. : clamp(0.5432068 * log(t - 10.) - 1.19625408, 0., 1.));
  c = pow(c, vec3(2.2));
  return c / max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
}
`,Re=`#version 300 es
precision highp float;
${Y}
in vec2 vUv;
out vec4 o;
uniform vec3 uRight, uUp, uFwd;
uniform float uTan, uAspect, uShift;
uniform mat3 uRot;      // world to galactic
uniform sampler2D uCmb;
uniform float uT, uGlow, uSpots, uShimmer, uTime;
uniform vec4 uHome;     // the merged galaxy's glow round us: strength, colour temperature, centre's latitude weight, 0
const float PI = 3.14159265;
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
// Planck's map in a direction (galactic), from -1 to 1.
float spotAt(vec3 g) {
  float l = atan(g.y, g.x), b = asin(clamp(g.z, -1., 1.));
  return texture(uCmb, vec2(0.5 - l / (2. * PI), 0.5 - b / PI)).r * 2. - 1.;
}
void main() {
  vec2 ndc = vUv * 2. - 1.;
  // (The fog alone on the windscreen, so drawn through a lens that keeps shapes, not lines: the spots stay round to the
  // edges instead of stretching out from the middle as a wide view's do.)
  vec2 pt = vec2(ndc.x * uTan * uAspect, (ndc.y - uShift) * uTan);
  float r = length(pt), th = 2. * atan(0.5 * r);
  vec3 d = r > 1e-6 ? cos(th) * uFwd + sin(th) * (uRight * pt.x + uUp * pt.y) / r : uFwd;
  vec3 g = normalize(uRot * d);
  float s = spotAt(g);
  // (Before the fog cleared, the spots were sound in the plasma, still ringing: a slow shimmer through them, the same
  // map turned another way and drifting.)
  float sh = 0.;
  if (uShimmer > 0.) { float a = uTime * 0.01, ca = cos(a), sa = sin(a); sh = uShimmer * spotAt(vec3(ca * g.z - sa * g.x, g.y, sa * g.z + ca * g.x).yxz); }
  float k = s * (1. - 0.5 * uShimmer) + sh;
  vec3 c = bb(uT * (1. + 0.1 * uSpots * k)) * uGlow * exp(0.85 * uSpots * k);
  // The merged galaxy round us, in the far future: a soft glow, brighter towards its middle.
  if (uHome.x > 0.) c += bb(uHome.y) * uHome.x * (0.12 + 2.5 * pow(max(g.x, 0.), 6.) + 0.5 * exp(-g.z * g.z * 10.));
  c += (hash12(gl_FragCoord.xy) - 0.5) * 0.0006;
  o = vec4(max(c, vec3(0.)), 1.);
}
`,ze=`#version 300 es
precision highp float;
${Y}
in vec4 aD;    // its displacement today (Mpc) and its neighbourhood's density today
in float aSeed;
uniform mat4 uVP;
uniform float uN, uBox, uD, uA, uLogY, uGain, uPx, uBoost, uEH, uDev;
out vec3 vCol;
out float vR, vSeed, vFlat;
void main() {
  gl_PointSize = 0.;
  gl_Position = vec4(2., 2., 2., 1.);
  vCol = vec3(0.); vR = 1.; vSeed = aSeed; vFlat = 1.;
  int n = int(uN);
  int id = gl_VertexID;
  // (Each bit starts somewhere in its cell, not at its corner, so the grid it started on doesn't show.)
  vec3 jit = fract(vec3(aSeed * 13.17, aSeed * 71.31, aSeed * 37.73)) - 0.5;
  vec3 q = (vec3(float(id % n), float((id / n) % n), float(id / (n * n))) + 0.5 + 0.9 * jit) / uN * uBox - 0.5 * uBox;
  vec3 x = q + uD * aD.xyz;
  x = mod(x + 0.5 * uBox, uBox) - 0.5 * uBox;
  float r = length(x);
  if (r < 2.5) return;
  float dens = aD.w;
  // Its history (years, as powers of ten): denser places light first. The first stars' flare; then a galaxy, young
  // and blue, yellowing, fading slowly after today, dimming and reddening as its stars die, out by 10¹⁴ years.
  float tf = mix(8.45, 9.6, clamp((4.5 - dens) / 3.5, 0., 1.)) + 0.18 * aSeed;
  float L = smoothstep(tf - 0.12, tf + 0.18, uLogY) * pow(max(dens - 1.35, 0.), 1.3) * pow(fract(aSeed * 7.3), 2.) * 1.6;
  float age = uLogY - tf;
  L *= mix(1.8, 1., smoothstep(0., 0.9, age));           // young galaxies, all blue stars, shine harder
  L *= uLogY > 10.14 ? pow(10., -0.55 * (uLogY - 10.14)) : 1.;   // fading after today
  L *= 1. - smoothstep(12.5, 14., uLogY);               // the last stars out
  float T = uLogY < tf + 0.4 ? 13000. : mix(9000., 5200., smoothstep(tf + 0.4, tf + 1.2, uLogY));
  if (uLogY > 10.5) T = mix(5200., 3000., smoothstep(10.5, 13.5, uLogY));
  // The first stars: a bright blue flare in the densest places, a hundred to four hundred million years in.
  float tflash = 8. + 0.6 * fract(aSeed * 13.1);
  float flare = dens > 2.2 && fract(aSeed * 3.7) < 0.35 ? exp(-((uLogY - tflash) / 0.035) * ((uLogY - tflash) / 0.035)) * 2.5 : 0.;
  // Slipping out of sight: past the event horizon, gone.
  float seen = 1. - smoothstep(0.85 * uEH, uEH, r);
  float dphys = uA * r;
  // (Only those within about 60 million parsecs, as they are at the time, drawn: so when the universe was smaller, more
  // of it is within reach, and the galaxies crowd the sky; when it's larger, fewer.)
  seen *= exp(-pow(dphys / 60., 2.));
  if (dphys < 0.9) return;
  float flux = (L + flare) * seen / (dphys * dphys) * uGain;
  if (flux < 1e-5) return;
  vec3 dir = x / r;
  vec4 c = uVP * vec4(dir, 0.);
  if (c.w <= 0.) return;
  c.z = 0.;  // (a direction, at infinity: kept inside the far limit)
  // Its size: a galaxy about 0.05 Mpc across (drawn larger, uBoost), at its distance; its light spread over it.
  // (Galaxies were smaller when the universe was: about in step with it.)
  float px = clamp(0.05 * uBoost * pow(L + 0.3, 0.3) * pow(uA, 0.8) / dphys * uPx, 1.3 * uDev, 46. * uDev);
  if (flare > L) px = (1.3 + flare * 0.3) * uDev;
  vR = px;
  float area = max(px * px / (uDev * uDev), 1.);
  vCol = (flare > 0.05 ? mix(bb(T), bb(30000.), clamp(flare, 0., 1.)) : bb(T)) * min(flux / area * 20., 6.);
  vFlat = 0.25 + 0.75 * fract(aSeed * 5.1);
  gl_PointSize = 2. * px;
  gl_Position = c;
}
`,Be=`#version 300 es
precision highp float;
in vec3 vCol;
in float vR, vSeed, vFlat;
out vec4 o;
void main() {
  vec2 p = gl_PointCoord * 2. - 1.;
  // (Each a disc seen at its own tilt: an ellipse, turned.)
  float an = vSeed * 6.2831853, cs = cos(an), sn = sin(an);
  p = vec2(cs * p.x - sn * p.y, sn * p.x + cs * p.y);
  p.y /= max(vFlat, 0.2);
  float r2 = dot(p, p);
  float core = exp(-r2 * 30.), body = exp(-r2 * 5.);
  o = vec4(vCol * (body * 0.6 + core * 1.6) * (1. - smoothstep(0.75, 1., length(gl_PointCoord * 2. - 1.))), 1.);
}
`,X=`#version 300 es
precision highp float;
in vec3 aDir;
in vec4 aCol; // colour, and size (radians) in .a
uniform mat4 uVP;
uniform float uPx, uDev;
out vec3 vCol;
out float vR;
void main() {
  vec4 c = uVP * vec4(aDir, 0.);
  vCol = aCol.rgb;
  float px = clamp(aCol.a * uPx, 1.5 * uDev, 400. * uDev);
  vR = px;
  gl_PointSize = 2. * px;
  gl_Position = c.w > 0. ? vec4(c.xy, 0., c.w) : vec4(2., 2., 2., 1.);
}
`,Ve=`#version 300 es
precision highp float;
in vec3 vCol;
in float vR;
out vec4 o;
void main() {
  float d = length(gl_PointCoord * 2. - 1.);
  o = vec4(vCol * (exp(-d * d * 18.) * 1.4 + exp(-d * d * 3.) * 0.35) * (1. - smoothstep(0.85, 1., d)), 1.);
}
`;function He(e,t){let n=u(e,r,Re),i=u(e,ze,Be,[`aD`,`aSeed`]),a=u(e,X,Ve,[`aDir`,`aCol`]),o=e.createVertexArray(),s=e.createVertexArray(),c=e.createBuffer();e.bindVertexArray(s),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,t.data,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,4,e.FLOAT,!1,20,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,1,e.FLOAT,!1,20,16),e.bindVertexArray(null);let l=t.n**3,d=e.createVertexArray(),f=e.createBuffer();e.bindVertexArray(d),e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferData(e.ARRAY_BUFFER,14336,e.DYNAMIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,28,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,28,12),e.bindVertexArray(null);let p=new Float32Array(3584),m=e.createTexture();return e.bindTexture(e.TEXTURE_2D,m),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([128,128,128,255])),{ready:new Promise(t=>{let n=new Image;n.onload=()=>{e.bindTexture(e.TEXTURE_2D,m),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),t()},n.onerror=()=>t(),n.src=`/sky/cmb.png`}),get cmb(){return m},fog(t,r,i){e.useProgram(n.p),e.bindVertexArray(o),e.disable(e.DEPTH_TEST),e.uniform3fv(n.u(`uRight`),t.right),e.uniform3fv(n.u(`uUp`),t.up),e.uniform3fv(n.u(`uFwd`),t.fwd),e.uniform1f(n.u(`uTan`),t.tanHalf),e.uniform1f(n.u(`uAspect`),r.aspect),e.uniform1f(n.u(`uShift`),r.shift),e.uniformMatrix3fv(n.u(`uRot`),!1,i.rot),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,m),e.uniform1i(n.u(`uCmb`),0),e.uniform1f(n.u(`uT`),i.T),e.uniform1f(n.u(`uGlow`),i.glow),e.uniform1f(n.u(`uSpots`),i.spots),e.uniform1f(n.u(`uShimmer`),i.shimmer),e.uniform1f(n.u(`uTime`),i.time),e.uniform4fv(n.u(`uHome`),i.home),e.drawArrays(e.TRIANGLES,0,3)},galaxies(n,r){e.useProgram(i.p),e.bindVertexArray(s),e.uniformMatrix4fv(i.u(`uVP`),!1,n.viewProj),e.uniform1f(i.u(`uN`),t.n),e.uniform1f(i.u(`uBox`),t.box),e.uniform1f(i.u(`uD`),r.D),e.uniform1f(i.u(`uA`),r.a),e.uniform1f(i.u(`uLogY`),r.logY),e.uniform1f(i.u(`uGain`),r.gain),e.uniform1f(i.u(`uPx`),r.px),e.uniform1f(i.u(`uBoost`),r.boost),e.uniform1f(i.u(`uEH`),r.eh),e.uniform1f(i.u(`uDev`),r.dev),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.drawArrays(e.POINTS,0,l),e.disable(e.BLEND),e.bindVertexArray(null)},sprites(t,n,r,i){let o=Math.min(512,n.length);if(o){for(let e=0;e<o;e++){let t=n[e];p.set([t.dir[0],t.dir[1],t.dir[2],t.col[0],t.col[1],t.col[2],t.size],e*7)}e.useProgram(a.p),e.bindVertexArray(d),e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferSubData(e.ARRAY_BUFFER,0,p.subarray(0,o*7)),e.uniformMatrix4fv(a.u(`uVP`),!1,t.viewProj),e.uniform1f(a.u(`uPx`),r),e.uniform1f(a.u(`uDev`),i),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.drawArrays(e.POINTS,0,o),e.disable(e.BLEND),e.bindVertexArray(null)}}}}var Ue=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform vec3 uRight, uUp, uFwd;
uniform float uTan, uAspect, uShift, uTime, uFlow, uT, uLogY, uYaw;
uniform mat3 uRot;
uniform sampler2D uCmb;
uniform vec4 uW0;   // quark plasma, hadron sparkle, oven, fusion flashes
uniform vec4 uW1;   // fog, dark veins, the fog's clearing (0 to 1), the dark web
uniform vec4 uW2;   // the hydrogen's haze, bubbles (on), the galaxies' web, quasars
uniform vec4 uW3;   // stars going out, collision sparks, the galaxy streaming apart, black holes
uniform vec4 uW4;   // the black holes' accretion glow, the last glow, seconds since the fog cleared (large: not), 0
uniform vec4 uBH[12];   // a black hole: its direction (world), and when it evaporates (log years)
uniform float uBHFlash[12]; // seconds since each flashed (large: not yet)
const float PI = 3.14159265;

float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
vec3 hash33(vec3 p) { p = fract(p * vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx); }
float noise3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3. - 2. * f);
  return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float v = 0., a = 0.5; for (int i = 0; i < 5; i++) { v += a * noise3(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return v; }
float fbm3(vec3 p) { float v = 0., a = 0.5; for (int i = 0; i < 3; i++) { v += a * noise3(p); p = p * 2.07 + vec3(4.1, 1.3, 7.7); a *= 0.5; } return v; }
float sq(float x) { return x * x; }
vec3 bb(float T) {
  T = clamp(T, 800., 40000.);
  float t = T / 100.;
  vec3 c;
  c.r = t <= 66. ? 1. : clamp(1.2929 * pow(t - 60., -0.1332), 0., 1.);
  c.g = t <= 66. ? clamp(0.3900816 * log(t) - 0.6318414, 0., 1.) : clamp(1.1298909 * pow(t - 60., -0.0755148), 0., 1.);
  c.b = t >= 66. ? 1. : (t <= 19. ? 0. : clamp(0.5432068 * log(t - 10.) - 1.19625408, 0., 1.));
  c = pow(c, vec3(2.2));
  return c / max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
}
// The web: ridges of noise on the sky, sharpened, in two sizes; the same everywhere at every age, so that the fog's
// veins become the night's web and its knots the first stars' homes.
float web(vec3 g, float sharp) {
  float r1 = 1. - abs(2. * fbm3(g * 3.1 + 2.) - 1.);
  float r2 = 1. - abs(2. * fbm3(g * 7.3 + 9.) - 1.);
  return pow(r1, sharp) * (0.55 + 0.45 * pow(r2, sharp * 0.6));
}
// The stretching, as a flow out from the middle of the view: noise in the log of the distance from it, moving outwards.
vec3 flowP(vec2 pt, float k, float flow) {
  float r = length(pt) + 1e-3, a = atan(pt.y, pt.x) + uYaw;
  return vec3(cos(a) * k, sin(a) * k, log(r) * k * 0.7 - flow);
}

void main() {
  vec2 ndc = vUv * 2. - 1.;
  vec2 pt = vec2(ndc.x * uTan * uAspect, (ndc.y - uShift) * uTan);
  // (Two ways of looking: the fog's lens, which keeps its spots round, and a plain one, as the galaxies are drawn.)
  float rl = length(pt), th = 2. * atan(0.5 * rl);
  vec3 dl = rl > 1e-6 ? cos(th) * uFwd + sin(th) * (uRight * pt.x + uUp * pt.y) / rl : uFwd;
  vec3 gl = normalize(uRot * dl);
  vec3 d = normalize(uFwd + uRight * pt.x + uUp * pt.y);
  vec3 g = normalize(uRot * d);
  vec3 add = vec3(0.);
  float dark = 0.;
  // (Where the fog has cleared, as it tears open from many places at once over a few seconds.)
  float open = uW1.z >= 0.999 ? 1. : 0., clearN = 0., front = 0.;
  if (uW1.z > 0.001 && uW1.z < 0.999) {
    clearN = fbm3(gl * 2.4 + 3.) * 0.75 + fbm3(gl * 9. + 1.) * 0.25;
    front = uW1.z * 1.05 - 0.05;
    open = smoothstep(front + 0.03, front - 0.03, clearN);
  }

  // ── The beginning: the quark plasma ──
  if (uW0.x > 0.001 || uW0.y > 0.001) {
    vec3 p = flowP(pt, 2.2, uFlow);
    vec3 w = vec3(fbm3(p + 1.3), fbm3(p + 7.1), fbm3(p + 4.7));
    float n = fbm(p * 1.4 + 2.2 * (w - 0.5) + vec3(0., 0., uTime * 0.15));
    float fil = pow(1. - abs(2. * fbm3(p * 2.3 + w * 2.) - 1.), 5.);
    vec3 col = mix(vec3(0.08, 0.02, 0.22), vec3(0.85, 0.12, 0.75), smoothstep(0.3, 0.62, n));
    col = mix(col, vec3(0.55, 0.85, 1.35), smoothstep(0.6, 0.82, n));
    // (Much subtler since 19 October 2026: John, "the initial beginning sort of purple glow thing ... is great, but it's
    // far too bright. Can you make it much more subtle".)
    vec3 plasma = (col * (0.04 + 1.6 * pow(n, 3.)) + vec3(0.7, 0.55, 1.1) * fil * 0.6) * 0.18;
    // Particles and antiparticles, made out of the light and destroyed again: sparks, flickering.
    vec3 cp = vec3(p.xy * 9., p.z * 9.);
    vec3 ci = floor(cp);
    float h = hash13(ci);
    float on = step(0.82, h) * pow(max(0., sin(uTime * (6. + 9. * h) + h * 40.)), 18.);
    float sp = exp(-dot(fract(cp) - 0.5, fract(cp) - 0.5) * 60.) * on;
    plasma += vec3(1.2, 1.1, 1.4) * sp * 0.6;
    add += plasma * uW0.x;
    dark = max(dark, 0.995 * uW0.x);
    // The quarks gathering into protons and neutrons: the plasma breaking into grains, glittering gold.
    vec3 gp = flowP(pt, 5., uFlow) * 6.;
    vec3 gi = floor(gp), gf = fract(gp) - 0.5;
    vec3 off = hash33(gi) - 0.5;
    float gr = exp(-dot(gf - off * 0.6, gf - off * 0.6) * 40.) * (0.4 + 1.6 * hash13(gi + 3.));
    add += vec3(1.3, 0.95, 0.55) * gr * uW0.y * 0.9 + vec3(0.8, 0.45, 0.7) * n * uW0.y * 0.15;
    dark = max(dark, 0.995 * uW0.y);
  }
  // ── The oven: a golden plasma, and fusion's flashes ──
  if (uW0.z > 0.001) {
    vec3 p = flowP(pt, 1.8, uFlow * 0.8);
    vec3 w = vec3(fbm3(p + 2.3), fbm3(p + 5.1), 0.);
    float n = fbm(p * 1.2 + 1.8 * (w - 0.5) + vec3(0., 0., uTime * 0.08));
    vec3 col = mix(vec3(0.18, 0.05, 0.01), vec3(1.15, 0.5, 0.1), smoothstep(0.3, 0.6, n));
    col = mix(col, vec3(1.35, 1.1, 0.75), smoothstep(0.62, 0.85, n));
    col *= 0.2 + 2.2 * pow(n, 2.);
    add += col * uW0.z;
    dark = max(dark, 0.995 * uW0.z);
    // Nuclei forming: brief bright flashes, each with a little ring, streaming out with the rest.
    if (uW0.w > 0.001) {
      vec3 cp = flowP(pt, 3.2, uFlow * 0.8) * vec3(3., 3., 4.);
      vec3 ci = floor(cp);
      vec3 cf = fract(cp) - 0.5;
      float h = hash13(ci + 11.);
      float ph = fract(uTime * (0.35 + 0.5 * h) + h * 7.);
      float env = smoothstep(0., 0.04, ph) * exp(-ph * 9.) * step(0.55, h);
      float rr = length(cf.xy);
      float core = exp(-rr * rr * 220.), ring = exp(-sq((rr - ph * 0.9) / 0.03)) * 0.5;
      add += vec3(1.35, 1.15, 0.8) * (core * 4. + ring) * env * uW0.w;
    }
  }
  // ── The fog: billows, sound, light zigzagging, and dark matter's veins ──
  if (uW1.x > 0.001) {
    vec3 hot = bb(uT);
    float bill = 0.;
    for (int k = 0; k < 3; k++) {
      float fk = float(k);
      vec3 p = flowP(pt, 1.2 + fk * 0.9, uFlow * (0.4 + 0.3 * fk)) + vec3(fk * 5.3);
      bill += (fbm3(p) - 0.45) * (0.6 - 0.15 * fk);
    }
    // Sound: bands moving through the spots, as the fog rang.
    float s = texture(uCmb, vec2(0.5 - atan(gl.y, gl.x) / (2. * PI), 0.5 - asin(clamp(gl.z, -1., 1.)) / PI)).r * 2. - 1.;
    float ring = 0.5 + 0.5 * sin(s * 14. + uTime * 1.6);
    // (Its colour drawn warmer than it was, white-gold early, orange as it nears 3,000 degrees: the cinematographer's,
    // not the thermometer's; the dashboard has the real temperature.)
    vec3 pal = mix(vec3(1.3, 0.95, 0.55), vec3(1.25, 0.5, 0.12), smoothstep(-1., 5.6, uLogY));
    vec3 deep = mix(vec3(0.35, 0.16, 0.08), vec3(0.3, 0.07, 0.02), smoothstep(-1., 5.6, uLogY));
    float b = clamp(bill + 0.35, 0., 1.2);
    float swell = 1. + 0.6 * smoothstep(4.8, 5.58, uLogY);
    vec3 fogc = mix(deep, pal, smoothstep(0.1, 0.75, b)) * (0.35 + 1.6 * b * b) * (0.8 + 0.4 * ring) * swell;
    add += fogc * uW1.x * (1. - open);
    dark = max(dark, 0.99 * uW1.x * (1. - open));
  }
  if (uW1.y > 0.001) {
    float v = web(gl, 6.);
    dark = max(dark, v * 0.38 * uW1.y * (1. - open));
  }
  // ── The fog clearing: torn open from many places at once, its edges glowing, then gone ──
  if (uW1.z > 0.001 && uW1.z < 0.999 && uLogY < 6.3) {
    // (Where it's open, the far wall of the oldest light, dimmer; its torn edges glowing.)
    float edge = exp(-sq((clearN - front) / 0.02));
    dark = max(dark, 0.84 * open);
    add += vec3(1.35, 0.9, 0.5) * edge * 2.4;
  } else if (uW1.z >= 0.999) {
    // (Once it's clear, the wall left behind dims on its own as it cools: the darkening let go as it does.)
    dark = max(dark, 0.82 * (1. - smoothstep(5.65, 6.3, uLogY)));
  }
  // ── The long night: the dark matter's web, and the hydrogen's haze ──
  if (uW1.w > 0.001) {
    // (Fine and faint since 19 October 2026: John, of the web in the night, "they appear very chunky and bright. If
    // they were much more subtle, it would be better".)
    float v = web(g, 14.);
    float node = pow(v, 4.);
    add += (vec3(0.3, 0.28, 0.8) * v * 0.022 + vec3(0.5, 0.42, 1.1) * node * 0.03) * uW1.w;
  }
  if (uW2.x > 0.001) {
    float hz = fbm3(g * 4. + vec3(0., 0., uTime * 0.01));
    add += vec3(0.32, 0.07, 0.05) * (0.25 + hz) * 0.07 * uW2.x;
  }
  // ── The first stars: ignitions, and bubbles growing until they join ──
  if (uW2.y > 0.001) {
    vec3 cp = g * 5.5;
    vec3 ci = floor(cp);
    float inside = 0., rim = 0., star = 0.;
    for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec3 c = ci + vec3(float(x), float(y), float(z));
      vec3 h = hash33(c);
      float tIgn = 7.95 + 0.95 * h.x;
      if (uLogY < tIgn) continue;
      vec3 centre = c + 0.2 + 0.6 * h;
      float dd = length(cp - centre);
      float age = uLogY - tIgn;
      float R = (0.04 + 0.9 * pow(clamp(age / 0.75, 0., 1.), 0.75)) * (0.85 + 0.3 * noise3(cp * 3. + h * 10.));
      inside = max(inside, smoothstep(R, R - 0.12, dd));
      rim += exp(-sq((dd - R) / 0.05)) * (1. - smoothstep(0.12, 0.45, age));
      star += exp(-dd * dd * 900.) * (1.2 + 40. * exp(-sq(age / 0.03)));
    }
    add += (vec3(0.25, 0.5, 1.0) * inside * 0.035 + vec3(0.9, 0.35, 0.6) * rim * 0.09 + vec3(0.65, 0.85, 1.3) * star) * uW2.y;
  }
  // ── Galaxies: the web glowing between them; quasars ──
  if (uW2.z > 0.001) {
    float v = web(g, 14.);
    add += vec3(0.9, 0.75, 0.55) * v * 0.02 * uW2.z;
  }
  if (uW2.w > 0.001) {
    vec3 cp = g * 3.;
    vec3 ci = floor(cp);
    for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec3 c = ci + vec3(float(x), float(y), float(z));
      vec3 h = hash33(c + 17.);
      if (h.x < 0.6) continue;
      vec3 centre = c + 0.2 + 0.6 * h;
      vec3 q = cp - centre;
      float dd = length(q);
      float flick = 0.6 + 0.4 * sin(uTime * (1. + 2. * h.y) + h.z * 20.);
      vec3 ax = normalize(hash33(c + 5.) - 0.5);
      float al = dot(q, ax), across = length(q - ax * al);
      float jet = exp(-across * across * 4000.) * exp(-abs(al) * 14.) * step(0.01, abs(al));
      add += (vec3(0.8, 0.9, 1.3) * exp(-dd * dd * 3000.) * 2.5 + vec3(0.6, 0.7, 1.2) * jet * 0.6) * flick * uW2.w;
    }
  }
  // ── The future: stars going out, the blue first, the red dwarfs last, each reddening as it goes ──
  if (uW3.x > 0.001) {
    for (int l = 0; l < 2; l++) {
      // (Each layer's grid turned its own way, and its stars anywhere in their cells, so that no rows show.)
      float a1 = 0.7 + 1.3 * float(l), c1 = cos(a1), s1 = sin(a1);
      vec3 gr = vec3(c1 * g.x - s1 * g.y, s1 * g.x + c1 * g.y, g.z);
      gr = vec3(gr.x, c1 * gr.y - s1 * gr.z, s1 * gr.y + c1 * gr.z);
      vec3 cp = gr * (70. + 60. * float(l)) + float(l) * 13.;
      vec3 ci = floor(cp);
      vec3 h = hash33(ci);
      vec3 centre = ci + 0.1 + 0.8 * hash33(ci + 7.);
      float dd = length(cp - centre);
      float kind = h.y;  // (0 blue … 1 red dwarf)
      float die = mix(10.45, 13.95, pow(kind, 0.7)) + 0.15 * h.z;
      float life = 1. - smoothstep(die - 0.12, die, uLogY);
      float giant = exp(-sq((uLogY - (die - 0.18)) / 0.08)) * step(kind, 0.85);
      vec3 c = mix(vec3(0.65, 0.8, 1.3), vec3(1.25, 0.45, 0.25), smoothstep(0.2, 0.95, kind));
      c = mix(c, vec3(1.4, 0.35, 0.15), giant);
      float b = (0.4 + 0.8 * h.x) * life * (1. + 2.5 * giant) * step(0.35, h.x);
      add += c * exp(-dd * dd * 120.) * b * 0.9 * uW3.x;
    }
  }
  // ── The last light: the dead galaxy's dull glow; sparks where dead stars collide; the galaxy streaming apart ──
  if (uW3.y > 0.001) {
    float hz = fbm3(g * 3. + 4.);
    add += vec3(0.45, 0.12, 0.06) * (0.3 + hz) * (0.25 + 0.75 * pow(max(g.x, 0.), 4.) + 0.5 * exp(-g.z * g.z * 8.)) * 0.05 * uW3.y;
    vec3 cp = g * 8.;
    vec3 ci = floor(cp);
    vec3 h = hash33(ci + 23.);
    float ph = fract(uTime * (0.12 + 0.18 * h.x) + h.y);
    float env = smoothstep(0., 0.02, ph) * exp(-ph * 30.) * step(0.5, h.z);
    vec3 centre = ci + 0.25 + 0.5 * hash33(ci + 2.);
    float dd = length(cp - centre);
    add += vec3(1.3, 0.55, 0.3) * (exp(-dd * dd * 600.) * 3. + exp(-sq((dd - ph * 2.5) / 0.02)) * 0.4) * env * uW3.y;
  }
  if (uW3.z > 0.001) {
    vec3 p = flowP(pt, 9., uTime * 0.25) * vec3(5., 5., 2.5);
    vec3 ci = floor(p), cf = fract(p) - 0.5;
    float h = hash13(ci);
    float streak = exp(-dot(cf.xy, cf.xy) * 300.) * exp(-sq(cf.z / 0.35)) * step(0.85, h);
    add += vec3(0.9, 0.45, 0.3) * streak * 0.8 * uW3.z;
  }
  // ── Black holes: dark discs, faint rings; each ends in a flash ──
  if (uW3.w > 0.001) {
    for (int i = 0; i < 12; i++) {
      vec4 b = uBH[i];
      float big = b.w > 80. ? 1. : 0.;
      float R = mix(0.014, 0.034, big);
      float cosA = dot(d, b.xyz);
      if (cosA < 0.9) continue;
      float a = acos(clamp(cosA, -1., 1.));
      float gone = smoothstep(b.w - 0.02, b.w, uLogY);
      float near = smoothstep(b.w - 6., b.w, uLogY); // (hotter as it shrinks)
      float Rn = R * (1. - 0.85 * near);
      float discA = smoothstep(Rn, Rn * 0.85, a) * (1. - gone);
      float ringA = exp(-sq((a - Rn * 1.5) / (Rn * 0.12))) * (1. - gone);
      float acc = exp(-sq((a - Rn * 2.2) / (Rn * 0.9))) * uW4.x * (1. - gone);
      dark = max(dark, discA * uW3.w);
      vec3 ringC = mix(vec3(1.0, 0.8, 0.55), vec3(0.75, 0.85, 1.3), near);
      add += (ringC * ringA * (0.35 + 2.2 * near * near) + vec3(1.0, 0.45, 0.2) * acc * 0.35 + ringC * exp(-a / (Rn * 3.)) * 0.04 * near * (1. - gone)) * uW3.w;
      float since = uBHFlash[i];
      if (since < 8.) {
        float env = smoothstep(0., 0.06, since) * exp(-since * 0.9);
        float shell = exp(-sq((a - since * 0.06 * (1. + big)) / 0.006)) * exp(-since * 0.5);
        add += vec3(0.85, 0.92, 1.3) * (exp(-sq(a / (0.004 + 0.006 * big))) * 30. + exp(-a / (0.012 + 0.016 * big)) * 1.2) * env * (1. + 0.5 * big) + vec3(0.7, 0.8, 1.2) * shell * 1.2;
      }
    }
  }
  // ── The last glow: thin and cold, fading for ever ──
  if (uW4.y > 0.0001) {
    float n = fbm3(g * 1.6 + vec3(0., 0., uTime * 0.015));
    add += mix(vec3(0.45, 0.18, 0.22), vec3(0.3, 0.25, 0.45), n) * uW4.y * pow(n, 1.8) * 2.2;
  }
  dark = clamp(dark, 0., 0.998);
  o = vec4(max(add, vec3(0.)), dark);
}
`;function We(e,t){let n=u(e,r,Ue),i=e.createVertexArray();return{draw(r,a,o,s){e.useProgram(n.p),e.bindVertexArray(i),e.disable(e.DEPTH_TEST),e.uniform3fv(n.u(`uRight`),r.right),e.uniform3fv(n.u(`uUp`),r.up),e.uniform3fv(n.u(`uFwd`),r.fwd),e.uniform1f(n.u(`uTan`),r.tanHalf),e.uniform1f(n.u(`uAspect`),a.aspect),e.uniform1f(n.u(`uShift`),a.shift),e.uniform1f(n.u(`uTime`),s.time),e.uniform1f(n.u(`uFlow`),s.flow),e.uniform1f(n.u(`uT`),s.T),e.uniform1f(n.u(`uLogY`),s.logY),e.uniform1f(n.u(`uYaw`),s.yaw),e.uniformMatrix3fv(n.u(`uRot`),!1,o),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t()),e.uniform1i(n.u(`uCmb`),0),e.uniform4fv(n.u(`uW0`),s.w0),e.uniform4fv(n.u(`uW1`),s.w1),e.uniform4fv(n.u(`uW2`),s.w2),e.uniform4fv(n.u(`uW3`),s.w3),e.uniform4fv(n.u(`uW4`),s.w4),e.uniform4fv(n.u(`uBH`),s.bh),e.uniform1fv(n.u(`uBHFlash`),s.bhFlash),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLES,0,3),e.disable(e.BLEND),e.bindVertexArray(null)}}}var Ge=.674,Ke=.315,qe=.965;function Je(e,t,n,r,i,a,o,s){for(let a=0;a<i;a++)o[a]=e[n+a*r],s[a]=t[n+a*r];for(let e=1,t=0;e<i;e++){let n=i>>1;for(;t&n;n>>=1)t^=n;if(t^=n,e<t){let n=o[e];o[e]=o[t],o[t]=n,n=s[e],s[e]=s[t],s[t]=n}}for(let e=2;e<=i;e<<=1){let t=(a?2:-2)*Math.PI/e,n=Math.cos(t),r=Math.sin(t);for(let t=0;t<i;t+=e){let i=1,a=0;for(let c=0;c<e/2;c++){let l=o[t+c],u=s[t+c],d=o[t+c+e/2]*i-s[t+c+e/2]*a,f=o[t+c+e/2]*a+s[t+c+e/2]*i;o[t+c]=l+d,s[t+c]=u+f,o[t+c+e/2]=l-d,s[t+c+e/2]=u-f;let p=i*n-a*r;a=i*r+a*n,i=p}}}let c=a?1/i:1;for(let a=0;a<i;a++)e[n+a*r]=o[a]*c,t[n+a*r]=s[a]*c}function Ye(e,t,n,r){let i=new Float64Array(n),a=new Float64Array(n);for(let o=0;o<n;o++)for(let s=0;s<n;s++)Je(e,t,(o*n+s)*n,1,n,r,i,a);for(let o=0;o<n;o++)for(let s=0;s<n;s++)Je(e,t,o*n*n+s,n,n,r,i,a);for(let o=0;o<n;o++)for(let s=0;s<n;s++)Je(e,t,o*n+s,n*n,n,r,i,a)}function Xe(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ze(e=64,t=200,n=4.5,r=20151014){let i=e*e*e,a=Xe(r),o=new Float32Array(i),s=new Float32Array(i);for(let e=0;e<i;e++){let t=Math.max(a(),1e-12),n=a();o[e]=Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*n)}Ye(o,s,e,!1);let c=2*Math.PI/t,l=new Float32Array(i);for(let t=0;t<e;t++)for(let r=0;r<e;r++)for(let i=0;i<e;i++){let a=(i<=e/2?i:i-e)*c,o=(r<=e/2?r:r-e)*c,s=(t<=e/2?t:t-e)*c,u=Math.hypot(a,o,s),d=(t*e+r)*e+i;if(u===0){l[d]=0;continue}let f=u/(Ke*Ge*Ge),p=Math.log(1+2.34*f)/(2.34*f)*(1+3.89*f+(16.1*f)**2+(5.46*f)**3+(6.71*f)**4)**-.25;l[d]=Math.sqrt(u**+qe*p*p)*Math.exp(-.5*(u*n)**2)}let u=[];for(let t=0;t<3;t++){let n=new Float32Array(i),r=new Float32Array(i);for(let i=0;i<e;i++)for(let a=0;a<e;a++)for(let u=0;u<e;u++){let d=(i*e+a)*e+u,f=(u<=e/2?u:u-e)*c,p=(a<=e/2?a:a-e)*c,m=(i<=e/2?i:i-e)*c,h=f*f+p*p+m*m;if(h===0)continue;let g=t===0?f:t===1?p:m,_=o[d]*l[d];n[d]=-(s[d]*l[d])*g/h,r[d]=_*g/h}Ye(n,r,e,!0),u.push(n)}let d=0;for(let e=0;e<i;e++)d+=u[0][e]**2+u[1][e]**2+u[2][e]**2;let f=t/e,p=1.6*f/Math.sqrt(d/i),m=new Float32Array(i),h=t=>(t%e+e)%e;for(let t=0;t<e;t++)for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=(t*e+n)*e+r,a=r+u[0][i]*p/f,o=n+u[1][i]*p/f,s=t+u[2][i]*p/f,c=Math.floor(a),l=Math.floor(o),d=Math.floor(s),g=a-c,_=o-l,v=s-d;for(let t=0;t<8;t++){let n=t&1,r=t>>1&1,i=t>>2,a=(n?g:1-g)*(r?_:1-_)*(i?v:1-v);m[(h(d+i)*e+h(l+r))*e+h(c+n)]+=a}}let g=new Float32Array(i*5);for(let t=0;t<e;t++)for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=(t*e+n)*e+r,o=r+u[0][i]*p/f,s=n+u[1][i]*p/f,c=t+u[2][i]*p/f,l=0,d=Math.floor(o),_=Math.floor(s),v=Math.floor(c),y=o-d,b=s-_,ee=c-v;for(let t=0;t<8;t++){let n=t&1,r=t>>1&1,i=t>>2,a=(n?y:1-y)*(r?b:1-b)*(i?ee:1-ee);l+=a*m[(h(v+i)*e+h(_+r))*e+h(d+n)]}g.set([u[0][i]*p,u[1][i]*p,u[2][i]*p,l,a()],i*5)}return{n:e,box:t,data:g}}var Qe=[`The beginning`,`The oven`,`The fog`,`Clearing`,`The night`,`First stars`,`Galaxies`,`Speeding up`,`The future`,`Last light`,`Yours`],$e=[91.5,48.5,64,73.5,35,38.5,30,81,80.5,131,1],et=[[0,.5,1e-6],[0,61.2,1e-6],[0,69.8,2e-5],[0,90.8,.5],[1,.5,1],[1,23.6,180],[1,36.2,1200],[2,15.3,3156e4],[2,24.2,6312e8],[2,31,1578e9],[2,49.9,6312e9],[2,63.4,0xa0cc7532400],[3,9.5,0xae7a3b0dc00],[3,73,9467e10],[4,11.1,3156e11],[4,34.5,0xa16f707298000],[5,5.8,0xd7441a5c3b000],[5,26,0x4340bc15992000],[5,37.8,0x868a9079a4e000],[6,10.7,7889e13],[6,16.5,0x188932a1fae4000],[6,29.1,0x2d8a95d036ec000],[7,7.4,0x35f4f36686b8000],[7,20.7,0x4075a4fda4bc000],[7,40.8,0x609c9250dc5c000],[8,19.5,0x691dacab4ab8000],[8,28,0x9a2a62be38dc000],[8,43.3,0x348e206f84678000],[8,53,0x521cf676ab63b0000],[8,69,3156e18],[9,12.4,3156e20],[9,24.3,3156e24],[9,36.6,3156e68],[9,46.3,3156e76],[9,50.8,3156e92],[9,62.2,3156e101],[9,88.9,3156e104]],tt=[[`THE BEGINNING`,`A MILLIONTH OF A SECOND IN: QUARKS, GLUONS AND LIGHT`],[`THE OVEN`,`PROTONS AND NEUTRONS COOKED INTO HELIUM`],[`THE FOG`,`NUCLEI, ELECTRONS AND LIGHT, TANGLED TOGETHER`],[`THE FOG CLEARS`,`380,000 YEARS: THE SURFACE OF LAST SCATTERING`],[`THE LONG NIGHT`,`GAS IN THE DARK, BEFORE THE FIRST STARS`],[`THE FIRST STARS`,`ABOUT A HUNDRED MILLION YEARS IN`],[`GALAXIES`,`COLLIDING, MERGING AND GROWING`],[`SPEEDING UP`,`DARK ENERGY TAKES OVER`],[`THE FUTURE`,`THE OTHER GALAXIES SLIP OUT OF REACH`],[`THE LAST LIGHT`,`EMBERS, THEN BLACK HOLES, THEN NOTHING`],[`THE LEVER IS YOURS`,`DRAG IT, OR PRESS PLAY TO LET TIME RUN`]];function nt(e,t){if(e===0&&t<6)return{kind:`big`,line:`THE VAN RUNS THIS FIRST TOUR`,detail:`THE WHOLE HISTORY OF THE UNIVERSE, BEGINNING TO END. THEN IT’S YOURS`};let[n,r]=tt[Math.min(e,tt.length-1)];return{line:n,detail:r}}function rt(e){return{line:e.grade,detail:`DRAG THE LEVER, OR PLAY TO LET TIME RUN`}}function it(){let r=c(`sim-canvas`),i=new URLSearchParams(location.search).has(`large`)||Math.max(screen.width,screen.height)*Math.min(window.devicePixelRatio||1,2)>=1800,u=4.625,b=-.21,x={mode:`launch`,playing:!1,at:0,ch:0,yaw:u,pitch:b,clock:0,run:!1},S=0,w=null,E=null,D=null,O=null,k=0,se=null,A=``,ce=new URLSearchParams(location.search).has(`debug`),j={noMilky:!1,gain:1800,noEra:!1},M=L(T),N=M,P=!1,F=a(c(`sim`).dataset.narration??``,{time:()=>x.at,active:()=>x.mode===`guided`||P,playing:()=>x.playing,ended:()=>P}),I=[{id:`overview`,name:`Overview`},{id:`stretch`,name:`Stretching`},{id:`horizons`,name:`Horizons`},{id:`light`,name:`Oldest light`},{id:`calendar`,name:`Calendar`},{id:`stars`,name:`Stars`}],fe=n(JSON.parse(c(`sim`).dataset.cues||`null`)),ge=e=>e===null?I[0].id:I.find(t=>t.name.toLowerCase()===e.toLowerCase())?.id??null;for(let e of fe.views)ge(e)||console.warn(`narration: the cue sheet shows the view "${e}", which this simulator doesn't have`);let ye=!1,R=!1;function z(){if(x.mode!==`guided`&&!P||R)return;let e=ge(fe.viewAt(x.at));e&&e!==V.view&&V.setView(e)}let B=t(`Today (T)`,e(`<circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 4.8V8l2.2 1.6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`),()=>{St(),M=L(T)}),V=o({playing:()=>x.mode===`free`?x.run:x.playing,toggle:()=>{x.mode!==`launch`&&(x.mode===`free`?(x.run=!x.run,x.playing=!0):x.playing=!x.playing,V.setPlay(),V.raiseLcd(2e3))},again:()=>{x.mode!==`launch`&&vt()},againTitle:`Run the guided tour again (R)`,views:I,onView:(e,t)=>{ye=t,t&&x.mode!==`launch`&&(R=!0),x.mode!==`launch`&&rn()},keys:[F.button,B],busy:()=>!!Z||H.dragging,onKey:(e,t)=>x.mode===`launch`?!1:e===`t`?(St(),M=L(T),!0):e===`n`?(F.toggle(),!0):t.key===`ArrowUp`||t.key===`+`||t.key===`=`?(t.preventDefault(),St(),M=Math.min(1,M+.01),!0):t.key===`ArrowDown`||t.key===`-`||t.key===`_`?(t.preventDefault(),St(),M=Math.max(0,M-.01),!0):t.key===`ArrowLeft`?(x.yaw-=.06,!0):t.key===`ArrowRight`&&(x.yaw+=.06,!0)}),Se=[[1e-6,`1 µs`],[1,`1 s`,!0],[180,`3 min`],[0xae9f7bcc000,`fog`],[T,`today`],[0x5af3107a4000*C,`10¹⁴ yr`],[1e100*C,`googol`]],H=l(c(`tl-lever`),{label:`Time`,value:M,step:.01,ticks:Se.map(([e,t,n])=>({at:L(e),text:t,minor:n})),words:e=>{let t=he(pe(e));return`${t.n} ${t.unit}`},onChange:e=>{St(),M=e,x.run=!1}}),U=s(c(`sim-tl`),Qe,e=>{x.mode!==`launch`&&(x.mode===`free`&&vt(),yt(e,!0))}),W=e=>$e.slice(0,e).reduce((e,t)=>e+t,0),Me=$e.slice(0,-1).reduce((e,t)=>e+t,0),Ne=c(`sim-inst`).querySelector(`.hp-body`),Pe=[`age`,`temp`,`size`,`made`,`sure`];Ne.innerHTML=Pe.map(e=>`<div class="hp-row" data-row="${e}"><span class="hp-k"></span><span class="hp-v"><b></b><small></small></span></div>`).join(``);let Fe=Object.fromEntries(Pe.map(e=>{let t=Ne.querySelector(`[data-row="${e}"]`);return[e,{k:t.querySelector(`.hp-k`),v:t.querySelector(`b`),sm:t.querySelector(`small`)}]})),K=(e,t)=>{e.textContent!==t&&(e.textContent=t)},q=(e,t,n,r=``)=>{K(Fe[e].k,t),K(Fe[e].v,n),K(Fe[e].sm,r)},J=e=>e.charAt(0)+e.slice(1).toLowerCase(),Y=e=>String(e).replace(/-/g,`⁻`).replace(/\d/g,e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[Number(e)]),Re=Ie(c(`tl-mix-canvas`)),ze=Le(c(`sim-st-canvas`)),Be=e=>c(e).querySelector(`.hp-body`),X=T/C,Ve=T/ae,Ue=e=>Math.exp(le(e*ae).la),Ge=(()=>{for(let e=1;e<20;e+=.01)if(ve(Ue(e)))return e;return 7.7})(),Ke=e=>(1+e)**2.7/(1+((1+e)/2.9)**5.6),qe=e=>e*1e9<1e8?0:e<=Ve?Ke(1/Ue(e)-1)/Ke(0):e*1e9>=9e13?0:(Ve/e)**2,Je=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],Ye=[31,28,31,30,31,30,31,31,30,31,30,31];function Xe(e){let t=Math.min(365-1e-9,e/X*365),n=0,r=t;for(;n<11&&r>=Ye[n];)r-=Ye[n],n++;let i=Math.floor(r)+1,a=(r-Math.floor(r))*86400,o=Math.floor(a/3600),s=Math.floor(a%3600/60),c=Math.floor(a%60),l=e=>String(e).padStart(2,`0`);return`${i} ${Je[n]}, ${l(o)}:${l(s)}${o===23&&s===59?`:${l(c)}`:``}`}let tt=Ce(c(`tl-wave-canvas`)),it=we(c(`tl-size-canvas`),Ue,Ge,Ve),at=Te(c(`tl-horizon-canvas`)),ot=Ee(c(`tl-spectrum-canvas`)),st=De(c(`tl-spots-canvas`),`/sky/cmb.png`),ct=Oe(c(`tl-calendar-canvas`),X,Xe),lt=ke(c(`tl-births-canvas`),qe,Ve),ut=je(c(`tl-kinds-canvas`),e=>_(e)),dt=g(Be(`tl-stretch-read`),{double:`Doubling time`,pace:`Acceleration`,stretch:`Light stretching`}),ft=g(Be(`tl-horizon-read`),{see:`We can see out to`,reach:`We could ever reach`,share:`Universe in reach`}),pt=g(Be(`tl-light-read`),{peak:`Strongest waves`,band:`Band`,eye:`To the eye`,stretch:`Stretched so far`}),mt=g(Be(`tl-calendar-read`),{date:`Date`,day:`A day of it`,sec:`A second of it`,more:`To the last star`}),ht=g(Be(`tl-stars-read`),{born:`Birth rate`,kinds:`Kinds shining`,last:`Last stars out in`}),gt=ie(),_t=v(gt);function vt(){x.mode=`guided`,x.playing=!0,x.at=0,x.ch=-1,x.run=!1,P=!1,R=ye&&V.view!==I[0].id,x.yaw=u,x.pitch=b,V.setPlay(),yt(0)}function yt(e,t=!1){x.at=W(e)+.001,x.ch=e,t&&(x.yaw=u+2*Math.PI/W(8)*x.at,x.pitch=b),V.raiseLcd(),e===Qe.length-1?(xt(),P=!0):(M=bt(e,0),N=M)}function bt(e,t){let n=et.filter(t=>t[0]===e);if(!n.length)return M;if(t<=n[0][1])return L(n[0][2]);for(let e=1;e<n.length;e++)if(t<=n[e][1]){let r=(t-n[e-1][1])/(n[e][1]-n[e-1][1]),i=r*r*(3-2*r);return L(n[e-1][2])+(L(n[e][2])-L(n[e-1][2]))*i}return L(n[n.length-1][2])}function xt(){x.mode=`free`,x.ch=-1,x.run=!1,M=P||x.at>W(Qe.length-1)-1?L(1e100*C):L(T),H.lock(!1)}function St(){x.mode===`guided`&&(x.mode=`free`,x.ch=-1,H.lock(!1)),P=!1,!x.playing&&x.mode!==`launch`&&(x.playing=!0,V.setPlay())}let Z=null,Ct=0,wt=e=>Math.max(-1.45,Math.min(1.45,e));r.addEventListener(`pointerdown`,e=>{Z={x:e.clientX,y:e.clientY},r.setPointerCapture(e.pointerId)}),r.addEventListener(`pointermove`,e=>{Z&&(x.yaw-=(e.clientX-Z.x)*.004,x.pitch=wt(x.pitch+(e.clientY-Z.y)*.003),Z={x:e.clientX,y:e.clientY},Ct=0)}),r.addEventListener(`pointerup`,()=>{Z=null});let Q=null;V.ballEl.addEventListener(`pointerdown`,e=>{Q={x:e.clientX,y:e.clientY},V.ballEl.setPointerCapture(e.pointerId)}),V.ballEl.addEventListener(`pointermove`,e=>{Q&&(x.yaw-=(e.clientX-Q.x)*.02,x.pitch=wt(x.pitch+(e.clientY-Q.y)*.015),Q={x:e.clientX,y:e.clientY},Ct=0)}),V.ballEl.addEventListener(`pointerup`,()=>{Q=null});let Tt=((e,t)=>{let n=e*Math.PI/180,r=t*Math.PI/180;return[Math.cos(r)*Math.cos(n),Math.sin(r),-Math.cos(r)*Math.sin(n)]})(121.17,-21.57),Et=(()=>{let e=[0,1,0],t=Tt,n=[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],r=Math.hypot(n[0],n[1],n[2]);n=n.map(e=>e/r);let i=[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]],a=Math.cos(.66),o=Math.sin(.66);return[n[0]*a+i[0]*o,n[1]*a+i[1]*o,n[2]*a+i[2]*o]})(),Dt=(()=>{let e=7;return()=>(e=e*16807%2147483647,e/2147483647)})(),Ot=()=>{let e=Dt()*2-1,t=Dt()*6.2832,n=Math.sqrt(1-e*e);return[n*Math.cos(t),e,n*Math.sin(t)]},kt=new Float32Array(48),At=new Float32Array(12),jt=new Float32Array(12).fill(1e3),Mt=[66,67.2,68.4,69.6,70.8,72,88,91,93.5,95.8,97.8,99.6];function Nt(){let e=2*Math.PI/W(8);Mt.forEach((t,n)=>{let r=0;for(let e=0;e<=$e[9]*4&&(r=e/4,!(Math.log10(pe(bt(9,r))/31557600)>=t));e++);let i=u+e*(W(9)+r)+(n%2?1:-1)*(.08+.42*Dt()),a=-.15-.32*Dt(),o=[-Math.cos(a)*Math.sin(i),-Math.sin(a),-Math.cos(a)*Math.cos(i)];kt.set([o[0],o[1],o[2],t],n*4)})}Nt();let Pt=0,Ft=-1,It=-1,Lt=-20,Rt=null,zt=Array.from({length:260},()=>({dir:Ot(),b:.3+Dt(),fade:15+Dt()*6})),Bt=performance.now(),Vt=0,Ht={T:2.7255,la:0,t:T},Ut=e=>{if(k=requestAnimationFrame(Ut),!w||!E||!D)return;let t=Math.min(.1,(e-Bt)/1e3);if(Bt=e,x.playing&&x.mode!==`launch`){if(x.clock+=t,x.mode===`guided`){x.at+=t;let e=0;for(;e<$e.length-1&&x.at>=W(e+1);)e++;e!==x.ch&&yt(e),x.mode===`guided`&&(M=bt(x.ch,x.at-W(x.ch)))}else x.run&&(M=Math.min(1,M+t*.008),M>=1&&(x.run=!1));Ct+=t,!Z&&!Q&&Ct>2&&(x.yaw+=t*(x.mode===`guided`?2*Math.PI/W(8):.02))}N+=(M-N)*(1-Math.exp(-t/(x.mode===`guided`?.05:.35)));let n=pe(N),{la:i,T:a}=le(n);Ht={T:a,la:i,t:n};let o=Math.log10(n/C),s=Math.exp(i),l=r.clientWidth/Math.max(1,r.clientHeight);{let e=c(`sim-lcd`).getBoundingClientRect(),n=r.getBoundingClientRect(),i=V.lcdUp()?Math.max(0,n.bottom-e.top)/Math.max(1,n.height):.03;S+=(i-S)*(1-Math.exp(-t/.35))}let u=[Math.cos(x.pitch)*Math.sin(x.yaw),Math.sin(x.pitch),Math.cos(x.pitch)*Math.cos(x.yaw)],f=d({centre:[-u[0],-u[1],-u[2]],yaw:x.yaw,pitch:x.pitch,dist:1,fovY:1.4,aspect:l,near:.01,far:10,shiftY:S*.8}),{w:p,h:m}=D.begin([0,0,0]),g=m/Math.max(1,r.clientHeight),_=m/(2*f.tanHalf),v=Math.min(.5*(a/3e3)**4,.5*(a/3e3)**1.5,2.2),y=o<5.5?.6:0,b=$(9.3,9.95,o)*(1-$(10.28,10.34,o)),ee=$(10.28,10.34,o)*(1-$(12.5,14,o)),te=5200-2200*$(10.5,13.5,o);if(ce){let e=w.getError();e&&!A&&(A=`before fog: ${e}`)}E.fog(f,{aspect:l,shift:S*.8},{rot:h,T:a,glow:v,spots:1,shimmer:y,time:x.clock,home:[ee*.012,te,0,0]});let ne=$(9.3,9.95,o)*(1-$(12.5,14,o));if(O&&b+ne>.002&&!j.noMilky&&O.draw(f,{aspect:l,shift:S*.8,w:p,h:m,dev:g},{gain:.04*b,starGain:.5*ne,limit:7}),ce){let e=w.getError();e&&!A&&(A=`after fog+sky: ${e}`)}o>7.8&&E.galaxies(f,{D:ue(i),a:s,logY:o,gain:j.gain,px:_,boost:3.5,eh:o>10?de(i):1e9,dev:g});let T=[];if(o>9.6&&o<10.34){let e=n/C,t=e<138e8?.78:Math.max(.004,.78*(1-(e-138e8)/65e8)),r=$(9.6,9.9,o)*Math.min(4,.5/t),i=Math.min(.9,.022/t);for(let e=-12;e<=12;e++){let t=e/12*i*1.6,n=[Tt[0]+Et[0]*t,Tt[1]+Et[1]*t,Tt[2]+Et[2]*t],a=Math.hypot(n[0],n[1],n[2]),o=.36*Math.exp(-((e/9)**2));T.push({dir:[n[0]/a,n[1]/a,n[2]/a],col:[.75*r*o,.72*r*o,.68*r*o],size:i*.55})}T.push({dir:Tt,col:[2.2*r,2*r,1.6*r],size:Math.min(.3,.004/t)})}if(o>13.5&&o<21)for(let e of zt){let t=e.b*.3*$(13.5,14.2,o)*(1-$(e.fade-1,e.fade,o))*(.75+.25*Math.sin(x.clock*(.7+e.b)+e.fade*9));t>.002&&T.push({dir:e.dir,col:[t,t*.3,t*.1],size:.0016})}if(E.sprites(f,T,_,g),Rt&&!j.noEra){let n=e/1e3,r=o,i=$,s=(e,t,n,a)=>i(e,t,r)*(1-i(n,a,r)),c=Lt<r&&r-Lt<3;Pt+=t*(r<-12.3?1.4:r<-4.4?.8:r<5.6?.25:.05)*(x.playing?1:.15),c&&Lt<5.58&&r>=5.58&&(Ft=n);let u=r<5.58?0:r>5.75?1:Ft>0&&n-Ft<30?Math.min(1,(n-Ft)/5):1;for(let e=0;e<12;e++)c&&Lt<kt[e*4+3]&&r>=kt[e*4+3]&&(At[e]=n);for(let e=0;e<12;e++)jt[e]=At[e]>0&&r>=kt[e*4+3]-.5?n-At[e]:1e3;c&&Lt<99.9&&r>=99.9&&(It=n);let d=r>=99.9&&It>0?.05*Math.exp(-(n-It)/13):0;Rt.draw(f,{aspect:l,shift:S*.8},h,{w0:[1-i(-12.75,-12.35,r),s(-12.8,-12.55,-12.3,-11.8),s(-12.7,-12.2,-4.6,-3.8),s(-6.2,-5.5,-4.6,-4.2)],w1:[s(-4.8,-3.8,5.62,5.75)*(u>=1?0:1),i(3.5,5.2,r)*(u>=1?0:1),u,s(5.6,6.3,9.2,9.8)*(.4+.6*i(6,8.5,r))],w2:[s(5.7,6.5,8.6,9.1),s(7.9,8,9,9.2),s(8.6,9.2,9.8,10.05),s(8.9,9.1,9.8,10)],w3:[s(10.15,10.45,13.9,14.2),s(14,14.5,18.5,19),s(18.4,18.8,20.2,20.6),i(19.3,20,r)],w4:[1-i(20,40,r),d,Ft>0&&r>=5.58?n-Ft:1e3,0],T:a,logY:r,flow:Pt,time:x.clock,yaw:x.yaw,bh:kt,bhFlash:jt}),Lt=r}if(ce){let e=w.getError();e&&!A&&(A=`after all: ${e}`)}let re=1-$(5.4,5.7,o);D.finish(1-.45*re,.75-.4*re),V.ball.draw({right:f.right,up:f.up,fwd:f.fwd,hole:f.fwd,tanY:f.tanHalf,tanX:f.tanHalf*l},!!Q,`star`),e-Vt>100&&(rn(),Vt=e),z(),F.sync()},$=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Wt(e){let t=e/C;return e<=0x60b46dfc2cc38c0?y(e):t<1e11?`PREDICTED, WITH HIGH CONFIDENCE`:t<0x38d7ea4c68000?`PREDICTED, WITH FALLING CONFIDENCE`:`PREDICTED, WITH LOW CONFIDENCE`}function Gt(e){let t=e/C;return e<=0x60b46dfc2cc38c0?ee(e):t<2e10?`GALAXIES, DRIFTING APART`:t<0x5af3107a4000?`ONE GREAT GALAXY, ALONE`:t<1e100?`EMBERS AND BLACK HOLES`:`THINNING LIGHT`}let Kt=e=>e<3?String(Number((10**e).toPrecision(e<1?2:3))):e<6?Math.round(10**e).toLocaleString(`en-GB`):e<21?te(10**e).toLowerCase():e<1e3?`10${Y(Math.round(e))}`:`beyond counting`,qt=e=>e.charAt(0).toUpperCase()+e.slice(1),Jt=e=>[Kt(e),`light-years`],Yt=e=>e<1e-9?`${Number((e*0xe8d4a51000).toPrecision(2))} trillionths of a metre`:e<1e-6?`${Math.round(e*1e9)} nanometres`:e<.001?`${Number((e*1e6).toPrecision(2))} micrometres`:e<1?`${Number((e*1e3).toPrecision(2))} mm`:e<1e3?`${Number(e.toPrecision(2))} metres`:e<0xe8d4a51000?`${Number((e/1e3).toPrecision(2))} km`:`10${Y(Math.round(Math.log10(e)))} metres`,Xt=e=>e<1e-8?`gamma and X-rays`:e<38e-8?`the ultraviolet`:e<7e-7?`visible light`:e<.001?`the infrared`:e<1?`microwaves`:`radio waves`,Zt=e=>e>=12e3?`blue-white`:e>=5500?`white`:e>=3500?`orange-white`:e>=1800?`orange`:e>=900?`dull red`:`dark`,Qt=Math.log(10),$t=38e4*C,en=le($t).la,tn=299792458/oe/94607e11;function nn(e,t,n){let r=c(`sim-view`).dataset.view??`overview`,i=Math.exp(t),a=e/C,o=e/ae;if(r===`stretch`){tt.draw({la:t,time:x.clock,fog:e<$t}),it.draw({tGyr:o});let n=he(Math.log(2)/_e(Math.min(i,1e6))/C*C);dt.set(`double`,n.n,n.unit.replace(/\byears\b/,`yr`)),dt.set(`pace`,ve(i)?`Speeding up`:`Slowing down`);let r=Math.abs(t)<.005,a=Math.abs(t)/Qt;dt.set(`stretch`,r?`1×`:e<$t?`Trapped`:a>=1e3?`Beyond counting`:`${Kt(a)}×`)}if(r===`horizons`){let e=t>40,n=be(t),r=Math.log10(e?tn:de(t)*i*xe),a=e?0:de(t);at.draw({see:n*xe/1e9,reach:a*xe/1e9});let o=Math.log10(n*xe)+t/Qt,s=Jt(o),c=Jt(r);ft.set(`see`,qt(s[0]),s[1]),ft.set(`reach`,c[0],c[1]);let l=a>=n?1:(a/n)**3;ft.set(`share`,l>=.999?`100%`:l>=.01?`${Math.round(l*100)}%`:l>=1e-6?`${Number((l*100).toPrecision(1))}%`:`Our group only`)}if(r===`light`){let r=e>=$t;ot.draw({T:n,free:r}),st.draw({free:r});let i=Math.log10(.0028978/2.7255)+t/Qt,a=10**Math.min(i,300);pt.set(`peak`,i>12?qt(Kt(i)):Yt(a),i>12?`metres`:``),pt.set(`band`,Xt(a).replace(/^./,e=>e.toUpperCase())),pt.set(`eye`,Zt(n).replace(/^./,e=>e.toUpperCase()));let o=(t-en)/Qt;pt.set(`stretch`,r?o<.02?`1×`:o>=1e3?`Beyond counting`:`${Kt(o)}×`:`Not yet`)}if(r===`calendar`){ct.draw({years:a});let e=Math.abs(a/X-1)<1e-4;a/X-1,mt.set(`date`,e?`Midnight`:a<X?Xe(a):`Past midnight`);let t=he(X/365*C),n=he(X/365/86400*C);mt.set(`day`,t.n,t.unit.replace(/\byears\b/,`yr`)),mt.set(`sec`,n.n,n.unit.replace(/\byears\b/,`yr`));let r=(0x5af3107a4000-a)/X;mt.set(`more`,r>0?`${Math.round(r).toLocaleString(`en-GB`)}`:`They’re out`,r>0?`more years`:``)}if(r===`stars`){lt.draw({tGyr:o}),ut.draw({years:a});let e=a>=9e13?-1:qe(o);ht.set(`born`,e<0?`None any more`:e===0?`None yet`:e>=.995&&e<1.005?`1×`:e>=.01?`${Number(e.toPrecision(2))}×`:`10${Y(Math.round(Math.log10(e)))}×`,e>0?`today’s`:``);let t=G.filter(e=>Ae(e,a)).length;ht.set(`kinds`,t===G.length?`Every kind`:t===0?a<1e8?`None yet`:`None`:t===1?`Red dwarfs only`:`${t} of ${G.length}`);let n=0x5af3107a4000-a,r=he(Math.max(n,0)*C);ht.set(`last`,n>0?r.n:`They’re out`,n>0?r.unit.replace(/\byears\b/,`yr`):``)}}function rn(){if(x.mode===`launch`)return;let{T:e,la:t,t:n}=Ht,r=Math.exp(t),i=he(n);if(q(`age`,`Age`,i.n,i.unit.replace(/\byears\b/,`yr`).replace(/\byear\b/,`yr`)),q(`temp`,`Temperature`,e>=1e5?te(e).toLowerCase():e>=10?Math.round(e).toLocaleString(`en-GB`):e>=.01?e.toPrecision(2):e>1e-300?`10${Y(Math.round(Math.log10(e)))}`:`all but 0`,`K`),t>40){let e=Math.log10(93e9)+t/Math.LN10;q(`size`,`Width of our patch`,e<1e3?`10${Y(Math.round(e))}`:`Beyond counting`,`light-years`)}else{let e=ne(r).toLowerCase(),t=e.search(/ (light-years|kilometres) /);q(`size`,`Width of our patch`,e.slice(0,t),e.slice(t+1).replace(/ across$/,``))}let a=J(Gt(n)),o=a.indexOf(`: `);q(`made`,`Made of`,o<0?a:qt(a.slice(o+2))),q(`sure`,`How sure`,Wt(n).split(`, `)[0].toLowerCase().replace(/^./,e=>e.toUpperCase()),(Wt(n).split(`, `)[1]??``).toLowerCase().replace(/^with /,``)),Re.draw(me(n));let s=n/C,l=.012*$(8.3,10.14,Math.log10(s))+.01*$(10.14,11.5,Math.log10(s));if(n<1e-5)ze.draw({Xp:0,Xn:0,Xd:0,Y:0,Z:0,T:e,cooking:!1,before:!0});else if(n<3600){let e=re(gt,Math.max(1,n));ze.draw({Xp:e.Xp,Xn:e.Xn,Xd:e.Xd,Y:e.Y,Z:0,T:e.T,cooking:!0,before:!1})}else{let t=2*_t.DH*(1-_t.Y);ze.draw({Xp:1-_t.Y-t-l,Xn:0,Xd:t,Y:_t.Y,Z:l,T:e,cooking:!1,before:!1})}c(`sim-st`).querySelector(`.lcd-cap`).textContent=n<1e-5?`The recipe: not yet`:n<3600?`The recipe: cooking`:`The recipe: ordinary matter, by weight`,nn(n,t,e),H.lock(x.mode===`guided`),c(`tl-lever-sec`).classList.toggle(`is-auto`,x.mode===`guided`),H.set(M),H.actual(N);let u=x.mode===`guided`?x.at-W(x.ch):0;V.say(x.mode===`guided`?nt(x.ch,u):rt({t:n,grade:Wt(n)})),U.set(x.mode===`guided`?x.ch:-1,x.mode===`guided`?x.at/Me:1),V.setPlay()}V.launch([{label:`The expansion`,done:`PLANCK 2018`,min:380,run:()=>{le(1),le(0x56bc75e2d63100000),ue(0)}},{label:`The cosmic web`,done:`GROWN`,min:420,run:()=>{if(w=f(r),!w)throw Error(`no WebGL 2 with float pictures`);let e=matchMedia(`(pointer: coarse)`).matches&&!i,t=Ze(e?32:64,e?150:200);se=(()=>{let e=0,n=0,r=0,i=0,a=0,o=t.n**3;for(let s=0;s<o;s++){let o=t.data[s*5+3],c=Math.hypot(t.data[s*5],t.data[s*5+1],t.data[s*5+2]);(!Number.isFinite(o)||!Number.isFinite(c))&&a++,r+=o,i=Math.max(i,o),n+=c,e=Math.max(e,c)}return{n:t.n,meanDisp:n/o,maxDisp:e,meanDens:r/o,maxDens:i,nan:a}})(),E=He(w,t),Rt=We(w,()=>E.cmb),D=p(w,r,{maxScale:1,knee:.9});try{O=m(w,{large:i,starParts:1})}catch{O=null}k=requestAnimationFrame(Ut)}},{label:`The oldest light`,done:`PLANCK’S MAP`,min:380},{label:`Its spots`,done:`RAISED 10,000 TIMES`,amber:!0,min:400},{label:`Galaxies`,done:`DRAWN BIGGER`,amber:!0,min:360},{label:`Light’s travel time`,done:`LEFT OUT`,amber:!0,min:380},{label:`Cinematography`,done:`DRAMATISED`,amber:!0,min:360},{label:`The recipe`,done:`THREE MINUTES`,min:360},{label:`The lever`,done:`GREASED`,min:330}],()=>{vt()}),new URLSearchParams(location.search).has(`debug`)&&(window.__tl={get narration(){let e=F.audio;return e?{at:e.currentTime,run:x.at,paused:e.paused,duration:e.duration,view:V.view,own:R,ended:P}:null},chapter:e=>{x.mode!==`guided`&&vt(),yt(e,!0)},seek:e=>{x.mode!==`guided`&&vt();let t=0;for(;t<$e.length-1&&e>=W(t+1);)t++;yt(t,!0),x.at=e},get state(){return{mode:x.mode,ch:x.ch,at:x.at,u:N,t:Ht.t,years:Ht.t/C,T:Ht.T,la:Ht.la,fps:D?.fps,scale:D?.scale}},at:e=>{St(),M=N=L(e*C)},view:x,dbgOpt:j,get web(){return se},get err(){return w?.getError()},errAt:A,pause:()=>{x.playing=!1,V.setPlay()}}),window.addEventListener(`pagehide`,()=>{cancelAnimationFrame(k),D?.destroy()})}it();