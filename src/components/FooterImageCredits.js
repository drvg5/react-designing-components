function FooterImageCredits({theme}){
    return (
        <div className={theme === "light" ? "" : "text-info" }>
            <footer className="page-footer font-small teal pt-4">

                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase font-weight-bold">Image Credits</h5>
                        <ul>
                            <li>Image by sara_guerra on Freepik</li>
                            <li>Image by sara_guerra on julos on Freepik</li>
                        </ul>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-6 mb-md-0 mb-3">

                        <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
                                commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
                                excepturi hic.</p>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default FooterImageCredits;