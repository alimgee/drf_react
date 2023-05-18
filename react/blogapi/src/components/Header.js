import React from 'react';
import {AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';



function Header() {
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position='static' >
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						BlogmeUp
					</Typography>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;