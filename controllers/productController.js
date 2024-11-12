

const data = [
  {
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "qui sunt rem eveniet architecto"
  },
  {
    "id": 2,
    "title": "qui est esse",
    "body": "<h1> hhello </h1>"
  }
]

export const getAllProducts = (req, res) => {
  return res.status(200).json(data);
}
export const createProduct = (req, res) => {
  return res.status(200).json({ message: 'creating product' });
}