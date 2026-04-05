'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/**
 * Tabs 컴포넌트 예제
 */
export function TabsDemo() {
  return (
    <div className="space-y-6">
      {/* Basic Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Tabs</h3>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4">
            <div>
              <h4 className="font-semibold mb-2">Account Settings</h4>
              <p className="text-muted-foreground">
                Update your account information and preferences.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password" className="p-4">
            <div>
              <h4 className="font-semibold mb-2">Change Password</h4>
              <p className="text-muted-foreground">
                Update your password to keep your account secure.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="p-4">
            <div>
              <h4 className="font-semibold mb-2">Notification Preferences</h4>
              <p className="text-muted-foreground">
                Manage how you receive notifications.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Product Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Product Information</h3>
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="p-4">
            <p>Product details and description go here.</p>
          </TabsContent>
          <TabsContent value="specs" className="p-4">
            <ul className="space-y-2 text-sm">
              <li>• Dimensions: 100 x 50 x 25 mm</li>
              <li>• Weight: 500g</li>
              <li>• Color: Black, White, Silver</li>
              <li>• Material: Aluminum</li>
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="p-4">
            <p>Customer reviews and ratings will appear here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
