import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import BookForm from "./BookForm";


const ShowBookDetails = () => {

    const {id} = useParams();

    let navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        isbn: "",
        author: "",
        image: "",
        description: "",
        published_date: "",
        publisher: ""
    });

    const changePublishedDateFormat = (date) => {
        let dateFromDatabase = new Date(date);
        let newFormat = dateFromDatabase.toISOString().split('T')[0];
        return newFormat.split("-").join("-");
    }

    useEffect(() => {
        axios.get('http://localhost:8082/' + id)

            .then(res => {
                const {title, isbn, author, image, description, published_date, publisher} = res.data;
                setBook({
                    title: title,
                    isbn: isbn,
                    author: author,
                    image: image,
                    description: description,
                    published_date: (changePublishedDateFormat(published_date)),
                    publisher: publisher
                });
            })

            .catch(err => alert(err));
    }, []);

    const updateBook = (book) => {

        axios.put('http://localhost:8082/' + id, book)
            .then(res => {
                if (res.status === 200) {
                    alert("Book was updated");
                    navigate("/book-list");
                }
            })
            .catch(err => alert(err));
    }

    return (
        <>
            <React.Fragment>
                <BookForm initialValues={book} handleOnSubmit={updateBook}> Update Book </BookForm>
            </React.Fragment>
        </>
    )
}

export default ShowBookDetails;