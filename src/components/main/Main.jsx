import React from 'react'
import Header from '../header/Header'
import Navigation from '../navigarion/Navigation'
import PageContent from '../page-content/PageContent'
import './main.css'

export default function Main() {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <PageContent />
      </div>
    </div>
  )
}