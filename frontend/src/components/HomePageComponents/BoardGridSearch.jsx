import { useState } from 'react'

function BoardGridSearch({ setBoards, setRefreshBoards }) {
    const [boardSearchQuery, setBoardSearchQuery] = useState("");

    const handleBoardSearchChange = (event) => {
        setBoardSearchQuery(event.target.value);
    }

    const handleBoardSearchSubmit = () => {
        setBoards((boards) => boards.filter((board) => board.title.toLowerCase().includes(boardSearchQuery.toLocaleLowerCase())));
    }

    const handleBoardSearchClear = () => {
        setBoardSearchQuery("");

        // Increments refreshBoard value, which causes HomePage to set the boards to defaults
        setRefreshBoards((previousValue) => previousValue + 1);
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
