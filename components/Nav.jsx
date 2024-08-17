"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SignIn, SignOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const IsUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => { 
    const setProviders = async() => {
        const response = await getProviders();
        setProviders(response);
    }

    setProviders();
    
  }, []);

  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
      <Link href="/" className="flex justify-center gap-2">
        <Image
          src="/assets/images/Logo.svg"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptmenia</p>
      </Link>
      
      {/* Desktop navigation */}
      <div className="md:flex hidden">
        {IsUserLoggedIn ? (
          <div className="flex gap-2 md:gap-4">
            <Link href="/something" className="black_btn">
              Create new post
            </Link>
            <button type="button" onClick={SignOut} className="outline_btn">
                Sign Out
            </button>
            <Link href="/profile">
              <Image
              src="assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full "
              />
          </Link>
          </div>
        ) : (
          <>
          
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
