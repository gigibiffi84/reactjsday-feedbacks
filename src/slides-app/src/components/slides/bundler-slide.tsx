import { SlideLayout } from '../SlideLayout'

export const BundlerSlide = () => (
  <SlideLayout
    title={'React bundlers'}
    description={'What exactly a bundler is and what problems solve'}
  >
    <p>
      A bundler is a tool that takes all your source files and bundles them into
      a single file. without a bundler you need to write mannually each single
      Javascript file and the import trough the script tag, and you should take
      care of load order, variable global pollution, module deps injection
      etc.{' '}
    </p>
    <p>
      <h3>Problems solved by a bundler:</h3>
      <ul className={'list-disc ml-6 mt-1'}>
        <li>Code splitting , minification, optimization</li>
        <li>Code caching and versioning</li>
        <li>Code hot reloading</li>
        <li>Code transpiling</li>
        <li>Tree shaking</li>
        <li>
          Useful links or books:{' '}
          <a
            className={'text-green-800'}
            href={'https://github.com/edodusi/simple-bundler'}
          >
            Simple bundler
          </a>
        </li>
      </ul>
    </p>
  </SlideLayout>
)
