import * as React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
  } from "react-router-dom";

import { 
    Collection, 
    Collections
} from './Collection';


export const Photography: React.FunctionComponent<{}> = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            {Collections.map(item => (
                <Route key={item.title} path={`${match.path}/${item.title.toLowerCase().split(' ').join('-')}`}>
                    <Collection {...item}/>
                </Route>
            ))}
        </Switch>
    );
}