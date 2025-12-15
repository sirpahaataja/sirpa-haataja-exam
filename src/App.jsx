import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [form, setForm] = useState({aihe:"", paiva:"", muistiinpano:"" });
  const [muistiinpanotListassa, setMuistiinpanotListassa] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("formilta: ", form);

    const muistiinpano = {};
    muistiinpano.id = uuidv4(); 
    muistiinpano.aihe=form.aihe;
    muistiinpano.paiva=form.paiva;
    muistiinpano.muistiinpano=form.muistiinpano;
    
    const uusiLista = muistiinpanotListassa.concat(muistiinpano);

    //console.log("uusi: ",uusiLista);

    setMuistiinpanotListassa(uusiLista);

    setForm({aihe:"", paiva:"", muistiinpano:"" });

    //console.log("listassa: ", muistiinpanotListassa);
  }
  const poista= (id) => {
    // uuid
    //console.log("id poistoon: ", id);
    const uusiLista = muistiinpanotListassa.filter((item) => item.id !== id);
    setMuistiinpanotListassa(uusiLista);

    //console.log(muistiinpanotListassa);
  }

  return (
    <>
      <h1>Osaamispäiväkirja 15.12.2025</h1>
      <div className="formi">
      <form onSubmit={handleSubmit}>
        <label>Aihe: 
          <input type="text" id="aihe" name="aihe" required
          value={form.aihe}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          />
        </label>
         <label>Päivämäärä: 
          <input type="date" id="paiva" name="paiva" required
          value={form.paiva}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          />
        </label>
        <label>Muistiinpano: 
          <textarea id="muistiinpano" name="muistiinpano" required
          value={form.muistiinpano}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          />
        </label>
        <button>Lisää uusi muistiinpano</button>
      </form>
    </div>
      
      <h2>Muistiinpanot:</h2>
          <ul>
            {muistiinpanotListassa.map((item) => (
            <li key={item.id}>
              {item.aihe} &nbsp;
              {item.paiva} &nbsp;
              {item.muistiinpano} &nbsp;
              <button type="button"                
                onClick={() => poista(item.id)}
                > Poista
              </button>
            </li>
          ))} 
          </ul>
    </>
  )
}

export default App
