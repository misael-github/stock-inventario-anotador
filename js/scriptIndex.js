//AL DOCUMENTO LE AGREGO UN EVENTO QUE CUANDO MI HTML CARGÓ ESTE SE DISPARA
document.addEventListener('DOMContentLoaded', () => {
    //OBTENGO DEL LOCALSTORAGE LOS NOMBRES DE LOS PRODUCTOS EN UN ARRAY DE OBJETOS
    const reciboProductos = JSON.parse(localStorage.getItem("productos"));
  
    //OBTENGO LA POSICIÓN DE LA TABLA DONDE VOY A AGREGAR MIS ELEMENTOS, Y LO GUARDO EN LA VARIABLE ELEMENTONOMBRES
    const elementoNombres = document.querySelector('tbody');
    //NOS ASEGURAMOS QUE ESTE VACÍO EL TBODY
    elementoNombres.innerHTML = '';
    //DECLARAMOS UNA VARIABLE AFUERA PARA QUE SE VAYA LLENADO EL ID(#) DE LA TABLA, POR CADA VUELTA QUE DA EL FOREACH.
    let variableNúmero = 0;
    //RECORREMOS LOS PRODUCTOS CON FOREACH.
    // console .log(reciboProductos[0].precio)
    reciboProductos.forEach(producto => {
        const tr = document.createElement('tr'); //ES LA LINEA DE LA TABLA DE BOOTSTRAP
        const th = document.createElement('th'); //COLUMNA DONDE VAN LOS NÚMEROS
        const td = document.createElement('td'); //ESPACIOS DE LA TABLA, QUE SE LLENAN LOS PRODUCTOS.
        const td2 = document.createElement('td'); //CON CREATE ELEMENT CREAMOS EL ELEMENTO QUE LE INDICAMOS.
        const td3 = document.createElement('td'); //COMO LA TABLA TIENE 3 FILAS, CREAMOS 3 TD.
        const button = document.createElement('button'); //CREO UN BOTÓN PARA ELIMINAR DE A UN PRODUCTO.
        variableNúmero++; //AUMENTAMOS VARIABLE NUMERO POR CADA VUELTA QUE DE EL FOREACH.
        th.textContent = variableNúmero; //A LA COLUMNA DE NÚMEROS LE ASIGNAMOS COMO TEXTO, VARIABLENÚMERO.
        td.textContent = producto.nombre; //LE ASIGNAMOS A TD, COMO TEXTO, EL NOMBRE DEL PRODUCTO.
        td2.textContent = producto.cantidad; //LE ASIGNAMOS A TD, COMO TEXTO, LA CANTIDAD DEL PRODUCTO.
        td3.textContent = producto.precio;//LE ASIGNAMOS A TD, COMO TEXTO, EL PRECIO DEL PRODUCTO.
        button.classList.toggle('btn'); //LE ASIGNO LA CLASE BTN AL BUTTON.
        button.classList.toggle('btn-danger');//LE ASIGNO LA CLASE BTN-DANGER AL BUTTON PARA QUE TOME EL COLOR ROJO.
        button.classList.toggle('btnEi');
        button.textContent = '-';//LE ASIGNAMOS AL BUTTON, COMO TEXTO, EL SIGNO (-) DE BORRAR.
        elementoNombres.appendChild(tr); //AL TBODY LE AGREGAMOS COMO HIJO TR, QUE ES LA LINEA DE LA TABLA.
        tr.appendChild(th); // A TR LE ASIGNO COMO HIJO A TH.
        tr.appendChild(td); // A TR LE ASIGNO COMO HIJO A (TD = NOMBRE).
        tr.appendChild(td2);// A TR LE ASIGNO COMO HIJO A (TD2 = CANTIDAD).
        tr.appendChild(td3);// A TR LE ASIGNO COMO HIJO A (TD3 = PRECIO).
        tr.appendChild(button);// A TR LE ASIGNO COMO HIJO AL BUTTON.
    });
    
//OBTENEMOS EL BOTÓN DE (ELIMINAR TODO) CON SU CLASE DE BOOTSTRAP, Y GUARDAMOS LA POSICIÓN EN LA VARIABLE REMOVERTODO.
    let removerTodo = document.querySelector(".btnE"); 
//CREAMOS LA FUNCIÓN ELIMINAR TODO
    function eliminarTodo(){
       localStorage.clear("productos"); //CUANDO SE EJECUTE LA FUNCIÓN SE ELIMINA TODO LO QUE HAYA EN EL LOCALSTORAGE.
       document.querySelector("tbody").innerHTML = "";//Y TAMBIÉN ELIMINAMOS TODO LO QUE HAYA EN EL HTML DEL TBODY.
    }
  //AL BOTÓN REMOVER TODO LE DECIMOS QUE CUANDO HAGA EL EVENTO CLICK, EJECUTE LA FUNCIÓN ELIMINAR TODO.
    removerTodo.addEventListener("click", eliminarTodo);
  // LE ASIGNAMOS UN EVENTO AL DOCUMENTO, Y COMO PARÁMETRO LE PASAMOS EVENT QUE TIENE MUCHAS FUNCIONES PARA UTILIZAR.
    document.addEventListener('click', (event) => { 
        //console.log(event.target); EVENT.TARGET MUESTRA LA ETIQUETA MAS CERCANA DONDE HACEMOS CLICK.
        if(event.target.classList.contains('btnEi')){ //SI DONDE HACEMOS CLICK, TIENE ASIGNADA LA CLASE BTN INGRESA AL IF
            let nombreBuscado = event.target.closest('tr').querySelector('td').textContent; //CON CLOSEST BUSCA EL ELEMENTO TR Y DENTRO DEL TR BUSCA EL TD Y NOS DICE EL TEXTO QUE ESTÁ DENTRO DEL TD.
            let trBuscado = event.target.closest('tr');//BUSCO EL TR MAS CERCANO.
            let reciboProductos = JSON.parse(localStorage.getItem("productos")); //OBTENGO LOS DATOS DE LOCALSTORAGE NUEVAMENTE.
            reciboProductos = reciboProductos.filter(producto => producto.nombre != nombreBuscado); //A RECIBO PRODUCTOS LE DIGO QUE AHORA VALE IGUAL, PERO FILTRANDO LOS PRODUCTOS QUE SON DISTINTOS A NOMBRE BUSCADO.
            localStorage.setItem('productos', JSON.stringify(reciboProductos));//SETEAMOS AL LOCALSTORAGE, TODOS LOS NOMBRES MENOS EL NOMBRE BUSCADO, ENTONCES QUEDA SIN ESE PRODUCTO.
            trBuscado.innerHTML = '';//LE ASIGNAMOS EL DATO VACÍO AL TR, ASÍ LO ELIMINA DE LA TABLA.
        }     
    })

// const total = document.getElementById("priceTotal") // me devuelve NaN todo esto
// let precio = Number((reciboProductos[0].precio))
// let cantidad = Number((reciboProductos[0].cantidad))
// total.textContent =  cantidad * precio

});




   

