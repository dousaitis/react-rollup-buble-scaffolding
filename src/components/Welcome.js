import React from 'react'
import PropTypes from 'prop-types'
import './Welcome.scss';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  render() {
    const { name } = this.props
    const { value } = this.state
    return (
      <div className="Welcome">
        <h2>Welcome <span className="name">{value || name}</span> to react-rollup-scaffolding app!</h2>
        Your name: <input type="text" autoFocus value={value} onChange={this.handleChange}/>
      </div>
    )
  }
}

Welcome.propTypes = {
  name: PropTypes.string
}

Welcome.defaultProps = {
  name: ''
}

export default Welcome

