const addItemBtn = document.getElementById('addBtn');

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

function deleteItemHandler() {}

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
