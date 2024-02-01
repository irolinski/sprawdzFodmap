import { useEffect, useState } from "react";

export default function Demo () {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('/api/items')
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);
    
    return (
        <main>
        <h1>Example webshop!!!!!! Works?</h1>

        </main>
    );
    }