import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IconButton from '../common/template/iconButton'
import { getList, showUpdate, showDelete, showDetail } from './usuarioActions'

class UsuarioList extends Component {

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(usuario => (
            <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>
                    <IconButton style='warning' icon='pencil' onClick={() => this.props.showUpdate(usuario)}> </IconButton>
                    <IconButton style='danger' icon='trash-o' onClick={() => this.props.showDelete(usuario)}> </IconButton>
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
                            <th>E-mail</th>
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

const mapStateToProps = state => ({list: state.usuario.list})
const mapDispacthToProps = dispacth => bindActionCreators({ getList, showUpdate, showDelete, showDetail }, dispacth) 
export default connect(mapStateToProps, mapDispacthToProps)(UsuarioList)