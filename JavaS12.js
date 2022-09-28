window.addEventListener("load", function(){
    formulario=this.document.getElementById("formulario");

    formulario.addEventListener("submit",function(){
        event.preventDefault();
       let nombre = document.getElementById("nombre").value;
       let pass = document.getElementById("pwd").value;

       let resp = document.getElementById("result");

        //alert("El nombre es "+ nombre + "contraseña " + pass);

        if (nombre == "G7S21" && pass=="Si se puede"){

            resp.innerText ="Se acerto el ingreso al sistema";
            resp.style.color="red";

        }else{
            resp.innerText ="Estas mal";
            resp.style.color="red";
            resp.style.fontSize="2em";
            resp.style.width="500px";
        }
    })

});
