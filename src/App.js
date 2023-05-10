import app from "./App.module.css";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [tower, setTower] = useState("");
  const [floor, setFloor] = useState("");
  const [conference_room, setConference_room] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(tower && floor && conference_room && comment) {
      console.log(JSON.stringify({tower, floor, conference_room, comment}))
    } else {
      alert("Заполните все поля")
    }
  }

  const handleReset = () => {
    setTower('')
    setFloor('')
    setConference_room('')
    setComment('')
  }

  return (
    <div className={app.app}>
      <form onReset={handleReset} onSubmit={handleSubmit} className={app.form}>
        <Dropdown
          value={tower}
          setValue={(value) => setTower(value)}
          items={["А", "Б"]}
          placeholder="Веберите башню"
        />
        <Dropdown
          value={floor}
          setValue={(value) => setFloor(value)}
          items={[
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
          ]}
          placeholder="Веберите этаж"
        />
        <Dropdown
          value={conference_room}
          setValue={(value) => setConference_room(value)}
          items={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          placeholder="Веберите переговорку"
        />
        <textarea
          className={app.comment}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Напишите комментарий"
        />
        <input className={app.submit} type="submit" value="Отправить"/>
        <input className={app.reset} type="reset" value="Очистить"/>
      </form>
    </div>
  );
}

export default App;
