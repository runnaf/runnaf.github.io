import { Best } from '../../widgets/Best/Best';
import { Category } from '../../ui/Category/Category';
import { Popular } from '../../widgets/Popular/Popular';
import { Preview } from '../../widgets/Preview/Preview';


export function Home () {
  return(
    <div>
      <Preview className="section" />
      <Category className="section"/>
      <Popular className="section"/>
      <Best className="section"/>
    </div>
  )
}
