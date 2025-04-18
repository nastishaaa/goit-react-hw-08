import './App.css';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import { selectIsLoading, selectError } from './redux/contactsSlice'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return(
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      {isLoading && !error && <h3>Loading...</h3>}
      <ContactList />
    </>
  )
}

export default App