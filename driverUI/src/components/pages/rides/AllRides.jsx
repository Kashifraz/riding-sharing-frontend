import React from "react";
import RideCard from "./RideCard";

export default function EnrolledCourses (){
    return (
        <div className="py-6 px-40 ">
            <h2 className="text-2xl font-bold mb-2">Enrolled Courses</h2>
            <RideCard />
            <RideCard />
            <RideCard />
            <RideCard />
        </div>
    )
}
