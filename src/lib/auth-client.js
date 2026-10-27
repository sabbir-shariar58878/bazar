"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://bazar-six-liart.vercel.app",
});

export const { signIn, signUp, signOut, useSession } = authClient;
