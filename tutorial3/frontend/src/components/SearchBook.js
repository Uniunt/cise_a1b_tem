import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import BookCard from "./BookCard";


const SearchBook = () => {
    const {keyword} = useParams();
    const [recommendedBooks, setRecommendedBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/search/" + keyword)
            .then(({data}) => {
                setRecommendedBooks(() => data)
            })
            .catch((err) => {
                alert(err);
            })
    }, []);

    const BookCardData = () => {
        if (recommendedBooks.length > 0) {
            return recommendedBooks.map((res, i) => {
                return <BookCard object={res} key={i}/>;
            })
        } else {
            return <h5 style={{display: "center"}}>Books were not available</h5>
        }
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

export default SearchBook;