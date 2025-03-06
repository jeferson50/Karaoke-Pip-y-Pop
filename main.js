// Conectar html con JS
const songform = document.getElementById('song_form');
const playlist = document.getElementById('playlist');
 
 

// Función para agregar canciones
function addsong(songname, songartist, songurl) {
    const listitem = document.createElement('li');
    listitem.innerHTML = `
        <strong>${songname}</strong> - ${songartist}
        <a href="${songurl}">Play song</a>
        <button class="delete-btn">Delete Song</button>
    `;
    play_list.appendChild(listitem); 
}

 
// Obtener valores del formulario
 
 
songform.addEventListener('submit', (e) =>{
    e.preventDefault();
 
    const songname = document.getElementById('song_name').value;
    const songartist = document.getElementById('song_artist').value;
    const songurl = document.getElementById('song_url').value;
 
 
    addsong(songname, songartist, songurl)
   
    songform.reset();
})
