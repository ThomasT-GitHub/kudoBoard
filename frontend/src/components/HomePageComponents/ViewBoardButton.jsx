import { useNavigate } from 'react-router'

function ViewBoardButton({ boardId }) {
    const navigate = useNavigate();

    return (
        <>
            <button className="view-board-button" onClick={() => navigate(`/BoardPage/${boardId}`)}>View Board</button>
        </>
    )
}

export default ViewBoardButton
