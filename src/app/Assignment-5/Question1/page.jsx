// 1. Create a Next.js component using the App Router that fetches data on the server side (SSR)
//  from a public API (e.g., JSONPlaceholder) and displays the results on the page.

import FetchData from '@/Components/Assignment5Components/FetchData'
import React from 'react'

function page() {
  return (
    <div>
        <FetchData/>
    </div>
  )
}

export default page

