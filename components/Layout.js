import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="p-2 px-4 bg-white rounded-lg text-xl"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-500 min-h-screen flex">
      <Nav />
      <div className={"bg-white flex-grow mt-2 mr-2 mb-2 p-4 rounded-lg"}>
        {children}
      </div>
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </div>
  );
}
