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

  const avatarSrc = theme === "dark" ? "/avatar.png" : "/light-avatar.png"

  return (
      <Image
        src={avatarSrc}
        alt="Profile"
        width={200}
        height={200}
        className="rounded-full w-full h-full object-cover"
      />
  )
}
