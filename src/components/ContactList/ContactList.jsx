import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import c from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/contactsSlice';
export default function ContactList() {
    const visibleContacts = useSelector(selectVisibleContacts )
    return (
        <ul className={c.list}>
            {visibleContacts.map(({ id, name, number }) => (
                <Contact id={id} key={id} name={name} number={number} />
            ))}
        </ul>
    );
}
