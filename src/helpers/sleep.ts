export const sleep = (seconds: number = 1) => {
  console.log(seconds);

  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
