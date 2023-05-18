import React, { useEffect, useState }  from 'react';
import './App.css';
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';

function App() {

  const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

  useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `https://8000-alimgee-drfreact-xkgvpgha532.ws-eu97.gitpod.io/api`;
		fetch(apiUrl)
			.then((data) => data.json())
 
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
        console.log({posts})
			});
      
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;