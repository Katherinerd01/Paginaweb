function go(){
    if (document.form.password.value=='1234' && document.form.login.value=='prueba'){
        document.form.submit();
    }else{
        alert("Por favor ingrese, Nombre de usuario y contraseña correctos.");
    }
    
}