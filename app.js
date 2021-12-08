/*👉 
{ 
  ===  Tecnica N° 1 ===
  //Usando selectores dentro de un elemento
  
  const cuestionario = document.querySelectorAll(".preguntas");
  // console.log(cuestionario);
  cuestionario.forEach(function (pregunta) { // elementos (article.preguntas)
    const boton = pregunta.querySelector(".preguntas-boton"); // elementos (article.preguntas-boton)
    console.log(pregunta);
    //  console.log(boton);
    boton.addEventListener("click", function () {
      // console.log(cuestionario);
      cuestionario.forEach(function (item) {
         console.log(item) // elementos (article.preguntas)
        if (item === pregunta) {
          pregunta.classList.toggle("mostrar-texto")
        }
        else {

          item.classList.remove("mostrar-texto")
        }
      });
    })


  });
}👈*/


{// ===  Tecnica N° 2 ===
  // Navegando por el DOM

  const botones = document.querySelectorAll(".preguntas-boton")
  //  console.log(botones)
  botones.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
      /*  const evento=event;
        const eventoX=event.path[5];
        const pregunta0= e.currentTarget;
        const pregunta1= e.currentTarget.parentElement;
        const pregunta2= e.currentTarget.parentElement.parentElement;
        const pregunta3= e.currentTarget.parentElement.parentElement.parentElement;
        console.log(evento);
        console.log(eventoX);
        console.log(pregunta0);
        console.log(pregunta1);
        console.log(pregunta2);
        console.log(pregunta3); */
      const pregunta = e.currentTarget.parentElement.parentElement;
      console.log(pregunta);
      pregunta.classList.toggle("mostrar-texto"); //toggle() pone la clase [mostrar-texto] y la quita.
    });
  });
}

