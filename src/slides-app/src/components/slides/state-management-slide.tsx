"use client"

import { Card } from "@/components/ui/card"

export function StateManagementSlide() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-balance">Local State Management</h2>
        <p className="text-lg text-muted-foreground">
          Avoid components with too many props by using local state and composition
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Bad Example */}
        <Card className="p-6 border-destructive/50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-destructive font-semibold">❌ Bad</span>
          </div>
          <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`function UserProfile({
  name,
  email,
  avatar,
  bio,
  location,
  website,
  twitter,
  github,
  onNameChange,
  onEmailChange,
  onBioChange,
  // ... 10+ more props
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
}`}</code>
          </pre>
        </Card>

        {/* Good Example */}
        <Card className="p-6 border-primary/50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-semibold">✓ Good</span>
          </div>
          <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`function UserProfile({ userId }) {
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
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="bg-accent/50 p-6 rounded-lg border border-border">
        <h3 className="font-semibold mb-2">Key Takeaway</h3>
        <p className="text-sm text-muted-foreground">
          Keep state close to where it's used. If multiple fields are related, group them into a single state object
          instead of passing dozens of individual props.
        </p>
      </div>
    </div>
  )
}
