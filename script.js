// DOM ELEMENTS

// buttons
const btnOpenModal = document.querySelector("#open-modal-btn")
const btnSortAlphabetically = document.querySelector("#sort-alphabetically-btn")
const btnAddStudent = document.querySelector("#add-student-btn")
const btnFilterByMajor = document.querySelector("#filter-by-major-btn")
// modals
const modalAddStudent = document.querySelector("#add-student-modal")
const modalStudentDetails = document.querySelector("#student-details-modal")
// other
const studentList = document.querySelector("#student-list")
const formAddStudent = document.querySelector("#add-student-form")
const detailsBox = document.querySelector("#details-box")



// ============================================================================ //



// FUNCTIONS

// 1. INITIAL RENDER, SORTING, FILTERING STUDENTS (GET REQUESTS)

const fetchStudents = async (url) => {
// enter code here
}


// 2. FETCHING STUDENT DETAILS (GET REQUEST)

const fetchStudentDetails = async (url) => {
// enter code here
}


// 3. ADDING, DELETING A STUDENT (POST & DELETE REQUESTS)

const addOrDeleteStudent = async (url, studentObject) => {
// enter code here
}



// ============================================================================ //



// EVENT LISTENERS


// Initial render
document.addEventListener("DOMContentLoaded", () => {
// enter code here
})


// Sort students alphabetically button
btnSortAlphabetically.addEventListener("click", () => {
// enter code here
})


// Filter students by major button/select element
btnFilterByMajor.addEventListener("change", (e) => {
// enter code here
})


// Delete a student buttons
studentList.addEventListener("click", (e) => {
// enter code here
})


// Add a student form submit
formAddStudent.addEventListener("submit", (e) => {
// enter code here
})


// Get student details buttons
studentList.addEventListener("click", (e) => {
// enter code here
})


// Add a student modal button
btnOpenModal.addEventListener("click", () => {
    modalAddStudent.style.visibility = "visible"
})


// Close add student modal 
modalAddStudent.addEventListener("click", (e) => {
    if(e.target.id === "add-student-modal" || e.target.className === "close-modal-btn") {
        modalAddStudent.style.visibility = "hidden"
    }
})


// Close student details modal
modalStudentDetails.addEventListener("click", (e) => {
    if(e.target.id === "student-details-modal" || e.target.className === "close-modal-btn") {
        modalStudentDetails.style.visibility = "hidden"
    }
})




