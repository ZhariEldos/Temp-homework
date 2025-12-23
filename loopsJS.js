let i = 1
while (i <= 10) {
    console.log(String(i))
    i++
}

i = 1
while (i <= 10) {
    if(i == 5) {
        i++
        continue
    }
    console.log(String(i))
    i++
}

i = 1
while (i <= 10) {
    if(i == 8) {
        break
    }
    console.log(String(i))
    i++
}

i = 1
do {
    console.log(String(i))
    i++
} while (i <= 5)
/* В обычном while сначало проверяется условие а уже потом выполняется дейтсвие
в do-while сначало выполняется действие (даже если условие ложное) а уже потом проверяется,
выполнено ли условие. */

let input = prompt()
while (true) {
    if (input == "10") {
        break
    }
    input = prompt()
}

for (let i = 1;i <= 10;i++) {
    console.log(String(i))
}

for (let i = 1;;i++) {
    if (i > 100) {
        break
    }
}

/* Можно впринцепе использовать любой тип цикла для кода, я обычно использую
только while и у меня не было трудностей, которых один цикл был слабее других (кроме do-while) */

for (let i = 10;i > 0;i--) {
    console.log(String(i))
}
for (let i = 1;i <= 10;i++) {
    if ((i % 2) != 0) {
        continue
    }
    console.log(String(i))
}