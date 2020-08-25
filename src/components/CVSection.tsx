import * as React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

interface Event {
    title: string;
    date: string;
    content: string[];
};

interface CVSectionProps {
    title: string;
    alignment: 'left' | 'right';
    icon?: React.ReactElement;
    events: Event[];
};

export const Education: CVSectionProps = {
    title: 'Education',
    alignment: 'left',
    icon: <SchoolIcon />,
    events: [
        {
            title: 'MEng Computer Science, University of Warwick, UK',
            date: 'October 2016 - July 2020',
            content: [
                'Overall mark: 1st (80%)',
                'Modules include: Web Development, Operating Systems and Computer Networks, Database Systems, Algorithms, Cyber Security, Functional Programming, Machine Learning, High Performance Computing, Agent Based Systems'
            ]
        },
        {
            title: '“Radu Negru” National College, Romania',
            date: 'September 2012 - June 2016',
            content: [
                'Ranked as the 1st student in the county with maximum scores in the entry exam',
                'Obtained a Romanian Diploma of Baccalaureate with an overall grade of 9.63 out of 10 (Computer Science 10, Mathematics 9.9, Romanian Literature 9)'
            ]
        }
    ]
};

export const Experience: CVSectionProps = {
    title: 'Experience',
    alignment: 'right',
    icon: <WorkIcon />,
    events: [
        {
            title: 'Lab Tutor, University of Warwick',
            date: 'October 2019 - March 2020',
            content: [
                'Assisted students with completing a robot maze solver (Java) in the first term and a bill splitting web application (PHP) in the second term'
            ]
        },
        {
            title: 'Summer Software Engineer Intern, J.P. Morgan, London',
            date: 'June 2019 - August 2019',
            content: [
                'Built an internal support web tool using React and Tornado. Gained familiarity with using ag-Grid',
                'Implemented customisable heatmapping capabilities to a web application generating risk reports used by traders',
                'Contributed to the J.P. Morgan UI Toolkit which is based on the Material UI React framework and utilised by every application developed within the firm'
            ]
        },
        {
            title: 'Summer Technology Analyst, J.P. Morgan, London',
            date: 'June 2018 - August 2018',
            content: [
                'Built an extensible framework for a data reconciliation tool saving a significant amount of time of manual labor (approx. 3h/migration session)',
                'Developed technical skills by working with Pandas dataframes and learned how to use Python\'s mock object library for unitttesting',
                'Improved presentation & communication skills by participating in daily catch-up sessions and giving demos to a senior audience'
            ]
        },
        {
            title: 'Project Leader, Technology Volunteers, University of Warwick',
            date: 'October 2017 - March 2020',
            content: [
                'Trained volunteers and led weekly classes teaching children Scratch and Arduino',
                'Ran two workshops at Mozfest 2017, a poster session at Scratch@MIT 2018 and a Makey Makey workshop at Mozfest 2019',
                'Organised biweekly CoderDojo sessions at Coventry Transport Museum and Creative Computing sessions at Warwick Arts Centre'
            ]
        }
    ]
};

export const Awards: CVSectionProps = {
    title: 'Awards',
    alignment: 'left',
    icon: <EmojiEventsIcon />,
    events: [
        {
            title: 'Outstanding Overall Performance by a Graduating Student, University of Warwick',
            date: 'July 2020',
            content: [
                'Awarded for obtaining the 3rd highest average mark in the MEng Computer Science course'
            ]
        },
        {
            title: 'DB Campus (1st place), Deutsche Bank',
            date: 'March 2018',
            content: [
                'Took the role of the project manager and collaborated on a team project creating a virtual assistant to assist traders with financial queries',
                'Assisted with software architecture and designed the user interface/experience. Organised sprints and tasks, planned development priorities and kept track of progress',
                'Developed team-working skills and improved flexibility'
            ]
        },
        {
            title: 'First Year Runner Up, Morgan Stanley',
            date: 'October 2017',
            content: [
                'Awarded for ranking 5th in my first university year in terms of overall academic results',
            ]
        }
    ]
};

export const Projects: CVSectionProps = {
    title: 'Projects',
    alignment: 'right',
    icon: <CodeIcon />,
    events: [
        {
            title: 'Live Streaming for Android Devices, Group Dissertation',
            date: 'October 2019 - April 2020',
            content: [
                'Took the role of the Front-End Lead Developer in a team of 6',
                'Built an Android application capable of streaming video and audio to an RTMP server. Implemented third party authentication for Twitch and YouTube using OAuth',
                'Designed a web-based overlay customiser which allowed the user to tweak specific attributes and visualise a live preview of the result'
            ]
        },
        {
            title: 'Behaviour Classification of Distracted Drivers, Individual Dissertation',
            date: 'October 2018 - April 2019',
            content: [
                'Proposed a ResNet architecture trained using transfer learning capable of achieving 95.31% accuracy on the 10-class image classification task',
                'Trained RetinaNet to detect the hands of the driver and implemented an ensemble of models reaching 95.80% accuracy'
            ]
        }
    ]
};

export const sections: CVSectionProps[] = [Education, Experience, Awards, Projects];

export const CVSection: React.FunctionComponent<CVSectionProps> = (props: CVSectionProps) => {
    return (
        <React.Fragment>
            <h2 className="cv-section-header">{props.title}</h2>
            <Timeline align={props.alignment}>
                {props.events.map((event, eventIdx) => (
                    <TimelineItem key={eventIdx}>
                        <TimelineOppositeContent>
                            <p className="cv-date-range no-margin-top">{event.date}</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                {eventIdx === 0 && props.icon}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h3 className="no-margin-top">{event.title}</h3>
                            {event.content.map((item, itemIdx) => (
                                <p key={itemIdx}>• {item}</p>
                            ))}
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </React.Fragment>
    )
}