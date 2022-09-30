import logo from './logo.svg';
import './App.css';
import Menu from './components/menu.js'
import Game from './components/game.js'
import {useEffect,useState} from 'react'
function App() {
    const [screen,setScreen] = useState(true)

    const changeScreen = () => {
        if(screen == true)
            setScreen(false)
        else
            setScreen(true)
    }
    return (
        <div className="App">
            {
                screen ? 
                (
                <Menu changeScreen = {changeScreen} />
                ) 
                : 
                (
                <Game  changeScreen = {changeScreen} />
                )
            }
        </div>
    );
}

export default App;
