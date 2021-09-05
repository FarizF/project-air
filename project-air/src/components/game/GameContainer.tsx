import { 
	Route,
	Switch
} from "react-router-dom";
import Navbar from "../Navbar";

export default function GameContainer() {
	return (
		<>
			<Navbar/>
			<Switch>
				<Route path='/dashboard'>

				</Route>
			</Switch>
		</>
	)
}