import React, {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "./BookCard";

const ShowBookList = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        let subscribe = true;
        axios.get('http://localhost:8082/all-books')
            .then(({data}) => {
                if (subscribe) {
                    setBooks(() => data);
                }
            })
            .catch(err => {
                alert(err);
            });
        return () => {
            subscribe = false;
        }
    });

    const BookCardData = () => {
        return books.map((res, i) => {
            return <BookCard object={res} key={i}/>;
        })
    };

    return (
        <>
            <div className="ShowBookList">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <h2 className="display-4 text-center">Books Store</h2>
                        </div>
                    </div>

                    <div className="list">
                        {BookCardData()}
                    </div>
            </div>
        </>
    )
}
export default ShowBookList;