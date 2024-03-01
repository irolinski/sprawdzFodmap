

import { useState } from 'react'
import './TagsInput.css'

type TagsProps = {
    placeholder: string
}


export default function TagsInput({ placeholder }: TagsProps){
    
    const[tags, setTags] = useState<string[]>([])


    const handleTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return 
        const element = e.target as HTMLInputElement
        if (element.value === '') return
        setTags([...tags, element.value])
        element.value = ''
    }

    const removeTag = (index: Number) => { 
        setTags(tags.filter((el, i) => i !== index ))
    }
    

    return (
        <div className="tags-input-container">
            { tags.map ((tag, i) => ( 
                <div className="tag-item" key={i}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(i)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleTags} type="text" className="tags-input" placeholder={placeholder} />
        </div>
    )
}