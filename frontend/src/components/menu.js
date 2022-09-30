import {useEffect,useState} from 'react'
import Header from './header.js'
import DeckList from './deckList.js'
const Menu = ( {changeScreen}) => {
    const [deckType, setDeckType] = useState(0)

    return(
        <div>
            <Header setDeckType = {setDeckType}/>
            <DeckList deckType = {deckType} changeScreen = {changeScreen}/>
        </div>
        
    );

}

export default Menu