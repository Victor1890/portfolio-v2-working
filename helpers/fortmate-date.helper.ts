export const formateDate = (d: Date): string =>  {
    return new Date(d).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      year: "numeric",
      month: "long",
      day: "numeric",
    })
}