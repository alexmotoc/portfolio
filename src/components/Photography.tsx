import * as React from 'react';
import clsx from 'clsx';

import Container from '@material-ui/core/Container';

export interface Photograph {
    url: string;
    description: string;
    isLandscape: boolean;
}

const photographs: Photograph[] = [
    {
        url: "https://images.unsplash.com/photo-1601503300242-273458d6d003?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        description: "Lady with umbrella, September 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1600503588578-3f2912e12742?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
        description: "London tour bus, September 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1600362189809-aad4924fbd6a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
        description: "Cote Brasserie, September 2020",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1601675165519-19a19211406d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        description: "French girl smoking, October 2020",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1602147717708-084ef7e39a88?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
        description: "Model photoshoot, October 2020",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1603402081389-44932c386244?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        description: "Beijing Dumpling, October 2020",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1604007130128-b6382d2f16bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
        description: "Lighting a cigarrete, October 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1604448552794-35e02aff5241?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        description: "Applying makeup at a bus stop, November 2020",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1604448552585-3a1b6e2c706d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        description: "Boys' night out, November 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1605221703601-ef077fd1d5aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
        description: "Looking out the bus window, November 2020",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1606042002195-fe09e0216882?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2465&q=80",
        description: "Mysterious figure, November 2020",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1606987783587-a63d60e9d317?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        description: "Rainy night at tube entrance, November 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1607733103881-6d150defdc3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        description: "Looking for directions, December 2020",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1607733103908-16bcd124cb5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        description: "Quick smoking break, December 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1609188732007-7689155af34f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        description: "Enjoying a drink, December 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1609758771476-8054a5e43f58?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
        description: "Coke bottle, December 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1610194342844-633f79244497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3302&q=80",
        description: "BLM protesters, December 2020",
        isLandscape: true,
    },
    {
        url: "https://images.unsplash.com/photo-1611505196799-306646b662d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        description: "Snow at Green Park, January 2021",
        isLandscape: false,
    },
    {
        url: "https://images.unsplash.com/photo-1611505198666-e948d829345e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
        description: "Hello Kitty umbrella, January 2021",
        isLandscape: false,
    },
];

export const Photography: React.FunctionComponent<{}> = () => {
    const [currentPhotoIndex, setCurrentPhoto] = React.useState<number>(0);

    const changePhotograph = () => {
        setCurrentPhoto((currentPhotoIndex + 1) % photographs.length);
    }

    const currentPhoto: Photograph = photographs[currentPhotoIndex];

    return (
        <main className="home">
            <Container className="portfolio-container" maxWidth="md">
                <img 
                    onClick={changePhotograph} 
                    className={clsx({ "photograph-landscape": currentPhoto.isLandscape, "photograph-portrait": !currentPhoto.isLandscape })} 
                    src={currentPhoto.url} />
                <p className="photo-description gotham-light">{currentPhoto.description}</p>
            </Container>
        </main>
    );
}