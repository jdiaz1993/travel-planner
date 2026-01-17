import NextAuth from "next-auth"
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/app/lib/prisma";

export const {auth, handlers, signIn, signOut } = NextAuth ({
    providers:[
        Github({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
    })],
    adapter: PrismaAdapter(prisma),
});