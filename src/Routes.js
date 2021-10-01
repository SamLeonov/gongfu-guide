import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import White from "./white";
import Green from "./green";
import Oolong from "./oolong";
import Red from "./red";
import Shou from "./shou";
import Shen from "./shen";


const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/white" component={White} />
        <Route exact path="/green" component={Green} />
        <Route exact path="/oolong" component={Oolong} />
        <Route exact path="/red" component={Red} />
        <Route exact path="/shou" component={Shou}/>
        <Route exact path="/shen" component={Shen} />
        
      </Switch>
    </HashRouter>
  );
};

export default Routes;
