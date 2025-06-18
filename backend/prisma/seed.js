const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const boards = [
  {
    title: "Welcome Board",
    category: "inspiration",
    author: "jackson",
    imageSource: "https://via.placeholder.com/300x150?text=Welcome+Board",
  },
  {
    title: "Celebration Highlights",
    category: "celebration",
    author: "",
    imageSource: "https://via.placeholder.com/300x150?text=Celebration",
  },
  {
    title: "Thank You Notes",
    category: "thank you",
    author: "thomas",
    imageSource: "https://via.placeholder.com/300x150?text=Thank+You",
  },
  {
    title: "Motivational Quotes",
    category: "inspiration",
    author: "kevi ",
    imageSource: "https://via.placeholder.com/300x150?text=Motivation",
  },
  {
    title: "Team Achievements",
    category: "celebration",
    author: "",
    imageSource: "https://via.placeholder.com/300x150?text=Team+Achievements",
  },
  {
    title: "Appreciation Board",
    category: "thank you",
    author: "jim",
    imageSource: "https://via.placeholder.com/300x150?text=Appreciation",
  },
  {
    title: "Inspiration Wall",
    category: "inspiration",
    author: "bob",
    imageSource: "https://via.placeholder.com/300x150?text=Inspiration+Wall",
  },
  {
    title: "Milestone Moments",
    category: "celebration",
    author: "",
    imageSource: "https://via.placeholder.com/300x150?text=Milestones",
  },
];

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
