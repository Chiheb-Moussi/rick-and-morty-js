import PaginationButton from "../components/PaginationButton";

export const renderPagination = (info) => {

    const pageCount = info.count
    const nextUrl = info.next
    const prevUrl = info.prev
    document.querySelector('#paginator').innerHTML = /*html */ `
        <div class="flex justify-center gap-1 py-4 text-xl">
            ${PaginationButton('prev', prevUrl)}
            ${PaginationButton('next', nextUrl)}
        </div>
    `;
}