import React from 'react';
import * as Yup from 'yup';
import {useFormik} from "formik";

const BookForm = (props) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: props.initialValues ? props.initialValues.title : '',
            isbn: props.initialValues ? props.initialValues.isbn : '',
            author: props.initialValues ? props.initialValues.author : '',
            image: props.initialValues ? props.initialValues.image : '',
            description: props.initialValues ? props.initialValues.description : '',
            published_date: props.initialValues ? props.initialValues.published_date : '',
            publisher: props.initialValues ? props.initialValues.publisher : ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required().nullable(),
            isbn: Yup.string().required().nullable(),
            author: Yup.string().required().nullable(),
            image: Yup.string().required('Please enter website').nullable(),
            description: Yup.string().required("Required").nullable(),
            published_date: Yup.date()
                .max(new Date(), "Date must be before today")
                .required("Required"),
            publisher: Yup.string().required("Required").nullable()
        }),

        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            props.handleOnSubmit(values);
        },

});

    return (
        <>
            <div className="form-wrapper">
                <form onSubmit={formik.handleSubmit}>
                    <label>Book title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Book title"
                        className="form-control"
                        value={formik.values.title}

                        onChange={formik.handleChange}
                    />
                    {formik.errors.title && formik.touched.title ? (
                        <div>{formik.errors.title}</div>
                    ) : null}

                    <label>ISBN</label>
                    <input
                        name="isbn"
                        type="text"
                        placeholder="ISBN"
                        className="form-control"
                        value={formik.values.isbn}

                        onChange={formik.handleChange}/>

                    {formik.errors.isbn && formik.touched.isbn ? (
                        <div>{formik.errors.isbn}</div>
                    ) : null}

                    <label>Author</label>
                    <input
                        name="author"
                        type="text"
                        placeholder="authors"
                        className="form-control"
                        value={formik.values.author}

                        onChange={formik.handleChange}/>

                    {formik.errors.author && formik.touched.author ? (
                        <div>{formik.errors.author}</div>
                    ) : null}


                    <label>Image Source</label>
                    <input
                        name="image"
                        type="text"
                        placeholder="Image URL"
                        className="form-control"
                        value={formik.values.image}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}/>


                    {formik.errors.image && formik.touched.image? (
                        <div>{formik.errors.image}</div>
                    ) : null}

                    <label>Description</label>
                    <input
                        name="description"
                        type="text"
                        placeholder="Description"
                        className="form-control"
                        value={formik.values.description}

                        onChange={formik.handleChange}/>

                    {formik.errors.description && formik.touched.description ? (
                        <div>{formik.errors.description}</div>
                    ) : null}

                    <label>Published date</label>
                    <input
                        name="published_date"
                        type="date"
                        placeholder="Description"
                        className="form-control"
                        value={formik.values.published_date}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}>


                    </input>
                    {formik.errors.published_date && formik.touched.published_date ? (
                        <div>{formik.errors.published_date}</div>
                    ) : null}

                    <label>Publisher</label>
                    <input
                        name="publisher"
                        type="text"
                        placeholder="Publisher"
                        className="form-control"
                        value={formik.values.publisher}

                        onChange={formik.handleChange}/>
                    {formik.errors.publisher && formik.touched.publisher ? (
                        <div>{formik.errors.publisher}</div>
                    ) : null}

                    <button className="add-btn" type="submit">
                        {props.children}
                    </button>
                </form>
            </div>
        </>
    )

}

export default BookForm;