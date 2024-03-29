import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';


import {history} from "./utils/history";
import {HomePage} from "./view/HomePage";
import LoginPage from "./view/LoginPage";
import {BookPage} from "./view/BookPage"
import {BookListPage} from "./view/BookListPage";
import CartPage from "./view/CartPage";
import {OrderPage} from "./view/OrderPage";
import {LoginRoute} from "./LoginRoute"
import PrivateRoute from "./PrivateRoute";
import {OrderListPage} from "./view/OrderListPage";
import {UserListPage} from "./view/UserListPage";

class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage} />
                    <LoginRoute exact path="/login" component={LoginPage} />
                    <Route exact path="/bookDetails" component={BookPage} />
                    <Route exact path="/bookList" component={BookListPage} />
                    <Route exact path="/cart" component={CartPage}/>
                    <Route exact path="/orders" component={OrderPage}/>
                    <Route exact path="/orderList" component={OrderListPage}/>
                    <Route exact path="/userList" component={UserListPage}/>
                    <Redirect from="/*" to="/" />
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;