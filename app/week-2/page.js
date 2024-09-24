import StudentInfo from "./student-info";

export default function Page() {
    return (
        <main style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "lightblue" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h2 style={{ color: "purple" }}>Shopping List</h2>
                <StudentInfo/>
            </div>
        </main>
    );
}