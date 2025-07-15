import "./navbar.scss";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GridViewOutlinesIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">Gens</span>
                </Link>
                <HomeOutlinedIcon />
                <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                    {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                </div>
                <GridViewOutlinesIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <div className="user">
                    <img src={currentUser.profilePic}
                    alt="User Avatar" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;