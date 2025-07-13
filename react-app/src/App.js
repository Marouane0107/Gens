import Login from './pages/login/login';
import Register from './pages/register/register';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Profile from './pages/profile/profile';
import Home from './pages/home/home';
import "./style.scss";

function App() {

  const currentUser = false; // will be replaced with actual user state management after adding backend

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6, padding: "20px" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      // return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute> <Layout /> </ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
