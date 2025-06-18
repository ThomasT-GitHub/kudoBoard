const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

/* Board API Endpoints */

// [GET] /api/boards/:boardId
server.get('/api/boards/:boardId', async(req, res, next) => {
    const result = await prisma.board.findUnique({where: {id: Number(req.params.boardId)}});
    res.json(result);
});

// [GET] /api/boards/
server.get('/api/boards/', async(req, res, next) => {

});

// [GET] /api/boards/:boardId/imageCards/
server.get('/api/boards/:boardId/imageCards/', async(req, res, next) => {

});

// [GET] /api/boards/:boardId/imageCards/:imageCardId
server.get('/api/boards/:boardId/imageCards/:imageCardId', async(req, res, next) => {

});

// [POST] /api/boards/
server.post('/api/boards/', async(req, res, next) => {

});

// [DELETE] /api/boards/:boardId
server.delete('/api/boards/:boardId', async(req, res, next) => {

});

module.exports = server
