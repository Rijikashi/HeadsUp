import {useEffect,useState} from 'react'

//const url = process.env.REACT_APP_DEV ? "http://127.0.0.1:5000" : "";
const url = "http://127.0.0.1:5000"
const DeckList = ( {deckType}) => {
    const [decks,setDecks] = useState([])
    const [completedDeckRequest,setCompletedDeckRequest] = useState(false)
    useEffect( () => {
        const findDecks = async() => {
            const res = await fetch(url + "/getDecks/" + deckType)
            const data = await res.json()
            setDecks(data)
            setCompletedDeckRequest(true)
            console.log(data)
        }
        findDecks()
    },[deckType])

    return (
        <div>
            {/* {completedDeckRequest ? (
            <div>
                {
                    decks.map(deck => {
                        <li> {deck["name"]} and {deck["phrases"]} </li>
                    })
                }
            </div>
            ) : (<></>)} */}

            {/* {decks.map(deck => {
                        <li> {deck["name"]} and {deck["phrases"]} </li>
            })} */}
        </div>
    );
}
export default DeckList