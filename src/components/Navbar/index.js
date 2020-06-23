import React from 'react';
import { Link } from 'react-router-dom';
// import Image from '../Image/playermade1.png'
import styled from 'styled-components'
import { ButtonContainer } from '../Button/index'

class Navbar extends React.Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    {/* <img src={Image} alt='store' className='navbar-brand'></img> */}
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            playermade
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus' />
                        </span>
                    My Cart
                </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
background:var(--mainDark);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
    }

`