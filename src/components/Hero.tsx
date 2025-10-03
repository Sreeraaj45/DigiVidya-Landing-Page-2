import React from 'react';
import { Play, BookOpen, Users, Award } from 'lucide-react';
import LiquidEther from './LiquidEther';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 bg-black">
        <LiquidEther
          colors={['#6A1B9A', '#AB47BC', '#CE93D8']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>


      <div className="relative z-10 container mx-auto px-4 text-center pointer-events-none">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Welcome to
            <span className="block bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent drop-shadow-2xl">
              DigiVidya Platform
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-xl">
            Your gateway to professional development at Ielektron Technologies.
            Access training modules, track your progress, and advance your career with our internal learning management system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 pointer-events-auto">
            <a href="https://www.digividya.ielektron.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-primary-600/80 to-primary-500/80 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 border border-white/20 drop-shadow-lg">
                <BookOpen className="h-5 w-5" />
                <span>Access Platform</span>
              </button>
            </a>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2 border border-white/20 drop-shadow-lg"
            >
              <Play className="h-5 w-5" />
              <span>See How It Works</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
                  <Users className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">500+</div>
              <div className="text-white/90 text-sm drop-shadow-md">Team Members</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
                  <BookOpen className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">50+</div>
              <div className="text-white/90 text-sm drop-shadow-md">Training Programs</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
                  <Award className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">98%</div>
              <div className="text-white/90 text-sm drop-shadow-md">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('features')}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse drop-shadow-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}