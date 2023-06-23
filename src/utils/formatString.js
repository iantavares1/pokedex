export const formatString = (str) => {
  let newStr = `${str[0].toUpperCase()}${str.substring(1)}`

  if (newStr.includes('-')) {
    const hyphenIndex = newStr.indexOf('-')
    if (newStr.length > 9) {
      newStr = `${newStr.slice(0, hyphenIndex)}`
    } else {
      newStr = newStr.replace('-', ' ')
      newStr = `${newStr.slice(0, hyphenIndex + 1)}${newStr
        .slice(hyphenIndex + 1, hyphenIndex + 2)
        .toUpperCase()}${newStr.slice(hyphenIndex + 2, newStr.length)}`
    }
  }
  return newStr
}
