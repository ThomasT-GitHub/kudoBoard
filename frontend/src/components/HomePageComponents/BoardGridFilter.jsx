import { getBoards } from "../../../utils/utils";

function BoardGridFilter({ boards, setBoards, setRefreshBoards }) {

    const BoardGridFilterOptions = {
        HOME: "home",
        RECENT: "recent",
        CELEBRATION: "celebration",
        THANK_YOU: "thank you",
        INSPIRATION: "inspiration"
    };

    const handleBoardGridFilterChange = async (event) => {
        // Gets all of the boards so we can filter them
        const allBoards = await getBoards();

        const { value } = event.target;
        switch (value) {
            case BoardGridFilterOptions.HOME:
                // Increments refreshBoard value, which causes HomePage to set the boards to defaults
                setRefreshBoards((previousValue) => previousValue + 1);
                break;
            case BoardGridFilterOptions.RECENT:
                setBoards(allBoards.filter((board) => board.category === "Recent"));
                break;
            case BoardGridFilterOptions.CELEBRATION:
                setBoards(allBoards.filter((board) => board.category.toLowerCase() === BoardGridFilterOptions.CELEBRATION));
                break;
            case BoardGridFilterOptions.THANK_YOU:
                setBoards(allBoards.filter((board) => board.category.toLowerCase() === BoardGridFilterOptions.THANK_YOU));
                break;
            case BoardGridFilterOptions.INSPIRATION:
                setBoards(allBoards.filter((board) => board.category.toLowerCase() === BoardGridFilterOptions.INSPIRATION));
                break;
        }
    }

    return (
        <select name="BoardGrid-Filter" onChange={handleBoardGridFilterChange}>
            <optgroup label="Filter">
                <option value={BoardGridFilterOptions.HOME}>Home</option>
                <option value={BoardGridFilterOptions.RECENT}>Recent</option>
                <option value={BoardGridFilterOptions.THANK_YOU}>Thank you</option>
                <option value={BoardGridFilterOptions.CELEBRATION}>Celebration</option>
                <option value={BoardGridFilterOptions.INSPIRATION}>Inspiration</option>
            </optgroup>
        </select>
    );
}

export default BoardGridFilter
