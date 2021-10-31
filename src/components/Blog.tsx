import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { BlogItem } from './BlogItem';

import BlogImg1 from '../assets/images/blog_image_1.svg';
import BlogImg2 from '../assets/images/bloco_image_2.svg';
import BlogImg3 from '../assets/images/bloco_image_3.svg';
import BlogImg4 from '../assets/images/bloco_image_4.svg';

import '../styles/blog.css';

export function Blog(){
    return(
        <div className="blog-content">
            <div className="header-blog">
                <h1 className="title-blog">Read Our Blog</h1>
                <p className="description-blog">
                    Far far away, behind the word mountains,  
                    far from the countries Vokalia and Consonantia, 
                    there live the blind texts.
                </p>
            </div>
            <div className="body-blog">
                <Carousel
                    centerMode={true}
                    width={'98vw'}
                    centerSlidePercentage={window.innerWidth >= 1024 ? 32 : 100}
                    showIndicators={false}
                    showStatus={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label} className="arrowStyles" style={{ left: 15 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} className="arrowStyles" style={{ right: 15 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </button>
                        )
                    }
                >
                    <BlogItem 
                        imageUrl={BlogImg1} 
                        title="Quick-start guide to nuts and seeds" 
                        userName="Kevin Ibrahim" 
                    />

                    <BlogItem 
                        imageUrl={BlogImg2} 
                        title="Nutrition: Tips for Improving Your Health" 
                        userName="Mike Jackson" 
                    />
                    <BlogItem 
                        imageUrl={BlogImg3} 
                        title="The top 10 benefits of eating healthy" 
                        userName="Bryan McGregor" 
                    />
                    <BlogItem 
                        imageUrl={BlogImg4} 
                        title="What Makes a Healthy Diet?" 
                        userName="Jashua" 
                    />
                </Carousel>
            </div>
        </div>
    )
}