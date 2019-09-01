import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default function Sidebar() {
    return(
        <ProductConsumer>
            { value => {
                const { linksDataUnAuth, linksDataAuth, sidebarOpen, handleSidebar, isAuth } = value;
                let links = linksDataUnAuth; // User Authentication FLAG
                
                if(isAuth){
                    links = linksDataAuth;
                }

                return (
                    <SideWrapper show={sidebarOpen}>
                        <ul>
                            { links.map(link => {
                                return (
                                    <li key={ link.id }>
                                        <Link 
                                            to={ link.path }  
                                            className="sidebar-link" 
                                            onClick={ handleSidebar }
                                        >
                                            { link.text }
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </SideWrapper>
                );
            }}
        </ProductConsumer>
    );
}

/* ------------ Styled Components -------------- */
const SideWrapper = styled.nav`
    position: fixed; 
    top: 81px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--mainGray);
    z-index: 1; /* sidebar wont be shown if we dont have this */
    border-right: 2px solid var(--primaryColor);
    transition: var(--mainTransition);
    transform: ${props => (props.show ? "translateX(0)": 
    "translateX(-100%)")};
    ul {
        list-style: none;
        padding: 0 !important;
    }
    .sidebar-link {
        display: black;
        font-size: 1.5rem;
        text-transform: capitalize;
        color: var(--mainBlack);
        padding: 0.5rem, 1.5rem;
        background: transparent;
        transition: var(--mainTransition);
    }
    .sidebar-link:hover{
        background: var(--primaryColor);
        color: var(--mainWhite);
        padding: .2rem 1.5rem 0.2rem 2.5rem;
        text-decoration: none;
        border-radius: 3%;
    }
    @media (min-width: 576px) {
        width: 20rem;
    }
`;