
; /* Start:"a:4:{s:4:"full";s:83:"/local/templates/empty/js/vendor/modernizr-html5shiv-respond.min.js?145268842618171";s:6:"source";s:67:"/local/templates/empty/js/vendor/modernizr-html5shiv-respond.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
window.Modernizr=function(e,f,r){function l(a,b){return typeof a===b}function v(a,b){for(var d in a){var q=a[d];if(!~(""+q).indexOf("-")&&n[q]!==r)return"pfx"==b?q:!0}return!1}function p(a,b,d){var q=a.charAt(0).toUpperCase()+a.slice(1),c=(a+" "+C.join(q+" ")+q).split(" ");if(l(b,"string")||l(b,"undefined"))return v(c,b);c=(a+" "+A.join(q+" ")+q).split(" ");a:{a=c;for(var h in a)if(q=b[a[h]],q!==r){b=!1===d?a[h]:l(q,"function")?q.bind(d||b):q;break a}b=!1}return b}function w(){g.input=function(a){for(var b=
0,d=a.length;b<d;b++)D[a[b]]=!!(a[b]in k);D.list&&(D.list=!(!f.createElement("datalist")||!e.HTMLDataListElement));return D}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));g.inputtypes=function(a){for(var b=0,d,q,c=a.length;b<c;b++){k.setAttribute("type",q=a[b]);if(d="text"!==k.type)k.value=u,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(q)&&k.style.WebkitAppearance!==r?(s.appendChild(k),d=f.defaultView,d=d.getComputedStyle&&"textfield"!==
d.getComputedStyle(k,null).WebkitAppearance&&0!==k.offsetHeight,s.removeChild(k)):/^(search|tel)$/.test(q)||(d=/^(url|email)$/.test(q)?k.checkValidity&&!1===k.checkValidity():k.value!=u);H[a[b]]=!!d}return H}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var g={},s=f.documentElement,c=f.createElement("modernizr"),n=c.style,k=f.createElement("input"),u=":)",z={}.toString,B=" -webkit- -moz- -o- -ms- ".split(" "),C=["Webkit","Moz","O","ms"],A=["webkit",
"moz","o","ms"],c={},H={},D={},E=[],F=E.slice,I,G=function(a,b,d,q){var c,h,e=f.createElement("div"),g=f.body,y=g||f.createElement("body");if(parseInt(d,10))for(;d--;)c=f.createElement("div"),c.id=q?q[d]:"modernizr"+(d+1),e.appendChild(c);d=['&#173;<style id="smodernizr">',a,"</style>"].join("");e.id="modernizr";(g?e:y).innerHTML+=d;y.appendChild(e);g||(y.style.background="",y.style.overflow="hidden",h=s.style.overflow,s.style.overflow="hidden",s.appendChild(y));a=b(e,a);g?e.parentNode.removeChild(e):
(y.parentNode.removeChild(y),s.style.overflow=h);return!!a},t=function(){var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(b,d){d=d||f.createElement(a[b]||"div");b="on"+b;var q=b in d;q||(d.setAttribute||(d=f.createElement("div")),d.setAttribute&&d.removeAttribute&&(d.setAttribute(b,""),q=l(d[b],"function"),l(d[b],"undefined")||(d[b]=r),d.removeAttribute(b)));return q}}(),h={}.hasOwnProperty,m;m=l(h,"undefined")||l(h.call,"undefined")?
function(a,b){return b in a&&l(a.constructor.prototype[b],"undefined")}:function(a,b){return h.call(a,b)};Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var d=F.call(arguments,1),q=function(){if(this instanceof q){var c=function(){};c.prototype=b.prototype;var c=new c,h=b.apply(c,d.concat(F.call(arguments)));return Object(h)===h?h:c}return b.apply(a,d.concat(F.call(arguments)))};return q});c.flexbox=function(){return p("flexWrap")};
c.canvas=function(){var a=f.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))};c.canvastext=function(){return!(!g.canvas||!l(f.createElement("canvas").getContext("2d").fillText,"function"))};c.webgl=function(){return!!e.WebGLRenderingContext};c.touch=function(){var a;"ontouchstart"in e||e.DocumentTouch&&f instanceof DocumentTouch?a=!0:G(["@media (",B.join("touch-enabled),("),"modernizr){#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop});return a};c.geolocation=
function(){return"geolocation"in navigator};c.postmessage=function(){return!!e.postMessage};c.websqldatabase=function(){return!!e.openDatabase};c.indexedDB=function(){return!!p("indexedDB",e)};c.hashchange=function(){return t("hashchange",e)&&(f.documentMode===r||7<f.documentMode)};c.history=function(){return!(!e.history||!history.pushState)};c.draganddrop=function(){var a=f.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a};c.websockets=function(){return"WebSocket"in e||
"MozWebSocket"in e};c.rgba=function(){n.cssText="background-color:rgba(150,255,150,.5)";return!!~(""+n.backgroundColor).indexOf("rgba")};c.hsla=function(){n.cssText="background-color:hsla(120,40%,100%,.5)";return!!~(""+n.backgroundColor).indexOf("rgba")||!!~(""+n.backgroundColor).indexOf("hsla")};c.multiplebgs=function(){n.cssText="background:url(https://),url(https://),red url(https://)";return/(url\s*\(.*?){3}/.test(n.background)};c.backgroundsize=function(){return p("backgroundSize")};c.borderimage=
function(){return p("borderImage")};c.borderradius=function(){return p("borderRadius")};c.boxshadow=function(){return p("boxShadow")};c.textshadow=function(){return""===f.createElement("div").style.textShadow};c.opacity=function(){var a=B.join("opacity:.55;")+"";n.cssText=a;return/^0.55$/.test(n.opacity)};c.cssanimations=function(){return p("animationName")};c.csscolumns=function(){return p("columnCount")};c.cssgradients=function(){var a=("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:"+
B.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);n.cssText=a;return!!~(""+n.backgroundImage).indexOf("gradient")};c.cssreflections=function(){return p("boxReflect")};c.csstransforms=function(){return!!p("transform")};c.csstransforms3d=function(){var a=!!p("perspective");a&&"webkitPerspective"in s.style&&G("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,d){a=9===b.offsetLeft&&3===b.offsetHeight});return a};
c.csstransitions=function(){return p("transition")};c.fontface=function(){var a;G('@font-face {font-family:"font";src:url("https://")}',function(b,d){var c=f.getElementById("smodernizr"),c=(c=c.sheet||c.styleSheet)?c.cssRules&&c.cssRules[0]?c.cssRules[0].cssText:c.cssText||"":"";a=/src/i.test(c)&&0===c.indexOf(d.split(" ")[0])});return a};c.generatedcontent=function(){var a;G(['#modernizr{font:0/0 a}#modernizr:after{content:"',u,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=3<=b.offsetHeight});
return a};c.video=function(){var a=f.createElement("video"),b=!1;try{if(b=!!a.canPlayType)b=new Boolean(b),b.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return b};c.audio=function(){var a=f.createElement("audio"),b=!1;try{if(b=!!a.canPlayType)b=new Boolean(b),b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,
""),b.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),b.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),b.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return b};c.localstorage=function(){try{return localStorage.setItem("modernizr","modernizr"),localStorage.removeItem("modernizr"),!0}catch(a){return!1}};c.sessionstorage=function(){try{return sessionStorage.setItem("modernizr","modernizr"),sessionStorage.removeItem("modernizr"),!0}catch(a){return!1}};
c.webworkers=function(){return!!e.Worker};c.applicationcache=function(){return!!e.applicationCache};c.svg=function(){return!!f.createElementNS&&!!f.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect};c.inlinesvg=function(){var a=f.createElement("div");a.innerHTML="<svg/>";return"http://www.w3.org/2000/svg"==(a.firstChild&&a.firstChild.namespaceURI)};c.smil=function(){return!!f.createElementNS&&/SVGAnimate/.test(z.call(f.createElementNS("http://www.w3.org/2000/svg","animate")))};c.svgclippaths=
function(){return!!f.createElementNS&&/SVGClipPath/.test(z.call(f.createElementNS("http://www.w3.org/2000/svg","clipPath")))};for(var J in c)m(c,J)&&(I=J.toLowerCase(),g[I]=c[J](),E.push((g[I]?"":"no-")+I));g.input||w();g.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&g.addTest(d,a[d]);else{a=a.toLowerCase();if(g[a]!==r)return g;b="function"==typeof b?b():b;s.className+=" "+(b?"":"no-")+a;g[a]=b}return g};n.cssText="";c=k=null;(function(a,b){function d(){var b=n.elements;return"string"==
typeof b?b.split(" "):b}function c(b){var a=K[b[l]];a||(a={},p++,b[l]=p,K[p]=a);return a}function h(a,d,e){d||(d=b);if(k)return d.createElement(a);e||(e=c(d));d=e.cache[a]?e.cache[a].cloneNode():t.test(a)?(e.cache[a]=e.createElem(a)).cloneNode():e.createElem(a);return d.canHaveChildren&&!y.test(a)?e.frag.appendChild(d):d}function e(b,a){a.cache||(a.cache={},a.createElem=b.createElement,a.createFrag=b.createDocumentFragment,a.frag=a.createFrag());b.createElement=function(d){return n.shivMethods?h(d,
b,a):a.createElem(d)};b.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(b){a.createElem(b);a.frag.createElement(b);return'c("'+b+'")'})+");return n}")(n,a.frag)}function f(a){a||(a=b);var d=c(a);if(n.shivCSS&&!m&&!d.hasCSS){var h,g=a;h=g.createElement("p");g=g.getElementsByTagName("head")[0]||g.documentElement;h.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
h=g.insertBefore(h.lastChild,g.firstChild);d.hasCSS=!!h}k||e(a,d);return a}var g=a.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,t=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m,l="_html5shiv",p=0,K={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>";m="hidden"in a;var d;if(!(d=1==a.childNodes.length)){b.createElement("a");var c=b.createDocumentFragment();d="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}k=d}catch(h){k=m=!0}})();var n={elements:g.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==g.shivCSS,supportsUnknownElements:k,shivMethods:!1!==g.shivMethods,type:"default",shivDocument:f,createElement:h,createDocumentFragment:function(a,h){a||(a=b);if(k)return a.createDocumentFragment();
h=h||c(a);for(var e=h.frag.cloneNode(),g=0,f=d(),m=f.length;g<m;g++)e.createElement(f[g]);return e}};a.html5=n;f(b)})(this,f);g._version="2.6.2";g._prefixes=B;g._domPrefixes=A;g._cssomPrefixes=C;g.hasEvent=t;g.testProp=function(a){return v([a])};g.testAllProps=p;g.testStyles=G;g.prefixed=function(a,b,d){return b?p(a,b,d):p(a,"pfx")};s.className=s.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+E.join(" "));return g}(this,this.document);
(function(e,f,r){function l(b){return"[object Function]"==B.call(b)}function v(b){return"string"==typeof b}function p(){}function w(b){return!b||"loaded"==b||"complete"==b||"uninitialized"==b}function g(){var b=C.shift();A=1;b?b.t?u(function(){("c"==b.t?a.injectCss:a.injectJs)(b.s,0,b.a,b.x,b.e,1)},0):(b(),g()):A=0}function s(b,d,c,e,m,t,p){function y(a){if(!k&&w(x.readyState)&&(n.r=k=1,!A&&g(),x.onload=x.onreadystatechange=null,a)){"img"!=b&&u(function(){E.removeChild(x)},50);for(var c in h[d])h[d].hasOwnProperty(c)&&
h[d][c].onload()}}p=p||a.errorTimeout;var x=f.createElement(b),k=0,l=0,n={t:c,s:d,e:m,a:t,x:p};1===h[d]&&(l=1,h[d]=[]);"object"==b?x.data=d:(x.src=d,x.type=b);x.width=x.height="0";x.onerror=x.onload=x.onreadystatechange=function(){y.call(this,l)};C.splice(e,0,n);"img"!=b&&(l||2===h[d]?(E.insertBefore(x,D?null:z),u(y,p)):h[d].push(x))}function c(b,a,c,h,e){return A=0,a=a||"j",v(b)?s("c"==a?I:F,b,a,this.i++,c,h,e):(C.splice(this.i++,0,b),1==C.length&&g()),this}function n(){var b=a;return b.loader={load:c,
i:0},b}var k=f.documentElement,u=e.setTimeout,z=f.getElementsByTagName("script")[0],B={}.toString,C=[],A=0,H="MozAppearance"in k.style,D=H&&!!f.createRange().compareNode,E=D?k:z.parentNode,k=e.opera&&"[object Opera]"==B.call(e.opera),k=!!f.attachEvent&&!k,F=H?"object":k?"script":"img",I=k?"script":F,G=Array.isArray||function(a){return"[object Array]"==B.call(a)},t=[],h={},m={timeout:function(a,d){return d.length&&(a.timeout=d[0]),a}},J,a;a=function(b){function d(a){a=a.split("!");var b=t.length,d=
a.pop(),c=a.length,d={url:d,origUrl:d,prefixes:a},h,e,g;for(e=0;e<c;e++)g=a[e].split("="),(h=m[g.shift()])&&(d=h(d,g));for(e=0;e<b;e++)d=t[e](d);return d}function c(a,b,e,g,f){var m=d(a),k=m.autoCallback;m.url.split(".").pop().split("?").shift();m.bypass||(b&&(b=l(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]),m.instead?m.instead(a,b,e,g,f):(h[m.url]?m.noexec=!0:h[m.url]=1,e.load(m.url,m.forceCSS||!m.forceJS&&"css"==m.url.split(".").pop().split("?").shift()?"c":r,m.noexec,m.attrs,m.timeout),
(l(b)||l(k))&&e.load(function(){n();b&&b(m.origUrl,f,g);k&&k(m.origUrl,f,g);h[m.url]=2})))}function e(a,b){function d(a,e){if(a)if(v(a))e||(f=function(){var a=[].slice.call(arguments);m.apply(this,a);k()}),c(a,f,b,0,h);else{if(Object(a)===a)for(n in t=function(){var b=0,d;for(d in a)a.hasOwnProperty(d)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!e&&!--t&&(l(f)?f=function(){var a=[].slice.call(arguments);m.apply(this,a);k()}:f[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,
b);k()}}(m[n])),c(a[n],f,b,n,h))}else!e&&k()}var h=!!a.test,g=a.load||a.both,f=a.callback||p,m=f,k=a.complete||p,t,n;d(h?a.yep:a.nope,!!g);g&&d(g)}var g,f,k=this.yepnope.loader;if(v(b))c(b,0,k,0);else if(G(b))for(g=0;g<b.length;g++)f=b[g],v(f)?c(f,0,k,0):G(f)?a(f):Object(f)===f&&e(f,k);else Object(b)===b&&e(b,k)};a.addPrefix=function(a,d){m[a]=d};a.addFilter=function(a){t.push(a)};a.errorTimeout=1E4;null==f.readyState&&f.addEventListener&&(f.readyState="loading",f.addEventListener("DOMContentLoaded",
J=function(){f.removeEventListener("DOMContentLoaded",J,0);f.readyState="complete"},0));e.yepnope=n();e.yepnope.executeStack=g;e.yepnope.injectJs=function(b,d,c,e,h,m){var k=f.createElement("script"),t,l;e=e||a.errorTimeout;k.src=b;for(l in c)k.setAttribute(l,c[l]);d=m?g:d||p;k.onreadystatechange=k.onload=function(){!t&&w(k.readyState)&&(t=1,d(),k.onload=k.onreadystatechange=null)};u(function(){t||(t=1,d(1))},e);h?k.onload():z.parentNode.insertBefore(k,z)};e.yepnope.injectCss=function(a,d,c,e,h,m){e=
f.createElement("link");var k;d=m?g:d||p;e.href=a;e.rel="stylesheet";e.type="text/css";for(k in c)e.setAttribute(k,c[k]);h||(z.parentNode.insertBefore(e,z),u(d,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
window.matchMedia=window.matchMedia||function(e,f){var r,l=e.documentElement,v=l.firstElementChild||l.firstChild,p=e.createElement("body"),w=e.createElement("div");w.id="mq-test-1";w.style.cssText="position:absolute;top:-100em";p.style.background="none";p.appendChild(w);return function(e){w.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>';l.insertBefore(p,v);r=42===w.offsetWidth;l.removeChild(p);return{matches:r,media:e}}}(document);
(function(e){function f(){F(!0)}var r={};e.respond=r;r.update=function(){};r.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(!r.mediaQueriesSupported){var l=e.document,v=l.documentElement,p=[],w=[],g=[],s={},c=l.getElementsByTagName("head")[0]||v,n=l.getElementsByTagName("base")[0],k=c.getElementsByTagName("link"),u=[],z=function(){for(var c=0;c<k.length;c++){var h=k[c],g=h.href,f=h.media,a=h.rel&&"stylesheet"===h.rel.toLowerCase();g&&(a&&!s[g])&&(h.styleSheet&&h.styleSheet.rawCssText?
(C(h.styleSheet.rawCssText,g,f),s[g]=!0):(/^([a-zA-Z:]*\/\/)/.test(g)||n)&&g.replace(RegExp.$1,"").split("/")[0]!==e.location.host||u.push({href:g,media:f}))}B()},B=function(){if(u.length){var c=u.shift();I(c.href,function(h){C(h,c.href,c.media);s[c.href]=!0;e.setTimeout(function(){B()},0)})}},C=function(c,e,g){var f=c.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),a=f&&f.length||0;e=e.substring(0,e.lastIndexOf("/"));var b=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
"$1"+e+"$2$3")},d=!a&&g;e.length&&(e+="/");d&&(a=1);for(var k=0;k<a;k++){var l,n,r;d?(l=g,w.push(b(c))):(l=f[k].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,w.push(RegExp.$2&&b(RegExp.$2)));n=l.split(",");r=n.length;for(var s=0;s<r;s++)l=n[s],p.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:w.length-1,hasquery:-1<l.indexOf("("),minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&
parseFloat(RegExp.$1)+(RegExp.$2||"")})}F()},A,H,D=function(){var c,e=l.createElement("div"),g=l.body,f=!1;e.style.cssText="position:absolute;font-size:1em;width:1em";g||(g=f=l.createElement("body"),g.style.background="none");g.appendChild(e);v.insertBefore(g,v.firstChild);c=e.offsetWidth;f?v.removeChild(g):g.removeChild(e);return c=E=parseFloat(c)},E,F=function(f){var h=v.clientWidth,m="CSS1Compat"===l.compatMode&&h||l.body.clientWidth||h,h={},n=k[k.length-1],a=(new Date).getTime();if(f&&A&&30>a-
A)e.clearTimeout(H),H=e.setTimeout(F,30);else{A=a;for(var b in p)if(p.hasOwnProperty(b)){f=p[b];var a=f.minw,d=f.maxw,q=null===a,s=null===d;a&&(a=parseFloat(a)*(-1<a.indexOf("em")?E||D():1));d&&(d=parseFloat(d)*(-1<d.indexOf("em")?E||D():1));f.hasquery&&(q&&s||!(q||m>=a)||!(s||m<=d))||(h[f.media]||(h[f.media]=[]),h[f.media].push(w[f.rules]))}for(var r in g)g.hasOwnProperty(r)&&g[r]&&g[r].parentNode===c&&c.removeChild(g[r]);for(var u in h)h.hasOwnProperty(u)&&(b=l.createElement("style"),r=h[u].join("\n"),
b.type="text/css",b.media=u,c.insertBefore(b,n.nextSibling),b.styleSheet?b.styleSheet.cssText=r:b.appendChild(l.createTextNode(r)),g.push(b))}},I=function(c,e){var f=G();f&&(f.open("GET",c,!0),f.onreadystatechange=function(){4!==f.readyState||200!==f.status&&304!==f.status||e(f.responseText)},4!==f.readyState&&f.send(null))},G=function(){var c=!1;try{c=new e.XMLHttpRequest}catch(f){c=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return c}}();z();r.update=z;e.addEventListener?e.addEventListener("resize",
f,!1):e.attachEvent&&e.attachEvent("onresize",f)}})(this);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/empty/js/vendor/modernizr.min.js?145268842612286";s:6:"source";s:49:"/local/templates/empty/js/vendor/modernizr.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
window.Modernizr=function(h,e,y){function q(b,a){return typeof b===a}function B(b,a){for(var d in b){var r=b[d];if(!~(""+r).indexOf("-")&&l[r]!==y)return"pfx"==a?r:!0}return!1}function n(b,a,d){var r=b.charAt(0).toUpperCase()+b.slice(1),c=(b+" "+C.join(r+" ")+r).split(" ");if(q(a,"string")||q(a,"undefined"))return B(c,a);c=(b+" "+D.join(r+" ")+r).split(" ");a:{b=c;for(var e in b)if(r=a[b[e]],r!==y){a=!1===d?b[e]:q(r,"function")?r.bind(d||a):r;break a}a=!1}return a}function M(){g.input=function(b){for(var a=
0,d=b.length;a<d;a++)E[b[a]]=!!(b[a]in f);E.list&&(E.list=!(!e.createElement("datalist")||!h.HTMLDataListElement));return E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));g.inputtypes=function(b){for(var a=0,d,r,c=b.length;a<c;a++){f.setAttribute("type",r=b[a]);if(d="text"!==f.type)f.value=w,f.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&f.style.WebkitAppearance!==y?(t.appendChild(f),d=e.defaultView,d=d.getComputedStyle&&"textfield"!==
d.getComputedStyle(f,null).WebkitAppearance&&0!==f.offsetHeight,t.removeChild(f)):/^(search|tel)$/.test(r)||(d=/^(url|email)$/.test(r)?f.checkValidity&&!1===f.checkValidity():f.value!=w);L[b[a]]=!!d}return L}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var g={},t=e.documentElement,c=e.createElement("modernizr"),l=c.style,f=e.createElement("input"),w=":)",x={}.toString,z=" -webkit- -moz- -o- -ms- ".split(" "),C=["Webkit","Moz","O","ms"],D=["webkit",
"moz","o","ms"],c={},L={},E={},F=[],G=F.slice,H,A=function(b,a,d,c){var g,f,u=e.createElement("div"),k=e.body,v=k||e.createElement("body");if(parseInt(d,10))for(;d--;)g=e.createElement("div"),g.id=c?c[d]:"modernizr"+(d+1),u.appendChild(g);d=['&#173;<style id="smodernizr">',b,"</style>"].join("");u.id="modernizr";(k?u:v).innerHTML+=d;v.appendChild(u);k||(v.style.background="",v.style.overflow="hidden",f=t.style.overflow,t.style.overflow="hidden",t.appendChild(v));b=a(u,b);k?u.parentNode.removeChild(u):
(v.parentNode.removeChild(v),t.style.overflow=f);return!!b},I=function(){var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(a,d){d=d||e.createElement(b[a]||"div");a="on"+a;var c=a in d;c||(d.setAttribute||(d=e.createElement("div")),d.setAttribute&&d.removeAttribute&&(d.setAttribute(a,""),c=q(d[a],"function"),q(d[a],"undefined")||(d[a]=y),d.removeAttribute(a)));return c}}(),p={}.hasOwnProperty,J;J=q(p,"undefined")||q(p.call,"undefined")?
function(b,a){return a in b&&q(b.constructor.prototype[a],"undefined")}:function(b,a){return p.call(b,a)};Function.prototype.bind||(Function.prototype.bind=function(b){var a=this;if("function"!=typeof a)throw new TypeError;var d=G.call(arguments,1),c=function(){if(this instanceof c){var e=function(){};e.prototype=a.prototype;var e=new e,g=a.apply(e,d.concat(G.call(arguments)));return Object(g)===g?g:e}return a.apply(b,d.concat(G.call(arguments)))};return c});c.flexbox=function(){return n("flexWrap")};
c.canvas=function(){var b=e.createElement("canvas");return!(!b.getContext||!b.getContext("2d"))};c.canvastext=function(){return!(!g.canvas||!q(e.createElement("canvas").getContext("2d").fillText,"function"))};c.webgl=function(){return!!h.WebGLRenderingContext};c.touch=function(){var b;"ontouchstart"in h||h.DocumentTouch&&e instanceof DocumentTouch?b=!0:A(["@media (",z.join("touch-enabled),("),"modernizr){#modernizr{top:9px;position:absolute}}"].join(""),function(a){b=9===a.offsetTop});return b};c.geolocation=
function(){return"geolocation"in navigator};c.postmessage=function(){return!!h.postMessage};c.websqldatabase=function(){return!!h.openDatabase};c.indexedDB=function(){return!!n("indexedDB",h)};c.hashchange=function(){return I("hashchange",h)&&(e.documentMode===y||7<e.documentMode)};c.history=function(){return!(!h.history||!history.pushState)};c.draganddrop=function(){var b=e.createElement("div");return"draggable"in b||"ondragstart"in b&&"ondrop"in b};c.websockets=function(){return"WebSocket"in h||
"MozWebSocket"in h};c.rgba=function(){l.cssText="background-color:rgba(150,255,150,.5)";return!!~(""+l.backgroundColor).indexOf("rgba")};c.hsla=function(){l.cssText="background-color:hsla(120,40%,100%,.5)";return!!~(""+l.backgroundColor).indexOf("rgba")||!!~(""+l.backgroundColor).indexOf("hsla")};c.multiplebgs=function(){l.cssText="background:url(https://),url(https://),red url(https://)";return/(url\s*\(.*?){3}/.test(l.background)};c.backgroundsize=function(){return n("backgroundSize")};c.borderimage=
function(){return n("borderImage")};c.borderradius=function(){return n("borderRadius")};c.boxshadow=function(){return n("boxShadow")};c.textshadow=function(){return""===e.createElement("div").style.textShadow};c.opacity=function(){var b=z.join("opacity:.55;")+"";l.cssText=b;return/^0.55$/.test(l.opacity)};c.cssanimations=function(){return n("animationName")};c.csscolumns=function(){return n("columnCount")};c.cssgradients=function(){var b=("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:"+
z.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);l.cssText=b;return!!~(""+l.backgroundImage).indexOf("gradient")};c.cssreflections=function(){return n("boxReflect")};c.csstransforms=function(){return!!n("transform")};c.csstransforms3d=function(){var b=!!n("perspective");b&&"webkitPerspective"in t.style&&A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(a,d){b=9===a.offsetLeft&&3===a.offsetHeight});return b};
c.csstransitions=function(){return n("transition")};c.fontface=function(){var b;A('@font-face {font-family:"font";src:url("https://")}',function(a,d){var c=e.getElementById("smodernizr"),c=(c=c.sheet||c.styleSheet)?c.cssRules&&c.cssRules[0]?c.cssRules[0].cssText:c.cssText||"":"";b=/src/i.test(c)&&0===c.indexOf(d.split(" ")[0])});return b};c.generatedcontent=function(){var b;A(['#modernizr{font:0/0 a}#modernizr:after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(a){b=3<=a.offsetHeight});
return b};c.video=function(){var b=e.createElement("video"),a=!1;try{if(a=!!b.canPlayType)a=new Boolean(a),a.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),a.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),a.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return a};c.audio=function(){var b=e.createElement("audio"),a=!1;try{if(a=!!b.canPlayType)a=new Boolean(a),a.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,
""),a.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),a.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),a.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return a};c.localstorage=function(){try{return localStorage.setItem("modernizr","modernizr"),localStorage.removeItem("modernizr"),!0}catch(b){return!1}};c.sessionstorage=function(){try{return sessionStorage.setItem("modernizr","modernizr"),sessionStorage.removeItem("modernizr"),!0}catch(b){return!1}};
c.webworkers=function(){return!!h.Worker};c.applicationcache=function(){return!!h.applicationCache};c.svg=function(){return!!e.createElementNS&&!!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect};c.inlinesvg=function(){var b=e.createElement("div");b.innerHTML="<svg/>";return"http://www.w3.org/2000/svg"==(b.firstChild&&b.firstChild.namespaceURI)};c.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(x.call(e.createElementNS("http://www.w3.org/2000/svg","animate")))};c.svgclippaths=
function(){return!!e.createElementNS&&/SVGClipPath/.test(x.call(e.createElementNS("http://www.w3.org/2000/svg","clipPath")))};for(var K in c)J(c,K)&&(H=K.toLowerCase(),g[H]=c[K](),F.push((g[H]?"":"no-")+H));g.input||M();g.addTest=function(b,a){if("object"==typeof b)for(var d in b)J(b,d)&&g.addTest(d,b[d]);else{b=b.toLowerCase();if(g[b]!==y)return g;a="function"==typeof a?a():a;t.className+=" "+(a?"":"no-")+b;g[b]=a}return g};l.cssText="";c=f=null;g._version="2.6.2";g._prefixes=z;g._domPrefixes=D;
g._cssomPrefixes=C;g.hasEvent=I;g.testProp=function(b){return B([b])};g.testAllProps=n;g.testStyles=A;g.prefixed=function(b,a,d){return a?n(b,a,d):n(b,"pfx")};t.className=t.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+F.join(" "));return g}(this,this.document);
(function(h,e,y){function q(a){return"[object Function]"==z.call(a)}function B(a){return"string"==typeof a}function n(){}function M(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function g(){var a=C.shift();D=1;a?a.t?w(function(){("c"==a.t?b.injectCss:b.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),g()):D=0}function t(a,d,c,f,h,u,k){function v(b){if(!n&&M(s.readyState)&&(q.r=n=1,!D&&g(),s.onload=s.onreadystatechange=null,b)){"img"!=a&&w(function(){F.removeChild(s)},50);for(var c in p[d])p[d].hasOwnProperty(c)&&
p[d][c].onload()}}k=k||b.errorTimeout;var s=e.createElement(a),n=0,l=0,q={t:c,s:d,e:h,a:u,x:k};1===p[d]&&(l=1,p[d]=[]);"object"==a?s.data=d:(s.src=d,s.type=a);s.width=s.height="0";s.onerror=s.onload=s.onreadystatechange=function(){v.call(this,l)};C.splice(f,0,q);"img"!=a&&(l||2===p[d]?(F.insertBefore(s,E?null:x),w(v,k)):p[d].push(s))}function c(a,b,c,e,f){return D=0,b=b||"j",B(a)?t("c"==b?H:G,a,b,this.i++,c,e,f):(C.splice(this.i++,0,a),1==C.length&&g()),this}function l(){var a=b;return a.loader={load:c,
i:0},a}var f=e.documentElement,w=h.setTimeout,x=e.getElementsByTagName("script")[0],z={}.toString,C=[],D=0,L="MozAppearance"in f.style,E=L&&!!e.createRange().compareNode,F=E?f:x.parentNode,f=h.opera&&"[object Opera]"==z.call(h.opera),f=!!e.attachEvent&&!f,G=L?"object":f?"script":"img",H=f?"script":G,A=Array.isArray||function(a){return"[object Array]"==z.call(a)},I=[],p={},J={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},K,b;b=function(a){function c(a){a=a.split("!");var b=I.length,d=
a.pop(),e=a.length,d={url:d,origUrl:d,prefixes:a},g,m,f;for(m=0;m<e;m++)f=a[m].split("="),(g=J[f.shift()])&&(d=g(d,f));for(m=0;m<b;m++)d=I[m](d);return d}function e(a,b,g,f,h){var m=c(a),k=m.autoCallback;m.url.split(".").pop().split("?").shift();m.bypass||(b&&(b=q(b)?b:b[a]||b[f]||b[a.split("/").pop().split("?")[0]]),m.instead?m.instead(a,b,g,f,h):(p[m.url]?m.noexec=!0:p[m.url]=1,g.load(m.url,m.forceCSS||!m.forceJS&&"css"==m.url.split(".").pop().split("?").shift()?"c":y,m.noexec,m.attrs,m.timeout),
(q(b)||q(k))&&g.load(function(){l();b&&b(m.origUrl,h,f);k&&k(m.origUrl,h,f);p[m.url]=2})))}function g(a,b){function c(a,g){if(a)if(B(a))g||(h=function(){var a=[].slice.call(arguments);k.apply(this,a);l()}),e(a,h,b,0,d);else{if(Object(a)===a)for(p in u=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(p)&&(!g&&!--u&&(q(h)?h=function(){var a=[].slice.call(arguments);k.apply(this,a);l()}:h[p]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,
b);l()}}(k[p])),e(a[p],h,b,p,d))}else!g&&l()}var d=!!a.test,f=a.load||a.both,h=a.callback||n,k=h,l=a.complete||n,u,p;c(d?a.yep:a.nope,!!f);f&&c(f)}var f,h,k=this.yepnope.loader;if(B(a))e(a,0,k,0);else if(A(a))for(f=0;f<a.length;f++)h=a[f],B(h)?e(h,0,k,0):A(h)?b(h):Object(h)===h&&g(h,k);else Object(a)===a&&g(a,k)};b.addPrefix=function(a,b){J[a]=b};b.addFilter=function(a){I.push(a)};b.errorTimeout=1E4;null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",
K=function(){e.removeEventListener("DOMContentLoaded",K,0);e.readyState="complete"},0));h.yepnope=l();h.yepnope.executeStack=g;h.yepnope.injectJs=function(a,c,f,h,l,p){var k=e.createElement("script"),q,s;h=h||b.errorTimeout;k.src=a;for(s in f)k.setAttribute(s,f[s]);c=p?g:c||n;k.onreadystatechange=k.onload=function(){!q&&M(k.readyState)&&(q=1,c(),k.onload=k.onreadystatechange=null)};w(function(){q||(q=1,c(1))},h);l?k.onload():x.parentNode.insertBefore(k,x)};h.yepnope.injectCss=function(a,b,c,f,h,l){f=
e.createElement("link");var k;b=l?g:b||n;f.href=a;f.rel="stylesheet";f.type="text/css";for(k in c)f.setAttribute(k,c[k]);h||(x.parentNode.insertBefore(f,x),w(b,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/local/templates/empty/js/vendor/jquery.min.js?145268842693142";s:6:"source";s:46:"/local/templates/empty/js/vendor/jquery.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=/bitrix/js/intervolga.bootstrap/js/vendor/jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/empty/js/vendor/bootstrap/collapse.js?14526884265979";s:6:"source";s:54:"/local/templates/empty/js/vendor/bootstrap/collapse.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* ========================================================================
 * Bootstrap: collapse.js v3.3.2
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.2'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true,
    trigger: '[data-toggle="collapse"]'
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })

    Plugin.call($target, option)
  })

}(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/empty/js/vendor/bootstrap/tooltip.js?145268842615103";s:6:"source";s:53:"/local/templates/empty/js/vendor/bootstrap/tooltip.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.2
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.2'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
    this.arrow()
      .css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isHorizontal ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/local/templates/empty/js/vendor/plugins.js?14526884261569";s:6:"source";s:43:"/local/templates/empty/js/vendor/plugins.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// Avoid `console` errors in browsers that lack a console.
(function() {
    "use strict";

    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;


    if (!window.console) {
        try {
            window.console = {};
        } catch(e) {}
    }

    while (length--) {
        method = methods[length];

        try {
            // Only stub undefined methods.
            if (!window.console[method]) {
                console[method] = noop;
            }
        } catch(e) {}
    }
}());

//IE Fix
(function() {
    "use strict";

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode(
                "@-ms-viewport{width:auto!important}"
            )
        );
        document.getElementsByTagName("head")[0].
            appendChild(msViewportStyle);
    }
}());


function isModernBrowser() {
    "use strict";

    return ('querySelector' in document &&
        'localStorage' in window &&
        'addEventListener' in window);
}
function isTouchDevice(){
    "use strict";

    return ('ontouchstart' in window ||
        window.DocumentTouch !== undefined && document instanceof DocumentTouch);
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/empty/js/vendor/jquery.touchSwipe.js?145268842670868";s:6:"source";s:53:"/local/templates/empty/js/vendor/jquery.touchSwipe.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.6
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/

/*
*
* Changelog
* $Date: 2010-12-12 (Wed, 12 Dec 2010) $
* $version: 1.0.0
* $version: 1.0.1 - removed multibyte comments
*
* $Date: 2011-21-02 (Mon, 21 Feb 2011) $
* $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
*					- changed handler signatures so one handler can be used for multiple events
* $Date: 2011-23-02 (Wed, 23 Feb 2011) $
* $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
*					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
* $version: 1.2.1 	- removed console log!
*
* $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
*
* $Date: 2011-28-04 (Thurs, 28 April 2011) $
* $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
*
* $Date: 2011-27-09 (Tues, 27 September 2011) $
* $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
*
* $Date: 2012-14-05 (Mon, 14 May 2012) $
* $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
*
* $Date: 2012-06-06 (Wed, 06 June 2012) $
* $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
*
* $Date: 2012-05-06 (Fri, 05 June 2012) $
* $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
*
* $Date: 2012-29-07 (Sun, 29 July 2012) $
* $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
* 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
*
* $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
* $version: 1.3.3	- Code tidy prep for minefied version
*
* $Date: 2012-04-10 (wed, 4 Oct 2012) $
* $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
*
* $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
* $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
*
* $Date: 2012-22-10 (Mon, 22 Oct 2012) $
* $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
*					- Fixed bug with IE and eventPreventDefault()
* $Date: 2013-01-12 (Fri, 12 Jan 2013) $
* $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
*					- made the demo site all static local HTML pages so they can be run locally by a developer
*					- added jsDoc comments and added documentation for the plugin	
*					- code tidy
*					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
* $Date: 2013-03-23 (Sat, 23 Mar 2013) $
* $version: 1.6.1	- Added support for ie8 touch events
* $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
*                   - Deprecated the 'click' handler in favour of tap.
*                   - added cancelThreshold property
*                   - added option method to update init options at runtime
* $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
*
* $Date: 2013-04-04 (Thurs, 04 April 2013) $
* $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
*
* $Date: 2013-08-24 (Sat, 24 Aug 2013) $
* $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
*
* $Date: 2014-06-04 (Wed, 04 June 2014) $
* $version 1.6.6 	- Merge of pull requests.
*    				- IE10 touch support 
*    				- Only prevent default event handling on valid swipe
*    				- Separate license/changelog comment
*    				- Detect if the swipe is valid at the end of the touch event.
*    				- Pass fingerdata to event handlers. 
*    				- Add 'hold' gesture 
*    				- Be more tolerant about the tap distance
*    				- Typos and minor fixes
*/

/**
 * See (http://jquery.com/).
 * @name $
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */
 
/**
 * See (http://jquery.com/)
 * @name fn
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */



(function (factory) {
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {
	"use strict";

	//Constants
	var LEFT = "left",
		RIGHT = "right",
		UP = "up",
		DOWN = "down",
		IN = "in",
		OUT = "out",

		NONE = "none",
		AUTO = "auto",
		
		SWIPE = "swipe",
		PINCH = "pinch",
		TAP = "tap",
		DOUBLE_TAP = "doubletap",
		LONG_TAP = "longtap",
		HOLD = "hold",
		
		HORIZONTAL = "horizontal",
		VERTICAL = "vertical",

		ALL_FINGERS = "all",
		
		DOUBLE_TAP_THRESHOLD = 10,

		PHASE_START = "start",
		PHASE_MOVE = "move",
		PHASE_END = "end",
		PHASE_CANCEL = "cancel",

		SUPPORTS_TOUCH = 'ontouchstart' in window,
		
		SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
		
		SUPPORTS_POINTER = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,

		PLUGIN_NS = 'TouchSwipe';



	/**
	* The default configuration, and available options to configure touch swipe with.
	* You can set the default values by updating any of the properties prior to instantiation.
	* @name $.fn.swipe.defaults
	* @namespace
	* @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
	* @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe. 
	* @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
	* @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch. 
	* @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe. 
	* @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release. 
	* @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
	* @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
	* @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
	* @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
	* @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
	* @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
	* @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
	* @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
	* @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
	* @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
	* @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
	* @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not. 
	* @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
	* @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#longTapThreshold}
	* @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link $.fn.swipe.defaults#longTapThreshold}
	* @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically. 
	* @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers. 
	* @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
										<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
										<code>"none"</code> : the page will not scroll when user swipes. <br/>
										<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
										<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
	* @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices. 
	* @property {string} [excludedElements="button, input, select, textarea, a, .noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes all form, input, select, button, anchor and .noSwipe elements. 
	
	*/
	var defaults = {
		fingers: 1, 		
		threshold: 75, 	
		cancelThreshold:null,	
		pinchThreshold:20,
		maxTimeThreshold: null, 
		fingerReleaseThreshold:250, 
		longTapThreshold:500,
		doubleTapThreshold:200,
		swipe: null, 		
		swipeLeft: null, 	
		swipeRight: null, 	
		swipeUp: null, 		
		swipeDown: null, 	
		swipeStatus: null, 	
		pinchIn:null,		
		pinchOut:null,		
		pinchStatus:null,	
		click:null, //Deprecated since 1.6.2
		tap:null,
		doubleTap:null,
		longTap:null, 		
		hold:null, 
		triggerOnTouchEnd: true, 
		triggerOnTouchLeave:false, 
		allowPageScroll: "auto", 
		fallbackToMouseEvents: true,	
		excludedElements:"label, button, input, select, textarea, .noSwipe"
	};



	/**
	* Applies TouchSwipe behaviour to one or more jQuery objects.
	* The TouchSwipe plugin can be instantiated via this method, or methods within 
	* TouchSwipe can be executed via this method as per jQuery plugin architecture.
	* @see TouchSwipe
	* @class
	* @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
	* the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
	* If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the 
	* configuration properties defined in the object. See TouchSwipe
	*
	*/
	$.fn.swipe = function (method) {
		var $this = $(this),
			plugin = $this.data(PLUGIN_NS);

		//Check if we are already instantiated and trying to execute a method	
		if (plugin && typeof method === 'string') {
			if (plugin[method]) {
				return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.swipe');
			}
		}
		//Else not instantiated and trying to pass init object (or nothing)
		else if (!plugin && (typeof method === 'object' || !method)) {
			return init.apply(this, arguments);
		}

		return $this;
	};

	//Expose our defaults so a user could override the plugin defaults
	$.fn.swipe.defaults = defaults;

	/**
	* The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers. 
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
	* @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
	* @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
	* @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
	*/
	$.fn.swipe.phases = {
		PHASE_START: PHASE_START,
		PHASE_MOVE: PHASE_MOVE,
		PHASE_END: PHASE_END,
		PHASE_CANCEL: PHASE_CANCEL
	};

	/**
	* The direction constants that are passed to the event handlers. 
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
	* @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
	* @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
	* @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
	* @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
	* @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
	*/
	$.fn.swipe.directions = {
		LEFT: LEFT,
		RIGHT: RIGHT,
		UP: UP,
		DOWN: DOWN,
		IN : IN,
		OUT: OUT
	};
	
	/**
	* The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
	* These properties are read only
	* @namespace
	* @readonly
	* @see $.fn.swipe.defaults#allowPageScroll
	* @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
	* @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
	* @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
	* @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
	*/
	$.fn.swipe.pageScroll = {
		NONE: NONE,
		HORIZONTAL: HORIZONTAL,
		VERTICAL: VERTICAL,
		AUTO: AUTO
	};

	/**
	* Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the 
	* options object, as well as the value of the <code>fingers</code> event property.
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @see $.fn.swipe.defaults#fingers
	* @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
	* @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>1</code>.
	* @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>1</code>.
	* @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
	*/
	$.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		ALL: ALL_FINGERS
	};

	/**
	* Initialise the plugin for each DOM element matched
	* This creates a new instance of the main TouchSwipe class for each DOM element, and then
	* saves a reference to that instance in the elements data property.
	* @internal
	*/
	function init(options) {
		//Prep and extend the options
		if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
			options.allowPageScroll = NONE;
		}
		
        //Check for deprecated options
		//Ensure that any old click handlers are assigned to the new tap, unless we have a tap
		if(options.click!==undefined && options.tap===undefined) {
		    options.tap = options.click;
		}

		if (!options) {
			options = {};
		}
		
        //pass empty object so we dont modify the defaults
		options = $.extend({}, $.fn.swipe.defaults, options);

		//For each element instantiate the plugin
		return this.each(function () {
			var $this = $(this);

			//Check we havent already initialised the plugin
			var plugin = $this.data(PLUGIN_NS);

			if (!plugin) {
				plugin = new TouchSwipe(this, options);
				$this.data(PLUGIN_NS, plugin);
			}
		});
	}

	/**
	* Main TouchSwipe Plugin Class.
	* Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
	* @private
	* @name TouchSwipe
	* @param {DOMNode} element The HTML DOM object to apply to plugin to
	* @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
	* @see $.fh.swipe.defaults
	* @see $.fh.swipe
    * @class
	*/
	function TouchSwipe(element, options) {
        var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
            START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
            MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
            END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
            LEAVE_EV = useTouchEvents ? null : 'mouseleave', //we manually detect leave on touch devices, so null event here
            CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');



		//touch properties
		var distance = 0,
			direction = null,
			duration = 0,
			startTouchesDistance = 0,
			endTouchesDistance = 0,
			pinchZoom = 1,
			pinchDistance = 0,
			pinchDirection = 0,
			maximumsMap=null;

		
		
		//jQuery wrapped element for this instance
		var $element = $(element);
		
		//Current phase of th touch cycle
		var phase = "start";

		// the current number of fingers being used.
		var fingerCount = 0; 			

		//track mouse points / delta
		var fingerData=null;

		//track times
		var startTime = 0,
			endTime = 0,
			previousTouchEndTime=0,
			previousTouchFingerCount=0,
			doubleTapStartTime=0;

		//Timeouts
		var singleTapTimeout=null,
			holdTimeout=null;
        
		// Add gestures to all swipable areas if supported
		try {
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
		}
		catch (e) {
			$.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
		}

		//
		//Public methods
		//
		
		/**
		* re-enables the swipe plugin with the previous configuration
		* @function
		* @name $.fn.swipe#enable
		* @return {DOMNode} The Dom element that was registered with TouchSwipe 
		* @example $("#element").swipe("enable");
		*/
		this.enable = function () {
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
			return $element;
		};

		/**
		* disables the swipe plugin
		* @function
		* @name $.fn.swipe#disable
		* @return {DOMNode} The Dom element that is now registered with TouchSwipe
	    * @example $("#element").swipe("disable");
		*/
		this.disable = function () {
			removeListeners();
			return $element;
		};

		/**
		* Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
		* @function
		* @name $.fn.swipe#destroy
		* @return {DOMNode} The Dom element that was registered with TouchSwipe 
		* @example $("#element").swipe("destroy");
		*/
		this.destroy = function () {
			removeListeners();
			$element.data(PLUGIN_NS, null);
			return $element;
		};


        /**
         * Allows run time updating of the swipe configuration options.
         * @function
    	 * @name $.fn.swipe#option
    	 * @param {String} property The option property to get or set
         * @param {Object} [value] The value to set the property to
		 * @return {Object} If only a property name is passed, then that property value is returned.
		 * @example $("#element").swipe("option", "threshold"); // return the threshold
         * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
         * @see $.fn.swipe.defaults
         *
         */
        this.option = function (property, value) {
            if(options[property]!==undefined) {
                if(value===undefined) {
                    return options[property];
                } else {
                    options[property] = value;
                }
            } else {
                $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
            }

            return null;
        }

		//
		// Private methods
		//
		
		//
		// EVENTS
		//
		/**
		* Event handler for a touch start event.
		* Stops the default click event from triggering and stores where we touched
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchStart(jqEvent) {
			//If we already in a touch event (a finger already in use) then ignore subsequent ones..
			if( getTouchInProgress() )
				return;
			
			//Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
			if( $(jqEvent.target).closest( options.excludedElements, $element ).length>0 ) 
				return;
				
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			
			var ret,
				evt = SUPPORTS_TOUCH ? event.touches[0] : event;

			phase = PHASE_START;

			//If we support touches, get the finger count
			if (SUPPORTS_TOUCH) {
				// get the total number of fingers touching the screen
				fingerCount = event.touches.length;
			}
			//Else this is the desktop, so stop the browser from dragging the image
			else {
				jqEvent.preventDefault(); //call this on jq event so we are cross browser
			}

			//clear vars..
			distance = 0;
			direction = null;
			pinchDirection=null;
			duration = 0;
			startTouchesDistance=0;
			endTouchesDistance=0;
			pinchZoom = 1;
			pinchDistance = 0;
			fingerData=createAllFingerData();
			maximumsMap=createMaximumsData();
			cancelMultiFingerRelease();

			
			// check the number of fingers is what we are looking for, or we are capturing pinches
			if (!SUPPORTS_TOUCH || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
				// get the coordinates of the touch
				createFingerData( 0, evt );
				startTime = getTimeStamp();
				
				if(fingerCount==2) {
					//Keep track of the initial pinch distance, so we can calculate the diff later
					//Store second finger data as start
					createFingerData( 1, event.touches[1] );
					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
				}
				
				if (options.swipeStatus || options.pinchStatus) {
					ret = triggerHandler(event, phase);
				}
			}
			else {
				//A touch with more or less than the fingers we are looking for, so cancel
				ret = false; 
			}

			//If we have a return value from the users handler, then return and cancel
			if (ret === false) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
				return ret;
			}
			else {
				if (options.hold) {
					holdTimeout = setTimeout($.proxy(function() {
						//Trigger the event
						$element.trigger('hold', [event.target]);
						//Fire the callback
						if(options.hold) {
							ret = options.hold.call($element, event, event.target);
						}
					}, this), options.longTapThreshold );
				}

				setTouchInProgress(true);
			}

            return null;
		};
		
		
		
		/**
		* Event handler for a touch move event. 
		* If we change fingers during move, then cancel the event
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchMove(jqEvent) {
			
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			
			//If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
			if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
				return;

			var ret,
				evt = SUPPORTS_TOUCH ? event.touches[0] : event;
			

			//Update the  finger data 
			var currentFinger = updateFingerData(evt);
			endTime = getTimeStamp();
			
			if (SUPPORTS_TOUCH) {
				fingerCount = event.touches.length;
			}

			if (options.hold)
				clearTimeout(holdTimeout);

			phase = PHASE_MOVE;

			//If we have 2 fingers get Touches distance as well
			if(fingerCount==2) {
				
				//Keep track of the initial pinch distance, so we can calculate the diff later
				//We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
				if(startTouchesDistance==0) {
					//Create second finger if this is the first time...
					createFingerData( 1, event.touches[1] );
					
					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
				} else {
					//Else just update the second finger
					updateFingerData(event.touches[1]);
				
					endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
					pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
				}
				
				
				pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
				pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
			}
			
			
			if ( (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH || hasPinches() ) {
				
				direction = calculateDirection(currentFinger.start, currentFinger.end);
				
				//Check if we need to prevent default event (page scroll / pinch zoom) or not
				validateDefaultEvent(jqEvent, direction);

				//Distance and duration are all off the main finger
				distance = calculateDistance(currentFinger.start, currentFinger.end);
				duration = calculateDuration();

                //Cache the maximum distance we made in this direction
                setMaxDistance(direction, distance);


				if (options.swipeStatus || options.pinchStatus) {
					ret = triggerHandler(event, phase);
				}
				
				
				//If we trigger end events when threshold are met, or trigger events when touch leaves element
				if(!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
					
					var inBounds = true;
					
					//If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
					if(options.triggerOnTouchLeave) {
						var bounds = getbounds( this );
						inBounds = isInBounds( currentFinger.end, bounds );
					}
					
					//Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
					if(!options.triggerOnTouchEnd && inBounds) {
						phase = getNextPhase( PHASE_MOVE );
					} 
					//We end if out of bounds here, so set current phase to END, and check if its modified 
					else if(options.triggerOnTouchLeave && !inBounds ) {
						phase = getNextPhase( PHASE_END );
					}
						
					if(phase==PHASE_CANCEL || phase==PHASE_END)	{
						triggerHandler(event, phase);
					}				
				}
			}
			else {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

			if (ret === false) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}
		}



		/**
		* Event handler for a touch end event. 
		* Calculate the direction and trigger events
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchEnd(jqEvent) {
			//As we use Jquery bind for events, we need to target the original event object
			var event = jqEvent.originalEvent;
				

			//If we are still in a touch with another finger return
			//This allows us to wait a fraction and see if the other finger comes up, if it does within the threshold, then we treat it as a multi release, not a single release.
			if (SUPPORTS_TOUCH) {
				if(event.touches.length>0) {
					startMultiFingerRelease();
					return true;
				}
			}
			
			//If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
			//This is used to allow 2 fingers to release fractionally after each other, whilst maintainig the event as containg 2 fingers, not 1
			if(inMultiFingerRelease()) {	
				fingerCount=previousTouchFingerCount;
			}	
		
			//Set end of swipe
			endTime = getTimeStamp();
			
			//Get duration incase move was never fired
			duration = calculateDuration();
			
			//If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
			if(didSwipeBackToCancel() || !validateSwipeDistance()) {
			    phase = PHASE_CANCEL;
                triggerHandler(event, phase);
			} else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd == false && phase === PHASE_MOVE)) {
				//call this on jq event so we are cross browser 
				jqEvent.preventDefault(); 
				phase = PHASE_END;
                triggerHandler(event, phase);
			}
			//Special cases - A tap should always fire on touch end regardless,
			//So here we manually trigger the tap end handler by itself
			//We dont run trigger handler as it will re-trigger events that may have fired already
			else if (!options.triggerOnTouchEnd && hasTap()) {
                //Trigger the pinch events...
			    phase = PHASE_END;
			    triggerHandlerForGesture(event, phase, TAP);
			}
			else if (phase === PHASE_MOVE) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

			setTouchInProgress(false);

            return null;
		}



		/**
		* Event handler for a touch cancel event. 
		* Clears current vars
		* @inner
		*/
		function touchCancel() {
			// reset the variables back to default values
			fingerCount = 0;
			endTime = 0;
			startTime = 0;
			startTouchesDistance=0;
			endTouchesDistance=0;
			pinchZoom=1;
			
			//If we were in progress of tracking a possible multi touch end, then re set it.
			cancelMultiFingerRelease();
			
			setTouchInProgress(false);
		}
		
		
		/**
		* Event handler for a touch leave event. 
		* This is only triggered on desktops, in touch we work this out manually
		* as the touchleave event is not supported in webkit
		* @inner
		*/
		function touchLeave(jqEvent) {
			var event = jqEvent.originalEvent;
			
			//If we have the trigger on leave property set....
			if(options.triggerOnTouchLeave) {
				phase = getNextPhase( PHASE_END );
				triggerHandler(event, phase);
			}
		}
		
		/**
		* Removes all listeners that were associated with the plugin
		* @inner
		*/
		function removeListeners() {
			$element.unbind(START_EV, touchStart);
			$element.unbind(CANCEL_EV, touchCancel);
			$element.unbind(MOVE_EV, touchMove);
			$element.unbind(END_EV, touchEnd);
			
			//we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
			if(LEAVE_EV) { 
				$element.unbind(LEAVE_EV, touchLeave);
			}
			
			setTouchInProgress(false);
		}

		
		/**
		 * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
		 */
		function getNextPhase(currentPhase) {
			
			var nextPhase = currentPhase;
			
			// Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
			var validTime = validateSwipeTime();
			var validDistance = validateSwipeDistance();
			var didCancel = didSwipeBackToCancel();
						
			//If we have exceeded our time, then cancel	
			if(!validTime || didCancel) {
				nextPhase = PHASE_CANCEL;
			}
			//Else if we are moving, and have reached distance then end
			else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) ) {
				nextPhase = PHASE_END;
			} 
			//Else if we have ended by leaving and didn't reach distance, then cancel
			else if (!validDistance && currentPhase==PHASE_END && options.triggerOnTouchLeave) {
				nextPhase = PHASE_CANCEL;
			}
			
			return nextPhase;
		}
		
		
		/**
		* Trigger the relevant event handler
		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		* @param {object} event the original event object
		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
		* @inner
		*/
		function triggerHandler(event, phase) {
			
			var ret = undefined;
			
			// SWIPE GESTURES
			if(didSwipe() || hasSwipes()) { //hasSwipes as status needs to fire even if swipe is invalid
				//Trigger the swipe events...
				ret = triggerHandlerForGesture(event, phase, SWIPE);
			} 
			
			// PINCH GESTURES (if the above didn't cancel)
			else if((didPinch() || hasPinches()) && ret!==false) {
				//Trigger the pinch events...
				ret = triggerHandlerForGesture(event, phase, PINCH);
			}
			
			// CLICK / TAP (if the above didn't cancel)
			if(didDoubleTap() && ret!==false) {
				//Trigger the tap events...
				ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
			}
			
			// CLICK / TAP (if the above didn't cancel)
			else if(didLongTap() && ret!==false) {
				//Trigger the tap events...
				ret = triggerHandlerForGesture(event, phase, LONG_TAP);
			}

			// CLICK / TAP (if the above didn't cancel)
			else if(didTap() && ret!==false) {
				//Trigger the tap event..
				ret = triggerHandlerForGesture(event, phase, TAP);
			}
			
			
			
			// If we are cancelling the gesture, then manually trigger the reset handler
			if (phase === PHASE_CANCEL) {
				touchCancel(event);
			}
			
			// If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
			if(phase === PHASE_END) {
				//If we support touch, then check that all fingers are off before we cancel
				if (SUPPORTS_TOUCH) {
					if(event.touches.length==0) {
						touchCancel(event);	
					}
				} 
				else {
					touchCancel(event);
				}
			}
					
			return ret;
		}
		
		
		
		/**
		* Trigger the relevant event handler
		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		* @param {object} event the original event object
		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
		* @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
		* @return Boolean False, to indicate that the event should stop propagation, or void.
		* @inner
		*/
		function triggerHandlerForGesture(event, phase, gesture) {	
			
			var ret=undefined;
			
			//SWIPES....
			if(gesture==SWIPE) {
				//Trigger status every time..
				
				//Trigger the event...
				$element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData]);
				
				//Fire the callback
				if (options.swipeStatus) {
					ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData);
					//If the status cancels, then dont run the subsequent event handlers..
					if(ret===false) return false;
				}
				
				
				
				
				if (phase == PHASE_END && validateSwipe()) {
					//Fire the catch all event
					$element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData]);
					
					//Fire catch all callback
					if (options.swipe) {
						ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData);
						//If the status cancels, then dont run the subsequent event handlers..
						if(ret===false) return false;
					}
					
					//trigger direction specific event handlers	
					switch (direction) {
						case LEFT:
							//Trigger the event
							$element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeLeft) {
								ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case RIGHT:
							//Trigger the event
					        $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeRight) {
								ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case UP:
							//Trigger the event
					        $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeUp) {
								ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case DOWN:
							//Trigger the event
					        $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeDown) {
								ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
					}
				}
			}
			
			
			//PINCHES....
			if(gesture==PINCH) {
				//Trigger the event
			     $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
					
                //Fire the callback
				if (options.pinchStatus) {
					ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
					//If the status cancels, then dont run the subsequent event handlers..
					if(ret===false) return false;
				}
				
				if(phase==PHASE_END && validatePinch()) {
					
					switch (pinchDirection) {
						case IN:
							//Trigger the event
                            $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
                    
                            //Fire the callback
                            if (options.pinchIn) {
								ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
							}
							break;
						
						case OUT:
							//Trigger the event
                            $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
                    
                            //Fire the callback
                            if (options.pinchOut) {
								ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
							}
							break;	
					}
				}
			}
			


                
	    		
			if(gesture==TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					
    			    
    			    //Cancel any existing double tap
				    clearTimeout(singleTapTimeout);
    			    //Cancel hold timeout
				    clearTimeout(holdTimeout);
				           
					//If we are also looking for doubelTaps, wait incase this is one...
				    if(hasDoubleTap() && !inDoubleTap()) {
				        //Cache the time of this tap
                        doubleTapStartTime = getTimeStamp();
                       
				        //Now wait for the double tap timeout, and trigger this single tap
				        //if its not cancelled by a double tap
				        singleTapTimeout = setTimeout($.proxy(function() {
        			        doubleTapStartTime=null;
        			        //Trigger the event
                			$element.trigger('tap', [event.target]);

                        
                            //Fire the callback
                            if(options.tap) {
                                ret = options.tap.call($element, event, event.target);
                            }
    			        }, this), options.doubleTapThreshold );
    			    	
    			    } else {
                        doubleTapStartTime=null;
                        
                        //Trigger the event
                        $element.trigger('tap', [event.target]);

                        
                        //Fire the callback
                        if(options.tap) {
                            ret = options.tap.call($element, event, event.target);
                        }
	    		    }
	    		}
			}
			
			else if (gesture==DOUBLE_TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					//Cancel any pending singletap 
				    clearTimeout(singleTapTimeout);
				    doubleTapStartTime=null;
				        
                    //Trigger the event
                    $element.trigger('doubletap', [event.target]);
                
                    //Fire the callback
                    if(options.doubleTap) {
                        ret = options.doubleTap.call($element, event, event.target);
                    }
	    		}
			}
			
			else if (gesture==LONG_TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					//Cancel any pending singletap (shouldnt be one)
				    clearTimeout(singleTapTimeout);
				    doubleTapStartTime=null;
				        
                    //Trigger the event
                    $element.trigger('longtap', [event.target]);
                
                    //Fire the callback
                    if(options.longTap) {
                        ret = options.longTap.call($element, event, event.target);
                    }
	    		}
			}				
				
			return ret;
		}



		
		//
		// GESTURE VALIDATION
		//
		
		/**
		* Checks the user has swipe far enough
		* @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
		* If no threshold was set, then we return true.
		* @inner
		*/
		function validateSwipeDistance() {
			var valid = true;
			//If we made it past the min swipe distance..
			if (options.threshold !== null) {
				valid = distance >= options.threshold;
			}
			
            return valid;
		}
		
		/**
		* Checks the user has swiped back to cancel.
		* @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
		* If no cancelThreshold was set, then we return true.
		* @inner
		*/
		function didSwipeBackToCancel() {
            var cancelled = false;
    		if(options.cancelThreshold !== null && direction !==null)  {
    		    cancelled =  (getMaxDistance( direction ) - distance) >= options.cancelThreshold;
			}
			
			return cancelled;
		}

		/**
		* Checks the user has pinched far enough
		* @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
		* If no threshold was set, then we return true.
		* @inner
		*/
		function validatePinchDistance() {
			if (options.pinchThreshold !== null) {
				return pinchDistance >= options.pinchThreshold;
			}
			return true;
		}

		/**
		* Checks that the time taken to swipe meets the minimum / maximum requirements
		* @return Boolean
		* @inner
		*/
		function validateSwipeTime() {
			var result;
			//If no time set, then return true

			if (options.maxTimeThreshold) {
				if (duration >= options.maxTimeThreshold) {
					result = false;
				} else {
					result = true;
				}
			}
			else {
				result = true;
			}

			return result;
		}


		/**
		* Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
		* This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
		* @param {object} jqEvent The normalised jQuery representation of the event object.
		* @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function validateDefaultEvent(jqEvent, direction) {
			if (options.allowPageScroll === NONE || hasPinches()) {
				jqEvent.preventDefault();
			} else {
				var auto = options.allowPageScroll === AUTO;

				switch (direction) {
					case LEFT:
						if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
							jqEvent.preventDefault();
						}
						break;

					case RIGHT:
						if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
							jqEvent.preventDefault();
						}
						break;

					case UP:
						if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
							jqEvent.preventDefault();
						}
						break;

					case DOWN:
						if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
							jqEvent.preventDefault();
						}
						break;
				}
			}

		}


		// PINCHES
		/**
		 * Returns true of the current pinch meets the thresholds
		 * @return Boolean
		 * @inner
		*/
		function validatePinch() {
		    var hasCorrectFingerCount = validateFingers();
		    var hasEndPoint = validateEndPoint();
			var hasCorrectDistance = validatePinchDistance();
			return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
			
		}
		
		/**
		 * Returns true if any Pinch events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasPinches() {
			//Enure we dont return 0 or null for false values
			return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
		}
		
		/**
		 * Returns true if we are detecting pinches, and have one
		 * @return Boolean
		 * @inner
		 */
		function didPinch() {
			//Enure we dont return 0 or null for false values
			return !!(validatePinch() && hasPinches());
		}




		// SWIPES
		/**
		 * Returns true if the current swipe meets the thresholds
		 * @return Boolean
		 * @inner
		*/
		function validateSwipe() {
			//Check validity of swipe
			var hasValidTime = validateSwipeTime();
			var hasValidDistance = validateSwipeDistance();	
			var hasCorrectFingerCount = validateFingers();
		    var hasEndPoint = validateEndPoint();
		    var didCancel = didSwipeBackToCancel();	
		    
			// if the user swiped more than the minimum length, perform the appropriate action
			// hasValidDistance is null when no distance is set 
			var valid =  !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
			
			return valid;
		}
		
		/**
		 * Returns true if any Swipe events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasSwipes() {
			//Enure we dont return 0 or null for false values
			return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
		}
		
		
		/**
		 * Returns true if we are detecting swipes and have one
		 * @return Boolean
		 * @inner
		*/
		function didSwipe() {
			//Enure we dont return 0 or null for false values
			return !!(validateSwipe() && hasSwipes());
		}

        /**
		 * Returns true if we have matched the number of fingers we are looking for
		 * @return Boolean
		 * @inner
		*/
        function validateFingers() {
            //The number of fingers we want were matched, or on desktop we ignore
    		return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
    	}
        
        /**
		 * Returns true if we have an end point for the swipe
		 * @return Boolean
		 * @inner
		*/
        function validateEndPoint() {
            //We have an end value for the finger
		    return fingerData[0].end.x !== 0;
        }

		// TAP / CLICK
		/**
		 * Returns true if a click / tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.tap) ;
		}
		
		/**
		 * Returns true if a double tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasDoubleTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.doubleTap) ;
		}
		
		/**
		 * Returns true if any long tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasLongTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.longTap) ;
		}
		
		/**
		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
		 * @return Boolean
		 * @inner
		*/
		function validateDoubleTap() {
		    if(doubleTapStartTime==null){
		        return false;
		    }
		    var now = getTimeStamp();
		    return (hasDoubleTap() && ((now-doubleTapStartTime) <= options.doubleTapThreshold));
		}
		
		/**
		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
		 * @return Boolean
		 * @inner
		*/
		function inDoubleTap() {
		    return validateDoubleTap();
		}
		
		
		/**
		 * Returns true if we have a valid tap
		 * @return Boolean
		 * @inner
		*/
		function validateTap() {
		    return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold));
		}
		
		/**
		 * Returns true if we have a valid long tap
		 * @return Boolean
		 * @inner
		*/
		function validateLongTap() {
		    //slight threshold on moving finger
            return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD)); 
		}
		
		/**
		 * Returns true if we are detecting taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateTap() && hasTap());
		}
		
		
		/**
		 * Returns true if we are detecting double taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didDoubleTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateDoubleTap() && hasDoubleTap());
		}
		
		/**
		 * Returns true if we are detecting long taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didLongTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateLongTap() && hasLongTap());
		}
		
		
		
		
		// MULTI FINGER TOUCH
		/**
		 * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
		 * @inner
		*/
		function startMultiFingerRelease() {
			previousTouchEndTime = getTimeStamp();
			previousTouchFingerCount = event.touches.length+1;
		}
		
		/**
		 * Cancels the tracking of time between 2 finger releases, and resets counters
		 * @inner
		*/
		function cancelMultiFingerRelease() {
			previousTouchEndTime = 0;
			previousTouchFingerCount = 0;
		}
		
		/**
		 * Checks if we are in the threshold between 2 fingers being released 
		 * @return Boolean
		 * @inner
		*/
		function inMultiFingerRelease() {
			
			var withinThreshold = false;
			
			if(previousTouchEndTime) {	
				var diff = getTimeStamp() - previousTouchEndTime	
				if( diff<=options.fingerReleaseThreshold ) {
					withinThreshold = true;
				}
			}
			
			return withinThreshold;	
		}
		

		/**
		* gets a data flag to indicate that a touch is in progress
		* @return Boolean
		* @inner
		*/
		function getTouchInProgress() {
			//strict equality to ensure only true and false are returned
			return !!($element.data(PLUGIN_NS+'_intouch') === true);
		}
		
		/**
		* Sets a data flag to indicate that a touch is in progress
		* @param {boolean} val The value to set the property to
		* @inner
		*/
		function setTouchInProgress(val) {
			
			//Add or remove event listeners depending on touch status
			if(val===true) {
				$element.bind(MOVE_EV, touchMove);
				$element.bind(END_EV, touchEnd);
				
				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
				if(LEAVE_EV) { 
					$element.bind(LEAVE_EV, touchLeave);
				}
			} else {
				$element.unbind(MOVE_EV, touchMove, false);
				$element.unbind(END_EV, touchEnd, false);
			
				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
				if(LEAVE_EV) { 
					$element.unbind(LEAVE_EV, touchLeave, false);
				}
			}
			
		
			//strict equality to ensure only true and false can update the value
			$element.data(PLUGIN_NS+'_intouch', val === true);
		}
		
		
		/**
		 * Creates the finger data for the touch/finger in the event object.
		 * @param {int} index The index in the array to store the finger data (usually the order the fingers were pressed)
		 * @param {object} evt The event object containing finger data
		 * @return finger data object
		 * @inner
		*/
		function createFingerData( index, evt ) {
			var id = evt.identifier!==undefined ? evt.identifier : 0; 
			
			fingerData[index].identifier = id;
			fingerData[index].start.x = fingerData[index].end.x = evt.pageX||evt.clientX;
			fingerData[index].start.y = fingerData[index].end.y = evt.pageY||evt.clientY;
			
			return fingerData[index];
		}
		
		/**
		 * Updates the finger data for a particular event object
		 * @param {object} evt The event object containing the touch/finger data to upadte
		 * @return a finger data object.
		 * @inner
		*/
		function updateFingerData(evt) {
			
			var id = evt.identifier!==undefined ? evt.identifier : 0; 
			var f = getFingerData( id );
			
			f.end.x = evt.pageX||evt.clientX;
			f.end.y = evt.pageY||evt.clientY;
			
			return f;
		}
		
		/**
		 * Returns a finger data object by its event ID.
		 * Each touch event has an identifier property, which is used 
		 * to track repeat touches
		 * @param {int} id The unique id of the finger in the sequence of touch events.
		 * @return a finger data object.
		 * @inner
		*/
		function getFingerData( id ) {
			for(var i=0; i<fingerData.length; i++) {
				if(fingerData[i].identifier == id) {
					return fingerData[i];	
				}
			}
		}
		
		/**
		 * Creats all the finger onjects and returns an array of finger data
		 * @return Array of finger objects
		 * @inner
		*/
		function createAllFingerData() {
			var fingerData=[];
			for (var i=0; i<=5; i++) {
				fingerData.push({
					start:{ x: 0, y: 0 },
					end:{ x: 0, y: 0 },
					identifier:0
				});
			}
			
			return fingerData;
		}
		
		/**
		 * Sets the maximum distance swiped in the given direction. 
		 * If the new value is lower than the current value, the max value is not changed.
		 * @param {string}  direction The direction of the swipe
		 * @param {int}  distance The distance of the swipe
		 * @inner
		*/
		function setMaxDistance(direction, distance) {
    		distance = Math.max(distance, getMaxDistance(direction) );
    		maximumsMap[direction].distance = distance;
		}
        
        /**
		 * gets the maximum distance swiped in the given direction. 
		 * @param {string}  direction The direction of the swipe
		 * @return int  The distance of the swipe
		 * @inner
		*/        
		function getMaxDistance(direction) {
			if (maximumsMap[direction]) return maximumsMap[direction].distance;
			return undefined;
		}
		
		/**
		 * Creats a map of directions to maximum swiped values.
		 * @return Object A dictionary of maximum values, indexed by direction.
		 * @inner
		*/
		function createMaximumsData() {
			var maxData={};
			maxData[LEFT]=createMaximumVO(LEFT);
			maxData[RIGHT]=createMaximumVO(RIGHT);
			maxData[UP]=createMaximumVO(UP);
			maxData[DOWN]=createMaximumVO(DOWN);
			
			return maxData;
		}
		
		/**
		 * Creates a map maximum swiped values for a given swipe direction
		 * @param {string} The direction that these values will be associated with
		 * @return Object Maximum values
		 * @inner
		*/
		function createMaximumVO(dir) {
		    return { 
		        direction:dir, 
		        distance:0
		    }
		}
		
		
		//
		// MATHS / UTILS
		//

		/**
		* Calculate the duration of the swipe
		* @return int
		* @inner
		*/
		function calculateDuration() {
			return endTime - startTime;
		}
		
		/**
		* Calculate the distance between 2 touches (pinch)
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int;
		* @inner
		*/
		function calculateTouchesDistance(startPoint, endPoint) {
			var diffX = Math.abs(startPoint.x - endPoint.x);
			var diffY = Math.abs(startPoint.y - endPoint.y);
				
			return Math.round(Math.sqrt(diffX*diffX+diffY*diffY));
		}
		
		/**
		* Calculate the zoom factor between the start and end distances
		* @param {int} startDistance Distance (between 2 fingers) the user started pinching at
	    * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
	    * @return float The zoom value from 0 to 1.
		* @inner
		*/
		function calculatePinchZoom(startDistance, endDistance) {
			var percent = (endDistance/startDistance) * 1;
			return percent.toFixed(2);
		}
		
		
		/**
		* Returns the pinch direction, either IN or OUT for the given points
		* @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function calculatePinchDirection() {
			if(pinchZoom<1) {
				return OUT;
			}
			else {
				return IN;
			}
		}
		
		
		/**
		* Calculate the length / distance of the swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int
		* @inner
		*/
		function calculateDistance(startPoint, endPoint) {
			return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
		}

		/**
		* Calculate the angle of the swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int
		* @inner
		*/
		function calculateAngle(startPoint, endPoint) {
			var x = startPoint.x - endPoint.x;
			var y = endPoint.y - startPoint.y;
			var r = Math.atan2(y, x); //radians
			var angle = Math.round(r * 180 / Math.PI); //degrees

			//ensure value is positive
			if (angle < 0) {
				angle = 360 - Math.abs(angle);
			}

			return angle;
		}

		/**
		* Calculate the direction of the swipe
		* This will also call calculateAngle to get the latest angle of swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function calculateDirection(startPoint, endPoint ) {
			var angle = calculateAngle(startPoint, endPoint);

			if ((angle <= 45) && (angle >= 0)) {
				return LEFT;
			} else if ((angle <= 360) && (angle >= 315)) {
				return LEFT;
			} else if ((angle >= 135) && (angle <= 225)) {
				return RIGHT;
			} else if ((angle > 45) && (angle < 135)) {
				return DOWN;
			} else {
				return UP;
			}
		}
		

		/**
		* Returns a MS time stamp of the current time
		* @return int
		* @inner
		*/
		function getTimeStamp() {
			var now = new Date();
			return now.getTime();
		}
		
		
		
		/**
		 * Returns a bounds object with left, right, top and bottom properties for the element specified.
		 * @param {DomNode} The DOM node to get the bounds for.
		 */
		function getbounds( el ) {
			el = $(el);
			var offset = el.offset();
			
			var bounds = {	
					left:offset.left,
					right:offset.left+el.outerWidth(),
					top:offset.top,
					bottom:offset.top+el.outerHeight()
					}
			
			return bounds;	
		}
		
		
		/**
		 * Checks if the point object is in the bounds object.
		 * @param {object} point A point object.
		 * @param {int} point.x The x value of the point.
		 * @param {int} point.y The x value of the point.
		 * @param {object} bounds The bounds object to test
		 * @param {int} bounds.left The leftmost value
		 * @param {int} bounds.right The righttmost value
		 * @param {int} bounds.top The topmost value
		* @param {int} bounds.bottom The bottommost value
		 */
		function isInBounds(point, bounds) {
			return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
		};
	
	
	}
	
	


/**
 * A catch all handler that is triggered for all swipe directions. 
 * @name $.fn.swipe#swipe
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 



/**
 * A handler that is triggered for "left" swipes.
 * @name $.fn.swipe#swipeLeft
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler that is triggered for "right" swipes.
 * @name $.fn.swipe#swipeRight
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A handler that is triggered for "up" swipes.
 * @name $.fn.swipe#swipeUp
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler that is triggered for "down" swipes.
 * @name $.fn.swipe#swipeDown
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
 * This is triggered regardless of swipe thresholds.
 * @name $.fn.swipe#swipeStatus
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
 * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler triggered for pinch in events.
 * @name $.fn.swipe#pinchIn
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A handler triggered for pinch out events.
 * @name $.fn.swipe#pinchOut
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */ 

/**
 * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
 * @name $.fn.swipe#pinchStatus
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A click handler triggered when a user simply clicks, rather than swipes on an element.
 * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
 * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
 * Use the <code>tap</code> event instead.
 * @name $.fn.swipe#click
 * @event
 * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead 
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
 /**
 * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
 * @name $.fn.swipe#tap
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
/**
 * A double tap handler triggered when a user double clicks or taps on an element.
 * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property. 
 * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
 * as the script needs to check if its a double tap.
 * @name $.fn.swipe#doubleTap
 * @see  $.fn.swipe.defaults#doubleTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
 /**
 * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
 * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. 
 * @name $.fn.swipe#longTap
 * @see  $.fn.swipe.defaults#longTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */

  /**
 * A hold tap handler triggered as soon as the longTapThreshold is reached
 * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. 
 * @name $.fn.swipe#hold
 * @see  $.fn.swipe.defaults#longTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */

}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/local/templates/empty/js/vendor/jquery.ba-throttle-debounce.min.js?1452688426731";s:6:"source";s:67:"/local/templates/empty/js/vendor/jquery.ba-throttle-debounce.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/local/templates/empty/js/main.js?164984608326106";s:6:"source";s:33:"/local/templates/empty/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// Глобальный объект для общих методов.
console.log('okok');
var IV_GLOBAL = {
    initLightBox: function(){
        var $body = $('body');
        var LightBox;
        return  function(links, index, data, hasSocial){
            if($('#live-galery').length == 0){
                $body.append(html);
            }
            LightBox = $('#live-galery');
            blueimp.Gallery(links,  {
                index: index,
                container: '#live-galery',
                onslide: function (index, slide){
                    if(links[index].id.indexOf('live') +1){
                        window.location.replace(location.protocol+"//"+location.host+location.pathname+location.search+"#"+links[index].id.replace('live-','live'));
                    }

                    LightBox.find('.gallery-description-body .fa').removeClass().addClass(data[index]['icon']);
                    LightBox.find('.gallery-title').html(data[index]['description']);
                    LightBox.find('.gallery-date').html(data[index]['date']);
                    //if(hasSocial !== false)
                    //    LightBox.find('.social-links').html(SocialLinks);
                    //if(hasSocial !== false){
                    var sl = LightBox.find('.social-likes-lightbox');
                    if (sl.length) {
                        sl.socialLikes({
                            url: data[index]['soc']['url'],
                            title: data[index]['soc']['title'],
                            counters: true,
                            zeroes: false,
                            forceUpdate: true
                        });
                    }
                    //}

                    LightBox.find('img').attr('alt', data[index]['img-alt']);
                    LightBox.find('img').attr('title', data[index]['img-title']);
                },
                onclose: function () {
                    window.location.hash = '#N';
                }
            });
        };
    },
    getWindowSize: function(){
        var myWidth = 0, myHeight = 0;
        if( typeof( window.innerWidth ) == 'number' ) {
            //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        var size = {
            width: myWidth,
            height: myHeight
        }
        return size;
    }
};
$(function(){
    // Общие методы.
    document.createElement( "picture" );
    var initSetSiteSlogan = function(){
        var slogans = [
            'Технологично. Честно. Вовремя.',
            'Технологично. Честно. Вовремя.',
            'MVP 1C-Битрикс',
            'Технологично. Честно. Вовремя.',
            'Проблем нет. И не будет.',
            'Все четко. Все работает.',
            'Кадры решают все.',
            '25 человек. 11 лет. 500 сайтов.',
            'Первые в ЮФО.',
            'Москва. Ростов. Волгоград.',
            'Успешные интернет-магазины.',
            'Говорим только правду.',
            'Делаем теплые сайты.',
            'Люди с мозгами. Сайты с душой.',
            'Интернет-маркетинг.',
            'Растем. Растите с нами.',
            'Возвращаем сайты к жизни.',
            'Поддерживаем чужие проекты.',
            'Оптимизация конверсии.',
            'Все по делу. Без тормозов.'];
        var SetSiteSlogan = function(){
            if (slogans && slogans.length > 0){
                var newSlogan = slogans[Math.floor(Math.random() * slogans.length)];
                if(document.getElementById('random_slogan') != null)
                    document.getElementById('random_slogan').innerHTML = newSlogan;
            }
        }

        SetSiteSlogan();
    }
    var initFooterHeight = function(){
        var footer = $('.sticky-footer');
        var push = $('.sticky-push');
        var wrap = $('.sticky-wrap');
        var temp;
        var  setFooterHeight = function(){
            temp = footer.height('auto').outerHeight();
            push.css({height: temp});
            wrap.css({ 'margin-bottom': - temp});
        };
        setFooterHeight(); /* changes by KYS on 13.01.16 */
        $(window).on('resize.initFooterHeight', $.debounce( 500, setFooterHeight));
    }
    var Modifier = function(){
        var TouchKeyboardFix = function(){
            var $body = $('body');
            if(isTouchDevice() || $body.hasClass('touch')){
                $(document)
                    .on('focus', '.form-control ', function(e) {
                        $body.addClass('keyboard');
                    })
                    .on('blur', '.form-control', function(e) {
                        $body.removeClass('keyboard');
                    });
            }
        }
        var ModalSafaryFix = function(){
            $('.modal').on('shown.bs.modal', function(){
                setTimeout( function(){
                    $(window).resize();
                }, 300);
            });
        }
        var getWindowSize = function() {
            var myWidth = 0, myHeight = 0;
            if( typeof( window.innerWidth ) == 'number' ) {
                //Non-IE
                myWidth = window.innerWidth;
                myHeight = window.innerHeight;
            } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
                //IE 6+ in 'standards compliant mode'
                myWidth = document.documentElement.clientWidth;
                myHeight = document.documentElement.clientHeight;
            } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
                //IE 4 compatible
                myWidth = document.body.clientWidth;
                myHeight = document.body.clientHeight;
            }
            var size = {
                width: myWidth,
                height: myHeight
            }

            return size;
        }
        var Navbar = function(){
            var element  = $('.navbar-intervolga');
            var toggle = function(){
                if(element.find('.container, .container-fluid').outerWidth() < element.find('.navbar-nav').outerWidth()){
                    element.find('.container').removeClass('container').addClass('container-fluid');
                }
                else{
                    element.find('.container-fluid').removeClass('container-fluid').addClass('container');
                }
                element.find('.navbar-collapse').css({'max-height': getWindowSize().height - 51});
            }
            toggle();
            $(window).on('resize.Modifier', $.debounce( 500, toggle));
        }
        var operaMini = function(){
            if(navigator.userAgent.match(/Opera Mini/) != null){
                $('html').addClass('opera-mini')
            }else{
                $('html').addClass('no-opera-mini')
            }
        }

        operaMini();
        $(window).on('load.Modifier', Navbar);
        $(window).on('load.Modifier', ModalSafaryFix);
        $(window).on('load.Modifier', TouchKeyboardFix);
    }



    // инициализация живой ленты на главной и страницe жизнь.
    var initLive = function(){
        var wrapper =  $('.live-list-wrap');
        wrapper =  wrapper.length ? wrapper  : $('.live-list-detail');
        var slider = wrapper.find('.live-list');
        var temp;
        var winSize = function(){
            var size = {
                width: 0,
                height: 0
            }
            if( typeof( window.innerWidth ) == 'number' ) {
                //Non-IE
                size.width = window.innerWidth;
                size.height = window.innerHeight;
            } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
                //IE 6+ in 'standards compliant mode'
                size.width = document.documentElement.clientWidth;
                size.height = document.documentElement.clientHeight;
            } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
                //IE 4 compatible
                size.width = document.body.clientWidth;
                size.height = document.body.clientHeight;
            }
            return size;
        };
        var resize = function(){
            temp = winSize().width;

            slider.trigger("configuration", {
                auto: false,
                responsive: false,
                circular: false,
                infinite: false,

                next: '.live-pagination .next',
                prev: '.live-pagination .prev',
                scroll:{
                    items: 'page',
                    duration: 250,
                    fx: 'crossfade',
                    easing: 'linear'
                },
                items:{
                    visible: 4
                }
            });
            if(temp < 992 && temp >= 500){
                slider.trigger("configuration", {
                    scroll:{
                        items: 2,
                        duration: 500
                    },
                    items:{
                        visible: 2
                    },
                    reInit: false
                });
            }
            if(temp < 500){
                slider.trigger("configuration", {
                    scroll:{
                        items: 1,
                        duration: 250
                    },
                    items:{
                        visible: 1
                    },
                    reInit: false
                });
            }
        };
        var getData = function(){
            var temp = [];
            wrapper.find('[data-blueimp]').closest('.live-list-item').each(function(){
                temp.push({
                    icon: $(this).find('.live-item-label .fa').attr('class'),
                    description: $(this).find('.live-item-description').html(),
                    date: $(this).find('.live-item-data').html(),
                    soc: {
                        url: $(this).attr('data-soc-url'),
                        title: $(this).attr('data-soc-title')
                    },
                    "img-alt": $(this).find('img').attr('alt'),
                    "img-title": $(this).find('img').attr('title')
                });
            });
            return temp;
        }
        var lightBox = IV_GLOBAL.initLightBox();
        var toggleLightBox = function(){
            if(wrapper.length){
                var date;
                var index;
                var $this;
                var links = wrapper.find('[data-blueimp]');
                wrapper.delegate('.live-item-body.image', 'click', function(e){
                    date = getData();
                    if(navigator.userAgent.match(/Opera Mini/) == null){
                        if(!$(e.target).is('a:not([data-blueimp])')){
                            e.preventDefault();
                            $this = $(this);
                            index = wrapper.find('.image').index($this);
                            links = wrapper.find('[data-blueimp]');
                            lightBox(links, index, date, true);
                            return false;
                        }
                    }


                });

            }
        }
        var startSlider = function(){
            slider.length && slider.carouFredSel({
                auto: false,
                responsive: false,
                circular: false,
                infinite: false,

                next: $('.live-main').find('[href="#next"]'),
                prev: $('.live-main').find('[href="#prev"]'),
                scroll:{
                    items: 'page',
                    duration: 250,
                    fx: 'crossfade',
                    easing: 'linear'
                },
                items:{
                    visible: 4
                },
                swipe:{
                    onTouch: true,
                    onMouse: true
                },
                onCreate: function(){
                    $(window).on('resize', $.debounce( 1500, resize));

                }
            });
        }
        if(slider.length){
            $(window).on('load.initLive', startSlider);
        }

        if(wrapper.length){
            $(window).on('load.initLive', toggleLightBox);
            $(window).on('load', function(){
                var date = getData();
                var index;
                var $this;
                var links = wrapper.find('[data-blueimp]');
                var hash = window.location.hash.replace('live','live-');
                if(window.location.hash.indexOf('#live') + 1 && $(hash).length){
                    index = links.index($(hash));
                    lightBox(links, index, date, true);
                }
                else if(window.location.hash.indexOf('#live') + 1){
                    $.post('', {'whatsup':window.location.hash}, function(data){
                        if (data) {
                            wrapper.append(data);
                            date = getData();
                            links = wrapper.find('[data-blueimp]');
                            hash = window.location.hash.replace('live','live-');
                            if(window.location.hash.indexOf('#live') + 1 && $(hash).length){
                                index = links.index($(hash));
                                lightBox(links, index, date, true);
                                //date[index].soc.socialLikes({
                                //    counters: true,
                                //    zeroes: false
                                //});
                            }else{
                                return false;
                            }
                        }else{
                            return false;
                        }
                    });
                }
                else{
                    return false;
                }
            });
        }


    }

    // Слайдер страницы портфолио
    var initPortfolio = function(){
        var wrapper = $('.portfolio-works-slider');
        var slider = wrapper.find('.slider-inner');
        var lightBox = IV_GLOBAL.initLightBox();
        var getData = function(){
            var temp = [];
            wrapper.find('[data-blueimp]').each(function(){
                temp.push({
                    icon: typeof ($(this).attr('data-icon')) != 'undefined' ? $(this).attr('data-icon') : 'fa fa-image',
                    description: typeof ($(this).attr('title')) != 'undefined' ? $(this).attr('title') : '',
                    date: typeof ($(this).attr('data-date')) != 'undefined' ? $(this).attr('data-date') : '',
                    soc: '' // Alexeev
                });
            });
            return temp;
        }
        var startSlider = function(){
            slider.length && slider.carouFredSel({
                width: '100%',
                auto: false,
                scroll: 1,
                align: "center",
                items:{

                },
                swipe:{
                    onTouch: true,
                    onMouse: true
                },
                next: wrapper.find('.slider-next'),
                prev: wrapper.find('.slider-prev'),
                onCreate: function(data){
                    var links= $('[data-blueimp]');
                    var data = getData();
                    var index = 0;
                    links.on('click.initPortfolio', function(e){
                        links = $('[data-blueimp]');
                        index = wrapper.find('[data-blueimp]').index($(this));
                        lightBox(links, index, data, false)
                        return false;
                    });
                }
            });
        }

        if(slider.length)
            $(window).on('load.initPortfolio', startSlider);
    }

    // Используеться в главном слайдере и в слайдере на странице портфолио.
    var initSliderResponsive = function(){
        var wrapper = $('.slider-responsive');
        var slider = $('.slider-responsive-inner');
        var panel = $('.slider-responsive-panel');
        var isMin = slider.find('.slider-responsive-inner-item').length < 2;
        var selectedItem = {};
        var defaultItem = {};
        var long;
        var tempSize;
        var getWindowSize = function() {
            var myWidth = 0, myHeight = 0;
            if( typeof( window.innerWidth ) == 'number' ) {
                //Non-IE
                myWidth = window.innerWidth;
                myHeight = window.innerHeight;
            } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
                //IE 6+ in 'standards compliant mode'
                myWidth = document.documentElement.clientWidth;
                myHeight = document.documentElement.clientHeight;
            } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
                //IE 4 compatible
                myWidth = document.body.clientWidth;
                myHeight = document.body.clientHeight;
            }
            var size = {
                width: myWidth,
                height: myHeight
            }
            return size;
        }
        var getMinMarge = function( newItems ) {
            var minMarg;
            try{
                var center  = newItems.eq(0).outerWidth(true) + (newItems.eq(1).outerWidth(true) / 2);
                minMarg = ($(window).width() / 2) - center;
            }catch (e){
                minMarg = 0;
            }


            return minMarg;
        }
        var resize = function(){
            long = getWindowSize().width > 1400;
            if(tempSize === long) return;
            tempSize = long;
            slider.trigger('destroy', {origOrder: true});
            startSlider();
        }
        var calculateHeight = function(){
            slider.parent().height(slider.find('.slider-responsive-inner-item').height());
            slider.height(slider.find('.slider-responsive-inner-item').height());
            if(long && !isMin){
                slider.parent().css({
                    'marginLeft': getMinMarge($('.slider-responsive-inner-item').slice(0, 2) )
                });
            }
        }
        var toggleHeight = function(){
            var container = $('.toggle-height', wrapper);
            var check = $('[data-toggle="radio-switch"]', panel);
            var listCurrent = check.data('slides');
            check.length && check.bootstrapSwitch({
                size: 'mini',
                onText: 'off',
                offText: 'on',
                inverse: true
            });
            check.on('switchChange.bootstrapSwitch', function(event, state) {
                if(state){
                    panel.addClass('active');
                    container.addClass('active');
                    startSlider();
                    cookiesHelper.set('slider_state', 'show', {
                        expires: 30 * 24 * 60 * 60,
                        path: '/'
                    });
                }
                else{
                    panel.removeClass('active');
                    container.removeClass('active');
                    cookiesHelper.set('slider_state', 'hide', {
                        expires: 30 * 24 * 60 * 60,
                        path: '/'
                    });
                }
            });
            if(check.length){
                var sliderCookie = cookiesHelper.get('slider_state');
                var listSaved = cookiesHelper.get('slides_list');
                if(listSaved == null || listSaved != listCurrent){
                    cookiesHelper.set('slides_list', listCurrent, {
                        expires: 30 * 24 * 60 * 60,
                        path: '/'
                    });
                    sliderCookie = null;
                }
                if(sliderCookie == null || sliderCookie == 'show'){
                    check.bootstrapSwitch('state', true, true);
                    panel.addClass('active');
                    container.addClass('active');
                    startSlider();
                    if(sliderCookie == null){
                        cookiesHelper.set('slider_state', 'hide', {
                            expires: 30 * 24 * 60 * 60,
                            path: '/'
                        });
                    }
                }
            }
        }
        var startSlider = function(){
            long = getWindowSize().width > 1400;
            if (slider.children('.slider-responsive-inner-item').length == 1) {
                slider.addClass('one-img');
                $('.slider-responsive-controls').hide();
                return;
            };
            tempSize = long;
            slider.length && slider.carouFredSel({
                responsive: !long || isMin,
                circular: true,
                auto: false,
                infinite: true,
                width: long && !isMin ? 10000000: null,
                align: isMin ? 'center' : false,
                height: 0,
                next: wrapper.find('[href="#next"]'),
                prev: wrapper.find('[href="#prev"]'),
                items: {
                    minimum: 2,
                    visible: long && !isMin ? 3 : 1,
                    start: long && !isMin ? -1: 0
                },
                swipe: {
                    onMouse: !isMin && true,
                    onTouch: !isMin && true
                },
                scroll: {
                    items: 1,
                    duration: 700,
                    onBefore: function( data ) {
                        $(this).parent().animate({
                            'marginLeft': long && !isMin ? getMinMarge( data.items.visible ) : 0
                        }, data.scroll.duration);
                        data.items.old.eq(+long).animate(defaultItem, data.scroll.duration).removeClass('active');
                        data.items.visible.eq(+long).animate(selectedItem, data.scroll.duration).addClass('active');

                    }
                },
                onCreate: function(data){
                    $(this).parent().css({
                        'marginLeft': long && !isMin ? getMinMarge( data.items ): 0
                    });
                    $(this).children().not(':eq("'+(+long)+'")').css(defaultItem);
                    slider.parent().height(slider.find('.slider-responsive-inner-item').height());
                    slider.height(slider.find('.slider-responsive-inner-item').height());

                }
            });
        }
        if(panel.length){
            $(window).on('load', toggleHeight);
            $(window).on('resize', $.debounce(500, calculateHeight));
            $(window).on('resize', $.debounce(500, resize));
        } else if(slider.length){
            $(window).on('load.initSliderResponsive', startSlider);
            $(window).on('resize', $.debounce(500, resize));
            $(window).on('resize', $.debounce(500, calculateHeight));

        }

    }

    // Разработка сайтов, Интернет-маркетинг, Тех. поддержка
    var Activities = function(){

        var activities = $('.activities-description .tab-content').closest('.activities-description');
        var item = activities.find('.item');
        var active;
        var resize = function(){
            active = activities.find('.item.active').height();
            activities.find('.activities-inner').css({
                'padding-bottom': active
            });
        }
        if(typeof ($.fx.eqHeight) != 'undefined'){
            $('.activities-inner').eqHeight({
                eqdisable: '[0;768)',
                target: '.item'
            });
        }

        $(window).on('load.Activities', resize);
        $(window).on('resize.Activities', $.debounce(250, resize));






        $(window).on('load.activities', function(){

        });

    }

    // Вызовы
    initSetSiteSlogan();
    initFooterHeight();
    Modifier();
    initLive();
    initPortfolio();
    initSliderResponsive();
    Activities();


});






//window.LiveLiteBoxResize = function(){
//    var $this = $('#live-galery');
//    if($this.is(':visible')){
//        var size = window.getWindowSize();
//        if(size.width>768){
//            var footerHeight = $('.blueimp-gallery-description').outerHeight();
//            $this.find('.slides').animate({
//                'padding-bottom' : footerHeight + 10
//            });
//        }
//        else{
//            $this.find('.slides').animate({
//                'padding-bottom' :  10
//            });
//        }
//
//    }
//}

/* End */
;; /* /local/templates/empty/js/vendor/modernizr-html5shiv-respond.min.js?145268842618171*/
; /* /local/templates/empty/js/vendor/modernizr.min.js?145268842612286*/
; /* /local/templates/empty/js/vendor/jquery.min.js?145268842693142*/
; /* /local/templates/empty/js/vendor/bootstrap/collapse.js?14526884265979*/
; /* /local/templates/empty/js/vendor/bootstrap/tooltip.js?145268842615103*/
; /* /local/templates/empty/js/vendor/plugins.js?14526884261569*/
; /* /local/templates/empty/js/vendor/jquery.touchSwipe.js?145268842670868*/
; /* /local/templates/empty/js/vendor/jquery.ba-throttle-debounce.min.js?1452688426731*/
; /* /local/templates/empty/js/main.js?164984608326106*/
