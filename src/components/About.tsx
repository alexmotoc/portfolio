import * as React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const About: React.FunctionComponent<{}> = () => {
    const socialMedia = [
        { name: 'Instagram', url: 'https://www.instagram.com/alexmotoc/' }, 
        { name: 'GitHub', url: 'https://github.com/alexmotoc' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alex-motoc/' }
    ];

    return (
        <Container className="portfolio-container about-container" maxWidth="md">
            <h1>About Me</h1>
            <hr className="hr-medium"/>
            <Grid className="about-me-container" container spacing={5}>
                <Grid className="profile-picture-container" item md={6} xs={12}>
                    <img className="profile-picture" src="profile-picture.jpg" alt="Profile"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <p>I am an <strong>MEng Computer Science</strong> graduate from <strong>University of Warwick</strong> who currently works as a <strong>software engineer</strong>.</p>
                    <p>My most notable achievements as a student include:</p>
                    <ul>
                        <li>
                        <strong>Outstanding Overall Performance by a Graduating Student,</strong> 
                        </li>
                        <li>
                        <strong>Warwick Volunteers Certificate of Completion (100 hours as Technology Volunteers Project Leader),</strong>
                        </li>
                        <li>
                        <strong>Deutsche Bank Campus (1st Place),</strong> 
                        </li>
                        <li>
                        <strong>Morgan Stanley Runner Up (Overall Academic Results in 1st Year).</strong>
                        </li>
                    </ul>
                    <p>I am a strong advocate of attention to detail which is an important part of my philosophy when crafting any new product or experience.
                    This complements my willigness to supplement effort to produce better results.
                    </p>
                    <p><strong>Street photography</strong> has become a great passion of mine and now I carry my camera with me almost every where I go.
                    The process of learning more about composition and colour grading encouraged me to contribute my early work to <a className="link" href="https://unsplash.com/@alexmotoc">Unsplash</a> where people can use it for free.
                    My pictures have been seen <strong>95M+</strong> times and downloaded <strong>350K+</strong> times. You can find a selection of my favourite collections in this portfolio.
                    Hope you like them!</p>
                    <div className="location-container">
                        <LocationOnIcon className="location-icon"/>
                        <strong>London, UK</strong>
                    </div>
                </Grid>
                <Grid className="contact-container" item md={12} xs={12}>
                    <h2>Connect</h2>
                    <a href="mailto:alexmotoc97@gmail.com"><EmailIcon className="email-icon"/></a>
                    <hr className="social-media-separator"/>
                    <div>
                        {socialMedia.map(item => (
                            <a key={item.name} href={item.url}><img className="social-media-icon" src={`social-media/${item.name.toLowerCase()}-icon.svg`} alt={`${item.name} Icon`} /></a>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}