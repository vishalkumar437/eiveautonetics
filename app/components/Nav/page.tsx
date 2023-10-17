import React from 'react'
import Links from './Links'
import "./style.css";
import logo from "../../../public/eive.png"
import Quote from './Quote';
import Search from './Search';
import Image from 'next/image';
export default function Nav() {
  return (
    <div>
        <div className="container container__nav">
          <Image src={logo} alt={'Eive Autonetics'} className='logo'/>
          <Links />
          <Quote/>
          <Search/>
          </div>
    </div>
  )
}
