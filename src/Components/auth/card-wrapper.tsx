"use client";

import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/Components/ui/card";
import { Header } from "@/Components/auth/header";
import Social from "@/Components/auth/socials";
import BackButton from "@/Components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>
      {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social/>
        </CardFooter>
      )}

      <BackButton
        label={backButtonLabel}
        href={backButtonHref}
      />
        
    </Card>
  );
};