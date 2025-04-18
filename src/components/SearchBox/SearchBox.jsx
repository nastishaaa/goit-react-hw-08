
import c from './SearchBox.module.css'
import { useId } from "react";
import { useDispatch } from 'react-redux';
import { changeFilter  } from '../../redux/filtersSlice';

export default function SearchBox() {
    const searchId = useId();
    const dispatch = useDispatch();
    
    const handleFilter = (e) => {
        dispatch(changeFilter(e.target.value));
    }
    
    return (
        <div className={c.div}>
            <label>Find contacts by name</label>
            <input className={c.input}
                id={searchId}
                type="text"
                name="search"
                onChange={handleFilter}
            />
        </div>
    );
}
