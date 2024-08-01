export const formateDate = (date) => {
  const originalDate = new Date(date);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = originalDate.toLocaleDateString("en-US", options);

  return formattedDate;
};
