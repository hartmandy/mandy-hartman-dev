import React from "react";

type SkillChipProps = {
  skills: string[];
};

const SkillChips: React.FC<SkillChipProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-neutral-700 text-white px-3 py-1 rounded-full text-md"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillChips;
