import React from 'react';

const ChartCard = ({ title }: { title: string }) => {
    return (
        <div className="chart-card">
            <h3>{title}</h3>
            {/* Chart will go here */}
        </div>
    );
};

export default ChartCard;
