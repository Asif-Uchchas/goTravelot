"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

    </button>
  );
};

export default CustomButton;
