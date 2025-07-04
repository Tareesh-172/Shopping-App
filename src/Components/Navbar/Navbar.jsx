import React, { useContext,useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/m4.png'

// export
const Navbar = () => {
  // create usestate variable using move the red (shop<hr/>)moves click object like men, wom ,kid
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);
  const menuRef = useRef();

const dropdown_toggle = (e) =>{
   menuRef.current.classList.toggle("nav-menu-visible");
   e.target.classList.toggle('open');
}


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            {/* <p>SHOPPER</p> */}
            <p>SHISIRA</p>
           {/* <h6>A Beautiful girl said..😍</h6>  */}
        </div>

        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
        <ul ref={menuRef} className='nav-menu'>
          {/* using usestatr method in <li> onclick function
          using ternary operator also using {menu==='shop'?<hr/>:<></>} */}
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none' }}  to='/mens'>Mens</Link>{menu==='mens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }}  to='/womens'>Womens</Link>{menu==='womens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }}  to='/kids'>kids</Link>{menu==='kids'?<hr/>:<></>}</li>    
        </ul>
        <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>

        </div>

    </div>
  )
}

 export default Navbar