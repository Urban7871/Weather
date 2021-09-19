import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSearch } from '../../actions/index';
import Form from './Form';


class Header extends React.Component {
    componentDidMount() {
        this.props.getSearch('Tokio')
    }


    render() {
        const onSubmit = (e, q) => {
            e.preventDefault()
            console.log(q)
            this.props.getSearch(q)
        }
        return (
            <div>
                <Form onSubmit={onSubmit}/>
            </div>
    )
}
}

const mapStateToProps = (state) => {
    return { coords: state }
}

export default connect(mapStateToProps, { getSearch })(Header)