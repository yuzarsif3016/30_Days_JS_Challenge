function createItemManager() {
    let items = []; // private array to store items
  
    return {
      addItem: function(item) {
        items.push(item);
      },
      removeItem: function(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      listItems: function() {
        return items.slice(); // return a copy of the items array
      }
    };
  }
  
  const itemManager = createItemManager();
  
  itemManager.addItem('Apple');
  itemManager.addItem('Banana');
  itemManager.addItem('Orange');
  
  console.log(itemManager.listItems()); // Output: ['Apple', 'Banana', 'Orange']
  
  itemManager.removeItem('Banana');
  
  console.log(itemManager.listItems()); // Output: ['Apple', 'Orange']
  