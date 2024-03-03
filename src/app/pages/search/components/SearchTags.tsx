import React from "react";

interface SearchTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const SearchTags: React.FC<SearchTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`border rounded px-3 py-3 text-[12px] cursor-pointer text-black`}
    >
      {name}
    </button>
  );
};

export default SearchTags;
