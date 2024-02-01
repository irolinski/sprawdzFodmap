// import DietCard from "./DietCard"

type dataType = {
    data: string[]
}

export default function Results ({ data }: dataType) {
    return(
        <div id="results">
        <ul>
            {data.map((i: string) => (
                <li>{i}</li>
            ))}
        </ul> 




    </div>
    )
}