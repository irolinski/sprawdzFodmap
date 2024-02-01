import './DietCard.css'

export default function DietCard() {

    return(

    <div className='card'>
        <header>
            <h3 className="title">Słodki ziemniak</h3>
            <span className="sub-title">Batat, Burak cukrowy, śmietnik, wiaderko do piaskownicy</span>
        </header>
        <main>
            <div className="fodmap-div">
                <div className="circle" style={{backgroundColor: "green"}}></div>
                <span>This product is considered to be <b>high</b> FODMAP, according to our sources</span>
            </div>
            <div className="max-fodmap-div">
                <div className="max-amount">28g</div> 
                <span>is the max allowed amount of this product</span>
            </div>
            <div id="histamine-div">
                <div className="circle" style={{backgroundColor: "orange"}}><span className="histamine-num" >1</span></div>
                <span>This product is excluded by <b>20%</b> of HIT diets</span>
            </div>
            <div id="notes-div">
                <h4>Notes:</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis similique iste aliquid laudantium hic quod deserunt fugiat, ipsa dolorum sed reprehenderit asperiores, vel consequatur labore. Nam vel quasi vero deserunt!
                </p>
            </div>
        </main>
    </div>

    )
}