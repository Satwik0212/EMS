import { generatePerformanceReview } from './geminiService.js';

const mockEmployeeData = {
    name: "John Doe",
    department: "Engineering",
    performanceScore: 8.4,
    attendance: 95,
    taskCompletion: 87,
    yearsInCompany: 2,
    salary: 70000
};

async function test() {
    console.log("Starting Gemini test for:", mockEmployeeData.name);
    try {
        const review = await generatePerformanceReview(mockEmployeeData);
        console.log("\n--- Generated Review ---\n");
        console.log(review);
        console.log("\n------------------------");
    } catch (err) {
        console.error("Test failed: ", err);
    }
}

test();
