import './header.css'


const Header = ()=>{
    return(
        <header className='header'>
            <div className="container">
                <div className="headerRow">
                    <div className="logo">Green list</div>
                    <nav className="nav">
                        <ul>
                            <li><a href="#!">Главная</a></li>
                            <li><a href="#!">Новости</a></li>
                            <li><a href="#!">Обмен</a></li>
                            <li><a href="#!" className='login'>Кабинет</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;