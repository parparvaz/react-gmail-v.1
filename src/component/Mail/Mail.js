import './Mail.css'
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux'
import {useEffect} from 'react'

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {getMailById} from "../../store/reducer/mailReducer";

const Mail = () => {
    const navigator = useNavigate()
    const mail = useSelector(getMailById)
    if (typeof mail === 'undefined') return navigator(-1,{
        replace: true
    })

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__tools__left">
                    <IconButton onClick={() => navigator(-1)}><ArrowBackIcon/></IconButton>
                    <IconButton><MoveToInboxIcon/></IconButton>
                    <IconButton><ErrorIcon/></IconButton>
                    <IconButton><DeleteIcon/></IconButton>
                    <IconButton><EmailIcon/></IconButton>
                    <IconButton><WatchLaterIcon/></IconButton>
                    <IconButton><CheckCircleIcon/></IconButton>
                    <IconButton><LabelImportantIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                </div>
                <div className="mail__tools__right">
                    <IconButton><UnfoldMoreIcon/></IconButton>
                    <IconButton><PrintIcon/></IconButton>
                    <IconButton><ExitToAppIcon/></IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__body__header">
                    <h2>{mail.to}</h2>
                    <LabelImportantIcon className="mail__important"/>
                    <p>{mail.subject}</p>
                    <p>{mail.time}</p>
                </div>
                <div className="mail__body__message">
                    <p>{mail.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Mail;
