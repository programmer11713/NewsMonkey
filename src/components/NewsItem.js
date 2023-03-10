export default function NewsItem(props) {
  let { title, description, url, urlToImage, sourceID } = props;
  return (
    <div className="news-item">
      <img
        src={
          !urlToImage
            ? "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg"
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
