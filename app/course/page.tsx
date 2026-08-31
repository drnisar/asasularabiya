import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>course page
        <p>This is the main page for the course section.</p>
        <Link href="/course/lughatularabiya/concepts">Concepts</Link>
    </div>
  )
}

export default page