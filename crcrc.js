(function(){Registry.require("helper",function(){var m=Registry.get("helper"),g=function(c,e,h,k,f,g){var a;try{var d=c+"_"+m.createUniqueId(h,k);void 0!=f&&(d+="_"+f);if((a=document.getElementById(d))&&g){var l=document.createElement(c);l.setAttribute("id",d);var n=a.parentNode;n.insertBefore(l,a);n.removeChild(a);a=l}else a?a.inserted=!0:(a=document.createElement(c),a.setAttribute("id",d));e&&a.setAttribute("class",e);a.__removeChild||(a.__removeChild=a.removeChild,a.removeChild=function(b){delete b.inserted;
a.__removeChild(b)});a.__appendChild||(a.__appendChild=a.appendChild,a.appendChild=function(b,c){"Array"!==m.toType(b)&&(b=[b]);b.forEach(function(b){(!b.parentNode&&!b.inserted||c)&&a.__appendChild(b)})});a.__insertBefore||(a.__insertBefore=a.insertBefore,a.insertBefore=function(b,c){b.parentNode||b.inserted||a.__insertBefore(b,c)})}catch(b){console.log("options: Error:"+b.message)}return a};Registry.register("crcrc","5867",{cr:function(c,e,h,k,f){return g(c,null,e,h,k,f)},crc:g})})})();
