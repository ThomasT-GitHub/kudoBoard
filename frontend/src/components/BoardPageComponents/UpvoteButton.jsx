import { incrementImageCardUpvotes } from "../../../utils/utils";
import { useState } from "react";

function UpvoteButton({ upvotes, boardId, imageCardId }) {
    const [upvoteCount, setUpvoteCount] = useState(upvotes);
    const handleUpvoteButton = async () => {
        await incrementImageCardUpvotes(boardId, imageCardId);
        setUpvoteCount(upvoteCount + 1);
    }

    return (
        <>
            <button className="upvote-button" onClick={handleUpvoteButton}>Upvote {upvoteCount}</button>
        </>
    );
}

export default UpvoteButton
