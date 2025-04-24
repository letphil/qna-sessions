# QNA Session Apr 24, 2025

## useState

## useEffect

## useContext

### example

    import React, { createContext, useContext, useState } from "react"
    import appLogger from "~/utils/log/logger"

    const logger = appLogger.extend("src/contexts/auth-context.tsx")

    const AuthContext = createContext({
      isLoggedIn: false,
      login: () => {},
      logout: () => {},
    })

    export function useAuthContext() {
      const context = useContext(AuthContext)

      const { isLoggedIn, login, logout } = context

      if (context === undefined)
        throw new Error("useAuthContext must be used within an AuthContextProvider")

      return {
        isLoggedIn,
        login,
        logout,
      }
    }

    interface IAuthContextProvider {
      children: React.ReactNode | React.ReactNode[]
    }

    export default function AuthContextProvider({ children }: IAuthContextProvider) {
      const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

      return (
        <AuthContext.Provider
          value={{
            isLoggedIn,
            login: () => setIsLoggedIn(true),
            logout: () => setIsLoggedIn(false),
          }}
        >
          {children}
        </AuthContext.Provider>
      )
    }
