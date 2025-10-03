import React from 'react';
import ProfileCard from './TeamCards';
import './Team.css';
import gopalImage from '../assets/gopal.png';
import sreeraajImage from '../assets/Sreeraaj.png';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Gopal Adusumilli',
      title: 'Team Lead',
      handle: 'Gopal Adusumilli',
      // status: 'Online',
      avatarUrl: gopalImage,
      contactText: 'Contact',
      onContactClick: () => console.log('Contacting Gopal Adusumilli')
    },
    {
      id: 2,
      name: 'Adi Jain',
      title: 'Trainee Associate Engineer',
      handle: 'adijain',
      // status: 'Online',
      avatarUrl: '',
      contactText: 'Contact',
      onContactClick: () => console.log('Contacting Adi Jain')
    },
    {
      id: 3,
      name: 'Anurag Singh',
      title: 'Trainee Associate Engineer',
      handle: 'anuragsingh',
      // status: 'Online',
      avatarUrl: '',
      contactText: 'Contact',
      onContactClick: () => console.log('Contacting Anurag Singh')
    },
    {
      id: 4,
      name: 'Sreeraaj Manepalli',
      title: 'Trainee Associate Engineer',
      handle: 'sreeraajmanepalli',
      // status: 'Online',
      avatarUrl: sreeraajImage,
      contactText: 'Contact',
      onContactClick: () => console.log('Contacting Sreeraaj Manepalli')
    }
  ];

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-subtitle">
            The dedicated team members driving Ielektron Technologies' learning initiatives
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card-wrapper">
              <ProfileCard
                avatarUrl={member.avatarUrl}
                name={member.name}
                title={member.title}
                handle={member.handle}
                status={member.status}
                contactText={member.contactText}
                onContactClick={member.onContactClick}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                className="team-profile-card"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;