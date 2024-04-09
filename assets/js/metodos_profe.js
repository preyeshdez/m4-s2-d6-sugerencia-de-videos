// playMultimedia(url) {
//     console.log(url)
//     if (url) {
//         cargarVideo.cargar(this.getId(), url);
//     } else {
//         cargarVideo.cargar(this.getId(), this.getUrl());
//     }
// }
// setInicio(segundos = 0) {
//     let nuevaUrl;
//     if (this.getUrl().includes("autoplay=1")) {
//         nuevaUrl = this.getUrl() + `&start=${segundos}`
//     } else {
//         nuevaUrl = this.getUrl() + `start=${segundos}`
//     }

//     this.setUrl(nuevaUrl);
// }
// autoPlay() {
//     let nuevaUrl;
//     if (this.getUrl().includes("start")) {
//         nuevaUrl = this.getUrl() + "&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1"
//     } else {
//         nuevaUrl = this.getUrl() + "rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1"
//     }
//     this.setUrl(nuevaUrl);
// }