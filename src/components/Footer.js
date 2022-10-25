import React from 'react';
import '../App.css';
import {FaGithub, FaInstagram, FaTwitter, FaWhatsapp,} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <a href='www.thor__miwa.twitter.com'><FaTwitter /></a> &nbsp; 
      <a href='07015954487'><FaWhatsapp /></a> &nbsp;
      <a href='Thor-miwa/github.com'><FaGithub /></a> &nbsp;
      <a href='_thor_miwa_/instagram.com'><FaInstagram /></a>
    </div>
  )
}

export default Footer