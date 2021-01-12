const getData = (url) => {
  let timeout = false;
  const value = 5000;

  return new Promise((resolve, reject) => {
    const time = setTimeout(() => {
      timeout = true;
      reject(new Error("Fetch timed out"));
    }, value);

    fetch(url)
      .then((response) => {
        clearTimeout(time);
        if (!timeout) {
          resolve(response.json());
        }
      })
      .catch((e) => {
        if (timeout) return;
        reject(e);
      });
  });
};

export { getData }