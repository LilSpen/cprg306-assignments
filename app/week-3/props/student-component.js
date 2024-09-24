export default function StudentComponent({sName, sAge, sCity, sProvince}) {

    return(
        <div className="bg-red-400 border border-yellow-600 p-5 my-5 mx-10">
            <h3>{sName}</h3>
            <p>Age: {sAge} </p>
            <p>{sCity}, {sProvince} </p>
        </div>
    );
}