import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input
          {...register("firstName", {
            required: 'Field "Name" cannot be empty',
          })}
        />
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: 'Field "email" cannot be empty',
          })}
        />
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: 'Field "Password" cannot be empty',
            minLength: {
              value: 5,
              message: "Password must be longer than three characters",
            },
          })}
        />
        <input type="submit" />
      </form>
      <div>
        {errors?.firstName && (
          <p>{errors?.firstName?.message || "Form filled out incorrectly"}</p>
        )}
        {errors?.password && (
          <p>{errors?.password?.message || "Form filled out incorrectly"}</p>
        )}
        {errors?.email && (
          <p>{errors?.email?.message || "Form filled out incorrectly"}</p>
        )}
      </div>
    </div>
  );
};

export default App;
