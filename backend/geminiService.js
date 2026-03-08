import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from 'dotenv';
dotenv.config();

// Initialize the Google Generative AI SDK with the provided API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generates a professional HR performance review using Gemini AI.
 * @param {Object} employeeData - An object containing the employee's performance metrics.
 * @returns {Promise<string>} The generated string containing the review.
 */
export async function generatePerformanceReview(employeeData) {
    try {
        // Select the model. gemini-1.5-flash is the recommended current model for general text tasks,
        // but we can stick to gemini-pro or gemini-1.5-pro as well. Using gemini-1.5-flash as it's standard and fast.
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Write a professional HR performance review for the following employee:

Name: ${employeeData.name}
Department: ${employeeData.department}
Performance Score: ${employeeData.performanceScore}
Attendance: ${employeeData.attendance}%
Task Completion Rate: ${employeeData.taskCompletion}%
Years in Company: ${employeeData.yearsInCompany}
Salary: ${employeeData.salary}

Ensure the tone is constructive, professional, and highlights both achievements and areas for growth based on standard HR practices. Do not include any markdown formatting like bolding or headers, just return a clean string paragraph.
`;

        const result = await model.generateContent(prompt);

        // Attempt to return the text
        return result.response.text();
    } catch (error) {
        console.error("Error generating performance review: ", error);
        throw error;
    }
}
