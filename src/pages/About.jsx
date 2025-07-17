import { Card, CardContent, CardHeader, CardTitle} from '../components/card';
import { Target, Globe, Users, TrendingUp } from 'lucide-react';
import Objective from '../assets/objective.jpeg';
import Impact from '../assets/impact.jpeg';
import Scope from '../assets/scope.jpg';
import Stakeholders from '../assets/stakeholders.jpeg';
const About = () => {
  return (
    <section id="About the Project" className="py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About the Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        This project aims to develop an intelligent, real-time Digital Twin model to detect, predict, and respond to flooding in vulnerable regions. By combining IoT sensor networks, satellite Earth observation data, and AI/ML models, the system enhances flood preparedness, risk mapping, and decision-making for disaster response.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
         <Card className="group relative overflow-hidden text-center border-border/50 shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 rounded-xl">
  
  {/* Animated Background Image */}
  <img
    src={Objective}
    alt="objective"
    className="absolute inset-0 w-full h-full object-cover opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:animate-page-open z-0"
  />

  {/* Light overlay for readability (non-tinting) */}
  <div className="absolute inset-0 bg-white/60 group-hover:bg-white/50 transition duration-300 z-10"></div>

  {/* Card Content */}
  <div className="relative z-20 p-4">
    <CardHeader>
      <Target className="h-12 w-12 text-tech-blue mx-auto mb-4 group-hover:text-dark-blue transition-colors duration-300" />
      <CardTitle className="text-lg group-hover:text-dark-blue transition-colors duration-300">
        Primary Objective
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground transition-all duration-300 group-hover:text-dark-blue group-hover:font-semibold">
        To enable early warning, risk mapping, and improved disaster response through IoT, satellite data, and AI/ML integration.
      </p>
    </CardContent>
  </div>
</Card>
           {/* Card 2: Scope */}
  <Card className="group relative overflow-hidden text-center border-border/50 shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 rounded-xl">
  <img
    src={Scope}
    alt="scope"
    className="absolute inset-0 w-full h-full object-cover opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:animate-page-open z-0"
  />
  <div className="absolute inset-0 bg-white/60 group-hover:bg-white/50 transition duration-300 z-10"></div>
  <div className="relative z-20 p-4">
    <CardHeader>
      <Globe className="h-12 w-12 text-nature-green mx-auto mb-4 group-hover:text-dark-blue transition-colors duration-300" />
      <CardTitle className="text-lg group-hover:text-dark-blue transition-colors duration-300">
        Scope
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground transition-all duration-300 group-hover:text-dark-blue group-hover:font-semibold">
        Development of an integrated Digital Twin platform for real-time flood detection, prediction, and preparedness.
      </p>
    </CardContent>
  </div>
</Card>
           {/* Card 3: Stakeholders */}
  <Card className="group relative overflow-hidden text-center border-border/50 shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 rounded-xl">
  <img
    src={Stakeholders}
    alt="stakeholders"
    className="absolute inset-0 w-full h-full object-cover opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:animate-page-open z-0"
  />
  <div className="absolute inset-0 bg-white/60 group-hover:bg-white/50 transition duration-300 z-10"></div>
  <div className="relative z-20 p-4">
    <CardHeader>
      <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-dark-blue transition-colors duration-300" />
      <CardTitle className="text-lg group-hover:text-dark-blue transition-colors duration-300">
        Stakeholders
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground transition-all duration-300 group-hover:text-dark-blue group-hover:font-semibold">
        Government agencies, emergency responders, researchers, policy-makers, and local communities.
      </p>
    </CardContent>
  </div>
</Card>
           {/* Card 4: Impact */}
 <Card className="group relative overflow-hidden text-center border-border/50 shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 rounded-xl">
  <img
    src={Impact}
    alt="impact"
    className="absolute inset-0 w-full h-full object-cover opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:animate-page-open z-0"
  />
  <div className="absolute inset-0 bg-white/60 group-hover:bg-white/50 transition duration-300 z-10"></div>
  <div className="relative z-20 p-4">
    <CardHeader>
      <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4 group-hover:text-dark-blue transition-colors duration-300" />
      <CardTitle className="text-lg group-hover:text-dark-blue transition-colors duration-300">
        Impact
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground transition-all duration-300 group-hover:text-dark-blue group-hover:font-semibold">
        Reduced flood risk, stronger community resilience, and better-informed decision-making for disaster management.
      </p>
    </CardContent>
  </div>
</Card>
        </div>      
      </div>
    </section>
  );
};

export default About;