import React from 'react';

const Button = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
    return (
        <button className="ui-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
