import { deleteBoard } from "../../../utils/utils"

function DeleteBoardButton({boardId, setBoards}) {
    const handleDeleteBoard = async () => {
        // Delete the board from the database
        await deleteBoard(boardId);

        // Delete the board locally
        setBoards((previousBoards) => previousBoards.filter(board => board.id !== boardId));
    }

    return (
        <button className="delete-board-button" onClick={handleDeleteBoard}>Delete Board</button>
    )
}

export default DeleteBoardButton
