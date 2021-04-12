import React from 'react'
import { Route, Switch} from 'react-router-dom'
import PreJunior from './pages/PreJunior'
import Junior from "./pages/Junior";
import Junior_Plus from './pages/JuniorPlus';


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+',

    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совпадение (что после '/' ничего не будет)*/}
            {/*<Route path={'/pre-junior'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}
            <Route path={PATH.PRE_JUNIOR} component={PreJunior}/>
            <Route path={PATH.JUNIOR} component={Junior}/>
            <Route path={PATH.JUNIOR_PLUS} component={Junior_Plus}/>



            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}

            </Switch>
        </div>
    )
}

export default Routes
