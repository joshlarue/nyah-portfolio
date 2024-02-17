export default function PortfolioBox(props) {
  return (
    <>
      <div className="port-box-wrapper">
        <div className="port-img-wrapper">
          <img src={props.imgsrc} alt={props.imgalt} />
        </div>
        <div className="port-body">
          <h3 className="port-header">{props.header}</h3>
          <p className="port-desc">{props.desc}</p>
        </div>
      </div>
    </>
  )

}