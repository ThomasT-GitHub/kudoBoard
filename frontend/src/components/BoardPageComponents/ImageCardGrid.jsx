import ImageCard from "./ImageCard";
import "./BoardPageComponentStyles/CardGrid.css"

function CardGrid({ imageCardBelongingToBoard }) {
    return (
        <>
            <section className="CardGrid-view">
                {imageCardBelongingToBoard.map((imageCard) => {
                    return <ImageCard key={imageCard.id} imageCard={imageCard}/>
                })}
            </section>
        </>
    );
}

export default CardGrid
