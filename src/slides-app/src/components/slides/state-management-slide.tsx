'use client'

import { Card } from '@/components/ui/card'
import { KeyTakeawayComp } from '../KeyTaskeawyComp'
import { SlideLayout } from '../SlideLayout'

const goodSmartComp = `function UserForm({
  userId,   
  onUserDataChange
}) {
  
  /*load and set user data using userId lookup with tanstack query*/
  
  const handleUserFirstNameChange  = useCallback((sourceField, data)=>{ ... }, [userId])
  
  return (
    <div>
      <MetadataForm 
        formData={userData}
        onFormDataChange={onUserDataChange}
        onFieldChange={handleUserFirstNameChange}
      />
      {/* More fields... */}
    </div>
  )
}`

const goodPresentationComp = `function MetadataForm({
  entityKey,
  formData,
  onFormDataChange  
   // ... 10+ it's ok when the component is dumb  
  onFieldChange,
}) {
  
  //no inner local state only derived state
  
  // no need to useEffect to rerender, a presentation component state can be derived by its props!!
  
  return (
    <div>       
      {/* For each field in metadata 
      render the proper form field... */}
    </div>
  )
}`

const badComp = `function UserProfile({
  name,
  email,
  avatar,
  bio,
  location,
   // ... 10+ more props
  onNameChange,
  onEmailChange,
  onBioChange,
}) {
  return (
    <div>
      <input 
        value={name}
        onChange={onNameChange}
      />
      {/* More fields... */}
    </div>
  )
}`

const goodComp = `function UserProfile({ userId }) {
  const [profile, setProfile] = 
    useState(initialProfile)
  
  const updateField = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }))
  }
  
  return (
    <div>
      <input 
        value={profile.name}
        onChange={(e) => 
          updateField('name', e.target.value)
        }
      />
    </div>
  )
}`
export function StateManagementSlide() {
  return (
    <SlideLayout
      title={'React state management scopes'}
      description={'How to address state to the correct scope'}
    >
      <ul className={'list-disc ml-6 mt-1'}>
        <li>Scope types: local, global, server</li>
        <li>
          Local: cons props drilling, solution useContext or Component redesign
        </li>
        <li>
          Global: cons state bloat, use slices of state with smaller context
        </li>
        <li>Server state: stale data, ok we use tanstack query &#128515;</li>
        <li>
          Smart Components VS Presentation/Dumb components, check Atomic Design
          Talk &#128540;
        </li>
        <li>
          Useful links or books:{' '}
          <a
            className={'text-green-800'}
            href={'/state-management-cheatsheet.pdf'}
          >
            State management cheatsheet
          </a>
        </li>
      </ul>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bad Example */}
        <Card className="p-6 border-destructive/50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-destructive font-semibold">❌ Bad</span>
          </div>
          <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
            <code>{badComp}</code>
          </pre>
        </Card>

        {/* Good Example */}
        <Card className="p-6 border-primary/50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-semibold">✓ Good</span>
          </div>
          <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
            <code>{goodComp}</code>
          </pre>
        </Card>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bad Example */}
        <Card className="p-6 border-destructive/50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-semibold">✓ Good</span>
          </div>
          <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
            <code>{goodPresentationComp}</code>
          </pre>
        </Card>

        {/* Good Example */}
        <Card className="p-6 border-primary/50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-semibold">✓ Good</span>
          </div>
          <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
            <code>{goodSmartComp}</code>
          </pre>
        </Card>
      </div>

      <KeyTakeawayComp
        desc={
          "Honor this best practice it's a first step to start respect the rules of react compiler"
        }
      ></KeyTakeawayComp>
    </SlideLayout>
  )
}
