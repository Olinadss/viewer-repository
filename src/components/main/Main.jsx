import React, { useContext } from 'react'
import Header from '../header/Header'
// import Navigation from '../navigarion/Navigation'
import PageContent from '../page-content/PageContent'
import './main.css'
import Context from '../context/Context'

export default function Main() {
  const ctx = useContext(Context)
  return (
    <div>
      <Header />
      <div>
        {ctx.userData?.name ?
        <React.Fragment>
        <PageContent />
      </React.Fragment>
      : undefined}
      </div>
    </div>
  )
}