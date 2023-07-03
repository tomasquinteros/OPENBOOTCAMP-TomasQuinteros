import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormTask = ({ addTask }) => {

    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(5, 'Must be 5 characters')
                .max(10, 'Must be 10 characters or less')
                .required('Required'),
        }),
        onSubmit: values => {
            addTask(values.title);
            formik.resetForm();
        },
    });

    return (
        <div>
            <h1>Add New Task!</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Task</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                ) : null}
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}