export type SlideLayoutProps = {
  title: string
  description: string
} & React.PropsWithChildren

export const SlideLayout = ({
  title,
  description,
  children,
}: SlideLayoutProps) => {
  'use memo'
  return (
    <>
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
      <div></div>
    </>
  )
}
