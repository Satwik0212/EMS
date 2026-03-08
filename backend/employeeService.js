import { db } from "./firebase.js";
import {
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";

/**
 * Adds a new employee to the users collection.
 * @param {Object} employeeData - The employee data to add.
 * @returns {Promise<Object>} The added employee data object including its ID.
 */
export const addEmployee = async (employeeData) => {
    try {
        const docRef = await addDoc(collection(db, "users"), employeeData);
        return { id: docRef.id, ...employeeData };
    } catch (error) {
        console.error("Error adding employee: ", error);
        throw error;
    }
};

/**
 * Gets all employees from the users collection.
 * @returns {Promise<Array<Object>>} A clean array of employee JSON objects.
 */
export const getEmployees = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error getting employees: ", error);
        throw error;
    }
};

/**
 * Fetches a single employee by document ID from the users collection.
 * @param {string} employeeId - The document ID of the employee.
 * @returns {Promise<Object|null>} The employee data object, or null if not found.
 */
export const getEmployeeDetails = async (employeeId) => {
    try {
        const docRef = doc(db, "users", employeeId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("No such employee document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting employee details: ", error);
        throw error;
    }
};

/**
 * Updates employee fields like department or salary in the users collection.
 * @param {string} employeeId - The document ID of the employee to update.
 * @param {Object} updatedData - The specific fields to update.
 * @returns {Promise<Object>} The updated data object payload.
 */
export const updateEmployee = async (employeeId, updatedData) => {
    try {
        const docRef = doc(db, "users", employeeId);
        await updateDoc(docRef, updatedData);
        return { id: employeeId, ...updatedData };
    } catch (error) {
        console.error("Error updating employee: ", error);
        throw error;
    }
};

/**
 * Updates the employee's salary in the users collection AND creates a record in the salary_history collection.
 * @param {string} employeeId - The document ID of the employee.
 * @param {number|string} newSalary - The new salary value.
 * @returns {Promise<Object>} An object containing the history record and the updated salary payload.
 */
export const updateSalary = async (employeeId, newSalary) => {
    try {
        // 1. Update the salary in the users collection
        const userDocRef = doc(db, "users", employeeId);
        await updateDoc(userDocRef, { salary: newSalary });

        // 2. Create a salary_history record
        const historyData = {
            employee_id: employeeId,
            salary: newSalary,
            date: new Date().toISOString(), // or use serverTimestamp() if desired later
        };

        const historyRef = await addDoc(collection(db, "salary_history"), historyData);

        return {
            updatedInUsers: true,
            salaryHistoryId: historyRef.id,
            historyRecord: historyData,
        };
    } catch (error) {
        console.error("Error updating salary: ", error);
        throw error;
    }
};

/**
 * Promotes an employee by updating their role in the users collection AND creating a record in the promotions collection.
 * @param {string} employeeId - The document ID of the employee.
 * @param {string} oldRole - The employee's previous role.
 * @param {string} newRole - The employee's newly promoted role.
 * @returns {Promise<Object>} An object containing the promotion record and verification payload.
 */
export const promoteEmployee = async (employeeId, oldRole, newRole) => {
    try {
        // 1. Update the role in the users collection
        const userDocRef = doc(db, "users", employeeId);
        await updateDoc(userDocRef, { role: newRole });

        // 2. Create a promotions record
        const promotionData = {
            employee_id: employeeId,
            old_role: oldRole,
            new_role: newRole,
            date: new Date().toISOString(),
        };

        const promotionRef = await addDoc(collection(db, "promotions"), promotionData);

        return {
            updatedInUsers: true,
            promotionId: promotionRef.id,
            promotionRecord: promotionData,
        };
    } catch (error) {
        console.error("Error promoting employee: ", error);
        throw error;
    }
};
