import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import useSignUp from "@/hooks/login/useSignUp";

import { Link } from "react-router-dom";

import SignUpForm from "@/hooks/form/SignUpForm";

const SignUpCard = () => {

  return (
    <>
      <SignUpForm />
    </>
  );
};

export default SignUpCard;
