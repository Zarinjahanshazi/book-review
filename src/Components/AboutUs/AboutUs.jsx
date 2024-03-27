

const AboutUs = () => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-4xl mb-10 font-semibold">About Us</h2>

            <div>
            <div className="carousel w-full h-full rounded-2xl">
            <div id="item1" className="carousel-item w-full">
                <img src="https://i.ibb.co/gPRXDbZ/scriptures-candles-wooden-table.jpg" className="w-full h-full" />
            </div> 
            <div id="item2" className="carousel-item w-full">
                <img src="https://i.ibb.co/mhFFHvY/open-book-with-fairytale-scene.jpg" className="w-full h-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
                <img src="https://i.ibb.co/gPRXDbZ/scriptures-candles-wooden-table.jpg" className="w-full h-full" />
            </div> 
            <div id="item4" className="carousel-item w-full">
                <img src="https://i.ibb.co/mhFFHvY/open-book-with-fairytale-scene.jpg" className="w-full h-full" />
            </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
            </div>
            </div>

            <p className="text-xl text-black">Book Vibe is a haven for book lovers, offering a curated collection of diverse literature to satisfy every reader's taste. Nestled in a cozy corner, our store exudes an inviting atmosphere, welcoming customers to explore shelves adorned with literary gems spanning various genres and authors. From timeless classics to contemporary bestsellers, we aim to ignite the passion for reading in all visitors. Our knowledgeable staff provides personalized recommendations, fostering a sense of community and connection among book enthusiasts. With regular author events and book clubs, Book Vibe is more than a bookstore; its a vibrant hub where stories come alive and imaginations thrive.</p>
            
        </div>
    );
};

export default AboutUs;