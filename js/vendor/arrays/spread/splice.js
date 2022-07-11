function removeItem(items, removable){
  const index = items.indexOf(removable);
  items.splice(index, 1);
  return items;
}
