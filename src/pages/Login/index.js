import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { AreaLogin } from './styled';

import { BtnDefautIcons, BtnDefaut} from '../../components/styled';

import FacebookIcon from '@material-ui/icons/Facebook'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default () => {

    return (
       <BrowserRouter>
            <Switch>
                <Route exact path="/registrar">
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"><ArrowBackIosIcon /></Link>
                            Crie sua conta</h1>

                    <p>Crie sua conta, é gratis!</p>
                    <form>
            <div className="form--imput">
                <label>Email</label>
                <input type="email" />
            </div>
        
            <div className="form--imput">
                <label>Senha</label>
                <input type="senha" />
            </div>
            <div className="form--imput">
                <label>Nome</label>
                <input type="text" />
            </div>
            <div className="form--imput">
                <label>Numero</label>
                <input type="text" />
            </div>
            
            <BtnDefaut>Comece agora!</BtnDefaut>

            <div className="footerLogin">
                Não tem uma conta?
                <Link to="/">Fazer login</Link>

            </div>
            
        </form>
                    </AreaLogin>
                </Route>

                <Route exact path="*">
                <AreaLogin>
            <h1>Faça login em sua conta</h1>

            <BtnDefautIcons>
                <FacebookIcon />
                <div className="center">Fazer login com o Facebook</div>
            </BtnDefautIcons>
            <BtnDefautIcons>
                <FacebookIcon />
                <div className="center">Fazer login com o Google</div>
            </BtnDefautIcons>

            <p>OU</p>

        <form>
            <div className="form--imput">
                <label>Email</label>
                <input type="email" />
            </div>
        
            <div className="form--imput">
                <label>Senha</label>
                <input type="senha" />
            </div>

            <BtnDefaut>Entrar!</BtnDefaut>

            <div className="footerLogin">
                Não tem uma conta?
                <Link to="/Registrar">Registre-se</Link>

            </div>
            <div className="footerLogin">
                
                <Link to="/Home">Voltar ao inicio!</Link>
            </div>

        </form>
        
        
        
        
        </AreaLogin>
                </Route>
            </Switch>
            
       </BrowserRouter>
    )
}