import React from 'react';

const InsightCard = ({ message }: { message: string }) => {
    return (
        <div className="insight-card">
            <p>{message}</p>
        </div>
    );
};

export default InsightCard;
