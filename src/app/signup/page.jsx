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
import Swal from "sweetalert2";

export default function SignUpPage() {

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log('form submit data:', userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      callbackURL: '/'
    })

    console.log('signup response:', { data, error });

    if (data) {
      Swal.fire({
        title: "Sign in Successful!",
        // text: "That thing is still around?",
        icon: "success"
      });
    }
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error signing up!",
        text: error.message,
      });
    }

  };

  return (
    <Card className="border mx-auto w-[95%] md:w-[30%] py-10 mt-5">
      <h1 className="text-center text-[#69DA35] text-2xl font-bold">Sign Up</h1>

      <Form className="flex w-[90%] mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField> */}

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
          <Input placeholder="Enter your email" />
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
          <Button type="submit" className="bg-[#69DA35] text-[#1D232A] hover:bg-lime-500">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary" className="bg-lime-200 text-[#1D232A] hover:bg-lime-300">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
}
