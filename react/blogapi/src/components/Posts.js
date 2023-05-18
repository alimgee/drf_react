import React from 'react';
import {Container, Grid, Typography, Card, CardContent, CardMedia} from '@mui/material';


const Posts = (props) => {
	const { posts } = props;
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card >
									<CardMedia image="https://placehold.co/600x400/png"
										title="Image title"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
										>
											{post.title.substr(0, 50)}...
										</Typography>
										<div>
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="p" color="textSecondary">
												{post.excerpt.substr(0, 60)}...
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Posts;