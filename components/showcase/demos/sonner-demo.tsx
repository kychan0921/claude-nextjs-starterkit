'use client'

import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

/**
 * Sonner Toast 컴포넌트 예제
 */
export function SonnerDemo() {
  return (
    <div className="space-y-6">
      {/* Basic Toasts */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Toasts</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => toast('This is a default toast')}
            variant="outline"
          >
            Default
          </Button>
          <Button
            onClick={() => toast.success('Success! Your action completed.')}
            variant="outline"
          >
            Success
          </Button>
          <Button
            onClick={() => toast.error('Error! Something went wrong.')}
            variant="outline"
          >
            Error
          </Button>
          <Button
            onClick={() => toast.info('Info: This is helpful information.')}
            variant="outline"
          >
            Info
          </Button>
        </div>
      </div>

      {/* Loading Toast */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Loading Toast</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              const id = toast.loading('Loading...')
              setTimeout(() => {
                toast.success('Done!', { id })
              }, 2000)
            }}
            variant="outline"
          >
            Show Loading
          </Button>
          <Button
            onClick={() => {
              const id = toast.loading('Processing...')
              setTimeout(() => {
                toast.error('Failed!', { id })
              }, 2000)
            }}
            variant="outline"
          >
            Loading then Error
          </Button>
        </div>
      </div>

      {/* Toast with Description */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Toast with Description</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() =>
              toast.success('Profile updated', {
                description: 'Your changes have been saved successfully.',
              })
            }
            variant="outline"
          >
            Success with Description
          </Button>
          <Button
            onClick={() =>
              toast.error('Upload failed', {
                description: 'The file size is too large. Max 10MB allowed.',
              })
            }
            variant="outline"
          >
            Error with Description
          </Button>
        </div>
      </div>

      {/* Positioned Toasts */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Different Positions</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() =>
              toast('Top right', {
                position: 'top-right',
              })
            }
            variant="outline"
          >
            Top Right
          </Button>
          <Button
            onClick={() =>
              toast('Top center', {
                position: 'top-center',
              })
            }
            variant="outline"
          >
            Top Center
          </Button>
          <Button
            onClick={() =>
              toast('Bottom left', {
                position: 'bottom-left',
              })
            }
            variant="outline"
          >
            Bottom Left
          </Button>
        </div>
      </div>
    </div>
  )
}
