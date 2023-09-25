import { fetchPersons } from "../service/fetchPersons";

const PersonList = () => {
    
    fetchPersons();

    return /*html */`
    <div class="flex gap-2 flex-wrap py-8 justify-between" id="peronsContainer"></div>`;

}
export default PersonList;



  




