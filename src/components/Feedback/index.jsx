
export const Feedback = () => {
  return (
    <div>

<form>
  <h1>Обратная связь</h1>
    <input type='text' name='name' placeholder='Имя'/>
    <input type='tel' name='phone' placeholder='Телефон' />
    <input type='email' name='email' placeholder='Электронная почта' />
    <textarea name='message' placeholder='Сообщение' />
    
    <button>Отправить</button>
     
</form>

    </div>
  )
}
