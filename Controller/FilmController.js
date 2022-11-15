import FilmModel from "../Model/FilmModel.js";
import FilmekView from "../View/FilmekView.js";

class FilmController{
    constructor(){
        const filmmodel = new FilmModel();
        filmmodel.adatbe("../adat.json", this.FilmAdatok);
       
        $(window).on("kolcsonoz", (event)=>{
            console.log("Kölcsönzés történt: Controller", event.detail)
            filmmodel.adatkivesz(event.detail)

        })
    }


   FilmAdatok(tomb) {
        const szuloElem =$("main");
        new FilmekView(tomb, szuloElem);
        console.log("controller?: ", tomb);
    }
}
export default FilmController;