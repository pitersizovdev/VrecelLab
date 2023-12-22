import './header.css'
import { Link, NavLink } from 'react-router-dom';
import React, {useState} from "react";
const Header = ()=>{

    const [menuOpen, setMenuOpen] = useState(false)

    return(


                    <nav>
                    <Link to="/" className="logo">Green list</Link>
                        <div className='menu' onClick={()=>{setMenuOpen(!menuOpen)}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className={menuOpen ? "open" : ""}>
                            <li><NavLink to="/home" onClick={()=>{setMenuOpen(!menuOpen)}}>Главная</NavLink></li>
                            <li><NavLink to="/news" onClick={()=>{setMenuOpen(!menuOpen)}}>Новости</NavLink></li>
                            <li><NavLink to="/exch" onClick={()=>{setMenuOpen(!menuOpen)}}>Обмен</NavLink></li>
                            <li><NavLink to="/profile" onClick={()=>{setMenuOpen(!menuOpen)}}>Кабинет</NavLink></li>
                        </ul>
                    </nav>


    )
}

export default Header;