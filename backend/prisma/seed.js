const { PrismaClient } = require("@prisma/client");

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



async function main() {
  // Seed boards
  for (const board of boards) {
    await prisma.board.create({ data: board });
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
