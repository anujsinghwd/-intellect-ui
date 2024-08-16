import React from 'react';
import './Header.css';
interface HeaderProps {
    title: string;
    subtitle?: string;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
