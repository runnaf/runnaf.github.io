import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { InputMask } from 'primereact/inputmask';
import { OrderItem } from '../../widgets/OrderItem/OrderItem';
import { getCartItems } from '../../../redux/cartSlice';
import { Title } from '../../ui/Title/Title';
import { EmptyCart } from '../../widgets/сart/EmptyCart';
import { Error404 } from '../Error/Error404';

import './style.css';

export function Order() {
  const goods = useSelector(getCartItems);
  const [value, setValue] = useState('375');
  const [data, setData] = useState(true)
   
  function chengeValue(event) {
    setValue(event.target.value);
  }

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: "onBlur"
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data));
    localStorage.setItem('user', JSON.stringify(data))
    localStorage.setItem('goods', JSON.stringify(goods))
    reset()
     setData(!data)
  }

  const totalPrice = Number(value) + goods.reduce((total, good) => {
    return good.totalPrice + total
  }, 0)

  return data ? 
    <section className="section">
      <Title text={'Оформление заказа'} />
      {goods.length === 0 ? 
      <EmptyCart /> : (
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <fieldset>
          <OrderItem goods={goods}/>
        </fieldset>
        <fieldset className='form__container'>
          <legend className='form__title'>Заполните Ваши данные</legend>
          <>
            <div className='form__field-container'>
              <input className={`form__field ${isValid ? 'form__field--isValid' : console.log(isValid)}`} type="text" placeholder="*Имя" {...register("firstName", {required: "Поле обязательно к заполнению", minLength: {
                value: 3,
                message: 'Минимум 3 символа'
              }})} />
              {errors?.firstName && <button type='button' className='form__reset-fieid' onClick={()=>reset({firstName: ''})}>
                <span className='visually-hidden'>Удалить содержание поля</span>
              </button>}
              {!isValid?.firstName && <span className='form__field-valid'></span>}
            </div>    
            <div className='form__error-container'>
              {errors?.firstName && <p className='form__error-message'>{errors?.firstName?.message || "Error!"}</p>}
            </div>
          </>
          <>
            <div className='form__field-container'>
              <input className='form__field' type="text" placeholder="*Фамилия" {...register("lastName", {required: "Поле обязательно к заполнению", minLength: {
                value: 6,
                message: 'Минимум 6 символов'
              }})} />
              {errors?.lastName && <button type='button' className='form__reset-fieid' onClick={()=>reset({lastName: ''})}>
                <span className='visually-hidden'>Удалить содержание поля</span>
              </button>}
              {!errors?.lastName && <span className='form__field-valid'></span>}
            </div>      
            <div className='form__error-container'>
              {errors?.lastName && <p className='form__error-message'>{errors?.lastName?.message || "Error!"}</p>}
            </div>
          </>
          <>
            <div className='form__field-container'>
              <input className='form__field' type="text" placeholder="*Email" {...register("Email", {required: "Поле обязательно к заполнению", pattern: {
                value: /^\S+@\S+$/i,
                message: "неправильный формат е-майл адреса"
              } })} />
              {errors?.Email && <button type='button' className='form__reset-fieid' onClick={()=>reset({Email: ''})}>
                <span className='visually-hidden'>Удалить содержание поля</span>
              </button>}
              {!errors?.Email && <span className='form__field-valid'></span>}
            </div>
            <div className='form__error-container'>
              {errors?.Email && <p className='form__error-message'>{errors?.Email?.message || "Error!"}</p>}
            </div>
          </>
          <>
            <div className='form__field-container'>
              <InputMask className='form__field' mask="+7(999) 999 99 99" placeholder="Телефон" {...register("phone")}/>
            </div>  
            <div className='form__error-container'>
              {errors?.phone && <p className='form__error-message'>{errors?.phone?.message || "Error!"}</p>}
            </div>
          </>
          <>
            <div className='form__field-container'>
              <input className='form__field' type="text" name="adress" placeholder="*Улица, номер дома и квартиры" {...register("adress", {required: "Поле обязательно к заполнению", minLength: {
                value: 6,
                message: 'Минимум 6 символов'
              }})}/>
              {errors?.adress && <button type='button' className='form__reset-fieid' onClick={()=>reset({adress: ''})}>
                <span className='visually-hidden'>Удалить содержание поля</span>
              </button>}
              {!errors?.adress && <span className='form__field-valid'></span>}
            </div>      
            <div className='form__error-container'>
              {errors?.adress && <p className='form__error-message'>{errors?.adress?.message || "Error!"}</p>}
            </div>
          </>
          <>
            <div className='form__field-container'>
              <input className='form__field' type="text" name="city" placeholder="*Город" {...register("city", {required: "Поле обязательно к заполнению", minLength: {
                value: 3,
                message: 'Минимум 3 символа'
              }})}/>
              {errors?.city && <button type='button' className='form__reset-fieid' onClick={()=>reset({city: ''})}>
                <span className='visually-hidden'>Удалить содержание поля</span>
              </button>}
              {!errors?.city && <span className='form__field-valid'></span>}
            </div>      
            <div className='form__error-container'>
              {errors?.city && <p className='form__error-message'>{errors?.city?.message || "Error!"}</p>}
            </div>
          </>
          <>
            <div className='form__field-container'>
              <input className='form__field' type="text" placeholder="*Индекс" {...register("index", {required: "Поле обязательно к заполнению",pattern: {
                value: /^\d+$/,
                message: "Индекс может состоять только из цифр"
                }, minLength: {
                value: 6,
                message: "Индекс может состоять только из 6 цифр"
                },
                maxLength: {
                value: 6,
                message: 'Индекс может состоять только из 6 цифр'
                }})} />
              {errors?.index && <button type='button' className='form__reset-fieid' onClick={()=>reset({index: ''})}>
                <span className='visually-hidden'>Удалить содержание поля</span>
              </button>}
              {!errors?.index && <span className='form__field-valid'></span>}
            </div>      
            <div className='form__error-container'>
              {errors?.index && <p className='form__error-message'>{errors?.index?.message || "Error!"}</p>}
            </div>
          </>
          <textarea className="form__textarea" placeholder='Комментарий к заказу'/>
          <p>* Поля, обязательные для заполнения</p>
        </fieldset>
        <fieldset>
          <legend>Выберите способ доставки</legend>
          <label htmlFor="field-post" className="custom-radio">
            <input {...register("375")} type="radio" value="375" id="field-post" checked={value === '375' ? true : false}
              onChange={(e)=>chengeValue(e)} />
            <div className='form__post-container'>
              <span>Почта России</span>
              <p className='form__post-price'>375 руб.</p>
            </div>            
          </label>
          <label htmlFor="field-SDEK" className="custom-radio">
            <input {...register("450")} type="radio" value="450" id="field-SDEK" checked={value === '450' ? true : false}
              onChange={(e)=>chengeValue(e)} />
            <div className='form__post-container'>
              <span>СДЭК</span>
              <p className='form__post-price'>450 руб.</p>
            </div>
          </label>
        </fieldset>
        <p className='form__total-price'>Итоговая сумма к оплате: <span>{totalPrice} руб.</span></p>
        <input className='form__submit' type="submit" disabled={!isValid} value="Перейти к оплате"/>
      </form>)}   
    </section> : 
    <Error404></Error404>
}
