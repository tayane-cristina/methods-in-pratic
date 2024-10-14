import React from 'react';
import { useState } from 'react';

const DeleteItems = () => {

    const [items, setItems] = useState(["item 1", "item 2", "item 3", "item 4"])

    const removeByIndex = (index) => {
        setItems(items.filter((item, i) => i !== index))
    }

return(
    <div>
        <h2>3 Abordagens para deletar itens.</h2>

        {/*in the current example, will be remove to the list the itens by the index*/}
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => removeByIndex(index)}>Remover</button>
                </li>
            ))}
        </ul>

        <ul>

        </ul>

    </div>

)
}
export default DeleteItems;