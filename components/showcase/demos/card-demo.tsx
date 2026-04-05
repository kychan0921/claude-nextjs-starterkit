import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

/**
 * Card 컴포넌트 예제
 */
export function CardDemo() {
  return (
    <div className="space-y-6">
      {/* Basic Card */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Card</h3>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content of the card.</p>
          </CardContent>
        </Card>
      </div>

      {/* Cards Grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">First card content</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Second card content</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Card with Action */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Card with Action</h3>
        <Card>
          <CardHeader>
            <CardTitle>Product Card</CardTitle>
            <CardDescription>Price: $99.99</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>High-quality product with great features.</p>
            <Button className="w-full">Add to Cart</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
