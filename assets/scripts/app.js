const addItemBtn = document.getElementById('addBtn');
const userInput = document.getElementById('input');
const entryText = document.getElementById('entry-text');

// let checkbox = document.getElementById("checkbox-input");
/* <input type="checkbox" id="checkbox-input"><label><span></input> */

const items = [];

function renderNewItemElement(id, title) {
  const newItemElement = document.createElement('li');
  newItemElement.innerHTML = `
    <div class="form-check">
      <div class="list-group list-group-flush ">
      <li class="list-group-item bg-success courierNew">${title}</li>
      </div>
      </div>`;
  // newItemElement.addEventListener('click', deleteItemHandler);
  const listRoot = document.getElementById('item-list');
  listRoot.append(newItemElement);
}

function clearInput() {
  userInput.value = '';
}

// function deleteItemHandler(itemId) {
//   let itemIndex = 0;
//   for (const item of items) {
//     if (item.id === itemId) {
//       break;
//     }
//     itemIndex++;
//   }
//   items.splice(itemIndex, 1);
//   // const listRoot = document.getElementById('item-list');
//   // listRoot.children[itemIndex].remove();
// }

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
  renderNewItemElement(newItem.id, newItem.title);
  clearInput();

  
}

addItemBtn.addEventListener('click', addItemHandler);
