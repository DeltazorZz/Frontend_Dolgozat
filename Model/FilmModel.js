class FilmModel {
  #filmektomb = [];

  constructor() {
    console.log("Model");
  }

  adatbe(vegpont, myCallBack) {
    console.log("adatbe 1");
    fetch(vegpont, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.#filmektomb = data.filmek;
        console.log("adatbe3");
        myCallBack(this.#filmektomb);
        console.log("adatbe4");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  adatkivesz(adat,myCallBack) {
    this.#filmektomb.forEach(film=>{
      if(adat== film){
        film.keszleten--
      }
      myCallBack(this.#filmektomb)
    })
  }
}
export default FilmModel;
