# May 27, 2025 QNA Session

    1. role level security supabase

      roles: {
        user: 1,
        manager: 2,
        admin: 3,
        superAdmin: 4
        stakeHolder: 5
      }

      route user.role < 3 : you don't ahve access

      user - {
        _id: string
        username: string
        role:
      }


    2. react questions

        - useRef - document.getElementById


        - useCallBack -

          const [currentMessage, setCurrentMessage] = useState("")


          function sendMessage(message) {
            server.api.sendMessage(message)
          }

          const msgCallBack = useCallback(() => {
            sendMessage(currentMessage)
          }, [currentMessage])

    3. react-native dependency issues:
      lots of updates, need to handle changes

    4. type UserTypes = "Admin" | "Client" | "Manager"

        type Profile = {
          _id: string
          userType: UserTypes,
          username: string

        }

        useState<string>("")

        function useState<T>(value) {
          const _val: T = value
        }

    5.




