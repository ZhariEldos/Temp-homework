const authToken = localStorage.getItem("authToken");

const headerAuth = document.querySelector(".header__auth");
if(authToken) {
    headerAuth.innerHTML = `<button class="button button--red" onclick="logout()">Выйти</button>`;
}

document.querySelector('.form-create').addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector(".name-input").value;

    if (!name) {
        alert("Fill all fields");
        return;
    }
    
    const formData = new FormData();
    formData.append('name', name);
    console.log(name);

    try {
        const response = await fetch('https://webfinalapi.mobydev.kz/category', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name": name})
        });

        if (response.ok) {
            alert('Category successfully added');
            window.location.href = './category.html';
        } else {
            alert("Error while adding Category");
        }
    } catch (error) {
        console.error("Error: ", error);
    }
});