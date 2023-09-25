import PersonCard from "../components/PersonCard";

export const renderPersons = (personsData)=> {
    const persons = personsData.map((person) => PersonCard(person)).join('') ;
    document.querySelector('#peronsContainer').innerHTML = persons
}