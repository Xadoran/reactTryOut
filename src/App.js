import './App.css';
import Header from './components/Header'; 
import User from './components/User';

const isLoggedIn = true;
const friends = ["Kaan", "Can", "Baran", "Haya", "Çebi", "Sinem"];
const friendss = [
  {
    id: 1,
    name: "Kaan",
    surname: "Dişli"
  },
  {
    id: 2,
    name: "Can",
    surname: "Geniş"
  },
  {
    id: 3,
    name: "Baran",
    surname: "Açıkel"
  },
  {
    id: 4,
    name: "Haya",
    surname: "Mamlouk"
  },
  {
    id: 5,
    name: "Ali Can",
    surname: "Çebi"
  },
  {
    id: 6,
    name: "Sinem",
    surname: "Sevinç"
  }
];


function App(){
  return (
    <>
      <User name="Doruk" surname="Özgenç" age={22} isLoggedIn={isLoggedIn} friends={friendss} address={{title :  "Ataşehir/İstanbul", zip : 34746}} />
    </>
  );
}

export default App;