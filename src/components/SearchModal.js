import React, {useState} from 'react';

function SearchModal({open}) {
    const [search, setSearch] = useState();

    const handleChange = (e)=> {
        setSearch(e.target.value);
    }
    return (
        <div className={open? 'z-50 absolute': 'hidden'}>
            <input
                type="text"
                placeholder='search'
                onChange={handleChange}
                className='rounded-lg shadow focus:outline-none pl-4'
            />
        </div>
    );
}

export default SearchModal;