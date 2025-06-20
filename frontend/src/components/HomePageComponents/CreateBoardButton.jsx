import { useState } from "react";
import { createBoard } from "../../../utils/utils";
import './HomePageComponentStyles/CreateBoardButton.css'

function CreateBoardButton() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [modalShowing, setModalShowing] = useState(false);

    const handleBoardCreation = async () => {
        // Update the board remotely
        await createBoard(title, category, author);
    }

    const showModal = () => {
        setModalShowing(!modalShowing);
    }

    return (
        <>
            <button className="CreateBoardButton-show-modal-button" onClick={showModal}>Create Board</button>
            {modalShowing && <section className="CreateBoardButton-modal">
                <form className="CreateBoardButton-form" onSubmit={handleBoardCreation}>
                    <button className="CreateBoardButton-close-modal-button" onClick={showModal}>X</button>
                    <label>
                        Title:
                        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} required />
                    </label>
                    <label>
                        Category:
                        <input type="text" name="category" onChange={(e) => setCategory(e.target.value)} required />
                    </label>
                    <label>
                        Author (OPTIONAL):
                        <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </section>}

        </>
    );
}

export default CreateBoardButton
