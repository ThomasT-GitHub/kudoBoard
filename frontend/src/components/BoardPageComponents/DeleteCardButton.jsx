import { deleteImageCard } from "../../../utils/utils";
import { useEffect } from "react";

function DeleteCardButton({ imageCardId, boardId, setImageCards }) {

    const handleDeleteImageCard = async () => {
        // Delete the imageCard in the database
        await deleteImageCard(boardId, imageCardId);

        // Delete the imageCard locally
        setImageCards((previousImageCards) => previousImageCards.filter(imageCard => imageCard.id !== imageCardId));
    }

    return (
        <>
            <button className="delete-image-card" onClick={handleDeleteImageCard}>Delete</button>
        </>
    );
}

export default DeleteCardButton
