function check(form) {
	username = new Array("admin1", "admin2", "Mistfall", "Jendros", "PanDonut");
	password = new Array("admin1", "admin2", "mPMql", "IvafB", "rura");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('#adminhome')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('https://app.duckfilms.cloudns.ph/load/')/* The members homepage */
	}
	else if (form.userid.value == username[3] && form.pswrd.value == password[3]) {
		location.replace('https://app.duckfilms.cloudns.ph/load/')/* The members homepage */
	}
	else if (form.userid.value == username[4] && form.pswrd.value == password[4]) {
		location.replace('https://app.duckfilms.cloudns.ph/load/')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}