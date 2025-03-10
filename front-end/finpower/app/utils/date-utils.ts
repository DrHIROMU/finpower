export function formatDateTime(isoString: string) {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, 
  };
  const localTimeString = date.toLocaleString(undefined, options);
  return localTimeString;
}

export function convertDateToUTC(date: string){
  const localDate = new Date(date);
  const utcDateString = localDate.toISOString(); 
  return utcDateString;
}