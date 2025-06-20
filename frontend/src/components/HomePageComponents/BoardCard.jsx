import ViewBoardButton from './ViewBoardButton'
import DeleteBoardButton from './DeleteBoardButton'
import './HomePageComponentStyles/BoardCard.css'

function BoardCard({ board, setBoards }) {

    return (
        <>
            <section className="BoardCard-view">
                <img src={board.imageSource} alt={board.title} />
                <h2 className="BoardCard-title">{board.title}</h2>
                <p className="BoardCard-category">{board.category}</p>

                <section className="BoardCard-buttons">
                    <ViewBoardButton boardId={board.id} />
                    <DeleteBoardButton boardId={board.id} setBoards={setBoards} />
                </section>
            </section>
        </>
    )
}

export default BoardCard
