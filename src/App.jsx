import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import Tool from './features/Tool/Tool';
import "./App.css"
import Login from './features/Login/Login';
import SignUp from './features/SignUp/SignUp';
import Resources from './features/Resources/Resources';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ProtectedRoute from './ProtectedRoute';

function App() {
  
  return (
    <>
      <div className="wrapper bg-white">
        <AuthProvider>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Home />}/> */}
                    <Route
                        path="/"
                        element={
                            <>
                              <Navbar authenticated={true} />
                              <Home />
                            </>                       
                    }
                    />
                    <Route
                        path="/tool"
                        element={
                          <>
                              <Navbar authenticated={true} />
                              <Tool />
                          </>
                            // <ProtectedRoute>
                               
                            // </ProtectedRoute>
                        }
                    />
                    {/* <Route path="/tool" element={<Tool />} /> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/resources" element={<><Navbar/><Resources /></>} />

                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;