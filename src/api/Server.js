const BASE_URL = 'https://opentdb.com/api.php';

export const getData = async data => {
  return await fetch(`${BASE_URL}?amount=10`).then(res => res.json());
};

export const bookedNaverPay = async data => {
  return await fetch(`${BASE_URL}/booked/naver/pay`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(error => console.log('error:', error));
};
