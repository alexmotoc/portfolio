import * as React from 'react';

import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

export const CV: React.FunctionComponent<{}> = () => {
    return (
        <Container className="portfolio-container" maxWidth="md">
            <h1>CV</h1>
            <hr className="hr-medium"/>

            <div>
                <h2 className="cv-section-header">Education</h2>
                <Timeline align="left">
                    <TimelineItem>
                    <TimelineOppositeContent>
                        <p className="cv-date-range no-margin-top">October 2016 - July 2020</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3 className="no-margin-top">MEng Computer Science, University of Warwick, UK</h3>
                        <p>
                        • Overall mark: 1st (80%)
                        </p>
                        <p>
                        • Modules include: Web Development, Operating Systems and Computer Networks, Database Systems, Algorithms, 
                        Cyber Security, Functional Programming, Machine Learning, High Performance Computing, Agent Based Systems
                        </p>
                    </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                    <TimelineOppositeContent>
                        <p className="cv-date-range no-margin-top">September 2012 - June 2016</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3 className="no-margin-top">“Radu Negru” National College, Romania</h3>
                        <p>
                        • Ranked as the 1st student in the county with maximum scores in the entry exam
                        </p>
                        <p>
                        • Obtained a Romanian Diploma of Baccalaureate with an overall grade of 9.63 out of 10 
                        (Computer Science 10, Mathematics 9.9, Romanian Literature 9)
                        </p>
                    </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </Container>
    );
};