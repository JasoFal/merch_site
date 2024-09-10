import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          text='text'
          name='name'
          placeholder="Name" />
        <textarea
          text='text'
          name='description'
          placeholder='Description'/>
        <input
          text='text'
          name='price'
          placeholder='Price'/>
        <input
          text='text'
          name='quantity'
          placeholder='Quantity'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;