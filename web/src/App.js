import AnchorNav from "react-single-page-navigation"
import { React, useState } from 'react';
import './App.css';
import Fab from '@mui/material/Fab';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/system/Box';
import Home from './home/Home';
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import AwardsExperience from "./awardsExperience/AwardsExperience";

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
						<Fab sx={{zIndex:3, position:'fixed', marginLeft:"95%", marginBottom:"95%", top:"2%", color:"#945197"}} onClick={() => setMenu(true)}>
							<MenuRoundedIcon/>
						</Fab>
						<Drawer sx={{color:"#191919"}} open={menu} anchor="right" onClose={() => setMenu(false)}>
							<Box sx={{width:250, background:"#191919", height:"100%"}}>
								<List>
									{activeElement === "EL1" ?
									<ListItem sx={{color:"#945197", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL1");}}>
										<h3>Ayon Bhowmick</h3>
									</ListItem>
									:
									<ListItem sx={{color:"#F5F5F5", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL1");}}>
										<h3>Ayon Bhowmick</h3>
									</ListItem>}
									{activeElement === "EL2" ?
									<ListItem sx={{color:"#945197", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL2");}}>
										<h3>Projects</h3>
									</ListItem>
									:
									<ListItem sx={{color:"#F5F5F5", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL2");}}>
										<h3>Projects</h3>
									</ListItem>}
									{activeElement === "EL3" ?
									<ListItem sx={{color:"#945197", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL3");}}>
										<h3>Skills</h3>
									</ListItem>
									:
									<ListItem sx={{color:"#F5F5F5", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL3");}}>
										<h3>Skills</h3>
									</ListItem>}
									{activeElement === "EL4" ?
									<ListItem sx={{color:"#945197", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL4");}}>
										<h3>Awards/Experience</h3>
									</ListItem>
									:
									<ListItem sx={{color:"#F5F5F5", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL4");}}>
										<h3>Awards/Experience</h3>
									</ListItem>}
									{activeElement === "EL5" ?
									<ListItem sx={{color:"#945197", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL5");}}>
										<h3>Contact</h3>
									</ListItem>
									:
									<ListItem sx={{color:"#F5F5F5", cursor: "pointer"}} onClick={() =>  {setMenu(false); goTo("EL5");}}>
										<h3>Contact</h3>
									</ListItem>}
								</List>
							</Box>
						</Drawer>
						<div className="stack">
							<div ref={refs.EL1}>
								<Home/>
							</div>
							<div ref={refs.EL2}>
								<Projects/>
							</div>
							<div ref={refs.EL3}>
								<Skills/>
							</div>
							<div ref={refs.EL4}>
								<AwardsExperience/>
							</div>
							<div ref={refs.EL5}>
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
