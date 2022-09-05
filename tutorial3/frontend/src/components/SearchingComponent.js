import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const SearchingComponent = () => {

    const [keyword, setKeyword ] = useState(()=>"");
    return (
        <>
            <Form className="ml-auto d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                />
                <Link className="search-book "
                      to={"/search/" + keyword}>
                    Search
                </Link>
            </Form>
        </>
    )
}

export default SearchingComponent;