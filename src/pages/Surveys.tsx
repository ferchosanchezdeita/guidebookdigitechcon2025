import React, { useState } from "react";
import PageTransition from "@/components/common/PageTransition";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

// Event feedback survey
const eventFeedbackSurvey = {
  id: "event-feedback",
  title: "Event Feedback",
  description: "Share your thoughts on the overall event experience",
  questions: [
    {
      id: "q1",
      type: "radio",
      question: "How would you rate your overall experience at the event?",
      options: ["Excellent", "Very Good", "Good", "Fair", "Poor"]
    },
    {
      id: "q2",
      type: "radio",
      question: "How valuable was the content presented at the event for your role?",
      options: ["Extremely Valuable", "Very Valuable", "Somewhat Valuable", "Not Very Valuable", "Not Valuable At All"]
    },
    {
      id: "q3",
      type: "radio",
      question: "How satisfied were you with the networking opportunities?",
      options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
    },
    {
      id: "q4",
      type: "radio",
      question: "How would you rate the event venue and facilities?",
      options: ["Excellent", "Very Good", "Good", "Fair", "Poor"]
    },
    {
      id: "q5",
      type: "radio",
      question: "How likely are you to attend this event again in the future?",
      options: ["Extremely Likely", "Very Likely", "Somewhat Likely", "Not Very Likely", "Not At All Likely"]
    },
    {
      id: "q6",
      type: "textarea",
      question: "What did you like most about the event?"
    },
    {
      id: "q7",
      type: "textarea",
      question: "What improvements would you suggest for future events?"
    }
  ]
};

const Surveys = () => {
  const [feedbackResponses, setFeedbackResponses] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackResponseChange = (questionId: string, value: string) => {
    setFeedbackResponses((prev) => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to submit feedback
    setTimeout(() => {
      console.log("Submitting event feedback:", feedbackResponses);
      
      // In a real implementation, you would post to your backend here
      // which would then save to Microsoft Online Sheet
      
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your valuable feedback on the event!",
      });
      
      // Reset form
      setFeedbackResponses({});
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-digipink-500/10 backdrop-blur-sm border border-digipink-500/30 rounded-full px-4 py-1 mb-4"
            >
              <span className="text-sm text-digipink-300 font-medium">Your Voice Matters</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Event <span className="text-digipink-500">Feedback</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Help us improve future events by sharing your feedback on the overall experience.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-digiblack-100 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">{eventFeedbackSurvey.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    {eventFeedbackSurvey.description}
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleFeedbackSubmit}>
                  <CardContent className="space-y-6">
                    {eventFeedbackSurvey.questions.map((q, index) => (
                      <div key={q.id} className="space-y-2">
                        <Label htmlFor={q.id} className="text-white text-base">
                          {q.question}
                        </Label>
                        
                        {q.type === "radio" && (
                          <RadioGroup 
                            id={q.id} 
                            value={feedbackResponses[q.id] || ""} 
                            onValueChange={(value) => handleFeedbackResponseChange(q.id, value)}
                            className="space-y-2"
                          >
                            {q.options?.map((option, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <RadioGroupItem 
                                  value={option} 
                                  id={`${q.id}-${i}`} 
                                  className="border-digipink-500/50 text-digipink-500"
                                />
                                <Label htmlFor={`${q.id}-${i}`} className="text-white/80">{option}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        )}
                        
                        {q.type === "text" && (
                          <Input
                            id={q.id}
                            value={feedbackResponses[q.id] || ""}
                            onChange={(e) => handleFeedbackResponseChange(q.id, e.target.value)}
                            className="bg-digiblack border-white/20 text-white"
                          />
                        )}
                        
                        {q.type === "textarea" && (
                          <Textarea
                            id={q.id}
                            value={feedbackResponses[q.id] || ""}
                            onChange={(e) => handleFeedbackResponseChange(q.id, e.target.value)}
                            className="bg-digiblack border-white/20 text-white min-h-[100px]"
                          />
                        )}
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-digipink-500 hover:bg-digipink-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Surveys;
