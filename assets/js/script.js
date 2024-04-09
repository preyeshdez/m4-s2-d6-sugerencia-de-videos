class Multimedia {
    #url
    constructor(url){
        this.#url = url+"?";
    }

    getUrl(){
        return this.#url;
    }

    setUrl(nuevaUrl){
        this.#url = nuevaUrl;
        return this.#url;
    }

    setInicio(){
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

class Reproductor extends Multimedia{
    #id;
    constructor(url, id){
        super(url);
        this.#id = id;
    }

    getId(){
        return this.#id;
    }

    playMultimedia(){
        cargarVideo.cargarURL(this.getId(), this.getUrl());
    }

//Estuve probando los parametros en las URL y al parecer luego del caracter "?"
// el primer parametro puede llevar el caracter "&" y funciona correctamente,
// por lo que no inclui validaciones para verificar si existen ya otros parametros 
// antes de ingresar los nuevos para establecer el inicio o el autiplay

    setInicio(inicio){
        let nuevaUrl = this.getUrl()+`&start=${inicio}`;
        this.setUrl(nuevaUrl);
    }

    setAutoplay(){
        let nuevaUrl = this.getUrl()+`&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1`;
        this.setUrl(nuevaUrl);
    }
}

var cargarVideo = (function () {
    let cargarVideo = function (id, url) {
        document.getElementById(id).setAttribute("src", url);
    };
    return {
        cargarURL: function (id, url) {
            cargarVideo(id, url);
        }
    }
})()

let musica = new Reproductor("https://www.youtube.com/embed/hGUYLizormM", "musica");
musica.setAutoplay();
musica.playMultimedia();

let pelicula = new Reproductor("https://www.youtube.com/embed/kZIiSxUhAuM", "peliculas")
pelicula.setInicio(132);
pelicula.playMultimedia();

let serie = new Reproductor("https://www.youtube.com/embed/cDUKA6Tqiw8", "series")
serie.playMultimedia();
