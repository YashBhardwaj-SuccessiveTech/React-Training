import Link from "next/link";

export default function Assignment1Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="ass-2layout">
          <Link href="/Assignment-2/Question1">
            <button>Question-1</button>
          </Link>
          <Link href="/Assignment-2/Question2">
            <button>Question-2</button>
          </Link>
          <Link href="/Assignment-2/Question3">
            <button>Question-3</button>
          </Link>
          <Link href="/Assignment-2/Question4">
            <button>Question-4</button>
          </Link>
          <Link href="/Assignment-2/Question5">
            <button>Question-5</button>
          </Link>
          <Link href="/Assignment-2/Question6">
            <button>Question-6</button>
          </Link>
          <Link href="/Assignment-2/Question7">
            <button>Question-7</button>
          </Link>
          <Link href="/Assignment-2/Question8">
            <button>Question-8</button>
          </Link>
          <Link href="/Assignment-2/Question9">
            <button>Question-9</button>
          </Link>
          <Link href="/Assignment-2/Question10">
            <button>Question-10</button>
          </Link>
          
        </div>
        {children}
      </body>
    </html>
  );
}
