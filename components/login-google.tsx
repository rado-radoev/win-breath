'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'


export function LoginGoogle() {
  const router = useRouter()
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const supabase = createClient()

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.onload = () => {
      window.google.accounts.id.initialize({    
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        callback: async (response: { credential: string }) => {
          const { error } = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: response.credential,
          })
          if (!error) {
            router.push('/protected')
          }
        },
        use_fedcm_for_prompt: true,
      })

      if (buttonRef.current) {
        window.google.accounts.id.renderButton(buttonRef.current, {
          type: 'standard',
          shape: 'pill',
          theme: 'outline',
          text: 'signin_with',
          size: 'large',
          logo_alignment: 'left',
          width: 320,
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [router])

  return <div ref={buttonRef} />
}
