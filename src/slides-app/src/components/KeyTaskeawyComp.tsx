export const KeyTakeawayComp = ({ desc }: { desc: string }) => (
  <div className="bg-accent/50 p-6 rounded-lg border border-border">
    <h3 className="font-semibold mb-2">Key Takeaway</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
)
