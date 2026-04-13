import { error } from "console"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt  from "bcryptjs"
import User from "./models/User"
import connectToDatabase from "./lib/db"
import Google from "@auth/core/providers/google"

declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: User & {
      role?: string;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role?: string;
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
  credentials: {
    email: {
      type: "email",
      label: "Email",
      placeholder: "johndoe@gmail.com",
    },
    password: {
      type: "password",
      label: "Password",
      placeholder: "*****",
    },
  },
  async authorize(credentials, request) {
    if(!credentials.email || !credentials.password){
        throw error("Email and password are required")
    }
    await connectToDatabase()
    const user=await User.findOne({email:credentials.email})
    if(!user){
        throw error("Invalid email or password")
    }
    const isMatch=await bcrypt.compare(credentials.password as string,user.password as string)
    if(!isMatch){
        throw error("Invalid email or password")
    }
      return{
        id:user._id.toString(),
        name:user.name,
        email:user.email,
        role:user.role
      }
  },
}),
Google({
  clientId: process.env.AUTH_GOOGLE_ID as string,
  clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
})
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === "google") {
        await connectToDatabase();
        let existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          existingUser = new User({
            name: user.name,
            email: user.email,
            image: user.image,
          });
          await existingUser.save();
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if(session.user){
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string | undefined;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret:process.env.AUTH_SECRET
})