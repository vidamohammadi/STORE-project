import React from 'react'
import NavItem from '../NavItem/NavItem'
import './NavItems.css'
const NavItems = () => {
    return (
        <ul className="nav-items">
            <NavItem link="shopping">Shopping</NavItem>
            <NavItem link="checkout">Checkout</NavItem>
        </ul>
    )
}

export default NavItems
