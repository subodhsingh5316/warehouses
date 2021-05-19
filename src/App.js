import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import WareHousesList from './Component/WareHousesList';
import EditWarehouse from './Component/EditWerehouse';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <WareHousesList/> */}
        {/* <AddWarehouse/> */}
        <Route exact path='/' component={WareHousesList} />
        <Route exact path='/edit-warehouse/:id' component={EditWarehouse} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
