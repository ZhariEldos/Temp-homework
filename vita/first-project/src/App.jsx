import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1>Краткое резюме</h1>
			<ul>
				<li>Имя: Елдос</li>
				<li>Фамилия: Жарылгасинов</li>
				<li>Возраст: 17 лет</li>
				<li>Проживает: в Астане</li>
			</ul>
		</>
	)
}

export default App
