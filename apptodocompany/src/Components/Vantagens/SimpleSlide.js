import SimpleImageSlider from "react-simple-image-slider";
import Slide1 from "../../assets/slide/slide1.jpg"
import Slide2 from "../../assets/slide/slide2.jpg"
import Slide3 from "../../assets/slide/slide3.jpg"
import Slide4 from "../../assets/slide/slide4.jpg"

const images = [
    { url: Slide1 },
    { url: Slide2 },
    { url: Slide3 },
    { url: Slide4 },
];

const Slide = () => {
    return (
        <div>
            <SimpleImageSlider
                width={400}
                height={400}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                onClick={true}

            />
        </div>
    );
}
export default Slide