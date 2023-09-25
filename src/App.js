import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import Pagination from "./components/Pagination";
import PersonList from "./components/PersonList";

const App = () => {

    return /*html */`
        <div class=" container py-10">
        ${Header()}
        ${InputSearch()}
        ${PersonList()}
        ${Pagination()}
        </div>
    `;
}

export default App;

