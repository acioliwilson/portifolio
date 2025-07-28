"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Avatar() {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const avatarSrc = theme === "dark" ? "/dark-mode.png" : "/light-mode.png"

  return (
      <Image
        src={avatarSrc}
        alt="Profile"
        width={273}
        height={310}
        className="rounded-full w-full h-full object-cover"
      />
  )
}
