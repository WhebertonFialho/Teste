import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const INITIAL_VALUES = {}

export const changeDescription = event => ({
    type: 'DESCRIPTION_USUARIO_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const search = getState().usuario.description
        const request = axios.get(`${window.$URL}/usuario/?search=${search}`)
            .then(resp => dispatch({type: 'USUARIO_SEARCHED', payload: resp.data}))
    }
}

export const clear = () => {
    return [{ type: 'USUARIO_CLEAR' }, search()]
}

export function getList() {
    const request = axios.get(`${window.$URL}/usuario/`)
    return {
        type: 'USUARIO_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values.id ? `${values.id}/` : ''
        axios[method](`${window.$URL}/usuario/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                //console.log(e.response.data.errors)
                e.response.data.errors.forEach(error => toastr.error('Erro', `${error.field} - ${error.message}`))
            })
    }
}

export function showUpdate(usuario) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('usuarioForm', usuario)
    ]
}

export function showDelete(usuario) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('usuarioForm', usuario)
    ]
}


export function showDetail(usuario) {
    return [ 
        showTabs('tabDetail'),
        selectTab('tabDetail'),
        initialize('usuarioForm', usuario)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('usuarioForm', INITIAL_VALUES)
    ]
}