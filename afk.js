!function(){"use strict";function t(t){var n,e,o,u,i=this,a={containerText:"Czy dalej oglądasz?",containerClass:"",continueButtonText:"Tak",continueButtonClass:"",stopButtonText:"Nie",stopButtonClass:"",waitClass:"",showMessageAfter:1,pausePlayerAfter:1,continueButtonClickHandler:null,stopButtonClickHandler:null,ignoreUserActive:!1},s={countdownTimeoutId:null,buttonTimeoutId:null},c=videojs.mergeOptions(a,t),l=function(){return m("countdownTimeoutId"),r()?(C(),s.buttonTimeoutId=i.setTimeout(function(){i.pause()},c.pausePlayerAfter),void i.one("play",function(){T(),m("buttonTimeoutId")})):void i.setTimeout(l,1e4)},r=function(){return c.waitClass&&i.hasClass(c.waitClass)?!1:i.currentTime()+c.pausePlayerAfter/1e3+1>i.duration()?!1:i.paused()?!1:!0},d=function(){s.countdownTimeoutId&&m("countdownTimeoutId"),s.countdownTimeoutId=i.setTimeout(l,c.showMessageAfter)},m=function(t){var n=s[t];n&&i.clearTimeout(n),s[t]=null},f=function(t){T(),m("buttonTimeoutId"),"function"==typeof c.continueButtonClickHandler?c.continueButtonClickHandler.call(i,t):i.paused()&&i.play()},p=function(t){T(),m("buttonTimeoutId"),"function"==typeof c.stopButtonClickHandler?c.stopButtonClickHandler.call(i,t):(i.pause().currentTime(0).trigger("loadstart"),i.hasStarted(!1))},T=function(){n.className.match(/\bhidden\b/)||(n.className+=" hidden")},C=function(){n.className=n.className.replace(/\bhidden\b/,"")},v=function(){n=document.createElement("div"),n.className="vjs-afk-container "+c.containerClass,T(),e=document.createElement("h1"),e.className="container-text",e.innerHTML=c.containerText,o=document.createElement("button"),o.className="vjs-afk-button afk-button "+c.continueButtonClass,o.innerHTML=c.continueButtonText,o.addEventListener("click",f),u=document.createElement("button"),u.className="vjs-afk-button afk-button "+c.stopButtonClass,u.innerHTML=c.stopButtonText,u.addEventListener("click",p),n.appendChild(e),n.appendChild(o),n.appendChild(u),i.el().appendChild(n),i.on("userinactive",function(){d()}),c.ignoreUserActive||i.on("useractive",function(){m("countdownTimeoutId")})};i.ready(function(){v()})}videojs.plugin("AFKMonitor",t)}();
