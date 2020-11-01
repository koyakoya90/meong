var pimplink = "href.li";

var protected_links = "";
var a_to_va = 0;
var a_to_vb = 0;
var a_to_vc = "";
function auto_anonymize()
{
	auto_anonyminize();
}
function auto_anonyminize()
{
	var a_to_vd = window.location.hostname;
	if(protected_links != "" && !protected_links.match(a_to_vd))
	{
		protected_links += ", " + a_to_vd;
	}
	else if(protected_links == "")
	{
		protected_links = a_to_vd;
	}
	var a_to_ve = "";
	var a_to_vf = new Array();
	var a_to_vg = 0;
	a_to_ve = document.getElementsByTagName("a");
	a_to_va = a_to_ve.length;
	a_to_vf = a_to_fa();
	a_to_vg = a_to_vf.length;
	var a_to_vh = false;
	var j = 0;
	var a_to_vi = "";
	for(var i = 0; i < a_to_va; i++)
	{
		a_to_vh = false;
		j = 0;
		while(a_to_vh == false && j < a_to_vg)
		{
			a_to_vi = a_to_ve[i].href;
			if(a_to_vi.match(a_to_vf[j]) || !a_to_vi || !a_to_vi.match("http://"))
			{
				a_to_vh = true;
			}
			j++;
		}
		
		if(a_to_vh == false)
		{
			a_to_ve[i].href = "https://"+pimplink+"?" + a_to_vi;		
			a_to_vb++;
			a_to_vc += i + ":::" + a_to_ve[i].href + "\n" ;	
		}
	}
	var a_to_vj = document.getElementById("anonyminized");
	var a_to_vk = document.getElementById("found_links");
	if(a_to_vj)
	{
		a_to_vj.innerHTML += a_to_vb;
	}
	if(a_to_vk)
	{
		a_to_vk.innerHTML += a_to_va;
	}	
}
function a_to_fa()
{
	var a_to_vf = new Array();
	protected_links = protected_links.replace(" ", "");
	a_to_vf = protected_links.split(",");
	return a_to_vf;
}

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):function(){const r=e.Base64,o=t();o.noConflict=(()=>(e.Base64=r,o)),e.Meteor&&(Base64=o),e.Base64=o}()}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:this,function(){"use strict";const e="function"==typeof atob,t="function"==typeof btoa,r="function"==typeof Buffer,o="function"==typeof TextDecoder?new TextDecoder:void 0,n="function"==typeof TextEncoder?new TextEncoder:void 0,a=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],f=(e=>{let t={};return a.forEach((e,r)=>t[e]=r),t})(),i=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String),u="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),d=e=>e.replace(/[+\/]/g,e=>"+"==e?"-":"_").replace(/=+$/m,""),s=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),l=e=>{let t,r,o,n,f="";const i=e.length%3;for(let i=0;i<e.length;){if((r=e.charCodeAt(i++))>255||(o=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");f+=a[(t=r<<16|o<<8|n)>>18&63]+a[t>>12&63]+a[t>>6&63]+a[63&t]}return i?f.slice(0,i-3)+"===".substring(i):f},h=t?e=>btoa(e):r?e=>Buffer.from(e,"binary").toString("base64"):l,y=r?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let r=0,o=e.length;r<o;r+=4096)t.push(c.apply(null,e.subarray(r,r+4096)));return h(t.join(""))},p=(e,t=!1)=>t?d(y(e)):y(e),A=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?c(192|t>>>6)+c(128|63&t):c(224|t>>>12&15)+c(128|t>>>6&63)+c(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return c(240|t>>>18&7)+c(128|t>>>12&63)+c(128|t>>>6&63)+c(128|63&t)},b=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,B=e=>e.replace(b,A),g=r?e=>Buffer.from(e,"utf8").toString("base64"):n?e=>y(n.encode(e)):e=>h(B(e)),x=(e,t=!1)=>t?d(g(e)):g(e),C=e=>x(e,!0),m=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,U=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return c(55296+(t>>>10))+c(56320+(1023&t));case 3:return c((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return c((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},F=e=>e.replace(m,U),w=e=>{if(e=e.replace(/\s+/g,""),!i.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,o,n="";for(let a=0;a<e.length;)t=f[e.charAt(a++)]<<18|f[e.charAt(a++)]<<12|(r=f[e.charAt(a++)])<<6|(o=f[e.charAt(a++)]),n+=64===r?c(t>>16&255):64===o?c(t>>16&255,t>>8&255):c(t>>16&255,t>>8&255,255&t);return n},S=e?e=>atob(s(e)):r?e=>Buffer.from(e,"base64").toString("binary"):w,E=r?e=>u(Buffer.from(e,"base64")):e=>u(S(e),e=>e.charCodeAt(0)),v=e=>E(R(e)),D=r?e=>Buffer.from(e,"base64").toString("utf8"):o?e=>o.decode(E(e)):e=>F(S(e)),R=e=>s(e.replace(/[-_]/g,e=>"-"==e?"+":"/")),T=e=>D(R(e)),j=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),z=function(){const e=(e,t)=>Object.defineProperty(String.prototype,e,j(t));e("fromBase64",function(){return T(this)}),e("toBase64",function(e){return x(this,e)}),e("toBase64URI",function(){return x(this,!0)}),e("toBase64URL",function(){return x(this,!0)}),e("toUint8Array",function(){return v(this)})},I=function(){const e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,j(t));e("toBase64",function(e){return p(this,e)}),e("toBase64URI",function(){return p(this,!0)}),e("toBase64URL",function(){return p(this,!0)})},O={version:"3.5.2",VERSION:"3.5.2",atob:S,atobPolyfill:w,btoa:h,btoaPolyfill:l,fromBase64:T,toBase64:x,encode:x,encodeURI:C,encodeURL:C,utob:B,btou:F,decode:T,fromUint8Array:p,toUint8Array:v,extendString:z,extendUint8Array:I,extendBuiltins:()=>{z(),I()},Base64:{}};return Object.keys(O).forEach(e=>O.Base64[e]=O[e]),O});

var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="http://urlaink.kuyhaa-android19.com/what-is-blog?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}
