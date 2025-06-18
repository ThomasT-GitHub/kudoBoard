import UpvoteButton from './UpvoteButton'
import DeleteCardButton from './DeleteCardButton'
import './BoardPageComponentStyles/Card.css'

function ImageCard({ imageCard }) {
    return (
        <>
            <section className="Card-view">
                <h3 className="Card-title">{imageCard.title}</h3>
                <p className="Card-message">{imageCard.message}</p>
                <section className="Card-image-container">
                    <img className="Card-image" src={imageCard.gif} alt={`${imageCard.title} image`} />
                </section>

                <section className="Card-buttons">
                    <UpvoteButton upvotes={imageCard.upvotes}/>
                    <DeleteCardButton />
                </section>
            </section>
        </>
    );
}

export default ImageCard
