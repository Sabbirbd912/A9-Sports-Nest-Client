"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log("Form submitted with:", userData);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log("sign in response:", { data, error });

    if (data) {
      toast("Log in Successful!");
    }
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error loggin in!",
        text: error.message,
      });
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-[95%] md:w-[30%] py-10 my-5">
      <h1 className="text-center text-[#69DA35] text-2xl font-bold">Log In</h1>

      <Form className="flex w-[90%] mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            type="submit"
            className="bg-[#69DA35] text-[#1D232A] hover:bg-lime-500 w-full"
          >
            <Check />
            Submit
          </Button>
          <Button
            type="reset"
            variant="secondary"
            className="bg-lime-200 text-[#1D232A] hover:bg-lime-300 w-full"
          >
            Reset
          </Button>
        </div>
      </Form>
      <p className="text-center text-black">OR</p>
      <Button
        onClick={handleGoogleSignIn}
        className="bg-[#4285F4] text-white hover:bg-[#3367D6] text-center w-full"
      >
        {" "}
        <GrGoogle /> Sign in with Google{" "}
      </Button>
    </Card>
  );
}
