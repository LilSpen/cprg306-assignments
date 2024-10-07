import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
  let linkStyles = "underline text-cyan-300 hover:text-cyan-100"; // Light blue text with hover effect

  return (
    <main
      style={{
        backgroundColor: "#172544", 
        minHeight: "100vh", 
        padding: "20px",
        paddingTop: "100px",
        paddingLeft: "300px"
      }}
     
    >
      <h1 style={{fontSize: "60px", fontWeight: "bold", color: "cyan"}}>CPRG 306 Assignments</h1> 
      
      <ul> 
        <li><Link href="week-2" className="text-cyan-500 hover:text-indigo-500 hover:underline text-xl">Week 2 Assignment</Link></li>
        <li><Link href="week-3" className="text-cyan-500 hover:text-indigo-500 hover:underline text-xl">Week 3 Assignment</Link></li>
        <li><Link href="week-4" className="text-cyan-500 hover:text-indigo-500 hover:underline text-xl">Week 4 Assignment</Link></li>
        <li><Link href="week-5" className="text-cyan-500 hover:text-indigo-500 hover:underline text-xl">Week 5 - Managed Form</Link></li>
      </ul>
    </main>
  );
}

