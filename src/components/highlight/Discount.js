import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from "../utilities/button";

class Discount extends Component{

    state={
       discountStart:0,
       discountEnds:30
    };

    porcentage = () =>{
        if (this.state.discountStart < this.state.discountEnds){
            this.setState({
                discountStart:this.state.discountStart + 1
            });
        }
    };

    componentDidUpdate(){
            setTimeout(()=>{
                this.porcentage()
            },30)
    }

    render(){
        return(
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=>this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th June</h3>
                            <p>Viverra vitae congue eu consequat.
                                Porta non pulvinar neque laoreet.
                                Eu ultrices vitae auctor eu augue ut.
                                Gravida cum sociis natoque penatibus et magnis dis.
                                Eget sit amet tellus cras adipiscing enim eu turpis.
                                Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.
                                Aenean sed adipiscing diam donec adipiscing.
                            </p>

                               <MyButton
                                    text="Purchase tickets"
                                    bck="#ffa800"
                                    color="#ffffff"
                                    link="https://www.google.com"
                               />

                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;