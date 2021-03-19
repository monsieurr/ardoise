import React, { useState } from 'react'

export default function Test() {
    const [list, setList] = useState(
        [
            {quote: 'tant va la cruche à l\'eau', id: 1},
            {quote: 'qui dort dine', id: 2},
            {quote: 'qui vole un oeuf vole un boeuf', id: 3}
        ])

    const [couleur, setCouleur] = useState(
        ['rouge', 'bleu', 'jaune', 'vert', 'orange', 'marron']
    )

    const getCouleur = (e) => {
        setCouleur(e.target.value)
    }

    const getSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <ul>

            </ul>

            <form>
                <label>COULEUR</label><input type="text" name="couleur" onChange={getCouleur}></input>
                <p>{couleur}</p>
                <input type="submit" value="Envoyer" />
            </form>    
        </div>
    )
}

