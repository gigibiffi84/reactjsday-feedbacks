//From Unit to E2E: Crafting a Bulletproof testing pipeline for React Apps

import { SlideLayout } from '../SlideLayout'

export const TestE2eSlide = () => (
  <SlideLayout
    title={'Testing Pyramid'}
    description={'How to structure your testing investment'}
  >
    <p>
      To correctly structure your testing investment, you should use Mike Cohn's
      Test Pyramid.
    </p>
    <img
      className={'rounded-lg w-[400px] h-[300px]'}
      src={
        'https://res.cloudinary.com/leaddev/image/upload/f_auto/q_auto/dpr_auto/c_limit,w_768/next/2021/04/unnamed.png'
      }
      alt={'Test Pyramid'}
    />
    <p>
      <h3>What to keep in minds:</h3>
      <ul className={'list-disc ml-6 mt-1'}>
        <li>
          Components are never really isolated so unit test is not enough.
        </li>
        <li>
          {' '}
          Write too many e2e tests is a cost operation and it can takes a lot of
          time sometimes to execute them.
        </li>
        <li>
          {' '}
          It's important to collect metrics during text execution to have the
          correct ROI
        </li>
        <li>
          To address and intercept problems effectively, you must implement more
          quality gates at each level. The local workstation shouldn't be
          excluded; use tools like Husky to enforce standards.
        </li>
        <li>
          Improve unit testing on visual components by writing tests that mirror
          Playwright end-to-end scenarios. Use Vitest and React Testing Library
          with their recommended queries.
          <ul className={'list-disc ml-6 mt-1'}>
            <li>
              Queries: getByRole (ariarole), getByText, getByLabelText,
              getByPlaceholderText
            </li>
          </ul>
        </li>
        <li>
          Find useful metrics to intercept point of failures in your reporting
          history
        </li>
        <li>
          Useful links books:{' '}
          <a
            href={'https://www.testingjavascript.com/'}
            className={'text-green-800'}
          >
            Testing javascript course
          </a>{' '}
          {','}
          <a
            href={
              'https://github.com/PacktPublishing/Mastering-React-Test-Driven-Development-Second-Edition'
            }
            className={'text-green-800'}
          >
            Mastering React Test Driven Development Second Edition
          </a>
        </li>
      </ul>
    </p>
  </SlideLayout>
)
