import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../widgets/Card/Card';
import { TitleMain } from '../../ui/TitleMain/TitleMain';
import { data } from '../../../mock/dataAll';
import { filterCategory, getSelectedCategory } from '../../../redux/filterSlice';

import './style.css'
import { filterSearch, getSearch } from '../../../redux/searchSlice';
import { EmptyGood } from './EmptyGood';

const options = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price-asc', label: 'По возрастанию цены' },
  { value: 'price-desc', label: 'По убыванию цены' },
];

let sortArray = []

export function Shop() {  
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  const selectedCategory = useSelector(getSelectedCategory);
  const search = useSelector(getSearch);

  const goods = data.filter((good)=> selectedCategory === 'all' ? data : good.type === selectedCategory)
  const goodsSearch = data.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()));
  const [dataArray, setDataArray] = useState(search ? goodsSearch : goods);
  const countSearchGoods = goodsSearch.length === 0 && search.length > 0;
  const [page, setPage] = useState(true);
  
  const filterOption = (newValue) => {
    dispatch(filterSearch(''))
    setSelectedOption(newValue.value);
    setPage(!page)
    
    if (newValue.value === 'popular') {
      sortArray = dataArray.sort((function(a, b) {
        if (a.popular < b.popular) {
          return 1;
        }
        if (a.popular > b.popular) { 
          return -1;
        }
        return 0;
      }));
      const array = sortArray.filter((good)=> selectedCategory === 'all' ? array : good.type === selectedCategory)
      setDataArray(array);
    }
    else if (newValue.value === 'price-asc') {
      sortArray = dataArray.sort((function(a, b) {
          return a.price - b.price;
      }))

      const array = sortArray.filter((good)=> selectedCategory === 'all' ? array : good.type === selectedCategory)
      setDataArray(array);

    } else if (newValue.value === 'price-desc') {      
      sortArray = dataArray.sort((function(a, b) {
          return b.price - a.price;
      }))

      const array = sortArray.filter((good)=> selectedCategory === 'all' ? array : good.type === selectedCategory)
      setDataArray(array);
    }
  } 

  const onChangeValueRadio = (e) => {
    dispatch(filterCategory(e.target.value))
    dispatch(filterSearch(''))

    if (e.target.value === 'all') {
      setDataArray(data);
      setPage(!page);
      return dataArray 
    } else {
        setDataArray(data.filter(item => item.type === e.target.value));
        setPage(!page);
        return dataArray      
    }
    
  }

  const handleClick = () => {    
    if (countSearchGoods) {
      dispatch(filterSearch(''))
    }
    setDataArray(data)
  }

  useEffect(()=>{
    setDataArray(goodsSearch)
  }, [search])
  
  return(
    <section className={`section`}>
      <TitleMain text="Каталог" />
      <form className="filter">
        <fieldset>
          <input className="visually-hidden" onChange={onChangeValueRadio} type="radio" name="radio" id="all" value="all" checked={selectedCategory === "all" ? true : false}/>
          <label htmlFor="all">Все товары</label>
          <input className="visually-hidden"  onChange={onChangeValueRadio} type="radio" name="radio" id="soup" value="soap" checked={selectedCategory === "soap" ? true : false}/>
          <label htmlFor="soup">Мыло</label>
          <input className="visually-hidden" onChange={onChangeValueRadio} type="radio" name="radio" id="bath-bomb" value="bath-bomb" checked={selectedCategory === "bath-bomb" ? true : false}/>
          <label htmlFor="bath-bomb">Бомбы для ванны</label>
          <input className="visually-hidden" onChange={onChangeValueRadio} type="radio" name="radio" id="scrub" value="scrub" checked={selectedCategory === "scrub" ? true : false}/>
          <label htmlFor="scrub">Скраб для тела</label>
        </fieldset>      
        <fieldset className="filter__select">
          <label>Сортировать по:</label>
          <Select
            classNamePrefix='custom-select'
            defaultValue={selectedOption}
            onChange={filterOption}
            options={options} 
            placeholder="Выбрать фильтр"
          />
        </fieldset>
      </form>
      {countSearchGoods ? <EmptyGood handleClick = {handleClick}/> : 
        <Card className="filter__cards" arrayData={ dataArray } numberCards={12} page = {page} />
      }      
    </section>
  )
}