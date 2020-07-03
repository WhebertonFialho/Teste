import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './usuarioActions'
import LabelAndInput from '../common/form/labelAndInput'

class UsuarioForm extends Component {
    render(){
        const { handleSubmit, readOnly } = this.props
        const list= []
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} label="Nome" cols="12 4" placeholder="Nome Completo" readOnly={readOnly} />
                    <Field name='senha' component={LabelAndInput} label="Senha" cols="12 4" placeholder="Senha" readOnly={readOnly} />
                    <Field name='email' component={LabelAndInput} label="E-mail" cols="12 4" placeholder="exemplo@email.com" readOnly={readOnly} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        )
    }
}

UsuarioForm = reduxForm({form: 'usuarioForm', destroyOnUnmount: false})(UsuarioForm)

const mapDispacthToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispacthToProps)(UsuarioForm)