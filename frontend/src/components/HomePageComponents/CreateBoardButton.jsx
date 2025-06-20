import { createBoard } from "../../../utils/utils";

function CreateBoardButton({ setBoards }) {
    const handleBoardCreation = async (title, category, author) => {
        const createdBoard = await createBoard("hi", "thank you", "dsa");
        console.log(createdBoard)
        setBoards((previousBoards) => [...previousBoards, createdBoard]);
    }

    return (
        <>
            <button className="create-board-button" onClick={handleBoardCreation}>Create Board</button>
        </>
    );
}

export default CreateBoardButton
