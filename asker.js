Registry.require(["promise","helper"],function(){var m=Registry.get("helper"),h=Registry.get("promise"),e={},n=function(a){var b=m.createUUID();e[b]=a;return b},p=function(a,b){var c=h();void 0===b&&(b=!0);rea.tabs.getSelected(null,function(d){d=d?d.index:void 0;rea.tabs.create({url:rea.extension.getURL("ask.html")+"?aid="+a,active:b,index:d},function(a){a||(console.error("rea.tabs.create failed -> giving up now!"),c.reject({error:"rea.tabs.create failed -> giving up now!"}));c.resolve({id:a.id,close:function(){rea.tabs.remove(a.id)}})})});
return c.promise()},f=null,r=function(){var a=Date.now(),b=e;e={};var c=Object.keys(b);c.forEach(function(d){var c=b[d];c&&a-c.ts<q?e[d]=c:c.com.reject()});f&&0===c.length&&(window.clearInterval(f),f=null)},q=15E3,k=!1,g=function(a,b){k||l.init();null===f&&(f=window.setInterval(r,5E3));var c=h(),d={ts:Date.now(),com:c,preparat:b,type:a},d=n(d);return p(d,b.active).then(function(a){return c.promise().done(function(b){(b.ok||b.aborted)&&a.close()})})},l={init:function(){k||(k=!0)},onMessage:function(a){var b=
h(),c=a.aid,d=e[c];if(d)if(d.aborter&&(window.clearTimeout(d.aborter),delete d.aborter),"ping"==a.method)e[c].ts=Date.now(),b.resolve({pong:!0});else if("preparat"==a.method)b.resolve({preparat:d.preparat,type:d.type});else if("install"==a.method)d.com.resolve({ok:!0}),b.resolve({}),delete e[c];else if("import"==a.method)d.com.resolve({ok:!0,import_ids:a.import_ids,global_settings:a.global_settings}),b.resolve({}),delete e[c];else if("permission"==a.method)d.com.resolve({ok:!0,granted:a.granted,permissions:a.permissions,
origins:a.origins}),b.resolve({}),delete e[c];else if("unload"==a.method||"abort"==a.method){b.resolve({});var f=function(){d.com.resolve({ok:!1,aborted:!0});delete e[c]};"abort"==a.method?f():d.aborter=window.setTimeout(f,3E3)}else"connect"==a.method&&(d.com.resolve(a),b.resolve({}),delete e[c]);else b.reject({error:"unknown_id",please_close:!0});return b.promise()},install:function(a){return g("install",a)},import:function(a,b){return g("import",{scripts:a,global_settings:b})},askForPermission:function(a,
b,c){return g("permission",{permissions:a.permissions,origins:a.origins,title:b,message:c})},installError:function(a){return g("install_error",a)},askForConnect:function(a){return g("connect",a)}};Registry.register("asker","5867",l)});
