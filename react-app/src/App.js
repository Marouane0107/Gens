import Login from './pages/login/login';
import Register from './pages/register/register';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Profile from './pages/profile/profile';
import Home from './pages/home/home';
import "./style.scss";
import { useContext } from 'react';
import { AuthContext } from './components/context/authContext';
import { Navigate } from 'react-router-dom';

function App() {

  const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="responsive-layout">
          <LeftBar className="responsive-sidebar" />
          <div className="responsive-content">
            <Outlet />
          </div>
          <RightBar className="responsive-sidebar" />
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
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
