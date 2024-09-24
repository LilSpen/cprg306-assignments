export default function StudentComponentNew({studentObj}) {

    let {studentName, studentAge, address:{city, province}} = studentObj;

    return(
        // <div>
        //     <h3>{studentObj.studentName}</h3>
        //     <p>Age: {studentObj.studentAge}</p>      
        //     <p>{studentObj.address.city} {studentObj.address.province}</p>      
        // </div>
        <div>
            <h3>{studentName}</h3>
            <p>Age: {studentAge}</p>
            <p>{city}</p>
        </div>
    );
}