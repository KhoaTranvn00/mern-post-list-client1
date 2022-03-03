import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import About from "./components/page/About";
import Auth from "./components/page/Auth";
import Dashboard from "./components/page/Dashboard";
import Landing from "./components/page/Landing";
import ProtectedRoute from "./components/page/ProtectedRoute";
import AuthContextProvider from "./context/AuthContext";
import PostContextProvider from "./context/PostContext";
const App = () => {
	return (
		<AuthContextProvider>
			<PostContextProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="account" element={<Auth />}>
							<Route path="login" element={<LoginForm />} />
							<Route path="register" element={<RegisterForm />} />
						</Route>
						<Route element={<ProtectedRoute />}>
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="about" element={<About />} />
						</Route>
					</Routes>
				</Router>
			</PostContextProvider>
		</AuthContextProvider>
	);
};

export default App;
