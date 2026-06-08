const BASE_URL = "https://webfinalapi.mobydev.kz"

async function deleteNews(id) {
    const authToken = localStorage.getItem("authToken");
    if(!authToken) {
        alert("Необходима авторизация для данного действия");
        return;
    }
    const isConfirmed = confirm("Вы уврены что хотите удалить новость?");
    if(!isConfirmed) {
        return;
    }
    try {
        const response = await fetch(`${BASE_URL}/news/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        if (response.ok) {
            alert("Новость успешно удалена");
            fetchAndRenderNews();
        } else {
            alert('Ошибка при удаление новости')
        }
    } catch (error) {
        console.error('Error at deleting news: ', error)
    }
}

function massiveSearch(array, id) {
    for(key in array) {
        if(array[key].id == id) {
            return array[key].name;
        }
    }
}

async function fetchAndRenderNews() {
    try {
        const response = await fetch(`${BASE_URL}/news`);
        if(!response.ok) throw new Error(`Error: ${response.status}`);
        const newsArray = await response.json();
        const responseCat = await fetch(`${BASE_URL}/categories`);
        if(!responseCat.ok) throw new Error(`Error: ${responseCat.status}`);
        const catArray = await responseCat.json();
        document.querySelector(".news-grid").innerHTML = newsArray.map(news => `
                <article class="news-card">
                    <div class="news-card__image">
                        <img width="200" height="200" src="${BASE_URL}${news.thumbnail.startsWith('/') ? '' : '/'}${news.thumbnail}" alt="${news.title}">
                    </div>
                    <div class="news-card__content">
                        <a class="news-card__link" href="./news.html?id=${news.id}">
                            <h2 class="news-card__title">
                                ${news.title}
                            </h2>
                            <p class="news-card__info">
                                ${news.createdAt} • ${massiveSearch(catArray, news.category.id) || "no category"}
                            </p>
                        </a>
                        <div>
                            <div class="news-card__author">
                                <div class="user">
                                    <div class="user__avatar">
                                        <img src="avatar.svg" alt="avatar">
                                    </div>
                                    <a class="user__name">${news.author.name || "no name"}</a>
                                </div>
                            </div>
                            <div class="news-card__action">
                                <a href="./edit.html?id=${news.id}" class="button button--blue button--small edit">Редактировать</a>
                                <button type="button" class="button button--red button--small" onclick="deleteNews(${news.id})">Удалить</button>
                            </div>
                        </div>
                    </div>
                </article>
            `).join('');
        setupActionButtons();
    } catch (error) {
        console.error('Error at getting news: ', error)
    }
}

function setupActionButtons() {
    const authToken = localStorage.getItem("authToken");
    const headerAuth = document.querySelector(".header__auth");
    if(authToken) {
        headerAuth.innerHTML = `<button class="button button--red" onclick="logout()">Выйти</button>`;
    }
    console.log(authToken);
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
        createButton.onclick = () => (window.location.href = "./create.html");
        document.querySelector(".news-grid").before(createButton);
    }
}

function logout() {
    localStorage.removeItem("authToken");
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderNews();
    displayCreateButton();
});