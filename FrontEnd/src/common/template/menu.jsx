
import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='filial' label='Filial' icon='university' />
            <MenuItem path='usuario' label='Usuário' icon='user' />
        </MenuTree>
    </ul>
)