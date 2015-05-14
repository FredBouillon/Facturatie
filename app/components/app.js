/** @jsx React.DOM */
var React = require('react');
var Catalog = require('./app-catalog');
var Cart = require('./app-cart.js');
var APP =
    React.createClass({
        render:function(){
            return (
                <div>
                    <h1>Let's shop</h1>
                    <Catalog/>
                    <h1>Cart</h1>
                    <Cart/>
                </div>
            )
        }
    });
module.exports = APP;