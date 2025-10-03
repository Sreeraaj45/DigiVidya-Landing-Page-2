import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Training Modules', icon: Award },
    { number: '50+', label: 'Skill Programs', icon: Target },
    { number: '98%', label: 'Completion Rate', icon: Lightbulb }
  ];

  const values = [
    {
      title: 'Personalized Learning',
      description: 'Get customized course recommendations and learning paths tailored to your role, experience level, and career goals.',
      icon: Lightbulb,
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Quality Content',
      description: 'Access high-quality training materials created by industry experts and senior team members at Ielektron.',
      icon: Award,
      gradient: 'from-primary-400 to-primary-500'
    },
    {
      title: 'Flexible Access',
      description: 'Learn at your own pace with 24/7 access to all training materials, perfect for busy work schedules.',
      icon: Users,
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      title: 'Career Impact',
      description: 'Your learning achievements directly contribute to performance reviews and promotion opportunities.',
      icon: Target,
      gradient: 'from-primary-300 to-primary-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Learning Journey at
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> Ielektron</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            DigiVidya is your personal gateway to professional growth within Ielektron Technologies.
            Whether you're a new hire or a seasoned professional, our platform provides the tools and resources
            you need to advance your career and contribute to our company's success.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary-600 to-primary-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div> */}

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why DigiVidya Exists</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Ielektron Technologies, we believe that our greatest asset is our people. DigiVidya was created
                to ensure every team member has access to the learning resources they need to excel in their role
                and grow their career within our organization.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're onboarding as a new employee, looking to develop new technical skills, or preparing
                for a leadership role, our platform provides personalized learning paths that align with your
                career goals and our company's strategic objectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The platform is designed to be intuitive and accessible, allowing you to learn at your own pace
                while tracking your progress and achievements. Your learning journey directly contributes to
                your performance reviews and career advancement opportunities.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Your Success is Our Success</h4>
                <p className="text-primary-100 leading-relaxed">
                  We invest in your professional development because when you grow, our company grows.
                  Every course completed, every skill mastered, and every certification earned contributes
                  to both your personal advancement and Ielektron's continued innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You Can Expect</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The core principles that make DigiVidya an effective tool for your professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className={`bg-gradient-to-r ${value.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Team CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Advance Your Career?
            </h3>
            <p className="text-xl mb-4 opacity-90 max-w-2xl mx-auto">
              Join hundreds of your colleagues who are already using DigiVidya to develop new skills,
              earn certifications, and advance their careers at Ielektron Technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.digividya.ielektron.com/" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Access Your Learning Portal
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}