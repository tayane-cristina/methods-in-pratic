import React from 'react';
import { useState } from 'react';

const DeleteItems = () => {

    const [items, setItems] = useState(["item 1", "item 2", "item 3", "item 4"]);
    const [values, setValues] = useState(["Valor 1", "Valor 2", "Valor 3", "Valor 4"]);

    const removeByIndex = (index) => {
        setItems(items.filter((item, i) => i !== index))
    }

    const removeByValue = (value) => {
        setValues(values.filter((item) => item !== value))
    }

    const cleanList = () => {
        setValues([])
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
            {values.map((value, index) => (
                <li key={index}>
                    {value}
                    <button onClick={() => removeByValue(value)}>Remove</button>
                </li>
            ))}
        </ul>

        <button onClick={() => cleanList()}>Clean</button>
    </div>

)
}
export default DeleteItems;