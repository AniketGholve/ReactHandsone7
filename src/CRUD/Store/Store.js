import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from '../Slice/Slice'
const Store = configureStore({
    reducer: {
        studentData: StudentSlice
    }
})
export default Store;