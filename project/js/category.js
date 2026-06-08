const BASE_URL = "https://webfinalapi.mobydev.kz"

async function fetchAndRenderCategory() {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if(!response.ok) throw new Error(`Error: ${response.status}`);
        const newsArray = await response.json();
        document.querySelector(".category-list").innerHTML = newsArray.map(category => `
                <div class="category">
                    <p>${category.name}</p>
                    <div class="buttons">
                        <a href="./editCategory.html?id=${category.id}" class="button button--blue button--small edit">Редактировать</a>
                        <button type="button" class="button button--red button--small" onclick="deleteNews(${category.id})">Удалить</button>
                    </div>
                </div>
            `).join('');
            setupActionButtons();
    } catch (error) {
        console.error('Error at getting categories: ', error)
    }
}

async function deleteNews(id) {
    const authToken = localStorage.getItem("authToken");
    if(!authToken) {
        alert("Необходима авторизация для данного действия");
        return;
    }
    const isConfirmed = confirm("Вы уврены что хотите удалить категорию?");
    if(!isConfirmed) {
        return;
    }
    try {
        const response = await fetch(`${BASE_URL}/category/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        if (response.ok) {
            alert("категорию успешно удалена");
            fetchAndRenderNews();
        } else {
            alert('Ошибка при удаление категорию')
        }
    } catch (error) {
        console.error('Error at deleting news: ', error)
    }
}

function setupActionButtons() {
    const authToken = localStorage.getItem("authToken");
    const headerAuth = document.querySelector(".header__auth");
    if(authToken) {
        headerAuth.innerHTML = `<button class="button button--red" onclick="logout()">Выйти</button>`;
    }
    //console.log(authToken);
    document.querySelectorAll("a.button--blue.button--small").forEach(link => {
        link.addEventListener("click", event => {
            if(!authToken) {
                event.preventDefault();
                alert("Необходима авторизация для данного действия");
            }
        });
    });
    // document.querySelectorAll(".button.button--red.button--small").forEach(button => {
    //     button.addEventListener("click", () => {
    //         if(!authToken) return alert("Необходима авторизация для данного действия");
    //         deleteNews(button.getAttribute("onclick").match(/\d+/)[0]);
    //     });
    // });
};

function displayCreateButton() {
    if(localStorage.getItem("authToken")) {
        const createButton = document.createElement("button");
        createButton.className = "button button--green button-create";
        createButton.textContent = "+";
        createButton.onclick = () => (window.location.href = "./createCategory.html");
        document.querySelector(".header").after(createButton);
    }
}

function logout() {
    localStorage.removeItem("authToken");
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderCategory();
    displayCreateButton();
});
