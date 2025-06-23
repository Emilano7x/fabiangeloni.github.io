/* incluire en este fichero el campo para email del usuario y el boton para mandar el resultado por correo
 */

/* const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
document.head.appendChild(script);

 */

  emailjs.init({
        publicKey: "vieyZ1f8iAvIqu7fP",
      });


// Crear el input de texto

// Crear el label
const labelMail = document.createElement('label');
labelMail.textContent = 'E-mail: ';
labelMail.htmlFor = 'inputMail';

// Crear el input de texto
const unInputMail = document.createElement('input');
unInputMail.type = 'text';
unInputMail.id = 'inputMail';
unInputMail.placeholder = 'Escribe tu e-Mail...';


const labelNombre = document.createElement('label');
labelNombre.textContent = 'Nombre: ';
labelNombre.htmlFor = 'inputNombre';

// Crear el input de texto
const unInputNombre = document.createElement('input');
unInputNombre.type = 'text';
unInputNombre.id = 'inputNombre';
unInputNombre.placeholder = 'Escribe tu nombre...';


// Crear el botón
const buttonMail = document.createElement('button');

buttonMail.textContent = 'Enviar Por Mail';
buttonMail.id="enviar_por_mail";

const buttonJSON = document.createElement('button');
buttonJSON.textContent = 'Guardar  Como JSON';
buttonJSON.id="descargarJSON";

  const contenedor = document.createElement('div');
  contenedor.className = 'contenedor footer amarillo'; //multiclase para compartir varios estilos de otras clases



// Agregar los elementos al body (puedes agregarlos a otro contenedor si quieres)
contenedor.appendChild(labelMail);
contenedor.appendChild(unInputMail);

contenedor.appendChild(labelNombre);
contenedor.appendChild(unInputNombre);

document.body.appendChild(contenedor);
document.body.appendChild(buttonMail);
document.body.appendChild(buttonJSON);




// Función para escapar caracteres especiales en HTML 
/* Por qué escapar el HTML? Si no lo haces, el correo interpretará las etiquetas y no mostrará el código, sino el resultado visual de ese HTML. */
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}




//------------------------

function datosEnJson(){
    // guardar los datos en json
let niveles = {};
let nivel = 1;
let cont = 1;
let htmlTemp = "";
let cssTemp = "";

document.querySelectorAll('.campoDato').forEach(function(elemento) {
  if (cont % 2 !== 0) {
    // Impar: HTML
    htmlTemp = elemento.value;
  } else {
    // Par: CSS
    cssTemp = elemento.value;
    // Guardar el par HTML+CSS en el objeto
    niveles["nivel:" + nivel] = {
      html: htmlTemp,
      css: cssTemp
    };
    nivel++;
  }
  cont++;
});

// Si quieres el resultado en JSON:
const nivelesJSON = JSON.stringify(niveles, null, 2);
console.log(nivelesJSON);
return nivelesJSON;
}


buttonJSON.onclick = function() {

document.getElementById('descargarJSON').onclick = function() {
/*   const jsonString = JSON.stringify(niveles, null, 2); */
  const blob = new Blob([ datosEnJson() ], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "niveles.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

};
//----------------------------

// Ejemplo: acción al hacer clic
buttonMail.onclick = function() {


 var templateParams = {
  title:unInputNombre.value,
/*   name: unInputNombre.value,
 */ 
  codigo: datosEnJson() ,
  email:unInputMail.value
};


  emailjs.send('service_cf2cihg', 'template_4mh8b9t', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert('SUCCESS! '+ response.status +" , "+ response.text);
  },
  (error) => {
    console.log('FAILED...', error);
    alert('FAILED...', error);
  },  
);
}

