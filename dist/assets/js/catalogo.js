
window.addEventListener('load', function(){
    if (sessionStorage.getItem("sesion")){
        var sesion = [];
        sesion = JSON.parse(sessionStorage.getItem("sesion"));
        console.log(sesion);
           if (sesion.length != 0){
            console.log("hola");
              document.getElementById("btnInicio").id = "cerrarSesion";
              var cerrarSesion = document.getElementById("cerrarSesion")
              cerrarSesion.innerHTML = "Cerrar Sesión";
              cerrarSesion.addEventListener("click", ()=>{
                sessionStorage.removeItem("sesion");
              })

           }
       }

      if(this.localStorage.getItem("carrito")){
        console.log("carrito existe")
        carrito = JSON.parse(this.localStorage.getItem("carrito"));
      }else{
        console.log("carrito no existe")
        carrito = [];
        this.localStorage.setItem("carrito", JSON.stringify(carrito));
      }
      
      

      this.document.addEventListener("click", (event) => {
        
        if (event.target.className == "carro btn"){
        // var ruta = `http://localhost:3000/tienda/${event.target.id}`;
        var ruta = `https://tfc-dice-dungeons-production.up.railway.app/tienda/${event.target.id}`;

        $.getJSON(ruta,
          (data, status) => {
            if (status == "success"){
              console.log(data)
              let carrito = JSON.parse(this.localStorage.getItem("carrito"))
              carrito.push(data);
              console.log(carrito);
              this.localStorage.setItem("carrito", JSON.stringify(carrito));
            }
        })
    }})
;

    

   
    })


    