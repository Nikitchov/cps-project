import { Link } from 'react-router-dom'
import './Header.css';
import repair from '../../icons/repair.svg'
import checkstatus from '../../icons/checkstatus.svg'
export default function Header() {
  return (
    <>
        <div className='upper-navbar'>
            <div className='header'>
                Услуги и сервисы
            </div>
            <div className='buttons-navbar'>
                <div className='request'>
                <Link to='/request'>Оставить заявку</Link>
                <img src={repair} className='repair'/>
                </div>
                
            <div className='repair-status'>
              <div className='checkstatus'>
                <Link to='/repair-status'>Статус ремонта</Link>
                <img src={checkstatus} className='checkstatus'/>
</div>
            </div>
            </div>
            </div>
    </>
  )
}
