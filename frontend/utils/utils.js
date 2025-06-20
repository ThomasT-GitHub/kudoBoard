const API_URL = import.meta.env.VITE_API_URL;

/**
 * This function returns a list of boards
 */
export const getBoards = async () => {

}

/**
 * This function returns a board by its id
 * @param {number} boardId The id of the board to return
 */
export const getBoardById = async (boardId) => {

}

/**
 * This function create a board
 * @param {String} title        The title of the board
 * @param {String} category     The category of the board
 * @param {String} imageSource  The source of the image/gif of the board
 */
export const createBoard = async (title, category, imageSource) => {

}

/**
 * This function deletes a board by its id
 * @param {number} boardId The id of the board to delete
 */
export const deleteBoard = async (boardId) => {

}

/**
 * This function returns the imageCards associated with a board
 * @param {number} boardId The id of the board to return the imageCards of
 */
export const getImageCardsOfBoard = async (boardId) => {

}

/**
 * This function increments the upvotes of an imageCard by 1
 * @param {number} boardId      The id of the board the imageCard belongs to
 * @param {number} imageCardId  The id of the imageCard to have the number of upvotes incremented
 */
export const incrementImageCardUpvotes = async (boardId, imageCardId) => {

}

/**
 * This function decrements the upvotes of an imageCard by 1
 * @param {number} boardId      The id of the board the imageCard belongs to
 * @param {number} imageCardId  The id of the imageCard to have the number of upvotes decremented
 */
export const decrementImageCardUpvotes = async (boardId, imageCardId) => {

}

/**
 * This function adds an imageCard to a board
 * @param {number} boardId      The id of the board to add the imageCard to
 * @param {String} title        The title of the image card
 * @param {String} message      The message of the imageCard
 * @param {String} imageSource  The source of the image/gif of the new imageCard
 */
export const addImageCardToBoard = async (boardId, title, message, imageSource) => {

}

/**
 * This function deletes an imageCard from a board
 * @param {number} boardId      The id of the board the imageCard belongs to
 * @param {number} imageCardId  The id of the imageCard to delete
 */
export const deleteImageCard = async (boardId, imageCardId) => {

}
