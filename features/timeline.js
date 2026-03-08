/**
 * Task 4 – Employee Activity Timeline
 * Generates and structures timeline events.
 * 
 * Example outputs:
 * March 2026 – Salary Updated
 * January 2026 – Promoted to Senior Developer
 */

export class EmployeeTimeline {
    constructor() {
        this.events = [];
    }

    /**
     * Adds an event to the employee's timeline.
     * @param {string} eventCategory - 'Salary Updated', 'Promotion', 'Performance Review Completed'
     * @param {string} specificDetails - E.g., 'Promoted to Senior Developer'
     * @param {Date} date - Optional date parameter, defaults to now.
     */
    addEvent(eventCategory, specificDetails, date = new Date()) {
        this.events.push({
            category: eventCategory,
            details: specificDetails,
            date: date,
            timestamp: date.getTime()
        });
        
        // Sort events in descending order (newest first)
        this.events.sort((a, b) => b.timestamp - a.timestamp);
    }

    /**
     * Retrieves the formatted timeline for display.
     * @returns {Array<string>} Formatted timeline event strings
     */
    getFormattedTimeline() {
        return this.events.map(event => {
            // e.g. "March 2026"
            const dateStr = event.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            
            if (event.category === 'Salary Updated') {
                return `${dateStr} – Salary Updated`;
            } else if (event.category === 'Promotion') {
                return `${dateStr} – Promoted to ${event.details}`;
            } else if (event.category === 'Performance Review Completed') {
                return `${dateStr} – Performance Review Completed`;
            } else {
                return `${dateStr} – ${event.category}`;
            }
        });
    }

    /**
     * Retrieves the raw timeline elements for custom UI rendering.
     * @returns {Array<Object>} Timeline event objects
     */
    getRawTimeline() {
        return this.events;
    }
}
