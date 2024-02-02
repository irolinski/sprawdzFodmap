import './RecipeCard.css'

export default function RecipeCard() {

    return(
    <div className='recipe-card'>


        <img className="recipe-image" src="https://na-talerzu.pl/wp-content/uploads/2021/07/Kurczak-z-cukinia-i-papryka-5338.jpg" />

        <header>
            <h1 className="title">Nazwa</h1> 
            <div id="recipe-info-div">
                <div className="recipe-info-1">
                    <span>Czas: 60min</span>
                    <span className="portion">
                        Na porcję: 2 talerze
                    </span>
                </div>
                <div className="recipe-info-2">
                    <span className="tools">
                        Narzędzia: Piekarnik, ryzowar
                    </span>
                </div>
            </div>
        </header>
        <main>
            <div id="ingredients-div">
                

                <span>Składniki: <br/>
                    Masło 200g,
                    Rukola 1kg,
                    Cukier 5 szczypt i pół łyzki
                </span>
            </div>

            <div id="description-div">
                Opis: <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur aut beatae alias, culpa voluptates, officiis reprehenderit minus adipisci veniam ullam eaque minima nemo nostrum nam. Corrupti temporibus explicabo facere consequatur. Lorem, ipsum dolor. Lorem ipsum, dolor sit amet.
            </div>
        </main>

        <footer>
                <div id="rating-div">
                    Ocena: *****
                </div>
                <div id="date-div">
                    Data dodania: 2015-22-02
                </div>
        </footer>

    </div>
    )

}



