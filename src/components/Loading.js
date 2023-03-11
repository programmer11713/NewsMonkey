import loading from './loading.gif';

export default function Loading() {
  return (
    <>
      <div className="loading-container">
        <img src={loading} alt="Loading..."/>  
      </div>
    </>
  )
}