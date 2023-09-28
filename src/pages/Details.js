import { fetchPersonDetail } from "../service/fetchPersonDetail";

const Details = (id) => {
    fetchPersonDetail(id);
    
    return /*html */`
        <div class=" container py-10" id="detailContent"></div>
    `;
}

export default Details;