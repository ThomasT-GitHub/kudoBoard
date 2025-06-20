import ImageCard from "./ImageCard";
import "./BoardPageComponentStyles/CardGrid.css"
import { useState, useEffect } from 'react'
import { getImageCardsOfBoard } from "../../../utils/utils";

function CardGrid({ boardId }) {
    const [imageCards, setImageCards] = useState([]);

    useEffect(() => {
        (async () => {
            const fetchedImageCards = await getImageCardsOfBoard(boardId);
            setImageCards(fetchedImageCards);
        })();
    }, []);

    return (
        <>
            <section className="CardGrid-view">
                {imageCards.map((imageCard) => {
                    return <ImageCard key={imageCard.id} imageCard={imageCard} setImageCards={setImageCards} />
                })}
            </section>
        </>
    );
}

export default CardGrid
