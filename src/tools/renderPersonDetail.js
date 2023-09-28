import PersonCard from "../components/PersonCard"

const renderPersonDetail = (person) => {
    document.querySelector('#detailContent').innerHTML= /*html */`
        <h1>${person.name}</h1>
    `;
}

export default renderPersonDetail;