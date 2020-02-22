import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Centro from '../view/home/Centro'
import Sobre from '../view/sobre/Sobre'
import Fotos from '../view/fotos/Fotos'
import Contato from '../view/contato/Contato'
import Cadastro from '../view/cadastro/Cadastro'



export default function Routes (){
  return(
    <Switch>
      <Route exact path='/' component={ Centro } />
      <Route exact path='/Sobre' component={ Sobre } />
      <Route exact path='/Fotos' component={ Fotos } />
      <Route exact path='/Contato' component={ Contato } />
      <Route exact path='/Cadastro' component={ Cadastro } />

    </Switch>
  )
}