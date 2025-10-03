import React from 'react';
import { 
  LogIn, 
  BookOpen, 
  BarChart, 
  Award, 
  ArrowRight,
  User,
  Calendar,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: LogIn,
      title: '1. Access Your Account',
      description: 'Log in with your Ielektron credentials to access the platform',
      details: 'Use your company email and password to securely access your personalized learning dashboard.',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: BookOpen,
      title: '2. Browse Training Programs',
      description: 'Explore available courses and training modules',
      details: 'Filter by department, skill level, or topic to find the most relevant training for your role.',
      gradient: 'from-primary-400 to-primary-500'
    },
    {
      icon: BarChart,
      title: '3. Track Your Progress',
      description: 'Monitor your learning journey and achievements',
      details: 'View completion rates, time spent learning, and skill development metrics in your dashboard.',
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      icon: Award,
      title: '4. Earn Certifications',
      description: 'Complete courses and receive internal certifications',
      details: 'Add valuable skills to your profile and showcase achievements to your managers.',
      gradient: 'from-primary-300 to-primary-400'
    }
  ];

  const benefits = [
    {
      icon: User,
      title: 'Personalized Learning Path',
      description: 'Get customized course recommendations based on your role and career goals'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Learn at your own pace with 24/7 access to all training materials'
    },
    {
      icon: CheckCircle,
      title: 'Skill Validation',
      description: 'Complete assessments and earn badges that demonstrate your expertise'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Use your learning achievements to support promotion and growth opportunities'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> DigiVidya Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A simple 4-step process to get started with your professional development journey at Ielektron Technologies
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 z-0">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-400" />
                  </div>
                )}
                
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`bg-gradient-to-r ${step.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-sm text-center mb-3">{step.description}</p>
                  <p className="text-gray-500 text-xs text-center leading-relaxed">{step.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Employee Benefits
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why our internal learning platform is designed specifically for Ielektron team members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join your colleagues in advancing their careers through our comprehensive internal training platform.
            </p>
            <a href="https://www.digividya.ielektron.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
                <LogIn className="h-5 w-5" />
                <span>Access Platform Now</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}