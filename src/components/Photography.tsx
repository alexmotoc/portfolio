import * as React from 'react';

import {  
    Collections
} from './Collection';
import { CollectionThumbnail } from './CollectionThumbnail';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

export const Photography: React.FunctionComponent<{}> = () => {
    return (
        <React.Fragment>
            <Container className="photography-container" maxWidth="md">
                <GridList component={Grid} spacing={0} container cellHeight={400} cols={3}>
                    {Collections.map(item => (
                        <CollectionThumbnail key={item.title} {...item} />
                    ))}
                </GridList>
            </Container>
        </React.Fragment>
    );
}