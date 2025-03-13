const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  console.log(date);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day} ${monthNames[month]} ${year} ${hours}:${minutes}`;
};
