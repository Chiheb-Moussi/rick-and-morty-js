import Header from "../components/Header";
import InputSearch from "../components/InputSearch";
import Pagination from "../components/Pagination";
import PersonList from "../components/PersonList";
import { fetchPersons } from "../service/fetchPersons";

const HomePage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get('name') ?? '';
    const page = searchParams.get('page')?? '';
    fetchPersons(name, page);

    return /*html */`
        <div class=" container py-10">
        ${Header()}
        ${InputSearch(name)}
        ${PersonList()}
        ${Pagination()}
        </div>
    `;
}

export default HomePage;