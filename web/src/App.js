import AnchorNav from "react-single-page-navigation"
import { React, useState } from 'react';
import './App.css';
import Fab from '@mui/material/Fab';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/system/Box';
import Home from './home/Home.jsx';
import Contact from "./contact/Contact";


const elements = {
	EL1: {},
	EL2: {},
 	EL3: {},
	EL4: {},
	EL5: {}
}

const App = () => {
	const [menu, setMenu] = useState(false);

	return (
		<div className="App">
			<AnchorNav elements={elements} shouldEnableHistory={true} shouldModifyUrl={true}>
				{({ refs, activeElement, goTo }) => (
					<div>
						<Fab sx={{zIndex:1, position:'fixed', marginLeft:"95%", marginBottom:"95%", top:"2%"}} onClick={() => setMenu(true)}>
							<MenuRoundedIcon/>
						</Fab>
						<Drawer open={menu} anchor="right" onClose={() => setMenu(false)}>
							<Box sx={{width:250}}>
								<List>
									<ListItem onClick={() => {setMenu(false); goTo("EL1");}}>
										<h3 className={activeElement === "EL1" ? "selected-menuitem" : "menuitem"}>Ayon Bhowmick</h3>
									</ListItem>
									<ListItem onClick={() => {setMenu(false); goTo("EL2");}}>
										<h3 className={activeElement === "EL1" ? "selected-menuitem" : "menuitem"}>Projects</h3>
									</ListItem>
									<ListItem onClick={() => {setMenu(false); goTo("EL3");}}>
										<h3 className={activeElement === "EL1" ? "selected-menuitem" : "menuitem"}>Skills</h3>
									</ListItem>
									<ListItem onClick={() => {setMenu(false); goTo("EL4");}}>
										<h3 className={activeElement === "EL1" ? "selected-menuitem" : "menuitem"}>Awards/Experience</h3>
									</ListItem>
									<ListItem onClick={() => {setMenu(false); goTo("EL5");}}>
										<h3 className="selected-menuitem">Contact</h3>
									</ListItem>
								</List>
							</Box>
						</Drawer>
						<div>
							<div ref={refs.EL1} className="home">
								<Home/>
							</div>
							<div ref={refs.EL2} className="content">
								<h1>Projects</h1>
							</div>
							<div ref={refs.EL3} className="content">
								<h1>Skills</h1>
							</div>
							<div ref={refs.EL4} className="content">
								<h1>Awards/Experience</h1>
							</div>
							<div ref={refs.EL5} className="content">
								<Contact/>
							</div>
						</div>
					</div>
				)}
			</AnchorNav>
		</div>
	);
}

export default App;
