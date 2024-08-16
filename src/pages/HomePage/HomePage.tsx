import React from 'react';
import Header from '../../organisms/Header/Header';
import Card from '../../molecules/Card/Card';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header title="Welcome to the Home Page" />
            <Card title="Card Title" content="This is the content of the card." />
        </div>
    );
};

export default HomePage;