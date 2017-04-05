console.log("inicio prueba de aplicación");

function corregirExpedientes(arr){
    arr.forEach(function(a){
        if(a.esInvalido)
            a.fechaInicio=moment().toDate();
    });
}

function ordenarExpte(arr){
    return arr.sort(function(a,b){
        if(a.prioridad > b.prioridad){
            return -1;
        }else if(a.prioridad < b.prioridad){
            return 1;
        }else if(moment(a.fechaInicio).diff(b.fechaInicio)){
            return 1;
        }else{
            return -1;
        }
    });
}


var emp1 = new Empleado("E1","e1@mail.com","123","202223334441","1000.10");
var emp2 = new Empleado("E2","e2@mail.com","123","272223336669","1030.10");
var emp3 = new Empleado("E3","e3@mail.com","123","274423334441","1500.99");
var emp4 = new Empleado("E4","e4@mail.com","123","201123338881","1000.10");
var emp5 = new Empleado("E5","e5@mail.com","123","202223335551","2050.10");

console.log(emp1);
console.log("El empleado e1 es : "+emp1);

var area1 = new Area("area 1");
var area2 = new Area("area 2");
var area3 = new Area("area 3");

area1.agregarEmpleado(emp1);
area1.agregarEmpleado(emp2);
area2.agregarEmpleado(emp3);
area2.agregarEmpleado(emp4);
area3.agregarEmpleado(emp5);
//area3.agregarEmpleado(emp1);

//tipos de expedientes 
var tipoLicitacion = {id:1,tipo:"Licitacion"}; 
var tipoPagos = {id:2,tipo:"Pagos"}; 
var tipoConcursos = {id:3,tipo:"Concursos"}; 

/*
    Paso 03: Probar la creación de expedientes
*/
// crear 6 expedientes 
var expediente1 = new Expediente(tipoLicitacion,"licitar Q","20/01/2017",3); 
var expediente2 = new Expediente(tipoConcursos,"Ingresar mm","23/01/2017",1); 
var expediente3 = new Expediente(tipoPagos,"Pago x","18/01/2017",5); 
var expediente4 = new Expediente(tipoPagos,"Pago z","04/01/2017",2); 
var expediente5 = new Expediente(tipoConcursos,"Concurso n","29/01/2017",4); 
var expediente6 = new Expediente(tipoLicitacion,"licitar W","32/01/2017",1); 
var listaExpedientes = [expediente1,expediente2,expediente3,expediente4,expediente5,expediente6]; 

/*
    Paso 03-04: Verificar por consola que la lista de expediente luego de la modificación contiene un expediente con una 
    fecha correcta
 */
corregirExpedientes(listaExpedientes);
console.log(listaExpedientes); 

//expediente1.ficha(); 

expediente1.pasar(99,area1);
expediente2.pasar(88,area3);
expediente3.pasar(44,area3);
expediente4.pasar(31,area2);
expediente5.pasar(9,area1);
expediente6.pasar(6,area2);
//verificar cuantos expedientes hay en cada área
console.log(area1);
console.log(area2);
console.log(area3);

expediente1.pasar(100,area2);
expediente2.pasar(89,area1);
expediente3.pasar(54,area2);
expediente5.pasar(19,area2);

//verificar cuantos expedientes hay en cada área
console.log(area1);
console.log(area2);
console.log(area3);

// Verificación de un expediente
expediente5.fichaDetallada();
expediente5.pases();

/**
 * Paso 05: Verificar que no se puede pasar un expediente archivado
 */
expediente5.archivar();
expediente5.pasar(19,area3);
// verificar que el pase no se ejecutó porque el pase está en archivo
console.log(printDetailedSummary(area1,area1.expedientes));
console.log(printDetailedSummary(area2,area2.expedientes));
console.log(printDetailedSummary(area3,area3.expedientes));


/**
 * Paso 06: manipulación de arreglos
 */
console.log("*** Filtro por tipo: Tipo:Licitacion ***");
console.log(printDetailedSummary(area2,area2.buscarExptePorTipo(tipoLicitacion))); // tipoLicitacion | tipoPagos | tipoConcursos

var daysAgo=70;
console.log("*** Filtro por expedientes dormidos :: fecha límite: "+moment().subtract(daysAgo,'days').format("DD/MM/YYYY")+" ***");
console.log(printDetailedSummary(area2,area2.buscarExpteDormidos(daysAgo)));


console.log("*** Orden de Expedientes por prioridad y fecha ***");
console.log(printDetailedSummary(null,ordenarExpte(listaExpedientes)));