import { fetchPersons } from "../service/fetchPersons";

const PaginationButton = (label, pageNumber="", name="") => {
    if(pageNumber ==="") {
        return /*html */`
        <button  class="p-2 border bg-gray-200 shadow-md rounded cursor-not-allowed border-none" disabled >
            ${label}
        </button>
    `;
    }

    return /*html */`
        <a href="?name=${name}&page=${pageNumber}"  class="p-2 border border-gray-200 shadow-md rounded " >
            ${label}
        </a>
    `;
}

export default PaginationButton;