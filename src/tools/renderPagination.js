import PaginationButton from "../components/PaginationButton";

export const renderPagination = (info, name="", page="") => {
    const currentPage = page ?  Number(page) : 1;
    const pageCount = Number(info.pages)
    const nextPage = info.next ? currentPage + 1 : '' ;
    const prevPage = info.prev ? currentPage - 1 : '';

    document.querySelector('#paginator').innerHTML = /*html */ pageCount > 1 ?`
        <div class="flex justify-center gap-1 py-4 text-xl">

            ${PaginationButton('prev', prevPage, name)}
            ${PaginationButton('1', 1, name)}
            ${currentPage > 1 && currentPage < pageCount ? PaginationButton(currentPage, currentPage, name) : '' }
            ${PaginationButton(pageCount, pageCount, name)}
            ${PaginationButton('next', nextPage, name)}
        </div>
    `: '';
}