'use client';
import DoubleHeader from "../components/DoubleHeader";
import {signIn} from "next-auth/react";

export default function LoginScreen() {
  return (
    <div className="bg-white mt-8 max-w-3xl h-96 border border-blue-100 border-b-4 mx-auto rounded-xl p-4 py-6 text-center flex items-center justify-center flex-col">
      <DoubleHeader preTitle={'Welcome back'} mainTitle={'Login to your account'} />
      <button onClick={() => signIn('google')} className="bg-indigo-500 text-white text-xl px-8 py-4 rounded-xl border border-indigo-700 border-b-4 inline-flex gap-3 items-center my-6">
          <img className="w-6 invert" src="https://www.svgrepo.com/show/50809/google.svg" alt=""/>
          Login with Google
      </button>

    </div>
  );
}
