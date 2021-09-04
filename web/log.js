const sess = localStorage.getItem('sesss');

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
    if(sess == 'false') {
    window.location.replace("../");
    } else if(sess == null) {
    localStorage.setItem('sesss', 'false');
    }
} else {
    
}