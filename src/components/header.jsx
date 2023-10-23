import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button} from '@mui/material';
import { NavLink } from 'react-router-dom';

import logo from '../assets/usm_name_white.png';

const pages = [['Calendario', '/internal'], ['Cursos', '/course'], ['Foro', '/foro']]; 

const headerStyle = {
    position: 'sticky',
    top: 0,
    width: '100%',
}

export const Header = () => {
    return (
        <AppBar position="static" sx={headerStyle}>
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center">
                    {/* Sección Izquierda */}
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }} >
                        <NavLink to="/" style={{ height: 60, background: 'transparent' }} >
                            <img src={logo} style={{ height: '100%', width: '100%' }} alt="Logo de la Universidad Santa María" />
                        </NavLink>
                    </Grid>

                    {/* Sección Derecha */}
                    <Grid item container xs={8} justifyContent="flex-end">
                        {pages.map((page) => (
                            <Grid item>
                                <Button 
                                    key={page[0]}
                                    component={NavLink}
                                    to={page[1]} 
                                    color="inherit" 
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                {page[0]}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header
