import { withRouter } from 'react-router-dom';
import Routes from './components/Routes';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default withRouter(App);