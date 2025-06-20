const API_URL = import.meta.env.VITE_API_URL;

/**
 * This function returns a list of boards
 */
export const getBoards = async () => {
    const url = `${API_URL}/boards/`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return Object.values(data);
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function returns a board by its id
 * @param {number} boardId The id of the board to return
 */
export const getBoardById = async (boardId) => {
    const url = `${API_URL}/boards/${boardId}/`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function create a board
 * @param {String} title        The title of the board
 * @param {String} category     The category of the board
 * @param {String} imageSource  The source of the image/gif of the board
 */
export const createBoard = async (title, category, imageSource) => {
    const url = `${API_URL}/boards/`;
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
        },
        body: JSON.stringify({
            title: title,
            category: category,
            imageSource: imageSource
        })
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function deletes a board by its id
 * @param {number} boardId The id of the board to delete
 */
export const deleteBoard = async (boardId) => {
    const url = `${API_URL}/boards/${boardId}/`;
    const options = {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function returns the imageCards associated with a board
 * @param {number} boardId The id of the board to return the imageCards of
 */
export const getImageCardsOfBoard = async (boardId) => {
    const url = `${API_URL}/boards/${boardId}/imageCards/`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function increments the upvotes of an imageCard by 1
 * @param {number} boardId      The id of the board the imageCard belongs to
 * @param {number} imageCardId  The id of the imageCard to have the number of upvotes incremented
 */
export const incrementImageCardUpvotes = async (boardId, imageCardId) => {
    const url = `${API_URL}/boards/${boardId}/imageCards/${imageCardId}/incrementUpvotes/`;
    const options = {
        method: 'PATCH',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function decrements the upvotes of an imageCard by 1
 * @param {number} boardId      The id of the board the imageCard belongs to
 * @param {number} imageCardId  The id of the imageCard to have the number of upvotes decremented
 */
export const decrementImageCardUpvotes = async (boardId, imageCardId) => {
    const url = `${API_URL}/boards/${boardId}/imageCards/${imageCardId}/decrementUpvotes/`;
    const options = {
        method: 'PATCH',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function adds an imageCard to a board
 * @param {number} boardId      The id of the board to add the imageCard to
 * @param {String} title        The title of the image card
 * @param {String} message      The message of the imageCard
 * @param {String} imageSource  The source of the image/gif of the new imageCard
 */
export const addImageCardToBoard = async (boardId, title, message, imageSource) => {
    const url = `${API_URL}/boards/${boardId}/imageCards/`;
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
        },
        body: JSON.stringify({
            title: title,
            message: message,
            imageSource: imageSource
        })
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function deletes an imageCard from a board
 * @param {number} boardId      The id of the board the imageCard belongs to
 * @param {number} imageCardId  The id of the imageCard to delete
 */
export const deleteImageCard = async (boardId, imageCardId) => {
    const url = `${API_URL}/boards/${boardId}/imageCards/${imageCardId}/`;
    const options = {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
    }
}
