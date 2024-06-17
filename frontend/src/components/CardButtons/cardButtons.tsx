import Calendar from "react-calendar";
import { useState } from "react";
import './cards.css';
import './calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Cards() {
    const [value, onChange] = useState<Value>(new Date());
    
    return (
        <section className="card-group">
            <article className="card-item calendar-view">
                <Calendar onChange={onChange} value={value}/>
            </article>
            <article className="card-item routine-today">

            </article>
        </section>
  );
};