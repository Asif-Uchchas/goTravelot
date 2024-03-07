import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;  
}

export interface ContactInfoProps{
    address: string;
    phone: string;
    email: string;
}

export interface Hotel {
    id: number;
    description: string;
    name: string;
    reviewCount: number;
    rating: number;
    image: string;
    tag: string[];
    location: string;
    placeImg: string;
    distance: string;
    sustainability: string;
    propertyFeatures: string;
    roomType: string;
    originalPrice: string;
    currentPrice: string;
    taxesAndCharges: string;
    prepayment: string;
  }