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

    const res = await fetch(url)
    const students = await res.json()

    let html = ""

    students.forEach(student => {
        html+= `
            <div class="student">
                <span class="delete-student">&times</span>
                <h3>${student.name}</h3>
                <p>Major: ${student.major}</p>
                <button class="details-button">Student Details</button>
                <p hidden class="id">${student.id}</p>
            </div>
        `
    })
    
    studentList.innerHTML = html
}


// 2. FETCHING STUDENT DETAILS (GET REQUEST)

const fetchStudentDetails = async (url) => {

    const res = await fetch(url)
    const student = await res.json()

    let html = `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>YOB:</strong> ${student.yob}</p>
            <p><strong>Major:</strong> ${student.major}</p>
            `

    detailsBox.innerHTML = html
}


// 3. ADDING, DELETING A STUDENT (POST & DELETE REQUESTS)

const addOrDeleteStudent = async (url, studentObject) => {

    if (url, studentObject) {

        // this is an add student request
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(studentObject)
        })
        
    } else {

        // this is a delete student request
        fetch(url, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
    }
}



// ============================================================================ //



// EVENT LISTENERS


// Initial render
document.addEventListener("DOMContentLoaded", () => {
    fetchStudents("http://localhost:3000/students")
})


// Sort students alphabetically button
btnSortAlphabetically.addEventListener("click", () => {
    fetchStudents("http://localhost:3000/students?_sort=name")
})


// Filter students by major button/select element
btnFilterByMajor.addEventListener("change", (e) => {
    const major = e.target.value
    fetchStudents(`http://localhost:3000/students?major=${major}`)
})


// Delete a student buttons
studentList.addEventListener("click", (e) => {
    if(e.target.className === "delete-student") {
        const id = e.target.parentElement.querySelector(".id").innerText
        addOrDeleteStudent(`http://localhost:3000/students/${id}`)
    }
})


// Get student details buttons
studentList.addEventListener("click", (e) => {
    if(e.target.className === "details-button") {
       modalStudentDetails.style.visibility = "visible"
       const id = e.target.parentElement.querySelector(".id").innerText
       fetchStudentDetails(`http://localhost:3000/students/${id}`)
    }
})


// Add a student form submit
formAddStudent.addEventListener("submit", (e) => {
    e.preventDefault()

    let student = {
        name: formAddStudent.name.value,
        email: formAddStudent.email.value,
        yob: formAddStudent.yob.value,
        major: formAddStudent.major.value
    }
    addOrDeleteStudent("http://localhost:3000/students", student)
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




