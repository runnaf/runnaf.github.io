import { TitleMain } from '../../ui/TitleMain/TitleMain';
import { BlogItem } from '../../widgets/Blog/BlogItem';

import './style.css';

export function Blog() {
  return(
    <section className="section blog">
      <TitleMain text="Блог" />
      <BlogItem />
    </section>
  )
}