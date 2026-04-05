import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

/**
 * Avatar 컴포넌트 예제
 */
export function AvatarDemo() {
  return (
    <div className="space-y-8">
      {/* Basic Avatar with Image */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar with Image</h3>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Fallback Only */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar Fallback</h3>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Different Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Size Variations</h3>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback>XS</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* In a List */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar in List</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">john@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-muted-foreground">jane@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
