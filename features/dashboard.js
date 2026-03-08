import { calculatePromotionProbability } from './promotion.js';

/**
 * Task 5 – Data Aggregation for Dashboard
 * Computes system statistics for the admin dashboard.
 * 
 * Aggregations:
 * - Total employees
 * - Average salary
 * - Top performer
 * - Employees due for promotion
 *
 * @param {Array<Object>} employees - List of all mapped employee objects
 * @returns {Object} Dashboard metrics to be delivered to the client
 */
export function generateDashboardMetrics(employees) {
    if (!employees || employees.length === 0) {
        return {
            totalEmployees: 0,
            averageSalary: 0,
            topPerformer: null,
            employeesDueForPromotion: 0
        };
    }

    let totalSalary = 0;
    let highestScore = -1;
    let topPerformer = null;
    let eligibleForPromoCount = 0;

    employees.forEach(emp => {
        const perfScore = emp.performanceScore || 0;
        const yearsInCompany = emp.yearsInCompany || 0;
        const salary = emp.salary || 0;

        // 1. Accumulate salary
        totalSalary += salary;

        // 2. Determine top performer
        if (perfScore > highestScore) {
            highestScore = perfScore;
            topPerformer = emp;
        }

        // 3. Count employees due for promotion 
        const promoProbability = calculatePromotionProbability(perfScore, yearsInCompany, emp.salaryGrowthNormal !== false);
        if (promoProbability >= 75) {
            eligibleForPromoCount += 1;
        }
    });

    const averageSalary = totalSalary / employees.length;

    return {
        totalEmployees: employees.length,
        averageSalary: Math.round(averageSalary),
        topPerformer: topPerformer ? { name: topPerformer.name, score: highestScore } : null,
        employeesDueForPromotion: eligibleForPromoCount
    };
}
