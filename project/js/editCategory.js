document.addEventListener("DOMContentLoaded", async () => {
    const authToken = localStorage.getItem("authToken");
    const headerAuth = document.querySelector(".header__auth");

    if(authToken) {
        headerAuth.innerHTML = `<button class="button button--red" onclick="logout()">Выйти</button>`;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get("id");

    if(categoryId) {
        try {
            const response = await fetch(`https://webfinalapi.mobydev.kz/categories/${categoryId}`);
            if(response.ok) {
                const newsData = await response.json();
            
                document.querySelector('.name-input').value = newsData.name;
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

        if (!title) {
            alert("Fill all fields");
            return;
        }
        
        const formData = new FormData();
        formData.append('title', title);

        try {
            const response = await fetch(`https://webfinalapi.mobydev.kz/category/${categoryId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
                body: formData
            });

            if (response.ok) {
                alert('Category successfully edited');
                window.location.href = './category.html';
            } else {
                alert("Error while adding Category");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    });
});
