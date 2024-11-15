/*
A partir del siguiente JSON con los metadatos de los emojis, debes permitir que el usuario cargue la imagen de uno de ellos por código, dale como opción 4.

https://openmoji.org/data/openmoji.json (URL API para el JSON)

https://openmoji.org/data/color/svg/%7Bemoji_code%7D.svg (URL API para cada emoji)

Ejemplo:
https://openmoji.org/data/color/svg/1F600.svg (Petición del emoji con código 1F600)
*/
function mostrarEmoji() {
    // Sacamos el valor selecionado en el menu desplegable
    let select = document.getElementById('select-emoji');
    let selectedOption = select.options[select.selectedIndex].value;
    console.log(selectedOption);
    
    const url = 'https://openmoji.org/data/color/svg/';
    let emoji = `${url}${selectedOption}.svg`;
    console.log(emoji);


    let img = document.getElementById('emoji');
    // Si ya existe una imagen la remueve
    if (img) {
        img.remove();
    }

    // Si no existe crea 
    let contenedor = document.getElementsByClassName('emoji')[0];
    img = document.createElement('img');
    img.id = 'emoji';
    img.src = emoji;
    img.height = 500;
    img.width = 500;
    contenedor.appendChild(img);
}