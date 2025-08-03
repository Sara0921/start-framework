import { Button, Spinner } from 'flowbite-react'
import React from 'react'

export default function AppButton({children , isLoading , ...props}) {
  return (
    <Button {...props} disabled={isLoading}>
       {isLoading&& <Spinner size="sm" light />}
        {children}{" "}
        </Button>
  )
}
