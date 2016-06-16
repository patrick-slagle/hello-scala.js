(function(){'use strict';
var f="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},k="object"===typeof f.global&&f.global?f.global:"object"===typeof global&&global&&global.Object===Object?global:this;f.global=k;var l="object"===typeof f.exportsNamespace&&f.exportsNamespace?f.exportsNamespace:k;f.exportsNamespace=l;k.Object.freeze(f);var n={envInfo:f,semantics:{asInstanceOfs:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.9"};k.Object.freeze(n);k.Object.freeze(n.semantics);
var q=k.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},r=k.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},s=0,t=k.WeakMap?new k.WeakMap:null;function u(a){return function(b,c){return!(!b||!b.a||b.a.p!==c||b.a.n!==a)}}function aa(a){for(var b in a)return b}
function v(a,b,c){var d=new a.E(b[c]);if(c<b.length-1){a=a.q;c+=1;for(var e=d.C,g=0;g<e.length;g++)e[g]=v(a,b,c)}return d}function ba(a){switch(typeof a){case "string":return w(x);case "number":var b=a|0;return b===a?b<<24>>24===b&&1/b!==1/-0?w(y):b<<16>>16===b&&1/b!==1/-0?w(A):w(B):"number"===typeof a?w(C):w(D);case "boolean":return w(E);case "undefined":return w(F);default:return null===a?a.ja():a&&a.a&&a.a.j.A?w(G):a&&a.a?w(a.a):null}}
function ca(a){switch(typeof a){case "string":da||(da=(new H).f());for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+q(65535&(a.charCodeAt(d)|0),c)|0,c=q(31,c),d=-1+d|0;return b;case "number":I||(I=(new J).f());b=I;c=a|0;if(c===a&&-Infinity!==1/a)b=c;else{if(b.k)b.F[0]=a,b=ea(fa(K(b.v[b.G]|0)),ga((new L).e(-1,0),K(b.v[b.H]|0)));else{if(a!==a)b=!1,a=2047,c=+k.Math.pow(2,51);else if(Infinity===a||-Infinity===a)b=0>a,a=2047,c=0;else if(0===a)b=-Infinity===1/a,c=a=0;else if(d=(b=0>a)?-a:a,d>=+k.Math.pow(2,
-1022)){a=+k.Math.pow(2,52);var c=+k.Math.log(d)/0.6931471805599453,c=+k.Math.floor(c)|0,c=1023>c?c:1023,e=d/+k.Math.pow(2,c)*a,d=+k.Math.floor(e),e=e-d,d=0.5>e?d:0.5<e?1+d:0!==d%2?1+d:d;2<=d/a&&(c=1+c|0,d=1);1023<c?(c=2047,d=0):(c=1023+c|0,d-=a);a=c;c=d}else a=d/+k.Math.pow(2,-1074),c=+k.Math.floor(a),d=a-c,a=0,c=0.5>d?c:0.5<d?1+c:0!==c%2?1+c:c;c=+c;d=c|0;b=ea(fa(K((b?-2147483648:0)|(a|0)<<20|c/4294967296|0)),ga((new L).e(-1,0),K(d)))}b=b.g^b.h}return b;case "boolean":return a?1231:1237;case "undefined":return 0;
default:return a&&a.a||null===a?a.z():null===t?42:ia(a)}}function ja(a,b){for(var c=k.Object.getPrototypeOf,d=k.Object.getOwnPropertyDescriptor,e=c(a);null!==e;){var g=d(e,b);if(void 0!==g)return g;e=c(e)}}function ka(a,b,c){a=ja(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}function la(a,b,c,d){a=ja(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,d);return}throw new k.TypeError("super has no setter '"+c+"'.");}
var ia=null!==t?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return ca(a);default:if(null===a)return 0;var b=t.get(a);void 0===b&&(s=b=s+1|0,t.set(a,b));return b}}:function(a){if(a&&a.a){var b=a.$idHashCode$0;if(void 0!==b)return b;if(k.Object.isSealed(a))return 42;s=b=s+1|0;return a.$idHashCode$0=b}return null===a?0:ca(a)};this.__ScalaJSExportsNamespace=l;
function M(){this.w=this.E=void 0;this.n=this.q=this.j=null;this.p=0;this.D=null;this.u="";this.c=this.s=this.t=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function N(a,b,c){var d=new M;d.j={};d.q=null;d.D=a;d.u=b;d.c=function(){return!1};d.name=c;d.isPrimitive=!0;d.isInstance=function(){return!1};return d}
function O(a,b,c,d,e,g,p){var h=new M,m=aa(a);g=g||function(a){return!!(a&&a.a&&a.a.j[m])};p=p||function(a,b){return!!(a&&a.a&&a.a.p===b&&a.a.n.j[m])};h.w=e;h.j=c;h.u="L"+b+";";h.c=p;h.name=b;h.isInterface=!1;h.isRawJSType=!!d;h.isInstance=g;return h}
function ma(a){function b(a){if("number"===typeof a){this.C=Array(a);for(var b=0;b<a;b++)this.C[b]=e}else this.C=a}var c=new M,d=a.D,e="longZero"==d?na().x:d;b.prototype=new P;b.prototype.a=c;var d="["+a.u,g=a.n||a,p=a.p+1;c.E=b;c.w=oa;c.j={b:1,la:1,d:1};c.q=a;c.n=g;c.p=p;c.D=null;c.u=d;c.t=void 0;c.s=void 0;c.c=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return g.c(a,p)};return c}function w(a){if(!a.t){var b=new Q;b.r=a;a.t=b}return a.t}
M.prototype.getFakeInstance=function(){return this===x?"some string":this===E?!1:this===y||this===A||this===B||this===C||this===D?0:this===G?na().x:this===F?void 0:{a:this}};M.prototype.getSuperclass=function(){return this.w?w(this.w):null};M.prototype.getComponentType=function(){return this.q?w(this.q):null};M.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b.s||(b.s=ma(b)),b=b.s;return v(b,a,0)};
var pa=N(!1,"Z","boolean"),qa=N(0,"C","char"),ra=N(0,"B","byte"),sa=N(0,"S","short"),ta=N(0,"I","int"),va=N("longZero","J","long"),wa=N(0,"F","float"),xa=N(0,"D","double");pa.c=u(pa);qa.c=u(qa);ra.c=u(ra);sa.c=u(sa);ta.c=u(ta);va.c=u(va);wa.c=u(wa);xa.c=u(xa);function R(){}function P(){}P.prototype=R.prototype;R.prototype.f=function(){return this};R.prototype.B=function(){var a;a=ba(this).r.name;var b=(+(this.z()>>>0)).toString(16);return a+"@"+b};R.prototype.z=function(){return ia(this)};R.prototype.toString=function(){return this.B()};var oa=O({b:0},"java.lang.Object",{b:1},void 0,void 0,function(a){return null!==a},function(a,b){var c=a&&a.a;if(c){var d=c.p||0;return!(d<b)&&(d>b||!c.n.isPrimitive)}return!1});R.prototype.a=oa;
function S(){this.l=null}S.prototype=new P;S.prototype.constructor=S;S.prototype.f=function(){T=this;this.l=k.jQuery;return this};S.prototype.a=O({I:0},"org.scalajs.jquery.package$",{I:1,b:1});var T=void 0;function U(){T||(T=(new S).f());return T}function Q(){this.r=null}Q.prototype=new P;Q.prototype.constructor=Q;Q.prototype.B=function(){return(this.r.isInterface?"interface ":this.r.isPrimitive?"":"class ")+this.r.name};Q.prototype.a=O({S:0},"java.lang.Class",{S:1,b:1});
function J(){this.k=!1;this.F=this.P=this.v=this.o=null;this.y=!1;this.H=this.G=0}J.prototype=new P;J.prototype.constructor=J;
J.prototype.f=function(){I=this;this.o=(this.k=!!(k.ArrayBuffer&&k.Int32Array&&k.Float32Array&&k.Float64Array))?new k.ArrayBuffer(8):null;this.v=this.k?new k.Int32Array(this.o,0,2):null;this.P=this.k?new k.Float32Array(this.o,0,2):null;this.F=this.k?new k.Float64Array(this.o,0,1):null;if(this.k)this.v[0]=16909060,a=1===((new k.Int8Array(this.o,0,8))[0]|0);else var a=!0;this.G=(this.y=a)?0:1;this.H=this.y?1:0;return this};J.prototype.a=O({Y:0},"scala.scalajs.runtime.Bits$",{Y:1,b:1});var I=void 0;
function H(){this.ea=null;this.ia=!1}H.prototype=new P;H.prototype.constructor=H;H.prototype.f=function(){return this};H.prototype.a=O({$:0},"scala.scalajs.runtime.RuntimeString$",{$:1,b:1});var da=void 0;function V(){}V.prototype=new P;V.prototype.constructor=V;V.prototype.f=function(){W=this;(0,U().l)('\x3cbutton type\x3d"button"\x3eClick Me!\x3c/button\x3e').click(function(){X();return(0,U().l)("body").append("\x3cp\x3eYou clicked me!\x3c/p\x3e")}).appendTo((0,U().l)("body"));return this};
function ya(){(0,U().l)(function(){X();return(0,U().l)("body").append("\x3cp\x3eHello World!\x3c/p\x3e")})}V.prototype.main=function(){ya()};V.prototype.a=O({J:0},"tutorial.webapp.TutorialApp$",{J:1,b:1,na:1});var W=void 0;function X(){W||(W=(new V).f());return W}l.tutorial=l.tutorial||{};l.tutorial.webapp=l.tutorial.webapp||{};l.tutorial.webapp.TutorialApp=X;function Y(){}Y.prototype=new P;Y.prototype.constructor=Y;function Aa(){}Aa.prototype=Y.prototype;
var F=O({aa:0},"scala.runtime.BoxedUnit",{aa:1,b:1,d:1},void 0,void 0,function(a){return void 0===a}),E=O({Q:0},"java.lang.Boolean",{Q:1,b:1,d:1,i:1},void 0,void 0,function(a){return"boolean"===typeof a});function Z(){this.ba=this.da=this.ca=this.ha=this.ga=this.fa=0;this.K=this.L=this.M=this.N=this.x=null}Z.prototype=new P;Z.prototype.constructor=Z;
Z.prototype.f=function(){$=this;this.x=(new L).e(0,0);this.N=(new L).e(1,0);this.M=(new L).e(-1,-1);this.L=(new L).e(0,-2147483648);this.K=(new L).e(-1,2147483647);return this};Z.prototype.a=O({Z:0},"scala.scalajs.runtime.RuntimeLong$",{Z:1,b:1,ma:1,d:1});var $=void 0;function na(){$||($=(new Z).f());return $}
var x=O({O:0},"java.lang.String",{O:1,b:1,d:1,ka:1,i:1},void 0,void 0,function(a){return"string"===typeof a}),y=O({R:0},"java.lang.Byte",{R:1,m:1,b:1,d:1,i:1},void 0,void 0,function(a){return a<<24>>24===a&&1/a!==1/-0}),D=O({T:0},"java.lang.Double",{T:1,m:1,b:1,d:1,i:1},void 0,void 0,function(a){return"number"===typeof a}),C=O({U:0},"java.lang.Float",{U:1,m:1,b:1,d:1,i:1},void 0,void 0,function(a){return"number"===typeof a}),B=O({V:0},"java.lang.Integer",{V:1,m:1,b:1,d:1,i:1},void 0,void 0,function(a){return(a|
0)===a&&1/a!==1/-0}),G=O({W:0},"java.lang.Long",{W:1,m:1,b:1,d:1,i:1},void 0,void 0,function(a){return!!(a&&a.a&&a.a.j.A)}),A=O({X:0},"java.lang.Short",{X:1,m:1,b:1,d:1,i:1},void 0,void 0,function(a){return a<<16>>16===a&&1/a!==1/-0});function L(){this.h=this.g=0}L.prototype=new Aa;L.prototype.constructor=L;function ea(a,b){return(new L).e(a.g|b.g,a.h|b.h)}L.prototype.B=function(){var a=this.g,b=this.h;return b===a>>31?""+a:0>b?"-"+Ba(-a|0,0!==a?~b:-b|0):Ba(a,b)};
L.prototype.e=function(a,b){this.g=a;this.h=b;return this};function ga(a,b){return(new L).e(a.g&b.g,a.h&b.h)}function fa(a){return(new L).e(0,a.g<<32)}function K(a){var b=new L;L.prototype.e.call(b,a,a>>31);return b}L.prototype.z=function(){return this.g^this.h};
function Ba(a,b){if(0===(-2097152&b))return""+(4294967296*b+ +(a>>>0));var c,d=(32+r(1E9)|0)-(0!==b?r(b):32+r(a)|0)|0,e=d;0===e?(c=1E9,e=0):32>e?(c=1E9<<e,e=1E9>>>(-e|0)|0|0<<e):(c=0,e=1E9<<e);for(var g=c,p=e,h=a,m=b,e=c=0;0<=d&&0!==(-2097152&m);){var z=h,ha=m,za=g,ua=p;if(ha===ua?(-2147483648^z)>=(-2147483648^za):(-2147483648^ha)>=(-2147483648^ua))z=h,h=z-g|0,m=(m-p|0)+((-2147483648^z)<(-2147483648^h)?-1:0)|0,32>d?c|=1<<d:e|=1<<d;d=-1+d|0;z=p>>>1|0;g=g>>>1|0|p<<-1;p=z}d=m;if(0===d?-1147483648<=(-2147483648^
h):-2147483648<=(-2147483648^d))d=4294967296*m+ +(h>>>0),g=d/1E9,h=c,c=m=h+(g|0)|0,e=(e+(g/4294967296|0)|0)+((-2147483648^m)<(-2147483648^h)?1:0)|0,d%=1E9,h=d|0,m=d/4294967296|0;c=[c,e,h,m];e=""+(c["2"]|0);return""+(4294967296*(c["1"]|0)+ +((c["0"]|0)>>>0))+"000000000".substring(e.length|0)+e}L.prototype.a=O({A:0},"scala.scalajs.runtime.RuntimeLong",{A:1,m:1,b:1,d:1,i:1});
}).call(this);
//# sourceMappingURL=scala-js-tutorial-opt.js.map
