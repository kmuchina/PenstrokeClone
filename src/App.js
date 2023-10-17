import Header from "./components/Header"
import Main from "./components/Main"
import Aside from "./components/Aside";


const App = () => {
	
  	return (
    	<>
			<Header />

			<div id="wrapper">
				<Main />
				<Aside />
			</div>

			<footer></footer>

		</>
  );
}

export default App;

