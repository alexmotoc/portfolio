import * as React from 'react';

import Container from '@material-ui/core/Container';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface CollectionProps {
    title: string;
    description: string;
    images: string[]
};

const BlackLivesMatter: CollectionProps = {
    title: 'Black Lives Matter',
    description: "The Black Lives Matter protests that took place in Leamington Spa in 2020 on June 20th and July 18th. People marched on the streets to fight against racism following George Floyd's death.",
    images: [
        'https://images.unsplash.com/photo-1592686954679-0f3a55e0912c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1592686954597-02034c0cbc8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1592688801069-9c2003d87d60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1592687632657-a5513c20565b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        'https://images.unsplash.com/photo-1592687951900-2f79a48eb863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1592690615642-efd92da3c6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1592814987030-a0248ad7af15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1595089981398-7c7553a4b89f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1595089981351-93dfb02246c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    ]
};

const LeamingtonSpa: CollectionProps = {
    title: 'Leamington Spa',
    description: 'The place I called home for my last year of university. This lovely town allowed me to get my first taste into street photography.',
    images: [
        'https://images.unsplash.com/photo-1595693735777-c5cc6e223283?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1593715868791-b76b61f25dd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1592331693067-2e16a3fae6d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1591982231641-e96f6dff5ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1589974780034-e879c0ac604d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1586295334087-e86c431364c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1585859788077-cbac2c9f9683?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1585859787767-0edca5a57108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1581799848741-f8e7fc0cd5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1578743097957-cd16c0bce394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1578743694200-50741f076b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    ]
};

const VarsityRugby: CollectionProps = {
    title: 'Varsity Rugby',
    description: "The women's and men's rugby matches between Warwick University and Coventry University at the Butts Park Arena that took place during the 19/20 academic year.",
    images: [
        'https://images.unsplash.com/photo-1582546997211-e1d66ede4257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582546996635-dc0640f8eb26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582546997681-3791bf0f0210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582546997727-4ffbdce14ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547221464-cded2221cbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547221292-b5a3e3562dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547221270-75f62358c60c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547221376-05220c0c897b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547221676-44fff7ad6276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547337991-a9c321aff307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547338019-c7959eb09a8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547337995-5a2f0ab76316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547338118-6003aba69e9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547338338-6781e16014dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1582547338246-d3e9552e5a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    ]
};

const Food: CollectionProps = {
    title: 'Food',
    description: 'Despite many finding it time consuming, cooking is an extremely rewarding activity. These are the rare ocassionas when I was patient enough to photograph the end product and not dive straight in.',
    images: [
        'https://images.unsplash.com/photo-1587841424505-4205a6e73ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1587389302738-ba24966817d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1588594304698-929973f189dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    ]
};

const UniversityOfWarwick: CollectionProps = {
    title: 'University of Warwick',
    description: 'A campus university might feel segregated from the rest of the world, but that does not make it any less pretty. This is my take on some of the iconic places that everyone who studied here should recognise.',
    images: [
        'https://images.unsplash.com/photo-1581100923924-7e4e234392ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1579114930376-c25fea4aa9e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1579114930369-7dd4b5e08bc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1575410064085-c38631686a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1572630939696-c6e5e84867e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1568294482044-c15fbef47118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
    ]
};

const Copenhagen: CollectionProps = {
    title: 'Copenhagen',
    description: 'Colourful buildings and lively Christmas markets. While the cold, desaturated tones might not do them enough justice, you will have to take my word for it.',
    images: [
        'https://images.unsplash.com/photo-1575830137428-74cc35757357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1575827845843-fc14605d2794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1575831474368-02cc81ba7b7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1575827629291-44da68ac71f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1575910884848-adf33f3f9fd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1576443181922-781809c4df6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1575910884532-05085e50485e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2667&q=80'
    ]
};

const Covid19: CollectionProps = {
    title: 'Covid-19 Pandemic',
    description: 'A time when every place seemed like a ghost town and even the busiest high streets were completely empty in the middle of the day. The silence presented the perfect opportunity to reflect.',
    images: [
        'https://images.unsplash.com/photo-1589062119833-c2dbba63b3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1586461116078-e2edf63f6ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1586291264909-af62e614e41c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1585166169032-551d4ea843fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1585166169100-f22fe1b7e916?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1586117642595-e09f1f2a1ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    ]
};

export const Collections: CollectionProps[] = [
    BlackLivesMatter, LeamingtonSpa, VarsityRugby, Food, UniversityOfWarwick, Covid19, Copenhagen
];

export const Collection: React.FunctionComponent<CollectionProps> = (props: CollectionProps) => {
    return (
        <Container className="collection-container" maxWidth="sm">
            <h1 className="collection-title">{props.title}</h1>
            <hr className="hr-medium"/>
            <p className="collection-description">{props.description}</p>
            {props.images.map(image => (
                <img key={image} className="collection-image" src={image} />
            ))}
            <div className="back-container">
                <KeyboardBackspaceIcon/>
                <a className="back-text" href="/photography">BACK TO PHOTOGRAPHY</a>
            </div>
        </Container>
    );
}