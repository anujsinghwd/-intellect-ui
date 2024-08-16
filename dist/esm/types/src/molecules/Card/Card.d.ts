import React from 'react';
import './Card.css';
interface CardProps {
    title: string;
    content: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
