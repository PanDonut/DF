const sess = localStorage.getItem('sesss');

if(sess == 'false') {
    window.location.replace("../");
} else if(sess == null) {
    localStorage.setItem('sesss', 'false');
}