import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ password, email }) {
        const res = await fetch(`${process.env.PUBLIC_URL}/api/auth/signIn`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, email }),
        });
        const data = await res.json();
        console.log(data);
        if (!res.ok) return null;
        return data ?? null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }: { session: any; token: any }) => {
      session.accessToken = token.accessToken;
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
});
