import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
    name: "StudentData",
    initialState: {
        data: [
            {
                name: "Aniket",
                age: "23",
                course: "MERN",
                batch: "October"
            },
            {
                name: "Shubham",
                age: "23",
                course: "MERN",
                batch: "October"
            },
            {
                name: "Rohan",
                age: "23",
                course: "MERN",
                batch: "October"
            },
            {
                name: "Dhanu",
                age: "23",
                course: "MERN",
                batch: "October"
            }
        ]
    },
    reducers: {
        addStudent: (state, action) => {
            state = state.data.push(action.payload)
        },
        editStudent: (state, action) => {
            let id = action.payload.id;
            delete action.payload.id;
            state.data[id] = action.payload
        },
        deleteStudent: (state, action) => {
            state.data = [...state.data.slice(0, action.payload), ...state.data.slice(action.payload + 1)]
        }
    }
})

export const { addStudent, editStudent, deleteStudent } = StudentSlice.actions
export default StudentSlice.reducer;