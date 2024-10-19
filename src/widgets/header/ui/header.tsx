import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoList}>
        <p>
          <span className={s.logoText}>
            <b>Saphire7</b>
          </span>
          <br />
          <span className={s.saint}>by Saint</span>
        </p>
      </div>
      <a>Main</a>
      <a>Statistics</a>
      <a>Profile</a>
    </header>
  );
};
