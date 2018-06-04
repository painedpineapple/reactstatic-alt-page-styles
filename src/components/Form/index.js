import React from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
//
import { getFormFieldFor } from '../../utils/form-fields'

export default class Form extends React.Component {
  state = {
    values: {},
    message: '',
  }
  handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await axios.post(this.props.endpoint, this.state.values)
      this.setState({
        message: ReactHtmlParser(data),
      })
    } catch (error) {
      // Pass this error to Sentry, and let the user know that our dev team has been notified.
      this.setState({
        message: (
          <p className="form-error">
            There was an error submitting the form. Please review the content
            you have entered and try again.
          </p>
        ),
      })
    }
  }
  updateForm = ({ fieldId, value }) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [`input_${fieldId}`]: value, //gravity forms requires an `input_` prefix before each id
      },
    }))
  }
  render() {
    const { button, fields } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.message}
        {fields.map(field =>
          getFormFieldFor({ ...field, updateForm: this.updateForm }),
        )}
        <button type={button.type}>{button.text}</button>
      </form>
    )
  }
}
