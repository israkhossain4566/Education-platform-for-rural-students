

import { useState, useEffect } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet, Navigate } from "react-router-dom";
import axios from 'axios';
import Spinner from "../Spinner";

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authCheck = async () => {
            try {
                console.log(auth?.token);
                const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-auth?token=${auth?.token}`);
                if (res.data.ok) {
                    setOk(true);
                    console.log("Successful")
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Authentication check failed:", error);
                setOk(false);
            } finally {
                setLoading(false);
            }
        };

        if (auth?.token) {
            authCheck();
        } else {
            setLoading(false);
            setOk(false);
        }
    }, [auth?.token]);

    if (loading) {
        return <Spinner />;
    }

    return ok ? <Outlet /> : <Navigate to="/" />;
}

