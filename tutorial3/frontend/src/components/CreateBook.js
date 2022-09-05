import React from "react";
import axios from "axios";
import BookForm from "./BookForm";

const CreateBook = () => {
    const addBook = (data) => {
        axios.post('http://localhost:8082/addBook', data)
            .then(res => {
                if(res.status === 200){
                    window.alert("Book was successfully added");
                }else{
                    window.alert("Cannot add book");
                }
            })
            .catch(err => {
                window.alert(err);
            })
    };

    return (
        <>
            <React.Fragment>
                <BookForm handleOnSubmit={addBook}> Create Book </BookForm>
            </React.Fragment>
        </>
    )
}

export default CreateBook;