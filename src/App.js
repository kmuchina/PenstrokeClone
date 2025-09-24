import Header from "./components/Header"
import BothAsideMain from "./components/BothAsideMain";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



const App = () => {
	
  	return (
    	<>
			<Header />

			<div>
				<BothAsideMain /> 
			</div>
			<div>
				<Footer/>
			</div>	
			
		

		</>
  );
}

export default App;

