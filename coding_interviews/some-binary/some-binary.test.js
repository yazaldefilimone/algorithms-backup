import { it, expect, describe } from 'vitest'
import { sumBinary } from './some-binary'

describe("Some Binary", () => {
  it("case #1", () => {
    let input = {
      a: "11", b: "1"
    }
    let output = "100"
    expect(sumBinary(input.a, input.b)).toEqual(output)
  })
  it("case #2", () => {
    let input = {
      a: "1010", b: "1011"
    }
    let output = "10101"
    expect(sumBinary(input.a, input.b)).toEqual(output)
  })
  it("case #3", () => {
    let input = {
      a: "0", b: "0"
    }
    let output = "0"
    expect(sumBinary(input.a, input.b)).toEqual(output)
  })
  it("case #4", () => {
    let input = {
      a: "1", b: "0"
    }
    let output = "1"
    expect(sumBinary(input.a, input.b)).toEqual(output)
  }
  )
  it("case #5", () => {
    let input = {
      a: "1", b: "111"
    }
    let output = '1000'
    expect(sumBinary(input.a, input.b)).toEqual(output)
  }
  )
})