import './EmailRow.css'

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {useNavigate} from 'react-router-dom';
import {setMailId} from "../../store/reducer/mailReducer";
import {useDispatch} from "react-redux";

const EmailRow = ({id, title, subject, description, time}) => {
    const navigator = useNavigate()
    const dispatch = useDispatch()
    return (
        <div onClick={() => {
            dispatch(setMailId({id}))
            navigator('mail')
        }} className="email_row">
            <div className="email_row__options">
                <Checkbox/>
                <IconButton><StarBorderIcon/></IconButton>
                <IconButton><LabelImportantIcon/></IconButton>
            </div>
            <h3 className="email_row__title">
                {title}
            </h3>
            <div className="email_row__message">
                <h4>{subject}<span className="email_row__description"> - {description}</span></h4>

            </div>
            <p className="email_row__time">{time}</p>
        </div>
    );
};

export default EmailRow;
