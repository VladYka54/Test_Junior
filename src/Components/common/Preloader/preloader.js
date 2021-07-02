//styles
import style from "../../../navigation/App.module.css";

let Preloader = (props) => {
  return (
    <div className={style.preloader}>
      <div className={style.load_wrapp}>
        <div className={style.load_3}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
