const addItemBtn = document.getElementById('addBtn');
const userInput = document.getElementById('input');
const entryText = document.getElementById('entry-text');

const items = [];

function renderNewItemElement(id, title) {
  const newItemElement = document.createElement('li');
  newItemElement.innerHTML = `
      <div>
      <li class="list-group-item">${title}</li>
      </div>`;
  newItemElement.addEventListener('click', deleteItemHandler);
  const listRoot = document.getElementById('item-list');
  listRoot.append(newItemElement);
}



function deleteItemHandler() {
    let itemIndex = 0;
    for (const item of items) {
      if (item.id === itemId) {
        break;
      }
      itemIndex++;
    }
    items.splice(itemIndex, 1);
    const listRoot = document.getElementById('item-list');
    listRoot.children[itemIndex].remove();
}

function addItemHandler() {
  const titleValue = userInput.value;

  if (titleValue.trim() === '') {
    alert('Please enter valid value');
    return;
  }
  const newItem = {
    id: Math.random().toString(),
    title: titleValue,
  };

  items.push(newItem);
}

addItemBtn.addEventListener('click', addItemHandler);
