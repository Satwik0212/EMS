import { calculatePromotionProbability } from './promotion.js';

/**
 * Task 3 – Smart Alerts for Admin
 * Creates alerts for the admin dashboard based on employee metrics.
 *
 * Examples:
 * - Employee eligible for promotion
 * - Salary below department average
 * - Performance declining
 * 
 * @param {Object} employee - Employee object
 * @param {number} departmentAverageSalary - The average salary in the department
 * @returns {Array<string>} List of alerts for this employee
 */
export function generateSmartAlerts(employee, departmentAverageSalary) {
    const alerts = [];

    // Alert 1: Promotion Eligibility
    const promoProbability = calculatePromotionProbability(
        employee.performanceScore, 
        employee.yearsInCompany
    );
    
    if (promoProbability >= 75) {
        alerts.push(`${employee.name} is highly eligible for a promotion (${promoProbability}% match).`);
    }

    // Alert 2: Salary below average
    // If salary is less than 90% of the department average
    if (employee.salary < departmentAverageSalary * 0.9) { 
        alerts.push(`${employee.name}'s salary ($${employee.salary}) is significantly below the department average ($${departmentAverageSalary}).`);
    }

    // Alert 3: Performance declining
    // Check if there is a previous score and it has dropped significantly (e.g. by > 1.5 points)
    if (employee.previousPerformanceScore && employee.performanceScore < employee.previousPerformanceScore - 1.5) {
        alerts.push(`Warning: ${employee.name}'s performance has significantly declined recently (from ${employee.previousPerformanceScore} to ${employee.performanceScore}).`);
    }

    return alerts;
}
