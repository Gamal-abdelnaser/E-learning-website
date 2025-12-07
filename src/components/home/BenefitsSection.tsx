import { Users, Clock, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry leaders and certified professionals with real-world experience.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Access courses anytime, anywhere. Learn at your own pace on any device.",
  },
  {
    icon: Target,
    title: "Career-Focused Curriculum",
    description: "Our curriculum is designed to equip you with the skills demanded by today's job market.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Learn Smarter, Not Harder
        </h2>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="p-5 flex items-start gap-4 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
