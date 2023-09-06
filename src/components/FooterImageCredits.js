function FooterImageCredits({theme}){
    return (
        <div className={theme === "light" ? "" : "text-info" }>
            <footer class="page-footer font-small teal pt-4">

                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase font-weight-bold">Image Credits</h5>
                        <ul>
                            <li><a href="https://www.freepik.com/free-photo/fashion-little-boy_40058952.htm#query=cartoon&position=0&from_view=search&track=sph#position=0&query=cartoon">Image by sara_guerra on Freepik</a></li>
                            <li><a href="https://www.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_40058975.htm#query=cartoon&position=1&from_view=search&track=sph">Image by sara_guerra</a> on Freepik</li>
                            <li><a href="https://www.freepik.com/free-photo/fun-illustration-3d-cartoon-backpacker_14201200.htm#query=cartoon&position=7&from_view=search&track=sph">Image by julos</a> on Freepik</li>
                        </ul>
                        </div>

                        <hr class="clearfix w-100 d-md-none pb-3" />

                        <div class="col-md-6 mb-md-0 mb-3">

                        <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
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