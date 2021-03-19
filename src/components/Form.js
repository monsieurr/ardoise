import React, { useState } from 'react'

// Form
/**
 * STEPS
 *  Creating a simple form
 *  Allow to create new inputs
 *  Allow to remove inputs (as long as inputs >= 2)
 *  Store all the inputs in a text list
 *  
 *  Manage random choice selection in the list
 */

export default function Form(props) {
    const [title, setTitle] = useState("")

    const blankChoice = { name : ''};
    const [choice, setChoice] = useState([
        {...blankChoice},
    ]);

    const addChoice = () => {
        setChoice([...choice, {...blankChoice}])
    }

    const removeChoice = idx => {
        alert('REMOVE CHOICE CLICKED')
        
        // assigning the list to temp variable
        const temp = [choice];

        // removing the element using splice
        temp.splice(idx, 1);

        // updating the list
        setChoice(temp);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`
            Envoi de la question ${title}
            Envoi du choix ${choice}
        `)
    }

    return (
        <form>
            <label>QUE CHOISIR ?</label>
            <input 
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            {
                choice.map((val, idx) => {
                    const nameId = `name-$(idx)`;
                    return (
                        <div key={`choice-$(idx)`}>
                            <label htmlFor={nameId}>{`CHOIX N°${idx + 1}`}</label>
                            <input
                                type="text"
                                name={nameId}
                                data-idx={idx}
                                id={nameId}
                                className="choiceForm"
                            />
                        </div>
                    ) 
                })
            }

            <input type="button" value="AJOUTER UN CHOIX" onClick={addChoice} className="addChoice" />
            <input type="button" value="RETIRER UN CHOIX" onClick={removeChoice()} className="removeChoice" />
            <input type="submit" value="ENVOYER" />
        </form>
    )
}