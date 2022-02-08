import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Friends from './pages/Friends';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:id" element={<Friends />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
