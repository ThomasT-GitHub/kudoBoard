import { useState } from 'react'

function BoardGridSearch() {
    const [boardSearchQuery, setBoardSearchQuery] = useState("");

    const handleBoardSearchChange = (event) => {
        setBoardSearchQuery(event.target.value);
    }

    const handleBoardSearchSubmit = () => {

    }

    const handleBoardSearchClear = () => {
        setBoardSearchQuery("");
    }

    const handleBoardSearchEnter = (event) => {
        if (event.key === 'Enter') {
            handleBoardSearchSubmit();
        }
    }

    return (
        <section className="BoardGrid-Search">
            <input type="text" value={boardSearchQuery} onChange={handleBoardSearchChange} onKeyUp={handleBoardSearchEnter} placeholder="Search" />
            <button onClick={handleBoardSearchSubmit}>Submit</button>
            <button onClick={handleBoardSearchClear}>Clear</button>
        </section>
    );
}

export default BoardGridSearch
