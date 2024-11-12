// Функция для показа выбранного раздела
function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}

// Функция для показа примеров
function showExample(example) {
    const output = document.getElementById("example-output").querySelector("code");
    if (example === "greeting") {
        output.textContent = `print("Hello, World!")`;
    } else if (example === "math") {
        output.textContent = `result = 5 + 3\nprint(result)`;
    } else if (example === "conditionals") {
        output.textContent = `x = 5\ny = 10\nif x < y:\n    print("x is less than y")`;
    }
}

// Функция для показа ответа на вопрос
function showAnswer() {
    const answer = document.getElementById("answer");
    answer.textContent = "Output: x is less than y";
}

// Показать начальный раздел по умолчанию
showSection('introduction');
