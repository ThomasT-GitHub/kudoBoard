function BoardGridFilter() {
    const BoardGridFilterOptions = {
        HOME: "Home",
        RECENT: "Recent",
        CELEBRATION: "Celebration",
        THANK_YOU: "Thank you",
        INSPIRATION: "Inspiration"
    };

    const handleBoardGridFilterChange = (event) => {
        const { value } = event.target;

        switch (value) {
            case BoardGridFilterOptions.HOME:

                break;
            case BoardGridFilterOptions.RECENT:

                break;
            case BoardGridFilterOptions.CELEBRATION:

                break;
            case BoardGridFilterOptions.THANK_YOU:

                break;
            case BoardGridFilterOptions.INSPIRATION:

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
