import React from 'react'

import { InputDemo } from '@/components/inputdemo'
import { DisplayDemo } from '@/components/displaydemo'
import TodosProvider from '@/components/todosprovider'

function page() {
  return (
    <div className="flex flex-col items-center p-4">
      <TodosProvider>
        <InputDemo />
        <DisplayDemo />
      </TodosProvider>
    </div>
  )
}

export default page