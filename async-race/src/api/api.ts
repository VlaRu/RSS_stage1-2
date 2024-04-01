const url: string = 'http://127.0.0.1:3000';
export const garageUrl: string = `${url}/garage`;
export const engineUrl: string = `${url}/engine`;
export const winnersUrl: string = `${url}/winners`;

export interface Car {
  name: string,
  color: string,
  id?: number,
}

export const getCar = async (carId: number) => (await fetch(`${garageUrl}/${carId}`)).json();

export const getCars = async (page: number = 1 , limit: number = 7) => {
  const response = await fetch(`${garageUrl}?_page=${page}&_limit=${limit}`);
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
}

export const { items: cars , count: carsCount } = await getCars();

export const createCar = async (body: Car) => (await fetch(garageUrl, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();


export const deleteCar = async (carId: number) => (await fetch(`${garageUrl}/${carId}` , {method: 'DELETE'})).json();

export const updateCar = async (id: number, body: Car) => (await fetch(`${garageUrl}/${id}`, {
  method: 'PATCH',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  }
})).json();

