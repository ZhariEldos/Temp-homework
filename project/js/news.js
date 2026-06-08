function getNewsIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

const newsId = getNewsIdFromUrl();
const BASE_URL = "https://webfinalapi.mobydev.kz"

async function fetchAndRenderNewsById(newsId) {
    try {
        const response = await fetch(`${BASE_URL}/news/${newsId}`);
        if(!response.ok) throw new Error(`Error: ${response.status}`);
        const news = await response.json();
        
        document.querySelector('.title-news').textContent = news.title;
        document.querySelector('.user__name').textContent = news.author.name || "noname";
        document.querySelector('.info__date').textContent = new Date (news.createdAt).toLocaleDateString();
        document.querySelector('.info__category').textContent = news.category.name;
        document.querySelector('.news-detail__text').textContent = news.content;
        document.querySelector('.news-image').src = `${BASE_URL}${news.thumbnail}`;
    } catch (error) {
        console.error('Error at getting news: ', error)
    }
}

function logout() {
    localStorage.removeItem("authToken");
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    const newsId = getNewsIdFromUrl();
    const authToken = localStorage.getItem("authToken");
    const headerAuth = document.querySelector(".header__auth");
    if(authToken) {
        headerAuth.innerHTML = `<button class="button button--red" onclick="logout()">Выйти</button>`;
    }
    if(newsId) {
        fetchAndRenderNewsById(newsId);
    } else {
        console.error('News not found by ID')
    }
});