import { boards, cards } from '../../../../backend/data' // Simulates API fetch
import { useParams } from 'react-router'
import CreateImageCardButton from './CreateImageCardButton';


function BoardPage() {
    const { id } = useParams();
    const idAsInt = parseInt(id)
    const board = boards[id];
    const cardBelongingToBoard = Object.values(cards).filter((card) => {
        if (card.boardId === idAsInt)
            return true;
        return false;
    });

    return (
        <section className="BoardPage-view">
            <header className="BoardPage-banner">
                <h1>KUDOBOARD</h1>
                <h2>{board.title}</h2>
                <CreateImageCardButton />
            </header>

            <section className="BoardPage-body">

            </section>

            <footer className="BoardPage-footer">
                Thomas Trivino // Codepath 25
            </footer>
        </section>
    );
}

export default BoardPage
