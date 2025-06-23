function enunciado(n){
   var str;
    switch (n){
        case 1:
            str = 'Crea un div que se llame "contenedor" que mida 200 de ancho x 300 de alto, fondo gris, con margen de 10px y padding de 15px, \n'+
                  'que adentro diga "Esto es un DIV"';
         break;
         case 2:
            str="Al DIV creado en NIVEL 1 ponemos bordes redondeados de 15 pixeles, una familia de fuentes que sea sans-serif,\n"+ 
                "un tamaño de fuente de 14 pixeles, y texto alineado a la izquierda. \n"+
                "Copia y pega los códigos HTML y CSS del NIVEL 1 para no tener que volver a escribirlo, y luego ponemos estos agregados.";
            break;
        case 3:
            str='Al DIV creado en NIVEL 2 le agregamos un titulo h1 color rojo y lo nombramos como "Título". Este título debe estar centrado.\n'+
                 'Copia y pega los códigos HTML y CSS del NIVEL 2 para no tener que volver a escribirlo, y luego ponemos estos agregados.';
            break;
        case 4:
            str="Al DIV creado en NIVEL 3 vamos a copiarlo y pegarlo con el objetivo de duplicarlo\n"+
                "Le agregamos el atributo float:left; y presionamos probar, luego borramos el atributo y probamos con y sin\n"+
                "para entender el atributo de float (flotar a la izquierda)";
            break;
        case 5:
            str='Al DIV creado en NIVEL 4 y con el atributo float, lo encerramos en un nuevo div llamado "padre",\n'+
                'le ponemos un ancho de 500 pixeles, margen de 15 pixeles, padding 20 pixeles, borde de 1px solido gris \n'+
                'A esos atributos CSS le agregamos este: overflow:auto;';
            break;
        case 6:
            str="Copia los códigos de NIVEL 5 e intenta agregar elementos: imagenes, botones, texto, video de youtube, etc\n" +
                "Cambia los colores, textos, agrega sombras, etc \n"+
                 "Podés apoyarte con google o ChatGPT para preguntarle sobre los cambios que queiras hacer";
            break;
         default:
            str="sin enunciado disponible";  
    }
    return str;
}
/* para que funcione \n se debe agregar el estilo  .parrafo{ white-space: pre-line}  */



function ayuditaSpam(n){
var str;
switch (n) {
    case 1:
        str= "class contenedor, width 200px, height 300px background-color, margin, padding";
        break;
    case 2:
        str="border-radius:-----; font-family:-----; font-size:------; text-align:-----;";
        break;
    case 3:
        str="h1{ color:red; }";
    break;
  default:
    str="sin ayuda disponible";
}
    return str;
}