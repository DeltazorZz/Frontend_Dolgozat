import FilmView from "./FilmView.js";

class FilmekView{
    constructor(tomb, szuloElem) {
        console.log("filmview", tomb)
        szuloElem.html(`<h2>Legjobb ajánlat</h2>
        <div id="tarolo"></div>`)
        this.divelem = szuloElem.children("div:last-child");
       
        
        tomb.forEach(filmek => {
            const filmeim = new FilmView(filmek, this.divelem);
        });
    }
}
export default FilmekView;