import { renderPagination } from "../tools/renderPagination";
import { renderPersons } from "../tools/renderPersons";

export const fetchPersons = async (name ='', page='') => {
    const url = `https://rickandmortyapi.com/api/character?name=${name}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();

    const {results, info} = data

    renderPersons(results)
    renderPagination(info, name, page)
}