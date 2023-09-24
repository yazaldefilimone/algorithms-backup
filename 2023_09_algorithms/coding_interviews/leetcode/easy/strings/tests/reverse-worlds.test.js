import { it, expect, describe } from 'vitest'
import { reverseWordsString } from "../reverse-worlds";


describe('reverse-worlds', () => {
  it('should return reversed words', () => {

    expect(reverseWordsString("God Ding")).toBe('doG gniD')
    expect(reverseWordsString("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
    expect(reverseWordsString("")).toBe("")
    expect(reverseWordsString("a")).toBe("a")
  })
})