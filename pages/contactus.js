import Head from 'next/head'


const contactus = () => {
    return (
        <>
            <Head>
                <title>contactus</title>
            </Head>

            <h1>Contact Us</h1>
            <p className='sub-title'>Any questions or remarks? Just write us a message!</p>
            <div id="contact-container">
                <div className="contact-info">
                <h4>
                    Contact Information
                </h4>
                 <p>Fill the form and our team will get back to you within 24 hours</p>
                    <div className="icon-text">
                     <i class="fa fa-phone" aria-hidden="true"></i>
                        <span>91-9448388572</span>
                    </div>
                    <div className="icon-text">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <span>admin@ownacar.in</span>
                    </div>
                    <div className="icon-text">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span>247, 4th Main Road, Domlur 2nd Stage,Bengaluru, Karnataka</span>
                    </div>
                    <div className='social-media'>
                        <a href="https://www.facebook.com/ownacar.in/" className='icon-circle'>
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com/OwnacarIndia" className='icon-circle'>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/ownacar.in/" className='icon-circle'>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="https://in.linkedin.com/company/ownacar" className='icon-circle'>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                    <form>
                        <div className='col'>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-group">
                                <label>E-Mail</label>
                                <input type="email"/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel"/>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-group solo">
                                <label>Message</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-group solo right">
                                <button className='primary'>Send Message</button>
                            </div>
                        </div>
                    </form>
            </div>


        </>
    )
}

export default contactus    