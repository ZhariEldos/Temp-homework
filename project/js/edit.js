const BASE_URL = "https://webfinalapi.mobydev.kz"
document.addEventListener("DOMContentLoaded", async () => {
    const authToken = localStorage.getItem("authToken");
    const headerAuth = document.querySelector(".header__auth");

    if(authToken) {
        headerAuth.innerHTML = `<button class="button button--red" onclick="logout()">Выйти</button>`;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get("id");

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

    if(newsId) {
        try {
            const response = await fetch(`${BASE_URL}/news/${newsId}`);
            if(response.ok) {
                const newsData = await response.json();
            
                document.querySelector('.name-input').value = newsData.title;
                document.querySelector('.content-input').value = newsData.content;
                document.querySelector('.category').value = newsData.category;
            } else {
                alert("Error while loading data");
            }
        } catch (error) {
            console.error('ERROR:', error)
        }
    }

    document.querySelector('.form-create').addEventListener("submit", async (event) => {
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
            const response = await fetch(`${BASE_URL}/news/${newsId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
                body: formData
            });

            if (response.ok) {
                alert('News successfully updated');
                window.location.href = './index.html';
            } else {
                const errorResponse = await response.json()
                alert("Error while updating news: ", errorResponse.message || 'recheck data');
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    });
});
