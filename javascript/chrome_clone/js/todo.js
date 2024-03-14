const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
//toDo 저장배열
let toDos =[]; //시작할때 localStorage에 있는 값을 가져오기위해 const->let 교체

//리스트 저장 localStage에 저장
function saveToDos() {
    //JSON.stringify -> 자바스크립트 object나 array등 string으로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    
}

//리스트 삭제기능
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}
//리스트 추가기능
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    //append는 마지막에
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//리스트에 내용 작성 기능
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";
    //toDo를 텍스트가 아닌 오브젝트로 저장하기위함
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodo);
    saveToDos();       //newTodo가 array에 저장된 시점에서 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(){

}


//localStorage에서 todos 가져오기

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    //JSON.parse() -> stringd을 array로 변환
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //forEach 배열에 하나씩 꺼내서 함수실행 가능
    parsedToDos.forEach(paintToDo);
}