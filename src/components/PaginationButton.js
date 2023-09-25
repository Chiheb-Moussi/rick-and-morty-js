import { fetchPersons } from "../service/fetchPersons";

const PaginationButton = (label, url="") => {
    const handlePagination = () => {
        fetchPersons('',url);
    }

    //useEffect
    window.addEventListener("load", (event) => {
        const button = document.querySelector(`#pagebtn_${label}`);
        console.log(label, url)
        
        button.addEventListener('click', handlePagination)
    });
    return /*html */`
        <button class="p-2 border border-gray-200 shadow-md rounded" id="pagebtn_${label}">
            ${label}
        </button>
    `;
}

export default PaginationButton;