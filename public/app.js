async function login(){
 const r=await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({usuario:u.value,password:p.value})});
 msg.textContent=r.ok?'Login correcto':'Credenciales inválidas';
}