import Details from "../pages/Details";
import HomePage from "../pages/HomePage";

const Router = () => {
    const path = window.location.pathname.slice(1) //=>person/45
    const route = path.split('/')// => ['person',45]
   
    if(route[0] === 'person') {
        if(route.length > 1 ) {
            return Details(route[1])
        }
    }
    
    return HomePage();
}

export default Router;