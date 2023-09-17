
import { it, expect, describe } from 'vitest'

import { optimalFreelancing } from './optimal-freelancing.js'


describe('optimalFreelancing', () => {
  it("test case 1", () => {
    const jobs = [
      { deadline: 2, payment: 100 },
      { deadline: 1, payment: 19 },
      { deadline: 2, payment: 27 },
      { deadline: 1, payment: 25 },
      { deadline: 3, payment: 15 },
    ];
    expect(optimalFreelancing(jobs)).toBe(142);
  })
  it("test case 2", () => {
    const jobs = [
      {
        "deadline": 2,
        "payment": 1
      },
      {
        "deadline": 1,
        "payment": 4
      },
      {
        "deadline": 3,
        "payment": 2
      },
      {
        "deadline": 1,
        "payment": 3
      },
      {
        "deadline": 4,
        "payment": 3
      },
      {
        "deadline": 4,
        "payment": 2
      },
      {
        "deadline": 4,
        "payment": 1
      },
      {
        "deadline": 5,
        "payment": 4
      },
      {
        "deadline": 8,
        "payment": 1
      }
    ]
    expect(optimalFreelancing(jobs)).toBe(16);
  })

  it("test case 3", () => {
    const jobs = [
      {
        "deadline": 1,
        "payment": 1
      },
      {
        "deadline": 2,
        "payment": 1
      },
      {
        "deadline": 3,
        "payment": 1
      },
      {
        "deadline": 4,
        "payment": 1
      },
      {
        "deadline": 5,
        "payment": 1
      },
      {
        "deadline": 6,
        "payment": 1
      },
      {
        "deadline": 7,
        "payment": 1
      },
      {
        "deadline": 8,
        "payment": 1
      },
      {
        "deadline": 9,
        "payment": 1
      },
      {
        "deadline": 10,
        "payment": 1
      }
    ]
    expect(optimalFreelancing(jobs)).toBe(7);
  })
})
