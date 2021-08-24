import React from 'react';

import { AreaLogin } from './styled';

import { BtnDefautIcons, BtnDefaut} from '../../components/styled';

export default () => {

    return (
        <AreaLogin>
            <h1>Faça login em sua conta</h1>
        
        <form>
            <div className="form--imput">
                <label>Nome</label>
                <input type="nome" />
            </div>
            
            <div className="form--imput">
                <label>Telefone</label>
                <input type="Telefone" />
            </div>

            <div className="form--imput">
                <label>Email</label>
                <input type="email" />
            </div>

            <BtnDefaut>Enviar!</BtnDefaut>
        </form>
        
        
        
        
        </AreaLogin>
    )
}