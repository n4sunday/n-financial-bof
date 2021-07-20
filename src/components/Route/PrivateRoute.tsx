import React, { useEffect, useState } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'

import { auth } from '../../config/firebase'
import { IProfile } from '../../interfaces'
import { AuthService } from '../../services'
import { ProfileStore } from '../../store'

const PrivateRoute = ({ component: Component, ...props }: any) => {
    const { user, setUser } = ProfileStore()
    const Router = useHistory()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        isAuthenticated()
    }, [])

    const isAuthenticated = async () => {
        if (!user) {
            setLoading(true)
            await auth.onAuthStateChanged(async (res) => {
                if (res?.email) {
                    const resUser = await AuthService.getUserByEmail(res?.email)
                    if (resUser) {
                        setUser(resUser as IProfile)
                        setLoading(false)
                        return
                    }
                }
                Router.push("/login")
            })
        }
    }

    return (
        <Route
            {...props}
            render={(props) =>
                <React.Fragment>
                    {user && !loading && < Component {...props} />}
                </React.Fragment>

            }
        />
    )
}

export default PrivateRoute