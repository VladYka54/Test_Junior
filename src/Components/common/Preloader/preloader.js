import preloader from "./../../../assets/images/preloader.gif";
import style from "../../../App.module.css";
let Preloader = (props) => {
  return (
    <div className={style.preloader}>
      <img  alt="rounded" src={preloader} />
    </div>
  );
};

export default Preloader;
