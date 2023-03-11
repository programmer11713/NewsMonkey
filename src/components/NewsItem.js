export default function NewsItem(props) {
  let { title, description, url, urlToImage, sourceID } = props;
  return (
    <div className="news-item">
      <img
        src={
          !urlToImage
            ? "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            : urlToImage
        }
        alt={sourceID}
      />
      <div className="news-content">
        <h3 className="news-heading">{title}...</h3>
        <p className="news-description">{description}...</p>
        <a href={url} target="_blank" rel="noreferrer">
          <button class="btn btn-primary" id="news-item-button">Read More...</button>
        </a>
      </div>
    </div>
  );
}
