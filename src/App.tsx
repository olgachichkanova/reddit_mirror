import React from 'react';
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

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, MyAction>)
));

export function App() {
    
    store.dispatch(saveToken())
    return (
        <Provider store={store}>
            <PostsContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <CardsList />
                    </Content>
                </Layout>
            </PostsContextProvider>
        </Provider>
    );
}