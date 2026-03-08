/**
 * Task 1 – Performance Score Calculation System
 * Calculates employee performance score based on tasks, attendance, and peer reviews.
 * 
 * Formula:
 * Performance Score = (task_completion × 0.5) + (attendance × 0.3) + (peer_review × 0.2)
 *
 * @param {number} taskCompletion - Task completion rate (0-10) or percentage (0-100) normalized to 10.
 * @param {number} attendance - Attendance score (0-10)
 * @param {number} peerReview - Peer review score (0-10)
 * @returns {number} Score between 0–10.
 */
export function calculatePerformanceScore(taskCompletion, attendance, peerReview) {
    if (
        taskCompletion < 0 || taskCompletion > 10 ||
        attendance < 0 || attendance > 10 ||
        peerReview < 0 || peerReview > 10
    ) {
        throw new Error("Inputs must be between 0 and 10. Normalize percentages to a 10-point scale before passing.");
    }

    const score = (taskCompletion * 0.5) + (attendance * 0.3) + (peerReview * 0.2);
    
    // Round to 1 decimal place (e.g., 8.7)
    return Math.round(score * 10) / 10;
}
