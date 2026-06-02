// إدارة المظهر (ليلي/نهاري)
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// إدارة المهام
const addTaskForm = document.getElementById('add-task-form');

if (addTaskForm) {
    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title').value;
        const desc = document.getElementById('task-desc').value;
        const date = document.getElementById('task-date').value;

        const newTask = {
            id: Date.now(),
            title,
            desc,
            date
        };

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        alert('تم حفظ المهمة بنجاح!');
        addTaskForm.reset();
        window.location.href = 'tasks.html';
    });
}

// دالة عرض المهام (تُستدعى في صفحة tasks.html)
function displayTasks() {
    const taskListContainer = document.getElementById('task-list');
    const noTasksMsg = document.getElementById('no-tasks');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (tasks.length > 0) {
        if (noTasksMsg) noTasksMsg.style.display = 'none';
        taskListContainer.innerHTML = ''; // مسح المحتوى الحالي

        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item';
            taskElement.innerHTML = `
                <div class="task-info">
                    <h3>${task.title}</h3>
                    <p>${task.desc}</p>
                    <small>التاريخ: ${task.date}</small>
                </div>
                <div class="task-actions">
                    <button onclick="deleteTask(${task.id})">حذف</button>
                </div>
            `;
            taskListContainer.appendChild(taskElement);
        });
    } else {
        if (noTasksMsg) noTasksMsg.style.display = 'block';
        if (taskListContainer) taskListContainer.innerHTML = '';
    }
}

// دالة حذف المهمة
function deleteTask(id) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}
