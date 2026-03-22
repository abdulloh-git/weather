export const getTime = (dt) => {
  return new Date().toLocaleString("RU", {
    timeZone: dt,
    hourCycle: "h23",
    timeStyle: "short",
  });
};
