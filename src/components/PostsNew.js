import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from "../actions";

class PostsNew extends Component {

    renderField(field) {
        // const {meta} = field;
        const {meta : {touched, error} } = field;

        const formState = touched ? (error ? 'has-danger' : 'has-success') : '';
        const formGroupClassName = `form-group ${formState}`;

        return (
            <div
                className={formGroupClassName}
            >
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )

    }

    // renderTitleField(field) {
    //     return (
    //         <div
    //             className="form-group"
    //         >
    //             <label>Title</label>
    //             <input
    //                 className="form-control"
    //                 type="text"
    //                 {...field.input}
    //             />
    //         </div>
    //     )
    // }
    //
    // renderTagsField(field) {
    //     return (
    //         <div
    //             className="form-group"
    //         >
    //             <label>Tags</label>
    //             <input
    //                 className="form-control"
    //                 type="text"
    //                 {...field.input}
    //             />
    //         </div>
    //     )
    // }

    onSubmitForm(values) {
        // console.log(values);
        // this.props.history.push('/');
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {

        const {
            handleSubmit
        } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
                <Field
                    label="Title for Post"
                    name="title"
                    component={this.renderField}
                />

                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />

                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit"
                        className="btn btn-primary"
                >SUBMIT</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>

            </form>
            // <div>
            //     PostsNew!
            // </div>
        );
    }
}

function validate(values) {
    const errors = {};

    // validate inputs from values.

    if (!values.title || values.title.length < 3) {
        errors.title = "enter at least 3 characters!";
    }

    if (!values.categories) errors.categories = "enter some categories";

    if (!values.content) errors.content = "enter some content please";

    return errors;
}


export default reduxForm({
    validate,
    form : 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);