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
    <div 
      className="relative bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:border-counseling-dark hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="flex-grow">
        <div className="flex items-center gap-4 mb-6">
          {/* Círculo del Icono */}
          <div className="w-12 h-12 rounded-full bg-counseling-light dark:bg-gray-800 text-counseling-dark dark:text-counseling flex items-center justify-center flex-shrink-0 transition-colors">
             <div className="scale-90">{plan.icon}</div>
          </div>
          <div>
             <h3 className="text-xl font-bold text-counseling-dark dark:text-white font-serif leading-tight transition-colors">
               {plan.title}
             </h3>
             <div className="flex items-center gap-1.5 mt-1 text-sm text-gray dark:text-gray-400 font-medium transition-colors">
                <Clock className="w-3.5 h-3.5" />
                <span>{plan.duration}</span>
             </div>
          </div>
        </div>

        <p className="text-gray dark:text-gray-300 leading-relaxed mb-6 transition-colors">
          {plan.description}
        </p>

        <div className="border-t border-gray-100 dark:border-gray-800 my-6 transition-colors"></div>

        <ul className="space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-accent dark:text-accent-400" />
              </div>
              <p className="ml-3 text-sm text-gray dark:text-gray-300 transition-colors">{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          onClick={() => onSelect(plan.buttonLink)}
          className="
            block w-full text-center px-4 py-3 rounded-lg text-sm font-bold tracking-wide shadow-md transition-all duration-300
            
            /* Light Mode: Violeta Oscuro */
            bg-counseling-dark text-white hover:bg-counseling-dark/90 hover:shadow-lg
            
            /* Dark Mode: Lila Brillante (Para resaltar) */
            dark:bg-counseling dark:text-black dark:hover:bg-counseling/90 dark:hover:shadow-counseling/20
          "
        >
          Reservar Espacio
        </button>
      </div>
    </div>
  );
}