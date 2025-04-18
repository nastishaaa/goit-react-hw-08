import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <li>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={handleDelete} type="button">Delete</button>
        </li>
    );
}
