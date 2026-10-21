import{C as e,S as t,T as n,_ as r,a as i,b as a,c as o,f as s,g as c,h as l,i as u,m as d,n as f,p,r as m,s as h,t as g,u as _,v,w as y}from"./narration.Crm9S85h.js";import{a as ee,d as b,i as x,l as S,n as C,s as te,t as ne,u as w}from"./views.C-9pmGw3.js";import{n as re,r as T,t as E}from"./spectrum.DEqPQNkz.js";var D=31557600,O=1/63241.077,k=6957e5/94607e11,ie=4.37,A=-120*O,j=4.368102499108293-30*O,M=1/D,ae={spacing:1,length:90},oe=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],N=(e,t,n=1)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n],P=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],F=e=>P(e,1/Math.hypot(...e)),se=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],ce=(e,t)=>{let n=e*Math.PI/180,r=t*Math.PI/180;return[Math.cos(r)*Math.cos(n),Math.cos(r)*Math.sin(n),Math.sin(r)]},I=ce(315.73,-.68),L=F(N([0,0,1],I,-I[2])),le=se(I,L),R=P(I,4.368102499108293),ue=F(N(P(le,.96),L,.28)),de=13*O,fe=[{name:`the Sun`,pos:P(I,A),T:5772,R:1},{name:`Alpha Centauri A`,pos:N(R,ue,de*.45),T:5790,R:1.22},{name:`Alpha Centauri B`,pos:N(R,ue,-.000113059428130865),T:5260,R:.86},{name:`Proxima Centauri`,pos:N(P(I,A),ce(313.94,-1.93),4.2465),T:3042,R:.154}],pe=e=>Math.tanh(Math.abs(e)),me=e=>2/(Math.exp(2*Math.abs(e))+1),he=e=>Math.cosh(e),ge=e=>.5*Math.log((1+e)/(1-e));function z(e,t,n){let r=pe(n),i=he(n),a=oe(e,t),o=(a+r)/(1+r*a),s=N(e,t,-a),c=Math.hypot(...s),l=Math.sqrt(Math.max(0,1-o*o));return{d:c>1e-15?N(P(t,o),P(s,1/c),l):P(t,Math.sign(a)||1),D:i*(1+r*a)}}var B=2500*299792458**2,V=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},H=(e,t,n)=>Math.exp(Math.log(e)+(Math.log(t)-Math.log(e))*n),_e=ge(.3),U=ge(.9),W=Math.acosh(2e4),G=Math.acosh(300),K=134,q=Math.acosh(60),ve=Math.acosh(450),J=.06,ye=(e,t=.01)=>Math.min(72,Math.max(t,Math.sqrt(2*me(e))*180/Math.PI*7)),be=e=>{let t=Math.sqrt(2*Math.max(1/(367*Math.cosh(e))-me(e),1e-14));return Math.min(72,2*t*180/Math.PI/2.1)},xe=[`Setting off`,`Nine-tenths`,`Into the nines`,`Fire ahead`,`Alpha Centauri`,`The turn`,`Racing home`,`Home`],Y=e=>Math.cosh(e)*M,Se=[{ch:0,dur:14,eta:()=>0,rate:()=>M},{ch:0,dur:14,eta:e=>V(e)*_e,rate:(e,t)=>Y(t)},{ch:1,dur:30,eta:e=>_e+(U-_e)*V(e/.55),rate:(e,t)=>Y(t)},{ch:2,dur:14,eta:e=>U+(q-U)*V(e),rate:(e,t,n)=>H(Y(t),n*J,V(e/.8)),fov:e=>ye(U+(q-U)*V(e))},{ch:2,dur:12,eta:e=>q+(ve-q)*e,rate:(e,t,n)=>n*J,fov:e=>ye(q+(ve-q)*e)},{ch:2,dur:14,eta:e=>ve+(W-ve)*V(e),rate:(e,t,n)=>n*J,fov:e=>ye(ve+(W-ve)*V(e))},{ch:3,dur:24,eta:()=>W,rate:(e,t,n)=>n*J,fov:e=>e<.65?H(ye(W),be(W),V(e/.15)):H(be(W),72,V((e-.65)/.2))},{ch:4,dur:26,eta:e=>W*(1-V(e)),rate:(e,t,n)=>H(n*J,3600*Y(t),V(e))},{ch:4,dur:8,eta:()=>0,rate:()=>3600*M}],Ce=[{ch:5,dur:20,eta:e=>-U*V((e-.66)/.34),rate:(e,t)=>3600*Y(t),yaw:e=>e<.5?K*V((e-.1)/.25):K+46*V((e-.5)/.14)},{ch:6,dur:30,eta:e=>-(e<.3?U+(G-U)*V(e/.3):e<.7?G:G+(U-G)*V((e-.7)/.3)),rate:(e,t,n)=>e<.5?H(3600*Y(t),n*J,V(e/.3)):H(n*J,Y(t),V((e-.5)/.5)),yaw:()=>180,fov:e=>ye(-(e<.3?U+(G-U)*V(e/.3):e<.7?G:G+(U-G)*V((e-.7)/.3)))},{ch:7,dur:18,eta:e=>-U*(1-V(e)),rate:(e,t)=>Y(t),yaw:()=>180},{ch:7,dur:8,eta:()=>0,rate:()=>M,yaw:()=>180}],we=1/120;function Te(e,t,n,r){let i={...t},a=[],o=[],s=0;for(let t of e){o.push(s);let e=Math.round(t.dur/we);for(let o=0;o<e;o++){let c=(o+.5)/e,l=t.eta(c),u=t.rate(c,l,n);i.x+=Math.tanh(l)*u*we,i.t+=u*we,i.tau+=u/Math.cosh(l)*we;let d=t.eta((o+1)/e);i.e=(i.e??0)+Math.abs(Math.cosh(d)-Math.cosh(i.eta)),i.eta=d,s+=we,r&&o%2==1&&a.push([s,i.x,i.t,i.tau,i.eta,t.fov?.((o+1)/e)??72,t.yaw?.((o+1)/e)??0,t.ch,i.e])}}return{st:i,rows:a,starts:o,dur:s}}function X(e,t,n,r){let i=Math.log(1e-8),a=Math.log(1e4);for(let o=0;o<90;o++){let o=(i+a)/2,s=Te(e,t,Math.exp(o),!1).st.x;(r?s<n:s>n)?i=o:a=o}return Math.exp((i+a)/2)}function Ee(){let e={x:0,t:0,tau:0,eta:0,e:0},t=Te(Se,e,X(Se,e,j,!0),!0),n=X(Ce,t.st,0,!1),r=Te(Ce,t.st,n,!0),i=[[0,e.x,e.t,e.tau,0,72,0,0,0],...t.rows,...r.rows.map(e=>[e[0]+t.dur,...e.slice(1)])],a=t.dur+r.dur,o=i.length;return{dur:a,chapters:[...t.starts.filter((e,t)=>Se[t].ch!==Se[t-1]?.ch),...r.starts.filter((e,t)=>Ce[t].ch!==Ce[t-1]?.ch).map(e=>e+t.dur)],at(e){let t=Math.min(o-1.000001,Math.max(0,e/a*(o-1))),n=Math.floor(t),r=t-n,s=i[n],c=i[n+1],l=e=>s[e]+(c[e]-s[e])*r;return{x:l(1),t:l(2),tau:l(3),eta:l(4),fov:H(s[5],c[5],r),yaw:l(6),ch:r<.5?s[7]:c[7],e:l(8)}}}}var De=14,Oe=64,ke=e=>.06+.16*Math.min(1,Math.max(0,Math.log10(e)/4));function Z(e,t){let n=new Float64Array(65);for(let r=0;r<Oe;r++){let i=V((r+.5)/Oe);n[r+1]=n[r]+Math.tanh(Math.abs(e)*(1-i))*H(t,M,i)/Oe}return n}function Ae(e,t,n){if(e.ap){let t=e.ap,r=Math.cosh(e.eta);t.u=Math.min(1,t.u+n/t.T);let i=V(t.u),a=H(t.r0,M,i),o=t.u*Oe,s=Math.min(63,Math.floor(o)),c=t.P[s]+(t.P[s+1]-t.P[s])*(o-s);return e.eta=t.dir*Math.abs(t.eta0)*(1-i),e.x=t.x0+t.dir*t.rem0*(c/t.P[Oe]),e.t+=a*n,e.tau+=a/Math.cosh(e.eta)*n,e.e=(e.e??0)+Math.abs(Math.cosh(e.eta)-r),t.u>=1&&(e.x=t.dir>0?j:0,e.eta=0,e.ap=null),{arriving:!0,rate:a}}let r=Math.sign(e.eta||t)||1,i=r>0?j-e.x:e.x-0,a=Math.cosh(e.eta);e.eta+=(t-e.eta)*(1-Math.exp(-n/.6)),Math.abs(e.eta)<1e-6&&t===0&&(e.eta=0),e.e=(e.e??0)+Math.abs(Math.cosh(e.eta)-a);let o=pe(e.eta),s=Math.min(Math.abs(e.x-0),Math.abs(j-e.x)),c=s*D,l=Math.min(1,Math.max(0,(c-90)/200)),u=Math.max(Y(e.eta),Math.min(ke(Math.cosh(e.eta)),s/(Math.max(o,.001)*1.1))*l);if(Math.sign(e.eta)===r&&Math.abs(e.eta)>.001&&i>0){let n=u,a=Z(e.eta,n),o=i/a[Oe];if(o<=De){if(o<5){let t=M,r=n;for(let n=0;n<50;n++){let n=Math.sqrt(t*r);i/Z(e.eta,n)[Oe]>5?t=n:r=n}n=Math.sqrt(t*r),a=Z(e.eta,n),o=i/a[Oe]}return e.ap={dir:r,x0:e.x,rem0:i,eta0:e.eta,r0:n,T:o,u:0,P:a},Ae(e,t,0)}}return e.x+=Math.tanh(e.eta)*u*n,e.t+=u*n,e.tau+=u/Math.cosh(e.eta)*n,r>0&&e.x>=4.367628123885366&&(e.x=j,e.eta=0),r<0&&e.x<=0&&(e.x=0,e.eta=0),{arriving:!1,rate:u}}var je=e=>e.t-(e.x-A),Me=e=>e.t-Math.tanh(e.eta)*(e.x-A);function Ne(e){let t=Math.abs(e)*D,n=(e,t)=>`${e} ${t}${e===1?``:`s`}`;if(t<60)return`${t<10?t.toFixed(1):Math.floor(t)} s`;if(t<3600)return`${Math.floor(t/60)} min ${Math.floor(t%60)} s`;if(t<86400)return`${Math.floor(t/3600)} h ${Math.floor(t%3600/60)} min`;if(t<5184e3)return`${n(Math.floor(t/86400),`day`)} ${Math.floor(t%86400/3600)} h`;let r=Math.abs(e);if(r<1)return n(Math.floor(r*12),`month`);if(r<100){let e=Math.floor(r);return`${e} yr ${Math.floor((r-e)*12)} mo`}return`${Math.round(r).toLocaleString(`en-GB`)} yr`}function Pe(e){let t=Math.abs(e)*D,n=(e,t)=>String(e).padStart(t,` `);if(t<60)return`${n(Math.floor(t),2)} s`;if(t<3600)return`${n(Math.floor(t/60),2)} min ${n(Math.floor(t%60),2)} s`;if(t<86400)return`${n(Math.floor(t/3600),2)} h ${n(Math.floor(t%3600/60),2)} min`;if(t<5184e3)return`${n(Math.floor(t/86400),2)} days ${n(Math.floor(t%86400/3600),2)} h`;let r=Math.abs(e),i=Math.floor(r);return`${i} yr ${n(Math.floor((r-i)*12),2)} mo`}function Fe(e){let t=me(e);if(t>=.01)return`${(100*(1-t)).toFixed(t>.1?0:1)}%`;let n=Math.max(1,Math.ceil(-Math.log10(t))-1);return`${(100*(1-t)).toFixed(Math.min(12,n+1))}%`}var Ie=`143, 216, 238`,Q=`242, 180, 90`,Le=`255, 138, 128`,Re=A+ie,ze=8,Be=8,Ve=6,He=18,Ue=.15,We=.35;function Ge(e){let t=e.getContext(`2d`);return{widthFor(e,t){let n=(e-Ve-He-8)/ie;return Math.round(16+(t+We+Ue)*n)},draw(n){let r=e.getBoundingClientRect(),i=Math.min(window.devicePixelRatio||1,2);if(r.width<20||r.height<20)return;let a=Math.round(r.width*i),o=Math.round(r.height*i);(e.width!==a||e.height!==o)&&(e.width=a,e.height=o),t.setTransform(i,0,0,i,0,0);let s=r.width,c=r.height,l=ze,u=Be,d=Ve,f=He,p=s-l-u,h=c-d-f;t.clearRect(0,0,s,c);let g=n.frame===`yours`,_=Math.cosh(n.eta),v=Math.sign(n.eta),y=v?me(n.eta):1,ee=(e,t)=>{let r=e-n.x,i=t-n.t;return[_*(r-v*i+v*y*i),_*(i-v*r+v*y*r)]},b=-.15,x=Math.max(1,n.tEnd+We-b),S=(h-8)/ie,C=g?(h-8)/(ie+.7):Math.max(Math.min(S,p/x),.6*S),te=ie*C,ne=d+(h-te)/2,w=g?-.3*p/C:b;!g&&(n.t-w)*C>p*.85&&(w=n.t-p*.85/C);let re=w+p/C,T=(e,t)=>{if(!g)return[l+(t-w)*C,ne+te-(e-A)*C];let[n,r]=ee(e,t);return[l+(r-w)*C,d+h/2-n*C]},E=(e,n)=>{let[r,i]=T(e[0],e[1]),[a,o]=T(n[0],n[1]),s=l+p+4,c=d+h+4,u=0,f=1,m=a-r,g=o-i;for(let[e,t]of[[-m,r-4],[m,s-r],[-g,i-2],[g,c-i]]){if(e===0){if(t<0)return;continue}let n=t/e;if(e<0){if(n>f)return;n>u&&(u=n)}else{if(n<u)return;n<f&&(f=n)}}t.moveTo(r+m*u,i+g*u),t.lineTo(r+m*f,i+g*f)},D=(e,n,r,i=[])=>{t.strokeStyle=e,t.lineWidth=n,t.setLineDash(i),t.beginPath(),r(),t.stroke(),t.setLineDash([])},O=(e,n,r,i)=>{let[a,o]=T(e,n);t.fillStyle=i,t.beginPath(),t.arc(a,o,r,0,7),t.fill()};t.fillStyle=`rgba(6, 10, 16, 0.55)`,t.fillRect(l,d,p,h),t.font=m(t.canvas,`fig`),t.textAlign=`center`;let k=re-w,j=k>14?2:k>3?1:k>1.6?.5:.25;for(let e=Math.ceil(w/j)*j;e<=re+1e-9;e+=j){let n=l+(e-w)*C;t.strokeStyle=`rgba(${Ie}, 0.08)`,t.lineWidth=1,t.beginPath(),t.moveTo(n,d),t.lineTo(n,d+h),t.stroke(),t.fillStyle=`rgba(${Ie}, 0.6)`,n>18&&n<l+p-10&&t.fillText(g?Math.abs(e)<1e-9?`now`:`${e>0?`+`:`−`}${+Math.abs(e).toFixed(2)}`:`${+e.toFixed(2)} yr`,n,c-4)}if(t.save(),t.beginPath(),t.rect(l,d,p,h),t.clip(),g)for(let e=Math.floor(n.t)-12;e<=Math.ceil(n.t)+12;e++)D(`rgba(${Ie}, 0.1)`,1,()=>E([A-40,e],[Re+40,e]));for(let e of[A,Re])D(`rgba(${Ie}, 0.55)`,1.4,()=>E([e,n.t-40],[e,n.t+40]));{let[e,r]=T(n.x,n.t),i=l+p-e;t.fillStyle=`rgba(${Ie}, 0.12)`,t.beginPath(),t.moveTo(e,r),t.lineTo(e+i,r-i),t.lineTo(e+i,r+i),t.closePath(),t.fill(),D(`rgba(${Ie}, 0.9)`,1.2,()=>{t.moveTo(e,r),t.lineTo(e+i,r-i),t.moveTo(e,r),t.lineTo(e+i,r+i)})}let M=[...n.path,[n.x,n.t],...(n.plan??[]).filter(([,e])=>e>n.t)],ae=(e,t)=>t-(e-A),oe=e=>{for(let t=1;t<M.length;t++){let n=M[t-1],r=M[t],i=ae(n[0],n[1]),a=ae(r[0],r[1]);if(i<e&&a>=e){let t=(e-i)/Math.max(1e-12,a-i);return[n[0]+(r[0]-n[0])*t,n[1]+(r[1]-n[1])*t]}}return null},N=ae(n.x,n.t);for(let e=1;e<=Math.ceil(n.t)+12;e++){let t=oe(e),n=e<=N;D(`rgba(${Le}, ${n?.75:.4})`,1.1,()=>E([A,e],t??[39.99810249910829,e+40]),n?[]:[3,3]),O(A,e,2.2,`rgba(${Le}, 0.9)`)}n.trail.forEach(([e,t,r],i)=>{let a=.42*(1-i/n.trail.length)**1.6;D(`rgba(${Q}, ${a.toFixed(3)})`,1,()=>E([e-40,t-r*40],[e+40,t+r*40]))});let P=e=>{for(let t=1;t<e.length;t++)E(e[t-1],e[t])};n.plan&&D(`rgba(255, 255, 255, 0.4)`,1.4,()=>P(n.plan),[2,4]),D(`rgba(255, 255, 255, 0.95)`,1.8,()=>P([...n.path,[n.x,n.t]]));let F=Math.tanh(n.eta);D(`rgb(${Q})`,1.7,()=>E([n.x-40,n.t-F*40],[n.x+40,n.t+F*40]));for(let e=1;e<=Math.floor(N);e++){let t=oe(e);if(!t)continue;let r=e===n.birthday?Math.exp(-n.birthdayAge/1.2):0;r>.02&&O(t[0],t[1],3+7*r,`rgba(${Le}, ${(.35*r).toFixed(3)})`),O(t[0],t[1],2.6,`rgb(${Le})`)}t.restore();let[se,ce]=T(A,n.reckoned);se>=6&&se<=l+p+2&&ce>=d&&ce<=d+h&&(t.fillStyle=`rgb(${Q})`,t.beginPath(),t.arc(se,ce,3.4,0,7),t.fill());let[I,L]=T(n.x,n.t);t.font=m(t.canvas,`fig`,{weight:600,sans:!0});let le=(e,n,r,i,a)=>{let[o,s]=r,c=Math.hypot(o,s)||1;o/=c,s/=c,(o<-1e-6||Math.abs(o)<1e-6&&s>0)&&(o=-o,s=-s);let u=t.measureText(e).width,f=n[0]+o*i,m=n[1]+s*i,g=f+o*u,_=m+s*u;return Math.min(f,g)<10||Math.max(f,g)>l+p-2||Math.min(m,_)<16||Math.max(m,_)>d+h-2?!1:(t.save(),t.translate(f,m),t.rotate(Math.atan2(s,o)),t.textAlign=`left`,t.fillStyle=a,t.shadowColor=`#000`,t.shadowBlur=4,t.fillText(e,0,-5),t.restore(),!0)};{let[e,r]=T(n.x-1,n.t-F),[i,a]=T(n.x+1,n.t+F);le(`YOUR “NOW”`,[I,L],[i-e,a-r],16,`rgb(${Q})`),le(`YOUR LIGHT`,[I,L],[1,F>=0?1:-1],16,`rgba(${Ie}, 0.95)`)||le(`YOUR LIGHT`,[I,L],[1,F>=0?-1:1],30+t.measureText(`YOUR “NOW”`).width,`rgba(${Ie}, 0.95)`);let o=Math.max(1,Math.ceil(w)),s=Math.max(o,Math.floor(n.t+.6)+1);for(let e=s,t=!1;e<=Math.ceil(n.t)+12||!t;e++){e>Math.ceil(n.t)+12&&(e=o,t=!0);let[r,i]=T(A,e),[a,s]=T(A+1,e+1);if(!(r<12||r>l+p-40)&&(le(`BIRTHDAYS`,[r,i],[a-r,s-i],8,`rgba(${Le}, 0.95)`)||t))break}}t.fillStyle=`#fff`,t.beginPath(),t.arc(I,L,3.8,0,7),t.fill(),t.font=m(t.canvas,`fig`,{weight:600,sans:!0});let R=L<22;t.textAlign=`center`,t.fillText(`YOU`,I,L+(R?16:-8)),t.font=m(t.canvas,`fig`,{weight:600}),t.fillStyle=`rgba(${Ie}, 0.75)`,t.textAlign=`left`;let ue=e=>{let[t,r]=T(e,n.t-1),[i,a]=T(e,n.t+1);return Math.abs(i-t)<1e-9?r:r+(12-t)/(i-t)*(a-r)},de=ue(A),fe=ue(Re);de>16&&de<d+h&&t.fillText(`EARTH`,14,de-5),fe>d&&fe<d+h-12&&t.fillText(`ALPHA CEN`,14,fe+13)}}}var Ke=[[.001368,39e-6,.00645],[.004243,12e-5,.02005],[.01431,396e-6,.06785],[.04351,.00121,.2074],[.13438,.004,.6456],[.2839,.0116,1.3856],[.34828,.023,1.74706],[.3362,.038,1.77211],[.2908,.06,1.6692],[.19536,.09098,1.28764],[.09564,.13902,.81295],[.03201,.20802,.46518],[.0049,.323,.272],[.0093,.503,.1582],[.06327,.71,.07825],[.1655,.862,.04216],[.2904,.954,.0203],[.43345,.99495,.00875],[.5945,.995,.0039],[.7621,.952,.0021],[.9163,.87,.00165],[1.0263,.757,.0011],[1.0622,.631,8e-4],[1.0026,.503,34e-5],[.85445,.381,19e-5],[.6424,.265,5e-5],[.4479,.175,2e-5],[.2835,.107,0],[.1649,.061,0],[.0874,.032,0],[.04677,.017,0],[.0227,.00821,0],[.011359,.004102,0],[.00579,.002091,0],[.002899,.001047,0],[.00144,52e-5,0],[69e-5,249e-6,0],[332e-6,12e-5,0],[166e-6,6e-5,0],[83e-6,3e-5,0],[42e-6,15e-6,0]];function qe(e){if(e<380||e>780)return[0,0,0];let t=(e-380)/10,n=Math.min(Ke.length-2,Math.floor(t)),r=t-n;return[0,1,2].map(e=>Ke[n][e]*(1-r)+Ke[n+1][e]*r)}var Je=([e,t,n])=>[3.2406*e-1.5372*t-.4986*n,-.9689*e+1.8758*t+.0415*n,.0557*e-.204*t+1.057*n],Ye=e=>{let t=47.99*545.1/Math.max(e,.001);return t>80?0:1472500*545.1**3/(t<.001?t+.5*t*t:Math.expm1(t))},Xe=(e,t)=>{let n=47.99*e/Math.max(t,.001);return n>80?0:1472500*e**3/(n<.001?n+.5*n*n:Math.expm1(n))},Ze=2.4;function Qe(){let e=new Float32Array(1024),t=e=>{let t=[0,0,0];for(let n=380;n<=780;n+=2){let r=299792.458/n,i=Xe(r,e)*(r*r),a=qe(n);t[0]+=i*a[0],t[1]+=i*a[1],t[2]+=i*a[2]}return Je(t)},n=t(5800),r=.2126*n[0]+.7152*n[1]+.0722*n[2],i=Ye(5800)/r;for(let n=0;n<256;n++){let r=10**(Ze+4.6*n/255),a=t(r),o=Ye(r),s=o>1e-30?a.map(e=>Math.max(0,e*i/o)):[1,0,0];e.set([s[0],s[1],s[2],1],n*4)}let a=0;for(;a<256&&e[a*4+1]===0&&e[a*4+2]===0;)a++;for(let t=0;t<a&&a<256;t++)e.set(e.subarray(a*4,a*4+4),t*4);return e}function $e(e,t){let n=Math.min(255,Math.max(0,(Math.log10(Math.max(t,1))-Ze)/4.6*255)),r=Math.min(254,Math.floor(n)),i=n-r;return[0,1,2].map(t=>e[r*4+t]*(1-i)+e[(r+1)*4+t]*i)}function et(e,t){let n=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],r=n(e);if(r<=1e-30)return e;let i=e.map(e=>Math.max(0,e/r)**t),a=Math.max(n(i),1e-30);return i.map(e=>e*r/a)}var tt=Qe(),nt=fe.length;function rt(e,t,n,r,i=0){let a=P(I,Math.sign(t)||n||1),o=0,s=(e,t)=>{r.set([e[0],e[1],e[2],t[0],t[1],t[2]],o*6),o++},c=P(I,e);for(let e of fe){let n=N(e.pos,c,-1),r=Math.hypot(...n),{d:o,D:l}=z(P(n,1/r),a,t),u=Math.PI*(e.R*k/r)**2,d=e.name===`Proxima Centauri`,f=u*Ye(l*e.T)/(l*l)*(e.name===`the Sun`?1+60*i:d?25:1),p=et($e(tt,l*(e.name.startsWith(`Alpha Centauri`)?5525+(e.T-5525)*6:e.T)),d?7:3.5);if(e.name===`Alpha Centauri A`){let e=et($e(tt,l*5300),2),t=Math.max(0,1-Math.abs(Math.log10(l))/.3),n=e.map((e,n)=>e*(1-t*(1-[1,.95,.3][n]))),r=e=>.2126*e[0]+.7152*e[1]+.0722*e[2];p=n.map(e=>e*r(p)/Math.max(1e-30,r(n)))}s(o,p.map(e=>e*f))}return o}var it=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uScene, uPrev;
uniform float uLevel, uRate, uKey, uGlare;
void main() {
  // (A grid of 48 samples across the whole picture, three levels below the top of its pyramid: the top level of a
  // picture whose sides aren't powers of two is made from only part of it, which made the exposure depend on the
  // window's size.)
  // (Blocks of about 32 pixels, five levels below the top, 160 of them: small enough to be mostly one brightness.)
  float prev = texture(uPrev, vec2(0.5)).r;
  float exPrev = clamp(uKey / max(exp(prev), 1e-30), 1e-30, 1.3); // the exposure the scene was drawn with
  float lod = max(0., uLevel - 6.), top = 1e-30;
  for (int j = 0; j < 20; j++) for (int i = 0; i < 32; i++) { float b = textureLod(uScene, (vec2(float(i), float(j)) + 0.5) / vec2(32., 20.), lod).a; top = max(top, b * b); }
  // The typical block: the average of the blocks' logarithms, each block no darker than a hundredth of the brightest
  // (so empty sky doesn't drag it down); the brightest are then compressed on the screen (FINAL), so a fire ten
  // thousand times brighter at its heart than at its rim shows both.
  float sum = 0.;
  for (int j = 0; j < 20; j++) for (int i = 0; i < 32; i++) { float b = textureLod(uScene, (vec2(float(i), float(j)) + 0.5) / vec2(32., 20.), lod).a; sum += log(max(b * b, top * 1e-2)); }
  // (And the glare of a sun in view, as an eye adapts to it: arriving at Alpha Centauri, the Milky Way fades as its two
  // suns blaze; uGlare, from renderer.ts.)
  // (At most three stops darker: the Milky Way dims, and stays.)
  float T = exp(sum / 640.) / exPrev;
  float l = log(T) + min(log(1. + uGlare / max(T, 1e-30)), log(8.));
  float a = mix(prev, l, uRate);
  if (isnan(a) || isinf(a)) a = isnan(l) || isinf(l) ? -3.5 : l;
  o = vec4(a, 0., 0., 1.);
}
`,at=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uDust, uAdapt, uBB;
uniform vec2 uRes, uJitter;
uniform vec3 uRight, uUp, uFwd, uV;
uniform float uTan, uBeta, uOmb, uGamma, uKcal, uDustLo, uDustHi, uKey, uDmax;
uniform float uMapGain; // the map's units to the scene's (its average, 0.1: the photograph's, which the exposure was tuned to)
#ifdef FEEDBACK
uniform float uFootK; // the feedback picture's pixel against the main view's
#endif
const float PI = 3.14159265;
const float MAP_AVG = 0.2;
${d}
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// A blackbody's colour on the screen per unit of its brightness at 550 nm, from the table worked out through the eye's
// colour-matching functions (colour.ts): deep red when cool, a clear sky blue in the hot limit; made more vivid than
// the eye would see it, for the screen. (Each colour's share raised to a power, not pushed apart and cut off at
// nothing: cut off, a weak colour vanished all at once, and the glow showed bands, John: "a red band and then a
// yellow band".)
const float LOG_T0 = 2.4, LOG_T1 = 7.0, TABLE_N = 256.;
vec3 vivid(vec3 c, float k) {
  float l = luma(c);
  if (l <= 1e-30) return c;
  vec3 r = pow(max(c / l, vec3(0.)), vec3(k));
  return r * (l / max(luma(r), 1e-30));
}
vec3 bb(float T) {
  float f = clamp((log(max(T, 1.)) / log(10.) - LOG_T0) / (LOG_T1 - LOG_T0), 0., 1.);
  // (Its cool end deeper still, below about 3,000 K, so a glow's red reads as an ember even where blue starlight
  // falls on it, not salmon-pink: John, "The fainter red glow looks very pink, and the central red looks very pink too".)
  return vivid(texture(uBB, vec2((f * (TABLE_N - 1.) + 0.5) / TABLE_N, 0.5)).rgb, 1.5 + 1.5 * smoothstep(3000., 1500., T));
}

// Planck's law: a blackbody's brightness at frequency nu (THz), temperature T (K), in MJy/sr.
float bnu(float nu, float T) {
  float x = 47.99 * nu / max(T, 1e-3);
  if (x > 80.) return 0.;
  float em1 = x < 1e-3 ? x + 0.5 * x * x : exp(x) - 1.;
  return 1.4725e6 * nu * nu * nu / em1;
}
const vec3 NU = vec3(491.5, 545.1, 644.7); // the three colours' frequencies, THz (610, 550 and 465 nm)
vec3 bnu3(vec3 nu, float T) { return vec3(bnu(nu.r, T), bnu(nu.g, T), bnu(nu.b, T)); }

// Shifted along the blackbody line: a colour of temperature T, seen D times hotter. Made to look like light rather
// than true to the last digit (John: "Worry less about what is absolutely accurate in terms of color and worry more
// about making a visually stunning experience"): each colour channel changes as the blackbody's own does, so the
// photograph's own colours (its warm core, its dust lanes, its nebulae) carry through the shift; and the change in
// brightness is softened (brighter as its square root, about), so what's ahead glows rather than burning out flat.
vec3 shifted(vec3 c, float T, float D) {
  vec3 b0 = bnu(545.1, T) * bb(T), b1 = bnu(545.1, D * T) * bb(D * T);
  float l0 = max(luma(b0), 1e-30), l1 = luma(b1);
  if (l1 < 1e-30) return vec3(0.);
  float g = l1 / l0;
  vec3 tint = (b1 / l1) / max(b0 / l0, vec3(1e-3));
  return c * tint * (g > 1. ? pow(g, 0.55) : pow(g, 0.8));
}
// The dust's light reaching 550 nm, seen D times hotter (its emissivity rising as frequency to the power 1.6), against
// its brightness at 857 GHz.
float dustF(float D) { float nu = 545.1 / D; return pow(nu / 0.857, 1.6) * bnu(nu, 19.6) / bnu(0.857, 19.6) * D * D * D; }

void main() {
#ifdef MAP
  // (The whole sky, as a flat map, for the dashboard's Your sky: ahead at the middle, behind at both side edges,
  // straight up along the top and down along the foot.)
  float lon = (gl_FragCoord.x / uRes.x * 2. - 1.) * PI, lat = (gl_FragCoord.y / uRes.y * 2. - 1.) * PI * 0.5;
  vec3 dv = normalize(cos(lat) * (sin(lon) * uRight + cos(lon) * uFwd) + sin(lat) * uUp);
  float pa = PI / uRes.y; // a pixel's angle
#else
  vec2 fc = gl_FragCoord.xy + uJitter;
  vec2 q = (fc * 2. - uRes) / uRes.y;
  vec3 dv = normalize(uFwd + uRight * q.x * uTan + uUp * q.y * uTan);
  float pa = 2. * uTan / uRes.y; // a pixel's angle
#endif
  // How far from straight ahead (along The Van's motion), kept precise when small, and the Doppler factor.
  vec3 dd = dv - uV;
  float omc = 0.5 * dot(dd, dd), cp = 1. - omc;
  float den = uOmb + uBeta * omc; // 1 − β cos θ
  float D = 1. / (uGamma * den);
  // Where the light came from, at rest.
  float u = (1. + uBeta) * omc / den;
  float c = 1. - u, s = sqrt(max(0., u * (2. - u)));
  vec3 perp = dv - uV * cp;
  float pl = length(perp);
  vec3 dr = pl > 1e-9 ? uV * c + perp / pl * s : uV * sign(cp);
  float foot = pa * D; // a pixel's size on the sky at rest
#ifdef FEEDBACK
  o = skyKey(dr, foot * uFootK); // (the tile this pixel would like, at the main view's detail: ../sky/tiles.ts)
  return;
#endif
  vec2 uv = vec2(0.5 - atan(dr.y, dr.x) / (2. * PI), 0.5 - asin(clamp(dr.z, -1., 1.)) / PI);
  // The Milky Way: the light of its stars together, shifted as a 5,000 K blackbody (diluted), its own colours carried.
  // (Not each pixel's colour as a temperature: the map's dust lanes are red because dust dims blue light, not because
  // they're cool, and read as cool blackbodies they'd blaze a hundred thousand times too brightly when shifted up.)
  vec3 sky = skyTile(dr, foot) * uMapGain;
  vec3 col = shifted(sky, 5000., D);
#ifdef MAP
  // (The Van's display, on the dashboard's Your sky, since 18 October 2026: light stretched out of sight behind you, into
  // the infrared, shown deep red rather than lost in black, and dimmed only gently, as an instrument would show it; the
  // windscreen stays as the eye would see it. John: "By the time the simulator switches to the your sky view to show you
  // the red shifting of the light going behind you, it's basically black ... I know that it's beyond the human visual
  // range at that point, but the van could still display it for you on the screen".)
  if (D < 0.8) {
    vec3 deep = bb(max(5000. * D, 1700.));
    col = mix(col, luma(sky) * max(0.6 * pow(D, 0.8), 0.06) * deep / max(luma(deep), 1e-6), smoothstep(0.8, 0.4, D));
  }
#endif
  // The dust and the afterglow, in MJy/sr: what reaches each colour was sent at NU / D, and arrives D cubed brighter.
  // The dust and the afterglow ahead: each at its true brightness dead ahead (uDmax, the Doppler factor there), and
  // falling away round it far more gently than it truly does (a power of it), so the glow grades through all its
  // colours, blue at its heart, through white and yellow to orange and a deep red at its rim (John: "beautiful,
  // subtle changes from red, from fire back into blue").
  // (Once the whole glow is only a few pixels across, zoomed out, it's drawn true, so its heart, not its rim, sets
  // the colour of the point it makes.)
  float rim = sqrt(2. * max(1. / (367. * uGamma) - uOmb, 1e-14)) / pa, soft = smoothstep(10., 80., rim);
  if (644.7 / uDmax < 40.) {
    float dl = textureLod(uDust, uv, clamp(log2(max(foot, 1e-6) * 2048. / (2. * PI)), 1., 10.)).r; // (never finer than its own detail)
    // (The map's faintest, its noise and the far infrared background from other galaxies, about half a MJy/sr to a few,
    // faded out smoothly: only the galaxy's dust, without hard edges where it's cut.)
    float i857raw = pow(10., mix(uDustLo, uDustHi, dl));
    float i857 = i857raw * smoothstep(0.6, 4., i857raw);
    // (Its brightness at 550 nm; its colour that of a blackbody of the same shifted temperature.)
    float fpk = dustF(uDmax), f = dustF(D);
    float dust = fpk > 1e-30 ? i857 * fpk * pow(f / fpk, mix(1., 0.4, soft)) : 0.;
    vec3 tint = bb(19.6 * D);
    col += dust * tint / max(luma(tint), 1e-6) / uKcal;
  }
  float cpk = bnu(545.1, 2.725 * uDmax);
  if (cpk > 1e-30) col += cpk * pow(bnu(545.1, 2.725 * D) / cpk, mix(1., 0.3, soft)) * bb(2.725 * D) / uKcal;
  // Exposed as it's drawn (see the top); its true brightness kept, as a logarithm, for the exposure.
  float avg = exp(texture(uAdapt, vec2(0.5)).r);
#ifdef MAP
  // (The map exposed never darker than the sky at rest, an average of about 0.15, whatever the windscreen has adapted
  // to: near light's speed it adapts to the blazing window ahead, a million times brighter, which left the rest of the
  // map black. The window becomes a white-hot point on it, and the deep red behind stays in sight.)
  avg = min(avg, MAP_AVG);
#endif
  float ex = clamp(uKey / max(avg, 1e-30), 1e-30, 1.3);
  float L = luma(col);
  o = vec4(col * ex, sqrt(max(L * ex, 0.)));
}
`,ot=`#version 300 es
precision highp float;
in vec3 aDir;
in vec3 aFlux;
uniform vec3 uRight, uUp, uFwd;
uniform float uTan, uAspect, uPx, uKcal, uDev, uKey;
uniform float uMap; // 1: on the whole sky's flat map (Your sky), not the windscreen
uniform vec2 uJit; // this frame's offset within the pixel, as the scene's (for the anti-aliasing)
uniform sampler2D uAdapt;
out vec3 vCol;
out float vBig;
out float vR;
out float vS;
void main() {
  float z = dot(aDir, uFwd);
  vCol = vec3(0.); vBig = 0.; vR = 1.;
  if (z <= 1e-6 && uMap < 0.5) { gl_Position = vec4(2., 2., 2., 1.); gl_PointSize = 0.; return; }
  vec2 p = vec2(dot(aDir, uRight), dot(aDir, uUp)) / z / uTan;
  p.x /= uAspect;
  if (uMap > 0.5) p = vec2(atan(dot(aDir, uRight), z) / 3.14159265, asin(clamp(dot(aDir, uUp), -1., 1.)) / 1.5707963);
  gl_Position = vec4(p - uJit, 0., 1.);
  float avg = exp(texture(uAdapt, vec2(0.5)).r);
  if (uMap > 0.5) avg = min(avg, 0.2); // (Your sky's map: never darker than the sky at rest, as SCENE's MAP)
  float ex = clamp(uKey / max(avg, 1e-30), 1e-30, 1.3);
  float sig = 1.1 * uPx * uDev; // (a CSS pixel's angle: the same look at any pixel density)
  vec3 I = aFlux / (6.2832 * sig * sig) / uKcal * ex; // its peak, exposed
  float L = dot(I, vec3(0.2126, 0.7152, 0.0722));
  // (Grown on the same scale as the catalogue's stars, so Alpha Centauri from home is a star among stars; near, as a
  // sun, it blazes, but as a star does, its light concentrated at its middle, a small white-hot core in a tight glow
  // of its own colour, the picture's glow round that: John, "It needs to be far more concentrated at the middle … I
  // think the glow around them is probably way too big".)
  // (Its peak held to a few times white, so only a small heart burns white, and the picture's glow, fed by it, stays
  // small: brighter, it spread each sun into a soft disc 60 pixels across. Its colour shows in the halo: SUN_FRAG.)
  float big = min(log(1. + L / 40.), 9.);
  float peak = min(L, 2.5 + 0.6 * big);
  vCol = L > 1e-9 ? I * (peak / L) : I;
  vBig = big;
  vS = 0.7 + 0.08 * big;
  vR = min((4. * (1.5 + 0.6 * big) + 3.) * uDev, 250.);
  gl_PointSize = 2. * vR;
}
`,st=`#version 300 es
precision highp float;
in vec3 aDir;   // its direction from the Sun, galactic
in float aMag;  // (V + 2) × 1000
in float aTemp; // (log10 T − 3.3) / 1.4
in float aDist; // log10(light-years) × 13107, or 0
uniform vec3 uRight, uUp, uFwd, uV, uHere;
uniform float uTan, uAspect, uPx, uKcal, uDev, uKey, uBeta, uOmb, uGamma;
uniform float uMap; // 1: on the whole sky's flat map (Your sky), not the windscreen
uniform float uStarDens; // the stars drawn, a steradian, on average
uniform vec2 uJit;
uniform sampler2D uAdapt, uBB;
out vec3 vCol;
out float vBig;
out float vR;
out float vS;
float b545(float T) { float x = 47.99 * 545.1 / max(T, 1e-3); return x > 80. ? 0. : 1.4725e6 * 1.6197e8 / (x < 1e-3 ? x + 0.5 * x * x : exp(x) - 1.); }
vec3 bb(float T) {
  float f = clamp((log(max(T, 1.)) / log(10.) - 2.4) / 4.6, 0., 1.);
  vec3 c = textureLod(uBB, vec2((f * 255. + 0.5) / 256., 0.5), 0.).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  if (l <= 1e-30) return c;
  // (Their own colours, a touch stronger: made as vivid as the suns, they read as paint splashed on the picture, John:
  // "They look like somebody has sort of splattered paint over the top of a picture. They don't blend well with it".)
  vec3 r = pow(max(c / l, vec3(0.)), vec3(1.2));
  return r * (l / max(dot(r, vec3(0.2126, 0.7152, 0.0722)), 1e-30));
}
void main() {
  vCol = vec3(0.); vBig = 0.; vR = 1.;
  gl_Position = vec4(2., 2., 2., 1.); gl_PointSize = 0.;
  float V = aMag / 1000. - 2., T = pow(10., 3.3 + aTemp * 1.4);
  float flux = 3.63e-3 * pow(10., -0.4 * V);
  vec3 n = aDir;
  if (aDist > 0.) {
    float ly = pow(10., aDist / 13107.);
    vec3 rel = aDir * ly - uHere;
    float d = length(rel);
    n = rel / d;
    flux *= ly * ly / (d * d);
  }
  // Where it seems to be, and its Doppler factor (precise straight ahead and behind).
  vec3 a = n - uV, b = n + uV;
  float omc = 0.5 * dot(a, a), opc = 0.5 * dot(b, b);
  float omc2 = uOmb * omc / (uOmb + uBeta * opc);
  float s2 = sqrt(max(0., omc2 * (2. - omc2)));
  vec3 perp = n - uV * (1. - omc);
  float pl = length(perp);
  vec3 dir = pl > 1e-12 ? uV * (1. - omc2) + perp / pl * s2 : uV * sign(1. - omc);
  float D = 1. / (uGamma * (uOmb + uBeta * omc2));
  float z = dot(dir, uFwd);
  if (z <= 1e-6 && uMap < 0.5) return;
  float avg = exp(texture(uAdapt, vec2(0.5)).r);
  if (uMap > 0.5) avg = min(avg, 0.2); // (Your sky's map: never darker than the sky at rest, as SCENE's MAP)
  float ex = clamp(uKey / max(avg, 1e-30), 1e-30, 1.3);
  float sig = 1.1 * uPx * uDev; // (a CSS pixel's angle: the same look at any pixel density)
  float f = flux * b545(D * T) / max(b545(T), 1e-30) / (D * D);
  vec3 tint = bb(D * T);
  // (On Your sky's map, the stars behind you shown deep red, as the sky there is: SCENE's MAP.)
  if (uMap > 0.5 && D < 0.8) {
    float w = smoothstep(0.8, 0.4, D);
    f = mix(f, flux * max(0.6 * pow(D, 0.8), 0.06), w);
    tint = mix(tint, bb(max(D * T, 1700.)), w);
  }
  vec3 I = tint * f / (6.2832 * sig * sig) / uKcal * ex;
  // Crowding (John, of the window ahead: "the red there looks a bit posterized"): the aberration packs D² times as
  // many stars into each patch of sky, so where they crowd far closer than one to a pixel, each is spread wider and
  // fainter, its light kept: they melt into a smooth haze, as starlight too close to resolve looks, rather than a
  // speckle of dots over the glow. (At rest, or at nine-tenths of light's speed, they stay sharp points.)
  float dens = uStarDens * (1. + 2.5 * exp(-aDir.z * aDir.z / 0.03)); // thicker towards the Galaxy's plane
  float m = clamp(sqrt(dens * sig * sig * D * D / 40.), 1., 4.);
  I /= m * m;
  float L = dot(I, vec3(0.2126, 0.7152, 0.0722));
  if (L < 0.003) return;
  vec2 p = uMap > 0.5 ? vec2(atan(dot(dir, uRight), z) / 3.14159265, asin(clamp(dot(dir, uUp), -1., 1.)) / 1.5707963)
                      : vec2(dot(dir, uRight), dot(dir, uUp)) / z / uTan / vec2(uAspect, 1.);
  if (abs(p.x) > 1.2 || abs(p.y) > 1.2) return;
  gl_Position = vec4(p - uJit, 0., 1.);
  // (A star grows far less with its brightness than a sun: a field of sharp points, the brightest a little larger.)
  float big = min(log(1. + L / 40.), 9.);
  vCol = L > 4. ? I * 4. * (1. + big) * (1. + big) / L : I;
  vBig = big;
  vS = (0.6 + 0.3 * big) * m;
  vR = min(max(max(2.5, (2.5 + 3. * big + 4. * max(big - 2.5, 0.)) * uDev), 3. * vS * uDev), 250.);
  gl_PointSize = 2. * vR;
}
`,ct=`#version 300 es
precision highp float;
in vec3 vCol;
in float vBig;
in float vR;
in float vS;
out vec4 o;
uniform float uDev;
void main() {
  float R = vR / uDev;
  float del = length((gl_PointCoord * 2. - 1.) * R); // pixels from its middle
  float core = exp(-del * del / (2. * vS * vS));
  float l = dot(vCol, vec3(0.2126, 0.7152, 0.0722));
  vec3 hot = mix(vCol, vec3(l), 0.6 * smoothstep(1., 5., vBig));
  float w = 1.5 + 0.6 * vBig;
  float halo = 0.1 * pow(1. + del * del / (w * w), -1.5);
  float fade = 1. - smoothstep(0.8, 1., del / R);
  o = vec4((hot * core + vCol * halo) * fade, 0.);
}
`,lt=`#version 300 es
precision highp float;
in vec3 vCol;
in float vBig;
in float vR;
in float vS; // the core's width (pixels)
out vec4 o;
uniform float uDev;
uniform float uHalo; // how much glare: a sun's full, a star's a little (a field of stars, all glare, reads as splashes)
void main() {
  float R = vR / uDev;
  vec2 p = (gl_PointCoord * 2. - 1.) * R; // pixels from its middle
  float del = length(p);
  // The core, tight (a star's tighter still, unless it's crowded); white-hot as it brightens, its colour in the glare.
  float core = exp(-del * del / (2. * vS * vS));
  float l = dot(vCol, vec3(0.2126, 0.7152, 0.0722));
  vec3 hot = mix(vCol, vec3(l), 0.7 * smoothstep(1., 5., vBig));
  // The glare: falling away as a power of the distance, so it has no edge.
  float glare = uHalo * 0.05 / pow(1. + del * del / (2. + 0.6 * vBig), 1.6);
  float fade = 1. - smoothstep(0.8, 1., del / R);
  o = vec4((hot * core + vCol * glare) * fade, 0.);
}
`,ut=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uScene, uGlow;
uniform float uGlowGain;
uniform float uFlat; // 1: the whole sky's map, without the windscreen's darker corners
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0., 1.); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec3 c = texture(uScene, vUv).rgb + texture(uGlow, vUv).rgb * uGlowGain;
  // Light, not paint (John: "There's no glow, no luster. It doesn't look like light"; "glow like the end of the black
  // hole simulator did"; "filmic, cinematic is the approach"): the black hole simulator's filmic curve on each colour,
  // so the brightest light runs white at its heart, its colour in the glow round it; mixed with a curve on the
  // strongest colour, which keeps a colour's strength however bright, the more so the stronger the colour (so the
  // fire's sky-blue heart stays blue, and white starlight still burns white); and the colours lifted a little.
  float m0 = max(c.r, max(c.g, c.b)), mn = min(c.r, min(c.g, c.b));
  vec3 keep = m0 > 1e-7 ? c * (aces(vec3(m0)).g / m0) : vec3(0.);
  c = mix(aces(c), keep, mix(0.35, 0.85, smoothstep(0.3, 0.9, (m0 - mn) / max(m0, 1e-6))));
  // (Lifted as each colour's share to a power, which never cuts a colour off: no bands.)
  float Lc = dot(c, vec3(0.2126, 0.7152, 0.0722));
  if (Lc > 1e-7) { vec3 r = pow(c / Lc, vec3(1.2)); c = r * (Lc / max(dot(r, vec3(0.2126, 0.7152, 0.0722)), 1e-7)); c /= max(1., max(c.r, max(c.g, c.b))); }
  vec2 q = vUv - 0.5;
  if (uFlat < 0.5) c *= 1. - 0.35 * dot(q, q) * 1.6;
  c = pow(c, vec3(1. / 2.2));
  c += (hash12(gl_FragCoord.xy) - 0.5) / 255.;
  o = vec4(c, 1.);
}
`,dt=`#version 300 es
precision highp float;
in vec3 aCell;
uniform vec3 uAx, uAy, uAz, uV, uRight, uUp, uFwd;
uniform float uBeta, uOmb, uGamma, uShift, uSpan, uTan, uAspect;
uniform sampler2D uBB;
out vec3 vCol;
void main() {
  vec3 r = aCell - vec3(uShift, 0., 0.);
  float dist = length(r);
  vec3 n = (uAx * r.x + uAy * r.y + uAz * r.z) / max(dist, 1e-6);
  // Where its light seems to come from, in The Van's frame: 1 − cos θ' = (1 − cos θ)(1 − β) / (1 + β cos θ), kept
  // precise straight ahead and straight behind.
  vec3 a = n - uV, b = n + uV;
  float omc = 0.5 * dot(a, a), opc = 0.5 * dot(b, b);
  float omc2 = uOmb * omc / (uOmb + uBeta * opc);
  float s2 = sqrt(max(0., omc2 * (2. - omc2)));
  vec3 perp = n - uV * (1. - omc);
  float pl = length(perp);
  vec3 d = pl > 1e-12 ? uV * (1. - omc2) + perp / pl * s2 : uV * sign(1. - omc);
  gl_Position = vec4(dot(d, uRight) / (uTan * uAspect), dot(d, uUp) / uTan, 0., dot(d, uFwd));
  // Its colour shifted as everything's is (ice-white at rest, 9,000 K: blue ahead, orange and red behind), a little
  // brighter ahead.
  float D = 1. / (uGamma * (uOmb + uBeta * omc2));
  float f = clamp((log(max(9000. * D, 1.)) / log(10.) - 2.4) / 4.6, 0., 1.);
  vec3 tint = textureLod(uBB, vec2((f * 255. + 0.5) / 256., 0.5), 0.).rgb;
  tint /= max(max(tint.r, max(tint.g, tint.b)), 1e-6);
  vCol = tint * sqrt(clamp(D, 0.05, 4.)) * exp(-dist / 9.) * (1. - smoothstep(uSpan - 3., uSpan - 0.5, abs(r.x)));
}
`,ft=`#version 300 es
precision highp float;
in vec3 vCol;
uniform float uI;
out vec4 o;
void main() { o = vec4(vCol * uI, 0.); }
`,pt=(e,t)=>{let n=1,r=0;for(let i=e;i>0;i=Math.floor(i/t))n/=t,r+=i%t*n;return r},mt=-.7,ht=3.8,gt=1472500*545.1**3/Math.expm1(47.99*545.1/5800)*56e-15,_t=.065,vt=.16;function yt(e){let t=e.getContext(`webgl2`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!t)return null;let n=t,i=!!n.getExtension(`EXT_color_buffer_float`)||!!n.getExtension(`EXT_color_buffer_half_float`);n.getExtension(`OES_texture_float_linear`);let a=(e,t)=>{let r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw Error(n.getShaderInfoLog(r)??`shader`);return r},u=a(n.VERTEX_SHADER,p),d=(e,t=u,r=[])=>{let i=n.createProgram();if(n.attachShader(i,t),n.attachShader(i,a(n.FRAGMENT_SHADER,e)),r.forEach((e,t)=>n.bindAttribLocation(i,t,e)),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS))throw Error(n.getProgramInfoLog(i)??`program`);let o=new Map;return{p:i,u:e=>(o.has(e)||o.set(e,n.getUniformLocation(i,e)),o.get(e))}},f=d(at),m=d(at.replace(`#version 300 es`,`#version 300 es
#define MAP`)),g=d(at.replace(`#version 300 es`,`#version 300 es
#define FEEDBACK`)),y=d(h),ee=d(o),b=d(s),x=d(ut),S=d(it),C=d(_),te=d(ct,a(n.VERTEX_SHADER,ot),[`aDir`,`aFlux`]),ne=d(lt,a(n.VERTEX_SHADER,st),[`aDir`,`aMag`,`aTemp`,`aDist`]),w=n.createVertexArray(),re=n.createVertexArray(),T=n.createBuffer();n.bindVertexArray(re),n.bindBuffer(n.ARRAY_BUFFER,T),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,24,0),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,24,12);let E=d(ft,a(n.VERTEX_SHADER,dt),[`aCell`]),D=[-3.5,-2.5,-1.5,-.5,.5,1.5,2.5,3.5],O=.25,k=[],ie=(e,t,n)=>{for(let r=t;r<n-1e-9;r+=O)k.push(...e(r),...e(r+O))};for(let e of D)for(let t of D)ie(n=>[n,e,t],-18,18);for(let e=-18;e<=18;e++)for(let t of D)ie(n=>[e,n,t],-3.5,3.5),ie(n=>[e,t,n],-3.5,3.5);let A=k.length/3,j=n.createVertexArray(),M=n.createBuffer();n.bindVertexArray(j),n.bindBuffer(n.ARRAY_BUFFER,M),n.bufferData(n.ARRAY_BUFFER,new Float32Array(k),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,12,0),n.bindVertexArray(w);let ae=(()=>{let e=n.createTexture();return n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e})(),oe=n.createTexture();n.bindTexture(n.TEXTURE_2D,oe),n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,256,1,0,n.RGBA,n.FLOAT,Qe()),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let N=40,P=50,F=.1,se=new URLSearchParams(location.search).has(`large`)||Math.max(screen.width,screen.height)*Math.min(window.devicePixelRatio||1,2)>=1800,ce=(e,t,r)=>new Promise(i=>{let a=new Image;a.decoding=`async`,a.onload=()=>{n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,r?n.SRGB8_ALPHA8:n.RGBA8,n.RGBA,n.UNSIGNED_BYTE,a),n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),i()},a.onerror=()=>i(),a.src=e}),I=r(n,l(),se?160:64),L=c(n,64,40),le=n.createBuffer(),R=n.createVertexArray(),ue=0,de=0,fe=0,pe=(async()=>{let e=v(),t=await(await fetch(`${e}manifest.json`)).json(),r=t.parts.slice(0,se?3:2),i=r.reduce((e,t)=>e+t.count,0);n.bindBuffer(n.ARRAY_BUFFER,le),n.bufferData(n.ARRAY_BUFFER,i*t.record,n.STATIC_DRAW),n.bindVertexArray(R),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.SHORT,!0,12,0),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,1,n.UNSIGNED_SHORT,!1,12,6),n.enableVertexAttribArray(2),n.vertexAttribPointer(2,1,n.UNSIGNED_BYTE,!0,12,8),n.enableVertexAttribArray(3),n.vertexAttribPointer(3,1,n.UNSIGNED_SHORT,!1,12,10),n.bindVertexArray(w),fe=t.meanFlux;let a=0;for(let[t,i]of r.entries()){let r=await(await fetch(`${e}${i.file}`)).arrayBuffer();n.bindBuffer(n.ARRAY_BUFFER,le),n.bufferSubData(n.ARRAY_BUFFER,a,new Uint8Array(r)),a+=r.byteLength,ue+=i.count,t<2&&(de=ue)}})(),me=Promise.all([I.ready,pe.catch(()=>{})]).then(()=>{let e=I.manifest?.mean??[.002,.002,.002],t=.2126*e[0]+.7152*e[1]+.0722*e[2];P=F/Math.max(1e-9,t),N=Math.max(.15*gt,gt-fe)/F}).catch(e=>console.warn(`sky:`,e)),he=ce(`/sky/dust-857.png`,ae,!1),ge=(e,t)=>{let r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),i?n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,e,t,0,n.RGBA,n.HALF_FLOAT,null):n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let a=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,a),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,r,0),{tex:r,fb:a,w:e,h:t}},z=e=>{n.deleteTexture(e.tex),n.deleteFramebuffer(e.fb)},B=.7,V=1,H=null,_e=[],U=0,W=!1,G=0,K=[],q=[0,0],ve=0,J=[ge(1,1),ge(1,1)];for(let e of J)n.bindFramebuffer(n.FRAMEBUFFER,e.fb),n.clearColor(-2.5,0,0,1),n.clear(n.COLOR_BUFFER_BIT);let ye=0,be=()=>{let t=Math.min(window.devicePixelRatio||1,2),r=Math.max(1,Math.round(e.clientWidth*t)),i=Math.max(1,Math.round(e.clientHeight*t));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i);let a=Math.max(64,Math.round(r*B)),o=Math.max(64,Math.round(i*B));if(H&&q[0]===a&&q[1]===o)return;H&&z(H),_e.forEach(z),K.forEach(z),H=ge(a,o),_e=[ge(a,o),ge(a,o)],W=!1,n.bindTexture(n.TEXTURE_2D,H.tex),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),ve=Math.floor(Math.log2(Math.max(a,o))),K=[];let s=Math.max(1,a>>1),c=Math.max(1,o>>1);for(let e=0;e<5&&s>8&&c>8;e++)K.push(ge(s,c)),s>>=1,c>>=1;q=[a,o]},xe=(t,r,i,a)=>{n.useProgram(t.p),n.bindFramebuffer(n.FRAMEBUFFER,r?r.fb:null),n.viewport(0,0,r?r.w:e.width,r?r.h:e.height),i&&(n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i),n.uniform1i(t.u(`uSrc`),0)),a&&n.uniform2f(t.u(`uTexel`),a[0],a[1]),n.drawArrays(n.TRIANGLES,0,3)},Y=16,Se=0,Ce=0,we=0,Te=typeof location<`u`&&new URLSearchParams(location.search).has(`still`);function X(t,r){let i=performance.now();Se&&(Y=Y*.9+(i-Se)*.1),Se=i,Te?B=V:Y>30&&B>.35?B=Math.max(.35,B*.94):Y<20&&B<V&&(B=Math.min(V,B*1.03)),be(),n.bindBuffer(n.ARRAY_BUFFER,T),n.bufferData(n.ARRAY_BUFFER,r.data.subarray(0,r.count*6),n.DYNAMIC_DRAW),Ce=r.count;{let n=t.tanHalf*(e.width/Math.max(1,e.height)),i=t.tanHalf,a=0;for(let e=0;e<r.count;e++){let o=r.data.subarray(e*6,e*6+3),s=o[0]*t.fwd[0]+o[1]*t.fwd[1]+o[2]*t.fwd[2];if(s<=0)continue;let c=(o[0]*t.right[0]+o[1]*t.right[1]+o[2]*t.right[2])/s,l=(o[0]*t.up[0]+o[1]*t.up[1]+o[2]*t.up[2])/s;Math.abs(c)>n||Math.abs(l)>i||(a+=.2126*r.data[e*6+3]+.7152*r.data[e*6+4]+.0722*r.data[e*6+5])}we=.002*a/N/(4*n*i)}let a=H;G=G%64+1,I.update();let o=L.poll();o&&I.request(o),L.due()&&(n.bindVertexArray(w),n.useProgram(g.p),n.bindFramebuffer(n.FRAMEBUFFER,L.fb),n.viewport(0,0,L.w,L.h),Ee(g,L.w,L.h,[0,0],t,t.right,t.up,t.fwd),n.uniform1f(g.u(`uFootK`),L.h/a.h),n.drawArrays(n.TRIANGLES,0,3),L.start()),De(a,t,t.right,t.up,t.fwd,ue),Oe(a)}function Ee(e,t,r,i,a,o,s,c){let l=e.u;n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,ae),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,J[ye].tex),n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,oe),I.bind(l,4,5),n.uniform1i(l(`uDust`),1),n.uniform1i(l(`uAdapt`),2),n.uniform1i(l(`uBB`),3),n.uniform2f(l(`uRes`),t,r),n.uniform2f(l(`uJitter`),i[0],i[1]),n.uniform3fv(l(`uRight`),o),n.uniform3fv(l(`uUp`),s),n.uniform3fv(l(`uFwd`),c),n.uniform3fv(l(`uV`),a.vDir),n.uniform1f(l(`uTan`),a.tanHalf),n.uniform1f(l(`uBeta`),a.beta),n.uniform1f(l(`uOmb`),a.omb),n.uniform1f(l(`uGamma`),a.gamma),n.uniform1f(l(`uKcal`),N),n.uniform1f(l(`uMapGain`),P),n.uniform1f(l(`uDustLo`),mt),n.uniform1f(l(`uDustHi`),ht),n.uniform1f(l(`uKey`),_t),n.uniform1f(l(`uDmax`),a.gamma*(1+a.beta)),n.activeTexture(n.TEXTURE0)}function De(t,r,i,a,o,s,c=!1){n.bindVertexArray(w);let l=c?m:f;n.useProgram(l.p),n.bindFramebuffer(n.FRAMEBUFFER,t.fb),n.viewport(0,0,t.w,t.h);let u=c?0:pt(G,2)-.5,d=c?0:pt(G,3)-.5;Ee(l,t.w,t.h,[u,d],r,i,a,o),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,J[ye].tex),n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,oe),n.activeTexture(n.TEXTURE0),n.drawArrays(n.TRIANGLES,0,3);let p=[2*u/t.w,2*d/t.h];if(s){n.bindVertexArray(R),n.useProgram(ne.p);let l=ne.u;n.uniform1i(l(`uAdapt`),2),n.uniform1i(l(`uBB`),3),n.uniform3fv(l(`uRight`),i),n.uniform3fv(l(`uUp`),a),n.uniform3fv(l(`uFwd`),o),n.uniform3fv(l(`uV`),r.vDir),n.uniform3fv(l(`uHere`),r.here),n.uniform1f(l(`uBeta`),r.beta),n.uniform1f(l(`uOmb`),r.omb),n.uniform1f(l(`uGamma`),r.gamma),n.uniform1f(l(`uTan`),r.tanHalf),n.uniform1f(l(`uAspect`),t.w/t.h),n.uniform1f(l(`uPx`),c?Math.PI/t.h:2*r.tanHalf/t.h),n.uniform1f(l(`uKcal`),N),n.uniform1f(l(`uDev`),c?1:t.h/Math.max(1,e.clientHeight)),n.uniform1f(l(`uMap`),+!!c),n.uniform1f(l(`uKey`),_t),n.uniform2f(l(`uJit`),p[0],p[1]),n.uniform1f(l(`uHalo`),.12),n.uniform1f(l(`uStarDens`),s/(4*Math.PI)),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE),n.drawArrays(n.POINTS,0,s),n.disable(n.BLEND),n.bindVertexArray(w)}if(Ce){n.bindVertexArray(re),n.useProgram(te.p);let s=te.u;n.uniform1i(s(`uAdapt`),2),n.uniform3fv(s(`uRight`),i),n.uniform3fv(s(`uUp`),a),n.uniform3fv(s(`uFwd`),o),n.uniform1f(s(`uTan`),r.tanHalf),n.uniform1f(s(`uAspect`),t.w/t.h),n.uniform1f(s(`uPx`),c?Math.PI/t.h:2*r.tanHalf/t.h),n.uniform1f(s(`uKcal`),N),n.uniform1f(s(`uDev`),c?1:t.h/Math.max(1,e.clientHeight)),n.uniform1f(s(`uMap`),+!!c),n.uniform1f(s(`uKey`),_t),n.uniform2f(s(`uJit`),p[0],p[1]),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE),n.drawArrays(n.POINTS,0,Ce),n.disable(n.BLEND),n.bindVertexArray(w)}if(r.grid&&!c){n.bindVertexArray(j),n.useProgram(E.p);let e=E.u;n.uniform3fv(e(`uAx`),r.grid.axes[0]),n.uniform3fv(e(`uAy`),r.grid.axes[1]),n.uniform3fv(e(`uAz`),r.grid.axes[2]),n.uniform3fv(e(`uV`),r.vDir),n.uniform3fv(e(`uRight`),i),n.uniform3fv(e(`uUp`),a),n.uniform3fv(e(`uFwd`),o),n.uniform1f(e(`uBeta`),r.beta),n.uniform1f(e(`uOmb`),r.omb),n.uniform1f(e(`uGamma`),r.gamma),n.uniform1i(e(`uBB`),3),n.uniform1f(e(`uSpan`),18),n.uniform1f(e(`uTan`),r.tanHalf),n.uniform1f(e(`uAspect`),t.w/t.h),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE);for(let t of r.grid.layers)t.alpha<.01||(n.uniform1f(e(`uShift`),t.shift),n.uniform1f(e(`uI`),vt*t.alpha),n.drawArrays(n.LINES,0,A));n.disable(n.BLEND),n.bindVertexArray(w)}n.activeTexture(n.TEXTURE0)}function Oe(t){n.bindTexture(n.TEXTURE_2D,t.tex),n.generateMipmap(n.TEXTURE_2D);{let e=J[ye],r=J[1-ye];n.useProgram(S.p),n.bindFramebuffer(n.FRAMEBUFFER,r.fb),n.viewport(0,0,1,1),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,t.tex),n.uniform1i(S.u(`uScene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.tex),n.uniform1i(S.u(`uPrev`),1),n.uniform1f(S.u(`uLevel`),ve),n.uniform1f(S.u(`uRate`),1-Math.exp(-Math.min(.1,Y/1e3)/.5)),n.uniform1f(S.u(`uKey`),_t),n.uniform1f(S.u(`uGlare`),we),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0),ye=1-ye}let r=_e[U],i=_e[1-U];if(n.useProgram(C.p),n.bindFramebuffer(n.FRAMEBUFFER,i.fb),n.viewport(0,0,i.w,i.h),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,t.tex),n.uniform1i(C.u(`uCur`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,r.tex),n.uniform1i(C.u(`uHist`),1),n.uniform2f(C.u(`uTexel`),1/t.w,1/t.h),n.uniform1f(C.u(`uBlend`),W?.2:1),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0),U=1-U,W=!0,K.length){n.useProgram(y.p),n.uniform1f(y.u(`uKnee`),1.2),xe(y,K[0],i.tex,[1/i.w,1/i.h]);for(let e=1;e<K.length;e++)xe(ee,K[e],K[e-1].tex,[1/K[e-1].w,1/K[e-1].h]);n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE);for(let e=K.length-1;e>0;e--)xe(b,K[e-1],K[e].tex,[1/K[e].w,1/K[e].h]);n.disable(n.BLEND)}n.useProgram(x.p),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i.tex),n.uniform1i(x.u(`uScene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,K.length?K[0].tex:i.tex),n.uniform1i(x.u(`uGlow`),1),n.uniform1f(x.u(`uGlowGain`),K.length?.6:0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,e.width,e.height),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0)}let ke=null,Z=null,Ae=null,je=null,Me=0,Ne=0,Pe=null;function Fe(t,r,i){!je&&H&&((Me!==r||Ne!==i)&&(ke&&z(ke),Z&&z(Z),ke=ge(r,i),Z=ge(r,i),n.bindTexture(n.TEXTURE_2D,Z.tex),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,r,i,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindFramebuffer(n.FRAMEBUFFER,Z.fb),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z.tex,0),Ae||=n.createBuffer(),n.bindBuffer(n.PIXEL_PACK_BUFFER,Ae),n.bufferData(n.PIXEL_PACK_BUFFER,r*i*4,n.STREAM_READ),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),Pe=new Uint8Array(r*i*4),Me=r,Ne=i),De(ke,t,t.right,t.up,t.fwd,de,!0),n.useProgram(x.p),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,ke.tex),n.uniform1i(x.u(`uScene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,ke.tex),n.uniform1i(x.u(`uGlow`),1),n.uniform1f(x.u(`uGlowGain`),0),n.uniform1f(x.u(`uFlat`),1),n.bindFramebuffer(n.FRAMEBUFFER,Z.fb),n.viewport(0,0,r,i),n.bindVertexArray(w),n.drawArrays(n.TRIANGLES,0,3),n.uniform1f(x.u(`uFlat`),0),n.activeTexture(n.TEXTURE0),n.bindBuffer(n.PIXEL_PACK_BUFFER,Ae),n.readPixels(0,0,r,i,n.RGBA,n.UNSIGNED_BYTE,0),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,e.width,e.height),je=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0),n.flush())}function Ie(){if(!je)return null;let e=n.clientWaitSync(je,0,0);return e!==n.ALREADY_SIGNALED&&e!==n.CONDITION_SATISFIED?null:(n.deleteSync(je),je=null,n.bindBuffer(n.PIXEL_PACK_BUFFER,Ae),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,Pe),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),{px:Pe,w:Me,h:Ne})}return{draw:X,allSky:Fe,pollSky:Ie,setMaxScale(e){V=e,B=Math.min(B,e)},get scale(){return B},get fps(){return 1e3/Y},resetHistory(){W=!1},debug(){let e=new Float32Array(4);return n.bindFramebuffer(n.FRAMEBUFFER,J[ye].fb),n.readPixels(0,0,1,1,n.RGBA,n.FLOAT,e),n.bindFramebuffer(n.FRAMEBUFFER,null),{adapted:e[0],size:q,levels:ve,tiles:I.stats(),stars:ue,kcal:N}},skyReady:me,starsReady:pe,dustReady:he,destroy(){I.destroy(),L.destroy(),H&&z(H),_e.forEach(z),K.forEach(z),ke&&z(ke),Z&&z(Z),n.getExtension(`WEBGL_lose_context`)?.loseContext()}}}function bt(e){let t=e*D,n=e=>e>=100?Math.round(e).toLocaleString(`en-GB`):e>=10?e.toFixed(1):e.toFixed(2),r=(e,t)=>`${n(e)} ${t}${e===1?``:`s`}`;return e>=.1?r(e,`light-year`):t>=604800?r(t/604800,`light-week`):t>=86400?r(t/86400,`light-day`):t>=3600?r(t/3600,`light-hour`):t>=60?r(t/60,`light-minute`):r(t,`light-second`)}function xt(e){let t=e*D,n=e=>(e>=1e3?Math.round(e).toLocaleString(`en-GB`):e>=100?Math.round(e).toString():e>=10?e.toFixed(1):e.toFixed(2)).padStart(4,` `);return e>=.1?`${n(e)} light-years`:t>=604800?`${n(t/604800)} light-weeks`:t>=86400?`${n(t/86400)} light-days`:t>=3600?`${n(t/3600)} light-hours`:t>=60?`${n(t/60)} light-minutes`:`${n(t)} light-seconds`}var St=`143, 216, 238`,Ct=`242, 180, 90`,wt=`255, 255, 255`;function Tt(e){let t=[{key:`van`,name:`The Van`,rgb:wt},{key:`seen`,name:`Earth, seen`,rgb:St},{key:`reckoned`,name:`Earth, reckoned`,rgb:Ct}];e.innerHTML=t.map(e=>`<div class="fl-clk" data-k="${e.key}"><span class="fl-clk-n">${e.name}</span><canvas role="img"></canvas><span class="fl-clk-t"></span></div>`).join(``);let n=t.map(t=>{let n=e.querySelector(`[data-k="${t.key}"]`),r=n.querySelector(`canvas`);return{...t,cv:r,g:r.getContext(`2d`),t:n.querySelector(`.fl-clk-t`)}}),r=()=>Math.min(window.devicePixelRatio||1,2),i=(e,t)=>{let n=e.cv.getBoundingClientRect(),i=r();if(n.width<20)return;let a=Math.round(n.width*i),o=Math.round(n.height*i);(e.cv.width!==a||e.cv.height!==o)&&(e.cv.width=a,e.cv.height=o);let s=e.g,c=n.width,l=n.height,u=c/2,d=l/2,f=Math.min(c,l)/2-3;s.setTransform(i,0,0,i,0,0),s.clearRect(0,0,c,l),s.fillStyle=`rgba(6, 10, 16, 0.6)`,s.beginPath(),s.arc(u,d,f,0,7),s.fill(),s.strokeStyle=`rgba(${St}, 0.35)`,s.lineWidth=1,s.beginPath(),s.arc(u,d,f,0,7),s.stroke();for(let e=0;e<12;e++){let t=e/12*Math.PI*2-Math.PI/2,n=e%3==0?.17:.09;s.strokeStyle=`rgba(${St}, ${e%3==0?.6:.35})`,s.lineWidth=e%3==0?1.4:1,s.beginPath(),s.moveTo(u+Math.cos(t)*f*(1-n),d+Math.sin(t)*f*(1-n)),s.lineTo(u+Math.cos(t)*f*.97,d+Math.sin(t)*f*.97),s.stroke()}let p=t,h=p-Math.floor(p),g=-Math.PI/2,_=g+h*Math.PI*2;h>1e-4&&(s.fillStyle=`rgba(${e.rgb}, 0.16)`,s.beginPath(),s.moveTo(u,d),s.arc(u,d,f*.9,g,_),s.closePath(),s.fill()),s.strokeStyle=`rgb(${e.rgb})`,s.lineWidth=2.2,s.lineCap=`round`,s.shadowColor=`rgba(${e.rgb}, 0.8)`,s.shadowBlur=6,s.beginPath(),s.moveTo(u,d),s.lineTo(u+Math.cos(_)*f*.82,d+Math.sin(_)*f*.82),s.stroke(),s.shadowBlur=0,s.fillStyle=`rgb(${e.rgb})`,s.beginPath(),s.arc(u,d,2.6,0,7),s.fill();let v=Math.trunc(t);s.font=m(s.canvas,`fig`,{weight:600}),s.textAlign=`center`,s.fillStyle=`rgba(${St}, 0.75)`,s.fillText(`${v} yr`,u,d+f*.48),e.cv.setAttribute(`aria-label`,`${e.name}: ${t.toFixed(2)} years`)};return{draw(e){let t={van:[e.van,e.vanText],seen:[e.seen,e.seenText],reckoned:[e.reckoned,e.reckonedText]};for(let e of n){let[n,r]=t[e.key];i(e,n),e.t.textContent!==r&&(e.t.textContent=r)}}}}var Et=j-0,Dt=e=>Math.log10(1+Math.max(0,e)*D),Ot=e=>{let t=Math.min(Et,Math.max(0,e-0)),n=Dt(Et/2);return t<=Et/2?.5*Dt(t)/n:1-.5*Dt(Et-t)/n},kt=[[1/D,`1 light-s`],[60/D,`1 min`],[3600/D,`1 h`],[86400/D,`1 day`],[1/12,`1 mo`],[1,`1 yr`]];function At(e){function t(t){let n=te(e);if(!n)return;let{g:r,w:a,h:o}=n,s=Math.round(Math.max(38,(o-60)/2+38));r.font=m(e,`fig-title`,{weight:600,sans:!0});let c=r.measureText(`HOME`).width+18,l=r.measureText(`ALPHA CEN`).width+18,d=a-c-l,f=e=>c+Ot(e)*d;r.strokeStyle=w(C,.35),r.lineWidth=1.5,r.beginPath(),r.moveTo(c,s),r.lineTo(c+d,s),r.stroke(),b(r,`HOME`,c-9,s+4,w(C,.85),`right`),b(r,`ALPHA CEN`,c+d+9,s+4,w(C,.85),`left`),r.font=m(e,`fig`),r.textAlign=`center`,r.fillStyle=w(C,.6);for(let[e,t]of kt)for(let n of[0+e,j-e]){let e=f(n);r.fillRect(e-.5,s-3,1,6),a>=480&&(!(a<760)||t===`1 min`||t===`1 day`||t===`1 yr`)&&(t!==`1 yr`||n<Et/2)&&r.fillText(t,e,s+18)}let p=Math.max(0,t.dir>0?j-t.x:t.x-0),h=p/Math.max(1,t.gamma),g=f(t.x),_=f(t.dir>0?j-h:0+h),v=Math.abs(_-g)>3;v&&(r.strokeStyle=w(ne,.75),r.lineWidth=2,r.shadowColor=w(ne,.8),r.shadowBlur=6,r.beginPath(),r.moveTo(g,s),r.lineTo(_,s),r.stroke(),r.fillStyle=`rgb(${ne})`,r.beginPath(),r.arc(_,s,4.5,0,7),r.fill(),r.shadowBlur=0),r.fillStyle=`#fff`,r.shadowColor=w(C,1),r.shadowBlur=8,r.beginPath(),r.arc(g,s,4.5,0,7),r.fill(),r.shadowBlur=0;let y=p*D<.5,ee=e=>y?`arrived`:xt(e).trim(),S=v?[{x:g,name:`EARTH’S MEASURE`,value:ee(p),yours:!1},{x:_,name:`YOURS`,value:ee(h),yours:!0}]:[{x:g,name:`TO GO`,value:ee(p),yours:!1}];u(r);let re=r.font,T=r.letterSpacing,E=m(e,`small`),O=S.map(e=>{r.font=re,r.letterSpacing=T;let t=r.measureText(e.name).width;return r.font=E,i(r),Math.max(t,r.measureText(e.value).width)}),k=S.map((e,t)=>({...e,wd:O[t],lx:0})).sort((e,t)=>e.x-t.x),ie=-1/0;for(let e of k)e.lx=Math.max(2,e.x-e.wd/2,ie+14),ie=e.lx+e.wd;let A=a-2;for(let e=k.length-1;e>=0;e--){let t=k[e];t.lx+t.wd>A&&(t.lx=A-t.wd),A=t.lx-14}let M=s-25,ae=s-12;for(let e of k){let t=e.lx+e.wd/2;r.font=re,r.letterSpacing=T,b(r,e.name,t,M,e.yours?w(ne,.9):w(C,.85),`center`),r.font=E,i(r),b(r,e.value,t,ae,e.yours?`rgb(${ne})`:w(x,.95),`center`),Math.abs(t-e.x)>3&&(r.strokeStyle=w(x,.4),r.lineWidth=1,r.beginPath(),r.moveTo(Math.max(e.lx,Math.min(e.lx+e.wd,e.x)),ae+3),r.lineTo(e.x,s-6),r.stroke())}i(r),e.setAttribute(`aria-label`,`The route from home to Alpha Centauri, on a scale that opens out from each end: still to go, ${ee(p)} by Earth's measure${v?`, ${ee(h)} by yours`:``}.`)}return{draw:t}}var jt=[{J:1e9,name:`a bolt of lightning`,times:`bolts of lightning`},{J:63e12,name:`the bomb that destroyed Hiroshima`,times:`Hiroshima bombs`},{J:0x71afd498d00000,name:`a large nuclear power station makes in a year`,times:`years of a nuclear power station`},{J:0x2ea11e32ad50000,name:`the largest bomb ever exploded`,times:`times the largest bomb ever`},{J:0x53444835ec580000,name:`everything the UK uses in a year`,times:`years of the UK’s energy`},{J:0x219c3a7b1966300000,name:`everything humanity uses in a year`,times:`years of humanity’s energy`},{J:4e23,name:`the asteroid that ended the dinosaurs`,times:`dinosaur-ending asteroids`},{J:55e23,name:`all the sunlight that reaches the Earth in a year`,times:`years of sunlight on Earth`},{J:38e25,name:`everything the Sun gives out in a second`,times:`seconds of the Sun’s output`}],Mt=e=>{let t=-1;return jt.forEach((n,r)=>{e>=n.J&&(t=r)}),t},Nt=e=>e.toUpperCase();function Pt(e){let t=me(e),n=1-t;return n>=.45&&n<.55?`HALF LIGHT SPEED`:n>=.85&&n<.95?`NINE-TENTHS OF LIGHT SPEED`:t>.0095?`${Math.round(100*n)}% OF LIGHT SPEED`:`0.${`9`.repeat(Math.floor(-Math.log10(t)+1e-9))} OF LIGHT SPEED`}function Ft(e,t,n,r,i=``,a=``){switch(e){case 0:return t<5?{kind:`big`,line:`THE VAN DRIVES THIS FIRST TRIP`,detail:`TO ALPHA CENTAURI, 4.37 LIGHT-YEARS, AND BACK. THEN THE THROTTLE IS YOURS`}:t<14?{kind:`big`,line:`SETTING OFF IN ${Math.ceil(14-t)}`,detail:`LOOK AROUND WHILE YOU WAIT: DRAG THE VIEW, OR THE BALL`}:{line:`PULLING AWAY`,detail:`THE GRID: EARTH’S FRAME, A CUBE EVERY LIGHT-SECOND`};case 1:return t<14?{line:`${Pt(n)}. THE WAY AHEAD IS CLOSING UP`,detail:`THE STARS AHEAD TURN BLUE, AND CROWD INTO THE WINDOW`}:t>18&&a?{line:`EARTH’S LIGHT-SECONDS, MEASURED: ${a} EACH`,detail:`SEEN: FURTHER APART THAN EVER. WHAT YOU MEASURE ISN’T WHAT YOU SEE`}:{line:Pt(n),detail:`THE GRID BENDS TOWARDS THE WINDOW AHEAD`};case 2:return r>700?{line:Pt(n),detail:`THE AFTERGLOW OF THE BIG BANG IS TAKING OVER`}:r>40?{line:`THE DUST IS SHINING`,detail:`ZOOMING IN ON THE WINDOW AHEAD: THE MILKY WAY’S DARK LANES, GLOWING`}:{line:Pt(n),detail:i?`ALPHA CENTAURI, BY YOUR MEASURE: ${i.toUpperCase()}`:`YOUR CLOCK RUNS ${Math.round(r).toLocaleString(`en-GB`)} TIMES SLOWER, BY EARTH’S`};case 3:return t<15?{line:`THE SKY AHEAD IS ON FIRE`,detail:`THE AFTERGLOW OF THE BIG BANG, SHIFTED UP INTO VISIBLE LIGHT`}:{line:`ZOOMING OUT`,detail:`A WINDSCREEN OF DARKNESS, AND ONE BLAZING POINT`};case 4:return t<26?{line:`SLOWING. ALPHA CENTAURI AHEAD`,detail:`THE WINDOW OPENS OUT. THE STARS RETURN TO THEIR PLACES`}:{kind:`go`,line:`PARKED AT ALPHA CENTAURI`,detail:`TWO SUNS AHEAD, AND OUR OWN JUST ANOTHER STAR BEHIND YOU`};case 5:return t<6.5?{kind:`go`,line:`TURNING…`,detail:`WATCH EARTH’S CLOCK, AS YOU RECKON IT`}:t<10.5?{line:`PROXIMA CENTAURI`,detail:`A RED DWARF, A FIFTH OF A LIGHT-YEAR AWAY`}:t<13?{kind:`go`,line:`TURNING…`,detail:`WATCH EARTH’S CLOCK, AS YOU RECKON IT`}:{line:`EARTH’S “NOW” HAS LEAPT`,detail:`BY YOUR RECKONING, YEARS HAVE PASSED THERE IN MOMENTS`};case 6:return{line:`RACING HOME`,detail:`THE WINDOW AHEAD HOLDS THE WHOLE SKY IN FRONT OF YOU, HOME INCLUDED`};default:return{line:`SLOWING FOR HOME`,detail:`THE SUN AHEAD, AND HOME`}}}var It=(e,t)=>({line:Nt(`Home. Earth: ${Lt(e)}. The Van: ${Lt(t)}.`),detail:`YOU TOOK A SHORTER PATH THROUGH TIME`});function Lt(e){return Ne(e).replace(/\byr\b/,`years`).replace(/\bmo\b/,`months`).replace(/\bh\b/,`hours`).replace(/\bmin\b/,`minutes`).replace(/\bs\b$/,`seconds`).replace(/^1 years/,`1 year`).replace(/ 1 months/,` 1 month`)}function Rt(e,t,n,r,i,a=null){return a===`parked`?{kind:`go`,line:`PARKED AT ALPHA CENTAURI`,detail:`TWO SUNS AHEAD. TURNING FOR HOME IN A MOMENT`}:a===`turning`?{kind:`go`,line:`TURNING…`,detail:`THEN HOME, AT THE THROTTLE YOU CAME OUT AT`}:i?{line:`TURNING ROUND`,detail:`SLOWING TO A STOP FIRST`}:n?{line:e>0?`ARRIVING AT ALPHA CENTAURI`:`ARRIVING HOME`,detail:`THE VAN IS SLOWING TO PARK`}:Math.abs(e)<1e-4?r===`home`?{line:`HOME. THE THROTTLE IS YOURS`,detail:`DRAG IT, OR PRESS + AND −. T TURNS ROUND`}:r===`ac`?{kind:`go`,line:`PARKED AT ALPHA CENTAURI`,detail:`TWO SUNS AHEAD`}:{line:`STOPPED`,detail:`BETWEEN THE STARS`}:t>60&&t<600?{line:Pt(e),detail:`THE DUST IS SHINING AHEAD OF YOU`}:t>=600?{line:Pt(e),detail:`THE AFTERGLOW OF THE BIG BANG, BLAZING AHEAD. PRESS Z TO ZOOM IN`}:{line:Pt(e),detail:t>1.5?`YOUR CLOCK RUNS ${t<10?t.toFixed(1):Math.round(t)} TIMES SLOWER, BY EARTH’S`:`BLUER AHEAD, REDDER BEHIND`}}var $=e=>document.getElementById(e),zt=9,Bt=.8;function Vt(){let r=$(`sim-stage`),i=$(`sim-canvas`),o=$(`sim-hint`),s=$(`sim-launch`),c=$(`sim-launch-btn`),l=$(`fl-end`),u=null,d={mode:`launch`,playing:!1,at:0,yaw:0,pitch:0,fov:72,fovOwn:!1,fit:!1,guided:!0},p=null,m=[],h={x:0,t:0,tau:0,eta:0},_=1,v=0,b=0,x=!1,te=!1,ne=!1,O=null,k=0,ie=0,M=0,ce=[],R=!1,ue=!0,de=0,fe=0,z=!0,V=`earth`,H=0,_e=0,U=-1e9,W=0,G=[],K=g($(`sim`).dataset.narration??``,{time:()=>d.at,active:()=>d.mode===`guided`,playing:()=>d.playing,ended:()=>R}),q=[{id:`overview`,name:`Overview`},{id:`time`,name:`Time`},{id:`sky`,name:`Your sky`},{id:`spacetime`,name:`Spacetime`}],ve=f(JSON.parse($(`sim`).dataset.cues||`null`)),J=e=>e===null?q[0].id:q.find(t=>t.name.toLowerCase()===e.toLowerCase())?.id??null;for(let e of ve.views)J(e)||console.warn(`narration: the cue sheet shows the view "${e}", which this simulator doesn't have`);let Y=!1,Se=!1;function Ce(){if(d.mode!==`guided`||Se)return;let e=J(ve.viewAt(d.at));e&&e!==X.view&&X.setView(e)}let we=a(`Zoom in on the window ahead (Z)`,t(`<circle cx="7" cy="7" r="4.6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.4 10.4 14 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M5 7h4M7 5v4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`),()=>ot()),Te=a(`Turn round (T)`,t(`<path d="M4 6.5h6.5a3 3 0 0 1 0 6H6M6 3.5l-3 3 3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`),()=>st()),X=y({playing:()=>d.playing,toggle:()=>at(),again:()=>{d.mode!==`launch`&&et()},againTitle:`Run the guided trip again (R)`,keys:[K.button,we,Te],fov:!0,busy:()=>!!Je||ze,views:q,onView:(e,t)=>{Y=t,t&&d.mode!==`launch`&&(Se=!0),d.mode!==`launch`&&(t&&_n(),wn(),$t())},onKey:(e,t)=>{if(e===`t`)st();else if(e===`n`)K.toggle();else if(e===`z`)ot();else if(e===`g`)ue=!ue,u?.resetHistory();else if(e===`y`)xn(V===`earth`?`yours`:`earth`);else if(t.key===`+`||t.key===`=`)Ve(1);else if(t.key===`-`||t.key===`_`)Ve(-1);else if(t.key.startsWith(`Arrow`)&&d.mode!==`launch`){t.preventDefault();let e=5*Math.PI/180;$e(t.key===`ArrowLeft`?-e:t.key===`ArrowRight`?e:0,t.key===`ArrowUp`?e:t.key===`ArrowDown`?-e:0)}else return!1;return!0}}),De=X.ballEl,Oe=()=>we.classList.toggle(`is-on`,d.fit),ke=$(`fl-thr`),Z=e=>e===0?0:Math.min(1,Math.log10(1/me(e))/zt),Ie=e=>e<=0?0:ge(1-10**(-e*zt));ke.innerHTML=`<div class="fl-lever" id="fl-lever" role="slider" tabindex="0" aria-label="Throttle: speed as a fraction of light's" aria-valuemin="0" aria-valuemax="9">
      <span class="fl-track"></span><span class="fl-fill"></span><span class="fl-knob"></span>
      ${[[0,`0`],[1,`90%`],[2,`99%`],[3,`99.9%`],[4,`4 nines`],[5,`5 nines`],[6,`6 nines`],[7,`7 nines`],[8,`8 nines`],[9,`9 nines`]].map(([e,t])=>`<span class="fl-tick${[2,4,6,7,8].includes(e)?` is-minor`:``}" style="--at:${e/zt}">${t}</span>`).join(``)}
    </div>`;let Q=$(`fl-lever`),Le=$(`fl-drive`).querySelector(`.lcd-cap`),Re=document.createElement(`p`);Re.className=`fl-thr-v`,Le.after(Re);let ze=!1,Be=(e,t)=>{if((h.ap||O)&&d.mode===`free`)return;let n=Q.getBoundingClientRect(),r=n.width>n.height?(e-n.left-10)/(n.width-20):(n.bottom-10-t)/(n.height-20);b=Math.min(1,Math.max(0,r)),it()};Q.addEventListener(`pointerdown`,e=>{ze=!0,Q.setPointerCapture(e.pointerId),Be(e.clientX,e.clientY)}),Q.addEventListener(`pointermove`,e=>{ze&&Be(e.clientX,e.clientY)}),Q.addEventListener(`pointerup`,()=>{ze=!1}),Q.addEventListener(`pointercancel`,()=>{ze=!1}),Q.addEventListener(`keydown`,e=>{(e.key===`ArrowUp`||e.key===`ArrowRight`)&&(e.preventDefault(),e.stopPropagation(),Ve(1)),(e.key===`ArrowDown`||e.key===`ArrowLeft`)&&(e.preventDefault(),e.stopPropagation(),Ve(-1))});function Ve(e){(!h.ap&&!O||d.mode!==`free`)&&(d.mode===`guided`&&(b=Z(p.at(d.at).eta)),b=Math.min(1,Math.max(0,Math.round(b*zt*4+e)/36)),it())}let He=e=>{d.mode===`guided`&&p&&(d.at=Math.min(p.dur,Math.max(0,e)),z=!0,R=!1,l.hidden=!0,u?.resetHistory(),hn=!0,_n(),hn=!1)},Ue=e($(`sim-tl`),e=>{p&&(d.playing&&(d.playing=!1,X.setPlay()),He(e*p.dur))}),We=document.createElement(`canvas`);We.className=`fl-foot-route`,We.setAttribute(`role`,`img`),$(`sim-tl`).append(We);let Ke=At(We),qe=()=>{let e=d.mode===`guided`&&!!p;$(`sim`).classList.toggle(`is-driving`,!e),e&&Ue.marks(p.chapters.map((e,t)=>[xe[t],e/p.dur]))},Je=null,Ye=!1,Xe=0,Ze=e=>Math.max(-Math.PI,Math.min(Math.PI,e)),Qe=(e,t,n)=>{e.addEventListener(`pointerdown`,t=>{d.guided=!1,Xe=0,Ye=!0,Je={x:t.clientX,y:t.clientY,ball:n},e.setPointerCapture(t.pointerId),r.classList.add(`is-looking`),e.classList.add(`is-turning`)}),e.addEventListener(`pointermove`,e=>{if(!Je)return;let n=t();d.yaw-=(e.clientX-Je.x)*n,d.pitch=Ze(d.pitch+(e.clientY-Je.y)*n),Je.x=e.clientX,Je.y=e.clientY});let i=()=>{Je=null,r.classList.remove(`is-looking`),e.classList.remove(`is-turning`),Xe=performance.now()+3e3,n&&e.blur()};e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i),e.addEventListener(`wheel`,e=>{e.preventDefault(),d.fov=Math.max(.05,Math.min(120,d.fov*Math.exp(e.deltaY*.001))),d.fovOwn=!0,d.fit=!1,Oe()},{passive:!1})};Qe(i,()=>d.fov*Math.PI/180/i.clientHeight,!1),Qe(De,()=>2/Math.max(1,De.clientWidth),!0);let $e=(e,t)=>{d.guided=!1,d.yaw+=e,d.pitch=Ze(d.pitch+t),Xe=performance.now()+3e3,Ye=!0};function et(){p&&(d.mode=`guided`,d.at=0,d.playing=!0,R=!1,l.hidden=!0,Se=Y&&X.view!==q[0].id,d.yaw=0,d.pitch=0,d.guided=!0,d.fovOwn=!1,d.fit=!1,d.fov=72,z=!0,X.setPlay(),Oe(),qe(),u?.resetHistory(),X.raiseLcd(),_n())}function tt(e,t=1){d.mode=`free`,d.playing=!0,R=!1,l.hidden=!0,M=0,Object.assign(h,e??{x:0,t:0,tau:0,eta:0,e:0}),h.ap=null,O=null,_=t,v=t>0?0:180,x=!1,ne=h.x>j/2,z=!0,ce=[[h.x,h.t]],G.length=0,b=Z(h.eta),d.fovOwn=!1,X.setPlay(),qe(),u?.resetHistory(),_n()}function it(){if(d.mode===`guided`&&p){let e=p.at(d.at);tt({x:e.x,t:e.t,tau:e.tau,eta:e.eta,e:e.e},e.yaw<90?1:-1),b=Z(e.eta)}d.mode===`free`&&R&&(R=!1,ne=!1),d.mode===`free`&&!d.playing&&(d.playing=!0,X.setPlay()),X.raiseLcd(2800)}function at(){if(d.mode!==`launch`){if(R&&d.mode===`guided`){et();return}d.playing=!d.playing,X.setPlay(),X.raiseLcd(d.playing?1200:2800)}}function ot(){d.fit=!d.fit,d.fovOwn=d.fit,d.fit||(d.fovOwn=!1),Oe()}function st(){d.mode===`guided`&&it(),!(d.mode!==`free`||h.ap||O)&&(Math.abs(h.eta)<1e-4?(_=-_,h.eta=0):x=!0)}let ct=()=>{if(d.mode===`guided`&&p){let e=p.at(d.at);return{...e,fovRun:e.fov}}return{...h,yaw:v,ch:-1,fovRun:72}},lt={noPoints:!1},ut=new Float32Array(nt*6),dt=performance.now(),ft=0,pt=0,mt=0,ht=0,gt=!1,_t=!1,vt=e=>Math.cosh(e)>3e3?be(e):ye(e,.02),St=e=>{if(mt=requestAnimationFrame(St),gt&&d.mode===`launch`&&!_t){dt=e;return}let t=Math.min(.1,(e-dt)/1e3);if(dt=e,d.playing&&d.mode===`guided`&&p&&(d.at=Math.min(p.dur,d.at+t),d.at>=p.dur&&!R&&Tn()),d.playing&&d.mode===`free`){let n=x?0:_*Ie(b),r=!!h.ap;te=Ae(h,n,t).arriving,!r&&h.ap&&(ie=b),r&&!h.ap&&(b=0);let i=e/1e3;!O&&_>0&&h.x>=4.367628123884366&&h.eta===0&&!h.ap&&(O=`parked`,k=i),O===`parked`&&i-k>7&&(O=`turning`,k=i,_=-1),O===`turning`&&i-k>4.5&&(O=null,b=ie>.05?ie:6/zt),x&&Math.abs(h.eta)<1e-4&&(h.eta=0,_=-_,x=!1),h.x>=4.367628123884366&&(ne=!0),e-H>400&&(G.unshift([h.x,h.t,Math.tanh(h.eta)]),G.length=Math.min(G.length,12),H=e);let a=ce[ce.length-1];(Math.abs(h.x-a[0])>.01||Math.abs(h.t-a[1])>.01)&&ce.push([h.x,h.t]),ne&&h.x<=1e-12&&h.eta===0&&!h.ap&&!R&&(R=!0,M=i),R&&M>0&&i-M>3.5&&(M=0,Tn())}v+=((_>0?0:180)-v)*(1-Math.exp(-t/(O===`turning`?1.1:.6)));let n=ct();if(!d.guided&&Xe&&e>Xe&&!Je&&(d.guided=!0,Xe=0),d.guided){let e=1-Math.exp(-t/.7);d.yaw+=(0-d.yaw)*e,d.pitch+=(0-d.pitch)*e}d.fit?d.fov+=(vt(n.eta)-d.fov)*(1-Math.exp(-t/.5)):d.fovOwn||(d.fov=d.mode===`guided`?n.fovRun:d.fov+(72-d.fov)*(1-Math.exp(-t/.8)));let r=n.yaw*Math.PI/180,a=F(N(P(I,Math.cos(r)),le,Math.sin(r))),o=F(se(a,L)),s=F(N(P(F(N(P(a,Math.cos(d.yaw)),o,Math.sin(d.yaw))),Math.cos(d.pitch)),L,Math.sin(d.pitch))),c=F(se(s,L)),l=se(c,s),f=Math.sign(n.eta)||(n.yaw<90?1:-1),m=P(I,f);Kt={fwd:s,right:c,up:l,vDir:m};let g=n.x*D;!z&&t>0&&(de+=(Math.log10(Math.max(Math.abs(g-fe)/t/Bt,1))-de)*(1-Math.exp(-t/.5))),fe=g,z=!1;let y=Math.floor(de),ee=de-y,S=e=>e-Math.floor(e),C=ue?{axes:[I,le,L],layers:[{shift:S(g/10**y),alpha:1-ee},{shift:S(g/10**(y+1)),alpha:ee}]}:null;try{let t=lt.noPoints?0:rt(n.x,n.eta,f,ut,Math.exp(-(e/1e3-U)/.5)),r={right:c,up:l,fwd:s,tanHalf:Math.tan(d.fov/2*Math.PI/180),vDir:m,beta:pe(n.eta),omb:me(n.eta),gamma:he(n.eta),here:P(I,n.x-A),grid:C};u.draw(r,{data:ut,count:t}),X.view===`sky`&&X.lcdUp()&&!(ht%6)&&u.allSky(r,...Ut.size());let i=u.pollSky();i&&(Ut.take(i.px,i.w,i.h),X.view===`sky`&&$t())}catch(e){console.error(e)}X.ball.draw({right:c,up:l,fwd:s,hole:P(I,f),tanY:Math.tan(d.fov/2*Math.PI/180),tanX:Math.tan(d.fov/2*Math.PI/180)*(i.width/Math.max(1,i.height))},!!Je?.ball||De.matches(`:focus-visible`),`star`),ht++,e-ft>100&&(_n(),ft=e),e-pt>40&&X.lcdUp()&&(wn(),$t(),pt=e)},Ct=$(`sim-inst`).querySelector(`.hp-body`),wt=[`speed`,`gamma`,`energy`];Ct.innerHTML=`<div class="fl-head" id="fl-head"><span class="hp-k"></span><span class="fl-head-m is-yours"><b></b><small>your measure</small></span><span class="fl-head-m is-earth"><b></b><small>Earth’s measure</small></span></div>`+wt.map(e=>`<div class="hp-row" data-row="${e}"><span class="hp-k"></span><span class="hp-v"><b></b><small></small></span></div>`).join(``);let Et=Tt($(`fl-clocks-row`)),Dt=e=>$(e).querySelector(`.hp-body`),Ot=E($(`fl-inst-spec`)),kt=E($(`fl-sky-spec`)),Nt=E($(`fl-time-spec`)),Pt=S(Dt(`fl-time-read`),{seen:`Birthdays seen`,stretch:`Stretch`}),Lt=S(Dt(`fl-sky-read`),{window:`Half the stars within`,glow:`Afterglow ahead`}),Vt=S(Dt(`fl-dist`),{short:`Your distance vs Earth’s`,year:`Earth’s light-year vs yours`}),Ht=$(`fl-sky-canvas`),Ut=T(Ht),Wt=re($(`fl-msgs-canvas`),{sent:`EARTH’S CLOCK`,got:`YOUR CLOCK`}),Gt=At($(`fl-route`)),Kt=null,qt=(e,t)=>{let n=N(e,Kt?.vDir??I,-1),r=.5*oe(n,n);return 1/(he(t.eta)*(me(t.eta)+pe(t.eta)*r))},Jt=e=>{let t=[{nm:555,name:`Source`,side:`top`}];return Kt&&t.push({nm:555/qt(Kt.fwd,e),name:`Ahead`,side:`bottom`},{nm:555/qt(P(Kt.fwd,-1),e),name:`Behind`,side:`bottom`}),t},Yt=e=>Math.exp(e.eta),Xt=e=>2*Math.asin(Math.sqrt(me(e.eta)/2)),Zt=e=>e<10?e.toFixed(2):e<100?e.toFixed(1):e<1e6?Math.round(e).toLocaleString(`en-GB`):ee(e),Qt=e=>{if(!Kt||!Ut.ready)return;let t=Ht.getContext(`2d`),n=Ht.clientWidth,r=Ht.clientHeight;if(n<40||r<40)return;let{fwd:i,right:a,up:o,vDir:s}=Kt,c=Xt(e),l=e=>[n/2+Math.atan2(oe(e,a),oe(e,i))/Math.PI*(n/2),r/2-Math.asin(Math.max(-1,Math.min(1,oe(e,o))))/(Math.PI/2)*(r/2)],u=F(se(s,Math.abs(s[2])<.9?[0,0,1]:[1,0,0])),d=se(s,u);if(t.strokeStyle=w(C,1),t.lineWidth=1.6,t.setLineDash([5,3]),t.shadowColor=`#000`,t.shadowBlur=3,t.beginPath(),r/Math.PI*c<10){let[e,n]=l(s);t.arc(e,n,10,0,7),t.stroke(),t.setLineDash([]),t.fillStyle=`#fff`,t.shadowColor=w(C,1),t.shadowBlur=8,t.beginPath(),t.arc(e,n,1.8,0,7),t.fill(),t.shadowBlur=0;return}{let e=null;for(let r=0;r<=120;r++){let i=r/120*2*Math.PI,a=l(N(N(P(s,Math.cos(c)),u,Math.sin(c)*Math.cos(i)),d,Math.sin(c)*Math.sin(i)));!e||Math.abs(a[0]-e[0])>n/2?t.moveTo(a[0],a[1]):t.lineTo(a[0],a[1]),e=a}}t.stroke(),t.setLineDash([]),t.shadowBlur=0};function $t(){if(d.mode===`launch`||!X.lcdUp())return;let e=ct();switch(X.view){case`overview`:Ot.draw(Jt(e));break;case`time`:{let t=Yt(e);Wt.draw(e.tau,t),Nt.draw([{nm:555,name:`Earth`,side:`top`},{nm:555*t,name:`You`,side:`bottom`}]);break}case`sky`:{let t=Math.tan(d.fov/2*Math.PI/180);Ut.draw(t*(i.width/Math.max(1,i.height)),t),Qt(e),kt.draw(Jt(e));break}case`spacetime`:if(d.mode===`guided`){let t=Math.sign(e.eta)||(e.yaw<90?1:-1);Gt.draw({x:e.x,dir:t,gamma:he(e.eta)})}}}let en=(e,t)=>{switch(X.view){case`time`:{let t=Yt(e),n=Math.max(0,Math.floor(je(e)));Pt.set(`seen`,n?String(n):`None yet`),Pt.set(`stretch`,t>=1?`×${Zt(t)}`:`×1/${Zt(1/t)}`);break}case`sky`:{let n=Xt(e)*180/Math.PI,r=me(e.eta)/2,i=n>=10?`${n.toFixed(0)}°`:n>=1?`${n.toFixed(1)}°`:`${Number(n.toPrecision(2))}°`,a=Math.max(1,Math.round(r*12));Lt.set(`window`,`${i}<span class="hp-gauge bh-gauge">${Array.from({length:12},(e,t)=>`<i${t<a?` class="is-on"`:``}></i>`).join(``)}</span>`);let o=2.725/(t*me(e.eta));Lt.set(`glow`,`${o<100?o.toFixed(1):Math.round(o).toLocaleString(`en-GB`)} K`);break}case`spacetime`:Vt.set(`short`,t<1.0005?`The same`:`${Zt(t)} times shorter`),Vt.set(`year`,bt(1/t))}},tn=$(`fl-head`),nn=tn.querySelector(`.hp-k`),rn=tn.querySelector(`.is-yours b`),an=tn.querySelector(`.is-earth b`),on=(e,t)=>{e.textContent!==t&&(e.textContent=t)},sn=Object.fromEntries(wt.map(e=>{let t=Ct.querySelector(`[data-row="${e}"]`);return[e,{k:t.querySelector(`.hp-k`),v:t.querySelector(`b`),u:t.querySelector(`small`)}]})),cn=(e,t,n,r)=>{let i=sn[e];i.k.textContent!==t&&(i.k.textContent=t),i.v.textContent!==n&&(i.v.textContent=n),i.u.textContent!==r&&(i.u.textContent=r)},ln=e=>e<1e6?Math.round(e).toLocaleString(`en-GB`):e<1e9?`${(e/1e6).toFixed(+(e<1e7))} million`:`${(e/1e9).toFixed(1)} billion`,un=e=>`T${e<0?`−`:`+`}${Pe(Math.abs(e))}`,dn=e=>{if(e<1)return`0 J`;let t=Math.floor(Math.log10(e));return t<4?`${Math.round(e)} J`:`${(e/10**t).toFixed(1)} × 10${String(t).split(``).map(e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[+e]).join(``)} J`},fn=-1,pn=-1e9,mn=-1,hn=!1,gn=e=>{let t=sn[e].v.parentElement;t.classList.remove(`is-pulse`),t.offsetWidth,t.classList.add(`is-pulse`)};function _n(){if(d.mode===`launch`)return;Ce(),K.sync();let e=ct(),t=he(e.eta),n=Math.sign(e.eta)||(e.yaw<90?1:-1);cn(`speed`,`Speed`,`${Fe(e.eta)} c`,``),cn(`gamma`,`Lorentz factor`,t<10?t.toFixed(2):ln(t),``);let r=je(e),i=Me(e);Et.draw({van:e.tau,vanText:Pe(e.tau),seen:r,seenText:un(r),reckoned:i,reckonedText:un(i)});let a=(e.e??0)*B,s=Mt(a);cn(`energy`,`Energy spent`,dn(a),``);let c=Math.max(0,Math.floor(je(e)));c!==_e&&(c>_e&&d.playing&&!hn?(U=performance.now()/1e3,W=c):(U=-1e9,W=c),_e=c),s!==fn&&(s>fn&&d.playing&&!hn?(pn=performance.now()/1e3,gn(`energy`)):pn=-1e9,mn=fn=s);let l=n>0,u=Math.max(0,l?j-e.x:e.x-0);X.setFov(d.fov);let f=d.mode===`guided`||h.ap?Z(e.eta):b;Q.style.setProperty(`--lever`,String(f)),Q.style.setProperty(`--speed`,String(Z(e.eta))),Q.setAttribute(`aria-valuenow`,String((f*zt).toFixed(2))),Q.setAttribute(`aria-valuetext`,`${Fe(e.eta)} of light's speed`);{let e=f<=0?`0`:Fe(Ie(f)).replace(/(\.\d*?)0+%$/,`$1%`).replace(/\.%$/,`%`);Re.textContent!==e&&(Re.textContent=e)}{let e=d.mode===`guided`||!!h.ap||!!O,t=e?`Auto throttle`:`Throttle`;Le.textContent!==t&&(Le.textContent=t),$(`fl-drive`).classList.toggle(`is-auto`,e)}d.mode===`guided`&&p?(Ue.set(d.at/p.dur),Ue.current(e.ch)):Ke.draw({x:e.x,dir:n,gamma:t}),X.lcdUp()&&en(e,t);let m=performance.now()/1e3,g=m-pn,_=bt(u/t),v=e.x<=1e-12?`home`:e.x>=4.367628123884366?`ac`:`between`,y;y=R?It(e.t,e.tau):d.mode===`guided`&&p?Ft(e.ch,d.at-p.chapters[e.ch],e.eta,t,_,`${(ae.spacing/t).toFixed(2)} LIGHT-SECONDS`):Rt(h.eta,t,te,v,x,O);let ee=m-U;W>0&&ee<2.5&&!R&&(y={kind:`flash`,line:`A FLASH FROM HOME: ALBERT’S ${Cn(W)} BIRTHDAY SINCE YOU LEFT`,detail:`ON YOUR CLOCK: ${Ne(e.tau).toUpperCase()}`}),mn>=0&&g<3.5&&!R&&(y={kind:`flash`,line:`ENERGY SPENT: MORE THAN ${jt[mn].name.toUpperCase()}`,detail:dn(a)}),X.say(y);{let e=u*D<.5;on(nn,`To ${l?`Alpha Centauri`:`home`}`),on(rn,e?`Arrived`:xt(u/t)),on(an,e?`Arrived`:xt(u))}o.classList.toggle(`is-shown`,!Ye&&d.mode===`guided`&&d.at>3&&d.at<30)}let vn=$(`sim-st-canvas`),yn=Ge(vn),bn=[...document.querySelectorAll(`.fl-frame button`)];function xn(e){V=e,bn.forEach(t=>{let n=t.dataset.frame===e;t.classList.toggle(`is-on`,n),t.setAttribute(`aria-pressed`,String(n))}),wn()}bn.forEach(e=>e.addEventListener(`click`,t=>{t.stopPropagation(),xn(e.dataset.frame)}));let Sn=[``,`FIRST`,`SECOND`,`THIRD`,`FOURTH`,`FIFTH`,`SIXTH`,`SEVENTH`,`EIGHTH`,`NINTH`,`TENTH`,`ELEVENTH`,`TWELFTH`],Cn=e=>Sn[e]??`${e}TH`;function wn(){if(d.mode===`launch`)return;let e=ct(),t;if(d.mode===`guided`&&p){t=[];let e=Math.max(.5,d.at/200);for(let n=0;n<d.at;n+=e){let e=p.at(n);t.push([e.x,e.t])}}else t=ce;let n=[];if(d.mode===`guided`&&p)for(let e=1;e<=12;e++){let t=d.at-e*.7;if(t<0)break;let r=p.at(t);n.push([r.x,r.t,Math.tanh(r.eta)])}else n.push(...G);yn.draw({x:e.x,t:e.t,eta:e.eta,path:t,plan:d.mode===`guided`?m:null,reckoned:Me(e),trail:n,frame:V,birthday:W,birthdayAge:performance.now()/1e3-U,tEnd:d.mode===`guided`&&m.length?m[m.length-1][1]:Math.max(9,e.t+.5)});let i=$(`sim-st`);if(r.clientWidth>1100){let e=m.length?m[m.length-1][1]:9,t=`${yn.widthFor(vn.clientHeight,e)}px`;i.style.getPropertyValue(`--st-w`)!==t&&i.style.setProperty(`--st-w`,t)}else i.style.getPropertyValue(`--st-w`)&&i.style.removeProperty(`--st-w`)}function Tn(){R=!0,d.playing=!1,X.setPlay();let e=ct();$(`fl-end-readout`).textContent=It(e.t,e.tau).line,l.hidden=!1,X.raiseLcd(2800)}l.querySelector(`[data-again]`)?.addEventListener(`click`,()=>et()),l.querySelector(`[data-drive]`)?.addEventListener(`click`,()=>{tt(),b=0}),l.querySelector(`a`)?.setAttribute(`href`,X.from),c.addEventListener(`click`,()=>{c.disabled||d.mode!==`launch`||_t||(_t=!0,c.disabled=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{s.classList.add(`is-gone`),r.classList.add(`is-running`),setTimeout(()=>{_t=!1,et()},1700)})))});let En=e=>new Promise(t=>setTimeout(t,e));n(s.querySelector(`ol`),$(`sim-go`),c,[{label:`Sky tracer compiled`,min:450,run:()=>{if(u=yt(i),!u)throw Error(`no WebGL 2`);mt=requestAnimationFrame(St)}},{label:`Galactic image`,done:`Milky Way`,min:400,run:()=>u.skyReady},{label:`Star catalogue`,done:`Tycho-2`,min:350,run:()=>u.starsReady.catch(()=>{})},{label:`Infrared sky`,done:`Planck’s dust`,min:400,run:()=>u.dustReady},{label:`Journey plotted`,min:400,run:()=>{p=Ee(),m=[];for(let e=0;e<=p.dur;e+=.5){let t=p.at(e);m.push([t.x,t.t])}}},{label:`Light cones aligned`,min:600,run:async()=>{let e=ht,t=performance.now();for(;ht-e<40&&performance.now()-t<2500;)await En(50);gt=!0}},{label:`Grid`,done:`SQUARE`,min:300},{label:`Clocks synchronised`,done:`WITH EARTH`,min:330},{label:`Throttle`,done:`UNLIMITED (NEARLY)`,amber:!0,min:360},{label:`Lane discipline`,done:`QUESTIONABLE`,amber:!0,min:360},{label:`Doughnuts`,done:`STOWED`,min:300},{label:`Return journey`,done:`GUARANTEED`,min:420}],(e,t)=>{let n=Math.round(100*e/t);$(`sim-calc-bar`).style.width=`${n}%`,$(`sim-calc-pct`).textContent=`${n}%`,e===t&&($(`sim-calc-label`).textContent=`Simulated journey calculated`,$(`sim-calc`).classList.add(`is-done`))}).catch(()=>{s.classList.add(`is-unsupported`)}),X.setPlay(),new URLSearchParams(location.search).has(`debug`)&&(window.__fl={seek(e,t=!1){d.mode!==`guided`&&et(),d.at=e,d.playing=t,X.setPlay(),u?.resetHistory(),hn=!0,_n(),hn=!1},drive(e,t,n=1){tt({x:e,t:0,tau:0,eta:n*Math.acosh(Math.max(1,t))},n),b=Z(h.eta)},fit:ot,get state(){return{...d,scale:u?.scale,fps:u?.fps,gfx:u?.debug()}},get narration(){let e=K.audio;return e?{at:e.currentTime,run:d.at,paused:e.paused,ready:e.readyState,duration:e.duration,view:X.view,own:Se}:null},dbg:lt}),window.addEventListener(`pagehide`,()=>{cancelAnimationFrame(mt),u?.destroy()}),i.addEventListener(`webglcontextlost`,e=>e.preventDefault()),i.addEventListener(`webglcontextrestored`,()=>location.reload())}Vt();