import images from '../../backend/images.js';
export default function Brands() {
  return (
    <div>
      <div className='heading-2'>Ремонт техники различных брендов</div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.src} alt={image.alt} style={{ width: '200px', height: 'auto' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};