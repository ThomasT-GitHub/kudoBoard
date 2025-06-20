import { useNavigate } from 'react-router'

function ViewBoardButton({ boardId, boardTitle }) {
    const navigate = useNavigate();

    return (
        <>
            <button className="view-board-button" onClick={() => navigate(`/BoardPage/${boardId}/${boardTitle}`)}>View Board</button>
        </>
    )
}

export default ViewBoardButton
