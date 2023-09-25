import PersonCard from "../components/PersonCard";

export const renderPersons = (personsData)=> {
    const persons = personsData && personsData.length >0 ?personsData.map((person) => PersonCard(person)).join('') :'<div class="text-center block w-full">No result</div>';
    document.querySelector('#peronsContainer').innerHTML = persons
}