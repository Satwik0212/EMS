/**
 * Task 6 – Department Analytics System
 * Analyzes employee data department-wise.
 * 
 * @param {Array<Object>} employees - List of employee objects
 * @returns {Object} Department analytics containing employees count, avg salary, and avg performance
 */
export function generateDepartmentAnalytics(employees) {
    if (!employees || employees.length === 0) return {};

    const deptMap = {};

    employees.forEach(emp => {
        const dept = emp.department || 'Unknown';
        if (!deptMap[dept]) {
            deptMap[dept] = { count: 0, totalSalary: 0, totalScore: 0 };
        }

        deptMap[dept].count += 1;
        deptMap[dept].totalSalary += (emp.salary || 0);
        deptMap[dept].totalScore += (emp.performanceScore || 0);
    });

    const analytics = {};
    for (const [dept, data] of Object.entries(deptMap)) {
        analytics[dept] = {
            employees: data.count,
            averageSalary: Math.round(data.totalSalary / data.count),
            averagePerformanceScore: Number((data.totalScore / data.count).toFixed(1))
        };
    }

    return analytics;
}

/**
 * Task 7 – Top Performer Detection System
 * Automatically identifies top performing employees.
 * 
 * @param {Array<Object>} employees - List of employee objects
 * @param {number} topN - Number of top performers to return
 * @returns {Array<Object>} List of top performing employees
 */
export function getTopPerformers(employees, topN = 5) {
    if (!employees || employees.length === 0) return [];

    // Sort descending based on performanceScore, then attendance, then taskCompletionRate
    const sorted = [...employees].sort((a, b) => {
        const scoreA = a.performanceScore || 0;
        const scoreB = b.performanceScore || 0;
        if (scoreB !== scoreA) return scoreB - scoreA;

        const attA = a.attendance || 0;
        const attB = b.attendance || 0;
        if (attB !== attA) return attB - attA;

        const taskA = a.taskCompletionRate || 0;
        const taskB = b.taskCompletionRate || 0;
        return taskB - taskA;
    });

    return sorted.slice(0, topN).map(emp => ({
        name: emp.name,
        performanceScore: emp.performanceScore || 0
    }));
}

/**
 * Task 8 – Salary Growth Analyzer
 * Analyzes salary progression of employees.
 * Tracks growth percentage, fastest growth, and stagnant salaries.
 * 
 * @param {Array<Object>} employees - List of employee objects 
 * @returns {Object} Dictionary with individual growth statuses and grouped metrics
 */
export function calculateSalaryGrowth(employees) {
    if (!employees || employees.length === 0) return { individualMetrics: [], fastestGrowth: [], stagnantSalaries: [] };
    
    const individualMetrics = employees.map(employee => {
        const currentSalary = employee.salary || 0;
        const initialSalary = employee.initialSalary || currentSalary;
        const yearsInCompany = employee.yearsInCompany || 1;

        let growthPercentage = 0;
        if (initialSalary > 0) {
            growthPercentage = ((currentSalary - initialSalary) / initialSalary) * 100;
        }

        let status = 'Normal Growth';
        if (growthPercentage >= 20) {
            status = 'Fast Growth';
        } else if (yearsInCompany >= 2 && growthPercentage < 5) {
            status = 'Stagnant Salary';
        }

        return {
            name: employee.name,
            growthPercentage: Math.round(growthPercentage),
            yearsInCompany,
            status
        };
    });

    // Find fastest growth employees (e.g. status == 'Fast Growth' sorted by highest %)
    const fastestGrowth = [...individualMetrics]
        .filter(m => m.status === 'Fast Growth')
        .sort((a, b) => b.growthPercentage - a.growthPercentage);

    // Find stagnant salaries
    const stagnantSalaries = individualMetrics
        .filter(m => m.status === 'Stagnant Salary');

    return {
        individualMetrics,
        fastestGrowth,
        stagnantSalaries
    };
}


/**
 * Helper to get salary growth for single employee (Used internally & in frontend)
 */
export function getSingleEmployeeSalaryGrowth(employee) {
    const metrics = calculateSalaryGrowth([employee]);
    return metrics.individualMetrics[0];
}

/**
 * Task 9 – Promotion Readiness Indicator
 * Evaluates whether an employee is ready for promotion.
 * 
 * @param {Object} employee - Employee object
 * @returns {string} Promotion Readiness Status
 */
export function checkPromotionReadiness(employee) {
    const score = employee.performanceScore || 0;
    const yearsInRole = employee.yearsInRole || employee.yearsInCompany || 0;
    
    // Check consistent salary growth
    const growthMetrics = getSingleEmployeeSalaryGrowth(employee);
    const hasStagnantSalary = growthMetrics.status === 'Stagnant Salary';

    if (score >= 8 && yearsInRole >= 1.5 && !hasStagnantSalary) {
        return 'Ready for Promotion';
    } else if (score >= 8 && yearsInRole >= 1.5 && hasStagnantSalary) {
        return 'Ready for Promotion'; // Can still be ready but maybe requires raise instead
    } else if (score >= 6 || (score >= 8 && yearsInRole < 1.5)) {
        return 'Needs Improvement';
    } else {
        return 'Not Eligible Yet';
    }
}

/**
 * Task 10 – Employee Ranking System
 * Ranks employees based on performance, attendance, and task completion.
 * 
 * @param {Array<Object>} employees - List of employee objects
 * @returns {Array<Object>} Ranked employee list
 */
export function calculateEmployeeRanking(employees) {
    if (!employees || employees.length === 0) return [];

    const sorted = [...employees].sort((a, b) => {
        // Primary: Performance Score
        const scoreA = a.performanceScore || 0;
        const scoreB = b.performanceScore || 0;
        if (scoreB !== scoreA) return scoreB - scoreA;

        // Secondary: Task Completion Rate
        const taskA = a.taskCompletionRate || 0;
        const taskB = b.taskCompletionRate || 0;
        if (taskB !== taskA) return taskB - taskA;

        // Tertiary: Attendance
        const attA = a.attendance || 0;
        const attB = b.attendance || 0;
        return attB - attA;
    });

    return sorted.map((emp, index) => ({
        rank: index + 1,
        name: emp.name,
        performanceScore: emp.performanceScore || 0,
        taskCompletionRate: emp.taskCompletionRate || 0,
        attendance: emp.attendance || 0
    }));
}
