import AnalyticCard from "./AnalyticCard";
import { useEffect, useState } from "react";

function AnalyticCards(){
    const [counts, setCounts] = useState({
        students: 0,
        instructors: 0,
        courses: 0
    });

    useEffect(() =>{
        fetch("http://localhost:5000/api/dashboard/counts")
        .then(res => res.json())
        .then(data => setCounts(data))
        .catch(err => console.log(err));
    }, []);

    return(

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <AnalyticCard title="Courses" count={counts.courses} icon="bx bx-book-content"/>
        <AnalyticCard title="Instructors" count={counts.instructors} icon="bx bx-user-circle"/>
        <AnalyticCard title="Students" count={counts.students} icon="bx bx-group"/>
        </div>
    );

}

export default AnalyticCards;