import { useNavigate } from 'react-router'

function ViewBoardButton({ id }) {
    const navigate = useNavigate();

    return (
        <>
            <button className="view-board-button" onClick={() => navigate(`/BoardPage/${id}`)}>View Board</button>
        </>
    )
}

export default ViewBoardButton
