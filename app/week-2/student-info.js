import Link from "next/link";


export default function StudentInfo() {
    return (
        <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{color: "indigo"}}>Evan Spencer</p>
            <p style={{ color: "blue" }}>evan.spencer@edu.sait.ca</p>
            <Link className="text-sky-500 hover:text-indigo-500 hover:underline" href="https://github.com/LilSpen/cprg306-assignments">
                https://github.com
            </Link>
        </main>
    );
}