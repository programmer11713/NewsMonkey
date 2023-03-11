export default function NewsItem(props) {
  let { title, description, url, urlToImage, sourceID, date, by } = props;
  let convertedDate = new Date(date);
  return (
    <div className="news-item">
      <span class="source-name">{by}</span>
      <img
        src={
          urlToImage
            ? urlToImage
            : "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg"
        }
        alt={sourceID}
      />
      <div className="news-content">
        <h3 className="news-heading">{title}...</h3>
        <p className="news-description">{description}...</p>
        <p className="news-published"><b>Published:</b> {convertedDate.getDate() + '-' + convertedDate.getMonth() + '-' + convertedDate.getFullYear()} (IST)</p>
        <a href={url} target="_blank" rel="noreferrer">
          <button class="btn btn-primary" id="news-item-button">
            Read More...
          </button>
        </a>
      </div>
    </div>
  );
}
