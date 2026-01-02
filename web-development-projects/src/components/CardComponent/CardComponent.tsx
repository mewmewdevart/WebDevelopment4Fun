import './CardComponent.css';

interface CardComponentProps {
  name: string;
  number: number;
  imagePath: string;
  description: string;
  url: string;
  tags?: string[]; 
  badgeText?: string;
  onClickAction?: () => void;
}

export const CardComponent = ({
  name,
  description,
  imagePath,
  url,
  number,
  badgeText,
  onClickAction,
}: CardComponentProps) => {
  return (
    <article className="card">
      <span className="card__index">{number}</span>
      
      {badgeText && <span className="card__badge">{badgeText}</span>}

      <img
        className="card__image"
        src={imagePath}
        alt={`Preview of ${name}`}
        loading="lazy"
      />

      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <p className="card__description">{description}</p>
      </div>

      {onClickAction ? (
        <button
          className="card__action"
          type="button"
          onClick={onClickAction}
        >
          Show me!
        </button>
      ) : (
        <a
          className="card__action"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show me!
        </a>
      )}
    </article>
  );
};