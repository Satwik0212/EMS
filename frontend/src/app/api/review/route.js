import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI SDK with the verified server-side API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
    try {
        // Parse the JSON payload sent by the user (the employee data)
        const employeeData = await request.json();

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Security Fix from CodeRabbit: Do not include salary in the prompt
        const prompt = `Write a professional HR performance review for the following employee:

Name: ${employeeData.name}
Department: ${employeeData.department}
Performance Score: ${employeeData.performanceScore}
Attendance: ${employeeData.attendance}%
Task Completion Rate: ${employeeData.taskCompletion}%
Years in Company: ${employeeData.yearsInCompany}

Ensure the tone is constructive, professional, and highlights both achievements and areas for growth based on standard HR practices. Do not include any markdown formatting like bolding or headers, just return a clean string paragraph.
`;

        const result = await model.generateContent(prompt);
        const reviewText = result.response.text();

        return NextResponse.json({ success: true, review: reviewText });
    } catch (error) {
        console.error("Error generating performance review: ", error);
        return NextResponse.json({ success: false, error: 'Failed to generate review' }, { status: 500 });
    }
}
