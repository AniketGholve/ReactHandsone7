import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent } from "../Slice/Slice";

const EditStudent = () => {
  let data = useSelector((state) => state.studentData.data);
  let id = useParams().id;
  const dispatch = useDispatch()
  let Navi = useNavigate();
  let currentData = data[id];
  const formData = {
    name: currentData.name,
    age: currentData.age,
    course: currentData.course,
    batch: currentData.batch
  }
  const handleChange = (e) => {
    formData[e.target.name] = e.target.value
  }
  const submitData = () => {
    formData.id = id;
    console.log(formData)
    dispatch(editStudent(formData))
    Navi('/student');
  }
  return (
    <div className="d-grid">
      <h1 style={{ textAlign: 'center' }}>Edit Student Data</h1>
      <div>
        <label htmlFor="">Name</label>
        <input className="editInput" type="text" name="name" defaultValue={currentData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Age</label>
        <input className="editInput" type="text" name="age" defaultValue={currentData.age} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Course</label>
        <input className="editInput" type="text" name="course" defaultValue={currentData.course} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Batch</label>
        <input className="editInput" type="text" name="batch" defaultValue={currentData.batch} onChange={handleChange} />
      </div>
      <div style={{ margin: 'auto' }}>
        <button onClick={submitData} style={{ margin: '1em' }}>Update</button>
        <button onClick={() => Navi('/student')}>Back</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default EditStudent