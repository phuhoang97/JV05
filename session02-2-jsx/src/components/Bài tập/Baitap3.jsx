import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import SliderPage from "./SliderPage";
import DetailPage from "./DetailPage";
import FooterPage from "./FooterPage";
import ItemProduct from "./ItemProduct";

export default class Baitap3 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, src: "images/p1.png", price: "$120.00" },
        { id: 2, src: "images/p2.png", price: "$110.00" },
        { id: 3, src: "images/p3.png", price: "$150.00" },
        { id: 4, src: "images/p4.png", price: "$150.00" },
        { id: 5, src: "images/p5.png", price: "$150.00" },
        { id: 6, src: "images/p6.png", price: "$150.00" },
        { id: 7, src: "images/p7.png", price: "$150.00" },
        { id: 8, src: "images/p8.png", price: "$150.00" },
        { id: 9, src: "images/p9.png", price: "$150.00" },
        { id: 10, src: "images/p10.png", price: "$150.00" },
        { id: 11, src: "images/p11.png", price: "$150.00" },
        { id: 12, src: "images/p12.png", price: "$150.00" },
      ],
    };
  }
  render() {
    return (
      <>
        <div className='hero_area'>
          {/* header section strats */}
          <HeaderPage />
          {/* end header section */}
          {/* slider section */}
          <SliderPage />
          {/* end slider section */}
        </div>
        {/* detail section */}
        <DetailPage />
        {/* end detail section */}
        {/* products section */}
        <section className='products_section'>
          <div className='heading_container'>
            <h2>New Products In Store</h2>
            <p>Featured Product Just Arrived</p>
          </div>
          <div className='container layout_padding'>
            <div className='product_container'>
              {/* Cách 1 */}
              {/* <ItemProduct src={"images/p1.png"} price={"$120.00"} />
              <ItemProduct src={"images/p2.png"} price={"$110.00"} />
              <ItemProduct src={"images/p3.png"} price={"$120.00"} />
              <ItemProduct src={"images/p4.png"} price={"$150.00"} />
              <ItemProduct src={"images/p5.png"} price={"$150.00"} />
              <ItemProduct src={"images/p6.png"} price={"$150.00"} />
              <ItemProduct src={"images/p7.png"} price={"$150.00"} />
              <ItemProduct src={"images/p8.png"} price={"$150.00"} />
              <ItemProduct src={"images/p9.png"} price={"$150.00"} />
              <ItemProduct src={"images/p10.png"} price={"$150.00"} />
              <ItemProduct src={"images/p11.png"} price={"$150.00"} />
              <ItemProduct src={"images/p12.png"} price={"$150.00"} /> */}

              {/* Cách 2 */}
              {this.state.data.map((e, i) => (
                // console.log(e)
                <ItemProduct key={i} src={e.src} price={e.price} />
              ))}
            </div>
          </div>
        </section>
        {/* end products section */}
        {/* find section */}
        <section className='find_section layout_padding-bottom'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-8 offset-md-2'>
                <div className='find_container'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='find_container-img'>
                        <img src='images/find-img.png' alt='' />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <h3>
                        Find Everything <br />
                        From A to Z
                      </h3>
                      <p>Shop Back to school</p>
                    </div>
                  </div>
                </div>
                <div className='shop_container'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <p>Shoes</p>
                      <h3>Shop by catagories</h3>
                      <div>
                        <a href=''> View More </a>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='shoe_img-box'>
                        <img src='images/shoes.png' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='find_img-box'>
                  <img src='images/find-hero.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end find section */}
        {/* client section */}
        <section className='client_section layout_padding'>
          <div className='container'>
            <h2>What our Customer says</h2>
            <div
              id='carouselExample2Controls'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='row layout_padding2'>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row layout_padding2'>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row layout_padding2'>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#carouselExample2Controls'
                role='button'
                data-slide='prev'
              >
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExample2Controls'
                role='button'
                data-slide='next'
              >
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </div>
          <div className='container'>
            <div className='item_container'>
              <div className='row'>
                <div className='col-sm-7'>
                  <h3>Best offers on any makeup items</h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical
                  </p>
                  <div>
                    <a href=''> Shop Now </a>
                  </div>
                </div>
                <div className='col-sm-5'>
                  <div className='item_img-box'>
                    <img src='images/items.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end client section */}
        {/* sign section */}
        <FooterPage />
        {/* footer section */}
      </>
    );
  }
}
