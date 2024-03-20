import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import React from 'react'

interface FormErrorProps{
    message?: string

}
const FormError = ({ message }: FormErrorProps) => {
    
    if (!message) {
        return null
    }

  return (
      <div className=' bg-destructive/15 px-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
          <ExclamationTriangleIcon className='h-4 w-4' />
          <p className='p-2'>{ message }</p>
    </div>
  )
}

export default FormError