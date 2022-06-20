import './Header.css'

import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="./images/logo/logo.png" alt=""/>
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input type="search" placeholder="Search mail"/>
                <ArrowDropDownIcon/>

            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <AccountCircleIcon/>
            </div>
        </div>
    );
};

export default Header;
