import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../common/layout/grid'
import IconButton from '../common/template/iconButton'
import {  changeDescription, search, clear } from './filialActions'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { clear, search, description } = this.props
    }

    render() {
        const { search, description } = this.props
        return (
            <div role='form' className='searchForm'>
                <Grid cols='8 4'>
                    <input id='description' className='form-control'
                        placeholder='Digite uma Pesquisa...'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='4 3 2'>
                    <IconButton style='info' icon='search' onClick={search}></IconButton>
                    <IconButton style='default' icon='close' onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.filial.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)