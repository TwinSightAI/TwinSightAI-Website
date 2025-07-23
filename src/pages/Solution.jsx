import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";

import { 
  Waves,
  AlertTriangle,
  Map,
  Target
} from 'lucide-react';

const Solutions = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="Solutions" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver an end-to-end flood management solution that integrates IoT sensors, satellite imagery, GIS, and AI to enable real-time monitoring, predictive flood risk analysis, and local capacity building for proactive disaster response and resilience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Real-Time Flood Detection */}
          <Card
            className="bg-blue-900 text-white hover:scale-105 transition-transform duration-300 flex flex-col"
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              <CardHeader>
                <Waves className="h-10 w-10 text-blue-300 mb-4 mx-auto" />
                <CardTitle className="text-center text-xl">Real-Time Flood Detection</CardTitle>
              </CardHeader>
            </div>
            <div className="border-t border-blue-800">
              {hovered === 0 && (
                <CardContent className="text-center text-sm py-4 animate-fade-in">
                  We deploy a network of IoT sensors across flood-prone regions to continuously monitor river depth, rainfall, soil moisture, and terrain changes. This data is sent instantly to a cloud system, where AI models analyze environmental patterns. The result is a live feed of conditions, allowing stakeholders to detect flood risks as they emerge.
                  <div className="mt-4">
                    <Link to="/solutionE">
                      <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </CardContent>
              )}
            </div>
          </Card>

          {/* Digital Twin Simulation */}
          <Card
            className="bg-green-900 text-white hover:scale-105 transition-transform duration-300 flex flex-col"
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              <CardHeader>
                <Map className="h-10 w-10 text-green-300 mb-4 mx-auto" />
                <CardTitle className="text-center text-xl">Digital Twin Simulation</CardTitle>
              </CardHeader>
            </div>
            <div className="border-t border-green-800">
              {hovered === 2 && (
                <CardContent className="text-center text-sm py-4 animate-fade-in">
                  We create dynamic virtual replicas of vulnerable environments using GIS and sensor data. These Digital Twins allow authorities to simulate floods before they happen — predicting how water will move, what infrastructure is at risk, and how communities might be affected. It's like test-driving a disaster response, but without the disaster.
                  <div className="mt-4">
                    <Link to="/solutionF">
                      <button className="bg-white text-green-900 px-4 py-2 rounded hover:bg-green-100 transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </CardContent>
              )}
            </div>
          </Card>

          {/* Flood Forecasting & Alerts */}
          <Card
            className="bg-red-900 text-white hover:scale-105 transition-transform duration-300 flex flex-col"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              <CardHeader>
                <AlertTriangle className="h-10 w-10 text-red-300 mb-4 mx-auto" />
                <CardTitle className="text-center text-xl">Flood Forecasting & Alerts</CardTitle>
              </CardHeader>
            </div>
            <div className="border-t border-red-800">
              {hovered === 1 && (
                <CardContent className="text-center text-sm py-4 animate-fade-in">
                  Using predictive AI trained on years of flood data and live environmental feeds, our system forecasts where and when a flood might strike. Once thresholds are exceeded, automated alerts are dispatched via SMS, dashboards, and public systems empowering emergency responders and residents to act early and confidently.
                  <div className="mt-4">
                    <Link to="/solutionA">
                      <button className="bg-white text-red-900 px-4 py-2 rounded hover:bg-red-100 transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </CardContent>
              )}
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="border-border/50 shadow-[var(--shadow-lg)] bg-gradient-to-r from-tech-blue-light to-nature-green-light">
            <CardContent className="text-center py-12">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI + GIS: Where Technology Meets Urgency</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Through the fusion of AI intelligence and GIS mapping, this international project pioneers a data-driven shift in climate resilience redefining how East Africa anticipates, monitors, and mitigates the twin threats of floods and droughts. By leveraging global expertise and local insight, we’re setting a new benchmark in proactive environmental governance.
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/80 border border-border">
                <div className="w-3 h-3 bg-nature-green rounded-full mr-2 animate-pulse"></div>
                <span className="font-medium">Project Timeline: Prototype Phase Underway</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
