let addingTask = document.getElementsByClassName("add-task")[0];
console.log(addingTask);
let to_do = [];
addingTask.addEventListener("click", function () {
  let addnewTask = prompt("+ Add new task", "");
  if (addnewTask.trim() !== "") {
    let addObj = {
      Task: addnewTask,
      Iscomplete: false,
    };
    to_do.push(addObj);
    console.log(to_do);
    render();
  }
});
function render() {
  let container = document.getElementsByClassName("todo-container")[0];
  container.innerHTML = "";
  for (let i = 0; i < to_do.length; ++i) {
    let Task = document.createElement("div");
    Task.classList.add("task");
    if (to_do[i].Iscomplete) {
      Task.classList.add("completed");
    }
    Task.innerHTML = "";
    let firstSpan = document.createElement("span");
    firstSpan.textContent = to_do[i].Task;
    let childdiv = document.createElement("div");
    childdiv.classList.add("actions");
    let editbtn = document.createElement("span");
    editbtn.addEventListener("click", function () {
      let edittest = prompt("Edit your test", to_do[i].Task);
      if (edittest.trim() !== "") {
        to_do[i].Task = edittest;
        render();
      }
    });
    let deletebtn = document.createElement("span");
    deletebtn.addEventListener("click", function () {
      to_do.splice([i], 1);
      render();
    });
    let completebtn = document.createElement("span");
    completebtn.addEventListener("click", function () {
      to_do[i].Iscomplete = !to_do[i].Iscomplete;
      render();
    });
    editbtn.textContent = "Edit";
    deletebtn.textContent = "Delete";
    completebtn.textContent = to_do[i].Iscomplete ? "UNDO" : "Complete";
    Task.appendChild(firstSpan);
    childdiv.appendChild(editbtn);
    childdiv.appendChild(deletebtn);
    childdiv.appendChild(completebtn);
    Task.appendChild(childdiv);
    container.appendChild(Task);
    console.log(Task);
  }
}
