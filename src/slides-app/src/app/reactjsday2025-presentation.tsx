'use client'

import { useStepper } from '@/hooks/use-stepper'
import { PresentationLayout } from '@/components/presentation-layout'
import { IntroSlide } from '@/components/slides/intro-slide'
import { StateManagementSlide } from '@/components/slides/state-management-slide'
import { CompilerSlide } from '@/components/slides/compiler-slide'
import { TransitionSlide } from '@/components/slides/transition-slide'
import { SummarySlide } from '@/components/slides/summary-slide'
import { BundlerSlide } from '../components/slides/bundler-slide'
import { ModularizationSlide } from '../components/slides/modularization-slide'
import { TestE2eSlide } from '../components/slides/test-e2e-slide'

const slides = [
  <IntroSlide key="intro" />,
  <BundlerSlide key="bundler" />,
  <TestE2eSlide key="testing" />,

  <StateManagementSlide key="state" />,
  <ModularizationSlide key="modularization" />,
  <CompilerSlide key="compiler" />,
  <TransitionSlide key="transition" />,
  <SummarySlide key="summary" />,
]

export default function PresentationPage() {
  const stepper = useStepper(slides.length)

  return (
    <PresentationLayout stepper={stepper}>
      {slides[stepper.currentStep]}
    </PresentationLayout>
  )
}
