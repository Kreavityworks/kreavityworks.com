import React from 'react';

const TalentProfile = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white text-black pt-40 px-12">
      <button onClick={() => navigateTo('talent-directory')} className="mb-12 uppercase text-xs tracking-widest">← Back to Collective</button>
      <h1 className="text-8xl font-medium tracking-tighter">Syamsul Rizal</h1>
      <p className="text-2xl mt-8">Principal Brand Strategist</p>
    </div>
  );
};

export default TalentProfile;