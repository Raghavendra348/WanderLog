export const loginUser = async ({
  email,
  password,
}) => {
  if (email && password) {
    return {
      token: "dummy-token",
    };
  }

  return {
    error: "Email and Password are required",
  };
};

export const signupUser = async ({
  email,
  password,
}) => {
  return {
    id: Date.now(),
    email,
  };
};