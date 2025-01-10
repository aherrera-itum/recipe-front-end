import React, { useState } from 'react';
import '../App.css';

const RecipeForm = ({ onSave }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [procedure, setProcedure] = useState('');

    const addIngredient = (event) => {
        if (event.key === 'Enter' && event.target.value) {
            setIngredients([...ingredients, event.target.value]);
            event.target.value = ''
            event.target.focus()
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ name, ingredients, procedure });
        setName('')
        setIngredients([])
        setProcedure('')
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label>Nombre de la Receta:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Ingredientes:</label>
                <input type="text" onKeyDown={addIngredient} placeholder="Adicione el ingrediente y presione ENTER" />
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div>
                <label>Procedimiento:</label>
                <textarea value={procedure} onChange={(e) => setProcedure(e.target.value)} required></textarea>
            </div>
            <button type="submit">Grabar Receta</button>
        </form>
    );
};

export default RecipeForm;
