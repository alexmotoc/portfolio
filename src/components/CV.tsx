import * as React from 'react';

import Container from '@material-ui/core/Container';
import { CVSection, sections } from './CVSection';

export const CV: React.FunctionComponent<{}> = () => {
    return (
        <Container className="portfolio-container" maxWidth="lg">
            <h1>Curriculum Vitae</h1>
            <hr className="hr-medium"/>

            <div>
                {sections.map((section, idx) => (
                    <CVSection key={idx} {...section} />
                ))}
            </div>
        </Container>
    );
};