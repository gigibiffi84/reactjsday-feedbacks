'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { MessageSquare, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type QAItem = {
  question: string
  answer: string
  takeaway: string
}

type QADrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  questions: QAItem[]
  slideNumber: number
}

export function QADrawer({
  open,
  onOpenChange,
  questions,
  slideNumber,
}: QADrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="bg-gray-50 w-full sm:max-w-xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Questions & Answers
          </SheetTitle>
          <SheetDescription>
            Questions asked about current topic on slide {slideNumber}
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-8rem)] mt-6">
          <div className="space-y-6 pr-4">
            {questions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  No questions yet for this slide
                </p>
              </div>
            ) : (
              questions.map((qa, index) => (
                <div key={index} className="space-y-4">
                  {/* Question */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            Question
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed">{qa.question}</p>
                      </div>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="space-y-2 ml-11">
                    <div className="flex items-start gap-3">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="text-xs">
                            Answer
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {qa.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Takeaway */}
                  <div className="space-y-2 ml-11">
                    <div className="flex items-start gap-3">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="text-xs">
                            Key takeaways
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {qa.takeaway || 'No takeaways provided'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {index < questions.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
