import { it, expect, describe } from "vitest";
import { tournamentWinner } from "~/coding_interviews/interview-questions/easy/tournament-winner";

const mock_test = [
  {
    competitions: [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    results: [0, 0, 1],
    expect: "Python",
  },

  {
    competitions: [
      ["HTML", "Java"],
      ["Java", "Python"],
      ["Python", "HTML"],
    ],
    results: [0, 1, 1],
    expect: "Java",
  },

  {
    competitions: [
      ["AlgoMasters", "FrontPage Freebirds"],
      ["Runtime Terror", "Static Startup"],
      ["WeC#", "Hypertext Assassins"],
      ["AlgoMasters", "WeC#"],
      ["Static Startup", "Hypertext Assassins"],
      ["Runtime Terror", "FrontPage Freebirds"],
      ["AlgoMasters", "Runtime Terror"],
      ["Hypertext Assassins", "FrontPage Freebirds"],
      ["Static Startup", "WeC#"],
      ["AlgoMasters", "Static Startup"],
      ["FrontPage Freebirds", "WeC#"],
      ["Hypertext Assassins", "Runtime Terror"],
      ["AlgoMasters", "Hypertext Assassins"],
      ["WeC#", "Runtime Terror"],
      ["FrontPage Freebirds", "Static Startup"],
    ],
    results: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    expect: "AlgoMasters",
  },

  {
    competitions: [["A", "B"]],
    results: [0],
    expect: "B",
  },
];

describe("tournamentWinner", () => {
  it("all expects ", () => {
    mock_test.forEach((test) => {
      expect(tournamentWinner(test.competitions, test.results)).toBe(test.expect);
    });
  });
});
