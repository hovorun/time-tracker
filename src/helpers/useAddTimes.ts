export const useAddTimes = (startTime: string, endTime: string): string => {
  const times = [0, 0];
  const max = times.length;

  const a: any[] = (startTime || "").split(":");
  const b: any[] = (endTime || "").split(":");

  // normalize time values
  for (let i = 0; i < max; i++) {
    a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i]);
    b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i]);
  }

  // store time values
  for (let i = 0; i < max; i++) {
    times[i] = a[i] + b[i];
  }

  let hours = times[0];
  let minutes = times[1];

  if (minutes >= 60) {
    const h = (minutes / 60) << 0;
    hours += h;
    minutes -= 60 * h;
  }

  return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
};
