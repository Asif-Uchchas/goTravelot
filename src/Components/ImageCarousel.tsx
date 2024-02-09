import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface ImageCarouselProps {}

interface ImageCarouselState {}

export default class ImageCarousel extends Component<ImageCarouselProps, ImageCarouselState> {
	render() {
		return (
			<div>
				<Carousel>
					<div>
						<img src="/img1.png" alt="image1" />
						<p className="legend">Image 1</p>
					</div>
					<div>
						<img src="/img2.png" alt="image2" />
						<p className="legend">Image 2</p>
					</div>
					<div>
						<img src="/img3.png" alt="image3" />
						<p className="legend">Image 3</p>
					</div>
					
				</Carousel>
			</div>
		);
	}
}
