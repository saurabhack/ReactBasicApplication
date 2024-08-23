function Footer() {
    return (
      <div className="h-[50vh] w-[100vw] bg-gray-700 flex flex-row space-x-40 p-10">
        <div className="flex flex-col space-y-5">
          <h1 className="text-white text-3xl">Important Links</h1>
          <p className="text-white text-xl">Home</p>
          <p className="text-white text-xl">About Us</p>
          <p className="text-white text-xl">Contact Us</p>
          <p className="text-white text-xl">Our Products</p>
          <p className="text-white text-xl">Our Partners</p>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-white text-3xl">Branches</h1>
          <p className="text-white text-xl">Delhi</p>
          <p className="text-white text-xl">Mumbai</p>
          <p className="text-white text-xl">Pune</p>
          <p className="text-white text-xl">Satara</p>
          <p className="text-white text-xl">Karad</p>
        </div>
        <div className="flex items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30166.570890981668!2d72.8633212754935!3d19.071590266891576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c89a5efa11d5%3A0x90728ea7729a78f9!2sKurla%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724403206844!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default Footer;
  