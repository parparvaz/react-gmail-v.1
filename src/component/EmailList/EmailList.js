import './EmailList.css'

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';

const EmailList = () => {
    return (
        <div className="email_list">
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

            </section>

        </div>
    );
};

export default EmailList;
