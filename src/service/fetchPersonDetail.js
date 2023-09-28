import renderPersonDetail from "../tools/renderPersonDetail";

export const fetchPersonDetail = async (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    renderPersonDetail(data);

}