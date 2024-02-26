export const csvLink = (csv: string) =>
  `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${csv}.csv`;

export const csvArray = [
  "categories",
  "customers",
  "employees",
  "order_details",
  "orders",
  "products",
  "shippers",
  "suppliers",
  "territories",
  "regions",
];
