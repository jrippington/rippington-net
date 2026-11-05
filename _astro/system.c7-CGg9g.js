import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,J as l,K as u,L as d,M as f,N as p,O as m,P as h,R as g,S as _,T as v,U as y,V as b,W as x,Y as S,_ as C,a as w,b as T,c as E,d as D,f as O,g as k,h as A,i as j,j as ee,k as M,l as N,m as P,n as te,o as ne,p as re,q as ie,r as ae,s as F,t as oe,u as se,v as ce,w as I,x as le,y as ue,z as de}from"./Shell.astro_astro_type_script_index_0_lang.FMEsX2HP.js";var fe=1e3,pe=1001,me=1002,he=1003,ge=1004,_e=1005,ve=1006,ye=1007,be=1008,xe=1009,Se=1010,L=1011,Ce=1012,we=1013,Te=1014,Ee=1015,De=1016,Oe=1017,ke=1018,Ae=1020,R=35902,z=35899,je=1021,B=1022,V=1023,Me=1026,Ne=1027,H=1028,Pe=1029,Fe=1030,Ie=1031,Le=1033,Re=33776,ze=33777,Be=33778,Ve=33779,He=35840,Ue=35841,We=35842,Ge=35843,Ke=36196,qe=37492,Je=37496,Ye=37488,Xe=37489,Ze=37490,Qe=37491,$e=37808,et=37809,tt=37810,nt=37811,rt=37812,it=37813,at=37814,ot=37815,st=37816,ct=37817,lt=37818,ut=37819,dt=37820,ft=37821,pt=36492,mt=36494,ht=36495,gt=36283,_t=36284,vt=36285,yt=36286,bt=2300,xt=2301,St=2302,Ct=2303,wt=2400,Tt=2401,Et=2402,Dt=3200,Ot=`srgb`,kt=`srgb-linear`,At=`linear`,jt=`srgb`,Mt=7680,Nt=35044,Pt=35048,Ft=2e3;function It(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Lt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function zt(){let e=Rt(`canvas`);return e.style.display=`block`,e}var Bt={};function Vt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ht(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=Ht(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=Ht(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ut(...e){let t=e.join(` `);t in Bt||(Bt[t]=!0,U(...e))}function Wt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Gt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Kt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},qt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Jt=1234567,Yt=Math.PI/180,Xt=180/Math.PI;function Zt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qt[e&255]+qt[e>>8&255]+qt[e>>16&255]+qt[e>>24&255]+`-`+qt[t&255]+qt[t>>8&255]+`-`+qt[t>>16&15|64]+qt[t>>24&255]+`-`+qt[n&63|128]+qt[n>>8&255]+`-`+qt[n>>16&255]+qt[n>>24&255]+qt[r&255]+qt[r>>8&255]+qt[r>>16&255]+qt[r>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function $t(e,t){return(e%t+t)%t}function en(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function tn(e,t,n){return e===t?0:(n-e)/(t-e)}function nn(e,t,n){return(1-n)*e+n*t}function rn(e,t,n,r){return nn(e,t,1-Math.exp(-n*r))}function an(e,t=1){return t-Math.abs($t(e,t*2)-t)}function on(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function sn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function cn(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ln(e,t){return e+Math.random()*(t-e)}function un(e){return e*(.5-Math.random())}function dn(e){e!==void 0&&(Jt=e);let t=Jt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fn(e){return e*Yt}function pn(e){return e*Xt}function mn(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function hn(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function gn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function _n(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function vn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function yn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var G={DEG2RAD:Yt,RAD2DEG:Xt,generateUUID:Zt,clamp:Qt,euclideanModulo:$t,mapLinear:en,inverseLerp:tn,lerp:nn,damp:rn,pingpong:an,smoothstep:on,smootherstep:sn,randInt:cn,randFloat:ln,randFloatSpread:un,seededRandom:dn,degToRad:fn,radToDeg:pn,isPowerOfTwo:mn,ceilPowerOfTwo:hn,floorPowerOfTwo:gn,setQuaternionFromProperEuler:_n,normalize:yn,denormalize:vn},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qt(this.x,e.x,t.x),this.y=Qt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qt(this.x,e,t),this.y=Qt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qt(this.x,e.x,t.x),this.y=Qt(this.y,e.y,t.y),this.z=Qt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qt(this.x,e,t),this.y=Qt(this.y,e,t),this.z=Qt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xn.copy(this).projectOnVector(e),this.sub(xn)}reflect(e){return this.sub(xn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xn=new q,Sn=new bn,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ut(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Cn.makeScale(e,t)),this}rotate(e){return Ut(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Cn.makeRotation(-e)),this}translate(e,t){return Ut(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Cn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cn=new J,wn=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tn=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function En(){let e={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=On(e.r),e.g=On(e.g),e.b=On(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=kn(e.r),e.g=kn(e.g),e.b=kn(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?At:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ut(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ut(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[kt]:{primaries:t,whitePoint:r,transfer:At,toXYZ:wn,fromXYZ:Tn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:t,whitePoint:r,transfer:jt,toXYZ:wn,fromXYZ:Tn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),e}var Dn=En();function On(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function kn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var An,jn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{An===void 0&&(An=Rt(`canvas`)),An.width=e.width,An.height=e.height;let t=An.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=An}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=On(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(On(t[e]/255)*255):t[e]=On(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Mn=0,Nn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mn++}),this.uuid=Zt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Pn(r[t].image)):e.push(Pn(r[t]))}else e=Pn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Pn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?jn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var Fn=0,In=new q,Ln=class e extends Kt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=pe,i=pe,a=ve,o=be,s=V,c=xe,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fn++}),this.uuid=Zt(),this.name=``,this.source=new Nn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(In).x}get height(){return this.source.getSize(In).y}get depth(){return this.source.getSize(In).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fe:e.x-=Math.floor(e.x);break;case pe:e.x=e.x<0?0:1;break;case me:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case fe:e.y-=Math.floor(e.y);break;case pe:e.y=e.y<0?0:1;break;case me:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null,Ln.DEFAULT_MAPPING=300,Ln.DEFAULT_ANISOTROPY=1;var Rn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qt(this.x,e.x,t.x),this.y=Qt(this.y,e.y,t.y),this.z=Qt(this.z,e.z,t.z),this.w=Qt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qt(this.x,e,t),this.y=Qt(this.y,e,t),this.z=Qt(this.z,e,t),this.w=Qt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zn=class extends Kt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rn(0,0,e,t),this.scissorTest=!1,this.viewport=new Rn(0,0,e,t),this.textures=[];let r=new Ln({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ve,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Nn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Bn=class extends zn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vn=class extends Ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=he,this.minFilter=he,this.wrapR=pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Hn=class extends Ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=he,this.minFilter=he,this.wrapR=pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Un=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Wn.setFromMatrixColumn(e,0).length(),i=1/Wn.setFromMatrixColumn(e,1).length(),a=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kn,e,qn)}lookAt(e,t,n){let r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Jn.crossVectors(n,Xn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Jn.crossVectors(n,Xn)),Jn.normalize(),Yn.crossVectors(Xn,Jn),r[0]=Jn.x,r[4]=Yn.x,r[8]=Xn.x,r[1]=Jn.y,r[5]=Yn.y,r[9]=Xn.y,r[2]=Jn.z,r[6]=Yn.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*ee+c*te,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*ee+f*te,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*ee+g*te,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*ee+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Wn.set(r[0],r[1],r[2]).length(),o=Wn.set(r[4],r[5],r[6]).length(),s=Wn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Gn.copy(this);let c=1/a,l=1/o,u=1/s;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=l,Gn.elements[5]*=l,Gn.elements[6]*=l,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ft,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ft,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wn=new q,Gn=new Un,Kn=new q(0,0,0),qn=new q(1,1,1),Jn=new q,Yn=new q,Xn=new q,Zn=new Un,Qn=new bn,$n=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Qt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qn.setFromEuler(this),this.setFromQuaternion(Qn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER=`XYZ`;var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},tr=0,nr=new q,rr=new bn,ir=new Un,ar=new q,or=new q,sr=new q,cr=new bn,lr=new q(1,0,0),ur=new q(0,1,0),dr=new q(0,0,1),fr={type:`added`},pr={type:`removed`},mr={type:`childadded`,child:null},hr={type:`childremoved`,child:null},gr=class e extends Kt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tr++}),this.uuid=Zt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new $n,r=new bn,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Un},normalMatrix:{value:new J}}),this.matrix=new Un,this.matrixWorld=new Un,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(lr,e)}rotateY(e){return this.rotateOnAxis(ur,e)}rotateZ(e){return this.rotateOnAxis(dr,e)}translateOnAxis(e,t){return nr.copy(e).applyQuaternion(this.quaternion),this.position.add(nr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lr,e)}translateY(e){return this.translateOnAxis(ur,e)}translateZ(e){return this.translateOnAxis(dr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(or,ar,this.up):ir.lookAt(ar,or,this.up),this.quaternion.setFromRotationMatrix(ir),r&&(ir.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(ir),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fr),mr.child=e,this.dispatchEvent(mr),mr.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pr),hr.child=e,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fr),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,sr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,cr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};gr.DEFAULT_UP=new q(0,1,0),gr.DEFAULT_MATRIX_AUTO_UPDATE=!0,gr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _r=class extends gr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},vr={type:`move`},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vr)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _r;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},br={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Cr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Dn.workingColorSpace){if(e=$t(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Cr(i,r,e+1/3),this.g=Cr(i,r,e),this.b=Cr(i,r,e-1/3)}return Dn.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=br[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Dn.workingToColorSpace(wr.copy(this),e),Math.round(Qt(wr.r*255,0,255))*65536+Math.round(Qt(wr.g*255,0,255))*256+Math.round(Qt(wr.b*255,0,255))}getHexString(e=Ot){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dn.workingColorSpace){Dn.workingToColorSpace(wr.copy(this),t);let n=wr.r,r=wr.g,i=wr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Dn.workingColorSpace){return Dn.workingToColorSpace(wr.copy(this),t),e.r=wr.r,e.g=wr.g,e.b=wr.b,e}getStyle(e=Ot){Dn.workingToColorSpace(wr.copy(this),e);let t=wr.r,n=wr.g,r=wr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Sr);let n=nn(xr.h,Sr.h,t),r=nn(xr.s,Sr.s,t),i=nn(xr.l,Sr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wr=new Y;Y.NAMES=br;var Tr=class extends gr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Er=new q,Dr=new q,Or=new q,kr=new q,Ar=new q,jr=new q,Mr=new q,Nr=new q,Pr=new q,Fr=new q,Ir=new Rn,Lr=new Rn,Rr=new Rn,zr=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Er.subVectors(e,t),r.cross(Er);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Er.subVectors(r,t),Dr.subVectors(n,t),Or.subVectors(e,t);let a=Er.dot(Er),o=Er.dot(Dr),s=Er.dot(Or),c=Dr.dot(Dr),l=Dr.dot(Or),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kr)!==null&&kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,kr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,kr.x),s.addScaledVector(a,kr.y),s.addScaledVector(o,kr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ir.setScalar(0),Lr.setScalar(0),Rr.setScalar(0),Ir.fromBufferAttribute(e,t),Lr.fromBufferAttribute(e,n),Rr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ir,i.x),a.addScaledVector(Lr,i.y),a.addScaledVector(Rr,i.z),a}static isFrontFacing(e,t,n,r){return Er.subVectors(n,t),Dr.subVectors(e,t),Er.cross(Dr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Er.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),Er.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ar.subVectors(r,n),jr.subVectors(i,n),Nr.subVectors(e,n);let s=Ar.dot(Nr),c=jr.dot(Nr);if(s<=0&&c<=0)return t.copy(n);Pr.subVectors(e,r);let l=Ar.dot(Pr),u=jr.dot(Pr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ar,a);Fr.subVectors(e,i);let f=Ar.dot(Fr),p=jr.dot(Fr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(jr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Mr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Mr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ar,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Br=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Hr):Hr.fromBufferAttribute(r,t),Hr.applyMatrix4(e.matrixWorld),this.expandByPoint(Hr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hr),Hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Zr.subVectors(this.max,Xr),Wr.subVectors(e.a,Xr),Gr.subVectors(e.b,Xr),Kr.subVectors(e.c,Xr),qr.subVectors(Gr,Wr),Jr.subVectors(Kr,Gr),Yr.subVectors(Wr,Kr);let t=[0,-qr.z,qr.y,0,-Jr.z,Jr.y,0,-Yr.z,Yr.y,qr.z,0,-qr.x,Jr.z,0,-Jr.x,Yr.z,0,-Yr.x,-qr.y,qr.x,0,-Jr.y,Jr.x,0,-Yr.y,Yr.x,0];return!ei(t,Wr,Gr,Kr,Zr)||(t=[1,0,0,0,1,0,0,0,1],!ei(t,Wr,Gr,Kr,Zr))?!1:(Qr.crossVectors(qr,Jr),t=[Qr.x,Qr.y,Qr.z],ei(t,Wr,Gr,Kr,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vr=[new q,new q,new q,new q,new q,new q,new q,new q],Hr=new q,Ur=new Br,Wr=new q,Gr=new q,Kr=new q,qr=new q,Jr=new q,Yr=new q,Xr=new q,Zr=new q,Qr=new q,$r=new q;function ei(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){$r.fromArray(e,a);let o=i.x*Math.abs($r.x)+i.y*Math.abs($r.y)+i.z*Math.abs($r.z),s=t.dot($r),c=n.dot($r),l=r.dot($r);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ti=new q,ni=new K,ri=0,ii=class extends Kt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ri++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Nt,this.updateRanges=[],this.gpuType=Ee,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.applyMatrix3(e),this.setXY(t,ni.x,ni.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},ai=class extends ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}},oi=class extends ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}},X=class extends ii{constructor(e,t,n){super(new Float32Array(e),t,n)}},si=new Br,ci=new q,li=new q,ui=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?si.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ci.subVectors(e,this.center);let t=ci.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ci,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(li.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ci.copy(e.center).add(li)),this.expandByPoint(ci.copy(e.center).sub(li))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},di=0,fi=new Un,pi=new gr,mi=new q,hi=new Br,gi=new Br,_i=new q,vi=class e extends Kt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:di++}),this.uuid=Zt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(It(e)?oi:ai)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return pi.lookAt(e),pi.updateMatrix(),this.applyMatrix4(pi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new X(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];hi.setFromBufferAttribute(n),this.morphTargetsRelative?(_i.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(_i),_i.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(_i)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];gi.setFromBufferAttribute(n),this.morphTargetsRelative?(_i.addVectors(hi.min,gi.min),hi.expandByPoint(_i),_i.addVectors(hi.max,gi.max),hi.expandByPoint(_i)):(hi.expandByPoint(gi.min),hi.expandByPoint(gi.max))}hi.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)_i.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(_i));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)_i.fromBufferAttribute(a,t),o&&(mi.fromBufferAttribute(e,t),_i.add(mi)),r=Math.max(r,n.distanceToSquared(_i))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new ii(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new ii(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_i.fromBufferAttribute(e,t),_i.normalize(),e.setXYZ(t,_i.x,_i.y,_i.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ii(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},yi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Nt,this.updateRanges=[],this.version=0,this.uuid=Zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},bi=new q,xi=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.applyMatrix4(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.applyNormalMatrix(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.transformDirection(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array),i=yn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Vt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new ii(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Si=new q,Ci=new q,wi=new J,Ti=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Si.subVectors(n,t).cross(Ci.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Si),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wi.getNormalMatrix(e),r=this.coplanarPoint(Si).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ei=0,Di=class extends Kt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ei++}),this.uuid=Zt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mt,this.stencilZFail=Mt,this.stencilZPass=Mt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ti().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Oi=class extends Di{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ki,Ai=new q,ji=new q,Mi=new q,Ni=new K,Pi=new K,Fi=new Un,Ii=new q,Li=new q,Ri=new q,zi=new K,Bi=new K,Vi=new K,Hi=class extends gr{constructor(e=new Oi){if(super(),this.isSprite=!0,this.type=`Sprite`,ki===void 0){ki=new vi;let e=new yi(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute(`position`,new xi(e,3,0,!1)),ki.setAttribute(`uv`,new xi(e,2,3,!1))}this.geometry=ki,this.material=e,this.center=new K(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&W(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),ji.setFromMatrixScale(this.matrixWorld),Fi.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Mi.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ui(Ii.set(-.5,-.5,0),Mi,a,ji,r,i),Ui(Li.set(.5,-.5,0),Mi,a,ji,r,i),Ui(Ri.set(.5,.5,0),Mi,a,ji,r,i),zi.set(0,0),Bi.set(1,0),Vi.set(1,1);let o=e.ray.intersectTriangle(Ii,Li,Ri,!1,Ai);if(o===null&&(Ui(Li.set(-.5,.5,0),Mi,a,ji,r,i),Bi.set(0,1),o=e.ray.intersectTriangle(Ii,Ri,Li,!1,Ai),o===null))return;let s=e.ray.origin.distanceTo(Ai);s<e.near||s>e.far||t.push({distance:s,point:Ai.clone(),uv:zr.getInterpolation(Ai,Ii,Li,Ri,zi,Bi,Vi,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ui(e,t,n,r,i,a){Ni.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Pi.copy(Ni):(Pi.x=a*Ni.x-i*Ni.y,Pi.y=i*Ni.x+a*Ni.y),e.copy(t),e.x+=Pi.x,e.y+=Pi.y,e.applyMatrix4(Fi)}var Wi=new q,Gi=new q,Ki=new q,qi=new q,Ji=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gi.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Gi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ki),o=qi.dot(this.direction),s=-qi.dot(Ki),c=qi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gi).addScaledVector(Ki,d),f}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);let n=Wi.dot(this.direction),r=Wi.dot(Wi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,P=C/w,te=1/w,ne=T-N*D,re=E-P*D,ie=O-N*A,ae=k-P*A,F=j-N*M,oe=ee-P*M,se=F*ae-oe*ie,ce=ne*oe-re*F,I=ie*re-ae*ne;if(r){if(se<0||ce<0||I<0)return null}else if((se<0||ce<0||I<0)&&(se>0||ce>0||I>0))return null;let le=se+ce+I;if(le===0)return null;let ue=te*(se*D+ce*A+I*M);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yi=class extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xi=new Un,Zi=new Ji,Qi=new ui,$i=new q,ea=new q,ta=new q,na=new q,ra=new q,ia=new q,aa=new q,oa=new q,Z=class extends gr{constructor(e=new vi,t=new Yi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ia.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ra.fromBufferAttribute(s,e),a?ia.addScaledVector(ra,r):ia.addScaledVector(ra.sub(t),r))}t.add(ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(i),Zi.copy(e.ray).recast(e.near),!(Qi.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Qi,$i)===null||Zi.origin.distanceToSquared($i)>(e.far-e.near)**2))&&(Xi.copy(i).invert(),Zi.copy(e.ray).applyMatrix4(Xi),(n.boundingBox===null||Zi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ca(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ca(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ca(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ca(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function sa(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;oa.copy(s),oa.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(oa);return l<n.near||l>n.far?null:{distance:l,point:oa.clone(),object:e}}function ca(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ea),e.getVertexPosition(c,ta),e.getVertexPosition(l,na);let u=sa(e,t,n,r,ea,ta,na,aa);if(u){let e=new q;zr.getBarycoord(aa,ea,ta,na,e),i&&(u.uv=zr.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=zr.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=zr.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};zr.getNormal(ea,ta,na,t.normal),u.face=t,u.barycoord=e}return u}var la=class extends Ln{constructor(e=null,t=1,n=1,r,i,a,o,s,c=he,l=he,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ua=class extends ii{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},da=new Un,fa=new Un,pa=[],ma=new Br,ha=new Un,ga=new Z,_a=new ui,va=class extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ha)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,da),ma.copy(e.boundingBox).applyMatrix4(da),this.boundingBox.union(ma)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,da),_a.copy(e.boundingSphere).applyMatrix4(da),this.boundingSphere.union(_a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(n),e.ray.intersectsSphere(_a)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,da),fa.multiplyMatrices(n,da),ga.matrixWorld=fa,ga.raycast(e,pa);for(let e=0,n=pa.length;e<n;e++){let n=pa[e];n.instanceId=i,n.object=this,t.push(n)}pa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new la(new Float32Array(r*this.count),r,this.count,H,Ee));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ya=new ui,ba=new K(.5,.5),xa=new q,Sa=class{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,i=new Ti,a=new Ti){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ft,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ya.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ya.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ya)}intersectsSprite(e){return ya.center.set(0,0,0),ya.radius=.7071067811865476+ba.distanceTo(e.center),ya.applyMatrix4(e.matrixWorld),this.intersectsSphere(ya)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ca=class extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wa=new q,Ta=new q,Ea=new Un,Da=new Ji,Oa=new ui,ka=new q,Aa=new q,ja=class extends gr{constructor(e=new vi,t=new Ca){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)wa.fromBufferAttribute(t,e-1),Ta.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=wa.distanceTo(Ta);e.setAttribute(`lineDistance`,new X(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=i,e.ray.intersectsSphere(Oa)===!1)return;Ea.copy(r).invert(),Da.copy(e.ray).applyMatrix4(Ea);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ma(this,e,Da,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ma(this,e,Da,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ma(this,e,Da,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ma(this,e,Da,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ma(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(wa.fromBufferAttribute(s,i),Ta.fromBufferAttribute(s,a),n.distanceSqToSegment(wa,Ta,ka,Aa)>r)return;ka.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ka);if(!(c<t.near||c>t.far))return{distance:c,point:Aa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Na=new q,Pa=new q,Fa=class extends ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Na.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Na.distanceTo(Pa);e.setAttribute(`lineDistance`,new X(n,1))}else U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ia=class extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},La=new Un,Ra=new Ji,za=new ui,Ba=new q,Va=class extends gr{constructor(e=new vi,t=new Ia){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),za.radius+=i,e.ray.intersectsSphere(za)===!1)return;La.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(La);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ba.fromBufferAttribute(l,n),Ha(Ba,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ba.fromBufferAttribute(l,a),Ha(Ba,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ha(e,t,n,r,i,a,o){let s=Ra.distanceSqToPoint(e);if(s<n){let n=new q;Ra.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ua=class extends Ln{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wa=class extends Ln{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ga=class extends Ln{constructor(e,t,n=Te,r,i,a,o=he,s=he,c,l=Me,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ka=class extends Ga{constructor(e,t=Te,n=301,r,i,a=he,o=he,s,c=Me){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qa=class extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ja=class e extends vi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new X(c,3)),this.setAttribute(`normal`,new X(l,3)),this.setAttribute(`uv`,new X(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ya=class e extends vi{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new X(u,3)),this.setAttribute(`normal`,new X(d,3)),this.setAttribute(`uv`,new X(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){U(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new Un;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Qt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Qt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Za=class extends Xa{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qa=class extends Za{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function $a(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var eo=new q,to=new q,no=new $a,ro=new $a,io=new $a,ao=class extends Xa{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(to.subVectors(r[0],r[1]).add(r[0]),c=to);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(eo.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=eo),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),no.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ro.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),io.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(no.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ro.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),io.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(no.calc(s),ro.calc(s),io.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oo(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function so(e,t){let n=1-e;return n*n*t}function co(e,t){return 2*(1-e)*e*t}function lo(e,t){return e*e*t}function uo(e,t,n,r){return so(e,t)+co(e,n)+lo(e,r)}function fo(e,t){let n=1-e;return n*n*n*t}function po(e,t){let n=1-e;return 3*n*n*e*t}function mo(e,t){return 3*(1-e)*e*e*t}function ho(e,t){return e*e*e*t}function go(e,t,n,r,i){return fo(e,t)+po(e,n)+mo(e,r)+ho(e,i)}var _o=class extends Xa{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(go(e,r.x,i.x,a.x,o.x),go(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends Xa{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(go(e,r.x,i.x,a.x,o.x),go(e,r.y,i.y,a.y,o.y),go(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yo=class extends Xa{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bo=class extends Xa{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Xa{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(uo(e,r.x,i.x,a.x),uo(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends Xa{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(uo(e,r.x,i.x,a.x),uo(e,r.y,i.y,a.y),uo(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends Xa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(oo(o,s.x,c.x,l.x,u.x),oo(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},wo=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:ao,CubicBezierCurve:_o,CubicBezierCurve3:vo,EllipseCurve:Za,LineCurve:yo,LineCurve3:bo,QuadraticBezierCurve:xo,QuadraticBezierCurve3:So,SplineCurve:Co}),To=class extends Xa{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new wo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new wo[n.type]().fromJSON(n))}return this}},Eo=class extends To{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new yo(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new xo(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new _o(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Co([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Za(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Do=class extends Eo{constructor(e){super(e),this.uuid=Zt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Eo().fromJSON(n))}return this}};function Oo(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ko(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Io(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return jo(a,o,n,s,c,l,0),o}function ko(e,t,n,r,i){let a;if(i===os(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=rs(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=rs(i/r|0,e[i],e[i+1],a);return a&&Yo(a,a.next)&&(is(a),a=a.next),a}function Ao(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Yo(n,n.next)||Jo(n.prev,n,n.next)===0)){if(is(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function jo(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Vo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?No(e,r,i,a):Mo(e)){t.push(c.i,e.i,l.i),is(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Po(Ao(e),t),jo(e,t,n,r,i,a,2)):o===2&&Fo(e,t,n,r,i,a):jo(Ao(e),t,n,r,i,a,1);break}}}function Mo(e){let t=e.prev,n=e,r=e.next;if(Jo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ko(i,s,a,c,o,l,m.x,m.y)&&Jo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function No(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Jo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Uo(p,m,t,n,r),v=Uo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ko(s,u,c,d,l,f,y.x,y.y)&&Jo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ko(s,u,c,d,l,f,b.x,b.y)&&Jo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ko(s,u,c,d,l,f,y.x,y.y)&&Jo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ko(s,u,c,d,l,f,b.x,b.y)&&Jo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Po(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Yo(r,i)&&Xo(r,n,n.next,i)&&es(r,i)&&es(i,r)&&(t.push(r.i,n.i,i.i),is(n),is(n.next),n=e=i),n=n.next}while(n!==e);return Ao(n)}function Fo(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&qo(o,e)){let s=ns(o,e);o=Ao(o,o.next),s=Ao(s,s.next),jo(o,t,n,r,i,a,0),jo(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Io(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ko(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Wo(o))}i.sort(Lo);for(let e=0;e<i.length;e++)n=Ro(i[e],n);return n}function Lo(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ro(e,t){let n=zo(e,t);if(!n)return t;let r=ns(n,e);return Ao(r,r.next),Ao(n,n.next)}function zo(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Yo(e,n))return n;do{if(Yo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Go(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);es(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Bo(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Bo(e,t){return Jo(e.prev,e,t.prev)<0&&Jo(t.next,e,e.next)<0}function Vo(e,t,n,r){let i=e;do i.z===0&&(i.z=Uo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ho(i)}function Ho(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Uo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Wo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Go(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ko(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Go(e,t,n,r,i,a,o,s)}function qo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!$o(e,t)&&(es(e,t)&&es(t,e)&&ts(e,t)&&(Jo(e.prev,e,t.prev)||Jo(e,t.prev,t))||Yo(e,t)&&Jo(e.prev,e,e.next)>0&&Jo(t.prev,t,t.next)>0)}function Jo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Yo(e,t){return e.x===t.x&&e.y===t.y}function Xo(e,t,n,r){let i=Qo(Jo(e,t,n)),a=Qo(Jo(e,t,r)),o=Qo(Jo(n,r,e)),s=Qo(Jo(n,r,t));return!!(i!==a&&o!==s||i===0&&Zo(e,n,t)||a===0&&Zo(e,r,t)||o===0&&Zo(n,e,r)||s===0&&Zo(n,t,r))}function Zo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Qo(e){return e>0?1:e<0?-1:0}function $o(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Xo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function es(e,t){return Jo(e.prev,e,e.next)<0?Jo(e,t,e.next)>=0&&Jo(e,e.prev,t)>=0:Jo(e,t,e.prev)<0||Jo(e,e.next,t)<0}function ts(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ns(e,t){let n=as(e.i,e.x,e.y),r=as(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function rs(e,t,n,r){let i=as(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function is(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function as(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function os(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ss=class{static triangulate(e,t,n=2){return Oo(e,t,n)}},cs=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];ls(e),us(n,e);let a=e.length;t.forEach(ls);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,us(n,t[e]);let o=ss.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function ls(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function us(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ds=class e extends vi{constructor(e=new Do([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new X(r,3)),this.setAttribute(`uv`,new X(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?fs:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new q,b=new q,x=new q}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!cs.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];cs.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||W(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new K(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new K(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],M,N=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),N=N.concat(M)}let P;if(p===0)P=cs.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);F(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);F(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=cs.triangulateShape(e,t)}let te=P.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],N[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),F(x.x,x.y,x.z)):F(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],N[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),F(x.x,x.y,x.z)):F(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);F(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?F(i.x,i.y+g[s-1].y,g[s-1].x+n):F(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<te;e++){let n=P[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<te;e++){let n=P[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<te;e++){let t=P[e];oe(t[2],t[1],t[0])}for(let e=0;e<te;e++){let t=P[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function F(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){ce(e),ce(t),ce(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);I(o[0]),I(o[1]),I(o[2])}function se(e,t,i,a){ce(e),ce(t),ce(a),ce(t),ce(i),ce(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);I(s[0]),I(s[1]),I(s[3]),I(s[1]),I(s[2]),I(s[3])}function ce(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function I(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ps(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new wo[i.type]().fromJSON(i)),new e(r,t.options)}},fs={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new K(a,o),new K(s,c),new K(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-d),new K(f,1-m),new K(h,1-_)]:[new K(s,1-c),new K(u,1-d),new K(p,1-m),new K(g,1-_)]}};function ps(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var ms=class e extends vi{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Qt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new q,d=new K,f=new q,p=new q,m=new q,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new X(a,3)),this.setAttribute(`uv`,new X(o,2)),this.setAttribute(`normal`,new X(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},hs=class e extends vi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},gs=class e extends vi{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new X(s,3)),this.setAttribute(`normal`,new X(c,3)),this.setAttribute(`uv`,new X(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_s=class e extends vi{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},vs=class e extends vi{constructor(e=new So(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new q,s=new q,c=new K,l=new q,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new X(u,3)),this.setAttribute(`normal`,new X(d,3)),this.setAttribute(`uv`,new X(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ys(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(xs(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(xs(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function bs(e){let t={};for(let n=0;n<e.length;n++){let r=ys(e[n]);for(let e in r)t[e]=r[e]}return t}function xs(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ss(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Cs(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dn.workingColorSpace}var ws={clone:ys,merge:bs},Ts=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Es=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Q=class extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ts,this.fragmentShader=Es,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Ss(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Rn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Un().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ds=class extends Q{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Os=class extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ks=class extends Di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},As=class extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Dt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},js=class extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ms(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ns(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ps=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Fs=class extends Ps{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wt,endingEnd:wt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tt:i=e,o=2*t-n;break;case Et:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Tt:a=e,s=2*n-t;break;case Et:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Is=class extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ls=class extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Rs=class extends Ps{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Vs(n,t,g,y,r);i[p]=zs(x,o,_,b,m)}return i}};function zs(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Bs(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Vs(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=zs(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Bs(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Hs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ns(e.settings)&&(n.settings={inTangents:Ms(e.settings.inTangents,Array),outTangents:Ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ls(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Is(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Rs(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bt:t=this.InterpolantFactoryMethodDiscrete;break;case xt:t=this.InterpolantFactoryMethodLinear;break;case St:t=this.InterpolantFactoryMethodSmooth;break;case Ct:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bt;case this.InterpolantFactoryMethodLinear:return xt;case this.InterpolantFactoryMethodSmooth:return St;case this.InterpolantFactoryMethodBezier:return Ct}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ns(this.settings)&&(Us(this.settings.inTangents,e),Us(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Lt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===St,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ns(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Us(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Hs.prototype.ValueTypeName=``,Hs.prototype.TimeBufferType=Float32Array,Hs.prototype.ValueBufferType=Float32Array,Hs.prototype.DefaultInterpolation=xt;var Ws=class extends Hs{constructor(e,t,n){super(e,t,n)}};Ws.prototype.ValueTypeName=`bool`,Ws.prototype.ValueBufferType=Array,Ws.prototype.DefaultInterpolation=bt,Ws.prototype.InterpolantFactoryMethodLinear=void 0,Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Hs{constructor(e,t,n,r){super(e,t,n,r)}};Gs.prototype.ValueTypeName=`color`;var Ks=class extends Hs{constructor(e,t,n,r){super(e,t,n,r)}};Ks.prototype.ValueTypeName=`number`;var qs=class extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)bn.slerpFlat(i,0,a,c-o,a,c,s);return i}},Js=class extends Hs{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new qs(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName=`quaternion`,Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends Hs{constructor(e,t,n){super(e,t,n)}};Ys.prototype.ValueTypeName=`string`,Ys.prototype.ValueBufferType=Array,Ys.prototype.DefaultInterpolation=bt,Ys.prototype.InterpolantFactoryMethodLinear=void 0,Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends Hs{constructor(e,t,n,r){super(e,t,n,r)}};Xs.prototype.ValueTypeName=`vector`;var Zs={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Qs(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Qs(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Qs(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var $s=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ec=class{constructor(e){this.manager=e===void 0?$s:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ec.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var tc=new WeakMap,nc=class extends ec{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Zs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=tc.get(a);e===void 0&&(e=[],tc.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Rt(`img`);function s(){l(),t&&t(this);let n=tc.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}tc.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Zs.remove(`image:${e}`);let n=tc.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}tc.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zs.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},rc=class extends ec{constructor(e){super(e)}load(e,t,n,r){let i=new Ln,a=new nc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ic=class extends gr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ac=class extends ic{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(gr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},oc=new Un,sc=new q,cc=new q,lc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=xe,this.map=null,this.mapPass=null,this.matrix=new Un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(oc,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uc=new q,dc=new bn,fc=new q,pc=class extends gr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Un,this.projectionMatrix=new Un,this.projectionMatrixInverse=new Un,this.coordinateSystem=Ft,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uc,dc,fc),fc.x===1&&fc.y===1&&fc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,fc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(uc,dc,fc),fc.x===1&&fc.y===1&&fc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,fc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mc=new q,hc=new K,gc=new K,_c=class extends pc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xt*2*Math.atan(Math.tan(Yt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mc.x,mc.y).multiplyScalar(-e/mc.z),mc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mc.x,mc.y).multiplyScalar(-e/mc.z)}getViewSize(e,t){return this.getViewBounds(e,hc,gc),t.subVectors(gc,hc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vc=class extends lc{constructor(){super(new _c(90,1,.5,500)),this.isPointLightShadow=!0}},yc=class extends ic{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bc=class extends pc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xc=class extends lc{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sc=class extends ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(gr.DEFAULT_UP),this.updateMatrix(),this.target=new gr,this.shadow=new xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Cc=new WeakMap,wc=class extends ec{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&U(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&U(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Zs.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Cc.has(a)===!0?(r&&r(Cc.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return Zs.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),Cc.set(s,t),Zs.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Zs.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Tc=-90,Ec=1,Dc=class extends gr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _c(Tc,Ec,e,t);r.layers=this.layers,this.add(r);let i=new _c(Tc,Ec,e,t);i.layers=this.layers,this.add(i);let a=new _c(Tc,Ec,e,t);a.layers=this.layers,this.add(a);let o=new _c(Tc,Ec,e,t);o.layers=this.layers,this.add(o);let s=new _c(Tc,Ec,e,t);s.layers=this.layers,this.add(s);let c=new _c(Tc,Ec,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oc=class extends _c{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},kc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ac.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ac(){this._document.hidden===!1&&this.reset()}var jc=`\\[\\]\\.:\\/`,Mc=RegExp(`[\\[\\]\\.:\\/]`,`g`),Nc=`[^\\[\\]\\.:\\/]`,Pc=`[^`+jc.replace(`\\.`,``)+`]`,Fc=`((?:WC+[\\/:])*)`.replace(`WC`,Nc),Ic=`(WCOD+)?`.replace(`WCOD`,Pc),Lc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Nc),Rc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Nc),zc=RegExp(`^`+Fc+Ic+Lc+Rc+`$`),Bc=[`material`,`materials`,`bones`,`map`],Vc=class{constructor(e,t,n){let r=n||Hc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Hc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Mc,``)}static parseTrackName(e){let t=zc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Bc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Hc.Composite=Vc,Hc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Hc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Hc.prototype.GetterByBindingType=[Hc.prototype._getValue_direct,Hc.prototype._getValue_array,Hc.prototype._getValue_arrayElement,Hc.prototype._getValue_toArray],Hc.prototype.SetterByBindingTypeAndVersioning=[[Hc.prototype._setValue_direct,Hc.prototype._setValue_direct_setNeedsUpdate,Hc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Hc.prototype._setValue_array,Hc.prototype._setValue_array_setNeedsUpdate,Hc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Hc.prototype._setValue_arrayElement,Hc.prototype._setValue_arrayElement_setNeedsUpdate,Hc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Hc.prototype._setValue_fromArray,Hc.prototype._setValue_fromArray_setNeedsUpdate,Hc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uc=new Un,Wc=class{constructor(e,t,n=0,r=1/0){this.ray=new Ji(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(e,t=!0,n=[]){return Kc(e,this,n,t),n.sort(Gc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Kc(e[r],this,n,t);return n.sort(Gc),n}};function Gc(e,t){return e.distance-t.distance}function Kc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Kc(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function qc(e,t,n,r){let i=Jc(r);switch(n){case je:return e*t;case H:return e*t/i.components*i.byteLength;case Pe:return e*t/i.components*i.byteLength;case Fe:return e*t*2/i.components*i.byteLength;case Ie:return e*t*2/i.components*i.byteLength;case B:return e*t*3/i.components*i.byteLength;case V:return e*t*4/i.components*i.byteLength;case Le:return e*t*4/i.components*i.byteLength;case Re:case ze:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Be:case Ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ue:case Ge:return Math.max(e,16)*Math.max(t,8)/4;case He:case We:return Math.max(e,8)*Math.max(t,8)/2;case Ke:case qe:case Ye:case Xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Je:case Ze:case Qe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case et:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case tt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case nt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case rt:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case it:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case at:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ot:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case st:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ct:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case lt:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ut:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case dt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ft:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case pt:case mt:case ht:return Math.ceil(e/4)*Math.ceil(t/4)*16;case gt:case _t:return Math.ceil(e/4)*Math.ceil(t/4)*8;case vt:case yt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Jc(e){switch(e){case xe:case Se:return{byteLength:1,components:1};case Ce:case L:case De:return{byteLength:2,components:1};case Oe:case ke:return{byteLength:2,components:4};case Te:case we:case Ee:return{byteLength:4,components:1};case R:case z:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Yc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Xc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Zc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},Qc={basic:{uniforms:bs([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Zc.meshbasic_vert,fragmentShader:Zc.meshbasic_frag},lambert:{uniforms:bs([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:Zc.meshlambert_vert,fragmentShader:Zc.meshlambert_frag},phong:{uniforms:bs([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zc.meshphong_vert,fragmentShader:Zc.meshphong_frag},standard:{uniforms:bs([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zc.meshphysical_vert,fragmentShader:Zc.meshphysical_frag},toon:{uniforms:bs([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Y(0)}}]),vertexShader:Zc.meshtoon_vert,fragmentShader:Zc.meshtoon_frag},matcap:{uniforms:bs([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Zc.meshmatcap_vert,fragmentShader:Zc.meshmatcap_frag},points:{uniforms:bs([$.points,$.fog]),vertexShader:Zc.points_vert,fragmentShader:Zc.points_frag},dashed:{uniforms:bs([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zc.linedashed_vert,fragmentShader:Zc.linedashed_frag},depth:{uniforms:bs([$.common,$.displacementmap]),vertexShader:Zc.depth_vert,fragmentShader:Zc.depth_frag},normal:{uniforms:bs([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Zc.meshnormal_vert,fragmentShader:Zc.meshnormal_frag},sprite:{uniforms:bs([$.sprite,$.fog]),vertexShader:Zc.sprite_vert,fragmentShader:Zc.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zc.background_vert,fragmentShader:Zc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Zc.backgroundCube_vert,fragmentShader:Zc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zc.cube_vert,fragmentShader:Zc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zc.equirect_vert,fragmentShader:Zc.equirect_frag},distance:{uniforms:bs([$.common,$.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zc.distance_vert,fragmentShader:Zc.distance_frag},shadow:{uniforms:bs([$.lights,$.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:Zc.shadow_vert,fragmentShader:Zc.shadow_frag}};Qc.physical={uniforms:bs([Qc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Zc.meshphysical_vert,fragmentShader:Zc.meshphysical_frag};var $c={r:0,b:0,g:0},el=new Un,tl=new J;tl.set(-1,0,0,0,1,0,0,0,1);function nl(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Z(new Ja(1,1,1),new Q({name:`BackgroundCubeMaterial`,uniforms:ys(Qc.backgroundCube.uniforms),vertexShader:Qc.backgroundCube.vertexShader,fragmentShader:Qc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(el.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tl),l.material.toneMapped=Dn.getTransfer(i.colorSpace)!==jt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Z(new hs(2,2),new Q({name:`BackgroundMaterial`,uniforms:ys(Qc.background.uniforms),vertexShader:Qc.background.vertexShader,fragmentShader:Qc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Dn.getTransfer(i.colorSpace)!==jt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB($c,Cs(e)),n.buffers.color.setClear($c.r,$c.g,$c.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function rl(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function il(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function al(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ol(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ti,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var sl=4,cl=6,ll=20,ul=256,dl=new bc,fl=new Y,pl=null,ml=0,hl=0,gl=!1,_l=new q,vl=new q,yl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_l}=i;pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pl,ml,hl),this._renderer.xr.enabled=gl,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ve,minFilter:ve,generateMipmaps:!1,type:De,format:V,colorSpace:kt,depthBuffer:!1},r=xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bl(r)),this._blurMaterial=wl(r,e,t),this._ggxMaterial=Cl(r,e,t)}return r}_compileMaterial(e){let t=new Z(new vi,e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,r,i){let a=new _c(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(fl),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new Ja,new Yi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(fl),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Sl(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Sl(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,dl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-sl?n-d+sl:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Sl(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,dl),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Sl(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,dl)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Sl(t,3*l*(r>this._lodMax-sl?r-this._lodMax+sl:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,dl)}};function bl(e){let t=[],n=[],r=e,i=e-sl+1+cl;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?vl.set(1,r,n):e===1?vl.set(-n,1,-r):e===2?vl.set(-n,r,1):e===3?vl.set(-1,r,-n):e===4?vl.set(-n,-1,r):vl.set(n,r,-1),vl.toArray(l,(e*6+t)*3)}}let u=new vi;u.setAttribute(`position`,new ii(c,3)),u.setAttribute(`outputDirection`,new ii(l,3)),n.push(new Z(u,null)),r>sl&&r--}return{lodMeshes:n,sizeLods:t}}function xl(e,t,n){let r=new Bn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Sl(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Cl(e,t,n){return new Q({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ul,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wl(e,t,n){return new Q({name:`SphericalGaussianBlur`,defines:{SAMPLES:ll,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tl(){return new Q({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function El(){return new Q({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ol=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ua(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ja(5,5,5),i=new Q({name:`CubemapFromEquirect`,uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ve),new Dc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function kl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ol(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new yl(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new yl(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Al(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ut(`WebGLRenderer: `+e+` extension not supported.`),t}}}function jl(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?oi:ai)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ml(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Nl(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Pl(e,t,n){let r=new WeakMap,i=new Rn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Vn(h,p,m,u);g.type=Ee,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Fl(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Il={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ll(e,t,n,r,i,a){let o=new Bn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new vi;l.setAttribute(`position`,new X([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new X([0,2,0,0,2,0],2));let u=new Ds({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Z(l,u),f=new bc(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Bn(t,n,{type:De,depthBuffer:!1,stencilBuffer:!1}),c=new Bn(t,n,{type:De,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Dn.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Il[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Rl=new Ln,zl=new Ga(1,1),Bl=new Vn,Vl=new Hn,Hl=new Ua,Ul=[],Wl=[],Gl=new Float32Array(16),Kl=new Float32Array(9),ql=new Float32Array(4);function Jl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ul[i];if(a===void 0&&(a=new Float32Array(i),Ul[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Yl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Xl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Zl(e,t){let n=Wl[t];n===void 0&&(n=new Int32Array(t),Wl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ql(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function $l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yl(n,t))return;e.uniform2fv(this.addr,t),Xl(n,t)}}function eu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Yl(n,t))return;e.uniform3fv(this.addr,t),Xl(n,t)}}function tu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yl(n,t))return;e.uniform4fv(this.addr,t),Xl(n,t)}}function nu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xl(n,t)}else{if(Yl(n,r))return;ql.set(r),e.uniformMatrix2fv(this.addr,!1,ql),Xl(n,r)}}function ru(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xl(n,t)}else{if(Yl(n,r))return;Kl.set(r),e.uniformMatrix3fv(this.addr,!1,Kl),Xl(n,r)}}function iu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xl(n,t)}else{if(Yl(n,r))return;Gl.set(r),e.uniformMatrix4fv(this.addr,!1,Gl),Xl(n,r)}}function au(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ou(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yl(n,t))return;e.uniform2iv(this.addr,t),Xl(n,t)}}function su(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yl(n,t))return;e.uniform3iv(this.addr,t),Xl(n,t)}}function cu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yl(n,t))return;e.uniform4iv(this.addr,t),Xl(n,t)}}function lu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function uu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yl(n,t))return;e.uniform2uiv(this.addr,t),Xl(n,t)}}function du(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yl(n,t))return;e.uniform3uiv(this.addr,t),Xl(n,t)}}function fu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yl(n,t))return;e.uniform4uiv(this.addr,t),Xl(n,t)}}function pu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(zl.compareFunction=n.isReversedDepthBuffer()?518:515,a=zl):a=Rl,n.setTexture2D(t||a,i)}function mu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Vl,i)}function hu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Hl,i)}function gu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Bl,i)}function _u(e){switch(e){case 5126:return Ql;case 35664:return $l;case 35665:return eu;case 35666:return tu;case 35674:return nu;case 35675:return ru;case 35676:return iu;case 5124:case 35670:return au;case 35667:case 35671:return ou;case 35668:case 35672:return su;case 35669:case 35673:return cu;case 5125:return lu;case 36294:return uu;case 36295:return du;case 36296:return fu;case 35678:case 36198:case 36298:case 36306:case 35682:return pu;case 35679:case 36299:case 36307:return mu;case 35680:case 36300:case 36308:case 36293:return hu;case 36289:case 36303:case 36311:case 36292:return gu}}function vu(e,t){e.uniform1fv(this.addr,t)}function yu(e,t){let n=Jl(t,this.size,2);e.uniform2fv(this.addr,n)}function bu(e,t){let n=Jl(t,this.size,3);e.uniform3fv(this.addr,n)}function xu(e,t){let n=Jl(t,this.size,4);e.uniform4fv(this.addr,n)}function Su(e,t){let n=Jl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cu(e,t){let n=Jl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wu(e,t){let n=Jl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tu(e,t){e.uniform1iv(this.addr,t)}function Eu(e,t){e.uniform2iv(this.addr,t)}function Du(e,t){e.uniform3iv(this.addr,t)}function Ou(e,t){e.uniform4iv(this.addr,t)}function ku(e,t){e.uniform1uiv(this.addr,t)}function Au(e,t){e.uniform2uiv(this.addr,t)}function ju(e,t){e.uniform3uiv(this.addr,t)}function Mu(e,t){e.uniform4uiv(this.addr,t)}function Nu(e,t,n){let r=this.cache,i=t.length,a=Zl(n,i);Yl(r,a)||(e.uniform1iv(this.addr,a),Xl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?zl:Rl;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Pu(e,t,n){let r=this.cache,i=t.length,a=Zl(n,i);Yl(r,a)||(e.uniform1iv(this.addr,a),Xl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Vl,a[e])}function Fu(e,t,n){let r=this.cache,i=t.length,a=Zl(n,i);Yl(r,a)||(e.uniform1iv(this.addr,a),Xl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Hl,a[e])}function Iu(e,t,n){let r=this.cache,i=t.length,a=Zl(n,i);Yl(r,a)||(e.uniform1iv(this.addr,a),Xl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Bl,a[e])}function Lu(e){switch(e){case 5126:return vu;case 35664:return yu;case 35665:return bu;case 35666:return xu;case 35674:return Su;case 35675:return Cu;case 35676:return wu;case 5124:case 35670:return Tu;case 35667:case 35671:return Eu;case 35668:case 35672:return Du;case 35669:case 35673:return Ou;case 5125:return ku;case 36294:return Au;case 36295:return ju;case 36296:return Mu;case 35678:case 36198:case 36298:case 36306:case 35682:return Nu;case 35679:case 36299:case 36307:return Pu;case 35680:case 36300:case 36308:case 36293:return Fu;case 36289:case 36303:case 36311:case 36292:return Iu}}var Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_u(t.type)}},zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lu(t.type)}},Bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vu=/(\w+)(\])?(\[|\.)?/g;function Hu(e,t){e.seq.push(t),e.map[t.id]=t}function Uu(e,t,n){let r=e.name,i=r.length;for(Vu.lastIndex=0;;){let a=Vu.exec(r),o=Vu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hu(n,l===void 0?new Ru(s,e,t):new zu(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Bu(s),Hu(n,e)),n=e}}}var Wu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Uu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ku=37297,qu=0;function Ju(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Yu=new J;function Xu(e){Dn._getMatrix(Yu,Dn.workingColorSpace,e);let t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(Dn.getTransfer(e)){case At:return[t,`LinearTransferOETF`];case jt:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Zu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ju(e.getShaderSource(t),r)}return i}function Qu(e,t){let n=Xu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var $u={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ed(e,t){let n=$u[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var td=new q;function nd(){return Dn.getLuminanceCoefficients(td),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${td.x.toFixed(4)}, ${td.y.toFixed(4)}, ${td.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function rd(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(od).join(`
`)}function id(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ad(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function od(e){return e!==``}function sd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ld=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(e){return e.replace(ld,fd)}var dd=new Map;function fd(e,t){let n=Zc[t];if(n===void 0){let e=dd.get(t);if(e!==void 0)n=Zc[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ud(n)}var pd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(e){return e.replace(pd,hd)}function hd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function gd(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var _d={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function vd(e){return _d[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var yd={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function bd(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:yd[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var xd={302:`ENVMAP_MODE_REFRACTION`};function Sd(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:xd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Cd={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function wd(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Cd[e.combine]||`ENVMAP_BLENDING_NONE`}function Td(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ed(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=vd(n),l=bd(n),u=Sd(n),d=wd(n),f=Td(n),p=rd(n),m=id(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(od).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(od).join(`
`),_.length>0&&(_+=`
`)):(g=[gd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(od).join(`
`),_=[gd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Zc.tonemapping_pars_fragment,n.toneMapping===0?``:ed(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Zc.colorspace_pars_fragment,Qu(`linearToOutputTexel`,n.outputColorSpace),nd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(od).join(`
`)),o=ud(o),o=sd(o,n),o=cd(o,n),s=ud(s),s=sd(s,n),s=cd(s,n),o=md(o),s=md(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Gu(i,i.VERTEX_SHADER,y),S=Gu(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Zu(i,x,`vertex`),n=Zu(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Wu(i,h),T=ad(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ku)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qu++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Dd=0,Od=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kd(e),t.set(e,n)),n}},kd=class{constructor(e){this.id=Dd++,this.code=e,this.usedTimes=0}};function Ad(e){return e===1030||e===37490||e===36285}function jd(e,t,n,r,i,a){let o=new er,s=new Od,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Qc[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,P=!!i.map,te=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,ce=!!i.metalnessMap,I=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,L=me&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=he&&!!i.transmissionMap,De=he&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,R=!!i.alphaHash,z=!!i.extensions,je=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=e.toneMapping);let B={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Dn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:te,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&Ad(i.normalMap.format),metalnessMap:ce,roughnessMap:I,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:L,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:he,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:R,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:ce&&m(i.metalnessMap.channel),roughnessMapUv:I&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:L&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:we&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:Ee&&m(i.transmissionMap.channel),thicknessMapUv:De&&m(i.thicknessMap.channel),alphaMapUv:ke&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||ke),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Dn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Dn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:z&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(z&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return B.vertexUv1s=c.has(1),B.vertexUv2s=c.has(2),B.vertexUv3s=c.has(3),c.clear(),B}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Qc[t];n=ws.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ed(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Md(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nd),r.length>1&&r.sort(t||Pd),i.length>1&&i.sort(t||Pd)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Id(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fd,e.set(t,[i])):n>=r.length?(i=new Fd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ld(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new Y};break;case`SpotLight`:n={position:new q,direction:new q,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Rd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zd=0;function Bd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vd(e){let t=new Ld,n=Rd(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Un,o=new Un;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bd);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hd(e){let t=new Vd(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ud(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hd(e),t.set(n,[a])):r>=i.length?(a=new Hd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kd=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],qd=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Jd=new Un,Yd=new q,Xd=new q;function Zd(e,t,n){let r=new Sa,i=new K,a=new K,o=new Rn,s=new As,c=new js,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Q({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Wd,fragmentShader:Gd}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new vi;m.setAttribute(`position`,new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Z(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Bn(i.x,i.y,{format:Fe,type:De,minFilter:ve,magFilter:ve,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ga(i.x,i.y,Ee),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Me,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=he,d.map.depthTexture.magFilter=he}else l.isPointLight?(d.map=new Ol(i.x),d.map.depthTexture=new Ka(i.x,Te)):(d.map=new Bn(i.x,i.y),d.map.depthTexture=new Ga(i.x,i.y,Te)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Me,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ve,d.map.depthTexture.magFilter=ve):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=he,d.map.depthTexture.magFilter=he);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yd.setFromMatrixPosition(l.matrixWorld),e.position.copy(Yd),Xd.copy(e.position),Xd.add(Kd[t]),e.up.copy(qd[t]),e.lookAt(Xd),e.updateMatrixWorld(),n.makeTranslation(-Yd.x,-Yd.y,-Yd.z),Jd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Jd,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Bn(i.x,i.y,{format:Fe,type:De}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qd(e,t){function n(){let t=!1,n=new Rn,r=null,i=new Rn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):I(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Gt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):I(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Rn().fromArray(re),F=new Rn().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),ce(e.CULL_FACE),me(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function I(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(I(e.BLEND),g=!1);return}if(g===!1&&(ce(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?I(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):I(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?I(e.CULL_FACE):(ce(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(M&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):I(e.POLYGON_OFFSET_FILL)}function be(t){t?ce(e.SCISSOR_TEST):I(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+ee-1),te!==t&&(e.activeTexture(t),te=t)}function Se(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+ee-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function L(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function R(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function B(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function H(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:I,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:L,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:R,texImage3D:z,pixelStorei:B,getParameter:je,updateUBOMapping:Ne,uniformBlockBinding:H,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:V,viewport:Me,reset:Pe}}function $d(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Rt(`canvas`)}function g(e,t,n){let r=1,i=z(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?At:Dn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&Ae(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{I(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){I(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){I(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){le(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[fe]:e.REPEAT,[pe]:e.CLAMP_TO_EDGE,[me]:e.MIRRORED_REPEAT},ie={[he]:e.NEAREST,[ge]:e.NEAREST_MIPMAP_NEAREST,[_e]:e.NEAREST_MIPMAP_LINEAR,[ve]:e.LINEAR,[ye]:e.LINEAR_MIPMAP_NEAREST,[be]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function F(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ie[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ie[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ae[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=se(n.start,r.width,4),c=se(t.start,r.width,4);n.start<=i+1&&a===c&&se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function I(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Dn.getPrimaries(Dn.workingColorSpace),r=o.colorSpace===``?null:Dn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=R(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);F(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Ne,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ce(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=qc(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=qc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=z(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=z(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Dn.getPrimaries(Dn.workingColorSpace),r=o.colorSpace===``?null:Dn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=R(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);F(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=z(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Oe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ke(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);ke(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),F(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Oe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Se(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)xe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?xe(i.__webglFramebuffer[0],t,0):xe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),de(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),de(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function L(t,n,i){let a=r.get(t);n!==void 0&&ue(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Se(t)}function Ce(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&ke(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Oe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),de(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),F(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ue(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),F(c,a),ue(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),F(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ue(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Se(t)}function we(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let Te=[],Ee=[];function De(t){if(t.samples>0){if(ke(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Te.push(l),Ee.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(i.maxSamples,e.samples)}function ke(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ae(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function R(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Dn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function z(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=P,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=L,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ef(e,t){function n(n,r=``){let i,a=Dn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var tf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Q({vertexShader:tf,fragmentShader:nf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},af=class extends Kt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new rf,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,w=null,T=new _c;T.viewport=new Rn;let E=new _c;E.viewport=new Rn;let D=[T,E],O=new Oc,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new yr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new yr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new yr,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ne:Me,a=_.stencil?Ae:Te);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Bn(d.textureWidth,d.textureHeight,{format:V,type:xe,depthTexture:new Ga(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bn(f.framebufferWidth,f.framebufferHeight,{format:V,type:xe,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new q,P=new q;function te(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?te(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Xt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new _c,o.layers.enable(n),o.viewport=new Rn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new qa,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let F=new Yc;F.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},of=new Un,sf=new J;sf.set(-1,0,0,0,1,0,0,0,1);function cf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Cs(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(of.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(sf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function lf(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var uf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),df=null;function ff(){return df===null&&(df=new la(uf,16,16,Fe,De),df.name=`DFG_LUT`,df.minFilter=ve,df.magFilter=ve,df.wrapS=pe,df.wrapT=pe,df.generateMipmaps=!1,df.needsUpdate=!0),df}var pf=class{constructor(e={}){let{canvas:t=zt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xe}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Le,Ie,Pe]),g=new Set([xe,Te,Ce,Ae,Oe,ke]),_=new Uint32Array(4),v=new Int32Array(4),y=new q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Ot;let j=0,ee=0,M=null,N=-1,P=null,te=new Rn,ne=new Rn,re=null,ie=new Y(0),ae=0,F=t.width,oe=t.height,se=1,ce=null,I=null,le=new Rn(0,0,F,oe),ue=new Rn(0,0,F,oe),de=!1,fe=new Sa,pe=!1,me=!1,he=new Un,ge=new q,_e=new Rn,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Se(){return M===null?se:1}let L=n;function we(e,n){return t.getContext(e,n)}let Ee,R,z,je,B,V,Me,Ne,H,Fe,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,$e,!1),t.addEventListener(`webglcontextrestored`,et,!1),t.addEventListener(`webglcontextcreationerror`,tt,!1),L===null){let t=`webgl2`;if(L=we(t,e),L===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ze()}catch(e){throw t.removeEventListener(`webglcontextlost`,$e,!1),t.removeEventListener(`webglcontextrestored`,et,!1),t.removeEventListener(`webglcontextcreationerror`,tt,!1),W(`WebGLRenderer: `+e.message),e}function Ze(){Ee=new Al(L),Ee.init(),Je=new ef(L,Ee),R=new al(L,Ee,e,Je),z=new Qd(L,Ee),R.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),O=L.createFramebuffer(),k=L.createFramebuffer(),A=L.createFramebuffer(),je=new Nl(L),B=new Md,V=new $d(L,Ee,z,B,R,Je,je),Me=new kl(T),Ne=new Xc(L),Ye=new rl(L,Ne),H=new jl(L,Ne,je,Ye),Fe=new Fl(L,H,Ne,Ye,je),Ge=new Pl(L,R,V),He=new ol(B),Re=new jd(T,Me,Ee,R,Ye,He),ze=new cf(T,B),Be=new Id,Ve=new Ud(Ee),We=new nl(T,Me,z,Fe,p,s),Ue=new Zd(T,Fe,R),Xe=new lf(L,je,R,z),Ke=new il(L,Ee,je),qe=new Ml(L,Ee,je),je.programs=Re.programs,T.capabilities=R,T.extensions=Ee,T.properties=B,T.renderLists=Be,T.shadowMap=Ue,T.state=z,T.info=je}m!==1009&&(w=new Ll(m,t.width,t.height,o,r,i));let Qe=new af(T,L);this.xr=Qe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(e){e!==void 0&&(se=e,this.setSize(F,oe,!1))},this.getSize=function(e){return e.set(F,oe)},this.setSize=function(e,n,r=!0){if(Qe.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}F=e,oe=n,t.width=Math.floor(e*se),t.height=Math.floor(n*se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(F*se,oe*se).floor()},this.setDrawingBufferSize=function(e,n,r){F=e,oe=n,se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(te)},this.getViewport=function(e){return e.copy(le)},this.setViewport=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),z.viewport(te.copy(le).multiplyScalar(se).round())},this.getScissor=function(e){return e.copy(ue)},this.setScissor=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),z.scissor(ne.copy(ue).multiplyScalar(se).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(e){z.setScissorTest(de=e)},this.setOpaqueSort=function(e){ce=e},this.setTransparentSort=function(e){I=e},this.getClearColor=function(e){return e.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=We.getClearColor(),r=We.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,L.clearBufferiv(L.COLOR,0,v))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,$e,!1),t.removeEventListener(`webglcontextrestored`,et,!1),t.removeEventListener(`webglcontextcreationerror`,tt,!1),We.dispose(),Be.dispose(),Ve.dispose(),B.dispose(),Me.dispose(),Fe.dispose(),Ye.dispose(),Xe.dispose(),Re.dispose(),Qe.dispose(),Qe.removeEventListener(`sessionstart`,ct),Qe.removeEventListener(`sessionend`,lt),ut.stop()};function $e(e){e.preventDefault(),Vt(`WebGLRenderer: Context Lost.`),E=!0}function et(){Vt(`WebGLRenderer: Context Restored.`),E=!1;let e=je.autoReset,t=Ue.enabled,n=Ue.autoUpdate,r=Ue.needsUpdate,i=Ue.type;Ze(),je.autoReset=e,Ue.enabled=t,Ue.autoUpdate=n,Ue.needsUpdate=r,Ue.type=i}function tt(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function nt(e){let t=e.target;t.removeEventListener(`dispose`,nt),rt(t)}function rt(e){it(e),B.remove(e)}function it(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Re.releaseProgram(e)}),e.isShaderMaterial&&Re.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ve);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=bt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=H.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ye.setup(i,r,s,n,c);let h,g=Ke;if(c!==null&&(h=Ne.get(c),g=qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*Se()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ee.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function at(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),pe===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,gt(e,t,r),e.side=0,e.needsUpdate=!0,gt(e,t,r),e.side=2):gt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ve.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),me=this.localClippingEnabled,pe=He.init(this.clippingPlanes,me),pe===!0&&He.setGlobalState(this.clippingPlanes,t),D!==null&&Ue.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];at(o,n,t,e),r.add(o)}else at(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ee.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ot=null;function st(e){ot&&ot(e)}function ct(){ut.stop()}function lt(){ut.start()}let ut=new Yc;ut.setAnimationLoop(st),typeof self<`u`&&ut.setContext(self),this.setAnimationLoop=function(e){ot=e,Qe.setAnimationLoop(e),e===null?ut.stop():ut.start()},Qe.addEventListener(`sessionstart`,ct),Qe.addEventListener(`sessionend`,lt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Qe.enabled===!0&&Qe.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(t),t=Qe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Ve.get(e,C.length),x.init(t),x.state.textureUnits=V.getTextureUnits(),C.push(x),he.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),fe.setFromProjectionMatrix(he,Ft,t.reversedDepth),me=this.localClippingEnabled,pe=He.init(this.clippingPlanes,me),b=Be.get(e,S.length),b.init(),S.push(b),Qe.enabled===!0&&Qe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&dt(e,t,-1/0,T.sortObjects)}dt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ce,I),ye=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,ye&&We.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&He.beginShadows();let i=x.state.shadowsArray;if(Ue.render(i,e,t),pe===!0&&He.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];pt(n,r,e,a)}ye&&We.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ft(b,e,n,n.viewport)}}else r.length>0&&pt(n,r,e,t),ye&&We.render(e),ft(b,e,t)}M!==null&&ee===0&&(V.updateMultisampleRenderTarget(M),V.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ye.resetDefaultState(),N=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],V.setTextureUnits(x.state.textureUnits),pe===!0&&He.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function dt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(fe)){r&&_e.setFromMatrixPosition(e.matrixWorld).applyMatrix4(he);let i=Fe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,_e.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(fe))){let i=Fe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),_e.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),_e.copy(e.boundingSphere.center)),_e.applyMatrix4(e.matrixWorld).applyMatrix4(he)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,_e.z,s,t)}}else a.visible&&b.push(e,i,a,n,_e.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)dt(i[e],t,n,r)}function ft(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),pe===!0&&He.setGlobalState(T.clippingPlanes,n),r&&z.viewport(te.copy(r)),i.length>0&&mt(i,t,n),a.length>0&&mt(a,t,n),o.length>0&&mt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function pt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ee.has(`EXT_color_buffer_half_float`)||Ee.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Bn(1,1,{generateMipmaps:!0,type:e?De:xe,minFilter:be,samples:Math.max(4,R.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||te;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),ye&&We.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),pe===!0&&He.setGlobalState(T.clippingPlanes,r),mt(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),Ee.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ht(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function mt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ht(o,t,n,s,l,c)}}function ht(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function gt(e,t,n){t.isScene!==!0&&(t=ve);let r=B.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Re.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Re.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,nt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return vt(e,s),d}else s.uniforms=Re.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Re.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),vt(e,s),r.needsLights=St(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function _t(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function vt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function yt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function bt(e,t,n,r,i){t.isScene!==!0&&(t=ve),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Dn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=x.state.lights;if(pe===!0&&(me===!0||e!==P)){let t=e===P&&r.id===N;He.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=gt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==N&&(N=r.id,w=!0),v.needsLights){let e=yt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||P!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(L,`projectionMatrix`,e.projectionMatrix),O.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(L,ge.setFromMatrixPosition(e.matrixWorld)),R.logarithmicDepthBuffer&&O.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(L,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&O.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&O.setValue(L,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&O.setValue(L,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){O.setOptional(L,i,`bindMatrix`),O.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(L,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(O.setOptional(L,i,`batchingTexture`),O.setValue(L,`batchingTexture`,i._matricesTexture,V),O.setOptional(L,i,`batchingIdTexture`),O.setValue(L,`batchingIdTexture`,i._indirectTexture,V),O.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(L,`batchingColorTexture`,i._colorsTexture,V));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ge.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=ff()),w){if(O.setValue(L,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&xt(k,E),a&&r.fog===!0&&ze.refreshFogUniforms(k,a),ze.refreshMaterialUniforms(k,r,se,oe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Wu.upload(L,_t(v),k,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wu.upload(L,_t(v),k,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(L,`center`,i.center),O.setValue(L,`modelViewMatrix`,i.modelViewMatrix),O.setValue(L,`normalMatrix`,i.normalMatrix),O.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Xe.update(n,S),Xe.bind(n,S)}}return S}function xt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function St(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,z.viewport(te),z.scissor(ne),z.setScissorTest(re),N=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else te.copy(le).multiplyScalar(se).floor(),ne.copy(ue).multiplyScalar(se).floor(),re=de;if(n!==0&&(r=O),z.bindFramebuffer(L.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(te),z.scissor(ne),z.setScissorTest(re),i){let r=B.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}N=-1};function Ct(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=R.textureFormatReadable(e.format),t.__typeReadable=R.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=Ct(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,Je.convert(c),Je.convert(l),a)}finally{let e=M===null?null:B.get(M).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=Ct(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,Je.convert(l),Je.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=M===null?null:B.get(M).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wt(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Je.convert(t.format),_=Je.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=L.TEXTURE_2D),z.activeTexture(L.TEXTURE0),z.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(L.UNPACK_ROW_LENGTH),b=z.getParameter(L.UNPACK_IMAGE_HEIGHT),x=z.getParameter(L.UNPACK_SKIP_PIXELS),S=z.getParameter(L.UNPACK_SKIP_ROWS),C=z.getParameter(L.UNPACK_SKIP_IMAGES);z.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(L.UNPACK_SKIP_PIXELS,l),z.pixelStorei(L.UNPACK_SKIP_ROWS,u),z.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);z.bindFramebuffer(L.READ_FRAMEBUFFER,null),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(L.READ_FRAMEBUFFER,k),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);z.bindFramebuffer(L.READ_FRAMEBUFFER,null),z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(L.UNPACK_ROW_LENGTH,y),z.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(L.UNPACK_SKIP_PIXELS,x),z.pixelStorei(L.UNPACK_SKIP_ROWS,S),z.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,z.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ft}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Dn._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dn._getUnpackColorSpace()}},mf={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},hf=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},gf=new bc(-1,1,1,-1,0,1),_f=new class extends vi{constructor(){super(),this.setAttribute(`position`,new X([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new X([0,2,0,0,2,0],2))}},vf=class{constructor(e){this._mesh=new Z(_f,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},yf=class extends hf{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Q?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ws.clone(e.uniforms),this.material=new Q({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},bf=class extends hf{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},xf=class extends hf{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Sf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new K);this._width=n.width,this._height=n.height,t=new Bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:De}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yf(mf),this.copyPass.material.blending=0,this.timer=new kc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}bf!==void 0&&(r instanceof bf?n=!0:r instanceof xf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Cf=class extends hf{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Y}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},wf={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Y(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Tf=class e extends hf{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new K(256,256):new K(e.x,e.y),this.clearColor=new Y(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Bn(i,a,{type:De,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Bn(i,a,{type:De,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Bn(i,a,{type:De,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=wf;this.highPassUniforms=ws.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Q({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new K(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ws.clone(mf.uniforms),this.blendMaterial=new Q({uniforms:this.copyUniforms,vertexShader:mf.vertexShader,fragmentShader:mf.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Y,this._oldClearAlpha=1,this._basic=new Yi,this._fsQuad=new vf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new K(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Q({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Q({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Tf.BlurDirectionX=new K(1,0),Tf.BlurDirectionY=new K(0,1);var Ef={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Df=class extends hf{constructor(){super(),this.isOutputPass=!0,this.uniforms=ws.clone(Ef.uniforms),this.material=new Ds({name:Ef.name,uniforms:this.uniforms,vertexShader:Ef.vertexShader,fragmentShader:Ef.fragmentShader}),this._fsQuad=new vf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Dn.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Of=5,kf=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Af=`
  uniform sampler2D tDiffuse;
  uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2(-1.0,  1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`,jf=`
  uniform sampler2D tDiffuse;
  uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.1964;
    c += (texture2D(tDiffuse, vUv + uDir * 1.4118).rgb + texture2D(tDiffuse, vUv - uDir * 1.4118).rgb) * 0.2969;
    c += (texture2D(tDiffuse, vUv + uDir * 3.2941).rgb + texture2D(tDiffuse, vUv - uDir * 3.2941).rgb) * 0.0945;
    c += (texture2D(tDiffuse, vUv + uDir * 5.1765).rgb + texture2D(tDiffuse, vUv - uDir * 5.1765).rgb) * 0.0104;
    gl_FragColor = vec4(c, 1.0);
  }`,Mf=`
  uniform sampler2D tDiffuse;
  uniform sampler2D tBlur;
  uniform vec2 uRes;       // drawing buffer, px
  uniform float uDpr;
  uniform vec4 uWin;       // window: x, y (bottom-left), w, h in drawing buffer px
  uniform float uWinR;
  uniform vec4 uPane[2];
  uniform float uPaneR[2];
  uniform float uPaneA[2];
  uniform float uPaneE[2];  // how edge-lit each pane is
  uniform float uPaneK[2];  // how dark each pane is
  // Panes in perspective: corners in order round each (drawing buffer px),
  // how opaque, how edge-lit and how dark each is, and the box round each.
  uniform vec2 uQuad[20];
  uniform float uQuadA[${Of}];
  uniform float uQuadE[${Of}];
  uniform float uQuadK[${Of}];
  uniform vec4 uQuadBox[${Of}];
  uniform float uSurround;
  uniform float uReflect;
  uniform vec3 uStar;      // the star on screen: x, y (drawing buffer px), and how much of it shows
  uniform vec3 uTint;
  uniform vec2 uLight;     // direction towards the star, in screen space
  uniform vec4 uActive;    // where there's glass at all: x0, y0, x1, y1 (drawing buffer px)
  varying vec2 vUv;

  float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  float sdRect(vec2 f, vec4 rect, float r) {
    vec2 h = rect.zw * 0.5;
    return sdRoundRect(f - (rect.xy + h), h, r);
  }

  // Distance to the window's edge: negative inside the opening.
  float windowD(vec2 f) { return sdRect(f, uWin, uWinR); }

  // Signed distance to pane k in perspective (negative inside).
  float sdQuad(vec2 p, int k) {
    int o = k * 4;
    float d = dot(p - uQuad[o], p - uQuad[o]);
    float s = 1.0;
    for (int i = 0; i < 4; i++) {
      int j = i == 0 ? 3 : i - 1;
      vec2 vi = uQuad[o + i];
      vec2 vj = uQuad[o + j];
      vec2 e = vj - vi;
      vec2 w = p - vi;
      vec2 b = w - e * clamp(dot(w, e) / dot(e, e), 0.0, 1.0);
      d = min(d, dot(b, b));
      bvec3 c = bvec3(p.y >= vi.y, p.y < vj.y, e.x * w.y > e.y * w.x);
      if (all(c) || all(not(c))) s *= -1.0;
    }
    return s * sqrt(d);
  }


  // Distance to the nearest glass, how opaque that glass is, how edge-lit, and how dark.
  float glassD(vec2 f, out float alpha, out float lit, out float dark) {
    float d = 1e5;
    alpha = 0.0;
    lit = 0.0;
    dark = 0.0;
    if (uSurround > 0.5) {
      d = -windowD(f);
      alpha = 1.0;
    }
    for (int i = 0; i < 2; i++) {
      if (uPaneA[i] <= 0.001) continue;
      float di = sdRect(f, uPane[i], uPaneR[i]);
      if (di < d) {
        d = di;
        alpha = uPaneA[i];
        lit = uPaneE[i];
        dark = uPaneK[i];
      }
    }
    for (int k = 0; k < ${Of}; k++) {
      if (uQuadA[k] <= 0.001) continue;
      vec4 box = uQuadBox[k];
      if (f.x < box.x || f.y < box.y || f.x > box.z || f.y > box.w) continue;
      float dq = sdQuad(f, k);
      // The first pane in perspective is in front of the rest: inside it, it's all you see.
      if (k == 0 && dq < 0.0) {
        alpha = uQuadA[0];
        lit = uQuadE[0];
        dark = uQuadK[0];
        return dq;
      }
      if (dq < d) {
        d = dq;
        alpha = uQuadA[k];
        lit = uQuadE[k];
        dark = uQuadK[k];
      }
    }
    return d;
  }

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

  vec3 glassOver(vec2 frag, float d, vec2 grad, float dark, float lit) {
    // The exposed edge is a thin bevel that bends the view slightly.
    float bevel = 16.0 * uDpr;
    float t = clamp(-d / bevel, 0.0, 1.0);
    float slope = pow(1.0 - t, 2.4);
    vec2 bend = -grad * slope * 18.0 * uDpr;

    vec3 frosted = texture2D(tBlur, (frag + bend) / uRes).rgb;
    vec3 sharp = vec3(
      texture2D(tDiffuse, (frag + bend * 1.1) / uRes).r,
      texture2D(tDiffuse, (frag + bend) / uRes).g,
      texture2D(tDiffuse, (frag + bend * 0.9) / uRes).b);

    // A light frost: the scene stays readable through the glass.
    vec3 glass = mix(sharp, frosted, mix(0.6, 0.2, slope));

    // Cool and neutral: drain most of the colour, darken for legibility,
    // and give it the faintest blue-grey tone of coated glass.
    float lum = dot(glass, vec3(0.2126, 0.7152, 0.0722));
    glass = mix(vec3(lum), glass, 0.3);
    // Compress bright light (the star, a sunlit limb) so text stays legible
    // over anything, while dim scenery still shows through.
    glass = glass * 0.56 / (1.0 + glass * 2.2) + uTint * 0.02;
    // Darker glass (the screens): smoked, with a faint sheen across the top.
    if (dark > 0.0) {
      glass *= 1.0 - 0.72 * dark;
      glass += vec3(0.55, 0.65, 0.75) * 0.012 * dark * exp(d / (60.0 * uDpr));
    }

    // Only the exposed edge is lit: a hairline, brightest where it faces
    // the star, and a faint glow just inside it that suggests thickness.
    // (Glass that's barely edge-lit, like the strip, is all but borderless.)
    float facing = max(dot(grad, normalize(uLight)), 0.0);
    float hair = exp(-pow((d + 1.0 * uDpr) / (0.8 * uDpr), 2.0)) * clamp(lit * 1.5, 0.1, 1.0);
    glass += vec3(0.86, 0.92, 1.0) * hair * (0.1 + 0.3 * facing);
    glass += vec3(0.6, 0.72, 0.95) * 0.018 * exp(d / (40.0 * uDpr));
    return glass;
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }

  // The windscreen, seen from inside: faint reflections of the lit cabin
  // (the console below, the display beside it), and when the star is in
  // view a veil of glare and the smudges on the glass that catch it.
  vec3 windscreen(vec2 frag, vec3 col, float dW) {
    float inside = 1.0 - smoothstep(-1.0 * uDpr, 0.0, dW);
    if (inside <= 0.0) return col;
    vec2 lo = uWin.xy;
    vec2 hi = uWin.xy + uWin.zw;
    float fromBottom = (frag.y - lo.y) / uDpr;
    float fromRight = (hi.x - frag.x) / uDpr;
    vec3 cabin = vec3(0.55, 0.62, 0.72);
    vec3 r = cabin * 0.022 * exp(-fromBottom / 55.0);
    r += cabin * 0.014 * exp(-fromRight / 70.0);
    // Glare: a soft veil around the star, and smudges that only show in it.
    vec2 toStar = (frag - uStar.xy) / uDpr;
    float d = length(toStar);
    float veil = exp(-d / 320.0) * 0.05 + exp(-d / 90.0) * 0.05;
    float smudge = noise(frag / uDpr / 38.0 + 7.0) * noise(frag / uDpr / 11.0 + 3.0);
    smudge = smoothstep(0.25, 0.7, smudge);
    vec3 warm = vec3(1.0, 0.9, 0.78);
    vec3 glare = warm * uStar.z * (veil + smudge * exp(-d / 260.0) * 0.07);
    return col + (r + glare) * inside * uReflect;
  }

  void main() {
    vec4 base = texture2D(tDiffuse, vUv);
    vec2 frag = vUv * uRes;
    // Nothing to do away from the glass.
    if (any(lessThan(frag, uActive.xy)) || any(greaterThan(frag, uActive.zw))) {
      gl_FragColor = base;
      return;
    }
    vec3 col = base.rgb;
    vec2 e = vec2(1.0, 0.0);

    float dW = windowD(frag);

    if (uReflect > 0.0) col = windscreen(frag, col, dW);

    float alpha;
    float lit;
    float dark;
    float d = glassD(frag, alpha, lit, dark);
    if (d < 1.0 * uDpr && alpha > 0.0) {
      float a0;
      float l0;
      float k0;
      vec2 grad = normalize(vec2(
        glassD(frag + e.xy, a0, l0, k0) - glassD(frag - e.xy, a0, l0, k0),
        glassD(frag + e.yx, a0, l0, k0) - glassD(frag - e.yx, a0, l0, k0)) + 1e-6);
      float inside = 1.0 - smoothstep(-1.0 * uDpr, 0.0, d);
      col = mix(col, glassOver(frag, d, grad, dark, lit), inside * alpha);
      // Edge-lit glass: light let in along the edges glows in a fine line
      // along them, and fades into the glass from them.
      if (lit > 0.0) {
        vec3 edge = vec3(0.45, 0.95, 0.88);
        float line = exp(-pow((d + 1.3 * uDpr) / (0.9 * uDpr), 2.0));
        float rim = exp(d / (14.0 * uDpr));
        float wash = exp(d / (90.0 * uDpr));
        col += edge * lit * alpha * inside * (line * 0.22 + rim * 0.025 + wash * 0.03 * (1.0 - 0.7 * dark));
      }
    }

    gl_FragColor = vec4(col, base.a);
  }`,Nf=class extends hf{pixelRatio;quad=new vf;rtA;rtB;down;blur;composite;frame=null;light=new K(-1,1);star=new q;constructor(e){super(),this.pixelRatio=e;let t={type:De,depthBuffer:!1};this.rtA=new Bn(1,1,t),this.rtB=new Bn(1,1,t),this.down=new Q({uniforms:{tDiffuse:{value:null},uTexel:{value:new K}},vertexShader:kf,fragmentShader:Af,depthTest:!1,depthWrite:!1}),this.blur=new Q({uniforms:{tDiffuse:{value:null},uDir:{value:new K}},vertexShader:kf,fragmentShader:jf,depthTest:!1,depthWrite:!1}),this.composite=new Q({uniforms:{tDiffuse:{value:null},tBlur:{value:null},uRes:{value:new K(1,1)},uDpr:{value:e},uWin:{value:new Rn},uWinR:{value:0},uPane:{value:[new Rn,new Rn]},uPaneR:{value:[0,0]},uPaneA:{value:[0,0]},uPaneE:{value:[0,0]},uPaneK:{value:[0,0]},uQuad:{value:Array.from({length:20},()=>new K)},uQuadA:{value:Array(Of).fill(0)},uQuadE:{value:Array(Of).fill(0)},uQuadK:{value:Array(Of).fill(0)},uQuadBox:{value:Array.from({length:Of},()=>new Rn)},uSurround:{value:0},uReflect:{value:0},uStar:{value:new q},uTint:{value:new Y},uLight:{value:this.light},uActive:{value:new Rn(-1e5,-1e5,1e5,1e5)}},vertexShader:kf,fragmentShader:Mf,depthTest:!1,depthWrite:!1})}setSize(e,t){let n=Math.max(1,Math.round(e/4)),r=Math.max(1,Math.round(t/4));this.rtA.setSize(n,r),this.rtB.setSize(n,r),this.composite.uniforms.uRes.value.set(e,t),this.down.uniforms.uTexel.value.set(1/e,1/t)}render(e,t,n){let r=this.frame,i=this.composite.uniforms,a=this.renderToScreen?null:t;if(!r){i.uSurround.value=0,i.uReflect.value=0,i.uWin.value.set(-1e5,-1e5,2e5,2e5),i.uPaneA.value[0]=i.uPaneA.value[1]=0,i.uQuadA.value.fill(0),i.uActive.value.set(1e5,1e5,-1e5,-1e5),i.tDiffuse.value=n.texture,i.tBlur.value=n.texture,this.quad.material=this.composite,e.setRenderTarget(a),this.quad.render(e);return}let o=this.pixelRatio,s=i.uRes.value.y,c=i.uActive.value;if(r.surround>0||r.reflections>0||!r.panes.length)c.set(-1e5,-1e5,1e5,1e5);else{let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let a of r.panes){let r=a.quad??[{x:a.rect.left,y:a.rect.top},{x:a.rect.left+a.rect.width,y:a.rect.top+a.rect.height}];for(let a of r)e=Math.min(e,a.x),n=Math.max(n,a.x),t=Math.min(t,a.y),i=Math.max(i,a.y)}c.set((e-24)*o,s-(i+24)*o,(n+24)*o,s-(t-24)*o)}let l=this.rtA.width,u=this.rtA.height,d=l/i.uRes.value.x,f=u/i.uRes.value.y;for(let e of[this.rtA,this.rtB]){let t=Math.max(0,Math.floor(c.x*d)-16),n=Math.max(0,Math.floor(c.y*f)-16);e.scissor.set(t,n,Math.min(l,Math.ceil(c.z*d)+16)-t,Math.min(u,Math.ceil(c.w*f)+16)-n),e.scissorTest=!0}this.down.uniforms.tDiffuse.value=n.texture,this.quad.material=this.down,e.setRenderTarget(this.rtA),this.quad.render(e),this.quad.material=this.blur;for(let t=0;t<2;t++)this.blur.uniforms.tDiffuse.value=this.rtA.texture,this.blur.uniforms.uDir.value.set(1/l,0),e.setRenderTarget(this.rtB),this.quad.render(e),this.blur.uniforms.tDiffuse.value=this.rtB.texture,this.blur.uniforms.uDir.value.set(0,1/u),e.setRenderTarget(this.rtA),this.quad.render(e);let p=(e,t)=>t.set(e.left*o,s-(e.top+e.height)*o,e.width*o,e.height*o);p(r.window.rect,i.uWin.value),i.uWinR.value=r.window.radius*o;let m=r.panes.filter(e=>!e.quad);for(let e=0;e<2;e++){let t=m[e];i.uPaneA.value[e]=t?t.alpha:0,i.uPaneE.value[e]=t?.edgeLit??0,i.uPaneK.value[e]=t?.dark??0,t&&(p(t.rect,i.uPane.value[e]),i.uPaneR.value[e]=t.radius*o)}let h=r.panes.filter(e=>e.quad);for(let e=0;e<Of;e++){let t=h[e];if(i.uQuadA.value[e]=t?t.alpha:0,!t?.quad)continue;i.uQuadE.value[e]=t.edgeLit??0,i.uQuadK.value[e]=t.dark??0;let[n,r,a,c]=t.quad;[n,r,c,a].forEach((t,n)=>i.uQuad.value[e*4+n].set(t.x*o,s-t.y*o));let l=t.quad.map(e=>e.x*o),u=t.quad.map(e=>s-e.y*o),d=8*o;i.uQuadBox.value[e].set(Math.min(...l)-d,Math.min(...u)-d,Math.max(...l)+d,Math.max(...u)+d)}i.uSurround.value=r.surround,i.uReflect.value=r.reflections,i.uStar.value.set(this.star.x*o,s-this.star.y*o,this.star.z),i.tDiffuse.value=n.texture,i.tBlur.value=this.rtA.texture,i.uTint.value.setRGB(r.tint[0],r.tint[1],r.tint[2]),this.quad.material=this.composite,e.setRenderTarget(a),this.quad.render(e)}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.down.dispose(),this.blur.dispose(),this.composite.dispose(),this.quad.dispose()}},Pf=Math.PI/180,Ff=1.3,If=new q(.9102,-.3987,-.1118).normalize(),Lf=new q(-.3643,-.6426,-.6741).normalize().clone().applyAxisAngle(If,-35*Pf),Rf=new q().crossVectors(If,Lf);function zf(e,t,n=new q){let r=Math.cos(t*Pf);return n.copy(Lf).multiplyScalar(r*Math.cos(e*Pf)).addScaledVector(Rf,r*Math.sin(e*Pf)).addScaledVector(If,Math.sin(t*Pf))}function Bf(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vf(e){let t=e/100,n,r,i;return t<=66?(n=255,r=99.47*Math.log(t)-161.12,i=t<=19?0:138.52*Math.log(t-10)-305.04):(n=329.7*(t-60)**-.1332,r=288.12*(t-60)**-.0755,i=255),new Y(G.clamp(n,0,255)/255,G.clamp(r,0,255)/255,G.clamp(i,0,255)/255).convertSRGBToLinear()}function Hf(e,t){let n=Vf(e),r=.2126*n.r+.7152*n.g+.0722*n.b;n.setRGB(Math.max(0,r+(n.r-r)*t),Math.max(0,r+(n.g-r)*t),Math.max(0,r+(n.b-r)*t));let i=.2126*n.r+.7152*n.g+.0722*n.b;return n.multiplyScalar(r/Math.max(i,1e-4))}var Uf=[[227.2,-8.9,-1.46,9900],[261.2,-25.3,-.74,7400],[15.1,69.1,-.05,4300],[315.7,-.7,-.27,5800],[67.4,19.2,.03,9600],[162.6,4.6,.08,5e3],[209.2,-25.2,.13,12100],[213.7,13,.34,6500],[290.8,-58.8,.46,15e3],[199.8,-9,.5,3300],[311.8,1.3,.61,25e3],[47.7,-8.9,.76,7700],[300.1,-.4,.76,28e3],[181,-20.2,.86,3800],[351.9,15.1,1,3200],[316.1,50.8,.97,22e3],[192.2,23.4,1.14,4500],[20.5,-64.9,1.16,8600],[84.3,2,1.25,8500],[302.5,3.2,1.25,27e3],[226.4,48.9,1.35,12400],[239.8,-11.3,1.5,22e3],[187.4,22.5,1.58,9e3],[300.2,5.7,1.63,3300],[351.7,-2.2,1.62,25e3],[196.9,-16,1.64,22e3],[205.2,-17.2,1.69,27e3],[206.5,-16.6,1.77,29e3],[203.9,-17.7,2.23,29e3],[214.5,-18.5,2.09,26e3],[100.7,65.3,1.86,17e3],[142.8,51,1.8,4600],[274.3,-12.5,1.86,4100],[340.9,-35.2,1.94,18e3],[127.9,-27.1,2.05,3700],[100.6,4.3,4,3e3]];function Wf(e,t){let n=Bf(7),r=[],i=[],a=[],o=[],s=[],c=new q,l=(e,t,n)=>{r.push(e.x*900,e.y*900,e.z*900);let c=10**(-.4*t);n.multiplyScalar(Math.min(1.3,.035+c*1.6)),i.push(n.r,n.g,n.b),a.push(1.4+Math.min(14,Math.sqrt(c)*16)),o.push(Math.min(.35,c*2.5)),s.push(.9+1.6*Math.sqrt(Math.min(c,1)))};for(let[e,t,n,r]of Uf)l(zf(e,t,c),n,Hf(r,r<4600||r>11e3?2.3:1.2));for(;r.length/3<e;){let e=n()*2-1,t=n()*Math.PI*2,r=Math.sqrt(1-e*e);c.set(r*Math.cos(t),e,r*Math.sin(t));let i=1.6+6.4*n()**.35,a=Math.abs(c.dot(If));if(i>5.5&&n()>Math.exp(-a*a/.08)*.85+.15)continue;let o=n();l(c,i,Hf(o<.25?11e3+n()*19e3:o<.5?2900+n()*1600:4800+n()*4500,o<.5?2.2:1.3))}t(l,n);let u=new vi;u.setAttribute(`position`,new X(r,3)),u.setAttribute(`aColor`,new X(i,3)),u.setAttribute(`aSize`,new X(a,1)),u.setAttribute(`aHalo`,new X(o,1)),u.setAttribute(`aCore`,new X(s,1));let d=new Va(u,new Q({uniforms:{uPixelRatio:{value:1},uZoom:{value:Ff}},vertexShader:`
      attribute vec3 aColor;
      attribute float aSize;
      attribute float aHalo;
      attribute float aCore;
      uniform float uPixelRatio;
      uniform float uZoom;
      varying vec3 vColor;
      varying float vSize;
      varying float vHalo;
      varying float vCore;
      void main() {
        vColor = aColor;
        vSize = aSize * uPixelRatio;
        vHalo = aHalo;
        vCore = aCore * uPixelRatio;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        // (Seen through the sky's wider lens, as the Milky Way is: SKY_WIDER.)
        gl_Position.xy /= uZoom;
        gl_PointSize = vSize;
      }`,fragmentShader:`
      uniform float uPixelRatio;
      varying vec3 vColor;
      varying float vSize;
      varying float vHalo;
      varying float vCore;
      void main() {
        // Distance from the star's centre, in device pixels.
        float r = length(gl_PointCoord - 0.5) * vSize;
        if (r > vSize * 0.5) discard;
        float core = exp(-r * r / (vCore * vCore * 0.8));
        float halo = vHalo * exp(-r * r / (vSize * vSize * 0.045));
        gl_FragColor = vec4(vColor * (core + halo), 1.0);
      }`,blending:2,depthWrite:!1,transparent:!0}));return d.frustumCulled=!1,d.renderOrder=-10,d}var Gf=`/sky/milky-way.jpg`,Kf=new J().set(.99834,-.05338,.02179,.05372,.99844,-.01526,-.02094,.0164,.99965),qf=.003,Jf=16,Yf=`
uniform sampler2D uPhoto;
uniform mat3 uToPhoto;
uniform vec2 uPhotoSize; // the panorama's width and height, in its pixels
varying vec3 vDir;
float lum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec3 at(vec2 uv, float lod) { return max(textureLod(uPhoto, uv, lod).rgb - ${qf.toFixed(4)}, 0.0); }
void main() {
  vec3 g = uToPhoto * normalize(vDir);
  float b = asin(clamp(g.z, -1.0, 1.0));
  vec2 uv = vec2(0.5 - atan(g.y, g.x) / 6.2831853, 0.5 + b / 3.1415927);
  // A pixel of the panorama covers less sky across towards the poles.
  vec2 px = vec2(1.0 / (uPhotoSize.x * max(cos(b), 0.1)), 1.0 / uPhotoSize.y);
  // The light, smoothed (the photo is magnified several times on screen,
  // where a clean soft glow looks better than its grain).
  vec3 light = vec3(0.0);
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) light += at(uv + vec2(float(i), float(j)) * px * 1.5, 1.2) * (i == 0 ? 2.0 : 1.0) * (j == 0 ? 2.0 : 1.0);
  light /= 16.0;
  // Its surroundings, a few degrees across.
  vec3 around = vec3(0.0);
  for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++) around += at(uv + vec2(float(i), float(j)) * px * 24.0, 5.0);
  around /= 25.0;
  // A little local contrast, so the dark lanes read against the star clouds.
  float ratio = clamp((lum(light) + 2e-4) / (lum(around) + 2e-4), 0.02, 4.0);
  vec3 col = light * pow(ratio, 0.3);
  // Richer colour.
  float y = lum(col);
  col = max(mix(vec3(y), col, 1.4), 0.0);
  // The core held back, and the whole kept faint.
  col = col / (1.0 + y / 0.1) * 0.3;
  gl_FragColor = vec4((col + vec3(0.0015, 0.0022, 0.0045)) * ${Jf.toFixed(1)}, 1.0);
}
`;function Xf(){let e=new J().set(Lf.x,Lf.y,Lf.z,Rf.x,Rf.y,Rf.z,If.x,If.y,If.z);return Kf.clone().transpose().multiply(e)}function Zf(e,t,n){let r=e.capabilities.maxTextureSize,i=t;if(t.naturalWidth>r){let e=document.createElement(`canvas`);e.width=Math.min(4096,r),e.height=e.width/2,e.getContext(`2d`).drawImage(t,0,0,e.width,e.height),i=e}let a=new Ln(i);a.colorSpace=Ot,a.wrapS=fe,a.wrapT=pe,a.minFilter=be,a.needsUpdate=!0;let o=new Tr,s=new Z(new _s(10,64,32),new Q({uniforms:{uPhoto:{value:a},uToPhoto:{value:Xf()},uPhotoSize:{value:new K(i.width,i.height)}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:Yf,side:1,depthWrite:!1}));o.add(s);let c=new Ol(n,{colorSpace:Ot,generateMipmaps:!1});return new Dc(.1,100,c).update(e,o),s.geometry.dispose(),s.material.dispose(),a.dispose(),c.texture}var Qf=(e,t)=>(n,r)=>{let i=1024,a=document.createElement(`canvas`);a.width=i,a.height=512;let o=a.getContext(`2d`,{willReadFrequently:!0});o.drawImage(e,0,0,i,512);let s=o.getImageData(0,0,i,512).data,c=e=>(e/255)**2.2,l=new Float64Array(i*512),u=0;for(let e=0;e<512;e++){let t=Math.cos(((e+.5)/512-.5)*Math.PI);for(let n=0;n<i;n++){let r=(e*i+n)*4,a=.2126*c(s[r])+.7152*c(s[r+1])+.0722*c(s[r+2])-qf;u+=Math.max(a,0)*t,l[e*i+n]=u}}let d=new q;for(let e=0;e<t;e++){let e=r()*u,t=0,a=l.length-1;for(;t<a;){let n=t+a>>1;l[n]<e?t=n+1:a=n}let o=(.5-(t%i+r())/i)*2*Math.PI,s=(.5-(Math.floor(t/i)+r())/512)*Math.PI;d.set(Math.cos(s)*Math.cos(o),Math.cos(s)*Math.sin(o),Math.sin(s)).applyMatrix3(Kf),n(new q().copy(Lf).multiplyScalar(d.x).addScaledVector(Rf,d.y).addScaledVector(If,d.z),6.5+3*r(),Hf(3800+r()**1.3*9e3,1.3))}};function $f(e,t,n=()=>{}){let r=1,i=null,a=new Z(new vi().setAttribute(`position`,new X([-1,-1,0,3,-1,0,-1,3,0],3)),new Q({uniforms:{uSky:{value:null},uIntensity:{value:1},uInvProj:{value:new Un},uCamWorld:{value:new Un},uZoom:{value:Ff}},vertexShader:`
        varying vec2 vNdc;
        void main() { vNdc = position.xy; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,fragmentShader:`
        uniform samplerCube uSky;
        uniform float uIntensity, uZoom;
        uniform mat4 uInvProj, uCamWorld;
        varying vec2 vNdc;
        void main() {
          vec4 v = uInvProj * vec4(vNdc * uZoom, 1.0, 1.0);
          vec3 dir = normalize((uCamWorld * vec4(normalize(v.xyz / v.w), 0.0)).xyz);
          gl_FragColor = vec4(textureCube(uSky, dir).rgb * uIntensity, 1.0);
        }`,depthTest:!1,depthWrite:!1}));a.frustumCulled=!1,a.renderOrder=-1e9;let o=(e,n,o)=>{let s=a.material;s.uniforms.uSky.value=e,s.uniforms.uIntensity.value=n,t.add(a),i=o,o.material.uniforms.uPixelRatio.value=r,t.add(o)};return new nc().load(Gf,t=>{t.decode().catch(()=>{}).then(()=>{let r=Wf(14e3,Qf(t,9e4));n(`stars`),o(Zf(e,t,2048),1/Jf,r),n(`milky-way`)})},void 0,()=>{n(`stars`),n(`milky-way`)}),{setPixelRatio(e){r=e,i&&(i.material.uniforms.uPixelRatio.value=e)},follow(e){i?.position.copy(e.position),e.updateMatrixWorld();let t=a.material.uniforms;t.uInvProj.value.copy(e.projectionMatrixInverse),t.uCamWorld.value.copy(e.matrixWorld)}}}var ep=`
attribute vec3 aTangent;
attribute float aSide;
attribute float aAlong;
uniform float uHalf;
varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 toCam = normalize(cameraPosition - wp.xyz);
  vec3 across = normalize(cross(normalize(aTangent), toCam));
  wp.xyz += across * aSide * uHalf;
  vUv = vec2(aAlong, aSide);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,tp=`
uniform float uTime;
uniform float uFade;
uniform float uLength;
uniform float uSeed;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int k = 0; k < 4; k++) { v += a * noise(p); p *= 2.07; a *= 0.5; }
  return v;
}
void main() {
  float s = vUv.x, v = vUv.y, L = uLength, t = uTime;
  // Pinned at both moons, free to writhe between.
  float taper = pow(sin(3.14159 * s), 0.7);
  // Lightning's jumps: the shape changes in steps, a dozen a second, eased a little so it crackles rather than strobes.
  float tq = floor(t * 11.0) / 11.0;
  vec2 q = vec2(s * L * 0.5, uSeed * 7.0);
  float off1 = ((fbm(q + vec2(0.0, tq * 0.9)) - 0.5) * 0.85 + (noise(vec2(s * L * 3.0, tq * 4.0 + uSeed)) - 0.5) * 0.16) * taper;
  float off2 = ((fbm(q * 1.3 + vec2(5.3, tq * 1.3 + 2.0)) - 0.5) * 1.0) * taper;
  float d1 = v - off1, d2 = v - off2;
  float core = exp(-d1 * d1 / 0.0011) + 0.35 * exp(-d2 * d2 / 0.0008);
  float glow = exp(-abs(d1) / 0.16) * 0.22 + exp(-abs(d2) / 0.12) * 0.07;
  float haze = exp(-abs(v) / 0.5) * 0.035;
  // Patches of brightness flickering along it.
  float flick = 0.35 + 0.65 * smoothstep(0.3, 0.85, noise(vec2(s * L * 0.7 - t * 2.4, t * 1.7 + uSeed * 3.0)));
  // Now and then a spark of amber, running from the first moon to the next.
  float period = 7.5;
  float head = fract((t + uSeed * 3.1) / period) * 1.3 - 0.15;
  float dd = (s - head) * L;
  float spark = exp(-dd * dd * 0.08);
  vec3 ice = vec3(0.62, 0.86, 1.0), violet = vec3(0.68, 0.6, 1.0), amber = vec3(1.0, 0.72, 0.36);
  vec3 tint = mix(ice, violet, 0.5 + 0.5 * sin(s * 5.0 + uSeed * 4.0));
  vec3 col = tint * ((core * 0.9 + glow) * flick + haze) + amber * spark * (core * 1.6 + glow * 1.2);
  float ends = smoothstep(0.0, 0.04, s) * smoothstep(1.0, 0.96, s);
  gl_FragColor = vec4(col * ends * uFade * 0.1, 1.0);
}`;function np(e,t,n){let r=new _r,i=[];for(let a=0;a+1<n.length;a++){let o=n[a],s=n[a+1],c=o.center.clone().sub(e),l=s.center.clone().sub(e),u=Math.atan2(c.z,c.x),d=Math.hypot(c.x,c.z),f=Math.hypot(l.x,l.z),p=Math.atan2(l.z,l.x)-u;p=Math.atan2(Math.sin(p),Math.cos(p));let m=n=>{let r=n*n*(3-2*n),i=Math.sin(Math.PI*n),a=u+p*n,o=(d+(f-d)*r)*(1+.06*i);return new q(e.x+Math.cos(a)*o,e.y+c.y+(l.y-c.y)*r+t*.12*i,e.z+Math.sin(a)*o)},h=[];for(let e=0;e<=40;e++)h.push(m(e/40));h[0]=o.center.clone().addScaledVector(h[1].clone().sub(o.center).normalize(),o.radius*.95),h[40]=s.center.clone().addScaledVector(h[39].clone().sub(s.center).normalize(),s.radius*.95);let g=new ao(h,!1,`centripetal`),_=new Float32Array(1566),v=new Float32Array(1566),y=new Float32Array(522),b=new Float32Array(522);for(let e=0;e<=260;e++){let t=e/260,n=g.getPoint(t),r=g.getTangent(t);for(let i=0;i<2;i++){let a=e*2+i;_.set([n.x,n.y,n.z],a*3),v.set([r.x,r.y,r.z],a*3),y[a]=i?1:-1,b[a]=t}}let x=[];for(let e=0;e<260;e++){let t=e*2;x.push(t,t+1,t+2,t+1,t+3,t+2)}let S=new vi;S.setAttribute(`position`,new ii(_,3)),S.setAttribute(`aTangent`,new ii(v,3)),S.setAttribute(`aSide`,new ii(y,1)),S.setAttribute(`aAlong`,new ii(b,1)),S.setIndex(x);let C=Math.min(o.radius,s.radius)*1.1,w=new Q({uniforms:{uTime:{value:0},uFade:{value:0},uLength:{value:g.getLength()/C},uSeed:{value:a*.61+.17},uHalf:{value:C}},vertexShader:ep,fragmentShader:tp,transparent:!0,depthWrite:!1,blending:2,side:2});i.push(w);let T=new Z(S,w);T.frustumCulled=!1,r.add(T)}let a=0;return r.visible=!1,{root:r,update(e,t,n,o){a+=(+!!n-a)*(1-Math.exp(-t/.6)),a<.002&&!n&&(a=0),r.visible=a>0;for(let t of i)t.uniforms.uFade.value=a,t.uniforms.uTime.value=o?0:e}}}var rp=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p, int octaves) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 8; i++) {
    if (i >= octaves) break;
    sum += amp * snoise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    amp *= 0.5;
  }
  return sum;
}

// 1 inside [a, b], fading to 0 over width w on each side.
float band(float x, float a, float b, float w) {
  return smoothstep(a - w, a, x) * (1.0 - smoothstep(b, b + w, x));
}

// Bump mapping from screen-space derivatives (after Mikkelsen).
vec3 perturbNormal(vec3 pos, vec3 n, float h) {
  vec3 dx = dFdx(pos);
  vec3 dy = dFdy(pos);
  vec3 r1 = cross(dy, n);
  vec3 r2 = cross(n, dx);
  float det = dot(dx, r1);
  vec3 grad = sign(det) * (dFdx(h) * r1 + dFdy(h) * r2);
  // At a silhouette this can vanish, and normalising nothing gives a NaN,
  // which bloom would spread over the whole frame.
  vec3 b = abs(det) * n - grad;
  return dot(b, b) > 1e-24 ? normalize(b) : n;
}
`,ip=`
uniform vec3 uSunPos;
varying vec3 vObj;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vLightObj;

void main() {
  vObj = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec3 L = normalize(uSunPos - wp.xyz);
  vLightObj = transpose(mat3(modelMatrix)) * L;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,ap=`
uniform vec3 uSunPos;
uniform float uSunI;
uniform float uTime;
varying vec3 vObj;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vLightObj;
`,op=`
vec3 untone(vec3 display) {
  display = clamp(display, 0.0, 0.98);
  vec3 lin = mix(display / 12.92, pow((display + 0.055) / 1.055, vec3(2.4)), step(0.04045, display));
  vec3 y = mat3(vec3(0.643038, 0.059269, 0.005962), vec3(0.311187, 0.931436, 0.063929), vec3(0.045775, 0.009295, 0.930118)) * lin;
  vec3 A = y * 0.983729 - 1.0;
  vec3 B = y * 0.4329510 - 0.0245786;
  vec3 C = y * 0.238081 + 0.000090537;
  vec3 x = (-B - sqrt(max(B * B - 4.0 * A * C, 0.0))) / (2.0 * A);
  return mat3(vec3(1.764741, -0.147028, -0.036337), vec3(-0.675778, 1.160252, -0.162436), vec3(-0.088963, -0.013224, 1.198773)) * x * (0.6 / 1.05);
}`;function sp(e){let t=new Z(new _s(e,16,12),new Yi({colorWrite:!1,depthWrite:!1}));return t.renderOrder=-1,t}var cp=null;function lp(){if(cp)return cp;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(128,128,0,128,128,128);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.08,`rgba(255,255,255,0.55)`),n.addColorStop(.25,`rgba(255,255,255,0.14)`),n.addColorStop(.55,`rgba(255,255,255,0.03)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,256,256),cp=new Wa(e),cp}function up(e,t){let n=G.degToRad(e),r=G.degToRad(t);return new q(Math.cos(n)*Math.sin(r),Math.sin(n),Math.cos(n)*Math.cos(r))}function dp(e,t,n=.55){let r=e.clone().negate().normalize(),i=new q(0,1,0),a=new q().crossVectors(i,r).normalize(),o=[a,a.clone().negate()].map(e=>r.clone().multiplyScalar(n).add(e.multiplyScalar(.8)).add(i.clone().multiplyScalar(.36)).normalize()),s=n=>Math.max(-1,...t.map(t=>t.clone().sub(e).normalize().dot(n.clone().negate())));return s(o[0])<=s(o[1])?o[0]:o[1]}function fp(e,t,n,r=t.cx-e.cx){let i=n/e.zoom;Math.abs(r)<i&&Math.abs(t.cy-e.cy)<i&&Math.abs(Math.log(t.zoom/e.zoom))<1e-4&&Object.assign(e,t)}var pp=(e,t,n,r)=>t+(e-t)*Math.exp(-n*r),mp=`
${ap}
${rp}
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  float mu = max(dot(N, V), 0.0);
  float limb = pow(mu, 0.5);
  vec3 p = normalize(vObj);
  float gran = fbm(p * 16.0 + vec3(0.0, uTime * 0.02, 0.0), 4);
  float spots = fbm(p * 3.0 - vec3(uTime * 0.004), 3);
  vec3 hot = vec3(1.0, 0.86, 0.66);
  vec3 warm = vec3(1.0, 0.56, 0.24);
  vec3 col = mix(warm, hot, limb) * (2.6 + 0.9 * gran - 0.6 * smoothstep(0.35, 0.6, spots)) * (0.35 + 0.65 * limb);
  gl_FragColor = vec4(col, 1.0);
}
`;function hp(e=2.6){let t=new _r,n={uSunPos:{value:new q},uSunI:{value:1},uTime:{value:0}},r=new Z(new _s(e,96,64),new Q({uniforms:n,vertexShader:ip,fragmentShader:mp}));t.add(r);let i=lp(),a=new Hi(new Oi({map:i,color:new Y(1,.62,.3).multiplyScalar(.55),blending:2,depthWrite:!1,transparent:!0}));a.scale.setScalar(e*4);let o=new Hi(new Oi({map:i,color:new Y(1,.5,.25).multiplyScalar(.05),blending:2,depthWrite:!1,transparent:!0}));o.scale.setScalar(e*10),t.add(a,o);let s=sp(e*1.8);return t.add(s),{id:`star`,root:t,center:new q,radius:e*1.25,focusDistance:e*6,pick:s,update(e){n.uTime.value=e,r.rotation.y=e*.01},setFocused(){}}}var gp=66*Math.PI/180,_p=e=>Math.log(Math.tan(Math.PI/4+Math.max(-gp,Math.min(gp,e))/2)),vp={extent:[Math.PI,_p(gp)],zoom:[.9,16],forward:(e,t)=>[e,_p(t)],glsl:`
vec2 mapForward(vec2 ll) {
  float lat = clamp(ll.y, -${gp.toFixed(6)}, ${gp.toFixed(6)});
  return vec2(ll.x, log(tan(0.7853982 + lat * 0.5)));
}`},yp=75*Math.PI/180,bp={extent:[Math.PI,yp],zoom:[.9,12],forward:(e,t)=>[e,Math.max(-yp,Math.min(yp,t))],glsl:`
vec2 mapForward(vec2 ll) {
  return vec2(ll.x, clamp(ll.y, -${yp.toFixed(6)}, ${yp.toFixed(6)}));
}`},xp=Math.SQRT2+.2,Sp={extent:[xp+Math.SQRT2,Math.SQRT2+.3],wholeY:.22,zoom:[.9,10],sides:!0,forward:(e,t)=>{let n=Math.cos(t)*Math.cos(e)>=0,r=e-(n?0:Math.PI),i=Math.sqrt(2/Math.max(1e-6,1+Math.cos(t)*Math.cos(r)));return[(n?-xp:xp)+i*Math.cos(t)*Math.sin(r),i*Math.sin(t)]},glsl:`
uniform float uSide;
vec2 mapForward(vec2 ll) {
  float dl = ll.x - (uSide < 0.0 ? 0.0 : 3.1415927);
  float k = sqrt(2.0 / max(1e-4, 1.0 + cos(ll.y) * cos(dl)));
  return vec2(uSide * ${xp.toFixed(6)} + k * cos(ll.y) * sin(dl), k * sin(ll.y));
}`},Cp=e=>`
attribute vec2 lonlat;
uniform vec3 uSunPos;
uniform float uUnroll;
uniform float uMapScale;
uniform vec3 uMapView; // the view's centre (map units) and zoom
uniform float uMapFlip;
varying vec3 vObj;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vLightObj;
varying vec2 vLonLat;
${e.glsl}
void main() {
  vObj = position;
  vLonLat = lonlat;
  vec2 m = (mapForward(lonlat) - uMapView.xy) * uMapView.z * uMapScale;
  vec3 pos = mix(position, vec3(m.x * uMapFlip, m.y, 0.0), uUnroll);
  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normalize(mix(normal, vec3(0.0, 0.0, uMapFlip), uUnroll)));
  vLightObj = transpose(mat3(modelMatrix)) * normalize(uSunPos - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,wp=(e,t=1)=>({uUnroll:{value:0},uFlat:{value:0},uChart:{value:0},uMapScale:{value:e},uMapView:{value:new q(0,0,1)},uMapFlip:{value:t}}),Tp=`
// Lines at whole values of c, px pixels wide however far you zoom, fading out where they crowd together.
float gridPx(float c, float px) {
  float w = max(fwidth(c), 1e-6);
  float d = abs(fract(c + 0.5) - 0.5) / w;
  return (1.0 - smoothstep(px * 0.5, px * 0.5 + 1.0, d)) * (1.0 - smoothstep(0.08, 0.25, w));
}

// A single line where x crosses x0, px pixels wide.
float lineAt(float x, float x0, float px) {
  float w = max(fwidth(x), 1e-6);
  return 1.0 - smoothstep(px * 0.5 * w, (px * 0.5 + 1.0) * w, abs(x - x0));
}

// The graticule (lon, lat in radians): every step degrees, and every 10° too once they're well apart.
float graticule(vec2 ll, float stepDeg) {
  vec2 deg = ll * 57.29578;
  vec2 tens = deg / 10.0;
  float apart = 1.0 - smoothstep(0.01, 0.02, max(fwidth(tens.x), fwidth(tens.y)));
  float main = gridPx(deg.x / stepDeg, 1.0) + gridPx(deg.y / stepDeg, 1.0);
  return min(max(main, 0.6 * apart * (gridPx(tens.x, 0.8) + gridPx(tens.y, 0.8))), 1.0);
}
`,Ep=`
uniform float uChart;
uniform vec3 uPaper;
void main() {
  gl_FragColor = vec4(uPaper, uChart);
}`;function Dp(e){let{frame:t,radius:n,projection:r,uniforms:i}=e,a=i.uMapFlip.value,[o,s]=r.extent,c=new Z(new hs(1,1),new Q({uniforms:{uChart:i.uChart,uPaper:{value:new q(...e.paper)}},fragmentShader:Ep,transparent:!0,depthWrite:!1}));c.scale.set(600,600,1),c.position.z=-.05*a,a<0&&(c.rotation.y=Math.PI),c.frustumCulled=!1,c.visible=!1,t.add(c);let l={cx:0,cy:0,zoom:1},u={cx:0,cy:0,zoom:1},d=new bn,f=e=>G.clamp(e,r.zoom[0],r.zoom[1]),p=e=>{e.cx=G.clamp(e.cx,-o,o),e.cy=G.clamp(e.cy,-s,s)};return{map:{get unroll(){return i.uUnroll.value},set unroll(e){i.uUnroll.value=e,i.uFlat.value=e},get chart(){return i.uChart.value},set chart(e){i.uChart.value=e,c.visible=e>0},view:l,goal:u,whole:{cx:0,cy:r.wholeY??0,zoom:1},center:e.center.clone(),extent:{x:o*n,y:s*n},axes(n=!1){return n?d.copy(e.settled()):t.getWorldQuaternion(d),{right:new q(a,0,0).applyQuaternion(d),up:new q(0,1,0).applyQuaternion(d),out:new q(0,0,a).applyQuaternion(d)}},point(e,i,o=new q){let[s,c]=r.forward(G.degToRad(i),G.degToRad(e));return t.updateWorldMatrix(!0,!1),o.set((s-l.cx)*l.zoom*n*a,(c-l.cy)*l.zoom*n,0).applyMatrix4(t.matrixWorld)},drag(e,t,r,i){l.cx+=(e-r)/(n*l.zoom),l.cy+=(t-i)/(n*l.zoom),p(l),Object.assign(u,l)},zoomAt(e,t,r){let i=l.zoom,a=f(i*e);l.cx+=t/(n*i)-t/(n*a),l.cy+=r/(n*i)-r/(n*a),l.zoom=a,p(l),Object.assign(u,l)},goTo(e,t=!1){u.cx=e.cx,u.cy=e.cy,u.zoom=f(e.zoom),p(u),t&&Object.assign(l,u)},viewAt(e,t,n){let[i,a]=r.forward(G.degToRad(t),G.degToRad(e));return{cx:i,cy:a,zoom:n}},around(e){let t=e.map(e=>r.forward(G.degToRad(e.lon),G.degToRad(e.lat))),n=Math.min(...t.map(e=>e[0])),i=Math.max(...t.map(e=>e[0])),a=Math.min(...t.map(e=>e[1])),c=Math.max(...t.map(e=>e[1])),l=G.clamp(Math.min(o/((i-n)/2+.35),s/((c-a)/2+.3)),1.5,9);return{cx:(n+i)/2,cy:(a+c)/2,zoom:l}}},paper:c,update(e){let t=1-Math.exp(-3.2*e);l.cx+=(u.cx-l.cx)*t,l.cy+=(u.cy-l.cy)*t,l.zoom=Math.exp(pp(Math.log(l.zoom),Math.log(u.zoom),3.2,e)),fp(l,u,2e-4),i.uMapView.value.set(l.cx,l.cy,l.zoom)}}}function Op(e,t,n){let r=(t+1)*(n+1),i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*2);for(let r=0;r<=n;r++){let s=-Math.PI/2+Math.PI*r/n;for(let n=0;n<=t;n++){let c=-Math.PI+2*Math.PI*n/t,l=r*(t+1)+n,u=[Math.cos(s)*Math.sin(c),Math.sin(s),Math.cos(s)*Math.cos(c)];for(let t=0;t<3;t++)a[l*3+t]=u[t],i[l*3+t]=u[t]*e;o[l*2]=c,o[l*2+1]=s}}let s=new Uint32Array(t*n*6),c=0;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=e*(t+1)+n,i=r+t+1;s.set([r,r+1,i+1,r,i+1,i],c),c+=6}let l=new vi;return l.setAttribute(`position`,new ii(i,3)),l.setAttribute(`normal`,new ii(a,3)),l.setAttribute(`lonlat`,new ii(o,2)),l.setIndex(new ii(s,1)),l}var kp=e=>{let t=2166136261;for(let n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return(t>>>0)%1e4/100},Ap=typeof createImageBitmap==`function`?new wc().setOptions({imageOrientation:`flipY`,premultiplyAlpha:`none`}):null,jp=new rc,Mp=[],Np=e=>{let t;return Mp.push(new Promise(n=>{if(!Ap){t=jp.load(e,()=>n(t),void 0,()=>n(t));return}t=new Ln,t.flipY=!1,Ap.load(e,e=>{t.image=e,t.needsUpdate=!0,n(t)},void 0,()=>n(t))})),t},Pp=e=>`vec3(${e.map(e=>e.toFixed(3)).join(`, `)})`,Fp=`
uniform vec3 uIsl[12];
uniform float uIslR[12];
uniform float uIslSeed[12];
uniform int uIslN;
`,Ip=.25,Lp=e=>`
#define GLOBE_SURFACE
${ap}
uniform float uFlat;
uniform float uChart;
${rp}
${Fp}
${e.glsl}
uniform vec3 uSelP;
uniform float uSelR;
uniform float uSelT;

void main() {
  vec3 p = normalize(vObj);
  vec3 N = normalize(vNormalW);
  vec3 L = normalize(uSunPos - vWorld);
  vec3 V = normalize(cameraPosition - vWorld);

  float h = height(p);
  float land = landMask(h, p);
  // Relief, faded out towards the limb, where screen-space derivatives break up into blocks.
  float facing = smoothstep(0.05, 0.35, dot(N, V));
  vec3 Nb = normalize(mix(N, ${e.reliefNormal?`reliefNormal(N, p, ${e.relief.toFixed(3)} * facing)`:`perturbNormal(vWorld, N, h * ${e.relief.toFixed(3)} * facing)`}, land));
  vec3 base = mix(oceanColour(h, p), landColour(h, p), land);

  // Flattened into a map, it's lit evenly, without day and night.
  float ndl = mix(max(dot(Nb, L), 0.0), 0.85, uFlat);
  float twilight = mix(smoothstep(-0.2, 0.15, dot(N, L)), 1.0, uFlat);
  vec3 col = base * uSunI * (ndl * 1.05 + 0.03 * twilight) + base * 0.003;
  float round = 1.0 - uFlat;

  // Cloud shadows, sampled along the light direction. Not on a flat map, where they're gone: the weather is the
  // dearest thing here (seventeen layers of noise a pixel), and the map would pay for it to multiply it by nothing.
  float shadow = round > 0.0 ? cloudDensity(normalize(p + normalize(vLightObj) * 0.02), uTime) * round : 0.0;
  col *= 1.0 - 0.5 * shadow * twilight;

  // Sun glint and sky reflection on open water.
  vec3 H = normalize(L + V);
  float nh = max(dot(N, H), 0.0);
  float fres = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 5.0);
  float glint = pow(nh, 700.0) * 0.55 + pow(nh, 60.0) * 0.03;
  col += (1.0 - land) * uSunI * vec3(1.0, 0.93, 0.8) * glint * step(0.0, dot(N, L)) * (1.0 - 0.7 * shadow) * round;
  col += (1.0 - land) * vec3(0.10, 0.2, 0.38) * fres * twilight * uSunI * 0.6 * round;

  // Air thickening towards the limb.
  float rim = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.2) * round;
  col = mix(col, ${Pp(e.air)} * uSunI * 0.75, rim * 0.6 * twilight);
${e.shine?`  col += shine(p, h) * round;`:``}

  // A fine engraved contour around the selected place.
  if (uSelR > 0.0) {
    float d = distance(p, uSelP);
    float ring = abs(d - uSelR);
    float aa = fwidth(d) * 1.2;
    float line = 1.0 - smoothstep(0.0, aa, ring);
    col += vec3(0.75, 0.88, 1.0) * line * 0.55 * uSelT * (0.35 + 0.65 * twilight) * round;
  }
${e.unroll?`  if (uChart > 0.0) col = mix(col, chartColour(p, h) + col * ${Ip.toFixed(2)}, uChart);`:``}
  gl_FragColor = vec4(col, 1.0);
}
`,Rp=e=>`
${ap}
${rp}
${Fp}
${e.glsl}
uniform float uFlat;
void main() {
  vec3 p = normalize(vObj);
  vec3 N = normalize(vNormalW);
  vec3 L = normalize(uSunPos - vWorld);
  float c = cloudDensity(p, uTime);
  float ndl = max(dot(N, L), 0.0);
  vec3 col = vec3(1.0, 0.98, 0.95) * uSunI * (0.04 + ndl * 1.1);
  gl_FragColor = vec4(col, c * 0.82 * (1.0 - uFlat));
}
`,zp=e=>`
${ap}
uniform float uInner;
uniform float uFlat;
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 L = normalize(uSunPos - vWorld);
  float x = clamp(-dot(N, V) / uInner, 0.0, 1.0);
  float glow = pow(x, 3.0);
  float lit = smoothstep(-0.3, 0.6, dot(N, L));
  vec3 col = ${Pp(e.glow)} * glow * lit * uSunI * 0.9 * (1.0 - uFlat);
  gl_FragColor = vec4(col, 1.0);
}
`,Bp=G.degToRad(15),Vp=1.1,Hp=matchMedia(`(prefers-reduced-motion: reduce)`).matches;function Up(e,t,n,r){let i=e.radius,a=new _r;a.position.copy(t);let o=new _r;o.rotation.set(...e.tilt),a.add(o);let s=new _r;o.add(s),o.updateWorldMatrix(!0,!1);let c=new q(0,1,0).applyQuaternion(o.getWorldQuaternion(new bn)),l=[],u=[],d=[],f=[];for(let t of e.sites??[]){if(u.length>=12)break;l.push(t.id),u.push(up(t.lat,t.lon)),d.push(t.size),f.push(kp(t.id.replace(/^island:/,``)))}for(let t of e.sites?[]:n)t.anchor.kind!==`surface`||u.length>=12||(l.push(t.id),u.push(up(t.anchor.lat,t.anchor.lon)),d.push(t.anchor.size),f.push(kp(t.id)));let p=t=>{let r=l.indexOf(t);if(r>=0)return{dir:u[r],r:d[r]};let i=e.points?.find(e=>e.id===t);if(i)return{dir:up(i.lat,i.lon),r:i.size};let a=n.find(e=>e.id===t);return a&&a.anchor.kind===`surface`?{dir:up(a.anchor.lat,a.anchor.lon),r:.045}:null};for(let[t,n,r]of e.decor){if(u.length>=12)break;l.push(null),u.push(up(t,n)),d.push(r),f.push(kp(`${t},${n}`))}let m=u.length;for(;u.length<12;)u.push(new q(0,1,0)),d.push(1e-4),f.push(0);let h={uSunPos:{value:r},uSunI:{value:e.sunI??1},uTime:{value:0},uIsl:{value:u},uIslR:{value:d},uIslSeed:{value:f},uIslN:{value:m},uFlat:e.unroll?.uniforms.uFlat??{value:0}},g={};for(let[t,{url:n,colour:r}]of Object.entries(e.textures??{})){let e=Np(n);e.colorSpace=r?Ot:``,e.wrapS=fe,e.anisotropy=8,g[t]={value:e}}let _={...h,...g,...e.unroll?.uniforms,uChart:e.unroll?.uniforms.uChart??{value:0},uSelP:{value:new q(0,1,0)},uSelR:{value:0},uSelT:{value:0}},v=new Z(e.unroll?Op(i,512,256):new _s(i,192,128),new Q({uniforms:_,vertexShader:e.unroll?.vertex??ip,fragmentShader:Lp(e)}));e.unroll&&(v.frustumCulled=!1);let y=new Z(new _s(i*1.012,160,100),new Q({uniforms:h,vertexShader:ip,fragmentShader:Rp(e),transparent:!0,depthWrite:!1}));s.add(v,y);let b=new Z(new _s(i*1.1,96,64),new Q({uniforms:{...h,uInner:{value:Math.sqrt(1-1/(1.1*1.1))}},vertexShader:ip,fragmentShader:zp(e),side:1,blending:2,transparent:!0,depthWrite:!1}));a.add(b);let x=sp(i*1.5);a.add(x);let S=!1,C=0,w=null,T=0,E=0,D=new q(0,1,0),O=(e,t,n)=>{let r=Math.atan2(Math.sin(Math.atan2(e.x,e.z)+n-t),Math.cos(Math.atan2(e.x,e.z)+n-t));return Math.abs(r)<=Bp?n:n-(r-Math.sign(r)*Bp)},k=(e,n)=>{let r=e.clone().applyAxisAngle(D,n).multiplyScalar(i*1.004);o.updateWorldMatrix(!0,!1);let a=r.applyMatrix4(o.matrixWorld);return{position:a,normal:a.clone().sub(t).normalize()}};return{id:e.id,root:a,spin:s,center:t.clone(),radius:i*1.08,axis:c,focusDistance:i*5.8,pick:x,occluder:{center:t.clone(),radius:i*.98},labelsOutward:e.labelsOutward,settledQuaternion(){return o.getWorldQuaternion(new bn).multiply(new bn().setFromAxisAngle(D,S?C:s.rotation.y))},settle(){w=null,S&&(s.rotation.y=C)},update(e,t){if(h.uTime.value=e,y.visible=b.visible=h.uFlat.value<1,S&&w){w.t=Math.min(1,w.t+t/Vp);let e=w.t*w.t*w.t*(w.t*(w.t*6-15)+10);s.rotation.y=w.from+(w.to-w.from)*e,w.t>=1&&(w=null)}else S?s.rotation.y=pp(s.rotation.y,C,1.6,t):s.rotation.y+=t*.012;T=pp(T,E,5,t),_.uSelT.value=T},setFocused(n,r,i){if(S=n,w=null,!n||!r)return;let a=t.clone().negate().normalize(),c=r.clone().multiplyScalar(.72).add(a.multiplyScalar(.28)).normalize(),d=o.getWorldQuaternion(new bn).invert();c.applyQuaternion(d);let f=new q;l.forEach((e,t)=>e&&f.add(u[t]));let m=Math.atan2(c.x,c.z)-Math.atan2(f.x,f.z)+(e.spinOffset??0)*Math.PI/180,h=s.rotation.y;C=m+Math.PI*2*Math.round((h-m)/(Math.PI*2));let g=i?p(i):null;g&&(C=O(g.dir,Math.atan2(c.x,c.z),C))},turnTo(e,t){let n=p(e);if(!n||!S)return;let r=t.clone().applyQuaternion(o.getWorldQuaternion(new bn).invert()),i=O(n.dir,Math.atan2(r.x,r.z),C);i!==C&&(C=i,Hp?(w=null,s.rotation.y=i):w={from:s.rotation.y,to:i,t:0})},anchor(e,t=!1){let n=p(e);return n?k(n.dir,t&&S?C:s.rotation.y):null},placeView(e){let n=p(e);if(!n)return null;let{normal:r}=k(n.dir,C),a=t.clone().negate().normalize(),o=r.clone().multiplyScalar(.8).add(a.multiplyScalar(.3)).add(D.clone().multiplyScalar(.12)).normalize();return{target:t.clone().add(r.clone().multiplyScalar(i*.45)),dir:o,distance:i*3.1}},setSelected(e){let t=e?p(e):null;t&&(_.uSelP.value.copy(t.dir),_.uSelR.value=l.includes(e)?t.r*1.35:t.r),E=+!!t}}}var Wp={id:`thalassa`,radius:2.2,tilt:[0,0,0],relief:.3,air:[.32,.58,1],glow:[.28,.54,.98],decor:[],glsl:`
float heightOct(vec3 p, int octaves) {
  // Scattered natural islets...
  float h = fbm(p * 1.7 + vec3(3.1), octaves) * 0.6 - 0.44;
  // ...and the islands, a group of animals each, their coasts' noise scaled to their size.
  for (int i = 0; i < 12; i++) {
    if (i >= uIslN) break;
    float r = uIslR[i];
    float d = distance(p, uIsl[i]);
    if (d < r * 1.5) {
      float fall = 1.0 - d / r;
      float s = uIslSeed[i];
      float n = fbm(p / r + vec3(s, s * 1.7, s * 0.6), octaves);
      h = max(h, fall * 0.6 + n * 0.5 - 0.2);
    }
  }
  return h;
}

float height(vec3 p) {
  return heightOct(p, 6);
}

float landMask(float h, vec3 p) {
  return smoothstep(0.0, 0.01, h);
}

// Warm seas: wide turquoise shelves over reef and sand, deepening to a warm blue.
vec3 oceanColour(float h, vec3 p) {
  float depth = clamp(-h / 0.3, 0.0, 1.0);
  vec3 reef = vec3(0.05, 0.42, 0.38);
  vec3 shelf = vec3(0.02, 0.2, 0.28);
  vec3 deep = vec3(0.006, 0.045, 0.12);
  vec3 c = mix(reef, shelf, smoothstep(0.0, 0.2, depth));
  return mix(c, deep, smoothstep(0.25, 0.8, depth));
}

// Forest from the beaches up, in patches of deeper and lighter canopy; bare
// rock on the peaks, and a little snow only on the highest.
vec3 landColour(float h, vec3 p) {
  vec3 rainforest = vec3(0.022, 0.08, 0.028);
  vec3 canopy = vec3(0.055, 0.14, 0.04);
  vec3 beach = vec3(0.62, 0.57, 0.42);
  vec3 rock = vec3(0.24, 0.22, 0.18);
  vec3 snow = vec3(0.86, 0.89, 0.92);
  vec3 c = mix(rainforest, canopy, smoothstep(-0.2, 0.35, fbm(p * 16.0 + 5.0, 4)));
  // The canopy's fine texture, faded out where it's finer than a pixel.
  float fine = 1.0 - smoothstep(0.4, 1.2, length(fwidth(p)) * 140.0);
  c *= 1.0 + 0.3 * snoise(p * 140.0) * fine;
  c = mix(beach, c, smoothstep(0.004, 0.03, h));
  c = mix(c, rock, smoothstep(0.32, 0.45, h) * (0.6 + 0.4 * snoise(p * 40.0)));
  return mix(c, snow, smoothstep(0.55, 0.62, h));
}

// Tropical weather: scattered heaps of cloud, towering along the equator.
float cloudDensity(vec3 p, float t) {
  vec3 q = vec3(p.x * 1.8, p.y * 2.4, p.z * 1.8) + vec3(t * 0.003, 0.0, -t * 0.0015);
  vec3 warp = vec3(fbm(q + 4.0, 3), fbm(q + 9.0, 3), fbm(q + 17.0, 3));
  float c = fbm(q * 2.2 + warp * 0.6, 6);
  float doldrums = exp(-p.y * p.y / 0.012) * 0.14;
  return smoothstep(0.2, 0.55, c + doldrums) * 0.8;
}

#ifdef GLOBE_SURFACE
varying vec2 vLonLat;
${Tp}

// The sea chart: the shallows tinted, as a chart tints the water a ship must
// mind, and contoured round the shoals (the fathom lines); quiet land with a
// faint hill shade; a graticule. Pale ink on the sea's dark green.
vec3 chartColour(vec3 p, float h) {
  float hs = heightOct(p, 3); // smoother, for the depth contours
  float px = h / max(fwidth(h), 1e-6);
  float land = smoothstep(-0.5, 0.5, px);
  float coast = 1.0 - smoothstep(0.55, 1.45, abs(px));
  vec3 ink = vec3(0.6, 0.66, 0.66);
  vec3 c = mix(vec3(0.006, 0.021, 0.024), vec3(0.014, 0.046, 0.046), smoothstep(-0.15, -0.05, hs));
  float dc = lineAt(hs, -0.05, 0.8) * 0.5 + lineAt(hs, -0.12, 0.8) * 0.3;
  c = mix(c, vec3(0.26, 0.55, 0.5), dc * (1.0 - land) * 0.6);
  c = mix(c, ink, graticule(vLonLat, 30.0) * 0.045);
  c = mix(c, ink, lineAt(vLonLat.y, 0.0, 1.0) * 0.05);
  float up = smoothstep(0.02, 0.06, h);
  vec2 g = vec2(dFdx(h), dFdy(h));
  vec3 ground = vec3(0.030, 0.036, 0.034) + clamp((-g.y - g.x) * 40.0, -1.0, 1.0) * 0.008;
  ground = mix(ground, ink, gridPx(h * 8.0, 0.8) * up * 0.07);
  ground += vec3(0.012, 0.014, 0.012) * smoothstep(0.15, 0.45, h);
  c = mix(c, ground, land);
  return mix(c, ink, coast * 0.62);
}
#endif
`},Gp=()=>o(`thalassa`).flatMap(e=>e.island?[{id:`island:${l(e.name)}`,name:e.name,...e.island}]:[]),Kp=()=>(S(`thalassa`)?.decor??[]).map(e=>[e.lat,e.lon,e.size]),qp=()=>[...Gp().map(e=>({lat:e.lat,lon:e.lon,r:e.size,seed:kp(e.id.replace(/^island:/,``))})),...Kp().map(([e,t,n])=>({lat:e,lon:t,r:n,seed:kp(`${e},${t}`)}))].slice(0,12).map(e=>{let t=up(e.lat,e.lon);return{dir:[t.x,t.y,t.z],r:e.r,seed:e.seed}});function Jp(e,t,n){let r=wp(Wp.radius),i=Up({...Wp,decor:Kp(),sites:Gp(),unroll:{vertex:Cp(vp),uniforms:r}},e,t,n),a=Dp({frame:i.spin,center:e,radius:Wp.radius,projection:vp,uniforms:r,paper:[.01,.024,.022],settled:i.settledQuaternion});return{...i,map:a.map,update(e,t){i.update(e,t),a.update(t)}}}var Yp=e=>e-Math.floor(1/289*e)*289,Xp=e=>Yp((e*34+10)*e),Zp=Math.fround,Qp=Zp(.142857142857),$p=Zp(Qp*2),em=Zp(Zp(Qp*.5)-1);function tm(e,t,n){let r=1/6,i=1/3,a=(e+t+n)*i,o=Math.floor(e+a),s=Math.floor(t+a),c=Math.floor(n+a),l=(o+s+c)*r,u=[e-o+l,t-s+l,n-c+l],d=[+(u[0]>=u[1]),+(u[1]>=u[2]),+(u[2]>=u[0])],f=d.map(e=>1-e),p=[Math.min(d[0],f[2]),Math.min(d[1],f[0]),Math.min(d[2],f[1])],m=[Math.max(d[0],f[2]),Math.max(d[1],f[0]),Math.max(d[2],f[1])],h=[u,[u[0]-p[0]+r,u[1]-p[1]+r,u[2]-p[2]+r],[u[0]-m[0]+i,u[1]-m[1]+i,u[2]-m[2]+i],[u[0]-.5,u[1]-.5,u[2]-.5]];o=Yp(o),s=Yp(s),c=Yp(c);let g=[0,p[2],m[2],1],_=[0,p[1],m[1],1],v=[0,p[0],m[0],1],y=0;for(let e=0;e<4;e++){let t=Xp(Xp(Xp(c+g[e])+s+_[e])+o+v[e]),n=t-49*Math.floor(Zp(Zp(t*Qp)*Qp)),r=Math.floor(Zp(n*Qp)),i=Math.floor(n-7*r),a=r*$p+em,l=i*$p+em,u=1-Math.abs(a)-Math.abs(l),d=u<=0?-1:0,f=a+(Math.floor(a)*2+1)*d,p=l+(Math.floor(l)*2+1)*d,m=u,b=1.79284291400159-.85373472095314*(f*f+p*p+m*m);f*=b,p*=b,m*=b;let x=h[e],S=Math.max(.5-(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]),0);S*=S,y+=S*S*(f*x[0]+p*x[1]+m*x[2])}return 105*y}function nm(e,t,n,r){let i=0,a=.5;for(let o=0;o<r;o++)i+=a*tm(e,t,n),e=e*2.03+1.7,t=t*2.03+9.2,n=n*2.03+3.1,a*=.5;return i}var rm=(e,t)=>{let n=e*Math.PI/180,r=t*Math.PI/180;return[Math.cos(n)*Math.sin(r),Math.sin(n),Math.cos(n)*Math.cos(r)]},im=`http://www.w3.org/2000/svg`,am=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),om=e=>`rgba(143, 216, 238, ${e})`,sm=(e,t={})=>{let n=document.createElementNS(im,e);for(let[e,r]of Object.entries(t))n.setAttribute(e,String(r));return n},cm=e=>Math.log(Math.tan(Math.PI/4+e*Math.PI/360)),lm=e=>(2*Math.atan(Math.exp(e))-Math.PI/2)*(180/Math.PI);function um(e,t,n){let[r,i]=[e.lon,cm(e.lat)],[a,o]=[t.lon,cm(t.lat)],s=!1;for(let e=0;e<=1;e+=.004){let t={lat:lm(i+(o-i)*e),lon:r+(a-r)*e};if(!(n(t.lat,t.lon)>0))s=!0;else if(s)return t}return t}function dm(e,t,n,r,i,a){let o=e.extrasLayer,s=o.ownerSVGElement.parentElement,c=s,l=`thalassa-chart`,u=sm(`rect`),d=sm(`clipPath`,{id:l});d.append(u),o.ownerSVGElement.querySelector(`defs`).append(d);let f=sm(`g`,{"clip-path":`url(#${l})`}),p=sm(`g`,{class:`chart-frame`});o.append(f,p);let m=[[-2,154],[-44,-48]],h=m.map(()=>{let e=sm(`g`,{class:`rose`});for(let t=0;t<16;t++){let n=t/16*Math.PI*2;e.append(sm(`line`,{x1:0,y1:0,x2:Math.sin(n)*2600,y2:-Math.cos(n)*2600,stroke:om(t%4==0?.1:t%2==0?.07:.045),"stroke-width":.8}))}return fm(e,44),f.append(e),e}),g=new Map(n.filter(e=>e.id).map(e=>[e.id,e])),_=new Map(i.map(e=>[e.name,e])),v=e=>{let n=t.find(t=>t.id===e);return n&&n.anchor.kind===`surface`?{lat:n.anchor.lat,lon:n.anchor.lon}:null},y=[];for(let e of n){if(!e.parent||!g.has(e.parent))continue;let t=g.get(e.parent).at,n=e.island?_.get(e.island):null,r=e.at??(n?um(t,n,a):null);if(!r)continue;let i=sm(`line`,{class:`tree-lane`});f.append(i),y.push({line:i,a:t,b:r})}let b=[...g.values()].map(e=>{let t=!e.parent,n=sm(`circle`,{class:`tree-fork`,r:2.6});t||f.append(n);let r=null;return e.label&&(r=document.createElement(`p`),r.className=`fork${t?` is-root`:``}`,r.textContent=e.label,c.append(r)),{n:e,dot:n,label:r,root:t}}),x=r.flatMap(e=>{let t=v(e.from),n=e.to?v(e.to):e.island&&_.get(e.island)?um(t??{lat:0,lon:0},_.get(e.island),a):null;if(!t||!n)return[];let r=sm(`line`,{class:`kin-lane`});f.append(r);let i=document.createElement(`p`);return i.className=`fork is-kin`,i.textContent=e.label,c.append(i),[{line:r,a:t,b:n,label:i,toGallery:!!e.to}]}),S=2.5,C=[],w=0,T=e=>{for(;w<50&&(!e||e.timeRemaining()>2);){let e=-62+w*S;for(let t=0;t<360/S;t++){let n=Math.sin(w*12.9898+t*78.233)*43758.5453,r=Math.sin(w*39.346+t*11.135)*24634.6345,i=e+(r-Math.floor(r)-.5)*S*.6,o=-180+t*S+(n-Math.floor(n)-.5)*S*.6,s=a(i,o);s<-.05&&C.push({lat:i,lon:o,i:w,j:t,d:Math.round(-s*60)})}w++}w<50&&E()},E=()=>`requestIdleCallback`in window?requestIdleCallback(T,{timeout:2e3}):setTimeout(()=>T(),50);E();let D=[],O=e=>{for(;D.length<=e;){let e=document.createElement(`span`);e.className=`sounding`,s.append(e),D.push(e)}return D[e]},k=sm(`g`,{class:`chart-bars`});return p.append(k),{update({toScreen:e,width:t,height:n,keepClear:r,clear:i,place:a}){let o=e({lat:66,lon:-180}),s=e({lat:-66,lon:180});for(let[e,t]of Object.entries({x:o.x,y:o.y,width:Math.max(0,s.x-o.x),height:Math.max(0,s.y-o.y)}))u.setAttribute(e,String(t));m.forEach(([t,n],i)=>{let a=e({lat:t,lon:n});h[i].setAttribute(`transform`,`translate(${a.x.toFixed(1)} ${a.y.toFixed(1)})`),r({x0:a.x-50,y0:a.y-56,x1:a.x+50,y1:a.y+50})});for(let{line:t,a:n,b:r}of y){let i=e(n),a=e(r);for(let[e,n]of Object.entries({x1:i.x,y1:i.y,x2:a.x,y2:a.y}))t.setAttribute(e,n.toFixed(1))}let c=[];for(let t of x){let n=e(t.a),r=e(t.b),i=Math.hypot(r.x-n.x,r.y-n.y)||1,[a,o]=[(r.x-n.x)/i,(r.y-n.y)/i],s=t.toGallery?9:0;for(let[e,i]of Object.entries({x1:n.x+a*9,y1:n.y+o*9,x2:r.x-a*s,y2:r.y-o*s}))t.line.setAttribute(e,i.toFixed(1));c.push({label:t.label,x:(n.x+r.x)/2,y:(n.y+r.y)/2})}let l=(e,t,n,o)=>{let s=e.offsetWidth,c=e.offsetHeight;for(let[l,u]of o){let o={x0:t+l-s/2,y0:n+u-c/2,x1:t+l+s/2,y1:n+u+c/2};if(i(o)){e.classList.remove(`is-off`),a(e,t+l,n+u),r(o);return}}e.classList.add(`is-off`)};for(let t of b){let n=e(t.n.at);if(t.dot.setAttribute(`cx`,n.x.toFixed(1)),t.dot.setAttribute(`cy`,n.y.toFixed(1)),t.root||r({x0:n.x-5,y0:n.y-5,x1:n.x+5,y1:n.y+5}),!t.label)continue;if(t.root){t.label.classList.remove(`is-off`),a(t.label,n.x,n.y+62);continue}let o=t.label.offsetWidth,s=t.label.offsetHeight,c=null;for(let[e,t]of[[0,-12],[0,12],[o/2+8,0],[-o/2-8,0],[0,-26],[0,26]])if(i({x0:n.x+e-o/2,y0:n.y+t-s/2,x1:n.x+e+o/2,y1:n.y+t+s/2})){c={x:n.x+e,y:n.y+t};break}t.label.classList.toggle(`is-off`,!c),c&&(a(t.label,c.x,c.y),r({x0:c.x-o/2,y0:c.y-s/2,x1:c.x+o/2,y1:c.y+s/2}))}for(let e of c)l(e.label,e.x,e.y,[[0,-12],[0,12],[0,-24],[0,24],[0,0]]);let d=e({lat:0,lon:0}),f=e({lat:0,lon:S}),p=Math.max(1,Math.ceil(46/(Math.hypot(f.x-d.x,f.y-d.y)||1))),g=0;for(let r of C){if(r.i%p||r.j%p)continue;let o=e(r);if(o.x<0||o.x>t||o.y<0||o.y>n||!i({x0:o.x-8,y0:o.y-6,x1:o.x+8,y1:o.y+6}))continue;let s=O(g++);s.textContent!==String(r.d)&&(s.textContent=String(r.d)),s.classList.remove(`is-off`),a(s,o.x,o.y)}for(;g<D.length;g++)D[g].classList.add(`is-off`);let _=``,v=[];for(let t=-180,n=0;t<180;t+=10,n++){if(n%2)continue;let r=e({lat:0,lon:t}).x,i=e({lat:0,lon:t+10}).x;v.push(`M${r.toFixed(1)},${(o.y-5).toFixed(1)}H${i.toFixed(1)}V${o.y.toFixed(1)}H${r.toFixed(1)}Z`,`M${r.toFixed(1)},${s.y.toFixed(1)}H${i.toFixed(1)}V${(s.y+5).toFixed(1)}H${r.toFixed(1)}Z`)}let w=[-66,...Array.from({length:13},(e,t)=>-60+t*10),66];for(let t=0;t+1<w.length;t+=2){let n=e({lat:w[t+1],lon:0}).y,r=e({lat:w[t],lon:0}).y;v.push(`M${(o.x-5).toFixed(1)},${n.toFixed(1)}H${o.x.toFixed(1)}V${r.toFixed(1)}H${(o.x-5).toFixed(1)}Z`,`M${s.x.toFixed(1)},${n.toFixed(1)}H${(s.x+5).toFixed(1)}V${r.toFixed(1)}H${s.x.toFixed(1)}Z`)}_=`M${o.x.toFixed(1)},${o.y.toFixed(1)}H${s.x.toFixed(1)}V${s.y.toFixed(1)}H${o.x.toFixed(1)}Z M${(o.x-5).toFixed(1)},${(o.y-5).toFixed(1)}H${(s.x+5).toFixed(1)}V${(s.y+5).toFixed(1)}H${(o.x-5).toFixed(1)}Z`,k.innerHTML=`<path class="chart-rule" d="${_}" /><path class="chart-bar" d="${v.join(``)}" />`}}}function fm(e,t){e.append(sm(`circle`,{r:t,fill:`none`,stroke:om(.55),"stroke-width":1})),e.append(sm(`circle`,{r:t-5,fill:`none`,stroke:om(.35),"stroke-width":.7}));let n=``;for(let e=0;e<72;e++){let r=e/72*Math.PI*2,i=e%2==0?t-5:t-2.5;n+=`M${(Math.sin(r)*i).toFixed(2)},${(-Math.cos(r)*i).toFixed(2)}L${(Math.sin(r)*t).toFixed(2)},${(-Math.cos(r)*t).toFixed(2)}`}e.append(sm(`path`,{d:n,stroke:om(.45),"stroke-width":.6,fill:`none`}));for(let n=0;n<16;n++){let r=n/16*Math.PI*2,i=n%4==0?t-7:n%2==0?t*.62:t*.42,a=n%4==0?4.2:3,o=[[Math.sin(r)*i,-Math.cos(r)*i],[Math.sin(r+Math.PI/2)*a,-Math.cos(r+Math.PI/2)*a],[0,0],[Math.sin(r-Math.PI/2)*a,-Math.cos(r-Math.PI/2)*a]];e.append(sm(`polygon`,{points:o.map(e=>e.map(e=>e.toFixed(2)).join(`,`)).join(` `),fill:n===0?om(.8):n%4==0?om(.45):om(.22),stroke:om(.6),"stroke-width":.5}))}let r=sm(`text`,{x:0,y:-t-6,"text-anchor":`middle`,class:`rose-north`});r.textContent=`N`,e.append(r)}function pm(e){return(t,n)=>{let r=rm(t,n),i=nm(r[0]*1.7+3.1,r[1]*1.7+3.1,r[2]*1.7+3.1,4)*.6-.44;for(let t of e){let e=Math.hypot(r[0]-t.dir[0],r[1]-t.dir[1],r[2]-t.dir[2]);if(e<t.r*1.5){let n=1/t.r,a=nm(r[0]*n+t.seed,r[1]*n+t.seed*1.7,r[2]*n+t.seed*.6,4);i=Math.max(i,(1-e/t.r)*.6+a*.5-.2)}}return i}}function mm(e){let t=e.extrasLayer,n=t.ownerSVGElement.parentElement,r=[{centre:{lat:0,lon:0},top:{lat:89.9,lon:0},head:`Near side`,sub:`Facing Arda, real places`},{centre:{lat:0,lon:180},top:{lat:89.9,lon:180},head:`Far side`,sub:`Never seen from Arda, imagined places`}].map(e=>{let r=sm(`circle`,{class:`side-rim`});t.append(r);let i=document.createElement(`p`);return i.className=`side-head`,i.innerHTML=`<b>${am(e.head)}</b><span>${am(e.sub)}</span>`,n.append(i),{...e,rim:r,el:i}});return{update({toScreen:e,zoom:t,keepClear:n,place:i}){for(let a of r){let r=e(a.centre),o=e(a.top),s=Math.hypot(o.x-r.x,o.y-r.y);a.rim.setAttribute(`cx`,r.x.toFixed(1)),a.rim.setAttribute(`cy`,r.y.toFixed(1)),a.rim.setAttribute(`r`,(s+5).toFixed(1));let c=t<1.3;a.el.classList.toggle(`is-off`,!c),c&&(i(a.el,r.x,r.y-s-14),n({x0:r.x-140,y0:r.y-s-50,x1:r.x+140,y1:r.y-s-10}))}}}}function hm(e,t,n=()=>void 0){let r=sm(`g`,{class:`chart-bars`});e.extrasLayer.append(r);let i=e.extrasLayer,a=i.ownerSVGElement.parentElement,o=(t?.ports??[]).map(e=>{let t=sm(`path`,{class:`port-anchor`,d:`M0 -7 V7 M-4 -3.5 H4 M-6.5 2.5 C-5.5 6.5 -2.5 7.5 0 7.5 C2.5 7.5 5.5 6.5 6.5 2.5 M0 -7 m-2 -2 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0`});return i.append(t),{anchor:t,lanes:e.lanes.map(e=>{let t=sm(`path`,{class:`port-lane`}),r=sm(`path`,{class:`port-head`});i.append(t,r);let o=e.to??e.from,s=n(o),c=s?.moonOf?n(s.moonOf):void 0,l=document.createElement(`p`);return l.className=`port-label`,l.innerHTML=`<span>${e.from?`From`:`To`} ${am(s?.name??o)}</span>${c?`<em>another moon of ${am(c.name)}</em>`:``}`,a.append(l),{course:e.course.map(([e,t])=>({lat:e,lon:t})),line:t,head:r,label:l,arriving:!!e.from}})}}),s=e=>e.toFixed(1),c=e=>{let t=`M${s(e[0].x)},${s(e[0].y)}`;for(let n=0;n+1<e.length;n++){let r=e[Math.max(0,n-1)],i=e[n],a=e[n+1],o=e[Math.min(e.length-1,n+2)];t+=` C${s(i.x+(a.x-r.x)/6)},${s(i.y+(a.y-r.y)/6)} ${s(a.x-(o.x-i.x)/6)},${s(a.y-(o.y-i.y)/6)} ${s(a.x)},${s(a.y)}`}return t};return{update({toScreen:e,place:t}){let n=e({lat:75,lon:-180}),i=e({lat:-75,lon:180}),a=e=>e.toFixed(1),l=[];for(let t=-180,r=0;t<180;t+=30,r++){if(r%2)continue;let o=e({lat:0,lon:t}).x,s=e({lat:0,lon:t+30}).x;l.push(`M${a(o)},${a(n.y-5)}H${a(s)}V${a(n.y)}H${a(o)}Z`,`M${a(o)},${a(i.y)}H${a(s)}V${a(i.y+5)}H${a(o)}Z`)}let u=[-75,-60,-30,0,30,60,75];for(let t=0;t+1<u.length;t++){if(t%2==0)continue;let r=e({lat:u[t+1],lon:0}).y,o=e({lat:u[t],lon:0}).y;l.push(`M${a(n.x-5)},${a(r)}H${a(n.x)}V${a(o)}H${a(n.x-5)}Z`,`M${a(i.x)},${a(r)}H${a(i.x+5)}V${a(o)}H${a(i.x)}Z`)}let d=`M${a(n.x)},${a(n.y)}H${a(i.x)}V${a(i.y)}H${a(n.x)}Z M${a(n.x-5)},${a(n.y-5)}H${a(i.x+5)}V${a(i.y+5)}H${a(n.x-5)}Z`;r.innerHTML=`<path class="chart-rule" d="${d}" /><path class="chart-bar" d="${l.join(``)}" />`;for(let n of o)for(let[r,i]of n.lanes.entries()){let a=i.course.map(e);i.line.setAttribute(`d`,c(a));let o=a[a.length-1],l=a[a.length-2],u=Math.hypot(o.x-l.x,o.y-l.y)||1,d=(o.x-l.x)/u,f=(o.y-l.y)/u,p=a[0],m=a[1],h=Math.hypot(m.x-p.x,m.y-p.y)||1,g=(p.x-m.x)/h,_=(p.y-m.y)/h,[v,y,b,x]=i.arriving?[p.x-22*g,p.y-22*_,g,_]:[o.x,o.y,d,f];if(i.head.setAttribute(`d`,`M${s(v-9*b-5*x)},${s(y-9*x+5*b)} L${s(v)},${s(y)} L${s(v-9*b+5*x)},${s(y-9*x-5*b)}`),t(i.label,o.x+16*d,o.y+16*f),r===0){let e=a[1],t=a[0],r=Math.hypot(e.x-t.x,e.y-t.y)||1;n.anchor.setAttribute(`transform`,`translate(${s(t.x+16*(e.x-t.x)/r+6)},${s(t.y+16*(e.y-t.y)/r+12)})`)}}}}}var gm=1.340264,_m=-.081106,vm=893e-6,ym=.003796,bm=Math.sqrt(3)/2,xm=[2.7066,1.3174];function Sm([e,t]){let n=Math.asin(bm*Math.sin(t)),r=n*n,i=r*r*r;return[e*Math.cos(n)/(bm*(gm+3*_m*r+i*(7*vm+9*ym*r))),n*(gm+_m*r+i*(vm+ym*r))]}function Cm([e,t]){let n=t;for(let e=0;e<12;e++){let e=n*n,r=e*e*e,i=(n*(gm+_m*e+r*(vm+ym*e))-t)/(gm+3*_m*e+r*(7*vm+9*ym*e));if(n-=i,Math.abs(i)<1e-12)break}let r=n*n,i=r*r*r;return[bm*e*(gm+3*_m*r+i*(7*vm+9*ym*r))/Math.cos(n),Math.asin(Math.sin(n)/bm)]}function wm([e,t],[n,r]){let i=e-n,a=Math.sin(r)*Math.sin(t)+Math.cos(r)*Math.cos(t)*Math.cos(i),o=Math.acos(Math.max(-1,Math.min(1,a))),s=o<1e-6?1:o/Math.max(Math.sin(o),1e-4);return[s*Math.cos(t)*Math.sin(i),s*(Math.cos(r)*Math.sin(t)-Math.sin(r)*Math.cos(t)*Math.cos(i))]}function Tm([e,t],[n,r]){let i=Math.hypot(e,t);if(i<1e-9)return[n,r];let a=i,o=Math.asin(Math.cos(a)*Math.sin(r)+t*Math.sin(a)*Math.cos(r)/i);return[n+Math.atan2(e*Math.sin(a),i*Math.cos(r)*Math.cos(a)-t*Math.sin(r)*Math.sin(a)),o]}var Em=e=>{let t=Math.max(0,Math.min(1,(e-1.25)/1.25));return t*t*(3-2*t)};function Dm(e,t,n){let r=Sm(e),i=Sm(t);if(n<=0)return[r[0]-i[0],r[1]-i[1]];let a=wm(e,t);return[r[0]-i[0]+(a[0]-r[0]+i[0])*n,r[1]-i[1]+(a[1]-r[1]+i[1])*n]}var Om=e=>e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI)),km=e=>Math.max(-1.55,Math.min(1.55,e));function Am(e,t,n){let r=[n[0],n[1]],i=1e-6;for(let n=0;n<6;n++){let n=e(r),a=n[0]-t[0],o=n[1]-t[1];if(Math.abs(a)+Math.abs(o)<1e-10)break;let s=e([r[0]+i,r[1]]),c=e([r[0],r[1]+i]),l=(s[0]-n[0])/i,u=(s[1]-n[1])/i,d=(c[0]-n[0])/i,f=(c[1]-n[1])/i,p=l*f-d*u;if(Math.abs(p)<1e-12)break;r=[Om(r[0]-(f*a-d*o)/p),km(r[1]-(-u*a+l*o)/p)]}return r}function jm(e,t,n){let r=Sm(t);return Am(e=>Dm(e,t,n),e,n<.5?Cm([r[0]+e[0],r[1]+e[1]]):Tm(e,t))}function Mm(e,t,n,r){let i=Sm(e);return r<=0?Cm([Math.max(-xm[0],Math.min(xm[0],i[0]-t[0])),Math.max(-xm[1]*.98,Math.min(xm[1]*.98,i[1]-t[1]))]):Am(t=>Dm(e,t,r),t,n)}var Nm=`
vec2 equalEarth(vec2 ll) {
  float l = asin(${bm.toFixed(7)} * sin(ll.y));
  float l2 = l * l;
  float l6 = l2 * l2 * l2;
  return vec2(
    ll.x * cos(l) / (${bm.toFixed(7)} * (${gm} + 3.0 * ${_m} * l2 + l6 * (7.0 * ${vm} + 9.0 * ${ym} * l2))),
    l * (${gm} + ${_m} * l2 + l6 * (${vm} + ${ym} * l2)));
}

vec2 azimuthal(vec2 ll, vec2 c) {
  float dl = ll.x - c.x;
  float cosc = sin(c.y) * sin(ll.y) + cos(c.y) * cos(ll.y) * cos(dl);
  float a = acos(clamp(cosc, -1.0, 1.0));
  float k = a < 1e-6 ? 1.0 : a / max(sin(a), 1e-4);
  return k * vec2(cos(ll.y) * sin(dl), cos(c.y) * sin(ll.y) - sin(c.y) * cos(ll.y) * cos(dl));
}

vec2 mapProject(vec2 ll, vec2 c, float local) {
  vec2 e = equalEarth(ll) - equalEarth(c);
  return local > 0.0 ? mix(e, azimuthal(ll, c), local) : e;
}
`;function Pm(e=8){let t=[];for(let n of document.querySelectorAll(`[data-keep-clear]`)){let r=n.getBoundingClientRect();r.width&&r.height&&t.push({x0:r.left-e,y0:r.top-e,x1:r.right+e,y1:r.bottom+e})}return t}var Fm=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Im=`http://www.w3.org/2000/svg`,Lm=G.degToRad,Rm=G.radToDeg,zm={arda:{namesFrom:2.2,regionsUntil:3.2,waters:[[`North Atlantic Ocean`,30,-40,0,5],[`South Atlantic Ocean`,-28,-16,0,5],[`Indian Ocean`,-22,78,0,5],[`North Pacific Ocean`,28,-150,0,5],[`South Pacific Ocean`,-28,-125,0,5],[`Arctic Ocean`,84,-10,0,4],[`Southern Ocean`,-61,30,0,4],[`Norwegian Sea`,69,1,2.5,30],[`North Sea`,56.5,3.5,3,30],[`Greenland Sea`,75,-8,2.5,30],[`Barents Sea`,74.5,38,2.5,30],[`Mediterranean Sea`,34.5,18,2.5,30],[`Arabian Sea`,15,64,2.5,30],[`Caribbean Sea`,15,-75,2.5,30],[`Gulf of Mexico`,25,-90,2.5,30],[`Bay of Bengal`,15,88,2.5,30],[`Labrador Sea`,58,-55,2.5,30]],counts:[`place`,`places`],routeNote:e=>`a trip in ${e.parts.length} parts`,placed:!0,clusters:!0,sides:[`right`,`left`,`below`,`above`,`above-right`,`below-right`,`above-left`,`below-left`]},thalassa:{namesFrom:2.2,counts:[`gallery`,`galleries`],paper:`#02100e`},ithil:{namesFrom:2,waters:[[`Sea of Rains`,33,-16,0,30],[`Ocean of Storms`,15,-58,0,30],[`Sea of Serenity`,28,17,0,30],[`Sea of Clouds`,-21,-17,0,30],[`Sea of Moscow`,27,148,0,30]],counts:[`painting`,`paintings`],paper:`#0c0c11`},quantum:{crossings:!0}},Bm=e=>({namesFrom:2,regionsUntil:1/0,waters:[],counts:[`piece`,`pieces`],routeNote:e=>`a route in ${e.parts.length} parts`,paper:S(e)?.moonOf===`theoria`?`#0b1220`:`#0b0f14`,placed:!0,sides:[`right`,`left`],legs:`great`,bounded:!1,crossings:!1,clusters:!1,...S(e)?.moonOf===`theoria`?{namesFrom:0,sides:[`right`,`left`,`below`,`above`,`above-right`,`below-right`,`above-left`,`below-left`],legs:`straight`,bounded:!0}:{},...zm[e]}),Vm=42,Hm=36,Um=20,Wm=new q,Gm=new q;function Km(e,t,n){let r=new q().setFromSphericalCoords(1,Math.PI/2-Lm(e.lat),Lm(e.lon)),i=new q().setFromSphericalCoords(1,Math.PI/2-Lm(t.lat),Lm(t.lon)),a=r.angleTo(i),o=[];for(let e=0;e<=n;e++){let t=e/n,s=a<1e-6?r.clone():r.clone().multiplyScalar(Math.sin((1-t)*a)/Math.sin(a)).addScaledVector(i,Math.sin(t*a)/Math.sin(a));o.push({lat:Rm(Math.asin(G.clamp(s.y,-1,1))),lon:Rm(Math.atan2(s.x,s.z))})}return o}function qm(e,t,n){return Array.from({length:n+1},(r,i)=>({lat:e.lat+(t.lat-e.lat)*i/n,lon:e.lon+(t.lon-e.lon)*i/n}))}function Jm(e){let t=new q,n=e.map(e=>new q().setFromSphericalCoords(1,Math.PI/2-Lm(e.lat),Lm(e.lon)));for(let e of n)t.add(e);return t.normalize(),{centre:{lat:Rm(Math.asin(G.clamp(t.y,-1,1))),lon:Rm(Math.atan2(t.x,t.z))},radius:Math.max(0,...n.map(e=>e.angleTo(t)))}}var Ym=e=>e.anchor.kind===`surface`?{lat:e.anchor.lat,lon:e.anchor.lon}:null,Xm=class{root;map;world;svg;style;marks=[];journeys=[];heads=[];waters=[];painted=[];clusters=[];merged=[];legs=null;handlers;active=null;hover=null;region=null;lens=new Set;read=new Set;found=null;shown=!1;sizes=new Map;boxes=[];extras=null;constructor(e,t,n,r,i,o,s){this.root=e,this.map=t,this.world=n,this.style=Bm(n),this.handlers=s,e.innerHTML=``,e.style.setProperty(`--chart-paper`,this.style.paper),e.dataset.world=n,this.svg=document.createElementNS(Im,`svg`),this.svg.classList.add(`chart-svg`),this.svg.innerHTML=`<defs>
      <marker id="journey-end-${n}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M1,1.5 L8,5 L1,8.5" fill="none" stroke="currentColor" stroke-width="1.4" />
      </marker></defs><g class="map-extras"></g>`,e.appendChild(this.svg);for(let[t,r,i,a,o]of this.style.waters){let s=document.createElement(`p`);s.className=`chart-note map-water${n===`arda`?``:` is-faint`}`,s.textContent=t,e.appendChild(s),this.waters.push({el:s,at:{lat:r,lon:i},from:a,until:o})}for(let t of i){let i=r.filter(e=>e.region===t.name).map(Ym).filter(e=>!!e),a=o.filter(e=>e.region===t.name);if(!i.length&&!t.at)continue;let c=document.createElement(`button`);c.className=`map-region`;let[u,d]=this.style.counts,f=a.some(e=>e.parts.some(e=>!e.place))&&S(n)?.moonOf?a.map(e=>`${e.parts.filter(e=>e.place).length} of ${e.parts.length} written`).join(`; `):i.length?`${i.length} ${i.length===1?u:d}`:`Still to come`;if(c.innerHTML=`<span class="mr-name">${Fm(t.name.replace(/^The /,this.style.placed?``:`The `))}</span><span class="mr-count">${Fm(f)}</span>`,c.addEventListener(`click`,()=>s.onRegionClick(l(t.name))),e.appendChild(c),t.at){c.dataset.side=`centre`,this.heads.push({region:t,el:c,at:t.at});continue}let{centre:p}=Jm(i),m=p.lat>0;c.dataset.side=this.style.placed?`centre`:m?`below`:`above`,this.heads.push({region:t,el:c,at:this.style.placed?p:{lat:m?Math.min(...i.map(e=>e.lat)):Math.max(...i.map(e=>e.lat)),lon:p.lon}})}for(let t of o){let n=[];if(t.parts.forEach((e,t)=>{let i=e.place?r.find(t=>t.id===e.place):void 0,a=(i&&Ym(i))??(e.at&&`lat`in e.at?e.at:null);a&&n.push({...a,place:i,part:t+1,title:e.title,sea:e.by===`sea`})}),n.length<2)continue;let i=n.findIndex(e=>!e.place),a=e=>{let t=document.createElementNS(Im,`path`);return t.setAttribute(`class`,e),this.svg.appendChild(t),t},o=a(`route-casing`),s=a(this.style.crossings?`route-line is-crossing`:`route-line`),c=a(`route-line is-crossing`),l=a(`route-planned`),u=a(`route-ticks`),d=document.createElement(`p`);d.className=`route-label`,d.dataset.side=`below`,d.innerHTML=`<span>${Fm(ie(t))}</span><em>${Fm(this.style.routeNote(t))}</em>`,e.appendChild(d);let f=n.filter(e=>!e.place).map(t=>{let n=document.createElement(`span`);return n.className=`route-stop`,n.textContent=String(t.part),n.title=`Part ${t.part}: ${t.title} (still to come)`,e.appendChild(n),n});this.journeys.push({series:t,stops:n,written:i<0?n.length:i,casing:o,line:s,sea:c,planned:l,ticks:u,label:d,plannedMarks:f})}for(let t of r){let n=Ym(t);if(!n)continue;let r=document.createElement(`button`);r.className=`settle`,r.dataset.place=t.id;let i=t.series?.part;r.innerHTML=`<span class="settle-mark">${i??``}</span><span class="settle-name">${Fm(t.name)}${t.gallery?`<small>${Fm(c(t))}</small>`:``}</span>`,r.setAttribute(`aria-label`,`${t.name}: ${t.gallery?c(t):t.title}`),r.classList.toggle(`is-stop`,!!i),r.classList.toggle(`is-empty`,!!t.gallery&&!d(t).length),r.addEventListener(`click`,()=>s.onPlaceClick(t.id)),r.addEventListener(`pointerenter`,e=>e.pointerType===`mouse`&&s.onPlaceHover(t.id)),r.addEventListener(`pointerleave`,e=>e.pointerType===`mouse`&&s.onPlaceHover(null)),r.addEventListener(`focus`,()=>s.onPlaceHover(t.id)),r.addEventListener(`blur`,()=>s.onPlaceHover(null)),e.appendChild(r),this.marks.push({place:t,el:r,name:r.querySelector(`.settle-name`),at:n,side:`right`})}if(this.style.clusters){for(let e of i)for(let t of h(n,e.name)){let n=this.marks.filter(n=>n.place.region===e.name&&n.place.area===t.name);n.length>=2&&this.clusters.push(this.cluster(t.name,e.name,!1,n,s))}this.legs=document.createElementNS(Im,`path`),this.legs.setAttribute(`class`,`spider-legs`),this.svg.appendChild(this.legs)}if(n===`arda`)for(let t of M.filter(e=>e.world===`ithil`&&e.painting?.at)){let n=document.createElement(`a`);n.className=`painted`,n.href=`#/w/ithil/${t.id}`,n.innerHTML=`<svg class="painted-mark" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.2 9.8 C3.4 9.6 4 8.6 4.6 7.8 L8.9 2.4 C9.4 1.8 10.3 2.6 9.8 3.2 L5.6 8.6 C5 9.4 4 10.4 2.2 9.8 Z" /></svg><span class="painted-name">${Fm(t.title)}<em>${a(t.painting.medium).here} here, on Ithil</em></span>`,n.setAttribute(`aria-label`,`${t.title}: ${a(t.painting.medium).here.toLowerCase()} here; see it on Ithil`),e.insertBefore(n,this.marks[0]?.el??null),this.painted.push({place:t,el:n,at:t.painting.at})}}cluster(e,t,n,r,i){let a=document.createElement(`button`);a.className=`map-cluster${n?` is-region`:``}`;let[o,s]=this.style.counts;return a.innerHTML=`<span class="mc-ring">${r.length}</span><span class="mc-name">${Fm(e)}</span>`,a.setAttribute(`aria-label`,`${e}: ${r.length} ${r.length===1?o:s}`),a.title=`${e}: ${r.length} ${r.length===1?o:s}`,a.addEventListener(`click`,()=>i.onRegionClick(l(e))),this.root.appendChild(a),{name:e,region:t,isRegion:n,members:r,el:a,at:Jm(r.map(e=>e.at)).centre}}gather(e,t,n){let r=new Set,i=[],a=new Set;if(!this.style.clusters)return{gathered:r,rings:i,fanned:a};let o=e=>this.active===e.place.id||this.hover===e.place.id,s=[],c=new Set(this.marks),l=``;for(let r of this.clusters){for(let e of r.members)c.delete(e);r.el.classList.add(`is-off`);let i=t(r.at),u=Math.max(...r.members.map(t=>Math.hypot(e.get(t).x-i.x,e.get(t).y-i.y)));if(this.region===r.name||r.members.some(o)){let t=r.members.map(t=>e.get(t)),i=r.members.map((e,t)=>t),o=e=>i[e]===e?e:i[e]=o(i[e]);t.forEach((e,n)=>t.forEach((t,r)=>r>n&&Math.hypot(e.x-t.x,e.y-t.y)<Um&&(i[o(r)]=o(n))));for(let s of new Set(i.map((e,t)=>o(t)))){let c=i.flatMap((e,t)=>o(t)===s?[t]:[]);if(c.length<2)continue;let u={x:c.reduce((e,n)=>e+t[n].x,0)/c.length,y:c.reduce((e,n)=>e+t[n].y,0)/c.length},d=e=>Math.atan2(t[e].y-u.y,t[e].x-u.x);c.sort((e,t)=>d(e)-d(t));let f=Math.max(22,c.length*9),p=this.marks.filter(e=>!c.some(t=>r.members[t]===e)).map(t=>e.get(t)),m=(e,t)=>{let n=d(c[0])+e+t*2*Math.PI/c.length;return{x:u.x+f*Math.cos(n),y:u.y+f*Math.sin(n)}},h=e=>Math.min(1/0,...c.flatMap((t,n)=>p.map(t=>Math.hypot(m(e,n).x-t.x,m(e,n).y-t.y)))),g=0;for(let e=1;e<12;e++)h(e*Math.PI/6)>h(g)+4&&(g=e*Math.PI/6);c.forEach((i,o)=>{let s=d(c[0])+g+o*2*Math.PI/c.length,p=r.members[i],m=u.x+f*Math.cos(s),h=u.y+f*Math.sin(s);l+=`M${t[i].x.toFixed(1)},${t[i].y.toFixed(1)}L${m.toFixed(1)},${h.toFixed(1)}`,e.set(p,{x:m,y:h}),a.add(p),n(p.el,m,h)})}continue}if(u<Vm)s.push({...i,marks:r.members,area:r});else for(let t of r.members)s.push({...e.get(t),marks:[t],area:null})}for(let t of c)s.push({...e.get(t),marks:[t],area:null});this.legs?.setAttribute(`d`,l),s.sort((e,t)=>t.marks.length-e.marks.length);let u=[];for(let e of s){let t=u.find(t=>Math.hypot(t[0].x-e.x,t[0].y-e.y)<Hm);t?t.push(e):u.push([e])}let d=0,[f,p]=this.style.counts;for(let e of u){if(e.length===1){let t=e[0];if(!t.area)continue;t.area.el.classList.remove(`is-off`),n(t.area.el,t.x,t.y),i.push({el:t.area.el,x:t.x,y:t.y,key:``});for(let e of t.marks)r.add(e);continue}let t=e.flatMap(e=>e.marks);for(let e of t)r.add(e);let a=t.length,o=e.reduce((e,t)=>e+t.x*t.marks.length,0)/a,s=e.reduce((e,t)=>e+t.y*t.marks.length,0)/a,c=[...new Set(t.map(e=>e.place.region))],l=c.length===1&&this.marks.filter(e=>e.place.region===c[0]).length===a,u=[...new Set(t.map(e=>e.place.area??e.place.name))],m=l?``:u.length===2?`${u[0]} and ${u[1].replace(/^The /,`the `)}`:``,h=this.mergedRing(d++);h.marks=t,h.ring.textContent=String(a),h.name.textContent=m,h.el.classList.toggle(`is-region`,l),h.el.classList.remove(`is-off`);let g=l?c[0]:m||`${a} ${p}`;h.el.setAttribute(`aria-label`,`${g}: ${a} ${a===1?f:p}`),h.el.title=`${g}: ${a} ${a===1?f:p}`,h.el.dataset.region=l?c[0]:``,n(h.el,o,s),i.push({el:h.el,x:o,y:s,key:`${a}:${m}`})}for(let e=d;e<this.merged.length;e++)this.merged[e].el.classList.add(`is-off`);for(let e of[...this.clusters.map(e=>({el:e.el,marks:e.members})),...this.merged.slice(0,d)])e.el.classList.toggle(`is-dim`,(this.lens.size>0||!!this.found)&&!e.marks.some(e=>this.matches(e.place))),e.el.classList.toggle(`is-lit`,e.marks.some(e=>this.lit(e.place)));for(let e of this.clusters)e.el.classList.toggle(`is-current`,this.region===e.name);for(let e of this.marks)e.el.classList.toggle(`is-clustered`,r.has(e));return{gathered:r,rings:i,fanned:a}}clearOf(e,t,n,r=``){let i=this.sizeOf(e,r),a={x0:t+14,y0:n-10,x1:t-16+Math.max(32,i.w),y1:n+10},o=a.x1<=a.x0+1||this.overlap(a,1e6,1e6)<40;e.classList.toggle(`is-unnamed`,!o),this.boxes.push({x0:t-16,y0:n-16,x1:t+16,y1:n+16}),o&&this.boxes.push(a)}mergedRing(e){if(this.merged[e])return this.merged[e];let t=document.createElement(`button`);t.className=`map-cluster is-merged`,t.innerHTML=`<span class="mc-ring"></span><span class="mc-name"></span>`;let n={el:t,ring:t.querySelector(`.mc-ring`),name:t.querySelector(`.mc-name`),marks:[]};return t.addEventListener(`click`,()=>{if(t.dataset.region)return this.handlers.onRegionClick(l(t.dataset.region));this.map.around&&this.map.goTo(this.map.around(n.marks.map(e=>e.at)))}),this.root.appendChild(t),this.merged.push(n),n}get extrasLayer(){return this.svg.querySelector(`.map-extras`)}setActive(e){this.active=e}setHover(e){this.hover=e}setRegion(e){this.region=e}setLens(e){this.lens=new Set(e)}setRead(e){this.read=e}setFound(e){this.found=e}matches(e){return(!this.lens.size||(e.tags??[]).some(e=>this.lens.has(e)))&&(!this.found||this.found.has(`${e.world}/${e.id}`))}lit(e){return(this.lens.size>0||!!this.found)&&this.matches(e)}sizeOf(e,t=``){let n=this.sizes.get(e);if(n&&n.key===t&&n.w>0)return n;let r={w:e.offsetWidth,h:e.offsetHeight,key:t};return this.sizes.set(e,r),r}overlap(e,t,n){let r=e.x0<4||e.x1>t-4||e.y0<4||e.y1>n-4?1e6:0;for(let t of this.boxes)r+=Math.max(0,Math.min(e.x1,t.x1)-Math.max(e.x0,t.x0))*Math.max(0,Math.min(e.y1,t.y1)-Math.max(e.y0,t.y0));return r}update(e,t,n){let r=this.map.chart,i=r>.02;if(i!==this.shown&&(this.shown=i,this.root.hidden=!i),!i)return;let a=this.map.view.zoom,o=this.style;this.root.style.opacity=Math.min(1,r*1.4-.4).toFixed(3),this.root.classList.toggle(`is-interactive`,r>.6),this.root.classList.toggle(`is-far`,a<o.namesFrom),this.root.classList.toggle(`is-whole`,a<1.6),this.svg.setAttribute(`viewBox`,`0 0 ${t} ${n}`);let s=r=>(Wm.copy(this.map.point(r.lat,r.lon,Gm)).project(e),{x:(Wm.x*.5+.5)*t,y:(-Wm.y*.5+.5)*n}),c=(e,t,n)=>{e.style.transform=`translate3d(${t.toFixed(1)}px, ${n.toFixed(1)}px, 0)`};this.boxes=Pm();let l=e=>this.boxes.push(e),u=o.placed,d=new Map;for(let e of this.marks){let t=s(e.at);d.set(e,t),c(e.el,t.x,t.y);let n=e.place.id;e.el.classList.toggle(`is-active`,this.active===n),e.el.classList.toggle(`is-hover`,this.hover===n),e.el.classList.toggle(`is-dim`,!this.matches(e.place)),e.el.classList.toggle(`is-lit`,this.lit(e.place)),e.el.classList.toggle(`is-read`,this.read.has(n))}let{gathered:f,rings:p,fanned:m}=this.gather(d,s,c),h=new Set([...f].map(e=>e.place.id));if(u)for(let e of this.marks){if(f.has(e))continue;let t=d.get(e),n=e.el.classList.contains(`is-stop`)?11:8;l({x0:t.x-n,y0:t.y-n,x1:t.x+n,y1:t.y+n})}for(let e of p)this.clearOf(e.el,e.x,e.y,e.key);for(let e of this.journeys){let t=[],n=``,r=(r,i,a)=>{let c=``,l=!1;for(let u=r;u<i;u++){let r=(o.legs===`straight`?qm:Km)(e.stops[u],e.stops[u+1],16).map(s),i=r.map((e,t)=>`${t===0?`M`:`L`}${e.x.toFixed(1)},${e.y.toFixed(1)}`).join(` `);if(a&&e.stops[u+1].sea){n+=`${i} `,l=!1;continue}t.push(r),c+=(l?i.replace(/^M/,`L`):i)+` `,l=!0}return c.trim()},i=e.stops.length-1,d=r(0,e.written-1,!0),f=e.written-1<i?r(e.written-1,i,!1):``;n=n.trim(),e.casing.setAttribute(`d`,`${d} ${n} ${f}`.trim()),e.line.setAttribute(`d`,d),e.sea.setAttribute(`d`,n),e.planned.setAttribute(`d`,f);let p=`url(#journey-end-${this.world})`,m=!f&&!!e.stops[i].sea;if(e.line.setAttribute(`marker-end`,f||m?``:p),e.sea.setAttribute(`marker-end`,m?p:``),e.planned.setAttribute(`marker-end`,f?p:``),u&&S(this.world)?.moonOf&&!o.crossings){let n=``;for(let e of t){let t=0;for(let r=1;r<e.length;r++){let i=e[r-1],a=e[r],o=Math.hypot(a.x-i.x,a.y-i.y);if(o<.001)continue;let s=-(a.y-i.y)/o,c=(a.x-i.x)/o;for(let e=14-t;e<o;e+=14){let t=i.x+(a.x-i.x)*e/o,r=i.y+(a.y-i.y)*e/o;n+=`M${(t-s*3).toFixed(1)},${(r-c*3).toFixed(1)}L${(t+s*3).toFixed(1)},${(r+c*3).toFixed(1)}`}t=(t+o)%14}}e.ticks.setAttribute(`d`,n)}let g=(this.lens.size>0||!!this.found)&&!e.stops.some(e=>e.place&&this.matches(e.place)),_=e.stops.every(e=>!e.place||h.has(e.place.id));for(let t of[e.casing,e.line,e.sea,e.planned,e.ticks])t.classList.toggle(`is-dim`,g),t.classList.toggle(`is-off`,_);e.label.classList.toggle(`is-dim`,g);for(let t of e.plannedMarks)t.classList.toggle(`is-dim`,g);e.label.classList.toggle(`is-off`,a<o.namesFrom||_);let v=s(e.stops.reduce((e,t)=>t.lat<e.lat?t:e));if(c(e.label,v.x,v.y+18),u&&a>=o.namesFrom){let t=this.sizeOf(e.label);l({x0:v.x-t.w/2,y0:v.y+18,x1:v.x+t.w/2,y1:v.y+18+t.h})}let y=0;for(let t of e.stops){if(t.place)continue;let n=s(t);c(e.plannedMarks[y++],n.x,n.y),u&&l({x0:n.x-10,y0:n.y-10,x1:n.x+10,y1:n.y+10})}}if(u&&a>=o.namesFrom){if(o.bounded){let e=s({lat:75,lon:-180}),t=s({lat:-75,lon:180}),n=1e5;for(let r of[{x0:-1e5,y0:-1e5,x1:n,y1:e.y},{x0:-1e5,y0:t.y,x1:n,y1:n},{x0:-1e5,y0:-1e5,x1:e.x,y1:n},{x0:t.x,y0:-1e5,x1:n,y1:n}])l(r)}let e=[...this.marks].sort((e,t)=>+m.has(t)-m.has(e)||(e.place.series?.part??1e9)-(t.place.series?.part??1e9));for(let r of e){if(f.has(r))continue;let e=d.get(r),i=this.sizeOf(r.name),a=r.el.classList.contains(`is-stop`),s=a?14:10,c=a?9.5:5.5,u={right:{x0:e.x+s,y0:e.y-i.h/2,x1:e.x+s+i.w,y1:e.y+i.h/2},left:{x0:e.x-s-i.w,y0:e.y-i.h/2,x1:e.x-s,y1:e.y+i.h/2},below:{x0:e.x-i.w/2,y0:e.y+c+2,x1:e.x+i.w/2,y1:e.y+c+2+i.h},above:{x0:e.x-i.w/2,y0:e.y-c-2-i.h,x1:e.x+i.w/2,y1:e.y-c-2},"above-right":{x0:e.x+s-4,y0:e.y-5-i.h,x1:e.x+s-4+i.w,y1:e.y-5},"below-right":{x0:e.x+s-4,y0:e.y+5,x1:e.x+s-4+i.w,y1:e.y+5+i.h},"above-left":{x0:e.x-s+4-i.w,y0:e.y-5-i.h,x1:e.x-s+4,y1:e.y-5},"below-left":{x0:e.x-s+4-i.w,y0:e.y+5,x1:e.x-s+4,y1:e.y+5+i.h}},p=this.overlap(u[r.side],t,n),h=r.side,g=p;for(let e of o.sides){let r=this.overlap(u[e],t,n);r<g&&([g,h]=[r,e])}let _=o.bounded?o.sides.find(e=>this.overlap(u[e],t,n)===0):void 0;_&&(p>0||o.sides.indexOf(_)<o.sides.indexOf(r.side))?r.side=_:g+40<p&&(r.side=h),r.el.dataset.side=r.side;let v=u[r.side],y=this.overlap(v,t,n)<60||this.active===r.place.id||this.hover===r.place.id||m.has(r);r.el.classList.toggle(`is-unnamed`,!y),y&&l(v)}}for(let e of this.heads){e.el.classList.toggle(`is-off`,a>=o.regionsUntil),e.el.classList.toggle(`is-current`,this.region===e.region.name);let r=s(e.at);if(!u){c(e.el,r.x,r.y+(e.el.dataset.side===`below`?22:-22));continue}if(a>=o.regionsUntil)continue;let i=this.sizeOf(e.el,a<1.6?`whole`:`close`),d={x:r.x,y:r.y},f=1/0;for(let e of o.bounded?[0,14,26,40,56,72,90,110]:[0,14,26,40,56]){for(let[a,o]of e===0?[[0,0]]:[[0,-e],[0,e],[e*1.6,0],[-e*1.6,0],[e,-e],[-e,-e],[e,e],[-e,e]]){let e={x0:r.x+a-i.w/2,y0:r.y+o-i.h/2,x1:r.x+a+i.w/2,y1:r.y+o+i.h/2},s=this.overlap(e,t,n);if(s<f&&([f,d]=[s,{x:r.x+a,y:r.y+o}]),s===0)break}if(f===0)break}let p=f>0&&a>=o.namesFrom;e.el.classList.toggle(`is-off`,p),!p&&(c(e.el,d.x,d.y),l({x0:d.x-i.w/2,y0:d.y-i.h/2,x1:d.x+i.w/2,y1:d.y+i.h/2}))}for(let e of this.waters){let r=a>=e.from&&a<e.until,i=s(e.at);if(r&&u){let a=this.sizeOf(e.el),o={x0:i.x-a.w/2,y0:i.y-a.h/2,x1:i.x+a.w/2,y1:i.y+a.h/2};r=this.overlap(o,t,n)===0,r&&l(o)}e.el.classList.toggle(`is-off`,!r),r&&c(e.el,i.x,i.y)}for(let e of this.painted){let t=s(e.at);c(e.el,t.x+9,t.y-9),e.el.classList.toggle(`is-dim`,this.lens.size>0||!!this.found);let n=e.place.painting?.of?.split(`/`)[1];e.el.classList.toggle(`is-off`,!!n&&h.has(n))}this.extras?.update({toScreen:s,zoom:a,width:t,height:n,keepClear:l,clear:e=>this.overlap(e,t,n)===0,place:c})}},Zm=2.4,Qm=[.9,24],$m={id:`arda`,radius:Zm,tilt:[0,0,0],relief:.015,reliefNormal:!0,air:[.34,.6,1],glow:[.3,.56,.98],decor:[],textures:{uColour:{url:`/earth/colour.jpg`,colour:!0},uCoast:{url:`/earth/coast.png`},uRelief:{url:`/earth/relief.png`}},glsl:`
uniform sampler2D uColour;
uniform sampler2D uCoast;
uniform sampler2D uRelief;
uniform mat4 modelMatrix;

// Where a point falls on the equirectangular maps. Longitude wraps at ±180°,
// so of two ways of counting it, use the one that doesn't jump across this
// pixel (otherwise the seam would sample the smallest mipmap: a line).
vec2 mapUV(vec3 p) {
  float u = atan(p.x, p.z) / 6.2831853 + 0.5;
  float u2 = fract(u + 0.5) - 0.5;
  float v = asin(clamp(p.y, -1.0, 1.0)) / 3.1415927 + 0.5;
  return vec2(fwidth(u) <= fwidth(u2) + 1e-6 ? u : u2, v);
}

// Signed distance to the coast in map pixels (positive on land).
float coast(vec3 p) {
  return (texture2D(uCoast, mapUV(p)).r * 255.0 - 128.0) / 8.0;
}

// Land: its height (0 to about 0.5); sea and lakes: minus their depth.
float height(vec3 p) {
  vec3 r = texture2D(uRelief, mapUV(p)).rgb;
  return coast(p) > 0.0 ? r.r * 0.5 : -r.g * r.g;
}

// Relief from the height map's slopes, turned into the world's frame. Central
// differences two texels apart stay smooth when the map is magnified and
// average out the terracing of its 8-bit heights (Greenland's ice showed bands).
vec3 reliefNormal(vec3 N, vec3 p, float k) {
  vec2 uv = mapUV(p);
  vec2 t = vec2(2.0 / 4096.0, 2.0 / 2048.0);
  float dE = texture2D(uRelief, uv + vec2(t.x, 0.0)).r - texture2D(uRelief, uv - vec2(t.x, 0.0)).r;
  float dN = texture2D(uRelief, uv + vec2(0.0, t.y)).r - texture2D(uRelief, uv - vec2(0.0, t.y)).r;
  float coslat = max(sqrt(1.0 - p.y * p.y), 0.05);
  vec3 east = normalize(vec3(p.z, 0.0, -p.x));
  vec3 north = cross(p, east);
  vec3 slope = east * dE / (2.0 * t.x * 6.2831853 * coslat) + north * dN / (2.0 * t.y * 3.1415927);
  return normalize(N - k * mat3(modelMatrix) * slope);
}

// The coast, anti-aliased from its distance field; sea ice and ice shelves count as land.
float landMask(float h, vec3 p) {
  float d = coast(p);
  float land = smoothstep(-0.5, 0.5, d / max(fwidth(d), 1e-4));
  float ice = texture2D(uRelief, mapUV(p)).b;
  return max(land, smoothstep(0.75, 0.95, ice));
}

// The sea by depth (stored on a square-root scale, so the shelves have most
// of it): bright shallows, turquoise in the tropics, a deep blue beyond the shelf.
vec3 oceanColour(float h, vec3 p) {
  float s = sqrt(max(-h, 0.0));
  float warm = 1.0 - smoothstep(0.3, 0.55, abs(p.y));
  vec3 shallow = mix(vec3(0.02, 0.13, 0.16), vec3(0.04, 0.34, 0.36), warm);
  vec3 shelf = vec3(0.01, 0.07, 0.14);
  vec3 deep = vec3(0.005, 0.03, 0.085);
  vec3 c = mix(shallow, shelf, smoothstep(0.05, 0.17, s));
  return mix(c, deep, smoothstep(0.17, 0.5, s));
}

// The land as photographed, a touch richer.
vec3 landColour(float h, vec3 p) {
  vec3 c = texture2D(uColour, mapUV(p)).rgb;
  float y = dot(c, vec3(0.2126, 0.7152, 0.0722));
  return max(mix(vec3(y), c, 1.15) * 1.1, 0.0);
}

// The weather belts: towering cloud along the equator, clear skies over the
// subtropics' deserts, and storm tracks in the middle latitudes; large
// systems, swirled by a warp, with finer texture inside them.
float cloudDensity(vec3 p, float t) {
  vec3 q = p + vec3(t * 0.002, 0.0, -t * 0.001);
  vec3 warp = vec3(fbm(q * 1.4 + 4.0, 3), fbm(q * 1.4 + 9.0, 3), fbm(q * 1.4 + 17.0, 3));
  float systems = fbm(q * vec3(2.2, 3.2, 2.2) + warp * 1.2, 4);
  float lat = abs(p.y);
  float belts = 0.12 * exp(-p.y * p.y / 0.005) - 0.16 * exp(-pow(lat - 0.42, 2.0) / 0.014) + 0.1 * exp(-pow(lat - 0.8, 2.0) / 0.02);
  float fine = fbm(q * 16.0 + warp * 2.0, 4);
  return smoothstep(0.1, 0.5, systems + belts + fine * 0.2) * 0.7;
}

#ifdef GLOBE_SURFACE
varying vec2 vLonLat;

// Lines at whole values of c, px pixels wide however far you zoom, fading
// out where they crowd together.
float gridPx(float c, float px) {
  float w = max(fwidth(c), 1e-6);
  float d = abs(fract(c + 0.5) - 0.5) / w;
  return (1.0 - smoothstep(px * 0.5, px * 0.5 + 1.0, d)) * (1.0 - smoothstep(0.08, 0.25, w));
}

// A single line where x crosses x0, px pixels wide.
float lineAt(float x, float x0, float px) {
  float w = max(fwidth(x), 1e-6);
  return 1.0 - smoothstep(px * 0.5 * w, (px * 0.5 + 1.0) * w, abs(x - x0));
}

// How far the coast is on screen, in pixels (positive inland): from the fine
// distance field near it, and the coarse one further out.
float coastPx(vec3 p) {
  vec2 rg = texture2D(uCoast, mapUV(p)).rg;
  float fine = (rg.r * 255.0 - 128.0) / 8.0;
  float coarse = rg.g * 255.0 - 128.0;
  float pf = fine / max(length(vec2(dFdx(fine), dFdy(fine))), 1e-4);
  float pc = coarse / max(length(vec2(dFdx(coarse), dFdy(coarse))), 1e-4);
  return abs(fine) < 14.0 ? pf : pc;
}

// The chart: dark paper, pale ink, water-lined coasts, contoured land with
// a faint hill shade, a graticule, and a neat line round the map's edge.
vec3 chartColour(vec3 p, float h) {
  vec3 ink = vec3(0.6, 0.64, 0.68);
  vec3 water = vec3(0.26, 0.4, 0.55);
  float px = coastPx(p);
  float isLand = smoothstep(-0.5, 0.5, px);
  vec2 uv = mapUV(p);
  vec3 r = texture2D(uRelief, uv).rgb;
  // Lakes are drawn more quietly than the sea: a fainter shore and no water-lining.
  float lake = smoothstep(0.2, 0.42, r.b) * (1.0 - smoothstep(0.7, 0.9, r.b));
  float coastLine = (1.0 - smoothstep(0.55, 1.45, abs(px))) * (1.0 - 0.6 * lake);
  float waterLines = ((1.0 - smoothstep(0.3, 1.0, abs(px + 4.0))) * 0.55 + (1.0 - smoothstep(0.3, 1.0, abs(px + 9.0))) * 0.25) * (1.0 - lake);

  // Contours every sixteenth of the height range, stronger every quarter,
  // none at sea level (the coast is drawn already); a faint hill shade.
  vec2 t = vec2(2.0 / 4096.0, 2.0 / 2048.0);
  float dE = texture2D(uRelief, uv + vec2(t.x, 0.0)).r - texture2D(uRelief, uv - vec2(t.x, 0.0)).r;
  float dN = texture2D(uRelief, uv + vec2(0.0, t.y)).r - texture2D(uRelief, uv - vec2(0.0, t.y)).r;
  float shade = clamp((dN - dE) * 40.0, -1.0, 1.0);
  float upland = smoothstep(0.02, 0.05, r.r);
  float contours = gridPx(r.r * 16.0, 0.8) * upland;
  float index = gridPx(r.r * 4.0, 1.1) * upland;

  // The graticule: every 30°, and every 10° once they're well apart.
  vec2 deg = vLonLat * 57.29578;
  vec2 tens = deg / 10.0;
  float apart = 1.0 - smoothstep(0.01, 0.02, max(fwidth(tens.x), fwidth(tens.y)));
  float graticule = max(gridPx(deg.x / 30.0, 1.0) + gridPx(deg.y / 30.0, 1.0), 0.6 * apart * (gridPx(tens.x, 0.8) + gridPx(tens.y, 0.8)));
  float edge = max(lineAt(abs(vLonLat.x), 3.1415927, 2.4), lineAt(abs(vLonLat.y), 1.5707963, 2.4));

  vec3 c = mix(vec3(0.010, 0.018, 0.032), vec3(0.030, 0.034, 0.040), isLand);
  c += isLand * shade * 0.008;
  c = mix(c, ink, min(graticule, 1.0) * 0.045);
  c = mix(c, water, waterLines * 0.4);
  c = mix(c, ink, (contours * 0.1 + index * 0.18) * isLand);
  c = mix(c, ink, coastLine * 0.62);
  return mix(c, ink, edge * 0.55);
}
#endif
`},eh=`
attribute vec2 lonlat;
uniform vec3 uSunPos;
uniform float uUnroll;
uniform float uMapScale;
uniform vec3 uMapView; // centre longitude and latitude (radians), zoom
uniform float uMapLocal;
varying vec3 vObj;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vLightObj;
varying vec2 vLonLat;
${Nm}
void main() {
  vObj = position;
  vLonLat = lonlat;
  vec2 m = mapProject(lonlat, uMapView.xy, uMapLocal) * uMapView.z * uMapScale;
  vec3 pos = mix(position, vec3(m, 0.0), uUnroll);
  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normalize(mix(normal, vec3(0.0, 0.0, 1.0), uUnroll)));
  vLightObj = transpose(mat3(modelMatrix)) * normalize(uSunPos - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,th=`
uniform float uChart;
void main() {
  gl_FragColor = vec4(0.016, 0.021, 0.03, uChart);
}`,nh=G.degToRad,rh=e=>e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI));function ih(e,t,n){let r={uUnroll:{value:0},uFlat:{value:0},uChart:{value:0},uMapScale:{value:Zm},uMapView:{value:new q(0,0,1)},uMapLocal:{value:0}},i=(e,t)=>{let n=y(e).flatMap(e=>e.anchor.kind===`surface`?[{lat:e.anchor.lat,lon:e.anchor.lon}]:[]);if(!n.length)return[];let{centre:r,radius:i}=Jm(n);return[{id:`${t}:${l(e.name)}`,lat:r.lat,lon:r.lon,size:Math.max(.035,2*Math.sin(i/2)*1.2)}]},a=[...o(`arda`).flatMap(e=>i(e,`region`)),...h(`arda`).flatMap(e=>i(e,`area`))],s=Up({...$m,unroll:{vertex:eh,uniforms:r},points:a},e,t,n),{spin:c}=s,u=new Z(new hs(1,1),new Q({uniforms:{uChart:r.uChart},fragmentShader:th,transparent:!0,depthWrite:!1}));u.scale.set(600,600,1),u.position.z=-.05,u.frustumCulled=!1,u.visible=!1,c.add(u);let d={cx:0,cy:0,zoom:1},f={cx:0,cy:0,zoom:1},p=new bn,m={get unroll(){return r.uUnroll.value},set unroll(e){r.uUnroll.value=e,r.uFlat.value=e},get chart(){return r.uChart.value},set chart(e){r.uChart.value=e,u.visible=e>0},view:d,goal:f,whole:{cx:0,cy:0,zoom:1},viewAt(e,t,n){return{cx:nh(t),cy:nh(e),zoom:n}},around(e){let t=Jm(e).centre,n=e.map(e=>rh(nh(e.lon-t.lon))/(Math.PI/180)),r=e.map(e=>e.lat),i={lat:(Math.min(...r)+Math.max(...r))/2,lon:t.lon+(Math.min(...n)+Math.max(...n))/2},a=e=>new q().setFromSphericalCoords(1,Math.PI/2-nh(e.lat),nh(e.lon)),o=a(i),s=Math.max(0,...e.map(e=>a(e).angleTo(o))),c=G.clamp(xm[1]/(s*1.3+.006),1.5,Qm[1]);return{cx:nh(i.lon),cy:nh(i.lat),zoom:c}},center:e.clone(),extent:{x:xm[0]*Zm,y:xm[1]*Zm},axes(e=!1){return e?p.copy(s.settledQuaternion()):c.getWorldQuaternion(p),{right:new q(1,0,0).applyQuaternion(p),up:new q(0,1,0).applyQuaternion(p),out:new q(0,0,1).applyQuaternion(p)}},point(e,t,n=new q){let[r,i]=Dm([nh(t),nh(e)],[d.cx,d.cy],Em(d.zoom));return c.updateWorldMatrix(!0,!1),n.set(r*d.zoom*Zm,i*d.zoom*Zm,0).applyMatrix4(c.matrixWorld)},drag(e,t,n,r){let i=1/(Zm*d.zoom),a=Em(d.zoom),o=jm([e*i,t*i],[d.cx,d.cy],a);[d.cx,d.cy]=Mm(o,[n*i,r*i],[d.cx,d.cy],a),Object.assign(f,d)},zoomAt(e,t,n){let r=d.zoom,i=G.clamp(r*e,Qm[0],Qm[1]),a=[d.cx,d.cy],o=jm([t/(Zm*r),n/(Zm*r)],a,Em(r));[d.cx,d.cy]=Mm(o,[t/(Zm*i),n/(Zm*i)],a,Em(i)),d.zoom=i,Object.assign(f,d)},goTo(e,t=!1){f.cx=e.cx,f.cy=e.cy,f.zoom=G.clamp(e.zoom,Qm[0],Qm[1]),t&&Object.assign(d,f)}};return{...s,map:m,update(e,t){s.update(e,t);let n=1-Math.exp(-3.2*t);d.cx=rh(d.cx+rh(f.cx-d.cx)*n),d.cy+=(f.cy-d.cy)*n,d.zoom=Math.exp(pp(Math.log(d.zoom),Math.log(f.zoom),3.2,t)),fp(d,f,2e-4,rh(f.cx-d.cx)),r.uMapView.value.set(d.cx,d.cy,d.zoom),r.uMapLocal.value=Em(d.zoom)}}}var ah=1.72,oh=2.5,sh=`
float ringDensity(float r) {
  if (r < ${ah.toFixed(3)} || r > ${oh.toFixed(3)}) return 0.0;
  float x = (r - ${ah.toFixed(3)}) / ${.78.toFixed(3)};
  float d = 0.16 + 0.08 * sin(x * 9.0 + 0.6) + 0.04 * sin(x * 23.0 + 2.1) + 0.015 * sin(x * 57.0 + 0.3);
  d += 0.12 * band(x, 0.34, 0.6, 0.12);
  d *= smoothstep(0.0, 0.14, x) * (1.0 - smoothstep(0.8, 1.0, x));
  d *= 1.0 - 0.85 * band(x, 0.625, 0.67, 0.012);
  return clamp(d, 0.0, 1.0);
}
`,ch=`
${ap}
${rp}
${sh}
uniform vec3 uCenter;
uniform float uR;
uniform vec3 uRingN;

vec3 palette(float t) {
  vec3 cream = vec3(0.86, 0.78, 0.62);
  vec3 amber = vec3(0.70, 0.49, 0.28);
  vec3 umber = vec3(0.36, 0.25, 0.16);
  vec3 sage = vec3(0.56, 0.60, 0.53);
  float s1 = sin(t * 3.14159) * 0.5 + 0.5;
  float s2 = sin(t * 1.37 + 1.3) * 0.5 + 0.5;
  vec3 c = mix(cream, amber, s1);
  c = mix(c, umber, smoothstep(0.72, 1.0, s2) * 0.7);
  c = mix(c, sage, smoothstep(0.8, 1.0, sin(t * 0.61 + 2.0)) * 0.55);
  return c;
}

void main() {
  vec3 p = normalize(vObj);
  vec3 N = normalize(vNormalW);
  vec3 L = normalize(uSunPos - vWorld);
  vec3 V = normalize(cameraPosition - vWorld);

  float turb = fbm(p * vec3(2.5, 9.0, 2.5) + vec3(uTime * 0.003, 0.0, 0.0), 5);
  float t = p.y * 7.5 + turb * 0.45;
  vec3 col = palette(t);
  col *= 0.9 + 0.2 * fbm(p * vec3(6.0, 30.0, 6.0), 3);

  // A long-lived storm, swirled into the bands.
  vec3 stormC = normalize(vec3(0.55, -0.32, 0.77));
  float sd = distance(p, stormC);
  float storm = 1.0 - smoothstep(0.06, 0.16, sd + 0.04 * snoise(p * 30.0));
  col = mix(col, vec3(0.78, 0.47, 0.32), storm * 0.75);

  float ndl = dot(N, L);
  float lit = smoothstep(-0.04, 0.6, ndl) * max(ndl, 0.0) * 0.4 + max(ndl, 0.0) * 0.6;
  float limb = pow(clamp(dot(N, V), 0.0, 1.0), 0.3);

  // Shadow of the rings on the planet: honest geometry, not a texture.
  float shadow = 0.0;
  float denom = dot(L, uRingN);
  if (abs(denom) > 1e-4) {
    float tHit = dot(uCenter - vWorld, uRingN) / denom;
    if (tHit > 0.0) {
      float r = distance(vWorld + L * tHit, uCenter) / uR;
      shadow = ringDensity(r);
    }
  }

  vec3 outCol = col * uSunI * lit * limb * (1.0 - 0.85 * shadow);
  float rim = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 3.0);
  outCol += vec3(0.95, 0.8, 0.55) * rim * smoothstep(-0.1, 0.4, ndl) * uSunI * 0.25;
  gl_FragColor = vec4(outCol, 1.0);
}
`,lh=`
${rp}
${sh}
uniform vec3 uSunPos;
uniform float uSunI;
uniform vec3 uCenter;
uniform float uR;
uniform vec3 uRingN;
varying vec3 vWorld;
varying vec2 vLocal;

void main() {
  float r = length(vLocal) / uR;
  float d = ringDensity(r);
  if (d < 0.01) discard;
  vec3 L = normalize(uSunPos - vWorld);
  vec3 V = normalize(cameraPosition - vWorld);

  // Shadow of the planet on the rings.
  vec3 oc = vWorld - uCenter;
  float b = dot(oc, L);
  float c = dot(oc, oc) - uR * uR;
  float disc = b * b - c;
  float shadow = (disc > 0.0 && -b - sqrt(disc) > 0.0) ? 1.0 : 0.0;

  // Rings seen from their unlit face glow only faintly.
  float sameSide = dot(uRingN, L) * dot(uRingN, V);
  float face = sameSide > 0.0 ? 1.0 : 0.3;
  float incidence = 0.45 + 0.55 * abs(dot(uRingN, L));
  vec3 col = mix(vec3(0.55, 0.5, 0.43), vec3(0.88, 0.83, 0.74), smoothstep(0.35, 0.9, d));
  col *= uSunI * face * incidence * (1.0 - 0.96 * shadow);
  // Particles in the planet's shadow are dark but still hide the stars behind.
  gl_FragColor = vec4(col, d * 0.6);
}
`,uh=3.7;function dh(e,t){let n=uh,r=new q(0,1,0),i=new q(t.x,0,t.z).normalize();return[{orbit:3.1,angle:-105,y:.35,r:.58},{orbit:3.8,angle:62,y:-.3,r:.46},{orbit:4.5,angle:145,y:.45,r:.68}].map(t=>{let a=i.clone().applyAxisAngle(r,G.degToRad(-t.angle)).multiplyScalar(t.orbit*n).setY(t.y*n),o=e.clone().add(a);return{center:o,radius:t.r,viewDir:dp(o,[e],.75)}})}function fh(e,t,n){let r=uh,i=new _r;i.position.copy(e);let a=new _r;a.rotation.set(.44,0,.35),i.add(a),a.updateWorldMatrix(!0,!1);let o=new q(0,1,0).applyQuaternion(a.getWorldQuaternion(new bn)),s={uSunPos:{value:t},uSunI:{value:.72},uTime:{value:0},uCenter:{value:e.clone()},uR:{value:r},uRingN:{value:o}},c=new _r;a.add(c);let l=new Z(new _s(r,160,120),new Q({uniforms:s,vertexShader:ip,fragmentShader:ch}));c.add(l);let u=new Z(new gs(r*ah,r*oh,384,6),new Q({uniforms:s,vertexShader:`
        varying vec3 vWorld;
        varying vec2 vLocal;
        void main() {
          vLocal = position.xy;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,fragmentShader:lh,side:2,transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,a.add(u);let d=dh(e,n),f=Math.max(...d.map(t=>Math.hypot(t.center.x-e.x,t.center.z-e.z)+t.radius)),p=Math.max(r*oh*.85,...d.map(t=>Math.abs(t.center.y-e.y)+t.radius+f*.35)),m=sp(r*oh*.8);return i.add(m),{id:`theoria`,root:i,center:e.clone(),radius:r*2.2,axis:o,focusDistance:r*9.2,focusExtent:{across:f,upDown:p},bodyRadius:r,pick:m,update(e){s.uTime.value=e,c.rotation.y=e*.01},setFocused(){},occluder:{center:e.clone(),radius:r*.98}}}var ph={relativity:{spin:240,radius:.58,freq:.6,sea:.13,detail:.09,turn:70,ice:66,deep:[.003,.012,.045],shallow:[.012,.06,.11],shallowDepth:.25,low:[.13,.115,.08],high:[.2,.19,.17],highAt:.3,air:[.35,.6,1],tilt:[0,0,0]},quantum:{radius:.46,freq:1.7,sea:.2,detail:.14,turn:0,ice:84,deep:[.002,.026,.028],shallow:[.012,.1,.085],shallowDepth:.08,low:[.16,.065,.028],high:[.24,.15,.09],highAt:.3,air:[.3,.85,.75],tilt:[0,0,0]},astrophysics:{radius:.68,freq:.5,sea:-.12,detail:.09,turn:0,ice:74,deep:[.012,.005,.04],shallow:[.05,.035,.12],shallowDepth:.25,low:[.06,.085,.05],high:[.15,.15,.12],highAt:.75,air:[.62,.5,1],tilt:[0,0,0],outward:!0,heart:{lat:10,lon:-10,sea:.56,shore:.3,strait:290,straitTo:1.25,isle:.09}}},mh={land:[.3,.2,.06],light:[.15,.1,.03],ink:[.86,.7,.38]},hh={relativity:0,quantum:1,astrophysics:2},gh=e=>e.toFixed(4),_h=e=>`vec3(${e.map(gh).join(`, `)})`,vh=e=>{let t=ph[e],n=hh[e]+1,r=-t.turn*Math.PI/180;return`
${t.heart?bh(t.heart,n):``}
float height(vec3 p) {
  p = vec3(p.x * ${gh(Math.cos(r))} + p.z * ${gh(Math.sin(r))}, p.y, -p.x * ${gh(Math.sin(r))} + p.z * ${gh(Math.cos(r))});
  vec3 s = vec3(${gh(11.3*n)}, ${gh(4.7*n)}, ${gh(8.1*n)});
  vec3 q = p * ${gh(t.freq)} + s;
  vec3 w = vec3(fbm(q + 1.7, 2), fbm(q + 8.3, 2), fbm(q + 4.1, 2));
  float h = fbm(q + w * 0.7, 3) + fbm(p * 3.2 + s, 4) * ${gh(t.detail)} - ${gh(t.sea)};
  float ridge = 1.0 - abs(snoise(p * 4.0 + s * 0.7));
  // Ridges inland only (they never move a coast), gentle, so the globe's shading isn't creased.
  h += max(h, 0.0) * ridge * ridge * 0.12;
  return ${t.heart?`heart(p, h)`:`h`};
}`},yh=e=>e.toFixed(6);function bh(e,t){let n=e.lat*Math.PI/180,r=e.lon*Math.PI/180,i=e=>`vec3(${e.map(yh).join(`, `)})`,a=[Math.cos(n)*Math.sin(r),Math.sin(n),Math.cos(n)*Math.cos(r)],o=[-Math.sin(n)*Math.sin(r),Math.cos(n),-Math.sin(n)*Math.cos(r)],s=[Math.cos(r),0,-Math.sin(r)],c=[11.3*t,4.7*t,8.1*t];return`
const float ISLE = ${gh(e.isle)};
vec3 heartOf(vec3 p) {
  float cd = dot(p, ${i(a)});
  float d = acos(clamp(cd, -1.0, 1.0));
  vec3 u = p - cd * ${i(a)};
  float th = atan(dot(u, ${i(s)}), dot(u, ${i(o)}));
  vec3 s = ${i(c)}, o = s * 0.3;
  float n = snoise(p * 2.2 + o) * 0.075 + snoise(p * 5.5 + s) * 0.03 + snoise(p * 13.0 + o) * 0.01;
  return vec3(d, th, n);
}
float isleOf(vec3 hd) {
  return 1.0 - smoothstep(ISLE - 0.012, ISLE + 0.012, hd.x + hd.z * 0.3);
}
float heart(vec3 p, float h0) {
  vec3 hd = heartOf(p);
  float d = hd.x, n = hd.z;
  // The inland sea, its shore wandering, deepening to the middle; round it, land, its relief kept where it had any.
  float rin = ${gh(e.sea)} + n * 1.2, rb = rin + ${gh(e.shore)};
  float inner = 1.0 - smoothstep(rin - 0.015, rin + 0.015, d);
  float band = (1.0 - inner) * (1.0 - smoothstep(rb - 0.08, rb + 0.08, d));
  float h = mix(h0, max(h0, 0.0) * 0.7 + 0.035, band);
  h = mix(h, -0.08 - 0.12 * (1.0 - smoothstep(0.0, rin, d)), inner);
  // The strait: its line wanders either side of one bearing, and it narrows and widens.
  float a = hd.y - ${gh(e.strait*Math.PI/180)};
  float x = sin(a) * sin(d), wig = 0.035 * sin(d * 7.0 + 0.8) + 0.018 * sin(d * 17.0 + 2.0);
  float hw = 0.032 + 0.012 * sin(d * 11.0 + 1.3);
  float strait = (1.0 - smoothstep(hw - 0.01, hw + 0.01, abs(x - wig) + n * 0.12)) * step(0.0, cos(a))
    * smoothstep(rin - 0.1, rin, d) * (1.0 - smoothstep(${gh(e.straitTo-.05)}, ${gh(e.straitTo)}, d));
  h = mix(h, min(h, -0.05), strait);
  // The Golden Isle, a low hill.
  return mix(h, 0.05 + 0.1 * (1.0 - d / ISLE) + max(h0, 0.0) * 0.15, isleOf(hd));
}`}function xh(e){let t=ph[e],n=hh[e];return{id:e,radius:t.radius,tilt:t.tilt,spinOffset:t.spin,labelsOutward:t.outward,relief:.06,sunI:.8,air:t.air,glow:t.air,decor:[],shine:!!t.heart,glsl:`
${vh(e)}

float landMask(float h, vec3 p) {
  return smoothstep(0.0, 0.01, h);
}

// Ice at the poles, over land and sea alike, reaching further down on high ground.
float ice(vec3 p, float h) {
  float lat = degrees(asin(clamp(p.y, -1.0, 1.0)));
  return smoothstep(${gh(t.ice)}, ${gh(t.ice+4)}, abs(lat) + max(h, 0.0) * 10.0 + snoise(p * 9.0) * 2.0);
}

vec3 oceanColour(float h, vec3 p) {
  vec3 c = mix(${_h(t.shallow)}, ${_h(t.deep)}, smoothstep(0.0, ${gh(t.shallowDepth)}, -h));
  return mix(c, vec3(0.82, 0.86, 0.9), ice(p, h));
}

vec3 landColour(float h, vec3 p) {
  vec3 c = mix(${_h(t.low)}, ${_h(t.high)}, smoothstep(0.02, ${gh(t.highAt)}, h));${t.heart?`
  // The isle's gold, deeper on its shores, paler on its hill, mottled so it reads as land.
  vec3 gold = mix(${_h(mh.land)} * 0.7, ${_h(mh.land)} * 1.3, clamp(smoothstep(0.05, 0.2, h) * 0.6 + 0.2 + 0.3 * snoise(p * 25.0), 0.0, 1.0));
  c = mix(c, gold, isleOf(heartOf(p)));`:``}
  return mix(c, vec3(0.82, 0.86, 0.9), ice(p, h));
}
${t.heart?`
// The Golden Isle's own light, unlit by the star, so it shines on the night side too: soft over the isle, the
// faintest sheen on the water round it.
vec3 shine(vec3 p, float h) {
  vec3 hd = heartOf(p);
  float isle = isleOf(hd) * (0.75 + 0.25 * snoise(p * 60.0)) * (1.0 - 0.35 * smoothstep(0.0, ISLE, hd.x));
  return ${_h(mh.light)} * (isle + exp(-pow(hd.x / (ISLE * 2.4), 2.0)) * 0.3);
}`:``}

// A little weather: thin bands of cloud.
float cloudDensity(vec3 p, float t) {
  vec3 q = p * vec3(2.2, 4.0, 2.2) + vec3(${gh(n*5)} + t * 0.002, 0.0, 0.0);
  return smoothstep(0.3, 0.62, fbm(q, 5)) * 0.45;
}

#ifdef GLOBE_SURFACE
varying vec2 vLonLat;
${Tp}

// The engraved chart: the coast with water-lining out to sea, the land
// contoured with a faint hill shade, ice a lighter ground, and a graticule every
// 30°. Pale ink on Theoria's slate navy. (The neat line is the overlay's.)
vec3 chartColour(vec3 p, float h) {
  float px = h / max(fwidth(h), 0.0012);
  float land = smoothstep(-0.5, 0.5, px);
  float coast = 1.0 - smoothstep(0.6, 1.6, abs(px));
  vec3 ink = vec3(0.6, 0.64, 0.7);${t.heart?`
  // The Golden Isle drawn in gold ink, its coast and the lines round it too.
  vec3 hd = heartOf(p);
  float gold = 1.0 - smoothstep(ISLE, ISLE + 0.05, hd.x + hd.z * 0.3);
  ink = mix(ink, ${_h(mh.ink)}, gold);`:``}
  float wl = (1.0 - smoothstep(0.3, 1.0, abs(px + 3.5))) * 0.5 + (1.0 - smoothstep(0.3, 1.0, abs(px + 7.0))) * 0.36
    + (1.0 - smoothstep(0.3, 1.0, abs(px + 11.0))) * 0.24 + (1.0 - smoothstep(0.3, 1.0, abs(px + 16.0))) * 0.13;
  vec3 c = mix(vec3(0.008, 0.016, 0.034), ${t.heart?`mix(vec3(0.26, 0.38, 0.58), ${_h(mh.ink)}, gold)`:`vec3(0.26, 0.38, 0.58)`}, wl * 0.4 * (1.0 - land));
  c = mix(c, ink, graticule(vLonLat, 30.0) * 0.045);
  float up = smoothstep(0.0, 0.05, h);
  vec2 g = vec2(dFdx(h), dFdy(h));
  vec3 ground = vec3(0.030, 0.035, 0.044) + clamp((-g.y - g.x) * 30.0, -1.0, 1.0) * 0.008;
  ground = mix(ground, ink, (gridPx(h * 16.0, 0.7) * 0.08 + gridPx(h * 4.0, 1.0) * 0.14) * up);
  ground = mix(ground, vec3(0.05, 0.056, 0.068), ice(p, h) * 0.8);
  c = mix(c, ground, land);
  return mix(c, ink, coast * 0.62);
}
#endif
`}}function Sh(e,t,n,r,i){let a=ph[e].radius,o=wp(a),s=Up({...xh(e),unroll:{vertex:Cp(bp),uniforms:o}},t,r,i),c=Dp({frame:s.spin,center:t,radius:a,projection:bp,uniforms:o,paper:[.013,.021,.036],settled:s.settledQuaternion});return{...s,focusDir:n,focusDistance:a*7,map:c.map,update(e,t){s.update(e,t),c.update(t)}}}var Ch=`
${ap}
${rp}
uniform vec3 uColA;
uniform vec3 uColB;
uniform float uSeed;

void main() {
  vec3 p = normalize(vObj);
  vec3 N = normalize(vNormalW);
  vec3 L = normalize(uSunPos - vWorld);

  float n = fbm(p * 2.4 + uSeed, 5);
  float ridges = 1.0 - abs(snoise(p * 5.0 + uSeed * 2.0));
  float pits = smoothstep(0.58, 0.75, fbm(p * 8.0 - uSeed, 3) * 0.5 + 0.5);
  float h = n * 0.6 + ridges * 0.1 - pits * 0.12;

  vec3 Nb = perturbNormal(vWorld, N, h * 0.03);
  vec3 col = mix(uColA, uColB, smoothstep(-0.35, 0.45, n));
  col *= 0.85 + 0.3 * ridges;
  float ndl = max(dot(Nb, L), 0.0);
  gl_FragColor = vec4(col * uSunI * ndl + col * 0.004, 1.0);
}
`;function wh(e,t,n,r,i){return new Q({uniforms:{uSunPos:{value:e},uSunI:{value:t},uTime:{value:0},uColA:{value:n},uColB:{value:r},uSeed:{value:i}},vertexShader:ip,fragmentShader:Ch})}var Th=3.2,Eh=`
varying vec2 vLocal;
void main() {
  vLocal = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Dh=`
uniform float uChart;
uniform float uReveal; // how far out the chart has grown, as you land (the rim is 1)
uniform vec3 uView; // the view's centre (chart units) and zoom
uniform float uR;
varying vec2 vLocal;
${rp}
${re}
const float PI = 3.14159265;
const float RIM = ${O.toFixed(4)};
const float LYKPC = 3261.56;

${op}

// The galaxy, face on, its centre at the origin and the Sun 8.15 kpc below it: an
// exponential disc, a bar leaning 27° with its near end at positive longitudes, a
// bulge, and five arms as logarithmic spirals trailing its clockwise turn. Approximate.
float arm(vec2 P, float Rs, float pitch, float a0, float a1, float w) {
  float R = length(P);
  float phi = atan(P.y, P.x);
  float k = tan(radians(pitch));
  float best = 0.0;
  for (int n = -1; n <= 1; n++) {
    float dphi = phi + float(n) * 2.0 * PI + PI / 2.0;
    if (dphi < radians(a0) || dphi > radians(a1)) continue;
    float Ra = Rs * exp(k * dphi);
    float fade = smoothstep(radians(a0), radians(a0) + 0.6, dphi) * (1.0 - smoothstep(radians(a1) - 0.6, radians(a1), dphi));
    best = max(best, exp(-pow((R - Ra) / w, 2.0)) * fade);
  }
  return best;
}
float galaxy(vec2 P) {
  float R = length(P);
  float disc = exp(-(R - 8.15) / 2.6) * (1.0 - smoothstep(13.0, 17.0, R));
  vec2 ax = vec2(-sin(radians(27.0)), -cos(radians(27.0)));
  vec2 bp = vec2(dot(P, ax), dot(P, vec2(-ax.y, ax.x)));
  float bar = exp(-pow(bp.x / 3.6, 2.0) - pow(bp.y / 1.1, 2.0));
  float bulge = exp(-R * R / 0.9);
  float arms = arm(P, 5.0, 13.0, -170.0, 230.0, 0.42) + arm(P, 6.6, 12.0, -110.0, 150.0, 0.36) * 0.85
    + arm(P, 8.3, 11.0, -50.0, 45.0, 0.32) * 0.7 + arm(P, 9.9, 10.0, -150.0, 210.0, 0.45)
    + arm(P, 13.2, 9.0, -90.0, 160.0, 0.6) * 0.6;
  return disc * (0.16 + arms * 0.95) + bar * 1.1 + bulge * 1.6;
}

void main() {
  vec2 m = vLocal / (uR * uView.z) + uView.xy;
  float rho = length(m);
  float aa = max(fwidth(rho), 1e-5) * 1.2;
  vec3 outside = vec3(0.020, 0.024, 0.045);
  vec3 paper = vec3(0.038, 0.047, 0.085);
  vec3 c = mix(paper, outside, smoothstep(1.0 - aa, 1.0 + aa, rho));
  if (rho < 1.06) {
    float l = atan(-m.x, m.y);
    float lt = logtOf(rho);
    vec3 ice = vec3(0.56, 0.85, 0.93);
    vec3 warm = vec3(0.95, 0.71, 0.35);
    // The Milky Way: each point of the chart a point in the galaxy's plane, seen from the Sun.
    if (lt > 2.2 && lt < 5.4) {
      float d = pow(10.0, lt) / LYKPC;
      vec2 P = vec2(0.0, -8.15) + d * vec2(-sin(l), cos(l));
      float g = galaxy(P) * smoothstep(2.3, 3.1, lt);
      float core = exp(-dot(P, P) / 2.5);
      vec3 col = mix(ice * vec3(0.75, 0.82, 1.0), warm, clamp(core * 1.4, 0.0, 1.0));
      float grain = 0.85 + 0.3 * snoise(vec3(m * 160.0, 1.0));
      c += col * (1.0 - exp(-g * 0.9)) * 0.62 * grain;
    }
    // The Oort cloud, and the Kuiper belt: faint stipple.
    float oort = smoothstep(-1.9, -1.3, lt) * (1.0 - smoothstep(-0.1, 0.35, lt));
    c += ice * oort * 0.05 * smoothstep(0.2, 0.8, snoise(vec3(m * 140.0, 3.0)));
    float kuiper = smoothstep(-3.35, -3.28, lt) * (1.0 - smoothstep(-3.12, -3.02, lt));
    c += ice * kuiper * 0.06 * smoothstep(0.1, 0.8, snoise(vec3(m * 260.0, 5.0)));
    // The web of galaxies: filaments and voids, faint (a stand-in for a real survey's galaxies).
    if (lt > 6.3 && rho < RIM) {
      float web = 1.0 - abs(fbm(vec3(cos(l) * 2.2, sin(l) * 2.2, lt * 1.6), 4));
      c += ice * smoothstep(0.78, 0.98, web) * smoothstep(6.3, 7.6, lt) * 0.07;
    }
    // The oldest light: the cosmic microwave background, mottled warm and cool, at the rim.
    if (rho > RIM - aa) {
      float n = fbm(vec3(cos(l), sin(l), 0.0) * 7.0 + vec3(0.0, 0.0, rho * 40.0), 5);
      vec3 cmb = mix(vec3(0.12, 0.20, 0.32), vec3(0.42, 0.27, 0.15), smoothstep(-0.4, 0.4, n));
      float band = smoothstep(RIM - aa, RIM + aa, rho) * (1.0 - smoothstep(1.0 - aa, 1.0 + aa, rho));
      c = mix(c, cmb, band * 0.75);
    }
    // Rings at every power of ten (years), the depths' borders a little stronger, and the
    // directions every 30° of longitude, faint.
    if (rho < RIM) {
      float lw = max(fwidth(lt), 1e-5);
      float ring = (1.0 - smoothstep(0.5, 1.4, abs(fract(lt + 0.5) - 0.5) / lw)) * step(-0.05, lt);
      c = mix(c, ice, ring * 0.075);
      c = mix(c, ice, (1.0 - smoothstep(0.5, 1.5, abs(rho - ${ne.near[1].toFixed(4)}) / aa)) * 0.22);
      c = mix(c, ice, (1.0 - smoothstep(0.5, 1.5, abs(rho - ${ne.milky[1].toFixed(4)}) / aa)) * 0.22);
      float s6 = l * 6.0 / PI;
      float sw = max(fwidth(s6), 1e-4);
      float spoke = 1.0 - smoothstep(0.5, 1.4, abs(fract(s6 + 0.5) - 0.5) / sw);
      c = mix(c, ice, spoke * 0.045 * smoothstep(0.2, 0.26, rho));
    }
    c = mix(c, vec3(0.66, 0.70, 0.78), (1.0 - smoothstep(0.6, 1.6, abs(rho - 1.0) / aa)) * 0.55);
  }
  // As you land: the chart grows out from the middle, its edge a fine bright sweep; once it's
  // all there, the paper round it hides space.
  float shown = 1.0 - smoothstep(uReveal - 0.035, uReveal, rho);
  float sweep = (1.0 - smoothstep(0.0, 0.03, abs(rho - uReveal + 0.012))) * step(uReveal, 1.04) * step(0.001, uReveal);
  c = mix(c, vec3(0.56, 0.85, 0.93), sweep * 0.45);
  gl_FragColor = vec4(untone(c), max(shown * step(rho, 1.06), uChart));
}`,Oh=`
attribute float kind; // 0 a star, 2 a galaxy, 3 a bright star
attribute float size;
attribute float bright;
uniform float uR;
uniform float uReveal;
uniform float uPx;
uniform vec3 uView;
varying float vA;
varying float vKind;
void main() {
  // (position: its place on the chart, in chart units.)
  vec2 xy = (position.xy - uView.xy) * uView.z * uR;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(xy, 0.0, 1.0);
  // Each appears as the chart grows past it.
  vA = bright * (1.0 - smoothstep(uReveal - 0.03, uReveal, length(position.xy)));
  vKind = kind;
  gl_PointSize = size * uPx;
}`,kh=`
varying float vA;
varying float vKind;
void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  if (r > 1.0) discard;
  float a = smoothstep(1.0, 0.25, r);
  vec3 col = vKind == 2.0 ? vec3(0.74, 0.84, 1.0) : vec3(0.93, 0.96, 1.0);
  gl_FragColor = vec4(col * a * vA, a * vA);
}`;function Ah(){let e=11,t=()=>(e=e*16807%2147483647)/2147483647,n=[],r=[],i=[],a=[],o=(e,t,o,s,c)=>{let[l,u]=A(e,t);n.push(l,u,0),r.push(o),i.push(s),a.push(c)};for(let e=0;e<2200;e++)o(t()*360,.6+t()**.6*3,0,1.6,.3+t()*.55);for(let e=0;e<1500;e++)o(t()*360,6.4+t()**.55*3.3,2,1.5,.25+t()*.35);for(let e of P)o(e.l,e.logt,3,3.6,1);let s=new vi;return s.setAttribute(`position`,new X(n,3)),s.setAttribute(`kind`,new X(r,1)),s.setAttribute(`size`,new X(i,1)),s.setAttribute(`bright`,new X(a,1)),s}var jh=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Mh(e,t,n){let r=1.15,i=new _r;i.position.copy(e);let a=new _r;i.add(a);let o=new Z(new _s(r,128,96),wh(t,.5,new Y(.1,.1,.115),new Y(.36,.34,.33),11));a.add(o);let s=e.clone().negate().normalize(),c=n.clone().multiplyScalar(.85).add(s.multiplyScalar(.12)).add(new q(0,.25,0)).normalize(),l=new Hi(new Oi({map:lp(),color:new Y(1,.72,.42).multiplyScalar(3),blending:2,depthWrite:!1,depthTest:!0,transparent:!0}));l.position.copy(c.clone().multiplyScalar(r*1.01)),l.scale.setScalar(.12),a.add(l);let u=sp(r*2.4);i.add(u);let d=n.clone().normalize(),f=new q(0,1,0).addScaledVector(d,-d.y).normalize(),p=new q().crossVectors(f,d).normalize(),m=new _r;m.quaternion.setFromRotationMatrix(new Un().makeBasis(p,f,d)),i.add(m);let h={cx:0,cy:0,zoom:1},g={...h},_={...h},v={uChart:{value:0},uReveal:{value:0},uView:{value:new q(0,0,1)},uR:{value:Th}},y=new Z(new hs(600,600),new Q({uniforms:v,vertexShader:Eh,fragmentShader:Dh,transparent:!0,depthWrite:!1,depthTest:!1}));y.frustumCulled=!1,y.visible=!1,y.renderOrder=1,m.add(y);let b=new Va(Ah(),new Q({uniforms:{uR:v.uR,uReveal:v.uReveal,uView:v.uView,uPx:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:Oh,fragmentShader:kh,transparent:!0,depthWrite:!1,depthTest:!1,blending:2}));b.frustumCulled=!1,b.visible=!1,b.renderOrder=2,m.add(b);let x=0,S=()=>{v.uReveal.value=jh(.12,1,x)*1.07;let e=1-jh(0,.3,x);a.scale.setScalar(Math.max(e,.001)),a.visible=e>.01,b.visible=x>.001,y.visible=x>.001||v.uChart.value>0},C={get unroll(){return x},set unroll(e){x=e,S()},get chart(){return v.uChart.value},set chart(e){v.uChart.value=e,S()},get reveal(){return v.uReveal.value},view:g,goal:_,whole:{...h},center:e.clone(),extent:{x:Th*1.02,y:Th*.97},axes(){return{right:p.clone(),up:f.clone(),out:d.clone()}},toWorld(t,n,r=new q){return r.set((t-g.cx)*g.zoom*Th,(n-g.cy)*g.zoom*Th,0).applyQuaternion(m.quaternion).add(e)},point(e,t,n=new q){let[r,i]=A(t,e);return C.toWorld(r,i,n)},drag(e,t,n,r){g.cx+=(e-n)/(Th*g.zoom),g.cy+=(t-r)/(Th*g.zoom),w(g),Object.assign(_,g)},zoomAt(e,t,n){let r=g.zoom,i=G.clamp(r*e,.9,40);g.cx+=t/(Th*r)-t/(Th*i),g.cy+=n/(Th*r)-n/(Th*i),g.zoom=i,w(g),Object.assign(_,g)},goTo(e,t=!1){_.cx=e.cx,_.cy=e.cy,_.zoom=G.clamp(e.zoom,.9,40),w(_),t&&Object.assign(g,_)},viewAt(e,t,n){let[r,i]=A(t,e);return{cx:r,cy:i,zoom:n}},around(e){let t=e.map(e=>A(e.lon,e.lat)),n=Math.min(...t.map(e=>e[0])),r=Math.max(...t.map(e=>e[0])),i=Math.min(...t.map(e=>e[1])),a=Math.max(...t.map(e=>e[1])),o=G.clamp(1/Math.max((r-n)/2+.08,(a-i)/2+.08),1,20);return{cx:(n+r)/2,cy:(i+a)/2,zoom:o}},depthView(e){return e===`near`?{cx:0,cy:0,zoom:3.6}:e===`milky`?{cx:0,cy:0,zoom:1.45}:{...h}}},w=e=>{let t=Math.hypot(e.cx,e.cy);t>1&&(e.cx/=t,e.cy/=t)};return{id:`nyx`,root:i,center:e.clone(),radius:r*1.1,focusDistance:r*7.5,pick:u,map:C,update(e,t){l.material.opacity=.85+.15*Math.sin(e*.7);let n=1-Math.exp(-3.2*t);g.cx+=(_.cx-g.cx)*n,g.cy+=(_.cy-g.cy)*n,g.zoom=Math.exp(pp(Math.log(g.zoom),Math.log(_.zoom),3.2,t)),fp(g,_,1e-4),v.uView.value.set(g.cx,g.cy,g.zoom)},setFocused(){}}}var Nh=1.6/250,Ph=`
varying vec3 vN;
varying vec3 vP;
varying vec3 vObj;
void main() {
  vObj = normalize(position);
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Fh=`
uniform vec3 uSunPos;
uniform float uSunI;
varying vec3 vN;
varying vec3 vP;
varying vec3 vObj;
${rp}
void main() {
  vec3 N = normalize(vN);
  vec3 L = normalize(uSunPos - vP);
  vec3 V = normalize(cameraPosition - vP);
  vec3 H = normalize(L + V);
  vec3 P = vObj;
  float big = fbm(P * 2.2 + 3.0, 4);
  float ridge = 1.0 - abs(snoise(P * 5.0 + vec3(1.3, 0.2, 2.1)));
  float fine = 1.0 - abs(snoise(P * 12.0 + 5.0));
  float crack = smoothstep(0.965, 0.995, ridge) * 0.22 + smoothstep(0.985, 0.998, fine) * 0.1;
  vec3 alb = mix(vec3(0.74, 0.85, 0.93), vec3(0.92, 0.96, 0.99), smoothstep(-0.4, 0.5, big));
  alb = mix(alb, vec3(0.5, 0.66, 0.78), crack);
  float ndl = max(dot(N, L), 0.0);
  float nh = max(dot(N, H), 0.0);
  float spec = pow(nh, 300.0) * 0.9 + pow(nh, 30.0) * 0.08;
  float fres = pow(1.0 - max(dot(N, V), 0.0), 4.0);
  vec3 c = alb * (ndl * 0.72 + 0.03) * uSunI + vec3(1.0, 0.97, 0.92) * spec * smoothstep(0.0, 0.15, ndl) * uSunI
    + vec3(0.45, 0.7, 0.86) * fres * 0.08 * (0.25 + ndl);
  gl_FragColor = vec4(c, 1.0);
}`,Ih=`
varying vec2 vLocal;
void main() {
  vLocal = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Lh=`
uniform vec3 uView;
uniform float uK;
uniform float uFront;
uniform float uChart;
varying vec2 vLocal;
${op}
void main() {
  vec2 p = vLocal / (uK * uView.z) + uView.xy;
  float along = exp(-pow(p.y / 230.0, 2.0));
  vec3 c = mix(vec3(0.016, 0.027, 0.043), vec3(0.03, 0.058, 0.08), along * 0.55);
  float shown = 1.0 - smoothstep(uFront - 30.0, uFront, p.x);
  gl_FragColor = vec4(untone(c), max(shown, uChart));
}`,Rh=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function zh(e,t,n){let r=.42,i=new _r;i.position.copy(e);let a=new _r;i.add(a);let o=new Z(new _s(r,96,72),new Q({uniforms:{uSunPos:{value:t},uSunI:{value:.36}},vertexShader:Ph,fragmentShader:Fh}));a.add(o);let s=sp(r*2.6);i.add(s);let c=n.clone().normalize(),l=new q(0,1,0).addScaledVector(c,-c.y).normalize(),u=new q().crossVectors(l,c).normalize(),d=new _r;d.quaternion.setFromRotationMatrix(new Un().makeBasis(u,l,c)),i.add(d);let f=v(1,!1),p=``,m=.9,h={cx:f.end/2,cy:0,zoom:1},g={...h},y={...h},b={...h},x={uView:{value:new q(h.cx,0,1)},uK:{value:Nh},uFront:{value:-1e4},uChart:{value:0}},S=new Z(new hs(600,600),new Q({uniforms:x,vertexShader:Ih,fragmentShader:Lh,transparent:!0,depthWrite:!1,depthTest:!1}));S.frustumCulled=!1,S.visible=!1,S.renderOrder=1,d.add(S);let C=0,w=-1e4,T=!1,E=()=>{if(w=C>.001?-20+Rh(.15,1,C)*(f.end+40):-1e4,T&&x.uChart.value<.01){let e=Rh(.45,.95,C),t=Math.exp(Math.log(b.zoom)+(Math.log(y.zoom)-Math.log(b.zoom))*e);Object.assign(h,{cx:b.cx+(y.cx-b.cx)*e,cy:0,zoom:t}),Object.assign(g,h)}x.uFront.value=w;let e=1-Rh(0,.3,C);a.scale.setScalar(Math.max(e,.001)),a.visible=e>.01,S.visible=C>.001||x.uChart.value>0},D=e=>{e.cx=G.clamp(e.cx,0,f.end),e.cy=G.clamp(e.cy,-f.halfH,f.halfH),e.zoom=G.clamp(e.zoom,m,6)},O={get unroll(){return C},set unroll(e){C<=.001&&e>.001?T=y.cx!==b.cx||y.zoom!==b.zoom:e<C&&(T=!1),C=e,E(),e>=1&&(T=!1)},get chart(){return x.uChart.value},set chart(e){x.uChart.value=e,E()},get front(){return w},get layout(){return f},fit(e,t,n){let r=t*.88/(2*_()),i=`${r.toFixed(3)},${e},${n}`;if(i===p)return;p=i,f=v(r,n);let a=e*.94/r,o=Math.min(1,a/(f.end+20)),s=o>=.9;if(Object.assign(b,{cx:a/2-4,cy:0,zoom:1}),s)Object.assign(y,{cx:f.end/2,cy:0,zoom:o});else if(n)Object.assign(y,b);else{let e=Math.max(.9,Math.min(1,a/(f.end-470+20)));Object.assign(y,{cx:470+a/e/2,cy:0,zoom:e})}m=s?Math.min(.9,o):n?1:.9,D(h),D(g)},view:h,goal:g,whole:y,center:e.clone(),extent:{x:.01,y:Nh*_()*1.04},axes(){return{right:u.clone(),up:l.clone(),out:c.clone()}},toWorld(t,n,r=new q){return r.set((t-h.cx)*h.zoom*Nh,(n-h.cy)*h.zoom*Nh,0).applyQuaternion(d.quaternion).add(e)},point(e,t,n=new q){return O.toWorld(t,e,n)},drag(e,t,n,r){h.cx+=(e-n)/(Nh*h.zoom),h.cy+=(t-r)/(Nh*h.zoom),D(h),Object.assign(g,h)},zoomAt(e,t,n){let r=h.zoom,i=G.clamp(r*e,m,6);h.cx+=t/(Nh*r)-t/(Nh*i),h.cy+=n/(Nh*r)-n/(Nh*i),h.zoom=i,D(h),Object.assign(g,h)},goTo(e,t=!1){Object.assign(g,e),D(g),t&&Object.assign(h,g)},viewAt(e,t,n){return{cx:t,cy:e,zoom:n}},around(e){let t=e.map(e=>e.lon),n=e.map(e=>e.lat),r=Math.min(...t),i=Math.max(...t),a=G.clamp(2*f.halfH/Math.max(Math.max(...n)-Math.min(...n)+160,(i-r+200)*2*f.halfH/Math.max(1,f.end)),m,3);return{cx:(r+i)/2,cy:(Math.min(...n)+Math.max(...n))/2,zoom:a}}};return{id:`optica`,root:i,center:e.clone(),radius:r*1.1,bodyRadius:r,focusDistance:r*7,focusDir:n.clone(),pick:s,map:O,update(e,t){let n=1-Math.exp(-3.2*t);h.cx+=(g.cx-h.cx)*n,h.cy+=(g.cy-h.cy)*n,h.zoom=Math.exp(pp(Math.log(h.zoom),Math.log(g.zoom),3.2,t)),fp(h,g,.03),x.uView.value.set(h.cx,h.cy,h.zoom)},setFocused(){}}}var Bh=.62,Vh=32,Hh=`
${ap}
uniform sampler2D uColour;
uniform sampler2D uHeight;
uniform vec3 uSite[${Vh}];
uniform int uSiteN;
uniform int uSel;
uniform float uSelT;
uniform mat4 modelMatrix;
uniform float uSide; // −1: this mesh draws the near side; +1: the far
uniform float uFlat;
uniform float uChart;
uniform sampler2D uMare;
varying vec2 vLonLat;
${Tp}

vec2 mapUV(vec3 p) {
  float u = atan(p.x, p.z) / 6.2831853 + 0.5;
  float u2 = fract(u + 0.5) - 0.5;
  float v = asin(clamp(p.y, -1.0, 1.0)) / 3.1415927 + 0.5;
  return vec2(fwidth(u) <= fwidth(u2) + 1e-6 ? u : u2, v);
}

// Relief from the heights' slopes (central differences two texels apart, which stay smooth when magnified).
vec3 reliefNormal(vec3 N, vec3 p, float k) {
  vec2 uv = mapUV(p);
  vec2 t = vec2(2.0 / 2048.0, 2.0 / 1024.0);
  float dE = texture2D(uHeight, uv + vec2(t.x, 0.0)).r - texture2D(uHeight, uv - vec2(t.x, 0.0)).r;
  float dN = texture2D(uHeight, uv + vec2(0.0, t.y)).r - texture2D(uHeight, uv - vec2(0.0, t.y)).r;
  float coslat = max(sqrt(1.0 - p.y * p.y), 0.05);
  vec3 east = normalize(vec3(p.z, 0.0, -p.x));
  vec3 north = cross(p, east);
  vec3 slope = east * dE / (2.0 * t.x * 6.2831853 * coslat) + north * dN / (2.0 * t.y * 3.1415927);
  return normalize(N - k * mat3(modelMatrix) * slope);
}

// The chart: the real relief shaded and faintly contoured; the seas (the
// maria, darker basalt) shored and water-lined inside; a graticule every 15°;
// each side's rim. Pale ink on Ithil's graphite.
vec3 chartColour(vec3 p) {
  vec2 uv = mapUV(p);
  vec2 t = vec2(2.0 / 2048.0, 2.0 / 1024.0);
  float dE = texture2D(uHeight, uv + vec2(t.x, 0.0)).r - texture2D(uHeight, uv - vec2(t.x, 0.0)).r;
  float dN = texture2D(uHeight, uv + vec2(0.0, t.y)).r - texture2D(uHeight, uv - vec2(0.0, t.y)).r;
  float shade = clamp((dN - dE) * 26.0, -1.0, 1.0);
  float lum = texture2D(uMare, uv).r;
  float mpx = (lum - 0.49) / max(fwidth(lum), 0.004); // pixels from the shore (negative at sea)
  float sea = 1.0 - smoothstep(-0.5, 0.5, mpx);
  float shore = 1.0 - smoothstep(0.55, 1.45, abs(mpx));
  float waterLines = (1.0 - smoothstep(0.3, 1.0, abs(mpx + 4.0))) * 0.55 + (1.0 - smoothstep(0.3, 1.0, abs(mpx + 9.0))) * 0.25;
  vec3 ink = vec3(0.62, 0.62, 0.68);
  vec3 c = mix(vec3(0.032, 0.032, 0.038), vec3(0.012, 0.013, 0.022), sea);
  c += shade * mix(0.016, 0.008, sea);
  c = mix(c, vec3(0.3, 0.32, 0.46), waterLines * 0.4 * sea);
  c = mix(c, ink, graticule(vLonLat, 15.0) * 0.045);
  c = mix(c, ink, shore * 0.6);
  return mix(c, ink, lineAt(abs(vLonLat.x), 1.5707963, 2.4) * 0.55);
}

void main() {
  vec3 p = normalize(vObj);
  // Each mesh keeps its own hemisphere: together they're the whole Moon, and unrolled, its two sides.
  if (uSide * p.z > 0.0) discard;
  vec3 N = normalize(vNormalW);
  vec3 L = normalize(uSunPos - vWorld);
  vec3 V = normalize(cameraPosition - vWorld);
  // Relief, faded out towards the limb, where screen-space derivatives break up.
  float facing = smoothstep(0.05, 0.35, dot(N, V));
  vec3 Nb = reliefNormal(N, p, 0.06 * facing);
  vec3 albedo = texture2D(uColour, mapUV(p)).rgb;
  // Moon dust scatters light back towards the star: the lit side is bright right to its edge.
  float ndl = max(dot(Nb, L), 0.0);
  float back = pow(max(dot(N, L), 0.0), 0.35);
  vec3 col = albedo * uSunI * mix(ndl, back * smoothstep(0.0, 0.25, ndl), 0.35) * 0.95 + albedo * 0.002;

  // A fine engraved ring round the chosen painting's place.
  if (uSel >= 0) {
    vec3 c = uSite[0];
    for (int i = 0; i < ${Vh}; i++) {
      if (i == uSel) c = uSite[i];
    }
    float d = distance(p, c);
    float ring = abs(d - 0.11);
    float line = 1.0 - smoothstep(0.0, fwidth(d) * 1.2, ring);
    col += vec3(0.75, 0.88, 1.0) * line * 0.5 * uSelT * (1.0 - uFlat);
  }
  // Flattened, it's lit evenly; then redrawn as a chart.
  col = mix(col, albedo * uSunI * 0.85, uFlat);
  if (uChart > 0.0) col = mix(col, chartColour(p), uChart);
  gl_FragColor = vec4(col, 1.0);
}
`;function Uh(e,t,n,r){let i=new _r;i.position.copy(e),i.lookAt(t),i.updateMatrixWorld(!0);let a=n.filter(e=>e.anchor.kind===`surface`).slice(0,Vh),o=a.map(e=>e.id),s=a.map(e=>e.anchor.kind===`surface`?up(e.anchor.lat,e.anchor.lon):new q(0,0,1)),c={uSunPos:{value:r},uSunI:{value:1},uColour:{value:Np(`/moon/colour.jpg`)},uHeight:{value:Np(`/moon/height.png`)},uSite:{value:Array.from({length:Vh},(e,t)=>s[t]??new q)},uSiteN:{value:s.length},uSel:{value:-1},uSelT:{value:0}};c.uColour.value.colorSpace=Ot;for(let e of[c.uColour.value,c.uHeight.value])e.wrapS=fe,e.anisotropy=8;let l=wp(Bh,-1),u={value:new Ln},d=Op(Bh,512,256),f=Cp(Sp);for(let e of[-1,1]){let t=new Z(d,new Q({uniforms:{...c,...l,uMare:u,uSide:{value:e}},vertexShader:f,fragmentShader:Hh}));t.frustumCulled=!1,i.add(t)}let p=Dp({frame:i,center:e,radius:Bh,projection:Sp,uniforms:l,paper:[.016,.016,.022],settled:()=>i.getWorldQuaternion(new bn)}),m=!1,h=()=>{let e=c.uColour.value.image;if(m||!e)return;m=!0;let t=document.createElement(`canvas`);t.width=512,t.height=256;let n=t.getContext(`2d`,{willReadFrequently:!0});n.drawImage(e,0,0,512,256);let r=n.getImageData(0,0,512,256),i=new Float32Array(131072);for(let e=0;e<131072;e++)i[e]=(.3*r.data[e*4]+.59*r.data[e*4+1]+.11*r.data[e*4+2])/255;let a=new Float32Array(131072);for(let e=0;e<3;e++){for(let e=0;e<256;e++)for(let t=0;t<512;t++){let n=0;for(let r=-1;r<=1;r++)n+=i[e*512+(t+r+512)%512];a[e*512+t]=n/3}for(let e=0;e<256;e++)for(let t=0;t<512;t++){let n=0;for(let r=-1;r<=1;r++)n+=a[Math.min(255,Math.max(0,e+r))*512+t];i[e*512+t]=n/3}}for(let e=0;e<131072;e++){let t=Math.round(i[e]*255);r.data[e*4]=r.data[e*4+1]=r.data[e*4+2]=t,r.data[e*4+3]=255}n.putImageData(r,0,0),a=i=new Float32Array;let o=new Wa(t);o.flipY=c.uColour.value.flipY,o.wrapS=fe,u.value=o},g=sp(Bh*2.2);i.add(g);let _=(e,t)=>e.clone().multiplyScalar(t).applyMatrix4(i.matrixWorld),v=t.clone().sub(e).normalize(),y=e.clone().negate().normalize(),b=new q(0,1,0),x=0,S=0;return{id:`ithil`,root:i,center:e.clone(),radius:Bh*1.08,bodyRadius:Bh,focusDir:(()=>{let e=y.clone().addScaledVector(v,-y.dot(v)).normalize();return v.clone().multiplyScalar(.5).addScaledVector(e,.866).add(b.clone().multiplyScalar(.15)).normalize()})(),focusDistance:Bh*5,pick:g,occluder:{center:e.clone(),radius:Bh*.98},map:p.map,update(e,t){x=pp(x,S,5,t),c.uSelT.value=x,p.update(t),m||h()},setFocused(){},anchor(t){let n=o.indexOf(t);if(n<0)return null;let r=_(s[n],Bh*1.004);return{position:r,normal:r.clone().sub(e).normalize()}},placeView(t){let n=o.indexOf(t);if(n<0)return null;let r=_(s[n],1).sub(e).normalize(),i=r.clone().multiplyScalar(.85).add(y.clone().multiplyScalar(.25)).add(b.clone().multiplyScalar(.1)).normalize();return{target:e.clone().add(r.multiplyScalar(Bh*.4)),dir:i,distance:Bh*3.4}},setSelected(e){let t=e?o.indexOf(e):-1;t>=0&&(c.uSel.value=t),S=+(t>=0)}}}function Wh(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new vi,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Gh(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Gh(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Gh(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new ii(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Kh=24,qh=38,Jh=-Math.PI/2,Yh=16,Xh=1.5,Zh=.05,Qh=.075,$h=.028,eg=`
uniform float uUnroll;
uniform float uR;
uniform float uA0;
uniform float uStretch;
varying vec3 vLocal;
varying vec3 vWorld;
varying vec3 vNormalW;
varying float vRadial; // the surface's own normal, radially: 1 outwards, −1 towards the centre
void main() {
  vLocal = position;
  // Angle round the ring, continuous across the strip (the geometry's seam
  // is opposite the landing point), and the radial and tangent directions there.
  float a = 1.5707963 - 6.2831853 * uv.x;
  float da = a - uA0;
  vec3 nr = vec3(cos(a), 0.0, sin(a));
  vec3 tr = vec3(-sin(a), 0.0, cos(a));
  // How far the point stands off the land, radially (the hull below it, the walls above).
  float e = dot(position, nr) - uR;
  // Unbend: the band keeps its length while its radius of curvature grows,
  // so the landing point stays put and the rest flattens out to either side.
  float k = 1.0 - uUnroll;
  float s = uR * da;
  vec3 N0 = vec3(cos(uA0), 0.0, sin(uA0));
  vec3 T = vec3(-sin(uA0), 0.0, cos(uA0));
  vec3 p;
  vec3 n;
  vec3 t;
  if (k < 1e-4) {
    p = N0 * uR + T * s;
    n = N0;
    t = T;
  } else {
    float Rk = uR / k;
    float ang = s / Rk;
    float h = sin(ang * 0.5);
    p = N0 * (uR - 2.0 * Rk * h * h) + T * (Rk * sin(ang));
    n = N0 * cos(ang) + T * sin(ang);
    t = -N0 * sin(ang) + T * cos(ang);
  }
  p += n * e;
  p.y = position.y * uStretch;
  // The surface's normal, carried into the unbent frame.
  vRadial = dot(normal, nr);
  vec3 nl = vRadial * n + dot(normal, tr) * t + vec3(0.0, normal.y, 0.0);
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * nl);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,tg=`
uniform vec3 uSunPos;
uniform float uSunI;
uniform float uR;
uniform float uChart;
varying vec3 vLocal;
varying vec3 vWorld;
varying vec3 vNormalW;
varying float vRadial;
float gridLine(float c, float halfWidth) {
  float w = max(fwidth(c), 1e-5);
  float d = abs(fract(c + 0.5) - 0.5);
  float hw = max(halfWidth, w * 0.5);
  float line = 1.0 - smoothstep(hw - w * 0.5, hw + w * 0.5, d);
  return line * (halfWidth / hw) * (1.0 - smoothstep(0.12, 0.3, w));
}
void main() {
  vec3 N = normalize(vNormalW);
  vec3 L = normalize(uSunPos - vWorld);
  vec3 V = normalize(cameraPosition - vWorld);
  float a = atan(vLocal.z, vLocal.x);
  float r = length(vLocal.xz);
  // Below the land it's hull; above it, wall.
  float wall = 1.0 - smoothstep(-0.004, 0.004, r - uR);
  float outer = smoothstep(0.5, 0.9, vRadial);
  vec3 hull = vec3(0.03, 0.033, 0.04) + gridLine((a / 6.28318 + 0.5) * 360.0, 0.015) * 0.015 * outer;
  vec3 stone = vec3(0.3, 0.31, 0.33);
  vec3 base = mix(hull, stone, wall);
  float ndl = max(dot(N, L), 0.0);
  vec3 H = normalize(L + V);
  float spec = pow(max(dot(N, H), 0.0), 120.0);
  vec3 col = base * uSunI * (0.12 + 0.75 * ndl) + vec3(1.0, 0.95, 0.88) * spec * uSunI * mix(0.5, 0.15, wall);
  col = mix(col, vec3(0.016, 0.021, 0.03), uChart);
  gl_FragColor = vec4(col, 1.0);
}`;function ng(e,t,n){let r=e,i=Zh,a=Qh,o=$h,s=(e,t)=>new K(e,t),c=t-o,l=[[s(r-a,c),s(r,c)],[s(r-a,t),s(r-a,c)],[s(r+i,t),s(r-a,t)]],u=[...l];for(let[e,t]of l)u.push([s(t.x,-t.y),s(e.x,-e.y)]);return u.push([s(r+i,-t),s(r+i,t)]),Wh(u.map(([e,t])=>new ms([e,t],n)))}var rg=`
${rp}
uniform vec3 uSunPos;
uniform float uSunI;
uniform float uTime;
uniform float uHalfWidth;
uniform float uR;
uniform float uChart;       // 0: the ring as seen; 1: drawn as a chart
uniform float uPlate;       // a plate to light up, or −1
uniform vec2 uCharted;      // the charted plates: first, and one past the last
uniform vec3 uSettle[${Yh}]; // settlements: angle, across (−1–1), unused
uniform int uSettleN;
varying vec3 vLocal;
varying vec3 vWorld;
varying vec3 vNormalW;

// A repeating fine line (lines at whole values of c, halfWidth in the same
// units), anti-aliased. Lines thinner than a pixel are drawn a pixel wide but
// fainter, and they fade out where they crowd together, which is what
// causes moiré.
float gridLine(float c, float halfWidth) {
  float w = max(fwidth(c), 1e-5);
  float d = abs(fract(c + 0.5) - 0.5);
  float hw = max(halfWidth, w * 0.5);
  float line = 1.0 - smoothstep(hw - w * 0.5, hw + w * 0.5, d);
  return line * (halfWidth / hw) * (1.0 - smoothstep(0.12, 0.3, w));
}

// A single line where x crosses x0, px pixels wide.
float lineAt(float x, float x0, float px) {
  float w = max(fwidth(x), 1e-6);
  return 1.0 - smoothstep(px * 0.5 * w, (px * 0.5 + 1.0) * w, abs(x - x0));
}

float angleDiff(float a, float b) {
  float d = a - b;
  return d - 6.2831853 * floor((d + 3.1415927) / 6.2831853);
}

void main() {
  float a = atan(vLocal.z, vLocal.x);
  float v = vLocal.y / uHalfWidth; // -1..1 across the ring
  vec3 N = normalize(vNormalW);
  vec3 L = normalize(uSunPos - vWorld);
  vec3 V = normalize(cameraPosition - vWorld);
  float u = a / 6.28318 + 0.5;
  float plateF = u * ${Kh.toFixed(1)};
  float rim = smoothstep(0.84, 0.9, abs(v));

  // The land: shared by the ring and its chart, so their coastlines agree.
  // Each settlement raises a little ground of its own, so it's never at sea.
  vec3 q = vec3(cos(a) * 3.0, v * 0.8, sin(a) * 3.0);
  float land = fbm(q * 0.7 + 5.0, 5) + 0.12;
  float lights = 0.0;
  for (int i = 0; i < ${Yh}; i++) {
    if (i >= uSettleN) break;
    vec2 d = vec2(angleDiff(a, uSettle[i].x) * uR, (v - uSettle[i].y) * uHalfWidth);
    float r2 = dot(d, d);
    land += exp(-r2 / 0.006) * 0.42;
    lights += exp(-r2 / 0.00003);
  }

  // Line work, worked out before branching so screen-space derivatives stay
  // well defined: plate walls inside, panelling outside, and the lit edges.
  float wall = gridLine(plateF, 0.004);
  float panels = gridLine(u * 360.0, 0.015) + gridLine(v * 3.0 + 0.5, 0.025);
  float ew = max(0.025, fwidth(v) * 1.5);
  float edge = smoothstep(1.0 - ew, 1.0, abs(v)) * (0.025 / ew);

  // The chart's line work.
  float charted = smoothstep(uCharted.x - 0.3, uCharted.x, plateF) * (1.0 - smoothstep(uCharted.y, uCharted.y + 0.3, plateF));
  float isLand = smoothstep(-0.5, 0.5, land / max(fwidth(land), 1e-5));
  float coast = lineAt(land, 0.0, 1.1);
  float waterLines = lineAt(land, -0.035, 0.4) * 0.55 + lineAt(land, -0.08, 0.4) * 0.25;
  float contours = gridLine(land / 0.07, 0.025) * step(0.0, land);
  float index = gridLine(land / 0.28, 0.03) * step(0.0, land);
  float walls = gridLine(plateF, 0.0025) * step(0.45, fract(v * 9.0));
  float rims = lineAt(abs(v), 0.9, 1.2) + lineAt(abs(v), 0.845, 0.6) * 0.6;
  vec2 slope = vec2(dFdx(land), dFdy(land)) / max(fwidth(land), 1e-5);

  vec3 col;
  if (!gl_FrontFacing) {
    // Inner surface: land and sea, seamless around the ring.
    // Features stretch along the ring, as they would on a band this long.
    vec3 sea = mix(vec3(0.02, 0.065, 0.13), vec3(0.06, 0.2, 0.25), smoothstep(-0.12, 0.0, land));
    vec3 ground = mix(vec3(0.13, 0.19, 0.1), vec3(0.3, 0.28, 0.2), smoothstep(0.08, 0.3, land));
    ground = mix(ground, vec3(0.44, 0.43, 0.42), smoothstep(0.34, 0.46, land));
    vec3 surf = mix(sea, ground, smoothstep(0.0, 0.01, land));
    // A plate chosen from orbit lights up, walls and all.
    float chosen = uPlate >= 0.0 ? step(uPlate, plateF) * step(plateF, uPlate + 1.0) : 0.0;
    surf = mix(surf, vec3(0.62, 0.64, 0.68), max(wall * (0.5 + chosen * 0.5), rim));
    surf *= 1.0 + chosen * 0.45;
    vec3 cq = vec3(cos(a) * 14.0, v * 3.0, sin(a) * 14.0) + vec3(uTime * 0.02, 0.0, 0.0);
    float cloud = smoothstep(0.3, 0.7, fbm(cq, 5));
    surf = mix(surf, vec3(0.92), cloud * 0.3 * (1.0 - rim));
    vec3 Nin = -N;
    float lit = max(dot(Nin, L), 0.0);
    col = surf * uSunI * (0.2 + 0.8 * lit);
    float haze = 0.18 + 0.6 * pow(clamp(1.0 - abs(dot(Nin, V)), 0.0, 1.0), 2.0);
    col = mix(col, vec3(0.42, 0.6, 0.95) * uSunI * 0.5, haze * (1.0 - rim));
    // Settlements show as small warm lights.
    col += vec3(1.0, 0.82, 0.55) * min(lights, 1.0) * 1.2 * charted;

    if (uChart > 0.0) {
      // The chart: dark paper, pale ink, water-lined coasts, contoured land.
      vec3 ink = vec3(0.6, 0.64, 0.68);
      vec3 water = vec3(0.26, 0.4, 0.55);
      vec3 c = mix(vec3(0.010, 0.018, 0.032), vec3(0.030, 0.034, 0.040), isLand);
      // A faint hill shade, lit from the upper left.
      c += isLand * clamp(dot(slope, vec2(-0.6, 0.8)), -1.0, 1.0) * 0.006;
      c = mix(c, water, waterLines * 0.4);
      c = mix(c, ink, contours * 0.16 + index * 0.24);
      c = mix(c, ink, coast * 0.62);
      c = mix(c, ink, walls * 0.45);
      c = mix(c, ink, min(rims, 1.0) * 0.7);
      // Beyond the charted plates the chart fades out.
      c = mix(vec3(0.016, 0.021, 0.03) + coast * 0.05, c, 0.25 + 0.75 * charted);
      col = mix(col, c, uChart);
    }
  } else {
    // Outer hull: dark, precise panelling that catches the light.
    vec3 hull = vec3(0.03, 0.033, 0.04) + panels * 0.015;
    float ndl = max(dot(N, L), 0.0);
    vec3 H = normalize(L + V);
    float spec = pow(max(dot(N, H), 0.0), 120.0);
    col = hull * uSunI * (0.1 + 0.6 * ndl) + vec3(1.0, 0.95, 0.88) * spec * uSunI * 0.5;
  }
  col += vec3(0.8, 0.85, 0.95) * edge * uSunI * 0.35 * (1.0 - uChart);
  gl_FragColor = vec4(col, 1.0);
}
`,ig=`
uniform float uChart;
uniform vec2 uExtent;  // charted stretch, along (world units from the landing point)
uniform float uHalfWidth; // already stretched
varying vec2 vP;
float gridLine(float c, float halfWidth) {
  float w = max(fwidth(c), 1e-5);
  float d = abs(fract(c + 0.5) - 0.5);
  float hw = max(halfWidth, w * 0.5);
  float line = 1.0 - smoothstep(hw - w * 0.5, hw + w * 0.5, d);
  return line * (halfWidth / hw) * (1.0 - smoothstep(0.12, 0.3, w));
}
float box(vec2 p, vec2 lo, vec2 hi, float px) {
  vec2 w = max(fwidth(p), vec2(1e-6));
  vec2 dl = abs(p - lo) / w;
  vec2 dh = abs(p - hi) / w;
  bool inX = p.x > lo.x - w.x && p.x < hi.x + w.x;
  bool inY = p.y > lo.y - w.y && p.y < hi.y + w.y;
  float lx = (inY ? max(1.0 - smoothstep(px * 0.5, px * 0.5 + 1.0, dl.x), 1.0 - smoothstep(px * 0.5, px * 0.5 + 1.0, dh.x)) : 0.0);
  float ly = (inX ? max(1.0 - smoothstep(px * 0.5, px * 0.5 + 1.0, dl.y), 1.0 - smoothstep(px * 0.5, px * 0.5 + 1.0, dh.y)) : 0.0);
  return max(lx, ly);
}
void main() {
  vec3 paper = vec3(0.016, 0.021, 0.03);
  vec3 ink = vec3(0.6, 0.64, 0.68);
  float grid = gridLine(vP.x * 4.0, 0.012) + gridLine(vP.y * 4.0, 0.012);
  vec3 c = mix(paper, ink, min(grid, 1.0) * 0.022);
  vec2 lo = vec2(uExtent.x - 0.28, -uHalfWidth - 0.62);
  vec2 hi = vec2(uExtent.y + 0.28, uHalfWidth + 0.62);
  c = mix(c, ink, box(vP, lo, hi, 1.2) * 0.55);
  c = mix(c, ink, box(vP, lo - 0.035, hi + 0.035, 0.6) * 0.3);
  gl_FragColor = vec4(c, uChart);
}`;function ag(e,t,n,r,i){let a=3.8,o=.7,s=o/2,c=new _r;c.position.copy(e);let l=e.clone().setY(0).normalize(),u=new q(-l.z,0,l.x),d=n.clone().sub(e).setY(0).normalize();u.dot(d)<0&&u.negate();let f=G.degToRad(qh),p=u.multiplyScalar(Math.cos(f)).addScaledVector(l,Math.sin(f)).normalize(),m=new _r;m.quaternion.setFromUnitVectors(new q(0,1,0),p),c.add(m);let h=e.clone().normalize().projectOnPlane(p).normalize(),g=h.clone().applyQuaternion(m.quaternion.clone().invert()),_=(i[0]+i[1])/2,v=2*Math.PI*(_-.5);Math.abs(v-Jh)>1e-6&&console.warn(`The Orbital’s charted plates should be centred on the landing point.`);let y=r.filter(e=>e.anchor.kind===`strip`).slice(0,Yh),b=Array.from({length:Yh},(e,t)=>{let n=y[t]?.anchor;return n&&n.kind===`strip`?new q(2*Math.PI*(n.along-.5),n.across,0):new q}),x={uSunPos:{value:t},uSunI:{value:1.45},uTime:{value:0},uHalfWidth:{value:s},uR:{value:a},uA0:{value:Jh},uUnroll:{value:0},uStretch:{value:1},uChart:{value:0},uPlate:{value:-1},uCharted:{value:new K(i[0]*Kh,i[1]*Kh)},uSettle:{value:b},uSettleN:{value:y.length}},S=new Z(new Ya(a,a,o,512,1,!0),new Q({uniforms:x,vertexShader:eg,fragmentShader:rg,side:2}));S.rotation.y=Jh-Math.atan2(g.z,g.x),S.frustumCulled=!1,m.add(S);let C=new Z(ng(a,s,512),new Q({uniforms:x,vertexShader:eg,fragmentShader:tg,side:2}));C.frustumCulled=!1,S.add(C);let w=a*(2*Math.PI*(i[0]-.5)-Jh),T=a*(2*Math.PI*(i[1]-.5)-Jh),E={uChart:x.uChart,uExtent:{value:new K(w,T)},uHalfWidth:{value:s*Xh}},D=new Z(new hs(80,80),new Q({uniforms:E,vertexShader:`
        varying vec2 vP;
        void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:ig,transparent:!0,depthWrite:!1}));D.position.set(0,0,-3.8-.03),D.rotation.y=0,D.visible=!1,S.add(D);let O=sp(a*1.15);c.add(O),c.updateMatrixWorld(!0);let k=p.clone();k.dot(n.clone().sub(e))<0&&k.negate();let A=k.clone().multiplyScalar(.62).addScaledVector(h,-.78).normalize(),j=e.clone().addScaledVector(h,a*.12),ee=new q(Math.cos(Jh),0,Math.sin(Jh)),M=new q(-Math.sin(Jh),0,Math.cos(Jh)),N=new q(0,1,0),P=e=>e.clone().transformDirection(S.matrixWorld),te={origin:S.localToWorld(ee.clone().multiplyScalar(a)),along:P(M),across:P(N),normal:P(ee).negate(),approach:k.clone(),landingDistance:a},ne=e=>e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI)),re=e=>a*ne(2*Math.PI*(e-.5)-Jh),ie=new q,ae=()=>1+.5*F.chart,F={unroll:0,chart:0,plate:-1,charted:i,plates:Kh,bandWidth:o*Xh,frame:te,panOf:re,acrossOf:e=>e*s*ae(),point(e,t,n=new q){let r=re(e),i=1-F.unroll;if(i<1e-4)ie.copy(ee).multiplyScalar(a).addScaledVector(M,r);else{let e=a/i,t=r/e,n=Math.sin(t/2);ie.copy(ee).multiplyScalar(a-2*e*n*n).addScaledVector(M,e*Math.sin(t))}return ie.y=t*s*ae(),n.copy(ie).applyMatrix4(S.matrixWorld)}};return{id:`orbital`,root:c,center:e.clone(),radius:a*1.05,focusDistance:a*4.2,focusDir:A,focusTarget:j,pick:O,surface:F,update(e){x.uTime.value=e,x.uUnroll.value=F.unroll,x.uChart.value=F.chart,x.uStretch.value=ae(),x.uPlate.value=F.plate,D.visible=F.chart>.001},setFocused(){}}}function og(e,t,n,r,i){let a=t.clone().normalize();return{target:e.clone(),radius:n,theta:Math.atan2(a.x,a.z),phi:Math.acos(G.clamp(a.y,-1,1)),shiftX:r,shiftY:i}}var sg=new q(0,1,0),cg=34,lg=G.degToRad(7),ug=e=>e*e*e*(e*(e*6-15)+10),dg=e=>e*e*(3-2*e),fg=e=>1-(1-e)**3,pg=e=>G.smoothstep(e,0,1);function mg(e,t,n,r,i,a){let o=1-i;return a.copy(e).multiplyScalar(o*o*o).addScaledVector(t,3*o*o*i).addScaledVector(n,3*o*i*i).addScaledVector(r,i*i*i)}var hg=e=>new q(Math.sin(e.phi)*Math.sin(e.theta),Math.cos(e.phi),Math.sin(e.phi)*Math.cos(e.theta)).multiplyScalar(e.radius).add(e.center),gg=(e,t=e.pan,n=e.distance)=>{let r=e.origin.clone().addScaledVector(e.along,t);return{position:r.clone().addScaledVector(e.normal,n),look:r}},_g=class{camera;mode=`free`;pos=new q;yaw=0;pitch=0;goalYaw=0;goalPitch=0;orbit=null;theta=0;phi=1;radius=10;goalTheta=0;goalPhi=1;goalRadius=10;shiftGoal=new K;chart=null;pan=0;goalPan=0;distance=1;goalDistance=1;up=sg.clone();sway=0;floatNow=0;shift=new K;bias=new K;biasNow=new K;look=new q;flight=null;dragging=!1;lastX=0;lastY=0;moved=0;time=0;reducedMotion=matchMedia(`(prefers-reduced-motion: reduce)`).matches;mapControl=null;constructor(e,t,n){this.camera=e,this.setFree(n);let r=new Map,i=e=>e===t||!!e?.closest?.(`#labels, .chart`),a=()=>{let[e,t]=[...r.values()];return{dist:Math.hypot(e.x-t.x,e.y-t.y),x:(e.x+t.x)/2,y:(e.y+t.y)/2}},o=null;window.addEventListener(`pointerdown`,e=>{if(e.button===0&&i(e.target)&&(r.set(e.pointerId,{x:e.clientX,y:e.clientY}),e.target===t&&(t.setPointerCapture(e.pointerId),this.dragging=!0,this.moved=0,this.lastX=e.clientX,this.lastY=e.clientY),r.size===2)){o=a(),this.moved+=100;for(let e of r.keys())try{t.setPointerCapture(e)}catch{}}},!0),window.addEventListener(`pointermove`,e=>{if(!r.has(e.pointerId))return;if(r.set(e.pointerId,{x:e.clientX,y:e.clientY}),o&&r.size>=2){this.mode!==`flight`&&this.pinchBy(a(),o),o=a();return}if(!this.dragging||this.mode===`flight`)return;let t=e.clientX-this.lastX,n=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.moved+=Math.abs(t)+Math.abs(n),this.mapControl?this.mapControl.pan(t,n,e.clientX,e.clientY):this.mode===`free`?(this.goalYaw+=t*.0032,this.goalPitch=G.clamp(this.goalPitch+n*.0032,-1.2,1.2)):this.mode===`chart`?this.panBy(t,n):(this.goalTheta-=t*.0035,this.goalPhi=G.clamp(this.goalPhi-n*.0025,.35,2.2))});let s=e=>{if(!r.delete(e.pointerId))return;r.size<2&&(o=null);let t=[...r.values()][0];t?(this.lastX=t.x,this.lastY=t.y):this.dragging=!1};window.addEventListener(`pointerup`,s),window.addEventListener(`pointercancel`,s),t.addEventListener(`wheel`,e=>{if(this.mapControl&&this.mode!==`flight`){e.preventDefault(),Math.abs(e.deltaX)>Math.abs(e.deltaY)?this.mapControl.pan(-e.deltaX,0):this.mapControl.zoom(e.deltaY*(e.ctrlKey?.01:.0015),e.clientX,e.clientY);return}if(this.mode===`chart`&&this.chart){e.preventDefault(),Math.abs(e.deltaX)>Math.abs(e.deltaY)?this.panBy(-e.deltaX,0):this.zoomBy(e.deltaY*(e.ctrlKey?.01:.0015));return}this.mode===`orbit`&&this.orbit&&(e.preventDefault(),this.goalRadius=G.clamp(this.goalRadius*Math.exp(e.deltaY*.0012),this.orbit.radius*.7,this.orbit.radius*1.6))},{passive:!1})}get wasDrag(){return this.moved>6}get busy(){return this.mode===`flight`}get surge(){return G.clamp(-this.sway/.012,-1,1)}get speed(){let e=this.flight;if(!e)return 0;let t=G.clamp((this.time-e.start)/e.duration,0,1);return Math.max(.25,e.boost)*Math.sin(Math.PI*t)**2}get flightRemaining(){let e=this.flight;return e?Math.max(0,e.duration-(this.time-e.start)):null}get charting(){return this.mode===`chart`}pxPerUnit(e=this.distance){return window.innerHeight/(2*e*Math.tan(G.degToRad(cg/2)))}panBy(e,t){let n=this.chart;if(!n)return;let r=new q().setFromMatrixColumn(this.camera.matrixWorld,0),i=new q().setFromMatrixColumn(this.camera.matrixWorld,1),a=n.along.dot(r),o=n.along.dot(i);this.goalPan=G.clamp(this.goalPan-(e*a-t*o)/this.pxPerUnit(),n.panRange[0],n.panRange[1])}pinchBy(e,t){let n=e.dist/Math.max(1,t.dist);this.mapControl?(this.mapControl.pan(e.x-t.x,e.y-t.y,e.x,e.y),this.mapControl.zoom(-Math.log(n),e.x,e.y)):this.mode===`chart`?(this.panBy(e.x-t.x,e.y-t.y),this.zoomBy(-Math.log(n))):this.mode===`orbit`&&this.orbit&&(this.goalRadius=G.clamp(this.goalRadius/n,this.orbit.radius*.7,this.orbit.radius*1.6))}zoomBy(e){let t=this.chart;t&&(this.goalDistance=G.clamp(this.goalDistance*Math.exp(e),t.distanceRange[0],t.distanceRange[1]))}setShift(e,t){this.shift.set(e,t),this.shiftGoal.set(e,t),this.orbit&&(this.orbit.shiftX=e,this.orbit.shiftY=t)}easeShift(e,t){if(this.mode!==`orbit`||!this.orbit)return this.setShift(e,t);this.shiftGoal.set(e,t),this.orbit.shiftX=e,this.orbit.shiftY=t}chartTo(e,t){let n=this.chart;n&&(this.goalPan=G.clamp(e,n.panRange[0],n.panRange[1]),this.goalDistance=G.clamp(t,n.distanceRange[0],n.distanceRange[1]))}get chartState(){return{pan:this.pan,distance:this.distance,goalPan:this.goalPan,goalDistance:this.goalDistance,pxPerUnit:this.pxPerUnit()}}setFree(e){this.mode=`free`,this.orbit=null,this.chart=null,this.up.copy(sg),this.pos.copy(e.position);let t=e.look.clone().sub(e.position).normalize();this.yaw=this.goalYaw=Math.atan2(t.x,t.z),this.pitch=this.goalPitch=Math.asin(G.clamp(t.y,-1,1)),this.shift.set(e.shiftX,e.shiftY)}setOrbit(e){this.mode=`orbit`,this.chart=null,this.up.copy(sg),this.orbit={...e,center:e.center.clone()},this.theta=this.goalTheta=e.theta,this.phi=this.goalPhi=e.phi,this.radius=this.goalRadius=e.radius,this.shift.set(e.shiftX,e.shiftY),this.shiftGoal.copy(this.shift)}reframe(e){return this.mode!==`orbit`||!this.orbit||!this.orbit.center.equals(e.center)?!1:(this.orbit={...e,center:e.center.clone()},this.goalPhi=e.phi,this.goalRadius=e.radius,this.shiftGoal.set(e.shiftX,e.shiftY),!0)}setChart(e){this.mode=`chart`,this.orbit=null,this.chart=e,this.pan=this.goalPan=e.pan,this.distance=this.goalDistance=e.distance,this.up.copy(e.up),this.shift.set(e.shiftX,e.shiftY)}settle(e){e.kind===`orbit`?this.setOrbit(e.spec):e.kind===`chart`?this.setChart(e.spec):this.setFree(e.spec)}toOrbit(e,t=!1,n,r={}){let i=hg(e);return this.fly({position:i,look:e.center.clone(),up:sg,shiftX:e.shiftX,shiftY:e.shiftY},{kind:`orbit`,spec:e},t,n,r.gentle,r.avoid)}toFree(e,t=!1){return this.fly({...e,up:sg},{kind:`free`,spec:e},t)}toChart(e,t=!1){let n=gg(e);return this.fly({...n,up:e.up,shiftX:e.shiftX,shiftY:e.shiftY},{kind:`chart`,spec:e},t)}fly(e,t,n,r,i=!1,a=[]){if(this.flight?.resolve(),this.flight=null,n||this.reducedMotion)return this.settle(t),Promise.resolve();let o=this.camera.position.clone(),s=e.position.clone(),c=o.distanceTo(s),l=new q(0,1,0),u=this.mode===`orbit`&&this.orbit&&this.orbit.radius<c*.5,d=i&&t.kind===`orbit`?t.spec.center:null,f=d?o.clone().sub(d).normalize():null,p=f?f.clone().addScaledVector(s.clone().sub(o).normalize(),.6).normalize():u?o.clone().sub(this.orbit.center).normalize():s.clone().sub(o).normalize();d&&(a=[...a,{center:d,radius:.92*Math.min(o.distanceTo(d),s.distanceTo(d))}]);let m=t.kind===`orbit`?s.clone().sub(t.spec.center).normalize():t.kind===`chart`?t.spec.approach.clone():o.clone().sub(s).normalize(),h=o.clone().addScaledVector(p,f?c*.35:Math.min(c*.3,Math.max(6,c*.12))).addScaledVector(l,c*.06),g=s.clone().addScaledVector(m,c*.28).addScaledVector(l,c*.03),_=new q,v=!1;for(let e of a)if(!(o.distanceTo(e.center)<e.radius||s.distanceTo(e.center)<e.radius))for(let t=0;t<8;t++){let t=1/0,n=.5;for(let r=1;r<32;r++){let i=mg(o,h,g,s,r/32,_).distanceTo(e.center);i<t&&(t=i,n=r/32)}if(t>=e.radius)break;let r=mg(o,h,g,s,n,_).sub(e.center);r.lengthSq()<1e-6&&r.crossVectors(s.clone().sub(o),l),r.normalize();let i=(e.radius-t)*1.5+e.radius*.1;h.addScaledVector(r,i),g.addScaledVector(r,i),v=!0}let y=0,b=o.clone();for(let e=1;e<=32;e++)mg(o,h,g,s,e/32,_),y+=_.distanceTo(b),b.copy(_);let x=this.look.clone().sub(o).normalize(),S=e.look.clone().sub(o).normalize(),C=-(Math.sign(new q().crossVectors(x,S).dot(this.up))||0)*lg*G.clamp(x.angleTo(S)/1.2,0,1)*G.clamp(c/40,0,1);return new Promise(n=>{this.flight={p0:o,c1:h,c2:g,p1:s,look0:this.look.clone(),look1:e.look.clone(),up0:this.up.clone(),up1:e.up.clone(),shift0:this.shift.clone(),shift1:new K(e.shiftX,e.shiftY),start:this.time,duration:r?r.seconds:i?G.clamp(3+y/30,3,8):G.clamp(1.8+(v?y:c)/60,1.8,6),boost:r?0:G.clamp(c/120,0,1)*(i?.5:1),bank:r?0:C*(i?.6:1),gentle:i&&!r,then:t,resolve:n},this.mode=`flight`})}update(e,t,n,r){this.time=e;let i=this.camera,a=cg,o=1-Math.exp(-5*t);if(this.mode===`flight`&&this.flight){let t=this.flight,n=G.clamp((e-t.start)/t.duration,0,1),r=t.gentle?dg(n):ug(n);mg(t.p0,t.c1,t.c2,t.p1,r,i.position);let o=fg(Math.min(1,n/.4)),s=t.look0.clone().sub(i.position).normalize(),c=t.look1.clone().sub(i.position).normalize(),l=s.lerp(c,o).normalize();this.look.copy(i.position).addScaledVector(l,Math.max(1,t.look1.distanceTo(i.position))),this.up.copy(t.up0).lerp(t.up1,pg((n-.35)/.6)),this.up.lengthSq()<1e-6&&this.up.copy(t.up1);let u=this.look.clone().sub(i.position).normalize(),d=t.bank*Math.sin(Math.PI*Math.min(1,n/.55));i.up.copy(this.up.normalize()).applyAxisAngle(u,d),i.lookAt(this.look),this.sway=-.012*t.boost*Math.sin(2*Math.PI*n)*(1-n);let f=1-pg(n/.3),p=pg((n-.7)/.3);this.shift.set(t.shift0.x*f+t.shift1.x*p,t.shift0.y*f+t.shift1.y*p),a=cg+7*t.boost*Math.sin(Math.PI*n)**2,n>=1&&(this.flight=null,this.sway=0,this.settle(t.then),t.resolve())}if(this.mode===`orbit`&&this.orbit){let e=this.orbit.spin*t;this.goalTheta+=e,this.theta+=e,this.theta=pp(this.theta,this.goalTheta,5,t),this.phi=pp(this.phi,this.goalPhi,5,t),this.radius=pp(this.radius,this.goalRadius,5,t),this.shift.set(pp(this.shift.x,this.shiftGoal.x,5,t),pp(this.shift.y,this.shiftGoal.y,5,t)),i.position.copy(hg({center:this.orbit.center,radius:this.radius,theta:this.theta,phi:this.phi})),this.look.copy(this.orbit.center),i.up.copy(sg),i.lookAt(this.look)}else if(this.mode===`chart`&&this.chart){this.pan=pp(this.pan,this.goalPan,6,t),this.distance=pp(this.distance,this.goalDistance,5,t);let e=gg(this.chart,this.pan,this.distance);i.position.copy(e.position),this.look.copy(e.look),i.up.copy(this.chart.up),i.lookAt(this.look)}else if(this.mode===`free`){this.yaw+=(this.goalYaw-this.yaw)*o,this.pitch+=(this.goalPitch-this.pitch)*o,i.position.copy(this.pos).add(new q(Math.sin(e*.21)*.15,Math.sin(e*.17+1)*.1,0));let t=new q(Math.cos(this.pitch)*Math.sin(this.yaw),Math.sin(this.pitch),Math.cos(this.pitch)*Math.cos(this.yaw));this.look.copy(i.position).addScaledVector(t,100),i.up.copy(sg),i.lookAt(this.look)}i.fov=a,this.biasNow.lerp(this.bias,o);let s=this.reducedMotion||this.mode===`chart`||this.mode===`flight`?0:1;this.floatNow+=(+!!s-this.floatNow)*o;let c=9e-4*Math.sin(e*.31)*this.floatNow,l=.0012*Math.sin(e*.23+1)*this.floatNow;i.setViewOffset(n,r,(this.shift.x+this.biasNow.x+c)*n,(this.shift.y+this.biasNow.y+this.sway+l)*r,n,r),i.updateProjectionMatrix(),i.updateMatrixWorld()}},vg=(e=0,t=0,n=0)=>new q(e,t,n),yg=(e,t)=>e+Math.random()*(t-e),bg=e=>e[Math.floor(Math.random()*e.length)],xg=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},Sg=15e4,Cg=1450,wg=70,Tg=3.2,Eg=e=>e>1e-6?(1-Math.cos(Math.sqrt(e)))/e:e<-1e-6?(Math.cosh(Math.sqrt(-e))-1)/-e:.5-e/24,Dg=e=>{if(e>1e-6){let t=Math.sqrt(e);return(t-Math.sin(t))/(t*t*t)}if(e<-1e-6){let t=Math.sqrt(-e);return(Math.sinh(t)-t)/(t*t*t)}return 1/6-e/120};function Og(e,t,n,r){let i=e.length(),a=t.length(),o=vg().crossVectors(e,t),s=Math.acos(G.clamp(e.dot(t)/(i*a),-1,1));(r?o.y>0:o.y<0)&&(s=2*Math.PI-s);let c=Math.sin(s)*Math.sqrt(i*a/(1-Math.cos(s)));if(!Number.isFinite(c)||Math.abs(c)<.001)return null;let l=e=>i+a+c*(e*Dg(e)-1)/Math.sqrt(Eg(e)),u=e=>{let t=l(e);return t<0?-1/0:((t/Eg(e))**1.5*Dg(e)+c*Math.sqrt(t))/Math.sqrt(Sg)},d=-40,f=4*Math.PI*Math.PI-.001;for(;u(d)>n&&d>-4e3;)d*=2;if(u(d)>n||u(f)<n)return null;for(let e=0;e<90;e++){let e=(d+f)/2;u(e)<n?d=e:f=e}let p=l((d+f)/2),m=1-p/i,h=c*Math.sqrt(p/Sg),g=1-p/a;return!Number.isFinite(h)||Math.abs(h)<1e-9?null:{v1:t.clone().addScaledVector(e,-m).divideScalar(h),v2:t.clone().multiplyScalar(g).sub(e).divideScalar(h)}}function kg(e,t,n,r,i){let a=Math.max(2,Math.ceil(r*60)),o=new Float32Array((a+1)*3),s=r/a/2,c=[e.x,e.y,e.z,t.x,t.y,t.z],l=[new Float64Array(6),new Float64Array(6),new Float64Array(6),new Float64Array(6)],u=new Float64Array(6),d=(e,t)=>{let n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=-15e4/(n*Math.sqrt(n));t[0]=e[3],t[1]=e[4],t[2]=e[5],t[3]=r*e[0],t[4]=r*e[1],t[5]=r*e[2]},f=1/0;o.set([e.x,e.y,e.z],0);for(let e=1;e<=a;e++){for(let e=0;e<2;e++){d(c,l[0]);for(let e=0;e<6;e++)u[e]=c[e]+s/2*l[0][e];d(u,l[1]);for(let e=0;e<6;e++)u[e]=c[e]+s/2*l[1][e];d(u,l[2]);for(let e=0;e<6;e++)u[e]=c[e]+s*l[2][e];d(u,l[3]);for(let e=0;e<6;e++)c[e]+=s/6*(l[0][e]+2*l[1][e]+2*l[2][e]+l[3][e])}f=Math.min(f,Math.hypot(c[0],c[1],c[2])),o.set([c[0],c[1],c[2]],e*3)}let p=vg(c[0],c[1],c[2]),m=n.clone().sub(p);if(f<wg||m.length()>8)return null;for(let e=0;e<=a;e++){let t=e/a;o[e*3]+=m.x*t,o[e*3+1]+=m.y*t,o[e*3+2]+=m.z*t}return{dur:r,at(e,t,n){let s=Math.min(a-1e-6,Math.max(0,e/r*a)),c=Math.floor(s),l=s-c;t.set(o[c*3]+(o[c*3+3]-o[c*3])*l,o[c*3+1]+(o[c*3+4]-o[c*3+1])*l,o[c*3+2]+(o[c*3+5]-o[c*3+2])*l),n.light=i(e/r),n.burn=0,n.flash=0}}}var Ag=e=>e.dur*(e.w0+e.w1)/2;function jg(e,t,n,r,i){let a=vg().crossVectors(t,n);return{dur:i.reduce((e,t)=>e+t.dur,0),at(t,o,s){let c=r,l=0;for(;l<i.length-1&&t>i[l].dur;)c+=Ag(i[l]),t-=i[l].dur,l++;let u=i[l],d=Math.min(u.dur,Math.max(0,t)),f=u.dur>0?d/u.dur:1;c+=u.w0*d+(u.w1-u.w0)*d*d/(2*Math.max(1e-6,u.dur));let p=u.r0+(u.r1-u.r0)*xg(f);o.copy(e).addScaledVector(n,p*Math.cos(c)).addScaledVector(a,p*Math.sin(c)),u.look(f,s)}}}var Mg=(e,t=0,n=0)=>(r,i)=>{i.light=e,i.burn=t,i.flash=n},Ng=.5,Pg=e=>{let t=vg(yg(-.8,.8),1,yg(-.8,.8)).normalize(),n=t.addScaledVector(e,-t.dot(e));return n.lengthSq()<1e-6?vg(0,1,0):n.normalize()},Fg=e=>({R0:yg(17,27),Rs:e.radius*1.05,wL:2*Math.PI/yg(3.6,5.4),tb:yg(1.3,1.9)});function Ig(e,t,n,r,i){let a=vg().crossVectors(r,n),o=Math.max(t.wL,i/t.R0);return[jg(e.center,n,a,0,[{dur:t.tb,w0:o,w1:t.wL,r0:t.R0,r1:t.R0,look:(e,t)=>{t.light=1,t.burn=1-e**4,t.flash=0}},{dur:(2*Math.PI*Math.floor(yg(1,2.6))-Math.PI*.5)/t.wL,w0:t.wL,w1:t.wL,r0:t.R0,r1:t.R0,look:Mg(1)},{dur:1.3*Math.PI/(.8*t.wL),w0:t.wL,w1:.6*t.wL,r0:t.R0,r1:t.Rs,look:(e,t)=>{t.light=1-xg((e-.55)/.45),t.burn=e<.15?.5:0,t.flash=0}}]),Lg(Ng,(e,t)=>{t.light=0,t.burn=0,t.flash=Math.sin(Math.PI*e)})]}function Lg(e,t){return{dur:e,at:(n,r,i)=>t(n/e,i)}}function Rg(e,t,n,r,i){let a=vg().crossVectors(r,n),o=Math.max(t.wL,i/t.R0),s=[{dur:Ng,w0:0,w1:0,r0:t.Rs,r1:t.Rs,look:(e,t)=>{t.light=0,t.burn=0,t.flash=Math.sin(Math.PI*e)}},{dur:1.3*Math.PI/(.8*t.wL),w0:.6*t.wL,w1:t.wL,r0:t.Rs,r1:t.R0,look:(e,t)=>{t.light=xg(e/.45),t.burn=e<.3?.6:0,t.flash=0}},{dur:(2*Math.PI*Math.floor(yg(.6,1.8))+Math.PI*yg(.3,1))/t.wL,w0:t.wL,w1:t.wL,r0:t.R0,r1:t.R0,look:Mg(1)},{dur:t.tb,w0:t.wL,w1:o,r0:t.R0,r1:t.R0,look:(e,t)=>{t.light=1,t.burn=xg(e/.25),t.flash=0}}];return[jg(e.center,n,a,-s.reduce((e,t)=>e+Ag(t),0),s)]}function zg(e,t,n,r,i,a,o){let s=vg().crossVectors(r,n),c=vg().crossVectors(a,n),l=Math.atan2(vg().crossVectors(s,c).dot(n),s.dot(c));l<0&&(l+=2*Math.PI);let u=Math.max(t.wL,i/t.R0),d=Math.max(t.wL,o/t.R0),f={dur:t.tb,w0:u,w1:t.wL,r0:t.R0,r1:t.R0,look:(e,t)=>{t.light=1,t.burn=1-e**4,t.flash=0}},p={dur:t.tb,w0:t.wL,w1:d,r0:t.R0,r1:t.R0,look:(e,t)=>{t.light=1,t.burn=xg(e/.25),t.flash=0}},m=l;for(;m-Ag(f)-Ag(p)<1.2*t.wL;)m+=2*Math.PI;Math.random()<.35&&(m+=2*Math.PI);let h=(m-Ag(f)-Ag(p))/t.wL;return[jg(e.center,n,s,0,[f,{dur:h,w0:t.wL,w1:t.wL,r0:t.R0,r1:t.R0,look:Mg(1)},p])]}var Bg=()=>{let e=yg(0,2*Math.PI),t=yg(-.4,.4);return vg(Math.cos(e)*Math.cos(t),Math.sin(t),Math.sin(e)*Math.cos(t)).multiplyScalar(Cg)};function Vg(e,t=!1){let n=!t&&Math.random()<.45,r=n?bg(e):null,i=n&&Math.random()<.18?0:(()=>{let e=Math.random();return e<.5?1:e<.85?2:3})(),a=[],o=r;for(let t=0;t<i;t++){let n=bg(e.filter(e=>e!==o));a.push({port:n,land:t===i-1||Math.random()<.6}),o=n}let s=i===0||Math.random()<(n?.55:.4);return s&&i>0&&Math.random()<.3&&(a[i-1].land=!1),{from:r??Bg(),stops:a,leave:s}}function Hg(e,t,n){let r=[];r.push(e.from instanceof q?{port:null,far:e.from,land:!1}:{port:e.from,far:null,land:!0});for(let t of e.stops)r.push({port:t.port,far:null,land:t.land});if(e.leave&&r.push({port:null,far:Bg(),land:!1}),r.length<2)return null;for(let e of r)e.port&&(e.L=Fg(e.port));let i=r.slice(1).map((e,t)=>{let i=r[t],a=i.far??i.port.center,o=e.far??e.port.center;return G.clamp(a.distanceTo(o)/(n*(i.far||e.far?1.25:1)),9,32)}),a=[];for(let e=0;e<3;e++){for(let n=0;n<r.length-1;n++){let o=r[n],s=r[n+1],c=Og(o.far??(e?o.X:o.port.center),s.far??(e?s.E:s.port.center),i[n],t);if(!c)return null;a[n]=c}for(let t=0;t<r.length;t++){let n=r[t];if(!n.port)continue;let i=n.port.center,o=n.L;if(t>0&&(n.vIn=a[t-1].v2.length(),n.dIn=a[t-1].v2.clone().normalize()),t<r.length-1&&(n.vOut=a[t].v1.length(),n.dOut=a[t].v1.clone().normalize()),n.dIn&&n.dOut&&!n.land){let e=vg().crossVectors(n.dIn,n.dOut);n.nIn=n.nOut=e.lengthSq()>.01?e.normalize():Pg(n.dIn),e.lengthSq()<=.01&&(n.dOut=n.dOut.clone().addScaledVector(n.nOut,-n.dOut.dot(n.nOut)).normalize())}else n.dIn&&(n.nIn=e&&n.nIn?n.nIn.clone().addScaledVector(n.dIn,-n.nIn.dot(n.dIn)).normalize():Pg(n.dIn)),n.dOut&&(n.nOut=e&&n.nOut?n.nOut.clone().addScaledVector(n.dOut,-n.nOut.dot(n.dOut)).normalize():Pg(n.dOut));n.dIn&&(n.E=i.clone().addScaledVector(vg().crossVectors(n.dIn,n.nIn),o.R0)),n.dOut&&(n.X=i.clone().addScaledVector(vg().crossVectors(n.dOut,n.nOut),o.R0))}}for(let e=0;e<r.length-1;e++){let n=r[e],o=r[e+1],s=Og(n.far??n.X,o.far??o.E,i[e],t);if(!s)return null;a[e]=s}let o=[];for(let e=0;e<r.length;e++){let t=r[e];if(t.port){let e=t.L;t.dIn&&!t.land?o.push(...zg(t.port,e,t.nIn,t.dIn,t.vIn,t.dOut,t.vOut)):(t.dIn&&o.push(...Ig(t.port,e,t.nIn,t.dIn,t.vIn)),t.dIn&&t.dOut&&o.push(Lg(yg(3,9),Mg(0))),t.dOut&&o.push(...Rg(t.port,e,t.nOut,t.dOut,t.vOut)))}if(e<r.length-1){let n=t,s=r[e+1],c=n.far??n.X,l=s.far??s.E,u=n.far?e=>xg(e/.3):s.far?e=>1-xg((e-.55)/.45):()=>1,d=kg(c,a[e].v1,l,i[e],u);if(!d)return null;o.push(d)}}return o}var Ug=`
uniform float uSize;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uSize;
}`,Wg=`
uniform vec3 uColor;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(q, q);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(uColor * (exp(-d2 * 26.0) + 0.3 * exp(-d2 * 5.0)) * (1.0 - d2), 1.0);
}`,Gg=`
attribute vec4 aColor;
varying vec4 vColor;
void main() {
  vColor = aColor;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Kg=`
varying vec4 vColor;
void main() { gl_FragColor = vec4(vColor.rgb * vColor.a, 1.0); }`,qg=[vg(1,.95,.88),vg(.85,.95,1),vg(.86,1,.9),vg(1,.88,.92)],Jg=vg(.68,.84,1),Yg=vg(1,.95,.85);function Xg(e,t,n){let r=new URLSearchParams(location.search),i=r.has(`traffic`),a=Math.max(1,Number(r.get(`traffic`))||1),o=new Q({uniforms:{uColor:{value:vg()},uSize:{value:8}},vertexShader:Ug,fragmentShader:Wg,transparent:!0,depthWrite:!1,blending:2}),s=new Va(new vi().setAttribute(`position`,new X([0,0,0],3)),o);s.frustumCulled=!1,s.visible=!1,e.add(s);let c=Math.ceil(Tg*30)+4,l=new Float32Array(600),u=new Float32Array(800),d=new vi;d.setAttribute(`position`,new ii(l,3).setUsage(Pt)),d.setAttribute(`aColor`,new ii(u,4).setUsage(Pt));let f=new Fa(d,new Q({vertexShader:Gg,fragmentShader:Kg,transparent:!0,depthWrite:!1,blending:2}));f.frustumCulled=!1,e.add(f);let p=[],m=-1,h=0,g=-1,_=1,v=null,y=vg(),b={light:0,burn:0,flash:0},x=vg(),S=e=>{for(let n=0;n<24;n++){let n=Hg(Vg(t,e),Math.random()<.7,yg(34,60));if(!n)continue;let r=n.reduce((e,t)=>e+t.dur,0);if(!(r>170))return{stretches:n,t:e?n[0].dur*.25:0,dur:r,tint:bg(qg),blink:Math.random()<.55?yg(1.1,2.3):0,going:!1}}return null},C=!1,w=null;function T(e,t){if(e*=a,h+=e,t?(g<0&&(g=h+(i?1:C?yg(10,30):5)),!v&&h>=g&&(v=S(!C),C=!0,_=1,v||(g=h+5))):(g=-1,v&&(v.going=!0)),v?.going&&(_-=e/.6,_<=0&&(v=null,s.visible=!1)),w=null,v){if(v.t+=e,v.t>=v.dur)v=null,s.visible=!1,g=h+(i?2:yg(10,30));else{let e=v.t,t=0;for(;t<v.stretches.length-1&&e>v.stretches[t].dur;)e-=v.stretches[t].dur,t++;v.stretches[t].at(e,y,b);let r=v.blink&&v.t/v.blink%1<.07?.8:0,i=(b.light*(1+r)*(1+1.8*b.burn)+3*b.flash)*_;x.copy(v.tint).lerp(Jg,b.burn).multiplyScalar(b.light*(1+r)*(1+1.8*b.burn)*_).addScaledVector(Yg,3*b.flash*_),o.uniforms.uColor.value.copy(x),o.uniforms.uSize.value=(7+4*b.burn+9*b.flash)*n,s.geometry.attributes.position.setXYZ(0,y.x,y.y,y.z),s.geometry.attributes.position.needsUpdate=!0,s.visible=i>.002,b.light*_>.02&&(w={x:y.x,y:y.y,z:y.z,light:b.light*_,burn:b.burn}),h-m>=1/30&&(m=h,p.push({p:y.clone(),c:x.clone().multiplyScalar(.4),t:h,on:b.light>.01}))}}for(;p.length&&h-p[0].t>Tg;)p.shift();for(;p.length>c;)p.shift();let r=0;for(let e=0;e+1<p.length;e++){let t=p[e],n=p[e+1];if(t.on&&n.on){for(let[e,i]of[[t,0],[n,1]]){let t=1-(h-e.t)/Tg,n=Math.max(0,t)**2;l.set([e.p.x,e.p.y,e.p.z],(r*2+i)*3),u.set([e.c.x,e.c.y,e.c.z,n],(r*2+i)*4)}r++}}d.setDrawRange(0,r*2),d.attributes.position.needsUpdate=!0,d.attributes.aColor.needsUpdate=!0,f.visible=r>0}return{update:T,state:()=>w}}function Zg(e,t,n,r,i){let a=n-e,o=r-t,s=0,c=1;for(let[n,r]of[[-a,e-i.x],[a,i.x+i.w-e],[-o,t-i.y],[o,i.y+i.h-t]])if(n===0){if(r<0)return!1}else{let e=r/n;if(n<0?s=Math.max(s,e):c=Math.min(c,e),s>c)return!1}return!0}var Qg=(e,t)=>e.x<t.x+t.w&&t.x<e.x+e.w&&e.y<t.y+t.h&&t.y<e.y+e.h,$g=e=>{let t=window.devicePixelRatio||1;return(Math.round(e*t)/t).toFixed(2)},e_=e=>{let t=Math.ceil(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`},t_=new q,n_=new q,r_=new q,i_=new q(0,1,0),a_=class{container;handlers;worldLabels=[];placeLabels=[];focused=null;hovered=null;active=null;suppressed=!1;destination=null;eta=null;found=null;marks=new Map;leader;leaderTo=null;constructor(e,t){this.container=e,this.handlers=t,this.leader=document.createElement(`div`),this.leader.className=`leader is-off`,this.leader.innerHTML=`<i></i>`,e.append(this.leader)}addWorld(e,t,n,r=0,i,a=[],o=0){let s=document.createElement(`button`);s.className=`wlabel wlabel--${e.id}`,s.innerHTML=`<span class="name">${o?`<span class="num">${o}</span>`:``}${t}</span><span class="sub">${n}</span><span class="data"></span><span class="cue"></span>`,s.setAttribute(`aria-label`,`${o?`${o}: `:``}${t}: ${n}${r?` (${r} new)`:``}`),s.addEventListener(`click`,()=>this.handlers.onWorldClick(e.id)),s.addEventListener(`pointerenter`,t=>t.pointerType===`mouse`&&this.handlers.onWorldHover(e.id)),s.addEventListener(`pointerleave`,e=>e.pointerType===`mouse`&&this.handlers.onWorldHover(null));let c=document.createElement(`div`);c.className=`pole pole--${e.id}`;let l=document.createElement(`div`);l.className=`beacon beacon--${e.id}`,l.addEventListener(`click`,()=>this.handlers.onWorldClick(e.id)),this.container.append(c,l,s);let u=s.querySelector(`.data`),d=s.querySelector(`.cue`);this.worldLabels.push({world:e,el:s,line:c,dot:l,data:u,fresh:r,extra:0,cost:0,moonOf:i,moons:a,cue:d})}addPlace(e,t,n,r){let i=document.createElement(`button`);i.className=r?`plabel is-mark`:`plabel`,r?(i.innerHTML=`<span class="pmark">${r.num??``}</span>`,i.setAttribute(`aria-label`,n)):i.innerHTML=`<span class="dot"></span><span class="pname">${n}</span>`,i.addEventListener(`click`,n=>{n.stopPropagation(),this.handlers.onPlaceClick(e.id,t)}),i.addEventListener(`pointerenter`,n=>n.pointerType===`mouse`&&this.handlers.onPlaceHover(e.id,t)),i.addEventListener(`pointerleave`,t=>t.pointerType===`mouse`&&this.handlers.onPlaceHover(e.id,null)),this.container.appendChild(i),this.placeLabels.push({world:e,id:t,el:i,opacity:0,mark:!!r})}setMarkStates(e){this.marks=e}pointOf(e){let t=this.placeLabels.find(t=>t.id===e&&t.opacity>.3);if(!t)return null;let n=(t.el.querySelector(`.pmark, .dot`)??t.el).getBoundingClientRect();return{x:n.left+n.width/2,y:n.top+n.height/2}}setLeader(e,t){this.leaderTo=e&&t?{place:e,from:t}:null}setFocus(e){this.focused=e}setHovered(e){this.hovered=e}setCue(e,t){for(let n of this.worldLabels){let r=n.world.id===e,i=r?t:``;n.cue.textContent!==i&&(n.cue.textContent=i),n.dot.classList.toggle(`is-cue`,r)}}setDestination(e,t){this.destination=e,this.eta=t}setSuppressed(e){this.suppressed=e,this.container.classList.toggle(`is-suppressed`,e)}setActive(e){this.active=e}setFound(e){this.found=e}occluded(e,t,n){let r=n.occluder;if(!r)return!1;let i=e.position,a=t.position.clone().sub(i),o=a.length();a.divideScalar(o);let s=i.clone().sub(r.center),c=s.dot(a),l=s.lengthSq()-r.radius*r.radius,u=c*c-l;if(u<0)return!1;let d=-c-Math.sqrt(u);return d>0&&d<o}update(e,t,n,r,i=t-8,a=n-8,o=8,s=8){if(this.suppressed)return;r_.setFromMatrixColumn(e.matrixWorld,0);let c=r=>(t_.copy(r).project(e),{x:(t_.x*.5+.5)*t,y:(-t_.y*.5+.5)*n,behind:t_.z>1}),l=this.worldLabels.map(({world:e})=>{let t=c(e.center);n_.copy(e.center).addScaledVector(r_,e.radius);let n=c(n_);return{s:t,r:Math.hypot(n.x-t.x,n.y-t.y)}});this.placePoles(c,l,t,n,i,a,o,s);let u=e.position,d=[],f=null;for(let t of this.placeLabels){let{world:n,id:l,el:p}=t,m=0;if(this.focused===n.id&&t.mark){let t=n.anchor?.(l);if(t){let r=c(t.position),s=p.offsetWidth,d=p.offsetHeight;if(p.style.transform=`translate3d(${$g(r.x-s/2)}px, ${$g(r.y-d/2)}px, 0)`,t.normal){let e=t.normal.dot(u.clone().sub(t.position).normalize());m=G.smoothstep(e,.05,.3)}else m=+!this.occluded(e,t,n);(r.behind||r.x>i||r.y>a||r.y<o)&&(m=0);let h=this.marks.get(l);p.classList.toggle(`is-read`,h===`read`),p.classList.toggle(`is-next`,h===`next`),this.leaderTo?.place===l&&!r.behind&&(f=m>.5?{x:r.x,y:r.y,far:!1}:{...this.limbToward(e,n,t.position,c),far:!0})}}else if(this.focused===n.id){let r=n.anchor?.(l);if(r){let l=p.offsetWidth,f=p.offsetHeight,h=c(r.radius?n_.copy(r.position).addScaledVector(r_,r.radius*1.5):r.position),g=e=>({x:e?h.x-l:h.x,y:h.y-f/2,w:l,h:f}),_=e=>d.some(t=>Qg(e,t)),v=h.x+l>i||!!n.labelsOutward&&h.x<c(n.center).x&&h.x-l>s;if(!r.radius&&_(g(v))&&!_(g(!v))&&(v||h.x-l>0)&&(v=!v),!r.radius&&t.opacity>.1&&d.push(g(v)),v&&r.radius&&(h=c(n_.copy(r.position).addScaledVector(r_,-r.radius*1.5))),p.classList.toggle(`is-left`,v),p.style.transform=`translate3d(${$g(v?h.x-l:h.x)}px, ${$g(h.y)}px, 0)`,r.normal){let e=r.normal.dot(u.clone().sub(r.position).normalize());m=G.smoothstep(e,.1,.35)}else m=+!this.occluded(e,r,n);(h.behind||h.x>i||h.y>a||h.y<o)&&(m=0)}}t.opacity+=(m-t.opacity)*(1-Math.exp(-8*r)),p.style.opacity=t.opacity.toFixed(3),p.style.pointerEvents=t.opacity>.4?`auto`:`none`,p.tabIndex=t.opacity>.4?0:-1,p.classList.toggle(`is-active`,this.active===l&&this.focused===n.id);let h=this.found?.places.has(`${n.id}/${l}`)??!1;p.classList.toggle(`is-found`,h),p.classList.toggle(`is-unfound`,!!this.found&&!h)}this.drawLeader(f)}limbToward(e,t,n,r){let{center:i,radius:a}=t.occluder??{center:t.center,radius:t.radius},o=e.position.clone().sub(i),s=o.length();if(s<=a)return r(n);o.divideScalar(s);let c=i.clone().addScaledVector(o,a*a/s),l=a*Math.sqrt(1-(a/s)**2),u=n.clone().sub(i);if(u.addScaledVector(o,-u.dot(o)),u.length()>a*.05)return r(c.addScaledVector(u.normalize(),l));let d=r(c),f=r(c.clone().addScaledVector(r_,l)),p=Math.hypot(f.x-d.x,f.y-d.y),m=this.leaderTo?.from()??{x:d.x+1,y:d.y},h=Math.hypot(m.x-d.x,m.y-d.y)||1;return{x:d.x+(m.x-d.x)/h*p,y:d.y+(m.y-d.y)/h*p}}drawLeader(e){let t=e&&this.leaderTo?this.leaderTo.from():null;if(this.leader.classList.toggle(`is-off`,!t),!t||!e)return;let n=e.x-t.x,r=e.y-t.y;this.leader.classList.toggle(`is-far`,e.far),this.leader.style.width=`${Math.hypot(n,r).toFixed(1)}px`,this.leader.style.transform=`translate3d(${$g(t.x)}px, ${$g(t.y)}px, 0) rotate(${Math.atan2(r,n).toFixed(4)}rad)`}placePoles(e,t,n,r,i,a,o,s){let c=e=>this.worldLabels[e].world.id===`star`,l=this.worldLabels.map((e,t)=>t).sort((e,n)=>Number(c(e))-Number(c(n))||t[n].r-t[e].r),u=this.worldLabels.findIndex(e=>e.world.id===`star`),d=u>=0?t[u]:null,f=d?Math.max(12,d.r+8):0,p=d&&!d.s.behind?[{x:d.s.x-f,y:d.s.y-f,w:f*2,h:f*2}]:[],m=[];this.worldLabels.forEach((e,n)=>{let{s:r,r:i}=t[n];if(!(e.world.id!==`star`&&(!e.moonOf||this.focused===e.moonOf)&&this.focused!==e.world.id&&!r.behind&&i<160))return;let a=Math.max(7,i+7),o={x:r.x-a,y:r.y-a,w:a*2,h:a*2};p.push(o),m.push({i:n,box:o})}),d&&!d.s.behind&&m.push({i:u,box:p[0]}),l.forEach(c=>{let l=this.worldLabels[c],{world:u,el:d,line:f,dot:h}=l,{s:g,r:_}=t[c],v=!g.behind&&g.x>-40&&g.x<n+40&&g.y>-40&&g.y<r+40,y=(!l.moonOf||this.focused===l.moonOf)&&v&&this.focused!==u.id&&g.x<i&&g.y<a&&g.y>o,b=e(n_.copy(u.center).addScaledVector(u.axis??i_,u.radius*2)),x=b.x-g.x,S=b.y-g.y,C=Math.hypot(x,S);b.behind||C<Math.max(2,_*.35)?(x=0,S=-1):(x/=C,S/=C),S>0&&(x=-x,S=-S);let w=_+4,T=d.offsetWidth,E=d.offsetHeight,D=a-o<300,O=D?20:G.clamp(44+_*.55,44,280),k=D?14:22,A=(e,t=!1,n=`up`,r=1)=>{let a=x,o=S;if(n===`down`)a=-x,o=-S;else if(n===`side`||n===`slant`){let e=r*(n===`side`?90:40)*Math.PI/180;a=x*Math.cos(e)-S*Math.sin(e),o=x*Math.sin(e)+S*Math.cos(e)}let s=n===`side`?10+e:n===`slant`?Math.max(18,O*.6)+e:O+e,c=g.x+a*(w+s),l=g.y+o*(w+s),u=n===`side`||n===`slant`?a<0:t||c+6+T>i;return{x1:c,y1:l,dx:a,dy:o,length:s,flip:u,box:{x:u?c-6-T:c+6,y:l-9,w:T,h:E}}},j=e=>e.x>=s&&e.x+e.w<=i&&e.y>=o-4&&e.y+e.h<=a,ee=e=>!m.some(t=>t.i!==c&&Zg(g.x+e.dx*w,g.y+e.dy*w,e.x1,e.y1,t.box)),M=(e,t)=>{let n=e.box;return j(n)&&ee(e)&&!p.some(e=>Qg({x:n.x-t,y:n.y-t,w:n.w+t*2,h:n.h+t*2},e))},N=[];for(let e=0;e<180;e+=k){N.push({extra:e,left:!1,way:`up`,turn:1,cost:e}),N.push({extra:e,left:!0,way:`up`,turn:1,cost:e+(D?0:36)});for(let t of[1,-1])N.push({extra:e,left:!1,way:`slant`,turn:t,cost:e+30+(t<0?10:0)}),e<=k*5&&N.push({extra:e,left:!1,way:`side`,turn:t,cost:e+60+(t<0?15:0)});e<=k*5&&(N.push({extra:e,left:!1,way:`down`,turn:1,cost:e+70}),N.push({extra:e,left:!0,way:`down`,turn:1,cost:e+100}))}N.sort((e,t)=>e.cost-t.cost);let P=N[0];if(y){let e=N.find(e=>M(A(e.extra,e.left,e.way,e.turn),e.cost<l.cost?10:0)),t=e=>{let t=e.box;return(j(t)?0:1e6)+(ee(e)?0:1e4)+p.reduce((e,n)=>e+Math.max(0,Math.min(t.x+t.w,n.x+n.w)-Math.max(t.x,n.x))*Math.max(0,Math.min(t.y+t.h,n.y+n.h)-Math.max(t.y,n.y)),0)};P=e??N.reduce((e,n)=>t(A(n.extra,n.left,n.way,n.turn))<t(A(e.extra,e.left,e.way,e.turn))?n:e)}l.extra=P.extra,l.cost=P.cost;let{y1:te,dx:ne,dy:re,flip:ie,box:ae,length:F}=A(P.extra,P.left,P.way,P.turn),oe=ae.x,se=u.id!==`star`||d.classList.contains(`is-hover`)||d.matches(`:hover, :focus-visible`);y&&se&&p.push(ae);let ce=g.x+ne*w,I=g.y+re*w;f.style.width=`${$g(F)}px`,f.style.transform=`translate3d(${$g(ce)}px, ${$g(I)}px, 0) rotate(${Math.atan2(re,ne).toFixed(4)}rad)`,d.classList.toggle(`is-left`,ie),d.style.transform=`translate3d(${$g(oe)}px, ${$g(te-9)}px, 0)`;let le=Math.max(14,_*2+14);h.style.width=h.style.height=`${le.toFixed(1)}px`,h.style.transform=`translate3d(${$g(g.x-le/2)}px, ${$g(g.y-le/2)}px, 0)`,h.classList.toggle(`is-shown`,y&&_<160);let ue=this.destination===u.id&&this.eta!==null;h.classList.toggle(`is-destination`,ue),d.classList.toggle(`is-destination`,ue);let de=[u.id,...l.moons].reduce((e,t)=>e+(this.found?.worlds.get(t)??0),0),fe=ue?`Arrival ${e_(this.eta)}`:this.found?de?`${de} found`:``:l.fresh?`${l.fresh} new`:``;l.data.textContent!==fe&&(l.data.textContent=fe),l.data.classList.toggle(`is-new`,!ue&&!this.found&&l.fresh>0),l.data.classList.toggle(`is-found`,!ue&&de>0);for(let e of[d,f,h])e.classList.toggle(`is-unfound`,!!this.found&&!de&&!ue);let pe=this.hovered===u.id;for(let e of[d,f])e.classList.toggle(`is-hidden`,!y);d.classList.toggle(`is-hover`,pe),f.classList.toggle(`is-hover`,pe),d.tabIndex=y?0:-1})}},o_=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),s_=[`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`,`XI`,`XII`,`XIII`,`XIV`,`XV`,`XVI`,`XVII`,`XVIII`,`XIX`,`XX`,`XXI`,`XXII`,`XXIII`,`XXIV`],c_=`http://www.w3.org/2000/svg`,l_=300,u_=new q,d_=new q,f_=class{root;surface;svg;settlements=[];routes=[];heads=[];notes=[];active=null;hover=null;region=null;lens=new Set;read=new Set;found=null;shown=!1;constructor(e,t,n,r,i,a){this.root=e,this.surface=t,e.innerHTML=``,this.svg=document.createElementNS(c_,`svg`),this.svg.classList.add(`chart-svg`),this.svg.innerHTML=`<defs>
      <marker id="route-end" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M1,1.5 L8,5 L1,8.5" fill="none" stroke="currentColor" stroke-width="1.4" />
      </marker></defs>`,e.appendChild(this.svg);let o=1/t.plates;for(let t of r){if(t.plate===void 0)continue;let r=n.filter(e=>e.region===t.name).length,s=i.filter(e=>e.region===t.name).length,c=document.createElement(`button`);c.className=`plate-head`,c.innerHTML=`<span class="ph-no">Plate ${s_[t.plate]}</span><span class="ph-name">${o_(t.name)}</span><span class="ph-count">${r} ${r===1?`settlement`:`settlements`}${s?`, ${s} ${s===1?`route`:`routes`}`:``}</span>`,c.addEventListener(`click`,()=>a.onRegionClick(l(t.name))),e.appendChild(c),this.heads.push({region:t,el:c,along:(t.plate+.5)*o})}for(let n of[t.charted[0]-o*.5,t.charted[1]+o*.5]){let t=document.createElement(`p`);t.className=`chart-note`,t.textContent=`Uncharted`,e.appendChild(t),this.notes.push({el:t,along:n})}for(let t of i){let r=[];if(t.parts.forEach((e,t)=>{let i=e.place?n.find(t=>t.id===e.place):void 0,a=i&&i.anchor.kind===`strip`?i.anchor:e.at&&`along`in e.at?e.at:void 0;a&&r.push({along:a.along,across:a.across,place:i,part:t+1,title:e.title})}),r.length<2)continue;let i=r.findIndex(e=>!e.place),a=e=>{let t=document.createElementNS(c_,`path`);return t.setAttribute(`class`,e),this.svg.appendChild(t),t},o=a(`route-casing`),s=a(`route-line`),c=a(`route-planned`),l=document.createElement(`p`);l.className=`route-label`,l.innerHTML=`<span>${o_(t.name)}</span><em>a route in ${t.parts.length} parts</em>`,e.appendChild(l);let u=r.filter(e=>!e.place).map(t=>{let n=document.createElement(`span`);return n.className=`route-stop`,n.textContent=String(t.part),n.title=`Part ${t.part}: ${t.title} (still to come)`,e.appendChild(n),n});this.routes.push({series:t,stops:r,written:i<0?r.length:i,casing:o,line:s,planned:c,label:l,plannedMarks:u})}for(let t of n){if(t.anchor.kind!==`strip`)continue;let n=document.createElement(`button`);n.className=`settle`,n.dataset.place=t.id;let r=t.series?.part;n.innerHTML=`<span class="settle-mark">${r??``}</span><span class="settle-name">${o_(t.name)}</span>`,n.setAttribute(`aria-label`,`${t.name}: ${t.title}`),n.classList.toggle(`is-stop`,!!r),n.addEventListener(`click`,()=>a.onPlaceClick(t.id)),n.addEventListener(`pointerenter`,e=>e.pointerType===`mouse`&&a.onPlaceHover(t.id)),n.addEventListener(`pointerleave`,e=>e.pointerType===`mouse`&&a.onPlaceHover(null)),n.addEventListener(`focus`,()=>a.onPlaceHover(t.id)),n.addEventListener(`blur`,()=>a.onPlaceHover(null)),e.appendChild(n),this.settlements.push({place:t,el:n,along:t.anchor.along,across:t.anchor.across})}}setActive(e){this.active=e}setHover(e){this.hover=e}setRegion(e){this.region=e}setLens(e){this.lens=new Set(e)}setRead(e){this.read=e}setFound(e){this.found=e}matches(e){return(!this.lens.size||(e.tags??[]).some(e=>this.lens.has(e)))&&(!this.found||this.found.has(`${e.world}/${e.id}`))}lit(e){return(this.lens.size>0||!!this.found)&&this.matches(e)}update(e,t,n,r){let i=this.surface.chart,a=i>.02;if(a!==this.shown&&(this.shown=a,this.root.hidden=!a),!a)return;this.root.style.opacity=Math.min(1,i*1.4-.4).toFixed(3),this.root.classList.toggle(`is-interactive`,i>.6),this.root.classList.toggle(`is-far`,r<l_),this.svg.setAttribute(`viewBox`,`0 0 ${t} ${n}`);let o=(r,i)=>(u_.copy(this.surface.point(r,i,d_)).project(e),{x:(u_.x*.5+.5)*t,y:(-u_.y*.5+.5)*n}),s=(e,t,n)=>{e.style.transform=`translate3d(${t.toFixed(1)}px, ${n.toFixed(1)}px, 0)`},c=o(this.surface.charted[0],1),l=o(this.surface.charted[0],1.6),u=l.x-c.x,d=l.y-c.y,f=Math.hypot(u,d)||1,p={x:u/f,y:d/f},m=Math.abs(p.y)>Math.abs(p.x);for(let e of this.heads){let t=o(e.along,1);s(e.el,t.x+p.x*18,t.y+p.y*18),e.el.dataset.side=m?p.y<0?`above`:`below`:p.x<0?`left`:`right`,e.el.classList.toggle(`is-current`,this.region===e.region.name)}for(let e of this.notes){let t=o(e.along,0);s(e.el,t.x,t.y)}for(let e of this.settlements){let t=o(e.along,e.across);s(e.el,t.x,t.y);let n=e.place.id;e.el.classList.toggle(`is-active`,this.active===n),e.el.classList.toggle(`is-hover`,this.hover===n),e.el.classList.toggle(`is-dim`,!this.matches(e.place)),e.el.classList.toggle(`is-lit`,this.lit(e.place)),e.el.classList.toggle(`is-read`,this.read.has(n))}for(let e of this.routes){let t=e.stops.map(e=>o(e.along,e.across)),n=e.written<t.length?t.slice(e.written-1):[],r=p_(t,0,e.written-1);e.casing.setAttribute(`d`,r),e.line.setAttribute(`d`,r),e.planned.setAttribute(`d`,n.length>1?p_(t,e.written-1,t.length-1):``),e.line.setAttribute(`marker-end`,n.length>1?``:`url(#route-end)`),e.planned.setAttribute(`marker-end`,n.length>1?`url(#route-end)`:``);let i=(this.lens.size>0||!!this.found)&&!e.stops.some(e=>e.place&&this.matches(e.place));for(let t of[e.casing,e.line,e.planned])t.classList.toggle(`is-dim`,i);e.label.classList.toggle(`is-dim`,i);for(let t of e.plannedMarks)t.classList.toggle(`is-dim`,i);let a=o((e.stops[0].along+e.stops[e.stops.length-1].along)/2,-1);s(e.label,a.x-p.x*14,a.y-p.y*14),e.label.dataset.side=m?p.y<0?`below`:`above`:p.x<0?`right`:`left`;let c=0;e.stops.forEach((n,r)=>{n.place||s(e.plannedMarks[c++],t[r].x,t[r].y)})}}};function p_(e,t,n){if(n<=t)return``;let r=t=>e[Math.max(0,Math.min(e.length-1,t))],i=`M${r(t).x.toFixed(1)},${r(t).y.toFixed(1)}`;for(let e=t;e<n;e++){let t=r(e-1),n=r(e),a=r(e+1),o=r(e+2),s={x:n.x+(a.x-t.x)/6,y:n.y+(a.y-t.y)/6},c={x:a.x-(o.x-n.x)/6,y:a.y-(o.y-n.y)/6};i+=` C${s.x.toFixed(1)},${s.y.toFixed(1)} ${c.x.toFixed(1)},${c.y.toFixed(1)} ${a.x.toFixed(1)},${a.y.toFixed(1)}`}return i}var m_=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),h_=`http://www.w3.org/2000/svg`,g_=Math.PI/180,__=e=>`rgba(143, 216, 238, ${e})`,v_={nebula:`<rect x="-5" y="-5" width="10" height="10" rx="1.5" class="os-fill" stroke-width="1.3"/>`,cluster:`<circle r="5.5" class="os-fill" stroke-width="1.4" stroke-dasharray="1.6 2"/>`,globular:`<circle r="5.5" class="os-fill" stroke-width="1.2"/><path d="M-5.5 0H5.5M0 -5.5V5.5" stroke-width="1"/>`,planetary:`<circle r="3.6" class="os-fill" stroke-width="1.2"/><path d="M-7 0H-3.6M3.6 0H7M0 -7V-3.6M0 3.6V7" stroke-width="1"/>`,remnant:`<circle r="5.5" class="os-fill" stroke-width="1.3" stroke-dasharray="7 2.6"/>`,galaxy:`<ellipse rx="7" ry="3.4" transform="rotate(-28)" class="os-fill" stroke-width="1.3"/>`,quasar:`<circle r="5" class="os-fill" stroke-width="1.2"/><circle r="1.6" class="os-dot"/>`,planet:`<circle r="4.2" class="os-fill" stroke-width="1.4"/><circle r="1.5" class="os-dot"/>`,sun:`<circle r="5" class="os-fill" stroke-width="1.4"/><circle r="2" class="os-dot"/>`,moon:`<path d="M2 -5A5 5 0 1 0 2 5A3.6 3.6 0 1 1 2 -5Z" class="os-dot"/>`},y_=(e=`nebula`)=>`<svg class="obj-symbol" viewBox="-8 -8 16 16" aria-hidden="true">${v_[e]??v_.nebula}</svg>`,b_=[[`near`,`Our cosmic neighbourhood`],[`milky`,`The Milky Way`],[`galaxies`,`The realm of the galaxies`]],x_=[[-4.8,`8 minutes the Earth`,4.2],[-3.32,`4 hours Neptune`,2.6],[-2.56,`1 day`,2.2],[0,`1 year`,1.6],[2,`100 years`,0],[4,`10,000 years`,0],[6,`1 million years`,0],[8,`100 million years`,0]],S_=[`right`,`left`,`above`,`below`,`above-right`,`below-right`,`above-left`,`below-left`],C_=.5,w_=new q,T_=class{root;map;svg;objs=[];crowds=[];ctx=[];dirs=[];you;active=null;hover=null;lens=new Set;found=null;read=new Set;shown=!1;boxes=[];key=``;sizes=new Map;extras=null;constructor(e,t,n,r,i){this.root=e,this.map=t,e.innerHTML=``,e.dataset.world=`nyx`,e.style.setProperty(`--chart-paper`,`#070910`),this.svg=document.createElementNS(h_,`svg`),this.svg.classList.add(`chart-svg`,`nyx-svg`),e.append(this.svg),this.svg.addEventListener(`click`,e=>{let t=e.target.closest(`[data-region]`);t&&i.onRegionClick(t.dataset.region)});for(let e of N)this.ctx.push({el:this.note(`ctx`,e.name),at:A(e.l,e.logt),from:0});for(let e of P)this.ctx.push({el:this.note(`ctx is-star`,e.name),at:A(e.l,e.logt),from:2.2});for(let e of D)this.ctx.push({el:this.note(`ctx is-star`,e.name),at:A(C(e),Math.log10(e.au*se)),from:4});for(let[e,t,n]of[[0,`Towards the centre of the galaxy`,`Sagittarius`],[90,`The way the Sun is going`,`Cygnus`]]){let r=this.note(`nyx-dir`,``);r.innerHTML=`${m_(t)}<small>${m_(n)}</small>`,this.dirs.push({el:r,l:e})}this.you=this.note(`nyx-you`,`You are here`);let a=[...n].sort((e,t)=>d(t).length-d(e).length||e.name.localeCompare(t.name));for(let t of a){let{l:n,logt:r}=k(t),a=e=>{e.addEventListener(`click`,()=>i.onPlaceClick(t.id)),e.addEventListener(`pointerenter`,e=>e.pointerType===`mouse`&&i.onPlaceHover(t.id)),e.addEventListener(`pointerleave`,e=>e.pointerType===`mouse`&&i.onPlaceHover(null))},o=document.createElement(`button`);o.className=`obj is-off`,o.dataset.place=t.id,o.innerHTML=y_(t.gallery?.kind),o.setAttribute(`aria-label`,t.name),a(o);let s=document.createElement(`button`);s.className=`obj-label is-off`,s.dataset.place=t.id,s.tabIndex=-1,s.innerHTML=`${m_(t.name)}${t.gallery?.catalogue?`<small>${m_(t.gallery.catalogue)}</small>`:``}`,a(s),e.append(o,s);let c=A(n,r);this.objs.push({place:t,at:c,r:Math.hypot(c[0],c[1]),mark:o,label:s,side:`right`,named:!0})}}note(e,t){let n=document.createElement(`p`);return n.className=e,n.textContent=t,this.root.append(n),n}setActive(e){this.active=e,this.key=``}setHover(e){this.hover=e,this.key=``}setRegion(e){}setLens(e){this.lens=new Set(e),this.key=``}setFound(e){this.found=e,this.key=``}setRead(e){this.read=e,this.key=``}matches(e){return(!this.lens.size||(e.tags??[]).some(e=>this.lens.has(e)))&&(!this.found||this.found.has(`${e.world}/${e.id}`))}overlap(e,t,n){let r=e.x0<4||e.x1>t-4||e.y0<4||e.y1>n-4?1e6:0;for(let t of this.boxes){let n=Math.max(0,Math.min(e.x1,t.x1)-Math.max(e.x0,t.x0))*Math.max(0,Math.min(e.y1,t.y1)-Math.max(e.y0,t.y0));r+=t.soft?n*1e-4:n}return r}sizeOf(e,t){let n=this.sizes.get(e);if(n&&n.k===t&&n.w>0)return n;let r={w:e.offsetWidth,h:e.offsetHeight,k:t};return this.sizes.set(e,r),r}boxAt(e,t,n,r){if(t===`right`)return{x0:e.x+11,y0:e.y-r/2,x1:e.x+11+n,y1:e.y+r/2};if(t===`left`)return{x0:e.x-11-n,y0:e.y-r/2,x1:e.x-11,y1:e.y+r/2};if(t===`above`)return{x0:e.x-n/2,y0:e.y-11-r,x1:e.x+n/2,y1:e.y-11};if(t===`below`)return{x0:e.x-n/2,y0:e.y+11,x1:e.x+n/2,y1:e.y+11+r};let i=t.endsWith(`right`)?e.x+7:e.x-7-n,a=t.startsWith(`above`)?e.y-7-r:e.y+7;return{x0:i,y0:a,x1:i+n,y1:a+r}}name(e,t,n,r,i,a,o){let{w:s,h:c}=this.sizeOf(t,r),l=e.side,u=this.overlap(this.boxAt(n,l,s,c),i,a);for(let e of S_){if(u===0)break;let t=this.overlap(this.boxAt(n,e,s,c),i,a);t<u&&([u,l]=[t,e])}let d=o||u<C_||e.named&&u<c*5;if(e.side=l,e.named=d,t.classList.toggle(`is-off`,!d),!d)return;let f=this.boxAt(n,l,s,c);t.style.transform=`translate3d(${f.x0.toFixed(1)}px, ${f.y0.toFixed(1)}px, 0)`,t.dataset.side=l,this.boxes.push(f)}update(e,t,n){let r=this.map,i=r.chart,a=r.reveal,o=i>.02||a>.02;if(o!==this.shown&&(this.shown=o,this.root.hidden=!o),!o)return;this.root.style.setProperty(`--names`,Math.max(0,Math.min(1,i*1.4-.4)).toFixed(3)),this.root.classList.toggle(`is-interactive`,i>.6);let s=r=>(w_.copy(r).project(e),{x:(w_.x*.5+.5)*t,y:(-w_.y*.5+.5)*n}),c=(e,t,n)=>{e.style.transform=`translate3d(${t.toFixed(1)}px, ${n.toFixed(1)}px, 0)`},u=r.view.zoom,d=`${r.view.cx.toFixed(5)},${r.view.cy.toFixed(5)},${u.toFixed(4)},${t},${n},${a.toFixed(3)},${e.position.toArray().map(e=>e.toFixed(3))}`;if(d===this.key)return;this.key=d,this.boxes=Pm();let f=e=>this.boxes.push(e),p=s(r.toWorld(0,0)),m=s(r.toWorld(1,0)),h=Math.hypot(m.x-p.x,m.y-p.y),g=p.x,_=p.y,v=u<1.6;this.root.classList.toggle(`is-whole`,v);let y=`<defs>`,b=[],x=[];for(let e of[E,...D]){let t=ce(Math.log10(e.au*se));t*h<3||t>a||b.push(`<circle cx="${g.toFixed(1)}" cy="${_.toFixed(1)}" r="${(t*h).toFixed(1)}" fill="none" stroke="${__(e===E?.42:.2)}" stroke-width="${e===E?1:.8}" />`)}let S=``;for(let e=0;e<360;e+=10){let[t,n]=[-Math.sin(e*g_),-Math.cos(e*g_)],r=h+3,i=r+(e%30==0?8:4);S+=`M${(g+t*r).toFixed(1)},${(_+n*r).toFixed(1)}L${(g+t*i).toFixed(1)},${(_+n*i).toFixed(1)}`}x.push(`<path d="${S}" stroke="rgba(168, 176, 196, 0.55)" stroke-width="0.8" fill="none" />`);let w=0,T=(e,t,n,r,i,a,o=[],s=!1)=>{let c=e.length*r*(.64+i)/2/t+.04;if(!(c>1.3||t<24))for(let l of[0,...o]){let u=Math.atan2(-Math.cos((n+l)*g_),-Math.sin((n+l)*g_)),d=Math.max(2,Math.ceil(2*c*t/r)),p=t+r*.45,m=[];for(let e=0;e<=d;e++){let t=u-c+2*c*e/d,[n,i]=[g+Math.cos(t)*p,_+Math.sin(t)*p];m.push({x0:n-r*.55,y0:i-r*.55,x1:n+r*.55,y1:i+r*.55,soft:s})}if(o.length&&m.some(e=>this.overlap(e,1/0,1/0)>0))continue;for(let e of m)f(e);let h=Math.sin(u)<0,[v,b]=h?[u-c,u+c]:[u+c,u-c],S=`nyx-arc-${w++}`;y+=`<path id="${S}" d="M${(g+Math.cos(v)*t).toFixed(1)} ${(_+Math.sin(v)*t).toFixed(1)} A${t.toFixed(1)} ${t.toFixed(1)} 0 ${+(2*c>Math.PI)} ${+!!h} ${(g+Math.cos(b)*t).toFixed(1)} ${(_+Math.sin(b)*t).toFixed(1)}" />`,x.push(`<text font-size="${r}" letter-spacing="${i}em" dominant-baseline="${h?`auto`:`hanging`}" ${a}><textPath href="#${S}" startOffset="50%" text-anchor="middle">${m_(e).replace(/\u2003(.*)$/,` <tspan opacity="0.6">$1</tspan>`)}</textPath></text>`);return}};for(let[e,t]of b_){let[n,r]=ne[e],i=(e===`near`?n+(r-n)*.86:(n+r)/2)*h,a=this.objs.filter(t=>F[t.place.region]===e).length;T(`${t.toUpperCase()}\u2003${a}`,i,232,e===`near`?9.5:11,.3,`class="nyx-depth" data-region="${l(t)}"`,[],!0)}for(let e of this.dirs){if(e.el.classList.toggle(`is-off`,!v),!v)continue;let t=h+20,[n,r]=[g-Math.sin(e.l*g_)*t,_-Math.cos(e.l*g_)*t];e.el.style.transform=`translate3d(${n.toFixed(1)}px, ${r.toFixed(1)}px, 0)${e.l===90?` rotate(-90deg)`:``}`;let{w:i,h:a}=this.sizeOf(e.el,``),[o,s]=e.l===90?[a,i]:[i,a];f({x0:n-o/2,y0:r-s/2,x1:n+o/2,y1:r+s/2,soft:!0})}let O=t<600?17:11,k=[];for(let e of this.objs){let i=s(r.toWorld(e.at[0],e.at[1]));if(e.r>a||i.x<-40||i.y<-40||i.x>t+40||i.y>n+40)continue;let o=k.find(e=>Math.hypot(e.p.x-i.x,e.p.y-i.y)<O);o?o.items.push(e):k.push({p:i,items:[e]})}for(let e of this.objs)e.mark.classList.add(`is-off`),e.label.classList.add(`is-off`);for(let e of k)f({x0:e.p.x-9,y0:e.p.y-9,x1:e.p.x+9,y1:e.p.y+9});let j=[],ee=0;for(let e of k){if(e.items.length>1){let t=this.crowd(ee++);t.el.textContent=String(e.items.length),t.el.dataset.cx=String(e.items.reduce((e,t)=>e+t.at[0],0)/e.items.length),t.el.dataset.cy=String(e.items.reduce((e,t)=>e+t.at[1],0)/e.items.length),t.el.classList.remove(`is-off`),t.el.classList.toggle(`is-dim`,!e.items.some(e=>this.matches(e.place))),c(t.el,e.p.x,e.p.y);let n=`${e.items[0].place.name} and ${e.items.length-1} more`;t.text!==n&&(t.text=n,t.label.textContent=n,this.sizes.delete(t.label)),j.push({item:t,label:t.label,p:e.p,always:!1});continue}let t=e.items[0];t.mark.classList.remove(`is-off`),c(t.mark,e.p.x,e.p.y);let n=t.place.id;for(let e of[t.mark,t.label])e.classList.toggle(`is-active`,this.active===n),e.classList.toggle(`is-hover`,this.hover===n),e.classList.toggle(`is-dim`,!this.matches(t.place)),e.classList.toggle(`is-lit`,(this.lens.size>0||!!this.found)&&this.matches(t.place)),e.classList.toggle(`is-read`,this.read.has(n));j.push({item:t,label:t.label,p:e.p,always:this.active===n||this.hover===n})}for(;ee<this.crowds.length;ee++)this.crowds[ee].el.classList.add(`is-off`),this.crowds[ee].label.classList.add(`is-off`);let M=A(C(E),Math.log10(se)),N=s(r.toWorld(M[0],M[1])),P=u>=3&&Math.hypot(M[0],M[1])<=a;if(this.you.classList.toggle(`is-off`,!P),P){let e=this.sizeOf(this.you,``).w,r=[[0,10],[0,-26],[e/2+12,-8],[-e/2-12,-8]],i=([t,n])=>({x0:N.x+t-e/2,y0:N.y+n,x1:N.x+t+e/2,y1:N.y+n+12}),a=r.find(e=>this.overlap(i(e),t,n)===0)??r[0];c(this.you,N.x+a[0],N.y+a[1]),f(i(a))}j.sort((e,t)=>Number(t.always)-Number(e.always));for(let e of j)this.name(e.item,e.label,e.p,v?`whole`:`close`,t,n,e.always);let te=[10,-10,20,-20,30];for(let[e,t,n]of x_)u>=n&&T(t.toUpperCase(),ce(e)*h-4,318,8,.2,`class="nyx-scale"`,te);T(`13.8 BILLION YEARS THE OLDEST LIGHT`,h+14,318,8,.2,`class="nyx-scale"`,te),u<2.6&&T(`HOW OLD THE LIGHT IS`,h+28,318,8.5,.3,`class="nyx-scale is-head"`,te);for(let e of this.ctx){let i=s(r.toWorld(e.at[0],e.at[1])),o=u>=e.from&&Math.hypot(e.at[0],e.at[1])<=a&&i.x>0&&i.y>0&&i.x<t&&i.y<n;if(o){let{w:r,h:a}=this.sizeOf(e.el,``),s={x0:i.x+6,y0:i.y-a/2,x1:i.x+8+r,y1:i.y+a/2};o=this.overlap(s,t,n)===0,o&&f(s)}e.el.classList.toggle(`is-off`,!o),o&&c(e.el,i.x,i.y)}this.svg.setAttribute(`viewBox`,`0 0 ${t} ${n}`),this.svg.innerHTML=`${y}</defs>${b.join(``)}<g class="nyx-words">${x.join(``)}</g>`}crowd(e){for(;this.crowds.length<=e;){let e=document.createElement(`button`);e.className=`obj-crowd is-off`;let t=document.createElement(`button`);t.className=`obj-label is-crowd is-off`,t.tabIndex=-1;let n=()=>this.map.goTo({cx:Number(e.dataset.cx),cy:Number(e.dataset.cy),zoom:Math.min(40,this.map.view.zoom*2.4)});e.addEventListener(`click`,n),t.addEventListener(`click`,n),this.root.append(e,t),this.crowds.push({el:e,label:t,side:`right`,named:!0,text:``})}return this.crowds[e]}},E_=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),D_=`http://www.w3.org/2000/svg`,O_=e=>`rgba(255, 240, 214, ${e})`,k_=e=>`rgba(143, 216, 238, ${e})`,A_=e=>`rgba(242, 180, 90, ${e})`,j_=e=>`rgba(234, 244, 248, ${e})`,M_=(e,t)=>[e&&`${e} ${e===1?`article`:`articles`}`,t&&`${t} to come`].filter(Boolean).join(`, `),N_=e=>M_(i(e).length,e.toCome?.length??0),P_=new q,F_=class{root;map;places;handlers;svg;labels=[];tels=[];arts=[];stages=[];lanes=[];head;picLabel=null;camLabel=null;stretchLabel=null;placed=``;active=null;hover=null;region=null;lens=new Set;found=null;read=new Set;shown=!1;key=``;picture;reduced=matchMedia(`(prefers-reduced-motion: reduce)`).matches;extras=null;constructor(e,t,n,r){this.root=e,this.map=t,this.places=n,this.handlers=r,e.innerHTML=``,e.dataset.world=`optica`,e.style.setProperty(`--chart-paper`,`#050a10`),this.svg=document.createElementNS(D_,`svg`),this.svg.classList.add(`chart-svg`,`op-svg`),e.append(this.svg);let i=M.filter(e=>e.world===`nyx`&&e.gallery).sort((e,t)=>Number(!!t.leadImage)-Number(!!e.leadImage)||t.date.localeCompare(e.date))[0];this.picture=i?i.leadImage?w(i.leadImage,432):j(i.art,216,176):``,this.build()}label(e,t,n={},r=`p`){let i=document.createElement(r);i.className=e,i.innerHTML=t,this.root.append(i);let a={el:i,t:0,s:0,...n};return this.labels.push(a),a}wire(e){let t=e.el;t.type=`button`;let n=e.place?.id??e.toCome;if(n)t.addEventListener(`click`,()=>this.handlers.onPlaceClick(n)),t.addEventListener(`pointerenter`,e=>e.pointerType===`mouse`&&this.handlers.onPlaceHover(n)),t.addEventListener(`pointerleave`,e=>e.pointerType===`mouse`&&this.handlers.onPlaceHover(null));else if(e.stage){let n=l(e.stage);t.addEventListener(`click`,()=>this.handlers.onRegionClick(n))}return e}build(){let e=this.places.filter(e=>e.telescope),t=e.filter(e=>e.telescope?.own).length,a=le(),o=I(),s=this.map.layout,c=s.stages.map(e=>e.region),l=n(),u=e=>M_(e.reduce((e,t)=>e+i(t).length,0),e.reduce((e,t)=>e+(t.toCome?.length??0),0)),d=(e,t)=>`${e}${t?`, ${t}`:``}`;this.head={tel:this.label(`op-head`,`The telescopes<small>${t?`${t} of mine, `:``}${e.length-t} remote</small>`),linear:this.label(`op-head`,`Linear<small>${d(`in order, ${c.length} ${c.length===1?`step`:`steps`}`,u(c))}</small>`),stretched:l.length?this.label(`op-head`,`Stretched<small>${d(`in any order, ${l.length} ${l.length===1?`topic`:`topics`}`,u(l))}</small>`):null,note:this.label(`op-note`,`The light of everything in the pictures, from Nyx’s sky`)},this.camLabel=a?this.wire(this.label(`op-node op-camera is-after`,`<b>The camera</b><small>light becomes data</small><i>${N_(a)}</i>`,{stage:a.name},`button`)):this.label(`op-node is-after`,`<b>The camera</b><small>light becomes data</small>`),this.picLabel=this.label(`op-node`,`<b>The picture</b><small>on Nyx</small>`);for(let t of e){let e=t.telescope?.site;this.tels.push(this.wire(this.label(`op-tel${t.telescope?.own?` is-own`:``}`,`<b>${E_(t.name)}</b>${e?`<small>${E_(e)}</small>`:``}`,{place:t},`button`)))}for(let e of s.stages){let t=e.region.label??e.region.name;this.stages.push(this.wire(this.label(`op-stage${t.includes(` `)?` is-wrap`:``}`,`<b>${E_(t)}</b><small>${N_(e.region)||`&nbsp;`}</small>`,{stage:e.region.name},`button`)))}this.stretchLabel=o?this.wire(this.label(`op-stage is-stretch`,`<b>${E_(o.name)}</b><small>the data made visible</small><i>${N_(o)||`&nbsp;`}</i>`,{stage:o.name},`button`)):null;for(let e of l)this.lanes.push(this.wire(this.label(`op-lane`,`<b>${E_(e.label??e.name)}</b><small>${N_(e)}</small>`,{stage:e.name},`button`)));for(let e of this.places.filter(e=>!e.telescope))this.arts.push(this.wire(this.label(`op-art`,E_(e.name),{place:e},`button`)));for(let e of[...c,...o?[o]:[],...l])e.toCome?.forEach((t,n)=>this.arts.push(this.wire(this.label(`op-art is-tocome`,`${E_(t)}<small>to come</small>`,{toCome:r(e,n),stage:e.name},`button`))))}idOf(e){return e.place?.id??e.toCome}listOf(e){return[...i(e).map(e=>e.id),...(e.toCome??[]).map((t,n)=>r(e,n))].map(e=>this.arts.find(t=>this.idOf(t)===e))}place(e){let{tel:t,linear:n,stretched:r,note:i}=this.head,a=this.camLabel,o=e.stages.length>1?e.stages[1].t-e.stages[0].t:120,s=e.px*.9,c=t=>t/e.px,l=e=>e/s;this.root.style.setProperty(`--op-art-w`,`${Math.floor(2*o*s-26)}px`);let u=e.phone,d=e.halfH-12,f=e.stages[0]?.t??620,p=e.stages[e.stages.length-1]?.t??f;Object.assign(t,{t:u?12:168,s:d}),t.el.classList.toggle(`is-start`,u),Object.assign(n,{t:u?f-40:(f+p)/2,s:d}),n.el.classList.toggle(`is-start`,u),r&&(Object.assign(r,{t:u?e.field0:(e.field0+e.field1)/2,s:d}),r.el.classList.toggle(`is-start`,u)),Object.assign(i,{t:12,s:-(e.halfH-14)}),Object.assign(a,{t:529,s:-30-c(6)}),Object.assign(this.picLabel,u?{t:e.picture+27+c(10),s:14}:{t:e.picture+27,s:-28}),this.picLabel.el.classList.toggle(`is-after`,u),this.picLabel.el.classList.toggle(`is-before`,!u);for(let t of this.tels){let n=e.telescopes.find(e=>e.place.id===t.place.id);Object.assign(t,{t:300-((n?.w??4)+3),s:n?.s??0})}let m=(t,n,r,i,a)=>{for(let o of this.listOf(t)){o.el.style.maxWidth=`${Math.max(80,Math.floor(a))}px`,o.el.dataset.side=r;let t=o.el.offsetHeight/s;Object.assign(o,{t:n,s:i}),e.at.set(this.idOf(o),[n,i]),i+=r===`up`?t+l(10):-(t+l(10))}},h=le();if(h){let t=e.stages.find(e=>e.side===`down`);m(h,520,`down`,a.s-a.el.offsetHeight/s-l(16),((t?.t??520+2*o)-520)*s-30)}let g=e.stretch?[...e.stages,e.stretch]:e.stages,_=[...this.stages,...this.stretchLabel?[this.stretchLabel]:[]],v=Math.max(0,..._.map(e=>e.el.offsetHeight))/s;g.forEach((t,n)=>{let r=_.find(e=>e.stage===t.region.name);Object.assign(r,{t:t.t,s:36});let i=n+2<g.length?g[n+2].t:e.lanes.length?e.field0:t.t+2*o;m(t.region,t.t,t.side,t.side===`up`?36+v+l(12):-30-c(30),(i-t.t)*s-26)});for(let t of e.lanes){let n=this.lanes.find(e=>e.stage===t.region.name);Object.assign(n,{t:e.field0+l(12),s:t.s});for(let n of this.listOf(t.region)){let t=e.at.get(this.idOf(n));n.el.style.maxWidth=`150px`,n.el.dataset.side=`mid`,Object.assign(n,{t:t[0],s:t[1]})}}}setActive(e){this.active=e,this.key=``}setHover(e){this.hover=e,this.key=``}setRegion(e){this.region=e,this.key=``}setLens(e){this.lens=new Set(e),this.key=``}setFound(e){this.found=e,this.key=``}setRead(e){this.read=e,this.key=``}matches(e){return(!this.lens.size||(e.tags??[]).some(e=>this.lens.has(e)))&&(!this.found||this.found.has(`${e.world}/${e.id}`))}update(e,t,n){let r=this.map,i=r.chart>.02||r.unroll>.02;if(i!==this.shown&&(this.shown=i,this.root.hidden=!i),!i)return;this.root.style.setProperty(`--names`,Math.max(0,Math.min(1,r.chart*1.4-.4)).toFixed(3)),this.root.classList.toggle(`is-interactive`,r.chart>.6),this.reduced||this.root.style.setProperty(`--flow`,`${-(performance.now()/1e3)*18.75%30}`);let a=r.layout,o=`${a.px.toFixed(3)},${a.end}`;o!==this.placed&&(this.placed=o,this.place(a),this.key=``);let s=r.front,c=`${r.view.cx.toFixed(3)},${r.view.cy.toFixed(3)},${r.view.zoom.toFixed(4)},${t},${n},${s.toFixed(1)},${e.position.toArray().map(e=>e.toFixed(3))}`;if(c===this.key)return;this.key=c;let l=(i,a)=>(P_.copy(r.toWorld(i,a)).project(e),[(P_.x*.5+.5)*t,(-P_.y*.5+.5)*n]),u=(e,t)=>l(e,t).map(e=>e.toFixed(1)).join(` `),[d]=l(0,0),[f]=l(1,0),p=f-d;this.root.classList.toggle(`is-tight`,36*p<34),this.root.classList.toggle(`is-tight-own`,66*p<31);let h=a.end,g=s>-1e3&&s<h,_=this.hover??this.active,v=_?this.places.find(e=>e.id===_):void 0,y=v&&!v.telescope?v.region:_?.startsWith(`tocome:`)?m(_)?.region.name:this.region,b=a.stretch,x=a.stages[a.stages.length-1]?.t??640,S=b?.t??x+120,[C]=l(0,0),[w]=l(170,0),[T,E]=l(S,a.halfH),[D,O]=l(h+60,-a.halfH),k=e=>Math.min(.45,Math.max(0,e/Math.max(1,h+60-S))).toFixed(3),A=`rgb(150, 205, 230)`,j=[`<linearGradient id="op-ray" gradientUnits="userSpaceOnUse" x1="${C}" y1="0" x2="${w}" y2="0"><stop offset="0" stop-color="${O_(1)}" stop-opacity="0"/><stop offset="1" stop-color="${O_(1)}"/></linearGradient>`,`<linearGradient id="op-wash" gradientUnits="userSpaceOnUse" x1="${T}" y1="0" x2="${D}" y2="0"><stop offset="0" stop-color="${A}" stop-opacity="0"/><stop offset="${k(160)}" stop-color="${A}" stop-opacity="0.085"/><stop offset="${(1-Number(k(140))).toFixed(3)}" stop-color="${A}" stop-opacity="0.085"/><stop offset="1" stop-color="${A}" stop-opacity="0"/></linearGradient>`,`<linearGradient id="op-wash-v" gradientUnits="userSpaceOnUse" x1="0" y1="${E}" x2="0" y2="${O}"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.2" stop-color="#fff"/><stop offset="0.8" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>`,`<mask id="op-wash-m"><rect x="${T}" y="${E}" width="${Math.max(0,D-T)}" height="${Math.max(0,O-E)}" fill="url(#op-wash-v)"/></mask>`,`<filter id="op-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${(3*p).toFixed(1)}"/></filter>`,`<clipPath id="op-reveal"><rect x="-20" y="-4000" width="${Math.max(0,(s>-1e3?l(s,0)[0]:1e5)+20)}" height="12000"/></clipPath>`],ee=[],M=[];b&&M.push(`<rect x="${T.toFixed(1)}" y="${E.toFixed(1)}" width="${Math.max(0,D-T).toFixed(1)}" height="${Math.max(0,O-E).toFixed(1)}" fill="url(#op-wash)" mask="url(#op-wash-m)"/>`);let N=a.halfH;for(let e=0;e<=h;e+=50)M.push(`<path d="M${u(e,-N)} L${u(e,N)}" stroke="${k_(e%250?.028:.055)}"/>`);for(let e=-Math.floor(N/50)*50;e<=N;e+=50)M.push(`<path d="M${u(0,e)} L${u(h,e)}" stroke="${k_(e%250?.028:.055)}"/>`);M.push(`<path d="M${u(0,0)} L${u(a.picture+27,0)}" stroke="${k_(.16)}" stroke-dasharray="16 5 2 5"/>`);let P=(e,t)=>M.push(`<path d="M${u(e,N-38)} L${u(e,N-30)} L${u(t,N-30)} L${u(t,N-38)}" fill="none" stroke="${k_(.22)}"/>`);a.stages.length&&P(a.stages[0].t-40,x+40),a.lanes.length&&P(a.field0,a.field1);let te=(e,t,n,r=1,i=!1)=>`<path class="op-flow${i?` is-slow`:``}" d="${e}" fill="none" stroke="${t}" stroke-opacity="${r}" stroke-width="${n}" stroke-dasharray="1.6 28.4" stroke-linecap="round"/>`;for(let{place:e,s:t,rays:n}of a.telescopes){let r=_===e.id,i=!!e.telescope?.own;for(let e of n){let n=`M${u(6,t+e)} L${u(300,t+e)} L${u(520,0)}`;M.push(`<path d="${n}" fill="none" stroke="url(#op-ray)" stroke-opacity="${r?.8:i?.34:.2}" stroke-width="${r?1.4:1}"/>`),M.push(te(n,`url(#op-ray)`,1.6,r?1:.75,!i))}}for(let{place:e,s:t,h:n,w:r}of a.telescopes){let i=_===e.id,a=!!e.telescope?.own,o=`M${u(300,t+n)} Q${u(300+r*2,t)} ${u(300,t-n)} Q${u(300-r*2,t)} ${u(300,t+n)} Z`,s=a?A_:k_;(i||a)&&M.push(`<path d="${o}" fill="${s(.5)}" filter="url(#op-glow)"/>`),M.push(`<path d="${o}" fill="${s(a?.12:.07)}" stroke="${i&&!a?`var(--hud)`:s(a?.95:.7)}" stroke-width="${a?i?2:1.5:1.1}"/>`)}{let[e,t]=l(520,0),n=!!this.camLabel?.stage&&y===this.camLabel.stage;M.push(`<circle cx="${e}" cy="${t}" r="${(16*p).toFixed(1)}" fill="${O_(.35)}" filter="url(#op-glow)"/>`),n&&M.push(`<rect x="${(e-6*p).toFixed(1)}" y="${(t-18*p).toFixed(1)}" width="${(12*p).toFixed(1)}" height="${(36*p).toFixed(1)}" rx="2" fill="${k_(.5)}" filter="url(#op-glow)"/>`),M.push(`<rect x="${(e-2.5*p).toFixed(1)}" y="${(t-14*p).toFixed(1)}" width="${(5*p).toFixed(1)}" height="${(28*p).toFixed(1)}" rx="1" fill="${O_(.95)}"${n?` stroke="var(--hud)" stroke-width="1.6"`:``}/>`)}let ne=(e,t)=>a.stages.find(t=>(t.region.label??t.region.name)===e)?.t??t,re=ne(`Stacking`,700),ie=ne(`Colour`,NaN),ae=S-26,F=S+26,oe=[];for(let e of[-10,-5,0,5,10])oe.push([`M${u(520,0)} L${u(565,e)} L${u(re-40,e)} L${u(re,0)}`,k_(.42),1]);if(Number.isNaN(ie))oe.push([`M${u(re,0)} L${u(ae,0)}`,k_(.6),1.4]);else{oe.push([`M${u(re,0)} L${u(ie,0)}`,k_(.6),1.4]);for(let[e,t]of[[12,`rgba(255, 130, 120, 0.75)`],[0,`rgba(140, 235, 160, 0.75)`],[-12,`rgba(130, 170, 255, 0.85)`]])oe.push([`M${u(ie,0)} L${u(ie+30,e)} L${u(ae-40,e)} L${u(ae,0)}`,t,1.2])}oe.push([`M${u(F,0)} L${u(a.picture-27,0)}`,k_(.9),2.6]);for(let[e,t,n]of oe)M.push(`<path d="${e}" fill="none" stroke="${t}" stroke-width="${n}"/>`),M.push(te(e,O_(.9),Math.max(1.4,n)));M.push(`<path d="M${u(F,0)} L${u(a.picture-27,0)}" stroke="${k_(.5)}" stroke-width="${(7*p).toFixed(1)}" filter="url(#op-glow)"/>`);for(let e of a.stages){let t=y===e.region.name;M.push(`<path d="M${u(e.t,-30)} L${u(e.t,30)} M${u(e.t-4,30)} L${u(e.t+4,30)} M${u(e.t-4,-30)} L${u(e.t+4,-30)}" stroke="${t?`var(--hud)`:k_(.6)}" stroke-width="${t?1.6:1.1}" fill="none"/>`),t&&M.push(`<path d="M${u(e.t,-30)} L${u(e.t,30)}" stroke="${k_(.8)}" stroke-width="6" filter="url(#op-glow)"/>`)}if(Number.isNaN(ie)||M.push(`<path d="M${u(ie-10,-11)} L${u(ie+10,-11)} L${u(ie,12)} Z" fill="${k_(.08)}" stroke="${k_(.8)}" stroke-width="1.1"/>`),b){let e=y===b.region.name,[t,n]=l(ae,26),[r,i]=l(F,-26),a=`M${u(ae+3,-23)} C${u(ae+7,12)} ${u(ae+18,21)} ${u(F-3,23)}`;M.push(`<rect x="${t}" y="${n}" width="${r-t}" height="${i-n}" rx="2" fill="${e?k_(.16):`rgba(5, 10, 16, 0.92)`}" stroke="${e?`var(--hud)`:k_(.6)}" stroke-width="${e?1.6:1.1}"/>`),e&&M.push(`<rect x="${t}" y="${n}" width="${r-t}" height="${i-n}" fill="none" stroke="${k_(.7)}" stroke-width="5" filter="url(#op-glow)"/>`),M.push(`<path d="${a}" fill="none" stroke="${O_(.6)}" stroke-width="${(4*Math.min(1,p/.6)).toFixed(1)}" filter="url(#op-glow)"/>`),M.push(`<path d="${a}" fill="none" stroke="${O_(.95)}" stroke-width="1.5"/>`)}let se=this.arts.filter(e=>e.t===520);se.length&&M.push(`<path d="M${u(520,-18)} L${u(520,Math.min(...se.map(e=>e.s)))}" stroke="${j_(.26)}" stroke-width="0.9" stroke-dasharray="2 3"/>`);for(let e of b?[...a.stages,b]:a.stages){let t=this.arts.filter(t=>t.t===e.t&&t.el.dataset.side!==`mid`);if(!t.length)continue;let n=t.reduce((e,t)=>Math.abs(t.s)>Math.abs(e)?t.s:e,0);M.push(`<path d="M${u(e.t,e.side===`up`?36+28/a.px:-31)} L${u(e.t,n)}" stroke="${j_(.26)}" stroke-width="0.9" stroke-dasharray="2 3"/>`)}if(a.lanes.length){let e=a.lanes.map(e=>e.s);M.push(`<path d="M${u(a.field0,Math.max(0,...e))} L${u(a.field0,Math.min(0,...e))}" stroke="${j_(.26)}" stroke-width="0.9" stroke-dasharray="2 3"/>`);let[t,n]=l(a.field0,0);M.push(`<circle cx="${t.toFixed(1)}" cy="${n.toFixed(1)}" r="2.4" fill="${k_(.9)}"/>`);for(let e of a.lanes){let t=y===e.region.name?`var(--hud)`:j_(.26),n=this.lanes.find(t=>t.stage===e.region.name),[r,i]=l(n.t,e.s),o=n.el.offsetWidth;M.push(`<path d="M${u(a.field0,e.s)} L${(r-4).toFixed(1)} ${i.toFixed(1)}" stroke="${t}" stroke-width="0.9" stroke-dasharray="2 3"/>`);let s=this.listOf(e.region),[c]=l(s[s.length-1].t,e.s);c>r+o+8&&M.push(`<path d="M${(r+o+8).toFixed(1)} ${i.toFixed(1)} L${c.toFixed(1)} ${i.toFixed(1)}" stroke="${t}" stroke-width="0.9" stroke-dasharray="2 3"/>`)}}let ce=!!this.found||this.lens.size>0;for(let e of this.arts){let t=_===this.idOf(e),[n,r]=l(e.t,e.s);t&&M.push(`<circle cx="${n}" cy="${r}" r="10" fill="${k_(.35)}" filter="url(#op-glow)"/>`),e.toCome?M.push(`<circle cx="${n}" cy="${r}" r="4.5" fill="var(--chart-paper)" stroke="${t?`var(--hud)`:j_(.55)}" stroke-width="1.2" stroke-dasharray="2.2 2" opacity="${ce?.3:1}"/>`):M.push(`<circle cx="${n}" cy="${r}" r="4.5" fill="var(--chart-paper)" stroke="${t?`var(--hud)`:`var(--ink)`}" stroke-width="1.4" opacity="${this.matches(e.place)?1:.3}"/>`)}{let[e,t]=l(a.picture-27,22),[n,r]=l(a.picture+27,-22);this.picture&&M.push(`<image href="${this.picture}" x="${e}" y="${t}" width="${n-e}" height="${r-t}" preserveAspectRatio="xMidYMid slice"/>`),M.push(`<rect x="${e}" y="${t}" width="${n-e}" height="${r-t}" fill="none" stroke="${O_(.7)}"/>`)}if(ee.push(`<g clip-path="url(#op-reveal)">${M.join(``)}</g>`),g){let[e,t]=l(s,a.halfH),[,n]=l(s,-a.halfH);j.push(`<linearGradient id="op-edge" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${O_(0)}"/><stop offset="0.5" stop-color="${O_(.85)}"/><stop offset="1" stop-color="${O_(0)}"/></linearGradient>`),ee.push(`<rect x="${(e-1).toFixed(1)}" y="${t}" width="2" height="${n-t}" fill="url(#op-edge)"/>`)}this.svg.setAttribute(`viewBox`,`0 0 ${t} ${n}`),this.svg.innerHTML=`<defs>${j.join(``)}</defs>${ee.join(``)}`;for(let e of this.labels){let[t,n]=l(e.t,e.s);e.el.style.transform=`translate3d(${t.toFixed(1)}px, ${n.toFixed(1)}px, 0)`;let r=e.place?.id??e.toCome,i=r?r===_:!!e.stage&&e.stage===y;e.el.classList.toggle(`is-lit`,i),e.place?(e.el.classList.toggle(`is-dim`,!this.matches(e.place)),e.el.classList.toggle(`is-read`,this.read.has(e.place.id))):e.toCome&&e.el.classList.toggle(`is-dim`,ce)}}},I_=class extends Tr{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Ja;e.deleteAttribute(`uv`);let t=new Os({side:1}),n=new Os,r=new yc(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new Z(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new va(e,n,6),o=new gr;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new Z(e,L_(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new Z(e,L_(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new Z(e,L_(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new Z(e,L_(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Z(e,L_(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Z(e,L_(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function L_(e){return new ks({color:0,emissive:16777215,emissiveIntensity:e})}var R_=new q;function z_(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;R_.copy(t),R_[r]=0,R_.normalize();let l=.5*o/(o+s),u=1-R_.angleTo(e)/c;return Math.sign(R_[n])===1?u*l:s/(o+s)+l+l*(1-u)}var B_=class e extends Ja{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new q,c=new q,l=new q(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new q,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=z_(m,c,`z`,`y`,i,n),f[a+1]=1-z_(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-z_(m,c,`z`,`y`,i,n),f[a+1]=1-z_(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-z_(m,c,`x`,`z`,i,e),f[a+1]=z_(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-z_(m,c,`x`,`z`,i,e),f[a+1]=1-z_(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-z_(m,c,`x`,`y`,i,e),f[a+1]=1-z_(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=z_(m,c,`x`,`y`,i,e),f[a+1]=1-z_(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},V_={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform sampler2D tCockpit;
    uniform float uShield;
    uniform vec3 uTint;
    uniform float uCockpit;
    varying vec2 vUv;
    void main() {
      vec4 space = texture2D(tDiffuse, vUv);
      // A stray NaN or infinity anywhere (a degenerate normal, a power of a
      // number a rounding error has made negative) would be spread over the
      // screen by the bloom that follows, blacking it out for a frame: drop
      // them here, in both views, from space and the cockpit alike.
      if (any(isnan(space)) || any(isinf(space))) space = vec4(0.0, 0.0, 0.0, 1.0);
      vec4 cockpit = uCockpit > 0.5 ? texture2D(tCockpit, vUv) : vec4(0.0);
      if (uShield > 0.0) {
        // The darkening's front runs down the glass as the shield deploys.
        float fromTop = 1.0 - vUv.y;
        float front = uShield * 1.3 - 0.15;
        float covered = 1.0 - smoothstep(front - 0.15, front, fromTop);
        space.rgb *= mix(vec3(1.0), uTint, covered);
        // A faint blue sheen at the front while it's moving.
        float moving = step(0.001, uShield) * step(uShield, 0.999);
        space.rgb += vec3(0.2, 0.45, 0.8) * 0.012 * moving * exp(-pow((fromTop - front + 0.04) / 0.03, 2.0));
      }
      if (any(isnan(cockpit)) || any(isinf(cockpit))) cockpit = vec4(0.0, 0.0, 0.0, 1.0);
      cockpit = clamp(cockpit, 0.0, 64.0);
      // The cockpit's colour is already weighted by its coverage; glows add
      // light without covering anything.
      gl_FragColor = vec4(space.rgb * (1.0 - clamp(cockpit.a, 0.0, 1.0)) + cockpit.rgb, 1.0);
    }`},H_=class extends hf{scene;camera;target;quad=new vf;material;clearColor=new Y;cockpit=!0;shield=0;shieldTint=new Y(1,1,1);constructor(e,t){super(),this.scene=e,this.camera=t,this.target=new Bn(1,1,{type:De,samples:4}),this.material=new Q({uniforms:{tDiffuse:{value:null},tCockpit:{value:this.target.texture},uShield:{value:0},uTint:{value:new Y(1,1,1)},uCockpit:{value:1}},vertexShader:V_.vertexShader,fragmentShader:V_.fragmentShader,depthTest:!1,depthWrite:!1}),this.quad.material=this.material}setSize(e,t){this.target.setSize(e,t)}render(e,t,n){this.material.uniforms.uCockpit.value=+!!this.cockpit,this.cockpit&&this.renderCockpit(e),this.material.uniforms.tDiffuse.value=n.texture,this.material.uniforms.uShield.value=this.shield,this.material.uniforms.uTint.value.copy(this.shieldTint),e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}renderCockpit(e){e.getClearColor(this.clearColor);let t=e.getClearAlpha(),n=e.autoClear;e.setRenderTarget(this.target),e.setClearColor(0,0),e.clear(!0,!0,!1),e.autoClear=!1,e.render(this.scene,this.camera),e.autoClear=n,e.setClearColor(this.clearColor,t)}dispose(){this.target.dispose(),this.material.dispose(),this.quad.dispose()}};function U_(e){return e.blending=5,e.blendEquation=100,e.blendSrc=204,e.blendDst=201,e.blendEquationAlpha=100,e.blendSrcAlpha=200,e.blendDstAlpha=201,e.transparent=!0,e.depthWrite=!1,e}var W_=(e,t,n)=>new q(e,t,n),G_=e=>e.map(e=>W_(-e.x,e.y,e.z)),K_=-.3,q_=[W_(-.64,K_,-1),W_(-.7,K_,-.82),W_(-.76,K_,-.45),W_(-.79,K_,-.05)],J_=(e,t)=>new ao(e,!1,`centripetal`).getSpacedPoints(t);function Y_(e,t){let n=new _r;e.add(n),Z_(n,t),X_(n,[t.wall,t.dark]);let r=[...J_(q_,40).filter(e=>e.z<-.45),W_(-3,2.5,-1.2)];return{windscreen:[...r,...G_(r).reverse()]}}function X_(e,t){for(let n of t){let t=e.children.filter(e=>e.isMesh&&!e.isInstancedMesh&&e.material===n);if(!(t.length<2))for(let r of[!0,!1]){let i=t.filter(e=>e.castShadow===r);if(!i.length)continue;let a=i.map(e=>{e.updateMatrix();let t=(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrix);for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`].includes(e)||t.deleteAttribute(e);return t.clearGroups(),t}),o=new Z(Wh(a),n);o.castShadow=r,o.receiveShadow=r||n.userData.noShadows!==!0;for(let t of i)e.remove(t),t.geometry.dispose();for(let e of a)e.dispose();e.add(o)}}}function Z_(e,t){for(let n of[-1,1]){let r=J_(n<0?q_:G_(q_),40),i=[],a=[];for(let e=0;e<r.length-1;e++){let t=r[e],n=r[e+1],o=[W_(t.x,t.y-.012,t.z),W_(n.x,n.y-.012,n.z),W_(n.x,-.8,n.z),W_(t.x,-.8,t.z)];for(let e of[0,1,2,0,2,3])i.push(o[e].x,o[e].y,o[e].z),a.push(o[e].z*.8,o[e].y*.8)}let o=new vi;o.setAttribute(`position`,new X(i,3)),o.setAttribute(`uv`,new X(a,2)),o.computeVertexNormals();let s=new Z(o,t.wall);s.receiveShadow=!0,e.add(s);let c=new Do,l=[[.8,-.77],[.8,-.32],[.66,-.34],[.56,-.365],[.54,-.39],[.535,-.77]],u=n>0?l:l.map(([e,t])=>[-e,t]).reverse();c.moveTo(u[0][0],u[0][1]);for(let[e,t]of u.slice(1))c.lineTo(e,t);c.closePath();let d=new ds(c,{depth:1.1,bevelEnabled:!0,bevelThickness:.006,bevelSize:.005,bevelSegments:2});d.translate(0,0,-1.02);let f=new Z(d,t.dark);f.receiveShadow=!0,e.add(f)}}var Q_=80,$_=new Y(.42,.95,.86),ev=[[-1.06,-.312],[-1,-.3],[-.8,-.262],[-.783,-.258],[-.771,-.263],[-.765,-.3],[-.772,-.308],[-.81,-.312],[-.81,-.42],[-1.06,-.42]],tv={sight:G.degToRad(27.5),distance:.84,top:.075,bottom:-.2,width:3.2},nv=new Y(.16,.1,.05),rv=1.8,iv=class{scene=new Tr;camera=new _c(50,1,.02,20);sun=new Sc(16773596,0);hemi=new ac(6845055,1316379,.45);screenGlow=new yc(10273023,.5,1.6,1.6);trim=[];glass;canopy;panel=new _r;built=!1;pitch=0;head=new q;power=1;powerStart=-1;time=0;renderer;shadowDir=new q;shadowLit=-1;shield=0;shieldGoal=0;stepShield(e){this.shield=G.clamp(this.shield+Math.sign(this.shieldGoal-this.shield)*(e/rv),0,1)}shieldTint=nv;constructor(e){this.renderer=e,e.shadowMap.autoUpdate=!1;let t=new yl(e);this.scene.environment=t.fromScene(new I_,.04).texture,this.scene.environmentIntensity=.22,t.dispose(),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.01,this.sun.shadow.radius=3;let n=this.sun.shadow.camera;n.left=n.bottom=-1.4,n.right=n.top=1.4,n.near=.1,n.far=8,this.sun.target.position.set(0,-.3,-.85),this.screenGlow.position.set(-.15,-.37,-.64),this.scene.add(this.sun,this.sun.target,this.hemi,this.screenGlow);let r=ov(),i=new Os({color:2303790,metalness:.3,roughness:.7,bumpMap:r,bumpScale:.3}),a=new Os({color:2435633,metalness:.4,roughness:.6,bumpMap:r,bumpScale:1,side:2,emissive:395275});this.canopy=Y_(this.scene,{wall:a,dark:i}),this.buildGlareshield(new Os({color:1909031,metalness:.15,roughness:.88,bumpMap:r,bumpScale:.2,emissive:329482})),this.buildPanel(i),this.glass=new Q({vertexShader:`
        varying vec3 vPos;
        void main() { vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        varying vec3 vPos;
        void main() {
          gl_FragColor = vec4(vec3(0.35, 0.55, 0.7) * 0.012 * smoothstep(-0.12, -0.34, vPos.y), 1.0);
        }`,side:1}),U_(this.glass);let o=new Z(new _s(1.25,72,36,Math.PI*1.5-1.45,2.9,0,Math.PI/2+.45),this.glass);o.renderOrder=10,this.scene.add(o)}buildGlareshield(e){let t=new Do;t.moveTo(ev[0][0],ev[0][1]);for(let[e,n]of ev.slice(1))t.lineTo(e,n);t.closePath();let n=tv.width,r=new ds(t,{depth:n,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:2,curveSegments:4});r.rotateY(-Math.PI/2),r.translate(n/2,0,0);let i=new Z(r,e);i.receiveShadow=i.castShadow=!0,this.scene.add(i);let a=new bo(new q(-tv.width/2,-.309,-.772),new q(tv.width/2,-.309,-.772));this.scene.add(new Z(new vs(a,1,9e-4,5,!1),this.trimMaterial($_,.3)))}buildPanel(e){let t=this.panel;t.position.set(0,-Math.sin(tv.sight)*tv.distance,-Math.cos(tv.sight)*tv.distance),this.scene.add(t);let n=tv.top-tv.bottom,r=new Z(new B_(tv.width,n,.04,2,.006),e);r.position.set(0,(tv.top+tv.bottom)/2,-.021),r.receiveShadow=!0,t.add(r)}trimMaterial(e,t){let n=new Yi({color:e.clone().multiplyScalar(t)});return n.userData.base=e.clone().multiplyScalar(t),this.trim.push(n),n}build(e,t){this.camera.aspect=e/t;let n=Math.tan(G.degToRad(Q_/2)),r=Math.max(Math.atan(n/this.camera.aspect),Math.atan(n/1.6));this.camera.fov=G.radToDeg(2*r),this.camera.updateProjectionMatrix();let i=T(t)-13,a=G.degToRad(-12),o=G.degToRad(24);for(let n=0;n<24;n++)this.pitch=(a+o)/2,this.footAt(e,t)>i?a=this.pitch:o=this.pitch;this.panel.rotation.x=-this.pitch,this.built=!0}footAt(e,t){this.camera.position.set(0,0,0),this.camera.lookAt(0,-Math.tan(this.pitch),-1),this.camera.updateMatrixWorld();let n=this.canopy.windscreen;return Math.max(this.toScreen(n[0],e,t).y,this.toScreen(n[n.length-1],e,t).y)}powerUp(e){this.powerStart=e,this.power=0}update(e,t,n,r,i){if(!this.built)return!1;this.time=t;let a=1-Math.exp(-4*e),o=this.head.clone();this.head.lerp(new q(0,0,.03*i),a),this.camera.position.copy(this.head),this.camera.lookAt(0,-Math.tan(this.pitch),-1),this.camera.updateMatrixWorld();let s=o.distanceToSquared(this.head)>1e-10;this.powerStart>=0&&(this.power=G.clamp((t-this.powerStart)/2.2,0,1),this.power>=1&&(this.powerStart=-1));let c=(e,t)=>G.smoothstep(this.power,e,t);for(let e of this.trim){let n=this.power<1?Math.sin(t*60)>.2?1:.4:1;e.color.copy(e.userData.base).multiplyScalar(c(.05,.45)*(c(.05,.45)<1?n:1))}this.screenGlow.intensity=.25*c(.3,.7),this.stepShield(e);let l=G.lerp(1,(nv.r+nv.g+nv.b)/3,this.shield),u=G.smoothstep(-n.z,-.25,.15)*G.smoothstep(n.y,-.4,-.1);this.sun.position.copy(n).multiplyScalar(4).add(this.sun.target.position),this.sun.intensity=5*r*u*l;let d=+(this.sun.intensity>.001);return this.sun.shadow.map||(this.renderer.shadowMap.needsUpdate=!0),d&&n.lengthSq()>.5&&(this.shadowDir.angleTo(n)>.004||this.shadowLit!==d||this.power<1)&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowDir.copy(n)),this.shadowLit=d,this.hemi.intensity=.3+.3*r*u*l,s}toScreen(e,t,n){let r=e.clone().project(this.camera);return{x:(r.x*.5+.5)*t,y:(-r.y*.5+.5)*n}}project(e,t,n){let r=this.canopy.windscreen.map(n=>this.toScreen(n,e,t)),i=Math.max(r[0].y,r[r.length-1].y),[a,o]=av(r,t*.45),s=Math.max(a,0)+14,c=Math.min(n-18,o-14),l=i-40;return{windscreen:r,foot:i,view:{left:s,top:28,width:c-s,height:l-28}}}get elapsed(){return this.time}};function av(e,t){let n=1/0,r=-1/0;for(let i=0,a=e.length-1;i<e.length;a=i++){let o=e[i],s=e[a];if(o.y>t==s.y>t)continue;let c=o.x+(t-o.y)/(s.y-o.y)*(s.x-o.x);n=Math.min(n,c),r=Math.max(r,c)}return n<=r?[n,r]:[0,0]}function ov(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.fillStyle=`#808080`,t.fillRect(0,0,512,512);let n=11,r=()=>(n=n*16807%2147483647)/2147483647,i=t.getImageData(0,0,512,512);for(let e=0;e<i.data.length;e+=4){let t=120+r()*16;i.data[e]=i.data[e+1]=i.data[e+2]=t}t.putImageData(i,0,0),t.strokeStyle=`#3a3a3a`,t.lineWidth=2;let a=(e,n,i,o,s)=>{if(s>3||i<90&&o<90){if(t.strokeRect(e+1,n+1,i-2,o-2),t.fillStyle=`#5a5a5a`,r()>.5)for(let[r,a]of[[e+7,n+7],[e+i-7,n+o-7]])t.fillRect(r-1.5,a-1.5,3,3);return}if(i>o){let t=i*(.35+r()*.3);a(e,n,t,o,s+1),a(e+t,n,i-t,o,s+1)}else{let t=o*(.35+r()*.3);a(e,n,i,t,s+1),a(e,n+t,i,o-t,s+1)}};a(0,0,512,512,0);let o=new Wa(e);return o.wrapS=o.wrapT=fe,o.repeat.set(3,3),o}var sv=70,cv={orbital:{orbit:140,angle:150},arda:{orbit:190,angle:-10},thalassa:{orbit:240,angle:40},theoria:{orbit:390,angle:-70},nyx:{orbit:550,angle:-140}},lv=[4/24,8/24],uv=34,dv=(e,t)=>{let n=G.degToRad(t);return new q(e*Math.cos(n),0,e*Math.sin(n))},fv={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new K(1,1)},uVignette:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uVignette;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
      float vig = 1.0 - smoothstep(0.45, 1.25, length(q));
      c.rgb *= mix(1.0 - 0.38 * uVignette, 1.0, vig);
      c.rgb += (hash(vUv * uRes + fract(uTime * 7.0) * 311.0) - 0.5) * 0.022;
      gl_FragColor = c;
    }`},pv=e=>e*e*e*(e*(e*6-15)+10),mv=e=>new Promise(t=>window.setTimeout(t,e*1e3));function hv(n,r,i,a,o,c){let d=new pf({canvas:n,antialias:!0,powerPreference:`high-performance`}),m=Math.min(window.devicePixelRatio,ue()?1.5:2);d.setPixelRatio(m),d.setSize(window.innerWidth,window.innerHeight),d.toneMapping=4,d.toneMappingExposure=1.05,d.shadowMap.enabled=!0,d.shadowMap.type=1;let h=new Tr,_=new _c(uv,window.innerWidth/window.innerHeight,.05,4e3),v=new Set,C=e=>{v.has(e)||(v.add(e),c.onLoadStep(e))},w=$f(d,h,C);w.setPixelRatio(m);let T=()=>c.layout().narrow,E=()=>window.innerWidth<window.innerHeight*.9,D=()=>{let e=c.layout().view,t=window.innerWidth,n=window.innerHeight;return{x:(t/2-(e.left+e.width/2))/t,y:(n/2-(e.top+e.height/2))/n}},O=()=>{let e=E(),t=D(),n=c.layout().view,r=T()&&!e,i=r?G.clamp(1150/Math.max(1,n.width),1,2.7):G.clamp(Math.max(1e3/Math.max(1,n.width),1045/Math.max(1,n.height)),1,2.3);return{center:e?new q(-110,0,-100):new q(0,0,-30),radius:e?2900:1250*i,theta:e?.2+Math.PI/2:.2,phi:e?.45:r?1.4:1.22,shiftX:t.x*1.1,shiftY:r?t.y-.1:t.y,spin:.006}},A=hg({...O(),phi:.78,radius:1250}),j=new q,N=Object.fromEntries(Object.entries(cv).map(([e,t])=>[e,dv(t.orbit,t.angle)])),P=Object.values(N),ne=Object.fromEntries(Object.entries(N).map(([e,t])=>[e,dp(t,P.filter(e=>e!==t),e===`nyx`?-.45:.55)])),re=(()=>{let e=new q(0,1,0),t=N.arda.clone().negate().normalize(),n=new q(ne.arda.x,0,ne.arda.z).normalize(),r=n,i=-1/0;for(let a=-180;a<180;a+=2){let o=n.clone().applyAxisAngle(e,G.degToRad(a));if(Math.abs(Math.sin(G.degToRad(a)))<.6)continue;let s=o.clone().negate(),c=new q().crossVectors(e,s).normalize(),l=G.radToDeg(Math.atan2(t.dot(c),t.dot(s))),u=-Math.abs(l-95)-(Math.abs(a)>90?30:0);u>i&&(i=u,r=o)}return N.arda.clone().addScaledVector(r,6.6).add(new q(0,.6,0))})(),ie=dh(N.theoria,ne.theoria),se=e=>{let t=ie[f.indexOf(e)];return Sh(e,t.center,t.viewDir,s(e),j)},ce=(()=>{let e=new q(0,1,0),t=new q(ne.nyx.x,0,ne.nyx.z).normalize();return N.nyx.clone().addScaledVector(t.applyAxisAngle(e,G.degToRad(68)),3.4).add(new q(0,.55,0))})(),I={star:hp(4),orbital:ag(N.orbital,j,A,s(`orbital`),lv),arda:ih(N.arda,s(`arda`),j),ithil:Uh(re,N.arda,s(`ithil`),j),thalassa:Jp(N.thalassa,s(`thalassa`),j),theoria:fh(N.theoria,j,ne.theoria),relativity:se(`relativity`),quantum:se(`quantum`),astrophysics:se(`astrophysics`),nyx:Mh(N.nyx,j,ne.nyx),optica:zh(ce,j,dp(ce,[N.nyx],.75))},fe=I.nyx.map,pe=I.optica.map;for(let e of Object.values(I))h.add(e.root);let me=np(N.theoria,I.theoria.bodyRadius??3.7,[...f,f[0]].map(e=>({center:I[e].center,radius:I[e].bodyRadius??I[e].radius})));h.add(me.root);{let e=re.clone().sub(N.arda),t=Math.hypot(e.x,e.z)*.75+I.ithil.radius;I.arda.focusExtent={across:t,upDown:Math.max(I.arda.radius*1.08,Math.abs(e.y)+I.ithil.radius+t*.2)}}{let e=ce.clone().sub(N.nyx),t=Math.hypot(e.x,e.z)*.75+I.optica.radius;I.nyx.focusExtent={across:t,upDown:Math.max(I.nyx.radius*1.08,Math.abs(e.y)+I.optica.radius+t*.2)}}let he=I.orbital.surface,ge=Object.keys(I).filter(e=>I[e].map),_e=e=>e?I[e].map??null:null,ve=()=>_e(Le),ye=()=>ge.some(e=>I[e].map.unroll>0),be=new Ca({color:new Y(.55,.62,.72),transparent:!0,opacity:.12,depthWrite:!1});for(let e of Object.values(cv)){let t=[];for(let n=0;n<=256;n++)t.push(dv(e.orbit,n/256*360));h.add(new ja(new vi().setFromPoints(t),be))}let xe=Xg(h,Object.keys(cv).map(e=>({id:e,center:I[e].center,radius:I[e].bodyRadius??I[e].radius})),m),Se=d.getDrawingBufferSize(new K),L=new Sf(d,new Bn(Se.x,Se.y,{type:De,samples:4}));L.setPixelRatio(m),L.setSize(window.innerWidth,window.innerHeight),L.addPass(new Cf(h,_));let Ce=new iv(d),we=new H_(Ce.scene,Ce.camera);L.addPass(we);let Te=!1,Ee=!0,Oe=new Tf(new K(window.innerWidth,window.innerHeight),.4,.42,1.1);L.addPass(Oe);let ke=new Nf(m);L.addPass(ke),L.addPass(new Df);let Ae=new yf(fv);L.addPass(Ae);let R=new a_(r,c);for(let e of p)R.addWorld(I[e.id],e.name,e.subtitle,e.moonOf?t(e.id).length:de(e.id).length,e.moonOf,g(e.id).map(e=>e.id),f.indexOf(e.id)+1);for(let e of M)ae(e.world)&&e.world!==`thalassa`&&!e.of&&!e.area&&R.addPlace(I[e.world],e.id,e.name,{num:oe(e.world,e.id)});for(let t of e.filter(e=>e.areas?.length))ae(t.world)&&y(t).length&&R.addPlace(I[t.world],`region:${l(t.name)}`,t.name,{num:oe(t.world,`region:${l(t.name)}`)});for(let e of Gp())R.addPlace(I.thalassa,e.id,e.name,{num:oe(`thalassa`,e.id)});let z=new f_(i,he,s(`orbital`),e.filter(e=>e.world===`orbital`),ee.filter(e=>e.world===`orbital`),{onPlaceClick:e=>c.onPlaceClick(`orbital`,e),onPlaceHover:e=>c.onPlaceHover(`orbital`,e),onRegionClick:e=>c.onRegionClick(`orbital`,e)}),je=[a],B=new Map,V=pm(qp()),Me=t=>e.filter(e=>e.world===t).map(e=>{if(t!==`thalassa`||!e.island)return e;let{lat:n,lon:r,size:i}=e.island,a=2*Math.asin(Math.min(i/2,1))*180/Math.PI,o=n;for(let e=-a*.45;e<=a*.45;e+=1){let t=r+e/Math.cos(n*Math.PI/180),i=0;for(let e=n;e<Math.min(n+a*1.2,64);e+=.5)if(V(e,t)>0)o=Math.max(o,e),i=0;else if(++i>3)break}return{...e,at:{lat:Math.min(o+3.5,63),lon:r}}});for(let t of ge){let n=a;t!==`arda`&&(n=document.createElement(`div`),n.className=`chart`,n.hidden=!0,je[je.length-1].after(n),je.push(n));let r={onPlaceClick:e=>c.onPlaceClick(t,e),onPlaceHover:e=>c.onPlaceHover(t,e),onRegionClick:e=>c.onRegionClick(t,e)};B.set(t,t===`nyx`?new T_(n,fe,s(`nyx`),e.filter(e=>e.world===`nyx`),r):t===`optica`?new F_(n,pe,s(`optica`),r):new Xm(n,I[t].map,t,s(t),Me(t),u(t),r))}{let e=B.get(`thalassa`),t=S(`thalassa`);e instanceof Xm&&(e.extras=dm(e,s(`thalassa`),t?.tree??[],t?.kin??[],Gp(),V));let n=B.get(`ithil`);n instanceof Xm&&(n.extras=mm(n));for(let e of f){let t=B.get(e);t instanceof Xm&&(t.extras=hm(t,S(e),S))}}let Ne=O(),H=new _g(_,n,{position:hg(Ne),look:Ne.center,shiftX:Ne.shiftX,shiftY:Ne.shiftY});H.toOrbit(Ne,!0);let Pe=`home`,Fe=null,Ie=null,Le=null,Re=null,ze=0,Be=e=>{let t=c.layout().view,n=Math.tan(G.degToRad(uv/2));return Math.max(e.across/(.88*Math.max(1,t.width)),e.upDown/(.88*Math.max(1,t.height)))*window.innerHeight/n},Ve=e=>{let t=I[e],n=D(),r=t.focusDir??(e===`star`||e===`ithil`?A.clone().normalize().add(new q(.3,-.4,0)).normalize():ne[e]),i=Math.max(t.focusDistance*(T()?1.35:1),t.focusExtent?Be(t.focusExtent):0);return og(t.focusTarget??t.center,r,i,n.x,n.y)},He=(e,t)=>{let n=I[e].placeView?.(t);if(!n)return Ve(e);let r=D();return og(n.target,n.dir,n.distance*(T()?1.35:1),r.x,r.y)},Ue=e=>{let t=I[e],n=t.bodyRadius??t.radius;return{center:t.center,radius:e===`theoria`?n*2.7:n*1.35}},We=(e,t)=>({center:e.target,radius:e.radius,theta:e.theta,phi:e.phi,shiftX:e.shiftX,shiftY:e.shiftY,spin:t}),Ge=e=>{for(let t of Object.values(I)){if(t.id!==e){t.setFocused(!1);continue}let n=Ve(t.id),r=ae(t.id)?[...te(t.id)].find(([,e])=>e===`next`)?.[0]:void 0;t.setFocused(!0,new q(Math.sin(n.phi)*Math.sin(n.theta),Math.cos(n.phi),Math.sin(n.phi)*Math.cos(n.theta)),r)}Fe=e,e===null&&R.setFocus(null)},Ke=e=>{Fe===e&&R.setFocus(e)},qe=e=>{Ie=e,R.setActive(e);for(let t of Object.values(I))t.setSelected?.(t.id===Fe?e:null)},Je=[],Ye=0,Xe=(e,t,n,r)=>{let i=Je.findIndex(n=>n.surface===e&&n.key===t);return i>=0&&Je.splice(i,1)[0].resolve(),r<=0||H.reducedMotion||Math.abs(e[t]-n)<1e-4?(e[t]=n,Promise.resolve()):new Promise(i=>Je.push({surface:e,key:t,from:e[t],to:n,start:Ye,dur:r,resolve:i}))},Ze=()=>{for(let e of[...Je]){let t=Math.min(1,(Ye-e.start)/e.dur);e.surface[e.key]=e.from+(e.to-e.from)*pv(t),t>=1&&(Je.splice(Je.indexOf(e),1),e.resolve())}},Qe={arda:18,thalassa:4},$e=e=>Qe[e]??3,et=(e,t=!0)=>{let n=_e(e),r=c.layout().view,i=Math.min(r.width*.94/(2*n.extent.x),r.height*.88/(2*n.extent.y)),a=window.innerHeight/(2*i*Math.tan(G.degToRad(uv/2))),o=D();return We(og(n.center,n.axes(t).out,a,o.x,o.y),0)},tt=(e,t)=>{let n=_e(e),r=t.place?b(e,t.place):void 0;if(e===`nyx`){if(r){let{l:t,logt:i}=k(r),a=r.anchor.kind===`solar`;return n.viewAt(i,t,Le===e?Math.max(n.goal.zoom,a?9:6):a?9:6)}let i=t.region?x(e,t.region):void 0;return i&&F[i.name]?fe.depthView(F[i.name]):n.whole}if(e===`optica`){let i=c.layout();pe.fit(i.view.width,i.view.height,i.narrow);let a=r?pe.layout.at.get(r.id):void 0;if(a)return n.viewAt(a[1]*.6,a[0],Le===e?Math.max(n.goal.zoom,1.5):1.5);let o=pe.layout,s=t.region?[...o.stages,...o.stretch?[o.stretch]:[]].find(e=>l(e.region.name)===t.region):void 0;if(s===o.stretch&&s)return n.viewAt(40,s.t+.7*(o.field0-s.t)/2,Le===e?Math.max(n.goal.zoom,1.3):1.3);if(s)return n.viewAt(0,s.t,Le===e?Math.max(n.goal.zoom,1.3):1.3);let u=t.region?o.lanes.find(e=>l(e.region.name)===t.region):void 0;if(u){let t=[...o.at.entries()].filter(([,e])=>e[1]===u.s&&e[0]>=o.slot0).map(([,e])=>e[0]);return n.viewAt(u.s*.5,(o.field0+Math.max(o.slot0,...t)+160/(o.px*.9))/2,Le===e?Math.max(n.goal.zoom,1.3):1.3)}let d=le();return d&&t.region===l(d.name)?n.viewAt(-40,560,Le===e?Math.max(n.goal.zoom,1.3):1.3):n.whole}if(r?.anchor.kind===`surface`){let t=Le===e?Math.max(n.goal.zoom,$e(e)):$e(e);return n.viewAt(r.anchor.lat,r.anchor.lon,t)}let i=t.region?x(e,t.region):void 0;if(i){let t=y(i).flatMap(e=>e.anchor.kind===`surface`?[{lat:e.anchor.lat,lon:e.anchor.lon}]:[]);for(let n of u(e).filter(e=>e.region===i.name))for(let e of n.parts)e.at&&`lat`in e.at&&t.push(e.at);if(i.at&&t.push(i.at),t.length)return n.around(t)}let a=c.layout();if(a.narrow&&a.portrait){let t=s(e).flatMap(e=>e.anchor.kind===`surface`?[{lat:e.anchor.lat,lon:e.anchor.lon}]:[]);for(let n of u(e))for(let e of n.parts)e.at&&`lat`in e.at&&t.push(e.at);if(t.length){if(S(e)?.moonOf===`theoria`){let r=s(e).find(e=>e.series?.part===1)?.anchor,i=r?.kind===`surface`?r:t[0];return{...n.around(t.filter(e=>Math.abs(e.lon-i.lon)<=60)),zoom:2.5}}let{centre:r}=Jm(t);return n.viewAt(r.lat,r.lon,2.5)}}return n.whole},nt=e=>{let t=e.center.clone().project(_),n=e.center.clone().add(e.axes().right).project(_),r=window.innerWidth,i=window.innerHeight,a=(t.x*.5+.5)*r,o=(-t.y*.5+.5)*i;return{x:a,y:o,ppu:Math.hypot((n.x*.5+.5)*r-a,(-n.y*.5+.5)*i-o)||1}},rt={pan(e,t,n,r){let i=ve();if(!i)return;let a=nt(i),o=n!==void 0&&r!==void 0?{x:n,y:r}:{x:a.x,y:a.y},s={x:(o.x-a.x)/a.ppu,y:-(o.y-a.y)/a.ppu};i.drag(s.x-e/a.ppu,s.y+t/a.ppu,s.x,s.y)},zoom(e,t,n){let r=ve();if(!r)return;let i=nt(r);r.zoomAt(Math.exp(-e),(t-i.x)/i.ppu,-(n-i.y)/i.ppu)}},it=(e,t)=>{let n=c.layout().view,r=E(),i=r?78:96,a=(r?n.height:n.width)*.92,o=(r?n.width:n.height)*.92-i*2,s=Math.min(a/e,o/t);return window.innerHeight/(2*s*Math.tan(G.degToRad(uv/2)))},at=(e,t)=>{let n=1/e.plates,r=e.bandWidth,i=t.place?b(`orbital`,t.place):void 0;if(i&&i.anchor.kind===`strip`){let t=it(1.35,r);return{pan:e.panOf(i.anchor.along),distance:Le&&H.charting?Math.min(H.chartState.distance,t):t}}let a=t.region?x(`orbital`,t.region):void 0;if(a?.plate!==void 0)return{pan:e.panOf((a.plate+.5)*n),distance:it(1.35,r)};let[o,s]=e.charted;return{pan:e.panOf((o+s)/2),distance:it(e.panOf(s)-e.panOf(o)+.5,r)}},ot=(e,t,n)=>{let r=e.frame,i=D(),a=E()?r.along.clone().negate():r.across.clone();return{origin:r.origin,along:r.along,normal:r.normal,up:a,approach:r.approach,pan:t,distance:n,panRange:[e.panOf(e.charted[0])-.7,e.panOf(e.charted[1])+.7],distanceRange:[1.1,it(e.panOf(e.charted[1])-e.panOf(e.charted[0])+2.5,e.bandWidth)],shiftX:i.x,shiftY:i.y}},st=e=>{let t=e.place?b(`orbital`,e.place):void 0,n=e.region?x(`orbital`,e.region):void 0;z.setActive(t?.id??null),z.setRegion(t?.region??n?.name??null),Ie=t?.id??null},ct=async(e,t,n)=>{let r=++ze,i=_e(e),a=B.get(e);Pe=`surface`,Re=e;let o=t.place?b(e,t.place):void 0,s=t.region?x(e,t.region):void 0;a.setActive(o?.id??null),a.setRegion(o?.region??s?.name??null),Ie=o?.id??null;let c=tt(e,t);if(Le===e&&i.unroll>.999){i.goTo(c),H.mapControl=rt,await Xe(i,`chart`,1,.6);return}if(Le=e,Fe!==e&&Ge(e),R.setSuppressed(!0),n){I[e].settle?.(),await Xe(i,`unroll`,1,0),await Xe(i,`chart`,1,0),i.goTo(c,!0),await H.toOrbit(et(e),!0),H.mapControl=rt;return}i.goTo(i.whole,!0),await H.toOrbit(et(e)),r===ze&&(await Xe(i,`unroll`,1,e===`nyx`?3.4:e===`optica`?3.2:1.8),r===ze&&(i.goTo(c),H.mapControl=rt,await Xe(i,`chart`,1,1.1)))},lt=async(e,t,n)=>{let r=he;Le=null,z.setActive(null);for(let e of B.values())e.setActive(null);if(H.mapControl=null,n)for(let e of[r,...ge.map(e=>I[e].map)])await Xe(e,`chart`,0,0),await Xe(e,`unroll`,0,0);for(let n of ge){let r=I[n].map;if(!(r.unroll<=1e-4&&r.chart<=1e-4)&&(r.goTo(r.whole),await Promise.all([Xe(r,`chart`,0,.45*t),mv(.7*t)]),e!==ze||(r.goTo(r.whole,!0),await Xe(r,`unroll`,0,1*t),e!==ze)))return!1}return r.unroll<=1e-4&&r.chart<=1e-4?(R.setSuppressed(!1),!0):(H.charting&&H.chartTo(0,r.frame.landingDistance),await Promise.all([Xe(r,`chart`,0,.45*t),mv(.5*t)]),e!==ze||(await Xe(r,`unroll`,0,.8*t),e!==ze)?!1:(R.setSuppressed(!1),!0))},ut=new Wc,dt=new K,ft=!1,pt=null;n.addEventListener(`pointermove`,e=>{dt.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),ft=!0}),n.addEventListener(`pointerleave`,()=>{pt=null,R.setHovered(null),c.onWorldHover(null)}),n.addEventListener(`click`,e=>{if(H.busy||H.wasDrag)return;let t=pt;t||=(dt.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),ht()),t&&t!==Fe&&c.onWorldClick(t)});let mt=Object.values(I).map(e=>e.pick),ht=()=>{if(Le||he.chart>0||ye())return null;ut.setFromCamera(dt,_);let e=ut.intersectObjects(mt,!1)[0];return e?Object.values(I).find(t=>t.pick===e.object)?.id??null:null},gt=()=>{if(!ft||H.busy)return;if(ft=!1,Le||he.chart>0||ye()){pt=null,n.style.cursor=H.charting||H.mapControl?`grab`:`default`;return}ut.setFromCamera(dt,_);let e=ut.intersectObjects(mt,!1)[0],t=e?Object.values(I).find(t=>t.pick===e.object)?.id??null:null,r=pt;pt=t&&t!==Fe?t:null,R.setHovered(pt),pt!==r&&c.onWorldHover(pt),n.style.cursor=pt?`pointer`:`default`},_t=()=>{Ee=!1;let e=window.innerWidth,t=window.innerHeight,n=Ce.project(e,t,c.layout().viewRight);c.projected(n);let a=c.layout().viewRight,o=`polygon(${n.windscreen.map(e=>`${Math.min(e.x,a).toFixed(1)}px ${e.y.toFixed(1)}px`).join(`, `)})`;r.style.clipPath=o,i.style.clipPath=o},vt=()=>{r.style.clipPath=``,i.style.clipPath=``,Ce.shield=Ce.shieldGoal=0,o.alert.textContent=``},yt=e=>`${Math.floor(Math.ceil(e)/60)}:${String(Math.ceil(e)%60).padStart(2,`0`)}`,bt=new q,xt=0,St={hdg:`000`,eta:`-:--`,spd:`---`},Ct=e=>{let t=e>0?_.position.distanceTo(bt)/e:0;bt.copy(_.position),xt=H.busy?xt+(t-xt)*(1-Math.exp(-6*e)):0,_.getWorldDirection(wt);let n=(Math.atan2(wt.x,-wt.z)*180/Math.PI%360+360)%360,r=H.flightRemaining;St.spd=H.busy?String(Math.round(xt)):`---`,St.hdg=String(Math.round(n)%360).padStart(3,`0`),St.eta=r!==null&&H.busy?yt(r):`-:--`},wt=new q,Tt=``,Et=0,Dt=(e,t)=>{let n=+(t<sv);n!==Ce.shieldGoal&&(Ce.shieldGoal=n,Tt=n?`Shield deploying…`:`Shield retracting…`,Et=1/0),Et===1/0&&Ce.shield===n&&(Tt=n?`Shield deployed`:``,Et=e+2.5),e>Et&&(Tt=``),o.alert.textContent!==Tt&&(o.alert.textContent=Tt),o.alert.classList.toggle(`is-moving`,Et===1/0),we.shield=Ce.shield,we.shieldTint.copy(Ce.shieldTint)},Ot=!0,kt=0,At=performance.now(),jt,Mt=new Promise(e=>jt=e),Nt=0,Pt=new q,Ft={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight},It=``,Lt=0,Rt=!1,zt=e=>{let t=ve(),n=t&&t.chart>.5?`${Le},${t.view.cx.toFixed(4)},${t.view.cy.toFixed(4)},${t.view.zoom.toFixed(3)}`:``;n!==It&&(It=n,Rt=!0),Rt&&e-Lt>150&&(Rt=!1,Lt=e,c.onMapMove())},Bt=0,Vt=new q,Ht=new q,U=new q,W=e=>{if(!Ot)return;kt=requestAnimationFrame(W);let t=Math.min((e-At)/1e3,.05);At=e;let n=e/1e3;Ye=n,Ze();for(let e of Object.values(I))e.update(n,t);me.update(n,t,!Le&&Pe!==`home`&&Fe===`theoria`&&!H.busy,H.reducedMotion);let a=1/0;for(let e of Object.values(I))a=Math.min(a,_.position.distanceTo(e.center)-e.radius*2.6);_.near=G.clamp(a*.25,.05,5),_.far=Math.max(4e3,_.position.length()+1200),H.update(n,t,window.innerWidth,window.innerHeight),H.busy&&(Bt+=_.position.distanceTo(Vt)),Vt.copy(_.position),xe.update(t,Pe===`home`&&!H.busy&&!H.reducedMotion&&v.has(`display`)),w.follow(_),gt(),Ae.uniforms.uTime.value=n,zt(e);let o=he.chart,s=0;for(let e of ge)o=Math.max(o,I[e].map.chart),s=Math.max(s,I[e].map.unroll);be.opacity=(Fe?.03:.12)*(1-s);let l=ge.find(e=>I[e].map.unroll>=.001);for(let e of Object.values(I))e.root.visible=!l||e.id===l||e.center.distanceTo(I[l].center)>60;Ae.uniforms.uVignette.value=1-.75*o;let u=c.layout(),d=u.view,f=c.cockpitFrame();ke.frame=f;let p=_.position.length(),m=1-.7*G.smoothstep(p,120,600);U.copy(j).sub(_.position).normalize().transformDirection(_.matrixWorldInverse);let h=1-o;Te?(Dt(n,p),(Ce.update(t,n,U,m*h,H.surge)||Ee)&&_t()):(Ce.stepShield(t),Dt(n,p)),Ct(t),Ht.set(0,0,0).project(_);let g=(Ht.x*.5+.5)*window.innerWidth,y=(-Ht.y*.5+.5)*window.innerHeight,b=Ht.z<1&&g>d.left-200&&g<d.left+d.width+200&&y>d.top-200&&y<d.top+d.height+200;if(ke.star.set(g,y,b?m*h:0),f&&Ht.z<1){let e=d.left+d.width/2,t=d.top+d.height/2;ke.light.set(g-e,-(y-t)).normalize()}R.setDestination(H.busy?Re:null,H.flightRemaining);let x=u.narrow,S=d.top+d.height,T=f?.panes.find(e=>e.dark!==1),E=x&&u.portrait&&T?G.clamp(T.rect.top,d.top,S):S;if(H.bias.set(0,x?(S-E)/(2*window.innerHeight):0),Ft={left:d.left,top:d.top,right:d.left+d.width,bottom:E},x){let e=`inset(${Math.round(Ft.top)}px ${Math.round(window.innerWidth-Ft.right)}px ${Math.round(window.innerHeight-Ft.bottom)}px ${Math.round(Ft.left)}px)`;for(let t of[r,i,...je])t.style.clipPath!==e&&(t.style.clipPath=e)}v.has(`worlds`)&&v.has(`instruments`)&&L.render(t);let D=x?E-8:S-8;R.update(_,window.innerWidth,window.innerHeight,t,d.left+d.width-12,D,d.top+8,Math.max(d.left,0)+8),z.update(_,window.innerWidth,window.innerHeight,H.chartState.pxPerUnit);for(let e of B.values())e.update(_,window.innerWidth,window.innerHeight);!v.has(`display`)&&v.size>=4&&(Nt=t<.05?Nt+1:0,Nt>=4&&(C(`display`),jt()))};kt=requestAnimationFrame(W),new URLSearchParams(location.search).has(`tick`)&&window.setInterval(()=>{document.hidden&&Ot&&W(performance.now())},50);let Ut=E(),Wt=!1,Gt=``,Kt=()=>{let e=c.layout(),t=`${window.innerWidth}x${window.innerHeight}:${e.style}:${e.strip?.top??0}`,n=t!==Gt;Gt=t;let r=e.style===`cockpit`&&!e.narrow;we.cockpit=r,r?(Ce.build(window.innerWidth,window.innerHeight),Ce.update(0,Ye,U,0,0),c.projected(Ce.project(window.innerWidth,window.innerHeight,c.layout().viewRight))):(Te||Ee)&&c.projected(null),r!==Te&&(Te=r,r||vt()),Ee=!0;let i=D();if(Pe===`home`&&Wt?H.setShift(i.x,i.y):Pe===`home`?H.reframe(O())||H.toOrbit(O(),!1):n?H.setShift(i.x,i.y):H.easeShift(i.x,i.y),pe.fit(e.view.width,e.view.height,e.narrow),Le&&ve()&&ve().unroll>.999&&H.toOrbit(et(Le),!0),Le&&H.charting){let{pan:e,distance:t,goalPan:n,goalDistance:r}=H.chartState;H.toChart(ot(he,e,t),!0),H.chartTo(n,r)}};window.addEventListener(`resize`,()=>{let e=window.innerWidth,t=window.innerHeight;_.aspect=e/t,d.setSize(e,t),L.setSize(e,t),Oe.resolution.set(e,t),Ae.uniforms.uRes.value.set(e,t),Kt(),E()!==Ut&&(Ut=E(),Pe===`home`&&H.toOrbit(O(),!0))}),Ae.uniforms.uRes.value.set(window.innerWidth,window.innerHeight),Kt();let qt=d.compileAsync(h,_).catch(()=>{}),Jt=Promise.all(Mp).then(e=>e.forEach(e=>e.image&&d.initTexture(e)));Promise.all([qt,Jt]).then(()=>C(`worlds`)),d.compileAsync(Ce.scene,Ce.camera).then(()=>C(`instruments`),()=>C(`instruments`));let Yt=[...Object.keys(cv).map(e=>({id:e,x:N[e].x,z:N[e].z})),...p.filter(e=>e.moonOf).map(e=>({id:e.id,x:I[e.id].center.x,z:I[e.id].center.z,moonOf:e.moonOf}))],Xt=new q,Zt=()=>{if(!Fe||Fe===`star`||Pe===`home`)return null;let e=S(Fe)?.moonOf??Fe,t=g(e);if(!t.length)return null;let n=I[e].center;return _.position.distanceTo(n)<Ve(e).radius*3.5||t.some(e=>_.position.distanceTo(I[e.id].center)<Ve(e.id).radius*3)?{world:e,body:I[e].bodyRadius??I[e].radius,ship:{x:_.position.x-n.x,z:_.position.z-n.z},moons:t.map(e=>{let t=I[e.id].center;return{id:e.id,name:e.name,x:t.x-n.x,z:t.z-n.z,orbit:Math.hypot(t.x-n.x,t.z-n.z),href:`#/w/${e.id}`}}),at:Fe===e?null:Fe,settled:H.flightRemaining===null?Fe===e?Le===e?e:null:Fe:null}:null},Qt={ready:Mt,async goHome(e=!1){let t=++ze;if(Pe=`home`,Re=null,qe(null),Ge(null),await lt(t,1,e))return H.toOrbit(O(),e)},async establish(e){let t=++ze;Pe=`home`,Re=null,qe(null),Ge(null);let n=O();if(H.reducedMotion)return H.toOrbit(n,!0);if(await H.toOrbit({...n,radius:n.radius*2.1,phi:Math.min(1.5,n.phi+.26),theta:n.theta-.5,spin:0},!0),await e,t===ze){Wt=!0;try{await H.toOrbit(n,!1,{seconds:5.2})}finally{Wt=!1,t===ze&&Pe===`home`&&!H.reframe(O())&&H.toOrbit(O(),!1)}}},async focusWorld(e,t=!1){let n=++ze,r=Fe===e,i=Le??Fe,a=!!i&&(i===e||S(i)?.moonOf===e),o=!!Le&&a,s=!!i&&i!==e&&S(i)?.moonOf===e;Pe=`world`,Re=e,qe(null),r||Ge(e),s&&R.setSuppressed(!0),await lt(n,e===`orbital`?1.8:o?1.35:1,t)&&(R.setSuppressed(s),await H.toOrbit(We(Ve(e),e===`star`?.008:e===`ithil`?0:.016),t,void 0,{gentle:a,avoid:[Ue(e),...i&&i!==e?[Ue(i)]:[]]}),n===ze&&(Ke(e),R.setSuppressed(!1)))},async focusPlace(e,t,n=!1){let r=++ze;Pe=`place`,Re=e,Fe!==e&&Ge(e),qe(t),await lt(r,1,n)&&(R.setSuppressed(!1),await H.toOrbit(We(He(e,t),0),n),r===ze&&Ke(e))},async land(e,t,n=!1){if(Le&&Le!==e){let e=++ze;if(!await lt(e,1,n))return}if(I[e].map)return ct(e,t,n);let r=I[e].surface;if(!r)return;let i=++ze;Pe=`surface`,Re=e,st(t),r.plate=-1;let a=at(r,t);if(Le===e&&H.charting&&r.unroll>.999){H.chartTo(a.pan,a.distance),await Xe(r,`chart`,1,.6);return}if(Le=e,Fe!==e&&Ge(e),R.setSuppressed(!0),n){await Xe(r,`unroll`,1,0),await Xe(r,`chart`,1,0),await H.toChart(ot(r,a.pan,a.distance),!0);return}await H.toChart(ot(r,0,r.frame.landingDistance)),i===ze&&(await Xe(r,`unroll`,1,1.6),i===ze&&(H.chartTo(a.pan,a.distance),await Xe(r,`chart`,1,1.1)))},preview(e,t){if(e!==Fe)return;if(Le===e){(B.get(e)??z).setHover(t);return}let n=t??Ie;R.setActive(n),I[e].setSelected?.(n)},hoverWorld(e){R.setHovered(e)},highlightRegion(e,t){let n=I[e].surface;if(!n)return;let r=t?x(e,t):void 0;n.plate=Le?-1:r?.plate??-1},setLens(e){z.setLens(e);for(let t of B.values())t.setLens(e)},setFound(e){R.setFound(e),z.setFound(e?.places??null);for(let t of B.values())t.setFound(e?.places??null)},pointFound(e,t){e&&e===Fe&&t?(Qt.preview(e,t),R.setHovered(null)):(Fe&&Qt.preview(Fe,null),R.setHovered(e))},mapContains(e,t){let n=ve();if(!n||n.chart<.5)return!1;let r=n.point(e,t,Pt).project(_);if(r.z>1)return!1;let i=(r.x*.5+.5)*window.innerWidth,a=(-r.y*.5+.5)*window.innerHeight;return i>=Ft.left&&i<=Ft.right&&a>=Ft.top&&a<=Ft.bottom},placePoint(e){let t=ve();return t&&t.chart>.5?null:R.pointOf(e.id)},placeInView(e){let t=ve();if(!t||t.chart<.5||e.world!==Le)return!1;let n;if(e.world===`nyx`){let{l:r,logt:i}=k(e);n=t.point(i,r,Pt)}else if(e.world===`optica`){let r=pe.layout.at.get(e.id);if(!r)return!1;n=t.point(r[1],r[0],Pt)}else if(e.anchor.kind===`surface`)n=t.point(e.anchor.lat,e.anchor.lon,Pt);else return!1;let r=n.project(_);if(r.z>1)return!1;let i=(r.x*.5+.5)*window.innerWidth,a=(-r.y*.5+.5)*window.innerHeight;return i>=Ft.left&&i<=Ft.right&&a>=Ft.top&&a<=Ft.bottom},setCue(e,t){R.setCue(e,t)},takeTravelled(){let e=Bt;return Bt=0,e},setRead(e){z.setRead(e);for(let t of B.values())t.setRead(e);R.setMarkStates(new Map(p.filter(e=>ae(e.id)).flatMap(e=>[...te(e.id)])))},turnTo(e,t){if(Fe!==e||Le||Pe!==`world`&&Pe!==`place`)return;let n=I[e];n.turnTo?.(t,_.position.clone().sub(n.center).normalize())},setLeader(e,t){R.setLeader(e,t)},powerUp(){Ce.powerUp(Ye)},shipState(){_.updateMatrixWorld();let e=_.matrixWorld.elements,t=new q(e[0],e[1],e[2]),n=new q(e[4],e[5],e[6]),r=new q(-e[8],-e[9],-e[10]),i=Math.asin(G.clamp(r.y,-1,1))*180/Math.PI,a=Math.atan2(-t.y,n.y)*180/Math.PI,o=Math.atan2(r.x,-r.z)*180/Math.PI;return{flying:H.busy&&!Wt,speed:H.speed,at:Pe===`home`?`system`:Pe===`surface`?`surface`:`orbit`,landing:Math.max(he.unroll+he.chart,...ge.map(e=>I[e].map.unroll+I[e].map.chart))*.5,here:Le??(Pe===`home`?null:Fe),destination:Re,pitch:i,roll:a,heading:o,alt:_.position.y,flux:1-.7*G.smoothstep(_.position.length(),120,600),shield:Ce.shield,shieldGoal:Ce.shieldGoal}},navState(){return _.getWorldDirection(Xt),{ship:{x:_.position.x,z:_.position.z},heading:Math.atan2(Xt.x,-Xt.z),destination:Re,eta:Wt?null:H.flightRemaining,worlds:Yt,local:Zt(),traveller:xe.state()}},relayout:Kt,readouts:()=>({...St}),pause(){Ot=!1,cancelAnimationFrame(kt)},resume(){Ot||(Ot=!0,At=performance.now(),kt=requestAnimationFrame(W))}};return Qt}export{hv as createSystem};