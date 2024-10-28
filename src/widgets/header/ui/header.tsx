import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <p>
        <span className={s.logoText}>
          <b>Saphire7</b>
        </span>
        <br />
        <span className={s.saint}>by Saint</span>
      </p>
    </header>
  );
};
