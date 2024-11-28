import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/header'
import Footer from '../common/footer'
import SocialLine from '../common/socialLine'
import ScrollToTop from '../components/contact/scrollToTop'

export default function DefaultLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SocialLine />
    </>
  )
}
