import React from 'react';
import Element from '../element/Element'
import 'materialize-css';
import { Container, Nav, Navbar, NavItem, SideNavItem, SideNav, Icon, Button} from 'react-materialize';

class AccountOptions extends React.Component{
    render(){
        return(
            <div>
                <SideNav
                    className="Navbar"
                    id="SideNav-10"
                    options={{
                        draggable: true
                    }}
                    trigger={<Button id="menu-launcher"><Icon>menu</Icon></Button>}>                    
                    <SideNavItem
                        user={
                            {
                                background: 'https://placeimg.com/640/480/tech',
                                email: 'juancarlosmamani@gmail.com',
                                image: './logo192.png',
                                name: 'Juan Carlos Mamani'
                            }
                        }
                        userView
                    />

                    <SideNavItem subheader> Materias </SideNavItem>

                    <SideNavItem
                        href="#!icon"
                        icon={<Icon>calculate</Icon>}
                        waves>
                        Matematicas
                    </SideNavItem>
                    <SideNavItem
                        href="#!icon"
                        icon={<Icon>book</Icon>}
                        waves>
                        Lenguaje
                    </SideNavItem>
                    <SideNavItem
                        href="#!icon"
                        icon={<Icon>eco</Icon>}
                        waves>
                        Ciencias Naturales
                    </SideNavItem>
                    <SideNavItem
                        href="#!icon"
                        icon={<Icon>people</Icon>}
                        waves>
                        Estudios Sociales
                    </SideNavItem>

                    <SideNavItem divider />
                    
                    <SideNavItem subheader> Cuenta </SideNavItem>

                    <SideNavItem
                        href="#!icon"
                        icon={<Icon>exit_to_app</Icon>}
                        waves>
                        Cerrar Sesion
                    </SideNavItem>
                </SideNav>
            </div>
        );
    }
}

export default AccountOptions;