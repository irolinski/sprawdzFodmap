import './DietCard.css'

type productProp = {
    name: string,
    sub_title: string,
    fodmap: string,
    max_use: string,
    histamine: string,
    notes: string
}

export default function DietCard({ name, sub_title, fodmap, max_use, histamine, notes }: productProp) {

console.log(sub_title);

    return(

    <div className='card'>
        <header>
            <h3 className="title">{name}</h3>
            <span className="sub-title">{sub_title}</span>
        </header>
        <main>
            <div className="fodmap-div">
                <div className={`circle ${fodmap}-fMap`} ></div>
                <span>Produkt <b>{fodmap}</b> FODMAP </span>
                { max_use && <span>Maksymalna ilość: {max_use} </span> }
            </div>
            {histamine && (
            <div id="histamine-div">
                <div className={`circle ${histamine}-hist`} ></div>
                <span>Ten produkt jest zakazany w

                    { (histamine === 'low') && <span> <b>niektórych (&lt;20%)</b> dietach  </span> }
                    { (histamine === 'mid') && <span> <b>wielu (20-60%)</b> dietach  </span> }
                    { (histamine === 'high') && <span> <b>większości (&gt;60%)</b> diet  </span>}
                    
                    na nietolerancję histaminy
                </span>
            </div>
            )}
            {notes && (
            <div id="notes-div">
                <h4>Dodatkowe informacje:</h4>
                <p>
                    {notes}
                </p>
            </div>
            )}
        </main>
    </div>

    )
}