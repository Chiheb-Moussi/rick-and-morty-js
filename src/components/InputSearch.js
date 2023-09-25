import { fetchPersons } from "../service/fetchPersons";

const InputSearch = () => {


    const handleSearch = () => {
        const input = document.querySelector('#inputSearch')
        const value = input.value.trim();
        fetchPersons(value);
    }

    //useEffect
    window.addEventListener("load", (event) => {
        const button = document.querySelector('#searchBtn');
        button.addEventListener('click', handleSearch)
    });
    
    return /*html */`
        <div class="flex justify-center py-4 gap-2">
            <input type="text" class="p-2 border border-gray-300 rounded shadow-md" id="inputSearch"/>
            <button class="bg-green-500 text-white py-2 px-4 rounded shadow-md uppercase" id="searchBtn" >search</button>
        </div>

    `
}

export default InputSearch;