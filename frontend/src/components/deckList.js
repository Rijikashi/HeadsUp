import {useEffect,useState} from 'react'
import Deck from './deck.js'
//const url = process.env.REACT_APP_DEV ? "http://127.0.0.1:5000" : "";
const url = "http://127.0.0.1:5000"
const DeckList = ( {deckType, changeScreen}) => {
    const [decks,setDecks] = useState([])
    const [completedDeckRequest,setCompletedDeckRequest] = useState(false)
    const addObjectToArray = obj => {
        setDecks(current => [...current,obj])
    }
    useEffect( () => {
        const findDecks = async() => {
            setDecks([])
            const res = await fetch(url + "/getDecks/" + deckType)
            const data = await res.json()
            data.map(datum => {
                addObjectToArray(datum)
            })
            console.log(decks)
            setCompletedDeckRequest(true)
        }
        findDecks()
    },[deckType])

    return (
        <div>
            {
                decks.map(({ name, description}) => (<Deck name = {name} description = {description} changeScreen = {changeScreen}/> ))
            }
        </div>
    );
}
export default DeckList