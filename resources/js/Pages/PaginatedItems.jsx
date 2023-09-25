import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

const kk = [...Array(33).keys()];
// const items = [{ name: "xx" }];
const itemsx = [
    {
        id: 1,
        account_id: 1,
        name: "Thiel, Murphy and Raynor",
        email: "kulas.arturo@upton.com",
        phone: "1-877-284-2651",
        address: "401 Jayme Stream Suite 403",
        city: "East Lisastad",
        region: "Wyoming",
        country: "US",
        postal_code: "86251-8472",
        created_at: "2023-09-25T00:28:28.000000Z",
        updated_at: "2023-09-25T00:28:28.000000Z",
        deleted_at: null,
    },
    {
        id: 2,
        account_id: 1,
        name: "Corkery, Nikolaus and Feeney",
        email: "thyatt@brakus.com",
        phone: "800-696-6850",
        address: "1500 Williamson Gardens Apt. 245",
        city: "Connorbury",
        region: "Arizona",
        country: "US",
        postal_code: "49938-0718",
        created_at: "2023-09-25T00:28:28.000000Z",
        updated_at: "2023-09-25T00:28:28.000000Z",
        deleted_at: null,
    },
];

function Items({ currentItems }) {
    return (
        <div className="items">
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Name : #{item.name}</h3>
                    </div>
                ))}
        </div>
    );
}

export default function PaginatedItems(props) {
    console.log(props.data.data);
    const items = props.data.data;

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + 10;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / 10));
    }, [itemOffset, 10]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 5) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}
