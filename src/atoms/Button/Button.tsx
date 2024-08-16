import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
