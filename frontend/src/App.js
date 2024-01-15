import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import ChatMessage from "./components/ChatMessage";
import ChatArea from "./components/ChatArea";

function App() {
  return (
    /*
    <>
      <div className="chat-container">
        <Sidebar />
        <ChatArea />
      </div>
    </>
    */

    <Router>
      
      
      
          <Routes>
            <Route path="/" exact Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/chat" element={<><Sidebar/><ChatArea/></>}/>
          </Routes>
      
      
      
    </Router>
  );
}

export default App;
