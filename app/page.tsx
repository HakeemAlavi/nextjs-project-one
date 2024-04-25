import React from 'react'

import { InputDemo } from '@/components/inputdemo'
import { DisplayDemo } from '@/components/displaydemo'

function page() {
  return (
    <div className="flex flex-col items-center p-4">
      <InputDemo />
      <DisplayDemo />
    </div>
  )
}

export default page