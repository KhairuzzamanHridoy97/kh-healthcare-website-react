import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Doctorlist from './Components/Doctorlist/Doctorlist';
import Medicine from './Components/Medicin/Medicin';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



function App() {
  return (

    <div className="App">
      <AuthProvider>
      <Router>

        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/doctorlist'>
            <Doctorlist></Doctorlist>
          </Route>
          <PrivateRoute path='/medicin'>
            <Medicine></Medicine>
          </PrivateRoute>
          <Route path='/about'>
            <About></About> 
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
