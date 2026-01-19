"use client";

import Link from "next/link";
import Image from "next/image";
import type { Session } from "next-auth";
import { login, logout } from "../lib/auth-actions";
import { log } from "console";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <nav className="bg-white shadow-md py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo Icon" width={40} height={40} />
          <span className="text-2xl font-bold text-gray-800">Travel Planner</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/trips" className="text-slate-900 hover:text-sky-500">
            My Trips
          </Link>
          <Link href="/globe" className="text-slate-900 hover:text-sky-500">
            Globe
          </Link>

          {!session ? (
            <form action={login}>
            <button
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-sm cursor-pointer">
              Sign In
               <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.303-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.018.005 2.043.137 3.003.403 2.29-1.554 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.015 2.896-.015 3.29 0 .322.216.694.825.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
  </button>
           </form>
          ) : (
            <form action={logout}>
            <button
              className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-sm cursor-pointer"
              onClick={() => logout()}
            >
              Sign Out
            </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
