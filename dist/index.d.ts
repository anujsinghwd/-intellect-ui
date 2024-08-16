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

export { BasicTemplate, Button, Card, Header, HomePage, Input };
