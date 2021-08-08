function check(form) {
	username = new Array("admin1", "admin2", "Mistfall", "Jendros", "PanDonut", "Hubert", "Timek");
	password = new Array("admin1", "admin2", "mPMql", "IvafB", "rura", "hubert", "lNJKl");
	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('#adminhome')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('../')/* The members homepage */
	}
	else if (form.userid.value == username[3] && form.pswrd.value == password[3]) {
		location.replace('../')/* The members homepage */
	}
	else if (form.userid.value == username[4] && form.pswrd.value == password[4]) {
		location.replace('../')/* The members homepage */
	}
	else if (form.userid.value == username[5] && form.pswrd.value == password[5]) {
		location.replace('https://app.duckfilms.cloudns.ph/')/* The members homepage */
	}
	else if (form.userid.value == username[6] && form.pswrd.value == password[6]) {
		location.replace('https://app.duckfilms.cloudns.ph/')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Złe hasło")
	}
	else {
		alert("Zła nazwa lub hasło")
	}
}
