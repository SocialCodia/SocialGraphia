import { Redirect, Route, Switch } from "react-router";
import LoginPage from "./pages/LoginPage";
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideosPage from "./pages/VideosPage";
import Navigation from "./components/Navigation";
import PostPage from "./pages/PostPage";
import VideoPage from "./pages/VideoPage";

const App = () =>
{
  return(
    <Switch>
      <PublicRoute exact path='/'>
        <LoginPage/>
      </PublicRoute>
      <PrivateRoute exact path='/home'>
        <HomePage/>
      </PrivateRoute>
      <PrivateRoute exact path='/videos'>
        <VideosPage/>
      </PrivateRoute>

      <PrivateRoute exact path='/post/:postId'>
        <PostPage/>
      </PrivateRoute>

      <PrivateRoute exact path='/video/:videoId'>
        <VideoPage/>
      </PrivateRoute>

    </Switch>
  )
}

const PrivateRoute = ({children,...rest}) =>
{
  const {isAuth} = useSelector((state)=>state.authSlice);
  return(
    <Route {...rest} render={({location})=>{
      return isAuth ? (
        <><Navigation/>
        {children}</>) : (
        <Redirect to={{
          pathname:'/',
          state:{from:location}
        }} />
      )
    }} />
  )
}

const PublicRoute = ({children,...rest}) =>
{
  const {isAuth}  = useSelector((state)=>state.authSlice);
  return(
    <Route {...rest} render={({location})=>{
      return isAuth ? (
        <Redirect to={{
          pathname:'/home',
          state:{from:location}
        }}/>
      ) : (children);
    }} />
  )
}

export default App;