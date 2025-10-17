'use client'

import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { UseStepperReturn } from '@/hooks/use-stepper'

interface PresentationLayoutProps {
  stepper: UseStepperReturn
  children: ReactNode
}

export function PresentationLayout({
  stepper,
  children,
}: PresentationLayoutProps) {
  const {
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = stepper

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-foreground">
            React Best Practices
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} / {totalSteps}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">{children}</div>
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={isFirstStep}
            className="gap-2 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {/* Progress Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                onClick={() => stepper.goToStep(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextStep}
            disabled={isLastStep}
            className="gap-2 bg-transparent"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
