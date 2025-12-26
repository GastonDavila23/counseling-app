import { Check, Clock } from "lucide-react";

interface PricingCardProps {
  plan: {
    title: string;
    duration: string;
    description: string;
    features: string[];
    buttonLink: string;
    icon: React.ReactNode;
  };
  onSelect: (url: string) => void;
}

export default function PricingCard({ plan, onSelect }: PricingCardProps) {
  return (
    <div className="relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      
      <div className="flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-counseling-50 text-counseling-600 flex items-center justify-center flex-shrink-0">
             <div className="scale-90">{plan.icon}</div>
          </div>
          <div>
             <h3 className="text-xl font-bold text-counseling-900 font-serif leading-tight">
               {plan.title}
             </h3>
             <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{plan.duration}</span>
             </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          {plan.description}
        </p>

        <div className="border-t border-gray-100 my-6"></div>

        <ul className="space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-accent-500" />
              </div>
              <p className="ml-3 text-sm text-gray-600">{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          onClick={() => onSelect(plan.buttonLink)}
          className="block w-full text-center px-4 py-3 rounded-lg text-sm font-bold tracking-wide bg-counseling-900 text-white hover:bg-counseling-800 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Reservar Espacio
        </button>
      </div>
    </div>
  );
}