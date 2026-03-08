import React from 'react';

const Input = ({ placeholder, type = 'text' }: { placeholder: string, type?: string }) => {
    return (
        <input className="ui-input" type={type} placeholder={placeholder} />
    );
};

export default Input;
