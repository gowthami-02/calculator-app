let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        let expression = display.value;
        let result = Function("return " + expression)();

        display.value = result;

        let historyList = document.getElementById("history-list");
        let li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.prepend(li);
    }
    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event){
    if("0123456789+-*/.%".includes(event.key)){
        appendValue(event.key);
    }
    else if(event.key === "Enter"){
        calculate();
    }
    else if(event.key === "Backspace"){
        deleteLast();
    }
    else if(event.key === "Escape"){
        clearDisplay();
    }
});

document.getElementById("clear-history").addEventListener("click", function(){
    document.getElementById("history-list").innerHTML = "";
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggleBtn.textContent = "☀ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});