//crear constructuor
//*revisa bien la estructura*//

let estudiantes = []; //array
//crear consturctor
let contador=0;
function Estudiante(nombreP,generoP,celularP,correoP,campusP,semestreP,califAP,califBP,califCP ){
    this.nombre= nombreP;
    this.genero= generoP;
    this.celular= celularP;
    this.correo= correoP;
    this.campus= campusP;
    this.semestre= semestreP
    this.califA= califAP;
    this.califB= califBP;
    this.califC= califCP;
    this.id=contador++;
}

    let inputNombre=document.getElementById("txtNombre");
    let inputGenero=document.getElementById("selGenero");
    let inputCelular=document.getElementById("txtCelular");
    let inputCorreo=document.getElementById("txtCorreo");
    let inputCampus=document.getElementById("txtCampus");
    let inputSemestre=document.getElementById("txtSemestre");
    let inputCalifA=document.getElementById("califA");
    let inputCalifB=document.getElementById("califB");
    let inputCalifC=document.getElementById("califC");
    
  

function validacion(estudiante){
        let valida=true;  //todo bien
    
        //reset de errores
        inputNombre.classList.remove('error');
        inputGenero.classList.remove('error');
        inputCelular.classList.remove('error');
        inputCorreo.classList.remove('error');
        inputCampus.classList.remove('error');
        inputSemestre.classList.remove('error');
        inputCalifA.classList.remove('error');
        inputCalifB.classList.remove('error');
        inputCalifC.classList.remove('error');
    
        if(estudiante.nombre == ""){
            inputNombre.classList.add('error');
            valida=false;
        }
        if(estudiante.genero == ""){
            inputGenero.classList.add('error');
            valida=false;
        }
        if(estudiante.celular == ""){
            inputCelular.classList.add('error');
            valida=false;
        }  
        if(estudiante.correo== ""){
            inputCorreo.classList.add('error');
            valida=false;
        }
        if(estudiante.campus == ""){
            inputCampus.classList.add('error');
            valida=false;
        }
            if(estudiante.semestre == ""){
                inputSemestre.classList.add('error');
                valida=false;
        }
        if(estudiante.califA == ""){
            inputCalA.classList.add('error');
            valida=false;
         } 
         
        if(estudiante.califA == ""){
            inputCalA.classList.add('error');
            valida=false;
        }
        if(estudiante.califB == ""){
            inputCalA.classList.add('error');
            valida=false;
        } 
        if(estudiante.califC == ""){
            inputCalA.classList.add('error');
            valida=false;
        } 
        
        return valida;
    
    }

//crear funcion register
function Registrar(){ 
    console.log("Registrando alumnos ...");
    let newEstudiante = new Estudiante (inputNombre.value,inputGenero.value,inputCelular.value,inputCorreo.value,inputCampus.value,inputSemestre.value,inputCalA.value,inputCalB.value,inputCalC.value);



    if(validacion(newEstudiante)==true){
        
        
        console.log(newEstudiante);
        estudiantes.push(newEstudiante);
        //mostrar registros
        // displayCards();
        imprimirAlumnos();
       
        //Limpiar
        limpiarForm();
    }
}


function limpiarForm(){
    inputNombre.value="";
    inputGenero.value="";
    inputCelular.value="";
    inputCorreo.value="";
    inputCampus.value="";
    inputSemestre.value="";
    inputCalA.value="";
    inputCalB.value="";
    inputCalC.value="";

}

function imprimirAlumnos(){
        let row="";
        for(let i=0; i<estudiantes.length;i++){
            let estudiante = estudiantes[i];
            console.log(estudiante);
            a= Number(estudiante.califA);

            b= Number(estudiante.califB);
            
            c= Number(estudiante.califC);
            promedio= ((a+b+c)/3).toFixed(2); //*sacar el promedio a dos decimales*//



            row +=`
                <tr id= "${estudiante.id}">
                    <td> ${estudiante.nombre}</td>
                    <td> ${estudiante.genero}</td>
                    <td> ${estudiante.celular}</td>
                    <td> ${estudiante.correo}</td>
                    <td> ${estudiante.campus}</td>
                    <td> ${estudiante.semestre}</td>
                    <td> ${estudiante.califA}</td>
                    <td> ${estudiante.califB}</td>
                    <td> ${estudiante.califC}</td>
                    <td> ${promedio}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="borrarAlumno(${estudiante.id});">Borrar</button></td> 
                </tr>
            `;
        }
        document.getElementById("alumnosTabla").innerHTML=row;
    }

//crear funcion init
function init(){
    let alumno1 = new Estudiante("Oscar lopez","Hombre","6861421602","oscar.sanchez@gmail.com","Mexicali","3do","80","80","72");
        estudiantes.push(alumno1); 
        let alumno2 = new Estudiante("Albertoo Estrada Garcia","Hombre","6861421603","alberto.estradag@gmail.com","Tijuana","1do","100","90","74");
        estudiantes.push(alumno2);
        let alumno3 = new Estudiante("Omar Gonzalez Soto","Hombre","6861421604","omar.gonzalez@gmail.com","San Felipe","3ro","99","89","94");
        estudiantes.push(alumno3);

        imprimirAlumnos();
}
//ejectuar funcion init
window.onload= init;

function borrarAlumno(identificador){
    console.log("Borrando...")
    document.getElementById(identificador).remove();
    estudiantes.splice(identificador,1);

}
