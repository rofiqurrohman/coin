function v_login(){
    var user = "admin"
    var pass = "admin"
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var u_pesan = document.getElementById('u_pesan')
    var p_pesan = document.getElementById('p_pesan')
    
		if(username == user && password == pass){
			return true
        }
        else{
			u_pesan.textContent = 'username invalid'
            p_pesan.textContent = 'password invalid'
            return false
		}
}