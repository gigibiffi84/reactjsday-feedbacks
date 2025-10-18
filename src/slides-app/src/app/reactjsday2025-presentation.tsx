'use client'

import { useStepper } from '@/hooks/use-stepper'
import { PresentationLayout } from '@/components/presentation-layout'
import { IntroSlide } from '@/components/slides/intro-slide'
import { StateManagementSlide } from '@/components/slides/state-management-slide'
import { CompilerSlide } from '@/components/slides/compiler-slide'
import { TransitionSlide } from '@/components/slides/transition-slide'
import { SummarySlide } from '@/components/slides/summary-slide'
import { useEffect, useState } from 'react'
import { BundlerSlide } from '../components/slides/bundler-slide'
import { CompilerSlide2 } from '../components/slides/compiler-slide2'
import { ModularizationSlide } from '../components/slides/modularization-slide'
import { TestE2eSlide } from '../components/slides/test-e2e-slide'

const slides = [
  <IntroSlide key="intro" />,
  <BundlerSlide key="bundler" />,
  <TestE2eSlide key="testing" />,

  <StateManagementSlide key="state" />,
  <ModularizationSlide key="modularization" />,
  <CompilerSlide key="compiler" />,
  <CompilerSlide2 key="compiler2" />,

  <TransitionSlide key="transition" />,

  <SummarySlide key="summary" />,
]

export default function PresentationPage() {
  'use memo'
  const [slideConf, setSlideConf] = useState(slides)
  const stepper = useStepper(slideConf.length)

  useEffect(() => {
    setSlideConf((old) => [...old, <>New Slide</>])
  }, [])

  return (
    <PresentationLayout stepper={stepper}>
      {slideConf[stepper.currentStep]}
    </PresentationLayout>
  )
}
