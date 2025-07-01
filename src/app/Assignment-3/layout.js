'use clint'
import Link from "next/link";

 const Assignment3Layout = ({ children }) => {
  return (
    <div className="ass-1layout">
      <Link href="/Assignment-3/Question1">
        <button>Question-1</button>
      </Link>
      <Link href="/Assignment-3/Question2">
        <button>Question-2</button>
      </Link>
      <Link href="/Assignment-3/Question3">
        <button>Question-3</button>
      </Link>
      <Link href="/Assignment-3/Question4">
        <button>Question-4</button>
      </Link>
      <Link href="/Assignment-3/Question5">
        <button>Question-5</button>
      </Link>
      <Link href="/Assignment-3/Question6">
        <button>Question-6</button>
      </Link>

      {/* Render the nested page */}
      {children}
    </div>
  );
}
export default Assignment3Layout