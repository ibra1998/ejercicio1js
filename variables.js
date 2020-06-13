/*
Este programa es un ejercico para empezar a practicar con variables en javascript
*/
//Eventos para que se ejecuten las fases correspondientes
document.getElementById('Fase1').addEventListener('click', Fase1, false);
document.getElementById('Fase2').addEventListener('click', Fase2, false);
document.getElementById('Fase3').addEventListener('click', Fase3, false);
document.getElementById('Fase4').addEventListener('click', Fase4, false);

// Fase 1
function Fase1(){
    //Obtenemos las variables que necesitamos del formulario
    let name = document.getElementById('name').value;
    let surname1 = document.getElementById('surname1').value;
    let surname2 = document.getElementById('surname2').value;
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('day').value);
    let year = parseInt(document.getElementById('year').value);
    //Concatenamos e imprimimos como nos pide el ejercicio con espacios que separen nombre y apellidos
    document.getElementById('demo').innerHTML = name + " " + surname1 + " " + surname2 ;
    //Concatenamos e imprimimos como nos pide el ejercicio con barras que separen día, mes y año
    document.getElementById('demo').innerHTML += day + "/" + month + "/" + year;
}

// Fase 2
function Fase2(){
    /*
        CODIGO JAVA
        final int STARTYEAR = 1948;
		int betweenYears = 4;
		int myYear = 1998;
		int count =1+ (myYear -STARTYEAR)/betweenYears;
		System.out.println(count);
    */
   const STARTYEAR = 1948; //guardamos el año a partir del que empezamos a contar en una constante
   let betweenYears = 4;//Entre bisiesto y bisiesto hay 4 años
   let myYear = parseInt(document.getElementById('year').value); // Obtenemos el año de nacimiento del formulario
   let count = 1 + Math.floor((myYear - STARTYEAR) /betweenYears); //Calculamos cuántos años son bisiestos entre 1948 y myYear
   document.getElementById('demo').innerHTML = count; //Imprimimos el resultado en el documento html

}

// Fase 3
function Fase3(){
    // CODIGO JAVA
    /*
		final int STARTYEAR = 1948; //Empezamos a contar desde 1948
		int startYear;
		int myYear = 1998; //Mi año de nacimiento
		//Imprimimos todos los años bisiestos desde STARTYEAR hasta myYear, este no incluido
		for (startYear = STARTYEAR; startYear <= myYear ; startYear += 4 ) {
			System.out.println(startYear);
		}
		//Mi año de nacimiento es bisiesto?
		boolean bool = (myYear %400 ==0) || (myYear %4 == 0 && myYear%100 != 0); 
		String bisiestoSi = "Mi año de nacimiento es bisiesto";
		String bisiestoNo = "Mi año de nacimiento no es bisiesto";
		// Dependiendo de si myYear es o no bisiesto, imprimimos la cadena correspondiente
		if (bool) {
			System.out.println(bisiestoSi);
		}else {
			System.out.println(bisiestoNo);
		}
    
     */
   const STARTYEAR = 1948;
   let startYear;
   let myYear = parseInt(document.getElementById('year').value);
   //Imprimimos
   for (startYear = STARTYEAR; startYear <= myYear ; startYear += 4 ) {
    document.getElementById('demo').innerHTML += (startYear) + "<br>";
   }
   //Miramos si myYear es o no bisiesto
   let bool = (myYear %400 ==0) || (myYear % 4 == 0 && myYear % 100 != 0); 
   let bisiestoSi = "Mi año de nacimiento es bisiesto";
   let bisiestoNo = "Mi año de nacimiento no es bisiesto";

   //Imprimiremos una cadena o la otra dependiendo de si es o no bisiesto

   if (bool) {
        document.getElementById('demo').innerHTML += bisiestoSi;
    }else {
        document.getElementById('demo').innerHTML += bisiestoNo;
    }
}

// Fase 4
function Fase4(){
    /*
    Programa Java para inspirarme
        String nom = "Brahim";
		String cognom1 = "El";
		String cognom2 = "Habzi";
		int dia = 8;
		int mes = 4;
		int myYear = 1998;
		boolean bool = (myYear %400 ==0) || (myYear %4 == 0 && myYear%100 != 0);
		String textBisiesto;
		// Dependiendo de si myYear es o no bisiesto, imprimimos la cadena correspondiente
		if (bool) {
			textBisiesto = "El meu any de naixement és de traspàs";
		}else {
			textBisiesto = "El meu any de naixement no és de traspàs";
		}
		String nomComplet =  nom +  " " + cognom1 + " " + cognom2;
		String dataCompleta = dia + "/" + mes + "/" + myYear;
		System.out.println("El meu nom és "+ nomComplet);
		System.out.println("Vaig néixer el dia " + dataCompleta);
		System.out.println(textBisiesto);
    */
   //Guardo las variables que voy a necesitar
   let name = document.getElementById('name').value;
   let surname1 = document.getElementById('surname1').value;
   let surname2 = document.getElementById('surname2').value;
   let day = parseInt(document.getElementById('day').value);
   let month = parseInt(document.getElementById('day').value);
   let myYear = parseInt(document.getElementById('year').value);
   //Guardo en una variable true o false dependiendo de si mi año era o no bisiesto
   let bool = (myYear %400 ==0) || (myYear %4 == 0 && myYear%100 != 0);
   let textBisiesto; //Aquí almacenamos el texto que queremos imprimir
   if (bool) {
        textBisiesto = "El meu any de naixement és de traspàs";//Texto si es bisiesto
    }else {
        textBisiesto = "El meu any de naixement no és de traspàs"; // Texto si no es bisiesto
    }
    //Nombre completo y fecha completa
    let completeName = name + " " + surname1 + " " + surname2;
    let completeDate = day + "/" + month + "/" + myYear;
    //Imprimimos el texto que nos pide el ejercicio
    document.getElementById('demo').innerHTML = "El meu nom és " + completeName + "<br>";
    document.getElementById('demo').innerHTML += "Vaig néixer el dia " + completeDate + " <br>";
    document.getElementById('demo').innerHTML += textBisiesto;
}
