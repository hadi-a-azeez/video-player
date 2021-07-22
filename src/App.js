import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import VideoPlayer from "./pages/videoPlayer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/watch/:id" component={VideoPlayer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
