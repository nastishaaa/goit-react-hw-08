import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import ModalDelete from "../ModalDelete/ModalDelete";

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = () => {
        setIsOpen(true); 
    };

    const confirmDelete = () => {
        dispatch(deleteContact(id)); 
        setIsOpen(false); 
    };

    const cancelDelete = () => {
        setIsOpen(false); 
    };

    return (
        <li>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={handleDelete} type="button">Delete</button>

            {isOpen && (
                <ModalDelete 
                    onConfirm={confirmDelete} 
                    onCancel={cancelDelete} 
                />
            )}
        </li>
    );
}
