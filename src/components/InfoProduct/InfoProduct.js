import "./InfoProduct.css"

import ArrowDown from '../../assets/downArrow.png'
import HeartIcon from '../../assets/heartIcon2.png'
import Credifin from "../Credifin/Credifin";


function InfoProducto() {

  return(
    <div className="main-container-info-producto">
      <div className="container-info-producto">
        <p className="title-product">
        CHAQUETA GÉNERO NEUTRO,<br />CAQUI CON CIERRE DE<br />MANDALORIAN
        </p>
        <div className="container-reference">
          <p>STAR WARS</p>
          <p>Ref. 236732-130908-L</p>
        </div>
        <div className="container-price">
          <p>$289.990</p>
          <p>$202.993</p>
        </div>
        <div className="size-selector">
          <div>
            <button className="size">S</button>
            <button className="size">M</button>
            <button className="size">L</button>
            <button className="size">XL</button>
          </div>
          <a href="/#">Guía de tallas</a>
        </div>
        <div className="counter-cart-container">
          <div className="counter-container">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="add-cart" >AGREGAR A MI BOLSA</button>
        </div>
        <div className="feature-container">
          <p>Descripción de producto</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <p>Especificaciones</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <p>Composición</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <p>Cuidados</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <p>Descubre más</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <img className="icon-heart" src={HeartIcon} alt="icon-heart" />
          <p>AGREGAR A FAVORITOS</p>
        </div>
        <Credifin />

      </div>
    </div>
  );
};


export default InfoProducto;