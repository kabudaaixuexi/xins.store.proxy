import{reactive as t,readonly as e,watch as r}from"vue";var s=function(s,a){if(null!=a&&a.length){var o=[];return a.map(function(a){if(a.state=t(a.state),s.provide(a.storeName,e(a.state)),a.persistedState){var n=JSON.parse(sessionStorage.getItem(a.storeName)||"{}");for(var i in n)a.state[i]=n[i];r(function(){return a.state},function(){sessionStorage.setItem(a.storeName,JSON.stringify(a.state))},{deep:!0})}o[a.storeName]={},a.setter&&a.setter.map(function(t){for(var e in t)o[a.storeName][e]=t[e].bind(a.state)})}),s.config.globalProperties.$Store=o,o}};export{s as default};
//# sourceMappingURL=index.esm.js.map