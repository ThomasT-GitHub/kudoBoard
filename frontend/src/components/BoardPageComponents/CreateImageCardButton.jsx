import { useState } from "react";
import { useParams } from "react-router";
import { addImageCardToBoard, getSixGifsFromGiphy } from "../../../utils/utils";
import './BoardPageComponentStyles/CreateImageCardButton.css'

function CreateImageCardButton() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [gifSearchQuery, setGifSearchQuery] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [gifsFromSearch, setGifsFromSearch] = useState([]);
    const [author, setAuthor] = useState("");
    const [modalShowing, setModalShowing] = useState(false);
    const boardId = useParams().boardId;

    const handlGifSearch = async (event) => {
        event.preventDefault();

        const gifsFromSearch = await getSixGifsFromGiphy(gifSearchQuery);
        setGifsFromSearch(gifsFromSearch);
    }

    const handleImageCardCreation = async () => {
        await addImageCardToBoard(boardId, title, message, imageUrl, author);
    }

    const showModal = () => {
        setModalShowing(!modalShowing);
    }

    return (
        <>
            <button className="CreateImageCardButton-show-modal-button" onClick={showModal}>Create Image Card</button>

            {modalShowing && <section className="CreateImageCardButton-modal">
                <form className="CreateImageCardButton-form">
                    <label>
                        Title:
                        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} required />
                    </label>
                    <label>
                        Message:
                        <input type="text" name="message" onChange={(e) => setMessage(e.target.value)} required />
                    </label>
                    <label>
                        Search Gifs:
                        <input type="text" name="author" onChange={(e) => setGifSearchQuery(e.target.value)} />
                        <button className="CreateImageCardButton-search-gifs" onClick={handlGifSearch}>Search Gifs</button>

                        <section className="CreateImageCardButton-gifs-container">
                            {gifsFromSearch.map((gif, index) => (
                                <img className="CreateImageCardButton-gifs" key={index} src={gif.images.fixed_height.url} width="200" height="200" onClick={(e) => {
                                    setImageUrl(e.target.src);
                                }}></img>
                            ))}
                        </section>
                    </label>
                    <label>
                        Image URL:
                        <input type="text" name="author" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                    </label>
                    <label>
                        Author (OPTIONAL):
                        <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} />
                    </label>
                    <button type="submit" value="Submit" onClick={handleImageCardCreation}>Submit</button>
                </form>
            </section>}

        </>
    );
}

export default CreateImageCardButton
