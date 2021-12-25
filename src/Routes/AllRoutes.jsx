
import { Switch,Route } from "react-router-dom"
import EditTodo from "../Pages/EditTodo"
import Home from "../Pages/Home"
import TodoItems from "../Pages/TodoItems"

export default function AllRoutes(){

    return (
        <>
          <Switch>
             <Route exact path="/">
                <Home/>
             </Route>
             <Route exact path="/todo/:id">
                <TodoItems/>
             </Route>
             <Route exact path="/todo/:id/edit">
                <EditTodo/>
             </Route>
          </Switch>
        </>
    )
}