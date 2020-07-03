import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init, } from './filialActions'
import LabelAndInput from '../common/form/labelAndInput'

class FilialForm extends Component {
    render(){
        const { handleSubmit, readOnly } = this.props
        return(

            <form role='form' onSubmit={handleSubmit}>
                
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} label="Nome" cols="12 3" placeholder="Nome Completo" readOnly={readOnly}  />
                    <Field name='cidade' component={LabelAndInput} label="Cidade" cols="12 3" placeholder="" readOnly={readOnly} />
                    <Field name='cnpj' component={LabelAndInput} label="CNPJ" cols="12 2" placeholder="" readOnly={readOnly} />
                    <Field name='email' component={LabelAndInput} label="Email" cols="12 4" placeholder="exemplo@email.com" readOnly={readOnly} />
                    <Field name='rua' component={LabelAndInput} label="Rua" cols="12 4" placeholder="" readOnly={readOnly} />
                    <Field name='nro' component={LabelAndInput} label="Nro" cols="12 2" placeholder="" readOnly={readOnly} />
                    <Field name='cep' component={LabelAndInput} label="CEP" cols="12 2" placeholder="" readOnly={readOnly} />
                    <Field name='bairro' component={LabelAndInput} label="Bairro" cols="12 4" placeholder="" readOnly={readOnly} />
                    <Field name='complemento' component={LabelAndInput} label="Complemento" cols="12 12" placeholder="" readOnly={readOnly} />
                    <Field name='latitude' component={LabelAndInput} label="Latitude" cols="12 2" placeholder="" readOnly={readOnly} />
                    <Field name='longitude' component={LabelAndInput} label="Longitude" cols="12 2" placeholder="" readOnly={readOnly} />
                
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        )
    }
}

FilialForm = reduxForm({form: 'filialForm', destroyOnUnmount: false})(FilialForm)

const mapDispacthToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispacthToProps)(FilialForm)