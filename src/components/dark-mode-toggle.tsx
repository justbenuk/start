'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { FaMoon, FaSun } from "react-icons/fa"

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <div>
      {theme === 'dark' ? (
        <Button size={'icon'} onClick={() => setTheme('light')} variant={'ghost'}>
          <FaSun className="text-yellow-500" />
        </Button>
      ) : (
        <Button size={'icon'} onClick={() => setTheme('dark')} variant={'ghost'}>
          <FaMoon />
        </Button>
      )}
    </div>
  )
}

