import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {useState} from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { NavLink } from "react-router-dom";

export default function DrawerComp (){

    const[openDrawer, setOpenDrawer] = useState(false);

    return (<div>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                <ListItemButton component={NavLink} to="/" onClick={() => setOpenDrawer(false)}>
                    <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component={NavLink} to="/about" onClick={() => setOpenDrawer(false)}>
                    <ListItemText primary="About"/>
                </ListItemButton>

                <ListItemButton component={NavLink} to="/contact" onClick={() => setOpenDrawer(false)}>
                    <ListItemText primary="Contact"/>
                </ListItemButton>

                <ListItemButton component={NavLink} to="/login" onClick={() => setOpenDrawer(false)}>
                    <ListItemText primary="Login"/>
                </ListItemButton>
            </List>
        </Drawer>

        <IconButton sx={{color:"#ffffff"}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </div>)
}
