import './EmailList.css'
import Section from './Section'
import EmailRow from "./EmailRow";
import {useSelector} from "react-redux";
import {selectMails} from "../../store/reducer/mailReducer";

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const EmailList = () => {
    const mails = useSelector(selectMails)

    return (<div className="email_list">
            <div className="email_list__settings">
                <div className="email_list__settings__left">
                    <Checkbox/>
                    <IconButton><ArrowDropDownIcon/></IconButton>
                    <IconButton><RedoIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                </div>
                <div className="email_list__settings__right">
                    <IconButton><ChevronLeftIcon/></IconButton>
                    <IconButton><ChevronRightIcon/></IconButton>
                    <IconButton><KeyboardHideIcon/></IconButton>
                    <IconButton><SettingsIcon/></IconButton>
                </div>
            </div>
            <section className="email_list__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title="Promotion" color="green"/>
            </section>
            <section className="email_list__list">
                {mails.map(mail => (<EmailRow
                        title={mail.to}
                        description={mail.message}
                        time={mail.time}
                        subject={mail.subject}
                        id={mail.id}
                        key={mail.id}
                    />))}
            </section>
        </div>);
};

export default EmailList;
