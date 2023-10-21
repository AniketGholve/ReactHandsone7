import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../Slice/Slice";

const AddStudent = () => {
  let Navi = useNavigate();
  let dispatch = useDispatch();
  const formData = {
    name: '',
    age: '',
    course: '',
    batch: ''
  }
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  }
  const submitData = () => {
    dispatch(addStudent(formData))
    Navi("/student")
  }
  return (
    <div className="d-grid">
      <h1 style={{ textAlign: 'center' }}>Add Student Data</h1>
      <div>
        <label htmlFor="">Name</label>
        <input className="editInput" placeholder="Enter Name" type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Age</label>
        <input className="editInput" placeholder="Enter Age" type="text" name="age" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Course</label>
        <input className="editInput" placeholder="Enter Couse" type="text" name="course" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Batch</label>
        <input className="editInput" placeholder="Enter Batch" type="text" name="batch" onChange={handleChange} />
      </div>
      <div style={{ margin: 'auto' }}>
        <button onClick={submitData} style={{ margin: '1em' }}>Add Data</button>
        <button onClick={() => Navi('/student')}>Back</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default AddStudent