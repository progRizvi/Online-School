import { useEffect, useState } from "react";

const UseCourses = (data) => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        const url = data;

        setCourses(url);
    }, [data])
    return [courses]
}

export default UseCourses;