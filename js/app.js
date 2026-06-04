function login(){
const u=document.getElementById('user').value;
const p=document.getElementById('pass').value;
document.getElementById('msg').textContent=(u==='admin'&&p==='admin123')?'Login correcto':'Credenciales incorrectas';
}
