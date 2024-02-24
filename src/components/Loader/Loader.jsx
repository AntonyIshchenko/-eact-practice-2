import style from './Loader.module.css';
import PuffLoader from 'react-spinners/PuffLoader';

export const Loader = () => {
  return (
    <div className={style.backdrop}>
      <PuffLoader color="#36d7b7" />
    </div>
  );
};
