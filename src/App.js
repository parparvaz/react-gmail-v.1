import './App.css'
import Header from "./Layout/Header";
import Sidebar from "./Layout/SIdebar";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Mail from "./component/Mail/Mail";
import EmailList from "./component/EmailList/EmailList";


const App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <div className="app__body">
                <Sidebar/>
                <Routes>
                    <Route path="/" exact element={<EmailList/>}/>
                    <Route path="mail" element={<Mail/>} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App