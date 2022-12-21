export const getData = async () => {
  return await fetch(`https://opentdb.com/api.php?amount=10`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};
