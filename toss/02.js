function createQueryString(arr) {
  const newPath = []
  for (let i = 0; i < arr.length; i++) {
    const part = arr[i]
    if (part === "...") {
    } else if (part === "..") {
      console.log(newPath)
      newPath.pop()
      console.log(newPath)
    } else {
      newPath.push(part)
    }
  }
  console.log(newPath.join("/"))
}
createQueryString(["/foo", "bar", "baz/asdf", "quux", ".."])
