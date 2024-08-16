import React, { ReactNode } from 'react';
import Header from '../../organisms/Header/Header';

interface BasicTemplateProps {
    children: ReactNode;
}

const BasicTemplate: React.FC<BasicTemplateProps> = ({ children }) => {
    return (
        <div>
            <Header title="Template Header" />
            <main>{children}</main>
        </div>
    );
};

export default BasicTemplate;
