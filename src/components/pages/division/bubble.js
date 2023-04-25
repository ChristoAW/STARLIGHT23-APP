import style from './bubble.module.css';
import { PageTitle } from '@/components/styles';

export default function bubble(props) {
  console.log(props);
  return (
    <div className={style.c}>
      <div className={style.drop}>
        <div className={style.textCont}>
          <PageTitle>{props.selectedDivisi.name}</PageTitle>
        </div>
      </div>
    </div>
  );
}

// https://blog.avada.io/css/water-effects#wobbly-water-effect
// https://codepen.io/prathkum/pen/gOmboMm
// https://www.youtube.com/watch?v=0NhwQds08yQ&ab_channel=OnlineTutorials
