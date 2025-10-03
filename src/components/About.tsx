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
      title: 'Innovation',
      description: 'We continuously innovate our learning platform with cutting-edge technology to deliver exceptional training experiences.',
      icon: Lightbulb,
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in training content quality, expert instruction, and comprehensive team support.',
      icon: Award,
      gradient: 'from-primary-400 to-primary-500'
    },
    {
      title: 'Accessibility',
      description: 'Learning opportunities should be available to every team member. We ensure our training is accessible and inclusive.',
      icon: Users,
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      title: 'Results',
      description: 'We focus on measurable learning outcomes and practical skills that advance careers and drive business success.',
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
            About
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">DigiVidya</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Ielektron Technologies Learning Management System is our internal platform designed to
            empower our team with comprehensive training programs and professional development opportunities.
            Our mission is to foster continuous learning and skill development within our organization.
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ielektron Technologies recognized the importance of continuous learning and professional
                development for our team's success. Our Learning Management System was developed to provide
                our employees with access to high-quality training programs, skill development courses,
                and professional growth opportunities.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a technology company, we understand that staying current with industry trends and
                emerging technologies is crucial. Our LMS platform offers comprehensive training programs
                covering technical skills, soft skills, leadership development, and company-specific
                knowledge that directly supports our business objectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our LMS continues to evolve with our organization, offering personalized learning
                paths, interactive content, and real-world projects that enhance our team's capabilities
                and drive innovation within Ielektron Technologies.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="text-primary-100 leading-relaxed">
                  To empower our team members with comprehensive learning opportunities that enhance
                  their skills, advance their careers, and contribute to the continued success of
                  Ielektron Technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our learning and development initiatives at Ielektron Technologies
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
              Join Our Learning Community
            </h3>
            <p className="text-xl mb-4 opacity-90 max-w-2xl mx-auto">
              Become part of our internal learning community where team members grow together,
              share knowledge, and drive innovation within Ielektron Technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.digividya.ielektron.com/" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Start Training Today
                </button>
              </a>
              {/* <button className="bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-800 hover:scale-105 transition-all duration-300 border border-primary-400">
                Contribute Content
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}