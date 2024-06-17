import Modal from "./modal";
import './exerciseButtons.css';

export default function ExerciseButtons() {
    
    return (
        <section className="exeButton">
            <Modal
                classTag="exeButton-item"
                buttonName="Log Exercise"
                modalContent={`${<></>}`}//This button should display a radio list with possible exercises
            />
            <Modal
                classTag="exeButton-item"
                buttonName="Create Exercise"
                modalContent=
                {`${<>
                    <label htmlFor="exerciseName"> Name of Exercise</label>
                    <input type="text" className="exerciseName" />
                    
                    <label> Type of Exercise</label>
                        <input type="radio" name="cardio" />
                        <label htmlFor="cardio">Cardio</label>
                        <input type="radio" name="strength" />
                        <label htmlFor="strength">Strength</label>
                        <input type="radio" name="sport" />
                        <label htmlFor="sport">Sport</label>
                    
                    <label htmlFor="exerciseMeasurement"> Exercise Measurement</label>
                    <div className="exerciseMeasurement">
                        <input type="checkbox" name="weight" />
                        <label htmlFor="weight">Weight</label>
                        <input type="checkbox" name="time" />
                        <label htmlFor="time">Time</label>
                        <input type="checkbox" name="distance" />
                        <label htmlFor="distance">Distance</label>
                    </div>
                    </>
                    }`}
            />
            <Modal
                classTag="exeButton-item"
                buttonName="Create Routine"
                modalContent={`${<></>}`}//This button should display a checkbox list with all possible exercises
            />
        </section>
    );
};