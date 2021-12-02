export const filterBySearch = (item, query) => item.toLowerCase().includes(query.toLowerCase());

export const filterByCategory = (item, category) => item.includes(category.toLowerCase());
