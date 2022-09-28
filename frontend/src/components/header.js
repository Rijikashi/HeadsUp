
import Button from 'react-bootstrap/Button'

const Header = ( {setDeckType}) => {
    //const handleClickClassic = () => setDeckType(0)
    return (
        <div>
            <Button onClick = {()=>setDeckType(0)}> Classic</Button>
            <Button onClick = {()=>setDeckType(1)}> Custom</Button>
            <Button onClick = {()=>setDeckType(2)}> Workshop</Button>
        </div>
    );
}

export default Header