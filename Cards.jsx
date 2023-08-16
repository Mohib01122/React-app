import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Cards(props){
    return(
    <>
        <div className="menu-items container-fluid mt-5">
            <div className="row">
                
                <div className="col-11 max-auto">
                    <div className="row my-3">
                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-2">
                            <div className="row Item-inside">
                                <div className="card">
                                <div className="col-12 col-md-12 col-lg-2 img-div">
                                <img src={props.avatar}  alt="pics"/>
                                </div>
                                <div className="col-12 col-md-12 col-lg-8">
                                    <div className="main-title pt-4 pb-3">
                                    <span className="title">{props.first_name}</span>
                                        <h6 className="name">{props.last_name}</h6>
                                        <a href={props.email}  rel="noopener noreferrer">
                    
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>
    );
}
export default Cards;

<div className="cards" style={{ width: '18rem' }}>
        <div className="card">
           
            <div className="category">
                
            </div>
        </div>
    </div>