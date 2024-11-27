import './Pages.css'
import { Link } from 'react-router-dom'
export default function Pages() {
    return (
        <>

            <div className='upper-page'>
                <div className='custom-link'>
                    <a to=''>Ремонтируемые бренды</a>
                </div>
                <div className='custom-link'>
                    <a href=''>Дополнительные услуги</a>
                </div>
                <div className='custom-link'>
                    <a href=''>Цены на услуги</a>
                </div>
                <div className='custom-link'>
                    <a href=''>Адреса сервисных центров</a>
                </div>
                <div className='custom-link'>
                <a href=''>Специальные цены</a>
                </div>
            </div>
            <div className='last-element'>
                <a href=''>Отзывы</a>
                </div>
        </>
    )
}

