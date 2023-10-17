/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.110
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
import{a as le}from"./chunk-N23XWOUQ.js";import{a as Z}from"./chunk-3WBGP35M.js";import{a as R}from"./chunk-B5XY4KJS.js";import{f as _,i as se}from"./chunk-VNH2ZAFU.js";import{a as ae,b as v,d as $}from"./chunk-TL76KVMB.js";import{a as e,b as ce,d as j}from"./chunk-TZVAMLG3.js";import{a as Q}from"./chunk-7IOYEWZQ.js";var we={ROUNDED:0,MITERED:1,BEVELED:2},L=Object.freeze(we),g=[new e,new e],ge=new e,pe=new e,xe=new e,Se=new e,Te=new e,Ee=new e,Be=new e,Ce=new e,ze=new e,P=new e,W=new e,I={},ee=new ce;function Ae(e,t){let n=new Array(e.length);for(let r=0;r<e.length;r++){let a=e[r];ee=t.cartesianToCartographic(a,ee),n[r]=ee.height,e[r]=t.scaleToGeodeticSurface(a,a)}return n}function te(t,n,r,a){let o,l=t[0],i=t[1],c=e.angleBetween(l,i),s=Math.ceil(c/a),u=new Array(s);if(n===r){for(o=0;o<s;o++)u[o]=n;return u.push(r),u}let g=(r-n)/s;for(o=1;o<s;o++){let e=n+o*g;u[o]=e}return u[0]=n,u.push(r),u}var X=new e,Y=new e;function Oe(t,n,r,a){let o=new R(r,a),l=o.projectPointOntoPlane(e.add(r,t,X),X),i=o.projectPointOntoPlane(e.add(r,n,Y),Y),c=$.angleBetween(l,i);return i.x*l.y-i.y*l.x>=0?-c:c}var je=new e(-1,0,0),N=new v,De=new v,re=new j,Me=j.IDENTITY.clone(),ve=new e,Ne=new ae,ie=new e;function D(t,n,r,a,o,l,i,c){let s=ve,u=Ne;N=se.eastNorthUpToFixedFrame(t,o,N),s=v.multiplyByPointAsVector(N,je,s),s=e.normalize(s,s);let g=Oe(s,n,t,o);re=j.fromRotationZ(g,re),ie.z=l,N=v.multiplyTransformation(N,v.fromRotationTranslation(re,ie,De),N);let m=Me;m[0]=i;for(let f=0;f<c;f++)for(let t=0;t<r.length;t+=3)u=e.fromArray(r,t,u),u=j.multiplyByVector(m,u,u),u=v.multiplyByPoint(N,u,u),a.push(u.x,u.y,u.z);return a}var Ve=new e;function ne(t,n,r,a,o,l,i){for(let c=0;c<t.length;c+=3){let s=e.fromArray(t,c,Ve);a=D(s,n,r,a,o,l[c/3],i,1)}return a}function be(e,t){let n=e.length,r=new Array(6*n),a=0,o=t.x+t.width/2,l=t.y+t.height/2,i=e[0];r[a++]=i.x-o,r[a++]=0,r[a++]=i.y-l;for(let c=1;c<n;c++){i=e[c];let t=i.x-o,n=i.y-l;r[a++]=t,r[a++]=0,r[a++]=n,r[a++]=t,r[a++]=0,r[a++]=n}return i=e[0],r[a++]=i.x-o,r[a++]=0,r[a++]=i.y-l,r}function fe(e,t){let n=e.length,r=new Array(3*n),a=0,o=t.x+t.width/2,l=t.y+t.height/2;for(let i=0;i<n;i++)r[a++]=e[i].x-o,r[a++]=0,r[a++]=e[i].y-l;return r}var me=new _,ue=new e,he=new j;function ye(t,n,r,a,o,l,i,c,s,u){let g,m,f,y=e.angleBetween(e.subtract(n,t,P),e.subtract(r,t,W)),d=a===L.BEVELED?0:Math.ceil(y/Q.toRadians(5));if(g=o?j.fromQuaternion(_.fromAxisAngle(e.negate(t,P),y/(d+1),me),he):j.fromQuaternion(_.fromAxisAngle(t,y/(d+1),me),he),n=e.clone(n,ue),d>0){let r=u?2:1;for(let a=0;a<d;a++)n=j.multiplyByVector(g,n,n),m=e.subtract(n,t,P),m=e.normalize(m,m),o||(m=e.negate(m,m)),f=l.scaleToGeodeticSurface(n,W),i=D(f,m,c,i,l,s,1,r)}else m=e.subtract(n,t,P),m=e.normalize(m,m),o||(m=e.negate(m,m)),f=l.scaleToGeodeticSurface(n,W),i=D(f,m,c,i,l,s,1,1),r=e.clone(r,ue),m=e.subtract(r,t,P),m=e.normalize(m,m),o||(m=e.negate(m,m)),f=l.scaleToGeodeticSurface(r,W),i=D(f,m,c,i,l,s,1,1);return i}I.removeDuplicatesFromShape=function(e){let t=e.length,n=[];for(let r=t-1,a=0;a<t;r=a++){let t=e[r],o=e[a];$.equals(t,o)||n.push(o)}return n},I.angleIsGreaterThanPi=function(t,n,r,a){let o=new R(r,a),l=o.projectPointOntoPlane(e.add(r,t,X),X),i=o.projectPointOntoPlane(e.add(r,n,Y),Y);return i.x*l.y-i.y*l.x>=0};var Fe=new e,Ge=new e;I.computePositions=function(t,n,r,a,o){let l=a._ellipsoid,i=Ae(t,l),c=a._granularity,s=a._cornerType,u=o?be(n,r):fe(n,r),m=o?fe(n,r):void 0,f=r.height/2,y=r.width/2,d=t.length,h=[],p=o?[]:void 0,w=ge,B=pe,j=xe,E=Se,v=Te,N=Ee,A=Be,S=Ce,x=ze,z=t[0],T=t[1];E=l.geodeticSurfaceNormal(z,E),w=e.subtract(T,z,w),w=e.normalize(w,w),S=e.cross(E,w,S),S=e.normalize(S,S);let b,O,V=i[0],G=i[1];o&&(p=D(z,S,m,p,l,V+f,1,1)),x=e.clone(z,x),z=T,B=e.negate(w,B);for(let W=1;W<d-1;W++){let n=o?2:1;if(T=t[W+1],z.equals(T)){le("Positions are too close and are considered equivalent with rounding error.");continue}w=e.subtract(T,z,w),w=e.normalize(w,w),j=e.add(w,B,j),j=e.normalize(j,j),E=l.geodeticSurfaceNormal(z,E);let r=e.multiplyByScalar(E,e.dot(w,E),Fe);e.subtract(w,r,r),e.normalize(r,r);let a=e.multiplyByScalar(E,e.dot(B,E),Ge);if(e.subtract(B,a,a),e.normalize(a,a),Q.equalsEpsilon(Math.abs(e.dot(r,a)),1,Q.EPSILON7))h=D(x,S,u,h,l,V+f,1,1),x=z;else{j=e.cross(j,E,j),j=e.cross(E,j,j),j=e.normalize(j,j);let t=1/Math.max(.25,e.magnitude(e.cross(j,B,P))),r=I.angleIsGreaterThanPi(w,B,z,l);r?(v=e.add(z,e.multiplyByScalar(j,t*y,j),v),N=e.add(v,e.multiplyByScalar(S,y,N),N),g[0]=e.clone(x,g[0]),g[1]=e.clone(N,g[1]),b=te(g,V+f,G+f,c),O=Z.generateArc({positions:g,granularity:c,ellipsoid:l}),h=ne(O,S,u,h,l,b,1),S=e.cross(E,w,S),S=e.normalize(S,S),A=e.add(v,e.multiplyByScalar(S,y,A),A),s===L.ROUNDED||s===L.BEVELED?ye(v,N,A,s,r,l,h,u,G+f,o):(j=e.negate(j,j),h=D(z,j,u,h,l,G+f,t,n)),x=e.clone(A,x)):(v=e.add(z,e.multiplyByScalar(j,t*y,j),v),N=e.add(v,e.multiplyByScalar(S,-y,N),N),g[0]=e.clone(x,g[0]),g[1]=e.clone(N,g[1]),b=te(g,V+f,G+f,c),O=Z.generateArc({positions:g,granularity:c,ellipsoid:l}),h=ne(O,S,u,h,l,b,1),S=e.cross(E,w,S),S=e.normalize(S,S),A=e.add(v,e.multiplyByScalar(S,-y,A),A),s===L.ROUNDED||s===L.BEVELED?ye(v,N,A,s,r,l,h,u,G+f,o):h=D(z,j,u,h,l,G+f,t,n),x=e.clone(A,x)),B=e.negate(w,B)}V=G,G=i[W+1],z=T}g[0]=e.clone(x,g[0]),g[1]=e.clone(z,g[1]),b=te(g,V+f,G+f,c),O=Z.generateArc({positions:g,granularity:c,ellipsoid:l}),h=ne(O,S,u,h,l,b,1),o&&(p=D(z,S,m,p,l,G+f,1,1)),d=h.length;let M=o?d+p.length:d,R=new Float64Array(M);return R.set(h),o&&R.set(p,d),R};var $e=I;export{L as a,$e as b};