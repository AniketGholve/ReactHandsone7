import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deleteStudent } from "../Slice/Slice";

const Student = () => {
  const data = useSelector((state) => state.studentData.data)
  const Navi = useNavigate();
  const dispatch = useDispatch();
  console.log(data)
  return (
    <>
      <div>
        <div className='heading'>
          <h1 className="text-center">Student Details</h1>
          <button onClick={() => Navi('/addStudent')}>Add New Student</button>
        </div>
        <div className='studentTable'>
          <table className='' border={1} cellPadding={30} style={{ margin: "auto", width: '70%', marginTop: '5%' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) => (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                  <td>{item.batch}</td>
                  <td><Link to={`/editStudent/${key}`}>Edit</Link></td>
                  <td><Link onClick={() => dispatch(deleteStudent(key))}>Delete</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Student