import { useParams } from 'react-router'
import CreateImageCardButton from './CreateImageCardButton';
import ImageCardGrid from './ImageCardGrid'

function BoardPage() {
    const boardId = useParams().boardId;
    const boardTitle = useParams().boardTitle;

    return (
        <section className="BoardPage-view">
            <header className="BoardPage-banner">
                <h1>KUDOBOARD</h1>
                <h2>{boardTitle}</h2>
                <CreateImageCardButton />
            </header>

            <section className="BoardPage-body">
                <ImageCardGrid boardId={boardId} />
            </section>

            <footer className="BoardPage-footer">
                Thomas Trivino // Codepath 25
            </footer>
        </section>
    );
}

export default BoardPage
