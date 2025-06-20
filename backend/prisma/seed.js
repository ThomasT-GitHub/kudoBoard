const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const boards =
  [
    {
      title: "Spark of Joy",
      category: "celebration",
      author: "maria",
      imageSource: "https://picsum.photos/seed/sparkjoy/200/300"
    },
    {
      title: "Daily Gratitude",
      category: "thank you",
      author: "eli",
      imageSource: "https://picsum.photos/seed/dailythanks/200/300"
    },
    {
      title: "Bright Ideas",
      category: "inspiration",
      author: "nina",
      imageSource: "https://picsum.photos/seed/brightideas/200/300"
    },
    {
      title: "Cheers to Us",
      category: "celebration",
      author: "lucas",
      imageSource: "https://picsum.photos/seed/cheerstous/200/300"
    },
    {
      title: "Kind Words",
      category: "thank you",
      author: "zoe",
      imageSource: "https://picsum.photos/seed/kindwords/200/300"
    },
    {
      title: "Vision Board",
      category: "inspiration",
      author: "owen",
      imageSource: "https://picsum.photos/seed/visionboard/200/300"
    },
    {
      title: "Moment of Pride",
      category: "celebration",
      author: "ava",
      imageSource: "https://picsum.photos/seed/pridemoment/200/300"
    },
    {
      title: "Shoutout Corner",
      category: "thank you",
      author: "liam",
      imageSource: "https://picsum.photos/seed/shoutcorner/200/300"
    }
  ]
const cards = [
  {

    title: "You Did It!",
    message: "That launch was flawless—huge kudos.",
    imageSource: "https://media.giphy.com/media/xUPGcyi4YxcZp8dWes/giphy.gif",
    upvotes: 14,
    author: "maria",
    parentBoardId: 1
  },
  {

    title: "High Five!",
    message: "Your coordination made it all possible.",
    imageSource: "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif",
    upvotes: 21,
    author: "kevin",
    parentBoardId: 1
  },
  {

    title: "Much Appreciated",
    message: "Always ready to help—thank you!",
    imageSource: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    upvotes: 18,
    author: "eli",
    parentBoardId: 2
  },
  {

    title: "Kindness Wins",
    message: "Your empathy brightens the team.",
    imageSource: "https://media.giphy.com/media/kdHA7ShfTzAXe/giphy.gif",
    upvotes: 27,
    author: "sasha",
    parentBoardId: 2
  },
  {

    title: "Brilliant!",
    message: "Your UX suggestion just made it 10x better.",
    imageSource: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    upvotes: 25,
    author: "nina",
    parentBoardId: 2
  },
  {

    title: "Game Changer",
    message: "We needed that vision. Perfect timing.",
    imageSource: "https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif",
    upvotes: 32,
    author: "jay",
    parentBoardId: 3
  },
  {

    title: "Victory!",
    message: "We’re unstoppable together.",
    imageSource: "https://media.giphy.com/media/l3vR3z8jK4obLIwLu/giphy.gif",
    upvotes: 20,
    author: "lucas",
    parentBoardId: 3
  },
  {

    title: "Pop the Champagne!",
    message: "Let’s celebrate big!",
    imageSource: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
    upvotes: 36,
    author: "maria",
    parentBoardId: 4
  },
  {

    title: "Heartfelt",
    message: "Always there to lend a hand.",
    imageSource: "https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif",
    upvotes: 24,
    author: "zoe",
    parentBoardId: 4
    ,
  },
  {

    title: "So Grateful",
    message: "Your effort matters more than you know.",
    imageSource: "https://media.giphy.com/media/l0HlMGaJ6F3B7Zz9i/giphy.gif",
    upvotes: 29,
    author: "eli",
    parentBoardId: 4
    ,
  },
  {

    title: "Dream Fuel",
    message: "Your roadmap inspired the pivot.",
    imageSource: "https://media.giphy.com/media/3o6fJbnqUu7V2LC5BS/giphy.gif",
    upvotes: 31,
    author: "owen",
    parentBoardId: 4
    ,
  },
  {

    title: "Big Picture Thinker",
    message: "Exactly what we needed at the brainstorm.",
    imageSource: "https://media.giphy.com/media/3o85xoi6nNqJQJ95Qc/giphy.gif",
    upvotes: 38,
    author: "nina",
    parentBoardId: 5
    ,
  },
  {

    title: "Standing Ovation",
    message: "That feature rollout was flawless.",
    imageSource: "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
    upvotes: 35,
    author: "ava",
    parentBoardId: 5
  },
  {

    title: "Showstopper",
    message: "Truly delivered beyond expectations.",
    imageSource: "https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif",
    upvotes: 41,
    author: "lucas",
    parentBoardId: 6
  },
  {

    title: "Solid Support",
    message: "Jumped in when it mattered most.",
    imageSource: "https://media.giphy.com/media/3oKIPvvaugnP88ZyIo/giphy.gif",
    upvotes: 23,
    author: "liam",
    parentBoardId: 6
  },
  {

    title: "Big Help",
    message: "That doc cleanup saved the meeting.",
    imageSource: "https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif",
    upvotes: 19,
    author: "maria",
    parentBoardId: 7
  }
]


async function main() {
  // Seed boards
  for (const board of boards) {
    await prisma.Board.create({ data: board });
  }

  for (const card of cards) {
    await prisma.ImageCard.create({ data: card });
  }

  console.log("Database seeded successfully!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
