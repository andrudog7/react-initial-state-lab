// your ImageSlider code here!
import React from 'react' 

class ImageSlider extends React.Component{
    constructor(props) {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    render() {
        let CURRENT_SLIDE = this.state.currentSlideIndex
        return (
            <div>I am on slide {CURRENT_SLIDE}</div>
            )
    }
}

export default ImageSlider