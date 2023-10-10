import './Nav.css';

import Banner from '../../assets/bannerNav.gif';
import Logo from '../../assets/movies-logo.svg';
import ContactIcon from '../../assets/contactIcon.svg';
import ProfileIcon from '../../assets/profileIcon.svg';
import SearchIcon from '../../assets/searchIcon.svg';


function Nav() {

  return (
    <>
      <div className="container-b">
        <img className="banner" src={ Banner } alt="Banner promocion" />
      </div>
      <nav>
        <div className="container-icons-responsive">
          <span className="hamburguer-icon"></span>
          <span className="find-icon"></span>
        </div>
        <img src={ Logo } alt="Logo Movies" width="113" />
        <ul>
          <li><a href="/#">MUJER</a>
            <ul className="submenu">
              <div className="title-submenu">
                <p>Mujer</p>
                <a href="/#">Ver todo</a>
              </div>
              <li><a href="/#">Camisetas</a></li>
              <li><a href="/#">Pijamas</a></li>
              <li><a href="/#">Ropa interior</a></li>
              <li><a href="/#">Chaquetas y buzos</a></li>
              <li><a href="/#">Joggers, pantalones y shorts</a></li>
              <li><a href="/#">Calzado</a></li>
              <li><a href="/#">Accesorios</a></li>
            </ul>
          </li>
          <li><a href="/#">HOMBRE</a></li>
          <li><a href="/#">NUEVOS<br/>lanzamientos</a></li>
          <li><a href="/#">ROPA<br/>deportiva</a></li>
          <li><a href="/#">OFERTAS<br/>de temporada</a></li>
        </ul>
        <button className="btn-search">
          Encuentra tu preferido
          <img src={ SearchIcon } alt="Icono de búsqueda" className="icon" />
        </button>
        <div className="icons-container">
          <img src={ ContactIcon } alt="Icono de contacto" className="icon" />
          <img src={ ProfileIcon } alt="Icono de perfil" className="icon" />
          <span className="icon-heart"></span>
          <img src="https://moviesshopco.vtexassets.com/arquivos/map-locator-2.svg" alt="Icono de tiendas" className="icon" width={17} height={17} />
          <span className="icon-shop">
            <span className="total-products">0</span>
          </span>
        </div>
      </nav>
    </>
  )
}

export default Nav;