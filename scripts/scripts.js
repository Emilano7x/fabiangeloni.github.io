  function probar(i) {
      const html = document.getElementById("html"+ i ).value;
      const css = document.getElementById("css"+ i ).value;

      const contenido =
        "<style>" + css + "</style>\n" +
        html;

      document.getElementById('resultado'+i).srcdoc = contenido;

    }


//----------------------------------------------------------------------------------
// Función para crear el Nivel 2 dinámicamente
function crearNivel(numero,unEnunciado, unaAyudita) {                                   //-----dato q cambia entre niveles, el numero de este nombre debe ser el mismo en los id marcados abajo
  // Crear el contenedor principal
  const wrap = document.createElement('div');
  wrap.className = 'wrap';

  // Título
  const h2 = document.createElement('h2');
  h2.textContent = 'NIVEL '+numero;
  wrap.appendChild(h2);

  wrap.appendChild(document.createElement('br'));

  // Primer párrafo
  const p1 = document.createElement('p');
  p1.id = 'parrafo'+numero;                                 //-----dato q cambia entre niveles     
  p1.textContent= unEnunciado;                                  //-----dato q cambia entre niveles
  p1.className = 'parrafo';
  wrap.appendChild(p1);

  wrap.appendChild(document.createElement('br'));

  // Segundo párrafo
  const p2 = document.createElement('p');
  p2.className = 'txt_presionaBoton';
  wrap.appendChild(p2);

  // Span amarillo
  const span = document.createElement('span');
  span.className = 'amarillo';
  span.title = unaAyudita;                                           //-----dato q cambia entre niveles
  span.style.cursor = 'progress';
  span.textContent = '----AYUDA?----';
  wrap.appendChild(span);

  wrap.appendChild(document.createElement('br'));
  wrap.appendChild(document.createElement('br'));

  // Contenedor de editores
  const contenedor1 = document.createElement('div');
  contenedor1.className = 'contenedor';

  // Editor HTML
  const editorHtml = document.createElement('div');
  editorHtml.className = 'editor';
  const labelHtml = document.createElement('label');
  labelHtml.textContent = 'HTML:';
  editorHtml.appendChild(labelHtml);

  const codeInputHtml = document.createElement('code-input');
  codeInputHtml.id = 'html'+numero;                                                 //-----dato q cambia entre niveles
 // codeInputHtml.class="campoDato";
  codeInputHtml.setAttribute('class',"campoDato");
  codeInputHtml.setAttribute('placeholder', 'Escribí tu DIV en HTML aquí...');
  codeInputHtml.setAttribute('template', 'syntax-highlighted');
  codeInputHtml.setAttribute('lang', 'html');
  editorHtml.appendChild(codeInputHtml);

  contenedor1.appendChild(editorHtml);
  contenedor1.appendChild(document.createElement('br'));
  contenedor1.appendChild(document.createElement('br'));

  // Editor CSS
  const editorCss = document.createElement('div');
  editorCss.className = 'editor';
  const labelCss = document.createElement('label');
  labelCss.textContent = 'CSS:';
  editorCss.appendChild(labelCss);

  const codeInputCss = document.createElement('code-input');
  codeInputCss.id = 'css'+numero;                                                     //-----dato q cambia entre niveles   
 // codeInputCss.className="campoDato";
  codeInputCss.setAttribute('class',"campoDato");
  codeInputCss.setAttribute('placeholder', 'Escribí tu CSS aquí...');
  codeInputCss.setAttribute('template', 'syntax-highlighted');
  codeInputCss.setAttribute('lang', 'css');
  editorCss.appendChild(codeInputCss);

  contenedor1.appendChild(editorCss);

  // Botón Probar
  const boton = document.createElement('button');
  boton.textContent = 'Probar';
  boton.onclick = function() { probar(numero); };                                 //-----dato q cambia entre niveles
  contenedor1.appendChild(boton);

  wrap.appendChild(contenedor1);

  // Contenedor de resultado
  const contenedor2 = document.createElement('div');                       
  contenedor2.className = 'contenedor';                                     

  const labelResultado = document.createElement('label');
  labelResultado.textContent = 'Resultado:';
  contenedor2.appendChild(labelResultado);

  const iframe = document.createElement('iframe');
  iframe.id = 'resultado'+numero;                                                 //-----dato q cambia entre niveles
  contenedor2.appendChild(iframe);

  wrap.appendChild(contenedor2);

  // Finalmente, agregar al body (o donde quieras)
  document.body.appendChild(wrap);
}



//Carga de los textos ============================================================================================================================================= 


// Llamar a la función para crear todo el contenido dinámicamente



 document.querySelectorAll('.txt_presionaBoton').forEach(function(elemento) {
  elemento.textContent = 'PRESIONA EL BOTON "PROBAR" AL FINALIZAR Y TOMA FOTO O CAPTURA DEL RESULTADO' ;
});

/* el nivel 1 es el unico no creado con DOM */
document.getElementById('idAyuditaSpam1').title=ayuditaSpam(1);
document.getElementById('parrafo1').textContent = enunciado(1);



for (let index = 2; index <=2; index++) {   //son 6
    crearNivel(index, enunciado(index), ayuditaSpam(index)); 
}




/*  codeInputHtml.id = 'html'+numero; 
    codeInputCss.id = 'css'+numero;  
    iframe.id = 'resultado'+numero;
*/