import {useEffect,useState} from 'react'
import Header from './header.js'
import DeckList from './deckList.js'
const Menu = () => {
    const [deckType, setDeckType] = useState(0)

    return(
        <div>
            <Header setDeckType = {setDeckType}/>
            <DeckList deckType = {deckType}/>
        </div>
        
    );

}

export default Menu