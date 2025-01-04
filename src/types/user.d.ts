declare global {
  type User = {
    attributes: {
      email: string;
      password: string;
    };
    username: string;
    jwtToken: string;
    email: string;
    // exp: number;
  }
}

export {};