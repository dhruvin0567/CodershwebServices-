
import FadeInStagger from '../animation/FadeInStagger'
import VideoSlider from '../common/VideoSlider'

function SolutionTestimonialSlider() {
    return (
        <div>
            <FadeInStagger>
                <div className="review-section text-center pb-5">
                    <div className="container border-top py-5">
                        <div>
                            <h3>Our Client's Reviews</h3>
                            <p>
                                We are very proud of the service we provide and stand by every product we carry.
                                See our testimonials from our happy customers.
                            </p>
                        </div>
                        <VideoSlider />
                    </div>
                </div>
            </FadeInStagger>
        </div>
    )
}

export default SolutionTestimonialSlider