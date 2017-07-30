import React from 'react'
import {connect} from 'react-redux'

const App = props => (
    <div>
        <p>Hello {props.name}</p>
    </div>
)

const mapStateToProps = state => ({
    name: state.users['foo'].name
})

export default connect(mapStateToProps)(App)
