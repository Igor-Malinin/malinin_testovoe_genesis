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
import{a as O}from"./chunk-ERZ7P6FQ.js";import{a as I}from"./chunk-T2JXMNUX.js";import{a as m}from"./chunk-7P3UWTUX.js";import{a as w}from"./chunk-EK7K4JTS.js";import"./chunk-7IOYEWZQ.js";import"./chunk-XE4KLUZ2.js";import{a as A}from"./chunk-TL6AL3PA.js";import"./chunk-DYKDQ7Q5.js";import"./chunk-57R6MEVR.js";import{d as D,e as d}from"./chunk-KNXNZS2Q.js";var o,b=D(O(),1);function F(t,e){let r=t.num_points(),n=t.num_faces(),a=new o.DracoInt32Array,i=3*n,s=m.createTypedArray(r,i),u=0;for(let o=0;o<n;++o)e.GetFaceFromMesh(t,o,a),s[u+0]=a.GetValue(0),s[u+1]=a.GetValue(1),s[u+2]=a.GetValue(2),u+=3;return o.destroy(a),{typedArray:s,numberOfIndices:i}}function U(t,e,r,n,a){let i,s;n.quantizationBits<=8?(s=new o.DracoUInt8Array,i=new Uint8Array(a),e.GetAttributeUInt8ForAllPoints(t,r,s)):n.quantizationBits<=16?(s=new o.DracoUInt16Array,i=new Uint16Array(a),e.GetAttributeUInt16ForAllPoints(t,r,s)):(s=new o.DracoFloat32Array,i=new Float32Array(a),e.GetAttributeFloatForAllPoints(t,r,s));for(let o=0;o<a;++o)i[o]=s.GetValue(o);return o.destroy(s),i}function k(t,e,r,n){let a,i;switch(r.data_type()){case 1:case 11:i=new o.DracoInt8Array,a=new Int8Array(n),e.GetAttributeInt8ForAllPoints(t,r,i);break;case 2:i=new o.DracoUInt8Array,a=new Uint8Array(n),e.GetAttributeUInt8ForAllPoints(t,r,i);break;case 3:i=new o.DracoInt16Array,a=new Int16Array(n),e.GetAttributeInt16ForAllPoints(t,r,i);break;case 4:i=new o.DracoUInt16Array,a=new Uint16Array(n),e.GetAttributeUInt16ForAllPoints(t,r,i);break;case 5:case 7:i=new o.DracoInt32Array,a=new Int32Array(n),e.GetAttributeInt32ForAllPoints(t,r,i);break;case 6:case 8:i=new o.DracoUInt32Array,a=new Uint32Array(n),e.GetAttributeUInt32ForAllPoints(t,r,i);break;case 9:case 10:i=new o.DracoFloat32Array,a=new Float32Array(n),e.GetAttributeFloatForAllPoints(t,r,i);break}for(let o=0;o<n;++o)a[o]=i.GetValue(o);return o.destroy(i),a}function p(t,e,r){let n,a=t.num_points(),i=r.num_components(),s=new o.AttributeQuantizationTransform;if(s.InitFromAttribute(r)){let t=new Array(i);for(let e=0;e<i;++e)t[e]=s.min_value(e);n={quantizationBits:s.quantization_bits(),minValues:t,range:s.range(),octEncoded:!1}}o.destroy(s),s=new o.AttributeOctahedronTransform,s.InitFromAttribute(r)&&(n={quantizationBits:s.quantization_bits(),octEncoded:!0}),o.destroy(s);let u,l=a*i;u=d(n)?U(t,e,r,n,l):k(t,e,r,l);let c=w.fromTypedArray(u);return{array:u,data:{componentsPerAttribute:i,componentDatatype:c,byteOffset:r.byte_offset(),byteStride:w.getSizeInBytes(c)*i,normalized:r.normalized(),quantization:n}}}function _(t){let e=new o.Decoder;t.dequantizeInShader&&(e.SkipAttributeTransform(o.POSITION),e.SkipAttributeTransform(o.NORMAL));let r=new o.DecoderBuffer;if(r.Init(t.buffer,t.buffer.length),e.GetEncodedGeometryType(r)!==o.POINT_CLOUD)throw new A("Draco geometry type must be POINT_CLOUD.");let n=new o.PointCloud,a=e.DecodeBufferToPointCloud(r,n);if(!a.ok()||0===n.ptr)throw new A(`Error decoding draco point cloud: ${a.error_msg()}`);o.destroy(r);let i={},s=t.properties;for(let u in s)if(s.hasOwnProperty(u)){let t;if("POSITION"===u||"NORMAL"===u){let r=e.GetAttributeId(n,o[u]);t=e.GetAttribute(n,r)}else{let r=s[u];t=e.GetAttributeByUniqueId(n,r)}i[u]=p(n,e,t)}return o.destroy(n),o.destroy(e),i}function g(t){let e=new o.Decoder,r=["POSITION","NORMAL","COLOR","TEX_COORD"];if(t.dequantizeInShader)for(let A=0;A<r.length;++A)e.SkipAttributeTransform(o[r[A]]);let n=t.bufferView,a=new o.DecoderBuffer;if(a.Init(t.array,n.byteLength),e.GetEncodedGeometryType(a)!==o.TRIANGULAR_MESH)throw new A("Unsupported draco mesh geometry type.");let i=new o.Mesh,s=e.DecodeBufferToMesh(a,i);if(!s.ok()||0===i.ptr)throw new A(`Error decoding draco mesh geometry: ${s.error_msg()}`);o.destroy(a);let u={},l=t.compressedAttributes;for(let o in l)if(l.hasOwnProperty(o)){let t=l[o],r=e.GetAttributeByUniqueId(i,t);u[o]=p(i,e,r)}let c={indexArray:F(i,e),attributeData:u};return o.destroy(i),o.destroy(e),c}async function z(t,e){return d(t.bufferView)?g(t):_(t)}async function C(t,e){let r=t.webAssemblyConfig;return o=d(r)&&d(r.wasmBinaryFile)?await(0,b.default)(r):await(0,b.default)(),!0}async function G(t,e){let r=t.webAssemblyConfig;return d(r)?C(t,e):z(t,e)}var h=I(G);export{h as default};