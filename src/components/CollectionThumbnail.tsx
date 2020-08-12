import * as React from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';

import { CollectionProps } from './Collection';

export const CollectionThumbnail: React.FunctionComponent<CollectionProps> = (props: CollectionProps) => {
    const history = useHistory();
    const match = useRouteMatch();
    const [showTitle, setShowTitle] = React.useState<boolean>(false);

    const showCollectionTitle = () => {
        setShowTitle(true);
    };

    const hideCollectionTitle = () => {
        setShowTitle(false);
    };

    const handleThumbnailClick = (path: string) => {
        history.push(path);
    }

    return (
        <React.Fragment>
            <GridListTile 
                className="image-tile"
                onClick={() => handleThumbnailClick(`${match.path}/${props.title.toLowerCase().split(' ').join('-')}`)} 
                onMouseEnter={showCollectionTitle} 
                onMouseLeave={hideCollectionTitle} 
                key={props.title} 
                component={Grid} 
                item 
                md={props.thumbnailSize || 4} 
                xs={12} 
                cols={props.thumbnailSize ? props.thumbnailSize / 4 : 1}>
                    <img className="collection-thumbnail" src={props.thumbnail} alt={props.title} />
                    {showTitle && <span className="collection-thumbnail-title">{props.title}</span>}
            </GridListTile>
        </React.Fragment>
    );
}