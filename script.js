const addTaskBtn = document.querySelector("#addTaskButton");

const removeElement = (event) => {
  const li = event.target.parentElement;

  const tasklistNode = document.querySelector("#taskList");

  tasklistNode.removeChild(li)
};

addTaskBtn.addEventListener("click", () => {
  const input = document.querySelector("#taskInput");
  const tasklist = document.querySelector("#taskList");

  const li = document.createElement("li")
  li.innerHTML = `<span>- ${input.value}</span> <span onclick="removeElement(event)">X</span>`

  tasklist.appendChild(li);
  input.value = "";
});
