do{
      var opcion = prompt("QUE DESEAS HACER? CIFRAR ESCRIBE 1 , DESCIFRAR ESCRIBE 2");
      var message = prompt('INGRESA UNA FRASE');
    if(opcion ==1){// si elige cifrar se mete a la funcion de cifrado
        cipher(message, 33);
    }else{//por default si elegi 2 se mete a la funcion de descifrado
         decipher(message, 33);
   }
}while((message) === " " || isNaN (message) === false  );//se crea bucle para no ingresar espacios y numeros si lo hace se regresa hasta q ingrese una frase valida


 function cipher(message){//crea la funcion que va a cifrar el mensaje

   var str ="";//en esta variable se guardara la palabra cifrada

   for (var i= 0; i<= message.length; i++){//empieza a iterar en la frase

         var ascciNumber = message.charCodeAt(i);//en esta variable se guardara el equivalente al numero ascci de la frase q va recorriendo

         var fraseMay= (ascciNumber -65 +33) %26 +65;//ahora que ya se tiene el equivalente en ascci de la frase se aplica la formula equivalente a las letras mayusculas
         var fraseMin= (ascciNumber -97 +33) %26 +97;//letras minusculas

        if (ascciNumber >= 65 && ascciNumber <=90){//condiconal si se ingresa mayusculas el 65 equivale A y 90 a Z
                  str += String.fromCharCode(fraseMay);//se agrega a la variable vacia y se transforma por medio de fromCharCode a letra normal.

        }else if (ascciNumber >= 97 && ascciNumber <= 122){//la a equivale al 97 y el 122 a la z
                    str += String.fromCharCode(fraseMin);//se agrega a la variable vacia y me lo pasa a letra normal.
        }//cierra else if

   }//cierra for

           document.write ('tu mensaje cifrado es : '  + str);

}//cierra function


   function decipher(message){//funcion para descifrar

    var str ="";

      for (var i= 0; i<= message.length; i++){
             var ascciNumber = message.charCodeAt(i);
             var fraseMay= (((ascciNumber +65 -33) %26)+65);
             var fraseMin= (((ascciNumber +85 -33) %26)+97);
          if (ascciNumber >= 65 && ascciNumber <=90){
                str += String.fromCharCode(fraseMay);
        }else if(ascciNumber >= 97 && ascciNumber <=122){
                   str += String.fromCharCode(fraseMin);
       }//cierra else if

    }//cierra for

          document.write ('tu mensaje descifrado es : ' + str);

 };//cierra funcion
