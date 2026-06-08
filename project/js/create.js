const BASE_URL = "https://webfinalapi.mobydev.kz"
const authToken = localStorage.getItem("authToken");

const headerAuth = document.querySelector(".header__auth");
if(authToken) {
    headerAuth.innerHTML = `<button class="button button--red" onclick="logout()">Выйти</button>`;
}

async function fetchAndRenderCategory() {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if(!response.ok) throw new Error(`Error: ${response.status}`);
        const newsArray = await response.json();
        document.querySelector(".category").innerHTML = newsArray.map(category => `
                <div class="category">
                    <div class="buttons">
                        <option value="${category.id}">${category.name}</option>
                    </div>
                </div>
            `).join('');
    } catch (error) {
        console.error('Error at getting categories: ', error)
    }
}

document.querySelector('.button--blue').addEventListener("click", async (event) => {
    event.preventDefault();

    const title = document.querySelector(".name-input").value;
    const content = document.querySelector(".content-input").value;
    const categoryId = document.querySelector(".category").value;
    const thumbnail = document.querySelector(".cover-input").files[0];

    if (!title || !content || !categoryId || !thumbnail) {
        alert("Fill all fields");
        return;
    }
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('categoryId', categoryId);
    formData.append('thumbnail', thumbnail);

    try {
        const response = await fetch(`${BASE_URL}/news`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': 'application/json'
            },
            body: formData
        });

        if (response.ok) {
            alert('News successfully added');
            window.location.href = './index.html';
        } else {
            alert("Error while adding news");
        }
    } catch (error) {
        console.error("Error: ", error);
    }
});

function logout() {
    localStorage.removeItem("authToken");
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderCategory();
});