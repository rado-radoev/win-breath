interface Window {
  google: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string
          callback: (response: { credential: string }) => void
          use_fedcm_for_prompt?: boolean
        }) => void
        renderButton: (
          element: HTMLElement,
          config: {
            type?: string
            shape?: string
            theme?: string
            text?: string
            size?: string
            logo_alignment?: string
            width?: number
          }
        ) => void
      }
    }
  }
}
