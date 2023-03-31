import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { CopyToClipboard } from 'react-copy-to-clipboard';


function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState('');
  const [dataCargada, setDataCargada] = useState(false);
  const [click, setClick] = useState(false);

  async function fetching() {
    setClick(true);
    await fetch(`${import.meta.env.VITE_API_URL}/upload-music`, {
			method: 'POST',
			headers: {},
			body: JSON.stringify({
				url,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
				setDataCargada(true);
			});
  }

  const handleCopy = (e) => {
		e.preventDefault();
		e.clipboardData.setData('Text', data.url_direct);
	};

  return (
		<>
			<Header />
			<form className="m-4">
				<div className="input-group">
					<input
						name="url"
						type="text"
						className="form-control"
						id="basic-url"
						aria-describedby="basic-addon3"
						placeholder="Ingrese el link del video de YouTube: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
						onChange={(e) => setUrl(e.target.value)}
					/>
					<button
						className="btn btn-outline-secondary"
						type="button"
						id="inputGroupFileAddon04"
						onClick={fetching}
					>
						<i className="fas fa-upload"></i>
					</button>
				</div>
			</form>
			<main>
				{click ? (
					dataCargada ? (
						<CopyToClipboard text={data.url_direct}>
							<button onClick={alert("Texto Copiado!")}>Copy to clipboard</button>
						</CopyToClipboard>
					) : (
						<h2>Esperando respuesta...</h2>
					)
				) : (
					''
				)}
			</main>
		</>
	);
}

export default App;
