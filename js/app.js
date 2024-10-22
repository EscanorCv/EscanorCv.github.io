function ingresar(){
    const nombre = document.getElementById("name").value;
    const user = nombre.toUpperCase()

    if(user == "JENNYFER"){
        window.location = "bienvenida.html";
    }else{
        alert("Ese no es el nombre de mi pelirroja fav, tu no eres la chica que me gusta >:(");
    }   
}

function bye(){
    window.location = "bye.html";
}