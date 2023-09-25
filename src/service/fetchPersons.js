import { renderPagination } from "../tools/renderPagination";
import { renderPersons } from "../tools/renderPersons";

export const fetchPersons = async (name ='', pageUrl='') => {
    const url = pageUrl!== ''? pageUrl :'https://rickandmortyapi.com/api/character?name='+name;
    const response = await fetch(url);
    const data = await response.json();

    const {results, info} = data

    renderPersons(results)
    renderPagination(info)
}