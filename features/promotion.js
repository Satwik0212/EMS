/**
 * Task 2 – Promotion Probability System
 * Predicts promotion probability based on performance score, tenure, and salary growth.
 * 
 * Example rule:
 * If performance > 8 AND years_in_company > 2 -> Probability increases.
 *
 * @param {number} performanceScore - The current performance score (0-10)
 * @param {number} yearsInCompany - Number of years the employee has been in the company
 * @param {boolean} salaryGrowthNormal - True if salary has grown normally, false if stagnating
 * @returns {number} Promotion Probability percentage (0-100)
 */
export function calculatePromotionProbability(performanceScore, yearsInCompany, salaryGrowthNormal = true) {
    let baseProbability = 20; // Baseline probability

    // Factor 1: Performance Score Weighting
    if (performanceScore >= 9) {
        baseProbability += 40;
    } else if (performanceScore >= 8) {
        baseProbability += 30;
    } else if (performanceScore >= 6) {
        baseProbability += 10;
    } else if (performanceScore < 5) {
        baseProbability -= 15;
    }

    // Factor 2: Years in Company
    if (yearsInCompany >= 4) {
        baseProbability += 25;
    } else if (yearsInCompany >= 2) {
        baseProbability += 15;
    } else if (yearsInCompany < 1) {
        baseProbability -= 10;
    }

    // Factor 3: Salary Growth
    // If an employee is performing well but hasn't had normal salary growth, 
    // their probability for a promotion/adjustment should be higher.
    if (!salaryGrowthNormal && performanceScore >= 7) {
        baseProbability += 15;
    }

    // Cap probability between 0% and 99% (100% is reserved for direct intervention)
    return Math.max(0, Math.min(99, baseProbability));
}
