import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IconButton from '../common/template/iconButton'
import { getList, showUpdate, showDelete, search, clear  } from './filialActions'
import Grid from '../common/layout/grid'

class FilialList extends Component {
   
    componentWillMount() {
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(filial => (
            <tr key={filial.id}>
                <td>{filial.nome}</td>
                <td>{filial.cnpj}</td>
                <td>
                    <IconButton style='warning' icon='pencil' onClick={() => this.props.showUpdate(filial)}> </IconButton>
                    <IconButton style='danger' icon='trash-o' onClick={() => this.props.showDelete(filial)}> </IconButton>
                </td>
            </tr>
        ))
    }

    render() {
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CNPJ</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.filial.list})
const mapDispacthToProps = dispacth => bindActionCreators({ getList, showUpdate, showDelete, search, clear  }, dispacth) 
export default connect(mapStateToProps, mapDispacthToProps)(FilialList)