import logo from '../../icons/icon.svg';
import phone from '../../icons/phone.svg'
import chat from '../../icons/chat.svg'
import profile from '../../icons/profile.svg'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
<nav className='sidebar'>
<div className='nav-list'>
<Link to='/'><img src={logo} alt='cps' className='image-logo' /> </Link>
<div className='burger-btn' />
  <ul>
    <li>Ремонт техники</li>
    <li>Услуги и сервисы</li>
    <li>Корпоративным клиентам</li>
    <li>Продавцам техники</li>
    <li>Партнерам</li>
    <li>Производителям</li>
    <li>Наши сервисные центры</li>
    <li>Контакты</li>
  </ul>
</div>
      <div className='contact-details'>
        <a><img src={phone}/></a>
        <a><img src={chat}/></a>
        <a><img src={profile}/></a>
        </div>
        <div className='mail'>
        <p>mail@cps.com</p>
        </div>
        <div className='phonenumber'>
        8 800 890 8900
        </div>
        <div className='languages'>
          <Link className='ru'>RU</Link>
          <Link className='en'>EN</Link>
          <Link className='ch'>CH</Link>
        </div>

</nav>

    </>
  )
}
