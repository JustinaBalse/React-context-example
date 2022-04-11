import './App.css';
import Navigation from './components/Navigation';
import { Section } from './components/Section';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Switch } from "react-router-dom";
import AddUser from './components/AddUser';
// import { LikesContext } from './context/LikesContext';

function App() {

  return (
    <div>
      <Navigation />
      <Section />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/add-user" component={AddUser} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

// <Route path="/:id" component={ } />
