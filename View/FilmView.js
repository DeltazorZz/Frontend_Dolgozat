class FilmView{
    #elem;
    constructor(elem, szuloElem){
        this.#elem=elem;
        szuloElem.append(`<div class="content">
        <h2>${elem.cim}</h2>
        <p>Kiadás éve: ${elem.kiadas}</p>
        <p>Rendezte: ${elem.rendezo}</p>
        <p>Elérhető: ${elem.keszleten}</p>
        <button id="kolcs${elem.id}">Kölcsönzés</button></td>
        </div>`)

        this.sorElem = szuloElem.children("div:last-child");
        //console.log(this.sorElem);
     
        this.kolcsonElem =$(`#kolcs${elem.id}`);

        this.kolcsonElem.on("click", ()=>{
            console.log("Kölcsönzés történt: View")
            this.#elem.keszleten =  $(elem.keszleten-1)
             this.KattintasTrigger("kolcsonoz");
        });
    }
    KattintasTrigger(esemenyneve){
        const esemeny = new CustomEvent(esemenyneve, {detail:this.#elem})
        window.dispatchEvent(esemeny);
    }


}
export default FilmView;