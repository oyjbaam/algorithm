function createQueryString(obj) {
  const queryString = Object.keys(obj)
    .filter((key) => obj[key] !== null && obj[key] !== undefined)
    .map((key) => {
      const value = obj[key]
      if (Array.isArray(value)) {
        return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join("&")
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .join("&")
  console.log(queryString ? `?${queryString}` : "")
  return queryString ? `?${queryString}` : ""
}
createQueryString({ foo: "this is test" })
