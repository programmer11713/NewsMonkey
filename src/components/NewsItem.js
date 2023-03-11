export default function NewsItem(props) {
  let { title, description, url, urlToImage, sourceID, date } = props;
  let convertedDate = new Date(date);
  return (
    <div className="news-item">
      <img
        src={
          !urlToImage
            ? "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg"
            : urlToImage
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
