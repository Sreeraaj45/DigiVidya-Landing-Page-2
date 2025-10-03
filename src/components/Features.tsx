import React from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Video, 
  MessageCircle, 
  BarChart,
  Clock,
  Globe,
  Shield
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Video,
      title: 'Interactive Video Learning',
      description: 'Engage with high-quality video content, quizzes, and interactive elements that make learning enjoyable and effective.',
      gradient: 'from-primary-500 to-primary-600'
    },
    // {
    //   icon: Users,
    //   title: 'Collaborative Learning',
    //   description: 'Connect with peers, join study groups, and participate in discussions to enhance your learning experience.',
    //   gradient: 'from-primary-400 to-primary-500'
    // },
    {
      icon: BarChart,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics, progress reports, and personalized recommendations.',
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn industry-recognized certificates and badges to showcase your skills and advance your career.',
      gradient: 'from-primary-300 to-primary-400'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with 24/7 access to course materials.',
      gradient: 'from-primary-500 to-primary-600'
    },
    // {
    //   icon: MessageCircle,
    //   title: 'Expert Support',
    //   description: 'Get direct access to instructors and mentors for personalized guidance and support.',
    //   gradient: 'from-primary-400 to-primary-500'
    // },
    // {
    //   icon: Globe,
    //   title: 'Global Community',
    //   description: 'Join a worldwide network of learners and professionals from diverse backgrounds and industries.',
    //   gradient: 'from-primary-600 to-primary-700'
    // },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Your data and progress are protected with enterprise-level security and privacy measures.',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: BookOpen,
      title: 'Rich Content Library',
      description: 'Tailor your education journey with customized course recommendations and adaptive learning techniques.',
      gradient: 'from-primary-400 to-primary-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> DigiVidya</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful features that make our learning management system 
            the perfect choice for students, educators, and organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of learners who have already started their journey with DigiVidya.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}