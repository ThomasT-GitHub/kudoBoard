import ViewBoardButton from './ViewBoardButton'
import DeleteBoardButton from './DeleteBoardButton'
import './HomePageComponentStyles/BoardCard.css'

function BoardCard({ boardCard }) {

    return (
        <>
            <section className="BoardCard-view">
                <img src={boardCard.imageSource} alt={boardCard.title} />
                <h2 className="BoardCard-title">{boardCard.title}</h2>
                <p className="BoardCard-category">{boardCard.category}</p>

                <section className="BoardCard-buttons">
                    <ViewBoardButton id={boardCard.id} />
                    <DeleteBoardButton id={boardCard.id} />
                </section>
            </section>
        </>
    )
}

export default BoardCard
