"use client";

import { useState } from 'react';

export default function Home() {
    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);

    const mockEmployeeData = {
        name: "John Doe",
        department: "Engineering",
        performanceScore: 8.4,
        attendance: 95,
        taskCompletion: 87,
        yearsInCompany: 2,
    };

    const generateReview = async () => {
        setLoading(true);
        try {
            // Calls our secure Next.js API Route instead of using Gemini client-side directly
            const res = await fetch('/api/review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mockEmployeeData)
            });
            const data = await res.json();

            if (data.success) {
                setReview(data.review);
            } else {
                setReview("Error: " + data.error);
            }
        } catch (err) {
            setReview("Request Failed");
        }
        setLoading(false);
    };

    return (
        <main className="min-h-screen p-8 content-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">EMS Admin Dashboard</h1>
            <div className="bg-gray-100 p-4 rounded-md mb-4 text-black">
                <h2 className="font-semibold">Selected Employee: {mockEmployeeData.name}</h2>
                <p>Department: {mockEmployeeData.department}</p>
                <p>Score: {mockEmployeeData.performanceScore}</p>
            </div>

            <button
                onClick={generateReview}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
            >
                {loading ? "Generating AI Review..." : "Generate AI Performance Review"}
            </button>

            {review && (
                <div className="mt-8 p-6 bg-white border rounded shadow text-black whitespace-pre-wrap">
                    <h3 className="font-bold text-lg mb-2">Generated Review</h3>
                    {review}
                </div>
            )}
        </main>
    );
}
