import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const INITIAL_VALUES = {}

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const search = getState().filial.description
        const request = axios.get(`${window.$URL}/filial/?search=${search}`)
            .then(resp => dispatch({type: 'FILIAL_SEARCHED', payload: resp.data}))
    }
}

export const clear = () => {
    return [{ type: 'FILIAL_CLEAR' }, search()]
}

export function getList() {
    const request = axios.get(`${window.$URL}/filial/`)
    return {
        type: 'FILIAL_FETCHED',
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
        axios[method](`${window.$URL}/filial/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                console.log(e.response.data.errors)
                //e.response.data.errors.forEach(error => toastr.error('Erro', `${error.field} - ${error.message}`))
            })
    }
}

export function showUpdate(usuario) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('filialForm', usuario)
    ]
}

export function showDelete(usuario) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('filialForm', usuario)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('filialForm', INITIAL_VALUES)
    ]
}