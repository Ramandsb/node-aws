import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'

const Layout = ({ children }) => {
    const router = useRouter()
    const handleStart = () => {
        nProgress.start()
    }
    const handleStop = () => {
        nProgress.done()
    }
    const handleError = () => {
        nProgress.done()
    }
    useEffect(() => {
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleError)
      return () => {
        router.events.off("routeChangeStart", handleStart)
        router.events.off("routeChangeComplete", handleStop)
        router.events.off("routeChangeError", handleError)
      }
    }, [router])
    
    const head = () => (
        <Head>
            <title>Node Aws</title>
            <link 
                rel="stylesheet" 
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
                crossOrigin="anonymous"
            />
        </Head>
    )
    const nav = () => (
        <ui className="nav nav-tabs bg-warning">
            <li className="nav-item">
                <Link href="/" legacyBehavior>
                    <a className="nav-link text-dark">Home</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/login" legacyBehavior>
                    <a className="nav-link text-dark">Login</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/register" legacyBehavior>
                    <a className="nav-link text-dark">Register</a>
                </Link>
            </li>
        </ui>
    )

    return <React.Fragment>
       {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
    </React.Fragment>
}

export default Layout;