/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="169";const Fi="",ii="srgb",Zi="srgb-linear",Cc="display-p3",Fo="display-p3-linear",vo="linear",Ee="srgb",xo="rec709",So="p3";const uu="300 es";class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$o=Math.PI/180,ql=180/Math.PI;function xs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function sn(r,t,e){return Math.max(t,Math.min(e,r))}function np(r,t){return(r%t+t)%t}function Ko(r,t,e){return(1-e)*r+e*t}function Ms(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],T=i[1],x=i[4],S=i[7],R=i[2],w=i[5],E=i[8];return s[0]=a*g+o*T+l*R,s[3]=a*p+o*x+l*w,s[6]=a*m+o*S+l*E,s[1]=c*g+u*T+h*R,s[4]=c*p+u*x+h*w,s[7]=c*m+u*S+h*E,s[2]=f*g+d*T+_*R,s[5]=f*p+d*x+_*w,s[8]=f*m+d*S+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=e*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zo.makeScale(t,e)),this}rotate(t){return this.premultiply(Zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new Jt;function Kh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Mo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ip(){const r=Mo("canvas");return r.style.display="block",r}const hu={};function ao(r){r in hu||(hu[r]=!0,console.warn(r))}function rp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function sp(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ap(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fu=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),du=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[Zi]:{transfer:vo,primaries:xo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ii]:{transfer:Ee,primaries:xo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fo]:{transfer:vo,primaries:So,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(du),fromReference:r=>r.applyMatrix3(fu)},[Cc]:{transfer:Ee,primaries:So,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(du),fromReference:r=>r.applyMatrix3(fu).convertLinearToSRGB()}},op=new Set([Zi,Fo]),fe={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!op.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ys[t].toReference,i=ys[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ys[r].primaries},getTransfer:function(r){return r===Fi?vo:ys[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(ys[t].luminanceCoefficients)}};function es(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class lp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rr===void 0&&(Rr=Mo("canvas")),Rr.width=t.width,Rr.height=t.height;const n=Rr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=es(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cp=0;class Zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(jo(i[a].image)):s.push(jo(i[a]))}else s=jo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function jo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let up=0;class xn extends vs{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=xn.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=xs(),this.name="",this.source=new Zh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=300;xn.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(d+1)/2,R=(m+1)/2,w=(u+f)/4,E=(h+g)/4,P=(_+p)/4;return x>S&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=E/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=P/s),this.set(n,i,s,e),this}let T=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(h-g)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends vs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends hp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jh extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fp extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-o;const m=l*f+c*d+u*_+h*g,T=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,m*T);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}const S=o*T;if(l=l*p+f*S,c=c*p+d*S,u=u*p+_*S,h=h*p+g*S,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-o*d,t[e+2]=c*_+u*d+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new k,pu=new va;class xa{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),Aa.subVectors(this.max,Es),Pr.subVectors(t.a,Es),Dr.subVectors(t.b,Es),Lr.subVectors(t.c,Es),Ri.subVectors(Dr,Pr),Pi.subVectors(Lr,Dr),Qi.subVectors(Pr,Lr);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Qi.z,Qi.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Qi.z,0,-Qi.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Qi.y,Qi.x,0];return!tl(e,Pr,Dr,Lr,Aa)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,Pr,Dr,Lr,Aa))?!1:(ba.crossVectors(Ri,Pi),e=[ba.x,ba.y,ba.z],tl(e,Pr,Dr,Lr,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mi=[new k,new k,new k,new k,new k,new k,new k,new k],Jn=new k,Ta=new xa,Pr=new k,Dr=new k,Lr=new k,Ri=new k,Pi=new k,Qi=new k,Es=new k,Aa=new k,ba=new k,tr=new k;function tl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){tr.fromArray(r,s);const o=i.x*Math.abs(tr.x)+i.y*Math.abs(tr.y)+i.z*Math.abs(tr.z),l=t.dot(tr),c=e.dot(tr),u=n.dot(tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dp=new xa,Ts=new k,el=new k;class Rc{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(el)),this.expandByPoint(Ts.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new k,nl=new k,wa=new k,Di=new k,il=new k,Ca=new k,rl=new k;class pp{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nl.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(nl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(wa),o=Di.dot(this.direction),l=-Di.dot(wa),c=Di.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(nl).addScaledVector(wa,f),d}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,i,s){il.subVectors(e,t),Ca.subVectors(n,t),rl.crossVectors(il,Ca);let a=this.direction.dot(rl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,t);const l=o*this.direction.dot(Ca.crossVectors(Di,Ca));if(l<0)return null;const c=o*this.direction.dot(il.cross(Di));if(c<0||l+c>a)return null;const u=-o*Di.dot(rl);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,p){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,p)}set(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ir.setFromMatrixColumn(t,0).length(),s=1/Ir.setFromMatrixColumn(t,1).length(),a=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*o,e[4]=-a*h,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=a*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=o*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,_p)}lookAt(t,e,n){const i=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Li.crossVectors(n,Cn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Li.crossVectors(n,Cn)),Li.normalize(),Ra.crossVectors(Cn,Li),i[0]=Li.x,i[4]=Ra.x,i[8]=Cn.x,i[1]=Li.y,i[5]=Ra.y,i[9]=Cn.y,i[2]=Li.z,i[6]=Ra.z,i[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],T=n[3],x=n[7],S=n[11],R=n[15],w=i[0],E=i[4],P=i[8],U=i[12],v=i[1],y=i[5],L=i[9],O=i[13],G=i[2],Y=i[6],z=i[10],X=i[14],V=i[3],tt=i[7],D=i[11],st=i[15];return s[0]=a*w+o*v+l*G+c*V,s[4]=a*E+o*y+l*Y+c*tt,s[8]=a*P+o*L+l*z+c*D,s[12]=a*U+o*O+l*X+c*st,s[1]=u*w+h*v+f*G+d*V,s[5]=u*E+h*y+f*Y+d*tt,s[9]=u*P+h*L+f*z+d*D,s[13]=u*U+h*O+f*X+d*st,s[2]=_*w+g*v+p*G+m*V,s[6]=_*E+g*y+p*Y+m*tt,s[10]=_*P+g*L+p*z+m*D,s[14]=_*U+g*O+p*X+m*st,s[3]=T*w+x*v+S*G+R*V,s[7]=T*E+x*y+S*Y+R*tt,s[11]=T*P+x*L+S*z+R*D,s[15]=T*U+x*O+S*X+R*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+g*(+e*l*d-e*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+p*(+e*c*h-e*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+m*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],T=h*p*c-g*f*c+g*l*d-o*p*d-h*l*m+o*f*m,x=_*f*c-u*p*c-_*l*d+a*p*d+u*l*m-a*f*m,S=u*g*c-_*h*c+_*o*d-a*g*d-u*o*m+a*h*m,R=_*h*l-u*g*l-_*o*f+a*g*f+u*o*p-a*h*p,w=e*T+n*x+i*S+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=T*E,t[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*E,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*m+n*l*m)*E,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*E,t[4]=x*E,t[5]=(u*p*s-_*f*s+_*i*d-e*p*d-u*i*m+e*f*m)*E,t[6]=(_*l*s-a*p*s-_*i*c+e*p*c+a*i*m-e*l*m)*E,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*d+e*l*d)*E,t[8]=S*E,t[9]=(_*h*s-u*g*s-_*n*d+e*g*d+u*n*m-e*h*m)*E,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*m+e*o*m)*E,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*d-e*o*d)*E,t[12]=R*E,t[13]=(u*g*i-_*h*i+_*n*f-e*g*f-u*n*p+e*h*p)*E,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*E,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,g=a*u,p=a*h,m=o*h,T=l*c,x=l*u,S=l*h,R=n.x,w=n.y,E=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+S)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(d-S)*w,i[5]=(1-(f+m))*w,i[6]=(p+T)*w,i[7]=0,i[8]=(_+x)*E,i[9]=(p-T)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ir.set(i[0],i[1],i[2]).length();const a=Ir.set(i[4],i[5],i[6]).length(),o=Ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],jn.copy(this);const c=1/s,u=1/a,h=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,e.setFromRotationMatrix(jn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=2e3){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(o===2e3)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=2e3){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,d=(n+i)*u;let _,g;if(o===2e3)_=(a+s)*h,g=-2*h;else if(o===2001)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ir=new k,jn=new we,mp=new k(0,0,0),_p=new k(1,1,1),Li=new k,Ra=new k,Cn=new k,mu=new we,_u=new va;class fi{constructor(t=0,e=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gp=0;const gu=new k,Ur=new va,gi=new we,Pa=new k,As=new k,vp=new k,xp=new va,vu=new k(1,0,0),xu=new k(0,1,0),Su=new k(0,0,1),Mu={type:"added"},Sp={type:"removed"},Nr={type:"childadded",child:null},sl={type:"childremoved",child:null};class Sn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new k,e=new fi,n=new va,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Jt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pa.copy(t):Pa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(As,Pa,this.up):gi.lookAt(Pa,As,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),Ur.setFromRotationMatrix(gi),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mu),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mu),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Sn.DEFAULT_UP=new k(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new k,vi=new k,al=new k,xi=new k,Fr=new k,Or=new k,yu=new k,ol=new k,ll=new k,cl=new k,ul=new _e,hl=new _e,fl=new _e;class ei{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qn.subVectors(t,e),i.cross(Qn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Qn.subVectors(i,e),vi.subVectors(n,e),al.subVectors(t,e);const a=Qn.dot(Qn),o=Qn.dot(vi),l=Qn.dot(al),c=vi.dot(vi),u=vi.dot(al),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return ul.setScalar(0),hl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),fl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ul,s.x),a.addScaledVector(hl,s.y),a.addScaledVector(fl,s.z),a}static isFrontFacing(t,e,n,i){return Qn.subVectors(n,e),vi.subVectors(t,e),Qn.cross(vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Qn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ei.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Fr.subVectors(i,n),Or.subVectors(s,n),ol.subVectors(t,n);const l=Fr.dot(ol),c=Or.dot(ol);if(l<=0&&c<=0)return e.copy(n);ll.subVectors(t,i);const u=Fr.dot(ll),h=Or.dot(ll);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Fr,a);cl.subVectors(t,s);const d=Fr.dot(cl),_=Or.dot(cl);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Or,o);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return yu.subVectors(s,i),o=(h-u)/(h-u+(d-_)),e.copy(i).addScaledVector(yu,o);const m=1/(p+g+f);return a=g*m,o=f*m,e.copy(n).addScaledVector(Fr,a).addScaledVector(Or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Da={h:0,s:0,l:0};function dl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=np(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=dl(a,s,t+1/3),this.g=dl(a,s,t),this.b=dl(a,s,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=ii){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){const n=Qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Jo(t.r),this.g=Jo(t.g),this.b=Jo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return fe.fromWorkingColorSpace(en.copy(this),t),Math.round(sn(en.r*255,0,255))*65536+Math.round(sn(en.g*255,0,255))*256+Math.round(sn(en.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=ii){fe.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(Da);const n=Ko(Ii.h,Da.h,e),i=Ko(Ii.s,Da.s,e),s=Ko(Ii.l,Da.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ce;ce.NAMES=Qh;let Mp=0;class Sa extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pc extends Sa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new k,La=new Tt;class ui{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)La.fromBufferAttribute(this,e),La.applyMatrix3(t),this.setXY(e,La.x,La.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class tf extends ui{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ef extends ui{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ti extends ui{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yp=0;const Hn=new we,pl=new Sn,Br=new k,Rn=new xa,bs=new xa,qe=new k;class Ji extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?ef:tf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(Rn.min,bs.min),Rn.expandByPoint(qe),qe.addVectors(Rn.max,bs.max),Rn.expandByPoint(qe)):(Rn.expandByPoint(bs.min),Rn.expandByPoint(bs.max))}Rn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qe.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(t,c),qe.add(Br)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new k,l[P]=new k;const c=new k,u=new k,h=new k,f=new Tt,d=new Tt,_=new Tt,g=new k,p=new k;function m(P,U,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,U),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,U),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const y=1/(d.x*_.y-_.x*d.y);isFinite(y)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(y),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(y),o[P].add(g),o[U].add(g),o[v].add(g),l[P].add(p),l[U].add(p),l[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,U=T.length;P<U;++P){const v=T[P],y=v.start,L=v.count;for(let O=y,G=y+L;O<G;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new k,S=new k,R=new k,w=new k;function E(P){R.fromBufferAttribute(i,P),w.copy(R);const U=o[P];x.copy(U),x.sub(R.multiplyScalar(R.dot(U))).normalize(),S.crossVectors(w,U);const y=S.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,y)}for(let P=0,U=T.length;P<U;++P){const v=T[P],y=v.start,L=v.count;for(let O=y,G=y+L;O<G;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new ui(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ji,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new we,er=new pp,Ia=new Rc,Tu=new k,Ua=new k,Na=new k,Fa=new k,ml=new k,Oa=new k,Au=new k,Ba=new k;class ni extends Sn{constructor(t=new Ji,e=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ml.fromBufferAttribute(h,t),a?Oa.addScaledVector(ml,u):Oa.addScaledVector(ml.sub(e),u))}e.add(Oa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),er.copy(t.ray).recast(t.near),!(Ia.containsPoint(er.origin)===!1&&(er.intersectSphere(Ia,Tu)===null||er.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(Eu.copy(s).invert(),er.copy(t.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],T=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=T,R=x;S<R;S+=3){const w=o.getX(S),E=o.getX(S+1),P=o.getX(S+2);i=za(this,m,t,n,c,u,h,w,E,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const T=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);i=za(this,a,t,n,c,u,h,T,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],T=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=T,R=x;S<R;S+=3){const w=S,E=S+1,P=S+2;i=za(this,m,t,n,c,u,h,w,E,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const T=p,x=p+1,S=p+2;i=za(this,a,t,n,c,u,h,T,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Ep(r,t,e,n,i,s,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===0,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ba);return c<e.near||c>e.far?null:{distance:c,point:Ba.clone(),object:r}}function za(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ua),r.getVertexPosition(l,Na),r.getVertexPosition(c,Fa);const u=Ep(r,t,e,n,Ua,Na,Fa,Au);if(u){const h=new k;ei.getBarycoord(Au,Ua,Na,Fa,h),i&&(u.uv=ei.getInterpolatedAttribute(i,o,l,c,h,new Tt)),s&&(u.uv1=ei.getInterpolatedAttribute(s,o,l,c,h,new Tt)),a&&(u.normal=ei.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};ei.getNormal(Ua,Na,Fa,f.normal),u.face=f,u.barycoord=h}return u}class Ma extends Ji{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(h,2));function _(g,p,m,T,x,S,R,w,E,P,U){const v=S/E,y=R/P,L=S/2,O=R/2,G=w/2,Y=E+1,z=P+1;let X=0,V=0;const tt=new k;for(let D=0;D<z;D++){const st=D*y-O;for(let Pt=0;Pt<Y;Pt++){const kt=Pt*v-L;tt[g]=kt*T,tt[p]=st*x,tt[m]=G,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[p]=0,tt[m]=w>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(Pt/E),h.push(1-D/P),X+=1}}for(let D=0;D<P;D++)for(let st=0;st<E;st++){const Pt=f+st+Y*D,kt=f+st+Y*(D+1),$=f+(st+1)+Y*(D+1),nt=f+(st+1)+Y*D;l.push(Pt,kt,nt),l.push(kt,$,nt),V+=6}o.addGroup(d,V,U),d+=V,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(r){const t={};for(let e=0;e<r.length;e++){const n=hs(r[e]);for(const i in n)t[i]=n[i]}return t}function Tp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function nf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Ap={clone:hs,merge:hn};var bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Sa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rf extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new k,bu=new Tt,wu=new Tt;class In extends rf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ql*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ql*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,bu,wu),e.subVectors(wu,bu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($o*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zr=-90,kr=1;class Cp extends Sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(zr,kr,t,e);i.layers=this.layers,this.add(i);const s=new In(zr,kr,t,e);s.layers=this.layers,this.add(s);const a=new In(zr,kr,t,e);a.layers=this.layers,this.add(a);const o=new In(zr,kr,t,e);o.layers=this.layers,this.add(o);const l=new In(zr,kr,t,e);l.layers=this.layers,this.add(l);const c=new In(zr,kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class sf extends xn{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rp extends yr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new sf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ma(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const a=new ni(i,s),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Cp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const _l=new k,Pp=new k,Dp=new Jt;class or{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_l.subVectors(n,e).cross(Pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dp.getNormalMatrix(t),i=this.coplanarPoint(_l).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Rc,ka=new k;class Dc{constructor(t=new or,e=new or,n=new or,i=new or,s=new or,a=new or){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],T=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,p-d,S-m).normalize(),n[1].setComponents(l+s,f+c,p+d,S+m).normalize(),n[2].setComponents(l+a,f+u,p+_,S+T).normalize(),n[3].setComponents(l-a,f-u,p-_,S-T).normalize(),n[4].setComponents(l-o,f-h,p-g,S-x).normalize(),e===2e3)n[5].setComponents(l+o,f+h,p+g,S+x).normalize();else if(e===2001)n[5].setComponents(o,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ka.x=i.normal.x>0?t.max.x:t.min.x,ka.y=i.normal.y>0?t.max.y:t.min.y,ka.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function af(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Lp(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Oo extends Ji{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const T=m*f-a;for(let x=0;x<c;x++){const S=x*h-s;_.push(S,-T,0),g.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){const x=T+c*m,S=T+c*(m+1),R=T+1+c*(m+1),w=T+1+c*m;d.push(x,S,w),d.push(S,R,w)}this.setIndex(d),this.setAttribute("position",new Ti(_,3)),this.setAttribute("normal",new Ti(g,3)),this.setAttribute("uv",new Ti(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vm=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e_=`#ifdef USE_NORMALMAP
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
#endif`,n_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,g_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,v_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,S_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M_=`#ifdef USE_SKINNING
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
#endif`,y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I_=`uniform sampler2D t2D;
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
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`#include <common>
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
}`,z_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k_=`#define DISTANCE
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
}`,G_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`uniform float scale;
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,Y_=`uniform vec3 diffuse;
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
}`,$_=`#define LAMBERT
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
}`,K_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Z_=`#define MATCAP
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
}`,J_=`#define MATCAP
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
}`,j_=`#define NORMAL
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
}`,Q_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
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
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,rg=`#define TOON
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
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ag=`uniform float size;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ug=`uniform float rotation;
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
}`,hg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Ip,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:kp,batching_pars_vertex:Gp,batching_vertex:Vp,begin_vertex:Hp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Jp,color_fragment:jp,color_pars_fragment:Qp,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:rm,displacementmap_pars_vertex:sm,displacementmap_vertex:am,emissivemap_fragment:om,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:um,envmap_fragment:hm,envmap_common_pars_fragment:fm,envmap_pars_fragment:dm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Am,envmap_vertex:mm,fog_vertex:_m,fog_pars_vertex:gm,fog_fragment:vm,fog_pars_fragment:xm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:Mm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:Em,lights_pars_begin:Tm,lights_toon_fragment:bm,lights_toon_pars_fragment:wm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Lm,lights_fragment_maps:Im,lights_fragment_end:Um,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Bm,map_fragment:zm,map_pars_fragment:km,map_particle_fragment:Gm,map_particle_pars_fragment:Vm,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:$m,morphtarget_vertex:Km,normal_fragment_begin:Zm,normal_fragment_maps:Jm,normal_pars_fragment:jm,normal_pars_vertex:Qm,normal_vertex:t_,normalmap_pars_fragment:e_,clearcoat_normal_fragment_begin:n_,clearcoat_normal_fragment_maps:i_,clearcoat_pars_fragment:r_,iridescence_pars_fragment:s_,opaque_fragment:a_,packing:o_,premultiplied_alpha_fragment:l_,project_vertex:c_,dithering_fragment:u_,dithering_pars_fragment:h_,roughnessmap_fragment:f_,roughnessmap_pars_fragment:d_,shadowmap_pars_fragment:p_,shadowmap_pars_vertex:m_,shadowmap_vertex:__,shadowmask_pars_fragment:g_,skinbase_vertex:v_,skinning_pars_vertex:x_,skinning_vertex:S_,skinnormal_vertex:M_,specularmap_fragment:y_,specularmap_pars_fragment:E_,tonemapping_fragment:T_,tonemapping_pars_fragment:A_,transmission_fragment:b_,transmission_pars_fragment:w_,uv_pars_fragment:C_,uv_pars_vertex:R_,uv_vertex:P_,worldpos_vertex:D_,background_vert:L_,background_frag:I_,backgroundCube_vert:U_,backgroundCube_frag:N_,cube_vert:F_,cube_frag:O_,depth_vert:B_,depth_frag:z_,distanceRGBA_vert:k_,distanceRGBA_frag:G_,equirect_vert:V_,equirect_frag:H_,linedashed_vert:W_,linedashed_frag:X_,meshbasic_vert:q_,meshbasic_frag:Y_,meshlambert_vert:$_,meshlambert_frag:K_,meshmatcap_vert:Z_,meshmatcap_frag:J_,meshnormal_vert:j_,meshnormal_frag:Q_,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:sg,points_vert:ag,points_frag:og,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:hg},St={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ai={basic:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ce(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:hn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:hn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new ce(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:hn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:hn([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:hn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:hn([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:hn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:hn([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:hn([St.common,St.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:hn([St.lights,St.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};ai.physical={uniforms:hn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Ga={r:0,b:0,g:0},ir=new fi,fg=new we;function dg(r,t,e,n,i,s,a){const o=new ce(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?e:t).get(x)),x}function g(T){let x=!1;const S=_(T);S===null?m(o,l):S&&S.isColor&&(m(S,1),x=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(T,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===306)?(u===void 0&&(u=new ni(new Ma(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:hs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ir.copy(x.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(ir)),u.material.toneMapped=fe.getTransfer(S.colorSpace)!==Ee,(h!==S||f!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ni(new Oo(2,2),new Xi({name:"BackgroundMaterial",uniforms:hs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=fe.getTransfer(S.colorSpace)!==Ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,x){T.getRGB(Ga,nf(r)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(T,x=1){o.set(T),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(o,l)},render:g,addToRenderList:p}}function pg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(v,y,L,O,G){let Y=!1;const z=h(O,L,y);s!==z&&(s=z,c(s.object)),Y=d(v,O,L,G),Y&&_(v,O,L,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(v,y,L,O),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,y,L){const O=L.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Y=G[y.id];Y===void 0&&(Y={},G[y.id]=Y);let z=Y[O];return z===void 0&&(z=f(l()),Y[O]=z),z}function f(v){const y=[],L=[],O=[];for(let G=0;G<e;G++)y[G]=0,L[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:O,object:v,attributes:{},index:null}}function d(v,y,L,O){const G=s.attributes,Y=y.attributes;let z=0;const X=L.getAttributes();for(const V in X)if(X[V].location>=0){const D=G[V];let st=Y[V];if(st===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),D===void 0||D.attribute!==st||st&&D.data!==st.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function _(v,y,L,O){const G={},Y=y.attributes;let z=0;const X=L.getAttributes();for(const V in X)if(X[V].location>=0){let D=Y[V];D===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));const st={};st.attribute=D,D&&D.data&&(st.data=D.data),G[V]=st,z++}s.attributes=G,s.attributesNum=z,s.index=O}function g(){const v=s.newAttributes;for(let y=0,L=v.length;y<L;y++)v[y]=0}function p(v){m(v,0)}function m(v,y){const L=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;L[v]=1,O[v]===0&&(r.enableVertexAttribArray(v),O[v]=1),G[v]!==y&&(r.vertexAttribDivisor(v,y),G[v]=y)}function T(){const v=s.newAttributes,y=s.enabledAttributes;for(let L=0,O=y.length;L<O;L++)y[L]!==v[L]&&(r.disableVertexAttribArray(L),y[L]=0)}function x(v,y,L,O,G,Y,z){z===!0?r.vertexAttribIPointer(v,y,L,G,Y):r.vertexAttribPointer(v,y,L,O,G,Y)}function S(v,y,L,O){g();const G=O.attributes,Y=L.getAttributes(),z=y.defaultAttributeValues;for(const X in Y){const V=Y[X];if(V.location>=0){let tt=G[X];if(tt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),tt!==void 0){const D=tt.normalized,st=tt.itemSize,Pt=t.get(tt);if(Pt===void 0)continue;const kt=Pt.buffer,$=Pt.type,nt=Pt.bytesPerElement,dt=$===r.INT||$===r.UNSIGNED_INT||tt.gpuType===1013;if(tt.isInterleavedBufferAttribute){const ct=tt.data,Dt=ct.stride,Ct=tt.offset;if(ct.isInstancedInterleavedBuffer){for(let zt=0;zt<V.locationSize;zt++)m(V.location+zt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let zt=0;zt<V.locationSize;zt++)p(V.location+zt);r.bindBuffer(r.ARRAY_BUFFER,kt);for(let zt=0;zt<V.locationSize;zt++)x(V.location+zt,st/V.locationSize,$,D,Dt*nt,(Ct+st/V.locationSize*zt)*nt,dt)}else{if(tt.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct,tt.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<V.locationSize;ct++)p(V.location+ct);r.bindBuffer(r.ARRAY_BUFFER,kt);for(let ct=0;ct<V.locationSize;ct++)x(V.location+ct,st/V.locationSize,$,D,st*nt,st/V.locationSize*ct*nt,dt)}}else if(z!==void 0){const D=z[X];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(V.location,D);break;case 3:r.vertexAttrib3fv(V.location,D);break;case 4:r.vertexAttrib4fv(V.location,D);break;default:r.vertexAttrib1fv(V.location,D)}}}}T()}function R(){P();for(const v in n){const y=n[v];for(const L in y){const O=y[L];for(const G in O)u(O[G].object),delete O[G];delete y[L]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const y=n[v.id];for(const L in y){const O=y[L];for(const G in O)u(O[G].object),delete O[G];delete y[L]}delete n[v.id]}function E(v){for(const y in n){const L=n[y];if(L[v.id]===void 0)continue;const O=L[v.id];for(const G in O)u(O[G].object),delete O[G];delete L[v.id]}}function P(){U(),a=!0,s!==i&&(s=i,c(s.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:T}}function mg(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)e.update(_,n,f[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _g(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==1023&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const P=E===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==1009&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==1015&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:w}}function gg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new or,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const T=s?0:n,x=T*4;let S=m.clippingState||null;l.value=S,S=u(_,f,x,d);for(let R=0;R!==x;++R)S[R]=e[R];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=d;x!==g;++x,S+=4)a.copy(h[x]).applyMatrix4(T,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function vg(r){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rp(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xg extends rf{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Kr=4,Cu=[.125,.215,.35,.446,.526,.582],fr=20,gl=new xg,Ru=new ce;let vl=null,xl=0,Sl=0,Ml=!1;const lr=(1+Math.sqrt(5))/2,Gr=1/lr,Pu=[new k(-lr,Gr,0),new k(lr,Gr,0),new k(-Gr,0,lr),new k(Gr,0,lr),new k(0,lr,-Gr),new k(0,lr,Gr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Du{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,xl,Sl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,Va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Zi,depthBuffer:!1},i=Lu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sg(s)),this._blurMaterial=Mg(s,t,e)}return i}_compileMaterial(t){const e=new ni(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,n,i){const o=new In(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ru),u.toneMapping=0,u.autoClear=!1;const d=new Pc({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new ni(new Ma,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(Ru),g=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):T===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Va(i,T*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ni(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Va(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,gl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pu[(i-s-1)%Pu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ni(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const m=[];let T=0;for(let E=0;E<fr;++E){const P=E/g,U=Math.exp(-P*P/2);m.push(U),E===0?T+=U:E<p&&(T+=2*U)}for(let E=0;E<m.length;E++)m[E]=m[E]/T;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const S=this._sizeLods[i],R=3*S*(i>x-Kr?i-x+Kr:0),w=4*(this._cubeSize-S);Va(e,R,w,3*S,2*S),l.setRenderTarget(e),l.render(h,gl)}}function Sg(r){const t=[],e=[],n=[];let i=r;const s=r-Kr+1+Cu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Kr?l=Cu[a-r+Kr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,T=new Float32Array(g*_*d),x=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,P=w>2?0:-1,U=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];T.set(U,g*_*w),x.set(f,p*_*w);const v=[w,w,w,w,w,w];S.set(v,m*_*w)}const R=new Ji;R.setAttribute("position",new ui(T,g)),R.setAttribute("uv",new ui(x,p)),R.setAttribute("faceIndex",new ui(S,m)),t.push(R),i>Kr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lu(r,t,e){const n=new yr(r,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Mg(r,t,e){const n=new Float32Array(fr),i=new k(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Iu(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Uu(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yg(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Du(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Du(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Eg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tg(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const T=d.array;g=d.version;for(let x=0,S=T.length;x<S;x+=3){const R=T[x+0],w=T[x+1],E=T[x+2];f.push(R,w,w,E,E,R)}}else if(_!==void 0){const T=_.array;g=_.version;for(let x=0,S=T.length/3-1;x<S;x+=3){const R=x+0,w=x+1,E=x+2;f.push(R,w,w,E,E,R)}}else return;const p=new(Kh(f)?ef:tf)(f,1);p.version=g;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ag(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*a,_),e.update(d,n,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let T=0;T<_;T++)m+=d[T];for(let T=0;T<g.length;T++)e.update(m,n,g[T])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wg(r,t,e){const n=new WeakMap,i=new _e;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let R=o.attributes.position.count*S,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*w*4*h),P=new Jh(E,R,w,h);P.type=1015,P.needsUpdate=!0;const U=S*4;for(let y=0;y<h;y++){const L=m[y],O=T[y],G=x[y],Y=R*w*4*y;for(let z=0;z<L.count;z++){const X=z*U;_===!0&&(i.fromBufferAttribute(L,z),E[Y+X+0]=i.x,E[Y+X+1]=i.y,E[Y+X+2]=i.z,E[Y+X+3]=0),g===!0&&(i.fromBufferAttribute(O,z),E[Y+X+4]=i.x,E[Y+X+5]=i.y,E[Y+X+6]=i.z,E[Y+X+7]=0),p===!0&&(i.fromBufferAttribute(G,z),E[Y+X+8]=i.x,E[Y+X+9]=i.y,E[Y+X+10]=i.z,E[Y+X+11]=G.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new Tt(R,w)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Cg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class of extends xn{constructor(t,e,n,i,s,a,o,l,c,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lf=new xn,Nu=new of(1,1),cf=new Jh,uf=new fp,hf=new sf,Fu=[],Ou=[],Bu=new Float32Array(16),zu=new Float32Array(9),ku=new Float32Array(4);function Ss(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Fu[i];if(s===void 0&&(s=new Float32Array(i),Fu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function He(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function We(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Bo(r,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Rg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2fv(this.addr,t),We(e,t)}}function Dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;r.uniform3fv(this.addr,t),We(e,t)}}function Lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4fv(this.addr,t),We(e,t)}}function Ig(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;ku.set(n),r.uniformMatrix2fv(this.addr,!1,ku),We(e,n)}}function Ug(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;zu.set(n),r.uniformMatrix3fv(this.addr,!1,zu),We(e,n)}}function Ng(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;Bu.set(n),r.uniformMatrix4fv(this.addr,!1,Bu),We(e,n)}}function Fg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2iv(this.addr,t),We(e,t)}}function Bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;r.uniform3iv(this.addr,t),We(e,t)}}function zg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4iv(this.addr,t),We(e,t)}}function kg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;r.uniform2uiv(this.addr,t),We(e,t)}}function Vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;r.uniform3uiv(this.addr,t),We(e,t)}}function Hg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;r.uniform4uiv(this.addr,t),We(e,t)}}function Wg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Nu.compareFunction=515,s=Nu):s=lf,e.setTexture2D(t||s,i)}function Xg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||uf,i)}function qg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hf,i)}function Yg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cf,i)}function $g(r){switch(r){case 5126:return Rg;case 35664:return Pg;case 35665:return Dg;case 35666:return Lg;case 35674:return Ig;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Gg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Kg(r,t){r.uniform1fv(this.addr,t)}function Zg(r,t){const e=Ss(t,this.size,2);r.uniform2fv(this.addr,e)}function Jg(r,t){const e=Ss(t,this.size,3);r.uniform3fv(this.addr,e)}function jg(r,t){const e=Ss(t,this.size,4);r.uniform4fv(this.addr,e)}function Qg(r,t){const e=Ss(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function t0(r,t){const e=Ss(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function e0(r,t){const e=Ss(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function n0(r,t){r.uniform1iv(this.addr,t)}function i0(r,t){r.uniform2iv(this.addr,t)}function r0(r,t){r.uniform3iv(this.addr,t)}function s0(r,t){r.uniform4iv(this.addr,t)}function a0(r,t){r.uniform1uiv(this.addr,t)}function o0(r,t){r.uniform2uiv(this.addr,t)}function l0(r,t){r.uniform3uiv(this.addr,t)}function c0(r,t){r.uniform4uiv(this.addr,t)}function u0(r,t,e){const n=this.cache,i=t.length,s=Bo(e,i);He(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||lf,s[a])}function h0(r,t,e){const n=this.cache,i=t.length,s=Bo(e,i);He(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||uf,s[a])}function f0(r,t,e){const n=this.cache,i=t.length,s=Bo(e,i);He(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hf,s[a])}function d0(r,t,e){const n=this.cache,i=t.length,s=Bo(e,i);He(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||cf,s[a])}function p0(r){switch(r){case 5126:return Kg;case 35664:return Zg;case 35665:return Jg;case 35666:return jg;case 35674:return Qg;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return r0;case 35669:case 35673:return s0;case 5125:return a0;case 36294:return o0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return d0}}class m0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}}class _0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p0(e.type)}}class g0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const yl=/(\w+)(\])?(\[|\.)?/g;function Gu(r,t){r.seq.push(t),r.map[t.id]=t}function v0(r,t,e){const n=r.name,i=n.length;for(yl.lastIndex=0;;){const s=yl.exec(n),a=yl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gu(e,c===void 0?new m0(o,r,t):new _0(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new g0(o),Gu(e,h)),e=h}}}class oo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);v0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Vu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const x0=37297;let S0=0;function M0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function y0(r){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(r);let n;switch(t===e?n="":t===So&&e===xo?n="LinearDisplayP3ToLinearSRGB":t===xo&&e===So&&(n="LinearSRGBToLinearDisplayP3"),r){case Zi:case Fo:return[n,"LinearTransferOETF"];case ii:case Cc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Hu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+M0(r.getShaderSource(t),a)}else return i}function E0(r,t){const e=y0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function T0(r,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ha=new k;function A0(){fe.getLuminanceCoefficients(Ha);const r=Ha.x.toFixed(4),t=Ha.y.toFixed(4),e=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function w0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Is(r){return r!==""}function Wu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(r){return r.replace(R0,D0)}const P0=new Map;function D0(r,t){let e=Zt[t];if(e===void 0){const n=P0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yl(e)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(r){return r.replace(L0,I0)}function I0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function U0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function N0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function O0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function B0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function z0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=U0(e),c=N0(e),u=F0(e),h=O0(e),f=B0(e),d=b0(e),_=w0(s),g=i.createProgram();let p,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Is).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(p=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Zt.tonemapping_pars_fragment:"",e.toneMapping!==0?T0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,E0("linearToOutputTexel",e.outputColorSpace),A0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=Yl(a),a=Wu(a,e),a=Xu(a,e),o=Yl(o),o=Wu(o,e),o=Xu(o,e),a=qu(a),o=qu(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=T+p+a,S=T+m+o,R=Vu(i,i.VERTEX_SHADER,x),w=Vu(i,i.FRAGMENT_SHADER,S);i.attachShader(g,R),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(y){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(R).trim(),G=i.getShaderInfoLog(w).trim();let Y=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,w);else{const X=Hu(i,R,"vertex"),V=Hu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+L+`
`+X+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||G==="")&&(z=!1);z&&(y.diagnostics={runnable:Y,programLog:L,vertexShader:{log:O,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(R),i.deleteShader(w),P=new oo(i,g),U=C0(i,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let U;this.getAttributes=function(){return U===void 0&&E(this),U};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,x0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let k0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new V0(t),e.set(t,n)),n}}class V0{constructor(t){this.id=k0++,this.code=t,this.usedTimes=0}}function H0(r,t,e,n,i,s,a){const o=new jh,l=new G0,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,L,O,G){const Y=O.fog,z=G.geometry,X=v.isMeshStandardMaterial?O.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),tt=V&&V.mapping===306?V.image.height:null,D=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pt=st!==void 0?st.length:0;let kt=0;z.morphAttributes.position!==void 0&&(kt=1),z.morphAttributes.normal!==void 0&&(kt=2),z.morphAttributes.color!==void 0&&(kt=3);let $,nt,dt,ct;if(D){const Nt=ai[D];$=Nt.vertexShader,nt=Nt.fragmentShader}else $=v.vertexShader,nt=v.fragmentShader,l.update(v),dt=l.getVertexShaderID(v),ct=l.getFragmentShaderID(v);const Dt=r.getRenderTarget(),Ct=G.isInstancedMesh===!0,zt=G.isBatchedMesh===!0,Bt=!!v.map,j=!!v.matcap,b=!!V,at=!!v.aoMap,ut=!!v.lightMap,rt=!!v.bumpMap,I=!!v.normalMap,At=!!v.displacementMap,vt=!!v.emissiveMap,C=!!v.metalnessMap,M=!!v.roughnessMap,H=v.anisotropy>0,J=v.clearcoat>0,et=v.dispersion>0,Z=v.iridescence>0,bt=v.sheen>0,lt=v.transmission>0,_t=H&&!!v.anisotropyMap,Xt=J&&!!v.clearcoatMap,ot=J&&!!v.clearcoatNormalMap,Et=J&&!!v.clearcoatRoughnessMap,wt=Z&&!!v.iridescenceMap,Vt=Z&&!!v.iridescenceThicknessMap,yt=bt&&!!v.sheenColorMap,Yt=bt&&!!v.sheenRoughnessMap,Wt=!!v.specularMap,se=!!v.specularColorMap,N=!!v.specularIntensityMap,it=lt&&!!v.transmissionMap,K=lt&&!!v.thicknessMap,Q=!!v.gradientMap,ft=!!v.alphaMap,pt=v.alphaTest>0,$t=!!v.alphaHash,ge=!!v.extensions;let Te=0;v.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Te=r.toneMapping);const ie={shaderID:D,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:nt,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:zt,batchingColor:zt&&G._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&G.instanceColor!==null,instancingMorph:Ct&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Dt===null?r.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Zi,alphaToCoverage:!!v.alphaToCoverage,map:Bt,matcap:j,envMap:b,envMapMode:b&&V.mapping,envMapCubeUVHeight:tt,aoMap:at,lightMap:ut,bumpMap:rt,normalMap:I,displacementMap:d&&At,emissiveMap:vt,normalMapObjectSpace:I&&v.normalMapType===1,normalMapTangentSpace:I&&v.normalMapType===0,metalnessMap:C,roughnessMap:M,anisotropy:H,anisotropyMap:_t,clearcoat:J,clearcoatMap:Xt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Et,dispersion:et,iridescence:Z,iridescenceMap:wt,iridescenceThicknessMap:Vt,sheen:bt,sheenColorMap:yt,sheenRoughnessMap:Yt,specularMap:Wt,specularColorMap:se,specularIntensityMap:N,transmission:lt,transmissionMap:it,thicknessMap:K,gradientMap:Q,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:pt,alphaHash:$t,combine:v.combine,mapUv:Bt&&p(v.map.channel),aoMapUv:at&&p(v.aoMap.channel),lightMapUv:ut&&p(v.lightMap.channel),bumpMapUv:rt&&p(v.bumpMap.channel),normalMapUv:I&&p(v.normalMap.channel),displacementMapUv:At&&p(v.displacementMap.channel),emissiveMapUv:vt&&p(v.emissiveMap.channel),metalnessMapUv:C&&p(v.metalnessMap.channel),roughnessMapUv:M&&p(v.roughnessMap.channel),anisotropyMapUv:_t&&p(v.anisotropyMap.channel),clearcoatMapUv:Xt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(v.sheenRoughnessMap.channel),specularMapUv:Wt&&p(v.specularMap.channel),specularColorMapUv:se&&p(v.specularColorMap.channel),specularIntensityMapUv:N&&p(v.specularIntensityMap.channel),transmissionMapUv:it&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:ft&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(I||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(Bt||ft),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Bt&&v.map.isVideoTexture===!0&&fe.getTransfer(v.map.colorSpace)===Ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function T(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)y.push(L),y.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(y,v),S(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function x(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function S(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const y=g[v.type];let L;if(y){const O=ai[y];L=Ap.clone(O.uniforms)}else L=v.uniforms;return L}function w(v,y){let L;for(let O=0,G=u.length;O<G;O++){const Y=u[O];if(Y.cacheKey===y){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new z0(r,y,v,s),u.push(L)),L}function E(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:R,acquireProgram:w,releaseProgram:E,releaseShaderCache:P,programs:u,dispose:U}}function W0(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function X0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function $u(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ku(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function o(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||X0),n.length>1&&n.sort(f||$u),i.length>1&&i.sort(f||$u)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function q0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ku,r.set(n,[a])):i>=s.length?(a=new Ku,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Y0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new ce};break;case"SpotLight":e={position:new k,direction:new k,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function $0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let K0=0;function Z0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function J0(r){const t=new Y0,e=$0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,s=new we,a=new we;function o(c){let u=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,T=0,x=0,S=0,R=0,w=0,E=0;c.sort(Z0);for(let U=0,v=c.length;U<v;U++){const y=c[U],L=y.color,O=y.intensity,G=y.distance,Y=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=L.r*O,h+=L.g*O,f+=L.b*O;else if(y.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(y.sh.coefficients[z],O);E++}else if(y.isDirectionalLight){const z=t.get(y);if(z.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const X=y.shadow,V=e.get(y);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=y.shadow.matrix,T++}n.directional[d]=z,d++}else if(y.isSpotLight){const z=t.get(y);z.position.setFromMatrixPosition(y.matrixWorld),z.color.copy(L).multiplyScalar(O),z.distance=G,z.coneCos=Math.cos(y.angle),z.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),z.decay=y.decay,n.spot[g]=z;const X=y.shadow;if(y.map&&(n.spotLightMap[R]=y.map,R++,X.updateMatrices(y),y.castShadow&&w++),n.spotLightMatrix[g]=X.matrix,y.castShadow){const V=e.get(y);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Y,S++}g++}else if(y.isRectAreaLight){const z=t.get(y);z.color.copy(L).multiplyScalar(O),z.halfWidth.set(y.width*.5,0,0),z.halfHeight.set(0,y.height*.5,0),n.rectArea[p]=z,p++}else if(y.isPointLight){const z=t.get(y);if(z.color.copy(y.color).multiplyScalar(y.intensity),z.distance=y.distance,z.decay=y.decay,y.castShadow){const X=y.shadow,V=e.get(y);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=y.shadow.matrix,x++}n.point[_]=z,_++}else if(y.isHemisphereLight){const z=t.get(y);z.skyColor.copy(y.color).multiplyScalar(O),z.groundColor.copy(y.groundColor).multiplyScalar(O),n.hemi[m]=z,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==T||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=T,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=E,n.version=K0++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Zu(r){const t=new J0(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function j0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Zu(r),t.set(i,[o])):s>=a.length?(o=new Zu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Q0 extends Sa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tv extends Sa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iv(r,t,e){let n=new Dc;const i=new Tt,s=new Tt,a=new _e,o=new Q0({depthPacking:3201}),l=new tv,c={},u=e.maxTextureSize,h={0:1,1:0,2:2},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:ev,fragmentShader:nv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ji;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ni(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(w,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const U=r.getRenderTarget(),v=r.getActiveCubeFace(),y=r.getActiveMipmapLevel(),L=r.state;L.setBlending(0),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=m!==3&&this.type===3,G=m===3&&this.type!==3;for(let Y=0,z=w.length;Y<z;Y++){const X=w[Y],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const tt=V.getFrameExtents();if(i.multiply(tt),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/tt.x),i.x=s.x*tt.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/tt.y),i.y=s.y*tt.y,V.mapSize.y=s.y)),V.map===null||O===!0||G===!0){const st=this.type!==3?{minFilter:1003,magFilter:1003}:{};V.map!==null&&V.map.dispose(),V.map=new yr(i.x,i.y,st),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const D=V.getViewportCount();for(let st=0;st<D;st++){const Pt=V.getViewport(st);a.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),L.viewport(a),V.updateMatrices(X,st),n=V.getFrustum(),S(E,P,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===3&&T(V,P),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(U,v,y)};function T(w,E){const P=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,P,d,g,null)}function x(w,E,P,U){let v=null;const y=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)v=y;else if(v=P.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=v.uuid,O=E.uuid;let G=c[L];G===void 0&&(G={},c[L]=G);let Y=G[O];Y===void 0&&(Y=v.clone(),G[O]=Y,E.addEventListener("dispose",R)),v=Y}if(v.visible=E.visible,v.wireframe=E.wireframe,U===3?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=r.properties.get(v);L.light=P}return v}function S(w,E,P,U,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const O=t.update(w),G=w.material;if(Array.isArray(G)){const Y=O.groups;for(let z=0,X=Y.length;z<X;z++){const V=Y[z],tt=G[V.materialIndex];if(tt&&tt.visible){const D=x(w,tt,U,v);w.onBeforeShadow(r,w,E,P,O,D,V),r.renderBufferDirect(P,null,O,D,w,V),w.onAfterShadow(r,w,E,P,O,D,V)}}}else if(G.visible){const Y=x(w,G,U,v);w.onBeforeShadow(r,w,E,P,O,Y,null),r.renderBufferDirect(P,null,O,Y,w,null),w.onAfterShadow(r,w,E,P,O,Y,null)}}const L=w.children;for(let O=0,G=L.length;O<G;O++)S(L[O],E,P,U,v)}function R(w){w.target.removeEventListener("dispose",R);for(const P in c){const U=c[P],v=w.target.uuid;v in U&&(U[v].dispose(),delete U[v])}}}const rv={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function sv(r){function t(){let N=!1;const it=new _e;let K=null;const Q=new _e(0,0,0,0);return{setMask:function(ft){K!==ft&&!N&&(r.colorMask(ft,ft,ft,ft),K=ft)},setLocked:function(ft){N=ft},setClear:function(ft,pt,$t,ge,Te){Te===!0&&(ft*=ge,pt*=ge,$t*=ge),it.set(ft,pt,$t,ge),Q.equals(it)===!1&&(r.clearColor(ft,pt,$t,ge),Q.copy(it))},reset:function(){N=!1,K=null,Q.set(-1,0,0,0)}}}function e(){let N=!1,it=!1,K=null,Q=null,ft=null;return{setReversed:function(pt){it=pt},setTest:function(pt){pt?dt(r.DEPTH_TEST):ct(r.DEPTH_TEST)},setMask:function(pt){K!==pt&&!N&&(r.depthMask(pt),K=pt)},setFunc:function(pt){if(it&&(pt=rv[pt]),Q!==pt){switch(pt){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=pt}},setLocked:function(pt){N=pt},setClear:function(pt){ft!==pt&&(r.clearDepth(pt),ft=pt)},reset:function(){N=!1,K=null,Q=null,ft=null}}}function n(){let N=!1,it=null,K=null,Q=null,ft=null,pt=null,$t=null,ge=null,Te=null;return{setTest:function(ie){N||(ie?dt(r.STENCIL_TEST):ct(r.STENCIL_TEST))},setMask:function(ie){it!==ie&&!N&&(r.stencilMask(ie),it=ie)},setFunc:function(ie,Nt,Lt){(K!==ie||Q!==Nt||ft!==Lt)&&(r.stencilFunc(ie,Nt,Lt),K=ie,Q=Nt,ft=Lt)},setOp:function(ie,Nt,Lt){(pt!==ie||$t!==Nt||ge!==Lt)&&(r.stencilOp(ie,Nt,Lt),pt=ie,$t=Nt,ge=Lt)},setLocked:function(ie){N=ie},setClear:function(ie){Te!==ie&&(r.clearStencil(ie),Te=ie)},reset:function(){N=!1,it=null,K=null,Q=null,ft=null,pt=null,$t=null,ge=null,Te=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,T=null,x=null,S=null,R=null,w=new ce(0,0,0),E=0,P=!1,U=null,v=null,y=null,L=null,O=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=z>=2);let V=null,tt={};const D=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),Pt=new _e().fromArray(D),kt=new _e().fromArray(st);function $(N,it,K,Q){const ft=new Uint8Array(4),pt=r.createTexture();r.bindTexture(N,pt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<K;$t++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(it,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(it+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return pt}const nt={};nt[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),dt(r.DEPTH_TEST),s.setFunc(3),ut(!1),rt(1),dt(r.CULL_FACE),b(0);function dt(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function ct(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function Dt(N,it){return u[N]!==it?(r.bindFramebuffer(N,it),u[N]=it,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=it),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=it),!0):!1}function Ct(N,it){let K=f,Q=!1;if(N){K=h.get(it),K===void 0&&(K=[],h.set(it,K));const ft=N.textures;if(K.length!==ft.length||K[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,$t=ft.length;pt<$t;pt++)K[pt]=r.COLOR_ATTACHMENT0+pt;K.length=ft.length,Q=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,Q=!0);Q&&r.drawBuffers(K)}function zt(N){return d!==N?(r.useProgram(N),d=N,!0):!1}const Bt={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};Bt[103]=r.MIN,Bt[104]=r.MAX;const j={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function b(N,it,K,Q,ft,pt,$t,ge,Te,ie){if(N===0){_===!0&&(ct(r.BLEND),_=!1);return}if(_===!1&&(dt(r.BLEND),_=!0),N!==5){if(N!==g||ie!==P){if((p!==100||x!==100)&&(r.blendEquation(r.FUNC_ADD),p=100,x=100),ie)switch(N){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,T=null,S=null,R=null,w.set(0,0,0),E=0,g=N,P=ie}return}ft=ft||it,pt=pt||K,$t=$t||Q,(it!==p||ft!==x)&&(r.blendEquationSeparate(Bt[it],Bt[ft]),p=it,x=ft),(K!==m||Q!==T||pt!==S||$t!==R)&&(r.blendFuncSeparate(j[K],j[Q],j[pt],j[$t]),m=K,T=Q,S=pt,R=$t),(ge.equals(w)===!1||Te!==E)&&(r.blendColor(ge.r,ge.g,ge.b,Te),w.copy(ge),E=Te),g=N,P=!1}function at(N,it){N.side===2?ct(r.CULL_FACE):dt(r.CULL_FACE);let K=N.side===1;it&&(K=!K),ut(K),N.blending===1&&N.transparent===!1?b(0):b(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),At(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(N){U!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),U=N)}function rt(N){N!==0?(dt(r.CULL_FACE),N!==v&&(N===1?r.cullFace(r.BACK):N===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ct(r.CULL_FACE),v=N}function I(N){N!==y&&(Y&&r.lineWidth(N),y=N)}function At(N,it,K){N?(dt(r.POLYGON_OFFSET_FILL),(L!==it||O!==K)&&(r.polygonOffset(it,K),L=it,O=K)):ct(r.POLYGON_OFFSET_FILL)}function vt(N){N?dt(r.SCISSOR_TEST):ct(r.SCISSOR_TEST)}function C(N){N===void 0&&(N=r.TEXTURE0+G-1),V!==N&&(r.activeTexture(N),V=N)}function M(N,it,K){K===void 0&&(V===null?K=r.TEXTURE0+G-1:K=V);let Q=tt[K];Q===void 0&&(Q={type:void 0,texture:void 0},tt[K]=Q),(Q.type!==N||Q.texture!==it)&&(V!==K&&(r.activeTexture(K),V=K),r.bindTexture(N,it||nt[N]),Q.type=N,Q.texture=it)}function H(){const N=tt[V];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){Pt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Pt.copy(N))}function yt(N){kt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),kt.copy(N))}function Yt(N,it){let K=l.get(it);K===void 0&&(K=new WeakMap,l.set(it,K));let Q=K.get(N);Q===void 0&&(Q=r.getUniformBlockIndex(it,N.name),K.set(N,Q))}function Wt(N,it){const Q=l.get(it).get(N);o.get(it)!==Q&&(r.uniformBlockBinding(it,Q,N.__bindingPointIndex),o.set(it,Q))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,tt={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,T=null,x=null,S=null,R=null,w=new ce(0,0,0),E=0,P=!1,U=null,v=null,y=null,L=null,O=null,Pt.set(0,0,r.canvas.width,r.canvas.height),kt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:dt,disable:ct,bindFramebuffer:Dt,drawBuffers:Ct,useProgram:zt,setBlending:b,setMaterial:at,setFlipSided:ut,setCullFace:rt,setLineWidth:I,setPolygonOffset:At,setScissorTest:vt,activeTexture:C,bindTexture:M,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:Et,texImage3D:wt,updateUBOMapping:Yt,uniformBlockBinding:Wt,texStorage2D:Xt,texStorage3D:ot,texSubImage2D:Z,texSubImage3D:bt,compressedTexSubImage2D:lt,compressedTexSubImage3D:_t,scissor:Vt,viewport:yt,reset:se}}function Ju(r,t,e,n){const i=av(n);switch(e){case 1021:return r*t;case 1024:return r*t;case 1025:return r*t*2;case 1028:return r*t/i.components*i.byteLength;case 1029:return r*t/i.components*i.byteLength;case 1030:return r*t*2/i.components*i.byteLength;case 1031:return r*t*2/i.components*i.byteLength;case 1022:return r*t*3/i.components*i.byteLength;case 1023:return r*t*4/i.components*i.byteLength;case 1033:return r*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function av(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ov(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return d?new OffscreenCanvas(C,M):Mo("canvas")}function g(C,M,H){let J=1;const et=vt(C);if((et.width>H||et.height>H)&&(J=H/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*et.width),bt=Math.floor(J*et.height);h===void 0&&(h=_(Z,bt));const lt=M?_(Z,bt):h;return lt.width=Z,lt.height=bt,lt.getContext("2d").drawImage(C,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+bt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==1003&&C.minFilter!==1006}function m(C){r.generateMipmap(C)}function T(C,M,H,J,et=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=M;if(M===r.RED&&(H===r.FLOAT&&(Z=r.R32F),H===r.HALF_FLOAT&&(Z=r.R16F),H===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.R8UI),H===r.UNSIGNED_SHORT&&(Z=r.R16UI),H===r.UNSIGNED_INT&&(Z=r.R32UI),H===r.BYTE&&(Z=r.R8I),H===r.SHORT&&(Z=r.R16I),H===r.INT&&(Z=r.R32I)),M===r.RG&&(H===r.FLOAT&&(Z=r.RG32F),H===r.HALF_FLOAT&&(Z=r.RG16F),H===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RG8UI),H===r.UNSIGNED_SHORT&&(Z=r.RG16UI),H===r.UNSIGNED_INT&&(Z=r.RG32UI),H===r.BYTE&&(Z=r.RG8I),H===r.SHORT&&(Z=r.RG16I),H===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),H===r.UNSIGNED_INT&&(Z=r.RGB32UI),H===r.BYTE&&(Z=r.RGB8I),H===r.SHORT&&(Z=r.RGB16I),H===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),H===r.UNSIGNED_INT&&(Z=r.RGBA32UI),H===r.BYTE&&(Z=r.RGBA8I),H===r.SHORT&&(Z=r.RGBA16I),H===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),M===r.RGBA){const bt=et?vo:fe.getTransfer(J);H===r.FLOAT&&(Z=r.RGBA32F),H===r.HALF_FLOAT&&(Z=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Z=bt===Ee?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(C,M){let H;return C?M===null||M===1014||M===1020?H=r.DEPTH24_STENCIL8:M===1015?H=r.DEPTH32F_STENCIL8:M===1012&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===1014||M===1020?H=r.DEPTH_COMPONENT24:M===1015?H=r.DEPTH_COMPONENT32F:M===1012&&(H=r.DEPTH_COMPONENT16),H}function S(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),E(M),M.isVideoTexture&&u.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),U(M)}function E(C){const M=n.get(C);if(M.__webglInit===void 0)return;const H=C.source,J=f.get(H);if(J){const et=J[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(C),Object.keys(J).length===0&&f.delete(H)}n.remove(C)}function P(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const H=C.source,J=f.get(H);delete J[M.__cacheKey],a.memory.textures--}function U(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let et=0;et<M.__webglFramebuffer[J].length;et++)r.deleteFramebuffer(M.__webglFramebuffer[J][et]);else r.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)r.deleteFramebuffer(M.__webglFramebuffer[J]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let J=0,et=H.length;J<et;J++){const Z=n.get(H[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(C)}let v=0;function y(){v=0}function L(){const C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const H=n.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kt(H,C,M);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function Y(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){kt(H,C,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function z(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){kt(H,C,M);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function X(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){$(H,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const V={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},tt={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},D={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function st(C,M){if(M.type===1015&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===1006||M.magFilter===1007||M.magFilter===1005||M.magFilter===1008||M.minFilter===1006||M.minFilter===1007||M.minFilter===1005||M.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,V[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,V[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,V[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,tt[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,tt[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,D[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Pt(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const J=M.source;let et=f.get(J);et===void 0&&(et={},f.set(J,et));const Z=O(M);if(Z!==C.__cacheKey){et[Z]===void 0&&(et[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[Z].usedTimes++;const bt=et[C.__cacheKey];bt!==void 0&&(et[C.__cacheKey].usedTimes--,bt.usedTimes===0&&P(M)),C.__cacheKey=Z,C.__webglTexture=et[Z].texture}return H}function kt(C,M,H){let J=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=r.TEXTURE_3D);const et=Pt(C,M),Z=M.source;e.bindTexture(J,C.__webglTexture,r.TEXTURE0+H);const bt=n.get(Z);if(Z.version!==bt.__version||et===!0){e.activeTexture(r.TEXTURE0+H);const lt=fe.getPrimaries(fe.workingColorSpace),_t=M.colorSpace===Fi?null:fe.getPrimaries(M.colorSpace),Xt=M.colorSpace===Fi||lt===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ot=g(M.image,!1,i.maxTextureSize);ot=At(M,ot);const Et=s.convert(M.format,M.colorSpace),wt=s.convert(M.type);let Vt=T(M.internalFormat,Et,wt,M.colorSpace,M.isVideoTexture);st(J,M);let yt;const Yt=M.mipmaps,Wt=M.isVideoTexture!==!0,se=bt.__version===void 0||et===!0,N=Z.dataReady,it=S(M,ot);if(M.isDepthTexture)Vt=x(M.format===1027,M.type),se&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,Vt,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Vt,ot.width,ot.height,0,Et,wt,null));else if(M.isDataTexture)if(Yt.length>0){Wt&&se&&e.texStorage2D(r.TEXTURE_2D,it,Vt,Yt[0].width,Yt[0].height);for(let K=0,Q=Yt.length;K<Q;K++)yt=Yt[K],Wt?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,yt.width,yt.height,Et,wt,yt.data):e.texImage2D(r.TEXTURE_2D,K,Vt,yt.width,yt.height,0,Et,wt,yt.data);M.generateMipmaps=!1}else Wt?(se&&e.texStorage2D(r.TEXTURE_2D,it,Vt,ot.width,ot.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot.width,ot.height,Et,wt,ot.data)):e.texImage2D(r.TEXTURE_2D,0,Vt,ot.width,ot.height,0,Et,wt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Wt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,Vt,Yt[0].width,Yt[0].height,ot.depth);for(let K=0,Q=Yt.length;K<Q;K++)if(yt=Yt[K],M.format!==1023)if(Et!==null)if(Wt){if(N)if(M.layerUpdates.size>0){const ft=Ju(yt.width,yt.height,M.format,M.type);for(const pt of M.layerUpdates){const $t=yt.data.subarray(pt*ft/yt.data.BYTES_PER_ELEMENT,(pt+1)*ft/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,pt,yt.width,yt.height,1,Et,$t,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,yt.width,yt.height,ot.depth,Et,yt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Vt,yt.width,yt.height,ot.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,yt.width,yt.height,ot.depth,Et,wt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Vt,yt.width,yt.height,ot.depth,0,Et,wt,yt.data)}else{Wt&&se&&e.texStorage2D(r.TEXTURE_2D,it,Vt,Yt[0].width,Yt[0].height);for(let K=0,Q=Yt.length;K<Q;K++)yt=Yt[K],M.format!==1023?Et!==null?Wt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,yt.width,yt.height,Et,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Vt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,yt.width,yt.height,Et,wt,yt.data):e.texImage2D(r.TEXTURE_2D,K,Vt,yt.width,yt.height,0,Et,wt,yt.data)}else if(M.isDataArrayTexture)if(Wt){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,Vt,ot.width,ot.height,ot.depth),N)if(M.layerUpdates.size>0){const K=Ju(ot.width,ot.height,M.format,M.type);for(const Q of M.layerUpdates){const ft=ot.data.subarray(Q*K/ot.data.BYTES_PER_ELEMENT,(Q+1)*K/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,Et,wt,ft)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Et,wt,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,ot.width,ot.height,ot.depth,0,Et,wt,ot.data);else if(M.isData3DTexture)Wt?(se&&e.texStorage3D(r.TEXTURE_3D,it,Vt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Et,wt,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Vt,ot.width,ot.height,ot.depth,0,Et,wt,ot.data);else if(M.isFramebufferTexture){if(se)if(Wt)e.texStorage2D(r.TEXTURE_2D,it,Vt,ot.width,ot.height);else{let K=ot.width,Q=ot.height;for(let ft=0;ft<it;ft++)e.texImage2D(r.TEXTURE_2D,ft,Vt,K,Q,0,Et,wt,null),K>>=1,Q>>=1}}else if(Yt.length>0){if(Wt&&se){const K=vt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,it,Vt,K.width,K.height)}for(let K=0,Q=Yt.length;K<Q;K++)yt=Yt[K],Wt?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Et,wt,yt):e.texImage2D(r.TEXTURE_2D,K,Vt,Et,wt,yt);M.generateMipmaps=!1}else if(Wt){if(se){const K=vt(ot);e.texStorage2D(r.TEXTURE_2D,it,Vt,K.width,K.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,wt,ot)}else e.texImage2D(r.TEXTURE_2D,0,Vt,Et,wt,ot);p(M)&&m(J),bt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $(C,M,H){if(M.image.length!==6)return;const J=Pt(C,M),et=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);const Z=n.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(r.TEXTURE0+H);const bt=fe.getPrimaries(fe.workingColorSpace),lt=M.colorSpace===Fi?null:fe.getPrimaries(M.colorSpace),_t=M.colorSpace===Fi||bt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Xt=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let Q=0;Q<6;Q++)!Xt&&!ot?Et[Q]=g(M.image[Q],!0,i.maxCubemapSize):Et[Q]=ot?M.image[Q].image:M.image[Q],Et[Q]=At(M,Et[Q]);const wt=Et[0],Vt=s.convert(M.format,M.colorSpace),yt=s.convert(M.type),Yt=T(M.internalFormat,Vt,yt,M.colorSpace),Wt=M.isVideoTexture!==!0,se=Z.__version===void 0||J===!0,N=et.dataReady;let it=S(M,wt);st(r.TEXTURE_CUBE_MAP,M);let K;if(Xt){Wt&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,it,Yt,wt.width,wt.height);for(let Q=0;Q<6;Q++){K=Et[Q].mipmaps;for(let ft=0;ft<K.length;ft++){const pt=K[ft];M.format!==1023?Vt!==null?Wt?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,pt.width,pt.height,Vt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Yt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,pt.width,pt.height,Vt,yt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Yt,pt.width,pt.height,0,Vt,yt,pt.data)}}}else{if(K=M.mipmaps,Wt&&se){K.length>0&&it++;const Q=vt(Et[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,it,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Et[Q].width,Et[Q].height,Vt,yt,Et[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Et[Q].width,Et[Q].height,0,Vt,yt,Et[Q].data);for(let ft=0;ft<K.length;ft++){const $t=K[ft].image[Q].image;Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,$t.width,$t.height,Vt,yt,$t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Yt,$t.width,$t.height,0,Vt,yt,$t.data)}}else{Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Vt,yt,Et[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Vt,yt,Et[Q]);for(let ft=0;ft<K.length;ft++){const pt=K[ft];Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Vt,yt,pt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Yt,Vt,yt,pt.image[Q])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function nt(C,M,H,J,et,Z){const bt=s.convert(H.format,H.colorSpace),lt=s.convert(H.type),_t=T(H.internalFormat,bt,lt,H.colorSpace);if(!n.get(M).__hasExternalTextures){const ot=Math.max(1,M.width>>Z),Et=Math.max(1,M.height>>Z);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,_t,ot,Et,M.depth,0,bt,lt,null):e.texImage2D(et,Z,_t,ot,Et,0,bt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),rt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,et,n.get(H).__webglTexture,0,ut(M)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,et,n.get(H).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(C,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const J=M.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=x(M.stencilBuffer,et),bt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=ut(M);rt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,Z,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,C)}else{const J=M.textures;for(let et=0;et<J.length;et++){const Z=J[et],bt=s.convert(Z.format,Z.colorSpace),lt=s.convert(Z.type),_t=T(Z.internalFormat,bt,lt,Z.colorSpace),Xt=ut(M);H&&rt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,_t,M.width,M.height):rt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,_t,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,_t,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,et=ut(M);if(M.depthTexture.format===1026)rt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===1027)rt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=J}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ct(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=r.createRenderbuffer(),dt(M.__webglDepthbuffer[J],C,!1);else{const et=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),dt(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(C,M,H){const J=n.get(C);M!==void 0&&nt(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Dt(C)}function zt(C){const M=C.texture,H=n.get(C),J=n.get(M);C.addEventListener("dispose",w);const et=C.textures,Z=C.isWebGLCubeRenderTarget===!0,bt=et.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=M.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let _t=0;_t<M.mipmaps.length;_t++)H.__webglFramebuffer[lt][_t]=r.createFramebuffer()}else H.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)H.__webglFramebuffer[lt]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(bt)for(let lt=0,_t=et.length;lt<_t;lt++){const Xt=n.get(et[lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&rt(C)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const _t=et[lt];H.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);const Xt=s.convert(_t.format,_t.colorSpace),ot=s.convert(_t.type),Et=T(_t.internalFormat,Xt,ot,_t.colorSpace,C.isXRRenderTarget===!0),wt=ut(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,Et,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),st(r.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)nt(H.__webglFramebuffer[lt][_t],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t);else nt(H.__webglFramebuffer[lt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,_t=et.length;lt<_t;lt++){const Xt=et[lt],ot=n.get(Xt);e.bindTexture(r.TEXTURE_2D,ot.__webglTexture),st(r.TEXTURE_2D,Xt),nt(H.__webglFramebuffer,C,Xt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),p(Xt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,J.__webglTexture),st(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)nt(H.__webglFramebuffer[_t],C,M,r.COLOR_ATTACHMENT0,lt,_t);else nt(H.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,lt,0);p(M)&&m(lt),e.unbindTexture()}C.depthBuffer&&Dt(C)}function Bt(C){const M=C.textures;for(let H=0,J=M.length;H<J;H++){const et=M[H];if(p(et)){const Z=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,bt=n.get(et).__webglTexture;e.bindTexture(Z,bt),m(Z),e.unbindTexture()}}}const j=[],b=[];function at(C){if(C.samples>0){if(rt(C)===!1){const M=C.textures,H=C.width,J=C.height;let et=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(C),lt=M.length>1;if(lt)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Xt=n.get(M[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,H,J,0,0,H,J,et,r.NEAREST),l===!0&&(j.length=0,b.length=0,j.push(r.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(j.push(Z),b.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,b)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Xt=n.get(M[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ut(C){return Math.min(i.maxSamples,C.samples)}function rt(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function I(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function At(C,M){const H=C.colorSpace,J=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Zi&&H!==Fi&&(fe.getTransfer(H)===Ee?(J!==1023||et!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=y,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=Ct,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=rt}function lv(r,t){function e(n,i=Fi){let s;const a=fe.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class cv extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zr extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
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

}`;class dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new xn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xi({vertexShader:hv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ni(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends vs{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new dv,p=e.getContextAttributes();let m=null,T=null;const x=[],S=[],R=new Tt;let w=null;const E=new In;E.layers.enable(1),E.viewport=new _e;const P=new In;P.layers.enable(2),P.viewport=new _e;const U=[E,P],v=new cv;v.layers.enable(1),v.layers.enable(2);let y=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=x[$];return nt===void 0&&(nt=new El,x[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=x[$];return nt===void 0&&(nt=new El,x[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=x[$];return nt===void 0&&(nt=new El,x[$]=nt),nt.getHandSpace()};function O($){const nt=S.indexOf($.inputSource);if(nt===-1)return;const dt=x[nt];dt!==void 0&&(dt.update($.inputSource,$.frame,c||a),dt.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<x.length;$++){const nt=S[$];nt!==null&&(S[$]=null,x[$].disconnect(nt))}y=null,L=null,g.reset(),t.setRenderTarget(m),d=null,f=null,h=null,i=null,T=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new yr(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,dt=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?1027:1026,dt=p.stencil?1020:1014);const Dt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new yr(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new of(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y($){for(let nt=0;nt<$.removed.length;nt++){const dt=$.removed[nt],ct=S.indexOf(dt);ct>=0&&(S[ct]=null,x[ct].disconnect(dt))}for(let nt=0;nt<$.added.length;nt++){const dt=$.added[nt];let ct=S.indexOf(dt);if(ct===-1){for(let Ct=0;Ct<x.length;Ct++)if(Ct>=S.length){S.push(dt),ct=Ct;break}else if(S[Ct]===null){S[Ct]=dt,ct=Ct;break}if(ct===-1)break}const Dt=x[ct];Dt&&Dt.connect(dt)}}const z=new k,X=new k;function V($,nt,dt){z.setFromMatrixPosition(nt.matrixWorld),X.setFromMatrixPosition(dt.matrixWorld);const ct=z.distanceTo(X),Dt=nt.projectionMatrix.elements,Ct=dt.projectionMatrix.elements,zt=Dt[14]/(Dt[10]-1),Bt=Dt[14]/(Dt[10]+1),j=(Dt[9]+1)/Dt[5],b=(Dt[9]-1)/Dt[5],at=(Dt[8]-1)/Dt[0],ut=(Ct[8]+1)/Ct[0],rt=zt*at,I=zt*ut,At=ct/(-at+ut),vt=At*-at;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(vt),$.translateZ(At),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Dt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const C=zt+At,M=Bt+At,H=rt-vt,J=I+(ct-vt),et=j*Bt/M*C,Z=b*Bt/M*C;$.projectionMatrix.makePerspective(H,J,et,Z,C,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let nt=$.near,dt=$.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),v.near=P.near=E.near=nt,v.far=P.far=E.far=dt,(y!==v.near||L!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,L=v.far);const ct=$.parent,Dt=v.cameras;tt(v,ct);for(let Ct=0;Ct<Dt.length;Ct++)tt(Dt[Ct],ct);Dt.length===2?V(v,E,P):v.projectionMatrix.copy(E.projectionMatrix),D($,v,ct)};function D($,nt,dt){dt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ql*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let st=null;function Pt($,nt){if(u=nt.getViewerPose(c||a),_=nt,u!==null){const dt=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let ct=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let Ct=0;Ct<dt.length;Ct++){const zt=dt[Ct];let Bt=null;if(d!==null)Bt=d.getViewport(zt);else{const b=h.getViewSubImage(f,zt);Bt=b.viewport,Ct===0&&(t.setRenderTargetTextures(T,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),t.setRenderTarget(T))}let j=U[Ct];j===void 0&&(j=new In,j.layers.enable(Ct),j.viewport=new _e,U[Ct]=j),j.matrix.fromArray(zt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(zt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Ct===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(j)}const Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ct=h.getDepthInformation(dt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,i.renderState)}}for(let dt=0;dt<x.length;dt++){const ct=S[dt],Dt=x[dt];ct!==null&&Dt!==void 0&&Dt.update(ct,nt,c||a)}st&&st($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const kt=new af;kt.setAnimationLoop(Pt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const rr=new fi,mv=new we;function _v(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,nf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,T,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,T,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=t.get(m),x=T.envMap,S=T.envMapRotation;x&&(p.envMap.value=x,rr.copy(S),rr.x*=-1,rr.y*=-1,rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),p.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(rr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gv(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const S=x.program;n.uniformBlockBinding(T,S)}function c(T,x){let S=i[T.id];S===void 0&&(_(T),S=u(T),i[T.id]=S,T.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(T,R);const w=t.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function u(T){const x=h();T.__bindingPointIndex=x;const S=r.createBuffer(),R=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const x=i[T.id],S=T.uniforms,R=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,E=S.length;w<E;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let U=0,v=P.length;U<v;U++){const y=P[U];if(d(y,w,U,R)===!0){const L=y.__offset,O=Array.isArray(y.value)?y.value:[y.value];let G=0;for(let Y=0;Y<O.length;Y++){const z=O[Y],X=g(z);typeof z=="number"||typeof z=="boolean"?(y.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,L+G,y.__data)):z.isMatrix3?(y.__data[0]=z.elements[0],y.__data[1]=z.elements[1],y.__data[2]=z.elements[2],y.__data[3]=0,y.__data[4]=z.elements[3],y.__data[5]=z.elements[4],y.__data[6]=z.elements[5],y.__data[7]=0,y.__data[8]=z.elements[6],y.__data[9]=z.elements[7],y.__data[10]=z.elements[8],y.__data[11]=0):(z.toArray(y.__data,G),G+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,y.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(T,x,S,R){const w=T.value,E=x+"_"+S;if(R[E]===void 0)return typeof w=="number"||typeof w=="boolean"?R[E]=w:R[E]=w.clone(),!0;{const P=R[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(T){const x=T.uniforms;let S=0;const R=16;for(let E=0,P=x.length;E<P;E++){const U=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,y=U.length;v<y;v++){const L=U[v],O=Array.isArray(L.value)?L.value:[L.value];for(let G=0,Y=O.length;G<Y;G++){const z=O[G],X=g(z),V=S%R,tt=V%X.boundary,D=V+tt;S+=tt,D!==0&&R-D<X.storage&&(S+=R-D),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=X.storage}}}const w=S%R;return w>0&&(S+=R-w),T.__size=S,T.__cache={},this}function g(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function p(T){const x=T.target;x.removeEventListener("dispose",p);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class vv{constructor(t={}){const{canvas:e=ip(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let S=!1,R=0,w=0,E=null,P=-1,U=null;const v=new _e,y=new _e;let L=null;const O=new ce(0);let G=0,Y=e.width,z=e.height,X=1,V=null,tt=null;const D=new _e(0,0,Y,z),st=new _e(0,0,Y,z);let Pt=!1;const kt=new Dc;let $=!1,nt=!1;const dt=new we,ct=new we,Dt=new k,Ct=new _e,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function j(){return E===null?X:1}let b=n;function at(A,B){return e.getContext(A,B)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",pt,!1),b===null){const B="webgl2";if(b=at(B,A),b===null)throw at(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ut,rt,I,At,vt,C,M,H,J,et,Z,bt,lt,_t,Xt,ot,Et,wt,Vt,yt,Yt,Wt,se,N;function it(){ut=new Eg(b),ut.init(),Wt=new lv(b,ut),rt=new _g(b,ut,t,Wt),I=new sv(b),rt.reverseDepthBuffer&&I.buffers.depth.setReversed(!0),At=new bg(b),vt=new W0,C=new ov(b,ut,I,vt,rt,Wt,At),M=new vg(x),H=new yg(x),J=new Lp(b),se=new pg(b,J),et=new Tg(b,J,At,se),Z=new Cg(b,et,J,At),Vt=new wg(b,rt,C),ot=new gg(vt),bt=new H0(x,M,H,ut,rt,se,ot),lt=new _v(x,vt),_t=new q0,Xt=new j0(ut),wt=new dg(x,M,H,I,Z,f,l),Et=new iv(x,Z,rt),N=new gv(b,At,rt,I),yt=new mg(b,ut,At),Yt=new Ag(b,ut,At),At.programs=bt.programs,x.capabilities=rt,x.extensions=ut,x.properties=vt,x.renderLists=_t,x.shadowMap=Et,x.state=I,x.info=At}it();const K=new pv(x,b);this.xr=K,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(Y,z,!1))},this.getSize=function(A){return A.set(Y,z)},this.setSize=function(A,B,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,z=B,e.width=Math.floor(A*X),e.height=Math.floor(B*X),W===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(Y*X,z*X).floor()},this.setDrawingBufferSize=function(A,B,W){Y=A,z=B,X=W,e.width=Math.floor(A*W),e.height=Math.floor(B*W),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,B,W,q){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,B,W,q),I.viewport(v.copy(D).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,B,W,q){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,B,W,q),I.scissor(y.copy(st).multiplyScalar(X).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){I.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(A=!0,B=!0,W=!0){let q=0;if(A){let F=!1;if(E!==null){const ht=E.texture.format;F=ht===1033||ht===1031||ht===1029}if(F){const ht=E.texture.type,Mt=ht===1009||ht===1014||ht===1012||ht===1020||ht===1017||ht===1018,gt=wt.getClearColor(),mt=wt.getClearAlpha(),Ut=gt.r,Ht=gt.g,It=gt.b;Mt?(d[0]=Ut,d[1]=Ht,d[2]=It,d[3]=mt,b.clearBufferuiv(b.COLOR,0,d)):(_[0]=Ut,_[1]=Ht,_[2]=It,_[3]=mt,b.clearBufferiv(b.COLOR,0,_))}else q|=b.COLOR_BUFFER_BIT}B&&(q|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),_t.dispose(),Xt.dispose(),vt.dispose(),M.dispose(),H.dispose(),Z.dispose(),se.dispose(),N.dispose(),bt.dispose(),K.dispose(),K.removeEventListener("sessionstart",le),K.removeEventListener("sessionend",xt),Gt.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=At.autoReset,B=Et.enabled,W=Et.autoUpdate,q=Et.needsUpdate,F=Et.type;it(),At.autoReset=A,Et.enabled=B,Et.autoUpdate=W,Et.needsUpdate=q,Et.type=F}function pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const B=A.target;B.removeEventListener("dispose",$t),ge(B)}function ge(A){Te(A),vt.remove(A)}function Te(A){const B=vt.get(A).programs;B!==void 0&&(B.forEach(function(W){bt.releaseProgram(W)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,W,q,F,ht){B===null&&(B=zt);const Mt=F.isMesh&&F.matrixWorld.determinant()<0,gt=de(A,B,W,q,F);I.setMaterial(q,Mt);let mt=W.index,Ut=1;if(q.wireframe===!0){if(mt=et.getWireframeAttribute(W),mt===void 0)return;Ut=2}const Ht=W.drawRange,It=W.attributes.position;let ae=Ht.start*Ut,re=(Ht.start+Ht.count)*Ut;ht!==null&&(ae=Math.max(ae,ht.start*Ut),re=Math.min(re,(ht.start+ht.count)*Ut)),mt!==null?(ae=Math.max(ae,0),re=Math.min(re,mt.count)):It!=null&&(ae=Math.max(ae,0),re=Math.min(re,It.count));const me=re-ae;if(me<0||me===1/0)return;se.setup(F,q,gt,W,mt);let Xe,jt=yt;if(mt!==null&&(Xe=J.get(mt),jt=Yt,jt.setIndex(Xe)),F.isMesh)q.wireframe===!0?(I.setLineWidth(q.wireframeLinewidth*j()),jt.setMode(b.LINES)):jt.setMode(b.TRIANGLES);else if(F.isLine){let Ot=q.linewidth;Ot===void 0&&(Ot=1),I.setLineWidth(Ot*j()),F.isLineSegments?jt.setMode(b.LINES):F.isLineLoop?jt.setMode(b.LINE_LOOP):jt.setMode(b.LINE_STRIP)}else F.isPoints?jt.setMode(b.POINTS):F.isSprite&&jt.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ot=F._multiDrawStarts,Je=F._multiDrawCounts,ue=F._multiDrawCount,Zn=mt?J.get(mt).bytesPerElement:1,Cr=vt.get(q).currentProgram.getUniforms();for(let wn=0;wn<ue;wn++)Cr.setValue(b,"_gl_DrawID",wn),jt.render(Ot[wn]/Zn,Je[wn])}else if(F.isInstancedMesh)jt.renderInstances(ae,me,F.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Je=Math.min(W.instanceCount,Ot);jt.renderInstances(ae,me,Je)}else jt.render(ae,me)};function ie(A,B,W){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=1,A.needsUpdate=!0,Ue(A,B,W),A.side=0,A.needsUpdate=!0,Ue(A,B,W),A.side=2):Ue(A,B,W)}this.compile=function(A,B,W=null){W===null&&(W=A),p=Xt.get(W),p.init(B),T.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),A!==W&&A.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const q=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ht=F.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const gt=ht[Mt];ie(gt,W,F),q.add(gt)}else ie(ht,W,F),q.add(ht)}),T.pop(),p=null,q},this.compileAsync=function(A,B,W=null){const q=this.compile(A,B,W);return new Promise(F=>{function ht(){if(q.forEach(function(Mt){vt.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){F(A);return}setTimeout(ht,10)}ut.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Nt=null;function Lt(A){Nt&&Nt(A)}function le(){Gt.stop()}function xt(){Gt.start()}const Gt=new af;Gt.setAnimationLoop(Lt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(A){Nt=A,K.setAnimationLoop(A),A===null?Gt.stop():Gt.start()},K.addEventListener("sessionstart",le),K.addEventListener("sessionend",xt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,E),p=Xt.get(A,T.length),p.init(B),T.push(p),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),kt.setFromProjectionMatrix(ct),nt=this.localClippingEnabled,$=ot.init(this.clippingPlanes,nt),g=_t.get(A,m.length),g.init(),m.push(g),K.enabled===!0&&K.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&Ft(ht,B,-1/0,x.sortObjects)}Ft(A,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,tt),Bt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Bt&&wt.addToRenderList(g,A),this.info.render.frame++,$===!0&&ot.beginShadows();const W=p.state.shadowsArray;Et.render(W,A,B),$===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,F=g.transmissive;if(p.setupLights(),B.isArrayCamera){const ht=B.cameras;if(F.length>0)for(let Mt=0,gt=ht.length;Mt<gt;Mt++){const mt=ht[Mt];Ie(q,F,A,mt)}Bt&&wt.render(A);for(let Mt=0,gt=ht.length;Mt<gt;Mt++){const mt=ht[Mt];qt(g,A,mt,mt.viewport)}}else F.length>0&&Ie(q,F,A,B),Bt&&wt.render(A),qt(g,A,B);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,B),se.resetDefaultState(),P=-1,U=null,T.pop(),T.length>0?(p=T[T.length-1],$===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ft(A,B,W,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||kt.intersectsSprite(A)){q&&Ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ct);const Mt=Z.update(A),gt=A.material;gt.visible&&g.push(A,Mt,gt,W,Ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||kt.intersectsObject(A))){const Mt=Z.update(A),gt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ct.copy(A.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ct.copy(Mt.boundingSphere.center)),Ct.applyMatrix4(A.matrixWorld).applyMatrix4(ct)),Array.isArray(gt)){const mt=Mt.groups;for(let Ut=0,Ht=mt.length;Ut<Ht;Ut++){const It=mt[Ut],ae=gt[It.materialIndex];ae&&ae.visible&&g.push(A,Mt,ae,W,Ct.z,It)}}else gt.visible&&g.push(A,Mt,gt,W,Ct.z,null)}}const ht=A.children;for(let Mt=0,gt=ht.length;Mt<gt;Mt++)Ft(ht[Mt],B,W,q)}function qt(A,B,W,q){const F=A.opaque,ht=A.transmissive,Mt=A.transparent;p.setupLightsView(W),$===!0&&ot.setGlobalState(x.clippingPlanes,W),q&&I.viewport(v.copy(q)),F.length>0&&Kt(F,B,W),ht.length>0&&Kt(ht,B,W),Mt.length>0&&Kt(Mt,B,W),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Ie(A,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new yr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const ht=p.state.transmissionRenderTarget[q.id],Mt=q.viewport||v;ht.setSize(Mt.z,Mt.w);const gt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(O),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Bt&&wt.render(W);const mt=x.toneMapping;x.toneMapping=0;const Ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),$===!0&&ot.setGlobalState(x.clippingPlanes,q),Kt(A,W,q),C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let It=0,ae=B.length;It<ae;It++){const re=B[It],me=re.object,Xe=re.geometry,jt=re.material,Ot=re.group;if(jt.side===2&&me.layers.test(q.layers)){const Je=jt.side;jt.side=1,jt.needsUpdate=!0,Ae(me,W,q,Xe,jt,Ot),jt.side=Je,jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht))}x.setRenderTarget(gt),x.setClearColor(O,G),Ut!==void 0&&(q.viewport=Ut),x.toneMapping=mt}function Kt(A,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let F=0,ht=A.length;F<ht;F++){const Mt=A[F],gt=Mt.object,mt=Mt.geometry,Ut=q===null?Mt.material:q,Ht=Mt.group;gt.layers.test(W.layers)&&Ae(gt,B,W,mt,Ut,Ht)}}function Ae(A,B,W,q,F,ht){A.onBeforeRender(x,B,W,q,F,ht),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,B,W,q,A,ht),F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=1,F.needsUpdate=!0,x.renderBufferDirect(W,B,q,F,A,ht),F.side=0,F.needsUpdate=!0,x.renderBufferDirect(W,B,q,F,A,ht),F.side=2):x.renderBufferDirect(W,B,q,F,A,ht),A.onAfterRender(x,B,W,q,F,ht)}function Ue(A,B,W){B.isScene!==!0&&(B=zt);const q=vt.get(A),F=p.state.lights,ht=p.state.shadowsArray,Mt=F.state.version,gt=bt.getParameters(A,F.state,ht,B,W),mt=bt.getProgramCacheKey(gt);let Ut=q.programs;q.environment=A.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(A.isMeshStandardMaterial?H:M).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ut===void 0&&(A.addEventListener("dispose",$t),Ut=new Map,q.programs=Ut);let Ht=Ut.get(mt);if(Ht!==void 0){if(q.currentProgram===Ht&&q.lightsStateVersion===Mt)return ve(A,gt),Ht}else gt.uniforms=bt.getUniforms(A),A.onBeforeCompile(gt,x),Ht=bt.acquireProgram(gt,mt),Ut.set(mt,Ht),q.uniforms=gt.uniforms;const It=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=ot.uniform),ve(A,gt),q.needsLights=ye(A),q.lightsStateVersion=Mt,q.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=Ht,q.uniformsList=null,Ht}function Me(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function ve(A,B){const W=vt.get(A);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function de(A,B,W,q,F){B.isScene!==!0&&(B=zt),C.resetTextureUnits();const ht=B.fog,Mt=q.isMeshStandardMaterial?B.environment:null,gt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zi,mt=(q.isMeshStandardMaterial?H:M).get(q.envMap||Mt),Ut=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!W.morphAttributes.position,ae=!!W.morphAttributes.normal,re=!!W.morphAttributes.color;let me=0;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(me=x.toneMapping);const Xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,jt=Xe!==void 0?Xe.length:0,Ot=vt.get(q),Je=p.state.lights;if($===!0&&(nt===!0||A!==U)){const Vn=A===U&&q.id===P;ot.setState(q,A,Vn)}let ue=!1;q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Je.state.version||Ot.outputColorSpace!==gt||F.isBatchedMesh&&Ot.batching===!1||!F.isBatchedMesh&&Ot.batching===!0||F.isBatchedMesh&&Ot.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ot.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ot.instancing===!1||!F.isInstancedMesh&&Ot.instancing===!0||F.isSkinnedMesh&&Ot.skinning===!1||!F.isSkinnedMesh&&Ot.skinning===!0||F.isInstancedMesh&&Ot.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ot.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ot.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ot.instancingMorph===!1&&F.morphTexture!==null||Ot.envMap!==mt||q.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ot.numPlanes||Ot.numIntersection!==ot.numIntersection)||Ot.vertexAlphas!==Ut||Ot.vertexTangents!==Ht||Ot.morphTargets!==It||Ot.morphNormals!==ae||Ot.morphColors!==re||Ot.toneMapping!==me||Ot.morphTargetsCount!==jt)&&(ue=!0):(ue=!0,Ot.__version=q.version);let Zn=Ot.currentProgram;ue===!0&&(Zn=Ue(q,B,F));let Cr=!1,wn=!1,Xo=!1;const Ne=Zn.getUniforms(),Ci=Ot.uniforms;if(I.useProgram(Zn.program)&&(Cr=!0,wn=!0,Xo=!0),q.id!==P&&(P=q.id,wn=!0),Cr||U!==A){rt.reverseDepthBuffer?(dt.copy(A.projectionMatrix),sp(dt),ap(dt),Ne.setValue(b,"projectionMatrix",dt)):Ne.setValue(b,"projectionMatrix",A.projectionMatrix),Ne.setValue(b,"viewMatrix",A.matrixWorldInverse);const Vn=Ne.map.cameraPosition;Vn!==void 0&&Vn.setValue(b,Dt.setFromMatrixPosition(A.matrixWorld)),rt.logarithmicDepthBuffer&&Ne.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ne.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,wn=!0,Xo=!0)}if(F.isSkinnedMesh){Ne.setOptional(b,F,"bindMatrix"),Ne.setOptional(b,F,"bindMatrixInverse");const Vn=F.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Ne.setValue(b,"boneTexture",Vn.boneTexture,C))}F.isBatchedMesh&&(Ne.setOptional(b,F,"batchingTexture"),Ne.setValue(b,"batchingTexture",F._matricesTexture,C),Ne.setOptional(b,F,"batchingIdTexture"),Ne.setValue(b,"batchingIdTexture",F._indirectTexture,C),Ne.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&Ne.setValue(b,"batchingColorTexture",F._colorsTexture,C));const qo=W.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0)&&Vt.update(F,W,Zn),(wn||Ot.receiveShadow!==F.receiveShadow)&&(Ot.receiveShadow=F.receiveShadow,Ne.setValue(b,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ci.envMap.value=mt,Ci.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Ci.envMapIntensity.value=B.environmentIntensity),wn&&(Ne.setValue(b,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&bn(Ci,Xo),ht&&q.fog===!0&&lt.refreshFogUniforms(Ci,ht),lt.refreshMaterialUniforms(Ci,q,X,z,p.state.transmissionRenderTarget[A.id]),oo.upload(b,Me(Ot),Ci,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(oo.upload(b,Me(Ot),Ci,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ne.setValue(b,"center",F.center),Ne.setValue(b,"modelViewMatrix",F.modelViewMatrix),Ne.setValue(b,"normalMatrix",F.normalMatrix),Ne.setValue(b,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Vn=q.uniformsGroups;for(let Yo=0,ep=Vn.length;Yo<ep;Yo++){const cu=Vn[Yo];N.update(cu,Zn),N.bind(cu,Zn)}}return Zn}function bn(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ye(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,B,W){vt.get(A.texture).__webglTexture=B,vt.get(A.depthTexture).__webglTexture=W;const q=vt.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const W=vt.get(A);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,W=0){E=A,R=B,w=W;let q=!0,F=null,ht=!1,Mt=!1;if(A){const mt=vt.get(A);if(mt.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(b.FRAMEBUFFER,null),q=!1;else if(mt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(mt.__hasExternalTextures)C.rebindTextures(A,vt.get(A.texture).__webglTexture,vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const It=A.depthTexture;if(mt.__boundDepthTexture!==It){if(It!==null&&vt.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Mt=!0);const Ht=vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?F=Ht[B][W]:F=Ht[B],ht=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?F=vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?F=Ht[W]:F=Ht,v.copy(A.viewport),y.copy(A.scissor),L=A.scissorTest}else v.copy(D).multiplyScalar(X).floor(),y.copy(st).multiplyScalar(X).floor(),L=Pt;if(I.bindFramebuffer(b.FRAMEBUFFER,F)&&q&&I.drawBuffers(A,F),I.viewport(v),I.scissor(y),I.setScissorTest(L),ht){const mt=vt.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+B,mt.__webglTexture,W)}else if(Mt){const mt=vt.get(A.texture),Ut=B||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,mt.__webglTexture,W||0,Ut)}P=-1},this.readRenderTargetPixels=function(A,B,W,q,F,ht,Mt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(gt=gt[Mt]),gt){I.bindFramebuffer(b.FRAMEBUFFER,gt);try{const mt=A.texture,Ut=mt.format,Ht=mt.type;if(!rt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&W>=0&&W<=A.height-F&&b.readPixels(B,W,q,F,Wt.convert(Ut),Wt.convert(Ht),ht)}finally{const mt=E!==null?vt.get(E).__webglFramebuffer:null;I.bindFramebuffer(b.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(A,B,W,q,F,ht,Mt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(gt=gt[Mt]),gt){const mt=A.texture,Ut=mt.format,Ht=mt.type;if(!rt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-q&&W>=0&&W<=A.height-F){I.bindFramebuffer(b.FRAMEBUFFER,gt);const It=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,It),b.bufferData(b.PIXEL_PACK_BUFFER,ht.byteLength,b.STREAM_READ),b.readPixels(B,W,q,F,Wt.convert(Ut),Wt.convert(Ht),0);const ae=E!==null?vt.get(E).__webglFramebuffer:null;I.bindFramebuffer(b.FRAMEBUFFER,ae);const re=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await rp(b,re,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,It),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ht),b.deleteBuffer(It),b.deleteSync(re),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,W=0){A.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-W),F=Math.floor(A.image.width*q),ht=Math.floor(A.image.height*q),Mt=B!==null?B.x:0,gt=B!==null?B.y:0;C.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,W,0,0,Mt,gt,F,ht),I.unbindTexture()},this.copyTextureToTexture=function(A,B,W=null,q=null,F=0){A.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],B=arguments[2],F=arguments[3]||0,W=null);let ht,Mt,gt,mt,Ut,Ht;W!==null?(ht=W.max.x-W.min.x,Mt=W.max.y-W.min.y,gt=W.min.x,mt=W.min.y):(ht=A.image.width,Mt=A.image.height,gt=0,mt=0),q!==null?(Ut=q.x,Ht=q.y):(Ut=0,Ht=0);const It=Wt.convert(B.format),ae=Wt.convert(B.type);C.setTexture2D(B,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,B.unpackAlignment);const re=b.getParameter(b.UNPACK_ROW_LENGTH),me=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Xe=b.getParameter(b.UNPACK_SKIP_PIXELS),jt=b.getParameter(b.UNPACK_SKIP_ROWS),Ot=b.getParameter(b.UNPACK_SKIP_IMAGES),Je=A.isCompressedTexture?A.mipmaps[F]:A.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Je.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Je.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,gt),b.pixelStorei(b.UNPACK_SKIP_ROWS,mt),A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,F,Ut,Ht,ht,Mt,It,ae,Je.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,F,Ut,Ht,Je.width,Je.height,It,Je.data):b.texSubImage2D(b.TEXTURE_2D,F,Ut,Ht,ht,Mt,It,ae,Je),b.pixelStorei(b.UNPACK_ROW_LENGTH,re),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,me),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Xe),b.pixelStorei(b.UNPACK_SKIP_ROWS,jt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ot),F===0&&B.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(A,B,W=null,q=null,F=0){A.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,A=arguments[2],B=arguments[3],F=arguments[4]||0);let ht,Mt,gt,mt,Ut,Ht,It,ae,re;const me=A.isCompressedTexture?A.mipmaps[F]:A.image;W!==null?(ht=W.max.x-W.min.x,Mt=W.max.y-W.min.y,gt=W.max.z-W.min.z,mt=W.min.x,Ut=W.min.y,Ht=W.min.z):(ht=me.width,Mt=me.height,gt=me.depth,mt=0,Ut=0,Ht=0),q!==null?(It=q.x,ae=q.y,re=q.z):(It=0,ae=0,re=0);const Xe=Wt.convert(B.format),jt=Wt.convert(B.type);let Ot;if(B.isData3DTexture)C.setTexture3D(B,0),Ot=b.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)C.setTexture2DArray(B,0),Ot=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,B.unpackAlignment);const Je=b.getParameter(b.UNPACK_ROW_LENGTH),ue=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Zn=b.getParameter(b.UNPACK_SKIP_PIXELS),Cr=b.getParameter(b.UNPACK_SKIP_ROWS),wn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,me.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,me.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,mt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ut),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ht),A.isDataTexture||A.isData3DTexture?b.texSubImage3D(Ot,F,It,ae,re,ht,Mt,gt,Xe,jt,me.data):B.isCompressedArrayTexture?b.compressedTexSubImage3D(Ot,F,It,ae,re,ht,Mt,gt,Xe,me.data):b.texSubImage3D(Ot,F,It,ae,re,ht,Mt,gt,Xe,jt,me),b.pixelStorei(b.UNPACK_ROW_LENGTH,Je),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ue),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Zn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Cr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,wn),F===0&&B.generateMipmaps&&b.generateMipmap(Ot),I.unbindTexture()},this.initRenderTarget=function(A){vt.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),I.unbindTexture()},this.resetState=function(){R=0,w=0,E=null,I.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Cc?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Fo?"display-p3":"srgb"}}class xv extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new Tt:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,i=[],s=[],a=[],o=new k,l=new we;for(let d=0;d<=t;d++){const _=d/t;i[d]=this.getTangentAt(_,new k)}s[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(sn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(sn(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ic extends pi{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sv extends Ic{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Uc(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Wa=new k,Tl=new Uc,Al=new Uc,bl=new Uc;class Mv extends pi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new k){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Wa.subVectors(i[0],i[1]).add(i[0]),c=Wa);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Wa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Tl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),Al.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),bl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Al.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),bl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Tl.calc(l),Al.calc(l),bl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new k().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ju(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function yv(r,t){const e=1-r;return e*e*t}function Ev(r,t){return 2*(1-r)*r*t}function Tv(r,t){return r*r*t}function Gs(r,t,e,n){return yv(r,t)+Ev(r,e)+Tv(r,n)}function Av(r,t){const e=1-r;return e*e*e*t}function bv(r,t){const e=1-r;return 3*e*e*r*t}function wv(r,t){return 3*(1-r)*r*r*t}function Cv(r,t){return r*r*r*t}function Vs(r,t,e,n,i){return Av(r,t)+bv(r,e)+wv(r,n)+Cv(r,i)}class ff extends pi{constructor(t=new Tt,e=new Tt,n=new Tt,i=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Tt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,i.x,s.x,a.x,o.x),Vs(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rv extends pi{constructor(t=new k,e=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new k){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,i.x,s.x,a.x,o.x),Vs(t,i.y,s.y,a.y,o.y),Vs(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class df extends pi{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pv extends pi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends pi{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Gs(t,i.x,s.x,a.x),Gs(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dv extends pi{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Gs(t,i.x,s.x,a.x),Gs(t,i.y,s.y,a.y),Gs(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mf extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(ju(o,l.x,c.x,u.x,h.x),ju(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Tt().fromArray(i))}return this}}var $l=Object.freeze({__proto__:null,ArcCurve:Sv,CatmullRomCurve3:Mv,CubicBezierCurve:ff,CubicBezierCurve3:Rv,EllipseCurve:Ic,LineCurve:df,LineCurve3:Pv,QuadraticBezierCurve:pf,QuadraticBezierCurve3:Dv,SplineCurve:mf});class Lv extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $l[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new $l[i.type]().fromJSON(i))}return this}}class Kl extends Lv{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new df(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new pf(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new ff(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i),new Tt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new mf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new Ic(t,e,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _f extends Kl{constructor(t){super(t),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Kl().fromJSON(i))}return this}}const Iv={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=gf(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(n&&(s=Bv(r,t,s,e)),r.length>80*e){o=c=r[0],l=u=r[1];for(let _=e;_<i;_+=e)h=r[_],f=r[_+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return na(s,a,e,o,l,d,0),a}};function gf(r,t,e,n,i){let s,a;if(i===Kv(r,t,e,n)>0)for(s=t;s<e;s+=n)a=Qu(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=Qu(s,r[s],r[s+1],a);return a&&zo(a,a.next)&&(ra(a),a=a.next),a}function Er(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(zo(e,e.next)||Pe(e.prev,e,e.next)===0)){if(ra(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function na(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Hv(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Nv(r,n,i,s):Uv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),ra(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Fv(Er(r),t,e),na(r,t,e,n,i,s,2)):a===2&&Ov(r,t,e,n,i,s):na(Er(r),t,e,n,i,s,1);break}}}function Uv(r){const t=r.prev,e=r,n=r.next;if(Pe(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=i>s?i>a?i:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Jr(i,o,s,l,a,c,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Nv(r,t,e,n){const i=r.prev,s=r,a=r.next;if(Pe(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=o>l?o>c?o:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Zl(d,_,t,e,n),T=Zl(g,p,t,e,n);let x=r.prevZ,S=r.nextZ;for(;x&&x.z>=m&&S&&S.z<=T;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&Jr(o,u,l,h,c,f,x.x,x.y)&&Pe(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=g&&S.y>=_&&S.y<=p&&S!==i&&S!==a&&Jr(o,u,l,h,c,f,S.x,S.y)&&Pe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&Jr(o,u,l,h,c,f,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=T;){if(S.x>=d&&S.x<=g&&S.y>=_&&S.y<=p&&S!==i&&S!==a&&Jr(o,u,l,h,c,f,S.x,S.y)&&Pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Fv(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!zo(i,s)&&vf(i,n,n.next,s)&&ia(i,s)&&ia(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ra(n),ra(n.next),n=r=s),n=n.next}while(n!==r);return Er(n)}function Ov(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qv(a,o)){let l=xf(a,o);a=Er(a,a.next),l=Er(l,l.next),na(a,t,e,n,i,s,0),na(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Bv(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=gf(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Xv(c));for(i.sort(zv),s=0;s<i.length;s++)e=kv(i[s],e);return e}function zv(r,t){return r.x-t.x}function kv(r,t){const e=Gv(r,t);if(!e)return t;const n=xf(e,r);return Er(n,n.next),Er(e,e.next)}function Gv(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Jr(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),ia(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&Vv(i,e)))&&(i=e,u=h)),e=e.next;while(e!==o);return i}function Vv(r,t){return Pe(r.prev,r,t.prev)<0&&Pe(t.next,r,r.next)<0}function Hv(r,t,e,n){let i=r;do i.z===0&&(i.z=Zl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Wv(i)}function Wv(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function Zl(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Xv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Jr(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function qv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Yv(r,t)&&(ia(r,t)&&ia(t,r)&&$v(r,t)&&(Pe(r.prev,r,t.prev)||Pe(r,t.prev,t))||zo(r,t)&&Pe(r.prev,r,r.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function zo(r,t){return r.x===t.x&&r.y===t.y}function vf(r,t,e,n){const i=qa(Pe(r,t,e)),s=qa(Pe(r,t,n)),a=qa(Pe(e,n,r)),o=qa(Pe(e,n,t));return!!(i!==s&&a!==o||i===0&&Xa(r,e,t)||s===0&&Xa(r,n,t)||a===0&&Xa(e,r,n)||o===0&&Xa(e,t,n))}function Xa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function qa(r){return r>0?1:r<0?-1:0}function Yv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&vf(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ia(r,t){return Pe(r.prev,r,r.next)<0?Pe(r,t,r.next)>=0&&Pe(r,r.prev,t)>=0:Pe(r,t,r.prev)<0||Pe(r,r.next,t)<0}function $v(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function xf(r,t){const e=new Jl(r.i,r.x,r.y),n=new Jl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Qu(r,t,e,n){const i=new Jl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ra(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Jl(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kv(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Hs{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Hs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];th(t),eh(n,t);let a=t.length;e.forEach(th);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,eh(n,e[l]);const o=Iv.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function th(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function eh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Nc extends Ji{constructor(t=new _f([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ti(i,3)),this.setAttribute("uv",new Ti(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Zv;let x,S=!1,R,w,E,P;m&&(x=m.getSpacedPoints(u),S=!0,f=!1,R=m.computeFrenetFrames(u,!1),w=new k,E=new k,P=new k),f||(p=0,d=0,_=0,g=0);const U=o.extractPoints(c);let v=U.shape;const y=U.holes;if(!Hs.isClockWise(v)){v=v.reverse();for(let j=0,b=y.length;j<b;j++){const at=y[j];Hs.isClockWise(at)&&(y[j]=at.reverse())}}const O=Hs.triangulateShape(v,y),G=v;for(let j=0,b=y.length;j<b;j++){const at=y[j];v=v.concat(at)}function Y(j,b,at){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(b,at)}const z=v.length,X=O.length;function V(j,b,at){let ut,rt,I;const At=j.x-b.x,vt=j.y-b.y,C=at.x-j.x,M=at.y-j.y,H=At*At+vt*vt,J=At*M-vt*C;if(Math.abs(J)>Number.EPSILON){const et=Math.sqrt(H),Z=Math.sqrt(C*C+M*M),bt=b.x-vt/et,lt=b.y+At/et,_t=at.x-M/Z,Xt=at.y+C/Z,ot=((_t-bt)*M-(Xt-lt)*C)/(At*M-vt*C);ut=bt+At*ot-j.x,rt=lt+vt*ot-j.y;const Et=ut*ut+rt*rt;if(Et<=2)return new Tt(ut,rt);I=Math.sqrt(Et/2)}else{let et=!1;At>Number.EPSILON?C>Number.EPSILON&&(et=!0):At<-Number.EPSILON?C<-Number.EPSILON&&(et=!0):Math.sign(vt)===Math.sign(M)&&(et=!0),et?(ut=-vt,rt=At,I=Math.sqrt(H)):(ut=At,rt=vt,I=Math.sqrt(H/2))}return new Tt(ut/I,rt/I)}const tt=[];for(let j=0,b=G.length,at=b-1,ut=j+1;j<b;j++,at++,ut++)at===b&&(at=0),ut===b&&(ut=0),tt[j]=V(G[j],G[at],G[ut]);const D=[];let st,Pt=tt.concat();for(let j=0,b=y.length;j<b;j++){const at=y[j];st=[];for(let ut=0,rt=at.length,I=rt-1,At=ut+1;ut<rt;ut++,I++,At++)I===rt&&(I=0),At===rt&&(At=0),st[ut]=V(at[ut],at[I],at[At]);D.push(st),Pt=Pt.concat(st)}for(let j=0;j<p;j++){const b=j/p,at=d*Math.cos(b*Math.PI/2),ut=_*Math.sin(b*Math.PI/2)+g;for(let rt=0,I=G.length;rt<I;rt++){const At=Y(G[rt],tt[rt],ut);ct(At.x,At.y,-at)}for(let rt=0,I=y.length;rt<I;rt++){const At=y[rt];st=D[rt];for(let vt=0,C=At.length;vt<C;vt++){const M=Y(At[vt],st[vt],ut);ct(M.x,M.y,-at)}}}const kt=_+g;for(let j=0;j<z;j++){const b=f?Y(v[j],Pt[j],kt):v[j];S?(E.copy(R.normals[0]).multiplyScalar(b.x),w.copy(R.binormals[0]).multiplyScalar(b.y),P.copy(x[0]).add(E).add(w),ct(P.x,P.y,P.z)):ct(b.x,b.y,0)}for(let j=1;j<=u;j++)for(let b=0;b<z;b++){const at=f?Y(v[b],Pt[b],kt):v[b];S?(E.copy(R.normals[j]).multiplyScalar(at.x),w.copy(R.binormals[j]).multiplyScalar(at.y),P.copy(x[j]).add(E).add(w),ct(P.x,P.y,P.z)):ct(at.x,at.y,h/u*j)}for(let j=p-1;j>=0;j--){const b=j/p,at=d*Math.cos(b*Math.PI/2),ut=_*Math.sin(b*Math.PI/2)+g;for(let rt=0,I=G.length;rt<I;rt++){const At=Y(G[rt],tt[rt],ut);ct(At.x,At.y,h+at)}for(let rt=0,I=y.length;rt<I;rt++){const At=y[rt];st=D[rt];for(let vt=0,C=At.length;vt<C;vt++){const M=Y(At[vt],st[vt],ut);S?ct(M.x,M.y+x[u-1].y,x[u-1].x+at):ct(M.x,M.y,h+at)}}}$(),nt();function $(){const j=i.length/3;if(f){let b=0,at=z*b;for(let ut=0;ut<X;ut++){const rt=O[ut];Dt(rt[2]+at,rt[1]+at,rt[0]+at)}b=u+p*2,at=z*b;for(let ut=0;ut<X;ut++){const rt=O[ut];Dt(rt[0]+at,rt[1]+at,rt[2]+at)}}else{for(let b=0;b<X;b++){const at=O[b];Dt(at[2],at[1],at[0])}for(let b=0;b<X;b++){const at=O[b];Dt(at[0]+z*u,at[1]+z*u,at[2]+z*u)}}n.addGroup(j,i.length/3-j,0)}function nt(){const j=i.length/3;let b=0;dt(G,b),b+=G.length;for(let at=0,ut=y.length;at<ut;at++){const rt=y[at];dt(rt,b),b+=rt.length}n.addGroup(j,i.length/3-j,1)}function dt(j,b){let at=j.length;for(;--at>=0;){const ut=at;let rt=at-1;rt<0&&(rt=j.length-1);for(let I=0,At=u+p*2;I<At;I++){const vt=z*I,C=z*(I+1),M=b+ut+vt,H=b+rt+vt,J=b+rt+C,et=b+ut+C;Ct(M,H,J,et)}}}function ct(j,b,at){l.push(j),l.push(b),l.push(at)}function Dt(j,b,at){zt(j),zt(b),zt(at);const ut=i.length/3,rt=T.generateTopUV(n,i,ut-3,ut-2,ut-1);Bt(rt[0]),Bt(rt[1]),Bt(rt[2])}function Ct(j,b,at,ut){zt(j),zt(b),zt(ut),zt(b),zt(at),zt(ut);const rt=i.length/3,I=T.generateSideWallUV(n,i,rt-6,rt-3,rt-2,rt-1);Bt(I[0]),Bt(I[1]),Bt(I[3]),Bt(I[1]),Bt(I[2]),Bt(I[3])}function zt(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function Bt(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jv(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new $l[i.type]().fromJSON(i)),new Nc(n,t.options)}}const Zv={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new Tt(s,a),new Tt(o,l),new Tt(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],_=t[i*3+2],g=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Tt(a,1-l),new Tt(c,1-h),new Tt(f,1-_),new Tt(g,1-m)]:[new Tt(o,1-l),new Tt(u,1-h),new Tt(d,1-_),new Tt(p,1-m)]}};function Jv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class jv extends Sa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sf extends Sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const wl=new we,nh=new k,ih=new k;class Qv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rh=new we,ws=new k,Cl=new k;class tx extends Qv{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),Cl.copy(n.position),Cl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cl),n.updateMatrixWorld(),i.makeTranslation(-ws.x,-ws.y,-ws.z),rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh)}}class Mf extends Sf{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ex extends Sf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);function Si(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sa={duration:.5,overwrite:!1,delay:0},Fc,Qe,be,Yn=1e8,Se=1/Yn,jl=Math.PI*2,nx=jl/4,ix=0,Ef=Math.sqrt,rx=Math.cos,sx=Math.sin,Ze=function(t){return typeof t=="string"},Le=function(t){return typeof t=="function"},bi=function(t){return typeof t=="number"},Oc=function(t){return typeof t>"u"},di=function(t){return typeof t=="object"},Mn=function(t){return t!==!1},Bc=function(){return typeof window<"u"},Ya=function(t){return Le(t)||Ze(t)},Tf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,ax=/random\([^)]+\)/g,ox=/,\s*/g,sh=/(?:-?\.?\d|\.)+/gi,Af=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bf=/[+-]=-?[.\d]+/,lx=/[^,'"\[\]\s]+/gi,cx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,ri,Ql,zc,kn={},yo={},wf,Cf=function(t){return(yo=fs(t,kn))&&An},kc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},aa=function(t,e){return!e&&console.warn(t)},Rf=function(t,e){return t&&(kn[t]=e)&&yo&&(yo[t]=e)||kn},oa=function(){return 0},ux={suppressEvents:!0,isStart:!0,kill:!1},lo={suppressEvents:!0,kill:!1},hx={suppressEvents:!0},Gc={},Vi=[],tc={},Pf,Ln={},Pl={},ah=30,co=[],Vc="",Hc=function(t){var e=t[0],n,i;if(di(e)||Le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=co.length;i--&&!co[i].targetTest(e););n=co[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new jf(t[i],n)))||t.splice(i,1);return t},mr=function(t){return t._gsap||Hc($n(t))[0]._gsap},Df=function(t,e,n){return(n=t[e])&&Le(n)?t[e]():Oc(n)&&t.getAttribute&&t.getAttribute(e)||n},yn=function(t,e){return(t=t.split(",")).forEach(e)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},Ce=function(t){return Math.round(t*1e7)/1e7||0},ns=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},fx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Eo=function(){var t=Vi.length,e=Vi.slice(0),n,i;for(tc={},Vi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wc=function(t){return!!(t._initted||t._startAt||t.add)},Lf=function(t,e,n,i){Vi.length&&!Qe&&Eo(),t.render(e,n,!!(Qe&&e<0&&Wc(t))),Vi.length&&!Qe&&Eo()},If=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(lx).length<2?e:Ze(t)?t.trim():t},Uf=function(t){return t},Gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},dx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},fs=function(t,e){for(var n in e)t[n]=e[n];return t},oh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=di(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},To=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ws=function(t){var e=t.parent||Re,n=t.keyframes?dx(ln(t.keyframes)):Gn;if(Mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},px=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Nf=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ko=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},qi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},_r=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},mx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ec=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(lo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},_x=function r(t){return!t||t._ts&&r(t.parent)},lh=function(t){return t._repeat?ds(t._tTime,t=t.duration()+t._rDelay)*t:0},ds=function(t,e){var n=Math.floor(t=Ce(t/e));return t&&n===t?n-1:n},Ao=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Go=function(t){return t._end=Ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Vo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Go(t),n._dirty||_r(n,t)),t},Ff=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ao(t.rawTime(),e),(!e._dur||ya(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),_r(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},oi=function(t,e,n,i){return e.parent&&qi(e),e._start=Ce((bi(n)?n:n||t!==Re?Wn(t,n,e):t._time)+e._delay),e._end=Ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Nf(t,e,"_first","_last",t._sort?"_start":0),nc(e)||(t._recent=e),i||Ff(t,e),t._ts<0&&Vo(t,t._tTime),t},Of=function(t,e){return(kn.ScrollTrigger||kc("scrollTrigger",e))&&kn.ScrollTrigger.create(e,t)},Bf=function(t,e,n,i,s){if(qc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Pf!==Nn.frame)return Vi.push(t),t._lazy=[s,i],1},gx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},nc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},vx=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&gx(t)&&!(!t._initted&&nc(t))||(t._ts<0||t._dp._ts<0)&&!nc(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=ya(0,t._tDur,e),u=ds(l,o),t._yoyo&&u&1&&(a=1-a),u!==ds(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Qe||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Bf(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ec(t,e,n,!0),t._onUpdate&&!n&&On(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&On(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&qi(t,1),!n&&!Qe&&(On(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},xx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ps=function(t,e,n,i){var s=t._repeat,a=Ce(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ce(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Vo(t,t._tTime=t._tDur*o),t.parent&&Go(t),n||_r(t.parent,t),t},ch=function(t){return t instanceof vn?_r(t):ps(t,t._dur)},Sx={_start:0,endTime:oa,totalDuration:oa},Wn=function r(t,e,n){var i=t.labels,s=t._recent||Sx,a=t.duration()>=Yn?s.endTime(!1):t._dur,o,l,c;return Ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Xs=function(t,e,n){var i=bi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;a.immediateRender=Mn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ke(e[0],a,e[s+1])},ji=function(t,e){return t||t===0?e(t):e},ya=function(t,e,n){return n<t?t:n>e?e:n},an=function(t,e){return!Ze(t)||!(e=cx.exec(t))?"":e[1]},Mx=function(t,e,n){return ji(n,function(i){return ya(t,e,i)})},ic=[].slice,zf=function(t,e){return t&&di(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&di(t[0]))&&!t.nodeType&&t!==ri},yx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ze(i)&&!e||zf(i,1)?(s=n).push.apply(s,$n(i)):n.push(i)})||n},$n=function(t,e,n){return be&&!e&&be.selector?be.selector(t):Ze(t)&&!n&&(Ql||!ms())?ic.call((e||zc).querySelectorAll(t),0):ln(t)?yx(t,n):zf(t)?ic.call(t,0):t?[t]:[]},rc=function(t){return t=$n(t)[0]||aa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return $n(e,n.querySelectorAll?n:n===t?aa("Invalid scope")||zc.createElement("div"):t)}},kf=function(t){return t.sort(function(){return .5-Math.random()})},Gf=function(t){if(Le(t))return t;var e=di(t)?t:{each:t},n=gr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Ze(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||e).length,p=a[g],m,T,x,S,R,w,E,P,U;if(!p){if(U=e.grid==="auto"?0:(e.grid||[1,Yn])[1],!U){for(E=-Yn;E<(E=_[U++].getBoundingClientRect().left)&&U<g;);U<g&&U--}for(p=a[g]=[],m=l?Math.min(U,g)*u-.5:i%U,T=U===Yn?0:l?g*h/U-.5:i/U|0,E=0,P=Yn,w=0;w<g;w++)x=w%U-m,S=T-(w/U|0),p[w]=R=c?Math.abs(c==="y"?S:x):Ef(x*x+S*S),R>E&&(E=R),R<P&&(P=R);i==="random"&&kf(p),p.max=E-P,p.min=P,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(U>g?g-1:c?c==="y"?g/U:U:Math.max(U,g/U))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=an(e.amount||e.each)||0,n=n&&g<0?Nx(n):n}return g=(p[f]-p.min)/p.max||0,Ce(p.b+(n?n(g):g)*p.v)+p.u}},sc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(bi(n)?0:an(n))}},Vf=function(t,e){var n=ln(t),i,s;return!n&&di(t)&&(i=n=t.radius||Yn,t.values?(t=$n(t.values),(s=!bi(t[0]))&&(i*=i)):t=sc(t.increment)),ji(e,n?Le(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Yn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-o,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||bi(a)?u:u+an(a)}:sc(t))},Hf=function(t,e,n,i){return ji(ln(t)?!e:n===!0?!!(n=0):!i,function(){return ln(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ex=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Tx=function(t,e){return function(n){return t(parseFloat(n))+(e||an(n))}},Ax=function(t,e,n){return Xf(t,e,0,1,n)},Wf=function(t,e,n){return ji(n,function(i){return t[~~e(i)]})},bx=function r(t,e,n){var i=e-t;return ln(t)?Wf(t,r(0,t.length),e):ji(n,function(s){return(i+(s-t)%i)%i+t})},wx=function r(t,e,n){var i=e-t,s=i*2;return ln(t)?Wf(t,r(0,t.length-1),e):ji(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},la=function(t){return t.replace(ax,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ox);return Hf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Xf=function(t,e,n,i,s){var a=e-t,o=i-n;return ji(s,function(l){return n+((l-t)/a*o||0)})},Cx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ze(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(ln(t)&&!ln(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else i||(t=fs(ln(t)?[]:{},t));if(!u){for(l in e)Xc.call(o,t,l,"get",e[l]);s=function(_){return Kc(_,o)||(a?t.p:t)}}}return ji(n,s)},uh=function(t,e,n){var i=t.labels,s=Yn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},On=function(t,e,n){var i=t.vars,s=i[e],a=be,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Vi.length&&Eo(),o&&(be=o),u=l?s.apply(c,l):s.call(c),be=a,u},Us=function(t){return qi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&On(t,"onInterrupt"),t},Qr,qf=[],Yf=function(t){if(t)if(t=!t.name&&t.default||t,Bc()||t.headless){var e=t.name,n=Le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:oa,render:Kc,add:Xc,kill:Xx,modifier:Wx,rawVars:0},a={targetTest:0,get:0,getSetter:$c,aliases:{},register:0};if(ms(),t!==i){if(Ln[e])return;Gn(i,Gn(To(t,s),a)),fs(i.prototype,fs(s,To(t,a))),Ln[i.prop=e]=i,t.targetTest&&(co.push(i),Gc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Rf(e,i),t.register&&t.register(An,i,En)}else qf.push(t)},xe=255,Ns={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},Dl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},$f=function(t,e,n){var i=t?bi(t)?[t>>16,t>>8&xe,t&xe]:0:Ns.black,s,a,o,l,c,u,h,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ns[t])i=Ns[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(sh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Dl(l+1/3,s,a),i[1]=Dl(l,s,a),i[2]=Dl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Af),n&&i.length<4&&(i[3]=1),i}else i=t.match(sh)||Ns.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/xe,a=i[1]/xe,o=i[2]/xe,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Kf=function(t){var e=[],n=[],i=-1;return t.split(Hi).forEach(function(s){var a=s.match(jr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},hh=function(t,e,n){var i="",s=(t+i).match(Hi),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=$f(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Kf(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Hi,"1").split(jr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Hi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Hi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ns)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Rx=/hsl[a]?\(/,Zf=function(t){var e=t.join(" "),n;if(Hi.lastIndex=0,Hi.test(e))return n=Rx.test(e),t[1]=hh(t[1],n),t[0]=hh(t[0],n,Kf(t[1])),!0},ca,Nn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,T=p===!0,x,S,R,w;if((m>t||m<0)&&(n+=m-e),i+=m,R=i-n,x=R-a,(x>0||T)&&(w=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,a+=x+(x>=s?4:s-x),S=1),T||(l=c(g)),S)for(d=0;d<o.length;d++)o[d](R,f,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){wf&&(!Ql&&Bc()&&(ri=Ql=window,zc=ri.document||{},kn.gsap=An,(ri.gsapVersions||(ri.gsapVersions=[])).push(An.version),Cf(yo||ri.GreenSockGlobals||!ri.gsap&&ri||{}),qf.forEach(Yf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},ca=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ca=0,c=oa},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,T){var x=m?function(S,R,w,E){p(S,R,w,E),h.remove(x)}:p;return h.remove(p),o[T?"unshift":"push"](x),ms(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),ms=function(){return!ca&&Nn.wake()},oe={},Px=/^[\d.\-M][\d.\-,\s]/,Dx=/["']/g,Lx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Dx,"").trim():+c,i=l.substr(o+1).trim();return e},Ix=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ux=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Lx(e[1])]:Ix(t).split(",").map(If)):oe._CE&&Px.test(t)?oe._CE("",t):n},Nx=function(t){return function(e){return 1-t(1-e)}},gr=function(t,e){return t&&(Le(t)?t:oe[t]||Ux(t))||e},wr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return yn(t,function(o){oe[o]=kn[o]=s,oe[a=o.toLowerCase()]=n;for(var l in s)oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[o+"."+l]=s[l]}),s},Jf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ll=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/jl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*sx((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Jf(o);return s=jl/s,l.config=function(c,u){return r(t,c,u)},l},Il=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Jf(n);return i.config=function(s){return r(t,s)},i};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;wr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;wr("Elastic",Ll("in"),Ll("out"),Ll());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};wr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);wr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});wr("Circ",function(r){return-(Ef(1-r*r)-1)});wr("Sine",function(r){return r===1?1:-rx(r*nx)+1});wr("Back",Il("in"),Il("out"),Il());oe.SteppedEase=oe.steps=kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Se;return function(o){return((i*ya(0,a,o)|0)+s)*n}}};sa.ease=oe["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vc+=r+","+r+"Params,"});var jf=function(t,e){this.id=ix++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Df,this.set=e?e.getSetter:$c},ua=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ps(this,+e.duration,1,1),this.data=e.data,be&&(this._ctx=be,be.data.push(this)),ca||Nn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vo(this,n),!s._dp||s.parent||Ff(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ds(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ao(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(ya(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Go(this),mx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&oi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ao(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=hx);var i=Qe;return Qe=n,Wc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ch(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ch(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Wn(this,n),Mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Le(n)?n:Uf,l=function(){var u=i.then;i.then=null,s&&s(),Le(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Us(this)},r}();Gn(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var vn=function(r){yf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),Re&&oi(n.parent||Re,Si(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Of(Si(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Xs(0,arguments,this),this},e.from=function(i,s,a){return Xs(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Xs(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Ws(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,Wn(this,a),1),this},e.call=function(i,s,a){return oi(this,ke.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ke(i,a,Wn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ws(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Ws(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ce(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,T,x,S,R,w,E;if(this!==Re&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,x=this._ts,m=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Ce(u%p),u===l?(g=this._repeat,f=c):(R=Ce(u/p),g=~~R,g&&g===R&&(f=c,g--),f>c&&(f=c)),R=ds(this._tTime,p),!o&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),w&&g&1&&(f=c-f,E=1),g!==R&&!this._lock){var P=w&&R&1,U=P===(w&&g&1);if(g<R&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Ce(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,U&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=xx(this,Ce(o),Ce(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!R&&(On(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){T=0,_&&(u+=this._zTime=-Se);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||Qe&&Wc(d)),f!==this._time||!this._ts&&!m){T=0,_&&(u+=this._zTime=v?-Se:Se);break}}d=_}}if(T&&!s&&(this.pause(),T.render(f>=o?0:-Se)._zTime=f>=o?1:-1,this._ts))return this._start=S,Go(this),this.render(i,s,a);this._onUpdate&&!s&&On(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(On(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(bi(s)||(s=Wn(this,s,i)),!(i instanceof ua)){if(ln(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ze(i))return this.addLabel(i,s);if(Le(i))i=ke.delayedCall(0,i);else return this}return this!==i?oi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Yn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ke?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ze(i)?this.removeLabel(i):Le(i)?this.killTweensOf(i):(i.parent===this&&ko(this,i),i===this._recent&&(this._recent=this._last),_r(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ce(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Wn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ke.delayedCall(0,s||oa,a);return o.data="isPause",this._hasPause=1,oi(this,o,Wn(this,i))},e.removePause=function(i){var s=this._first;for(i=Wn(this,i);s;)s._start===i&&s.data==="isPause"&&qi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Oi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=$n(i),l=this._first,c=bi(s),u;l;)l instanceof ke?fx(l._targets,o)&&(c?(!Oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Wn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=ke.to(a,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Se,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ps(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Gn({startAt:{time:Wn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),uh(this,Wn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),uh(this,Wn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ce(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return _r(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_r(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Yn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,oi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Ce(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ps(a,a===Re&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Re._ts&&(Lf(Re,Ao(i,Re)),Pf=Nn.frame),Nn.frame>=ah){ah+=zn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&zn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},t}(ua);Gn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fx=function(t,e,n,i,s,a,o){var l=new En(this._pt,t,e,0,1,rd,null,s),c=0,u=0,h,f,d,_,g,p,m,T;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=la(i)),a&&(T=[n,i],a(T,t,e),n=T[0],i=T[1]),f=n.match(Rl)||[];h=Rl.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ns(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(bf.test(i)||m)&&(l.e=0),this._pt=l,l},Xc=function(t,e,n,i,s,a,o,l,c,u){Le(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:Le(h)?c?t[e.indexOf("set")||!Le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Le(h)?c?Gx:nd:Yc,_;if(Ze(i)&&(~i.indexOf("random(")&&(i=la(i)),i.charAt(1)==="="&&(_=ns(f,i)+(an(f)||0),(_||_===0)&&(i=_))),!u||f!==i||ac)return!isNaN(f*i)&&i!==""?(_=new En(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?Hx:id,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!h&&!(e in t)&&kc(e,i),Fx.call(this,t,e,f,i,d,l||zn.stringFilter,c))},Ox=function(t,e,n,i,s){if(Le(t)&&(t=qs(t,s,e,n,i)),!di(t)||t.style&&t.nodeType||ln(t)||Tf(t))return Ze(t)?qs(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=qs(t[o],s,e,n,i);return a},Qf=function(t,e,n,i,s,a){var o,l,c,u;if(Ln[t]&&(o=new Ln[t]).init(s,o.rawVars?e[t]:Ox(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new En(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Qr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Oi,ac,qc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,T=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Fc,S=t.timeline,R=i.easeReverse||h,w,E,P,U,v,y,L,O,G,Y,z,X,V;if(S&&(!f||!s)&&(s="none"),t._ease=gr(s,sa.ease),t._rEase=R&&(gr(R)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||f&&!i.stagger){if(O=p[0]?mr(p[0]).harness:0,X=O&&i[O.prop],w=To(i,Gc),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?lo:ux),g._lazy=0),a){if(qi(t._startAt=ke.set(p,Gn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return On(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!o&&!d)&&t._startAt.revert(lo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),P=Gn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Mn(l),immediateRender:o,stagger:0,parent:m},w),X&&(P[O.prop]=X),qi(t._startAt=ke.set(p,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(lo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Mn(l)||l&&!_,E=0;E<p.length;E++){if(v=p[E],L=v._gsap||Hc(p)[E]._gsap,t._ptLookup[E]=Y={},tc[L.id]&&Vi.length&&Eo(),z=T===p?E:T.indexOf(v),O&&(G=new O).init(v,X||w,t,z,T)!==!1&&(t._pt=U=new En(t._pt,v,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(tt){Y[tt]=U}),G.priority&&(y=1)),!O||X)for(P in w)Ln[P]&&(G=Qf(P,w,t,z,v,T))?G.priority&&(y=1):Y[P]=U=Xc.call(t,v,P,"get",w[P],z,T,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),x&&t._pt&&(Oi=t,Re.killTweensOf(v,Y,t.globalTime(e)),V=!t.parent,Oi=0),t._pt&&l&&(tc[L.id]=1)}y&&sd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,f&&e<=0&&S.render(Yn,!0,!0)},Bx=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return ac=1,t.vars[e]="+=0",qc(t,o),ac=0,l?aa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Fe(n)+an(h.e)),h.b&&(h.b=u.s+an(h.b))},zx=function(t,e){var n=t[0]?mr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=fs({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},kx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(ln(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},qs=function(t,e,n,i,s){return Le(t)?t.call(e,n,i,s):Ze(t)&&~t.indexOf("random(")?la(t):t},td=Vc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ed={};yn(td+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ed[r]=1});var ke=function(r){yf(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ws(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Re,T=(ln(n)||Tf(n)?bi(n[0]):"length"in i)?[n]:$n(n),x,S,R,w,E,P,U,v;if(o._targets=T.length?Hc(T):aa("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Ya(c)||Ya(u)){i=o.vars;var y=i.easeReverse||i.yoyoEase;if(x=o.timeline=new vn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:T}),x.kill(),x.parent=x._dp=Si(o),x._start=0,f||Ya(c)||Ya(u)){if(w=T.length,U=f&&Gf(f),di(f))for(E in f)~td.indexOf(E)&&(v||(v={}),v[E]=f[E]);for(S=0;S<w;S++)R=To(i,ed),R.stagger=0,y&&(R.easeReverse=y),v&&fs(R,v),P=T[S],R.duration=+qs(c,Si(o),S,P,T),R.delay=(+qs(u,Si(o),S,P,T)||0)-o._delay,!f&&w===1&&R.delay&&(o._delay=u=R.delay,o._start+=u,R.delay=0),x.to(P,R,U?U(S,P,T):0),x._ease=oe.none;x.duration()?c=u=0:o.timeline=0}else if(_){Ws(Gn(x.vars.defaults,{ease:"none"})),x._ease=gr(_.ease||i.ease||"none");var L=0,O,G,Y;if(ln(_))_.forEach(function(z){return x.to(T,z,">")}),x.duration();else{R={};for(E in _)E==="ease"||E==="easeEach"||kx(E,_[E],R,_.easeEach);for(E in R)for(O=R[E].sort(function(z,X){return z.t-X.t}),L=0,S=0;S<O.length;S++)G=O[S],Y={ease:G.e,duration:(G.t-(S?O[S-1].t:0))/100*c},Y[E]=G.v,x.to(T,Y,L),L+=Y.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!Fc&&(Oi=Si(o),Re.killTweensOf(T),Oi=0),oi(m,Si(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Ce(m._time)&&Mn(h)&&_x(Si(o))&&m.data!=="nested")&&(o._tTime=-Se,o.render(Math.max(0,-u)||0)),p&&Of(Si(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Se&&!u?l:i<Se?0:i,f,d,_,g,p,m,T,x;if(!c)vx(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Ce(h%g),h===l?(_=this._repeat,f=c):(p=Ce(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=ds(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=h,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Ce(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Bf(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var R=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=R?(S?-1:1)/R:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(f/c);if(this._from&&(this.ratio=T=1-T),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(On(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ec(this,i,s,a),On(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ec(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qi(this,1),!s&&!(u&&!o)&&(h||o||m)&&(On(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ca||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||qc(this,c),u=this._ease(c/this._dur),Bx(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Vo(this,0),this.parent||Nf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Us(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Oi&&Oi.vars.overwrite!==!0)._first||Us(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?$n(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&px(o,l))return s==="all"&&(this._pt=0),Us(this);for(h=this._op=this._op||[],s!=="all"&&(Ze(s)&&(g={},yn(s,function(T){return g[T]=1}),s=g),s=zx(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&ko(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Us(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Xs(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Xs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Re.killTweensOf(i,s,a)},t}(ua);Gn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new vn,e=ic.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Yc=function(t,e,n){return t[e]=n},nd=function(t,e,n){return t[e](n)},Gx=function(t,e,n,i){return t[e](i.fp,n)},Vx=function(t,e,n){return t.setAttribute(e,n)},$c=function(t,e){return Le(t[e])?nd:Oc(t[e])&&t.setAttribute?Vx:Yc},id=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Hx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},rd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Kc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Wx=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Xx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ko(this,e,"_pt"):e.dep||(n=1),e=i;return!n},qx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},sd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},En=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||id,this.d=l||this,this.set=c||Yc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=qx,this.m=n,this.mt=s,this.tween=i},r}();yn(Vc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Gc[r]=1});kn.TweenMax=kn.TweenLite=ke;kn.TimelineLite=kn.TimelineMax=vn;Re=new vn({sortChildren:!1,defaults:sa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Zf;var vr=[],uo={},Yx=[],fh=0,$x=0,Ul=function(t){return(uo[t]||Yx).map(function(e){return e()})},oc=function(){var t=Date.now(),e=[];t-fh>2&&(Ul("matchMediaInit"),vr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ri.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ul("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fh=t,Ul("matchMedia"))},ad=function(){function r(e,n){this.selector=n&&rc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$x++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Le(n)&&(s=i,i=n,n=Le);var a=this,o=function(){var c=be,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=rc(s)),be=a,h=i.apply(a,arguments),Le(h)&&a._r.push(h),be=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Le?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=be;be=null,n(this),be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=vr.length;a--;)vr[a].id===this.id&&vr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Kx=function(){function r(e){this.contexts=[],this.scope=e,be&&be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){di(n)||(n={matches:n});var a=new ad(0,s||this.scope),o=a.conditions={},l,c,u;be&&!a.selector&&(a.selector=be.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ri.matchMedia(n[c]),l&&(vr.indexOf(a)<0&&vr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(oc):l.addEventListener("change",oc)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),bo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Yf(i)})},timeline:function(t){return new vn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ze(t)&&(t=$n(t)[0]);var s=mr(t||{}).get,a=n?Uf:If;return n==="native"&&(n=""),t&&(e?a((Ln[e]&&Ln[e].get||s)(t,e,n,i)):function(o,l,c){return a((Ln[o]&&Ln[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=$n(t),t.length>1){var i=t.map(function(u){return An.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Ln[e],o=mr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Qr._pt=0,h.init(t,n?u+n:u,Qr,0,[t]),h.render(1,h),Qr._pt&&Kc(1,Qr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=An.to(t,Gn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=gr(t.ease,sa.ease)),oh(sa,t||{})},config:function(t){return oh(zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ln[o]&&!kn[o]&&aa(e+" effect requires "+o+" plugin.")}),Pl[e]=function(o,l,c){return n($n(o),Gn(l||{},s),c)},a&&(vn.prototype[e]=function(o,l,c){return this.add(Pl[e](o,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=gr(e)},parseEase:function(t,e){return arguments.length?gr(t,e):oe},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new vn(t),i,s;for(n.smoothChildTiming=Mn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&oi(n,i,i._start-i._delay),i=s;return oi(Re,n,0),n},context:function(t,e){return t?new ad(t,e):be},matchMedia:function(t){return new Kx(t)},matchMediaRefresh:function(){return vr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||oc()},addEventListener:function(t,e){var n=uo[t]||(uo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=uo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:bx,wrapYoyo:wx,distribute:Gf,random:Hf,snap:Vf,normalize:Ax,getUnit:an,clamp:Mx,splitColor:$f,toArray:$n,selector:rc,mapRange:Xf,pipe:Ex,unitize:Tx,interpolate:Cx,shuffle:kf},install:Cf,effects:Pl,ticker:Nn,updateRoot:vn.updateRoot,plugins:Ln,globalTimeline:Re,core:{PropTween:En,globals:Rf,Tween:ke,Timeline:vn,Animation:ua,getCache:mr,_removeLinkedListItem:ko,reverting:function(){return Qe},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return Fc=t}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return bo[r]=ke[r]});Nn.add(vn.updateRoot);Qr=bo.to({},{duration:0});var Zx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Jx=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Zx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Nl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ze(s)&&(l={},yn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Jx(o,s)}}}},An=bo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Nl("roundProps",sc),Nl("modifiers"),Nl("snap",Vf))||bo;ke.version=vn.version=An.version="3.15.0";wf=1;Bc()&&ms();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dh,Bi,is,Zc,dr,ph,Jc,jx=function(){return typeof window<"u"},wi={},cr=180/Math.PI,rs=Math.PI/180,Vr=Math.atan2,mh=1e8,jc=/([A-Z])/g,Qx=/(left|right|width|margin|padding|x)/i,tS=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},eS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},nS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},iS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},rS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},od=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ld=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},sS=function(t,e,n){return t.style[e]=n},aS=function(t,e,n){return t.style.setProperty(e,n)},oS=function(t,e,n){return t._gsap[e]=n},lS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},cS=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},uS=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},De="transform",Tn=De+"Origin",hS=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in wi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=li[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Mi(i,o)}):this.tfm[t]=a.x?a[t]:Mi(i,t),t===Tn&&(this.tfm.zOrigin=a.zOrigin);else return li.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(De)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Tn,e,"")),t=De}(s||e)&&this.props.push(t,e,s[t])},cd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},fS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(jc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Jc(),(!s||!s.isStart)&&!n[De]&&(cd(n),i.zOrigin&&n[Tn]&&(n[Tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ud=function(t,e){var n={target:t,props:[],revert:fS,save:hS};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},hd,cc=function(t,e){var n=Bi.createElementNS?Bi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Bi.createElement(t);return n&&n.style?n:Bi.createElement(t)},Bn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(jc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,_s(e)||e,1)||""},_h="O,Moz,ms,Ms,Webkit".split(","),_s=function(t,e,n){var i=e||dr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(_h[a]+t in s););return a<0?null:(a===3?"ms":a>=0?_h[a]:"")+t},uc=function(){jx()&&window.document&&(dh=window,Bi=dh.document,is=Bi.documentElement,dr=cc("div")||{style:{}},cc("div"),De=_s(De),Tn=De+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hd=!!_s("perspective"),Jc=An.core.reverting,Zc=1)},gh=function(t){var e=t.ownerSVGElement,n=cc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),is.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),is.removeChild(n),s},vh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},fd=function(t){var e,n;try{e=t.getBBox()}catch{e=gh(t),n=1}return e&&(e.width||e.height)||n||(e=gh(t)),e&&!e.width&&!e.x&&!e.y?{x:+vh(t,["x","cx","x1"])||0,y:+vh(t,["y","cy","y1"])||0,width:0,height:0}:e},dd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&fd(t))},Yi=function(t,e){if(e){var n=t.style,i;e in wi&&e!==Tn&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(jc,"-$1").toLowerCase())):n.removeAttribute(e)}},zi=function(t,e,n,i,s,a){var o=new En(t._pt,e,n,0,1,a?ld:od);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},xh={deg:1,rad:1,turn:1},dS={grid:1,flex:1},$i=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=dr.style,l=Qx.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===a||!s||xh[i]||xh[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&dd(t),(d||a==="%")&&(wi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Fe(d?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Bi||!g.appendChild)&&(g=Bi.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Nn.time&&!p.uncache)return Fe(s/p.width*h);if(d&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=h+i,_=t[u],T?t.style[e]=T:Yi(t,e)}else(d||a==="%")&&!dS[Bn(g,"display")]&&(o.position=Bn(t,"position")),g===t&&(o.position="static"),g.appendChild(dr),_=dr[u],g.removeChild(dr),o.position="absolute";return l&&d&&(p=mr(g),p.time=Nn.time,p.width=g[u]),Fe(f?_*s/h:_&&s?h/_*s:0)},Mi=function(t,e,n,i){var s;return Zc||uc(),e in li&&e!=="transform"&&(e=li[e],~e.indexOf(",")&&(e=e.split(",")[0])),wi[e]&&e!=="transform"?(s=fa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Co(Bn(t,Tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=wo[e]&&wo[e](t,e,n)||Bn(t,e)||Df(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?$i(t,e,s,n)+n:s},pS=function(t,e,n,i){if(!n||n==="none"){var s=_s(e,t,1),a=s&&Bn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Bn(t,"borderTopColor"))}var o=new En(this._pt,t.style,e,0,1,rd),l=0,c=0,u,h,f,d,_,g,p,m,T,x,S,R;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Bn(t,e)||i,g?t.style[e]=g:Yi(t,e)),u=[n,i],Zf(u),n=u[0],i=u[1],f=n.match(jr)||[],R=i.match(jr)||[],R.length){for(;h=jr.exec(i);)p=h[0],T=i.substring(l,h.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=ns(d,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=jr.lastIndex-x.length,x||(x=x||zn.units[e]||S,l===i.length&&(i+=x,o.e+=x)),S!==x&&(d=$i(t,e,g,x)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?ld:od;return bf.test(i)&&(o.e=0),this._pt=o,o},Sh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mS=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Sh[n]||n,e[1]=Sh[i]||i,e.join(" ")},_S=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],wi[o]&&(l=1,o=o==="transformOrigin"?Tn:De),Yi(n,o);l&&(Yi(n,De),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fa(n,1),a.uncache=1,cd(i)))}},wo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new En(t._pt,e,n,0,0,_S);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ha=[1,0,0,1,0,0],pd={},md=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Mh=function(t){var e=Bn(t,De);return md(e)?ha:e.substr(7).match(Af).map(Fe)},Qc=function(t,e){var n=t._gsap||mr(t),i=t.style,s=Mh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ha:s):(s===ha&&!t.offsetParent&&t!==is&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,is.appendChild(t)),s=Mh(t),l?i.display=l:Yi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):is.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hc=function(t,e,n,i,s,a){var o=t._gsap,l=s||Qc(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],T=l[5],x=e.split(" "),S=parseFloat(x[0])||0,R=parseFloat(x[1])||0,w,E,P,U;n?l!==ha&&(E=d*p-_*g)&&(P=S*(p/E)+R*(-g/E)+(g*T-p*m)/E,U=S*(-_/E)+R*(d/E)-(d*T-_*m)/E,S=P,R=U):(w=fd(t),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),R=w.y+(~(x[1]||x[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&o.smooth?(m=S-c,T=R-u,o.xOffset=h+(m*d+T*g)-m,o.yOffset=f+(m*_+T*p)-T):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=R,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Tn]="0px 0px",a&&(zi(a,o,"xOrigin",c,S),zi(a,o,"yOrigin",u,R),zi(a,o,"xOffset",h,o.xOffset),zi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+R)},fa=function(t,e){var n=t._gsap||new jf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Bn(t,Tn)||"0",u,h,f,d,_,g,p,m,T,x,S,R,w,E,P,U,v,y,L,O,G,Y,z,X,V,tt,D,st,Pt,kt,$,nt;return u=h=f=g=p=m=T=x=S=0,d=_=1,n.svg=!!(t.getCTM&&dd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),i.scale=i.rotate=i.translate="none"),E=Qc(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),hc(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),R=n.xOrigin||0,w=n.yOrigin||0,E!==ha&&(y=E[0],L=E[1],O=E[2],G=E[3],u=Y=E[4],h=z=E[5],E.length===6?(d=Math.sqrt(y*y+L*L),_=Math.sqrt(G*G+O*O),g=y||L?Vr(L,y)*cr:0,T=O||G?Vr(O,G)*cr+g:0,T&&(_*=Math.abs(Math.cos(T*rs))),n.svg&&(u-=R-(R*y+w*O),h-=w-(R*L+w*G))):(nt=E[6],kt=E[7],D=E[8],st=E[9],Pt=E[10],$=E[11],u=E[12],h=E[13],f=E[14],P=Vr(nt,Pt),p=P*cr,P&&(U=Math.cos(-P),v=Math.sin(-P),X=Y*U+D*v,V=z*U+st*v,tt=nt*U+Pt*v,D=Y*-v+D*U,st=z*-v+st*U,Pt=nt*-v+Pt*U,$=kt*-v+$*U,Y=X,z=V,nt=tt),P=Vr(-O,Pt),m=P*cr,P&&(U=Math.cos(-P),v=Math.sin(-P),X=y*U-D*v,V=L*U-st*v,tt=O*U-Pt*v,$=G*v+$*U,y=X,L=V,O=tt),P=Vr(L,y),g=P*cr,P&&(U=Math.cos(P),v=Math.sin(P),X=y*U+L*v,V=Y*U+z*v,L=L*U-y*v,z=z*U-Y*v,y=X,Y=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Fe(Math.sqrt(y*y+L*L+O*O)),_=Fe(Math.sqrt(z*z+nt*nt)),P=Vr(Y,z),T=Math.abs(P)>2e-4?P*cr:0,S=$?1/($<0?-$:$):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!md(Bn(t,De)),X&&t.setAttribute("transform",X))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Fe(d),n.scaleY=Fe(_),n.rotation=Fe(g)+o,n.rotationX=Fe(p)+o,n.rotationY=Fe(m)+o,n.skewX=T+o,n.skewY=x+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Tn]=Co(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?vS:hd?_d:gS,n.uncache=0,n},Co=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fl=function(t,e,n){var i=an(e);return Fe(parseFloat(e)+parseFloat($i(t,"x",n+"px",i)))+i},gS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_d(t,e)},sr="0deg",Cs="0px",ar=") ",_d=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,T=n.target,x=n.zOrigin,S="",R=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==sr||u!==sr)){var w=parseFloat(u)*rs,E=Math.sin(w),P=Math.cos(w),U;w=parseFloat(h)*rs,U=Math.cos(w),a=Fl(T,a,E*U*-x),o=Fl(T,o,-Math.sin(w)*-x),l=Fl(T,l,P*U*-x+x)}p!==Cs&&(S+="perspective("+p+ar),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||a!==Cs||o!==Cs||l!==Cs)&&(S+=l!==Cs||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ar),c!==sr&&(S+="rotate("+c+ar),u!==sr&&(S+="rotateY("+u+ar),h!==sr&&(S+="rotateX("+h+ar),(f!==sr||d!==sr)&&(S+="skew("+f+", "+d+ar),(_!==1||g!==1)&&(S+="scale("+_+", "+g+ar),T.style[De]=S||"translate(0, 0)"},vS=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,T=n.forceCSS,x=parseFloat(a),S=parseFloat(o),R,w,E,P,U;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=rs,c*=rs,R=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=rs,U=Math.tan(c-u),U=Math.sqrt(1+U*U),E*=U,P*=U,u&&(U=Math.tan(u),U=Math.sqrt(1+U*U),R*=U,w*=U)),R=Fe(R),w=Fe(w),E=Fe(E),P=Fe(P)):(R=h,P=f,w=E=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=$i(d,"x",a,"px"),S=$i(d,"y",o,"px")),(_||g||p||m)&&(x=Fe(x+_-(_*R+g*E)+p),S=Fe(S+g-(_*w+g*P)+m)),(i||s)&&(U=d.getBBox(),x=Fe(x+i/100*U.width),S=Fe(S+s/100*U.height)),U="matrix("+R+","+w+","+E+","+P+","+x+","+S+")",d.setAttribute("transform",U),T&&(d.style[De]=U)},xS=function(t,e,n,i,s){var a=360,o=Ze(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?cr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*mh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*mh)%a-~~(c/a)*a)),t._pt=f=new En(t._pt,e,n,i,c,eS),f.e=u,f.u="deg",t._props.push(n),f},yh=function(t,e){for(var n in e)t[n]=e[n];return t},SS=function(t,e,n){var i=yh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[De]=e,o=fa(n,1),Yi(n,De),n.setAttribute("transform",c)):(c=getComputedStyle(n)[De],a[De]=e,o=fa(n,1),a[De]=c);for(l in wi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=an(c),_=an(u),h=d!==_?$i(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new En(t._pt,o,l,h,f-h,lc),t._pt.u=_||0,t._props.push(l));yh(o,i)};yn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});wo[t>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return Mi(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var gd={name:"css",register:uc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,T,x,S,R,w,E,P,U;Zc||uc(),this.styles=this.styles||ud(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Ln[g]&&Qf(g,e,n,i,t,s)))){if(d=typeof u,_=wo[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=la(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Hi.lastIndex=0,Hi.test(c)||(p=an(c),m=an(u),m?p!==m&&(c=$i(t,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),P.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ze(c)&&~c.indexOf("random(")&&(c=la(c)),an(c+"")||c==="auto"||(c+=zn.units[g]||an(Mi(t,g))||""),(c+"").charAt(1)==="="&&(c=Mi(t,g))):c=Mi(t,g),f=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),g in li&&(g==="autoAlpha"&&(f===1&&Mi(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),zi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=li[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in wi,x){if(this.styles.save(g),U=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Bn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Bn(t,"perspective"),v?t.style.perspective=v:Yi(t,"perspective")}h=parseFloat(u)}if(S||(R=t._gsap,R.renderTransform&&!e.parseTransform||fa(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,S=this._pt=new En(this._pt,o,De,0,1,R.renderTransform,R,0,-1),S.dep=1),g==="scale")this._pt=new En(this._pt,R,"scaleY",R.scaleY,(T?ns(R.scaleY,T+h):h)-R.scaleY||0,lc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Tn,0,o[Tn]),u=mS(u),R.svg?hc(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&zi(this,R,"zOrigin",R.zOrigin,m),zi(this,o,g,Co(c),Co(u)));continue}else if(g==="svgOrigin"){hc(t,u,1,w,0,this);continue}else if(g in pd){xS(this,R,g,f,T?ns(f,T+u):u);continue}else if(g==="smoothOrigin"){zi(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){SS(this,u,t);continue}}else g in o||(g=_s(g)||g);if(x||(h||h===0)&&(f||f===0)&&!tS.test(u)&&g in o)p=(c+"").substr((f+"").length),h||(h=0),m=an(u)||(g in zn.units?zn.units[g]:p),p!==m&&(f=$i(t,g,c,m)),this._pt=new En(this._pt,x?R:o,g,f,(T?ns(f,T+h):h)-f,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?rS:lc),this._pt.u=m||0,x&&U!==u?(this._pt.b=c,this._pt.e=U,this._pt.r=iS):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=nS);else if(g in o)pS.call(this,t,g,c,T?T+u:u);else if(g in t)this.add(t,g,c||t[g],T?T+u:u,i,s);else if(g!=="parseTransform"){kc(g,u);continue}x||(g in o?P.push(g,0,o[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,c||t[g])),a.push(g)}}E&&sd(this)},render:function(t,e){if(e.tween._time||!Jc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Mi,aliases:li,getSetter:function(t,e,n){var i=li[e];return i&&i.indexOf(",")<0&&(e=i),e in wi&&e!==Tn&&(t._gsap.x||Mi(t,"x"))?n&&ph===n?e==="scale"?lS:oS:(ph=n||{})&&(e==="scale"?cS:uS):t.style&&!Oc(t.style[e])?sS:~e.indexOf("-")?aS:$c(t,e)},core:{_removeProperty:Yi,_getMatrix:Qc}};An.utils.checkPrefix=_s;An.core.getStyleSaver=ud;(function(r,t,e,n){var i=yn(r+","+t+","+e,function(s){wi[s]=1});yn(t,function(s){zn.units[s]="deg",pd[s]=1}),li[i[13]]=r+","+t,yn(n,function(s){var a=s.split(":");li[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});An.registerPlugin(gd);var Ke=An.registerPlugin(gd)||An;Ke.core.Tween;function MS(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function yS(r,t,e){return t&&MS(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var je,ho,Fn,ki,Gi,ss,vd,ur,as,xd,Ei,ti,Sd,Md=function(){return je||typeof window<"u"&&(je=window.gsap)&&je.registerPlugin&&je},yd=1,ts=[],ne=[],hi=[],Ys=Date.now,fc=function(t,e){return e},ES=function(){var t=as.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,hi),ne=n,hi=i,fc=function(a,o){return e[a](o)}},Wi=function(t,e){return~hi.indexOf(t)&&hi[hi.indexOf(t)+1][e]},$s=function(t){return!!~xd.indexOf(t)},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},$a="scrollLeft",Ka="scrollTop",dc=function(){return Ei&&Ei.isPressed||ne.cache++},Ro=function(t,e){var n=function i(s){if(s||s===0){yd&&(Fn.history.scrollRestoration="manual");var a=Ei&&Ei.isPressed;s=i.v=Math.round(s)||(Ei&&Ei.iOS?1:0),t(s),i.cacheID=ne.cache,a&&fc("ss",s)}else(e||ne.cache!==i.cacheID||fc("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},mn={s:$a,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ro(function(r){return arguments.length?Fn.scrollTo(r,Ve.sc()):Fn.pageXOffset||ki[$a]||Gi[$a]||ss[$a]||0})},Ve={s:Ka,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mn,sc:Ro(function(r){return arguments.length?Fn.scrollTo(mn.sc(),r):Fn.pageYOffset||ki[Ka]||Gi[Ka]||ss[Ka]||0})},gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||je.utils.toArray)(t)[0]||(typeof t=="string"&&je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},TS=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ki=function(t,e){var n=e.s,i=e.sc;$s(t)&&(t=ki.scrollingElement||Gi);var s=ne.indexOf(t),a=i===Ve.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+a]||un(t,"scroll",dc);var o=ne[s+a],l=o||(ne[s+a]=Ro(Wi(t,n),!0)||($s(t)?i:Ro(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=je.getProperty(t,"scrollBehavior")==="smooth"),l},pc=function(t,e,n){var i=t,s=t,a=Ys(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=Ys();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,p=s,m=Ys();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Rs=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Eh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Ed=function(){as=je.core.globals().ScrollTrigger,as&&as.core&&ES()},Td=function(t){return je=t||Md(),!ho&&je&&typeof document<"u"&&document.body&&(Fn=window,ki=document,Gi=ki.documentElement,ss=ki.body,xd=[Fn,ki,Gi,ss],je.utils.clamp,Sd=je.core.context||function(){},ur="onpointerenter"in ss?"pointer":"mouse",vd=Oe.isTouch=Fn.matchMedia&&Fn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ti=Oe.eventTypes=("ontouchstart"in Gi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yd=0},500),ho=1),as||Ed(),ho};mn.op=Ve;ne.cache=0;var Oe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){ho||Td(je)||console.warn("Please gsap.registerPlugin(Observer)"),as||Ed();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,T=n.onDrag,x=n.onPress,S=n.onRelease,R=n.onRight,w=n.onLeft,E=n.onUp,P=n.onDown,U=n.onChangeX,v=n.onChangeY,y=n.onChange,L=n.onToggleX,O=n.onToggleY,G=n.onHover,Y=n.onHoverEnd,z=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,tt=n.onGestureStart,D=n.onGestureEnd,st=n.onWheel,Pt=n.onEnable,kt=n.onDisable,$=n.onClick,nt=n.scrollSpeed,dt=n.capture,ct=n.allowClicks,Dt=n.lockAxis,Ct=n.onLockAxis;this.target=o=gn(o)||Gi,this.vars=n,d&&(d=je.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,nt=nt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Fn.getComputedStyle(ss).lineHeight)||22);var zt,Bt,j,b,at,ut,rt,I=this,At=0,vt=0,C=n.passive||!u&&n.passive!==!1,M=Ki(o,mn),H=Ki(o,Ve),J=M(),et=H(),Z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ti[0]==="pointerdown",bt=$s(o),lt=o.ownerDocument||ki,_t=[0,0,0],Xt=[0,0,0],ot=0,Et=function(){return ot=Ys()},wt=function(Lt,le){return(I.event=Lt)&&d&&TS(Lt.target,d)||le&&Z&&Lt.pointerType!=="touch"||X&&X(Lt,le)},Vt=function(){I._vx.reset(),I._vy.reset(),Bt.pause(),h&&h(I)},yt=function(){var Lt=I.deltaX=Eh(_t),le=I.deltaY=Eh(Xt),xt=Math.abs(Lt)>=i,Gt=Math.abs(le)>=i;y&&(xt||Gt)&&y(I,Lt,le,_t,Xt),xt&&(R&&I.deltaX>0&&R(I),w&&I.deltaX<0&&w(I),U&&U(I),L&&I.deltaX<0!=At<0&&L(I),At=I.deltaX,_t[0]=_t[1]=_t[2]=0),Gt&&(P&&I.deltaY>0&&P(I),E&&I.deltaY<0&&E(I),v&&v(I),O&&I.deltaY<0!=vt<0&&O(I),vt=I.deltaY,Xt[0]=Xt[1]=Xt[2]=0),(b||j)&&(z&&z(I),j&&(p&&j===1&&p(I),T&&T(I),j=0),b=!1),ut&&!(ut=!1)&&Ct&&Ct(I),at&&(st(I),at=!1),zt=0},Yt=function(Lt,le,xt){_t[xt]+=Lt,Xt[xt]+=le,I._vx.update(Lt),I._vy.update(le),c?zt||(zt=requestAnimationFrame(yt)):yt()},Wt=function(Lt,le){Dt&&!rt&&(I.axis=rt=Math.abs(Lt)>Math.abs(le)?"x":"y",ut=!0),rt!=="y"&&(_t[2]+=Lt,I._vx.update(Lt,!0)),rt!=="x"&&(Xt[2]+=le,I._vy.update(le,!0)),c?zt||(zt=requestAnimationFrame(yt)):yt()},se=function(Lt){if(!wt(Lt,1)){Lt=Rs(Lt,u);var le=Lt.clientX,xt=Lt.clientY,Gt=le-I.x,Ft=xt-I.y,qt=I.isDragging;I.x=le,I.y=xt,(qt||(Gt||Ft)&&(Math.abs(I.startX-le)>=s||Math.abs(I.startY-xt)>=s))&&(j||(j=qt?2:1),qt||(I.isDragging=!0),Wt(Gt,Ft))}},N=I.onPress=function(Nt){wt(Nt,1)||Nt&&Nt.button||(I.axis=rt=null,Bt.pause(),I.isPressed=!0,Nt=Rs(Nt),At=vt=0,I.startX=I.x=Nt.clientX,I.startY=I.y=Nt.clientY,I._vx.reset(),I._vy.reset(),un(V?o:lt,ti[1],se,C,!0),I.deltaX=I.deltaY=0,x&&x(I))},it=I.onRelease=function(Nt){if(!wt(Nt,1)){cn(V?o:lt,ti[1],se,!0);var Lt=!isNaN(I.y-I.startY),le=I.isDragging,xt=le&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Gt=Rs(Nt);!xt&&Lt&&(I._vx.reset(),I._vy.reset(),u&&ct&&je.delayedCall(.08,function(){if(Ys()-ot>300&&!Nt.defaultPrevented){if(Nt.target.click)Nt.target.click();else if(lt.createEvent){var Ft=lt.createEvent("MouseEvents");Ft.initMouseEvent("click",!0,!0,Fn,1,Gt.screenX,Gt.screenY,Gt.clientX,Gt.clientY,!1,!1,!1,!1,0,null),Nt.target.dispatchEvent(Ft)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,h&&le&&!V&&Bt.restart(!0),j&&yt(),m&&le&&m(I),S&&S(I,xt)}},K=function(Lt){return Lt.touches&&Lt.touches.length>1&&(I.isGesturing=!0)&&tt(Lt,I.isDragging)},Q=function(){return(I.isGesturing=!1)||D(I)},ft=function(Lt){if(!wt(Lt)){var le=M(),xt=H();Yt((le-J)*nt,(xt-et)*nt,1),J=le,et=xt,h&&Bt.restart(!0)}},pt=function(Lt){if(!wt(Lt)){Lt=Rs(Lt,u),st&&(at=!0);var le=(Lt.deltaMode===1?l:Lt.deltaMode===2?Fn.innerHeight:1)*_;Yt(Lt.deltaX*le,Lt.deltaY*le,0),h&&!V&&Bt.restart(!0)}},$t=function(Lt){if(!wt(Lt)){var le=Lt.clientX,xt=Lt.clientY,Gt=le-I.x,Ft=xt-I.y;I.x=le,I.y=xt,b=!0,h&&Bt.restart(!0),(Gt||Ft)&&Wt(Gt,Ft)}},ge=function(Lt){I.event=Lt,G(I)},Te=function(Lt){I.event=Lt,Y(I)},ie=function(Lt){return wt(Lt)||Rs(Lt,u)&&$(I)};Bt=I._dc=je.delayedCall(f||.25,Vt).pause(),I.deltaX=I.deltaY=0,I._vx=pc(0,50,!0),I._vy=pc(0,50,!0),I.scrollX=M,I.scrollY=H,I.isDragging=I.isGesturing=I.isPressed=!1,Sd(this),I.enable=function(Nt){return I.isEnabled||(un(bt?lt:o,"scroll",dc),a.indexOf("scroll")>=0&&un(bt?lt:o,"scroll",ft,C,dt),a.indexOf("wheel")>=0&&un(o,"wheel",pt,C,dt),(a.indexOf("touch")>=0&&vd||a.indexOf("pointer")>=0)&&(un(o,ti[0],N,C,dt),un(lt,ti[2],it),un(lt,ti[3],it),ct&&un(o,"click",Et,!0,!0),$&&un(o,"click",ie),tt&&un(lt,"gesturestart",K),D&&un(lt,"gestureend",Q),G&&un(o,ur+"enter",ge),Y&&un(o,ur+"leave",Te),z&&un(o,ur+"move",$t)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=b=j=!1,I._vx.reset(),I._vy.reset(),J=M(),et=H(),Nt&&Nt.type&&N(Nt),Pt&&Pt(I)),I},I.disable=function(){I.isEnabled&&(ts.filter(function(Nt){return Nt!==I&&$s(Nt.target)}).length||cn(bt?lt:o,"scroll",dc),I.isPressed&&(I._vx.reset(),I._vy.reset(),cn(V?o:lt,ti[1],se,!0)),cn(bt?lt:o,"scroll",ft,dt),cn(o,"wheel",pt,dt),cn(o,ti[0],N,dt),cn(lt,ti[2],it),cn(lt,ti[3],it),cn(o,"click",Et,!0),cn(o,"click",ie),cn(lt,"gesturestart",K),cn(lt,"gestureend",Q),cn(o,ur+"enter",ge),cn(o,ur+"leave",Te),cn(o,ur+"move",$t),I.isEnabled=I.isPressed=I.isDragging=!1,kt&&kt(I))},I.kill=I.revert=function(){I.disable();var Nt=ts.indexOf(I);Nt>=0&&ts.splice(Nt,1),Ei===I&&(Ei=0)},ts.push(I),V&&$s(o)&&(Ei=I),I.enable(g)},yS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Oe.version="3.15.0";Oe.create=function(r){return new Oe(r)};Oe.register=Td;Oe.getAll=function(){return ts.slice()};Oe.getById=function(r){return ts.filter(function(t){return t.vars.id===r})[0]};Md()&&je.registerPlugin(Oe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rt,Yr,ee,pe,Un,he,tu,Po,da,Ks,Fs,Za,nn,Ho,mc,dn,Th,Ah,$r,Ad,Ol,bd,fn,_c,wd,Cd,Ni,gc,eu,os,nu,Zs,vc,Bl,Ja=1,rn=Date.now,zl=rn(),Kn=0,Os=0,bh=function(t,e,n){var i=Dn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},wh=function(t,e){return e&&(!Dn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},AS=function r(){return Os&&requestAnimationFrame(r)},Ch=function(){return Ho=1},Rh=function(){return Ho=0},si=function(t){return t},Bs=function(t){return Math.round(t*1e5)/1e5||0},Rd=function(){return typeof window<"u"},Pd=function(){return Rt||Rd()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},Tr=function(t){return!!~tu.indexOf(t)},Dd=function(t){return(t==="Height"?nu:ee["inner"+t])||Un["client"+t]||he["client"+t]},Ld=function(t){return Wi(t,"getBoundingClientRect")||(Tr(t)?function(){return go.width=ee.innerWidth,go.height=nu,go}:function(){return yi(t)})},bS=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Wi(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Dd(s):t["client"+s])||0}},wS=function(t,e){return!e||~hi.indexOf(t)?Ld(t):function(){return go}},ci=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Wi(t,n))?a()-Ld(t)()[s]:Tr(t)?(Un[n]||he[n])-Dd(i):t[n]-t["offset"+i])},ja=function(t,e){for(var n=0;n<$r.length;n+=3)(!e||~e.indexOf($r[n+1]))&&t($r[n],$r[n+1],$r[n+2])},Dn=function(t){return typeof t=="string"},on=function(t){return typeof t=="function"},zs=function(t){return typeof t=="number"},hr=function(t){return typeof t=="object"},Ps=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Hr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Wr=Math.abs,Id="left",Ud="top",iu="right",ru="bottom",xr="width",Sr="height",Js="Right",js="Left",Qs="Top",ta="Bottom",ze="padding",Xn="margin",gs="Width",su="Height",Ge="px",qn=function(t){return ee.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},CS=function(t){var e=qn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ph=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},yi=function(t,e){var n=e&&qn(t)[mc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Do=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Nd=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},RS=function(t){return function(e){return Rt.utils.snap(Nd(t),e)}},au=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},PS=function(t){return function(e,n){return au(Nd(t))(e,n.direction)}},Qa=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},$e=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ye=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},to=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Dh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},eo={toggleActions:"play",anticipatePin:0},Lo={top:0,left:0,center:.5,bottom:1,right:1},fo=function(t,e){if(Dn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Lo?Lo[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},no=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=pe.createElement("div"),g=Tr(n)||Wi(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?he:n.tagName==="IFRAME"?n.contentDocument.body:n,T=t.indexOf("start")!==-1,x=T?c:u,S="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===Ve?iu:ru)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=T,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=S,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],po(_,0,i,T),_},po=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+gs]=1,s["border"+o+gs]=0,s[n.p]=e+"px",Rt.set(t,s)},Qt=[],xc={},pa,Lh=function(){return rn()-Kn>34&&(pa||(pa=requestAnimationFrame(Ai)))},Xr=function(){(!fn||!fn.isPressed||fn.startX>he.clientWidth)&&(ne.cache++,fn?pa||(pa=requestAnimationFrame(Ai)):Ai(),Kn||br("scrollStart"),Kn=rn())},kl=function(){Cd=ee.innerWidth,wd=ee.innerHeight},ks=function(t){ne.cache++,(t===!0||!nn&&!bd&&!pe.fullscreenElement&&!pe.webkitFullscreenElement&&(!_c||Cd!==ee.innerWidth||Math.abs(ee.innerHeight-wd)>ee.innerHeight*.25))&&Po.restart(!0)},Ar={},DS=[],Fd=function r(){return Ye(te,"scrollEnd",r)||pr(!0)},br=function(t){return Ar[t]&&Ar[t].map(function(e){return e()})||DS},Pn=[],Od=function(t){for(var e=0;e<Pn.length;e+=5)(!t||Pn[e+4]&&Pn[e+4].query===t)&&(Pn[e].style.cssText=Pn[e+1],Pn[e].getBBox&&Pn[e].setAttribute("transform",Pn[e+2]||""),Pn[e+3].uncache=1)},Bd=function(){return ne.forEach(function(t){return on(t)&&++t.cacheID&&(t.rec=t())})},ou=function(t,e){var n;for(dn=0;dn<Qt.length;dn++)n=Qt[dn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Zs=!0,e&&Od(e),e||br("revert")},zd=function(t,e){ne.cache++,(e||!pn)&&ne.forEach(function(n){return on(n)&&n.cacheID++&&(n.rec=0)}),Dn(t)&&(ee.history.scrollRestoration=eu=t)},pn,Mr=0,Ih,LS=function(){if(Ih!==Mr){var t=Ih=Mr;requestAnimationFrame(function(){return t===Mr&&pr(!0)})}},kd=function(){he.appendChild(os),nu=!fn&&os.offsetHeight||ee.innerHeight,he.removeChild(os)},Uh=function(t){return da(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},pr=function(t,e){if(Un=pe.documentElement,he=pe.body,tu=[ee,pe,Un,he],Kn&&!t&&!Zs){$e(te,"scrollEnd",Fd);return}kd(),pn=te.isRefreshing=!0,Zs||Bd();var n=br("refreshInit");Ad&&te.sort(),e||ou(),ne.forEach(function(i){on(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qt.slice(0).forEach(function(i){return i.refresh()}),Zs=!1,Qt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),vc=1,Uh(!0),Qt.forEach(function(i){var s=ci(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Uh(!1),vc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){on(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),zd(eu,1),Po.pause(),Mr++,pn=2,Ai(2),Qt.forEach(function(i){return on(i.vars.onRefresh)&&i.vars.onRefresh(i)}),pn=te.isRefreshing=!1,br("refresh")},Sc=0,mo=1,ea,Ai=function(t){if(t===2||!pn&&!Zs){te.isUpdating=!0,ea&&ea.update(0);var e=Qt.length,n=rn(),i=n-zl>=50,s=e&&Qt[0].scroll();if(mo=Sc>s?-1:1,pn||(Sc=s),i&&(Kn&&!Ho&&n-Kn>200&&(Kn=0,br("scrollEnd")),Fs=zl,zl=n),mo<0){for(dn=e;dn-- >0;)Qt[dn]&&Qt[dn].update(0,i);mo=1}else for(dn=0;dn<e;dn++)Qt[dn]&&Qt[dn].update(0,i);te.isUpdating=!1}pa=0},Mc=[Id,Ud,ru,iu,Xn+ta,Xn+Js,Xn+Qs,Xn+js,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_o=Mc.concat([xr,Sr,"boxSizing","max"+gs,"max"+su,"position",Xn,ze,ze+Qs,ze+Js,ze+ta,ze+js]),IS=function(t,e,n){ls(n);var i=t._gsap;if(i.spacerIsNative)ls(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Gl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Mc.length,a=e.style,o=t.style,l;s--;)l=Mc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ru]=o[iu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[xr]=Do(t,mn)+Ge,a[Sr]=Do(t,Ve)+Ge,a[ze]=o[Xn]=o[Ud]=o[Id]="0",ls(i),o[xr]=o["max"+gs]=n[xr],o[Sr]=o["max"+su]=n[Sr],o[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},US=/([A-Z])/g,ls=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(US,"-$1").toLowerCase())}},io=function(t){for(var e=_o.length,n=t.style,i=[],s=0;s<e;s++)i.push(_o[s],n[_o[s]]);return i.t=t,i},NS=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},go={left:0,top:0},Nh=function(t,e,n,i,s,a,o,l,c,u,h,f,d,_){on(t)&&(t=t(l)),Dn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?fo("0"+t.substr(3),n):0));var g=d?d.time():0,p,m,T;if(d&&d.seek(0),isNaN(t)||(t=+t),zs(t))d&&(t=Rt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),o&&po(o,n,i,!0);else{on(e)&&(e=e(l));var x=(t||"0").split(" "),S,R,w,E;T=gn(e,l)||he,S=yi(T)||{},(!S||!S.left&&!S.top)&&qn(T).display==="none"&&(E=T.style.display,T.style.display="block",S=yi(T),E?T.style.display=E:T.style.removeProperty("display")),R=fo(x[0],S[i.d]),w=fo(x[1]||"0",n),t=S[i.p]-c[i.p]-u+R+s-w,o&&po(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var P=t+n,U=a._isStart;p="scroll"+i.d2,po(a,P,i,U&&P>20||!U&&(h?Math.max(he[p],Un[p]):a.parentNode[p])<=P+1),h&&(c=yi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ge))}return d&&T&&(p=yi(T),d.seek(f),m=yi(T),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},FS=/(webkit|moz|length|cssText|inset)/i,Fh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===he){t._stOrig=s.cssText,o=qn(t);for(a in o)!+a&&!FS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},Gd=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},ro=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},Oh=function(t,e){var n=Ki(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,_={};c=c||n();var g=Gd(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ne.cache++,a.tween&&Ai()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Rt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$e(t,"wheel",n.wheelHandler),te.isTouch&&$e(t,"touchmove",n.wheelHandler),s},te=function(){function r(e,n){Yr||r.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),gc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Os){this.update=this.refresh=this.kill=si;return}n=Ph(Dn(n)||zs(n)||n.nodeType?{trigger:n}:n,eo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,T=s.onSnapComplete,x=s.once,S=s.snap,R=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,U=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?mn:Ve,y=!h&&h!==0,L=gn(n.scroller||ee),O=Rt.core.getCache(L),G=Tr(L),Y=("pinType"in n?n.pinType:Wi(L,"pinType")||G&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=y&&n.toggleActions.split(" "),V="markers"in n?n.markers:eo.markers,tt=G?0:parseFloat(qn(L)["border"+v.p2+gs])||0,D=this,st=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Pt=bS(L,G,v),kt=wS(L,G),$=0,nt=0,dt=0,ct=Ki(L,v),Dt,Ct,zt,Bt,j,b,at,ut,rt,I,At,vt,C,M,H,J,et,Z,bt,lt,_t,Xt,ot,Et,wt,Vt,yt,Yt,Wt,se,N,it,K,Q,ft,pt,$t,ge,Te;if(D._startClamp=D._endClamp=!1,D._dir=v,p*=45,D.scroller=L,D.scroll=E?E.time.bind(E):ct,Bt=ct(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ad=1,n.refreshPriority===-9999&&(ea=D)),O.tweenScroll=O.tweenScroll||{top:Oh(L,Ve),left:Oh(L,mn)},D.tweenTo=Dt=O.tweenScroll[v.p],D.scrubDuration=function(xt){K=zs(xt)&&xt,K?it?it.duration(xt):it=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(D)}}):(it&&it.progress(1).kill(),it=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),se=0,l||(l=i.vars.id)),S&&((!hr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in he.style&&Rt.set(G?[he,Un]:L,{scrollBehavior:"auto"}),ne.forEach(function(xt){return on(xt)&&xt.target===(G?pe.scrollingElement||Un:L)&&(xt.smooth=!1)}),zt=on(S.snapTo)?S.snapTo:S.snapTo==="labels"?RS(i):S.snapTo==="labelsDirectional"?PS(i):S.directional!==!1?function(xt,Gt){return au(S.snapTo)(xt,rn()-nt<500?0:Gt.direction)}:Rt.utils.snap(S.snapTo),Q=S.duration||{min:.1,max:2},Q=hr(Q)?Ks(Q.min,Q.max):Ks(Q,Q),ft=Rt.delayedCall(S.delay||K/2||.1,function(){var xt=ct(),Gt=rn()-nt<500,Ft=Dt.tween;if((Gt||Math.abs(D.getVelocity())<10)&&!Ft&&!Ho&&$!==xt){var qt=(xt-b)/M,Ie=i&&!y?i.totalProgress():qt,Kt=Gt?0:(Ie-N)/(rn()-Fs)*1e3||0,Ae=Rt.utils.clamp(-qt,1-qt,Wr(Kt/2)*Kt/.185),Ue=qt+(S.inertia===!1?0:Ae),Me,ve,de=S,bn=de.onStart,ye=de.onInterrupt,A=de.onComplete;if(Me=zt(Ue,D),zs(Me)||(Me=Ue),ve=Math.max(0,Math.round(b+Me*M)),xt<=at&&xt>=b&&ve!==xt){if(Ft&&!Ft._initted&&Ft.data<=Wr(ve-xt))return;S.inertia===!1&&(Ae=Me-qt),Dt(ve,{duration:Q(Wr(Math.max(Wr(Ue-Ie),Wr(Me-Ie))*.185/Kt/.05||0)),ease:S.ease||"power3",data:Wr(ve-xt),onInterrupt:function(){return ft.restart(!0)&&ye&&Hr(D,ye)},onComplete:function(){D.update(),$=ct(),i&&!y&&(it?it.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),se=N=i&&!y?i.totalProgress():D.progress,T&&T(D),A&&Hr(D,A)}},xt,Ae*M,ve-xt-Ae*M),bn&&Hr(D,bn,Dt.tween)}}else D.isActive&&$!==xt&&ft.restart(!0)}).pause()),l&&(xc[l]=D),f=D.trigger=gn(f||d!==!0&&d),Te=f&&f._gsap&&f._gsap.stRevert,Te&&(Te=Te(D)),d=d===!0?f:gn(d),Dn(o)&&(o={targets:f,className:o}),d&&(_===!1||_===Xn||(_=!_&&d.parentNode&&d.parentNode.style&&qn(d.parentNode).display==="flex"?!1:ze),D.pin=d,Ct=Rt.core.getCache(d),Ct.spacer?H=Ct.pinState:(w&&(w=gn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ct.spacerIsNative=!!w,w&&(Ct.spacerState=io(w))),Ct.spacer=Z=w||pe.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Ct.pinState=H=io(d)),n.force3D!==!1&&Rt.set(d,{force3D:!0}),D.spacer=Z=Ct.spacer,Wt=qn(d),Et=Wt[_+v.os2],lt=Rt.getProperty(d),_t=Rt.quickSetter(d,v.a,Ge),Gl(d,Z,Wt),et=io(d)),V){vt=hr(V)?Ph(V,Dh):Dh,I=no("scroller-start",l,L,v,vt,0),At=no("scroller-end",l,L,v,vt,0,I),bt=I["offset"+v.op.d2];var ie=gn(Wi(L,"content")||L);ut=this.markerStart=no("start",l,ie,v,vt,bt,0,E),rt=this.markerEnd=no("end",l,ie,v,vt,bt,0,E),E&&(ge=Rt.quickSetter([ut,rt],v.a,Ge)),!Y&&!(hi.length&&Wi(L,"fixedMarkers")===!0)&&(CS(G?he:L),Rt.set([I,At],{force3D:!0}),Vt=Rt.quickSetter(I,v.a,Ge),Yt=Rt.quickSetter(At,v.a,Ge))}if(E){var Nt=E.vars.onUpdate,Lt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),Nt&&Nt.apply(E,Lt||[])})}if(D.previous=function(){return Qt[Qt.indexOf(D)-1]},D.next=function(){return Qt[Qt.indexOf(D)+1]},D.revert=function(xt,Gt){if(!Gt)return D.kill(!0);var Ft=xt!==!1||!D.enabled,qt=nn;Ft!==D.isReverted&&(Ft&&(pt=Math.max(ct(),D.scroll.rec||0),dt=D.progress,$t=i&&i.progress()),ut&&[ut,rt,I,At].forEach(function(Ie){return Ie.style.display=Ft?"none":"block"}),Ft&&(nn=D,D.update(Ft)),d&&(!R||!D.isActive)&&(Ft?IS(d,Z,H):Gl(d,Z,qn(d),wt)),Ft||D.update(Ft),nn=qt,D.isReverted=Ft)},D.refresh=function(xt,Gt,Ft,qt){if(!((nn||!D.enabled)&&!Gt)){if(d&&xt&&Kn){$e(r,"scrollEnd",Fd);return}!pn&&st&&st(D),nn=D,Dt.tween&&!Ft&&(Dt.tween.kill(),Dt.tween=0),it&&it.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(jt){return jt.vars.immediateRender&&jt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Ie=Pt(),Kt=kt(),Ae=E?E.duration():ci(L,v),Ue=M<=.01||!M,Me=0,ve=qt||0,de=hr(Ft)?Ft.end:n.end,bn=n.endTrigger||f,ye=hr(Ft)?Ft.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),A=D.pinnedContainer=n.pinnedContainer&&gn(n.pinnedContainer,D),B=f&&Math.max(0,Qt.indexOf(D))||0,W=B,q,F,ht,Mt,gt,mt,Ut,Ht,It,ae,re,me,Xe;for(V&&hr(Ft)&&(me=Rt.getProperty(I,v.p),Xe=Rt.getProperty(At,v.p));W-- >0;)mt=Qt[W],mt.end||mt.refresh(0,1)||(nn=D),Ut=mt.pin,Ut&&(Ut===f||Ut===d||Ut===A)&&!mt.isReverted&&(ae||(ae=[]),ae.unshift(mt),mt.revert(!0,!0)),mt!==Qt[W]&&(B--,W--);for(on(ye)&&(ye=ye(D)),ye=bh(ye,"start",D),b=Nh(ye,f,Ie,v,ct(),ut,I,D,Kt,tt,Y,Ae,E,D._startClamp&&"_startClamp")||(d?-.001:0),on(de)&&(de=de(D)),Dn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Dn(ye)?ye.split(" ")[0]:"")+de:(Me=fo(de.substr(2),Ie),de=Dn(ye)?ye:(E?Rt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,b):b)+Me,bn=f)),de=bh(de,"end",D),at=Math.max(b,Nh(de||(bn?"100% 0":Ae),bn,Ie,v,ct()+Me,rt,At,D,Kt,tt,Y,Ae,E,D._endClamp&&"_endClamp"))||-.001,Me=0,W=B;W--;)mt=Qt[W]||{},Ut=mt.pin,Ut&&mt.start-mt._pinPush<=b&&!E&&mt.end>0&&(q=mt.end-(D._startClamp?Math.max(0,mt.start):mt.start),(Ut===f&&mt.start-mt._pinPush<b||Ut===A)&&isNaN(ye)&&(Me+=q*(1-mt.progress)),Ut===d&&(ve+=q));if(b+=Me,at+=Me,D._startClamp&&(D._startClamp+=Me),D._endClamp&&!pn&&(D._endClamp=at||-.001,at=Math.min(at,ci(L,v))),M=at-b||(b-=.01)&&.001,Ue&&(dt=Rt.utils.clamp(0,1,Rt.utils.normalize(b,at,pt))),D._pinPush=ve,ut&&Me&&(q={},q[v.a]="+="+Me,A&&(q[v.p]="-="+ct()),Rt.set([ut,rt],q)),d&&!(vc&&D.end>=ci(L,v)))q=qn(d),Mt=v===Ve,ht=ct(),Xt=parseFloat(lt(v.a))+ve,!Ae&&at>1&&(re=(G?pe.scrollingElement||Un:L).style,re={style:re,value:re["overflow"+v.a.toUpperCase()]},G&&qn(he)["overflow"+v.a.toUpperCase()]!=="scroll"&&(re.style["overflow"+v.a.toUpperCase()]="scroll")),Gl(d,Z,q),et=io(d),F=yi(d,!0),Ht=Y&&Ki(L,Mt?mn:Ve)(),_?(wt=[_+v.os2,M+ve+Ge],wt.t=Z,W=_===ze?Do(d,v)+M+ve:0,W&&(wt.push(v.d,W+Ge),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=W+Ge)),ls(wt),A&&Qt.forEach(function(jt){jt.pin===A&&jt.vars.pinSpacing!==!1&&(jt._subPinOffset=!0)}),Y&&ct(pt)):(W=Do(d,v),W&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=W+Ge)),Y&&(gt={top:F.top+(Mt?ht-b:Ht)+Ge,left:F.left+(Mt?Ht:ht-b)+Ge,boxSizing:"border-box",position:"fixed"},gt[xr]=gt["max"+gs]=Math.ceil(F.width)+Ge,gt[Sr]=gt["max"+su]=Math.ceil(F.height)+Ge,gt[Xn]=gt[Xn+Qs]=gt[Xn+Js]=gt[Xn+ta]=gt[Xn+js]="0",gt[ze]=q[ze],gt[ze+Qs]=q[ze+Qs],gt[ze+Js]=q[ze+Js],gt[ze+ta]=q[ze+ta],gt[ze+js]=q[ze+js],J=NS(H,gt,R),pn&&ct(0)),i?(It=i._initted,Ol(1),i.render(i.duration(),!0,!0),ot=lt(v.a)-Xt+M+ve,yt=Math.abs(M-ot)>1,Y&&yt&&J.splice(J.length-2,2),i.render(0,!0,!0),It||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ol(0)):ot=M,re&&(re.value?re.style["overflow"+v.a.toUpperCase()]=re.value:re.style.removeProperty("overflow-"+v.a));else if(f&&ct()&&!E)for(F=f.parentNode;F&&F!==he;)F._pinOffset&&(b-=F._pinOffset,at-=F._pinOffset),F=F.parentNode;ae&&ae.forEach(function(jt){return jt.revert(!1,!0)}),D.start=b,D.end=at,Bt=j=pn?pt:ct(),!E&&!pn&&(Bt<pt&&ct(pt),D.scroll.rec=0),D.revert(!1,!0),nt=rn(),ft&&($=-1,ft.restart(!0)),nn=0,i&&y&&(i._initted||$t)&&i.progress()!==$t&&i.progress($t||0,!0).render(i.time(),!0,!0),(Ue||dt!==D.progress||E||g||i&&!i._initted)&&(i&&!y&&(i._initted||dt||i.vars.immediateRender!==!1)&&i.totalProgress(E&&b<-.001&&!dt?Rt.utils.normalize(b,at,0):dt,!0),D.progress=Ue||(Bt-b)/M===dt?0:dt),d&&_&&(Z._pinOffset=Math.round(D.progress*ot)),it&&it.invalidate(),isNaN(me)||(me-=Rt.getProperty(I,v.p),Xe-=Rt.getProperty(At,v.p),ro(I,v,me),ro(ut,v,me-(qt||0)),ro(At,v,Xe),ro(rt,v,Xe-(qt||0))),Ue&&!pn&&D.update(),u&&!pn&&!C&&(C=!0,u(D),C=!1)}},D.getVelocity=function(){return(ct()-j)/(rn()-Fs)*1e3||0},D.endAnimation=function(){Ps(D.callbackAnimation),i&&(it?it.progress(1):i.paused()?y||Ps(i,D.direction<0,1):Ps(i,i.reversed()))},D.labelToScroll=function(xt){return i&&i.labels&&(b||D.refresh()||b)+i.labels[xt]/i.duration()*M||0},D.getTrailing=function(xt){var Gt=Qt.indexOf(D),Ft=D.direction>0?Qt.slice(0,Gt).reverse():Qt.slice(Gt+1);return(Dn(xt)?Ft.filter(function(qt){return qt.vars.preventOverlaps===xt}):Ft).filter(function(qt){return D.direction>0?qt.end<=b:qt.start>=at})},D.update=function(xt,Gt,Ft){if(!(E&&!Ft&&!xt)){var qt=pn===!0?pt:D.scroll(),Ie=xt?0:(qt-b)/M,Kt=Ie<0?0:Ie>1?1:Ie||0,Ae=D.progress,Ue,Me,ve,de,bn,ye,A,B;if(Gt&&(j=Bt,Bt=E?ct():qt,S&&(N=se,se=i&&!y?i.totalProgress():Kt)),p&&d&&!nn&&!Ja&&Kn&&(!Kt&&b<qt+(qt-j)/(rn()-Fs)*p?Kt=1e-4:Kt===1&&at>qt+(qt-j)/(rn()-Fs)*p&&(Kt=.9999)),Kt!==Ae&&D.enabled){if(Ue=D.isActive=!!Kt&&Kt<1,Me=!!Ae&&Ae<1,ye=Ue!==Me,bn=ye||!!Kt!=!!Ae,D.direction=Kt>Ae?1:-1,D.progress=Kt,bn&&!nn&&(ve=Kt&&!Ae?0:Kt===1?1:Ae===1?2:3,y&&(de=!ye&&X[ve+1]!=="none"&&X[ve+1]||X[ve],B=i&&(de==="complete"||de==="reset"||de in i))),U&&(ye||B)&&(B||h||!i)&&(on(U)?U(D):D.getTrailing(U).forEach(function(ht){return ht.endAnimation()})),y||(it&&!nn&&!Ja?(it._dp._time-it._start!==it._time&&it.render(it._dp._time-it._start),it.resetTo?it.resetTo("totalProgress",Kt,i._tTime/i._tDur):(it.vars.totalProgress=Kt,it.invalidate().restart())):i&&i.totalProgress(Kt,!!(nn&&(nt||xt)))),d){if(xt&&_&&(Z.style[_+v.os2]=Et),!Y)_t(Bs(Xt+ot*Kt));else if(bn){if(A=!xt&&Kt>Ae&&at+1>qt&&qt+1>=ci(L,v),R)if(!xt&&(Ue||A)){var W=yi(d,!0),q=qt-b;Fh(d,he,W.top+(v===Ve?q:0)+Ge,W.left+(v===Ve?0:q)+Ge)}else Fh(d,Z);ls(Ue||A?J:et),yt&&Kt<1&&Ue||_t(Xt+(Kt===1&&!A?ot:0))}}S&&!Dt.tween&&!nn&&!Ja&&ft.restart(!0),o&&(ye||x&&Kt&&(Kt<1||!Bl))&&da(o.targets).forEach(function(ht){return ht.classList[Ue||x?"add":"remove"](o.className)}),a&&!y&&!xt&&a(D),bn&&!nn?(y&&(B&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),a&&a(D)),(ye||!Bl)&&(c&&ye&&Hr(D,c),z[ve]&&Hr(D,z[ve]),x&&(Kt===1?D.kill(!1,1):z[ve]=0),ye||(ve=Kt===1?1:3,z[ve]&&Hr(D,z[ve]))),P&&!Ue&&Math.abs(D.getVelocity())>(zs(P)?P:2500)&&(Ps(D.callbackAnimation),it?it.progress(1):Ps(i,de==="reverse"?1:!Kt,1))):y&&a&&!nn&&a(D)}if(Yt){var F=E?qt/E.duration()*(E._caScrollDist||0):qt;Vt(F+(I._isFlipped?1:0)),Yt(F)}ge&&ge(-qt/E.duration()*(E._caScrollDist||0))}},D.enable=function(xt,Gt){D.enabled||(D.enabled=!0,$e(L,"resize",ks),G||$e(L,"scroll",Xr),st&&$e(r,"refreshInit",st),xt!==!1&&(D.progress=dt=0,Bt=j=$=ct()),Gt!==!1&&D.refresh())},D.getTween=function(xt){return xt&&Dt?Dt.tween:it},D.setPositions=function(xt,Gt,Ft,qt){if(E){var Ie=E.scrollTrigger,Kt=E.duration(),Ae=Ie.end-Ie.start;xt=Ie.start+Ae*xt/Kt,Gt=Ie.start+Ae*Gt/Kt}D.refresh(!1,!1,{start:wh(xt,Ft&&!!D._startClamp),end:wh(Gt,Ft&&!!D._endClamp)},qt),D.update()},D.adjustPinSpacing=function(xt){if(wt&&xt){var Gt=wt.indexOf(v.d)+1;wt[Gt]=parseFloat(wt[Gt])+xt+Ge,wt[1]=parseFloat(wt[1])+xt+Ge,ls(wt)}},D.disable=function(xt,Gt){if(xt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Gt||it&&it.pause(),pt=0,Ct&&(Ct.uncache=1),st&&Ye(r,"refreshInit",st),ft&&(ft.pause(),Dt.tween&&Dt.tween.kill()&&(Dt.tween=0)),!G)){for(var Ft=Qt.length;Ft--;)if(Qt[Ft].scroller===L&&Qt[Ft]!==D)return;Ye(L,"resize",ks),G||Ye(L,"scroll",Xr)}},D.kill=function(xt,Gt){D.disable(xt,Gt),it&&!Gt&&it.kill(),l&&delete xc[l];var Ft=Qt.indexOf(D);Ft>=0&&Qt.splice(Ft,1),Ft===dn&&mo>0&&dn--,Ft=0,Qt.forEach(function(qt){return qt.scroller===D.scroller&&(Ft=1)}),Ft||pn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,xt&&i.revert({kill:!1}),Gt||i.kill()),ut&&[ut,rt,I,At].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),ea===D&&(ea=0),d&&(Ct&&(Ct.uncache=1),Ft=0,Qt.forEach(function(qt){return qt.pin===d&&Ft++}),Ft||(Ct.spacer=0)),n.onKill&&n.onKill(D)},Qt.push(D),D.enable(!1,!1),Te&&Te(D),i&&i.add&&!M){var le=D.update;D.update=function(){D.update=le,ne.cache++,b||at||D.refresh()},Rt.delayedCall(.01,D.update),M=.01,b=at=0}else D.refresh();d&&LS()},r.register=function(n){return Yr||(Rt=n||Pd(),Rd()&&window.document&&r.enable(),Yr=Os),Yr},r.defaults=function(n){if(n)for(var i in n)eo[i]=n[i];return eo},r.disable=function(n,i){Os=0,Qt.forEach(function(a){return a[i?"kill":"disable"](n)}),Ye(ee,"wheel",Xr),Ye(pe,"scroll",Xr),clearInterval(Za),Ye(pe,"touchcancel",si),Ye(he,"touchstart",si),Qa(Ye,pe,"pointerdown,touchstart,mousedown",Ch),Qa(Ye,pe,"pointerup,touchend,mouseup",Rh),Po.kill(),ja(Ye);for(var s=0;s<ne.length;s+=3)to(Ye,ne[s],ne[s+1]),to(Ye,ne[s],ne[s+2])},r.enable=function(){if(ee=window,pe=document,Un=pe.documentElement,he=pe.body,Rt){if(da=Rt.utils.toArray,Ks=Rt.utils.clamp,gc=Rt.core.context||si,Ol=Rt.core.suppressOverwrites||si,eu=ee.history.scrollRestoration||"auto",Sc=ee.pageYOffset||0,Rt.core.globals("ScrollTrigger",r),he){Os=1,os=document.createElement("div"),os.style.height="100vh",os.style.position="absolute",kd(),AS(),Oe.register(Rt),r.isTouch=Oe.isTouch,Ni=Oe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_c=Oe.isTouch===1,$e(ee,"wheel",Xr),tu=[ee,pe,Un,he],Rt.matchMedia?(r.matchMedia=function(u){var h=Rt.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Rt.addEventListener("matchMediaInit",function(){Bd(),ou()}),Rt.addEventListener("matchMediaRevert",function(){return Od()}),Rt.addEventListener("matchMedia",function(){pr(0,1),br("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return kl(),kl})):console.warn("Requires GSAP 3.11.0 or later"),kl(),$e(pe,"scroll",Xr);var n=he.hasAttribute("style"),i=he.style,s=i.borderTopStyle,a=Rt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=yi(he),Ve.m=Math.round(o.top+Ve.sc())||0,mn.m=Math.round(o.left+mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(he.setAttribute("style",""),he.removeAttribute("style")),Za=setInterval(Lh,250),Rt.delayedCall(.5,function(){return Ja=0}),$e(pe,"touchcancel",si),$e(he,"touchstart",si),Qa($e,pe,"pointerdown,touchstart,mousedown",Ch),Qa($e,pe,"pointerup,touchend,mouseup",Rh),mc=Rt.utils.checkPrefix("transform"),_o.push(mc),Yr=rn(),Po=Rt.delayedCall(.2,pr).pause(),$r=[pe,"visibilitychange",function(){var u=ee.innerWidth,h=ee.innerHeight;pe.hidden?(Th=u,Ah=h):(Th!==u||Ah!==h)&&ks()},pe,"DOMContentLoaded",pr,ee,"load",pr,ee,"resize",ks],ja($e),Qt.forEach(function(u){return u.enable(0,1)}),l=0;l<ne.length;l+=3)to(Ye,ne[l],ne[l+1]),to(Ye,ne[l],ne[l+2])}else if(pe){var c=function u(){r.enable(),pe.removeEventListener("DOMContentLoaded",u)};pe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Bl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Za)||(Za=i)&&setInterval(Lh,i),"ignoreMobileResize"in n&&(_c=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ja(Ye)||ja($e,n.autoRefreshEvents||"none"),bd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=gn(n),a=ne.indexOf(s),o=Tr(s);~a&&ne.splice(a,o?6:2),i&&(o?hi.unshift(ee,i,he,i,Un,i):hi.unshift(s,i))},r.clearMatchMedia=function(n){Qt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Dn(n)?gn(n):n).getBoundingClientRect(),o=a[s?xr:Sr]*i||0;return s?a.right-o>0&&a.left+o<ee.innerWidth:a.bottom-o>0&&a.top+o<ee.innerHeight},r.positionInViewport=function(n,i,s){Dn(n)&&(n=gn(n));var a=n.getBoundingClientRect(),o=a[s?xr:Sr],l=i==null?o/2:i in Lo?Lo[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ee.innerWidth:(a.top+l)/ee.innerHeight},r.killAll=function(n){if(Qt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ar.killAll||[];Ar={},i.forEach(function(s){return s()})}},r}();te.version="3.15.0";te.saveStyles=function(r){return r?da(r).forEach(function(t){if(t&&t.style){var e=Pn.indexOf(t);e>=0&&Pn.splice(e,5),Pn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),gc())}}):Pn};te.revert=function(r,t){return ou(!r,t)};te.create=function(r,t){return new te(r,t)};te.refresh=function(r){return r?ks(!0):(Yr||te.register())&&pr(!0)};te.update=function(r){return++ne.cache&&Ai(r===!0?2:0)};te.clearScrollMemory=zd;te.maxScroll=function(r,t){return ci(r,t?mn:Ve)};te.getScrollFunc=function(r,t){return Ki(gn(r),t?mn:Ve)};te.getById=function(r){return xc[r]};te.getAll=function(){return Qt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};te.isScrolling=function(){return!!Kn};te.snapDirectional=au;te.addEventListener=function(r,t){var e=Ar[r]||(Ar[r]=[]);~e.indexOf(t)||e.push(t)};te.removeEventListener=function(r,t){var e=Ar[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};te.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Rt.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&on(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return on(s)&&(s=s(),$e(te,"refresh",function(){return s=t.batchMax()})),da(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(te.create(c))}),e};var Bh=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Vl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Oe.isTouch?" pinch-zoom":""):"none",t===Un&&r(he,e)},so={auto:1,scroll:1},OS=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Rt.core.getCache(s),o=rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==he&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(so[(l=qn(s)).overflowY]||so[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Tr(s)&&(so[(l=qn(s)).overflowY]||so[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Vd=function(t,e,n,i){return Oe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&OS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$e(pe,Oe.eventTypes[0],kh,!1,!0)},onDisable:function(){return Ye(pe,Oe.eventTypes[0],kh,!0)}})},BS=/(input|label|select|textarea)/i,zh,kh=function(t){var e=BS.test(t.target.tagName);(e||zh)&&(t._gsapAllow=!0,zh=e)},zS=function(t){hr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=gn(t.target)||Un,u=Rt.core.globals().ScrollSmoother,h=u&&u.get(),f=Ni&&(t.content&&gn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Ki(c,Ve),_=Ki(c,mn),g=1,p=(Oe.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,m=0,T=on(i)?function(){return i(o)}:function(){return i||2.8},x,S,R=Vd(c,t.type,!0,s),w=function(){return S=!1},E=si,P=si,U=function(){l=ci(c,Ve),P=Ks(Ni?1:0,l),n&&(E=Ks(0,ci(c,mn))),x=Mr},v=function(){f._gsap.y=Bs(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},y=function(){if(S){requestAnimationFrame(w);var V=Bs(o.deltaY/2),tt=P(d.v-V);if(f&&tt!==d.v+d.offset){d.offset=tt-d.v;var D=Bs((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=ne.cache,Ai()}return!0}d.offset&&v(),S=!0},L,O,G,Y,z=function(){U(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Rt.set(f,{y:"+=0"}),t.ignoreCheck=function(X){return Ni&&X.type==="touchmove"&&y()||g>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){S=!1;var X=g;g=Bs((ee.visualViewport&&ee.visualViewport.scale||1)/p),L.pause(),X!==g&&Vl(c,g>1.01?!0:n?!1:"x"),O=_(),G=d(),U(),x=Mr},t.onRelease=t.onGestureStart=function(X,V){if(d.offset&&v(),!V)Y.restart(!0);else{ne.cache++;var tt=T(),D,st;n&&(D=_(),st=D+tt*.05*-X.velocityX/.227,tt*=Bh(_,D,st,ci(c,mn)),L.vars.scrollX=E(st)),D=d(),st=D+tt*.05*-X.velocityY/.227,tt*=Bh(d,D,st,ci(c,Ve)),L.vars.scrollY=P(st),L.invalidate().duration(tt).play(.01),(Ni&&L.vars.scrollY>=l||D>=l-1)&&Rt.to({},{onUpdate:z,duration:tt})}a&&a(X)},t.onWheel=function(){L._ts&&L.pause(),rn()-m>1e3&&(x=0,m=rn())},t.onChange=function(X,V,tt,D,st){if(Mr!==x&&U(),V&&n&&_(E(D[2]===V?O+(X.startX-X.x):_()+V-D[1])),tt){d.offset&&v();var Pt=st[2]===tt,kt=Pt?G+X.startY-X.y:d()+tt-st[1],$=P(kt);Pt&&kt!==$&&(G+=$-kt),d($)}(tt||V)&&Ai()},t.onEnable=function(){Vl(c,n?!1:"x"),te.addEventListener("refresh",z),$e(ee,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},t.onDisable=function(){Vl(c,!0),Ye(ee,"resize",z),te.removeEventListener("refresh",z),R.kill()},t.lockAxis=t.lockAxis!==!1,o=new Oe(t),o.iOS=Ni,Ni&&!d()&&d(1),Ni&&Rt.ticker.add(si),Y=o._dc,L=Rt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Gd(d,d(),function(){return L.pause()})},onUpdate:Ai,onComplete:Y.vars.onComplete}),o};te.sort=function(r){if(on(r))return Qt.sort(r);var t=ee.pageYOffset||0;return te.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ee.innerHeight}),Qt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};te.observe=function(r){return new Oe(r)};te.normalizeScroll=function(r){if(typeof r>"u")return fn;if(r===!0&&fn)return fn.enable();if(r===!1){fn&&fn.kill(),fn=r;return}var t=r instanceof Oe?r:zS(r);return fn&&fn.target===t.target&&fn.kill(),Tr(t.target)&&(fn=t),t};te.core={_getVelocityProp:pc,_inputObserver:Vd,_scrollers:ne,_proxies:hi,bridge:{ss:function(){Kn||br("scrollStart"),Kn=rn()},ref:function(){return nn}}};Pd()&&Rt.registerPlugin(te);/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Ds,Ls,Gh=typeof Symbol=="function"?Symbol():"_split",yc,kS=()=>yc||lu.register(window.gsap),Vh=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,ma=r=>r?typeof r=="string"?ma(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...ma(e)):t.push(e),t),[]):[r]:[],Hh=r=>ma(r).filter(t=>t&&t.nodeType===1),Ec=[],Hl=function(){},GS={add:r=>r()},VS=/\s+/g,Wh=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Io={left:0,top:0,width:0,height:0},HS=(r,t)=>{for(;++t<r.length&&r[t]===Io;);return r[t]||Io},Xh=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},qh=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||Ec),n=r.length,i,s,a,o;if(e.size)for(;--n>-1;){s=r[n];for(a of e)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},Yh=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),qr=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),Tc=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=t,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=e.length+1;return n&&(h.className=n+(l?" "+n+f:"")),a&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=o),h.textContent=u,e.push(h),h};return l&&(n=n.replace("++","")),c.collection=e,c},WS=(r,t,e,n)=>{let i=Tc("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[a]);a<o;a++)l.appendChild(t[a]);l.normalize()}},Hd=(r,t,e,n,i,s,a,o,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:_=!0,prepareText:g}=t,p=r.getBoundingClientRect(),m=p,T=!_&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",x=0,S=e.collection,R,w,E,P,U,v,y,L,O,G,Y,z,X,V,tt,D,st,Pt;for(typeof d=="object"?(E=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",R=w!==" ";f<h.length;f++)if(P=h[f],P.nodeType===3){for(tt=P.textContent||"",_?tt=tt.replace(VS," "):T&&(tt=tt.replace(/\n/g,w+`
`)),g&&(tt=g(tt,r)),P.textContent=tt,U=w||E?tt.split(E||w):tt.match(o)||Ec,st=U[U.length-1],L=R?st.slice(-1)===" ":!st,st||U.pop(),m=p,y=R?U[0].charAt(0)===" ":!U[0],y&&qr(" ",r,P),U[0]||U.shift(),qh(U,l),s&&c||(P.textContent=""),O=1;O<=U.length;O++)if(D=U[O-1],!_&&T&&D.charAt(0)===`
`&&((u=P.previousSibling)==null||u.remove(),qr(document.createElement("br"),r,P),D=D.slice(1)),!_&&D==="")qr(w,r,P);else if(D===" ")r.insertBefore(document.createTextNode(" "),P);else{if(R&&D.charAt(0)===" "&&qr(" ",r,P),x&&O===1&&!y&&S.indexOf(x.parentNode)>-1?(v=S[S.length-1],v.appendChild(document.createTextNode(n?"":D))):(v=e(n?"":D),qr(v,r,P),x&&O===1&&!y&&v.insertBefore(x,v.firstChild)),n)for(Y=Vh?qh([...Vh.segment(D)].map(kt=>kt.segment),l):D.match(o)||Ec,Pt=0;Pt<Y.length;Pt++)v.appendChild(Y[Pt]===" "?document.createTextNode(" "):n(Y[Pt]));if(s&&c){if(tt=P.textContent=tt.substring(D.length+1,tt.length),G=v.getBoundingClientRect(),G.top>m.top&&G.left<=m.left){for(z=r.cloneNode(),X=r.childNodes[0];X&&X!==v;)V=X,X=X.nextSibling,z.appendChild(V);r.parentNode.insertBefore(z,r),i&&Yh(z)}m=G}(O<U.length||L)&&qr(O>=U.length?" ":R&&D.slice(-1)===" "?" "+w:w,r,P)}r.removeChild(P),x=0}else P.nodeType===1&&(a&&a.indexOf(P)>-1?(S.indexOf(P.previousSibling)>-1&&S[S.length-1].appendChild(P),x=P):(Hd(P,t,e,n,i,s,a,o,l,!0),x=0),i&&Yh(P))};const Wd=class Xd{constructor(t,e){this.isSplit=!1,kS(),this.elements=Hh(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(a=>{var o;e.overwrite!==!1&&((o=a[Gh])==null||o._data.orig.filter(({element:l})=>l===a).forEach(Xh)),a[Gh]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let a=n.length,o;for(;a--;){o=n[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Hl(this),this.split(e)}split(t){return(this._ctx||GS).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,u=e.indexOf("lines")>-1,h=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,d=h&&!f&&!u,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=_?new RegExp(_.source+"|"+Wh.source,"gu"):Wh,p=!!t.ignore&&Hh(t.ignore),{orig:m,animTime:T,obs:x}=this._data,S;(h||f||u)&&(this.elements.forEach((R,w)=>{m[w]={element:R,html:R.innerHTML,ariaL:R.getAttribute("aria-label"),ariaH:R.getAttribute("aria-hidden")},n==="auto"?R.setAttribute("aria-label",(R.textContent||"").trim()):n==="hidden"&&R.setAttribute("aria-hidden","true");let E=[],P=[],U=[],v=h?Tc("char",t,E):null,y=Tc("word",t,P),L,O,G,Y;if(Hd(R,t,y,v,d,i&&(u||d),p,g,_,!1),u){let z=ma(R.childNodes),X=WS(R,z,t,U),V,tt=[],D=0,st=z.map($=>$.nodeType===1?$.getBoundingClientRect():Io),Pt=Io,kt;for(L=0;L<z.length;L++)V=z[L],V.nodeType===1&&(V.nodeName==="BR"?((!L||z[L-1].nodeName!=="BR")&&(tt.push(V),X(D,L+1)),D=L+1,Pt=HS(st,L)):(kt=st[L],L&&kt.top>Pt.top&&kt.left<Pt.left+Pt.width-1&&(X(D,L),D=L),Pt=kt));D<L&&X(D,L),tt.forEach($=>{var nt;return(nt=$.parentNode)==null?void 0:nt.removeChild($)})}if(!f){for(L=0;L<P.length;L++)if(O=P[L],h||!O.nextSibling||O.nextSibling.nodeType!==3)if(s&&!u){for(G=document.createElement("span"),G.style.whiteSpace="nowrap";O.firstChild;)G.appendChild(O.firstChild);O.replaceWith(G)}else O.replaceWith(...O.childNodes);else Y=O.nextSibling,Y&&Y.nodeType===3&&(Y.textContent=(O.textContent||"")+(Y.textContent||""),O.remove());P.length=0,R.normalize()}this.lines.push(...U),this.words.push(...P),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(R=>{let w=R.cloneNode();return R.replaceWith(w),w.appendChild(R),R.className&&(w.className=R.className.trim().split(" ").map(E=>E+"-mask").join(" ")),w.style.overflow="clip",w}))),this.isSplit=!0,Ls&&u&&o&&Ls.addEventListener("loadingdone",this._split),(S=a&&a(this))&&S.totalTime&&(this._data.anim=T?S.totalTime(T):S),u&&o&&this.elements.forEach((R,w)=>{m[w].width=R.offsetWidth,x&&x.observe(R)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),Ls?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Xh),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Xd(t,e)}static register(t){Ds=Ds||t||window.gsap,Ds&&(ma=Ds.utils.toArray,Hl=Ds.core.context||Hl),!yc&&window.innerWidth>0&&(Ls=document.fonts,yc=!0)}};Wd.version="3.15.0";let lu=Wd;Ke.registerPlugin(te,lu);const XS=document.getElementById("hero-canvas"),Ac=document.getElementById("hero-canvas-wrapper"),Ea=new xv;let cs=window.innerWidth,us=window.innerHeight;const Uo=new In(55,cs/us,.1,1e3);Uo.position.set(0,0,6.5);const Wo=new vv({canvas:XS,antialias:!0,alpha:!0});Wo.setSize(cs,us);Wo.setPixelRatio(Math.min(window.devicePixelRatio,2));const qS=new jv({color:334374,roughness:.4,metalness:.7}),YS=new Pc({color:54527,wireframe:!0,transparent:!0,opacity:.48});function $S(r,t,e){const n=new _f,i=Math.PI*2/r,s=i*.21;for(let c=0;c<r;c++){const u=c*i,h=[[Math.cos(u-s)*t,Math.sin(u-s)*t],[Math.cos(u-s*.42)*e,Math.sin(u-s*.42)*e],[Math.cos(u+s*.42)*e,Math.sin(u+s*.42)*e],[Math.cos(u+s)*t,Math.sin(u+s)*t],[Math.cos(u+i-s)*t,Math.sin(u+i-s)*t]];c===0?n.moveTo(...h[0]):n.lineTo(...h[0]);for(let f=1;f<h.length;f++)n.lineTo(...h[f])}n.closePath();const a=new Kl,o=t*.38,l=28;for(let c=l;c>=0;c--){const u=c/l*Math.PI*2;c===l?a.moveTo(Math.cos(u)*o,Math.sin(u)*o):a.lineTo(Math.cos(u)*o,Math.sin(u)*o)}return n.holes.push(a),n}const bc=2*1.05/22;function KS(r,t,e){const n=t+bc,i=t-1.25*bc,s=new Nc($S(r,i,n),{depth:e,bevelEnabled:!0,bevelThickness:.025,bevelSize:.018,bevelSegments:2});s.center();const a=new Zr;return a.add(new ni(s,qS),new ni(s,YS)),a}const _a=[{teeth:22,ratio:1,parent:null,beta:0,r:0,x:0,y:0,init:0},{teeth:11,ratio:-2,parent:0,beta:0,r:0,x:0,y:0,init:0},{teeth:7,ratio:22/7,parent:1,beta:-Math.PI/2,r:0,x:0,y:0,init:0},{teeth:14,ratio:-22/14,parent:0,beta:Math.PI/2,r:0,x:0,y:0,init:0}];_a.forEach(r=>{if(r.r=bc*r.teeth/2,r.parent===null)return;const t=_a[r.parent],e=t.r+r.r;r.x=t.x+Math.cos(r.beta)*e,r.y=t.y+Math.sin(r.beta)*e,r.init=r.beta+Math.PI+(Math.PI-t.teeth*(t.init-r.beta))/r.teeth});const ga=new Zr,ZS=_a.map(r=>{const t=KS(r.teeth,r.r,.26);return t.position.set(r.x,r.y,0),t.rotation.z=r.init,ga.add(t),t});ga.position.set(2.3,-.35,0);Ea.add(ga);Ea.add(new ex(16777215,.18));const qd=new Mf(54527,10,26);qd.position.set(5,3,4);Ea.add(qd);const Yd=new Mf(17612,5,18);Yd.position.set(-2,-3,3);Ea.add(Yd);let $d=0,Kd=0,Wl=0,Xl=0;window.addEventListener("mousemove",r=>{$d=(r.clientX/cs-.5)*1,Kd=(r.clientY/us-.5)*.7},{passive:!0});let Zd=1;te.create({trigger:"#hero",start:"top top",end:"bottom top",onUpdate:r=>{Zd=1+r.progress*5}});let $h=0;function Jd(){requestAnimationFrame(Jd),$h+=.007*Zd,ZS.forEach((r,t)=>{r.rotation.z=_a[t].init+$h*_a[t].ratio}),Wl+=($d-Wl)*.04,Xl+=(Kd-Xl)*.04,ga.rotation.y=Wl*.5,ga.rotation.x=-Xl*.35,Wo.render(Ea,Uo)}Jd();Ke.to(Ac,{opacity:0,scrollTrigger:{trigger:"#hero",start:"50% top",end:"90% top",scrub:1}});window.addEventListener("resize",()=>{cs=window.innerWidth,us=window.innerHeight,Uo.aspect=cs/us,Uo.updateProjectionMatrix(),Wo.setSize(cs,us),te.refresh()});const jd=document.getElementById("main-nav"),JS=jd.querySelector(".nav-progress");window.addEventListener("scroll",()=>{jd.classList.toggle("scrolled",window.scrollY>60);const r=document.documentElement.scrollHeight-window.innerHeight;JS.style.width=window.scrollY/r*100+"%"},{passive:!0});const Qd=document.getElementById("cursor"),No=document.getElementById("cursor-follower"),jS=Ke.quickTo(Qd,"x",{duration:.08}),QS=Ke.quickTo(Qd,"y",{duration:.08}),tM=Ke.quickTo(No,"x",{duration:.38,ease:"power3"}),eM=Ke.quickTo(No,"y",{duration:.38,ease:"power3"});window.addEventListener("mousemove",r=>{jS(r.clientX),QS(r.clientY),tM(r.clientX),eM(r.clientY)},{passive:!0});document.querySelectorAll("a, button").forEach(r=>{r.addEventListener("mouseenter",()=>Ke.to(No,{scale:2.2,opacity:.18,duration:.3})),r.addEventListener("mouseleave",()=>Ke.to(No,{scale:1,opacity:.45,duration:.3}))});const nM=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!nM){Ke.set(Ac,{opacity:0}),Ke.set("#main-nav",{opacity:0,y:-24}),Ke.set(".hero-eyebrow",{opacity:0}),Ke.set(".hero-subtitle",{opacity:0,y:18}),Ke.set(".hero-tags",{opacity:0,y:16}),Ke.set(".hero-ctas",{opacity:0,y:16}),Ke.set(".scroll-indicator",{opacity:0});const r=new lu(".hero-name",{type:"chars"});Ke.set(r.chars,{opacity:0,y:70,rotationX:-85,transformOrigin:"50% 50% -30px"});const t=Ke.timeline({delay:.25});t.to(Ac,{opacity:1,duration:1.6,ease:"power2.out"}),t.to(r.chars,{opacity:1,y:0,rotationX:0,stagger:.038,duration:.72,ease:"back.out(1.8)"},"-=1.0"),t.to(".hero-eyebrow",{opacity:1,duration:.5,ease:"power3.out"},"-=0.5"),t.to(".hero-subtitle",{opacity:1,y:0,duration:.65,ease:"power3.out"},"-=0.35"),t.to(".hero-tags",{opacity:1,y:0,duration:.6,ease:"power3.out"},"-=0.45"),t.to(".hero-ctas",{opacity:1,y:0,duration:.6,ease:"power3.out"},"-=0.45"),t.to(".scroll-indicator",{opacity:1,duration:.6},"-=0.2"),t.to("#main-nav",{opacity:1,y:0,duration:.55,ease:"power3.out"},"<-1.2")}const tp=new IntersectionObserver(r=>r.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),tp.unobserve(t.target))}),{threshold:.14});document.querySelectorAll(".reveal").forEach(r=>tp.observe(r));
