import UpvoteButton from './UpvoteButton'
import DeleteCardButton from './DeleteCardButton'
import './BoardPageComponentStyles/Card.css'

function ImageCard({ imageCard, setImageCards }) {
    return (
        <>
            <section className="Card-view">
                <h3 className="Card-title">{imageCard.title}</h3>
                <p className="Card-message">{imageCard.message}</p>
                <section className="Card-image-container">
                    <img className="Card-image" src={imageCard.imageSource} alt={`${imageCard.title} image`} />
                </section>

                <section className="Card-buttons">
                    <UpvoteButton imageCardId={imageCard.id} boardId={imageCard.parentBoardId} upvotes={imageCard.upvotes}/>
                    <DeleteCardButton imageCardId={imageCard.id} boardId={imageCard.parentBoardId} setImageCards={setImageCards} />
                </section>
            </section>
        </>
    );
}

export default ImageCard
