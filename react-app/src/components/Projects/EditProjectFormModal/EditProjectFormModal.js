import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProject } from "../../../store/projects";

function EditProjectForm({ project, setShowModal }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(project.title);
    const [errors, setErrors] = useState([]);
    const { setShowEditModal } = useEditModal();


    const id = project.id;
    const handleSubmit = async (e) => {
        e.preventDefault();

        const edit_project = {
            title: title,
        }
        const data = await dispatch(editProject(edit_project, id));
        if (data.errors) {
            setErrors(data.errors)
        } else {
            setShowModal(false)
            setShowEditModal(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Title</h2>
                <div>
                    {errors && errors.map((error, ind) => (
                        <div className='error-message' key={ind}>{error}</div>
                    ))}
                </div>
                <input 
                    className="title-input"
                    type='text'
                    name='Name'
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength='255'
                />
                <button className="post-button" type='submit'>Submit</button>
                <button className="post-button" onClick={() => setShowModal(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditProjectForm;
