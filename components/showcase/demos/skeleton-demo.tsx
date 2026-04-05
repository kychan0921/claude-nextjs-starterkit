import { Skeleton } from '@/components/ui/skeleton'

/**
 * Skeleton 컴포넌트 예제
 */
export function SkeletonDemo() {
  return (
    <div className="space-y-8">
      {/* Single Skeleton */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Single Skeleton</h3>
        <Skeleton className="h-12 w-full" />
      </div>

      {/* Multiple Skeletons */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Multiple Skeletons</h3>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>

      {/* Card Skeleton */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Skeleton</h3>
        <div className="border rounded-lg p-6 space-y-4">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="pt-2">
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </div>

      {/* Avatar Skeleton */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar Skeleton</h3>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>

      {/* List Item Skeleton */}
      <div>
        <h3 className="text-lg font-semibold mb-4">List Item Skeleton</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
