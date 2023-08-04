import './app.css'
import {Exemplo} from './Exemplo'
export default function App() {
const listaAlunos = ["Moniky", "Ani", "Mari", "Mafer"];
    return (
        <div>
            <h1> Hello World!</h1>
            <Exemplo lista =  {listaAlunos}/>
        </div>
    );
}