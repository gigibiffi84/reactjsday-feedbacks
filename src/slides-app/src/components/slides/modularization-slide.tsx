import { SlideLayout } from '../SlideLayout'

export const ModularizationSlide = () => (
  <SlideLayout
    title={'Modularization of React apps by Toughtworks'}
    description={
      'Best practices to structure your code and to scale up for 15+ teams'
    }
  >
    <p>
      Toughtworks is a leader consultancy company helps company to correctly
      address Agile Methodologies, we are just using some patterns like Agile,
      Tech Radar. The Chief Scientist of Toughtworks is Martin Fowler
    </p>
    <p>
      We actually doing it right:
      <ul className={'list-disc ml-6 mt-1'}>
        <li>We are using a modular architecture</li>
        <li>
          {' '}
          we are focusing on modularization and not only on code splitting.
        </li>
        <li> We rely on code generator templates</li>
        <li>
          For mobile apps deploy insted of generate at runtime it&#39;s
          recommended to generate at runtime to avoid to do a release on store
          every time you change something. Mobile Deploy is not really fast like
          normal Web apps
        </li>
      </ul>
    </p>
    Pain points:
    <ul className={'list-disc ml-6 mt-1'}>
      <li>Documentation is important</li>
      <li>
        Mindset: It&lsquo;s important that each team conducts information
        gathering to prevent the reinvention of the wheel within a single
        module.
      </li>
      <li>
        Importance of a Platform (as Product) Team to correctly address which
        enablers really can work for other teams and if really can take a value
        increment to the productivity of all teams.
      </li>
    </ul>
  </SlideLayout>
)
