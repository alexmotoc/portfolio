import * as React from 'react';
import Typed from 'react-typed';

import Container from '@material-ui/core/Container';

export const Home: React.FunctionComponent<{}> = () => {
    return (
        <main className="home">
            <Container className="portfolio-container" maxWidth="md">
                <h1 className="home-title">
                    Hi, I'm Alex <span aria-label="Waving Hand">👋</span>
                </h1>
                <Typed
                    className="home-description"
                    strings={["I code and take photographs."]}
                    typeSpeed={50}
                    />
            </Container>
        </main>
    );
};