"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SignIn, SignOut, useSession, getProviders } from "next-auth/react";

import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
    <Link href="/" className="flex justify-center gap-2">
      <Image
        src="/assets/images/Logo.svg"
        width={30}
        height={30}
        className="object-contain"
      />
    </Link>
    <p className="logo_text">
      Promptmenia
    </p>
  </nav>
  )
}

export default Nav
