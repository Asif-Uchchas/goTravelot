import { CheckCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons'
import React from 'react'

interface FormSuccessProps{
    message?: string

}
const FormSuccess = ({ message }: FormSuccessProps) => {
    
    if (!message) {
        return null
    }

  return (
      <div className=' bg-emerald-500/15 px-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
          <CheckCircledIcon className='h-4 w-4' />
          <p className='p-2'>{ message }</p>
    </div>
  )
}

export default FormSuccess