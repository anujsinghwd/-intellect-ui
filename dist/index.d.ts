import React, { ReactNode } from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}
declare const Input: React.FC<InputProps>;

interface CardProps {
    title: string;
    content: string;
}
declare const Card: React.FC<CardProps>;

interface HeaderProps {
    title: string;
    subtitle?: string;
}
declare const Header: React.FC<HeaderProps>;

declare const HomePage: React.FC;

interface BasicTemplateProps {
    children: ReactNode;
}
declare const BasicTemplate: React.FC<BasicTemplateProps>;

declare const fetchData: (url: string) => Promise<unknown>;

declare const logError: (error: Error) => void;
declare const logInfo: (message: string) => void;

declare const formatDate: (date: Date) => string;
declare const capitalize: (text: string) => string;

export { BasicTemplate, Button, Card, Header, HomePage, Input, capitalize, fetchData, formatDate, logError, logInfo };
