const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

/***** Board API Endpoints *****/

// [GET] /api/boards/:boardId
server.get('/api/boards/:boardId', async (req, res, next) => {
    const boardId = Number(req.params.boardId);
    try {
        const selectedBoard = await prisma.board.findUnique({ where: { id: boardId } });
        if (selectedBoard) {
            res.json(selectedBoard);
        } else {
            next({ status: 404, message: `No board found with id ${boardId}!` });
        }
    } catch (err) {
        next(err);
    }
});

// [GET] /api/boards/
server.get('/api/boards/', async (req, res, next) => {
    try {
        const selectedBoards = await prisma.board.findMany();
        if (selectedBoards.length) {
            res.json(selectedBoards);
        } else {
            next({ status: 404, message: `No boards found!` });
        }
    } catch (err) {
        next(err);
    }
});


// [POST] /api/boards/
server.post('/api/boards/', async (req, res, next) => {
    const newBoard = req.body;
    try {
        const newBoardValid = (
            newBoard.imageSource !== undefined &&
            newBoard.title !== undefined &&
            newBoard.category !== undefined
        )
        if (newBoardValid) {
            const createdBoard = await prisma.board.create({ data: newBoard });
            res.json(createdBoard);
        } else {
            next({ status: 422, message: `imageSource, title, and category are required!` });
        }
    } catch (err) {
        next(err);
    }
});

// [DELETE] /api/boards/:boardId
server.delete('/api/boards/:boardId', async (req, res, next) => {
    const boardId = Number(req.params.boardId);
    try {
        const selectedBoard = await prisma.board.findUnique({ where: { id: boardId } });
        if (selectedBoard) {
            const deletedBoard = await prisma.board.delete({ where: { id: boardId } });
            res.json(deletedBoard);
        } else {
            next({ status: 404, message: `No board found with id ${boardId}!` });
        }
    } catch (err) {
        next(err);
    }
});

/***** Card API Endpoints *****/

// [GET] /api/boards/:boardId/imageCards/
server.get('/api/boards/:boardId/imageCards/', async (req, res, next) => {
    const parentBoardId = Number(req.params.boardId);
    try {
        const selectedImageCards = await prisma.imageCard.findMany({ where: { parentBoardId: parentBoardId }, orderBy: {id: "asc"} });
        if (selectedImageCards.length) {
            res.json(selectedImageCards);
        } else {
            next({ status: 404, message: `No imageCards found` });
        }
    } catch (err) {
        next(err);
    }
});

// [GET] /api/boards/:boardId/imageCards/:imageCardId
server.get('/api/boards/:boardId/imageCards/:imageCardId', async (req, res, next) => {
    const parentBoardId = Number(req.params.boardId);
    const imageCardId = Number(req.params.imageCardId);
    try {
        const selectedImageCard = await prisma.imageCard.findUnique({ where: { parentBoardId: parentBoardId, id: imageCardId } });
        if (selectedImageCard) {
            res.json(selectedImageCard);
        } else {
            next({ status: 404, message: `No imageCard matches the search criteria` })
        }
    } catch (err) {
        next(err);
    }
});

// [POST] /api/boards/:boardId/imageCards/
server.post('/api/boards/:boardId/imageCards/', async (req, res, next) => {
    const boardId = Number(req.params.boardId);
    const newImageCard = req.body;
    try {
        const newImageCardValid = (
            newImageCard.title !== undefined &&
            newImageCard.message !== undefined &&
            newImageCard.imageSource !== undefined
        )
        if (newImageCardValid) {
            // Set the parent of the imageCard to be tied to
            newImageCard.parentBoardId = boardId;

            const createdImageCard = await prisma.imageCard.create({ data: newImageCard });
            res.json(createdImageCard);
        } else {
            next({ status: 422, message: `imageSource, title, and message are required!` });
        }
    } catch (err) {
        next(err);
    }
});

// [PATCH] /api/boards/:boardId/imageCards/:imageCardId/incrementUpvotes
server.patch('/api/boards/:boardId/imageCards/:imageCardId/incrementUpvotes', async (req, res, next) => {
    const parentBoardId = Number(req.params.boardId);
    const imageCardId = Number(req.params.imageCardId);
    try {
        const selectedImageCard = await prisma.imageCard.findUnique({ where: { parentBoardId: parentBoardId, id: imageCardId } });
        if (selectedImageCard) {
            const updatedImageCard = await prisma.imageCard.update({
                where: {
                    parentBoardId: parentBoardId,
                    id: imageCardId
                },
                data: {
                    upvotes: { increment: 1 }
                }
            });
            res.json(updatedImageCard);
        } else {
            next({ status: 404, message: `No imageCard matches the search criteria` });
        }
    } catch (err) {
        next(err);
    }
});

// [PATCH] /api/boards/:boardId/imageCards/:imageCardId/decrementUpvotes
server.patch('/api/boards/:boardId/imageCards/:imageCardId/decrementUpvotes', async (req, res, next) => {
    const parentBoardId = Number(req.params.boardId);
    const imageCardId = Number(req.params.imageCardId);
    try {
        const selectedImageCard = await prisma.imageCard.findUnique({ where: { parentBoardId: parentBoardId, id: imageCardId } });
        if (selectedImageCard) {
            const updatedImageCard = await prisma.imageCard.update({
                where: {
                    parentBoardId: parentBoardId,
                    id: imageCardId
                },
                data: {
                    upvotes: { decrement: 1 }
                }
            });
            res.json(updatedImageCard);
        } else {
            next({ status: 404, message: `No imageCard matches the search criteria` });
        }
    } catch (err) {
        next(err);
    }
});

// [DELETE] /api/boards/:boardId/imageCards/:imageCardId
server.delete('/api/boards/:boardId/imageCards/:imageCardId', async (req, res, next) => {
    const parentBoardId = Number(req.params.boardId);
    const imageCardId = Number(req.params.imageCardId);
    try {
        const selectedImageCard = await prisma.imageCard.findUnique({ where: { parentBoardId: parentBoardId, id: imageCardId } });
        if (selectedImageCard) {
            const deletedImageCard = await prisma.imageCard.delete({
                where: { parentBoardId: parentBoardId, id: imageCardId }
            });
            res.json(deletedImageCard);
        } else {
            next({ status: 404, message: `No imageCard found with id ${imageCardId}!` });
        }

    } catch (err) {
        next(err);
    }
});

// [CATCH-ALL]
server.use('/{*any}', (req, res, next) => {
    next({ status: 404, message: 'Not found' });
});

// Error handling middleware
server.use((err, res) => {
    const { message, status = 500 } = err;
    console.log(err);
    res.status(status).json({ message });
});

module.exports = server
