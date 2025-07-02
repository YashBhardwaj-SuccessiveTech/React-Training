// 7. Create a Component in Next.js that renders a form allowing the user to input data, such as a post title and content. On form submission, use Axios to send a POST request to a public API endpoint, submitting the user's input data. Handle success and error states appropriately in the UI.

import Authenticate from "@/Components/Assignment5Components/authenticatePage";
import WithAuth from "@/Components/Assignment5Components/withAuth";


const Res= WithAuth(Authenticate)
export default function App()
{
   return  <Res/>
}