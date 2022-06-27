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
import SendMail from "./component/SendMail/SendMail";
import {useSelector} from 'react-redux'
import {selectSendMessageIsOpen} from "./store/reducer/mailReducer";


const App = () => {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

    return (
        <BrowserRouter>
            <Header/>
            <div className="app__body">
                <Sidebar/>
                <Routes>
                    <Route path="/" exact element={<EmailList/>}/>
                    <Route path="mail" element={<Mail/>}/>

                </Routes>
            </div>
            {sendMessageIsOpen && (<SendMail/>)}
        </BrowserRouter>
    )
}

export default App