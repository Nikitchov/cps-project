import { Link } from 'react-router-dom'
import './Article.css';
import arrowIcon from '../../icons/arrow.png'; 
import cpsImage from '../../images/cps.png'; 
 
export default function Article() {
    return (
        <>
         <div className='news'>
            <div className='paragraph'>
             <p>Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p>
            <p>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>
            <div className='next'>
<img src={arrowIcon} alt='arrow' className='arrow-icon'/>
            <Link to='/' className='read-next'>
                Читать далее
            </Link>
            </div>
            </div>
            <img src={cpsImage} alt='cps' className='image-article' />
            </div>
          
        </>
    )
}
