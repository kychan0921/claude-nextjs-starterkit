'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

/**
 * Tooltip 컴포넌트 예제
 */
export function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Basic Tooltip */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Basic Tooltips</h3>
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip!</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Settings</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to open settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Tooltips with Different Positions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tooltip Positions</h3>
          <div className="flex gap-2 justify-center py-8">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Top
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Right
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Bottom
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Left
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Tooltips with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Icon with Tooltip</h3>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  ❓
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Help information</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  ⭐
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to favorites</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
