import React, { useEffect, useState } from 'react';
import './main.global.scss';
import { Layout } from './Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { PostsContextProvider } from './context/postsContext';

import {  applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MyAction, rootReducer, RootState} from './store/reducer';
import thunk, { ThunkMiddleware } from  'redux-thunk'
import { saveToken } from './store/ token/actions';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Post } from './Post';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, MyAction>)
));

export function App() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])
    
    store.dispatch(saveToken())
    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                        <Layout>
                            <Header />
                            <Content>
                                <Switch>
                                    <Route exact path="/">
                                        <Redirect to="/posts" />
                                    </Route>
                                    <Route path="/auth">
                                        <Redirect to="/posts" />
                                    </Route>
                                    <Route path="/posts">
                                        <CardsList />
                                        <Route path="/posts/:id">
                                            <Post />
                                        </Route>
                                    </Route>
                                </Switch>
                            </Content>
                        </Layout>
                </BrowserRouter>
            )}
        </Provider>
    );
}