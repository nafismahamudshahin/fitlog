"use client";
import React, { Dispatch, SetStateAction, useState } from 'react';
interface ISearchProps {
    setSearch: Dispatch<SetStateAction<string>>
}
const SearchWorkout = ({ setSearch }: ISearchProps) => {
    const [searchValue, setSearchValue] = useState<string>("");
    return (
        <div className='flex gap-2'>
            <input onChange={(e) => {
                setSearchValue(e.target.value)
            }} type="text" placeholder="Search.." className="input input-neutral text-white bg-[#15171c]" />
            <button
                type="button"
                onClick={() => {
                    setSearch(searchValue);
                }}
                className="btn bg-lime-400"
            >
                Search
            </button>
        </div>
    );
};

export default SearchWorkout;