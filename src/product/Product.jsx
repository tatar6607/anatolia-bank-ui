import React from "react";

const Product = () => {
  return (
    <div>
      <h1>Product Komponent</h1>
    </div>
  );
};

export default Product;
import React, { useState } from 'react';
import "./Product.css";
import Gold01 from "../images/card/Gold01.jpeg";
import Platinum01 from "../images/card/Platinum01.jpeg";
import Silver01 from "../images/card/Silver01.jpeg";
import { Image, Breadcrumb, Nav } from 'react-bootstrap';
import { List, Icon } from 'semantic-ui-react'

  const Product = () => {     
  return (  
  <div className="pro-ana">
    <div className="pro-header">Anatolia Cards</div>
    <div className="pro-div first">
                   
      <div className= "pro-list">
        <List link className="list" >            
          <div className="list-btn">
            <p>
              <Icon className="icn1" name="angle right"></Icon> 
              Gold Cards
              </p>     
          </div> 
           <Image src={Gold01} alt="" className="pic-4" /><Image></Image>
          <div className="list-btn">
            <p>Business Card
              <Icon name="angle right"></Icon> 
              </p>     
          </div> 
          <div className="list-btn">
            <p>Anatolia Express Card
              <Icon name="angle right"></Icon> 
              </p>     
          </div> 
          <div className="list-btn">
            <p>Secured Card
              <Icon name="angle right"></Icon> 
              </p>     
          </div> 
          <div className="list-btn">
            <p>Infinite Card
              <Icon name="angle right"></Icon> 
              </p>     
          </div>
          <div className="d-text">            
              <h3 className="head1">Gold Cards:</h3>
              <p className="text">
              Enjoy a 0% Intro APR on purchases and balance transfers for the first 12 billing cycles. After that, a variable APR applies. $95/year thereafter.
                <Breadcrumb.Item  className="details" href="{Cards}">Details</Breadcrumb.Item>
            </p>            
          </div>                
        </List> 
      </div>        
    </div>
    
    <div className="pro-div second">
      <div className= "pro-list">
          <List link className="list">
        <div className="list-btn">
          <p>
            <Icon className="icn1" name="angle right" ></Icon> 
            Platinum Cards
          </p>     
        </div>     
          <Image src={Platinum01} alt="" className="pic-4" /><Image></Image>
        <div className="list-btn">
          <p>Cash+ Card
            <Icon className="angle" name="angle right"></Icon> 
          </p>     
        </div> 
        <div className="list-btn">
          <p>Shop & Fly Card
            <Icon className="angle" name="angle right"></Icon> 
          </p>     
        </div>         
        <div className="d-text">            
              <h3 className="head1">Platinum Cards:</h3>
              <p className="text">
              For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening. <br />
              Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.
                <Breadcrumb.Item  className="details" href="{Cards}">Details</Breadcrumb.Item>
            </p>            
          </div>       
          </List> 
        </div>       
    </div>

    <div className="pro-div third">            
      <div className= "pro-list">
        <List link className="list" >   
        
        <div className="list-btn">
          <p>
            <Icon className="icn1" name="angle right" ></Icon> 
            Silver Cards
          </p>     
        </div>     
            <Image src={Silver01} alt="" className="pic-4" /><Image></Image>  
        <div className="list-btn">
          <p>Anatolia Travel Card
            <Icon className="icon" name="angle right"></Icon> 
          </p>     
        </div>     
        <div className="list-btn">
          <p>Student Cash Back Credit Card
            <Icon className="angle" name="angle right"></Icon> 
          </p>     
        </div>          
        <div className="d-text">            
              <h3 className="head1">Silver Cards:</h3>
              <p className="text">
              For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening. <br />
              Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.
                <Breadcrumb.Item  className="details" href="{Cards}">Details</Breadcrumb.Item>
            </p>            
          </div>                
          </List> 
        </div> 
    </div>
  </div> 

  );
}

export default Product;