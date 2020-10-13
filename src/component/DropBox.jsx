import React, { useState } from 'react';
import "./dropBox.css";

function DroupBox( props ){
    const { cotenetName , dropItems} = props;

    return(
        <div>
            <Navbar>
                <NavItem icon={ cotenetName }>
                    <DroupdownMenu
                        dropItems = { dropItems }
                    />
                </NavItem>

            </Navbar>
        </div>
        );
}

function Navbar( props){
    return(
        <nav className="navbar">
            <ul className="navbar-nav">{ props.children }</ul>
        </nav>
    );
}

function NavItem( props){
    const [ open, setOpen ]= useState( false );

    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={()=> setOpen( !open ) } >
                {props.icon}
            </a>

            { open && props.children }
        </li>
    );
}

function DroupdownMenu( props ){
    const { dropItems } = props;

    function DropdowItem( props ){
        return(
            <a href="#" className="menu-item">
                <span className="icon-button">{ props.leftIcon}</span>

                <span style={{ color: 'black'}}>{ props.children }</span>

                <span className="icon-right">{ props.rightIcon}</span>

            </a>
        )
    }
    
    return(
        <div className = "dropdown">
            { props.dropItems.map( ( item ) => <span style={{display: 'flex', alignItems : 'center'
}}
                                                ><input type="checkbox" />
                                                     <DropdowItem> { item } </DropdowItem>
                                                </span>) }

        </div>
    );
}

export default DroupBox;